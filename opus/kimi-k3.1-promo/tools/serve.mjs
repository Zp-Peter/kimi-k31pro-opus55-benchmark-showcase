// Local preview server for the real-time player (index.html needs http:// for ES modules).
// usage: node tools/serve.mjs [port] → open the printed URL · Space play/pause · ←/→ seek 1 s (Shift: 0.1 s)
//        ?t=48 starts at 48 s · ?only=frontier,logo builds just those shots (others become placeholders)
import { startServer } from './common.mjs';

const { port } = await startServer(+(process.argv[2] || 5173));
console.log(`preview: http://127.0.0.1:${port}/index.html`);
