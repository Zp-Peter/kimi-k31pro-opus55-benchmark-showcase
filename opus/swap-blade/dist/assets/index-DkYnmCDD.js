(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const el="186",Au=0,Ll=1,Ru=2,Ys=1,Cu=2,Vs=3,Cn=0,li=1,hi=2,rn=0,An=1,Wn=2,Dl=3,Il=4,Pu=5,gs=100,Lu=101,Du=102,Iu=103,Uu=104,Nu=200,ku=201,Fu=202,Ou=203,hh=204,uh=205,zu=206,Bu=207,Hu=208,Gu=209,Vu=210,Wu=211,Xu=212,$u=213,qu=214,lo=0,co=1,ho=2,js=3,uo=4,fo=5,po=6,mo=7,dh=0,Zu=1,Yu=2,$i=0,fh=1,ph=2,mh=3,gh=4,vh=5,xh=6,_h=7,yh=300,Xn=301,Ss=302,ma=303,ga=304,oa=306,tr=1e3,en=1001,go=1002,Be=1003,Ku=1004,dr=1005,Ke=1006,va=1007,Hn=1008,oi=1009,Mh=1010,Sh=1011,er=1012,il=1013,qi=1014,Ii=1015,Ni=1016,nl=1017,sl=1018,ir=1020,bh=35902,wh=35899,Eh=1021,Th=1022,Ui=1023,ln=1026,Gn=1027,rl=1028,al=1029,$n=1030,ol=1031,ll=1033,$r=33776,qr=33777,Zr=33778,Yr=33779,vo=35840,xo=35841,_o=35842,yo=35843,Mo=36196,So=37492,bo=37496,wo=37488,Eo=37489,Qr=37490,To=37491,Ao=37808,Ro=37809,Co=37810,Po=37811,Lo=37812,Do=37813,Io=37814,Uo=37815,No=37816,ko=37817,Fo=37818,Oo=37819,zo=37820,Bo=37821,Ho=36492,Go=36494,Vo=36495,Wo=36283,Xo=36284,jr=36285,$o=36286,Ju=3200,ta=0,Qu=1,bn="",gi="srgb",ea="srgb-linear",ia="linear",_e="srgb",xa=7680,ju=519,td=512,ed=513,id=514,cl=515,nd=516,sd=517,hl=518,rd=519,Ah=35044,vs=35048,Ul="300 es",Xi=2e3,nr=2001;function ad(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function na(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function od(){const s=na("canvas");return s.style.display="block",s}const Nl={};function sa(...s){const t="THREE."+s.shift();console.log(t,...s)}function Rh(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function $t(...s){s=Rh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ue(...s){s=Rh(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ys(...s){const t=s.join(" ");t in Nl||(Nl[t]=!0,$t(...s))}function ld(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const cd={[lo]:co,[ho]:po,[uo]:mo,[js]:fo,[co]:lo,[po]:ho,[mo]:uo,[fo]:js};class Yn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,qo=180/Math.PI;function an(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qe[s&255]+Qe[s>>8&255]+Qe[s>>16&255]+Qe[s>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function hd(s,t){return(s%t+t)%t}function ya(s,t,e){return(1-e)*s+e*t}function Wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class lt{static{lt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ci{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+y*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+y*o;const S=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=S,l*=S,h*=S,d*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){const o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-o*f,t[e+2]=l*g+h*f+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),d=o(r/2),u=c(i/2),f=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+n*l-r*c,this._y=n*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+n*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{U.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=n+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new U,kl=new ci;class Zt{static{Zt.prototype.isMatrix3=!0}constructor(t,e,i,n,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l)}set(t,e,i,n,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=n[0],m=n[3],p=n[6],S=n[1],E=n[4],x=n[7],T=n[2],M=n[5],A=n[8];return r[0]=a*y+o*S+c*T,r[3]=a*m+o*E+c*M,r[6]=a*p+o*x+c*A,r[1]=l*y+h*S+d*T,r[4]=l*m+h*E+d*M,r[7]=l*p+h*x+d*A,r[2]=u*y+f*S+g*T,r[5]=u*m+f*E+g*M,r[8]=u*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+n*r*l-n*a*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(n*l-h*i)*y,t[2]=(o*i-n*a)*y,t[3]=u*y,t[4]=(h*e-n*c)*y,t[5]=(n*r-o*e)*y,t[6]=f*y,t[7]=(i*c-l*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-n*l,n*c,-n*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sa.makeScale(t,e)),this}rotate(t){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sa.makeRotation(-t)),this}translate(t,e){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Zt,Fl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ol=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){const s={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(n.r=on(n.r),n.g=on(n.g),n.b=on(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(n.r=Ms(n.r),n.g=Ms(n.g),n.b=Ms(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===bn?ia:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ea]:{primaries:t,whitePoint:i,transfer:ia,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:i,transfer:_e,toXYZ:Fl,fromXYZ:Ol,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const ce=ud();function on(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qn;class dd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Qn===void 0&&(Qn=na("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Qn}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=on(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(on(e[i]/255)*255):e[i]=on(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fd=0;class ul{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=an(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(ba(n[a].image)):r.push(ba(n[a]))}else r=ba(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function ba(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let pd=0;const wa=new U;class ii extends Yn{constructor(t=ii.DEFAULT_IMAGE,e=ii.DEFAULT_MAPPING,i=en,n=en,r=Ke,a=Hn,o=Ui,c=oi,l=ii.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=an(),this.name="",this.source=new ul(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wa).x}get height(){return this.source.getSize(wa).y}get depth(){return this.source.getSize(wa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=yh;ii.DEFAULT_ANISOTROPY=1;class Le{static{Le.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,x=(f+1)/2,T=(p+1)/2,M=(h+u)/4,A=(d+y)/4,v=(g+m)/4;return E>x&&E>T?E<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(E),n=M/i,r=A/i):x>T?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=M/n,r=v/n):T<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(T),i=A/r,n=v/r),this.set(i,n,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ae(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class md extends Yn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const n={width:t,height:e,depth:i.depth},r=new ii(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new ul(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends md{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ch extends ii{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gd extends ii{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Be,this.minFilter=Be,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class oe{static{oe.prototype.isMatrix4=!0}constructor(t,e,i,n,r,a,o,c,l,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,c,l,h,d,u,f,g,y,m)}set(t,e,i,n,r,a,o,c,l,h,d,u,f,g,y,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,n=1/jn.setFromMatrixColumn(t,0).length(),r=1/jn.setFromMatrixColumn(t,1).length(),a=1/jn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,y=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-y*l,e[9]=-o*c,e[2]=y-u*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,g=l*h,y=l*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,g=l*h,y=l*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,y=o*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+y,e[1]=c*d,e[5]=y*l+u,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,f=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){const u=a*c,f=a*l,g=o*c,y=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,xd)}lookAt(t,e,i){const n=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),fn.crossVectors(i,pi),fn.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),fn.crossVectors(i,pi)),fn.normalize(),fr.crossVectors(pi,fn),n[0]=fn.x,n[4]=fr.x,n[8]=pi.x,n[1]=fn.y,n[5]=fr.y,n[9]=pi.y,n[2]=fn.z,n[6]=fr.z,n[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],S=i[3],E=i[7],x=i[11],T=i[15],M=n[0],A=n[4],v=n[8],b=n[12],R=n[1],I=n[5],L=n[9],P=n[13],D=n[2],N=n[6],B=n[10],O=n[14],Q=n[3],W=n[7],Z=n[11],j=n[15];return r[0]=a*M+o*R+c*D+l*Q,r[4]=a*A+o*I+c*N+l*W,r[8]=a*v+o*L+c*B+l*Z,r[12]=a*b+o*P+c*O+l*j,r[1]=h*M+d*R+u*D+f*Q,r[5]=h*A+d*I+u*N+f*W,r[9]=h*v+d*L+u*B+f*Z,r[13]=h*b+d*P+u*O+f*j,r[2]=g*M+y*R+m*D+p*Q,r[6]=g*A+y*I+m*N+p*W,r[10]=g*v+y*L+m*B+p*Z,r[14]=g*b+y*P+m*O+p*j,r[3]=S*M+E*R+x*D+T*Q,r[7]=S*A+E*I+x*N+T*W,r[11]=S*v+E*L+x*B+T*Z,r[15]=S*b+E*P+x*O+T*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],S=c*f-l*u,E=o*f-l*d,x=o*u-c*d,T=a*f-l*h,M=a*u-c*h,A=a*d-o*h;return e*(y*S-m*E+p*x)-i*(g*S-m*T+p*M)+n*(g*E-y*T+p*A)-r*(g*x-y*M+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+n*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],S=e*o-i*a,E=e*c-n*a,x=e*l-r*a,T=i*c-n*o,M=i*l-r*o,A=n*l-r*c,v=h*y-d*g,b=h*m-u*g,R=h*p-f*g,I=d*m-u*y,L=d*p-f*y,P=u*p-f*m,D=S*P-E*L+x*I+T*R-M*b+A*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return t[0]=(o*P-c*L+l*I)*N,t[1]=(n*L-i*P-r*I)*N,t[2]=(y*A-m*M+p*T)*N,t[3]=(u*M-d*A-f*T)*N,t[4]=(c*R-a*P-l*b)*N,t[5]=(e*P-n*R+r*b)*N,t[6]=(m*x-g*A-p*E)*N,t[7]=(h*A-u*x+f*E)*N,t[8]=(a*L-o*R+l*v)*N,t[9]=(i*R-e*L-r*v)*N,t[10]=(g*M-y*x+p*S)*N,t[11]=(d*x-h*M-f*S)*N,t[12]=(o*b-a*I-c*v)*N,t[13]=(e*I-i*b+n*v)*N,t[14]=(y*E-g*T-m*S)*N,t[15]=(h*T-d*E+u*S)*N,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,S=c*l,E=c*h,x=c*d,T=i.x,M=i.y,A=i.z;return n[0]=(1-(y+p))*T,n[1]=(f+x)*T,n[2]=(g-E)*T,n[3]=0,n[4]=(f-x)*M,n[5]=(1-(u+p))*M,n[6]=(m+S)*M,n[7]=0,n[8]=(g+E)*A,n[9]=(m-S)*A,n[10]=(1-(u+y))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=jn.set(n[0],n[1],n[2]).length();const o=jn.set(n[4],n[5],n[6]).length(),c=jn.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ti.copy(this);const l=1/a,h=1/o,d=1/c;return Ti.elements[0]*=l,Ti.elements[1]*=l,Ti.elements[2]*=l,Ti.elements[4]*=h,Ti.elements[5]*=h,Ti.elements[6]*=h,Ti.elements[8]*=d,Ti.elements[9]*=d,Ti.elements[10]*=d,e.setFromRotationMatrix(Ti),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,n,r,a,o=Xi,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n);let g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===Xi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===nr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Xi,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n);let g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===Xi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===nr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const jn=new U,Ti=new oe,vd=new U(0,0,0),xd=new U(1,1,1),fn=new U,fr=new U,pi=new U,zl=new oe,Bl=new ci;class cn{constructor(t=0,e=0,i=0,n=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return zl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _d=0;const Hl=new U,ts=new ci,Yi=new oe,pr=new U,Cs=new U,yd=new U,Md=new ci,Gl=new U(1,0,0),Vl=new U(0,1,0),Wl=new U(0,0,1),Xl={type:"added"},Sd={type:"removed"},es={type:"childadded",child:null},Ea={type:"childremoved",child:null};class He extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new U,e=new cn,i=new ci,n=new U(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new oe},normalMatrix:{value:new Zt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?pr.copy(t):pr.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Cs,pr,this.up):Yi.lookAt(pr,Cs,this.up),this.quaternion.setFromRotationMatrix(Yi),n&&(Yi.extractRotation(n.matrixWorld),ts.setFromRotationMatrix(Yi),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),es.child=t,this.dispatchEvent(es),es.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];n.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new U(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ce extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bd={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ce;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Aa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ce.workingColorSpace){if(t=hd(t,1),e=ae(e,0,1),i=ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Aa(a,r,t+1/3),this.g=Aa(a,r,t),this.b=Aa(a,r,t-1/3)}return ce.colorSpaceToWorking(this,n),this}setStyle(t,e=gi){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gi){const i=Lh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=on(t.r),this.g=on(t.g),this.b=on(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return ce.workingToColorSpace(je.copy(this),t),Math.round(ae(je.r*255,0,255))*65536+Math.round(ae(je.g*255,0,255))*256+Math.round(ae(je.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(je.copy(this),e);const i=je.r,n=je.g,r=je.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(n-r)/d+(n<r?6:0);break;case n:c=(r-i)/d+2;break;case r:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=gi){ce.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,n=je.b;return t!==gi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(pn),this.setHSL(pn.h+t,pn.s+e,pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pn),t.getHSL(mr);const i=ya(pn.h,mr.h,e),n=ya(pn.s,mr.s,e),r=ya(pn.l,mr.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Ht;Ht.NAMES=Lh;class dl extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ai=new U,Ki=new U,Ra=new U,Ji=new U,is=new U,ns=new U,$l=new U,Ca=new U,Pa=new U,La=new U,Da=new Le,Ia=new Le,Ua=new Le;class bi{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ai.subVectors(t,e),n.cross(Ai);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ai.subVectors(n,e),Ki.subVectors(i,e),Ra.subVectors(t,e);const a=Ai.dot(Ai),o=Ai.dot(Ki),c=Ai.dot(Ra),l=Ki.dot(Ki),h=Ki.dot(Ra),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,i,n,r,a,o,c){return this.getBarycoord(t,e,i,n,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ji.x),c.addScaledVector(a,Ji.y),c.addScaledVector(o,Ji.z),c)}static getInterpolatedAttribute(t,e,i,n,r,a){return Da.setScalar(0),Ia.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(t,e),Ia.fromBufferAttribute(t,i),Ua.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(Ia,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(t,e,i,n){return Ai.subVectors(i,e),Ki.subVectors(t,e),Ai.cross(Ki).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Ai.cross(Ki).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return bi.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let a,o;is.subVectors(n,i),ns.subVectors(r,i),Ca.subVectors(t,i);const c=is.dot(Ca),l=ns.dot(Ca);if(c<=0&&l<=0)return e.copy(i);Pa.subVectors(t,n);const h=is.dot(Pa),d=ns.dot(Pa);if(h>=0&&d<=h)return e.copy(n);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(is,a);La.subVectors(t,r);const f=is.dot(La),g=ns.dot(La);if(g>=0&&f<=g)return e.copy(r);const y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(ns,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return $l.subVectors(r,n),o=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector($l,o);const p=1/(m+y+u);return a=y*p,o=u*p,e.copy(i).addScaledVector(is,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class lr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),vr.subVectors(this.max,Ps),ss.subVectors(t.a,Ps),rs.subVectors(t.b,Ps),as.subVectors(t.c,Ps),mn.subVectors(rs,ss),gn.subVectors(as,rs),In.subVectors(ss,as);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-In.z,In.y,mn.z,0,-mn.x,gn.z,0,-gn.x,In.z,0,-In.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-In.y,In.x,0];return!Na(e,ss,rs,as,vr)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,ss,rs,as,vr))?!1:(xr.crossVectors(mn,gn),e=[xr.x,xr.y,xr.z],Na(e,ss,rs,as,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qi=[new U,new U,new U,new U,new U,new U,new U,new U],Ri=new U,gr=new lr,ss=new U,rs=new U,as=new U,mn=new U,gn=new U,In=new U,Ps=new U,vr=new U,xr=new U,Un=new U;function Na(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Un.fromArray(s,r);const o=n.x*Math.abs(Un.x)+n.y*Math.abs(Un.y)+n.z*Math.abs(Un.z),c=t.dot(Un),l=e.dot(Un),h=i.dot(Un);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Oe=new U,_r=new lt;let wd=0;class Ze extends Yn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Dh extends Ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ih extends Ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Pe extends Ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Ed=new lr,Ls=new U,ka=new U;class Ts{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ed.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Ls,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(ka)),this.expandByPoint(Ls.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Td=0;const Si=new oe,Fa=new He,os=new U,mi=new lr,Ds=new lr,Xe=new U;class We extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?Ih:Dh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,e,i){return Si.makeTranslation(t,e,i),this.applyMatrix4(Si),this}scale(t,e,i){return Si.makeScale(t,e,i),this.applyMatrix4(Si),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mi.min,Ds.min),mi.expandByPoint(Xe),Xe.addVectors(mi.max,Ds.max),mi.expandByPoint(Xe)):(mi.expandByPoint(Ds.min),mi.expandByPoint(Ds.max))}mi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Xe.fromBufferAttribute(o,l),c&&(os.fromBufferAttribute(t,l),Xe.add(os)),n=Math.max(n,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ze(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let v=0;v<i.count;v++)o[v]=new U,c[v]=new U;const l=new U,h=new U,d=new U,u=new lt,f=new lt,g=new lt,y=new U,m=new U;function p(v,b,R){l.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,R),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);const I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[v].add(y),o[b].add(y),o[R].add(y),c[v].add(m),c[b].add(m),c[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,b=S.length;v<b;++v){const R=S[v],I=R.start,L=R.count;for(let P=I,D=I+L;P<D;P+=3)p(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const E=new U,x=new U,T=new U,M=new U;function A(v){T.fromBufferAttribute(n,v),M.copy(T);const b=o[v];E.copy(b),E.sub(T.multiplyScalar(T.dot(b))).normalize(),x.crossVectors(M,b);const I=x.dot(c[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,I)}for(let v=0,b=S.length;v<b;++v){const R=S[v],I=R.start,L=R.count;for(let P=I,D=I+L;P<D;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Ze(u,h,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,i=this.index.array,n=this.attributes;for(const o in n){const c=n[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const n={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(n[c]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const l in n){const h=n[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ad{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const si=new U;class ra{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyMatrix4(t),this.setXYZ(e,si.x,si.y,si.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.applyNormalMatrix(t),this.setXYZ(e,si.x,si.y,si.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)si.fromBufferAttribute(this,e),si.transformDirection(t),this.setXYZ(e,si.x,si.y,si.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Wi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),i=Me(i,this.array),n=Me(n,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Oa=new U,Rd=new U,Cd=new Zt;class yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Oa.subVectors(i,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const n=t.delta(Oa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Cd.getNormalMatrix(t),n=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Pd=0;class Ln extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=an(),this.name="",this.type="Material",this.blending=An,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hh,this.blendDst=uh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new yn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wn extends Ln{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ls;const Is=new U,cs=new U,hs=new U,us=new lt,Us=new lt,Uh=new oe,yr=new U,Ns=new U,Mr=new U,ql=new lt,za=new lt,Zl=new lt;class Bn extends He{constructor(t=new wn){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new We;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ad(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new ra(i,3,0,!1)),ls.setAttribute("uv",new ra(i,2,3,!1))}this.geometry=ls,this.material=t,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Uh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Sr(yr.set(-.5,-.5,0),hs,a,cs,n,r),Sr(Ns.set(.5,-.5,0),hs,a,cs,n,r),Sr(Mr.set(.5,.5,0),hs,a,cs,n,r),ql.set(0,0),za.set(1,0),Zl.set(1,1);let o=t.ray.intersectTriangle(yr,Ns,Mr,!1,Is);if(o===null&&(Sr(Ns.set(-.5,.5,0),hs,a,cs,n,r),za.set(0,1),o=t.ray.intersectTriangle(yr,Mr,Ns,!1,Is),o===null))return;const c=t.ray.origin.distanceTo(Is);c<t.near||c>t.far||e.push({distance:c,point:Is.clone(),uv:bi.getInterpolation(Is,yr,Ns,Mr,ql,za,Zl,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Sr(s,t,e,i,n,r){us.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Us.x=r*us.x-n*us.y,Us.y=n*us.x+r*us.y):Us.copy(us),s.copy(t),s.x+=Us.x,s.y+=Us.y,s.applyMatrix4(Uh)}const ji=new U,Ba=new U,br=new U,wr=new U;class Nh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ji.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,e),ji.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Ba.copy(t).add(e).multiplyScalar(.5),br.copy(e).sub(t).normalize(),wr.copy(this.origin).sub(Ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot(br),o=wr.dot(this.direction),c=-wr.dot(br),l=wr.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ba).addScaledVector(br,u),f}intersectSphere(t,e){if(t.radius<0)return null;ji.subVectors(t.center,this.origin);const i=ji.dot(this.direction),n=ji.dot(ji)-i*i,r=t.radius*t.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,n=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,n=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,e,i,n,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=i.x-a.x,S=i.y-a.y,E=i.z-a.z,x=Math.abs(c),T=Math.abs(l),M=Math.abs(h);let A,v,b,R,I,L,P,D,N,B,O,Q;if(x>=T&&x>=M?(b=c,L=d,N=g,Q=p,c>=0?(A=l,v=h,R=u,I=f,P=y,D=m,B=S,O=E):(A=h,v=l,R=f,I=u,P=m,D=y,B=E,O=S)):T>=M?(b=l,L=u,N=y,Q=S,l>=0?(A=h,v=c,R=f,I=d,P=m,D=g,B=E,O=p):(A=c,v=h,R=d,I=f,P=g,D=m,B=p,O=E)):(b=h,L=f,N=m,Q=E,h>=0?(A=c,v=l,R=d,I=u,P=g,D=y,B=p,O=S):(A=l,v=c,R=u,I=d,P=y,D=g,B=S,O=p)),b===0)return null;const W=A/b,Z=v/b,j=1/b,Et=R-W*L,St=I-Z*L,Kt=P-W*N,qt=D-Z*N,Gt=B-W*Q,Y=O-Z*Q,it=Gt*qt-Y*Kt,dt=Et*Y-St*Gt,zt=Kt*St-qt*Et;if(n){if(it<0||dt<0||zt<0)return null}else if((it<0||dt<0||zt<0)&&(it>0||dt>0||zt>0))return null;const vt=it+dt+zt;if(vt===0)return null;const Bt=j*(it*L+dt*N+zt*Q);return(vt>0?Bt<0:Bt>0)?null:this.at(Bt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Di extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yl=new oe,Nn=new Nh,Er=new Ts,Kl=new U,Tr=new U,Ar=new U,Rr=new U,Ha=new U,Cr=new U,Jl=new U,Pr=new U;class Wt extends He{constructor(t=new We,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(r&&o){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Ha.fromBufferAttribute(d,t),a?Cr.addScaledVector(Ha,h):Cr.addScaledVector(Ha.sub(e),h))}e.add(Cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(Er.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(Er,Kl)===null||Nn.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(Yl),!(i.boundingBox!==null&&Nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,i){let n;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=E;x<T;x+=3){const M=o.getX(x),A=o.getX(x+1),v=o.getX(x+2);n=Lr(this,p,t,i,l,h,d,M,A,v),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);n=Lr(this,a,t,i,l,h,d,S,E,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){const m=u[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=E;x<T;x+=3){const M=x,A=x+1,v=x+2;n=Lr(this,p,t,i,l,h,d,M,A,v),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){const S=m,E=m+1,x=m+2;n=Lr(this,a,t,i,l,h,d,S,E,x),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Ld(s,t,e,i,n,r,a,o){let c;if(t.side===li?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,t.side===Cn,o),c===null)return null;Pr.copy(o),Pr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:s}}function Lr(s,t,e,i,n,r,a,o,c,l){s.getVertexPosition(o,Tr),s.getVertexPosition(c,Ar),s.getVertexPosition(l,Rr);const h=Ld(s,t,e,i,Tr,Ar,Rr,Jl);if(h){const d=new U;bi.getBarycoord(Jl,Tr,Ar,Rr,d),n&&(h.uv=bi.getInterpolatedAttribute(n,o,c,l,d,new lt)),r&&(h.uv1=bi.getInterpolatedAttribute(r,o,c,l,d,new lt)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new U,materialIndex:0};bi.getNormal(Tr,Ar,Rr,u.normal),h.face=u,h.barycoord=d}return h}class kh extends ii{constructor(t=null,e=1,i=1,n,r,a,o,c,l=Be,h=Be,d,u){super(null,a,o,c,l,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kn=new Ts,Dd=new lt(.5,.5),Dr=new U;class fl{constructor(t=new yn,e=new yn,i=new yn,n=new yn,r=new yn,a=new yn){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi,i=!1){const n=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],E=r[13],x=r[14],T=r[15];if(n[0].setComponents(l-a,f-h,p-g,T-S).normalize(),n[1].setComponents(l+a,f+h,p+g,T+S).normalize(),n[2].setComponents(l+o,f+d,p+y,T+E).normalize(),n[3].setComponents(l-o,f-d,p-y,T-E).normalize(),i)n[4].setComponents(c,u,m,x).normalize(),n[5].setComponents(l-c,f-u,p-m,T-x).normalize();else if(n[4].setComponents(l-c,f-u,p-m,T-x).normalize(),e===Xi)n[5].setComponents(l+c,f+u,p+m,T+x).normalize();else if(e===nr)n[5].setComponents(c,u,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){kn.center.set(0,0,0);const e=Dd.distanceTo(t.center);return kn.radius=.7071067811865476+e,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Dr.x=n.normal.x>0?t.max.x:t.min.x,Dr.y=n.normal.y>0?t.max.y:t.min.y,Dr.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Id extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ql=new oe,Zo=new Nh,Ir=new Ts,Ur=new U;class Ud extends He{constructor(t=new We,e=new Id){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(n),Ir.radius+=r,t.ray.intersectsSphere(Ir)===!1)return;Ql.copy(n).invert(),Zo.copy(t.ray).applyMatrix4(Ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,y=f;g<y;g++){const m=l.getX(g);Ur.fromBufferAttribute(d,m),jl(Ur,m,c,n,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Ur.fromBufferAttribute(d,g),jl(Ur,g,c,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jl(s,t,e,i,n,r,a){const o=Zo.distanceSqToPoint(s);if(o<e){const c=new U;Zo.closestPointToPoint(s,c),c.applyMatrix4(i);const l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Fh extends ii{constructor(t=[],e=Xn,i,n,r,a,o,c,l,h){super(t,e,i,n,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends ii{constructor(t,e,i,n,r,a,o,c,l){super(t,e,i,n,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bs extends ii{constructor(t,e,i=qi,n,r,a,o=Be,c=Be,l,h=ln,d=1){if(h!==ln&&h!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,n,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ul(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class kd extends bs{constructor(t,e=qi,i=Xn,n,r,a=Be,o=Be,c,l=ln){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Oh extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Te extends We{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,n,a,2),g("x","z","y",1,-1,t,i,-e,n,a,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new Pe(l,3)),this.setAttribute("normal",new Pe(h,3)),this.setAttribute("uv",new Pe(d,2));function g(y,m,p,S,E,x,T,M,A,v,b){const R=x/A,I=T/v,L=x/2,P=T/2,D=M/2,N=A+1,B=v+1;let O=0,Q=0;const W=new U;for(let Z=0;Z<B;Z++){const j=Z*I-P;for(let Et=0;Et<N;Et++){const St=Et*R-L;W[y]=St*S,W[m]=j*E,W[p]=D,l.push(W.x,W.y,W.z),W[y]=0,W[m]=0,W[p]=M>0?1:-1,h.push(W.x,W.y,W.z),d.push(Et/A),d.push(1-Z/v),O+=1}}for(let Z=0;Z<v;Z++)for(let j=0;j<A;j++){const Et=u+j+N*Z,St=u+j+N*(Z+1),Kt=u+(j+1)+N*(Z+1),qt=u+(j+1)+N*Z;c.push(Et,St,qt),c.push(St,Kt,qt),Q+=6}o.addGroup(f,Q,b),f+=Q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class pl extends We{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new U,h=new lt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*n;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Pe(a,3)),this.setAttribute("normal",new Pe(o,3)),this.setAttribute("uv",new Pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ue extends We{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;n=Math.floor(n),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const y=[],m=i/2;let p=0;S(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Pe(d,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(f,2));function S(){const x=new U,T=new U;let M=0;const A=(e-t)/i;for(let v=0;v<=r;v++){const b=[],R=v/r,I=R*(e-t)+t;for(let L=0;L<=n;L++){const P=L/n,D=P*c+o,N=Math.sin(D),B=Math.cos(D);T.x=I*N,T.y=-R*i+m,T.z=I*B,d.push(T.x,T.y,T.z),x.set(N,A,B).normalize(),u.push(x.x,x.y,x.z),f.push(P,1-R),b.push(g++)}y.push(b)}for(let v=0;v<n;v++)for(let b=0;b<r;b++){const R=y[b][v],I=y[b+1][v],L=y[b+1][v+1],P=y[b][v+1];(t>0||b!==0)&&(h.push(R,I,P),M+=3),(e>0||b!==r-1)&&(h.push(I,L,P),M+=3)}l.addGroup(p,M,0),p+=M}function E(x){const T=g,M=new lt,A=new U;let v=0;const b=x===!0?t:e,R=x===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;const I=g;for(let L=0;L<=n;L++){const D=L/n*c+o,N=Math.cos(D),B=Math.sin(D);A.x=b*B,A.y=m*R,A.z=b*N,d.push(A.x,A.y,A.z),u.push(0,R,0),M.x=N*.5+.5,M.y=B*.5*R+.5,f.push(M.x,M.y),g++}for(let L=0;L<n;L++){const P=T+L,D=I+L;x===!0?h.push(D,D+1,P):h.push(D+1,D,P),v+=3}l.addGroup(p,v,x===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yi extends Ue{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new yi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class la extends We{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],a=[];o(n),l(i),h(),this.setAttribute("position",new Pe(r,3)),this.setAttribute("normal",new Pe(r.slice(),3)),this.setAttribute("uv",new Pe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const E=new U,x=new U,T=new U;for(let M=0;M<e.length;M+=3)f(e[M+0],E),f(e[M+1],x),f(e[M+2],T),c(E,x,T,S)}function c(S,E,x,T){const M=T+1,A=[];for(let v=0;v<=M;v++){A[v]=[];const b=S.clone().lerp(x,v/M),R=E.clone().lerp(x,v/M),I=M-v;for(let L=0;L<=I;L++)L===0&&v===M?A[v][L]=b:A[v][L]=b.clone().lerp(R,L/I)}for(let v=0;v<M;v++)for(let b=0;b<2*(M-v)-1;b++){const R=Math.floor(b/2);b%2===0?(u(A[v][R+1]),u(A[v+1][R]),u(A[v][R])):(u(A[v][R+1]),u(A[v+1][R+1]),u(A[v+1][R]))}}function l(S){const E=new U;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(S),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){const S=new U;for(let E=0;E<r.length;E+=3){S.x=r[E+0],S.y=r[E+1],S.z=r[E+2];const x=m(S)/2/Math.PI+.5,T=p(S)/Math.PI+.5;a.push(x,1-T)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const E=a[S+0],x=a[S+2],T=a[S+4],M=Math.max(E,x,T),A=Math.min(E,x,T);M>.9&&A<.1&&(E<.2&&(a[S+0]+=1),x<.2&&(a[S+2]+=1),T<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,E){const x=S*3;E.x=t[x+0],E.y=t[x+1],E.z=t[x+2]}function g(){const S=new U,E=new U,x=new U,T=new U,M=new lt,A=new lt,v=new lt;for(let b=0,R=0;b<r.length;b+=9,R+=6){S.set(r[b+0],r[b+1],r[b+2]),E.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),M.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),T.copy(S).add(E).add(x).divideScalar(3);const I=m(T);y(M,R+0,S,I),y(A,R+2,E,I),y(v,R+4,x,I)}}function y(S,E,x,T){T<0&&S.x===1&&(a[E]=S.x-1),x.x===0&&x.z===0&&(a[E]=T/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.vertices,t.indices,t.radius,t.detail)}}class ml extends la{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ml(t.radius,t.detail)}}class Zi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(r-1);const h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),c=e||(a.isVector2?new lt:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new U,n=[],r=[],a=[],o=new U,c=new oe;for(let f=0;f<=t;f++){const g=f/t;n[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),u<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ae(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(ae(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gl extends Zi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new lt){const i=e,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fd extends gl{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function vl(){let s=0,t=0,e=0,i=0;function n(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){n(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+i*o}}}const tc=new U,ec=new U,Ga=new vl,Va=new vl,Wa=new vl;class Od extends Zi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new U){const i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%r]:(ec.subVectors(n[0],n[1]).add(n[0]),l=ec);const d=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(tc.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=tc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ga.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,y,m),Va.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,y,m),Wa.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Va.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),Wa.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return i.set(Ga.calc(c),Va.calc(c),Wa.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new U().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(s,t,e,i,n){const r=(i-t)*.5,a=(n-e)*.5,o=s*s,c=s*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*s+e}function zd(s,t){const e=1-s;return e*e*t}function Bd(s,t){return 2*(1-s)*s*t}function Hd(s,t){return s*s*t}function Ks(s,t,e,i){return zd(s,t)+Bd(s,e)+Hd(s,i)}function Gd(s,t){const e=1-s;return e*e*e*t}function Vd(s,t){const e=1-s;return 3*e*e*s*t}function Wd(s,t){return 3*(1-s)*s*s*t}function Xd(s,t){return s*s*s*t}function Js(s,t,e,i,n){return Gd(s,t)+Vd(s,e)+Wd(s,i)+Xd(s,n)}class zh extends Zi{constructor(t=new lt,e=new lt,i=new lt,n=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new lt){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Js(t,n.x,r.x,a.x,o.x),Js(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $d extends Zi{constructor(t=new U,e=new U,i=new U,n=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new U){const i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Js(t,n.x,r.x,a.x,o.x),Js(t,n.y,r.y,a.y,o.y),Js(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Bh extends Zi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qd extends Zi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Zi{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,n.x,r.x,a.x),Ks(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zd extends Zi{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){const i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,n.x,r.x,a.x),Ks(t,n.y,r.y,a.y),Ks(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends Zi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(ic(o,c.x,l.x,h.x,d.x),ic(o,c.y,l.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new lt().fromArray(n))}return this}}var Yo=Object.freeze({__proto__:null,ArcCurve:Fd,CatmullRomCurve3:Od,CubicBezierCurve:zh,CubicBezierCurve3:$d,EllipseCurve:gl,LineCurve:Bh,LineCurve3:qd,QuadraticBezierCurve:Hh,QuadraticBezierCurve3:Zd,SplineCurve:Gh});class Yd extends Zi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const n=t.curves[e];this.curves.push(new Yo[n.type]().fromJSON(n))}return this}}class nc extends Yd{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Bh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){const r=new Hh(this.currentPoint.clone(),new lt(t,e),new lt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){const o=new zh(this.currentPoint.clone(),new lt(t,e),new lt(i,n),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Gh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,n,r,a,o,c),this}absellipse(t,e,i,n,r,a,o,c){const l=new gl(t,e,i,n,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cr extends nc{constructor(t){super(t),this.uuid=an(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const n=t.holes[e];this.holes.push(new nc().fromJSON(n))}return this}}function Kd(s,t,e=2){const i=t&&t.length,n=i?t[0]*e:s.length;let r=Vh(s,0,n,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=ef(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,d=c;for(let u=e;u<n;u+=e){const f=s[u],g=s[u+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return sr(r,a,e,o,c,l,0),a}function Vh(s,t,e,i,n){let r;if(n===ff(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=sc(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=sc(a/i|0,s[a],s[a+1],r);return r&&ws(r,r.next)&&(ar(r),r=r.next),r}function qn(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(ws(e,e.next)||De(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function sr(s,t,e,i,n,r,a){if(!s)return;!a&&r&&of(s,i,n,r);let o=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Qd(s,i,n,r):Jd(s)){t.push(c.i,s.i,l.i),ar(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=jd(qn(s),t),sr(s,t,e,i,n,r,2)):a===2&&tf(s,t,e,i,n,r):sr(qn(s),t,e,i,n,r,1);break}}}function Jd(s){const t=s.prev,e=s,i=s.next;if(De(t,e,i)>=0)return!1;const n=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(n,r,a),d=Math.min(o,c,l),u=Math.max(n,r,a),f=Math.max(o,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ws(n,o,r,c,a,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qd(s,t,e,i){const n=s.prev,r=s,a=s.next;if(De(n,r,a)>=0)return!1;const o=n.x,c=r.x,l=a.x,h=n.y,d=r.y,u=a.y,f=Math.min(o,c,l),g=Math.min(h,d,u),y=Math.max(o,c,l),m=Math.max(h,d,u),p=Ko(f,g,t,e,i),S=Ko(y,m,t,e,i);let E=s.prevZ,x=s.nextZ;for(;E&&E.z>=p&&x&&x.z<=S;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==n&&E!==a&&Ws(o,h,c,d,l,u,E.x,E.y)&&De(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&Ws(o,h,c,d,l,u,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=f&&E.x<=y&&E.y>=g&&E.y<=m&&E!==n&&E!==a&&Ws(o,h,c,d,l,u,E.x,E.y)&&De(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==n&&x!==a&&Ws(o,h,c,d,l,u,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function jd(s,t){let e=s;do{const i=e.prev,n=e.next.next;!ws(i,n)&&Xh(i,e,e.next,n)&&rr(i,n)&&rr(n,i)&&(t.push(i.i,e.i,n.i),ar(e),ar(e.next),e=s=n),e=e.next}while(e!==s);return qn(e)}function tf(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hf(a,o)){let c=$h(a,o);a=qn(a,a.next),c=qn(c,c.next),sr(a,t,e,i,n,r,0),sr(c,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function ef(s,t,e,i){const n=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,c=r<a-1?t[r+1]*i:s.length,l=Vh(s,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(cf(l))}n.sort(nf);for(let r=0;r<n.length;r++)e=sf(n[r],e);return e}function nf(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function sf(s,t){const e=rf(s,t);if(!e)return t;const i=$h(e,s);return qn(i,i.next),qn(e,e.next)}function rf(s,t){let e=t;const i=s.x,n=s.y;let r=-1/0,a;if(ws(s,e))return e;do{if(ws(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){const d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Wh(n<l?i:r,n,c,l,n<l?r:i,n,e.x,e.y)){const d=Math.abs(n-e.y)/(i-e.x);rr(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&af(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function af(s,t){return De(s.prev,s,t.prev)<0&&De(t.next,s,s.next)<0}function of(s,t,e,i){let n=s;do n.z===0&&(n.z=Ko(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,lf(n)}function lf(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,c--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function Ko(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function cf(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Wh(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Ws(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&Wh(s,t,e,i,n,r,a,o)}function hf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!uf(s,t)&&(rr(s,t)&&rr(t,s)&&df(s,t)&&(De(s.prev,s,t.prev)||De(s,t.prev,t))||ws(s,t)&&De(s.prev,s,s.next)>0&&De(t.prev,t,t.next)>0)}function De(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ws(s,t){return s.x===t.x&&s.y===t.y}function Xh(s,t,e,i){const n=kr(De(s,t,e)),r=kr(De(s,t,i)),a=kr(De(e,i,s)),o=kr(De(e,i,t));return!!(n!==r&&a!==o||n===0&&Nr(s,e,t)||r===0&&Nr(s,i,t)||a===0&&Nr(e,s,i)||o===0&&Nr(e,t,i))}function Nr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function kr(s){return s>0?1:s<0?-1:0}function uf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function rr(s,t){return De(s.prev,s,s.next)<0?De(s,t,s.next)>=0&&De(s,s.prev,t)>=0:De(s,t,s.prev)<0||De(s,s.next,t)<0}function df(s,t){let e=s,i=!1;const n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function $h(s,t){const e=Jo(s.i,s.x,s.y),i=Jo(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function sc(s,t,e,i){const n=Jo(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Jo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ff(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class pf{static triangulate(t,e,i=2){return Kd(t,e,i)}}class xs{static area(t){const e=t.length;let i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return xs.area(t)<0}static triangulateShape(t,e){const i=[],n=[],r=[];rc(t),ac(i,t);let a=t.length;e.forEach(rc);for(let c=0;c<e.length;c++)n.push(a),a+=e[c].length,ac(i,e[c]);const o=pf.triangulate(i,n);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function rc(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ac(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class As extends We{constructor(t=new cr([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,n=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Pe(n,3)),this.setAttribute("uv",new Pe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:mf;let E,x=!1,T,M,A,v;if(p){E=p.getSpacedPoints(h),x=!0,u=!1;const et=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,et),M=new U,A=new U,v=new U}u||(m=0,f=0,g=0,y=0);const b=o.extractPoints(l);let R=b.shape;const I=b.holes;if(!xs.isClockWise(R)){R=R.reverse();for(let et=0,q=I.length;et<q;et++){const st=I[et];xs.isClockWise(st)&&(I[et]=st.reverse())}}function P(et){const st=10000000000000001e-36;let at=et[0];for(let ot=1;ot<=et.length;ot++){const It=ot%et.length,Ct=et[It],Ft=Ct.x-at.x,Vt=Ct.y-at.y,k=Ft*Ft+Vt*Vt,pe=Math.max(Math.abs(Ct.x),Math.abs(Ct.y),Math.abs(at.x),Math.abs(at.y)),se=st*pe*pe;if(k<=se){et.splice(It,1),ot--;continue}at=Ct}}P(R),I.forEach(P);const D=I.length,N=R;for(let et=0;et<D;et++){const q=I[et];R=R.concat(q)}function B(et,q,st){return q||ue("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(q,st)}const O=R.length;function Q(et,q,st){let at,ot,It;const Ct=et.x-q.x,Ft=et.y-q.y,Vt=st.x-et.x,k=st.y-et.y,pe=Ct*Ct+Ft*Ft,se=Ct*k-Ft*Vt;if(Math.abs(se)>Number.EPSILON){const C=Math.sqrt(pe),_=Math.sqrt(Vt*Vt+k*k),H=q.x-Ft/C,X=q.y+Ct/C,K=st.x-k/_,ct=st.y+Vt/_,ht=((K-H)*k-(ct-X)*Vt)/(Ct*k-Ft*Vt);at=H+Ct*ht-et.x,ot=X+Ft*ht-et.y;const J=at*at+ot*ot;if(J<=2)return new lt(at,ot);It=Math.sqrt(J/2)}else{let C=!1;Ct>Number.EPSILON?Vt>Number.EPSILON&&(C=!0):Ct<-Number.EPSILON?Vt<-Number.EPSILON&&(C=!0):Math.sign(Ft)===Math.sign(k)&&(C=!0),C?(at=-Ft,ot=Ct,It=Math.sqrt(pe)):(at=Ct,ot=Ft,It=Math.sqrt(pe/2))}return new lt(at/It,ot/It)}const W=[];for(let et=0,q=N.length,st=q-1,at=et+1;et<q;et++,st++,at++)st===q&&(st=0),at===q&&(at=0),W[et]=Q(N[et],N[st],N[at]);const Z=[];let j,Et=W.concat();for(let et=0,q=D;et<q;et++){const st=I[et];j=[];for(let at=0,ot=st.length,It=ot-1,Ct=at+1;at<ot;at++,It++,Ct++)It===ot&&(It=0),Ct===ot&&(Ct=0),j[at]=Q(st[at],st[It],st[Ct]);Z.push(j),Et=Et.concat(j)}let St;if(m===0)St=xs.triangulateShape(N,I);else{const et=[],q=[];for(let st=0;st<m;st++){const at=st/m,ot=f*Math.cos(at*Math.PI/2),It=g*Math.sin(at*Math.PI/2)+y;for(let Ct=0,Ft=N.length;Ct<Ft;Ct++){const Vt=B(N[Ct],W[Ct],It);dt(Vt.x,Vt.y,-ot),at===0&&et.push(Vt)}for(let Ct=0,Ft=D;Ct<Ft;Ct++){const Vt=I[Ct];j=Z[Ct];const k=[];for(let pe=0,se=Vt.length;pe<se;pe++){const C=B(Vt[pe],j[pe],It);dt(C.x,C.y,-ot),at===0&&k.push(C)}at===0&&q.push(k)}}St=xs.triangulateShape(et,q)}const Kt=St.length,qt=g+y;for(let et=0;et<O;et++){const q=u?B(R[et],Et[et],qt):R[et];x?(A.copy(T.normals[0]).multiplyScalar(q.x),M.copy(T.binormals[0]).multiplyScalar(q.y),v.copy(E[0]).add(A).add(M),dt(v.x,v.y,v.z)):dt(q.x,q.y,0)}for(let et=1;et<=h;et++)for(let q=0;q<O;q++){const st=u?B(R[q],Et[q],qt):R[q];x?(A.copy(T.normals[et]).multiplyScalar(st.x),M.copy(T.binormals[et]).multiplyScalar(st.y),v.copy(E[et]).add(A).add(M),dt(v.x,v.y,v.z)):dt(st.x,st.y,d/h*et)}for(let et=m-1;et>=0;et--){const q=et/m,st=f*Math.cos(q*Math.PI/2),at=g*Math.sin(q*Math.PI/2)+y;for(let ot=0,It=N.length;ot<It;ot++){const Ct=B(N[ot],W[ot],at);dt(Ct.x,Ct.y,d+st)}for(let ot=0,It=I.length;ot<It;ot++){const Ct=I[ot];j=Z[ot];for(let Ft=0,Vt=Ct.length;Ft<Vt;Ft++){const k=B(Ct[Ft],j[Ft],at);x?dt(k.x,k.y+E[h-1].y,E[h-1].x+st):dt(k.x,k.y,d+st)}}}Gt(),Y();function Gt(){const et=n.length/3;if(u){let q=0,st=O*q;for(let at=0;at<Kt;at++){const ot=St[at];zt(ot[2]+st,ot[1]+st,ot[0]+st)}q=h+m*2,st=O*q;for(let at=0;at<Kt;at++){const ot=St[at];zt(ot[0]+st,ot[1]+st,ot[2]+st)}}else{for(let q=0;q<Kt;q++){const st=St[q];zt(st[2],st[1],st[0])}for(let q=0;q<Kt;q++){const st=St[q];zt(st[0]+O*h,st[1]+O*h,st[2]+O*h)}}i.addGroup(et,n.length/3-et,0)}function Y(){const et=n.length/3;let q=0;it(N,q),q+=N.length;for(let st=0,at=I.length;st<at;st++){const ot=I[st];it(ot,q),q+=ot.length}i.addGroup(et,n.length/3-et,1)}function it(et,q){let st=et.length;for(;--st>=0;){const at=st;let ot=st-1;ot<0&&(ot=et.length-1);for(let It=0,Ct=h+m*2;It<Ct;It++){const Ft=O*It,Vt=O*(It+1),k=q+at+Ft,pe=q+ot+Ft,se=q+ot+Vt,C=q+at+Vt;vt(k,pe,se,C)}}}function dt(et,q,st){c.push(et),c.push(q),c.push(st)}function zt(et,q,st){Bt(et),Bt(q),Bt(st);const at=n.length/3,ot=S.generateTopUV(i,n,at-3,at-2,at-1);he(ot[0]),he(ot[1]),he(ot[2])}function vt(et,q,st,at){Bt(et),Bt(q),Bt(at),Bt(q),Bt(st),Bt(at);const ot=n.length/3,It=S.generateSideWallUV(i,n,ot-6,ot-3,ot-2,ot-1);he(It[0]),he(It[1]),he(It[3]),he(It[1]),he(It[2]),he(It[3])}function Bt(et){n.push(c[et*3+0]),n.push(c[et*3+1]),n.push(c[et*3+2])}function he(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return gf(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new Yo[n.type]().fromJSON(n)),new As(i,t.options)}}const mf={generateTopUV:function(s,t,e,i,n){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[n*3],h=t[n*3+1];return[new lt(r,a),new lt(o,c),new lt(l,h)]},generateSideWallUV:function(s,t,e,i,n,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[n*3],f=t[n*3+1],g=t[n*3+2],y=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new lt(a,1-c),new lt(l,1-d),new lt(u,1-g),new lt(y,1-p)]:[new lt(o,1-c),new lt(h,1-d),new lt(f,1-g),new lt(m,1-p)]}};function gf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ca extends la{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ca(t.radius,t.detail)}}class vi extends We{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,d=t/o,u=e/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){const S=p*u-a;for(let E=0;E<l;E++){const x=E*d-r;g.push(x,-S,0),y.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const E=S+l*p,x=S+l*(p+1),T=S+1+l*(p+1),M=S+1+l*p;f.push(E,x,M),f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rn extends We{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new U,u=new U,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){const S=[],E=p/i,x=a+E*o,T=t*Math.cos(x),M=Math.sqrt(t*t-T*T);let A=0;p===0&&a===0?A=.5/e:p===i&&c===Math.PI&&(A=-.5/e);for(let v=0;v<=e;v++){const b=v/e,R=n+b*r;d.x=-M*Math.cos(R),d.y=T,d.z=M*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(b+A,1-E),S.push(l++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){const E=h[p][S+1],x=h[p][S],T=h[p+1][S],M=h[p+1][S+1];(p!==0||a>0)&&f.push(E,x,M),(p!==i-1||c<Math.PI)&&f.push(x,T,M)}this.setIndex(f),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(y,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Es(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];if(oc(n))n.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(oc(n[0])){const r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ri(s){const t={};for(let e=0;e<s.length;e++){const i=Es(s[e]);for(const n in i)t[n]=i[n]}return t}function oc(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function qh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}const Zh={clone:Es,merge:ri};var xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xf,this.fragmentShader=_f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(n.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new U().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new oe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class yf extends Ye{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yh extends Ln{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Mf extends Ln{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Sf extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ju,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bf extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kh extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jh extends Kh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Xa=new oe,lc=new U,cc=new U;class wf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fl,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Xa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Xa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,c=n?n.x/r.x:0,l=n?n.y/r.y:0;t.coordinateSystem===nr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Fr=new U,Or=new ci,Oi=new U;class Qh extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fr,Or,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,Oi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Fr,Or,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fr,Or,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vn=new U,hc=new lt,uc=new lt;class _i extends Qh{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vn.x,vn.y).multiplyScalar(-t/vn.z),vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vn.x,vn.y).multiplyScalar(-t/vn.z)}getViewSize(t,e){return this.getViewBounds(t,hc,uc),e.subVectors(uc,hc)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_a*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,e-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ha extends Qh{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ef extends wf{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends Kh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Ef}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ds=-90,fs=1;class Tf extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new _i(ds,fs,t,e);n.layers=this.layers,this.add(n);const r=new _i(ds,fs,t,e);r.layers=this.layers,this.add(r);const a=new _i(ds,fs,t,e);a.layers=this.layers,this.add(a);const o=new _i(ds,fs,t,e);o.layers=this.layers,this.add(o);const c=new _i(ds,fs,t,e);c.layers=this.layers,this.add(c);const l=new _i(ds,fs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Af extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class tu{static{tu.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}}function dc(s,t,e,i){const n=Rf(i);switch(e){case Eh:return s*t;case rl:return s*t/n.components*n.byteLength;case al:return s*t/n.components*n.byteLength;case $n:return s*t*2/n.components*n.byteLength;case ol:return s*t*2/n.components*n.byteLength;case Th:return s*t*3/n.components*n.byteLength;case Ui:return s*t*4/n.components*n.byteLength;case ll:return s*t*4/n.components*n.byteLength;case $r:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xo:case yo:return Math.max(s,16)*Math.max(t,8)/4;case vo:case _o:return Math.max(s,8)*Math.max(t,8)/2;case Mo:case So:case wo:case Eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case bo:case Qr:case To:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ho:case Go:case Vo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case jr:case $o:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rf(s){switch(s){case oi:case Mh:return{byteLength:1,components:1};case er:case Sh:case Ni:return{byteLength:2,components:1};case nl:case sl:return{byteLength:2,components:4};case qi:case il:case Ii:return{byteLength:4,components:1};case bh:case wh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);function eu(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Cf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const y=d[f];s.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Em=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Om=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ym=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,c0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:If,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:kf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:zf,begin_vertex:Bf,beginnormal_vertex:Hf,bsdfs:Gf,iridescence_fragment:Vf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Zf,color_fragment:Yf,color_pars_fragment:Kf,color_pars_vertex:Jf,color_vertex:Qf,common:jf,cube_uv_reflection_fragment:tp,defaultnormal_vertex:ep,displacementmap_pars_vertex:ip,displacementmap_vertex:np,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:ap,colorspace_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:Sp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:xp,lights_lambert_fragment:_p,lights_lambert_pars_fragment:yp,lights_pars_begin:Mp,lights_toon_fragment:bp,lights_toon_pars_fragment:wp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Rp,lights_fragment_begin:Cp,lights_fragment_maps:Pp,lights_fragment_end:Lp,lightprobes_pars_fragment:Dp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Up,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:kp,map_fragment:Fp,map_pars_fragment:Op,map_particle_fragment:zp,map_particle_pars_fragment:Bp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Vp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:$p,morphtarget_vertex:qp,normal_fragment_begin:Zp,normal_fragment_maps:Yp,normal_pars_fragment:Kp,normal_pars_vertex:Jp,normal_vertex:Qp,normalmap_pars_fragment:jp,clearcoat_normal_fragment_begin:tm,clearcoat_normal_fragment_maps:em,clearcoat_pars_fragment:im,iridescence_pars_fragment:nm,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:vm,skinning_vertex:xm,skinnormal_vertex:_m,specularmap_fragment:ym,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Rm,worldpos_vertex:Cm,background_vert:Pm,background_frag:Lm,backgroundCube_vert:Dm,backgroundCube_frag:Im,cube_vert:Um,cube_frag:Nm,depth_vert:km,depth_frag:Fm,distance_vert:Om,distance_frag:zm,equirect_vert:Bm,equirect_frag:Hm,linedashed_vert:Gm,linedashed_frag:Vm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:$m,meshlambert_frag:qm,meshmatcap_vert:Zm,meshmatcap_frag:Ym,meshnormal_vert:Km,meshnormal_frag:Jm,meshphong_vert:Qm,meshphong_frag:jm,meshphysical_vert:t0,meshphysical_frag:e0,meshtoon_vert:i0,meshtoon_frag:n0,points_vert:s0,points_frag:r0,shadow_vert:a0,shadow_frag:o0,sprite_vert:l0,sprite_frag:c0},_t={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Vi={basic:{uniforms:ri([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:ri([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:ri([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:ri([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:ri([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:ri([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:ri([_t.points,_t.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:ri([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:ri([_t.common,_t.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:ri([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:ri([_t.sprite,_t.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:ri([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:ri([_t.lights,_t.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Vi.physical={uniforms:ri([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const zr={r:0,b:0,g:0},h0=new oe,iu=new Zt;iu.set(-1,0,0,0,1,0,0,0,1);function u0(s,t,e,i,n,r){const a=new Ht(0);let o=n===!0?0:1,c,l,h=null,d=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const x=S.backgroundBlurriness>0;E=t.get(E,x)}return E}function g(S){let E=!1;const x=f(S);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,E){const x=f(E);x&&(x.isCubeTexture||x.mapping===oa)?(l===void 0&&(l=new Wt(new Te(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Es(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(h0.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(iu),l.material.toneMapped=ce.getTransfer(x.colorSpace)!==_e,(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Wt(new vi(2,2),new Ye({name:"BackgroundMaterial",uniforms:Es(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ce.getTransfer(x.colorSpace)!==_e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,E){S.getRGB(zr,qh(s)),e.buffers.color.setClear(zr.r,zr.g,zr.b,E,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function d0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null);let r=n,a=!1;function o(I,L,P,D,N){let B=!1;const O=d(I,D,P,L);r!==O&&(r=O,l(r.object)),B=f(I,D,P,N),B&&g(I,D,P,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,x(I,L,P,D),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,L,P,D){const N=D.wireframe===!0;let B=i[L.id];B===void 0&&(B={},i[L.id]=B);const O=I.isInstancedMesh===!0?I.id:0;let Q=B[O];Q===void 0&&(Q={},B[O]=Q);let W=Q[P.id];W===void 0&&(W={},Q[P.id]=W);let Z=W[N];return Z===void 0&&(Z=u(c()),W[N]=Z),Z}function u(I){const L=[],P=[],D=[];for(let N=0;N<e;N++)L[N]=0,P[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,L,P,D){const N=r.attributes,B=L.attributes;let O=0;const Q=P.getAttributes();for(const W in Q)if(Q[W].location>=0){const j=N[W];let Et=B[W];if(Et===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Et=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Et=I.instanceColor)),j===void 0||j.attribute!==Et||Et&&j.data!==Et.data)return!0;O++}return r.attributesNum!==O||r.index!==D}function g(I,L,P,D){const N={},B=L.attributes;let O=0;const Q=P.getAttributes();for(const W in Q)if(Q[W].location>=0){let j=B[W];j===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Et={};Et.attribute=j,j&&j.data&&(Et.data=j.data),N[W]=Et,O++}r.attributes=N,r.attributesNum=O,r.index=D}function y(){const I=r.newAttributes;for(let L=0,P=I.length;L<P;L++)I[L]=0}function m(I){p(I,0)}function p(I,L){const P=r.newAttributes,D=r.enabledAttributes,N=r.attributeDivisors;P[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),N[I]!==L&&(s.vertexAttribDivisor(I,L),N[I]=L)}function S(){const I=r.newAttributes,L=r.enabledAttributes;for(let P=0,D=L.length;P<D;P++)L[P]!==I[P]&&(s.disableVertexAttribArray(P),L[P]=0)}function E(I,L,P,D,N,B,O){O===!0?s.vertexAttribIPointer(I,L,P,N,B):s.vertexAttribPointer(I,L,P,D,N,B)}function x(I,L,P,D){y();const N=D.attributes,B=P.getAttributes(),O=L.defaultAttributeValues;for(const Q in B){const W=B[Q];if(W.location>=0){let Z=N[Q];if(Z===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){const j=Z.normalized,Et=Z.itemSize,St=t.get(Z);if(St===void 0)continue;const Kt=St.buffer,qt=St.type,Gt=St.bytesPerElement,Y=qt===s.INT||qt===s.UNSIGNED_INT||Z.gpuType===il;if(Z.isInterleavedBufferAttribute){const it=Z.data,dt=it.stride,zt=Z.offset;if(it.isInstancedInterleavedBuffer){for(let vt=0;vt<W.locationSize;vt++)p(W.location+vt,it.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let vt=0;vt<W.locationSize;vt++)m(W.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let vt=0;vt<W.locationSize;vt++)E(W.location+vt,Et/W.locationSize,qt,j,dt*Gt,(zt+Et/W.locationSize*vt)*Gt,Y)}else{if(Z.isInstancedBufferAttribute){for(let it=0;it<W.locationSize;it++)p(W.location+it,Z.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let it=0;it<W.locationSize;it++)m(W.location+it);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let it=0;it<W.locationSize;it++)E(W.location+it,Et/W.locationSize,qt,j,Et*Gt,Et/W.locationSize*it*Gt,Y)}}else if(O!==void 0){const j=O[Q];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(W.location,j);break;case 3:s.vertexAttrib3fv(W.location,j);break;case 4:s.vertexAttrib4fv(W.location,j);break;default:s.vertexAttrib1fv(W.location,j)}}}}S()}function T(){b();for(const I in i){const L=i[I];for(const P in L){const D=L[P];for(const N in D){const B=D[N];for(const O in B)h(B[O].object),delete B[O];delete D[N]}}delete i[I]}}function M(I){if(i[I.id]===void 0)return;const L=i[I.id];for(const P in L){const D=L[P];for(const N in D){const B=D[N];for(const O in B)h(B[O].object),delete B[O];delete D[N]}}delete i[I.id]}function A(I){for(const L in i){const P=i[L];for(const D in P){const N=P[D];if(N[I.id]===void 0)continue;const B=N[I.id];for(const O in B)h(B[O].object),delete B[O];delete N[I.id]}}}function v(I){for(const L in i){const P=i[L],D=I.isInstancedMesh===!0?I.id:0,N=P[D];if(N!==void 0){for(const B in N){const O=N[B];for(const Q in O)h(O[Q].object),delete O[Q];delete N[B]}delete P[D],Object.keys(P).length===0&&delete i[L]}}}function b(){R(),a=!0,r!==n&&(r=n,l(r.object))}function R(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function f0(s,t,e){let i;function n(c){i=c}function r(c,l){s.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function p0(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Ui&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==oi&&A!==Ii&&!v&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&($t("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,maxSamples:T,samples:M}}function m0(s){const t=this;let e=null,i=0,n=!1,r=!1;const a=new yn,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:i,E=S*4;let x=p.clippingState||null;c.value=x,x=h(g,u,E,f);for(let T=0;T!==E;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=c.value,g!==!0||m===null){const p=f+y*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=f;E!==y;++E,x+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}const _s=4,g0=6,v0=20,x0=256,ks=new ha,fc=new Ht;let $a=null,qa=0,Za=0,Ya=!1;const _0=new U,Fn=new U;class pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){const{size:a=256,position:o=_0}=r;$a=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,n,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget($a,qa,Za),this._renderer.xr.enabled=Ya,t.scissorTest=!1,ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===Ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),$a=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ni,format:Ui,colorSpace:ea,depthBuffer:!1},n=mc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=y0(r)),this._blurMaterial=S0(r,t,e),this._ggxMaterial=M0(r,t,e)}return n}_compileMaterial(t){const e=new Wt(new We,t);this._renderer.compile(e,ks)}_sceneToCubeUV(t,e,i,n,r){const c=new _i(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fc),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wt(new Te,new Di({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(fc),p=!0);for(let E=0;E<6;E++){const x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const T=this._cubeSize;ps(n,x*T,E>2?T:0,T,T),d.setRenderTarget(n),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Xn||t.mapping===Ss;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gc());const r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ps(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,ks)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-_s?i-g+_s:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ps(r,m,p,3*y,2*y),n.setRenderTarget(r),n.render(o,ks),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,ps(t,m,p,3*y,2*y),n.setRenderTarget(t),n.render(o,ks)}_blur(t,e,i,n){const r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[n];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[n],d=3*h*(n>this._lodMax-_s?n-this._lodMax+_s:0),u=4*(this._cubeSize-h);ps(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(c,ks)}}function y0(s){const t=[],e=[];let i=s;const n=s-_s+1+g0;for(let r=0;r<n;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){const S=p%3*2/3-1,E=p>2?0:-1,x=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(x,f*u*p);for(let T=0;T<u;T++){const M=h[T*2]*2-1,A=h[T*2+1]*2-1;p===0?Fn.set(1,A,M):p===1?Fn.set(-M,1,-A):p===2?Fn.set(-M,A,1):p===3?Fn.set(-1,A,-M):p===4?Fn.set(-M,-1,A):Fn.set(M,A,-1),Fn.toArray(y,(p*u+T)*f)}}const m=new We;m.setAttribute("position",new Ze(g,f)),m.setAttribute("outputDirection",new Ze(y,f)),e.push(new Wt(m,null)),i>_s&&i--}return{lodMeshes:e,sizeLods:t}}function mc(s,t,e){const i=new di(s,t,e);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function M0(s,t,e){return new Ye({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function S0(s,t,e){return new Ye({name:"SphericalGaussianBlur",defines:{SAMPLES:v0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function gc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function vc(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rn,depthTest:!1,depthWrite:!1})}function ua(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class nu extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Fh(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Te(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:li,blending:rn});r.uniforms.tEquirect.value=e;const a=new Wt(n,r),o=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Ke),new Tf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}}function b0(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ma||f===ga)if(t.has(u)){const g=t.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const y=new nu(g.height);return y.fromEquirectangularTexture(s,u),t.set(u,y),u.addEventListener("dispose",l),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const f=u.mapping,g=f===ma||f===ga,y=f===Xn||f===Ss;if(g||y){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new pc(s)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return g&&S&&S.height>0||y&&S&&c(S)?(i===null&&(i=new pc(s)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===ma?u.mapping=Xn:f===ga&&(u.mapping=Ss),u}function c(u){let f=0;const g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function l(u){const f=u.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function w0(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&ys("WebGLRenderer: "+i+" extension not supported."),n}}}function E0(s,t,e,i){const n={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,g=d.attributes.position;let y=0;if(g===void 0)return;if(f!==null){const S=f.array;y=f.version;for(let E=0,x=S.length;E<x;E+=3){const T=S[E+0],M=S[E+1],A=S[E+2];u.push(T,M,M,A,A,T)}}else{const S=g.array;y=g.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const T=E+0,M=E+1,A=E+2;u.push(T,M,M,A,A,T)}}const m=new(g.count>=65535?Ih:Dh)(u,1);m.version=y;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function T0(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(i,u,r,d*a),e.update(u,i,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function A0(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function R0(s,t,e){const i=new WeakMap,n=new Le;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let R=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,M=1;T>t.maxTextureSize&&(M=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const A=new Float32Array(T*M*4*d),v=new Ch(A,T,M,d);v.type=Ii,v.needsUpdate=!0;const b=x*4;for(let I=0;I<d;I++){const L=p[I],P=S[I],D=E[I],N=T*M*4*I;for(let B=0;B<L.count;B++){const O=B*b;g===!0&&(n.fromBufferAttribute(L,B),A[N+O+0]=n.x,A[N+O+1]=n.y,A[N+O+2]=n.z,A[N+O+3]=0),y===!0&&(n.fromBufferAttribute(P,B),A[N+O+4]=n.x,A[N+O+5]=n.y,A[N+O+6]=n.z,A[N+O+7]=0),m===!0&&(n.fromBufferAttribute(D,B),A[N+O+8]=n.x,A[N+O+9]=n.y,A[N+O+10]=n.z,A[N+O+11]=D.itemSize===4?n.w:1)}}u={count:d,texture:v,size:new lt(T,M)},i.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",y),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function C0(s,t,e,i,n){let r=new WeakMap;function a(l){const h=n.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const P0={[fh]:"LINEAR_TONE_MAPPING",[ph]:"REINHARD_TONE_MAPPING",[mh]:"CINEON_TONE_MAPPING",[gh]:"ACES_FILMIC_TONE_MAPPING",[xh]:"AGX_TONE_MAPPING",[_h]:"NEUTRAL_TONE_MAPPING",[vh]:"CUSTOM_TONE_MAPPING"};function L0(s,t,e,i,n,r){const a=new di(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new We;l.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Pe([0,2,0,0,2,0],2));const h=new yf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Wt(l,h),u=new ha(-1,1,1,-1,0,1);let f=null,g=null,y=!1,m,p=null,S=[],E=!1;this.setSize=function(x,T){a.setSize(x,T),o!==null&&o.setSize(x,T),c!==null&&c.setSize(x,T);for(let M=0;M<S.length;M++){const A=S[M];A.setSize&&A.setSize(x,T)}},this.setEffects=function(x){S=x,E=S.length>0&&S[0].isRenderPass===!0;const T=a.width,M=a.height;S.length>0&&o===null&&(o=new di(T,M,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),c=new di(T,M,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){const v=S[A];v.setSize&&v.setSize(T,M)}},this.begin=function(x,T){if(y||x.toneMapping===$i&&S.length===0)return!1;if(p=T,T!==null){const M=T.width,A=T.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=$i,!0},this.hasRenderPass=function(){return E},this.end=function(x,T){x.toneMapping=m,y=!0;let M=a,A=o;for(let v=0;v<S.length;v++){const b=S[v];b.enabled!==!1&&(b.render(x,A,M,T),b.needsSwap!==!1&&(M=A,A=A===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,h.defines={},ce.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");const v=P0[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(p),x.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const su=new ii,Qo=new bs(1,1),ru=new Ch,au=new gd,ou=new Fh,xc=[],_c=[],yc=new Float32Array(16),Mc=new Float32Array(9),Sc=new Float32Array(4);function Rs(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=xc[n];if(r===void 0&&(r=new Float32Array(n),xc[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function da(s,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function D0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function I0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function U0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function N0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function k0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;Sc.set(i),s.uniformMatrix2fv(this.addr,!1,Sc),Ve(e,i)}}function F0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;Mc.set(i),s.uniformMatrix3fv(this.addr,!1,Mc),Ve(e,i)}}function O0(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;yc.set(i),s.uniformMatrix4fv(this.addr,!1,yc),Ve(e,i)}}function z0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function B0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function H0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function G0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function V0(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function W0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function X0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function $0(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function q0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Qo.compareFunction=e.isReversedDepthBuffer()?hl:cl,r=Qo):r=su,e.setTexture2D(t||r,n)}function Z0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||au,n)}function Y0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||ou,n)}function K0(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ru,n)}function J0(s){switch(s){case 5126:return D0;case 35664:return I0;case 35665:return U0;case 35666:return N0;case 35674:return k0;case 35675:return F0;case 35676:return O0;case 5124:case 35670:return z0;case 35667:case 35671:return B0;case 35668:case 35672:return H0;case 35669:case 35673:return G0;case 5125:return V0;case 36294:return W0;case 36295:return X0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return q0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return K0}}function Q0(s,t){s.uniform1fv(this.addr,t)}function j0(s,t){const e=Rs(t,this.size,2);s.uniform2fv(this.addr,e)}function tg(s,t){const e=Rs(t,this.size,3);s.uniform3fv(this.addr,e)}function eg(s,t){const e=Rs(t,this.size,4);s.uniform4fv(this.addr,e)}function ig(s,t){const e=Rs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ng(s,t){const e=Rs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sg(s,t){const e=Rs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rg(s,t){s.uniform1iv(this.addr,t)}function ag(s,t){s.uniform2iv(this.addr,t)}function og(s,t){s.uniform3iv(this.addr,t)}function lg(s,t){s.uniform4iv(this.addr,t)}function cg(s,t){s.uniform1uiv(this.addr,t)}function hg(s,t){s.uniform2uiv(this.addr,t)}function ug(s,t){s.uniform3uiv(this.addr,t)}function dg(s,t){s.uniform4uiv(this.addr,t)}function fg(s,t,e){const i=this.cache,n=t.length,r=da(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Qo:a=su;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function pg(s,t,e){const i=this.cache,n=t.length,r=da(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||au,r[a])}function mg(s,t,e){const i=this.cache,n=t.length,r=da(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||ou,r[a])}function gg(s,t,e){const i=this.cache,n=t.length,r=da(e,n);Ge(i,r)||(s.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ru,r[a])}function vg(s){switch(s){case 5126:return Q0;case 35664:return j0;case 35665:return tg;case 35666:return eg;case 35674:return ig;case 35675:return ng;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}class xg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}}class _g{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}}class yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(t,e[o.id],i)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function bc(s,t){s.seq.push(t),s.map[t.id]=t}function Mg(s,t,e){const i=s.name,n=i.length;for(Ka.lastIndex=0;;){const r=Ka.exec(i),a=Ka.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){bc(e,l===void 0?new xg(o,s,t):new _g(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new yg(o),bc(e,d)),e=d}}}class Kr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Mg(o,c,this)}const n=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function wc(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const Sg=37297;let bg=0;function wg(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Ec=new Zt;function Eg(s){ce._getMatrix(Ec,ce.workingColorSpace,s);const t=`mat3( ${Ec.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(s)){case ia:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Tc(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wg(s.getShaderSource(t),o)}else return r}function Tg(s,t){const e=Eg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ag={[fh]:"Linear",[ph]:"Reinhard",[mh]:"Cineon",[gh]:"ACESFilmic",[xh]:"AgX",[_h]:"Neutral",[vh]:"Custom"};function Rg(s,t){const e=Ag[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new U;function Cg(){ce.getLuminanceCoefficients(Br);const s=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Lg(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dg(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Xs(s){return s!==""}function Ac(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(s){return s.replace(Ig,Ng)}const Ug=new Map;function Ng(s,t){let e=ie[t];if(e===void 0){const i=Ug.get(t);if(i!==void 0)e=ie[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return jo(e)}const kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cc(s){return s.replace(kg,Fg)}function Fg(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Pc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Og={[Ys]:"SHADOWMAP_TYPE_PCF",[Vs]:"SHADOWMAP_TYPE_VSM"};function zg(s){return Og[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Bg={[Xn]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function Hg(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Bg[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Gg={[Ss]:"ENVMAP_MODE_REFRACTION"};function Vg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Wg={[dh]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[Yu]:"ENVMAP_BLENDING_ADD"};function Xg(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Wg[s.combine]||"ENVMAP_BLENDING_NONE"}function $g(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function qg(s,t,e,i){const n=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=zg(e),l=Hg(e),h=Vg(e),d=Xg(e),u=$g(e),f=Pg(e),g=Lg(r),y=n.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$i?"#define TONE_MAPPING":"",e.toneMapping!==$i?ie.tonemapping_pars_fragment:"",e.toneMapping!==$i?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Tg("linearToOutputTexel",e.outputColorSpace),Cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),a=jo(a),a=Ac(a,e),a=Rc(a,e),o=jo(o),o=Ac(o,e),o=Rc(o,e),a=Cc(a),o=Cc(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,x=S+p+o,T=wc(n,n.VERTEX_SHADER,E),M=wc(n,n.FRAGMENT_SHADER,x);n.attachShader(y,T),n.attachShader(y,M),e.index0AttributeName!==void 0?n.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(y,0,"position"),n.linkProgram(y);function A(I){if(s.debug.checkShaderErrors){const L=n.getProgramInfoLog(y)||"",P=n.getShaderInfoLog(T)||"",D=n.getShaderInfoLog(M)||"",N=L.trim(),B=P.trim(),O=D.trim();let Q=!0,W=!0;if(n.getProgramParameter(y,n.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,y,T,M);else{const Z=Tc(n,T,"vertex"),j=Tc(n,M,"fragment");ue("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(y,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Z+`
`+j)}else N!==""?$t("WebGLProgram: Program Info Log:",N):(B===""||O==="")&&(W=!1);W&&(I.diagnostics={runnable:Q,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:O,prefix:p}})}n.deleteShader(T),n.deleteShader(M),v=new Kr(n,y),b=Dg(n,y)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=n.getProgramParameter(y,Sg)),R},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=M,this}let Zg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Kg(t),e.set(t,i)),i}}class Kg{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}}function Jg(s){return s===$n||s===Qr||s===jr}function Qg(s,t,e,i,n,r){const a=new Ph,o=new Yg,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function y(v,b,R,I,L,P){const D=I.fog,N=L.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=t.get(v.envMap||B,O),W=Q&&Q.mapping===oa?Q.image.height:null,Z=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&$t("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Et=j!==void 0?j.length:0;let St=0;N.morphAttributes.position!==void 0&&(St=1),N.morphAttributes.normal!==void 0&&(St=2),N.morphAttributes.color!==void 0&&(St=3);let Kt,qt,Gt,Y;if(Z){const be=Vi[Z];Kt=be.vertexShader,qt=be.fragmentShader}else{Kt=v.vertexShader,qt=v.fragmentShader;const be=o.getVertexShaderStage(v),me=o.getFragmentShaderStage(v);o.update(v,be,me),Gt=be.id,Y=me.id}const it=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),zt=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Bt=!!v.map,he=!!v.matcap,et=!!Q,q=!!v.aoMap,st=!!v.lightMap,at=!!v.bumpMap&&v.wireframe===!1,ot=!!v.normalMap,It=!!v.displacementMap,Ct=!!v.emissiveMap,Ft=!!v.metalnessMap,Vt=!!v.roughnessMap,k=v.anisotropy>0,pe=v.clearcoat>0,se=v.dispersion>0,C=v.retroreflectivity>0,_=v.iridescence>0,H=v.sheen>0,X=v.transmission>0,K=k&&!!v.anisotropyMap,ct=pe&&!!v.clearcoatMap,ht=pe&&!!v.clearcoatNormalMap,J=pe&&!!v.clearcoatRoughnessMap,nt=_&&!!v.iridescenceMap,ft=_&&!!v.iridescenceThicknessMap,Nt=H&&!!v.sheenColorMap,xt=H&&!!v.sheenRoughnessMap,pt=!!v.specularMap,kt=!!v.specularColorMap,Xt=!!v.specularIntensityMap,Jt=X&&!!v.transmissionMap,z=X&&!!v.thicknessMap,mt=!!v.gradientMap,tt=!!v.alphaMap,gt=v.alphaTest>0,wt=!!v.alphaHash,rt=!!v.extensions;let Ot=$i;v.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Dt={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:Kt,fragmentShader:qt,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:Y,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:zt,instancingColor:zt&&L.instanceColor!==null,instancingMorph:zt&&L.morphTexture!==null,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ce.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Bt,matcap:he,envMap:et,envMapMode:et&&Q.mapping,envMapCubeUVHeight:W,aoMap:q,lightMap:st,bumpMap:at,normalMap:ot,displacementMap:It,emissiveMap:Ct,normalMapObjectSpace:ot&&v.normalMapType===Qu,normalMapTangentSpace:ot&&v.normalMapType===ta,packedNormalMap:ot&&v.normalMapType===ta&&Jg(v.normalMap.format),metalnessMap:Ft,roughnessMap:Vt,anisotropy:k,anisotropyMap:K,clearcoat:pe,clearcoatMap:ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:J,dispersion:se,retroreflection:C,iridescence:_,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:H,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:pt,specularColorMap:kt,specularIntensityMap:Xt,transmission:X,transmissionMap:Jt,thicknessMap:z,gradientMap:mt,opaque:v.transparent===!1&&v.blending===An&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:wt,combine:v.combine,mapUv:Bt&&g(v.map.channel),aoMapUv:q&&g(v.aoMap.channel),lightMapUv:st&&g(v.lightMap.channel),bumpMapUv:at&&g(v.bumpMap.channel),normalMapUv:ot&&g(v.normalMap.channel),displacementMapUv:It&&g(v.displacementMap.channel),emissiveMapUv:Ct&&g(v.emissiveMap.channel),metalnessMapUv:Ft&&g(v.metalnessMap.channel),roughnessMapUv:Vt&&g(v.roughnessMap.channel),anisotropyMapUv:K&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&g(v.sheenRoughnessMap.channel),specularMapUv:pt&&g(v.specularMap.channel),specularColorMapUv:kt&&g(v.specularColorMap.channel),specularIntensityMapUv:Xt&&g(v.specularIntensityMap.channel),transmissionMapUv:Jt&&g(v.transmissionMap.channel),thicknessMapUv:z&&g(v.thicknessMap.channel),alphaMapUv:tt&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ot||k),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Bt||tt),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&ot===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Bt&&v.map.isVideoTexture===!0&&ce.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:Ct&&v.emissiveMap.isVideoTexture===!0&&ce.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===hi,flipSided:v.side===li,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function m(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const R in v.defines)b.push(R),b.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(b,v),S(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){const b=f[v.type];let R;if(b){const I=Vi[b];R=Zh.clone(I.uniforms)}else R=v.uniforms;return R}function x(v,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new qg(s,b,v,n),l.push(R),h.set(b,R)),R}function T(v){if(--v.usedTimes===0){const b=l.indexOf(v);l[b]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:T,releaseShaderCache:M,programs:l,dispose:A}}function jg(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function tv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Lc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Dc(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let S=s[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},s[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function c(u,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);const E=o(u,f,g,y,m,p);g.transmission>0?i.push(E):g.transparent===!0?n.push(E):e.push(E)}function l(u,f,g,y,m,p){const S=o(u,f,g,y,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?n.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||tv),i.length>1&&i.sort(f||Lc),n.length>1&&n.sort(f||Lc)}function d(){for(let u=t,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:c,unshift:l,finish:d,sort:h}}function ev(){let s=new WeakMap;function t(i,n){const r=s.get(i);let a;return r===void 0?(a=new Dc,s.set(i,[a])):n>=r.length?(a=new Dc,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function iv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function nv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sv=0;function rv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function av(s){const t=new iv,e=nv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);const n=new U,r=new oe,a=new oe;function o(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,E=0,x=0,T=0,M=0,A=0,v=0,b=0,R=0;l.sort(rv);for(let L=0,P=l.length;L<P;L++){const D=l[L],N=D.color,B=D.intensity,O=D.distance;let Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$n?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=N.r*B,d+=N.g*B,u+=N.b*B;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],B);R++}else if(D.isSunLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,j=e.get(D);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=Q;const Et=Z.getViewportCount();for(let St=0;St<Et;St++)i.sunShadowMatrix[y+St]=Z.getMatrix(St),i.sunShadowCascade[y+St]=Z._cascadeData[St];y+=Et,g++}i.sun[f]=W,f++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,j=e.get(D);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=D.shadow.matrix,T++}i.directional[m]=W,m++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(N).multiplyScalar(B),W.distance=O,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[S]=W;const Z=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,Z.updateMatrices(D),D.castShadow&&b++),i.spotLightMatrix[S]=Z.matrix,D.castShadow){const j=e.get(D);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,i.spotShadow[S]=j,i.spotShadowMap[S]=Q,A++}S++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(N).multiplyScalar(B),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=W,E++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Z=D.shadow,j=e.get(D);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=W,p++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(B),W.groundColor.copy(D.groundColor).multiplyScalar(B),i.hemi[x]=W,x++}}E>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==S||I.rectAreaLength!==E||I.hemiLength!==x||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==M||I.numSpotShadows!==A||I.numSpotMaps!==v||I.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-b,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=S,I.rectAreaLength=E,I.hemiLength=x,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=M,I.numSpotShadows=A,I.numSpotMaps=v,I.numLightProbes=R,i.version=sv++)}function c(l,h){let d=0,u=0,f=0,g=0,y=0,m=0;const p=h.matrixWorldInverse;for(let S=0,E=l.length;S<E;S++){const x=l[S];if(x.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),u++}else if(x.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(n),T.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const T=i.rectArea[y];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Ic(s){const t=new av(s),e=[],i=[],n=[];function r(u){d.camera=u,e.length=0,i.length=0,n.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function c(u){n.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function ov(s){let t=new WeakMap;function e(n,r=0){const a=t.get(n);let o;return a===void 0?(o=new Ic(s),t.set(n,[o])):r>=a.length?(o=new Ic(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const lv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hv=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],uv=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Uc=new oe,Fs=new U,Ja=new U;function dv(s,t,e){let i=new fl;const n=new lt,r=new lt,a=new Le,o=new Sf,c=new bf,l={},h=e.maxTextureSize,d={[Cn]:li,[li]:Cn,[hi]:hi},u=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:lv,fragmentShader:cv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new We;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Wt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(M,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Cu&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ys);const b=s.getRenderTarget(),R=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(rn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const P=p!==this.type;P&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(N=>N.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,N=M.length;D<N;D++){const B=M[D],O=B.shadow;if(O===void 0){$t("WebGLShadowMap:",B,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);const Q=O.getFrameExtents();n.multiply(Q),r.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/Q.x),n.x=r.x*Q.x,O.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/Q.y),n.y=r.y*Q.y,O.mapSize.y=r.y));const W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||P===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Vs){if(B.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new di(n.x,n.y,{format:$n,type:Ni,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),O.map.texture.name=B.name+".shadowMap",O.map.depthTexture=new bs(n.x,n.y,Ii),O.map.depthTexture.name=B.name+".shadowMapDepth",O.map.depthTexture.format=ln,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Be,O.map.depthTexture.magFilter=Be}else B.isPointLight?(O.map=new nu(n.x),O.map.depthTexture=new kd(n.x,qi)):(O.map=new di(n.x,n.y),O.map.depthTexture=new bs(n.x,n.y,qi)),O.map.depthTexture.name=B.name+".shadowMap",O.map.depthTexture.format=ln,this.type===Ys?(O.map.depthTexture.compareFunction=W?hl:cl,O.map.depthTexture.minFilter=Ke,O.map.depthTexture.magFilter=Ke):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Be,O.map.depthTexture.magFilter=Be);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);const Z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();B.isPointLight!==!0&&O.updateMatrices(B,v);for(let j=0;j<Z;j++){const Et=O.getCamera(j);if(B.isPointLight){const St=O.camera,Kt=O.matrix,qt=B.distance||St.far;qt!==St.far&&(St.far=qt,St.updateProjectionMatrix()),Fs.setFromMatrixPosition(B.matrixWorld),St.position.copy(Fs),Ja.copy(St.position),Ja.add(hv[j]),St.up.copy(uv[j]),St.lookAt(Ja),St.updateMatrixWorld(),Kt.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Uc.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Uc,St.coordinateSystem,St.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,j),s.clear();else{j===0&&(s.setRenderTarget(O.map),s.clear());const St=O.getViewport(j);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),L.viewport(a)}i=O.getFrustum(j),x(A,v,Et,B,this.type)}O.isPointLightShadow!==!0&&this.type===Vs&&S(O,v),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,R,I)};function S(M,A){const v=t.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new di(n.x,n.y,{format:$n,type:Ni}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(A,null,v,u,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(A,null,v,f,y,null)}function E(M,A,v,b){let R=null;const I=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=R.uuid,P=A.uuid;let D=l[L];D===void 0&&(D={},l[L]=D);let N=D[P];N===void 0&&(N=R.clone(),D[P]=N,A.addEventListener("dispose",T)),R=N}if(R.visible=A.visible,R.wireframe=A.wireframe,b===Vs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=s.properties.get(R);L.light=v}return R}function x(M,A,v,b,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Vs)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);const P=t.update(M),D=M.material;if(Array.isArray(D)){const N=P.groups;for(let B=0,O=N.length;B<O;B++){const Q=N[B],W=D[Q.materialIndex];if(W&&W.visible){const Z=E(M,W,b,R);M.onBeforeShadow(s,M,A,v,P,Z,Q),s.renderBufferDirect(v,null,P,Z,M,Q),M.onAfterShadow(s,M,A,v,P,Z,Q)}}}else if(D.visible){const N=E(M,D,b,R);M.onBeforeShadow(s,M,A,v,P,N,null),s.renderBufferDirect(v,null,P,N,M,null),M.onAfterShadow(s,M,A,v,P,N,null)}}const L=M.children;for(let P=0,D=L.length;P<D;P++)x(L[P],A,v,b,R)}function T(M){M.target.removeEventListener("dispose",T);for(const v in l){const b=l[v],R=M.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function fv(s,t){function e(){let z=!1;const mt=new Le;let tt=null;const gt=new Le(0,0,0,0);return{setMask:function(wt){tt!==wt&&!z&&(s.colorMask(wt,wt,wt,wt),tt=wt)},setLocked:function(wt){z=wt},setClear:function(wt,rt,Ot,Dt,be){be===!0&&(wt*=Dt,rt*=Dt,Ot*=Dt),mt.set(wt,rt,Ot,Dt),gt.equals(mt)===!1&&(s.clearColor(wt,rt,Ot,Dt),gt.copy(mt))},reset:function(){z=!1,tt=null,gt.set(-1,0,0,0)}}}function i(){let z=!1,mt=!1,tt=null,gt=null,wt=null;return{setReversed:function(rt){if(mt!==rt){const Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),mt=rt;const Dt=wt;wt=null,this.setClear(Dt)}},getReversed:function(){return mt},setTest:function(rt){rt?it(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!z&&(s.depthMask(rt),tt=rt)},setFunc:function(rt){if(mt&&(rt=cd[rt]),gt!==rt){switch(rt){case lo:s.depthFunc(s.NEVER);break;case co:s.depthFunc(s.ALWAYS);break;case ho:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case uo:s.depthFunc(s.EQUAL);break;case fo:s.depthFunc(s.GEQUAL);break;case po:s.depthFunc(s.GREATER);break;case mo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=rt}},setLocked:function(rt){z=rt},setClear:function(rt){wt!==rt&&(wt=rt,mt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){z=!1,tt=null,gt=null,wt=null,mt=!1}}}function n(){let z=!1,mt=null,tt=null,gt=null,wt=null,rt=null,Ot=null,Dt=null,be=null;return{setTest:function(me){z||(me?it(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(me){mt!==me&&!z&&(s.stencilMask(me),mt=me)},setFunc:function(me,Ei,ki){(tt!==me||gt!==Ei||wt!==ki)&&(s.stencilFunc(me,Ei,ki),tt=me,gt=Ei,wt=ki)},setOp:function(me,Ei,ki){(rt!==me||Ot!==Ei||Dt!==ki)&&(s.stencilOp(me,Ei,ki),rt=me,Ot=Ei,Dt=ki)},setLocked:function(me){z=me},setClear:function(me){be!==me&&(s.clearStencil(me),be=me)},reset:function(){z=!1,mt=null,tt=null,gt=null,wt=null,rt=null,Ot=null,Dt=null,be=null}}}const r=new e,a=new i,o=new n,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,x=null,T=null,M=null,A=null,v=new Ht(0,0,0),b=0,R=!1,I=null,L=null,P=null,D=null,N=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let Z=null,j={};const Et=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Kt=new Le().fromArray(Et),qt=new Le().fromArray(St);function Gt(z,mt,tt,gt){const wt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(z,rt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<tt;Ot++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(mt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return rt}const Y={};Y[s.TEXTURE_2D]=Gt(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Gt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Gt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Gt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(s.DEPTH_TEST),a.setFunc(js),at(!1),ot(Ll),it(s.CULL_FACE),q(rn);function it(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function dt(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function zt(z,mt){return u[z]!==mt?(s.bindFramebuffer(z,mt),u[z]=mt,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function vt(z,mt){let tt=g,gt=!1;if(z){tt=f.get(mt),tt===void 0&&(tt=[],f.set(mt,tt));const wt=z.textures;if(tt.length!==wt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Ot=wt.length;rt<Ot;rt++)tt[rt]=s.COLOR_ATTACHMENT0+rt;tt.length=wt.length,gt=!0}}else tt[0]!==s.BACK&&(tt[0]=s.BACK,gt=!0);gt&&s.drawBuffers(tt)}function Bt(z){return y!==z?(s.useProgram(z),y=z,!0):!1}const he={[gs]:s.FUNC_ADD,[Lu]:s.FUNC_SUBTRACT,[Du]:s.FUNC_REVERSE_SUBTRACT};he[Iu]=s.MIN,he[Uu]=s.MAX;const et={[Nu]:s.ZERO,[ku]:s.ONE,[Fu]:s.SRC_COLOR,[hh]:s.SRC_ALPHA,[Vu]:s.SRC_ALPHA_SATURATE,[Hu]:s.DST_COLOR,[zu]:s.DST_ALPHA,[Ou]:s.ONE_MINUS_SRC_COLOR,[uh]:s.ONE_MINUS_SRC_ALPHA,[Gu]:s.ONE_MINUS_DST_COLOR,[Bu]:s.ONE_MINUS_DST_ALPHA,[Wu]:s.CONSTANT_COLOR,[Xu]:s.ONE_MINUS_CONSTANT_COLOR,[$u]:s.CONSTANT_ALPHA,[qu]:s.ONE_MINUS_CONSTANT_ALPHA};function q(z,mt,tt,gt,wt,rt,Ot,Dt,be,me){if(z===rn){m===!0&&(dt(s.BLEND),m=!1);return}if(m===!1&&(it(s.BLEND),m=!0),z!==Pu){if(z!==p||me!==R){if((S!==gs||T!==gs)&&(s.blendEquation(s.FUNC_ADD),S=gs,T=gs),me)switch(z){case An:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wn:s.blendFunc(s.ONE,s.ONE);break;case Dl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Il:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ue("WebGLState: Invalid blending: ",z);break}else switch(z){case An:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dl:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",z);break}E=null,x=null,M=null,A=null,v.set(0,0,0),b=0,p=z,R=me}return}wt=wt||mt,rt=rt||tt,Ot=Ot||gt,(mt!==S||wt!==T)&&(s.blendEquationSeparate(he[mt],he[wt]),S=mt,T=wt),(tt!==E||gt!==x||rt!==M||Ot!==A)&&(s.blendFuncSeparate(et[tt],et[gt],et[rt],et[Ot]),E=tt,x=gt,M=rt,A=Ot),(Dt.equals(v)===!1||be!==b)&&(s.blendColor(Dt.r,Dt.g,Dt.b,be),v.copy(Dt),b=be),p=z,R=!1}function st(z,mt){z.side===hi?dt(s.CULL_FACE):it(s.CULL_FACE);let tt=z.side===li;mt&&(tt=!tt),at(tt),z.blending===An&&z.transparent===!1?q(rn):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const gt=z.stencilWrite;o.setTest(gt),gt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ct(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(z){I!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),I=z)}function ot(z){z!==Au?(it(s.CULL_FACE),z!==L&&(z===Ll?s.cullFace(s.BACK):z===Ru?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),L=z}function It(z){z!==P&&(O&&s.lineWidth(z),P=z)}function Ct(z,mt,tt){z?(it(s.POLYGON_OFFSET_FILL),(D!==mt||N!==tt)&&(D=mt,N=tt,a.getReversed()&&(mt=-mt),s.polygonOffset(mt,tt))):dt(s.POLYGON_OFFSET_FILL)}function Ft(z){z?it(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function Vt(z){z===void 0&&(z=s.TEXTURE0+B-1),Z!==z&&(s.activeTexture(z),Z=z)}function k(z,mt,tt){tt===void 0&&(Z===null?tt=s.TEXTURE0+B-1:tt=Z);let gt=j[tt];gt===void 0&&(gt={type:void 0,texture:void 0},j[tt]=gt),(gt.type!==z||gt.texture!==mt)&&(Z!==tt&&(s.activeTexture(tt),Z=tt),s.bindTexture(z,mt||Y[z]),gt.type=z,gt.texture=mt)}function pe(){const z=j[Z];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{s.compressedTexImage2D(...arguments)}catch(z){ue("WebGLState:",z)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(z){ue("WebGLState:",z)}}function _(){try{s.texSubImage2D(...arguments)}catch(z){ue("WebGLState:",z)}}function H(){try{s.texSubImage3D(...arguments)}catch(z){ue("WebGLState:",z)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(z){ue("WebGLState:",z)}}function K(){try{s.compressedTexSubImage3D(...arguments)}catch(z){ue("WebGLState:",z)}}function ct(){try{s.texStorage2D(...arguments)}catch(z){ue("WebGLState:",z)}}function ht(){try{s.texStorage3D(...arguments)}catch(z){ue("WebGLState:",z)}}function J(){try{s.texImage2D(...arguments)}catch(z){ue("WebGLState:",z)}}function nt(){try{s.texImage3D(...arguments)}catch(z){ue("WebGLState:",z)}}function ft(z){return d[z]!==void 0?d[z]:s.getParameter(z)}function Nt(z,mt){d[z]!==mt&&(s.pixelStorei(z,mt),d[z]=mt)}function xt(z){Kt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Kt.copy(z))}function pt(z){qt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),qt.copy(z))}function kt(z,mt){let tt=l.get(mt);tt===void 0&&(tt=new WeakMap,l.set(mt,tt));let gt=tt.get(z);gt===void 0&&(gt=s.getUniformBlockIndex(mt,z.name),tt.set(z,gt))}function Xt(z,mt){const gt=l.get(mt).get(z);c.get(mt)!==gt&&(s.uniformBlockBinding(mt,gt,z.__bindingPointIndex),c.set(mt,gt))}function Jt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,j={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,E=null,x=null,T=null,M=null,A=null,v=new Ht(0,0,0),b=0,R=!1,I=null,L=null,P=null,D=null,N=null,Kt.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:dt,bindFramebuffer:zt,drawBuffers:vt,useProgram:Bt,setBlending:q,setMaterial:st,setFlipSided:at,setCullFace:ot,setLineWidth:It,setPolygonOffset:Ct,setScissorTest:Ft,activeTexture:Vt,bindTexture:k,unbindTexture:pe,compressedTexImage2D:se,compressedTexImage3D:C,texImage2D:J,texImage3D:nt,pixelStorei:Nt,getParameter:ft,updateUBOMapping:kt,uniformBlockBinding:Xt,texStorage2D:ct,texStorage3D:ht,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:xt,viewport:pt,reset:Jt}}function pv(s,t,e,i,n,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,_){return g?new OffscreenCanvas(C,_):na("canvas")}function m(C,_,H){let X=1;const K=se(C);if((K.width>H||K.height>H)&&(X=H/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ct=Math.floor(X*K.width),ht=Math.floor(X*K.height);u===void 0&&(u=y(ct,ht));const J=_?y(ct,ht):u;return J.width=ct,J.height=ht,J.getContext("2d").drawImage(C,0,0,ct,ht),$t("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ct+"x"+ht+")."),J}else return"data"in C&&$t("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){s.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(C,_,H,X,K,ct=!1){if(C!==null){if(s[C]!==void 0)return s[C];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ht;X&&(ht=t.get("EXT_texture_norm16"),ht||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8),H===s.UNSIGNED_SHORT&&ht&&(J=ht.R16_EXT),H===s.SHORT&&ht&&(J=ht.R16_SNORM_EXT)),_===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),_===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8),H===s.UNSIGNED_SHORT&&ht&&(J=ht.RG16_EXT),H===s.SHORT&&ht&&(J=ht.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),_===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),_===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),_===s.RGB&&(H===s.UNSIGNED_SHORT&&ht&&(J=ht.RGB16_EXT),H===s.SHORT&&ht&&(J=ht.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),_===s.RGBA){const nt=ct?ia:ce.getTransfer(K);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=nt===_e?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&ht&&(J=ht.RGBA16_EXT),H===s.SHORT&&ht&&(J=ht.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function T(C,_){let H;return C?_===null||_===qi||_===ir?H=s.DEPTH24_STENCIL8:_===Ii?H=s.DEPTH32F_STENCIL8:_===er&&(H=s.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qi||_===ir?H=s.DEPTH_COMPONENT24:_===Ii?H=s.DEPTH_COMPONENT32F:_===er&&(H=s.DEPTH_COMPONENT16),H}function M(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function A(C){const _=C.target;_.removeEventListener("dispose",A),b(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(C){const _=C.target;_.removeEventListener("dispose",v),I(_)}function b(C){const _=i.get(C);if(_.__webglInit===void 0)return;const H=C.source,X=f.get(H);if(X){const K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(C),Object.keys(X).length===0&&f.delete(H)}i.remove(C)}function R(C){const _=i.get(C);s.deleteTexture(_.__webglTexture);const H=C.source,X=f.get(H);delete X[_.__cacheKey],a.memory.textures--}function I(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)s.deleteFramebuffer(_.__webglFramebuffer[X][K]);else s.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)s.deleteFramebuffer(_.__webglFramebuffer[X]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const H=C.textures;for(let X=0,K=H.length;X<K;X++){const ct=i.get(H[X]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),a.memory.textures--),i.remove(H[X])}i.remove(C)}let L=0;function P(){L=0}function D(){return L}function N(C){L=C}function B(){const C=L;return C>=n.maxTextures&&$t("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,C}function O(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function Q(C,_){const H=i.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const X=C.image;if(X===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(H,C,_);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+_)}function W(C,_){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){dt(H,C,_);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+_)}function Z(C,_){const H=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){dt(H,C,_);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+_)}function j(C,_){const H=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){zt(H,C,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+_)}const Et={[tr]:s.REPEAT,[en]:s.CLAMP_TO_EDGE,[go]:s.MIRRORED_REPEAT},St={[Be]:s.NEAREST,[Ku]:s.NEAREST_MIPMAP_NEAREST,[dr]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[va]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},Kt={[td]:s.NEVER,[rd]:s.ALWAYS,[ed]:s.LESS,[cl]:s.LEQUAL,[id]:s.EQUAL,[hl]:s.GEQUAL,[nd]:s.GREATER,[sd]:s.NOTEQUAL};function qt(C,_){if(_.type===Ii&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===va||_.magFilter===dr||_.magFilter===Hn||_.minFilter===Ke||_.minFilter===va||_.minFilter===dr||_.minFilter===Hn)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Et[_.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Et[_.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Et[_.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,St[_.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,St[_.minFilter]),_.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Kt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Be||_.minFilter!==dr&&_.minFilter!==Hn||_.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Gt(C,_){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",A));const X=_.source;let K=f.get(X);K===void 0&&(K={},f.set(X,K));const ct=O(_);if(ct!==C.__cacheKey){K[ct]===void 0&&(K[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),K[ct].usedTimes++;const ht=K[C.__cacheKey];ht!==void 0&&(K[C.__cacheKey].usedTimes--,ht.usedTimes===0&&R(_)),C.__cacheKey=ct,C.__webglTexture=K[ct].texture}return H}function Y(C,_,H){return Math.floor(Math.floor(C/H)/_)}function it(C,_,H,X){const ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,H,X,_.data);else{ct.sort((Nt,xt)=>Nt.start-xt.start);let ht=0;for(let Nt=1;Nt<ct.length;Nt++){const xt=ct[ht],pt=ct[Nt],kt=xt.start+xt.count,Xt=Y(pt.start,_.width,4),Jt=Y(xt.start,_.width,4);pt.start<=kt+1&&Xt===Jt&&Y(pt.start+pt.count-1,_.width,4)===Xt?xt.count=Math.max(xt.count,pt.start+pt.count-xt.start):(++ht,ct[ht]=pt)}ct.length=ht+1;const J=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),ft=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Nt=0,xt=ct.length;Nt<xt;Nt++){const pt=ct[Nt],kt=Math.floor(pt.start/4),Xt=Math.ceil(pt.count/4),Jt=kt%_.width,z=Math.floor(kt/_.width),mt=Xt,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Jt,z,mt,tt,H,X,_.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,J),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,ft)}}function dt(C,_,H){let X=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=s.TEXTURE_3D);const K=Gt(C,_),ct=_.source;e.bindTexture(X,C.__webglTexture,s.TEXTURE0+H);const ht=i.get(ct);if(ct.version!==ht.__version||K===!0){if(e.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const tt=ce.getPrimaries(ce.workingColorSpace),gt=_.colorSpace===bn?null:ce.getPrimaries(_.colorSpace),wt=_.colorSpace===bn||tt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let nt=m(_.image,!1,n.maxTextureSize);nt=pe(_,nt);const ft=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type);let xt=x(_.internalFormat,ft,Nt,_.normalized,_.colorSpace,_.isVideoTexture);qt(X,_);let pt;const kt=_.mipmaps,Xt=_.isVideoTexture!==!0,Jt=ht.__version===void 0||K===!0,z=ct.dataReady,mt=M(_,nt);if(_.isDepthTexture)xt=T(_.format===Gn,_.type),Jt&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,xt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,xt,nt.width,nt.height,0,ft,Nt,null));else if(_.isDataTexture)if(kt.length>0){Xt&&Jt&&e.texStorage2D(s.TEXTURE_2D,mt,xt,kt[0].width,kt[0].height);for(let tt=0,gt=kt.length;tt<gt;tt++)pt=kt[tt],Xt?z&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,pt.width,pt.height,ft,Nt,pt.data):e.texImage2D(s.TEXTURE_2D,tt,xt,pt.width,pt.height,0,ft,Nt,pt.data);_.generateMipmaps=!1}else Xt?(Jt&&e.texStorage2D(s.TEXTURE_2D,mt,xt,nt.width,nt.height),z&&it(_,nt,ft,Nt)):e.texImage2D(s.TEXTURE_2D,0,xt,nt.width,nt.height,0,ft,Nt,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,xt,kt[0].width,kt[0].height,nt.depth);for(let tt=0,gt=kt.length;tt<gt;tt++)if(pt=kt[tt],_.format!==Ui)if(ft!==null)if(Xt){if(z)if(_.layerUpdates.size>0){const wt=dc(pt.width,pt.height,_.format,_.type);for(const rt of _.layerUpdates){const Ot=pt.data.subarray(rt*wt/pt.data.BYTES_PER_ELEMENT,(rt+1)*wt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,rt,pt.width,pt.height,1,ft,Ot)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,ft,pt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,xt,pt.width,pt.height,nt.depth,0,pt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,pt.width,pt.height,nt.depth,ft,Nt,pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,xt,pt.width,pt.height,nt.depth,0,ft,Nt,pt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Xt&&Jt&&e.texStorage2D(s.TEXTURE_2D,mt,xt,kt[0].width,kt[0].height);for(let tt=0,gt=kt.length;tt<gt;tt++)pt=kt[tt],_.format!==Ui?ft!==null?Xt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,pt.width,pt.height,ft,pt.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,xt,pt.width,pt.height,0,pt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?z&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,pt.width,pt.height,ft,Nt,pt.data):e.texImage2D(s.TEXTURE_2D,tt,xt,pt.width,pt.height,0,ft,Nt,pt.data)}else if(_.isDataArrayTexture)if(Xt){if(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,xt,nt.width,nt.height,nt.depth),z)if(_.layerUpdates.size>0){const tt=dc(nt.width,nt.height,_.format,_.type);for(const gt of _.layerUpdates){const wt=nt.data.subarray(gt*tt/nt.data.BYTES_PER_ELEMENT,(gt+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,nt.width,nt.height,1,ft,Nt,wt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,Nt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,xt,nt.width,nt.height,nt.depth,0,ft,Nt,nt.data);else if(_.isData3DTexture)Xt?(Jt&&e.texStorage3D(s.TEXTURE_3D,mt,xt,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,Nt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,xt,nt.width,nt.height,nt.depth,0,ft,Nt,nt.data);else if(_.isFramebufferTexture){if(Jt)if(Xt)e.texStorage2D(s.TEXTURE_2D,mt,xt,nt.width,nt.height);else{let tt=nt.width,gt=nt.height;for(let wt=0;wt<mt;wt++)e.texImage2D(s.TEXTURE_2D,wt,xt,tt,gt,0,ft,Nt,null),tt>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){const tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),d.add(_),tt.onpaint=gt=>{const wt=gt.changedElements;for(const rt of d)wt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{const wt=s.RGBA,rt=s.RGBA,Ot=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,rt,Ot,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Xt&&Jt){const tt=se(kt[0]);e.texStorage2D(s.TEXTURE_2D,mt,xt,tt.width,tt.height)}for(let tt=0,gt=kt.length;tt<gt;tt++)pt=kt[tt],Xt?z&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,ft,Nt,pt):e.texImage2D(s.TEXTURE_2D,tt,xt,ft,Nt,pt);_.generateMipmaps=!1}else if(Xt){if(Jt){const tt=se(nt);e.texStorage2D(s.TEXTURE_2D,mt,xt,tt.width,tt.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ft,Nt,nt)}else e.texImage2D(s.TEXTURE_2D,0,xt,ft,Nt,nt);p(_)&&S(X),ht.__version=ct.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function zt(C,_,H){if(_.image.length!==6)return;const X=Gt(C,_),K=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);const ct=i.get(K);if(K.version!==ct.__version||X===!0){e.activeTexture(s.TEXTURE0+H);const ht=ce.getPrimaries(ce.workingColorSpace),J=_.colorSpace===bn?null:ce.getPrimaries(_.colorSpace),nt=_.colorSpace===bn||ht===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const ft=_.isCompressedTexture||_.image[0].isCompressedTexture,Nt=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let rt=0;rt<6;rt++)!ft&&!Nt?xt[rt]=m(_.image[rt],!0,n.maxCubemapSize):xt[rt]=Nt?_.image[rt].image:_.image[rt],xt[rt]=pe(_,xt[rt]);const pt=xt[0],kt=r.convert(_.format,_.colorSpace),Xt=r.convert(_.type),Jt=x(_.internalFormat,kt,Xt,_.normalized,_.colorSpace),z=_.isVideoTexture!==!0,mt=ct.__version===void 0||X===!0,tt=K.dataReady;let gt=M(_,pt);qt(s.TEXTURE_CUBE_MAP,_);let wt;if(ft){z&&mt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Jt,pt.width,pt.height);for(let rt=0;rt<6;rt++){wt=xt[rt].mipmaps;for(let Ot=0;Ot<wt.length;Ot++){const Dt=wt[Ot];_.format!==Ui?kt!==null?z?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Dt.width,Dt.height,kt,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Jt,Dt.width,Dt.height,0,Dt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Dt.width,Dt.height,kt,Xt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Jt,Dt.width,Dt.height,0,kt,Xt,Dt.data)}}}else{if(wt=_.mipmaps,z&&mt){wt.length>0&&gt++;const rt=se(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,gt,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Nt){z?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,xt[rt].width,xt[rt].height,kt,Xt,xt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,xt[rt].width,xt[rt].height,0,kt,Xt,xt[rt].data);for(let Ot=0;Ot<wt.length;Ot++){const be=wt[Ot].image[rt].image;z?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,be.width,be.height,kt,Xt,be.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Jt,be.width,be.height,0,kt,Xt,be.data)}}else{z?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,kt,Xt,xt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,kt,Xt,xt[rt]);for(let Ot=0;Ot<wt.length;Ot++){const Dt=wt[Ot];z?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,kt,Xt,Dt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Jt,kt,Xt,Dt.image[rt])}}}p(_)&&S(s.TEXTURE_CUBE_MAP),ct.__version=K.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function vt(C,_,H,X,K,ct){const ht=r.convert(H.format,H.colorSpace),J=r.convert(H.type),nt=x(H.internalFormat,ht,J,H.normalized,H.colorSpace),ft=i.get(_),Nt=i.get(H);if(Nt.__renderTarget=_,!ft.__hasExternalTextures){const xt=Math.max(1,_.width>>ct),pt=Math.max(1,_.height>>ct);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,ct,nt,xt,pt,_.depth,0,ht,J,null):e.texImage2D(K,ct,nt,xt,pt,0,ht,J,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Vt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,K,Nt.__webglTexture,0,Ft(_)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,K,Nt.__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,_,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),_.depthBuffer){const X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,ct=T(_.stencilBuffer,K),ht=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(_),ct,_.width,_.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(_),ct,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ct,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,C)}else{const X=_.textures;for(let K=0;K<X.length;K++){const ct=X[K],ht=r.convert(ct.format,ct.colorSpace),J=r.convert(ct.type),nt=x(ct.internalFormat,ht,J,ct.normalized,ct.colorSpace);Vt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(_),nt,_.width,_.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(_),nt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,nt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function he(C,_,H){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),qt(s.TEXTURE_CUBE_MAP,_.depthTexture);const ft=r.convert(_.depthTexture.format),Nt=r.convert(_.depthTexture.type);let xt;_.depthTexture.format===ln?xt=s.DEPTH_COMPONENT24:_.depthTexture.format===Gn&&(xt=s.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,xt,_.width,_.height,0,ft,Nt,null)}}else Q(_.depthTexture,0);const ct=K.__webglTexture,ht=Ft(_),J=X?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,nt=_.depthTexture.format===Gn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===ln)Vt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,ct,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,ct,0);else if(_.depthTexture.format===Gn)Vt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,J,ct,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,nt,J,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(C){const _=i.get(C),H=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let X=0;X<6;X++)he(_.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?he(_.__webglFramebuffer[0],C,0):he(_.__webglFramebuffer,C,0)}else if(H){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=s.createRenderbuffer(),Bt(_.__webglDepthbuffer[X],C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ct)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Bt(_.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,ct)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function q(C,_,H){const X=i.get(C);_!==void 0&&vt(X.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&et(C)}function st(C){const _=C.texture,H=i.get(C),X=i.get(_);C.addEventListener("dispose",v);const K=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ht=K.length>1;if(ht||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=_.version,a.memory.textures++),ct){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let nt=0;nt<_.mipmaps.length;nt++)H.__webglFramebuffer[J][nt]=s.createFramebuffer()}else H.__webglFramebuffer[J]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)H.__webglFramebuffer[J]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ht)for(let J=0,nt=K.length;J<nt;J++){const ft=i.get(K[J]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Vt(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){const nt=K[J];H.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const ft=r.convert(nt.format,nt.colorSpace),Nt=r.convert(nt.type),xt=x(nt.internalFormat,ft,Nt,nt.normalized,nt.colorSpace,C.isXRRenderTarget===!0),pt=Ft(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,H.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),qt(s.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)vt(H.__webglFramebuffer[J][nt],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt);else vt(H.__webglFramebuffer[J],C,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(_)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let J=0,nt=K.length;J<nt;J++){const ft=K[J],Nt=i.get(ft);let xt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,Nt.__webglTexture),qt(xt,ft),vt(H.__webglFramebuffer,C,ft,s.COLOR_ATTACHMENT0+J,xt,0),p(ft)&&S(xt)}e.unbindTexture()}else{let J=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,X.__webglTexture),qt(J,_),_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)vt(H.__webglFramebuffer[nt],C,_,s.COLOR_ATTACHMENT0,J,nt);else vt(H.__webglFramebuffer,C,_,s.COLOR_ATTACHMENT0,J,0);p(_)&&S(J),e.unbindTexture()}C.depthBuffer&&et(C)}function at(C){const _=C.textures;for(let H=0,X=_.length;H<X;H++){const K=_[H];if(p(K)){const ct=E(C),ht=i.get(K).__webglTexture;e.bindTexture(ct,ht),S(ct),e.unbindTexture()}}}const ot=[],It=[];function Ct(C){if(C.samples>0){if(Vt(C)===!1){const _=C.textures,H=C.width,X=C.height;let K=s.COLOR_BUFFER_BIT;const ct=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=i.get(C),J=_.length>1;if(J)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const nt=C.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const Nt=i.get(_[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,H,X,0,0,H,X,K,s.NEAREST),c===!0&&(ot.length=0,It.length=0,ot.push(s.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ot.push(ct),It.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,It)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,ht.__webglColorRenderbuffer[ft]);const Nt=i.get(_[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ht.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const _=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Ft(C){return Math.min(n.maxSamples,C.samples)}function Vt(C){const _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function k(C){const _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function pe(C,_){const H=C.colorSpace,X=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ea&&H!==bn&&(ce.getTransfer(H)===_e?(X!==Ui||K!==oi)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",H)),_}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.getTextureUnits=D,this.setTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=q,this.setupRenderTarget=st,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function mv(s,t){function e(i,n=bn){let r;const a=ce.getTransfer(n);if(i===oi)return s.UNSIGNED_BYTE;if(i===nl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===wh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mh)return s.BYTE;if(i===Sh)return s.SHORT;if(i===er)return s.UNSIGNED_SHORT;if(i===il)return s.INT;if(i===qi)return s.UNSIGNED_INT;if(i===Ii)return s.FLOAT;if(i===Ni)return s.HALF_FLOAT;if(i===Eh)return s.ALPHA;if(i===Th)return s.RGB;if(i===Ui)return s.RGBA;if(i===ln)return s.DEPTH_COMPONENT;if(i===Gn)return s.DEPTH_STENCIL;if(i===rl)return s.RED;if(i===al)return s.RED_INTEGER;if(i===$n)return s.RG;if(i===ol)return s.RG_INTEGER;if(i===ll)return s.RGBA_INTEGER;if(i===$r||i===qr||i===Zr||i===Yr)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vo||i===xo||i===_o||i===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===So||i===bo||i===wo||i===Eo||i===Qr||i===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mo||i===So)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===wo)return r.COMPRESSED_R11_EAC;if(i===Eo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Qr)return r.COMPRESSED_RG11_EAC;if(i===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ao||i===Ro||i===Co||i===Po||i===Lo||i===Do||i===Io||i===Uo||i===No||i===ko||i===Fo||i===Oo||i===zo||i===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ao)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ro)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Co)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Io)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===No)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ko)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ho||i===Go||i===Vo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ho)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Xo||i===jr||i===$o)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$o)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ir?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Oh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ye({vertexShader:gv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends Yn{constructor(t,e){super();const i=this;let n=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null;const y=typeof XRWebGLBinding<"u",m=new xv,p={},S=e.getContextAttributes();let E=null,x=null;const T=[],M=[],A=new lt;let v=null,b=null;const R=new _i;R.viewport=new Le;const I=new _i;I.viewport=new Le;const L=[R,I],P=new Af;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=T[Y];return it===void 0&&(it=new Ta,T[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=T[Y];return it===void 0&&(it=new Ta,T[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=T[Y];return it===void 0&&(it=new Ta,T[Y]=it),it.getHandSpace()};function B(Y){const it=M.indexOf(Y.inputSource);if(it===-1)return;const dt=T[it];dt!==void 0&&(dt.update(Y.inputSource,Y.frame,l||a),dt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<T.length;Y++){const it=M[Y];it!==null&&(M[Y]=null,T[Y].disconnect(it))}D=null,N=null,m.reset();for(const Y in p)delete p[Y];if(t.setRenderTarget(E),f=null,u=null,d=null,n=null,x=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),b!==null){const Y=b.camera;Y.fov=b.fov,Y.zoom=b.zoom,Y.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,zt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=S.stencil?Gn:ln,zt=S.stencil?ir:qi);const Bt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new di(u.textureWidth,u.textureHeight,{format:Ui,type:oi,depthTexture:new bs(u.textureWidth,u.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const dt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,dt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new di(f.framebufferWidth,f.framebufferHeight,{format:Ui,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),Gt.setContext(n),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(Y){for(let it=0;it<Y.removed.length;it++){const dt=Y.removed[it],zt=M.indexOf(dt);zt>=0&&(M[zt]=null,T[zt].disconnect(dt))}for(let it=0;it<Y.added.length;it++){const dt=Y.added[it];let zt=M.indexOf(dt);if(zt===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=M.length){M.push(dt),zt=Bt;break}else if(M[Bt]===null){M[Bt]=dt,zt=Bt;break}if(zt===-1)break}const vt=T[zt];vt&&vt.connect(dt)}}const W=new U,Z=new U;function j(Y,it,dt){W.setFromMatrixPosition(it.matrixWorld),Z.setFromMatrixPosition(dt.matrixWorld);const zt=W.distanceTo(Z),vt=it.projectionMatrix.elements,Bt=dt.projectionMatrix.elements,he=vt[14]/(vt[10]-1),et=vt[14]/(vt[10]+1),q=(vt[9]+1)/vt[5],st=(vt[9]-1)/vt[5],at=(vt[8]-1)/vt[0],ot=(Bt[8]+1)/Bt[0],It=he*at,Ct=he*ot,Ft=zt/(-at+ot),Vt=Ft*-at;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Vt),Y.translateZ(Ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),vt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const k=he+Ft,pe=et+Ft,se=It-Vt,C=Ct+(zt-Vt),_=q*et/pe*k,H=st*et/pe*k;Y.projectionMatrix.makePerspective(se,C,_,H,k,pe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Et(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let it=Y.near,dt=Y.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),P.near=I.near=R.near=it,P.far=I.far=R.far=dt,(D!==P.near||N!==P.far)&&(n.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,N=P.far),P.layers.mask=Y.layers.mask|6,R.layers.mask=P.layers.mask&-5,I.layers.mask=P.layers.mask&-3;const zt=Y.parent,vt=P.cameras;Et(P,zt);for(let Bt=0;Bt<vt.length;Bt++)Et(vt[Bt],zt);vt.length===2?j(P,R,I):P.projectionMatrix.copy(R.projectionMatrix),b===null&&Y.isPerspectiveCamera&&(b={camera:Y,fov:Y.fov,zoom:Y.zoom}),St(Y,P,zt)};function St(Y,it,dt){dt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(dt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Y){return p[Y]};let Kt=null;function qt(Y,it){if(h=it.getViewerPose(l||a),g=it,h!==null){const dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let zt=!1;dt.length!==P.cameras.length&&(P.cameras.length=0,zt=!0);for(let et=0;et<dt.length;et++){const q=dt[et];let st=null;if(f!==null)st=f.getViewport(q);else{const ot=d.getViewSubImage(u,q);st=ot.viewport,et===0&&(t.setRenderTargetTextures(x,ot.colorTexture,ot.depthStencilTexture),t.setRenderTarget(x))}let at=L[et];at===void 0&&(at=new _i,at.layers.enable(et),at.viewport=new Le,L[et]=at),at.matrix.fromArray(q.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(q.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(st.x,st.y,st.width,st.height),et===0&&(P.matrix.copy(at.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),zt===!0&&P.cameras.push(at)}const vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const et=d.getDepthInformation(dt[0]);et&&et.isValid&&et.texture&&m.init(et,n.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let et=0;et<dt.length;et++){const q=dt[et].camera;if(q){let st=p[q];st||(st=new Oh,p[q]=st);const at=d.getCameraImage(q);st.sourceTexture=at}}}}for(let dt=0;dt<T.length;dt++){const zt=M[dt],vt=T[dt];zt!==null&&vt!==void 0&&vt.update(zt,it,l||a)}Kt&&Kt(Y,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}const Gt=new eu;Gt.setAnimationLoop(qt),this.setAnimationLoop=function(Y){Kt=Y},this.dispose=function(){}}}const yv=new oe,lu=new Zt;lu.set(-1,0,0,0,1,0,0,0,1);function Mv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,qh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,S,E,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===li&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===li&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===li&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Sv(s,t,e,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,T){const M=T.program;i.uniformBlockBinding(x,M)}function l(x,T){let M=n[x.id];M===void 0&&(m(x),M=h(x),n[x.id]=M,x.addEventListener("dispose",S));const A=T.program;i.updateUBOMapping(x,A);const v=t.render.frame;r[x.id]!==v&&(u(x),r[x.id]=v)}function h(x){const T=d();x.__bindingPointIndex=T;const M=s.createBuffer(),A=x.__size,v=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,M),M}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const T=n[x.id],M=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let v=0,b=M.length;v<b;v++){const R=M[v];if(Array.isArray(R))for(let I=0,L=R.length;I<L;I++)f(R[I],v,I,A);else f(R,v,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,T,M,A){if(y(x,T,M,A)===!0){const v=x.__offset,b=x.value;if(Array.isArray(b)){let R=0;for(let I=0;I<b.length;I++){const L=b[I],P=p(L);g(L,x.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,x.__data)}}function g(x,T,M){typeof x=="number"||typeof x=="boolean"?T[0]=x:x.isMatrix3?(T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0):ArrayBuffer.isView(x)?T.set(new x.constructor(x.buffer,x.byteOffset,T.length)):x.toArray(T,M)}function y(x,T,M,A){const v=x.value,b=T+"_"+M;if(A[b]===void 0)return typeof v=="number"||typeof v=="boolean"?A[b]=v:ArrayBuffer.isView(v)?A[b]=v.slice():A[b]=v.clone(),!0;{const R=A[b];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(x){const T=x.uniforms;let M=0;const A=16;for(let b=0,R=T.length;b<R;b++){const I=Array.isArray(T[b])?T[b]:[T[b]];for(let L=0,P=I.length;L<P;L++){const D=I[L],N=Array.isArray(D.value)?D.value:[D.value];for(let B=0,O=N.length;B<O;B++){const Q=N[B],W=p(Q),Z=M%A,j=Z%W.boundary,Et=Z+j;M+=j,Et!==0&&A-Et<W.storage&&(M+=A-Et),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=W.storage}}}const v=M%A;return v>0&&(M+=A-v),x.__size=M,x.__cache={},this}function p(x){const T={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(T.boundary=4,T.storage=4):x.isVector2?(T.boundary=8,T.storage=8):x.isVector3||x.isColor?(T.boundary=16,T.storage=12):x.isVector4?(T.boundary=16,T.storage=16):x.isMatrix3?(T.boundary=48,T.storage=48):x.isMatrix4?(T.boundary=64,T.storage=64):x.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(T.boundary=16,T.storage=x.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",x),T}function S(x){const T=x.target;T.removeEventListener("dispose",S);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[T.id]),delete n[T.id],delete r[T.id]}function E(){for(const x in n)s.deleteBuffer(n[x]);a=[],n={},r={}}return{bind:c,update:l,dispose:E}}const bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function wv(){return zi===null&&(zi=new kh(bv,16,16,$n,Ni),zi.name="DFG_LUT",zi.minFilter=Ke,zi.magFilter=Ke,zi.wrapS=en,zi.wrapT=en,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Ev{constructor(t={}){const{canvas:e=od(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=f,m=new Set([ll,ol,al]),p=new Set([oi,qi,er,ir,nl,sl]),S=new Uint32Array(4),E=new Int32Array(4),x=new U;let T=null,M=null;const A=[],v=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let I=!1,L=null,P=null,D=null,N=null;this._outputColorSpace=gi;let B=0,O=0,Q=null,W=-1,Z=null;const j=new Le,Et=new Le;let St=null;const Kt=new Ht(0);let qt=0,Gt=e.width,Y=e.height,it=1,dt=null,zt=null;const vt=new Le(0,0,Gt,Y),Bt=new Le(0,0,Gt,Y);let he=!1;const et=new fl;let q=!1,st=!1;const at=new oe,ot=new U,It=new Le,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Vt(){return Q===null?it:1}let k=i;function pe(w,F){return e.getContext(w,F)}let se,C,_,H,X,K,ct,ht,J,nt,ft,Nt,xt,pt,kt,Xt,Jt,z,mt,tt,gt,wt,rt;try{const w={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${el}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Ei,!1),k===null){const F="webgl2";if(k=pe(F,w),k===null)throw pe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(w){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Ei,!1),ue("WebGLRenderer: "+w.message),w}function Ot(){se=new w0(k),se.init(),gt=new mv(k,se),C=new p0(k,se,t,gt),_=new fv(k,se),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),P=k.createFramebuffer(),D=k.createFramebuffer(),N=k.createFramebuffer(),H=new A0(k),X=new jg,K=new pv(k,se,_,X,C,gt,H),ct=new b0(R),ht=new Cf(k),wt=new d0(k,ht),J=new E0(k,ht,H,wt),nt=new C0(k,J,ht,wt,H),z=new R0(k,C,K),kt=new m0(X),ft=new Qg(R,ct,se,C,wt,kt),Nt=new Mv(R,X),xt=new ev,pt=new ov(se),Jt=new u0(R,ct,_,nt,g,c),Xt=new dv(R,nt,C),rt=new Sv(k,H,C,_),mt=new f0(k,se,H),tt=new T0(k,se,H),H.programs=ft.programs,R.capabilities=C,R.extensions=se,R.properties=X,R.renderLists=xt,R.shadowMap=Xt,R.state=_,R.info=H}y!==oi&&(b=new L0(y,e.width,e.height,o,n,r));const Dt=new _v(R,k);this.xr=Dt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(w){w!==void 0&&(it=w,this.setSize(Gt,Y,!1))},this.getSize=function(w){return w.set(Gt,Y)},this.setSize=function(w,F,$=!0){if(Dt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=w,Y=F,e.width=Math.floor(w*it),e.height=Math.floor(F*it),$===!0&&(e.style.width=w+"px",e.style.height=F+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Gt*it,Y*it).floor()},this.setDrawingBufferSize=function(w,F,$){Gt=w,Y=F,it=$,e.width=Math.floor(w*$),e.height=Math.floor(F*$),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(y===oi){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,F,$,G){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,F,$,G),_.viewport(j.copy(vt).multiplyScalar(it).round())},this.getScissor=function(w){return w.copy(Bt)},this.setScissor=function(w,F,$,G){w.isVector4?Bt.set(w.x,w.y,w.z,w.w):Bt.set(w,F,$,G),_.scissor(Et.copy(Bt).multiplyScalar(it).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(w){_.setScissorTest(he=w)},this.setOpaqueSort=function(w){dt=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,$=!0){let G=0;if(w){let V=!1;if(Q!==null){const bt=Q.texture.format;V=m.has(bt)}if(V){const bt=Q.texture.type,At=p.has(bt),Mt=Jt.getClearColor(),Pt=Jt.getClearAlpha(),Ut=Mt.r,ee=Mt.g,re=Mt.b;At?(S[0]=Ut,S[1]=ee,S[2]=re,S[3]=Pt,k.clearBufferuiv(k.COLOR,0,S)):(E[0]=Ut,E[1]=ee,E[2]=re,E[3]=Pt,k.clearBufferiv(k.COLOR,0,E))}else G|=k.COLOR_BUFFER_BIT}F&&(G|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&k.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Ei,!1),Jt.dispose(),xt.dispose(),pt.dispose(),X.dispose(),ct.dispose(),nt.dispose(),wt.dispose(),rt.dispose(),ft.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Sl),Dt.removeEventListener("sessionend",bl),Dn.stop()};function be(w){w.preventDefault(),sa("WebGLRenderer: Context Lost."),I=!0}function me(){sa("WebGLRenderer: Context Restored."),I=!1;const w=H.autoReset,F=Xt.enabled,$=Xt.autoUpdate,G=Xt.needsUpdate,V=Xt.type;Ot(),H.autoReset=w,Xt.enabled=F,Xt.autoUpdate=$,Xt.needsUpdate=G,Xt.type=V}function Ei(w){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ki(w){const F=w.target;F.removeEventListener("dispose",ki),yu(F)}function yu(w){Mu(w),X.remove(w)}function Mu(w){const F=X.get(w).programs;F!==void 0&&(F.forEach(function($){ft.releaseProgram($)}),w.isShaderMaterial&&ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,$,G,V,bt){F===null&&(F=Ct);const At=V.isMesh&&V.matrixWorld.determinantAffine()<0,Mt=wu(w,F,$,G,V);_.setMaterial(G,At);let Pt=$.index,Ut=1;if(G.wireframe===!0){if(Pt=J.getWireframeAttribute($),Pt===void 0)return;Ut=2}const ee=$.drawRange,re=$.attributes.position;let Lt=ee.start*Ut,ge=(ee.start+ee.count)*Ut;bt!==null&&(Lt=Math.max(Lt,bt.start*Ut),ge=Math.min(ge,(bt.start+bt.count)*Ut)),Pt!==null?(Lt=Math.max(Lt,0),ge=Math.min(ge,Pt.count)):re!=null&&(Lt=Math.max(Lt,0),ge=Math.min(ge,re.count));const Fe=ge-Lt;if(Fe<0||Fe===1/0)return;wt.setup(V,G,Mt,$,Pt);let Ae,Se=mt;if(Pt!==null&&(Ae=ht.get(Pt),Se=tt,Se.setIndex(Ae)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Vt()),Se.setMode(k.LINES)):Se.setMode(k.TRIANGLES);else if(V.isLine){let Je=G.linewidth;Je===void 0&&(Je=1),_.setLineWidth(Je*Vt()),V.isLineSegments?Se.setMode(k.LINES):V.isLineLoop?Se.setMode(k.LINE_LOOP):Se.setMode(k.LINE_STRIP)}else V.isPoints?Se.setMode(k.POINTS):V.isSprite&&Se.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(se.get("WEBGL_multi_draw"))Se.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Je=V._multiDrawStarts,Tt=V._multiDrawCounts,ni=V._multiDrawCount,de=Pt?ht.get(Pt).bytesPerElement:1,Mi=X.get(G).currentProgram.getUniforms();for(let Fi=0;Fi<ni;Fi++)Mi.setValue(k,"_gl_DrawID",Fi),Se.render(Je[Fi]/de,Tt[Fi])}else if(V.isInstancedMesh)Se.renderInstances(Lt,Fe,V.count);else if($.isInstancedBufferGeometry){const Je=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Tt=Math.min($.instanceCount,Je);Se.renderInstances(Lt,Fe,Tt)}else Se.render(Lt,Fe)};function Ml(w,F,$,G){L!==null&&w.isNodeMaterial&&L.setObject(G,w),q===!0&&kt.setState(w,$,!1),w.transparent===!0&&w.side===hi&&w.forceSinglePass===!1?(w.side=li,w.needsUpdate=!0,ur(w,F,G),w.side=Cn,w.needsUpdate=!0,ur(w,F,G),w.side=hi):ur(w,F,G)}this.compile=function(w,F,$=null){$===null&&($=w),L!==null&&L.renderStart(w,F,$),M=pt.get($),M.init(F),v.push(M),$.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),w!==$&&w.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),st=this.localClippingEnabled,q=kt.init(this.clippingPlanes,st),q===!0&&kt.setGlobalState(this.clippingPlanes,F),L!==null&&Xt.render(M.state.shadowsArray,$,F);const G=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const bt=V.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){const Mt=bt[At];Ml(Mt,$,F,V),G.add(Mt)}else Ml(bt,$,F,V),G.add(bt)}),M=v.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(w,F,$=null){const G=this.compile(w,F,$);return new Promise(V=>{function bt(){if(G.forEach(function(At){const Pt=X.get(At).currentProgram;(Pt===void 0||Pt.isReady())&&G.delete(At)}),G.size===0){V(w);return}setTimeout(bt,10)}se.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let fa=null;function Su(w){fa&&fa(w)}function Sl(){Dn.stop()}function bl(){Dn.start()}const Dn=new eu;Dn.setAnimationLoop(Su),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(w){fa=w,Dt.setAnimationLoop(w),w===null?Dn.stop():Dn.start()},Dt.addEventListener("sessionstart",Sl),Dt.addEventListener("sessionend",bl),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(w,F);const $=Dt.enabled===!0&&Dt.isPresenting===!0,G=b!==null&&(Q===null||$)&&b.begin(R,Q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(F),F=Dt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,Q),M=pt.get(w,v.length),M.init(F),M.state.textureUnits=K.getTextureUnits(),v.push(M),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),et.setFromProjectionMatrix(at,Xi,F.reversedDepth),st=this.localClippingEnabled,q=kt.init(this.clippingPlanes,st),T=xt.get(w,A.length),T.init(),A.push(T),Dt.enabled===!0&&Dt.isPresenting===!0){const At=R.xr.getDepthSensingMesh();At!==null&&pa(At,F,-1/0,R.sortObjects)}pa(w,F,0,R.sortObjects),T.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&T.sort(dt,zt),Ft=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Ft&&Jt.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),q===!0&&kt.beginShadows();const V=M.state.shadowsArray;if(Xt.render(V,w,F),q===!0&&kt.endShadows(),(G&&b.hasRenderPass())===!1){const At=T.opaque,Mt=T.transmissive;if(M.setupLights(),F.isArrayCamera){const Pt=F.cameras;if(Mt.length>0)for(let Ut=0,ee=Pt.length;Ut<ee;Ut++){const re=Pt[Ut];El(At,Mt,w,re)}Ft&&Jt.render(w);for(let Ut=0,ee=Pt.length;Ut<ee;Ut++){const re=Pt[Ut];wl(T,w,re,re.viewport)}}else Mt.length>0&&El(At,Mt,w,F),Ft&&Jt.render(w),wl(T,w,F)}Q!==null&&O===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),G&&b.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),wt.resetDefaultState(),W=-1,Z=null,v.pop(),v.length>0?(M=v[v.length-1],K.setTextureUnits(M.state.textureUnits),q===!0&&kt.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?T=A[A.length-1]:T=null,L!==null&&L.renderEnd()};function pa(w,F,$,G){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(et)){G&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(at);const At=nt.update(w),Mt=w.material;Mt.visible&&T.push(w,At,Mt,$,It.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(et))){const At=nt.update(w),Mt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),It.copy(At.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(at)),Array.isArray(Mt)){const Pt=At.groups;for(let Ut=0,ee=Pt.length;Ut<ee;Ut++){const re=Pt[Ut],Lt=Mt[re.materialIndex];Lt&&Lt.visible&&T.push(w,At,Lt,$,It.z,re,F)}}else Mt.visible&&T.push(w,At,Mt,$,It.z,null,F)}}const bt=w.children;for(let At=0,Mt=bt.length;At<Mt;At++)pa(bt[At],F,$,G)}function wl(w,F,$,G){const{opaque:V,transmissive:bt,transparent:At}=w;M.setupLightsView($),q===!0&&kt.setGlobalState(R.clippingPlanes,$),G&&_.viewport(j.copy(G)),V.length>0&&hr(V,F,$),bt.length>0&&hr(bt,F,$),At.length>0&&hr(At,F,$),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function El(w,F,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){const Lt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new di(1,1,{generateMipmaps:!0,type:Lt?Ni:oi,minFilter:Hn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ce.workingColorSpace})}const bt=M.state.transmissionRenderTarget[G.id],At=G.viewport||j;bt.setSize(At.z*R.transmissionResolutionScale,At.w*R.transmissionResolutionScale);const Mt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(bt),R.getClearColor(Kt),qt=R.getClearAlpha(),qt<1&&R.setClearColor(16777215,.5),R.clear(),Ft&&Jt.render($);const ee=R.toneMapping;R.toneMapping=$i;const re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),q===!0&&kt.setGlobalState(R.clippingPlanes,G),hr(w,$,G),K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let ge=0,Fe=F.length;ge<Fe;ge++){const Ae=F[ge],{object:Se,geometry:Je,material:Tt,group:ni}=Ae;if(Tt.side===hi&&Se.layers.test(G.layers)){const de=Tt.side;Tt.side=li,Tt.needsUpdate=!0,Tl(Se,$,G,Je,Tt,ni),Tt.side=de,Tt.needsUpdate=!0,Lt=!0}}Lt===!0&&(K.updateMultisampleRenderTarget(bt),K.updateRenderTargetMipmap(bt))}R.setRenderTarget(Mt,Pt,Ut),R.setClearColor(Kt,qt),re!==void 0&&(G.viewport=re),R.toneMapping=ee}function hr(w,F,$){const G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,bt=w.length;V<bt;V++){const At=w[V],{object:Mt,geometry:Pt,group:Ut}=At;let ee=At.material;ee.allowOverride===!0&&G!==null&&(ee=G),Mt.layers.test($.layers)&&Tl(Mt,F,$,Pt,ee,Ut)}}function Tl(w,F,$,G,V,bt){L!==null&&V.isNodeMaterial&&L.setObject(w,V),w.onBeforeRender(R,F,$,G,V,bt),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(R,F,$,G,w,bt),V.transparent===!0&&V.side===hi&&V.forceSinglePass===!1?(V.side=li,V.needsUpdate=!0,R.renderBufferDirect($,F,G,V,w,bt),V.side=Cn,V.needsUpdate=!0,R.renderBufferDirect($,F,G,V,w,bt),V.side=hi):R.renderBufferDirect($,F,G,V,w,bt),w.onAfterRender(R,F,$,G,V,bt)}function ur(w,F,$){F.isScene!==!0&&(F=Ct);const G=X.get(w),V=M.state.lights,bt=M.state.shadowsArray,At=V.state.version,Mt=ft.getParameters(w,V.state,bt,F,$,M.state.lightProbeGridArray),Pt=ft.getProgramCacheKey(Mt);let Ut=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=ct.get(w.envMap||G.environment,ee),G.envMapRotation=G.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",ki),Ut=new Map,G.programs=Ut);let re=Ut.get(Pt);if(re!==void 0){if(G.currentProgram===re&&G.lightsStateVersion===At)return Rl(w,Mt),re}else Mt.uniforms=ft.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,$,Mt),w.onBeforeCompile(Mt,R),re=ft.acquireProgram(Mt,Pt),Ut.set(Pt,re),G.uniforms=Mt.uniforms;const Lt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Lt.clippingPlanes=kt.uniform),Rl(w,Mt),G.needsLights=Tu(w),G.lightsStateVersion=At,G.needsLights&&(Lt.ambientLightColor.value=V.state.ambient,Lt.lightProbe.value=V.state.probe,Lt.sunLights.value=V.state.sun,Lt.sunLightShadows.value=V.state.sunShadow,Lt.directionalLights.value=V.state.directional,Lt.directionalLightShadows.value=V.state.directionalShadow,Lt.spotLights.value=V.state.spot,Lt.spotLightShadows.value=V.state.spotShadow,Lt.rectAreaLights.value=V.state.rectArea,Lt.ltc_1.value=V.state.rectAreaLTC1,Lt.ltc_2.value=V.state.rectAreaLTC2,Lt.pointLights.value=V.state.point,Lt.pointLightShadows.value=V.state.pointShadow,Lt.hemisphereLights.value=V.state.hemi,Lt.sunShadowMatrix.value=V.state.sunShadowMatrix,Lt.sunShadowCascade.value=V.state.sunShadowCascade,Lt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Lt.spotLightMatrix.value=V.state.spotLightMatrix,Lt.spotLightMap.value=V.state.spotLightMap,Lt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=re,G.uniformsList=null,re}function Al(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Kr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Rl(w,F){const $=X.get(w);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function bu(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let $=0,G=w.length;$<G;$++){const V=w[$];if(V.texture!==null&&V.boundingBox.containsPoint(x))return V}return null}function wu(w,F,$,G,V){F.isScene!==!0&&(F=Ct),K.resetTextureUnits();const bt=F.fog,At=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Mt=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ce.workingColorSpace,Pt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=ct.get(G.envMap||At,Pt),ee=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,re=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Lt=!!$.morphAttributes.position,ge=!!$.morphAttributes.normal,Fe=!!$.morphAttributes.color;let Ae=$i;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ae=R.toneMapping);const Se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Je=Se!==void 0?Se.length:0,Tt=X.get(G),ni=M.state.lights;if(q===!0&&(st===!0||w!==Z)){const we=w===Z&&G.id===W;kt.setState(G,w,we)}let de=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ni.state.version||Tt.outputColorSpace!==Mt||V.isBatchedMesh&&Tt.batching===!1||!V.isBatchedMesh&&Tt.batching===!0||V.isBatchedMesh&&Tt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Tt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Tt.instancing===!1||!V.isInstancedMesh&&Tt.instancing===!0||V.isSkinnedMesh&&Tt.skinning===!1||!V.isSkinnedMesh&&Tt.skinning===!0||V.isInstancedMesh&&Tt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Tt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Tt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Tt.instancingMorph===!1&&V.morphTexture!==null||Tt.envMap!==Ut||G.fog===!0&&Tt.fog!==bt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==kt.numPlanes||Tt.numIntersection!==kt.numIntersection)||Tt.vertexAlphas!==ee||Tt.vertexTangents!==re||Tt.morphTargets!==Lt||Tt.morphNormals!==ge||Tt.morphColors!==Fe||Tt.toneMapping!==Ae||Tt.morphTargetsCount!==Je||!!Tt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(de=!0):(de=!0,Tt.__version=G.version);let Mi=Tt.currentProgram;de===!0&&(Mi=ur(G,F,V),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Mi,Tt));let Fi=!1,hn=!1,Kn=!1;const ye=Mi.getUniforms(),Ne=Tt.uniforms;if(_.useProgram(Mi.program)&&(Fi=!0,hn=!0,Kn=!0),G.id!==W&&(W=G.id,hn=!0),Tt.needsLights){const we=bu(M.state.lightProbeGridArray,V);Tt.lightProbeGrid!==we&&(Tt.lightProbeGrid=we,hn=!0)}if(Fi||Z!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ye.setValue(k,"projectionMatrix",w.projectionMatrix),ye.setValue(k,"viewMatrix",w.matrixWorldInverse);const dn=ye.map.cameraPosition;dn!==void 0&&dn.setValue(k,ot.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&ye.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,hn=!0,Kn=!0)}if(Tt.needsLights&&(ni.state.sunShadowMap.length>0&&ye.setValue(k,"sunShadowMap",ni.state.sunShadowMap,K),ni.state.directionalShadowMap.length>0&&ye.setValue(k,"directionalShadowMap",ni.state.directionalShadowMap,K),ni.state.spotShadowMap.length>0&&ye.setValue(k,"spotShadowMap",ni.state.spotShadowMap,K),ni.state.pointShadowMap.length>0&&ye.setValue(k,"pointShadowMap",ni.state.pointShadowMap,K)),V.isSkinnedMesh){ye.setOptional(k,V,"bindMatrix"),ye.setOptional(k,V,"bindMatrixInverse");const we=V.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ye.setValue(k,"boneTexture",we.boneTexture,K))}V.isBatchedMesh&&(ye.setOptional(k,V,"batchingTexture"),ye.setValue(k,"batchingTexture",V._matricesTexture,K),ye.setOptional(k,V,"batchingIdTexture"),ye.setValue(k,"batchingIdTexture",V._indirectTexture,K),ye.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&ye.setValue(k,"batchingColorTexture",V._colorsTexture,K));const un=$.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&z.update(V,$,Mi),(hn||Tt.receiveShadow!==V.receiveShadow)&&(Tt.receiveShadow=V.receiveShadow,ye.setValue(k,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(Ne.envMapIntensity.value=F.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=wv()),hn){if(ye.setValue(k,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&Eu(Ne,Kn),bt&&G.fog===!0&&Nt.refreshFogUniforms(Ne,bt),Nt.refreshMaterialUniforms(Ne,G,it,Y,M.state.transmissionRenderTarget[w.id]),Tt.needsLights&&Tt.lightProbeGrid){const we=Tt.lightProbeGrid;Ne.probesSH.value=we.texture,Ne.probesMin.value.copy(we.boundingBox.min),Ne.probesMax.value.copy(we.boundingBox.max),Ne.probesResolution.value.copy(we.resolution)}Kr.upload(k,Al(Tt),Ne,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Kr.upload(k,Al(Tt),Ne,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(k,"center",V.center),ye.setValue(k,"modelViewMatrix",V.modelViewMatrix),ye.setValue(k,"normalMatrix",V.normalMatrix),ye.setValue(k,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const we=G.uniformsGroups;for(let dn=0,Jn=we.length;dn<Jn;dn++){const Pl=we[dn];rt.update(Pl,Mi),rt.bind(Pl,Mi)}}return Mi}function Eu(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Tu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(w,F,$){const G=X.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(w.texture).__webglTexture=F,X.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const $=X.get(w);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,$=0){Q=w,B=F,O=$;let G=null,V=!1,bt=!1;if(w){const Mt=X.get(w);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(k.FRAMEBUFFER,Mt.__webglFramebuffer),j.copy(w.viewport),Et.copy(w.scissor),St=w.scissorTest,_.viewport(j),_.scissor(Et),_.setScissorTest(St),W=-1;return}else if(Mt.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Mt.__hasExternalTextures)K.rebindTextures(w,X.get(w.texture).__webglTexture,X.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ee=w.depthTexture;if(Mt.__boundDepthTexture!==ee){if(ee!==null&&X.has(ee)&&(w.width!==ee.image.width||w.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const Pt=w.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);const Ut=X.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?G=Ut[F][$]:G=Ut[F],V=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?G=X.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[$]:G=Ut,j.copy(w.viewport),Et.copy(w.scissor),St=w.scissorTest}else j.copy(vt).multiplyScalar(it).floor(),Et.copy(Bt).multiplyScalar(it).floor(),St=he;if($!==0&&(G=P),_.bindFramebuffer(k.FRAMEBUFFER,G)&&_.drawBuffers(w,G),_.viewport(j),_.scissor(Et),_.setScissorTest(St),V){const Mt=X.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,$)}else if(bt){const Mt=F;for(let Pt=0;Pt<w.textures.length;Pt++){const Ut=X.get(w.textures[Pt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,$,Mt)}}else if(w!==null&&$!==0){const Mt=X.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Mt.__webglTexture,$)}W=-1};function Cl(w){const F=X.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=C.textureFormatReadable(w.format),F.__typeReadable=C.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,$,G,V,bt,At,Mt=0){if(!(w&&w.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){_.bindFramebuffer(k.FRAMEBUFFER,Pt);try{const Ut=w.textures[Mt],ee=Ut.format,re=Ut.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Mt);const Lt=Cl(Ut);if(Lt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-G&&$>=0&&$<=w.height-V&&k.readPixels(F,$,G,V,gt.convert(ee),gt.convert(re),bt)}finally{const Ut=Q!==null?X.get(Q).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,F,$,G,V,bt,At,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=X.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(F>=0&&F<=w.width-G&&$>=0&&$<=w.height-V){_.bindFramebuffer(k.FRAMEBUFFER,Pt);const Ut=w.textures[Mt],ee=Ut.format,re=Ut.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Mt);const Lt=Cl(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.bufferData(k.PIXEL_PACK_BUFFER,bt.byteLength,k.STREAM_READ),k.readPixels(F,$,G,V,gt.convert(ee),gt.convert(re),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Fe=Q!==null?X.get(Q).__webglFramebuffer:null;_.bindFramebuffer(k.FRAMEBUFFER,Fe);const Ae=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ld(k,Ae,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ge),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,bt),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ge),k.deleteSync(Ae),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,$=0){const G=Math.pow(2,-$),V=Math.floor(w.image.width*G),bt=Math.floor(w.image.height*G),At=F!==null?F.x:0,Mt=F!==null?F.y:0;K.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,At,Mt,V,bt),_.unbindTexture()},this.copyTextureToTexture=function(w,F,$=null,G=null,V=0,bt=0){let At,Mt,Pt,Ut,ee,re,Lt,ge,Fe;const Ae=w.isCompressedTexture?w.mipmaps[bt]:w.image;if($!==null)At=$.max.x-$.min.x,Mt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,Ut=$.min.x,ee=$.min.y,re=$.isBox3?$.min.z:0;else{const Ne=Math.pow(2,-V);At=Math.floor(Ae.width*Ne),Mt=Math.floor(Ae.height*Ne),w.isDataArrayTexture?Pt=Ae.depth:w.isData3DTexture?Pt=Math.floor(Ae.depth*Ne):Pt=1,Ut=0,ee=0,re=0}G!==null?(Lt=G.x,ge=G.y,Fe=G.z):(Lt=0,ge=0,Fe=0);const Se=gt.convert(F.format),Je=gt.convert(F.type);let Tt;F.isData3DTexture?(K.setTexture3D(F,0),Tt=k.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),Tt=k.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),Tt=k.TEXTURE_2D),_.activeTexture(k.TEXTURE0),_.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const ni=_.getParameter(k.UNPACK_ROW_LENGTH),de=_.getParameter(k.UNPACK_IMAGE_HEIGHT),Mi=_.getParameter(k.UNPACK_SKIP_PIXELS),Fi=_.getParameter(k.UNPACK_SKIP_ROWS),hn=_.getParameter(k.UNPACK_SKIP_IMAGES);_.pixelStorei(k.UNPACK_ROW_LENGTH,Ae.width),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ae.height),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Ut),_.pixelStorei(k.UNPACK_SKIP_ROWS,ee),_.pixelStorei(k.UNPACK_SKIP_IMAGES,re);const Kn=w.isDataArrayTexture||w.isData3DTexture,ye=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Ne=X.get(w),un=X.get(F),we=X.get(Ne.__renderTarget),dn=X.get(un.__renderTarget);_.bindFramebuffer(k.READ_FRAMEBUFFER,we.__webglFramebuffer),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,dn.__webglFramebuffer);for(let Jn=0;Jn<Pt;Jn++)Kn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,X.get(w).__webglTexture,V,re+Jn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,X.get(F).__webglTexture,bt,Fe+Jn)),k.blitFramebuffer(Ut,ee,At,Mt,Lt,ge,At,Mt,k.DEPTH_BUFFER_BIT,k.NEAREST);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||X.has(w)){const Ne=X.get(w),un=X.get(F);_.bindFramebuffer(k.READ_FRAMEBUFFER,D),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let we=0;we<Pt;we++)Kn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ne.__webglTexture,V,re+we):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,V),ye?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,bt,Fe+we):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,bt),V!==0?k.blitFramebuffer(Ut,ee,At,Mt,Lt,ge,At,Mt,k.COLOR_BUFFER_BIT,k.NEAREST):ye?k.copyTexSubImage3D(Tt,bt,Lt,ge,Fe+we,Ut,ee,At,Mt):k.copyTexSubImage2D(Tt,bt,Lt,ge,Ut,ee,At,Mt);_.bindFramebuffer(k.READ_FRAMEBUFFER,null),_.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Tt,bt,Lt,ge,Fe,At,Mt,Pt,Se,Je,Ae.data):F.isCompressedArrayTexture?k.compressedTexSubImage3D(Tt,bt,Lt,ge,Fe,At,Mt,Pt,Se,Ae.data):k.texSubImage3D(Tt,bt,Lt,ge,Fe,At,Mt,Pt,Se,Je,Ae):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,bt,Lt,ge,At,Mt,Se,Je,Ae.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,bt,Lt,ge,Ae.width,Ae.height,Se,Ae.data):k.texSubImage2D(k.TEXTURE_2D,bt,Lt,ge,At,Mt,Se,Je,Ae);_.pixelStorei(k.UNPACK_ROW_LENGTH,ni),_.pixelStorei(k.UNPACK_IMAGE_HEIGHT,de),_.pixelStorei(k.UNPACK_SKIP_PIXELS,Mi),_.pixelStorei(k.UNPACK_SKIP_ROWS,Fi),_.pixelStorei(k.UNPACK_SKIP_IMAGES,hn),bt===0&&F.generateMipmaps&&k.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(w){X.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){B=0,O=0,Q=null,_.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}}const jt=[{id:0,name:"朱队",short:"朱",color:16726832,css:"#ff3b30",dark:10362134},{id:1,name:"苍队",short:"苍",color:3111935,css:"#2f7bff",dark:1523084},{id:2,name:"金队",short:"金",color:16757504,css:"#ffb300",dark:10118144},{id:3,name:"翠队",short:"翠",color:1688186,css:"#19c27a",dark:748354}],Qt=0,Tv=[["你","阿椿"],["雾隐","苍介"],["金吾","琥珀"],["翠竹","若叶"]],Vn=[{letter:"A",name:"松庭",flavor:"pine",css:"#6f8f6a"},{letter:"B",name:"竹庭",flavor:"bamboo",css:"#9bb85a"},{letter:"C",name:"枫庭",flavor:"maple",css:"#e0773a"},{letter:"D",name:"樱庭",flavor:"sakura",css:"#f0a0bc"}],or={quick:{id:"quick",name:"快速模式",target:5,midgameAt:0,desc:"先到 5 分获胜 · 只在开局建造一次"},long:{id:"long",name:"长局模式",target:10,midgameAt:5,desc:"先到 10 分获胜 · 首队到 5 分后中场重建"}},ne={build:150,rebuild:120,lock:2.8,swap:5.5,buy:15,buyAfterBuild:20,readyShortcut:3,round:100,revealAt:45,ringAt:30,ringStartRadius:44,ringEndRadius:4,ringDps:9,roundEnd:5.5},Re={start:800,base:500,win:500,lossStep:150,lossMax:450,max:5e3,armorPrice:400,armorPoints:40},ti={budget:20,reach:8.5},fe={radius:.38,height:1.75,eye:1.6,chest:1.15,step:.4,speed:5,sprintMult:1.32,accel:42,maxHp:100},ke={origin:-29,step:.5,n:117,clearance:.45},le={stageHalf:4,stageH:1.2,stairLen:2,stairHalfW:1.5,wallH:3.2,outerH:4.2},aa={easy:{name:"简单",react:.5,block:.18,parry:.05,turn:4,aggr:.55,dodge:.08},normal:{name:"普通",react:.32,block:.4,parry:.14,turn:5.6,aggr:.75,dodge:.18},hard:{name:"困难",react:.2,block:.62,parry:.3,turn:7.5,aggr:.95,dodge:.3}},Nc="swapblade.settings.v1",En=Math.PI/180;function te(s,t,e){return s<t?t:s>e?e:s}function xl(s,t,e){return s+(t-s)*e}function Av(s,t,e){const i=te((e-s)/(t-s),0,1);return i*i*(3-2*i)}function ei(s,t,e,i){return xl(s,t,1-Math.exp(-e*i))}function cu(s){return s=(s+Math.PI)%(Math.PI*2),s<0&&(s+=Math.PI*2),s-Math.PI}function Hr(s,t){return cu(t-s)}function xn(s,t){return Math.atan2(-s,-t)}const Li={outCubic:s=>1-Math.pow(1-s,3),inCubic:s=>s*s*s,inOutQuad:s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2,outQuad:s=>1-(1-s)*(1-s),inQuad:s=>s*s,outBack:s=>1+2.70158*Math.pow(s-1,3)+1.70158*Math.pow(s-1,2),outElastic:s=>s===0||s===1?s:Math.pow(2,-10*s)*Math.sin((s*10-.75)*(2*Math.PI/3))+1};let On=Math.random()*2**31|0;function Rv(s){On=s|0}function Yt(){On|=0,On=On+1831565813|0;let s=Math.imul(On^On>>>15,1|On);return s=s+Math.imul(s^s>>>7,61|s)^s,((s^s>>>14)>>>0)/4294967296}function ut(s,t){return s+(t-s)*Yt()}function $s(s){return s[Math.floor(Yt()*s.length)]}function Jr(s){for(let t=s.length-1;t>0;t--){const e=Math.floor(Yt()*(t+1)),i=s[t];s[t]=s[e],s[e]=i}return s}function wi(s,t,e){e=(e%4+4)%4;for(let i=0;i<e;i++){const n=s;s=-t,t=n}return[s,t]}function Qs(s,t){const e=wi(s.minX,s.minZ,t),i=wi(s.maxX,s.maxZ,t);return{minX:Math.min(e[0],i[0]),maxX:Math.max(e[0],i[0]),minZ:Math.min(e[1],i[1]),maxZ:Math.max(e[1],i[1])}}function hu(s){s=Math.max(0,Math.ceil(s));const t=Math.floor(s/60),e=s%60;return`${t}:${e<10?"0":""}${e}`}function yt(s){const t=document.getElementById(s);if(!t)throw new Error("missing element #"+s);return t}function Os(s,t,e){const i=document.createElement(s);return t&&(i.className=t),e!==void 0&&(i.innerHTML=e),i}let Cv=1;class uu{id=Cv++;kind;minX=0;maxX=0;minY=0;maxY=0;minZ=0;maxZ=0;cx=0;cz=0;r=0;move=!0;sight=!0;tag="";owner=null;constructor(t){this.kind=t.kind,this.move=t.move,this.sight=t.sight,this.tag=t.tag,this.minY=t.minY,this.maxY=t.maxY,t.kind==="box"?(this.minX=t.minX,this.maxX=t.maxX,this.minZ=t.minZ,this.maxZ=t.maxZ,this.cx=(t.minX+t.maxX)/2,this.cz=(t.minZ+t.maxZ)/2):(this.cx=t.x,this.cz=t.z,this.r=t.r,this.minX=t.x-t.r,this.maxX=t.x+t.r,this.minZ=t.z-t.r,this.maxZ=t.z+t.r)}dist2D(t,e){if(this.kind==="box"){const n=t<this.minX?this.minX-t:t>this.maxX?t-this.maxX:0,r=e<this.minZ?this.minZ-e:e>this.maxZ?e-this.maxZ:0;return Math.sqrt(n*n+r*r)}const i=Math.hypot(t-this.cx,e-this.cz)-this.r;return i>0?i:0}}const $e={hit:!1,nx:0,nz:0};class Pv{list=[];lastHit=null;add(t,e=null){const i=new uu(t);return i.owner=e,this.list.push(i),i}remove(t){const e=this.list.indexOf(t);e>=0&&this.list.splice(e,1)}resolveCircle(t,e,i,n,r){$e.hit=!1,$e.nx=0,$e.nz=0;for(let a=0;a<4;a++){let o=!1;for(let c=0;c<this.list.length;c++){const l=this.list[c];if(l.move&&!(l.maxY<=i+r||l.minY>=n)&&!(t.x<l.minX-e||t.x>l.maxX+e||t.z<l.minZ-e||t.z>l.maxZ+e))if(l.kind==="box"){const h=t.x<l.minX?l.minX:t.x>l.maxX?l.maxX:t.x,d=t.z<l.minZ?l.minZ:t.z>l.maxZ?l.maxZ:t.z,u=t.x-h,f=t.z-d,g=u*u+f*f;if(g>=e*e)continue;if(g>1e-10){const y=Math.sqrt(g),m=e-y,p=u/y,S=f/y;t.x+=p*m,t.z+=S*m,$e.nx=p,$e.nz=S}else{const y=t.x-l.minX,m=l.maxX-t.x,p=t.z-l.minZ,S=l.maxZ-t.z,E=Math.min(y,m,p,S);E===y?(t.x=l.minX-e,$e.nx=-1,$e.nz=0):E===m?(t.x=l.maxX+e,$e.nx=1,$e.nz=0):E===p?(t.z=l.minZ-e,$e.nx=0,$e.nz=-1):(t.z=l.maxZ+e,$e.nx=0,$e.nz=1)}o=!0,$e.hit=!0}else{const h=t.x-l.cx,d=t.z-l.cz,u=e+l.r,f=h*h+d*d;if(f>=u*u)continue;const g=Math.sqrt(f)||1e-5,y=f>1e-10?h/g:1,m=f>1e-10?d/g:0;t.x=l.cx+y*u,t.z=l.cz+m*u,$e.nx=y,$e.nz=m,o=!0,$e.hit=!0}}if(!o)break}return $e}circleBlocked(t,e,i){for(const n of this.list)if(n.move&&n.dist2D(t,e)<i)return!0;return!1}raycast(t,e,i,n,r,a,o){const c=n-t,l=r-e,h=a-i;let d=1,u=null;for(let f=0;f<this.list.length;f++){const g=this.list[f];if(o?!o(g):!g.sight)continue;const y=Math.min(t,n),m=Math.max(t,n),p=Math.min(i,a),S=Math.max(i,a);if(m<g.minX||y>g.maxX||S<g.minZ||p>g.maxZ)continue;let E;g.kind==="box"?E=Lv(t,e,i,c,l,h,g):E=Dv(t,e,i,c,l,h,g),E<d&&(d=E,u=g)}return this.lastHit=u,d}segmentBlocked(t,e,i,n,r,a){return this.raycast(t,e,i,n,r,a)<.999}}function Lv(s,t,e,i,n,r,a){let o=0,c=1;if(Math.abs(i)<1e-9){if(s<a.minX||s>a.maxX)return 1}else{let l=(a.minX-s)/i,h=(a.maxX-s)/i;if(l>h){const d=l;l=h,h=d}if(l>o&&(o=l),h<c&&(c=h),o>c)return 1}if(Math.abs(n)<1e-9){if(t<a.minY||t>a.maxY)return 1}else{let l=(a.minY-t)/n,h=(a.maxY-t)/n;if(l>h){const d=l;l=h,h=d}if(l>o&&(o=l),h<c&&(c=h),o>c)return 1}if(Math.abs(r)<1e-9){if(e<a.minZ||e>a.maxZ)return 1}else{let l=(a.minZ-e)/r,h=(a.maxZ-e)/r;if(l>h){const d=l;l=h,h=d}if(l>o&&(o=l),h<c&&(c=h),o>c)return 1}return o}function Dv(s,t,e,i,n,r,a){const o=s-a.cx,c=e-a.cz,l=i*i+r*r,h=2*(o*i+c*r),d=o*o+c*c-a.r*a.r;let u,f;if(l<1e-9){if(d>0)return 1;u=0,f=1}else{const p=h*h-4*l*d;if(p<0)return 1;const S=Math.sqrt(p);if(u=(-h-S)/(2*l),f=(-h+S)/(2*l),f<0||u>1)return 1;u<0&&(u=0),f>1&&(f=1)}let g=t+n*u,y=t+n*f;if(g<a.minY&&y<a.minY||g>a.maxY&&y>a.maxY)return 1;if(g>=a.minY&&g<=a.maxY)return u;if(Math.abs(n)<1e-9)return 1;const m=g>a.maxY?(a.maxY-t)/n:(a.minY-t)/n;return m>=u&&m<=f?m:1}const ve=ke.n;class xe{constructor(t){this.world=t}world;walk=new Uint8Array(ve*ve);g=new Float32Array(ve*ve);f=new Float32Array(ve*ve);came=new Int32Array(ve*ve);stamp=new Uint32Array(ve*ve);closed=new Uint32Array(ve*ve);gen=1;heap=new Int32Array(ve*ve);heapSize=0;version=0;static cx(t){return ke.origin+t*ke.step}static ix(t){return Math.round((t-ke.origin)/ke.step)}idx(t,e){return e*ve+t}inside(t,e){return t>=0&&e>=0&&t<ve&&e<ve}isWalkXZ(t,e){const i=xe.ix(t),n=xe.ix(e);return this.inside(i,n)?this.walk[this.idx(i,n)]===1:!1}rebuildAll(){for(let t=0;t<ve;t++)for(let e=0;e<ve;e++)this.walk[this.idx(e,t)]=this.cellFree(xe.cx(e),xe.cx(t))?1:0;this.version++}updateRegion(t,e,i,n){const r=ke.clearance+ke.step,a=Math.max(0,Math.floor((t-r-ke.origin)/ke.step)),o=Math.min(ve-1,Math.ceil((e+r-ke.origin)/ke.step)),c=Math.max(0,Math.floor((i-r-ke.origin)/ke.step)),l=Math.min(ve-1,Math.ceil((n+r-ke.origin)/ke.step));for(let h=c;h<=l;h++)for(let d=a;d<=o;d++)this.walk[this.idx(d,h)]=this.cellFree(xe.cx(d),xe.cx(h))?1:0;this.version++}cellFree(t,e,i){const n=ke.clearance;for(const r of this.world.list)if(r.move&&!(t<r.minX-n||t>r.maxX+n||e<r.minZ-n||e>r.maxZ+n)&&r.dist2D(t,e)<n)return!1;if(i){for(const r of i)if(r.dist2D(t,e)<n)return!1}return!0}nearestWalkable(t,e,i=6){const n=xe.ix(t),r=xe.ix(e);let a=null,o=1/0;for(let c=0;c<=i;c++){for(let l=r-c;l<=r+c;l++)for(let h=n-c;h<=n+c;h++){if(Math.max(Math.abs(h-n),Math.abs(l-r))!==c||!this.inside(h,l)||!this.walk[this.idx(h,l)])continue;const d=xe.cx(h),u=xe.cx(l),f=(d-t)**2+(u-e)**2;f<o&&(o=f,a={x:d,z:u})}if(a)return a}return null}lineWalkable(t,e,i,n){const r=Math.hypot(i-t,n-e),a=Math.max(1,Math.ceil(r/.2));for(let o=0;o<=a;o++){const c=o/a,l=t+(i-t)*c,h=e+(n-e)*c,d=(l-ke.origin)/ke.step,u=(h-ke.origin)/ke.step,f=Math.floor(d),g=Math.floor(u),y=d-f,m=u-g,p=y<.15?[f]:y>.85?[f+1]:[f,f+1],S=m<.15?[g]:m>.85?[g+1]:[g,g+1];for(const E of p)for(const x of S)if(!this.inside(E,x)||!this.walk[this.idx(E,x)])return!1}return!0}heapPush(t){const e=this.heap,i=this.f;let n=this.heapSize++;for(e[n]=t;n>0;){const r=n-1>>1;if(i[e[r]]<=i[e[n]])break;const a=e[r];e[r]=e[n],e[n]=a,n=r}}heapPop(){const t=this.heap,e=this.f,i=t[0],n=t[--this.heapSize];if(this.heapSize>0){t[0]=n;let r=0;for(;;){const a=r*2+1,o=a+1;let c=r;if(a<this.heapSize&&e[t[a]]<e[t[c]]&&(c=a),o<this.heapSize&&e[t[o]]<e[t[c]]&&(c=o),c===r)break;const l=t[c];t[c]=t[r],t[r]=l,r=c}}return i}findPath(t,e,i,n,r=9e3){let a=xe.ix(t),o=xe.ix(e);if(!this.inside(a,o)||!this.walk[this.idx(a,o)]){const E=this.nearestWalkable(t,e,3);if(!E)return null;a=xe.ix(E.x),o=xe.ix(E.z)}let c=xe.ix(i),l=xe.ix(n),h=i,d=n;if(!this.inside(c,l)||!this.walk[this.idx(c,l)]){const E=this.nearestWalkable(i,n,6);if(!E)return null;c=xe.ix(E.x),l=xe.ix(E.z),h=E.x,d=E.z}const u=this.idx(a,o),f=this.idx(c,l);if(u===f)return[{x:h,z:d}];const g=++this.gen;this.heapSize=0,this.g[u]=0,this.f[u]=this.h(a,o,c,l),this.came[u]=-1,this.stamp[u]=g,this.heapPush(u);let y=!1,m=0;for(;this.heapSize>0&&m++<r;){const E=this.heapPop();if(E===f){y=!0;break}if(this.closed[E]===g)continue;this.closed[E]=g;const x=E%ve,T=E/ve|0;for(let M=-1;M<=1;M++)for(let A=-1;A<=1;A++){if(!A&&!M)continue;const v=x+A,b=T+M;if(!this.inside(v,b))continue;const R=b*ve+v;if(!this.walk[R]||A&&M&&(!this.walk[T*ve+v]||!this.walk[b*ve+x])||this.closed[R]===g)continue;const I=this.g[E]+(A&&M?1.41421:1);(this.stamp[R]!==g||I<this.g[R])&&(this.stamp[R]=g,this.g[R]=I,this.f[R]=I+this.h(v,b,c,l),this.came[R]=E,this.heapPush(R))}}if(!y)return null;const p=[];let S=f;for(;S!==-1;)p.push({x:xe.cx(S%ve),z:xe.cx(S/ve|0)}),S=this.came[S];return p.reverse(),p[p.length-1]={x:h,z:d},this.smooth(t,e,p)}h(t,e,i,n){const r=Math.abs(t-i),a=Math.abs(e-n);return r+a+(1.41421-2)*Math.min(r,a)}smooth(t,e,i){const n=[];let r=t,a=e,o=0;for(;o<i.length;){let c=o;for(let l=i.length-1;l>o;l--)if(this.lineWalkable(r,a,i[l].x,i[l].z)){c=l;break}n.push(i[c]),r=i[c].x,a=i[c].z,o=c+1}return n}regionReach(t,e,i,n){const r=Math.max(0,xe.ix(t.minX)),a=Math.min(ve-1,xe.ix(t.maxX)),o=Math.max(0,xe.ix(t.minZ)),c=Math.min(ve-1,xe.ix(t.maxZ)),l=a-r+1,h=c-o+1,d=new Uint8Array(l*h),u=new Uint8Array(l*h),f=new Int32Array(l*h);let g=0,y=0;for(let m=0;m<h;m++)for(let p=0;p<l;p++){const S=r+p,E=o+m;let x=this.walk[this.idx(S,E)]===1;const T=xe.cx(S),M=xe.cx(E);if(x&&n){for(const A of n)if(A.dist2D(T,M)<ke.clearance){x=!1;break}}d[m*l+p]=x?1:0,x&&e(T,M)&&(u[m*l+p]=1,f[y++]=m*l+p)}for(;g<y;){const m=f[g++],p=m%l,S=m/l|0,E=[m-1,m+1,m-l,m+l],x=[p>0,p<l-1,S>0,S<h-1];for(let T=0;T<4;T++){if(!x[T])continue;const M=E[T];u[M]||!d[M]||(u[M]=1,f[y++]=M)}}return i.map(m=>{const p=xe.ix(m.x)-r,S=xe.ix(m.z)-o;for(let E=-1;E<=1;E++)for(let x=-1;x<=1;x++){const T=p+x,M=S+E;if(!(T<0||M<0||T>=l||M>=h)&&u[M*l+T])return!0}return!1})}}function ui(s,t,e,i,n,r,a,o=!0,c=!0){return{kind:"box",minX:s,maxX:t,minY:e,maxY:i,minZ:n,maxZ:r,move:o,sight:c,tag:a}}function ai(s,t,e,i,n,r,a=!0,o=!0){return{kind:"cyl",x:s,z:t,r:e,minY:i,maxY:n,move:a,sight:o,tag:r}}function zs(s,t){if(s.kind==="box"){const n=Qs({minX:s.minX,maxX:s.maxX,minZ:s.minZ,maxZ:s.maxZ},t);return{...s,minX:n.minX,maxX:n.maxX,minZ:n.minZ,maxZ:n.maxZ}}const[e,i]=wi(s.x,s.z,t);return{...s,x:e,z:i}}const Gr=le.wallH,Iv=[ui(-9,-8,0,Gr,-29,-22,"zwall"),ui(-9,-8,0,Gr,-18,-12,"zwall"),ui(-29,-22,0,Gr,-9,-8,"zwall"),ui(-18,-12,0,Gr,-9,-8,"zwall")],Uv=[ai(-8.5,-11.7,.24,0,3.6,"torii"),ai(-11.7,-8.5,.24,0,3.6,"torii"),ui(-27.1,-24.9,0,1.7,-29,-28.55,"rack")],Bi={rect:{minX:-29,maxX:-9,minZ:-29,maxZ:-9},pad:{minX:-29,maxX:-23,minZ:-29,maxZ:-23},padCenter:{x:-26,z:-26},spawns:[{x:-27.2,z:-24.8,yaw:-Math.PI*.75},{x:-24.8,z:-27.2,yaw:-Math.PI*.75}],noBuild:[{minX:-29,maxX:-23,minZ:-29,maxZ:-23},{minX:-11,maxX:-9,minZ:-22,maxZ:-18},{minX:-22,maxX:-18,minZ:-11,maxZ:-9},{minX:-12,maxX:-9,minZ:-12,maxZ:-9}],gates:[{x:-8.5,z:-20,ox:-6.5,oz:-20,kind:"side"},{x:-20,z:-8.5,ox:-20,oz:-6.5,kind:"side"},{x:-10.2,z:-10.2,ox:-7.6,oz:-7.6,kind:"corner"}],center:{x:-19,z:-19},rack:{x:-26,z:-28.75,yaw:Math.PI},inward:{x:Math.SQRT1_2,z:Math.SQRT1_2}},Nv=[ai(-2.2,-21.2,.22,0,3,"pav_post"),ai(2.2,-21.2,.22,0,3,"pav_post"),ai(-2.2,-16.8,.22,0,3,"pav_post"),ai(2.2,-16.8,.22,0,3,"pav_post"),ai(0,-19,.55,0,.85,"basin",!0,!1),ai(-5,-26.3,1.1,0,6.5,"bamboo"),ai(5,-26.3,1.1,0,6.5,"bamboo"),ai(-5.5,-15.5,.9,0,1.6,"rock"),ai(5.5,-22.5,.9,0,1.6,"rock"),ai(-4.6,-11.4,.4,0,2.1,"lantern"),ai(4.6,-11.4,.4,0,2.1,"lantern")],Ie=le.stageHalf,Mn=le.stairHalfW,Sn=le.stairLen,kv=[ui(-Ie,-Mn,0,2,-Ie,-Ie+.3,"parapet"),ui(Mn,Ie,0,2,-Ie,-Ie+.3,"parapet"),ui(-Mn-.3,-Mn,0,2,-Ie-Sn,-Ie,"stairwall"),ui(Mn,Mn+.3,0,2,-Ie-Sn,-Ie,"stairwall")],Fv=[ui(-Ie,Ie,0,le.stageH,-Ie,Ie,"stageblock",!1,!0),ai(0,0,.85,le.stageH,3.1,"drum")],Ov=ai(-6.3,-6.3,.32,0,3.2,"tree"),zv=[ui(-30,30,0,le.outerH,-30,-29,"outer"),ui(-30,30,0,le.outerH,29,30,"outer"),ui(-30,-29,0,le.outerH,-30,30,"outer"),ui(29,30,0,le.outerH,-30,30,"outer")];function Bv(){const s=[];for(let t=0;t<4;t++){const e=n=>{const[r,a]=wi(n.x,n.z,t);return{x:r,z:a}},i={idx:t,letter:Vn[t].letter,name:Vn[t].name,k:t,rect:Qs(Bi.rect,t),pad:Qs(Bi.pad,t),padCenter:e(Bi.padCenter),spawns:Bi.spawns.map(n=>{const r=e(n);return{x:r.x,z:r.z,yaw:n.yaw-t*Math.PI/2}}),noBuild:Bi.noBuild.map(n=>Qs(n,t)),gates:Bi.gates.map(n=>{const r=e(n),a=e({x:n.ox,z:n.oz});return{x:r.x,z:r.z,ox:a.x,oz:a.z,kind:n.kind}}),center:e(Bi.center),rack:{...e(Bi.rack),yaw:Bi.rack.yaw-t*Math.PI/2},inward:e(Bi.inward)};s.push(i)}return s}function Hv(){const s=[...zv,...Fv];for(let t=0;t<4;t++){for(const e of Iv)s.push(zs(e,t));for(const e of Uv)s.push(zs(e,t));for(const e of Nv)s.push(zs(e,t));for(const e of kv)s.push(zs(e,t));s.push(zs(Ov,t))}return s}function kc(s,t){const e=Math.abs(s),i=Math.abs(t);return e<=Ie&&i<=Ie?le.stageH:e<=Mn&&i>Ie&&i<Ie+Sn?le.stageH*(Ie+Sn-i)/Sn:i<=Mn&&e>Ie&&e<Ie+Sn?le.stageH*(Ie+Sn-e)/Sn:0}function Gv(){const s=[];for(let t=0;t<4;t++){const e=(i,n,r)=>{const[a,o]=wi(i,n,t);s.push({x:a,z:o,tag:r})};e(-19,-19,"zone"),e(-15,-15,"zone"),e(-10,-10,"junction"),e(0,-13.5,"lane"),e(-3.5,-24,"lane"),e(2.4,-2.4,"stage"),e(0,-7.2,"plaza")}return s}function Vv(s,t=!1){const e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new We;let l=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Fc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let y=0;y<a[h].length;++y)f.push(a[h][y][u]);const g=Fc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Fc(s){let t,e,i,n=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Ze(a,e,i);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const y=h.getComponent(u,g);o.setComponent(u+d,g,y)}}else a.set(h.array,c);c+=h.count*e}return n!==void 0&&(o.gpuType=n),o}const Oc=new oe,zc=new ci,Bc=new cn,Hc=new U,Gc=new U;class xi{groups=new Map;add(t,e,i=0,n=0,r=0,a=0,o=0,c=0,l=1,h=1,d=1){return Bc.set(a,o,c),zc.setFromEuler(Bc),Hc.set(i,n,r),Gc.set(l,h,d),Oc.compose(Hc,zc,Gc),this.addMatrix(t,e,Oc)}addMatrix(t,e,i){let n=t.index?t.toNonIndexed():t.clone();if(!n.getAttribute("uv")){const a=n.getAttribute("position").count;n.setAttribute("uv",new Pe(new Float32Array(a*2),2))}for(const a of Object.keys(n.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&n.deleteAttribute(a);n.getAttribute("normal")||n.computeVertexNormals(),n.applyMatrix4(i);let r=this.groups.get(e);return r||(r=[],this.groups.set(e,r)),r.push(n),this}box(t,e,i,n,r,a,o,c=0,l=0,h=0){const d=new Te(e,i,n);return this.add(d,t,r,a+i/2,o,l,c,h)}boxMinMax(t,e,i,n,r,a,o){const c=new Te(i-e,r-n,o-a);return this.add(c,t,(e+i)/2,(n+r)/2,(a+o)/2)}cyl(t,e,i,n,r,a,o,c=10,l=0,h=0){const d=new Ue(e,i,n,c);return this.add(d,t,r,a+n/2,o,l,0,h)}build(t={}){const e=new Ce;for(const[i,n]of this.groups){const r=Vv(n,!1);if(!r)continue;r.computeBoundingSphere();const a=new Wt(r,i);a.castShadow=t.cast??!0,a.receiveShadow=t.receive??!0,e.add(a);for(const o of n)o.dispose()}return this.groups.clear(),e}}function du(s){const t=new Uint8Array(s.map(i=>Math.round(i*255))),e=new kh(t,s.length,1,rl);return e.minFilter=Be,e.magFilter=Be,e.generateMipmaps=!1,e.needsUpdate=!0,e}const fu=du([.42,.42,.42,.78,1,1]),nn=du([.5,.5,1,1]),Vc=new Map;function Rt(s,t={}){const e=JSON.stringify([s,t.rim,t.rimStrength,t.emissive,t.emissiveIntensity,t.map?.uuid,t.transparent,t.opacity,t.side,t.gradient?.uuid,t.flat]),i=Vc.get(e);if(i)return i;const n=new Yh({color:new Ht(s),gradientMap:t.gradient??fu,map:t.map??null,transparent:!!t.transparent,opacity:t.opacity??1,side:t.side??Cn});return t.emissive!==void 0&&(n.emissive=new Ht(t.emissive),n.emissiveIntensity=t.emissiveIntensity??1),t.rim!==void 0&&pu(n,t.rim,t.rimStrength??.55),Vc.set(e,n),n}function qs(s,t={}){const e=new Yh({color:new Ht(s),gradientMap:t.gradient??fu,map:t.map??null,transparent:!!t.transparent,opacity:t.opacity??1});return e.emissive=new Ht(t.emissive??0),e.emissiveIntensity=t.emissiveIntensity??1,t.rim!==void 0&&pu(e,t.rim,t.rimStrength??.55),e}function pu(s,t,e){const i={value:new Ht(t)},n={value:e};s.userData.rimColor=i,s.userData.rimStrength=n,s.onBeforeCompile=r=>{r.uniforms.rimColor=i,r.uniforms.rimStrength=n,r.fragmentShader=`uniform vec3 rimColor;
uniform float rimStrength;
`+r.fragmentShader.replace("#include <opaque_fragment>",`
      {
        vec3 rimV = normalize( vViewPosition );
        float rimF = 1.0 - clamp( dot( normal, rimV ), 0.0, 1.0 );
        outgoingLight += rimColor * smoothstep( 0.62, 0.7, rimF ) * rimStrength;
      }
      #include <opaque_fragment>
      `)},s.customProgramCacheKey=()=>"rim"}function fi(s,t,e,i={}){const n=document.createElement("canvas");n.width=s,n.height=t;const r=n.getContext("2d");e(r,s,t);const a=new Nd(n);return i.srgb!==!1&&(a.colorSpace=gi),i.repeat&&(a.wrapS=tr,a.wrapT=tr),a.anisotropy=8,i.mip===!1&&(a.generateMipmaps=!1,a.minFilter=Ke),a}function _l(s,t={}){const e=t.size??96,i=t.w??256,n=t.h??128;return fi(i,n,r=>{t.bg&&(r.fillStyle=t.bg,r.fillRect(0,0,i,n)),r.font=t.font??`900 ${e}px "PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif`,r.textAlign="center",r.textBaseline="middle",r.lineJoin="round",t.stroke&&(r.strokeStyle=t.stroke,r.lineWidth=t.strokeW??e*.16,r.strokeText(s,i/2,n/2+e*.04)),r.fillStyle=t.color??"#fff",r.fillText(s,i/2,n/2+e*.04)},{mip:!1})}const Pn=1;function sn(s){s.traverse(t=>{t.layers.set(Pn)})}const Pi={plaster:16117731,stone:12103586,stoneDark:9274488,wood:8015413,woodDark:4730922,tile:4147552,tileLight:5661052,bengara:11027514,gold:14264138};function Wv(s){const e=34.13333333333333,i=r=>(r+30)*e,n=r=>(r+30)*e;return fi(2048,2048,r=>{r.fillStyle="#d9cbb0",r.fillRect(0,0,2048,2048);for(let o=-30;o<30;o++)for(let c=-30;c<30;c++){const l=.9+(o*928371+c*1237)%17/170,h=Math.round(217*l),d=Math.round(203*l),u=Math.round(176*l);r.fillStyle=`rgb(${h},${d},${u})`,r.fillRect(i(o)+1.5,n(c)+1.5,e-3,e-3)}r.strokeStyle="rgba(120,100,80,0.35)",r.lineWidth=2;for(let o=-30;o<=30;o++)r.beginPath(),r.moveTo(i(o),0),r.lineTo(i(o),2048),r.stroke(),r.beginPath(),r.moveTo(0,n(o)),r.lineTo(2048,n(o)),r.stroke();r.strokeStyle="rgba(110,90,70,0.45)";for(const o of[5.2,6.4,7.6])r.lineWidth=o===6.4?6:3,r.beginPath(),r.arc(i(0),n(0),o*e,0,Math.PI*2),r.stroke();const a=["#e9e8de","#ecebd9","#efe5d6","#f1e6e6"];s.forEach((o,c)=>{const l=o.rect;r.fillStyle=a[c],r.fillRect(i(l.minX),n(l.minZ),(l.maxX-l.minX)*e,(l.maxZ-l.minZ)*e),r.save(),r.beginPath(),r.rect(i(l.minX),n(l.minZ),(l.maxX-l.minX)*e,(l.maxZ-l.minZ)*e),r.clip(),r.strokeStyle="rgba(150,140,120,0.32)",r.lineWidth=2;const h=i(o.padCenter.x),d=n(o.padCenter.z);for(let y=4;y<30;y+=.55)r.beginPath(),r.arc(h,d,y*e,0,Math.PI*2),r.stroke();r.restore();const u=o.pad;r.fillStyle="#b58a5c",r.fillRect(i(u.minX),n(u.minZ),(u.maxX-u.minX)*e,(u.maxZ-u.minZ)*e),r.strokeStyle="rgba(80,50,30,0.5)",r.lineWidth=3;const f=c%2===0;for(let y=0;y<=12;y++)r.beginPath(),f?(r.moveTo(i(u.minX),n(u.minZ)+y*e*.5),r.lineTo(i(u.maxX),n(u.minZ)+y*e*.5)):(r.moveTo(i(u.minX)+y*e*.5,n(u.minZ)),r.lineTo(i(u.minX)+y*e*.5,n(u.maxZ))),r.stroke();r.strokeStyle="#3a2a22",r.lineWidth=6,r.strokeRect(i(u.minX)+3,n(u.minZ)+3,(u.maxX-u.minX)*e-6,(u.maxZ-u.minZ)*e-6),r.fillStyle="rgba(196,184,160,0.95)";for(const y of o.noBuild.slice(1))r.fillRect(i(y.minX),n(y.minZ),(y.maxX-y.minX)*e,(y.maxZ-y.minZ)*e);r.strokeStyle="rgba(120,100,80,0.45)",r.lineWidth=2;for(const y of o.noBuild.slice(1))for(let m=y.minX;m<y.maxX;m++)for(let p=y.minZ;p<y.maxZ;p++)r.strokeRect(i(m)+4,n(p)+4,e-8,e-8);r.strokeStyle="#2b2226",r.lineWidth=7,r.strokeRect(i(l.minX)+4,n(l.minZ)+4,(l.maxX-l.minX)*e-8,(l.maxZ-l.minZ)*e-8),r.setLineDash([22,14]),r.lineWidth=3,r.strokeStyle="rgba(43,34,38,0.6)",r.strokeRect(i(l.minX)+16,n(l.minZ)+16,(l.maxX-l.minX)*e-32,(l.maxZ-l.minZ)*e-32),r.setLineDash([]),r.save(),r.translate(i(o.center.x+o.inward.x*1.5),n(o.center.z+o.inward.z*1.5));const g=Math.atan2(o.inward.z,o.inward.x)+Math.PI/2;r.rotate(g),r.font=`900 ${e*6.5}px "PingFang SC","Microsoft YaHei",sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillStyle="rgba(43,34,38,0.16)",r.fillText(o.letter,0,0),r.font=`700 ${e*1.4}px "PingFang SC","Microsoft YaHei",sans-serif`,r.fillStyle="rgba(43,34,38,0.22)",r.fillText(Vn[c].name,0,e*4.3),r.restore()})},{mip:!0})}function Xv(s){const t=s.rect,e=t.maxX-t.minX,i=t.maxZ-t.minZ,n=48;return fi(e*n,i*n,r=>{r.clearRect(0,0,e*n,i*n),r.strokeStyle="rgba(255,255,255,0.55)",r.lineWidth=2;for(let a=0;a<=e;a++)r.beginPath(),r.moveTo(a*n,0),r.lineTo(a*n,i*n),r.stroke();for(let a=0;a<=i;a++)r.beginPath(),r.moveTo(0,a*n),r.lineTo(e*n,a*n),r.stroke();for(const a of s.noBuild){const o=(a.minX-t.minX)*n,c=(a.minZ-t.minZ)*n,l=(a.maxX-a.minX)*n,h=(a.maxZ-a.minZ)*n;r.fillStyle="rgba(255,60,60,0.22)",r.fillRect(o,c,l,h),r.save(),r.beginPath(),r.rect(o,c,l,h),r.clip(),r.strokeStyle="rgba(255,70,70,0.75)",r.lineWidth=5;for(let d=-h;d<l+h;d+=22)r.beginPath(),r.moveTo(o+d,c),r.lineTo(o+d+h,c+h),r.stroke();r.restore(),r.strokeStyle="rgba(255,80,80,0.95)",r.lineWidth=4,r.strokeRect(o+2,c+2,l-4,h-4)}r.strokeStyle="rgba(255,240,140,1)",r.lineWidth=10,r.strokeRect(5,5,e*n-10,i*n-10)},{mip:!0})}const Wc=new Map;function $v(s,t){const e=s+t,i=Wc.get(e);if(i)return i;const n=fi(256,128,r=>{r.fillStyle="#2a2026",r.fillRect(0,0,256,128),r.strokeStyle="#d9a74a",r.lineWidth=6,r.strokeRect(6,6,244,116),r.fillStyle="#f6efe2",r.font='900 84px "PingFang SC","Microsoft YaHei",sans-serif',r.textAlign="center",r.textBaseline="middle",r.fillText(s,70,66),r.font='900 52px "Hiragino Mincho ProN","Songti SC","SimSun",serif',r.fillText(t,172,66)},{mip:!1});return Wc.set(e,n),n}function qv(s){return fi(256,192,t=>{t.fillStyle="#2d3b63",t.fillRect(0,0,256,192),t.fillStyle="rgba(0,0,0,0.25)";for(let e=1;e<4;e++)t.fillRect(256/4*e-2,30,4,162);t.fillStyle="#f2ead8",t.beginPath(),t.arc(128,100,52,0,Math.PI*2),t.fill(),t.fillStyle="#2d3b63",t.font='900 72px "PingFang SC","Microsoft YaHei",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(s,128,104)},{mip:!1})}const Zv=fi(256,256,s=>{s.fillStyle="#efe2c4",s.beginPath(),s.arc(128,128,126,0,Math.PI*2),s.fill(),s.translate(128,128);for(let t=0;t<3;t++)s.rotate(Math.PI*2/3),s.fillStyle="#b8372e",s.beginPath(),s.arc(0,-40,34,0,Math.PI*2),s.fill(),s.beginPath(),s.moveTo(34,-40),s.quadraticCurveTo(40,30,-40,52),s.quadraticCurveTo(20,20,-34,-40),s.fill()},{mip:!1});function Xc(s,t,e,i){const n=Rt(Pi.stone),r=Rt(Pi.stoneDark);s.cyl(r,.38,.42,.25,t,0,e,8),s.cyl(n,.13,.17,.85,t,.25,e,8),s.cyl(r,.34,.3,.14,t,1.1,e,6),s.box(i,.42,.38,.42,t,1.24,e,Math.PI/4),s.add(new yi(.48,.34,6),n,t,1.79,e),s.add(new Rn(.08,6,4),r,t,2,e)}function $c(s,t,e,i,n){const r=new ml(1,0);s.add(r,Rt(10130828),t,n*.45,e,Yt(),Yt(),Yt(),i*1.05,n*.62,i),s.add(r,Rt(9078140),t+i*.5,n*.2,e-i*.3,Yt(),Yt(),Yt(),i*.55,n*.35,i*.5)}function tl(s,t,e,i){const n=Rt(9286490),r=Rt(7246916),a=Rt(8367692,{gradient:nn});for(let o=0;o<9;o++){const c=Yt()*Math.PI*2,l=Math.sqrt(Yt())*i*.8,h=t+Math.cos(c)*l,d=e+Math.sin(c)*l,u=ut(5,7.5),f=ut(-.06,.06);s.cyl(n,.07,.08,u,h,0,d,6,f,f);for(let g=1;g<u;g+=1.1)s.cyl(r,.085,.085,.06,h,g,d,6);for(let g=0;g<3;g++)s.add(new yi(.5,1.4,5),a,h+ut(-.5,.5),u-.3-g*.9,d+ut(-.5,.5),ut(-.8,.8),Yt()*3,ut(-.8,.8))}}function Bs(s,t,e,i,n=1){if(i==="bamboo"){tl(s,t,e,1.6*n);return}const r=Rt(i==="pine"?5981750:6176563),a=(i==="pine"?5.5:3.6)*n;s.cyl(r,.18*n,.32*n,a,t,0,e,7,ut(-.08,.08),ut(-.08,.08));const o=i==="pine"?4156234:i==="maple"?15234618:16760787,c=i==="pine"?3365437:i==="maple"?13916716:16754372,l=Rt(o,{gradient:nn}),h=Rt(c,{gradient:nn}),d=new ca(1,1);if(i==="pine")for(let u=0;u<4;u++){const f=a*.55+u*.9*n,g=(2.2-u*.45)*n;s.add(d,u%2?h:l,t+ut(-.4,.4),f,e+ut(-.4,.4),0,Yt(),0,g,.55*n,g)}else{for(let f=0;f<7;f++){const g=f/7*Math.PI*2,y=ut(.8,1.6)*n,m=ut(1.1,1.6)*n;s.add(d,f%3?l:h,t+Math.cos(g)*y,a+ut(-.2,.9)*n,e+Math.sin(g)*y,Yt(),Yt(),Yt(),m,m*.85,m)}s.add(d,l,t,a+1*n,e,0,0,0,1.7*n,1.3*n,1.7*n)}}function Yv(s,t){const e=new Ce;s.add(e);const i=Wv(t),n=new Wt(new vi(60,60),Rt(16777215,{map:i}));n.rotation.x=-Math.PI/2,n.receiveShadow=!0,e.add(n);const r=new Wt(new vi(900,900),Rt(10272622,{gradient:nn}));r.rotation.x=-Math.PI/2,r.position.y=-.02,r.receiveShadow=!0,e.add(r);const a=Rt(Pi.plaster),o=Rt(Pi.stone),c=Rt(Pi.stoneDark),l=Rt(Pi.wood),h=Rt(Pi.woodDark),d=Rt(Pi.tile),u=Rt(Pi.tileLight),f=Rt(Pi.bengara),g=Rt(Pi.gold),y=Rt(16773568,{emissive:16762218,emissiveIntensity:.9}),m=(M,A,v,b,R,I)=>{const L=v-A>R-b,P=L?v-A:R-b,D=L?R-b:v-A,N=(A+v)/2,B=(b+R)/2,O=(W,Z,j,Et,St,Kt=0)=>{L?M.box(W,Z,j,Et,N+Kt,St,B):M.box(W,Et,j,Z,N,St,B+Kt)};O(c,P,.55,D+.06,0),O(a,P,I-.85,D-.1,.55),O(h,P,.14,D-.02,I-1.2),O(d,P+.1,.18,D+.5,I-.3),O(u,P+.1,.16,D+.18,I-.12),O(d,P+.1,.1,.22,I+.04);const Q=Math.max(1,Math.round(P/3));for(let W=0;W<=Q;W++){const Z=-P/2+P*W/Q,j=W===0?Z+.15:W===Q?Z-.15:Z;O(h,.26,I-.85,D+.04,.55,j)}};{const M=new xi;m(M,-30,30,-30,-29,le.outerH),m(M,-30,30,29,30,le.outerH),m(M,-30,-29,-29,29,le.outerH),m(M,29,30,-29,29,le.outerH),e.add(M.build())}const p=[],S=[],E=[],x=[];for(const M of t){const A=M.k,v=new Ce;v.rotation.y=-A*Math.PI/2,e.add(v);const b=new xi;m(b,-9,-8,-29,-22,le.wallH),m(b,-9,-8,-18,-12,le.wallH),m(b,-29,-22,-9,-8,le.wallH),m(b,-18,-12,-9,-8,le.wallH);const R=q=>{const st=(Ft,Vt)=>q?[-8.5+Vt,Ft]:[Ft,-8.5+Vt];for(const Ft of[-22.2,-17.8]){const[Vt,k]=st(Ft,0);b.box(h,.45,3.9,.45,Vt,0,k),b.box(c,.6,.3,.6,Vt,0,k)}const[at,ot]=st(-20,0),It=q?1.6:5.4,Ct=q?5.4:1.6;b.box(h,q?.5:4.8,.3,q?4.8:.5,at,3.25,ot),b.box(d,It+.4,.22,Ct+.4,at,3.85,ot),b.box(u,q?1.2:5.6,.22,q?5.6:1.2,at,4.07,ot),b.box(d,q?.35:5.8,.18,q?5.8:.35,at,4.29,ot),b.box(g,q?.12:.9,.5,q?.9:.12,at+(q?.32:0),3.3,ot+(q?0:.32))};R(!0),R(!1);{const q=[-8.5,-11.7],st=[-11.7,-8.5];for(const[Ft,Vt]of[q,st])b.cyl(f,.2,.24,3.6,Ft,0,Vt,10),b.cyl(h,.3,.3,.4,Ft,0,Vt,10);const at=(q[0]+st[0])/2,ot=(q[1]+st[1])/2,It=Math.hypot(q[0]-st[0],q[1]-st[1]),Ct=Math.atan2(q[1]-st[1],q[0]-st[0]);b.add(new Te(It+.6,.22,.3),f,at,3,ot,0,-Ct,0),b.add(new Te(It+1.6,.26,.4),h,at,3.62,ot,0,-Ct,0),b.add(new Te(It+1.2,.18,.34),f,at,3.42,ot,0,-Ct,0),b.add(new Te(.16,.42,.2),h,at,3.18,ot,0,-Ct,0)}b.box(l,6,.06,.18,-26,0,-23.09),b.box(l,.18,.06,6,-23.09,0,-26),b.box(h,2.2,.12,.42,-26,0,-28.78),b.box(h,.12,1.7,.12,-27,0,-28.75),b.box(h,.12,1.7,.12,-25,0,-28.75),b.box(l,2.2,.1,.2,-26,1.5,-28.75),b.box(l,2.2,.1,.2,-26,.85,-28.75),b.box(f,2.3,.18,.12,-26,1.62,-28.7),b.add(new Te(1.6,.05,.03),Rt(14673646),-26,1.3,-28.62,0,0,.05),b.add(new Te(1.8,.05,.03),Rt(6040100),-26,1.05,-28.62,0,0,-.04),b.add(new Te(.3,.32,.05),Rt(3816774),-25.2,.55,-28.62,0,0,.2);const I=qs(15262422,{rim:16777215,rimStrength:.2});p.push(I);for(const[q,st]of[[-23.4,-28.4],[-28.4,-23.4],[-12.6,-9.6],[-9.6,-12.6]])b.cyl(h,.05,.06,4.6,q,0,st,6),b.box(I,.05,2.4,.62,q+.02,1.9,st,(q+st)%2?0:Math.PI/2),b.box(h,.06,.06,.72,q,4.32,st,(q+st)%2?0:Math.PI/2);v.add(b.build());const L=new Di({map:$v(M.letter,M.name)}),P=new Di({map:qv(M.letter),side:hi}),D=new vi(1.5,.75),N=new vi(3.6,1),B=new Wt(D,L);B.position.set(-7.95,3.35,-20),B.rotation.y=Math.PI/2;const O=B.clone();O.position.x=-9.05,O.rotation.y=-Math.PI/2;const Q=new Wt(N,P);Q.position.set(-8.5,2.62,-20),Q.rotation.y=Math.PI/2;const W=new Wt(D,L);W.position.set(-20,3.35,-7.95);const Z=W.clone();Z.position.z=-9.05,Z.rotation.y=Math.PI;const j=new Wt(N,P);j.position.set(-20,2.62,-8.5);const Et=new Wt(new vi(.9,.45),L);Et.position.set(-10.05,3.2,-10.05),Et.rotation.y=Math.PI/4;const St=Et.clone();St.position.set(-10.15,3.2,-10.15),St.rotation.y=Math.PI/4+Math.PI;for(const q of[B,O,Q,W,Z,j,Et,St])q.castShadow=q===Q||q===j,v.add(q);const Kt=M.rect,qt=new Wt(new vi(Kt.maxX-Kt.minX,Kt.maxZ-Kt.minZ),new Di({map:Xv(M),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));qt.rotation.x=-Math.PI/2,qt.position.set((Kt.minX+Kt.maxX)/2,.025,(Kt.minZ+Kt.maxZ)/2),qt.visible=!1,qt.renderOrder=1,sn(qt),e.add(qt),S.push(qt);const Gt=M.pad,Y=new Ye({uniforms:{uColor:{value:new Ht(16777215)},uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uTime; varying vec2 vUv;
        void main(){
          float stripe = step(0.5, fract(vUv.x * 10.0 - uTime * 0.6 + vUv.y * 2.0));
          float edge = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.7, 1.0, vUv.y));
          float a = (0.12 + stripe * 0.16) * edge + smoothstep(0.9, 1.0, 1.0 - vUv.y) * 0.4;
          gl_FragColor = vec4(uColor, a);
        }`,transparent:!0,depthWrite:!1,side:hi});new Ce;const it=Gt.maxX-Gt.minX,dt=Gt.maxZ-Gt.minZ,zt=[];Math.abs(Gt.minX)<28.5&&zt.push({x:Gt.minX,z:(Gt.minZ+Gt.maxZ)/2,ry:Math.PI/2,len:dt}),Math.abs(Gt.maxX)<28.5&&zt.push({x:Gt.maxX,z:(Gt.minZ+Gt.maxZ)/2,ry:Math.PI/2,len:dt}),Math.abs(Gt.minZ)<28.5&&zt.push({x:(Gt.minX+Gt.maxX)/2,z:Gt.minZ,ry:0,len:it}),Math.abs(Gt.maxZ)<28.5&&zt.push({x:(Gt.minX+Gt.maxX)/2,z:Gt.maxZ,ry:0,len:it});const vt=new Ce;for(const q of zt){const st=new Wt(new vi(q.len,2.6),Y);st.position.set(q.x,1.3,q.z),st.rotation.y=q.ry,vt.add(st)}sn(vt),vt.visible=!1,e.add(vt),E.push(vt),vt.userData.mat=Y;const Bt=new Bn(new wn({map:_l(M.letter,{size:110,w:128,h:128,color:"#fff",stroke:"#1b1622",strokeW:16}),depthTest:!1,transparent:!0}));Bt.position.set(M.center.x,7.5,M.center.z),Bt.scale.set(3,3,1),Bt.renderOrder=20,sn(Bt),e.add(Bt),x.push(Bt);const he=new xi,et=Vn[M.idx].flavor;for(let q=0;q<7;q++){const st=q/6,[at,ot]=[-31.5-Yt()*2.5,-28+st*20],[It,Ct]=[-28+st*20,-31.5-Yt()*2.5];Bs(he,at,ot,et,ut(.9,1.3)),Bs(he,It,Ct,et,ut(.9,1.3))}Bs(he,-33,-33,et,1.5),v.add(he.build({cast:!0,receive:!1}))}for(let M=0;M<4;M++){const A=new Ce;A.rotation.y=-M*Math.PI/2,e.add(A);const v=new xi;for(const[b,R]of[[-2.2,-21.2],[2.2,-21.2],[-2.2,-16.8],[2.2,-16.8]])v.cyl(l,.18,.22,3.1,b,0,R,8),v.cyl(c,.3,.32,.2,b,0,R,8);v.box(h,5,.22,.3,0,3,-21.2),v.box(h,5,.22,.3,0,3,-16.8),v.box(h,.3,.22,5,-2.2,3,-19),v.box(h,.3,.22,5,2.2,3,-19),v.add(new yi(4.4,1.7,4),d,0,4.05,-19,0,Math.PI/4,0),v.add(new yi(.4,.6,4),g,0,5.05,-19,0,Math.PI/4,0),v.cyl(o,.55,.5,.75,0,0,-19,12),v.cyl(Rt(7321049),.42,.42,.04,0,.73,-19,12),v.box(h,.9,.04,.06,0,.82,-19,.3),tl(v,-5,-26.3,1.1),tl(v,5,-26.3,1.1),$c(v,-5.5,-15.5,.9,1.6),$c(v,5.5,-22.5,.9,1.6),Xc(v,-4.6,-11.4,y),Xc(v,4.6,-11.4,y);for(const b of[-7.2,7.2])v.box(Rt(7314002,{gradient:nn}),.5,.35,3,b,0,-26.5);A.add(v.build())}{const M=new xi,A=le.stageHalf,v=le.stageH;M.box(o,A*2,v-.08,A*2,0,0,0),M.box(Rt(10119749),A*2-.1,.08,A*2-.1,0,v-.08,0);for(let I=-3;I<=3;I++)M.box(Rt(8673594),.03,.01,A*2-.4,I,v,0);for(let I=0;I<4;I++){const L=P=>{const D=wi(P[0],P[2],I),N=wi(P[1],P[3],I);return[Math.min(D[0],N[0]),Math.max(D[0],N[0]),Math.min(D[1],N[1]),Math.max(D[1],N[1])]};for(const P of[[-A,-1.5,-A,-A+.3],[le.stairHalfW,A,-A,-A+.3]]){const[D,N,B,O]=L([P[0],P[1],P[2],P[3]]);M.boxMinMax(c,D,N,v,v+.35,B,O),M.boxMinMax(f,D,N,v+.62,v+.8,B-.02,O+.02);const Q=Math.max(N-D,O-B),W=Math.round(Q/.8);for(let Z=0;Z<=W;Z++){const j=Z/W,Et=N-D>O-B?D+(N-D)*j:(D+N)/2,St=N-D>O-B?(B+O)/2:B+(O-B)*j;M.box(f,.12,.45,.12,Et,v+.35,St)}}for(let P=0;P<6;P++){const D=-A-le.stairLen+P*le.stairLen/6,N=v*(P+1)/6,[B,O,Q,W]=L([-1.5,le.stairHalfW,D,-A]);M.boxMinMax(P%2?o:Rt(12893102),B,O,0,N,Q,W)}for(const P of[-1,1]){const D=P<0?-1.8:le.stairHalfW,N=P<0?-1.5:le.stairHalfW+.3,[B,O,Q,W]=L([D,N,-A-le.stairLen,-A]);M.boxMinMax(c,B,O,0,v+.35,Q,W),M.boxMinMax(f,B,O,v+.62,v+.8,Q,W),L([D,N,-A-le.stairLen,-A])}for(const P of[-1,1]){const[D,N,B,O]=L([P*le.stairHalfW-.2+(P>0?.15:-.15),P*le.stairHalfW+.2+(P>0?.15:-.15),-A-le.stairLen-.15,-A-le.stairLen+.25]);M.boxMinMax(h,D,N,0,2.05,B,O),M.boxMinMax(g,D-.02,N+.02,2.05,2.15,B-.02,O+.02)}}M.add(new Ue(.82,.82,1.1,20),Rt(9056038),0,v+1.55,0,Math.PI/2,0,0),M.add(new Ue(.9,.9,.06,20),Rt(2760742),0,v+1.55,.55,Math.PI/2,0,0),M.add(new Ue(.9,.9,.06,20),Rt(2760742),0,v+1.55,-.55,Math.PI/2,0,0);for(const I of[-.6,.6])M.box(h,.14,1.2,.14,I,v,.3),M.box(h,.14,1.2,.14,I,v,-.3);M.box(h,1.5,.12,.9,0,v+.9,0);for(const[I,L]of[[3.2,3.2],[-3.2,3.2],[3.2,-3.2],[-3.2,-3.2]])M.cyl(h,.05,.05,1.6,I,v,L,6),M.add(new Rn(.26,10,8),y,I,v+1.85,L,0,0,0,1,1.3,1);e.add(M.build());const b=new Di({map:Zv});for(const I of[.56,-.56]){const L=new Wt(new pl(.8,24),b);L.position.set(0,v+1.55,I),L.rotation.y=I>0?0:Math.PI,e.add(L)}const R=new xi;for(let I=0;I<4;I++){const[L,P]=wi(-6.3,-6.3,I);Bs(R,L,P,"sakura",.95)}e.add(R.build({cast:!0,receive:!1}))}{const M=new xi;for(let A=0;A<46;A++){const v=A/46*Math.PI*2,b=ut(44,70),R=["pine","sakura","maple","pine"];Bs(M,Math.cos(v)*b,Math.sin(v)*b,R[A%4],ut(1.4,2.2))}e.add(M.build({cast:!1,receive:!1}))}const T=new Wt(new Ue(1.2,1.6,40,20,1,!0),new Ye({uniforms:{uColor:{value:new Ht(16773242)},uTime:{value:0},uFade:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform vec3 uColor; uniform float uTime; uniform float uFade; varying vec2 vUv;
        void main(){ float a = (1.0 - vUv.y) * (0.35 + 0.15 * sin(uTime * 4.0 + vUv.y * 20.0)) * uFade; gl_FragColor = vec4(uColor, a); }`,transparent:!0,depthWrite:!1,side:hi,blending:Wn}));return T.position.y=20,sn(T),T.visible=!1,e.add(T),{root:e,zoneBanners:p,overlays:S,barriers:E,zoneLabels:x,beacon:T,setZoneBuilder(M,A){p[M].color.set(A===null?15262422:jt[A].color)}}}const Kv=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Jv=`
uniform vec3 uTop;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.22, h));
  col = mix(col, uTop, smoothstep(0.2, 0.85, h));
  float s = max(dot(d, normalize(uSunDir)), 0.0);
  col += uSunColor * smoothstep(0.9985, 0.9992, s) * 1.6;
  col += uSunColor * pow(s, 24.0) * 0.35;
  // 地平线下方稍暗
  col = mix(col, uHorizon * 0.85, smoothstep(0.0, -0.15, d.y));
  gl_FragColor = vec4(col, 1.0);
}`;function Qv(s,t){const e=new Ye({uniforms:{uTop:{value:new Ht(3112920)},uMid:{value:new Ht(8175858)},uHorizon:{value:new Ht(16769724)},uSunDir:{value:t.clone()},uSunColor:{value:new Ht(16773830)}},vertexShader:Kv,fragmentShader:Jv,side:li,depthWrite:!1}),i=new Wt(new Rn(800,32,16),e);i.layers.set(Pn),i.renderOrder=-10,i.frustumCulled=!1,s.add(i);const n=Rt(16777215,{gradient:nn,emissive:3817318,emissiveIntensity:.35}),r=new xi,a=new ca(1,2);for(let E=0;E<14;E++){const x=E/14*Math.PI*2+ut(-.15,.15),T=ut(330,470),M=Math.cos(x)*T,A=Math.sin(x)*T,v=ut(70,150),b=6+Math.floor(Yt()*6),R=ut(16,30);for(let I=0;I<b;I++){const L=ut(-2.2,2.2)*R,P=Math.abs(ut(-.4,1))*R*.6,D=ut(-.8,.8)*R,N=R*ut(.6,1.15)*(1-Math.abs(L)/(3.2*R));r.add(a,n,M+L,v+P,A+D,0,0,0,N,N*.78,N)}}const o=r.build({cast:!1,receive:!1});s.add(o);const c=[{r:230,h:[40,80],color:8232132,n:20},{r:320,h:[70,130],color:10335448,n:16},{r:430,h:[100,180],color:12110566,n:12}],l=new xi;for(const E of c){const x=Rt(E.color,{gradient:nn});for(let T=0;T<E.n;T++){const M=T/E.n*Math.PI*2+ut(-.1,.1),A=ut(E.h[0],E.h[1]),v=ut(70,120),b=new yi(v,A,6,1);l.add(b,x,Math.cos(M)*E.r,A/2-6,Math.sin(M)*E.r,0,Yt()*3,0)}}const h=-2.2,d=Math.cos(h)*520,u=Math.sin(h)*520;l.add(new yi(190,210,24,1),Rt(9086159,{gradient:nn}),d,99,u),l.add(new yi(62,70,24,1),Rt(16185599,{gradient:nn}),d,172,u),s.add(l.build({cast:!1,receive:!1}));const f=new xi,g=Rt(11027514),y=Rt(3949656),m=95,p=-120;let S=0;for(let E=0;E<5;E++){const x=1-E*.12;f.box(g,9*x,5,9*x,m,S,p),S+=5,f.add(new yi(10*x,3,4),y,m,S+1.2,p,0,Math.PI/4,0),S+=1.5}return f.cyl(Rt(14264138),.5,.5,12,m,S,p,6),s.add(f.build({cast:!1,receive:!1})),{sky:i,mat:e}}const Qa={uniforms:{tDiffuse:{value:null},resolution:{value:new lt(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},jv=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,tx=`
#include <packing>
uniform sampler2D tColor;
uniform sampler2D tNormal;
uniform sampler2D tDepth;
uniform vec2 uRes;
uniform float uNear;
uniform float uFar;
uniform float uLine;
uniform vec3 uInk;
uniform vec3 uHaze;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform float uHurt;
uniform float uDesat;
uniform float uTone;
varying vec2 vUv;

float viewZ(vec2 uv) {
  float d = texture2D(tDepth, uv).x;
  return -perspectiveDepthToViewZ(d, uNear, uFar);
}

vec3 toSRGB(vec3 c) {
  c = max(c, 0.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 px = uLine / uRes;
  float raw0 = texture2D(tDepth, vUv).x;
  float d0 = viewZ(vUv);
  vec3 n0 = texture2D(tNormal, vUv).xyz * 2.0 - 1.0;
  float sky0 = step(0.999999, raw0);
  float grazing = 1.0 + 7.0 * (1.0 - clamp(abs(n0.z), 0.0, 1.0));
  float thr = (0.03 * d0 + 0.04) * grazing;
  float eD = 0.0;
  float eN = 0.0;
  for (int i = 0; i < 4; i++) {
    vec2 o = i == 0 ? vec2(px.x, 0.0) : i == 1 ? vec2(-px.x, 0.0) : i == 2 ? vec2(0.0, px.y) : vec2(0.0, -px.y);
    vec2 uv = vUv + o;
    float d = viewZ(uv);
    float diff = d0 - d;
    eD = max(eD, smoothstep(thr, thr * 1.7, diff));
    if (i == 0 || i == 2) {
      vec3 n = texture2D(tNormal, uv).xyz * 2.0 - 1.0;
      float nd = 1.0 - dot(n0, n);
      eN = max(eN, smoothstep(0.2, 0.38, nd));
    }
  }
  eN *= (1.0 - sky0) * (1.0 - smoothstep(28.0, 75.0, d0));
  float edge = max(eD, eN);
  edge *= 1.0 - smoothstep(110.0, 420.0, min(d0, 900.0)) * 0.75;

  vec3 col = texture2D(tColor, vUv).rgb;
  float haze = smoothstep(32.0, 460.0, d0) * (1.0 - sky0);
  col = mix(col, uHaze, haze * 0.6);
  col = mix(col, uInk, clamp(edge, 0.0, 1.0) * 0.92);

  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(l), col, 1.1 - uDesat);
  col = mix(col, col * vec3(1.03, 1.0, 0.95), uTone);

  vec2 q = vUv - 0.5;
  float vig = smoothstep(0.9, 0.28, length(q * vec2(1.05, 1.0)));
  col *= mix(0.8, 1.0, vig);
  col = mix(col, vec3(0.7, 0.03, 0.04), uHurt * (1.0 - vig) * 0.9);
  col = mix(col, uFlashColor, uFlash);
  gl_FragColor = vec4(toSRGB(col), 1.0);
}`;class ex{constructor(t){this.renderer=t,this.rtColor=new di(1,1,{type:Ni,samples:4,depthBuffer:!0}),this.rtNormal=new di(1,1,{type:oi,depthBuffer:!0}),this.rtNormal.depthTexture=new bs(1,1,Ii),this.rtComp=new di(1,1,{type:oi,depthBuffer:!1}),this.compMat=new Ye({uniforms:{tColor:{value:this.rtColor.texture},tNormal:{value:this.rtNormal.texture},tDepth:{value:this.rtNormal.depthTexture},uRes:{value:new lt(1,1)},uNear:{value:.05},uFar:{value:900},uLine:{value:1},uInk:{value:new Ht(2300454)},uHaze:{value:new Ht(12375024)},uFlash:{value:0},uFlashColor:{value:new Ht(1,1,1)},uHurt:{value:0},uDesat:{value:0},uTone:{value:1}},vertexShader:jv,fragmentShader:tx,depthTest:!1,depthWrite:!1}),this.fxaaMat=new Ye({uniforms:Zh.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,depthTest:!1,depthWrite:!1}),this.quad=new Wt(new vi(2,2),this.compMat),this.quad.frustumCulled=!1,this.quadScene.add(this.quad)}renderer;rtColor;rtNormal;rtComp;normalMat=new Mf;compMat;fxaaMat;quad;quadScene=new dl;quadCam=new ha(-1,1,1,-1,0,1);fxaa=!0;w=1;h=1;setSize(t,e){this.w=t,this.h=e,this.rtColor.setSize(t,e),this.rtNormal.setSize(t,e),this.rtComp.setSize(t,e),this.compMat.uniforms.uRes.value.set(t,e),this.compMat.uniforms.uLine.value=Math.max(1,Math.round(e/900)),this.fxaaMat.uniforms.resolution.value.set(1/t,1/e)}render(t,e,i,n){const r=this.renderer;r.autoClear=!1,this.compMat.uniforms.uNear.value=e.near,this.compMat.uniforms.uFar.value=e.far,r.setRenderTarget(this.rtNormal),r.setClearColor(8421631,1),r.clear(!0,!0,!0),e.layers.set(0),t.overrideMaterial=this.normalMat;const a=t.background;t.background=null,r.render(t,e),t.overrideMaterial=null,i&&n&&(r.clearDepth(),n.layers.set(0),i.overrideMaterial=this.normalMat,r.render(i,n),i.overrideMaterial=null),t.background=a,r.setRenderTarget(this.rtColor),r.setClearColor(10471664,1),r.clear(!0,!0,!0),e.layers.set(0),e.layers.enable(Pn),r.shadowMap.needsUpdate=!0,r.render(t,e),i&&n&&(r.clearDepth(),n.layers.set(0),n.layers.enable(Pn),r.render(i,n)),this.quad.material=this.compMat,r.setRenderTarget(this.fxaa?this.rtComp:null),r.clear(!0,!1,!1),r.render(this.quadScene,this.quadCam),this.fxaa&&(this.fxaaMat.uniforms.tDiffuse.value=this.rtComp.texture,this.quad.material=this.fxaaMat,r.setRenderTarget(null),r.clear(!0,!1,!1),r.render(this.quadScene,this.quadCam))}}const Ee={tanto:{id:"tanto",name:"短刀",short:"短刀",price:0,tier:0,desc:"基础免费武器。出手极快、三连击收尾突刺，移动更灵活；距离最短，必须贴身。",traits:["三连击","移速 +10%","击杀奖励 $500"],moveMult:1.1,killReward:500,parryWindow:.2,guardMult:1.25,attacks:[{swing:"r2l",windup:.11,active:.08,recovery:.22,damage:18,reach:1.95,arc:80,guardDmg:16,chip:.25,knock:1.2,lunge:2.4,chainAt:.12,weight:"light"},{swing:"l2r",windup:.1,active:.08,recovery:.22,damage:18,reach:1.95,arc:80,guardDmg:16,chip:.25,knock:1.2,lunge:2.4,chainAt:.12,weight:"light"},{swing:"stab",windup:.16,active:.09,recovery:.4,damage:30,reach:2.15,arc:40,guardDmg:26,chip:.25,knock:3,lunge:4.2,chainAt:2,weight:"mid"}],stats:{dmg:1,speed:5,reach:1,arc:2,guard:2},idle:{p:[.3,-.29,-.5],b:[-.3,.78,-.55],e:[-.2,-.55,-.8]},block:{p:[.14,-.12,-.42],b:[-.94,.3,-.12],e:[0,-.1,-1]}},katana:{id:"katana",name:"打刀",short:"打刀",price:600,tier:1,desc:"攻防均衡的主力武器。横斩范围宽，两段连斩，格挡稳定。",traits:["两段横斩","格挡稳定","击杀奖励 $350"],moveMult:1,killReward:350,parryWindow:.18,guardMult:1,attacks:[{swing:"r2l",windup:.2,active:.1,recovery:.3,damage:34,reach:2.5,arc:100,guardDmg:28,chip:.12,knock:1.8,lunge:2.6,chainAt:.18,weight:"mid"},{swing:"l2r",windup:.18,active:.1,recovery:.38,damage:38,reach:2.5,arc:100,guardDmg:30,chip:.12,knock:2.2,lunge:2.6,chainAt:2,weight:"mid"}],stats:{dmg:3,speed:3,reach:3,arc:4,guard:4},idle:{p:[.3,-.31,-.55],b:[-.28,.8,-.52],e:[-.15,-.5,-.85]},block:{p:[.27,-.06,-.52],b:[-.97,.24,-.05],e:[0,-.15,-1]}},naginata:{id:"naginata",name:"薙刀",short:"薙刀",price:1e3,tier:2,desc:"长柄武器。突刺距离全场最远，第二段宽幅横扫；贴身时只能用柄打（伤害减半），收招慢。",traits:["最长突刺","宽幅横扫","贴身伤害减半"],moveMult:.93,killReward:300,parryWindow:.16,guardMult:1,attacks:[{swing:"thrust",windup:.3,active:.11,recovery:.42,damage:40,reach:3.45,arc:28,minRange:1.45,closeMult:.5,guardDmg:32,chip:.15,knock:2.8,lunge:1.6,chainAt:.25,weight:"mid"},{swing:"sweep",windup:.36,active:.13,recovery:.52,damage:30,reach:2.95,arc:150,guardDmg:30,chip:.15,knock:2.4,lunge:1,chainAt:2,weight:"mid"}],stats:{dmg:3,speed:2,reach:5,arc:3,guard:3},idle:{p:[.26,-.33,-.38],b:[-.14,.4,-.9],e:[0,-.9,-.4]},block:{p:[.22,-.1,-.42],b:[-.95,.3,-.08],e:[0,-.1,-1]}},axe:{id:"axe",name:"鬼斧",short:"鬼斧",price:1500,tier:3,desc:"一击重创（75）。蓄力期间霸体不被打断，劈中格挡必定破防；出手慢、落空后破绽极大，怕弹反与闪避。",traits:["霸体蓄力","必定破防","移速 -12%"],moveMult:.88,killReward:200,parryWindow:.15,guardMult:.8,attacks:[{swing:"overhead",windup:.58,active:.13,recovery:.72,damage:75,reach:2.6,arc:80,hyper:!0,guardBreak:!0,guardDmg:100,chip:.5,knock:4.5,lunge:3.2,chainAt:2,weight:"heavy"}],stats:{dmg:5,speed:1,reach:3,arc:3,guard:2},idle:{p:[.32,-.36,-.46],b:[-.22,.85,-.45],e:[-.1,-.45,-.88]},block:{p:[.26,-.1,-.46],b:[-.85,.52,-.08],e:[0,-.1,-1]}}},ja=["tanto","katana","naginata","axe"];function qc(s){return{p:[-s.p[0],s.p[1],s.p[2]],b:[-s.b[0],s.b[1],s.b[2]],e:[-s.e[0],s.e[1],s.e[2]]}}const to={windup:{p:[.42,-.08,-.28],b:[.92,.14,.38],e:[.3,0,-1]},active:[{p:[.4,-.12,-.42],b:[.85,.05,-.52],e:[-.52,0,-.85]},{p:[.06,-.16,-.56],b:[.05,0,-1],e:[-1,0,0]},{p:[-.32,-.2,-.42],b:[-.88,-.08,-.45],e:[-.45,0,.88]},{p:[-.42,-.24,-.28],b:[-.9,-.14,.35],e:[.35,0,.95]}]},ix=(()=>{const s=(t,e)=>({p:e,b:[.06,Math.cos(t),-Math.sin(t)],e:[0,-Math.sin(t),-Math.cos(t)]});return{windup:s(-.45,[.12,.17,-.18]),active:[s(.25,[.11,.12,-.36]),s(.9,[.1,.03,-.5]),s(1.5,[.08,-.13,-.58]),s(2.15,[.06,-.32,-.48])]}})(),nx={windup:{p:[.25,-.22,-.1],b:[-.06,.1,-1],e:[0,-1,-.1]},active:[{p:[.2,-.19,-.35],b:[-.05,.08,-1],e:[0,-1,-.08]},{p:[.12,-.16,-.7],b:[-.03,.05,-1],e:[0,-1,-.05]},{p:[.07,-.14,-.92],b:[-.02,.04,-1],e:[0,-1,-.04]}]},sx={windup:{p:[.48,-.26,-.16],b:[.95,.04,.3],e:[.3,0,-.95]},active:[{p:[.46,-.28,-.36],b:[.8,.02,-.6],e:[-.6,0,-.8]},{p:[.05,-.3,-.56],b:[0,0,-1],e:[-1,0,0]},{p:[-.4,-.3,-.36],b:[-.85,0,-.52],e:[-.52,0,.85]},{p:[-.5,-.3,-.18],b:[-.95,0,.3],e:[.3,0,.95]}]},rx={windup:{p:[.3,-.2,-.2],b:[-.05,.25,-1],e:[0,-1,-.25]},active:[{p:[.22,-.17,-.4],b:[-.05,.2,-1],e:[0,-1,-.2]},{p:[.12,-.14,-.66],b:[-.04,.15,-1],e:[0,-1,-.15]},{p:[.08,-.13,-.78],b:[-.03,.12,-1],e:[0,-1,-.12]}]},yl={r2l:to,l2r:{windup:qc(to.windup),active:to.active.map(qc)},overhead:ix,thrust:nx,sweep:sx,stab:rx},ax={p:[.36,-.46,-.4],b:[.3,.6,-.4],e:[0,-.4,-.9]},Zc=new U,Hs=new U,_n=new U,Yc=new oe;function ox(s,t){const e=t??{pos:new U,quat:new ci};return e.pos.set(s.p[0],s.p[1],s.p[2]),Hs.set(s.b[0],s.b[1],s.b[2]).normalize(),_n.set(-s.e[0],-s.e[1],-s.e[2]),_n.addScaledVector(Hs,-_n.dot(Hs)),_n.lengthSq()<1e-6&&_n.set(0,0,1),_n.normalize(),Zc.crossVectors(Hs,_n).normalize(),Yc.makeBasis(Zc,Hs,_n),e.quat.setFromRotationMatrix(Yc),e}const Kc=new Map;function Zn(s){let t=Kc.get(s);return t||(t=ox(s),Kc.set(s,t)),t}function Gs(s,t){t.pos.copy(s.pos),t.quat.copy(s.quat)}function zn(s,t,e,i){i.pos.lerpVectors(s.pos,t.pos,e),i.quat.slerpQuaternions(s.quat,t.quat,e)}function mu(s,t,e){const i=yl[s].active,n=i.length-1,r=te(t,0,1)*n,a=Math.min(n-1,Math.floor(r));zn(Zn(i[a]),Zn(i[a+1]),r-a,e)}function lx(s){return Zn(yl[s].windup)}function cx(s){const t=yl[s].active;return Zn(t[t.length-1])}function eo(s){return Zn(s.idle)}function hx(s){return Zn(s.block)}function Jc(){return Zn(ax)}class gu{cur={pos:new U,quat:new ci};from={pos:new U,quat:new ci};tmp={pos:new U,quat:new ci};lastState="";lastSeq=-1;lastWeapon="";settle=0;update(t,e){const i=Ee[t.weapon];t.weapon!==this.lastWeapon&&(Gs(eo(i),this.cur),Gs(this.cur,this.from),this.lastWeapon=t.weapon,this.cur.pos.y-=.35,Gs(this.cur,this.from),this.settle=0),(t.state!==this.lastState||t.attackSeq!==this.lastSeq)&&(Gs(this.cur,this.from),this.lastState=t.state,this.lastSeq=t.attackSeq,this.settle=0),this.settle+=e;const n=t.stateDur>0?te(t.stateT/t.stateDur,0,1):1,r=t.attack;switch(t.state){case"windup":r&&zn(this.from,lx(r.swing),Li.outCubic(n),this.cur);break;case"active":r&&mu(r.swing,Li.inOutQuad(n),this.cur);break;case"recovery":r&&(zn(cx(r.swing),eo(i),Li.inOutQuad(n),this.tmp),Gs(this.tmp,this.cur));break;case"block":zn(this.from,hx(i),Li.outCubic(te(this.settle/.09,0,1)),this.cur);break;case"flinch":case"stagger":zn(this.from,Jc(),Li.outCubic(te(this.settle/.1,0,1)),this.cur);break;case"dead":zn(this.from,Jc(),te(this.settle/.3,0,1),this.cur);break;default:zn(this.from,eo(i),Li.outCubic(te(this.settle/.18,0,1)),this.cur)}return this.cur}}class ux{id;name;team;slot;isPlayer;pos=new U;vx=0;vz=0;kbx=0;kbz=0;yaw=0;pitch=0;speed2D=0;hp=fe.maxHp;armor=0;alive=!0;money=Re.start;weapon="tanto";boughtThisPhase=null;armorPaidThisPhase=0;diedThisRound=!1;kills=0;deaths=0;dmgDealt=0;roundKills=0;killedBy=null;input={fwd:0,right:0,sprint:!1,block:!1,attack:!1,dodge:!1};state="idle";stateT=0;stateDur=0;combo=0;attack=null;attackSeq=0;hitSet=new Set;attackBuffer=0;dodgeBuffer=0;blockT=0;parryArmed=!1;lastBlockEnd=-10;guard=100;guardDelay=0;dodgeCd=0;dodgeX=0;dodgeZ=0;iframe=0;hitstop=0;flashT=0;lastHurtTime=-10;lastHurtBy=null;deathTime=-10;confine=null;canFight=!1;stepAccum=0;brain=null;model=null;constructor(t,e,i,n,r){this.id=t,this.name=e,this.team=i,this.slot=n,this.isPlayer=r}get w(){return Ee[this.weapon]}get fwdX(){return-Math.sin(this.yaw)}get fwdZ(){return-Math.cos(this.yaw)}resetForRound(){this.hp=fe.maxHp,this.alive=!0,this.state="idle",this.stateT=0,this.stateDur=0,this.attack=null,this.combo=0,this.hitSet.clear(),this.attackBuffer=0,this.dodgeBuffer=0,this.blockT=0,this.parryArmed=!1,this.guard=100,this.guardDelay=0,this.dodgeCd=0,this.iframe=0,this.hitstop=0,this.vx=this.vz=this.kbx=this.kbz=0,this.roundKills=0,this.killedBy=null,this.lastHurtBy=null,this.input.attack=this.input.dodge=this.input.block=!1}place(t,e,i){this.pos.set(t,kc(t,e),e),this.yaw=i,this.pitch=0,this.vx=this.vz=this.kbx=this.kbz=0}setState(t,e=0){this.state==="block"&&t!=="block"&&(this.lastBlockEnd=this.now),this.state=t,this.stateT=0,this.stateDur=e}now=0;startAttack(t,e){const i=this.w.attacks[t];i&&(this.combo=t,this.attack=i,this.attackSeq++,this.hitSet.clear(),this.attackBuffer=0,this.setState("windup",i.windup),e.events.windup(this,i))}startBlock(){this.setState("block"),this.blockT=0,this.parryArmed=this.now-this.lastBlockEnd>.35}startDodge(t){let e=0,i=0;const n=this.input.fwd,r=this.input.right;Math.abs(n)+Math.abs(r)>.1?(e=this.fwdX*n+Math.cos(this.yaw)*r,i=this.fwdZ*n-Math.sin(this.yaw)*r):(e=-this.fwdX,i=-this.fwdZ);const a=Math.hypot(e,i)||1;this.dodgeX=e/a,this.dodgeZ=i/a,this.dodgeCd=1,this.dodgeBuffer=0,this.iframe=.18,this.attack=null,this.setState("dodge",.24),t.events.dodge(this)}flinch(t){this.alive&&(this.state==="windup"&&this.attack?.hyper||this.state!=="dodge"&&(this.attackBuffer=0,this.attack=null,this.setState("flinch",t)))}stagger(t){this.alive&&(this.attackBuffer=0,this.attack=null,this.setState("stagger",t))}die(t){this.alive=!1,this.hp=0,this.state="dead",this.stateT=0,this.deathTime=t,this.diedThisRound=!0,this.deaths++,this.vx=this.vz=this.kbx=this.kbz=0,this.attack=null}update(t,e){if(this.now=e.time,this.flashT>0&&(this.flashT-=t),!this.alive){this.stateT+=t,this.input.attack=this.input.dodge=!1;return}if(this.input.attack&&(this.attackBuffer=.28),this.input.dodge&&(this.dodgeBuffer=.16),this.input.attack=!1,this.input.dodge=!1,this.hitstop>0){this.hitstop-=t;return}this.attackBuffer-=t,this.dodgeBuffer-=t,this.dodgeCd-=t,this.iframe-=t,this.guardDelay-=t,this.guardDelay<=0&&this.state!=="block"&&(this.guard=Math.min(100,this.guard+40*t)),this.canFight||(this.attackBuffer=0,this.dodgeBuffer=0,this.state!=="idle"&&(this.attack=null,this.setState("idle"))),this.stateT+=t;const i=this.attack;switch(this.state){case"idle":if(!this.canFight)break;this.dodgeBuffer>0&&this.dodgeCd<=0?this.startDodge(e):this.attackBuffer>0?this.startAttack(0,e):this.input.block&&this.startBlock();break;case"block":this.blockT+=t,this.dodgeBuffer>0&&this.dodgeCd<=0?this.startDodge(e):this.attackBuffer>0?this.startAttack(0,e):this.input.block||this.setState("idle");break;case"windup":if(!i){this.setState("idle");break}if(this.input.block&&!i.hyper&&this.stateT<this.stateDur*.75){this.attack=null,this.startBlock();break}this.stateT>=this.stateDur&&(this.setState("active",i.active),this.kbx+=this.fwdX*i.lunge,this.kbz+=this.fwdZ*i.lunge,e.events.swing(this,i));break;case"active":if(!i){this.setState("idle");break}this.stateT>=this.stateDur&&this.setState("recovery",i.recovery);break;case"recovery":if(!i){this.setState("idle");break}this.attackBuffer>0&&this.combo+1<this.w.attacks.length&&this.stateT>=i.chainAt?this.startAttack(this.combo+1,e):this.dodgeBuffer>0&&this.dodgeCd<=0&&this.stateT>=this.stateDur*.45?this.startDodge(e):this.stateT>=this.stateDur&&(this.combo=0,this.attack=null,this.setState("idle"));break;case"flinch":case"stagger":case"dodge":this.stateT>=this.stateDur&&this.setState("idle");break}this.move(t,e)}move(t,e){const i=this.w;let n=1;switch(this.state){case"windup":n=this.attack?.hyper?.35:.6;break;case"active":n=.35;break;case"recovery":n=.6;break;case"block":n=.5;break;case"flinch":n=.3;break;case"stagger":n=.12;break}let r=te(this.input.fwd,-1,1),a=te(this.input.right,-1,1);const o=Math.hypot(r,a);o>1&&(r/=o,a/=o),this.input.sprint&&this.state==="idle"&&r>.3&&(n*=fe.sprintMult),r<0&&(r*=.85);const c=fe.speed*i.moveMult*n,l=Math.cos(this.yaw),h=Math.sin(this.yaw),d=(-h*r+l*a)*c,u=(-l*r-h*a)*c;if(this.state==="dodge"){const E=te(this.stateT/this.stateDur,0,1),x=17*(1-E)+5*E;this.vx=this.dodgeX*x,this.vz=this.dodgeZ*x}else{const E=d-this.vx,x=u-this.vz,T=Math.hypot(E,x),M=fe.accel*t;T>M?(this.vx+=E/T*M,this.vz+=x/T*M):(this.vx=d,this.vz=u)}const f=this.pos.x,g=this.pos.z;this.pos.x+=(this.vx+this.kbx)*t,this.pos.z+=(this.vz+this.kbz)*t;const y=Math.exp(-10*t);this.kbx*=y,this.kbz*=y;const m=e.world.resolveCircle(this.pos,fe.radius,this.pos.y,this.pos.y+fe.height,fe.step);if(m.hit){const E=this.vx*m.nx+this.vz*m.nz;E<0&&(this.vx-=E*m.nx,this.vz-=E*m.nz);const x=this.kbx*m.nx+this.kbz*m.nz;x<0&&(this.kbx-=x*m.nx,this.kbz-=x*m.nz)}if(this.confine){const E=this.confine,x=fe.radius+.05;this.pos.x=te(this.pos.x,E.minX+x,E.maxX-x),this.pos.z=te(this.pos.z,E.minZ+x,E.maxZ-x)}this.pos.y=kc(this.pos.x,this.pos.z);const p=Math.hypot(this.pos.x-f,this.pos.z-g);this.speed2D=p/Math.max(t,1e-4),this.stepAccum+=p;const S=this.speed2D>5.5?2.3:1.9;this.stepAccum>S&&(this.stepAccum=0,this.state!=="dodge"&&e.events.footstep(this))}}const Qc=[{name:"斗士",pref:["axe","katana"],aggr:1,armor:.6},{name:"剑客",pref:["katana","naginata"],aggr:.9,armor:.8},{name:"枪手",pref:["naginata","katana"],aggr:.75,armor:.7},{name:"刺客",pref:["tanto"],aggr:1.15,armor:.9},{name:"稳健",pref:["katana"],aggr:.7,armor:1}];class jc{constructor(t,e){this.ch=t,this.g=e}ch;g;diff=aa.normal;pers=Qc[1];known=new Map;target=null;reactUntil=0;perceiveT=Yt()*.2;targetT=0;path=null;pathI=0;pathGX=0;pathGZ=0;repathT=0;navVersion=-1;strafeDir=1;strafeT=0;nextAttackT=0;aimErr=0;aimErrT=0;defense=null;reacted=new Map;stuckT=0;stuckCheckT=0;lastX=0;lastZ=0;unstuckT=0;unstuckX=0;unstuckZ=0;stuckCount=0;roamGoal=null;roamT=0;buyT=-1;idleGoal=null;idleT=0;mx=0;mz=0;sprint=!1;wantYaw=null;autopilot=!1;newMatch(){this.pers=$s(Qc),this.known.clear(),this.target=null,this.defense=null}setDifficulty(t){this.diff=aa[t]}onBuyPhase(){this.buyT=ut(.6,3.5),this.known.clear(),this.target=null,this.path=null,this.defense=null,this.reacted.clear(),this.roamGoal=null,this.stuckCount=0}hear(t,e){if(!this.ch.alive||t.team===this.ch.team||!t.alive||Math.hypot(t.pos.x-this.ch.pos.x,t.pos.z-this.ch.pos.z)>e)return;const n=this.known.get(t);(!n||!n.vis)&&this.known.set(t,{x:t.pos.x+ut(-1,1),z:t.pos.z+ut(-1,1),t:this.g.time,vis:!1})}update(t){const e=this.ch,i=e.input;if(i.fwd=0,i.right=0,i.sprint=!1,i.block=!1,this.mx=0,this.mz=0,this.sprint=!1,this.wantYaw=null,!e.alive)return;switch(this.g.match.phase){case"build":this.buildPhase(t);break;case"buy":this.buyPhase(t);break;case"combat":this.combat(t);break}this.applyMovement(t)}buildPhase(t){const e=this.ch,i=this.g.match,n=this.g.player.ch;if(e.team===Qt&&!this.autopilot&&n.alive){const c=n.pos.x-n.fwdX*3.2+Math.cos(n.yaw)*1.2,l=n.pos.z-n.fwdZ*3.2-Math.sin(n.yaw)*1.2,h=Math.hypot(c-e.pos.x,l-e.pos.z),d=this.g.player.ghostPos;if(d&&Math.hypot(d.x-e.pos.x,d.z-e.pos.z)<2.6){const u=e.pos.x-d.x,f=e.pos.z-d.z,g=Math.hypot(u,f)||1;this.mx=u/g,this.mz=f/g}else h>1.5&&this.goTo(c,l,t,h>6);this.wantYaw=xn(n.pos.x-e.pos.x,n.pos.z-e.pos.z);return}const r=this.g.zones[i.teams[e.team].buildZone];if(!(e.pos.x>r.rect.minX+.5&&e.pos.x<r.rect.maxX-.5&&e.pos.z>r.rect.minZ+.5&&e.pos.z<r.rect.maxZ-.5)){this.goTo(r.center.x,r.center.z,t,!0);return}if(this.idleT-=t,!this.idleGoal||this.idleT<=0){const c=r.pad;this.idleGoal={x:ut(c.minX+1,c.maxX-1),z:ut(c.minZ+1,c.maxZ-1)},this.idleT=ut(3,6)}Math.hypot(this.idleGoal.x-e.pos.x,this.idleGoal.z-e.pos.z)>.6&&this.goTo(this.idleGoal.x,this.idleGoal.z,t,!1),this.wantYaw=xn(r.center.x-e.pos.x,r.center.z-e.pos.z)}buyPhase(t){const e=this.ch;this.buyT>0&&(this.buyT-=t,this.buyT<=0&&this.doBuy());const i=this.g.zones[this.g.match.teams[e.team].spawnZone];if(this.idleT-=t,!this.idleGoal||this.idleT<=0){const r=i.pad;this.idleGoal={x:ut(r.minX+.8,r.maxX-.8),z:ut(r.minZ+.8,r.maxZ-.8)},this.idleT=ut(2,5)}const n=Math.hypot(this.idleGoal.x-e.pos.x,this.idleGoal.z-e.pos.z);n>.5&&(this.mx=(this.idleGoal.x-e.pos.x)/n*.5,this.mz=(this.idleGoal.z-e.pos.z)/n*.5),this.wantYaw=xn(i.inward.x,i.inward.z)}doBuy(){const t=this.ch,e=this.g.shop,i=Ee[t.weapon],n=this.pers.pref;if(n[0]==="tanto")t.money>2600&&Yt()<.3&&t.weapon==="tanto"&&e.buyWeapon(t,"katana");else if(t.weapon==="tanto"||i.tier<Ee[n[0]].tier){let r=!1;for(const a of n){const o=Ee[a];if(o.tier<=i.tier&&t.weapon!=="tanto"||t.money>=o.price&&(a!==n[0]&&t.money<Ee[n[0]].price&&Yt()<.25||(r=e.buyWeapon(t,a).ok,r)))break}!r&&t.weapon==="tanto"&&t.money>=Ee.katana.price&&Yt()<.7&&e.buyWeapon(t,"katana")}if(t.money>=2400&&Yt()<.45){const r=["naginata","axe"].filter(a=>Ee[a].tier>Ee[t.weapon].tier&&t.money>=Ee[a].price);r.length&&e.buyWeapon(t,$s(r))}t.armor<Re.armorPoints&&t.money>=e.armorCost(t)&&Yt()<this.pers.armor&&e.buyArmor(t)}perceive(){const t=this.ch,e=this.g.time,i=this.g.match.revealed,n=t.pos.x,r=t.pos.z,a=t.pos.y+fe.eye;for(const o of this.g.chars){if(o.team===t.team)continue;if(!o.alive){this.known.delete(o);continue}const c=o.pos.x-n,l=o.pos.z-r,h=Math.hypot(c,l);let d=!1;if(h<36&&(Math.abs(Hr(t.yaw,xn(c,l)))<72*En||h<3.5||e-t.lastHurtTime<.6)){const g=this.g.world;d=!g.segmentBlocked(n,a,r,o.pos.x,o.pos.y+1.45,o.pos.z)||!g.segmentBlocked(n,a,r,o.pos.x,o.pos.y+.9,o.pos.z)}if(d){const u=this.known.get(o);this.known.set(o,{x:o.pos.x,z:o.pos.z,t:e,vis:!0}),(!u||!u.vis)&&(this.target===null||this.target===o)&&(this.reactUntil=Math.max(this.reactUntil,e+this.diff.react*ut(.8,1.3)))}else{const u=this.known.get(o);u&&(u.vis=!1),i&&this.known.set(o,{x:o.pos.x,z:o.pos.z,t:e,vis:!1})}}for(const o of this.g.match.teams[t.team].members)if(!(o===t||!o.alive||!o.brain))for(const[c,l]of o.brain.known){if(!l.vis||!c.alive)continue;const h=this.known.get(c);(!h||!h.vis&&h.t<l.t)&&this.known.set(c,{x:l.x,z:l.z,t:l.t,vis:!1})}for(const[o,c]of this.known)e-c.t>12&&!c.vis&&this.known.delete(o)}chooseTarget(){const t=this.ch,e=this.g.time;let i=null,n=1/0;for(const[r,a]of this.known){if(!r.alive)continue;let c=Math.hypot(a.x-t.pos.x,a.z-t.pos.z)+(a.vis?0:7)+(e-a.t)*.5;r===this.target&&(c-=3),r.hp<45&&(c-=2),t.lastHurtBy===r&&e-t.lastHurtTime<3&&(c-=4);let l=0;for(const h of this.g.brains)h!==this&&h.target===r&&h.ch.alive&&h.ch.team!==t.team&&l++;l>=2&&(c+=6),c<n&&(n=c,i=r)}i!==this.target&&(this.target=i,(i?this.known.get(i):null)?.vis&&(this.reactUntil=Math.max(this.reactUntil,e+this.diff.react*ut(.7,1.2))))}combat(t){const e=this.ch;this.g.time,this.perceiveT-=t,this.perceiveT<=0&&(this.perceiveT=.12+Yt()*.06,this.perceive()),this.targetT-=t,(this.targetT<=0||this.target&&!this.target.alive)&&(this.targetT=.3,this.chooseTarget()),this.updateDefense();const i=this.g.match.ring,n=Math.hypot(e.pos.x,e.pos.z);if(i.active&&n>i.r-3){this.goTo(0,0,t,!0),this.target&&this.known.get(this.target)?.vis&&this.engageFacing(this.target);return}const r=this.target,a=r?this.known.get(r):void 0;if(r&&a&&a.vis){this.engage(r,t);return}if(r&&a){const h=Math.hypot(a.x-e.pos.x,a.z-e.pos.z);if(h<1.6&&!a.vis)this.known.delete(r),this.target=null;else{this.goTo(a.x,a.z,t,h>8);return}}const o=this.g.player.ch;if(e.team===Qt&&!this.autopilot&&o.alive){const h=o.pos.x-o.fwdX*2.5+Math.cos(o.yaw)*1.4,d=o.pos.z-o.fwdZ*2.5-Math.sin(o.yaw)*1.4,u=Math.hypot(h-e.pos.x,d-e.pos.z);u>1.8&&this.goTo(h,d,t,u>6);return}const l=this.g.match.teams[e.team].members.find(h=>h.alive)??e;if(l!==e&&l.alive){const h=l.pos.x-l.fwdX*2.2+Math.cos(l.yaw)*(e.slot?1.3:-1.3),d=l.pos.z-l.fwdZ*2.2-Math.sin(l.yaw)*(e.slot?1.3:-1.3),u=Math.hypot(h-e.pos.x,d-e.pos.z);u>2&&this.goTo(h,d,t,u>6);return}this.roam(t)}roam(t){const e=this.ch;this.roamT-=t;const i=this.roamGoal&&Math.hypot(this.roamGoal.x-e.pos.x,this.roamGoal.z-e.pos.z)<2;if(!this.roamGoal||i||this.roamT<=0){const n=this.g.pois,r=1-te(this.g.match.timer/ne.round,0,1),a=n.filter(c=>Math.hypot(c.x-e.pos.x,c.z-e.pos.z)>6&&(r<.4||Math.hypot(c.x,c.z)<22-r*10)),o=a.length?$s(a):$s(n);this.roamGoal={x:o.x,z:o.z},this.roamT=ut(10,18)}this.goTo(this.roamGoal.x,this.roamGoal.z,t,!1)}updateDefense(){const t=this.ch,e=this.g.time;if(this.defense&&e>this.defense.until&&(this.defense=null),!this.defense)for(const i of this.g.chars){if(!i.alive||i.team===t.team||i.state!=="windup"||!i.attack||this.reacted.get(i)===i.attackSeq)continue;const n=this.known.get(i);if(!n||!n.vis)continue;const r=t.pos.x-i.pos.x,a=t.pos.z-i.pos.z;if(Math.hypot(r,a)>i.attack.reach+1.2||Math.abs(Hr(i.yaw,xn(r,a)))>40*En)continue;this.reacted.set(i,i.attackSeq);const l=i.stateDur-i.stateT,h=this.diff.react*ut(.55,.95),d=e+l,u=Yt(),f=i.attack.weight==="heavy";if(u<this.diff.parry*(f?1.4:1)){const g=Math.max(e+h,d-.07);g<d+.02&&(this.defense={kind:"block",start:g,until:d+i.attack.active+.08,from:i})}else if(f&&u<this.diff.parry+this.diff.dodge*2&&t.dodgeCd<=0)this.defense={kind:"dodge",start:Math.max(e+h,d-.12),until:d+.25,from:i};else if(u<this.diff.parry+this.diff.block){const g=e+h;g<d+.03&&(this.defense={kind:"block",start:g,until:d+i.attack.active+ut(.08,.3),from:i})}else u<this.diff.parry+this.diff.block+this.diff.dodge&&t.dodgeCd<=0&&(this.defense={kind:"dodge",start:e+h,until:e+h+.3,from:i});break}}engageFacing(t){const e=this.ch;this.wantYaw=xn(t.pos.x-e.pos.x,t.pos.z-e.pos.z)+this.aimErr}engage(t,e){const i=this.ch,n=this.g.time,r=Ee[i.weapon],a=i.state==="recovery"&&i.combo+1<r.attacks.length?r.attacks[i.combo+1]:r.attacks[0],o=t.pos.x-i.pos.x,c=t.pos.z-i.pos.z,l=Math.hypot(o,c);this.aimErrT-=e,this.aimErrT<=0&&(this.aimErrT=ut(.3,.7),this.aimErr=ut(-4,4)*En),this.engageFacing(t);const h=this.defense;if(h&&n>=h.start){if(h.kind==="block"){i.input.block=!0,this.mx=-o/(l||1)*.3,this.mz=-c/(l||1)*.3;return}if(h.kind==="dodge"&&i.dodgeCd<=0&&i.state!=="dodge"){const p=Yt()<.5?1:-1,S=o/(l||1),E=c/(l||1);this.mx=-S*.8+-E*p*.6,this.mz=-E*.8+S*p*.6,i.input.dodge=!0,this.defense=null;return}}let d=a.reach*.78;i.weapon==="tanto"&&(d=1.35),i.weapon==="naginata"&&(d=2.8),i.weapon==="axe"&&(d=2);const u=i.hp<28&&Yt()<.02,f=l<9&&this.g.nav.lineWalkable(i.pos.x,i.pos.z,t.pos.x,t.pos.z);if(l>d+.9||!f)f?(this.mx=o/l,this.mz=c/l,this.sprint=l>6):this.goTo(t.pos.x,t.pos.z,e,l>6);else{this.strafeT-=e,this.strafeT<=0&&(this.strafeT=ut(.6,1.4),this.strafeDir=Yt()<.5?-1:1);const p=o/l,S=c/l,E=te((l-d)*1.6,-1,1),x=this.strafeDir*.55;this.mx=p*E+-S*x,this.mz=S*E+p*x,u&&(this.mx=-p,this.mz=-S)}if(n<this.reactUntil||i.state!=="idle"&&!(i.state==="recovery"&&i.stateT>=(i.attack?.chainAt??9))||i.state==="idle"&&n<this.nextAttackT||!(l-fe.radius<=a.reach-.15+(a.lunge>2?.25:0))||Math.abs(Hr(i.yaw,xn(o,c)))>Math.max(18*En,a.arc/2*En*.6)||this.g.world.segmentBlocked(i.pos.x,i.pos.y+fe.chest,i.pos.z,t.pos.x,t.pos.y+fe.chest,t.pos.z))return;const m=this.diff.aggr*this.pers.aggr;if(i.state==="recovery"){Yt()<.55*m&&(i.input.attack=!0);return}if(t.state==="block"&&i.weapon!=="axe"&&Yt()<.5){this.nextAttackT=n+ut(.3,.6),this.strafeDir=-this.strafeDir;return}i.input.attack=!0,this.nextAttackT=n+ut(.35,.95)/Math.max(.3,m)}goTo(t,e,i,n){const r=this.ch,a=Math.hypot(t-r.pos.x,e-r.pos.z);if(a<.3)return;if(this.sprint=n,a<12&&this.g.nav.lineWalkable(r.pos.x,r.pos.z,t,e)){this.mx=(t-r.pos.x)/a,this.mz=(e-r.pos.z)/a,this.path=null;return}this.repathT-=i;const o=Math.hypot(t-this.pathGX,e-this.pathGZ)>1.5;if((!this.path||this.repathT<=0||o||this.navVersion!==this.g.nav.version)&&(this.path=this.g.nav.findPath(r.pos.x,r.pos.z,t,e),this.pathI=0,this.pathGX=t,this.pathGZ=e,this.repathT=ut(.5,.9),this.navVersion=this.g.nav.version),!this.path||!this.path.length){this.mx=(t-r.pos.x)/a,this.mz=(e-r.pos.z)/a;return}let c=this.path[this.pathI];for(;c&&Math.hypot(c.x-r.pos.x,c.z-r.pos.z)<.45&&this.pathI<this.path.length-1;)this.pathI++,c=this.path[this.pathI];if(this.pathI<this.path.length-1){const h=this.path[this.pathI+1];this.g.nav.lineWalkable(r.pos.x,r.pos.z,h.x,h.z)&&(this.pathI++,c=h)}const l=Math.hypot(c.x-r.pos.x,c.z-r.pos.z)||1;this.mx=(c.x-r.pos.x)/l,this.mz=(c.z-r.pos.z)/l}applyMovement(t){const e=this.ch,i=e.input;for(const o of this.g.chars){if(o===e||!o.alive||o.team!==e.team)continue;const c=e.pos.x-o.pos.x,l=e.pos.z-o.pos.z,h=Math.hypot(c,l);h<1.2&&h>.01&&(this.mx+=c/h*(1.2-h)*.8,this.mz+=l/h*(1.2-h)*.8)}this.stuckCheckT-=t;const n=Math.hypot(this.mx,this.mz);if(this.stuckCheckT<=0){this.stuckCheckT=.5;const o=Math.hypot(e.pos.x-this.lastX,e.pos.z-this.lastZ);this.lastX=e.pos.x,this.lastZ=e.pos.z;const c=e.state==="block"||e.state==="windup"||e.state==="active"||e.state==="recovery"||e.state==="stagger";if(n>.4&&o<.3&&!c&&!e.confine){if(this.stuckT+=.5,this.stuckT>=1){this.stuckT=0,this.stuckCount++,this.path=null;const l=Yt()*Math.PI*2;this.unstuckX=Math.cos(l),this.unstuckZ=Math.sin(l),this.unstuckT=.6,this.stuckCount>=3&&(this.roamGoal=null,this.target=null,this.stuckCount=0)}}else this.stuckT=0,o>1&&(this.stuckCount=0)}this.unstuckT>0&&(this.unstuckT-=t,this.mx=this.unstuckX,this.mz=this.unstuckZ);const r=Math.hypot(this.mx,this.mz);let a=this.wantYaw;if(a===null&&r>.2&&(a=xn(this.mx,this.mz)),a!==null){const o=Hr(e.yaw,a),c=this.diff.turn*t*(e.state==="windup"?.5:e.state==="active"?.25:1);e.yaw=cu(e.yaw+te(o,-c,c))}if(r>.01){const o=Math.min(1,r),c=this.mx/r*o,l=this.mz/r*o,h=e.fwdX,d=e.fwdZ;i.fwd=c*h+l*d,i.right=c*Math.cos(e.yaw)+l*-Math.sin(e.yaw)}i.sprint=this.sprint}}const ze={low:{type:"low",name:"矮墙",key:"1",cost:2,desc:"挡住通行与刀锋，但挡不住视线。做“看得见、砍不到”的隔断，逼对手绕路。",tags:["挡路","挡刀","透视线"],even:!1,cells:[[-1,0],[0,0],[1,0]],boxes:[{x0:-1.5,x1:1.5,z0:-.25,z1:.25,y0:0,y1:1.2}],height:1.2,size:"3×1"},high:{type:"high",name:"高墙",key:"2",cost:3,desc:"同时阻挡通行与视线。切割空间、制造盲区与伏击位。",tags:["挡路","挡视线"],even:!1,cells:[[-1,0],[0,0],[1,0]],boxes:[{x0:-1.5,x1:1.5,z0:-.25,z1:.25,y0:0,y1:3}],height:3,size:"3×1"},crate:{type:"crate",name:"货箱",key:"3",cost:2,desc:"2×2 的方形掩体，高过头顶。适合绕着它周旋，打断直线追击。",tags:["掩体","可绕圈"],even:!0,cells:[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]],boxes:[{x0:-.95,x1:.95,z0:-.95,z1:.95,y0:0,y1:1.8}],height:1.8,size:"2×2"},pillar:{type:"pillar",name:"石柱",key:"4",cost:1,desc:"最便宜的小障碍。卡视角、绕柱拉扯，给追击制造节奏变化。",tags:["便宜","卡视角"],even:!1,cells:[[0,0]],boxes:[{x0:-.4,x1:.4,z0:-.4,z1:.4,y0:0,y1:3}],height:3,size:"1×1"},corner:{type:"corner",name:"转角屏风",key:"5",cost:3,desc:"L 形高屏风。制造转角盲区，守门伏击或保护侧翼。",tags:["转角","伏击"],even:!1,cells:[[-1,-1],[0,-1],[1,-1],[-1,0],[-1,1]],boxes:[{x0:-1.25,x1:1.5,z0:-1.25,z1:-.75,y0:0,y1:2.4},{x0:-1.25,x1:-.75,z0:-1.25,z1:1.5,y0:0,y1:2.4}],height:2.4,size:"L 3×3"}},Tn=["low","high","crate","pillar","corner"];function dx(s,t,e){return ze[s].even?[Math.round(t),Math.round(e)]:[Math.floor(t)+.5,Math.floor(e)+.5]}function Zs(s,t,e,i){const n=ze[s],r=n.cells.map(([o,c])=>{const[l,h]=wi(o,c,i);return[Math.floor(t+l+1e-6),Math.floor(e+h+1e-6)]}),a=n.boxes.map(o=>{const c=Qs({minX:o.x0,maxX:o.x1,minZ:o.z0,maxZ:o.z1},i);return{kind:"box",minX:t+c.minX,maxX:t+c.maxX,minY:o.y0,maxY:o.y1,minZ:e+c.minZ,maxZ:e+c.maxZ,move:!0,sight:!0,tag:"piece"}});return{cells:r,boxes:a}}function fx(s,t){const e=a=>a.map(o=>o.join(",")).sort().join("|"),i=ze[s],n=i.cells.map(([a,o])=>wi(a,o,t)).map(([a,o])=>[o,a]),r=e(n);for(let a=0;a<4;a++){const o=i.cells.map(([c,l])=>wi(c,l,a));if(e(o)===r)return a}return t}const qe={stone:()=>Rt(12432551),stoneDark:()=>Rt(9340280),plaster:()=>Rt(16183524),wood:()=>Rt(8212791),woodDark:()=>Rt(4862245),woodLight:()=>Rt(13146726),tile:()=>Rt(4608106),paper:()=>Rt(16248020),rope:()=>Rt(15391138)};function vu(s,t,e=null){const i=new xi,n=o=>e??o,r=n(Rt(t));switch(s){case"low":{const o=n(qe.stone()),c=n(qe.stoneDark());for(let l=0;l<3;l++)i.box(o,.97,.5,.5,-1+l,0,0);i.box(c,.48,.5,.48,-1.25,.5,0),i.box(o,.97,.5,.5,-.5,.5,0),i.box(c,.97,.5,.48,.5,.5,0),i.box(o,.48,.5,.5,1.25,.5,0),i.box(n(qe.tile()),3.06,.16,.6,0,1,0),i.box(n(qe.tile()),3.06,.05,.22,0,1.15,0),i.box(r,3.02,.07,.53,0,.92,0);break}case"high":{const o=n(qe.woodDark());i.box(n(qe.stoneDark()),3,.4,.5,0,0,0),i.box(n(qe.plaster()),2.76,2.25,.42,0,.4,0),i.box(o,.16,2.35,.5,-1.42,.4,0),i.box(o,.16,2.35,.5,1.42,.4,0),i.box(o,.1,2.25,.46,0,.4,0),i.box(o,3,.12,.47,0,1.95,0),i.box(n(qe.tile()),3.2,.2,.72,0,2.66,0),i.box(n(qe.tile()),3.2,.14,.3,0,2.86,0);const c=new Ue(.2,.2,.03,16);i.add(c,r,-.7,1.35,.225,Math.PI/2),i.add(c,r,.7,1.35,-.225,Math.PI/2);break}case"crate":{const o=n(qe.woodLight()),c=n(qe.wood());i.box(o,1.86,1.12,1.86,0,0,0);for(const l of[-1,1])for(const h of[-1,1])i.box(c,.14,1.14,.14,l*.88,0,h*.88);i.box(c,1.9,.12,1.9,0,1,0),i.box(c,1.9,.1,1.9,0,.02,0),i.box(o,1.24,.62,1.24,.08,1.12,-.05,.28),i.box(c,1.28,.08,1.28,.08,1.62,-.05,.28),i.box(n(qe.rope()),1.9,.06,.08,0,.6,.93),i.box(r,.56,.38,.03,-.35,.36,.945),i.box(r,.03,.38,.56,.945,.36,.3);break}case"pillar":{const o=n(qe.stoneDark());i.box(o,.8,.3,.8,0,0,0),i.box(n(qe.stone()),.66,2.4,.66,0,.3,0),i.box(o,.8,.3,.8,0,2.7,0),i.box(n(qe.rope()),.72,.1,.72,0,2.15,0),i.box(r,.16,.52,.02,0,1.55,.34),i.box(r,.16,.52,.02,0,1.55,-.34);break}case"corner":{const o=n(qe.woodDark()),c=n(qe.paper()),l=h=>{const d=h?-1.25:-.75,u=1.5-d,f=(d+1.5)/2,g=(p,S,E,x,T)=>{h?i.box(o,p,S,E,x,T,-1):i.box(o,E,S,p,-1,T,x)},y=(p,S,E,x,T,M)=>{h?i.box(p,S,E,x,T,M,-1):i.box(p,x,E,S,-1,M,T)};g(u,.16,.5,f,0);const m=u/3;for(let p=0;p<3;p++){const S=d+m*(p+.5);y(c,m-.1,2,.3,S,.16),y(r,m-.12,.1,.32,S,1.55)}for(let p=h?0:1;p<=3;p++)g(.1,2.1,.36,d+m*p+(p===0?.05:p===3?-.05:0),.1);g(u,.12,.38,f,2.16),y(n(qe.tile()),u+.08,.12,.5,f,2.28)};l(!0),l(!1);break}}return i.build({cast:!e,receive:!e})}const px=[{name:"回廊",pieces:[{type:"high",u:10.5,v:4.5,rot:1},{type:"high",u:4.5,v:10.5,rot:0},{type:"corner",u:14.5,v:14.5,rot:2},{type:"crate",u:9,v:9,rot:0},{type:"low",u:14.5,v:6.5,rot:1},{type:"low",u:6.5,v:14.5,rot:0},{type:"pillar",u:16.5,v:3.5,rot:0},{type:"pillar",u:3.5,v:16.5,rot:0},{type:"pillar",u:12.5,v:12.5,rot:0},{type:"crate",u:15,v:10,rot:0}]},{name:"中堡",pieces:[{type:"high",u:10.5,v:7.5,rot:0},{type:"high",u:10.5,v:13.5,rot:0},{type:"low",u:7.5,v:10.5,rot:1},{type:"low",u:13.5,v:10.5,rot:1},{type:"pillar",u:10.5,v:10.5,rot:0},{type:"corner",u:16.5,v:4.5,rot:1},{type:"corner",u:4.5,v:16.5,rot:3},{type:"crate",u:15,v:15,rot:0},{type:"pillar",u:6.5,v:6.5,rot:0}]},{name:"柱林",pieces:[{type:"pillar",u:5.5,v:9.5,rot:0},{type:"pillar",u:9.5,v:5.5,rot:0},{type:"pillar",u:8.5,v:12.5,rot:0},{type:"pillar",u:12.5,v:8.5,rot:0},{type:"pillar",u:12.5,v:15.5,rot:0},{type:"pillar",u:15.5,v:12.5,rot:0},{type:"high",u:10.5,v:16.5,rot:0},{type:"high",u:16.5,v:10.5,rot:1},{type:"crate",u:9,v:9,rot:0},{type:"crate",u:14,v:14,rot:0},{type:"pillar",u:4.5,v:13.5,rot:0},{type:"pillar",u:13.5,v:4.5,rot:0}]},{name:"箱阵",pieces:[{type:"crate",u:9,v:9,rot:0},{type:"crate",u:13,v:5,rot:0},{type:"crate",u:5,v:13,rot:0},{type:"crate",u:14,v:14,rot:0},{type:"high",u:12.5,v:10.5,rot:1},{type:"low",u:9.5,v:15.5,rot:0},{type:"low",u:16.5,v:8.5,rot:1},{type:"pillar",u:3.5,v:9.5,rot:0},{type:"pillar",u:9.5,v:3.5,rot:0},{type:"crate",u:16,v:4,rot:0}]},{name:"双L伏击",pieces:[{type:"corner",u:12.5,v:7.5,rot:3},{type:"corner",u:7.5,v:12.5,rot:1},{type:"corner",u:15.5,v:15.5,rot:2},{type:"high",u:10.5,v:10.5,rot:0},{type:"pillar",u:4.5,v:8.5,rot:0},{type:"pillar",u:8.5,v:4.5,rot:0},{type:"crate",u:16,v:4,rot:0},{type:"low",u:3.5,v:12.5,rot:1},{type:"pillar",u:11.5,v:16.5,rot:0}]},{name:"斜墙",pieces:[{type:"high",u:6.5,v:13.5,rot:0},{type:"high",u:13.5,v:6.5,rot:1},{type:"high",u:10.5,v:10.5,rot:1},{type:"low",u:14.5,v:12.5,rot:0},{type:"low",u:12.5,v:15.5,rot:1},{type:"crate",u:7,v:8,rot:0},{type:"pillar",u:16.5,v:16.5,rot:0},{type:"pillar",u:3.5,v:8.5,rot:0},{type:"pillar",u:8.5,v:3.5,rot:0}]}],mx=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[2,0],[0,2],[-2,0],[0,-2],[1,-1],[-1,1]];let gx=1;class vx{constructor(t){this.g=t,t.scene.add(this.group)}g;pieces=[];budget=[ti.budget,ti.budget,ti.budget,ti.budget];occ=new Map;undoStack=[];ai=[];group=new Ce;zoneOfTeam(t){return this.g.zones[this.g.match.teams[t].buildZone]}clearAll(){for(const t of[...this.pieces])this.remove(t,{refund:!1,record:!1,silent:!0});this.pieces=[],this.occ.clear(),this.undoStack=[],this.g.nav.rebuildAll()}resetBudgets(){this.budget=[ti.budget,ti.budget,ti.budget,ti.budget]}pieceById(t){return this.pieces.find(e=>e.id===t)}validate(t,e,i,n,r){const a=this.zoneOfTeam(t),o=ze[e],c=Zs(e,i,n,r),l=a.rect;for(const[d,u]of c.cells)if(d<l.minX||d+1>l.maxX||u<l.minZ||u+1>l.maxZ)return{ok:!1,reason:`超出本队建造区（${a.letter} 区）`};for(const[d,u]of c.cells){const f=d+.5,g=u+.5;for(const y of a.noBuild)if(f>y.minX&&f<y.maxX&&g>y.minZ&&g<y.maxZ)return{ok:!1,reason:"出生台 / 门口保留区不可建造"};if(this.occ.has(d+","+u))return{ok:!1,reason:"与已有构件重叠（不可叠放）"}}if(this.budget[t]<o.cost)return{ok:!1,reason:`预算不足（需要 ${o.cost}）`};const h=c.boxes.map(d=>new uu(d));for(const d of this.g.chars)if(d.alive){for(const u of h)if(u.dist2D(d.pos.x,d.pos.z)<fe.radius+.08)return{ok:!1,reason:d.isPlayer?"你正站在这里":`会卡住角色（${d.name}）`}}return this.connectivityOK(a,h)?{ok:!0,reason:""}:{ok:!1,reason:"会封死出生点通往外部的最后通路"}}connectivityOK(t,e){const i=t.rect,n={minX:i.minX-2.5,maxX:i.maxX+2.5,minZ:i.minZ-2.5,maxZ:i.maxZ+2.5},r=(c,l)=>c<i.minX-.3||c>i.maxX+.3||l<i.minZ-.3||l>i.maxZ+.3,a=t.spawns.map(c=>({x:c.x,z:c.z}));for(const c of this.g.chars)c.alive&&c.pos.x>i.minX&&c.pos.x<i.maxX&&c.pos.z>i.minZ&&c.pos.z<i.maxZ&&a.push({x:c.pos.x,z:c.pos.z});return this.g.nav.regionReach(n,r,a,e).every(Boolean)}spawnReachable(t){const e=t.rect,i={minX:e.minX-2.5,maxX:e.maxX+2.5,minZ:e.minZ-2.5,maxZ:e.maxZ+2.5},n=(r,a)=>r<e.minX-.3||r>e.maxX+.3||a<e.minZ-.3||a>e.maxZ+.3;return this.g.nav.regionReach(i,n,t.spawns,null).every(Boolean)}place(t,e,i,n,r,a={}){if(!a.skipValidate&&!this.validate(t,e,i,n,r).ok)return null;const o=Zs(e,i,n,r),c=this.zoneOfTeam(t),l={id:gx++,type:e,team:t,zone:c.idx,cx:i,cz:n,rot:r,cells:o.cells,colliders:[],mesh:vu(e,jt[t].color),bornT:this.g.time};for(const h of o.boxes)l.colliders.push(this.g.world.add(h,l));for(const[h,d]of o.cells)this.occ.set(h+","+d,l);return this.budget[t]-=ze[e].cost,l.mesh.position.set(i,0,n),l.mesh.rotation.y=-r*Math.PI/2,l.mesh.scale.set(1,.01,1),l.mesh.userData.piece=l,this.group.add(l.mesh),this.pieces.push(l),this.updateNavFor(o.boxes),a.record&&this.undoStack.push({kind:"place",type:e,cx:i,cz:n,rot:r,id:l.id}),a.silent||this.g.events.piecePlaced(l),l}remove(t,e={}){const i=this.pieces.indexOf(t);if(i<0)return;this.pieces.splice(i,1);for(const c of t.colliders)this.g.world.remove(c);for(const[c,l]of t.cells){const h=c+","+l;this.occ.get(h)===t&&this.occ.delete(h)}e.refund!==!1&&(this.budget[t.team]+=ze[t.type].cost),this.group.remove(t.mesh),t.mesh.traverse(c=>{const l=c;l.geometry&&l.geometry.dispose()});const n=Math.min(...t.colliders.map(c=>c.minX)),r=Math.max(...t.colliders.map(c=>c.maxX)),a=Math.min(...t.colliders.map(c=>c.minZ)),o=Math.max(...t.colliders.map(c=>c.maxZ));this.g.nav.updateRegion(n,r,a,o),e.record&&this.undoStack.push({kind:"remove",type:t.type,cx:t.cx,cz:t.cz,rot:t.rot,id:t.id}),e.silent||this.g.events.pieceRemoved(t)}updateNavFor(t){const e=Math.min(...t.map(a=>a.minX)),i=Math.max(...t.map(a=>a.maxX)),n=Math.min(...t.map(a=>a.minZ)),r=Math.max(...t.map(a=>a.maxZ));this.g.nav.updateRegion(e,i,n,r)}undo(t){const e=this.undoStack.pop();if(!e)return"没有可撤销的操作";if(e.kind==="place"){const r=this.pieceById(e.id);return r&&this.remove(r,{refund:!0,record:!1}),`已撤销放置：${ze[e.type].name}`}const i=this.validate(t,e.type,e.cx,e.cz,e.rot);return i.ok?this.place(t,e.type,e.cx,e.cz,e.rot,{record:!1})?`已恢复：${ze[e.type].name}`:"无法恢复":`无法恢复：${i.reason}`}piecesInZone(t){return this.pieces.filter(e=>e.zone===t)}lockCheck(){this.g.nav.rebuildAll();const t=[];for(const e of this.g.zones){let i=0;for(;!this.spawnReachable(e);){const n=this.piecesInZone(e.idx);if(!n.length)break;this.remove(n[n.length-1],{refund:!0,silent:!0}),i++}t.push({zone:e.idx,ok:this.spawnReachable(e),removed:i})}return t}animate(t){for(const e of this.pieces){const i=Math.min(1,(t-e.bornT)/.35);if(i>=1){e.mesh.scale.y!==1&&e.mesh.scale.set(1,1,1);continue}const n=i<1?1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2):1;e.mesh.scale.set(1,Math.max(.01,n),1)}}planFor(t){const e=this.zoneOfTeam(t),i=$s(px),n=Yt()<.5,r=[];for(const o of i.pieces){let c=o.u,l=o.v,h=o.rot;if(n){const y=c;c=l,l=y,h=fx(o.type,h)}const d=-29+c,u=-29+l,[f,g]=wi(d,u,e.k);r.push({type:o.type,cx:f,cz:g,rot:(h+e.k)%4})}Jr(r);const a=Math.floor(Yt()*3);return r.splice(0,a),r}startAI(t){this.ai=this.ai.filter(e=>e.team!==t),this.ai.push({team:t,plan:this.planFor(t),idx:0,timer:ut(.4,1.2),done:!1,fails:0,started:!1,elapsed:0})}aiDone(t){const e=this.ai.find(i=>i.team===t);return!e||e.done}updateAI(t){for(const e of this.ai)if(!e.done){if(e.elapsed+=t,!e.started){const i=this.zoneOfTeam(e.team);if(this.g.match.teams[e.team].members.some(r=>r.alive&&r.pos.x>i.rect.minX&&r.pos.x<i.rect.maxX&&r.pos.z>i.rect.minZ&&r.pos.z<i.rect.maxZ)||e.elapsed>12)e.started=!0;else continue}e.timer-=t,!(e.timer>0)&&(e.timer=ut(.7,1.3),this.aiStep(e))}}aiStep(t){for(;t.idx<t.plan.length;){const e=t.plan[t.idx++];if(!(this.budget[t.team]<ze[e.type].cost)&&this.tryPlaceJitter(t.team,e.type,e.cx,e.cz,e.rot))return!0}return this.budget[t.team]>=1&&t.fails<6?this.randomFill(t.team)?!0:(t.fails++,!1):(t.done=!0,!1)}tryPlaceJitter(t,e,i,n,r){const a=[r,(r+2)%4,(r+1)%4];for(const[o,c]of mx)for(const l of a)if(this.validate(t,e,i+o,n+c,l).ok)return!!this.place(t,e,i+o,n+c,l);return!1}randomFill(t,e=!1){const i=this.zoneOfTeam(t),n=this.budget[t],a=[["pillar",2],["crate",3],["low",2],["high",2.2],["corner",1.4]].filter(([o])=>ze[o].cost<=n);if(!a.length)return!1;for(let o=0;o<40;o++){const c=a.reduce((p,S)=>p+S[1],0);let l=Yt()*c,h=a[0][0];for(const[p,S]of a)if(l-=S,l<=0){h=p;break}const d=i.rect,u=ut(d.minX+1,d.maxX-1),f=ut(d.minZ+1,d.maxZ-1),g=ze[h].even?Math.round(u):Math.floor(u)+.5,y=ze[h].even?Math.round(f):Math.floor(f)+.5,m=Math.floor(Yt()*4);if(this.hasMargin(h,g,y,m)&&this.validate(t,h,g,y,m).ok)return!!this.place(t,h,g,y,m,{record:e})}return!1}hasMargin(t,e,i,n){const r=Zs(t,e,i,n);for(const[a,o]of r.cells)for(let c=-1;c<=1;c++)for(let l=-1;l<=1;l++)if(this.occ.has(a+l+","+(o+c)))return!1;return!0}finishAll(){for(const t of this.ai){t.started=!0;let e=0;for(;!t.done&&e++<80;)this.aiStep(t);t.done=!0}}autoFill(t){const e=this.zoneOfTeam(t),i=this.piecesInZone(e.idx).length,n=this.planFor(t);for(const a of n){if(this.budget[t]<ze[a.type].cost||Zs(a.type,a.cx,a.cz,a.rot).cells.some(([l,h])=>this.occ.has(l+","+h))||!this.hasMargin(a.type,a.cx,a.cz,a.rot))continue;this.validate(t,a.type,a.cx,a.cz,a.rot).ok&&this.place(t,a.type,a.cx,a.cz,a.rot,{record:!0})}let r=0;for(;this.budget[t]>=1&&r++<12&&this.randomFill(t,!0););return this.piecesInZone(e.idx).length-i}pieceTypesAffordable(t){return Tn.filter(e=>ze[e].cost<=this.budget[t])}}class xx{constructor(t){this.g=t}g;pending=[];testHit(t,e,i){const n=e.pos.x-t.pos.x,r=e.pos.z-t.pos.z,a=Math.hypot(n,r);if(a-fe.radius>i.reach||Math.abs(e.pos.y-t.pos.y)>1.3)return-1;if(a>.35){const l=(n*t.fwdX+r*t.fwdZ)/a,h=Math.acos(te(l,-1,1)),d=i.arc/2*En+Math.atan2(fe.radius,a);if(h>d)return-1}const o=t.pos.y+fe.chest,c=e.pos.y+fe.chest;return this.g.world.segmentBlocked(t.pos.x,o,t.pos.z,e.pos.x,c,e.pos.z)?-1:a}step(){const t=this.g.chars;for(const i of t)if(!(!i.alive||i.state!=="active"||!i.attack||!i.canFight))for(const n of t){if(n===i||!n.alive||n.team===i.team||!n.canFight||i.hitSet.has(n))continue;const r=this.testHit(i,n,i.attack);r>=0&&(i.hitSet.add(n),this.pending.push({att:i,tgt:n,atk:i.attack,dist:r}))}if(!this.pending.length)return;const e=this.pending;this.pending=[];for(const i of e)this.resolve(i)}resolve(t){const{att:e,tgt:i,atk:n}=t;if(!i.alive)return;const r=Ee[i.weapon],a=(e.pos.x+i.pos.x)/2,o=(e.pos.z+i.pos.z)/2,c=i.pos.y+fe.chest+.1,l={att:e,tgt:i,kind:"hit",damage:0,atk:n,back:!1,x:a,y:c,z:o,killed:!1};if(i.iframe>0){l.kind="dodged",this.g.events.hit(l);return}const h=e.pos.x-i.pos.x,d=e.pos.z-i.pos.z,u=Math.hypot(h,d)||1,f=Math.acos(te((h*i.fwdX+d*i.fwdZ)/u,-1,1)),g=f<=78*En;l.back=f>=115*En;const y=-h/u,m=-d/u;let p=0;if(i.state==="block"&&g){if(i.parryArmed&&i.blockT<=r.parryWindow){l.kind="parry",e.stagger(n.weight==="heavy"?1.15:.85),e.hitstop=.12,i.hitstop=.08,i.guard=100,e.kbx-=y*2.5,e.kbz-=m*2.5,this.g.events.hit(l);return}i.guard-=n.guardDmg*r.guardMult,i.guardDelay=.9,n.guardBreak||i.guard<=0?(l.kind="guardbreak",p=n.damage*.5,i.guard=0,i.stagger(.7),i.kbx+=y*n.knock,i.kbz+=m*n.knock):(l.kind="blocked",p=n.damage*n.chip,i.kbx+=y*n.knock*.6,i.kbz+=m*n.knock*.6,e.hitstop=.05,i.hitstop=.05)}else{l.kind="hit",p=n.damage,n.minRange&&t.dist<n.minRange&&(p*=n.closeMult??.5),l.back&&(p*=1.25),i.flinch(n.weight==="heavy"?.4:.24),i.kbx+=y*n.knock,i.kbz+=m*n.knock;const S=n.weight==="heavy"?.12:n.weight==="mid"?.075:.05;e.hitstop=Math.max(e.hitstop,S),i.hitstop=Math.max(i.hitstop,S)}l.damage=Math.round(p),this.dealDamage(e,i,l.damage,l)}dealDamage(t,e,i,n){if(!e.alive||i<=0){n&&this.g.events.hit(n);return}let r=i;if(e.armor>0){const o=Math.min(e.armor,r);e.armor-=o,r-=o}e.hp-=r,e.flashT=.12,e.lastHurtTime=this.g.time,t&&(e.lastHurtBy=t,t.dmgDealt+=i);const a=e.hp<=0;n&&(n.killed=a,this.g.events.hit(n)),a&&(e.die(this.g.time),e.killedBy=t,this.g.events.kill(t,e,n?.atk??null))}}class _x{constructor(t){this.g=t}g;isOpen(){return this.g.match.phase==="buy"}armorCost(t){const e=Re.armorPoints-t.armor;return e<=0?0:Math.ceil(e/Re.armorPoints*Re.armorPrice/10)*10}buyWeapon(t,e){if(!this.isOpen())return{ok:!1,msg:"商店只在准备阶段开放"};if(!t.alive)return{ok:!1,msg:"阵亡中无法购买"};const i=Ee[e];if(t.weapon===e)return{ok:!1,msg:`已装备 ${i.name}`};const n=t.boughtThisPhase===t.weapon?Ee[t.weapon].price:0;return e==="tanto"?n?(t.money+=n,t.weapon="tanto",t.boughtThisPhase=null,this.g.events.purchase(t,`退回武器 +$${n}`,!0),{ok:!0,msg:`已退回，返还 $${n}`}):{ok:!1,msg:"当前武器为上回合保留，无需换回短刀"}:t.money+n<i.price?{ok:!1,msg:`资金不足：还差 $${i.price-t.money-n}`}:(t.money=t.money+n-i.price,t.weapon=e,t.boughtThisPhase=e,this.g.events.purchase(t,`购买 ${i.name} -$${i.price}`,!0),{ok:!0,msg:`已装备 ${i.name}`+(n?`（退回旧武器 +$${n}）`:"")})}buyArmor(t){if(!this.isOpen())return{ok:!1,msg:"商店只在准备阶段开放"};if(!t.alive)return{ok:!1,msg:"阵亡中无法购买"};const e=this.armorCost(t);return e<=0?{ok:!1,msg:"护甲已满"}:t.money<e?{ok:!1,msg:`资金不足：还差 $${e-t.money}`}:(t.money-=e,t.armor=Re.armorPoints,t.armorPaidThisPhase+=e,this.g.events.purchase(t,`购买护甲 -$${e}`,!0),{ok:!0,msg:"护甲已补满"})}}class yx{constructor(t){this.g=t}g;mode=or.quick;phase="menu";timer=0;phaseTime=0;round=0;buildIndex=0;midgameDone=!1;teams=[];lastResult=null;revealed=!1;ring={active:!1,r:ne.ringStartRadius,tick:0};playerReadyBuild=!1;playerReadyBuy=!1;winner=null;firstBuyAfterBuild=!1;roundKillMoney=new Map;history=[];swapLog=[];initTeams(){this.teams=[0,1,2,3].map(t=>({id:t,score:0,buildZone:t,spawnZone:(t+1)%4,ready:!1,lossStreak:0,members:this.g.chars.filter(e=>e.team===t)}))}get target(){return this.mode.target}newMatch(t){this.mode=or[t],this.round=0,this.buildIndex=0,this.midgameDone=!1,this.winner=null,this.lastResult=null,this.history=[],this.swapLog=[];for(const e of this.teams)e.score=0,e.lossStreak=0,e.ready=!1;for(const e of this.g.chars)e.money=Re.start,e.weapon="tanto",e.armor=0,e.kills=0,e.deaths=0,e.dmgDealt=0,e.diedThisRound=!1,e.boughtThisPhase=null,e.resetForRound();for(const e of this.g.brains)e.newMatch();this.g.build.clearAll(),this.enterBuild(!1)}setPhase(t,e){this.phase=t,this.timer=e,this.phaseTime=0}enterBuild(t){t&&this.g.build.clearAll(),this.buildIndex=t?1:0;const e=this.teams.map(r=>r.buildZone);let i=Jr([0,1,2,3]);if(t)for(let r=0;r<50&&i.some((a,o)=>a===e[o]);r++)i=Jr([0,1,2,3]);this.teams.forEach((r,a)=>{r.buildZone=i[a],r.ready=!1}),this.g.build.resetBudgets(),this.g.build.undoStack=[],this.playerReadyBuild=!1;const n=this.g.chars.length;this.g.chars.forEach((r,a)=>{r.resetForRound(),r.confine=null,r.canFight=!1;const o=a/n*Math.PI*2+Math.PI/8,c=Math.cos(o)*2.7,l=Math.sin(o)*2.7,h=this.g.zones[this.teams[r.team].buildZone];r.place(c,l,Math.atan2(-(h.center.x-c),-(h.center.z-l)))});for(const r of this.teams)r.id!==Qt&&this.g.build.startAI(r.id);this.setPhase("build",t?ne.rebuild:ne.build),this.g.events.phase("build",{isRebuild:t})}confirmPlayerBuildReady(){this.phase==="build"&&(this.playerReadyBuild=!0,this.teams[Qt].ready=!0,this.g.build.finishAll())}enterLock(){this.g.build.finishAll();for(const e of this.teams)e.ready=!0;const t=this.g.build.lockCheck();for(const e of this.g.chars)e.canFight=!1;this.setPhase("lock",ne.lock),this.g.events.phase("lock",{lock:t})}assignSpawns(){const t=this.teams.map(n=>n.buildZone);let e=[];for(let n=0;n<200&&(e=Jr([0,1,2,3]),!e.every((r,a)=>r!==t[a]));n++);this.teams.forEach((n,r)=>n.spawnZone=e[r]),this.swapLog.push({round:this.round+1,build:t,spawn:e.slice()}),(new Set(e).size!==4||e.some((n,r)=>n===t[r]))&&console.error("[swap] invalid assignment",t,e)}placeAtSpawns(){for(const t of this.teams){const e=this.g.zones[t.spawnZone];t.members.forEach((i,n)=>{const r=e.spawns[n];i.place(r.x,r.z,r.yaw),i.confine=e.pad})}}enterSwap(){this.assignSpawns(),this.round++,this.prepareRoundCharacters(),this.placeAtSpawns(),this.firstBuyAfterBuild=!0,this.setPhase("swap",ne.swap),this.g.events.phase("swap",{})}prepareRoundCharacters(){for(const t of this.g.chars)t.diedThisRound&&(t.weapon="tanto",t.armor=0),t.diedThisRound=!1,t.boughtThisPhase=null,t.armorPaidThisPhase=0,t.resetForRound(),t.canFight=!1}enterBuy(t){t&&(this.assignSpawns(),this.round++,this.prepareRoundCharacters(),this.placeAtSpawns()),this.playerReadyBuy=!1,this.roundKillMoney.clear();const e=this.firstBuyAfterBuild?ne.buyAfterBuild:ne.buy;this.firstBuyAfterBuild=!1,this.setPhase("buy",e);for(const i of this.g.brains)i.onBuyPhase();this.g.events.phase("buy",{showSwap:t})}confirmPlayerBuyReady(){this.phase!=="buy"||this.playerReadyBuy||(this.playerReadyBuy=!0,this.timer=Math.min(this.timer,ne.readyShortcut))}enterCombat(){for(const t of this.g.chars)t.confine=null,t.canFight=t.alive;this.revealed=!1,this.ring.active=!1,this.ring.r=ne.ringStartRadius,this.ring.tick=0,this.setPhase("combat",ne.round),this.g.events.phase("combat",{})}onKill(t,e,i){if(t&&t.team!==e.team){t.kills++,t.roundKills++;const n=Ee[t.weapon].killReward;t.money=Math.min(Re.max,t.money+n),this.roundKillMoney.set(t,(this.roundKillMoney.get(t)??0)+n)}}aliveTeams(){return this.teams.filter(t=>t.members.some(e=>e.alive))}endRound(t,e){for(const n of this.g.chars)n.canFight=!1;const i=new Map;t!==null&&this.teams[t].score++;for(const n of this.teams){let r=0;t!==null&&(n.id===t?n.lossStreak=0:(n.lossStreak++,r=Math.min(Re.lossMax,n.lossStreak*Re.lossStep)));for(const a of n.members){const o={base:Re.base,win:n.id===t?Re.win:0,loss:r,kills:this.roundKillMoney.get(a)??0};a.money=Math.min(Re.max,a.money+o.base+o.win+o.loss),i.set(a,o)}}this.lastResult={round:this.round,winner:t,reason:e,income:i,scores:this.teams.map(n=>n.score)},this.history.push({round:this.round,winner:t}),this.ring.active=!1,this.setPhase("roundEnd",ne.roundEnd),this.g.events.roundEnd(this.lastResult)}afterRound(){const t=Math.max(...this.teams.map(e=>e.score));if(t>=this.mode.target){this.winner=this.teams.find(e=>e.score>=this.mode.target).id,this.setPhase("matchEnd",0),this.g.events.matchEnd(this.winner);return}if(this.mode.midgameAt>0&&!this.midgameDone&&t>=this.mode.midgameAt){this.midgameDone=!0,this.enterBuild(!0);return}this.enterBuy(!0)}update(t){if(!(this.phase==="menu"||this.phase==="matchEnd"))switch(this.phaseTime+=t,this.timer-=t,this.phase){case"build":{this.g.build.updateAI(t);for(const e of this.teams)e.id!==Qt&&(e.ready=this.g.build.aiDone(e.id));this.playerReadyBuild&&this.teams.every(e=>e.ready)?this.enterLock():this.timer<=0&&this.enterLock();break}case"lock":this.timer<=0&&this.enterSwap();break;case"swap":this.timer<=0&&this.enterBuy(!1);break;case"buy":this.timer<=0&&this.enterCombat();break;case"combat":{if(this.timer<=ne.revealAt&&!this.revealed&&(this.revealed=!0,this.g.events.reveal()),this.timer<=ne.ringAt){this.ring.active||this.g.events.ringStart(),this.ring.active=!0;const i=1-Math.max(0,this.timer)/ne.ringAt;if(this.ring.r=xl(ne.ringStartRadius,ne.ringEndRadius,i),this.ring.tick+=t,this.ring.tick>=.5){this.ring.tick-=.5;for(const n of this.g.chars)n.alive&&Math.hypot(n.pos.x,n.pos.z)>this.ring.r&&this.g.combat.dealDamage(null,n,ne.ringDps*.5)}}const e=this.aliveTeams();e.length<=1?this.endRound(e.length?e[0].id:null,e.length?"elim":"mutual"):this.timer<=0&&this.endRound(null,"time");break}case"roundEnd":this.timer<=0&&this.afterRound();break}}}const Vr=new cn(0,0,0,"YXZ"),io=new U,Mx=new ci,th=new oe;class Sx{constructor(t,e){this.g=t,this.ch=e;const i=new vi(.94,.94).rotateX(-Math.PI/2);for(let n=0;n<6;n++){const r=new Wt(i,this.cellOk);r.visible=!1,r.renderOrder=5,r.layers.set(Pn),t.scene.add(r),this.cells.push(r)}this.hl=new Wt(new Te(1,1,1),new Di({color:16765503,transparent:!0,opacity:.35,depthWrite:!1})),this.hl.visible=!1,this.hl.renderOrder=6,this.hl.layers.set(Pn),t.scene.add(this.hl)}g;ch;firstPerson=!0;ghostPos=null;autopilot=null;keys=new Set;mouseL=!1;mouseR=!1;locked=!1;fallback=!1;lockAt=0;wantLock=!1;lookDX=0;lookDY=0;pieceIdx=0;rot=0;ghost=null;ghostType=null;ghostValid=!1;vKey="";vTime=0;lastV={ok:!1,reason:""};buildMsg="";buildOk=!1;targetPiece=null;cells=[];hl;matOk=new Di({color:9306032,transparent:!0,opacity:.42,depthWrite:!1});matBad=new Di({color:16735581,transparent:!0,opacity:.42,depthWrite:!1});cellOk=new Di({color:9306032,transparent:!0,opacity:.55,depthWrite:!1});cellBad=new Di({color:16735581,transparent:!0,opacity:.55,depthWrite:!1});specTarget=null;specYaw=0;specPitch=-.28;specOrbit=0;specOrbitT=0;camPos=new U;camLook=new U;eyeY=0;shake=0;kick=0;roll=0;fovKick=0;swapFromPos=new U;swapFromQuat=new ci;attach(t){window.addEventListener("keydown",e=>this.onKey(e,!0)),window.addEventListener("keyup",e=>this.onKey(e,!1)),document.addEventListener("mousemove",e=>this.onMouseMove(e)),window.addEventListener("mousedown",e=>this.onMouseDown(e)),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseL=!1),e.button===2&&(this.mouseR=!1)}),window.addEventListener("wheel",e=>this.onWheel(e),{passive:!0}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("blur",()=>this.releaseAll()),document.addEventListener("pointerlockchange",()=>{const e=this.locked;this.locked=document.pointerLockElement===t,this.locked?(this.lockAt=performance.now(),this.fallback=!1,this.g.ui.setResumePrompt(!1)):(this.releaseAll(),e&&!this.g.ui.modal&&this.g.onLockLost())}),document.addEventListener("pointerlockerror",()=>{this.locked=!1,this.lockFailed()}),t.addEventListener("click",()=>{!this.locked&&!this.fallback&&!this.g.ui.modal&&this.g.inGame()&&this.lock()})}lock(){this.wantLock=!0;const t=this.g.renderer.domElement;try{const e=t.requestPointerLock();e&&typeof e.catch=="function"&&e.catch(()=>this.lockFailed())}catch{this.lockFailed()}}lockFailed(){!this.wantLock||this.locked||this.g.ui.modal||!this.g.inGame()||(this.fallback||(this.fallback=!0,this.g.ui.toast("当前环境无法锁定鼠标：已切换兼容模式（移动鼠标或方向键转视角）","warn")),this.g.ui.setResumePrompt(!1))}unlock(){this.wantLock=!1,document.pointerLockElement&&document.exitPointerLock()}releaseAll(){this.keys.clear(),this.mouseL=this.mouseR=!1,this.ch.input.block=!1,this.ch.input.fwd=this.ch.input.right=0,this.ch.input.sprint=!1}get active(){return(this.locked||this.fallback)&&!this.g.ui.modal&&this.g.inGame()}onKey(t,e){const i=t.code;if(i==="Tab"){t.preventDefault(),this.g.inGame()&&this.g.ui.showScoreboard(e);return}if(!e){this.keys.delete(i);return}if(t.repeat)return;if(this.g.ui.modal){this.g.ui.onModalKey(t);return}if(!this.g.inGame())return;if(i==="Escape"){this.g.ui.openPause();return}if(!this.locked&&!this.fallback){i==="Enter"&&this.lock();return}i.startsWith("Arrow")&&t.preventDefault(),this.keys.add(i);const n=this.g.match.phase;if(i==="KeyB"&&n==="buy"){this.g.ui.openShop();return}if(i==="KeyH"||i==="F1"){t.preventDefault(),this.g.ui.openHelp();return}if(!this.autopilot){if(n==="build"&&this.ch.alive){if(i.startsWith("Digit")){const r=parseInt(i.slice(5),10)-1;r>=0&&r<Tn.length&&this.selectPiece(r)}else i==="KeyR"?(this.rot=(this.rot+1)%4,this.vKey="",this.g.audio.ui()):i==="KeyZ"?(this.g.ui.toast(this.g.build.undo(Qt),"info"),this.vKey=""):i==="KeyF"?this.teammateFill():i==="KeyX"||i==="Delete"||i==="Backspace"?this.deleteTarget():(i==="Enter"||i==="KeyG")&&this.readyBuild();return}if(n==="buy"&&(i==="Enter"||i==="KeyG")){this.g.match.confirmPlayerBuyReady(),this.g.ui.toast("已准备就绪，即将开战","ok");return}i==="Space"&&this.ch.alive&&(t.preventDefault(),this.ch.input.dodge=!0)}}onMouseMove(t){if(!this.active)return;const e=.0022*this.g.settings.sens,i=te(t.movementX,-250,250),n=te(t.movementY,-250,250);if(this.lookDX+=i,this.lookDY+=n,this.ch.alive&&this.firstPerson&&!this.autopilot){if(this.g.match.phase==="swap"&&this.g.match.phaseTime<ne.swap-1.2)return;this.ch.yaw-=i*e,this.ch.pitch=te(this.ch.pitch-n*e,-1.45,1.45)}else this.specOrbit-=i*e,this.specPitch=te(this.specPitch-n*e,-1,.45),this.specOrbitT=2.5}onMouseDown(t){this.active&&(performance.now()-this.lockAt<180||(t.button===0&&(this.mouseL=!0),t.button===2&&(this.mouseR=!0),this.mouseAction(t.button)))}mouseAction(t){if(this.autopilot)return;const e=this.ch,i=this.g.match.phase;if(!e.alive){t===0&&this.cycleSpec(1),t===2&&this.cycleSpec(-1);return}if(i==="build"){t===0&&this.placeGhost(),t===2&&this.deleteTarget();return}t===0&&e.canFight&&(e.input.attack=!0)}onWheel(t){if(!this.active||this.g.match.phase!=="build")return;const e=Tn.length;this.selectPiece((this.pieceIdx+(t.deltaY>0?1:e-1))%e)}selectPiece(t){this.pieceIdx=t,this.vKey="",this.g.audio.ui()}update(t){const e=this.ch;if(this.autopilot){this.ghostPos=null,this.hideBuild();return}const i=this.active&&e.alive,n=this.keys;if(i&&this.firstPerson){const a=(n.has("ArrowRight")?1:0)-(n.has("ArrowLeft")?1:0),o=(n.has("ArrowUp")?1:0)-(n.has("ArrowDown")?1:0);(a||o)&&(e.yaw-=a*2.4*t*this.g.settings.sens,e.pitch=te(e.pitch+o*1.6*t*this.g.settings.sens,-1.45,1.45),this.lookDX+=a*6)}e.input.fwd=i?(n.has("KeyW")?1:0)-(n.has("KeyS")?1:0):0,e.input.right=i?(n.has("KeyD")?1:0)-(n.has("KeyA")?1:0):0,e.input.sprint=i&&(n.has("ShiftLeft")||n.has("ShiftRight"));const r=this.g.match.phase;e.input.block=i&&this.mouseR&&r!=="build",r==="swap"&&this.g.match.phaseTime<ne.swap-1.2&&(e.input.fwd=e.input.right=0),r==="build"&&e.alive?this.updateBuild(t):(this.ghostPos=null,this.hideBuild()),this.specOrbitT>0&&(this.specOrbitT-=t)}hideBuild(){this.ghost&&(this.ghost.visible=!1);for(const t of this.cells)t.visible=!1;this.hl.visible=!1,this.targetPiece=null}ensureGhost(t){this.ghostType===t&&this.ghost||(this.ghost&&(this.g.scene.remove(this.ghost),this.ghost.traverse(e=>e.geometry?.dispose())),this.ghost=vu(t,16777215,this.matOk),this.ghost.traverse(e=>{e.renderOrder=7,e.castShadow=!1}),sn(this.ghost),this.g.scene.add(this.ghost),this.ghostType=t,this.ghostValid=!0)}updateBuild(t){const e=this.g,i=this.ch,n=Tn[this.pieceIdx],r=ti.reach,a=i.pos.x,o=i.pos.y+fe.eye,c=i.pos.z,l=Math.cos(i.pitch),h=i.fwdX*l,d=Math.sin(i.pitch),u=i.fwdZ*l,f=a+h*r,g=o+d*r,y=c+u*r,m=e.world.raycast(a,o,c,f,g,y,P=>P.tag==="piece"),p=m<1?e.world.lastHit?.owner:null,S=e.world.raycast(a,o,c,f,g,y,P=>P.tag!=="piece"&&P.move),E=d<-.02?o/-d/r:2;if(this.targetPiece=null,this.hl.visible=!1,p&&m<=Math.min(S,E)){this.targetPiece=p,this.ghost&&(this.ghost.visible=!1);for(const Z of this.cells)Z.visible=!1;this.ghostPos=null;let P=1/0,D=-1/0,N=1/0,B=-1/0,O=0;for(const Z of p.colliders)P=Math.min(P,Z.minX),D=Math.max(D,Z.maxX),N=Math.min(N,Z.minZ),B=Math.max(B,Z.maxZ),O=Math.max(O,Z.maxY);const Q=p.team===Qt;this.hl.material.color.set(Q?16765503:16735581),this.hl.position.set((P+D)/2,O/2,(N+B)/2),this.hl.scale.set(D-P+.12,O+.12,B-N+.12),this.hl.visible=!0;const W=ze[p.type];this.buildOk=Q,this.buildMsg=Q?`右键删除「${W.name}」· 退还 ${W.cost} 预算`:"不能删除其他队伍的构件";return}let x,T;if(E<=1&&E<=S)x=a+h*r*E,T=c+u*r*E;else{const P=S<1?Math.max(.5,r*S*l-.7):Math.min(r-1,5.5);x=a+i.fwdX*P,T=c+i.fwdZ*P}const[M,A]=dx(n,x,T);this.ghostPos={x:M,z:A};const v=`${n},${M},${A},${this.rot},${e.nav.version}`;if(v!==this.vKey||e.time-this.vTime>.25){this.vKey=v,this.vTime=e.time;let P=e.build.validate(Qt,n,M,A,this.rot);P.ok&&Math.hypot(M-a,A-c)>r+.5&&(P={ok:!1,reason:"超出建造距离（靠近一些）"}),this.lastV=P}const b=this.lastV;this.ensureGhost(n);const R=this.ghost;if(R.visible=!0,R.position.set(M,.02,A),R.rotation.y=-this.rot*Math.PI/2,b.ok!==this.ghostValid){this.ghostValid=b.ok;const P=b.ok?this.matOk:this.matBad;R.traverse(D=>{D.isMesh&&(D.material=P)})}const I=Zs(n,M,A,this.rot);this.cells.forEach((P,D)=>{const N=I.cells[D];P.visible=!!N,N&&(P.position.set(N[0]+.5,.035,N[1]+.5),P.material=b.ok?this.cellOk:this.cellBad)});const L=ze[n];this.buildOk=b.ok,this.buildMsg=b.ok?`左键放置「${L.name}」· 消耗 ${L.cost}`:b.reason}placeGhost(){const t=this.g;if(this.targetPiece){t.ui.toast("这里已有构件：右键可删除","warn"),t.audio.denied();return}if(!this.ghostPos)return;const e=Tn[this.pieceIdx],i=t.build.validate(Qt,e,this.ghostPos.x,this.ghostPos.z,this.rot);if(!i.ok||!this.lastV.ok){t.ui.toast(i.ok?this.lastV.reason:i.reason,"bad"),t.audio.denied();return}t.build.place(Qt,e,this.ghostPos.x,this.ghostPos.z,this.rot,{record:!0})&&(t.viewmodel.tap(),this.vKey="")}deleteTarget(){const t=this.g,e=this.targetPiece;if(!e){t.ui.toast("准星对准本队构件后再删除","info");return}if(e.team!==Qt){t.ui.toast("不能删除其他队伍的构件","bad"),t.audio.denied();return}t.build.remove(e,{refund:!0,record:!0}),t.viewmodel.tap(),this.targetPiece=null,this.vKey=""}teammateFill(){const t=this.g,e=t.match.teams[Qt].members.find(n=>n!==this.ch),i=t.build.autoFill(Qt);this.vKey="",i>0?t.ui.toast(`${e?.name??"队友"} 按模板补全了 ${i} 个构件（不会改动你放的）`,"ok"):t.ui.toast(t.build.budget[Qt]<1?"预算已用完":"没有找到合适的空位","info")}readyBuild(){const t=this.g;if(!t.match.playerReadyBuild){if(t.build.piecesInZone(t.match.teams[Qt].buildZone).length===0){const e=t.build.autoFill(Qt);e>0&&t.ui.toast(`你还没放构件，队友按模板布置了 ${e} 个`,"info")}t.match.confirmPlayerBuildReady(),t.ui.toast("已准备！等待所有队伍完成建造…","ok")}}candidates(){const t=this.g.chars.filter(i=>i.alive&&i.team===Qt&&i!==this.ch),e=this.g.chars.filter(i=>i.alive&&i.team!==Qt);return[...t,...e]}cycleSpec(t){const e=this.candidates();if(!e.length)return;const i=this.specTarget?e.indexOf(this.specTarget):-1,n=e.length;this.specTarget=e[((i<0?0:i+t)%n+n)%n],this.specOrbit=0,this.g.audio.ui()}ensureSpecTarget(){const t=this.specTarget;if(t&&(t.alive||this.g.time-t.deathTime<1.6))return;const e=this.candidates();this.specTarget=e[0]??null,this.specOrbit=0}onHit(t){const e=this.g.settings.shake?1:.35;t.att===this.ch&&(t.kind==="hit"||t.kind==="guardbreak"?(this.kick=Math.max(this.kick,t.atk?.weight==="heavy"?.03:.015),this.shake=Math.max(this.shake,(t.atk?.weight==="heavy"?.06:.03)*e),this.g.viewmodel.hitKick(t.atk?.weight==="heavy"?1:.6)):t.kind==="blocked"?(this.g.viewmodel.hitKick(.8),this.shake=Math.max(this.shake,.02*e)):t.kind==="parry"&&(this.g.viewmodel.hitKick(1.2),this.shake=Math.max(this.shake,.05*e))),t.tgt===this.ch&&(t.kind==="hit"||t.kind==="guardbreak"?(this.shake=Math.max(this.shake,(t.damage>50?.12:.07)*e),this.kick=Math.max(this.kick,-.04),this.roll=(Math.random()<.5?-1:1)*.05*e):(t.kind==="blocked"||t.kind==="parry")&&(this.shake=Math.max(this.shake,.03*e),this.g.viewmodel.hitKick(.5)))}updateCamera(t,e){const i=this.g,n=this.ch,r=i.match;this.shake=ei(this.shake,0,9,t),this.kick=ei(this.kick,0,12,t),this.roll=ei(this.roll,0,8,t);const a=n.alive&&n.input.sprint&&n.speed2D>5.5;this.fovKick=ei(this.fovKick,a?4:n.state==="dodge"?6:0,8,t);const o=i.settings.fov+this.fovKick;if(Math.abs(e.fov-o)>.01&&(e.fov=o,e.updateProjectionMatrix()),r.phase==="swap"){this.firstPerson=!0;const v=r.phaseTime,b=ne.swap,R=io.set(n.pos.x,n.pos.y+fe.eye,n.pos.z);Vr.set(n.pitch,n.yaw,0,"YXZ");const I=Mx.setFromEuler(Vr);if(v<.05){const D=window.innerWidth,N=D>900?Math.min(430,D*.36)+26:0,B=Math.tan(e.fov*Math.PI/360)*e.aspect,O=te(N/D*73*B,0,30);this.swapFromPos.set(O,68,30),th.lookAt(this.swapFromPos,new U(O,0,3),new U(0,1,0)),this.swapFromQuat.setFromRotationMatrix(th)}const L=te((v-(b-1.6))/1.5,0,1),P=Li.inOutQuad(L);e.position.lerpVectors(this.swapFromPos,R,P),e.position.y+=Math.sin(P*Math.PI)*6,e.quaternion.slerpQuaternions(this.swapFromQuat,I,Li.inQuad(L)),this.eyeY=R.y;return}if(n.alive&&!this.autopilot){this.firstPerson=!0,this.specTarget=null;const v=n.pos.y+fe.eye;this.eyeY=Math.abs(this.eyeY-v)>.8?v:ei(this.eyeY,v,20,t),e.position.set(n.pos.x,this.eyeY,n.pos.z);const b=n.state==="dodge"?n.input.right>0?-.06:n.input.right<0?.06:0:0;Vr.set(n.pitch+this.kick,n.yaw,this.roll+b,"YXZ"),e.quaternion.setFromEuler(Vr),this.shake>.002&&(e.position.x+=(Math.random()-.5)*this.shake,e.position.y+=(Math.random()-.5)*this.shake,e.position.z+=(Math.random()-.5)*this.shake);return}this.firstPerson=!1;let c;if(this.autopilot&&n.alive)c=n;else{const v=i.time-n.deathTime;if(v<1.8&&!this.autopilot){const b=Li.outCubic(te(v/1.8,0,1)),R=n.killedBy;this.camPos.set(n.pos.x,n.pos.y+xl(fe.eye,3.2,b),n.pos.z),e.position.copy(this.camPos),R?this.camLook.lerp(io.set(R.pos.x,R.pos.y+1.3,R.pos.z),1-Math.exp(-6*t)):this.camLook.set(n.pos.x+n.fwdX*3,n.pos.y,n.pos.z+n.fwdZ*3),e.lookAt(this.camLook),this.specYaw=n.yaw;return}this.ensureSpecTarget(),c=this.specTarget}if(!c){this.camPos.lerp(io.set(0,26,22),1-Math.exp(-2*t)),e.position.copy(this.camPos),e.lookAt(0,0,0);return}this.specOrbitT<=0&&(this.specOrbit=ei(this.specOrbit,0,1.5,t)),this.specYaw=this.specYaw+Math.atan2(Math.sin(c.yaw-this.specYaw),Math.cos(c.yaw-this.specYaw))*(1-Math.exp(-4*t));const l=this.specYaw+this.specOrbit,h=this.specPitch,d=c.pos.x,u=c.pos.y+1.55,f=c.pos.z,g=3.4,y=-Math.sin(l)*Math.cos(h),m=Math.sin(h),p=-Math.cos(l)*Math.cos(h),S=Math.cos(l),E=-Math.sin(l);let x=d-y*g+S*.55,T=u-m*g+.25,M=f-p*g+E*.55;const A=i.world.raycast(d,u,f,x,T,M);if(A<1){const v=Math.max(.15,A-.12);x=d+(x-d)*v,T=u+(T-u)*v,M=f+(M-f)*v}this.camPos.set(x,T,M),e.position.copy(this.camPos),this.camLook.set(d+y*4,u+m*4,f+p*4),e.lookAt(this.camLook)}}const eh=fi(64,64,s=>{const t=s.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.9)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.beginPath();for(let e=0;e<8;e++){const i=e/8*Math.PI*2,n=e%2?9:32;s.lineTo(32+Math.cos(i)*n,32+Math.sin(i)*n)}s.fill()},{mip:!1}),bx=fi(64,64,s=>{const t=s.createRadialGradient(32,32,0,32,32,30);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.6,"rgba(255,255,255,0.85)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.beginPath(),s.arc(32,32,30,0,Math.PI*2),s.fill()},{mip:!1}),wx=fi(64,64,s=>{s.fillStyle="#fff",s.beginPath(),s.moveTo(32,6),s.bezierCurveTo(58,18,52,50,32,58),s.bezierCurveTo(12,50,6,18,32,6),s.fill(),s.fillStyle="rgba(0,0,0,0.12)",s.beginPath(),s.moveTo(32,12),s.lineTo(33,54),s.lineTo(31,54),s.fill()},{mip:!1}),Ex=fi(256,256,s=>{s.translate(128,128),s.fillStyle="#fff",s.beginPath();const t=14;for(let e=0;e<t*2;e++){const i=e/(t*2)*Math.PI*2,n=e%2?40+Math.random()*14:100+Math.random()*26;s.lineTo(Math.cos(i)*n,Math.sin(i)*n)}s.closePath(),s.fill(),s.globalCompositeOperation="destination-out",s.beginPath(),s.arc(0,0,26,0,Math.PI*2),s.fill()},{mip:!1}),Tx=fi(256,256,s=>{s.strokeStyle="#fff",s.lineWidth=14,s.beginPath(),s.arc(128,128,110,0,Math.PI*2),s.stroke(),s.lineWidth=4,s.beginPath(),s.arc(128,128,92,0,Math.PI*2),s.stroke()},{mip:!1}),Ax=fi(256,64,s=>{const t=s.createLinearGradient(0,0,256,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.beginPath(),s.moveTo(0,32),s.quadraticCurveTo(128,0,256,32),s.quadraticCurveTo(128,22,0,32),s.fill()},{mip:!1}),Rx=`
attribute float aSize;
attribute vec4 aColor;
attribute float aRot;
uniform float uScale;
varying vec4 vColor;
varying float vRot;
void main() {
  vColor = aColor;
  vRot = aRot;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // 贴近镜头的粒子限制在画面高度的约 12%，避免糊满屏幕
  gl_PointSize = min(aSize * uScale / max(0.1, -mv.z), uScale * 0.18);
  gl_Position = projectionMatrix * mv;
}`,Cx=`
uniform sampler2D map;
varying vec4 vColor;
varying float vRot;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float c = cos(vRot), s = sin(vRot);
  uv = mat2(c, -s, s, c) * uv + 0.5;
  vec4 t = texture2D(map, uv);
  gl_FragColor = vec4(vColor.rgb * t.rgb, vColor.a * t.a);
  if (gl_FragColor.a < 0.01) discard;
}`;class no{constructor(t,e,i){this.cap=t,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.size=new Float32Array(t),this.rot=new Float32Array(t),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.baseSize=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.spin=new Float32Array(t),this.rgb=new Float32Array(t*3);const n=new We;n.setAttribute("position",new Ze(this.pos,3).setUsage(vs)),n.setAttribute("aColor",new Ze(this.col,4).setUsage(vs)),n.setAttribute("aSize",new Ze(this.size,1).setUsage(vs)),n.setAttribute("aRot",new Ze(this.rot,1).setUsage(vs)),n.boundingSphere=new Ts(new U,1e4),this.mat=new Ye({uniforms:{map:{value:e},uScale:{value:600}},vertexShader:Rx,fragmentShader:Cx,transparent:!0,depthWrite:!1,blending:i?Wn:An}),this.points=new Ud(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,sn(this.points)}cap;points;pos;col;size;rot;vel;life;maxLife;baseSize;grav;drag;spin;rgb;n=0;mat;emit(t,e,i,n,r,a,o,c,l,h=0,d=2){let u;this.n<this.cap?u=this.n++:u=Math.floor(Yt()*this.cap),this.pos[u*3]=t,this.pos[u*3+1]=e,this.pos[u*3+2]=i,this.vel[u*3]=n,this.vel[u*3+1]=r,this.vel[u*3+2]=a,this.rgb[u*3]=o.r,this.rgb[u*3+1]=o.g,this.rgb[u*3+2]=o.b,this.life[u]=l,this.maxLife[u]=l,this.baseSize[u]=c,this.grav[u]=h,this.drag[u]=d,this.rot[u]=Yt()*6.28,this.spin[u]=ut(-6,6)}update(t){let e=0;for(;e<this.n;){if(this.life[e]-=t,this.life[e]<=0){const a=--this.n;e!==a&&this.copy(a,e);continue}const n=Math.exp(-this.drag[e]*t);this.vel[e*3]*=n,this.vel[e*3+1]=this.vel[e*3+1]*n-this.grav[e]*t,this.vel[e*3+2]*=n,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t,this.pos[e*3+1]<.02&&(this.pos[e*3+1]=.02,this.vel[e*3+1]*=-.2);const r=this.life[e]/this.maxLife[e];this.rot[e]+=this.spin[e]*t,this.size[e]=this.baseSize[e]*(.4+.6*r),this.col[e*4]=this.rgb[e*3],this.col[e*4+1]=this.rgb[e*3+1],this.col[e*4+2]=this.rgb[e*3+2],this.col[e*4+3]=Math.min(1,r*1.6),e++}const i=this.points.geometry;i.setDrawRange(0,this.n),i.getAttribute("position").needsUpdate=!0,i.getAttribute("aColor").needsUpdate=!0,i.getAttribute("aSize").needsUpdate=!0,i.getAttribute("aRot").needsUpdate=!0}copy(t,e){for(let i=0;i<3;i++)this.pos[e*3+i]=this.pos[t*3+i],this.vel[e*3+i]=this.vel[t*3+i],this.rgb[e*3+i]=this.rgb[t*3+i];this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.baseSize[e]=this.baseSize[t],this.grav[e]=this.grav[t],this.drag[e]=this.drag[t],this.rot[e]=this.rot[t],this.spin[e]=this.spin[t]}clear(){this.n=0}}class ih{constructor(t,e,i,n){this.scene=t,this.map=e,this.additive=i,this.view=n}scene;map;additive;view;list=[];spawn(t,e,i,n,r,a,o,c={}){let l=this.list.find(u=>!u.active);if(!l){const u=new wn({map:this.map,transparent:!0,depthWrite:!1,blending:this.additive?Wn:An}),f=new Bn(u);f.renderOrder=6,sn(f),this.scene.add(f),l={sprite:f,t:0,life:1,s0:1,s1:1,a0:1,vy:0,active:!1},this.list.push(l)}const h=l.sprite.material;h.map=c.map??this.map,h.color.set(n),h.rotation=c.rot??Yt()*Math.PI*2,h.depthTest=c.depthTest??!0,h.needsUpdate=!0,l.sprite.position.set(t,e,i),l.sprite.visible=!0;const d=Math.max(.12,l.sprite.position.distanceTo(this.view.pos)*this.view.k);a=Math.min(a,d),r=Math.min(r,a),l.t=0,l.life=o,l.s0=r,l.s1=a,l.a0=c.alpha??1,l.vy=c.vy??0,l.active=!0,l.sprite.scale.setScalar(r),h.opacity=l.a0}update(t){for(const e of this.list){if(!e.active)continue;e.t+=t;const i=e.t/e.life;if(i>=1){e.active=!1,e.sprite.visible=!1;continue}const n=1-Math.pow(1-i,3);e.sprite.scale.setScalar(e.s0+(e.s1-e.s0)*n),e.sprite.position.y+=e.vy*t,e.sprite.material.opacity=e.a0*(i<.6?1:1-(i-.6)/.4)}}clear(){for(const t of this.list)t.active=!1,t.sprite.visible=!1}}const Px=`
attribute float aAlpha;
attribute float aT;
varying float vAlpha;
varying float vT;
void main() {
  vAlpha = aAlpha;
  vT = aT;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Lx=`
uniform vec3 uColor;
uniform float uOpacity;
varying float vAlpha;
varying float vT;
void main() {
  vec3 c = mix(uColor, vec3(1.0), smoothstep(0.35, 1.0, vT) * 0.85);
  float a = vAlpha * uOpacity * smoothstep(0.0, 0.25, vT);
  gl_FragColor = vec4(c * a, a);
}`;class xu{mesh;samples=[];posArr;alphaArr;tArr;max=40;life=.16;mat;constructor(t,e=!0){const i=new We;this.posArr=new Float32Array(this.max*2*3),this.alphaArr=new Float32Array(this.max*2),this.tArr=new Float32Array(this.max*2);for(let r=0;r<this.max;r++)this.tArr[r*2]=0,this.tArr[r*2+1]=1;const n=[];for(let r=0;r<this.max-1;r++){const a=r*2;n.push(a,a+1,a+2,a+1,a+3,a+2)}i.setIndex(n),i.setAttribute("position",new Ze(this.posArr,3).setUsage(vs)),i.setAttribute("aAlpha",new Ze(this.alphaArr,1).setUsage(vs)),i.setAttribute("aT",new Ze(this.tArr,1)),i.boundingSphere=new Ts(new U,1e4),this.mat=new Ye({uniforms:{uColor:{value:new Ht(t)},uOpacity:{value:.9}},vertexShader:Px,fragmentShader:Lx,transparent:!0,depthWrite:!1,side:hi,blending:e?Wn:An}),this.mesh=new Wt(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4,sn(this.mesh)}push(t,e,i){this.samples.push({b:t.clone(),t:e.clone(),time:i}),this.samples.length>this.max&&this.samples.shift()}update(t){for(;this.samples.length&&t-this.samples[0].time>this.life;)this.samples.shift();const e=this.samples.length;for(let n=0;n<e;n++){const r=this.samples[n],a=(t-r.time)/this.life,o=Math.max(0,1-a);this.posArr.set([r.b.x,r.b.y,r.b.z],n*6),this.posArr.set([r.t.x,r.t.y,r.t.z],n*6+3),this.alphaArr[n*2]=o*o,this.alphaArr[n*2+1]=o}const i=this.mesh.geometry;i.setDrawRange(0,Math.max(0,(e-1)*6)),i.getAttribute("position").needsUpdate=!0,i.getAttribute("aAlpha").needsUpdate=!0,this.mesh.visible=e>1}clear(){this.samples.length=0,this.mesh.visible=!1}}const Hi=new Ht;class Dx{constructor(t){this.scene=t,this.sparks=new no(800,eh,!0),this.soft=new no(600,bx,!1),this.petals=new no(700,wx,!1),t.add(this.sparks.points,this.soft.points,this.petals.points),this.bursts=new ih(t,Ex,!0,this.view),this.flat=new ih(t,Tx,!1,this.view)}scene;sparks;soft;petals;bursts;flat;words=new Map;view={pos:new U,k:1};setScale(t,e,i){const n=Math.tan(e*Math.PI/360),r=t/(2*n);this.view.pos.copy(i),this.view.k=2*n*.4,this.sparks.mat.uniforms.uScale.value=r,this.soft.mat.uniforms.uScale.value=r,this.petals.mat.uniforms.uScale.value=r}update(t){this.sparks.update(t),this.soft.update(t),this.petals.update(t),this.bursts.update(t),this.flat.update(t)}clear(){this.sparks.clear(),this.soft.clear(),this.petals.clear(),this.bursts.clear(),this.flat.clear()}sparkBurst(t,e,i,n,r,a,o,c,l=6){Hi.set(r);for(let h=0;h<n;h++){const d=Yt()*Math.PI*2,u=ut(-.6,1),f=a*ut(.4,1);this.sparks.emit(t,e,i,Math.cos(d)*f*Math.sqrt(1-u*u),u*f,Math.sin(d)*f*Math.sqrt(1-u*u),Hi,o*ut(.6,1.2),c*ut(.6,1.1),l,3.5)}}hit(t,e,i,n,r){this.sparkBurst(t,e,i,r?22:12,16774088,r?9:6.5,.16,.35),this.bursts.spawn(t,e,i,16777215,.2,r?1.9:1.2,.16,{alpha:1}),this.bursts.spawn(t,e,i,n,.3,r?2.4:1.6,.22,{alpha:.75}),Hi.set(n);for(let a=0;a<(r?10:5);a++)this.soft.emit(t,e,i,ut(-2,2),ut(0,2.5),ut(-2,2),Hi,ut(.1,.2),ut(.25,.45),5,4)}blocked(t,e,i){this.sparkBurst(t,e,i,16,16757575,7,.13,.4,9),this.bursts.spawn(t,e,i,16765562,.15,.8,.12)}parry(t,e,i){this.sparkBurst(t,e,i,30,12577023,10,.18,.5,4),this.bursts.spawn(t,e,i,16777215,.3,2.6,.2),this.flat.spawn(t,e,i,16777215,.2,3.2,.32,{alpha:.95}),this.flat.spawn(t,e,i,8377599,.2,2.2,.28,{alpha:.8})}guardBreak(t,e,i){this.sparkBurst(t,e,i,26,16742959,8,.16,.5,9),this.bursts.spawn(t,e,i,16747069,.3,2.2,.2),this.flat.spawn(t,e,i,16738858,.2,2.4,.3,{alpha:.85})}dodged(t,e,i){Hi.set(14542591);for(let n=0;n<8;n++)this.soft.emit(t+ut(-.3,.3),e+ut(-.4,.4),i+ut(-.3,.3),ut(-1,1),ut(0,1),ut(-1,1),Hi,.25,.35,0,3)}kill(t,e,i,n){Hi.set(n);const r=new Ht(16777215);for(let a=0;a<46;a++){const o=Yt()*Math.PI*2,c=ut(1.5,5.5);this.petals.emit(t+ut(-.3,.3),e+ut(-.6,.6),i+ut(-.3,.3),Math.cos(o)*c,ut(1,4.5),Math.sin(o)*c,a%3?Hi:r,ut(.14,.24),ut(1.2,2.2),2.2,1.6)}this.flat.spawn(t,e,i,n,.3,3.6,.45,{alpha:.9}),this.bursts.spawn(t,e,i,16777215,.5,3.2,.22),this.word("斬",t,e+.9,i,"#1b1622","#fff")}dust(t,e,i,n=8,r=.6,a=14273716){Hi.set(a);for(let o=0;o<n;o++){const c=Yt()*Math.PI*2;this.soft.emit(t+Math.cos(c)*r,e+.1,i+Math.sin(c)*r,Math.cos(c)*ut(.6,2),ut(.4,1.4),Math.sin(c)*ut(.6,2),Hi,ut(.35,.6),ut(.5,.9),-.3,2.5)}}glint(t,e,i,n,r){this.bursts.spawn(t,e,i,n,.05,r?1.1:.6,r?.35:.22,{map:eh,rot:0})}word(t,e,i,n,r,a){const o=t+r+a;let c=this.words.get(o);c||(c=_l(t,{size:200,w:256,h:256,color:r,stroke:a,strokeW:26,font:'900 200px "Hiragino Mincho ProN","Songti SC","STSong","SimSun",serif'}),this.words.set(o,c)),this.flat.spawn(e,i,n,16777215,.4,1.3,.7,{map:c,rot:ut(-.25,.25),vy:.6,depthTest:!1})}slashMark(t,e,i,n){this.bursts.spawn(t,e,i,n,.6,1.6,.14,{map:Ax})}}const Wr=()=>Rt(14673646,{rim:16777215,rimStrength:.35}),Gi=()=>Rt(3816774),so=()=>Rt(14264138),nh=()=>Rt(2300962);function ro(s,t,e,i,n,r=.12){const a=new cr,o=10,c=y=>-e*y*y,l=[],h=[],d=1-r;for(let y=0;y<=o;y++){const m=y/o*d,p=t*(1-m*.25);l.push([c(m)+p/2,n+m*s]),h.push([c(m)-p/2,n+m*s])}const u=[c(1)-t*.3,n+s];a.moveTo(h[0][0],h[0][1]);for(const y of l)a.lineTo(y[0],y[1]);const f=l[l.length-1];a.quadraticCurveTo(f[0],(f[1]+u[1])/2+s*.02,u[0],u[1]);for(let y=h.length-1;y>=0;y--)a.lineTo(h[y][0],h[y][1]);const g=new As(a,{depth:i,bevelEnabled:!1,curveSegments:6});return g.translate(0,0,-i/2),g.rotateY(Math.PI/2),g}function Ix(){const s=new cr;s.moveTo(.03,.8),s.lineTo(.12,.74),s.quadraticCurveTo(.22,.62,.34,.6),s.quadraticCurveTo(.42,.82,.34,1.06),s.quadraticCurveTo(.22,1.02,.12,.94),s.lineTo(.03,.92),s.lineTo(.03,.8);const t=new As(s,{depth:.035,bevelEnabled:!0,bevelThickness:.008,bevelSize:.006,bevelSegments:1,curveSegments:8});return t.translate(0,0,-.0175),t.rotateY(Math.PI/2),t}function Ux(){const s=new cr;s.moveTo(-.03,.82),s.lineTo(-.16,.86),s.lineTo(-.03,.9);const t=new As(s,{depth:.03,bevelEnabled:!1});return t.translate(0,0,-.015),t.rotateY(Math.PI/2),t}function _u(s,t){const e=new xi,i=Rt(t);let n=new U,r=new U,a=null;switch(s){case"tanto":{e.cyl(nh(),.017,.019,.13,0,-.11,0,8),e.cyl(i,.0195,.0195,.022,0,-.06,0,8),e.cyl(Gi(),.016,.016,.02,0,-.125,0,8),e.add(new Ue(.034,.034,.011,12),Gi(),0,.024,0,0,0,0,1,1,.75),e.add(new Te(.012,.02,.026),so(),0,.04,0),e.addMatrix(ro(.3,.027,.006,.007,.03,.18),Wr(),new oe),n=new U(0,.07,0),r=new U(0,.33,0);break}case"katana":{e.cyl(nh(),.019,.021,.27,0,-.25,0,8);for(let c=0;c<4;c++)e.cyl(i,.0215,.0215,.014,0,-.22+c*.06,0,8);e.cyl(Gi(),.018,.018,.02,0,-.265,0,8),e.add(new Ue(.044,.044,.011,14),Gi(),0,.024,0,0,0,0,1,1,.8),e.add(new Te(.013,.026,.032),so(),0,.044,0),e.addMatrix(ro(.78,.033,.035,.008,.03),Wr(),new oe),n=new U(0,.12,0),r=new U(0,.8,.02),a=new U(0,-.17,0);break}case"naginata":{const c=Rt(6040100);e.cyl(c,.019,.021,1.82,0,-.66,0,8),e.cyl(Gi(),.022,.018,.08,0,-.72,0,8);for(let l=0;l<3;l++)e.cyl(i,.0225,.0225,.03,0,-.42+l*.4,0,8);e.cyl(so(),.024,.024,.05,0,1.12,0,8),e.add(new Ue(.04,.04,.012,12),Gi(),0,1.175,0),e.addMatrix(ro(.56,.05,.07,.009,1.18,.16),Wr(),new oe),n=new U(0,1.25,0),r=new U(0,1.74,.07),a=new U(0,-.42,0);break}case"axe":{const c=Rt(7228211);e.cyl(c,.024,.028,1.2,0,-.2,0,8),e.cyl(i,.03,.03,.16,0,-.1,0,8),e.cyl(i,.03,.03,.05,0,.42,0,8),e.add(new Te(.07,.2,.08),Gi(),0,.86,0),e.addMatrix(Ix(),Gi(),new oe);const l=new cr;l.moveTo(.33,.61),l.quadraticCurveTo(.41,.82,.33,1.05),l.lineTo(.3,1),l.quadraticCurveTo(.36,.82,.3,.66);const h=new As(l,{depth:.05,bevelEnabled:!1});h.translate(0,0,-.025),h.rotateY(Math.PI/2),e.addMatrix(h,Wr(),new oe),e.addMatrix(Ux(),Gi(),new oe),e.add(new yi(.026,.14,6),Gi(),0,1.03,0),n=new U(0,.66,-.3),r=new U(0,1.02,-.36),a=new U(0,-.12,0);break}}return{group:e.build({cast:!0,receive:!1}),trailBase:n,trailTip:r,leftGrip:a}}const Nx=16768196,sh=[2826800,3811874,1909299,4861738,2500142,5978923,2236458,3878719],kx=new U(0,1.56,-.04),Fx=1.12,Ox=new U(.22,1.36,-.01),zx=new U(-.22,1.36,-.01),Ci=new U,ms=new U,ao=new U(0,1,0);function Bx(s,t,e){return fi(128,128,i=>{i.translate(64,58),i.fillStyle="#1b1622",i.beginPath(),i.moveTo(0,-44),i.lineTo(36,0),i.lineTo(0,44),i.lineTo(-36,0),i.closePath(),i.fill(),i.fillStyle=s,i.beginPath(),i.moveTo(0,-36),i.lineTo(28,0),i.lineTo(0,36),i.lineTo(-28,0),i.closePath(),i.fill(),i.fillStyle="#fff",i.font='900 34px "PingFang SC","Microsoft YaHei",sans-serif',i.textAlign="center",i.textBaseline="middle",i.fillText(t,0,2),e&&(i.strokeStyle="#fff",i.lineWidth=4,i.beginPath(),i.moveTo(0,-50),i.lineTo(42,0),i.lineTo(0,50),i.lineTo(-42,0),i.closePath(),i.stroke())},{mip:!1})}class Hx{constructor(t,e,i){this.ch=t,this.g=e,this.friendTo=i;const n=jt[t.team],r=qs(n.color,{rim:16777215,rimStrength:.4}),a=qs(2894650,{rim:n.color,rimStrength:.6}),o=qs(Nx,{rim:16777215,rimStrength:.25}),c=qs(sh[t.id%sh.length],{rim:n.color,rimStrength:.5}),l=Rt(16052714),h=Rt(1775138),d=Rt(n.color);this.mats.push(r,a,o,c),this.root.add(this.fall),this.fall.add(this.body);for(const[B,O]of[[this.legL,-1],[this.legR,1]]){B.position.set(.11*O,.86,0);const Q=new Wt(new Ue(.1,.16,.78,8).translate(0,-.39,0),a);B.add(Q);const W=new Wt(new Te(.12,.08,.24).translate(0,-.82,-.04),h);B.add(W),this.body.add(B)}this.torso.position.set(0,.86,0),this.body.add(this.torso);const u=new Wt(new Ue(.18,.19,.12,10).translate(0,.06,0),h),f=new Wt(new Te(.42,.44,.26).translate(0,.36,0),r),g=new Wt(new Te(.5,.12,.28).translate(0,.52,0),r),y=new Wt(new Te(.1,.32,.02).translate(0,.38,-.131),l),m=new Wt(new Te(.2,.05,.02).translate(0,.54,-.141),l),p=new Wt(new Ue(.07,.07,.02,12).rotateX(Math.PI/2).translate(0,.38,.135),l),S=new Wt(new Ue(.055,.06,.1,8).translate(0,.62,0),o);this.torso.add(u,f,g,y,m,p,S),this.head.position.set(0,.73,0),this.torso.add(this.head);const E=new Wt(new Rn(.145,14,10),o);E.scale.set(1,1.05,1);const x=new Wt(new Rn(.158,14,10,0,Math.PI*2,0,Math.PI*.55),c);x.position.set(0,.02,.012),x.rotation.x=-.25;const T=new Ce;for(let B=0;B<5;B++){const O=new Wt(new yi(.05,.16,5),c),Q=-.9+B*.45;O.position.set(Math.sin(Q)*.1,.1,.09+Math.cos(Q)*.02),O.rotation.set(.9,0,-Q*.6),T.add(O)}const M=new Wt(new yi(.05,.28,6).translate(0,-.14,0),c);M.position.set(0,.05,.15),M.rotation.x=-.5;const A=new Wt(new Ue(.153,.153,.045,14,1,!0),d);A.position.y=.045,A.rotation.x=-.12,this.tails=new Ce,this.tails.position.set(0,.05,.15);for(const B of[-1,1]){const O=new Wt(new Te(.035,.02,.26).translate(0,0,.13),d);O.rotation.y=B*.35,this.tails.add(O)}const v=new Te(.026,.05,.012),b=new Wt(v,h);b.position.set(-.05,0,-.138);const R=new Wt(v,h);R.position.set(.05,0,-.138),this.head.add(E,x,T,M,A,this.tails,b,R);const I=new Ue(.06,.1,1,8).translate(0,.5,0);this.armR=new Wt(I,r),this.armL=new Wt(I,r);const L=new Rn(.055,8,6);this.handR=new Wt(L,o),this.handL=new Wt(L,o),this.body.add(this.armR,this.armL,this.handR,this.handL,this.weaponHolder),this.root.traverse(B=>{B.isMesh&&(B.castShadow=!0,B.receiveShadow=!0)}),this.trail=new xu(n.color),e.scene.add(this.trail.mesh);const P=t.team===i;this.marker=new Bn(new wn({map:Bx(n.css,P?"友":n.short,P),depthTest:!P,depthWrite:!1,transparent:!0})),this.marker.scale.set(.42,.42,1),this.marker.position.y=2.18,this.marker.renderOrder=10;const D=_l(`${n.short}·${t.name}`,{size:44,w:256,h:64,color:"#fff",stroke:"#1b1622",strokeW:9});this.nameTag=new Bn(new wn({map:D,depthTest:!P,depthWrite:!1,transparent:!0})),this.nameTag.scale.set(.9,.225,1),this.nameTag.position.y=2.46,this.nameTag.renderOrder=10,this.hpBg=new Bn(new wn({color:1775138,depthTest:!P,depthWrite:!1,transparent:!0,opacity:.85})),this.hpBg.scale.set(.62,.07,1),this.hpBg.position.y=1.98,this.hpFill=new Bn(new wn({color:n.color,depthTest:!P,depthWrite:!1,transparent:!0})),this.hpFill.scale.set(.58,.045,1),this.hpFill.position.y=1.98,this.hpFill.renderOrder=11,this.hpBg.renderOrder=10,this.aura=new Bn(new wn({map:Gx,color:16734751,transparent:!0,depthWrite:!1,blending:Wn,opacity:0})),this.aura.scale.set(1.8,2.4,1),this.aura.position.y=1.1;const N=new Ce;N.add(this.marker,this.nameTag,this.hpBg,this.hpFill,this.aura),sn(N),this.root.add(N),e.scene.add(this.root)}ch;g;root=new Ce;fall=new Ce;body=new Ce;torso=new Ce;head=new Ce;legL=new Ce;legR=new Ce;armR;armL;handR;handL;tails;weaponHolder=new Ce;weapon=null;weaponId="";tracker=new gu;trail;marker;nameTag;hpBg;hpFill;mats=[];walkPhase=0;lastSeq=-1;lastState="";deadShown=!1;petalsDone=!1;lean=0;side=0;aura;friendTo;setWeapon(t){this.weapon&&(this.weaponHolder.remove(this.weapon.group),this.weapon.group.traverse(e=>e.geometry?.dispose())),this.weapon=_u(t,jt[this.ch.team].color),this.weapon.group.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.weaponHolder.add(this.weapon.group),this.weaponId=t}orientArm(t,e,i){Ci.subVectors(i,e);const n=Math.max(.05,Ci.length());Ci.divideScalar(n),t.position.copy(e),t.quaternion.setFromUnitVectors(ao,Ci),t.scale.set(1,n,1)}update(t,e){const i=this.ch,n=this.g.time;if(i.weapon!==this.weaponId&&this.setWeapon(i.weapon),this.root.position.copy(i.pos),this.root.rotation.y=i.yaw,!i.alive){const N=n-i.deathTime;this.deadShown||(this.deadShown=!0,this.petalsDone=!1,this.trail.clear()),this.fall.rotation.x=Math.min(1,N/.45)*1.45,this.fall.position.y=Math.min(1,N/.45)*.1;const B=te((N-1.3)/.4,0,1);this.body.scale.setScalar(1-B*.98),this.body.visible=B<1,N>1.3&&!this.petalsDone&&(this.petalsDone=!0,this.g.fx.kill(i.pos.x,i.pos.y+.5,i.pos.z,jt[i.team].color)),this.marker.visible=this.nameTag.visible=this.hpBg.visible=this.hpFill.visible=!1,this.aura.material.opacity=0;for(const O of this.mats)O.emissive.setRGB(0,0,0);return}this.deadShown&&(this.deadShown=!1,this.fall.rotation.x=0,this.fall.position.y=0,this.body.scale.setScalar(1),this.body.visible=!0);const r=i.speed2D,a=te(r/5.5,0,1.3);this.walkPhase+=r*t*2.6;const o=Math.sin(this.walkPhase)*.62*Math.min(1,a);this.legL.rotation.x=o,this.legR.rotation.x=-o,this.body.position.y=Math.abs(Math.cos(this.walkPhase))*.045*Math.min(1,a);const c=i.vx*i.fwdX+i.vz*i.fwdZ,l=i.vx*Math.cos(i.yaw)-i.vz*Math.sin(i.yaw);let h=-te(c/6,-1,1)*.14,d=te(l/6,-1,1)*.12;i.state==="flinch"&&(h=.28),i.state==="stagger"&&(h=.42),i.state==="dodge"&&(h=-.25,d*=2),this.lean=ei(this.lean,h,14,t),this.side=ei(this.side,d,14,t),this.body.rotation.x=this.lean,this.body.rotation.z=-this.side,this.tails.rotation.x=.25+Math.sin(n*9+i.id)*.12+a*.5;const u=this.tracker.update(i,t);ms.copy(u.pos).multiplyScalar(Fx).add(kx);const f=te(-u.pos.x*1.2,-.55,.55);this.torso.rotation.y=ei(this.torso.rotation.y,f,18,t),this.weaponHolder.position.copy(ms),this.weaponHolder.quaternion.copy(u.quat),this.handR.position.copy(ms);const g=Ci.copy(Ox).applyAxisAngle(ao,this.torso.rotation.y).clone();this.orientArm(this.armR,g,ms);const y=Ci.copy(zx).applyAxisAngle(ao,this.torso.rotation.y).clone();let m;if(this.weapon?.leftGrip?m=this.weapon.leftGrip.clone().applyQuaternion(u.quat).add(ms):(m=new U(-.26,1.12+Math.sin(this.walkPhase)*.03,-.22),i.state==="block"&&m.set(-.2,1.42,-.32)),this.handL.position.copy(m),this.orientArm(this.armL,y,m),this.weapon){if(i.state==="active"){this.root.updateMatrixWorld(!0);const N=this.weaponHolder.matrixWorld;this.trail.push(Ci.copy(this.weapon.trailBase).applyMatrix4(N),ms.copy(this.weapon.trailTip).applyMatrix4(N),n)}this.trail.update(n)}i.attackSeq!==this.lastSeq&&i.state==="windup"&&(this.lastSeq=i.attackSeq,this.weapon&&(this.root.updateMatrixWorld(!0),Ci.copy(this.weapon.trailTip).applyMatrix4(this.weaponHolder.matrixWorld),this.g.fx.glint(Ci.x,Ci.y,Ci.z,i.attack?.weight==="heavy"?16738858:16777215,i.attack?.weight==="heavy")));const S=i.state==="windup"&&i.attack?.hyper?te(i.stateT/i.stateDur,0,1)*.55:0;this.aura.material.opacity=ei(this.aura.material.opacity,S,20,t),this.lastState=i.state;const E=i.flashT>0?1:0,x=i.state==="stagger"?.25+.25*Math.sin(n*40):0;for(const N of this.mats)N.emissive.setRGB(E+x,E+x*.6,E);const T=e.position.distanceTo(this.root.position),M=i.team===this.friendTo,A=i.isPlayer&&this.g.player.firstPerson;this.marker.visible=!A;const v=M||this.g.match.revealed&&this.g.match.phase==="combat",b=this.marker.material;b.depthTest===v&&(b.depthTest=!v,b.needsUpdate=!0),this.nameTag.visible=!A&&(M||T<14);const R=n-i.lastHurtTime<4,I=!A&&(M||R||T<7);this.hpBg.visible=this.hpFill.visible=I;const L=Math.max(1,T/14),P=.55+.45*te((T-1.2)/3.5,0,1),D=L*P;if(this.marker.scale.set(.42*D,.42*D,1),this.marker.position.y=2.18+(L-1)*.2,this.nameTag.scale.set(.9*P,.225*P,1),this.hpBg.scale.set(.62*P,.07*P,1),I){const N=te(i.hp/fe.maxHp,.02,1);this.hpFill.scale.set(.58*N*P,.045*P,1),this.hpFill.center.set(.5/N,.5)}}setVisible(t){this.root.visible=t,this.trail.mesh.visible=t&&this.trail.mesh.visible}dispose(){this.g.scene.remove(this.root),this.g.scene.remove(this.trail.mesh)}}const Gx=fi(128,128,s=>{const t=s.createRadialGradient(64,70,4,64,64,62);t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=t,s.fillRect(0,0,128,128)},{mip:!1}),Vx=new U(.34,-.66,.16),Wx=new U(-.34,-.66,.16),Xx=new U(0,1,0),Xr=new U,oo=new oe,$x=new ci,qx=new U(1,1,1);class Zx{scene=new dl;camera=new _i(60,1,.05,900);root=new Ce;holder=new Ce;weapon=null;weaponId="";armR;armL;handR;handL;mallet;tracker=new gu;trail;sun;bobPhase=0;swayX=0;swayY=0;buildBlend=0;tapT=1;lastActiveT=-1;lastSeq=-1;team=0;kick=0;tmpPose={pos:new U,quat:new ci};constructor(t){this.team=t;const e=jt[t].color;this.scene.add(this.root),this.root.add(this.holder);const i=Rt(e,{rim:16777215,rimStrength:.35}),n=Rt(16768196),r=new Ue(.045,.095,1,10).translate(0,.5,0);this.armR=new Wt(r,i),this.armL=new Wt(r,i);const a=new Te(.064,.072,.088);this.handR=new Wt(a,n),this.handL=new Wt(a,n);const o=Rt(15854818),c=new Ue(.041,.041,.045,10);for(const h of[this.handR,this.handL]){const d=new Wt(c,o);d.rotation.x=Math.PI/2,d.position.z=.07,h.add(d)}this.root.add(this.armR,this.armL,this.handR,this.handL);const l=new xi;l.cyl(Rt(8212791),.016,.018,.42,0,-.08,0,8),l.add(new Ue(.06,.06,.2,10),Rt(13146726),0,.36,0,0,0,Math.PI/2),l.cyl(Rt(e),.0185,.0185,.05,0,.02,0,8),this.mallet=l.build({cast:!1,receive:!1}),this.root.add(this.mallet),this.trail=new xu(e),this.trail.life=.14,this.root.add(this.trail.mesh),this.scene.add(new Jh(13098239,14203024,1.15)),this.sun=new jh(16773590,2.1),this.scene.add(this.sun,this.sun.target)}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}tap(){this.tapT=0}hitKick(t){this.kick=Math.max(this.kick,t)}setWeapon(t){this.weapon&&this.holder.remove(this.weapon.group),this.weapon=_u(t,jt[this.team].color),this.holder.add(this.weapon.group),this.weaponId=t}orientArm(t,e,i){Xr.subVectors(i,e);const n=Math.max(.05,Xr.length());Xr.divideScalar(n),t.position.copy(e),t.quaternion.setFromUnitVectors(Xx,Xr),t.scale.set(1,n,1)}update(t,e,i,n){if(this.root.visible=n.visible,!n.visible){this.trail.clear();return}e.weapon!==this.weaponId&&this.setWeapon(e.weapon),this.sun.position.copy(n.sunDir).applyQuaternion($x.copy(n.camQuat).invert()).multiplyScalar(5),this.buildBlend=ei(this.buildBlend,n.build?1:0,10,t);const r=this.tracker.update(e,t),a=te(e.speed2D/5.5,0,1.3);this.bobPhase+=e.speed2D*t*2.2;const o=Math.sin(this.bobPhase)*.012*a,c=-Math.abs(Math.cos(this.bobPhase))*.014*a;this.swayX=ei(this.swayX,te(-n.lookDX*.0016,-.06,.06),10,t),this.swayY=ei(this.swayY,te(n.lookDY*.0016,-.05,.05),10,t),this.kick=ei(this.kick,0,14,t),this.root.position.set(o+this.swayX*.6,c-this.swayY*.5-this.kick*.03,this.kick*.04),this.root.rotation.set(this.swayY*.6,this.swayX*1.2,0);const l=Li.inOutQuad(this.buildBlend);this.holder.position.copy(r.pos),this.holder.position.y-=l*.7,this.holder.quaternion.copy(r.quat),this.weapon&&(this.weapon.group.visible=l<.95),this.tapT=Math.min(1,this.tapT+t/.28);const h=Math.sin(this.tapT*Math.PI)*(1-this.tapT);this.mallet.visible=l>.05,this.mallet.position.set(.3,-.36-(1-l)*.6-h*.06,-.58),this.mallet.rotation.set(-.35-h*1.4,.2,-.3),this.mallet.scale.setScalar(.62);const d=l>.5?this.mallet.position:this.holder.position;this.handR.position.copy(d),this.handR.quaternion.copy(l>.5?this.mallet.quaternion:this.holder.quaternion),this.orientArm(this.armR,Vx,d);let u;if(l<.5&&this.weapon?.leftGrip?u=this.weapon.leftGrip.clone().applyQuaternion(r.quat).add(this.holder.position):(u=new U(-.3,-.42+Math.sin(this.bobPhase)*.01-l*.3,-.42),e.state==="block"&&l<.5&&u.set(-.2,-.27,-.5)),this.handL.position.copy(u),this.handL.quaternion.copy(this.holder.quaternion),this.orientArm(this.armL,Wx,u),this.weapon&&e.state==="active"&&e.attack){this.lastSeq!==e.attackSeq&&(this.lastSeq=e.attackSeq,this.lastActiveT=0);const f=te(e.stateT/e.stateDur,0,1),g=4;for(let y=1;y<=g;y++){const m=this.lastActiveT+(f-this.lastActiveT)*y/g;mu(e.attack.swing,Li.inOutQuad(m),this.tmpPose),oo.compose(this.tmpPose.pos,this.tmpPose.quat,qx);const p=this.weapon.trailBase.clone().applyMatrix4(oo),S=this.weapon.trailTip.clone().applyMatrix4(oo);this.trail.push(p,S,i-t*(g-y)/g)}this.lastActiveT=f}this.trail.update(i)}}const Yx=[0,2,5,7,9],Kx=[0,1,5,7,8];function rh(s){return 440*Math.pow(2,(s-69)/12)}class Jx{ctx=null;master;sfx;music;noiseBuf;listener={x:0,z:0,yaw:0};vol={master:.8,music:.5};musicMode="off";nextNoteT=0;step=0;bar=0;timerId=0;lastFoot=0;recent=new Map;init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const i=e.createDynamicsCompressor();i.threshold.value=-14,i.knee.value=10,i.ratio.value=4,i.attack.value=.003,i.release.value=.2,i.connect(e.destination),this.master=e.createGain(),this.master.connect(i),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master),this.applyVolume();const n=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,n,e.sampleRate);const r=this.noiseBuf.getChannelData(0);for(let a=0;a<n;a++)r[a]=Math.random()*2-1;this.timerId=window.setInterval(()=>this.schedule(),30)}setVolume(t,e){this.vol.master=t,this.vol.music=e,this.applyVolume()}applyVolume(){this.ctx&&(this.master.gain.value=this.vol.master,this.music.gain.value=this.vol.music*.55)}setListener(t,e,i){this.listener.x=t,this.listener.z=e,this.listener.yaw=i}throttle(t,e){if(!this.ctx)return!1;const i=this.ctx.currentTime,n=this.recent.get(t)??-1;return i-n<e?!1:(this.recent.set(t,i),!0)}out(t,e,i=1,n=42){const r=this.ctx;if(!r)return null;const a=r.createGain();let o=i,c=0;if(t!==void 0&&e!==void 0){const l=t-this.listener.x,h=e-this.listener.z,d=Math.hypot(l,h);if(d>n)return null;if(o*=1/(1+d*.16)*(1-d/n),d>.5){const u=Math.cos(this.listener.yaw),f=-Math.sin(this.listener.yaw);c=Math.max(-1,Math.min(1,(l*u+h*f)/d*.85))}}if(a.gain.value=o,c!==0&&r.createStereoPanner){const l=r.createStereoPanner();l.pan.value=c,a.connect(l),l.connect(this.sfx)}else a.connect(this.sfx);return a}noise(t,e,i,n){const r=this.ctx,a=r.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0,a.playbackRate.value=n.rate??1;const o=r.createBiquadFilter();o.type=n.type??"bandpass",o.Q.value=n.q??1,o.frequency.setValueAtTime(n.f0,e),n.f1!==void 0&&o.frequency.exponentialRampToValueAtTime(Math.max(20,n.f1),e+i);const c=r.createGain(),l=n.attack??.004;c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(n.gain,e+l),c.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(o),o.connect(c),c.connect(t),a.start(e,Math.random()*1.5),a.stop(e+i+.05)}tone(t,e,i){const n=this.ctx,r=n.createOscillator();r.type=i.type??"sine",r.frequency.setValueAtTime(i.f0,e),i.f1!==void 0&&r.frequency.exponentialRampToValueAtTime(Math.max(20,i.f1),e+(i.bendT??i.dur)),i.detune&&(r.detune.value=i.detune);const a=n.createGain(),o=i.attack??.004;a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(i.gain,e+o),a.gain.exponentialRampToValueAtTime(1e-4,e+i.dur),r.connect(a),a.connect(t),r.start(e),r.stop(e+i.dur+.05)}get now(){return this.ctx?this.ctx.currentTime:0}windup(t,e,i){const n=this.out(e,i,t?.9:.35,26);if(!n)return;const r=this.now;t?(this.noise(n,r,.5,{type:"lowpass",f0:300,f1:1400,q:2,gain:.5,attack:.3}),this.tone(n,r,{type:"sawtooth",f0:70,f1:120,dur:.55,gain:.08,attack:.3})):this.noise(n,r,.08,{type:"highpass",f0:5e3,gain:.12})}swing(t,e,i,n){const r=this.out(e,i,n?.75:1,30);if(!r)return;const a=this.now,o=t==="heavy"?.32:t==="mid"?.2:.13,c=t==="heavy"?500:t==="mid"?900:1400;this.noise(r,a,o,{type:"bandpass",f0:c,f1:c*3.2,q:1.6,gain:t==="heavy"?.9:.6,attack:o*.35}),this.noise(r,a+o*.25,o*.8,{type:"bandpass",f0:c*3,f1:c*1.2,q:3,gain:.25,attack:.02})}hit(t,e,i,n){const r=this.out(e,i,n?1.1:.85,40);if(!r)return;const a=this.now;this.tone(r,a,{f0:t?150:210,f1:45,dur:t?.32:.2,gain:t?1:.75}),this.noise(r,a,t?.22:.12,{type:"bandpass",f0:2600,f1:700,q:.9,gain:t?.9:.7}),this.noise(r,a,.05,{type:"highpass",f0:6e3,gain:.35}),n&&this.tone(r,a+.01,{type:"triangle",f0:1760,f1:1500,dur:.12,gain:.12})}blocked(t,e){const i=this.out(t,e,.9,40);if(!i)return;const n=this.now;for(const[r,a]of[[1180,.18],[1715,.14],[2630,.1],[3900,.06]])this.tone(i,n,{type:"square",f0:r,f1:r*.98,dur:.22,gain:a*.5});this.noise(i,n,.08,{type:"highpass",f0:3e3,gain:.5})}parry(t,e){const i=this.out(t,e,1.1,46);if(!i)return;const n=this.now;for(const[r,a,o]of[[1568,.3,.9],[2349,.22,.75],[3136,.14,.6],[4699,.08,.45]])this.tone(i,n,{f0:r,dur:o,gain:a});this.noise(i,n,.1,{type:"highpass",f0:4e3,gain:.6}),this.noise(i,n+.02,.35,{type:"bandpass",f0:3e3,f1:800,q:2,gain:.25})}guardBreak(t,e){const i=this.out(t,e,1,40);if(!i)return;const n=this.now;this.tone(i,n,{type:"sawtooth",f0:220,f1:60,dur:.35,gain:.35}),this.noise(i,n,.3,{type:"lowpass",f0:2400,f1:300,q:1,gain:.9}),this.blocked(t,e)}dodge(t,e,i){const n=this.out(t,e,i?.5:.6,22);n&&this.noise(n,this.now,.18,{type:"bandpass",f0:700,f1:2400,q:1.2,gain:.5,attack:.05})}hurt(){const t=this.out(void 0,void 0,.9);if(!t)return;const e=this.now;this.tone(t,e,{f0:95,f1:40,dur:.35,gain:.9}),this.noise(t,e,.25,{type:"lowpass",f0:900,f1:200,gain:.6})}kill(t,e,i){const n=this.out(t,e,i?1.2:.8,50);if(!n)return;const r=this.now;this.taiko(n,r,1.2,62),this.noise(n,r,.5,{type:"bandpass",f0:3500,f1:600,q:1.5,gain:.5,attack:.01}),i&&(this.tone(n,r+.05,{f0:2093,dur:.6,gain:.18}),this.tone(n,r+.05,{f0:3136,dur:.45,gain:.1}))}death(){const t=this.out(void 0,void 0,1);if(!t)return;const e=this.now;this.taiko(t,e,1.4,52),this.tone(t,e+.1,{type:"triangle",f0:392,f1:196,dur:1.4,gain:.2,bendT:1.2})}footstep(t,e,i,n){if(i){const o=this.now;if(o-this.lastFoot<.12)return;this.lastFoot=o}const r=this.out(t,e,i?.22:n?.5:.32,20);if(!r)return;const a=this.now;this.noise(r,a,.07,{type:"bandpass",f0:900+Math.random()*500,q:.8,gain:.5,rate:.7}),this.tone(r,a,{f0:90,f1:60,dur:.06,gain:.2})}place(t,e){const i=this.out(t,e,.9,40);if(!i)return;const n=this.now;this.tone(i,n,{f0:180,f1:90,dur:.18,gain:.7}),this.noise(i,n,.1,{type:"bandpass",f0:1200,q:1.5,gain:.6}),this.tone(i,n+.1,{type:"triangle",f0:523,dur:.12,gain:.08})}remove(t,e){const i=this.out(t,e,.8,40);if(!i)return;const n=this.now;this.noise(i,n,.22,{type:"bandpass",f0:400,f1:2e3,q:1,gain:.5,attack:.08}),this.tone(i,n,{type:"triangle",f0:330,f1:660,dur:.15,gain:.1})}denied(){if(!this.throttle("deny",.12))return;const t=this.out(void 0,void 0,.5);if(!t)return;const e=this.now;this.tone(t,e,{type:"square",f0:180,dur:.09,gain:.12}),this.tone(t,e+.1,{type:"square",f0:140,dur:.12,gain:.12})}buy(t){if(!t)return this.denied();const e=this.out(void 0,void 0,.7);if(!e)return;const i=this.now;this.tone(e,i,{type:"triangle",f0:1318,dur:.12,gain:.25}),this.tone(e,i+.07,{type:"triangle",f0:1976,dur:.3,gain:.25}),this.noise(e,i,.05,{type:"highpass",f0:6e3,gain:.2})}ui(){if(!this.throttle("ui",.03))return;const t=this.out(void 0,void 0,.35);t&&this.tone(t,this.now,{type:"triangle",f0:880,f1:1100,dur:.05,gain:.2})}tick(t){const e=this.out(void 0,void 0,t?.6:.35);e&&this.tone(e,this.now,{type:"sine",f0:t?1200:900,dur:.08,gain:.3})}phase(t){const e=this.out(void 0,void 0,.9);if(!e)return;const i=this.now;switch(t){case"combat":this.taiko(e,i,1.2,70),this.taiko(e,i+.22,1,66),this.taiko(e,i+.44,1.4,58),this.flute(e,i+.45,74,.7,.25);break;case"build":case"midgame":this.gong(e,i,.5),this.koto(e,i+.1,62,.4),this.koto(e,i+.25,67,.4),this.koto(e,i+.4,69,.4);break;case"lock":this.ka(e,i,.6),this.ka(e,i+.12,.6);break;case"swap":this.gong(e,i,.6),this.noise(e,i,1.6,{type:"bandpass",f0:300,f1:3e3,q:1,gain:.25,attack:1.2});break;case"buy":this.koto(e,i,69,.35),this.koto(e,i+.12,74,.35);break;case"reveal":this.gong(e,i,.45),this.flute(e,i,81,.6,.2);break;case"ring":this.taiko(e,i,1.2,55),this.tone(e,i,{type:"sawtooth",f0:110,f1:55,dur:1.2,gain:.08});break;case"win":[62,66,69,74].forEach((n,r)=>this.koto(e,i+r*.1,n,.45)),this.taiko(e,i+.4,1.1,66);break;case"lose":[69,65,62].forEach((n,r)=>this.koto(e,i+r*.16,n,.4));break;case"draw":[67,67].forEach((n,r)=>this.koto(e,i+r*.2,n,.35));break;case"match":this.gong(e,i,.8),[62,66,69,74,78].forEach((n,r)=>this.koto(e,i+.1+r*.09,n,.45)),this.taiko(e,i+.6,1.3,60);break}}koto(t,e,i,n){const r=rh(i);this.tone(t,e,{type:"triangle",f0:r*1.01,f1:r,dur:1.3,gain:n*.5,bendT:.04}),this.tone(t,e,{type:"sine",f0:r*2,dur:.6,gain:n*.25}),this.tone(t,e,{type:"sine",f0:r*3.01,dur:.25,gain:n*.12}),this.noise(t,e,.03,{type:"highpass",f0:3e3,gain:n*.15})}taiko(t,e,i,n=64){this.tone(t,e,{f0:n*1.9,f1:n,dur:.5,gain:i*.8,bendT:.12}),this.noise(t,e,.16,{type:"lowpass",f0:700,f1:120,gain:i*.6})}ka(t,e,i){this.noise(t,e,.04,{type:"bandpass",f0:2500,q:3,gain:i*.5}),this.tone(t,e,{type:"square",f0:900,dur:.03,gain:i*.05})}gong(t,e,i){for(const[n,r,a]of[[98,.5,2.4],[147,.3,2],[196.5,.22,1.6],[262,.12,1.2],[393,.06,.9]])this.tone(t,e,{f0:n*1.02,f1:n,dur:a,gain:i*r,attack:.01,bendT:.5})}flute(t,e,i,n,r){const a=this.ctx,o=rh(i),c=a.createOscillator();c.type="sine",c.frequency.setValueAtTime(o*.97,e),c.frequency.exponentialRampToValueAtTime(o,e+.12);const l=a.createOscillator();l.frequency.value=5.2;const h=a.createGain();h.gain.value=o*.012,l.connect(h),h.connect(c.frequency);const d=a.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(r,e+.1),d.gain.setValueAtTime(r,e+n*.6),d.gain.exponentialRampToValueAtTime(1e-4,e+n),c.connect(d),d.connect(t),c.start(e),l.start(e),c.stop(e+n+.05),l.stop(e+n+.05),this.noise(t,e,n,{type:"bandpass",f0:o*2,q:2,gain:r*.15,attack:.08})}setMusic(t){t!==this.musicMode&&(this.musicMode=t,this.step=0,this.ctx&&(this.nextNoteT=this.ctx.currentTime+.1))}schedule(){const t=this.ctx;if(!t||this.musicMode==="off"||t.state!=="running")return;const e=this.musicMode==="combat",n=60/(e?118:84)/4;for(this.nextNoteT<t.currentTime-.2&&(this.nextNoteT=t.currentTime+.05);this.nextNoteT<t.currentTime+.12;)this.playStep(this.nextNoteT,e),this.nextNoteT+=n,this.step=(this.step+1)%16,this.step===0&&this.bar++}playStep(t,e){const i=this.music,n=this.step,r=e?Kx:Yx,o=(e?[50,50,48,53]:[62,57,59,55])[this.bar%4],c=l=>o+r[(l%5+5)%5]+12*Math.floor(l/5);if(e)(n===0||n===6||n===10)&&this.taiko(i,t,n===0?.55:.4,62),(n===4||n===12)&&this.ka(i,t,.5),n===14&&this.bar%2===1&&this.taiko(i,t,.35,70),n%2===0&&Math.random()<.55&&this.koto(i,t,c(5+Math.floor(Math.random()*6)),.18),n===0&&this.koto(i,t,c(0)-12,.25),n===8&&this.bar%4===3&&this.flute(i,t,c(10),.9,.08);else{const l=[0,2,4,5,7,5,4,2];if(n%2===0){const h=l[(n/2+this.bar)%l.length];Math.random()<.85&&this.koto(i,t,c(h)-12,.2)}n===0&&this.koto(i,t,o-24,.22),n===0&&this.bar%4===2&&this.flute(i,t,c(7),2.2,.07),n===12&&this.bar%2===0&&this.ka(i,t,.12)}}dispose(){this.timerId&&clearInterval(this.timerId)}}const tn=new U,Qx={low:'<svg viewBox="0 0 44 34"><rect x="4" y="20" width="36" height="9" fill="#b8afa2" stroke="#1b1622" stroke-width="2"/><rect x="2" y="17" width="40" height="4" fill="#46506a" stroke="#1b1622" stroke-width="2"/></svg>',high:'<svg viewBox="0 0 44 34"><rect x="5" y="7" width="34" height="23" fill="#f6f0e4" stroke="#1b1622" stroke-width="2"/><rect x="2" y="3" width="40" height="5" fill="#46506a" stroke="#1b1622" stroke-width="2"/><rect x="20" y="8" width="3" height="22" fill="#4a3125"/></svg>',crate:'<svg viewBox="0 0 44 34"><rect x="9" y="8" width="26" height="22" fill="#c89a66" stroke="#1b1622" stroke-width="2"/><path d="M9 8 L35 30 M35 8 L9 30" stroke="#7d5137" stroke-width="2"/></svg>',pillar:'<svg viewBox="0 0 44 34"><rect x="17" y="4" width="10" height="27" fill="#bdb4a7" stroke="#1b1622" stroke-width="2"/><rect x="15" y="3" width="14" height="4" fill="#8e8578" stroke="#1b1622" stroke-width="1.5"/></svg>',corner:'<svg viewBox="0 0 44 34"><path d="M6 4 H38 V11 H13 V31 H6 Z" fill="#f7ecd4" stroke="#1b1622" stroke-width="2"/></svg>'};class jx{constructor(t){this.g=t,Tn.forEach((e,i)=>{const n=ze[e],r=Os("div","pc",`<kbd>${i+1}</kbd><span class="pcost">${n.cost}</span>${Qx[e]}<div class="pn">${n.name}</div>`);this.buildBar.appendChild(r),this.pieceEls.push(r)}),this.buildKeys.innerHTML="<kbd>左键</kbd> 放置 · <kbd>R</kbd> 旋转 · <kbd>1-5</kbd>/滚轮 选择 · <kbd>右键</kbd>/<kbd>X</kbd> 删除并退还 · <kbd>Z</kbd> 撤销 · <kbd>F</kbd> 队友补全 · <kbd>Enter</kbd> 准备"}g;root=yt("hud");scores=yt("scores");phaseName=yt("phaseName");timer=yt("timer");roundInfo=yt("roundInfo");targetInfo=yt("targetInfo");ticker=yt("ticker");killfeed=yt("killfeed");mate=yt("mate");vitals=yt("vitals");hpNum=yt("hpNum");hpFill=yt("hpFill");hpGhost=yt("hpGhost");armorRow=yt("armorRow");armorFill=yt("armorFill");armorNum=yt("armorNum");guardRow=yt("guardRow");guardFill=yt("guardFill");weaponName=yt("weaponName");weaponTraits=yt("weaponTraits");ctrlHint=yt("ctrlHint");moneyBox=yt("moneyBox");money=yt("money");moneyDelta=yt("moneyDelta");crosshair=yt("crosshair");guardRing=yt("guardRing");hitmarker=yt("hitmarker");dmgdir=yt("dmgdir");floaterLayer=yt("floaters");waypoint=yt("waypoint");buildHud=yt("buildHud");buildStatus=yt("buildStatus");buildMsg=yt("buildMsg");buildBar=yt("buildBar");buildInfo=yt("buildInfo");buildKeys=yt("buildKeys");spectate=yt("spectate");toasts=yt("toasts");bannerEl=yt("banner");scoreboard=yt("scoreboard");resume=yt("resume");floaters=[];dmgDirs=[];hitT=9;hitLife=.25;bannerT=0;moneyShown=-1;moneyDeltaT=0;keys={};pieceEls=[];panelTimers=new Map;sbOpen=!1;show(t){this.root.classList.toggle("hidden",!t)}reset(){this.killfeed.innerHTML="",this.floaterLayer.innerHTML="",this.floaters=[],this.dmgDirs.forEach(t=>t.el.remove()),this.dmgDirs=[],this.toasts.innerHTML="",this.keys={},this.moneyShown=-1;for(const t of["swapPanel","roundPanel","midPanel"])this.hidePanel(t);this.bannerEl.classList.remove("show"),this.bannerEl.style.opacity="0"}setHTML(t,e,i){this.keys[e]!==i&&(this.keys[e]=i,t.innerHTML=i)}update(t){const e=this.g,i=e.match,n=e.player.ch,r=i.phase,a=Math.max(...i.teams.map(L=>L.score)),o=i.teams.map(L=>`${L.score}:${L.members.map(P=>P.alive?1:0).join("")}`).join("|")+i.target;this.keys.scores!==o&&(this.keys.scores=o,this.scores.innerHTML=i.teams.map(L=>{const P=jt[L.id],D=L.members.map(B=>`<i class="${B.alive?"":"dead"}"></i>`).join(""),N=L.score>0&&L.score===a?`<span class="lead" style="width:${L.score/i.target*100}%"></span>`:`<span class="lead" style="width:${L.score/i.target*100}%;opacity:.45"></span>`;return`<div class="sc ${L.id===Qt?"me":""}" style="--c:${P.css}"><span class="tn">${P.short}</span><span class="pts">${L.score}</span><span class="dots">${D}</span>${L.id===Qt?'<span class="meTag">你</span>':""}${N}</div>`}).join(""));const c={build:i.buildIndex>0?"中场重建":"建造阶段",lock:"锁定检查",swap:"随机换区",buy:"准备阶段",combat:"战斗",roundEnd:"回合结束",matchEnd:"比赛结束",menu:""};this.phaseName.textContent=c[r]??"";const l=r==="build"||r==="buy"||r==="combat"||r==="roundEnd";this.timer.textContent=l?hu(i.timer):r==="swap"?"换区":r==="lock"?"锁定":"—",this.timer.classList.toggle("warn",r==="combat"&&i.timer<=ne.revealAt&&i.timer>ne.ringAt),this.timer.classList.toggle("danger",r==="combat"&&i.timer<=ne.ringAt||r!=="combat"&&l&&i.timer<=5&&r!=="roundEnd"),this.roundInfo.textContent=i.round>0?`第 ${i.round} 回合 · ${i.mode.name}`:i.mode.name;const h=i.mode.midgameAt>0?i.midgameDone?"<br>已中场重建":`<br>${i.mode.midgameAt} 分时中场重建`:"<br>只建造一次";this.setHTML(this.targetInfo,"target",`先到 <b>${i.target}</b> 分${h}`);let d="",u=!1;if(r==="combat")if(i.ring.active){const L=n.alive&&Math.hypot(n.pos.x,n.pos.z)>i.ring.r;d=`结界收缩中 · 半径 ${i.ring.r.toFixed(0)} m · 圈外每秒 -${ne.ringDps} HP${L?" · 你在圈外！快回中央":""}`,u=!0}else i.revealed?d=`全员位置已暴露 · 剩 ${ne.ringAt} 秒时结界向中央高台收缩`:d=`防躲藏：剩 ${ne.revealAt} 秒全员显形 · 剩 ${ne.ringAt} 秒结界收缩 · 超时仍有多队存活判平局（不加分）`;else r==="buy"?d="按 B 打开军械架购买 · Enter 准备就绪 · 开战前出生台结界不会解除":r==="build"&&(d=`只能在本队区域建造 · 红色斜线为保留区 · 不能封死出生点通路 · 预算 ${ti.budget} 点各队相同`);this.ticker.textContent=d,this.ticker.classList.toggle("alert",u);const f=i.teams[Qt].members.find(L=>L!==n);if(f){const L=Math.hypot(f.pos.x-n.pos.x,f.pos.z-n.pos.z),P=Math.max(0,Math.round(f.hp)),D=f.alive?r==="build"?"跟随你 · 不会改动你的构件":`${Ee[f.weapon].name}${f.armor>0?" · 甲"+Math.round(f.armor):""} · ${L.toFixed(0)} m`:"阵亡";this.setHTML(this.mate,"mate",`<div class="mn">队友 ${f.name}</div><div class="ms">${D}</div><div class="bar small"><div style="width:${f.alive?P:0}%;background:${jt[Qt].css}"></div></div>`),this.mate.classList.toggle("dead",!f.alive)}const g=n.alive;if(this.vitals.style.display=g&&r!=="build"?"":"none",g){const L=Math.max(0,Math.ceil(n.hp));this.hpNum.textContent=String(L),this.hpFill.style.width=`${L/fe.maxHp*100}%`,this.hpGhost.style.width=`${L/fe.maxHp*100}%`,this.hpFill.classList.toggle("low",L<=35),this.armorRow.style.display=n.armor>0?"":"none",this.armorFill.style.width=`${n.armor/40*100}%`,this.armorNum.textContent=String(Math.ceil(n.armor)),this.guardRow.style.display=n.guard<99.5?"":"none",this.guardFill.style.width=`${n.guard}%`;const P=Ee[n.weapon];this.setHTML(this.weaponName,"wn",P.name),this.setHTML(this.weaponTraits,"wt",P.traits.join(" · "));const D=r==="build"?"建造中：手持木槌，不能攻击":r==="combat"?"<kbd>左键</kbd> 攻击/连击 · <kbd>右键</kbd> 格挡（刚举起=弹反） · <kbd>空格</kbd> 闪避 · <kbd>Shift</kbd> 疾跑":r==="buy"?"<kbd>B</kbd> 军械架 · <kbd>Enter</kbd> 准备 · <kbd>Tab</kbd> 计分板":"";this.setHTML(this.ctrlHint,"hint",D)}if(this.moneyShown<0&&(this.moneyShown=n.money),n.money!==this.moneyShown){const L=n.money-this.moneyShown;this.moneyDelta.textContent=(L>0?"+$":"-$")+Math.abs(L),this.moneyDelta.style.color=L>0?"var(--ok)":"var(--bad)",this.moneyDeltaT=2,this.moneyShown=n.money}this.money.textContent=`$${n.money}`,this.moneyDeltaT-=t,this.moneyDelta.style.opacity=this.moneyDeltaT>0?String(Math.min(1,this.moneyDeltaT)):"0",this.moneyBox.style.display=r==="build"?"none":"";const y=e.player.firstPerson&&g;this.crosshair.style.display=y&&r!=="swap"?"":"none",this.crosshair.classList.toggle("build",r==="build"),this.crosshair.classList.toggle("wide",n.state==="windup"||n.state==="active");const m=n.state==="block";this.guardRing.classList.toggle("on",m),this.guardRing.classList.toggle("parry",m&&n.parryArmed&&n.blockT<=Ee[n.weapon].parryWindow),this.hitT+=t;const p=te(1-this.hitT/this.hitLife,0,1);this.hitmarker.style.opacity=String(p),this.hitmarker.style.transform=`scale(${1+(1-p)*.4})`;const S=e.camera,E=Math.atan2(-S.matrixWorld.elements[8],-S.matrixWorld.elements[10]),x=-Math.sin(E),T=-Math.cos(E),M=Math.cos(E),A=-Math.sin(E);for(let L=this.dmgDirs.length-1;L>=0;L--){const P=this.dmgDirs[L];if(P.t+=t,P.t>1.1){P.el.remove(),this.dmgDirs.splice(L,1);continue}const D=P.x-S.position.x,N=P.z-S.position.z,B=Math.atan2(D*M+N*A,D*x+N*T);P.el.style.transform=`rotate(${B}rad)`,P.el.style.opacity=String(1-P.t/1.1)}const v=window.innerWidth,b=window.innerHeight;for(let L=this.floaters.length-1;L>=0;L--){const P=this.floaters[L];if(P.t+=t,P.t>P.life){P.el.remove(),this.floaters.splice(L,1);continue}if(tn.set(P.x,P.y+P.t*.7,P.z).project(S),tn.z>1||tn.z<-1){P.el.style.display="none";continue}P.el.style.display="",P.el.style.left=`${(tn.x+1)/2*v}px`,P.el.style.top=`${(1-tn.y)/2*b}px`;const D=P.t/P.life;P.el.style.opacity=String(D<.7?1:1-(D-.7)/.3)}const R=r==="build"&&g&&e.player.firstPerson;this.buildHud.classList.toggle("on",R),R&&this.updateBuild(),this.updateWaypoint(v,b);const I=!g&&e.inGame()&&r!=="matchEnd";if(this.spectate.classList.toggle("on",I&&!this.sbOpen),I){const L=e.player.specTarget,P=L?`<b style="color:${jt[L.team].css}">观战：${jt[L.team].short}·${L.name}${L.team===Qt?"（队友）":""}</b><div class="s2">你已阵亡，本回合不复活 · <kbd>左键</kbd>/<kbd>右键</kbd> 切换观战对象 · <kbd>Tab</kbd> 计分板</div>`:'<b>你已阵亡</b><div class="s2">等待回合结束…</div>';this.setHTML(this.spectate,"spec",P)}this.sbOpen&&this.updateScoreboard(),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0?(this.bannerEl.classList.remove("show"),this.bannerEl.style.opacity="0"):this.bannerT<.4&&(this.bannerEl.style.opacity=String(this.bannerT/.4)));for(const[L,P]of this.panelTimers){const D=P-t;D<=0?(this.panelTimers.delete(L),this.hidePanel(L)):this.panelTimers.set(L,D)}}updateBuild(){const t=this.g,e=t.match,i=t.player,n=t.build.budget[Qt],r=Tn[i.pieceIdx],a=ze[r];this.pieceEls.forEach((h,d)=>{h.classList.toggle("sel",d===i.pieceIdx),h.classList.toggle("poor",ze[Tn[d]].cost>n)});const o=t.zones[e.teams[Qt].buildZone];let c="";for(let h=0;h<ti.budget;h++){const d=h<n,u=d&&h>=n-a.cost&&!i.targetPiece;c+=`<i class="${u?"cost":d?"on":""}"></i>`}const l=e.teams.filter(h=>h.id!==Qt).map(h=>`<span class="bs" style="--c:${jt[h.id].css}">${jt[h.id].short} ${t.zones[h.buildZone].letter}区 ${h.ready?"✓ 完成":"建造中"}</span>`).join("");this.setHTML(this.buildStatus,"bstat",`<span class="budget">${o.letter} ${o.name} · 预算 ${n}/${ti.budget}<span class="segs">${c}</span></span>${l}${e.playerReadyBuild?'<span class="bs" style="--c:#7dff9a">你已准备</span>':""}`),this.buildMsg.textContent=i.buildMsg,this.buildMsg.className=i.buildOk?"ok":"bad",this.setHTML(this.buildInfo,"binfo",`<b>${a.name}</b>（${a.size} · 高 ${a.height} m · ${a.cost} 点）${a.desc} ${a.tags.map(h=>`<span class="tag">${h}</span>`).join(" ")}`)}updateWaypoint(t,e){const i=this.g,n=i.match,r=i.player.ch;let a=0,o=0,c="";if(n.phase==="build"&&r.alive&&i.player.firstPerson){const y=i.zones[n.teams[Qt].buildZone],m=y.rect;r.pos.x>m.minX&&r.pos.x<m.maxX&&r.pos.z>m.minZ&&r.pos.z<m.maxZ||(a=y.center.x,o=y.center.z,c=`前往本队建造区 ${y.letter} ${y.name} · ${Math.hypot(a-r.pos.x,o-r.pos.z).toFixed(0)} m`)}if(!c){this.waypoint.style.display="none";return}this.waypoint.style.display="block";const l=i.camera;tn.set(a,2.5,o).project(l);const h=tn.z>1;let d=tn.x,u=tn.y;h&&(d=-d,u=-u);const f=!h&&Math.abs(d)<.85&&Math.abs(u)<.8;let g=180;if(!f){const y=Math.atan2(u,d);d=Math.cos(y)*.82,u=Math.sin(y)*.72,g=90-y*180/Math.PI}this.waypoint.style.left=`${(d+1)/2*t}px`,this.waypoint.style.top=`${(1-u)/2*e}px`,this.waypoint.firstElementChild.style.transform=`rotate(${g}deg)`,this.setHTML(this.waypoint.lastElementChild,"wp",c)}toast(t,e="info"){const i=Os("div",`toast ${e}`,t);for(this.toasts.appendChild(i);this.toasts.children.length>4;)this.toasts.firstElementChild?.remove();setTimeout(()=>i.style.opacity="0",2400),setTimeout(()=>i.remove(),2900)}banner(t,e="",i="#ff3b30",n=2.4){const r=this.bannerEl;r.querySelector(".main").textContent=t,r.querySelector(".sub").innerHTML=e,r.style.setProperty("--bc",i),r.classList.remove("show"),r.offsetWidth,r.style.opacity="",r.classList.add("show"),this.bannerT=n}killFeed(t,e,i){const n=this.g.player.ch,r=c=>`<span style="color:${jt[c.team].css}">${jt[c.team].short}·${c.name}</span>`,a=t?Ee[t.weapon].name+(i?.swing==="thrust"||i?.swing==="stab"?"·刺":"·斩"):"结界",o=Os("div",`kf ${t===n||e===n?"mine":""}`,`${t?r(t):""}<span class="w">${a}</span>${r(e)}`);for(this.killfeed.appendChild(o);this.killfeed.children.length>6;)this.killfeed.firstElementChild?.remove();setTimeout(()=>o.remove(),7e3)}hitMarker(t,e){const i={hit:"#ffffff",blocked:"#ffb347",parry:"#9fe6ff",guardbreak:"#ff8a3d",dodged:"#8f8f9f"};this.hitmarker.style.setProperty("--hm",e?"#ff3b30":i[t]),this.hitT=0,this.hitLife=e?.5:.25}damageFrom(t,e){const i=Os("div","dd");for(this.dmgdir.appendChild(i),this.dmgDirs.push({el:i,x:t,z:e,t:0});this.dmgDirs.length>4;)this.dmgDirs.shift()?.el.remove()}floater(t,e,i,n,r,a=""){if(!this.g.settings.dmgNums&&a!=="word")return;const o=Os("div",`fl ${a}`,t);for(o.style.color=r,this.floaterLayer.appendChild(o),this.floaters.push({el:o,x:e+(Math.random()-.5)*.3,y:i,z:n+(Math.random()-.5)*.3,t:0,life:a==="big"?1.1:.85});this.floaters.length>24;)this.floaters.shift()?.el.remove()}setResume(t){this.resume.classList.toggle("on",t)}showScoreboard(t){this.sbOpen=t,this.scoreboard.classList.toggle("on",t),t&&this.updateScoreboard()}updateScoreboard(){const t=this.g,e=t.match,i=e.teams.map(n=>{const r=jt[n.id],a=e.round>0&&e.phase!=="build"&&e.phase!=="lock",o=`<tr><td class="th" colspan="6" style="--c:${r.css};color:${r.css}">${r.name} · ${n.score} 分 · 建造 ${t.zones[n.buildZone].letter} 区${a?` · 本回合出生 ${t.zones[n.spawnZone].letter} 区`:""}</td></tr>`,c=n.members.map(l=>{const h=n.id===Qt?`$${l.money}`:"—";return`<tr class="${l.alive?"":"dead"} ${l.isPlayer?"me":""}"><td>${l.name}</td><td>${l.alive?Math.ceil(l.hp)+" HP":"阵亡"}</td><td>${Ee[l.weapon].name}</td><td>${l.kills} / ${l.deaths}</td><td>${Math.round(l.dmgDealt)}</td><td>${h}</td></tr>`}).join("");return o+c}).join("");this.setHTML(this.scoreboard,"sb",`<table><tr><th>角色</th><th>状态</th><th>武器</th><th>击杀/阵亡</th><th>伤害</th><th>金钱</th></tr>${i}</table><div style="font-size:12px;opacity:.7;margin-top:8px">${or[e.mode.id].desc} · 第 ${e.round} 回合</div>`)}showPanel(t,e,i=0){const n=yt(t);n.innerHTML=e,n.classList.add("on"),i>0?this.panelTimers.set(t,i):this.panelTimers.delete(t)}hidePanel(t){yt(t).classList.remove("on"),this.panelTimers.delete(t)}}const ah="swapblade.tutorialSeen.v1",oh={tanto:'<svg viewBox="0 0 120 40"><rect x="14" y="17" width="28" height="7" rx="2" fill="#2b2230" stroke="#f6efe2" stroke-width="1.5"/><rect x="42" y="13" width="4" height="15" fill="#d9a74a"/><path d="M46 16.5 L86 18 L98 20.5 L86 23 L46 24 Z" fill="#dfe6ee" stroke="#1b1622" stroke-width="1.5"/></svg>',katana:'<svg viewBox="0 0 120 40"><rect x="4" y="19" width="28" height="6" rx="2" fill="#2b2230" stroke="#f6efe2" stroke-width="1.5"/><ellipse cx="34" cy="22" rx="3" ry="8" fill="#d9a74a"/><path d="M37 19 Q80 13 117 7 Q84 21 37 25 Z" fill="#dfe6ee" stroke="#1b1622" stroke-width="1.5"/></svg>',naginata:'<svg viewBox="0 0 120 40"><rect x="2" y="20" width="80" height="4" fill="#7a4e35" stroke="#1b1622" stroke-width="1"/><rect x="82" y="18" width="4" height="8" fill="#d9a74a"/><path d="M86 19 Q104 17 118 7 Q111 23 86 25 Z" fill="#dfe6ee" stroke="#1b1622" stroke-width="1.5"/></svg>',axe:'<svg viewBox="0 0 120 40"><rect x="8" y="18" width="84" height="5" fill="#5c2a24" stroke="#1b1622" stroke-width="1"/><path d="M80 5 Q100 1 113 10 Q104 20 113 31 Q100 39 80 35 Z" fill="#3a3d46" stroke="#1b1622" stroke-width="1.5"/><path d="M107 10 Q100 20 107 30" stroke="#dfe6ee" stroke-width="3" fill="none"/></svg>',armor:'<svg viewBox="0 0 120 40"><path d="M42 5 H78 L86 13 L80 36 H40 L34 13 Z" fill="#46506a" stroke="#1b1622" stroke-width="2"/><path d="M42 15 H78 M41 22 H79 M40 29 H80" stroke="#ff3b30" stroke-width="2"/></svg>'};class t_{constructor(t){this.g=t,this.hud=new jx(t),this.buildMenu(),this.buildHelp(),this.buildSettings(),this.wireModal("pause",{resume:()=>this.close(),help:()=>this.open("help"),settings:()=>this.open("settings"),restart:()=>{this.closeAll(),this.g.startMatch(this.g.match.mode.id)},quit:()=>{this.closeAll(),this.g.quitToMenu()}}),this.wireModal("help",{back:()=>this.close()}),this.wireModal("settings",{back:()=>this.close()}),this.wireModal("tutorial",{ok:()=>{try{localStorage.setItem(ah,"1")}catch{}this.close()}}),this.wireModal("shop",{close:()=>this.close(),ready:()=>{this.g.match.confirmPlayerBuyReady(),this.close(),this.toast("已准备就绪，即将开战","ok")}}),this.wireModal("matchEnd",{again:()=>{this.closeAll(),this.g.startMatch(this.g.match.mode.id)},menu:()=>{this.closeAll(),this.g.quitToMenu()}}),yt("shopItems").addEventListener("click",e=>{const i=e.target.closest(".item");i?.dataset.id&&this.buy(i.dataset.id)})}g;hud;modal=null;stack=[];openedAt=0;mode="quick";diff="normal";shopMsg={text:"",ok:!0,t:0};shopKey="";firstBuyShown=!1;wireModal(t,e){yt(t).addEventListener("click",i=>{const n=i.target.closest("[data-act]");if(!n)return;const r=e[n.dataset.act];r&&(this.g.audio.ui(),r())})}open(t){this.modal!==t&&(this.modal&&(this.stack.push(this.modal),yt(this.modal).classList.add("hidden")),this.modal=t,this.openedAt=performance.now(),yt(t).classList.remove("hidden"),this.g.player.releaseAll(),this.g.player.unlock(),this.hud.showScoreboard(!1),(t==="pause"||t==="tutorial")&&this.g.setPaused(!0),t==="shop"&&(this.shopKey="",this.renderShop()),t==="settings"&&this.syncSettings())}close(){if(!this.modal)return;const t=this.modal;yt(t).classList.add("hidden"),(t==="pause"||t==="tutorial")&&this.g.setPaused(!1);const e=this.stack.pop()??null;if(this.modal=e,e){yt(e).classList.remove("hidden"),e==="pause"&&this.g.setPaused(!0);return}this.g.inGame()&&this.g.match.phase!=="matchEnd"&&this.g.player.lock()}closeAll(){for(;this.modal;){const t=this.modal;yt(t).classList.add("hidden"),this.modal=this.stack.pop()??null}this.stack=[],this.g.setPaused(!1)}openPause(){!this.g.inGame()||this.g.match.phase==="matchEnd"||this.modal||this.open("pause")}openShop(){this.g.match.phase!=="buy"||!this.g.player.ch.alive||this.open("shop")}openHelp(){this.open("help")}onModalKey(t){const e=this.modal;if(!e)return;const i=performance.now()-this.openedAt;if(t.code==="Escape"){if(i<350||e==="matchEnd"||e==="tutorial")return;this.close();return}if(e==="shop"){if(t.code==="KeyB")this.close();else if(t.code==="Enter")this.g.match.confirmPlayerBuyReady(),this.close(),this.toast("已准备就绪，即将开战","ok");else if(t.code.startsWith("Digit")){const n=parseInt(t.code.slice(5),10);n>=1&&n<=4&&this.buy(ja[n-1]),n===5&&this.buy("armor")}}else e==="tutorial"&&(t.code==="Enter"||t.code==="Space")?yt("tutorial").querySelector('[data-act="ok"]')?.click():e==="pause"&&t.code==="Enter"&&this.close()}setResumePrompt(t){this.hud.setResume(t&&this.g.inGame()&&!this.modal)}showScoreboard(t){this.modal&&t||this.hud.showScoreboard(t)}toast(t,e="info"){this.hud.toast(t,e)}buildMenu(){const t=yt("modeCards"),e=()=>{t.innerHTML=["quick","long"].map(i=>{const n=or[i],r=n.midgameAt>0?`领先队首次达到 ${n.midgameAt} 分后，下一回合前全员中场重建一次`:"开局建造一次，之后每回合重新随机换区";return`<div class="modeCard ${this.mode===i?"sel":""}" data-mode="${i}"><span class="big3">${n.target}</span><b>${n.name}</b><span>先到 ${n.target} 分获胜<br>${r}</span></div>`}).join(""),yt("diffBtns").innerHTML=Object.keys(aa).map(i=>`<button class="${this.diff===i?"sel":""}" data-diff="${i}">${aa[i].name}</button>`).join("")};e(),t.addEventListener("click",i=>{const n=i.target.closest("[data-mode]");n&&(this.mode=n.dataset.mode,this.g.audio.init(),this.g.audio.ui(),e())}),yt("diffBtns").addEventListener("click",i=>{const n=i.target.closest("[data-diff]");n&&(this.diff=n.dataset.diff,this.g.audio.init(),this.g.audio.ui(),e())}),yt("btnStart").addEventListener("click",()=>{this.g.audio.init(),this.g.startMatch(this.mode)}),yt("btnHelp").addEventListener("click",()=>{this.g.audio.init(),this.open("help")}),yt("btnSettings").addEventListener("click",()=>{this.g.audio.init(),this.open("settings")})}showMenu(t){yt("menu").classList.toggle("hidden",!t),this.hud.show(!t)}buildHelp(){const t=ja.map(e=>{const i=Ee[e];return`<tr><td>${i.name} ${i.price?"$"+i.price:"免费"}</td><td>${i.desc}</td></tr>`}).join("");yt("helpBody").innerHTML=`
      <div>
        <h3>基本操作</h3>
        <table>
          <tr><td><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></td><td>移动 · <kbd>Shift</kbd> 疾跑 · 鼠标 视角</td></tr>
          <tr><td><kbd>左键</kbd></td><td>攻击；在收招时再按接连击</td></tr>
          <tr><td><kbd>右键</kbd></td><td>按住格挡。<b>刚举起的一瞬间</b>挡住 = 弹反，对手大硬直</td></tr>
          <tr><td>蓄力中按<kbd>右键</kbd></td><td>取消攻击转为格挡（假动作）；鬼斧的霸体蓄力不能取消</td></tr>
          <tr><td><kbd>空格</kbd></td><td>闪避（短暂无敌，冷却 1 秒）；朝移动方向，不按方向则后撤</td></tr>
          <tr><td><kbd>B</kbd> / <kbd>Enter</kbd></td><td>准备阶段打开军械架 / 准备就绪</td></tr>
          <tr><td><kbd>Tab</kbd> <kbd>Esc</kbd> <kbd>H</kbd></td><td>计分板 · 暂停 · 本说明</td></tr>
        </table>
        <h3>建造操作（建造阶段）</h3>
        <table>
          <tr><td><kbd>1</kbd>-<kbd>5</kbd> / 滚轮</td><td>选择构件：矮墙 2 · 高墙 3 · 货箱 2 · 石柱 1 · 转角屏风 3</td></tr>
          <tr><td><kbd>R</kbd></td><td>旋转 90°（绿色 = 可放置，红色 = 不可放置并显示原因）</td></tr>
          <tr><td><kbd>左键</kbd></td><td>放置（准星 ${ti.reach} m 内，只能放在本队区域）</td></tr>
          <tr><td><kbd>右键</kbd> / <kbd>X</kbd></td><td>删除准星对准的本队构件，全额退还预算</td></tr>
          <tr><td><kbd>Z</kbd> · <kbd>F</kbd> · <kbd>Enter</kbd></td><td>撤销 · 让 AI 队友按模板补全剩余预算（只追加，不动你的） · 准备</td></tr>
        </table>
        <h3>武器</h3>
        <table>${t}<tr><td>护甲 $${Re.armorPrice}</td><td>${Re.armorPoints} 点，优先抵消伤害；回合存活可保留剩余护甲</td></tr></table>
      </div>
      <div>
        <h3>流程</h3>
        <ul>
          <li>建造（各队 ${ti.budget} 点相同预算）→ 锁定检查 → <b>随机换区</b> → 准备购买 → 战斗 → 结算</li>
          <li><b>换区</b>：四队与四个区一一对应，且<b>不会在自己建造的区出生</b>；每回合重新抽取。只交换出生位置，队伍、颜色、分数、金钱、装备都不变。</li>
          <li><b>得分</b>：回合中阵亡不复活；最后仍有成员存活的队伍得 1 分；最后几队同时阵亡算平局。</li>
        </ul>
        <h3>防躲藏与超时</h3>
        <ul>
          <li>剩 ${ne.revealAt} 秒：全员显形——所有人的头顶标记穿墙可见，AI 同样知道每个人的位置。</li>
          <li>剩 ${ne.ringAt} 秒：结界从地图边缘向中央高台收缩（半径 ${ne.ringStartRadius} → ${ne.ringEndRadius} m），圈外每秒 -${ne.ringDps} HP。</li>
          <li>时间到仍有多队存活：<b>平局，不加分</b>，所有人照常获得基础收入。</li>
        </ul>
        <h3>经济</h3>
        <ul>
          <li>初始 $${Re.start}；每回合结束所有人 +$${Re.base}（平局也有）；胜队每人再 +$${Re.win}。</li>
          <li>连续未胜补偿：每回合 +$${Re.lossStep}，最多 +$${Re.lossMax}；击杀奖励按所持武器 $200~$500；上限 $${Re.max}。</li>
          <li>装备规则：<b>存活者保留武器与剩余护甲，阵亡者下回合恢复为免费短刀</b>。本阶段买的武器可原价退回。</li>
        </ul>
        <h3>中场重建（长局模式）</h3>
        <ul>
          <li>领先队<b>首次达到 ${or.long.midgameAt} 分</b>后、下一回合开始前触发，只触发一次。</li>
          <li>保留分数、金钱和按装备规则保留的武器；所有 8 人（含阵亡者）参与；期间不能战斗。</li>
          <li>清空全部旧构件，重新分配建造区并重置相同预算；完成后按新的建造关系重新换区。不额外插入战斗回合，也不重复发奖励。</li>
        </ul>
        <h3>建造限制</h3>
        <ul>
          <li>不可叠放；出生台与三个门口为保留区；不能卡住角色；不能封死出生点通往外部的最后一条通路。</li>
          <li>矮墙挡路挡刀但不挡视线；高墙、货箱、石柱、屏风同时挡视线。</li>
        </ul>
      </div>`}buildSettings(){const t=this.g.settings;yt("settingsBody").innerHTML=`
      <div class="setRow"><label>鼠标灵敏度</label><input type="range" id="setSens" min="0.2" max="3" step="0.05"><span class="val" id="vSens"></span></div>
      <div class="setRow"><label>视野 FOV</label><input type="range" id="setFov" min="60" max="95" step="1"><span class="val" id="vFov"></span></div>
      <div class="setRow"><label>主音量</label><input type="range" id="setVol" min="0" max="1" step="0.05"><span class="val" id="vVol"></span></div>
      <div class="setRow"><label>音乐</label><input type="range" id="setMus" min="0" max="1" step="0.05"><span class="val" id="vMus"></span></div>
      <div class="setRow"><label>镜头震动</label><input type="checkbox" id="setShake"></div>
      <div class="setRow"><label>伤害数字</label><input type="checkbox" id="setDmg"></div>`;const e=(i,n,r,a)=>{const o=yt(i);o.addEventListener("input",()=>{const c=parseFloat(o.value);r(c),yt(n).textContent=a(c),this.g.saveSettings()})};e("setSens","vSens",i=>t.sens=i,i=>i.toFixed(2)),e("setFov","vFov",i=>t.fov=i,i=>i.toFixed(0)),e("setVol","vVol",i=>t.master=i,i=>Math.round(i*100)+"%"),e("setMus","vMus",i=>t.music=i,i=>Math.round(i*100)+"%"),yt("setShake").addEventListener("change",i=>{t.shake=i.target.checked,this.g.saveSettings()}),yt("setDmg").addEventListener("change",i=>{t.dmgNums=i.target.checked,this.g.saveSettings()})}syncSettings(){const t=this.g.settings,e=(i,n,r,a)=>{yt(i).value=String(r),yt(n).textContent=a};e("setSens","vSens",t.sens,t.sens.toFixed(2)),e("setFov","vFov",t.fov,t.fov.toFixed(0)),e("setVol","vVol",t.master,Math.round(t.master*100)+"%"),e("setMus","vMus",t.music,Math.round(t.music*100)+"%"),yt("setShake").checked=t.shake,yt("setDmg").checked=t.dmgNums}maybeTutorial(){let t=!1;try{t=localStorage.getItem(ah)==="1"}catch{t=!1}return t?!1:(this.open("tutorial"),!0)}buy(t){const e=this.g,i=e.player.ch,n=t==="armor"?e.shop.buyArmor(i):e.shop.buyWeapon(i,t);this.shopMsg={text:n.msg,ok:n.ok,t:performance.now()},n.ok||e.audio.buy(!1),this.shopKey="",this.renderShop()}swapLine(){const t=this.g,e=t.match.teams[Qt],i=t.zones[e.spawnZone],n=jt[t.match.teams.find(a=>a.buildZone===e.spawnZone).id],r=jt[t.match.teams.find(a=>a.spawnZone===e.buildZone).id];return`本回合出生：<b>${i.letter} ${i.name}</b>（由 <span class="chip" style="--c:${n.css}">${n.name}</span> 建造） · 你们建造的 ${t.zones[e.buildZone].letter} 区由 <span class="chip" style="--c:${r.css}">${r.name}</span> 出生`}renderShop(){if(this.modal!=="shop")return;const t=this.g,e=t.player.ch,i=t.shop;yt("shopTimer").textContent=hu(t.match.timer);const n=[e.money,e.weapon,e.boughtThisPhase,e.armor,this.shopMsg.t].join("|");if(n===this.shopKey)return;this.shopKey=n,yt("shopMoney").textContent=`$${e.money}`,yt("shopSwap").innerHTML=this.swapLine();const r=Ee[e.weapon],a=e.weapon!=="tanto"&&e.boughtThisPhase!==e.weapon,o=t.match.teams[Qt].members.find(y=>y!==e);yt("shopCur").innerHTML=`当前装备：<b>${r.name}</b>${a?"（上回合存活保留）":e.boughtThisPhase?"（本阶段购买，可退回）":""} · 护甲 ${Math.ceil(e.armor)}/${Re.armorPoints}${o?` · 队友 ${o.name}：${Ee[o.weapon].name}${o.armor>0?" + 护甲":""}（$${o.money}）`:""}`;const c=e.boughtThisPhase===e.weapon?Ee[e.weapon].price:0,l=ja.map((y,m)=>{const p=Ee[y];let S="",E="";e.weapon===y?(S=c&&y!=="tanto"?"已装备 · 点短刀可退回":"已装备",E="equipped"):y==="tanto"?(S=c?`换回短刀（退 $${c}）`:"已持有其他武器",c||(E="poor")):e.money+c>=p.price?S=`购买 $${p.price}`+(c?`（先退 +$${c}）`:a?`（替换${r.name}）`:""):(S=`资金不足 · 差 $${p.price-e.money-c}`,E="poor");const x=p.stats,T=M=>`<span class="pips">${[1,2,3,4,5].map(A=>`<i class="${A<=M?"on":""}"></i>`).join("")}</span>`;return`<div class="item ${E}" data-id="${y}"><kbd class="key">${m+1}</kbd><div class="wicon">${oh[y]}</div><div class="nm">${p.name}</div><div class="price">${p.price?"$"+p.price:"免费"}</div>
        <div class="traits">${p.traits.map(M=>`<span>${M}</span>`).join("")}</div>
        <div class="desc">${p.desc}</div>
        <div class="stats"><span>伤害</span>${T(x.dmg)}<span>速度</span>${T(x.speed)}<span>距离</span>${T(x.reach)}<span>范围</span>${T(x.arc)}<span>防御</span>${T(x.guard)}</div>
        <div class="state">${S}</div></div>`}).join(""),h=i.armorCost(e),d=h<=0?"护甲已满":e.money>=h?`购买 $${h}`:`资金不足 · 差 $${h-e.money}`,u=`<div class="item ${h<=0?"equipped":e.money<h?"poor":""}" data-id="armor"><kbd class="key">5</kbd><div class="wicon">${oh.armor}</div><div class="nm">胴甲</div><div class="price">$${Re.armorPrice}</div>
      <div class="traits"><span>+${Re.armorPoints} 护甲</span><span>优先抵消伤害</span></div>
      <div class="desc">护甲先于血量承受伤害。回合存活可保留剩余护甲；补满只按缺失比例收费。</div>
      <div class="stats"><span>当前</span><span>${Math.ceil(e.armor)} / ${Re.armorPoints}</span></div>
      <div class="state">${d}</div></div>`;yt("shopItems").innerHTML=l+u;const f=yt("shopResult"),g=performance.now()-this.shopMsg.t<4e3;f.textContent=g?this.shopMsg.text:"",f.className=this.shopMsg.ok?"ok":"bad"}onPurchase(t,e){this.modal!=="shop"&&this.toast(t,e?"ok":"bad")}swapGrid(){const t=this.g,e=t.match;return`<div class="swapGrid">${[0,1,3,2].map(r=>{const a=t.zones[r],o=e.teams.find(h=>h.buildZone===r),c=e.teams.find(h=>h.spawnZone===r),l=c.id===Qt;return`<div class="zcell ${l?"mine":""}" style="--bc:${jt[c.id].css}"><div class="zl">${a.letter}</div><div class="zn">${a.name} · ${Vn[r].flavor==="pine"?"松":Vn[r].flavor==="bamboo"?"竹":Vn[r].flavor==="maple"?"枫":"樱"}</div>
          <div class="who">建造 <span class="chip" style="--c:${jt[o.id].css}">${jt[o.id].short}</span><b style="color:${jt[c.id].css}">${jt[c.id].name} 出生${l?"（你）":""}</b></div></div>`}).join("")}</div>`}showSwap(t){const e=this.g,i=e.match.teams[Qt],n=e.zones[i.spawnZone],r=e.match.teams.find(a=>a.buildZone===i.spawnZone);this.hud.showPanel("swapPanel",`<h3>随机换区 · 你们将在 <span style="color:${jt[r.id].css}">${n.letter} ${n.name}</span> 出生</h3>
       <div class="sub">这是 ${jt[r.id].name} 建造的庭院。每队都不会在自己建的区出生，每回合重新抽取。</div>
       ${this.swapGrid()}
       <div class="swapNote">边框颜色 = 本回合在该区出生的队伍 · 「建造」= 该区的建造者 · 区域旗帜颜色也表示建造者</div>`,t)}onPhase(t,e){const i=this.g,n=i.match,r=this.hud,a=n.teams[Qt];switch(t!=="buy"&&this.modal==="shop"&&this.close(),t){case"build":{const o=i.zones[a.buildZone];r.hidePanel("roundPanel"),r.hidePanel("swapPanel"),e.isRebuild?(r.banner("中场重建",`领先队已达 ${n.mode.midgameAt} 分 · 前往 <b>${o.letter} ${o.name}</b> 重新建造`,"#ff3b30",4),r.showPanel("midPanel",`<h3>中场重建</h3><ul>
              <li>领先队首次达到 ${n.mode.midgameAt} 分，触发唯一一次中场重建。</li>
              <li><b>保留</b>：分数、金钱、存活者的武器与护甲（阵亡者按规则恢复短刀）。</li>
              <li><b>清空</b>：全部旧构件；各队<b>重新抽取建造区</b>并获得相同的新预算 ${ti.budget} 点。</li>
              <li>所有 8 人都已回到中央集合，期间不能战斗；建完后按新的建造关系<b>重新随机换区</b>。</li>
              <li>你们这次负责 <b>${o.letter} ${o.name}</b>（跟随黄色光柱）。</li></ul>`,10)):r.banner("建造阶段",`跟随黄色光柱前往 <b>${o.letter} ${o.name}</b> · ${ti.budget} 点预算 · 完成后按 Enter 准备`,"#e2b04a",4.5);break}case"lock":{const c=(e.lock??[]).filter(h=>h.removed>0),l=c.length?c.map(h=>`${i.zones[h.zone].letter} 区有构件封死通路，已自动移除 ${h.removed} 个`).join(" · "):"所有出生点通路检查通过";r.banner("建造锁定",l,"#e2b04a",2.6);break}case"swap":{this.showSwap(ne.swap+.3);const o=a,c=i.zones[o.spawnZone];r.banner("随机换区",`你们将在 <b>${c.letter} ${c.name}</b> 出生`,"#2f7bff",2.6);break}case"buy":{r.hidePanel("roundPanel"),e.showSwap&&this.showSwap(5.5);const o=i.zones[a.spawnZone];r.banner(`第 ${n.round} 回合 · 准备`,`出生于 <b>${o.letter} ${o.name}</b> · 按 <kbd>B</kbd> 打开军械架`,"#19c27a",2.6),!this.firstBuyShown&&i.player.ch.alive&&!this.modal&&(this.firstBuyShown=!0,this.open("shop"));break}case"combat":r.hidePanel("swapPanel"),r.banner("开战！","最后存活的队伍得 1 分 · 回合中阵亡不复活","#ff3b30",2.2);break}}onReveal(){this.hud.banner("全员显形",`剩余 ${ne.revealAt} 秒 · 敌人标记穿墙可见`,"#ffb300",2.2)}onRing(){this.hud.banner("结界收缩",`向中央高台靠拢 · 圈外每秒 -${ne.ringDps} HP`,"#a12bff",2.6)}onRoundEnd(t){const e=this.g,i=e.match,n=e.player.ch,r=t.income.get(n);let a="平局",o="#e2b04a",c=t.reason==="mutual"?"最后的队伍同时阵亡 · 不加分":"时间耗尽仍有多队存活 · 不加分";t.winner!==null&&(a=`${jt[t.winner].name} 胜`,o=jt[t.winner].css,c=t.winner===Qt?"你的队伍坚持到了最后！+1 分":"最后存活的队伍得 1 分");const l=i.teams.map(g=>`<span class="s ${g.id===t.winner?"win":""}" style="--c:${jt[g.id].css}">${jt[g.id].short} ${g.score}</span>`).join("");let h="";if(r){const g=r.base+r.win+r.loss;h=`<div class="income"><span>基础收入</span><span>+$${r.base}</span>${r.win?`<span>胜利奖励</span><span>+$${r.win}</span>`:""}${r.loss?`<span>连续未胜补偿</span><span>+$${r.loss}</span>`:""}${r.kills?`<span>本回合击杀奖励（已到账）</span><span>+$${r.kills}</span>`:""}<span class="tot">回合结算</span><span class="tot">+$${g} → $${n.money}</span></div>`}const d=Math.max(...i.teams.map(g=>g.score));let u="下一回合：重新随机换区 → 准备购买";d>=i.target?u="比赛结束！":i.mode.midgameAt>0&&!i.midgameDone&&d>=i.mode.midgameAt&&(u="领先队已达中场分数 → 即将中场重建");const f=n.alive?`你存活：保留 ${n.weapon==="tanto"?"短刀":"武器"}与剩余护甲`:"你已阵亡：下回合恢复为短刀";this.hud.showPanel("roundPanel",`<h3 style="text-shadow:3px 3px 0 ${o}">第 ${t.round} 回合 · ${a}</h3><div class="reason">${c}</div><div class="scoreRow">${l}</div>${h}<div class="reason">${f}</div><div class="next">${u}</div>`,ne.roundEnd+.2)}onMatchEnd(t){const e=this.g,i=e.match,n=jt[t],r=t===Qt,a=[...e.chars].sort((l,h)=>h.kills-l.kills||h.dmgDealt-l.dmgDealt).map(l=>`<tr class="${l.isPlayer?"me":""}"><td><span class="chip" style="--c:${jt[l.team].css}">${jt[l.team].short}</span> ${l.name}</td><td>${l.kills}</td><td>${l.deaths}</td><td>${Math.round(l.dmgDealt)}</td><td>$${l.money}</td></tr>`).join(""),o=i.teams.map(l=>`<span class="s ${l.id===t?"win":""}" style="--c:${jt[l.id].css}">${jt[l.id].name} ${l.score}</span>`).join(""),c=i.history.filter(l=>l.winner===null).length;yt("matchEndBody").innerHTML=`<div class="meHead" style="--c:${n.css}"><div class="w">${r?"胜利！":n.name+" 获胜"}</div><div class="s">${i.mode.name} · 共 ${i.round} 回合（平局 ${c}）· ${i.mode.midgameAt>0?i.midgameDone?"已进行中场重建":"未触发中场重建":"开局建造一次"}</div></div>
      <div class="scoreRow">${o}</div>
      <table class="meStats"><tr><th>角色</th><th>击杀</th><th>阵亡</th><th>伤害</th><th>金钱</th></tr>${a}</table>`,this.open("matchEnd")}update(t){this.hud.update(t),this.modal==="shop"&&(this.g.match.phase!=="buy"||!this.g.player.ch.alive?this.close():this.renderShop())}resetMatchUI(){this.firstBuyShown=!1,this.hud.reset()}}const lh={sens:1,fov:74,master:.8,music:.5,shake:!0,dmgNums:!0};class e_{renderer;scene=new dl;camera;post;viewmodel;sunDir=new U(-.42,.72,.36).normalize();sun;world=new Pv;nav;zones;pois;chars=[];brains=[];models=[];build;combat;shop;match;player;fx;audio=new Jx;ui;map;ring;ringMat;time=0;timeScale=1;paused=!1;headless=!1;settings;events;last=performance.now();hurtT=0;flashT=0;flashColor=new Ht(1,1,1);lastHp=fe.maxHp;menuT=0;lastTick=-1;autoFilled=!1;constructor(t){this.settings=this.loadSettings();const e=new Ev({antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Ys,e.shadowMap.autoUpdate=!1,t.appendChild(e.domElement),this.renderer=e,this.camera=new _i(this.settings.fov,window.innerWidth/window.innerHeight,.05,900),this.camera.layers.enable(Pn);const i=new Jh(13624063,14205082,1.25);this.scene.add(i),this.sun=new jh(16773590,2.35),this.sun.position.copy(this.sunDir).multiplyScalar(70),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);const n=this.sun.shadow.camera;n.left=-38,n.right=38,n.top=38,n.bottom=-38,n.near=5,n.far=160,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun,this.sun.target),Qv(this.scene,this.sunDir),this.events=this.makeEvents(),this.zones=Bv(),this.pois=Gv();for(const r of Hv())this.world.add(r);this.nav=new xe(this.world),this.nav.rebuildAll(),this.map=Yv(this.scene,this.zones),this.fx=new Dx(this.scene),this.match=new yx(this),this.build=new vx(this),this.combat=new xx(this),this.shop=new _x(this);for(let r=0;r<8;r++){const a=Math.floor(r/2),o=r%2,c=new ux(r,Tv[a][o],a,o,r===0);if(this.chars.push(c),r!==0){const l=new jc(c,this);c.brain=l,this.brains.push(l)}}this.player=new Sx(this,this.chars[0]),this.match.initTeams();for(const r of this.chars){const a=new Hx(r,this,Qt);r.model=a,this.models.push(a)}this.viewmodel=new Zx(Qt),this.post=new ex(e),this.ringMat=new Ye({uniforms:{uTime:{value:0},uColor:{value:new Ht(11554303)}},vertexShader:"varying vec2 vUv; varying float vY; void main(){ vUv = uv; vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform vec3 uColor; varying vec2 vUv;
        void main(){
          float s = step(0.5, fract(vUv.x * 120.0 + vUv.y * 3.0 - uTime * 0.8));
          float fade = (1.0 - vUv.y);
          float a = (0.18 + 0.22 * s) * fade + smoothstep(0.0, 0.05, vUv.y) * (1.0 - smoothstep(0.05, 0.12, vUv.y)) * 0.6;
          gl_FragColor = vec4(uColor * (1.0 + s * 0.5), a);
        }`,transparent:!0,depthWrite:!1,side:hi}),this.ring=new Wt(new Ue(1,1,7,96,1,!0).translate(0,3.5,0),this.ringMat),this.ring.layers.set(Pn),this.ring.visible=!1,this.ring.frustumCulled=!1,this.scene.add(this.ring),this.ui=new t_(this),this.player.attach(e.domElement),this.applySettings(),this.placeMenuChars(),this.ui.showMenu(!0),window.addEventListener("resize",()=>this.resize()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.inGame()&&!this.ui.modal&&this.ui.openPause()}),this.resize(),requestAnimationFrame(this.frame)}loadSettings(){try{const t=JSON.parse(localStorage.getItem(Nc)??"{}");return{...lh,...t}}catch{return{...lh}}}saveSettings(){try{localStorage.setItem(Nc,JSON.stringify(this.settings))}catch{}this.applySettings()}applySettings(){this.audio.setVolume(this.settings.master,this.settings.music)}inGame(){return this.match.phase!=="menu"}setPaused(t){this.paused=t,t&&this.player.releaseAll()}startMatch(t){this.audio.init(),this.ui.closeAll(),this.ui.showMenu(!1),this.ui.resetMatchUI(),this.fx.clear(),this.setDifficulty(this.ui.diff),this.player.specTarget=null,this.autoFilled=!1,this.match.newMatch(t),this.lastHp=this.player.ch.hp,!this.headless&&!this.ui.maybeTutorial()&&this.player.lock()}quitToMenu(){this.player.unlock(),this.match.phase="menu",this.build.clearAll(),this.fx.clear(),this.ui.resetMatchUI(),this.ui.showMenu(!0),this.placeMenuChars(),this.audio.setMusic("calm")}setDifficulty(t){for(const e of this.brains)e.setDifficulty(t)}onLockLost(){this.inGame()&&this.match.phase!=="matchEnd"&&!this.ui.modal&&this.ui.openPause()}placeMenuChars(){this.chars.forEach((t,e)=>{t.resetForRound(),t.canFight=!1,t.confine=null;const i=Math.floor(e/2)/4*Math.PI*2+Math.PI/4,n=e%2?1:-1,r=Math.cos(i)*2.4,a=Math.sin(i)*2.4,o=-Math.sin(i)*n*.9,c=Math.cos(i)*n*.9;t.place(r+o,a+c,Math.atan2(o,c))})}hearing(t,e){for(const i of this.brains)i.ch.team!==t.team&&i.hear(t,e)}makeEvents(){return{windup:(t,e)=>{this.headless||this.audio.windup(!!e.hyper,t.pos.x,t.pos.z),this.hearing(t,7)},swing:(t,e)=>{this.headless||this.audio.swing(e.weight,t.pos.x,t.pos.z,t.isPlayer&&this.player.firstPerson),this.hearing(t,11)},dodge:t=>{this.headless||(this.audio.dodge(t.pos.x,t.pos.z,t.isPlayer),this.fx.dust(t.pos.x,t.pos.y,t.pos.z,6,.3))},footstep:t=>{const e=t.speed2D>5.5;this.hearing(t,e?9:5.5),this.headless||this.audio.footstep(t.pos.x,t.pos.z,t===this.player.ch,e)},hit:t=>this.onHit(t),kill:(t,e,i)=>this.onKill(t,e,i),piecePlaced:t=>{this.headless||(this.audio.place(t.cx,t.cz),this.fx.dust(t.cx,0,t.cz,12,1.1))},pieceRemoved:t=>{this.headless||(this.audio.remove(t.cx,t.cz),this.fx.dust(t.cx,0,t.cz,8,.9,16774104))},purchase:(t,e,i)=>{this.headless||t!==this.player.ch||(this.audio.buy(i),this.ui.onPurchase(e,i))},phase:(t,e)=>this.onPhase(t,e),reveal:()=>{this.headless||(this.audio.phase("reveal"),this.ui.onReveal())},ringStart:()=>{this.headless||(this.audio.phase("ring"),this.ui.onRing())},roundEnd:t=>{this.headless||(this.audio.phase(t.winner===null?"draw":t.winner===Qt?"win":"lose"),this.audio.setMusic("calm"),this.ui.onRoundEnd(t))},matchEnd:t=>{this.headless||(this.audio.phase("match"),this.player.unlock(),this.ui.onMatchEnd(t))}}}onHit(t){const{att:e,tgt:i,kind:n}=t;if(e){for(const h of this.match.teams[i.team].members)h!==i&&h.brain?.hear(e,40);for(const h of this.match.teams[e.team].members)h!==e&&h.brain?.hear(i,40)}if(this.headless)return;const r=t.atk?.weight==="heavy",a=this.player.ch,o=e===a||i===a;switch(n){case"hit":this.fx.hit(t.x,t.y,t.z,jt[e?.team??i.team].color,r),this.fx.slashMark(t.x,t.y,t.z,16777215),this.audio.hit(r,t.x,t.z,o);break;case"blocked":this.fx.blocked(t.x,t.y,t.z),this.audio.blocked(t.x,t.z);break;case"parry":this.fx.parry(t.x,t.y,t.z),this.audio.parry(t.x,t.z);break;case"guardbreak":this.fx.guardBreak(t.x,t.y,t.z),this.audio.guardBreak(t.x,t.z);break;case"dodged":this.fx.dodged(i.pos.x,i.pos.y+1,i.pos.z),this.audio.dodge(i.pos.x,i.pos.z,i===a);break}const c=this.ui.hud,l=i.pos.y+2.05;e===a&&(c.hitMarker(n,t.killed),n==="parry"&&(this.flashT=.12,this.flashColor.set(10479359))),i===a&&(n==="hit"||n==="guardbreak")&&e&&(c.damageFrom(e.pos.x,e.pos.z),this.audio.hurt(),this.hurtT=Math.min(1,this.hurtT+.45+t.damage/120)),i===a&&n==="parry"&&e&&(this.flashT=.1,this.flashColor.set(10479359)),o&&(this.player.onHit(t),n==="hit"?c.floater(`${t.damage}${t.back?" 背刺":""}`,i.pos.x,l,i.pos.z,i===a?"#ff8a80":t.back?"#ffcf4a":"#ffffff",t.damage>=50?"big":""):n==="blocked"?c.floater("格挡",i.pos.x,l,i.pos.z,"#ffd27a","word"):n==="parry"?c.floater("弹反！",i.pos.x,l,i.pos.z,"#9fe6ff","word big"):n==="guardbreak"?c.floater(`破防 ${t.damage}`,i.pos.x,l,i.pos.z,"#ff8a3d","word big"):n==="dodged"&&c.floater("闪避",i.pos.x,l,i.pos.z,"#dde6ff","word"))}onKill(t,e,i){if(this.match.onKill(t,e,i),this.headless)return;const n=this.player.ch;if(this.ui.hud.killFeed(t,e,i),this.audio.kill(e.pos.x,e.pos.z,t===n),t===n&&(this.flashT=.16,this.flashColor.set(16777215),this.ui.hud.banner("斩！",`击败 <span style="color:${jt[e.team].css}">${jt[e.team].short}·${e.name}</span> · +$${Ee[t.weapon].killReward}`,jt[e.team].css,1.6)),e===n){this.audio.death();const r=t?`被 <span style="color:${jt[t.team].css}">${jt[t.team].short}·${t.name}</span> 击败`:"被结界吞没";this.ui.hud.banner("阵亡",`${r} · 本回合不复活，切换为观战`,"#1b1622",2.6),this.player.specTarget=null}}onPhase(t,e){if(t==="build"){for(const i of this.match.teams)this.map.setZoneBuilder(i.buildZone,i.id);this.autoFilled=!1}if(!this.headless){switch(t){case"build":this.audio.phase(e.isRebuild?"midgame":"build"),this.audio.setMusic("calm"),this.fx.clear();break;case"lock":this.audio.phase("lock");break;case"swap":this.audio.phase("swap");break;case"buy":this.audio.phase("buy"),this.audio.setMusic("calm");break;case"combat":this.audio.phase("combat"),this.audio.setMusic("combat");break}this.ui.onPhase(t,e)}}frame=t=>{requestAnimationFrame(this.frame);const e=te((t-this.last)/1e3,0,.05);this.last=t;const i=this.paused?0:e*this.timeScale;i>0&&this.tick(i),this.render(e,i)};tick(t){this.player.update(t);const e=Math.max(1,Math.ceil(t/(1/60)-1e-6)),i=t/e;for(let n=0;n<e;n++)this.step(i)}step(t){this.time+=t;const e=this.match;if(e.phase!=="menu"){if(e.phase==="build"&&!e.playerReadyBuild){const i=()=>this.build.piecesInZone(e.teams[Qt].buildZone).length===0;if(this.player.autopilot&&e.phaseTime>1.5)this.build.autoFill(Qt),e.confirmPlayerBuildReady();else if(e.timer<=t*2&&!this.autoFilled&&i()){this.autoFilled=!0;const n=this.build.autoFill(Qt);!this.headless&&n>0&&this.ui.toast(`时间到：队友替你布置了 ${n} 个构件`,"info")}}this.player.autopilot&&e.phase==="buy"&&!e.playerReadyBuy&&e.phaseTime>4&&e.confirmPlayerBuyReady();for(const i of this.brains)i.update(t);for(const i of this.chars)i.update(t,this);this.separate(),this.combat.step(),e.update(t),this.build.animate(this.time)}}separate(){const t=this.chars,e=fe.radius*2;for(let i=0;i<t.length;i++){const n=t[i];if(n.alive)for(let r=i+1;r<t.length;r++){const a=t[r];if(!a.alive||Math.abs(n.pos.y-a.pos.y)>1.2)continue;const o=a.pos.x-n.pos.x,c=a.pos.z-n.pos.z,l=o*o+c*c;if(l>=e*e)continue;const h=Math.sqrt(l)||.001,d=(e-h)/2,u=l>1e-8?o/h:1,f=l>1e-8?c/h:0;n.pos.x-=u*d,n.pos.z-=f*d,a.pos.x+=u*d,a.pos.z+=f*d;for(const g of[n,a])if(this.world.resolveCircle(g.pos,fe.radius,g.pos.y,g.pos.y+fe.height,fe.step),g.confine){const y=g.confine,m=fe.radius+.05;g.pos.x=te(g.pos.x,y.minX+m,y.maxX-m),g.pos.z=te(g.pos.z,y.minZ+m,y.maxZ-m)}}}}render(t,e){const i=this.match,n=this.player.ch,r=this.camera,a=i.phase;if(a==="menu"){this.menuT+=t;const f=this.menuT*.06+.6;r.position.set(Math.cos(f)*15,5.2,Math.sin(f)*15),r.lookAt(0,2,0),r.fov!==60&&(r.fov=60,r.updateProjectionMatrix())}else this.player.updateCamera(t,r);r.updateMatrixWorld();const o=Math.atan2(-r.matrixWorld.elements[8],-r.matrixWorld.elements[10]);this.audio.setListener(r.position.x,r.position.z,o);for(const f of this.models)f.update(e,r);this.models[0].setVisible(a==="menu"||!this.player.firstPerson);const c=i.teams[Qt]?.buildZone??0,l=a==="build";if(this.map.overlays.forEach((f,g)=>f.visible=l&&g===c),this.map.zoneLabels.forEach(f=>f.visible=l||a==="swap"||a==="lock"),this.map.beacon.visible=l,l){const f=this.zones[c];this.map.beacon.position.x=f.center.x,this.map.beacon.position.z=f.center.z;const g=this.map.beacon.material.uniforms;g.uTime.value=this.time;const y=Math.hypot(r.position.x-f.center.x,r.position.z-f.center.z);g.uFade.value=.12+.88*Av(4,14,y)}this.map.barriers.forEach((f,g)=>{const y=(a==="swap"||a==="buy")&&i.teams.length>0;if(f.visible=y,y){const m=i.teams.find(S=>S.spawnZone===g),p=f.userData.mat;p.uniforms.uTime.value=this.time,m&&p.uniforms.uColor.value.set(jt[m.id].color)}}),this.ring.visible=a==="combat"&&i.ring.active,this.ring.visible&&(this.ring.scale.set(i.ring.r,1,i.ring.r),this.ringMat.uniforms.uTime.value=this.time),this.fx.setScale(this.post.h,r.fov,r.position),this.fx.update(e);const h=a!=="menu"&&this.player.firstPerson&&n.alive&&!(a==="swap"&&i.phaseTime<ne.swap-.35);this.viewmodel.update(e,n,this.time,{build:a==="build",lookDX:this.player.lookDX,lookDY:this.player.lookDY,sunDir:this.sunDir,camQuat:r.quaternion,visible:h}),this.player.lookDX=0,this.player.lookDY=0,n.hp<this.lastHp&&n.alive&&(this.hurtT=Math.max(this.hurtT,.5)),this.lastHp=n.hp,this.hurtT=ei(this.hurtT,0,2.8,t);const d=n.alive&&n.hp<35&&a==="combat"?.25+.12*Math.sin(this.time*6):0,u=this.post.compMat.uniforms;if(u.uHurt.value=Math.min(1,Math.max(this.hurtT,d)),u.uDesat.value=ei(u.uDesat.value,!n.alive&&a!=="menu"?.55:0,4,t),this.flashT=Math.max(0,this.flashT-t),u.uFlash.value=this.flashT>0?this.flashT/.16*.35:0,u.uFlashColor.value.copy(this.flashColor),!this.headless&&(a==="buy"||a==="combat"||a==="build")){const f=Math.ceil(i.timer);f!==this.lastTick&&f<=5&&f>=1&&!this.paused&&this.audio.tick(f<=3),this.lastTick=f}this.post.render(this.scene,r,h?this.viewmodel.scene:null,this.viewmodel.camera),this.ui.update(t)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.viewmodel.setAspect(t/e);const i=this.renderer.getPixelRatio();this.post.setSize(Math.floor(t*i),Math.floor(e*i))}setAutopilot(t){const e=this.player.ch;if(t&&!this.player.autopilot){const i=new jc(e,this);i.autopilot=!0,i.setDifficulty(this.ui.diff),this.player.autopilot=i,e.brain=i,this.brains.push(i)}else!t&&this.player.autopilot&&(this.brains=this.brains.filter(i=>i!==this.player.autopilot),this.player.autopilot=null,e.brain=null)}simulate(t,e=1/60){const i=Math.round(t/e);for(let n=0;n<i&&(this.step(e),!(this.match.phase==="matchEnd"||this.match.phase==="menu"));n++);}runMatch(t,e={}){e.seed!==void 0&&Rv(e.seed);const i=this.headless;this.headless=!0,this.setAutopilot(!0),this.ui.closeAll(),this.ui.showMenu(!1),this.setDifficulty(this.ui.diff),this.match.newMatch(t);const n=[];let r="",a=0;const o=e.maxSeconds??4e3,c=1/60,l=[];for(;a<o&&this.match.phase!=="matchEnd";){this.step(c),a+=c;const d=this.match.phase;d!==r&&(d==="lock"&&n.push({at:this.match.round,zones:this.match.teams.map(u=>u.buildZone),pieces:this.zones.map(u=>this.build.piecesInZone(u.idx).length)}),r=d);for(const u of this.chars)u.money<0&&l.push(`${u.name} money<0`)}const h={mode:t,finished:this.match.phase==="matchEnd",simSeconds:Math.round(a),rounds:this.match.round,winner:this.match.winner,scores:this.match.teams.map(d=>d.score),history:this.match.history.slice(),swapLog:this.match.swapLog.slice(),midgameDone:this.match.midgameDone,builds:n,money:this.chars.map(d=>d.money),moneyErrors:l.slice(0,5),kills:this.chars.map(d=>d.kills)};return this.setAutopilot(!1),this.headless=i,h}}const i_=document.getElementById("view"),ch=document.getElementById("loading");try{const s=new e_(i_);ch.remove(),window.__game={game:s,runMatch:(t="quick",e)=>s.runMatch(t,{seed:e}),simulate:t=>s.simulate(t),autopilot:(t=!0)=>s.setAutopilot(t),skip:()=>{s.match.timer=.01},timeScale:t=>{s.timeScale=t},hold:(t,e=.5)=>{s.player.keys.add(t),setTimeout(()=>s.player.keys.delete(t),e*1e3)},look:(t,e=0)=>{s.player.ch.yaw=t,s.player.ch.pitch=e},mouse:(t=0)=>s.player.mouseAction(t),blockHold:t=>{s.player.mouseR=t},state:()=>({phase:s.match.phase,round:s.match.round,timer:+s.match.timer.toFixed(1),scores:s.match.teams.map(t=>t.score),build:s.match.teams.map(t=>t.buildZone),spawn:s.match.teams.map(t=>t.spawnZone),alive:s.chars.map(t=>t.alive),money:s.chars.map(t=>t.money),weapons:s.chars.map(t=>t.weapon),midgameDone:s.match.midgameDone})}}catch(s){ch.textContent="启动失败："+(s instanceof Error?s.message:String(s)),console.error(s)}
