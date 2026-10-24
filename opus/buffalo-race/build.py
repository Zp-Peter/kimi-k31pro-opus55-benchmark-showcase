#!/usr/bin/env python3
"""Bundle src/*.js (ES modules) into one inline module script.

Each local module becomes an IIFE that returns the names other modules import from it,
so top-level helpers with the same name in different files never collide. `three` stays
an import-map import. Writes:
  index.html          full document for local testing (python3 -m http.server)
  dist/artifact.html  page fragment for publishing (no doctype/html/head/body)
"""
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"
IMPORT_RE = re.compile(r"^import\s+(.+?)\s+from\s+['\"]([^'\"]+)['\"];?[ \t]*$", re.M | re.S)
CJK_RE = re.compile(r"[　-〿一-鿿＀-￯]")


def var_name(path):
    return "__m_" + re.sub(r"\W", "_", path.stem)


def parse_spec(spec):
    spec = spec.strip()
    m = re.fullmatch(r"\*\s+as\s+(\w+)", spec)
    if m:
        return ("ns", m.group(1))
    m = re.fullmatch(r"\{([^}]*)\}", spec, re.S)
    if m:
        pairs = []
        for part in m.group(1).split(","):
            part = part.strip()
            if not part:
                continue
            bits = re.split(r"\s+as\s+", part)
            pairs.append((bits[0].strip(), (bits[1] if len(bits) > 1 else bits[0]).strip()))
        return ("named", pairs)
    sys.exit(f"unsupported import form: {spec!r}")


def load(path, mods, order, stack=()):
    if path in mods:
        return
    if path in stack:
        sys.exit(f"import cycle through {path.name}")
    code = path.read_text(encoding="utf-8")
    imports = []
    for m in IMPORT_RE.finditer(code):
        kind, names = parse_spec(m.group(1))
        src = m.group(2)
        target = None if src == "three" else (path.parent / src).resolve()
        imports.append((m.group(0), kind, names, target))
        if target is not None:
            if not target.exists():
                sys.exit(f"{path.name}: missing module {src}")
            load(target, mods, order, stack + (path,))
    mods[path] = {"code": code, "imports": imports}
    order.append(path)


def main():
    entry = (SRC / "main.js").resolve()
    mods, order = {}, []
    load(entry, mods, order)

    wanted = {p: set() for p in order}
    for p in order:
        for _, kind, names, target in mods[p]["imports"]:
            if target is None:
                continue
            if kind == "ns":
                sys.exit(f"{p.name}: namespace import of local module {target.name} not supported")
            for orig, _alias in names:
                wanted[target].add(orig)

    chars = set()
    for f in list(SRC.glob("*.js")) + [ROOT / "shell.html"]:
        chars.update(CJK_RE.findall(f.read_text(encoding="utf-8")))
    cjk = "".join(sorted(chars))

    out = ["import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';"]
    for p in order:
        code = mods[p]["code"]
        for stmt, kind, names, target in mods[p]["imports"]:
            if target is None:
                repl = "" if kind == "ns" and names == "THREE" else (
                    f"const {{ {', '.join(o if o == a else f'{o}: {a}' for o, a in names)} }} = THREE;" if kind == "named" else f"const {names} = THREE;")
            else:
                repl = f"const {{ {', '.join(o if o == a else f'{o}: {a}' for o, a in names)} }} = {var_name(target)};"
            code = code.replace(stmt, repl, 1)
        exported_lines = "\n".join(re.findall(r"^export\s+.*$", code, re.M))
        for name in sorted(wanted[p]):
            if not re.search(rf"\b{re.escape(name)}\b", exported_lines):
                sys.exit(f"{p.name} does not export {name}")
        code = re.sub(r"^export\s+(?=(const|let|var|function|class|async)\b)", "", code, flags=re.M)
        if re.search(r"^export\b", code, re.M):
            sys.exit(f"{p.name}: unsupported export form")
        code = code.replace("'__CJK__'", "'" + cjk + "'")
        ret = ", ".join(sorted(wanted[p]))
        if p == entry:
            out.append(f"// ---- {p.name}\n{{\n{code}\n}}")
        else:
            out.append(f"// ---- {p.name}\nconst {var_name(p)} = (() => {{\n{code}\nreturn {{ {ret} }};\n}})();")
    bundle = "\n".join(out)
    if re.search(r"</script", bundle, re.I):
        sys.exit("bundle contains a closing script tag")
    if shutil.which("node"):
        with tempfile.NamedTemporaryFile("w", suffix=".mjs", delete=False, encoding="utf-8") as tmp:
            tmp.write(bundle)
        res = subprocess.run(["node", "--check", tmp.name], capture_output=True, text=True)
        pathlib.Path(tmp.name).unlink()
        if res.returncode:
            sys.exit("syntax error in bundle:\n" + res.stderr)

    shell = (ROOT / "shell.html").read_text(encoding="utf-8")
    page = shell.replace("/*__BUNDLE__*/", bundle)
    (ROOT / "dist").mkdir(exist_ok=True)
    (ROOT / "dist" / "artifact.html").write_text(page, encoding="utf-8")
    cut = page.index('<div id="stage">')
    doc = ("<!doctype html>\n<html lang=\"zh-CN\">\n<head>\n<meta charset=\"utf-8\">\n"
           "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n"
           + page[:cut] + "</head>\n<body>\n" + page[cut:] + "</body>\n</html>\n")
    (ROOT / "index.html").write_text(doc, encoding="utf-8")
    print(f"bundled {len(order)} modules, {len(bundle) // 1024} KB, {len(cjk)} CJK chars")


if __name__ == "__main__":
    main()
