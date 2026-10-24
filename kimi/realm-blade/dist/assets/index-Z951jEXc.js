(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const wa="180",Xl=0,Ya=1,ql=2,al=1,ol=2,cn=3,Qe=0,De=1,Oe=2,Sn=0,di=1,Za=2,Ka=3,ja=4,$l=5,On=100,Yl=101,Zl=102,Kl=103,jl=104,Jl=200,Ql=201,tc=202,ec=203,Pr=204,Lr=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,cc=213,hc=214,Dr=0,Ir=1,Ur=2,gi=3,Nr=4,Fr=5,Or=6,Br=7,ll=0,uc=1,dc=2,yn=0,fc=1,pc=2,mc=3,gc=4,_c=5,xc=6,vc=7,cl=300,_i=301,xi=302,zr=303,kr=304,Gs=306,Hr=1e3,zn=1001,Gr=1002,Re=1003,Mc=1004,Zi=1005,je=1006,$s=1007,kn=1008,tn=1009,hl=1010,ul=1011,Bi=1012,Aa=1013,Hn=1014,un=1015,Vi=1016,Ra=1017,Ca=1018,zi=1020,dl=35902,fl=35899,pl=1021,ml=1022,Ve=1023,ki=1026,Hi=1027,gl=1028,Pa=1029,_l=1030,La=1031,Da=1033,Ts=33776,ws=33777,As=33778,Rs=33779,Vr=35840,Wr=35841,Xr=35842,qr=35843,$r=36196,Yr=37492,Zr=37496,Kr=37808,jr=37809,Jr=37810,Qr=37811,ta=37812,ea=37813,na=37814,ia=37815,sa=37816,ra=37817,aa=37818,oa=37819,la=37820,ca=37821,ha=36492,ua=36494,da=36495,fa=36283,pa=36284,ma=36285,ga=36286,Sc=3200,yc=3201,xl=0,Ec=1,Mn="",Le="srgb",vi="srgb-linear",Ls="linear",Yt="srgb",Xn=7680,Ja=519,bc=512,Tc=513,wc=514,vl=515,Ac=516,Rc=517,Cc=518,Pc=519,_a=35044,Qa="300 es",Je=2e3,Ds=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cs=Math.PI/180,xa=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[s&255]+ye[s>>8&255]+ye[s>>16&255]+ye[s>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function Lc(s,t){return(s%t+t)%t}function Ys(s,t,e){return(1-e)*s+e*t}function Ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*x,b=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const A=Math.sqrt(E),w=Math.atan2(A,d*b);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const v=o*b;if(l=l*m+f*v,c=c*m+p*v,u=u*m+g*v,h=h*m+x*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=A,c*=A,u*=A,h*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+u*h+l*p-c*f,t[e+1]=l*g+u*f+c*h-o*p,t[e+2]=c*g+u*p+o*f-l*h,t[e+3]=u*g-o*h-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(r/2),f=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-r*l,this._y=i*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(to.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(to.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-r*i),h=2*(r*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=i+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zs.copy(this).projectOnVector(t),this.sub(Zs)}reflect(t){return this.sub(Zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zs=new I,to=new Wi;class Ut{constructor(t,e,n,i,r,a,o,l,c){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],x=i[0],m=i[3],d=i[6],b=i[1],E=i[4],v=i[7],A=i[2],w=i[5],R=i[8];return r[0]=a*x+o*b+l*A,r[3]=a*m+o*E+l*w,r[6]=a*d+o*v+l*R,r[1]=c*x+u*b+h*A,r[4]=c*m+u*E+h*w,r[7]=c*d+u*v+h*R,r[2]=f*x+p*b+g*A,r[5]=f*m+p*E+g*w,r[8]=f*d+p*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=e*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(i*c-u*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(u*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Ut;function Ml(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dc(){const s=Is("canvas");return s.style.display="block",s}const eo={};function Gi(s){s in eo||(eo[s]=!0,console.warn(s))}function Ic(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const no=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),io=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uc(){const s={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Yt&&(i.r=dn(i.r),i.g=dn(i.g),i.b=dn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Yt&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?Ls:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Gi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Gi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[vi]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:no,fromXYZ:io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:n,transfer:Yt,toXYZ:no,fromXYZ:io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),s}const Vt=Uc();function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let qn;class Nc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qn===void 0&&(qn=Is("canvas")),qn.width=t.width,qn.height=t.height;const i=qn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=qn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=dn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fc=0;class Ia{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(js(i[a].image)):r.push(js(i[a]))}else r=js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oc=0;const Js=new I;class be extends Si{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=zn,i=zn,r=je,a=kn,o=Ve,l=tn,c=be.DEFAULT_ANISOTROPY,u=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=En(),this.name="",this.source=new Ia(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case Gr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case Gr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=cl;be.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,v=(p+1)/2,A=(d+1)/2,w=(u+f)/4,R=(h+x)/4,L=(g+m)/4;return E>v&&E>A?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=w/n,r=R/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=L/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=R/r,i=L/r),this.set(n,i,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bc extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new be(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ia(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sl extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zc extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Re,this.minFilter=Re,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,We):We.fromBufferAttribute(r,a),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(t.matrixWorld),this.union(Ki)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),ji.subVectors(this.max,Ti),$n.subVectors(t.a,Ti),Yn.subVectors(t.b,Ti),Zn.subVectors(t.c,Ti),fn.subVectors(Yn,$n),pn.subVectors(Zn,Yn),An.subVectors($n,Zn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-An.z,An.y,fn.z,0,-fn.x,pn.z,0,-pn.x,An.z,0,-An.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-An.y,An.x,0];return!Qs(e,$n,Yn,Zn,ji)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,$n,Yn,Zn,ji))?!1:(Ji.crossVectors(fn,pn),e=[Ji.x,Ji.y,Ji.z],Qs(e,$n,Yn,Zn,ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const sn=[new I,new I,new I,new I,new I,new I,new I,new I],We=new I,Ki=new Xi,$n=new I,Yn=new I,Zn=new I,fn=new I,pn=new I,An=new I,Ti=new I,ji=new I,Ji=new I,Rn=new I;function Qs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Rn.fromArray(s,r);const o=i.x*Math.abs(Rn.x)+i.y*Math.abs(Rn.y)+i.z*Math.abs(Rn.z),l=t.dot(Rn),c=e.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kc=new Xi,wi=new I,tr=new I;class Vs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wi.subVectors(t,this.center);const e=wi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wi.copy(t.center).add(tr)),this.expandByPoint(wi.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const rn=new I,er=new I,Qi=new I,mn=new I,nr=new I,ts=new I,ir=new I;class Ua{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){er.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qi),o=mn.dot(this.direction),l=-mn.dot(Qi),c=mn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(er).addScaledVector(Qi,f),p}intersectSphere(t,e){rn.subVectors(t.center,this.origin);const n=rn.dot(this.direction),i=rn.dot(rn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,i,r){nr.subVectors(e,t),ts.subVectors(n,t),ir.crossVectors(nr,ts);let a=this.direction.dot(ir),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);const l=o*this.direction.dot(ts.crossVectors(mn,ts));if(l<0)return null;const c=o*this.direction.dot(nr.cross(mn));if(c<0||l+c>a)return null;const u=-o*mn.dot(ir);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,i,r,a,o,l,c,u,h,f,p,g,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,u,h,f,p,g,x,m)}set(t,e,n,i,r,a,o,l,c,u,h,f,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,p=l*h,g=c*u,x=c*h;e[0]=f+x*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=p*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,p=l*h,g=c*u,x=c*h;e[0]=f-x*o,e[4]=-a*h,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*u,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,p=a*h,g=o*u,x=o*h;e[0]=l*u,e[4]=g*c-p,e[8]=f*c+x,e[1]=l*h,e[5]=x*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=x-f*h,e[8]=g*h+p,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*h+g,e[10]=f-x*h}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,x=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+x,e[5]=a*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=o*u,e[10]=x*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hc,t,Gc)}lookAt(t,e,n){const i=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),gn.crossVectors(n,Ne),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),gn.crossVectors(n,Ne)),gn.normalize(),es.crossVectors(Ne,gn),i[0]=gn.x,i[4]=es.x,i[8]=Ne.x,i[1]=gn.y,i[5]=es.y,i[9]=Ne.y,i[2]=gn.z,i[6]=es.z,i[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],b=n[3],E=n[7],v=n[11],A=n[15],w=i[0],R=i[4],L=i[8],S=i[12],y=i[1],P=i[5],F=i[9],k=i[13],q=i[2],W=i[6],X=i[10],K=i[14],H=i[3],rt=i[7],ct=i[11],yt=i[15];return r[0]=a*w+o*y+l*q+c*H,r[4]=a*R+o*P+l*W+c*rt,r[8]=a*L+o*F+l*X+c*ct,r[12]=a*S+o*k+l*K+c*yt,r[1]=u*w+h*y+f*q+p*H,r[5]=u*R+h*P+f*W+p*rt,r[9]=u*L+h*F+f*X+p*ct,r[13]=u*S+h*k+f*K+p*yt,r[2]=g*w+x*y+m*q+d*H,r[6]=g*R+x*P+m*W+d*rt,r[10]=g*L+x*F+m*X+d*ct,r[14]=g*S+x*k+m*K+d*yt,r[3]=b*w+E*y+v*q+A*H,r[7]=b*R+E*P+v*W+A*rt,r[11]=b*L+E*F+v*X+A*ct,r[15]=b*S+E*k+v*K+A*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*h-i*c*h-r*o*f+n*c*f+i*o*p-n*l*p)+x*(+e*l*p-e*c*f+r*a*f-i*a*p+i*c*u-r*l*u)+m*(+e*c*h-e*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],b=h*m*c-x*f*c+x*l*p-o*m*p-h*l*d+o*f*d,E=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,v=u*x*c-g*h*c+g*o*p-a*x*p-u*o*d+a*h*d,A=g*h*l-u*x*l-g*o*f+a*x*f+u*o*m-a*h*m,w=e*b+n*E+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=b*R,t[1]=(x*f*r-h*m*r-x*i*p+n*m*p+h*i*d-n*f*d)*R,t[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*d+n*l*d)*R,t[3]=(h*l*r-o*f*r-h*i*c+n*f*c+o*i*p-n*l*p)*R,t[4]=E*R,t[5]=(u*m*r-g*f*r+g*i*p-e*m*p-u*i*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*d-e*l*d)*R,t[7]=(a*f*r-u*l*r+u*i*c-e*f*c-a*i*p+e*l*p)*R,t[8]=v*R,t[9]=(g*h*r-u*x*r-g*n*p+e*x*p+u*n*d-e*h*d)*R,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*d+e*o*d)*R,t[11]=(u*o*r-a*h*r-u*n*c+e*h*c+a*n*p-e*o*p)*R,t[12]=A*R,t[13]=(u*x*i-g*h*i+g*n*f-e*x*f-u*n*m+e*h*m)*R,t[14]=(g*o*i-a*x*i-g*n*l+e*x*l+a*n*m-e*o*m)*R,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,x=a*u,m=a*h,d=o*h,b=l*c,E=l*u,v=l*h,A=n.x,w=n.y,R=n.z;return i[0]=(1-(x+d))*A,i[1]=(p+v)*A,i[2]=(g-E)*A,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(f+d))*w,i[6]=(m+b)*w,i[7]=0,i[8]=(g+E)*R,i[9]=(m-b)*R,i[10]=(1-(f+x))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Kn.set(i[0],i[1],i[2]).length();const a=Kn.set(i[4],i[5],i[6]).length(),o=Kn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Xe.copy(this);const c=1/r,u=1/a,h=1/o;return Xe.elements[0]*=c,Xe.elements[1]*=c,Xe.elements[2]*=c,Xe.elements[4]*=u,Xe.elements[5]*=u,Xe.elements[6]*=u,Xe.elements[8]*=h,Xe.elements[9]*=h,Xe.elements[10]*=h,e.setFromRotationMatrix(Xe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Je,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),p=(n+i)/(n-i);let g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Je)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ds)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Je,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-i),f=-(e+t)/(e-t),p=-(n+i)/(n-i);let g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Je)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ds)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new I,Xe=new oe,Hc=new I(0,0,0),Gc=new I(1,1,1),gn=new I,es=new I,Ne=new I,so=new oe,ro=new Wi;class en{constructor(t=0,e=0,n=0,i=en.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return so.makeRotationFromQuaternion(t),this.setFromRotationMatrix(so,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ro.setFromEuler(this),this.setFromQuaternion(ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vc=0;const ao=new I,jn=new Wi,an=new oe,ns=new I,Ai=new I,Wc=new I,Xc=new Wi,oo=new I(1,0,0),lo=new I(0,1,0),co=new I(0,0,1),ho={type:"added"},qc={type:"removed"},Jn={type:"childadded",child:null},sr={type:"childremoved",child:null};class me extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new I,e=new en,n=new Wi,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ut}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.multiply(jn),this}rotateOnWorldAxis(t,e){return jn.setFromAxisAngle(t,e),this.quaternion.premultiply(jn),this}rotateX(t){return this.rotateOnAxis(oo,t)}rotateY(t){return this.rotateOnAxis(lo,t)}rotateZ(t){return this.rotateOnAxis(co,t)}translateOnAxis(t,e){return ao.copy(t).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oo,t)}translateY(t){return this.translateOnAxis(lo,t)}translateZ(t){return this.translateOnAxis(co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ai.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ai,ns,this.up):an.lookAt(ns,Ai,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),jn.setFromRotationMatrix(an),this.quaternion.premultiply(jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ho),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qc),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ho),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,t,Wc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ai,Xc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}me.DEFAULT_UP=new I(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new I,on=new I,rr=new I,ln=new I,Qn=new I,ti=new I,uo=new I,ar=new I,or=new I,lr=new I,cr=new ue,hr=new ue,ur=new ue;class Be{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),qe.subVectors(t,e),i.cross(qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){qe.subVectors(i,e),on.subVectors(n,e),rr.subVectors(t,e);const a=qe.dot(qe),o=qe.dot(on),l=qe.dot(rr),c=on.dot(on),u=on.dot(rr),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ln.x),l.addScaledVector(a,ln.y),l.addScaledVector(o,ln.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return cr.setScalar(0),hr.setScalar(0),ur.setScalar(0),cr.fromBufferAttribute(t,e),hr.fromBufferAttribute(t,n),ur.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(cr,r.x),a.addScaledVector(hr,r.y),a.addScaledVector(ur,r.z),a}static isFrontFacing(t,e,n,i){return qe.subVectors(n,e),on.subVectors(t,e),qe.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),on.subVectors(this.a,this.b),qe.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Qn.subVectors(i,n),ti.subVectors(r,n),ar.subVectors(t,n);const l=Qn.dot(ar),c=ti.dot(ar);if(l<=0&&c<=0)return e.copy(n);or.subVectors(t,i);const u=Qn.dot(or),h=ti.dot(or);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Qn,a);lr.subVectors(t,r);const p=Qn.dot(lr),g=ti.dot(lr);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ti,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return uo.subVectors(r,i),o=(h-u)/(h-u+(p-g)),e.copy(i).addScaledVector(uo,o);const d=1/(m+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},is={h:0,s:0,l:0};function dr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Vt.workingColorSpace){if(t=Lc(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=dr(a,r,t+1/3),this.g=dr(a,r,t),this.b=dr(a,r,t-1/3)}return Vt.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Vt.workingToColorSpace(Ee.copy(this),t),Math.round(kt(Ee.r*255,0,255))*65536+Math.round(kt(Ee.g*255,0,255))*256+Math.round(kt(Ee.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(Ee.copy(this),e);const n=Ee.r,i=Ee.g,r=Ee.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Le){Vt.workingToColorSpace(Ee.copy(this),t);const e=Ee.r,n=Ee.g,i=Ee.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(is);const n=Ys(_n.h,is.h,e),i=Ys(_n.s,is.s,e),r=Ys(_n.l,is.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new zt;zt.NAMES=yl;let $c=0;class Vn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=En(),this.name="",this.type="Material",this.blending=di,this.side=Qe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pr,this.blendDst=Lr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ja,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Qe&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pr&&(n.blendSrc=this.blendSrc),this.blendDst!==Lr&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ja&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Fa extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new I,ss=new Ct;let Yc=0;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_a,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ss.fromBufferAttribute(this,e),ss.applyMatrix3(t),this.setXY(e,ss.x,ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ke(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ke(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ke(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ke(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_a&&(t.usage=this.usage),t}}class El extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bl extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zc=0;const He=new oe,fr=new me,ei=new I,Fe=new Xi,Ri=new Xi,ve=new I;class Ce extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ml(t)?bl:El)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return fr.lookAt(t),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Fe.min,Ri.min),Fe.expandByPoint(ve),ve.addVectors(Fe.max,Ri.max),Fe.expandByPoint(ve)):(Fe.expandByPoint(Ri.min),Fe.expandByPoint(Ri.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ve.fromBufferAttribute(o,c),l&&(ei.fromBufferAttribute(t,c),ve.add(ei)),i=Math.max(i,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,u=new I,h=new I,f=new Ct,p=new Ct,g=new Ct,x=new I,m=new I;function d(L,S,y){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[L].add(x),o[S].add(x),o[y].add(x),l[L].add(m),l[S].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,S=b.length;L<S;++L){const y=b[L],P=y.start,F=y.count;for(let k=P,q=P+F;k<q;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new I,v=new I,A=new I,w=new I;function R(L){A.fromBufferAttribute(i,L),w.copy(A);const S=o[L];E.copy(S),E.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,P)}for(let L=0,S=b.length;L<S;++L){const y=b[L],P=y.start,F=y.count;for(let k=P,q=P+F;k<q;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new $e(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new oe,Cn=new Ua,rs=new Vs,po=new I,as=new I,os=new I,ls=new I,pr=new I,cs=new I,mo=new I,hs=new I;class ee extends me{constructor(t=new Ce,e=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){cs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(pr.fromBufferAttribute(h,t),a?cs.addScaledVector(pr,u):cs.addScaledVector(pr.sub(e),u))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(rs.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(rs,po)===null||Cn.origin.distanceToSquared(po)>(t.far-t.near)**2))&&(fo.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(fo),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,A=E;v<A;v+=3){const w=o.getX(v),R=o.getX(v+1),L=o.getX(v+2);i=us(this,d,t,n,c,u,h,w,R,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);i=us(this,a,t,n,c,u,h,b,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,A=E;v<A;v+=3){const w=v,R=v+1,L=v+2;i=us(this,d,t,n,c,u,h,w,R,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=m,E=m+1,v=m+2;i=us(this,a,t,n,c,u,h,b,E,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Kc(s,t,e,n,i,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Qe,o),l===null)return null;hs.copy(o),hs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hs);return c<e.near||c>e.far?null:{distance:c,point:hs.clone(),object:s}}function us(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,as),s.getVertexPosition(l,os),s.getVertexPosition(c,ls);const u=Kc(s,t,e,n,as,os,ls,mo);if(u){const h=new I;Be.getBarycoord(mo,as,os,ls,h),i&&(u.uv=Be.getInterpolatedAttribute(i,o,l,c,h,new Ct)),r&&(u.uv1=Be.getInterpolatedAttribute(r,o,l,c,h,new Ct)),a&&(u.normal=Be.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Be.getNormal(as,os,ls,f.normal),u.face=f,u.barycoord=h}return u}class yi extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(h,2));function g(x,m,d,b,E,v,A,w,R,L,S){const y=v/R,P=A/L,F=v/2,k=A/2,q=w/2,W=R+1,X=L+1;let K=0,H=0;const rt=new I;for(let ct=0;ct<X;ct++){const yt=ct*P-k;for(let Ot=0;Ot<W;Ot++){const jt=Ot*y-F;rt[x]=jt*b,rt[m]=yt*E,rt[d]=q,c.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[d]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Ot/R),h.push(1-ct/L),K+=1}}for(let ct=0;ct<L;ct++)for(let yt=0;yt<R;yt++){const Ot=f+yt+W*ct,jt=f+yt+W*(ct+1),ie=f+(yt+1)+W*(ct+1),Wt=f+(yt+1)+W*ct;l.push(Ot,jt,Wt),l.push(jt,ie,Wt),H+=6}o.addGroup(p,H,S),p+=H,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ae(s){const t={};for(let e=0;e<s.length;e++){const n=Mi(s[e]);for(const i in n)t[i]=n[i]}return t}function jc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const Jc={clone:Mi,merge:Ae};var Qc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qc,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=jc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class wl extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new I,go=new Ct,_o=new Ct;class Ge extends wl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xn.x,xn.y).multiplyScalar(-t/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-t/xn.z)}getViewSize(t,e){return this.getViewBounds(t,go,_o),e.subVectors(_o,go)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class eh extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(ni,ii,t,e);i.layers=this.layers,this.add(i);const r=new Ge(ni,ii,t,e);r.layers=this.layers,this.add(r);const a=new Ge(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Ge(ni,ii,t,e);o.layers=this.layers,this.add(o);const l=new Ge(ni,ii,t,e);l.layers=this.layers,this.add(l);const c=new Ge(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Al extends be{constructor(t=[],e=_i,n,i,r,a,o,l,c,u){super(t,e,n,i,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nh extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Al(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new yi(5,5,5),r=new bn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Sn});r.uniforms.tEquirect.value=e;const a=new ee(i,r),o=e.minFilter;return e.minFilter===kn&&(e.minFilter=je),new eh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class pe extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ih={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ih)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Oa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sh extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=_a,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const we=new I;class Us{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ke(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ke(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ke(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ke(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ke(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new $e(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Us(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class va extends Vn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let si;const Ci=new I,ri=new I,ai=new I,oi=new Ct,Pi=new Ct,Rl=new oe,ds=new I,Li=new I,fs=new I,xo=new Ct,gr=new Ct,vo=new Ct;class Mo extends me{constructor(t=new va){if(super(),this.isSprite=!0,this.type="Sprite",si===void 0){si=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rh(e,5);si.setIndex([0,1,2,0,2,3]),si.setAttribute("position",new Us(n,3,0,!1)),si.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=si,this.material=t,this.center=new Ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ri.setFromMatrixScale(this.matrixWorld),Rl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ri.multiplyScalar(-ai.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ps(ds.set(-.5,-.5,0),ai,a,ri,i,r),ps(Li.set(.5,-.5,0),ai,a,ri,i,r),ps(fs.set(.5,.5,0),ai,a,ri,i,r),xo.set(0,0),gr.set(1,0),vo.set(1,1);let o=t.ray.intersectTriangle(ds,Li,fs,!1,Ci);if(o===null&&(ps(Li.set(-.5,.5,0),ai,a,ri,i,r),gr.set(0,1),o=t.ray.intersectTriangle(ds,fs,Li,!1,Ci),o===null))return;const l=t.ray.origin.distanceTo(Ci);l<t.near||l>t.far||e.push({distance:l,point:Ci.clone(),uv:Be.getInterpolation(Ci,ds,Li,fs,xo,gr,vo,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ps(s,t,e,n,i,r){oi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Pi.x=r*oi.x-i*oi.y,Pi.y=i*oi.x+r*oi.y):Pi.copy(oi),s.copy(t),s.x+=Pi.x,s.y+=Pi.y,s.applyMatrix4(Rl)}class ah extends be{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Re,u=Re,h,f){super(null,a,o,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _r=new I,oh=new I,lh=new Ut;class vn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=_r.subVectors(n,e).cross(oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(_r),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lh.getNormalMatrix(t),i=this.coplanarPoint(_r).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Vs,ch=new Ct(.5,.5),ms=new I;class Ba{constructor(t=new vn,e=new vn,n=new vn,i=new vn,r=new vn,a=new vn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],b=r[12],E=r[13],v=r[14],A=r[15];if(i[0].setComponents(c-a,p-u,d-g,A-b).normalize(),i[1].setComponents(c+a,p+u,d+g,A+b).normalize(),i[2].setComponents(c+o,p+h,d+x,A+E).normalize(),i[3].setComponents(c-o,p-h,d-x,A-E).normalize(),n)i[4].setComponents(l,f,m,v).normalize(),i[5].setComponents(c-l,p-f,d-m,A-v).normalize();else if(i[4].setComponents(c-l,p-f,d-m,A-v).normalize(),e===Je)i[5].setComponents(c+l,p+f,d+m,A+v).normalize();else if(e===Ds)i[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){Pn.center.set(0,0,0);const e=ch.distanceTo(t.center);return Pn.radius=.7071067811865476+e,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ma extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ns=new I,Fs=new I,So=new oe,Di=new Ua,gs=new Vs,xr=new I,yo=new I;class hh extends me{constructor(t=new Ce,e=new Ma){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ns.fromBufferAttribute(e,i-1),Fs.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ns.distanceTo(Fs);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),gs.radius+=r,t.ray.intersectsSphere(gs)===!1)return;So.copy(i).invert(),Di.copy(t.ray).applyMatrix4(So);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=u.getX(x),b=u.getX(x+1),E=_s(this,t,Di,l,d,b,x);E&&e.push(E)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(p),d=_s(this,t,Di,l,x,m,g-1);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const d=_s(this,t,Di,l,x,x+1,x);d&&e.push(d)}if(this.isLineLoop){const x=_s(this,t,Di,l,g-1,p,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _s(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(Ns.fromBufferAttribute(o,i),Fs.fromBufferAttribute(o,r),e.distanceSqToSegment(Ns,Fs,xr,yo)>n)return;xr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xr);if(!(c<t.near||c>t.far))return{distance:c,point:yo.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const Eo=new I,bo=new I;class uh extends hh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Eo.fromBufferAttribute(e,i),bo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Eo.distanceTo(bo);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dh extends be{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cl extends be{constructor(t,e,n=Hn,i,r,a,o=Re,l=Re,c,u=ki,h=1){if(u!==ki&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:h};super(f,i,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ia(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Pl extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Os extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,u=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const p=n+h/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(o,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pi extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],p=[];let g=0;const x=[],m=n/2;let d=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ne(h,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function b(){const v=new I,A=new I;let w=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const S=[],y=L/r,P=y*(e-t)+t;for(let F=0;F<=i;F++){const k=F/i,q=k*l+o,W=Math.sin(q),X=Math.cos(q);A.x=P*W,A.y=-y*n+m,A.z=P*X,h.push(A.x,A.y,A.z),v.set(W,R,X).normalize(),f.push(v.x,v.y,v.z),p.push(k,1-y),S.push(g++)}x.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){const y=x[S][L],P=x[S+1][L],F=x[S+1][L+1],k=x[S][L+1];(t>0||S!==0)&&(u.push(y,P,k),w+=3),(e>0||S!==r-1)&&(u.push(P,F,k),w+=3)}c.addGroup(d,w,0),d+=w}function E(v){const A=g,w=new Ct,R=new I;let L=0;const S=v===!0?t:e,y=v===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const q=F/i*l+o,W=Math.cos(q),X=Math.sin(q);R.x=S*X,R.y=m*y,R.z=S*W,h.push(R.x,R.y,R.z),f.push(0,y,0),w.x=W*.5+.5,w.y=X*.5*y+.5,p.push(w.x,w.y),g++}for(let F=0;F<i;F++){const k=A+F,q=P+F;v===!0?u.push(q,q+1,k):u.push(q+1,q,k),L+=3}c.addGroup(d,L,v===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bs extends pi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Bs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class za extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),u(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const E=new I,v=new I,A=new I;for(let w=0;w<e.length;w+=3)p(e[w+0],E),p(e[w+1],v),p(e[w+2],A),l(E,v,A,b)}function l(b,E,v,A){const w=A+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const S=b.clone().lerp(v,L/w),y=E.clone().lerp(v,L/w),P=w-L;for(let F=0;F<=P;F++)F===0&&L===w?R[L][F]=S:R[L][F]=S.clone().lerp(y,F/P)}for(let L=0;L<w;L++)for(let S=0;S<2*(w-L)-1;S++){const y=Math.floor(S/2);S%2===0?(f(R[L][y+1]),f(R[L+1][y]),f(R[L][y])):(f(R[L][y+1]),f(R[L+1][y+1]),f(R[L+1][y]))}}function c(b){const E=new I;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(b),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function u(){const b=new I;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const v=m(b)/2/Math.PI+.5,A=d(b)/Math.PI+.5;a.push(v,1-A)}g(),h()}function h(){for(let b=0;b<a.length;b+=6){const E=a[b+0],v=a[b+2],A=a[b+4],w=Math.max(E,v,A),R=Math.min(E,v,A);w>.9&&R<.1&&(E<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function p(b,E){const v=b*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const b=new I,E=new I,v=new I,A=new I,w=new Ct,R=new Ct,L=new Ct;for(let S=0,y=0;S<r.length;S+=9,y+=6){b.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),A.copy(b).add(E).add(v).divideScalar(3);const P=m(A);x(w,y+0,b,P),x(R,y+2,E,P),x(L,y+4,v,P)}}function x(b,E,v,A){A<0&&b.x===1&&(a[E]=b.x-1),v.x===0&&v.z===0&&(a[E]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function d(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.vertices,t.indices,t.radius,t.details)}}const xs=new I,vs=new I,vr=new I,Ms=new Be;class fh extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Cs*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:x,b:m,c:d}=Ms;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),Ms.getNormal(vr),h[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const E=(b+1)%3,v=h[b],A=h[E],w=Ms[u[b]],R=Ms[u[E]],L=`${v}_${A}`,S=`${A}_${v}`;S in f&&f[S]?(vr.dot(f[S].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(R.x,R.y,R.z)),f[S]=null):L in f||(f[L]={index0:c[b],index1:c[E],normal:vr.clone()})}}for(const g in f)if(f[g]){const{index0:x,index1:m}=f[g];xs.fromBufferAttribute(o,x),vs.fromBufferAttribute(o,m),p.push(xs.x,xs.y,xs.z),p.push(vs.x,vs.y,vs.z)}this.setAttribute("position",new ne(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class qi extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<u;d++){const b=d*f-a;for(let E=0;E<c;E++){const v=E*h-r;g.push(v,-b,0),x.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const E=b+c*d,v=b+c*(d+1),A=b+1+c*(d+1),w=b+1+c*d;p.push(E,v,w),p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fi extends Ce{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,p=new I,g=new Ct;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let x=0;x<i;x++){const m=x*(n+1);for(let d=0;d<n;d++){const b=d+m,E=b,v=b+n+1,A=b+n+2,w=b+1;o.push(E,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Oi extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new I,f=new I,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const b=[],E=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(i+w*r)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(i+w*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(w+v,1-E),b.push(c++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const E=u[d][b+1],v=u[d][b],A=u[d+1][b],w=u[d+1][b+1];(d!==0||a>0)&&p.push(E,v,w),(d!==n-1||l<Math.PI)&&p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ka extends za{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ka(t.radius,t.detail)}}class To extends Vn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new zt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ph extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mh extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ll extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gh extends Ll{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Mr=new oe,wo=new I,Ao=new I;class _h{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ba,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wo.setFromMatrixPosition(t.matrixWorld),e.position.copy(wo),Ao.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ao),e.updateMatrixWorld(),Mr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Dl extends wl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xh extends _h{constructor(){super(new Dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends Ll{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vh extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Co=new oe;class Mh{constructor(t,e,n=0,i=1/0){this.ray=new Ua(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Co.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Co),this}intersectObject(t,e=!0,n=[]){return Sa(t,this,n,e),n.sort(Po),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Sa(t[i],this,n,e);return n.sort(Po),n}}function Po(s,t){return s.distance-t.distance}function Sa(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Sa(r[a],t,e,!0)}}function Lo(s,t,e,n){const i=Sh(n);switch(e){case pl:return s*t;case gl:return s*t/i.components*i.byteLength;case Pa:return s*t/i.components*i.byteLength;case _l:return s*t*2/i.components*i.byteLength;case La:return s*t*2/i.components*i.byteLength;case ml:return s*t*3/i.components*i.byteLength;case Ve:return s*t*4/i.components*i.byteLength;case Da:return s*t*4/i.components*i.byteLength;case Ts:case ws:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case As:case Rs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wr:case qr:return Math.max(s,16)*Math.max(t,8)/4;case Vr:case Xr:return Math.max(s,8)*Math.max(t,8)/2;case $r:case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ta:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ea:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case na:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sa:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case aa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case la:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ca:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ha:case ua:case da:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fa:case pa:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ma:case ga:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sh(s){switch(s){case tn:case hl:return{byteLength:1,components:1};case Bi:case ul:case Vi:return{byteLength:2,components:1};case Ra:case Ca:return{byteLength:2,components:4};case Hn:case Aa:case un:return{byteLength:4,components:1};case dl:case fl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);function Il(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function yh(s){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,o),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
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
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
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
#endif`,Ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fh=`#ifdef USE_IRIDESCENCE
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
#endif`,Oh=`#ifdef USE_BUMPMAP
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
#endif`,Bh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,$h=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iu=`#ifdef USE_ENVMAP
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
#endif`,su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hu=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,du=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,mu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Su=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Du=`#if defined( USE_POINTS_UV )
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
#endif`,Iu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bu=`#ifdef USE_MORPHTARGETS
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
#endif`,zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$u=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ju=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cd=`#ifdef USE_SKINNING
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
#endif`,hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ud=`#ifdef USE_SKINNING
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
#endif`,dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gd=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_d=`#ifdef USE_TRANSMISSION
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
#endif`,xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ed=`uniform sampler2D t2D;
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
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
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
}`,Cd=`#if DEPTH_PACKING == 3200
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
}`,Pd=`#define DISTANCE
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
}`,Ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Id=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`uniform float scale;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,Od=`uniform vec3 diffuse;
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
}`,Bd=`#define LAMBERT
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
}`,zd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,kd=`#define MATCAP
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
}`,Hd=`#define MATCAP
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
}`,Gd=`#define NORMAL
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
}`,Vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wd=`#define PHONG
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
}`,Xd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,qd=`#define STANDARD
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
}`,$d=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Yd=`#define TOON
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
}`,Zd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Kd=`uniform float size;
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
}`,jd=`uniform vec3 diffuse;
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
}`,Jd=`#include <common>
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
}`,Qd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,tf=`uniform float rotation;
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
}`,ef=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:Eh,alphahash_pars_fragment:bh,alphamap_fragment:Th,alphamap_pars_fragment:wh,alphatest_fragment:Ah,alphatest_pars_fragment:Rh,aomap_fragment:Ch,aomap_pars_fragment:Ph,batching_pars_vertex:Lh,batching_vertex:Dh,begin_vertex:Ih,beginnormal_vertex:Uh,bsdfs:Nh,iridescence_fragment:Fh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:Bh,clipping_planes_pars_fragment:zh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Hh,color_fragment:Gh,color_pars_fragment:Vh,color_pars_vertex:Wh,color_vertex:Xh,common:qh,cube_uv_reflection_fragment:$h,defaultnormal_vertex:Yh,displacementmap_pars_vertex:Zh,displacementmap_vertex:Kh,emissivemap_fragment:jh,emissivemap_pars_fragment:Jh,colorspace_fragment:Qh,colorspace_pars_fragment:tu,envmap_fragment:eu,envmap_common_pars_fragment:nu,envmap_pars_fragment:iu,envmap_pars_vertex:su,envmap_physical_pars_fragment:mu,envmap_vertex:ru,fog_vertex:au,fog_pars_vertex:ou,fog_fragment:lu,fog_pars_fragment:cu,gradientmap_pars_fragment:hu,lightmap_pars_fragment:uu,lights_lambert_fragment:du,lights_lambert_pars_fragment:fu,lights_pars_begin:pu,lights_toon_fragment:gu,lights_toon_pars_fragment:_u,lights_phong_fragment:xu,lights_phong_pars_fragment:vu,lights_physical_fragment:Mu,lights_physical_pars_fragment:Su,lights_fragment_begin:yu,lights_fragment_maps:Eu,lights_fragment_end:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:wu,logdepthbuf_pars_vertex:Au,logdepthbuf_vertex:Ru,map_fragment:Cu,map_pars_fragment:Pu,map_particle_fragment:Lu,map_particle_pars_fragment:Du,metalnessmap_fragment:Iu,metalnessmap_pars_fragment:Uu,morphinstance_vertex:Nu,morphcolor_vertex:Fu,morphnormal_vertex:Ou,morphtarget_pars_vertex:Bu,morphtarget_vertex:zu,normal_fragment_begin:ku,normal_fragment_maps:Hu,normal_pars_fragment:Gu,normal_pars_vertex:Vu,normal_vertex:Wu,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:$u,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:Zu,opaque_fragment:Ku,packing:ju,premultiplied_alpha_fragment:Ju,project_vertex:Qu,dithering_fragment:td,dithering_pars_fragment:ed,roughnessmap_fragment:nd,roughnessmap_pars_fragment:id,shadowmap_pars_fragment:sd,shadowmap_pars_vertex:rd,shadowmap_vertex:ad,shadowmask_pars_fragment:od,skinbase_vertex:ld,skinning_pars_vertex:cd,skinning_vertex:hd,skinnormal_vertex:ud,specularmap_fragment:dd,specularmap_pars_fragment:fd,tonemapping_fragment:pd,tonemapping_pars_fragment:md,transmission_fragment:gd,transmission_pars_fragment:_d,uv_pars_fragment:xd,uv_pars_vertex:vd,uv_vertex:Md,worldpos_vertex:Sd,background_vert:yd,background_frag:Ed,backgroundCube_vert:bd,backgroundCube_frag:Td,cube_vert:wd,cube_frag:Ad,depth_vert:Rd,depth_frag:Cd,distanceRGBA_vert:Pd,distanceRGBA_frag:Ld,equirect_vert:Dd,equirect_frag:Id,linedashed_vert:Ud,linedashed_frag:Nd,meshbasic_vert:Fd,meshbasic_frag:Od,meshlambert_vert:Bd,meshlambert_frag:zd,meshmatcap_vert:kd,meshmatcap_frag:Hd,meshnormal_vert:Gd,meshnormal_frag:Vd,meshphong_vert:Wd,meshphong_frag:Xd,meshphysical_vert:qd,meshphysical_frag:$d,meshtoon_vert:Yd,meshtoon_frag:Zd,points_vert:Kd,points_frag:jd,shadow_vert:Jd,shadow_frag:Qd,sprite_vert:tf,sprite_frag:ef},st={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ze={basic:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ae([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ae([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ae([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ae([st.points,st.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ae([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ae([st.common,st.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ae([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ae([st.sprite,st.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ae([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ae([st.lights,st.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Ze.physical={uniforms:Ae([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Ss={r:0,b:0,g:0},Ln=new en,nf=new oe;function sf(s,t,e,n,i,r,a){const o=new zt(0);let l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?e:t).get(v)),v}function x(E){let v=!1;const A=g(E);A===null?d(o,l):A&&A.isColor&&(d(A,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Gs)?(u===void 0&&(u=new ee(new yi(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Mi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ln.copy(v.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nf.makeRotationFromEuler(Ln)),u.material.toneMapped=Vt.getTransfer(A.colorSpace)!==Yt,(h!==A||f!==A.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,f=A.version,p=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ee(new qi(2,2),new bn({name:"BackgroundMaterial",uniforms:Mi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(A.colorSpace)!==Yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||f!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=A,f=A.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,v){E.getRGB(Ss,Tl(s)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,v,a)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:x,addToRenderList:m,dispose:b}}function rf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,P,F,k,q){let W=!1;const X=h(k,F,P);r!==X&&(r=X,c(r.object)),W=p(y,k,F,q),W&&g(y,k,F,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(y,P,F,k),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,P,F){const k=F.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let W=q[P.id];W===void 0&&(W={},q[P.id]=W);let X=W[k];return X===void 0&&(X=f(l()),W[k]=X),X}function f(y){const P=[],F=[],k=[];for(let q=0;q<e;q++)P[q]=0,F[q]=0,k[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,P,F,k){const q=r.attributes,W=P.attributes;let X=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){const ct=q[H];let yt=W[H];if(yt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),ct===void 0||ct.attribute!==yt||yt&&ct.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(y,P,F,k){const q={},W=P.attributes;let X=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){let ct=W[H];ct===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor));const yt={};yt.attribute=ct,ct&&ct.data&&(yt.data=ct.data),q[H]=yt,X++}r.attributes=q,r.attributesNum=X,r.index=k}function x(){const y=r.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const F=r.newAttributes,k=r.enabledAttributes,q=r.attributeDivisors;F[y]=1,k[y]===0&&(s.enableVertexAttribArray(y),k[y]=1),q[y]!==P&&(s.vertexAttribDivisor(y,P),q[y]=P)}function b(){const y=r.newAttributes,P=r.enabledAttributes;for(let F=0,k=P.length;F<k;F++)P[F]!==y[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function E(y,P,F,k,q,W,X){X===!0?s.vertexAttribIPointer(y,P,F,q,W):s.vertexAttribPointer(y,P,F,k,q,W)}function v(y,P,F,k){x();const q=k.attributes,W=F.getAttributes(),X=P.defaultAttributeValues;for(const K in W){const H=W[K];if(H.location>=0){let rt=q[K];if(rt===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const ct=rt.normalized,yt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const jt=Ot.buffer,ie=Ot.type,Wt=Ot.bytesPerElement,$=ie===s.INT||ie===s.UNSIGNED_INT||rt.gpuType===Aa;if(rt.isInterleavedBufferAttribute){const j=rt.data,dt=j.stride,Pt=rt.offset;if(j.isInstancedInterleavedBuffer){for(let St=0;St<H.locationSize;St++)d(H.location+St,j.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let St=0;St<H.locationSize;St++)m(H.location+St);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let St=0;St<H.locationSize;St++)E(H.location+St,yt/H.locationSize,ie,ct,dt*Wt,(Pt+yt/H.locationSize*St)*Wt,$)}else{if(rt.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)d(H.location+j,rt.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let j=0;j<H.locationSize;j++)m(H.location+j);s.bindBuffer(s.ARRAY_BUFFER,jt);for(let j=0;j<H.locationSize;j++)E(H.location+j,yt/H.locationSize,ie,ct,yt*Wt,yt/H.locationSize*j*Wt,$)}}else if(X!==void 0){const ct=X[K];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(H.location,ct);break;case 3:s.vertexAttrib3fv(H.location,ct);break;case 4:s.vertexAttrib4fv(H.location,ct);break;default:s.vertexAttrib1fv(H.location,ct)}}}}b()}function A(){L();for(const y in n){const P=n[y];for(const F in P){const k=P[F];for(const q in k)u(k[q].object),delete k[q];delete P[F]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const F in P){const k=P[F];for(const q in k)u(k[q].object),delete k[q];delete P[F]}delete n[y.id]}function R(y){for(const P in n){const F=n[P];if(F[y.id]===void 0)continue;const k=F[y.id];for(const q in k)u(k[q].object),delete k[q];delete F[y.id]}}function L(){S(),a=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function af(s,t,e){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function of(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Ve&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==tn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==un&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function lf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new vn,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,E=b*4;let v=d.clippingState||null;l.value=v,v=u(g,f,E,p);for(let A=0;A!==E;++A)v[A]=e[A];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,v=p;E!==x;++E,v+=4)a.copy(h[E]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function cf(s){let t=new WeakMap;function e(a,o){return o===zr?a.mapping=_i:o===kr&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zr||o===kr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new nh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ui=4,Do=[.125,.215,.35,.446,.526,.582],Bn=20,Sr=new Dl,Io=new zt;let yr=null,Er=0,br=0,Tr=!1;const Nn=(1+Math.sqrt(5))/2,li=1/Nn,Uo=[new I(-Nn,li,0),new I(Nn,li,0),new I(-li,0,Nn),new I(li,0,Nn),new I(0,Nn,-li),new I(0,Nn,li),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],hf=new I;class No{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=hf}=r;yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yr,Er,br),this._renderer.xr.enabled=Tr,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Vi,format:Ve,colorSpace:vi,depthBuffer:!1},i=Fo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(r)),this._blurMaterial=df(r,t,e)}return i}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Sr)}_sceneToCubeUV(t,e,n,i,r){const l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Io),h.toneMapping=yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const x=new Fa({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),m=new ee(new yi,x);let d=!1;const b=t.background;b?b.isColor&&(x.color.copy(b),t.background=null,d=!0):(x.color.copy(Io),d=!0);for(let E=0;E<6;E++){const v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const A=this._cubeSize;ys(i,v*A,E>2?A:0,A,A),h.setRenderTarget(i),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ys(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Uo[(i-r-1)%Uo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Bn-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Bn;m>Bn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bn}`);const d=[];let b=0;for(let R=0;R<Bn;++R){const L=R/x,S=Math.exp(-L*L/2);d.push(S),R===0?b+=S:R<m&&(b+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const v=this._sizeLods[i],A=3*v*(i>E-ui?i-E+ui:0),w=4*(this._cubeSize-v);ys(e,A,w,3*v,2*v),l.setRenderTarget(e),l.render(h,Sr)}}function uf(s){const t=[],e=[],n=[];let i=s;const r=s-ui+1+Do.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-ui?l=Do[a-s+ui-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),E=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,L=w>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];b.set(S,x*g*w),E.set(f,m*g*w);const y=[w,w,w,w,w,w];v.set(y,d*g*w)}const A=new Ce;A.setAttribute("position",new $e(b,x)),A.setAttribute("uv",new $e(E,m)),A.setAttribute("faceIndex",new $e(v,d)),t.push(A),i>ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fo(s,t,e){const n=new Gn(s,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function df(s,t,e){const n=new Float32Array(Bn),i=new I(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Oo(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ha(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Bo(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ff(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zr||l===kr,u=l===_i||l===xi;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new No(s)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&i(p)?(e===null&&(e=new No(s)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function pf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Gi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mf(s,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)t.update(f[p],s.ARRAY_BUFFER)}function c(h){const f=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let E=0,v=b.length;E<v;E+=3){const A=b[E+0],w=b[E+1],R=b[E+2];f.push(A,w,w,R,R,A)}}else if(g!==void 0){const b=g.array;x=g.version;for(let E=0,v=b.length/3-1;E<v;E+=3){const A=E+0,w=E+1,R=E+2;f.push(A,w,w,R,R,A)}}else return;const m=new(Ml(f)?bl:El)(f,1);m.version=x;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function gf(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){s.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];e.update(d,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _f(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xf(s,t,e){const n=new WeakMap,i=new ue;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const R=new Float32Array(A*w*4*h),L=new Sl(R,A,w,h);L.type=un,L.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const F=d[P],k=b[P],q=E[P],W=A*w*4*P;for(let X=0;X<F.count;X++){const K=X*S;g===!0&&(i.fromBufferAttribute(F,X),R[W+K+0]=i.x,R[W+K+1]=i.y,R[W+K+2]=i.z,R[W+K+3]=0),x===!0&&(i.fromBufferAttribute(k,X),R[W+K+4]=i.x,R[W+K+5]=i.y,R[W+K+6]=i.z,R[W+K+7]=0),m===!0&&(i.fromBufferAttribute(q,X),R[W+K+8]=i.x,R[W+K+9]=i.y,R[W+K+10]=i.z,R[W+K+11]=q.itemSize===4?i.w:1)}}f={count:h,texture:L,size:new Ct(A,w)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function vf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ul=new be,zo=new Cl(1,1),Nl=new Sl,Fl=new zc,Ol=new Al,ko=[],Ho=[],Go=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function Ei(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ko[i];if(r===void 0&&(r=new Float32Array(i),ko[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ws(s,t){let e=Ho[t];e===void 0&&(e=new Int32Array(t),Ho[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Wo.set(n),s.uniformMatrix2fv(this.addr,!1,Wo),_e(e,n)}}function Tf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Vo.set(n),s.uniformMatrix3fv(this.addr,!1,Vo),_e(e,n)}}function wf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Go.set(n),s.uniformMatrix4fv(this.addr,!1,Go),_e(e,n)}}function Af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(zo.compareFunction=vl,r=zo):r=Ul,e.setTexture2D(t||r,i)}function Ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fl,i)}function Of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ol,i)}function Bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nl,i)}function zf(s){switch(s){case 5126:return Mf;case 35664:return Sf;case 35665:return yf;case 35666:return Ef;case 35674:return bf;case 35675:return Tf;case 35676:return wf;case 5124:case 35670:return Af;case 35667:case 35671:return Rf;case 35668:case 35672:return Cf;case 35669:case 35673:return Pf;case 5125:return Lf;case 36294:return Df;case 36295:return If;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Nf;case 35679:case 36299:case 36307:return Ff;case 35680:case 36300:case 36308:case 36293:return Of;case 36289:case 36303:case 36311:case 36292:return Bf}}function kf(s,t){s.uniform1fv(this.addr,t)}function Hf(s,t){const e=Ei(t,this.size,2);s.uniform2fv(this.addr,e)}function Gf(s,t){const e=Ei(t,this.size,3);s.uniform3fv(this.addr,e)}function Vf(s,t){const e=Ei(t,this.size,4);s.uniform4fv(this.addr,e)}function Wf(s,t){const e=Ei(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xf(s,t){const e=Ei(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qf(s,t){const e=Ei(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function $f(s,t){s.uniform1iv(this.addr,t)}function Yf(s,t){s.uniform2iv(this.addr,t)}function Zf(s,t){s.uniform3iv(this.addr,t)}function Kf(s,t){s.uniform4iv(this.addr,t)}function jf(s,t){s.uniform1uiv(this.addr,t)}function Jf(s,t){s.uniform2uiv(this.addr,t)}function Qf(s,t){s.uniform3uiv(this.addr,t)}function tp(s,t){s.uniform4uiv(this.addr,t)}function ep(s,t,e){const n=this.cache,i=t.length,r=Ws(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ul,r[a])}function np(s,t,e){const n=this.cache,i=t.length,r=Ws(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Fl,r[a])}function ip(s,t,e){const n=this.cache,i=t.length,r=Ws(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ol,r[a])}function sp(s,t,e){const n=this.cache,i=t.length,r=Ws(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Nl,r[a])}function rp(s){switch(s){case 5126:return kf;case 35664:return Hf;case 35665:return Gf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return $f;case 35667:case 35671:return Yf;case 35668:case 35672:return Zf;case 35669:case 35673:return Kf;case 5125:return jf;case 36294:return Jf;case 36295:return Qf;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}class ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zf(e.type)}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rp(e.type)}}class lp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Xo(s,t){s.seq.push(t),s.map[t.id]=t}function cp(s,t,e){const n=s.name,i=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Xo(e,c===void 0?new ap(o,s,t):new op(o,s,t));break}else{let h=e.map[o];h===void 0&&(h=new lp(o),Xo(e,h)),e=h}}}class Ps{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);cp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function qo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const hp=37297;let up=0;function dp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const $o=new Ut;function fp(s){Vt._getMatrix($o,Vt.workingColorSpace,s);const t=`mat3( ${$o.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(s)){case Ls:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Yo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+dp(s.getShaderSource(t),o)}else return r}function pp(s,t){const e=fp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mp(s,t){let e;switch(t){case fc:e="Linear";break;case pc:e="Reinhard";break;case mc:e="Cineon";break;case gc:e="ACESFilmic";break;case xc:e="AgX";break;case vc:e="Neutral";break;case _c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Es=new I;function gp(){Vt.getLuminanceCoefficients(Es);const s=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _p(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function xp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ni(s){return s!==""}function Zo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ko(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(s){return s.replace(Mp,yp)}const Sp=new Map;function yp(s,t){let e=Ft[t];if(e===void 0){const n=Sp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Ep,bp)}function bp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jo(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Tp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===al?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ol?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function wp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case xi:t="ENVMAP_TYPE_CUBE";break;case Gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ap(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===xi&&(t="ENVMAP_MODE_REFRACTION"),t}function Rp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ll:t="ENVMAP_BLENDING_MULTIPLY";break;case uc:t="ENVMAP_BLENDING_MIX";break;case dc:t="ENVMAP_BLENDING_ADD";break}return t}function Cp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Tp(e),c=wp(e),u=Ap(e),h=Rp(e),f=Cp(e),p=_p(e),g=xp(r),x=i.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ni).join(`
`),d.length>0&&(d+=`
`)):(m=[Jo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),d=[Jo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==yn?mp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,pp("linearToOutputTexel",e.outputColorSpace),gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),a=ya(a),a=Zo(a,e),a=Ko(a,e),o=ya(o),o=Zo(o,e),o=Ko(o,e),a=jo(a),o=jo(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=b+m+a,v=b+d+o,A=qo(i,i.VERTEX_SHADER,E),w=qo(i,i.FRAGMENT_SHADER,v);i.attachShader(x,A),i.attachShader(x,w),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function R(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(x)||"",k=i.getShaderInfoLog(A)||"",q=i.getShaderInfoLog(w)||"",W=F.trim(),X=k.trim(),K=q.trim();let H=!0,rt=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,w);else{const ct=Yo(i,A,"vertex"),yt=Yo(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+ct+`
`+yt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||K==="")&&(rt=!1);rt&&(P.diagnostics={runnable:H,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:K,prefix:d}})}i.deleteShader(A),i.deleteShader(w),L=new Ps(i,x),S=vp(i,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,hp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=up++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let Lp=0;class Dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ip(t),e.set(t,n)),n}}class Ip{constructor(t){this.id=Lp++,this.code=t,this.usedTimes=0}}function Up(s,t,e,n,i,r,a){const o=new Na,l=new Dp,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,F,k){const q=F.fog,W=k.geometry,X=S.isMeshStandardMaterial?F.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),H=K&&K.mapping===Gs?K.image.height:null,rt=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ct=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=ct!==void 0?ct.length:0;let Ot=0;W.morphAttributes.position!==void 0&&(Ot=1),W.morphAttributes.normal!==void 0&&(Ot=2),W.morphAttributes.color!==void 0&&(Ot=3);let jt,ie,Wt,$;if(rt){const Xt=Ze[rt];jt=Xt.vertexShader,ie=Xt.fragmentShader}else jt=S.vertexShader,ie=S.fragmentShader,l.update(S),Wt=l.getVertexShaderID(S),$=l.getFragmentShaderID(S);const j=s.getRenderTarget(),dt=s.state.buffers.depth.getReversed(),Pt=k.isInstancedMesh===!0,St=k.isBatchedMesh===!0,Ht=!!S.map,Se=!!S.matcap,C=!!K,se=!!S.aoMap,Dt=!!S.lightMap,At=!!S.bumpMap,mt=!!S.normalMap,re=!!S.displacementMap,gt=!!S.emissiveMap,Nt=!!S.metalnessMap,xe=!!S.roughnessMap,de=S.anisotropy>0,T=S.clearcoat>0,_=S.dispersion>0,O=S.iridescence>0,V=S.sheen>0,Z=S.transmission>0,G=de&&!!S.anisotropyMap,Mt=T&&!!S.clearcoatMap,nt=T&&!!S.clearcoatNormalMap,_t=T&&!!S.clearcoatRoughnessMap,xt=O&&!!S.iridescenceMap,tt=O&&!!S.iridescenceThicknessMap,lt=V&&!!S.sheenColorMap,wt=V&&!!S.sheenRoughnessMap,vt=!!S.specularMap,at=!!S.specularColorMap,It=!!S.specularIntensityMap,D=Z&&!!S.transmissionMap,et=Z&&!!S.thicknessMap,it=!!S.gradientMap,ut=!!S.alphaMap,J=S.alphaTest>0,Y=!!S.alphaHash,pt=!!S.extensions;let Lt=yn;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const Jt={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:ie,defines:S.defines,customVertexShaderID:Wt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:St,batchingColor:St&&k._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&k.instanceColor!==null,instancingMorph:Pt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?s.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:vi,alphaToCoverage:!!S.alphaToCoverage,map:Ht,matcap:Se,envMap:C,envMapMode:C&&K.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:Dt,bumpMap:At,normalMap:mt,displacementMap:f&&re,emissiveMap:gt,normalMapObjectSpace:mt&&S.normalMapType===Ec,normalMapTangentSpace:mt&&S.normalMapType===xl,metalnessMap:Nt,roughnessMap:xe,anisotropy:de,anisotropyMap:G,clearcoat:T,clearcoatMap:Mt,clearcoatNormalMap:nt,clearcoatRoughnessMap:_t,dispersion:_,iridescence:O,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:V,sheenColorMap:lt,sheenRoughnessMap:wt,specularMap:vt,specularColorMap:at,specularIntensityMap:It,transmission:Z,transmissionMap:D,thicknessMap:et,gradientMap:it,opaque:S.transparent===!1&&S.blending===di&&S.alphaToCoverage===!1,alphaMap:ut,alphaTest:J,alphaHash:Y,combine:S.combine,mapUv:Ht&&x(S.map.channel),aoMapUv:se&&x(S.aoMap.channel),lightMapUv:Dt&&x(S.lightMap.channel),bumpMapUv:At&&x(S.bumpMap.channel),normalMapUv:mt&&x(S.normalMap.channel),displacementMapUv:re&&x(S.displacementMap.channel),emissiveMapUv:gt&&x(S.emissiveMap.channel),metalnessMapUv:Nt&&x(S.metalnessMap.channel),roughnessMapUv:xe&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:Mt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&x(S.sheenRoughnessMap.channel),specularMapUv:vt&&x(S.specularMap.channel),specularColorMapUv:at&&x(S.specularColorMap.channel),specularIntensityMapUv:It&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:et&&x(S.thicknessMap.channel),alphaMapUv:ut&&x(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(mt||de),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Ht||ut),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ht&&S.map.isVideoTexture===!0&&Vt.getTransfer(S.map.colorSpace)===Yt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(S.emissiveMap.colorSpace)===Yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Oe,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function d(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(y,S),E(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function E(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const y=g[S.type];let P;if(y){const F=Ze[y];P=Jc.clone(F.uniforms)}else P=S.uniforms;return P}function A(S,y){let P;for(let F=0,k=u.length;F<k;F++){const q=u[F];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new Pp(s,y,S,r),u.push(P)),P}function w(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:u,dispose:L}}function Np(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Fp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,p,g,x,m){let d=s[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=m),t++,d}function o(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function l(h,f,p,g,x,m){const d=a(h,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||Fp),n.length>1&&n.sort(f||Qo),i.length>1&&i.sort(f||Qo)}function u(){for(let h=t,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:u,sort:c}}function Op(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new tl,s.set(n,[a])):i>=r.length?(a=new tl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new zt};break;case"SpotLight":e={position:new I,direction:new I,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let kp=0;function Hp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Gp(s){const t=new Bp,e=zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new oe,a=new oe;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,E=0,v=0,A=0,w=0,R=0;c.sort(Hp);for(let S=0,y=c.length;S<y;S++){const P=c[S],F=P.color,k=P.intensity,q=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*k,h+=F.g*k,f+=F.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);R++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=P.shadow.matrix,b++}n.directional[p]=X,p++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(F).multiplyScalar(k),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const K=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,K.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=K.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=W,v++}x++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const K=P.shadow,H=e.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[d]=X,d++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==v||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=p,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=v,L.numSpotMaps=A,L.numLightProbes=R,n.version=kp++)}function l(c,u){let h=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const E=c[d];if(E.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(E.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function el(s){const t=new Gp(s),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Vp(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new el(s),t.set(i,[o])):r>=a.length?(o=new el(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qp(s,t,e){let n=new Ba;const i=new Ct,r=new Ct,a=new ue,o=new ph({depthPacking:yc}),l=new mh,c={},u=e.maxTextureSize,h={[Qe]:De,[De]:Qe,[Oe]:Oe},f=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al;let d=this.type;this.render=function(w,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Sn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=d!==cn&&this.type===cn,q=d===cn&&this.type!==cn;for(let W=0,X=w.length;W<X;W++){const K=w[W],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||k===!0||q===!0){const yt=this.type!==cn?{minFilter:Re,magFilter:Re}:{};H.map!==null&&H.map.dispose(),H.map=new Gn(i.x,i.y,yt),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ct=H.getViewportCount();for(let yt=0;yt<ct;yt++){const Ot=H.getViewport(yt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),F.viewport(a),H.updateMatrices(K,yt),n=H.getFrustum(),v(R,L,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===cn&&b(H,L),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,P)};function b(w,R){const L=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,p,x,null)}function E(w,R,L,S){let y=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=y.uuid,k=R.uuid;let q=c[F];q===void 0&&(q={},c[F]=q);let W=q[k];W===void 0&&(W=y.clone(),q[k]=W,R.addEventListener("dispose",A)),y=W}if(y.visible=R.visible,y.wireframe=R.wireframe,S===cn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=L}return y}function v(w,R,L,S,y){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const k=t.update(w),q=w.material;if(Array.isArray(q)){const W=k.groups;for(let X=0,K=W.length;X<K;X++){const H=W[X],rt=q[H.materialIndex];if(rt&&rt.visible){const ct=E(w,rt,S,y);w.onBeforeShadow(s,w,R,L,k,ct,H),s.renderBufferDirect(L,null,k,ct,w,H),w.onAfterShadow(s,w,R,L,k,ct,H)}}}else if(q.visible){const W=E(w,q,S,y);w.onBeforeShadow(s,w,R,L,k,W,null),s.renderBufferDirect(L,null,k,W,w,null),w.onAfterShadow(s,w,R,L,k,W,null)}}const F=w.children;for(let k=0,q=F.length;k<q;k++)v(F[k],R,L,S,y)}function A(w){w.target.removeEventListener("dispose",A);for(const L in c){const S=c[L],y=w.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const $p={[Dr]:Ir,[Ur]:Or,[Nr]:Br,[gi]:Fr,[Ir]:Dr,[Or]:Ur,[Br]:Nr,[Fr]:gi};function Yp(s,t){function e(){let D=!1;const et=new ue;let it=null;const ut=new ue(0,0,0,0);return{setMask:function(J){it!==J&&!D&&(s.colorMask(J,J,J,J),it=J)},setLocked:function(J){D=J},setClear:function(J,Y,pt,Lt,Jt){Jt===!0&&(J*=Lt,Y*=Lt,pt*=Lt),et.set(J,Y,pt,Lt),ut.equals(et)===!1&&(s.clearColor(J,Y,pt,Lt),ut.copy(et))},reset:function(){D=!1,it=null,ut.set(-1,0,0,0)}}}function n(){let D=!1,et=!1,it=null,ut=null,J=null;return{setReversed:function(Y){if(et!==Y){const pt=t.get("EXT_clip_control");Y?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT),et=Y;const Lt=J;J=null,this.setClear(Lt)}},getReversed:function(){return et},setTest:function(Y){Y?j(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(Y){it!==Y&&!D&&(s.depthMask(Y),it=Y)},setFunc:function(Y){if(et&&(Y=$p[Y]),ut!==Y){switch(Y){case Dr:s.depthFunc(s.NEVER);break;case Ir:s.depthFunc(s.ALWAYS);break;case Ur:s.depthFunc(s.LESS);break;case gi:s.depthFunc(s.LEQUAL);break;case Nr:s.depthFunc(s.EQUAL);break;case Fr:s.depthFunc(s.GEQUAL);break;case Or:s.depthFunc(s.GREATER);break;case Br:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=Y}},setLocked:function(Y){D=Y},setClear:function(Y){J!==Y&&(et&&(Y=1-Y),s.clearDepth(Y),J=Y)},reset:function(){D=!1,it=null,ut=null,J=null,et=!1}}}function i(){let D=!1,et=null,it=null,ut=null,J=null,Y=null,pt=null,Lt=null,Jt=null;return{setTest:function(Xt){D||(Xt?j(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(Xt){et!==Xt&&!D&&(s.stencilMask(Xt),et=Xt)},setFunc:function(Xt,nn,Ye){(it!==Xt||ut!==nn||J!==Ye)&&(s.stencilFunc(Xt,nn,Ye),it=Xt,ut=nn,J=Ye)},setOp:function(Xt,nn,Ye){(Y!==Xt||pt!==nn||Lt!==Ye)&&(s.stencilOp(Xt,nn,Ye),Y=Xt,pt=nn,Lt=Ye)},setLocked:function(Xt){D=Xt},setClear:function(Xt){Jt!==Xt&&(s.clearStencil(Xt),Jt=Xt)},reset:function(){D=!1,et=null,it=null,ut=null,J=null,Y=null,pt=null,Lt=null,Jt=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,E=null,v=null,A=null,w=null,R=new zt(0,0,0),L=0,S=!1,y=null,P=null,F=null,k=null,q=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let rt=null,ct={};const yt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),jt=new ue().fromArray(yt),ie=new ue().fromArray(Ot);function Wt(D,et,it,ut){const J=new Uint8Array(4),Y=s.createTexture();s.bindTexture(D,Y),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<it;pt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(et,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,J):s.texImage2D(et+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,J);return Y}const $={};$[s.TEXTURE_2D]=Wt(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(s.DEPTH_TEST),a.setFunc(gi),At(!1),mt(Ya),j(s.CULL_FACE),se(Sn);function j(D){u[D]!==!0&&(s.enable(D),u[D]=!0)}function dt(D){u[D]!==!1&&(s.disable(D),u[D]=!1)}function Pt(D,et){return h[D]!==et?(s.bindFramebuffer(D,et),h[D]=et,D===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=et),D===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=et),!0):!1}function St(D,et){let it=p,ut=!1;if(D){it=f.get(et),it===void 0&&(it=[],f.set(et,it));const J=D.textures;if(it.length!==J.length||it[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,pt=J.length;Y<pt;Y++)it[Y]=s.COLOR_ATTACHMENT0+Y;it.length=J.length,ut=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,ut=!0);ut&&s.drawBuffers(it)}function Ht(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Se={[On]:s.FUNC_ADD,[Yl]:s.FUNC_SUBTRACT,[Zl]:s.FUNC_REVERSE_SUBTRACT};Se[Kl]=s.MIN,Se[jl]=s.MAX;const C={[Jl]:s.ZERO,[Ql]:s.ONE,[tc]:s.SRC_COLOR,[Pr]:s.SRC_ALPHA,[ac]:s.SRC_ALPHA_SATURATE,[sc]:s.DST_COLOR,[nc]:s.DST_ALPHA,[ec]:s.ONE_MINUS_SRC_COLOR,[Lr]:s.ONE_MINUS_SRC_ALPHA,[rc]:s.ONE_MINUS_DST_COLOR,[ic]:s.ONE_MINUS_DST_ALPHA,[oc]:s.CONSTANT_COLOR,[lc]:s.ONE_MINUS_CONSTANT_COLOR,[cc]:s.CONSTANT_ALPHA,[hc]:s.ONE_MINUS_CONSTANT_ALPHA};function se(D,et,it,ut,J,Y,pt,Lt,Jt,Xt){if(D===Sn){x===!0&&(dt(s.BLEND),x=!1);return}if(x===!1&&(j(s.BLEND),x=!0),D!==$l){if(D!==m||Xt!==S){if((d!==On||v!==On)&&(s.blendEquation(s.FUNC_ADD),d=On,v=On),Xt)switch(D){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFunc(s.ONE,s.ONE);break;case Ka:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ja:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ka:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,E=null,A=null,w=null,R.set(0,0,0),L=0,m=D,S=Xt}return}J=J||et,Y=Y||it,pt=pt||ut,(et!==d||J!==v)&&(s.blendEquationSeparate(Se[et],Se[J]),d=et,v=J),(it!==b||ut!==E||Y!==A||pt!==w)&&(s.blendFuncSeparate(C[it],C[ut],C[Y],C[pt]),b=it,E=ut,A=Y,w=pt),(Lt.equals(R)===!1||Jt!==L)&&(s.blendColor(Lt.r,Lt.g,Lt.b,Jt),R.copy(Lt),L=Jt),m=D,S=!1}function Dt(D,et){D.side===Oe?dt(s.CULL_FACE):j(s.CULL_FACE);let it=D.side===De;et&&(it=!it),At(it),D.blending===di&&D.transparent===!1?se(Sn):se(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ut=D.stencilWrite;o.setTest(ut),ut&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function At(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function mt(D){D!==Xl?(j(s.CULL_FACE),D!==P&&(D===Ya?s.cullFace(s.BACK):D===ql?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),P=D}function re(D){D!==F&&(X&&s.lineWidth(D),F=D)}function gt(D,et,it){D?(j(s.POLYGON_OFFSET_FILL),(k!==et||q!==it)&&(s.polygonOffset(et,it),k=et,q=it)):dt(s.POLYGON_OFFSET_FILL)}function Nt(D){D?j(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function xe(D){D===void 0&&(D=s.TEXTURE0+W-1),rt!==D&&(s.activeTexture(D),rt=D)}function de(D,et,it){it===void 0&&(rt===null?it=s.TEXTURE0+W-1:it=rt);let ut=ct[it];ut===void 0&&(ut={type:void 0,texture:void 0},ct[it]=ut),(ut.type!==D||ut.texture!==et)&&(rt!==it&&(s.activeTexture(it),rt=it),s.bindTexture(D,et||$[D]),ut.type=D,ut.texture=et)}function T(){const D=ct[rt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(D){jt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),jt.copy(D))}function wt(D){ie.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),ie.copy(D))}function vt(D,et){let it=c.get(et);it===void 0&&(it=new WeakMap,c.set(et,it));let ut=it.get(D);ut===void 0&&(ut=s.getUniformBlockIndex(et,D.name),it.set(D,ut))}function at(D,et){const ut=c.get(et).get(D);l.get(et)!==ut&&(s.uniformBlockBinding(et,ut,D.__bindingPointIndex),l.set(et,ut))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},rt=null,ct={},h={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,E=null,v=null,A=null,w=null,R=new zt(0,0,0),L=0,S=!1,y=null,P=null,F=null,k=null,q=null,jt.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:dt,bindFramebuffer:Pt,drawBuffers:St,useProgram:Ht,setBlending:se,setMaterial:Dt,setFlipSided:At,setCullFace:mt,setLineWidth:re,setPolygonOffset:gt,setScissorTest:Nt,activeTexture:xe,bindTexture:de,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:xt,texImage3D:tt,updateUBOMapping:vt,uniformBlockBinding:at,texStorage2D:nt,texStorage3D:_t,texSubImage2D:V,texSubImage3D:Z,compressedTexSubImage2D:G,compressedTexSubImage3D:Mt,scissor:lt,viewport:wt,reset:It}}function Zp(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Is("canvas")}function x(T,_,O){let V=1;const Z=de(T);if((Z.width>O||Z.height>O)&&(V=O/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const G=Math.floor(V*Z.width),Mt=Math.floor(V*Z.height);h===void 0&&(h=g(G,Mt));const nt=_?g(G,Mt):h;return nt.width=G,nt.height=Mt,nt.getContext("2d").drawImage(T,0,0,G,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+G+"x"+Mt+")."),nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(T,_,O,V,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=_;if(_===s.RED&&(O===s.FLOAT&&(G=s.R32F),O===s.HALF_FLOAT&&(G=s.R16F),O===s.UNSIGNED_BYTE&&(G=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.R8UI),O===s.UNSIGNED_SHORT&&(G=s.R16UI),O===s.UNSIGNED_INT&&(G=s.R32UI),O===s.BYTE&&(G=s.R8I),O===s.SHORT&&(G=s.R16I),O===s.INT&&(G=s.R32I)),_===s.RG&&(O===s.FLOAT&&(G=s.RG32F),O===s.HALF_FLOAT&&(G=s.RG16F),O===s.UNSIGNED_BYTE&&(G=s.RG8)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RG8UI),O===s.UNSIGNED_SHORT&&(G=s.RG16UI),O===s.UNSIGNED_INT&&(G=s.RG32UI),O===s.BYTE&&(G=s.RG8I),O===s.SHORT&&(G=s.RG16I),O===s.INT&&(G=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RGB8UI),O===s.UNSIGNED_SHORT&&(G=s.RGB16UI),O===s.UNSIGNED_INT&&(G=s.RGB32UI),O===s.BYTE&&(G=s.RGB8I),O===s.SHORT&&(G=s.RGB16I),O===s.INT&&(G=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(G=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(G=s.RGBA16UI),O===s.UNSIGNED_INT&&(G=s.RGBA32UI),O===s.BYTE&&(G=s.RGBA8I),O===s.SHORT&&(G=s.RGBA16I),O===s.INT&&(G=s.RGBA32I)),_===s.RGB&&(O===s.UNSIGNED_INT_5_9_9_9_REV&&(G=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(G=s.R11F_G11F_B10F)),_===s.RGBA){const Mt=Z?Ls:Vt.getTransfer(V);O===s.FLOAT&&(G=s.RGBA32F),O===s.HALF_FLOAT&&(G=s.RGBA16F),O===s.UNSIGNED_BYTE&&(G=Mt===Yt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(G=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(G=s.RGB5_A1)}return(G===s.R16F||G===s.R32F||G===s.RG16F||G===s.RG32F||G===s.RGBA16F||G===s.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function v(T,_){let O;return T?_===null||_===Hn||_===zi?O=s.DEPTH24_STENCIL8:_===un?O=s.DEPTH32F_STENCIL8:_===Bi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Hn||_===zi?O=s.DEPTH_COMPONENT24:_===un?O=s.DEPTH_COMPONENT32F:_===Bi&&(O=s.DEPTH_COMPONENT16),O}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Re&&T.minFilter!==je?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),L(_),_.isVideoTexture&&u.delete(_)}function R(T){const _=T.target;_.removeEventListener("dispose",R),y(_)}function L(T){const _=n.get(T);if(_.__webglInit===void 0)return;const O=T.source,V=f.get(O);if(V){const Z=V[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(T),Object.keys(V).length===0&&f.delete(O)}n.remove(T)}function S(T){const _=n.get(T);s.deleteTexture(_.__webglTexture);const O=T.source,V=f.get(O);delete V[_.__cacheKey],a.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Z=0;Z<_.__webglFramebuffer[V].length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[V][Z]);else s.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)s.deleteFramebuffer(_.__webglFramebuffer[V]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=T.textures;for(let V=0,Z=O.length;V<Z;V++){const G=n.get(O[V]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(T)}let P=0;function F(){P=0}function k(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function q(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function W(T,_){const O=n.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const V=T.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,T,_);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function X(T,_){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){$(O,T,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function K(T,_){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){$(O,T,_);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function H(T,_){const O=n.get(T);if(T.version>0&&O.__version!==T.version){j(O,T,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const rt={[Hr]:s.REPEAT,[zn]:s.CLAMP_TO_EDGE,[Gr]:s.MIRRORED_REPEAT},ct={[Re]:s.NEAREST,[Mc]:s.NEAREST_MIPMAP_NEAREST,[Zi]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[$s]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},yt={[bc]:s.NEVER,[Pc]:s.ALWAYS,[Tc]:s.LESS,[vl]:s.LEQUAL,[wc]:s.EQUAL,[Cc]:s.GEQUAL,[Ac]:s.GREATER,[Rc]:s.NOTEQUAL};function Ot(T,_){if(_.type===un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===je||_.magFilter===$s||_.magFilter===Zi||_.magFilter===kn||_.minFilter===je||_.minFilter===$s||_.minFilter===Zi||_.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,rt[_.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,rt[_.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,rt[_.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,ct[_.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,ct[_.minFilter]),_.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Re||_.minFilter!==Zi&&_.minFilter!==kn||_.type===un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function jt(T,_){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const V=_.source;let Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));const G=q(_);if(G!==T.__cacheKey){Z[G]===void 0&&(Z[G]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[G].usedTimes++;const Mt=Z[T.__cacheKey];Mt!==void 0&&(Z[T.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(_)),T.__cacheKey=G,T.__webglTexture=Z[G].texture}return O}function ie(T,_,O){return Math.floor(Math.floor(T/O)/_)}function Wt(T,_,O,V){const G=T.updateRanges;if(G.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{G.sort((tt,lt)=>tt.start-lt.start);let Mt=0;for(let tt=1;tt<G.length;tt++){const lt=G[Mt],wt=G[tt],vt=lt.start+lt.count,at=ie(wt.start,_.width,4),It=ie(lt.start,_.width,4);wt.start<=vt+1&&at===It&&ie(wt.start+wt.count-1,_.width,4)===at?lt.count=Math.max(lt.count,wt.start+wt.count-lt.start):(++Mt,G[Mt]=wt)}G.length=Mt+1;const nt=s.getParameter(s.UNPACK_ROW_LENGTH),_t=s.getParameter(s.UNPACK_SKIP_PIXELS),xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let tt=0,lt=G.length;tt<lt;tt++){const wt=G[tt],vt=Math.floor(wt.start/4),at=Math.ceil(wt.count/4),It=vt%_.width,D=Math.floor(vt/_.width),et=at,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,It),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,It,D,et,it,O,V,_.data)}T.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,nt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),s.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function $(T,_,O){let V=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=s.TEXTURE_3D);const Z=jt(T,_),G=_.source;e.bindTexture(V,T.__webglTexture,s.TEXTURE0+O);const Mt=n.get(G);if(G.version!==Mt.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const nt=Vt.getPrimaries(Vt.workingColorSpace),_t=_.colorSpace===Mn?null:Vt.getPrimaries(_.colorSpace),xt=_.colorSpace===Mn||nt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=x(_.image,!1,i.maxTextureSize);tt=xe(_,tt);const lt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type);let vt=E(_.internalFormat,lt,wt,_.colorSpace,_.isVideoTexture);Ot(V,_);let at;const It=_.mipmaps,D=_.isVideoTexture!==!0,et=Mt.__version===void 0||Z===!0,it=G.dataReady,ut=A(_,tt);if(_.isDepthTexture)vt=v(_.format===Hi,_.type),et&&(D?e.texStorage2D(s.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,lt,wt,null));else if(_.isDataTexture)if(It.length>0){D&&et&&e.texStorage2D(s.TEXTURE_2D,ut,vt,It[0].width,It[0].height);for(let J=0,Y=It.length;J<Y;J++)at=It[J],D?it&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,at.width,at.height,lt,wt,at.data):e.texImage2D(s.TEXTURE_2D,J,vt,at.width,at.height,0,lt,wt,at.data);_.generateMipmaps=!1}else D?(et&&e.texStorage2D(s.TEXTURE_2D,ut,vt,tt.width,tt.height),it&&Wt(_,tt,lt,wt)):e.texImage2D(s.TEXTURE_2D,0,vt,tt.width,tt.height,0,lt,wt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,vt,It[0].width,It[0].height,tt.depth);for(let J=0,Y=It.length;J<Y;J++)if(at=It[J],_.format!==Ve)if(lt!==null)if(D){if(it)if(_.layerUpdates.size>0){const pt=Lo(at.width,at.height,_.format,_.type);for(const Lt of _.layerUpdates){const Jt=at.data.subarray(Lt*pt/at.data.BYTES_PER_ELEMENT,(Lt+1)*pt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,Lt,at.width,at.height,1,lt,Jt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,lt,at.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,vt,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,at.width,at.height,tt.depth,lt,wt,at.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,vt,at.width,at.height,tt.depth,0,lt,wt,at.data)}else{D&&et&&e.texStorage2D(s.TEXTURE_2D,ut,vt,It[0].width,It[0].height);for(let J=0,Y=It.length;J<Y;J++)at=It[J],_.format!==Ve?lt!==null?D?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(s.TEXTURE_2D,J,vt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?it&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,at.width,at.height,lt,wt,at.data):e.texImage2D(s.TEXTURE_2D,J,vt,at.width,at.height,0,lt,wt,at.data)}else if(_.isDataArrayTexture)if(D){if(et&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,vt,tt.width,tt.height,tt.depth),it)if(_.layerUpdates.size>0){const J=Lo(tt.width,tt.height,_.format,_.type);for(const Y of _.layerUpdates){const pt=tt.data.subarray(Y*J/tt.data.BYTES_PER_ELEMENT,(Y+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,tt.width,tt.height,1,lt,wt,pt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,wt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,lt,wt,tt.data);else if(_.isData3DTexture)D?(et&&e.texStorage3D(s.TEXTURE_3D,ut,vt,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,wt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,lt,wt,tt.data);else if(_.isFramebufferTexture){if(et)if(D)e.texStorage2D(s.TEXTURE_2D,ut,vt,tt.width,tt.height);else{let J=tt.width,Y=tt.height;for(let pt=0;pt<ut;pt++)e.texImage2D(s.TEXTURE_2D,pt,vt,J,Y,0,lt,wt,null),J>>=1,Y>>=1}}else if(It.length>0){if(D&&et){const J=de(It[0]);e.texStorage2D(s.TEXTURE_2D,ut,vt,J.width,J.height)}for(let J=0,Y=It.length;J<Y;J++)at=It[J],D?it&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,lt,wt,at):e.texImage2D(s.TEXTURE_2D,J,vt,lt,wt,at);_.generateMipmaps=!1}else if(D){if(et){const J=de(tt);e.texStorage2D(s.TEXTURE_2D,ut,vt,J.width,J.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,wt,tt)}else e.texImage2D(s.TEXTURE_2D,0,vt,lt,wt,tt);m(_)&&d(V),Mt.__version=G.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function j(T,_,O){if(_.image.length!==6)return;const V=jt(T,_),Z=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const G=n.get(Z);if(Z.version!==G.__version||V===!0){e.activeTexture(s.TEXTURE0+O);const Mt=Vt.getPrimaries(Vt.workingColorSpace),nt=_.colorSpace===Mn?null:Vt.getPrimaries(_.colorSpace),_t=_.colorSpace===Mn||Mt===nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const xt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!xt&&!tt?lt[Y]=x(_.image[Y],!0,i.maxCubemapSize):lt[Y]=tt?_.image[Y].image:_.image[Y],lt[Y]=xe(_,lt[Y]);const wt=lt[0],vt=r.convert(_.format,_.colorSpace),at=r.convert(_.type),It=E(_.internalFormat,vt,at,_.colorSpace),D=_.isVideoTexture!==!0,et=G.__version===void 0||V===!0,it=Z.dataReady;let ut=A(_,wt);Ot(s.TEXTURE_CUBE_MAP,_);let J;if(xt){D&&et&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,It,wt.width,wt.height);for(let Y=0;Y<6;Y++){J=lt[Y].mipmaps;for(let pt=0;pt<J.length;pt++){const Lt=J[pt];_.format!==Ve?vt!==null?D?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Lt.width,Lt.height,vt,Lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,It,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,0,0,Lt.width,Lt.height,vt,at,Lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt,It,Lt.width,Lt.height,0,vt,at,Lt.data)}}}else{if(J=_.mipmaps,D&&et){J.length>0&&ut++;const Y=de(lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,It,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,vt,at,lt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,lt[Y].width,lt[Y].height,0,vt,at,lt[Y].data);for(let pt=0;pt<J.length;pt++){const Jt=J[pt].image[Y].image;D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,Jt.width,Jt.height,vt,at,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,It,Jt.width,Jt.height,0,vt,at,Jt.data)}}else{D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,vt,at,lt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,vt,at,lt[Y]);for(let pt=0;pt<J.length;pt++){const Lt=J[pt];D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,0,0,vt,at,Lt.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,pt+1,It,vt,at,Lt.image[Y])}}}m(_)&&d(s.TEXTURE_CUBE_MAP),G.__version=Z.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function dt(T,_,O,V,Z,G){const Mt=r.convert(O.format,O.colorSpace),nt=r.convert(O.type),_t=E(O.internalFormat,Mt,nt,O.colorSpace),xt=n.get(_),tt=n.get(O);if(tt.__renderTarget=_,!xt.__hasExternalTextures){const lt=Math.max(1,_.width>>G),wt=Math.max(1,_.height>>G);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,G,_t,lt,wt,_.depth,0,Mt,nt,null):e.texImage2D(Z,G,_t,lt,wt,0,Mt,nt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),gt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Z,tt.__webglTexture,0,re(_)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Z,tt.__webglTexture,G),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(T,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),_.depthBuffer){const V=_.depthTexture,Z=V&&V.isDepthTexture?V.type:null,G=v(_.stencilBuffer,Z),Mt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=re(_);gt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,G,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,G,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,G,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,T)}else{const V=_.textures;for(let Z=0;Z<V.length;Z++){const G=V[Z],Mt=r.convert(G.format,G.colorSpace),nt=r.convert(G.type),_t=E(G.internalFormat,Mt,nt,G.colorSpace),xt=re(_);O&&gt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,_t,_.width,_.height):gt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,_t,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,_t,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function St(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const Z=V.__webglTexture,G=re(_);if(_.depthTexture.format===ki)gt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Hi)gt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,G):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ht(T){const _=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const V=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=V}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const V=T.texture.mipmaps;V&&V.length>0?St(_.__webglFramebuffer[0],T):St(_.__webglFramebuffer,T)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=s.createRenderbuffer(),Pt(_.__webglDepthbuffer[V],T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}else{const V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Pt(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,G),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,G)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Se(T,_,O){const V=n.get(T);_!==void 0&&dt(V.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ht(T)}function C(T){const _=T.texture,O=n.get(T),V=n.get(_);T.addEventListener("dispose",R);const Z=T.textures,G=T.isWebGLCubeRenderTarget===!0,Mt=Z.length>1;if(Mt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=_.version,a.memory.textures++),G){O.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[nt]=[];for(let _t=0;_t<_.mipmaps.length;_t++)O.__webglFramebuffer[nt][_t]=s.createFramebuffer()}else O.__webglFramebuffer[nt]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)O.__webglFramebuffer[nt]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let nt=0,_t=Z.length;nt<_t;nt++){const xt=n.get(Z[nt]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&gt(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const _t=Z[nt];O.__webglColorRenderbuffer[nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[nt]);const xt=r.convert(_t.format,_t.colorSpace),tt=r.convert(_t.type),lt=E(_t.internalFormat,xt,tt,_t.colorSpace,T.isXRRenderTarget===!0),wt=re(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,lt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,O.__webglColorRenderbuffer[nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(G){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,_);for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0)for(let _t=0;_t<_.mipmaps.length;_t++)dt(O.__webglFramebuffer[nt][_t],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,_t);else dt(O.__webglFramebuffer[nt],T,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);m(_)&&d(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let nt=0,_t=Z.length;nt<_t;nt++){const xt=Z[nt],tt=n.get(xt);let lt=s.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Ot(lt,xt),dt(O.__webglFramebuffer,T,xt,s.COLOR_ATTACHMENT0+nt,lt,0),m(xt)&&d(lt)}e.unbindTexture()}else{let nt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(nt,V.__webglTexture),Ot(nt,_),_.mipmaps&&_.mipmaps.length>0)for(let _t=0;_t<_.mipmaps.length;_t++)dt(O.__webglFramebuffer[_t],T,_,s.COLOR_ATTACHMENT0,nt,_t);else dt(O.__webglFramebuffer,T,_,s.COLOR_ATTACHMENT0,nt,0);m(_)&&d(nt),e.unbindTexture()}T.depthBuffer&&Ht(T)}function se(T){const _=T.textures;for(let O=0,V=_.length;O<V;O++){const Z=_[O];if(m(Z)){const G=b(T),Mt=n.get(Z).__webglTexture;e.bindTexture(G,Mt),d(G),e.unbindTexture()}}}const Dt=[],At=[];function mt(T){if(T.samples>0){if(gt(T)===!1){const _=T.textures,O=T.width,V=T.height;let Z=s.COLOR_BUFFER_BIT;const G=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(T),nt=_.length>1;if(nt)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const _t=T.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),nt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const tt=n.get(_[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,tt,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,Z,s.NEAREST),l===!0&&(Dt.length=0,At.length=0,Dt.push(s.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Dt.push(G),At.push(G),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,At)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),nt)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const tt=n.get(_[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function re(T){return Math.min(i.maxSamples,T.samples)}function gt(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Nt(T){const _=a.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function xe(T,_){const O=T.colorSpace,V=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==vi&&O!==Mn&&(Vt.getTransfer(O)===Yt?(V!==Ve||Z!==tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Se,this.setupRenderTarget=C,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=gt}function Kp(s,t){function e(n,i=Mn){let r;const a=Vt.getTransfer(i);if(n===tn)return s.UNSIGNED_BYTE;if(n===Ra)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ca)return s.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===hl)return s.BYTE;if(n===ul)return s.SHORT;if(n===Bi)return s.UNSIGNED_SHORT;if(n===Aa)return s.INT;if(n===Hn)return s.UNSIGNED_INT;if(n===un)return s.FLOAT;if(n===Vi)return s.HALF_FLOAT;if(n===pl)return s.ALPHA;if(n===ml)return s.RGB;if(n===Ve)return s.RGBA;if(n===ki)return s.DEPTH_COMPONENT;if(n===Hi)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===Pa)return s.RED_INTEGER;if(n===_l)return s.RG;if(n===La)return s.RG_INTEGER;if(n===Da)return s.RGBA_INTEGER;if(n===Ts||n===ws||n===As||n===Rs)if(a===Yt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ts)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ts)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===Wr||n===Xr||n===qr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$r||n===Yr||n===Zr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$r||n===Yr)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kr||n===jr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ta)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ea)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===na)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ia)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ra)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===aa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===la)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ca)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===ua||n===da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fa||n===pa||n===ma||n===ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jp=`
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

}`;class Qp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Pl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:jp,fragmentShader:Jp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tm extends Si{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Qp,d={},b=e.getContextAttributes();let E=null,v=null;const A=[],w=[],R=new Ct;let L=null;const S=new Ge;S.viewport=new ue;const y=new Ge;y.viewport=new ue;const P=[S,y],F=new vh;let k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=A[$];return j===void 0&&(j=new mr,A[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=A[$];return j===void 0&&(j=new mr,A[$]=j),j.getGripSpace()},this.getHand=function($){let j=A[$];return j===void 0&&(j=new mr,A[$]=j),j.getHandSpace()};function W($){const j=w.indexOf($.inputSource);if(j===-1)return;const dt=A[j];dt!==void 0&&(dt.update($.inputSource,$.frame,c||a),dt.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let $=0;$<A.length;$++){const j=w[$];j!==null&&(w[$]=null,A[$].disconnect(j))}k=null,q=null,m.reset();for(const $ in d)delete d[$];t.setRenderTarget(E),p=null,f=null,h=null,i=null,v=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Pt=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=b.stencil?Hi:ki,Pt=b.stencil?zi:Hn);const Ht={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ht),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Gn(f.textureWidth,f.textureHeight,{format:Ve,type:tn,depthTexture:new Cl(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const dt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Gn(p.framebufferWidth,p.framebufferHeight,{format:Ve,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K($){for(let j=0;j<$.removed.length;j++){const dt=$.removed[j],Pt=w.indexOf(dt);Pt>=0&&(w[Pt]=null,A[Pt].disconnect(dt))}for(let j=0;j<$.added.length;j++){const dt=$.added[j];let Pt=w.indexOf(dt);if(Pt===-1){for(let Ht=0;Ht<A.length;Ht++)if(Ht>=w.length){w.push(dt),Pt=Ht;break}else if(w[Ht]===null){w[Ht]=dt,Pt=Ht;break}if(Pt===-1)break}const St=A[Pt];St&&St.connect(dt)}}const H=new I,rt=new I;function ct($,j,dt){H.setFromMatrixPosition(j.matrixWorld),rt.setFromMatrixPosition(dt.matrixWorld);const Pt=H.distanceTo(rt),St=j.projectionMatrix.elements,Ht=dt.projectionMatrix.elements,Se=St[14]/(St[10]-1),C=St[14]/(St[10]+1),se=(St[9]+1)/St[5],Dt=(St[9]-1)/St[5],At=(St[8]-1)/St[0],mt=(Ht[8]+1)/Ht[0],re=Se*At,gt=Se*mt,Nt=Pt/(-At+mt),xe=Nt*-At;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(xe),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),St[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const de=Se+Nt,T=C+Nt,_=re-xe,O=gt+(Pt-xe),V=se*C/T*de,Z=Dt*C/T*de;$.projectionMatrix.makePerspective(_,O,V,Z,de,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function yt($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let j=$.near,dt=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),F.near=y.near=S.near=j,F.far=y.far=S.far=dt,(k!==F.near||q!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,q=F.far),F.layers.mask=$.layers.mask|6,S.layers.mask=F.layers.mask&3,y.layers.mask=F.layers.mask&5;const Pt=$.parent,St=F.cameras;yt(F,Pt);for(let Ht=0;Ht<St.length;Ht++)yt(St[Ht],Pt);St.length===2?ct(F,S,y):F.projectionMatrix.copy(S.projectionMatrix),Ot($,F,Pt)};function Ot($,j,dt){dt===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function($){return d[$]};let jt=null;function ie($,j){if(u=j.getViewerPose(c||a),g=j,u!==null){const dt=u.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Pt=!1;dt.length!==F.cameras.length&&(F.cameras.length=0,Pt=!0);for(let C=0;C<dt.length;C++){const se=dt[C];let Dt=null;if(p!==null)Dt=p.getViewport(se);else{const mt=h.getViewSubImage(f,se);Dt=mt.viewport,C===0&&(t.setRenderTargetTextures(v,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(v))}let At=P[C];At===void 0&&(At=new Ge,At.layers.enable(C),At.viewport=new ue,P[C]=At),At.matrix.fromArray(se.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(se.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),C===0&&(F.matrix.copy(At.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Pt===!0&&F.cameras.push(At)}const St=i.enabledFeatures;if(St&&St.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const C=h.getDepthInformation(dt[0]);C&&C.isValid&&C.texture&&m.init(C,i.renderState)}if(St&&St.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let C=0;C<dt.length;C++){const se=dt[C].camera;if(se){let Dt=d[se];Dt||(Dt=new Pl,d[se]=Dt);const At=h.getCameraImage(se);Dt.sourceTexture=At}}}}for(let dt=0;dt<A.length;dt++){const Pt=w[dt],St=A[dt];Pt!==null&&St!==void 0&&St.update(Pt,j,c||a)}jt&&jt($,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Wt=new Il;Wt.setAnimationLoop(ie),this.setAnimationLoop=function($){jt=$},this.dispose=function(){}}}const Dn=new en,em=new oe;function nm(s,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Tl(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,b,E,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===De&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===De&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),E=b.envMap,v=b.envMapRotation;E&&(m.envMap.value=E,Dn.copy(v),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),m.envMapRotation.value.setFromMatrix4(em.makeRotationFromEuler(Dn)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===De&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function im(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const v=E.program;n.uniformBlockBinding(b,v)}function c(b,E){let v=i[b.id];v===void 0&&(g(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const A=E.program;n.updateUBOMapping(b,A);const w=t.render.frame;r[b.id]!==w&&(f(b),r[b.id]=w)}function u(b){const E=h();b.__bindingPointIndex=E;const v=s.createBuffer(),A=b.__size,w=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function h(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=i[b.id],v=b.uniforms,A=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let w=0,R=v.length;w<R;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,y=L.length;S<y;S++){const P=L[S];if(p(P,w,S,A)===!0){const F=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let W=0;W<k.length;W++){const X=k[W],K=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,F+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,E,v,A){const w=b.value,R=E+"_"+v;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const L=A[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(b){const E=b.uniforms;let v=0;const A=16;for(let R=0,L=E.length;R<L;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let y=0,P=S.length;y<P;y++){const F=S[y],k=Array.isArray(F.value)?F.value:[F.value];for(let q=0,W=k.length;q<W;q++){const X=k[q],K=x(X),H=v%A,rt=H%K.boundary,ct=H+rt;v+=rt,ct!==0&&A-ct<K.storage&&(v+=A-ct),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=K.storage}}}const w=v%A;return w>0&&(v+=A-w),b.__size=v,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function d(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:d}}class sm{constructor(t={}){const{canvas:e=Dc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=Le;let w=0,R=0,L=null,S=-1,y=null;const P=new ue,F=new ue;let k=null;const q=new zt(0);let W=0,X=e.width,K=e.height,H=1,rt=null,ct=null;const yt=new ue(0,0,X,K),Ot=new ue(0,0,X,K);let jt=!1;const ie=new Ba;let Wt=!1,$=!1;const j=new oe,dt=new I,Pt=new ue,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function Se(){return L===null?H:1}let C=n;function se(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",J,!1),C===null){const U="webgl2";if(C=se(U,M),C===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Dt,At,mt,re,gt,Nt,xe,de,T,_,O,V,Z,G,Mt,nt,_t,xt,tt,lt,wt,vt,at,It;function D(){Dt=new pf(C),Dt.init(),vt=new Kp(C,Dt),At=new of(C,Dt,t,vt),mt=new Yp(C,Dt),At.reversedDepthBuffer&&f&&mt.buffers.depth.setReversed(!0),re=new _f(C),gt=new Np,Nt=new Zp(C,Dt,mt,gt,At,vt,re),xe=new cf(v),de=new ff(v),T=new yh(C),at=new rf(C,T),_=new mf(C,T,re,at),O=new vf(C,_,T,re),tt=new xf(C,At,Nt),nt=new lf(gt),V=new Up(v,xe,de,Dt,At,at,nt),Z=new nm(v,gt),G=new Op,Mt=new Vp(Dt),xt=new sf(v,xe,de,mt,O,p,l),_t=new qp(v,O,At),It=new im(C,re,At,mt),lt=new af(C,Dt,re),wt=new gf(C,Dt,re),re.programs=V.programs,v.capabilities=At,v.extensions=Dt,v.properties=gt,v.renderLists=G,v.shadowMap=_t,v.state=mt,v.info=re}D();const et=new tm(v,C);this.xr=et,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(X,K,!1))},this.getSize=function(M){return M.set(X,K)},this.setSize=function(M,U,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,K=U,e.width=Math.floor(M*H),e.height=Math.floor(U*H),B===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(M,U,B){X=M,K=U,H=B,e.width=Math.floor(M*B),e.height=Math.floor(U*B),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,U,B,z){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,B,z),mt.viewport(P.copy(yt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Ot)},this.setScissor=function(M,U,B,z){M.isVector4?Ot.set(M.x,M.y,M.z,M.w):Ot.set(M,U,B,z),mt.scissor(F.copy(Ot).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){mt.setScissorTest(jt=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){ct=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,B=!0){let z=0;if(M){let N=!1;if(L!==null){const Q=L.texture.format;N=Q===Da||Q===La||Q===Pa}if(N){const Q=L.texture.type,ot=Q===tn||Q===Hn||Q===Bi||Q===zi||Q===Ra||Q===Ca,ft=xt.getClearColor(),ht=xt.getClearAlpha(),Tt=ft.r,Rt=ft.g,Et=ft.b;ot?(g[0]=Tt,g[1]=Rt,g[2]=Et,g[3]=ht,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Tt,x[1]=Rt,x[2]=Et,x[3]=ht,C.clearBufferiv(C.COLOR,0,x))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",J,!1),xt.dispose(),G.dispose(),Mt.dispose(),gt.dispose(),xe.dispose(),de.dispose(),O.dispose(),at.dispose(),It.dispose(),V.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ye),et.removeEventListener("sessionend",Ga),Tn.stop()};function it(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=re.autoReset,U=_t.enabled,B=_t.autoUpdate,z=_t.needsUpdate,N=_t.type;D(),re.autoReset=M,_t.enabled=U,_t.autoUpdate=B,_t.needsUpdate=z,_t.type=N}function J(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Y(M){const U=M.target;U.removeEventListener("dispose",Y),pt(U)}function pt(M){Lt(M),gt.remove(M)}function Lt(M){const U=gt.get(M).programs;U!==void 0&&(U.forEach(function(B){V.releaseProgram(B)}),M.isShaderMaterial&&V.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,B,z,N,Q){U===null&&(U=St);const ot=N.isMesh&&N.matrixWorld.determinant()<0,ft=zl(M,U,B,z,N);mt.setMaterial(z,ot);let ht=B.index,Tt=1;if(z.wireframe===!0){if(ht=_.getWireframeAttribute(B),ht===void 0)return;Tt=2}const Rt=B.drawRange,Et=B.attributes.position;let Bt=Rt.start*Tt,$t=(Rt.start+Rt.count)*Tt;Q!==null&&(Bt=Math.max(Bt,Q.start*Tt),$t=Math.min($t,(Q.start+Q.count)*Tt)),ht!==null?(Bt=Math.max(Bt,0),$t=Math.min($t,ht.count)):Et!=null&&(Bt=Math.max(Bt,0),$t=Math.min($t,Et.count));const he=$t-Bt;if(he<0||he===1/0)return;at.setup(N,z,ft,B,ht);let Qt,Kt=lt;if(ht!==null&&(Qt=T.get(ht),Kt=wt,Kt.setIndex(Qt)),N.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*Se()),Kt.setMode(C.LINES)):Kt.setMode(C.TRIANGLES);else if(N.isLine){let bt=z.linewidth;bt===void 0&&(bt=1),mt.setLineWidth(bt*Se()),N.isLineSegments?Kt.setMode(C.LINES):N.isLineLoop?Kt.setMode(C.LINE_LOOP):Kt.setMode(C.LINE_STRIP)}else N.isPoints?Kt.setMode(C.POINTS):N.isSprite&&Kt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Gi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,le=N._multiDrawCounts,Gt=N._multiDrawCount,Ie=ht?T.get(ht).bytesPerElement:1,Wn=gt.get(z).currentProgram.getUniforms();for(let Ue=0;Ue<Gt;Ue++)Wn.setValue(C,"_gl_DrawID",Ue),Kt.render(bt[Ue]/Ie,le[Ue])}else if(N.isInstancedMesh)Kt.renderInstances(Bt,he,N.count);else if(B.isInstancedBufferGeometry){const bt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,le=Math.min(B.instanceCount,bt);Kt.renderInstances(Bt,he,le)}else Kt.render(Bt,he)};function Jt(M,U,B){M.transparent===!0&&M.side===Oe&&M.forceSinglePass===!1?(M.side=De,M.needsUpdate=!0,Yi(M,U,B),M.side=Qe,M.needsUpdate=!0,Yi(M,U,B),M.side=Oe):Yi(M,U,B)}this.compile=function(M,U,B=null){B===null&&(B=M),d=Mt.get(B),d.init(U),E.push(d),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),M!==B&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const z=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const ft=Q[ot];Jt(ft,B,N),z.add(ft)}else Jt(Q,B,N),z.add(Q)}),d=E.pop(),z},this.compileAsync=function(M,U,B=null){const z=this.compile(M,U,B);return new Promise(N=>{function Q(){if(z.forEach(function(ot){gt.get(ot).currentProgram.isReady()&&z.delete(ot)}),z.size===0){N(M);return}setTimeout(Q,10)}Dt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Xt=null;function nn(M){Xt&&Xt(M)}function Ye(){Tn.stop()}function Ga(){Tn.start()}const Tn=new Il;Tn.setAnimationLoop(nn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(M){Xt=M,et.setAnimationLoop(M),M===null?Tn.stop():Tn.start()},et.addEventListener("sessionstart",Ye),et.addEventListener("sessionend",Ga),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,L),d=Mt.get(M,E.length),d.init(U),E.push(d),j.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ie.setFromProjectionMatrix(j,Je,U.reversedDepth),$=this.localClippingEnabled,Wt=nt.init(this.clippingPlanes,$),m=G.get(M,b.length),m.init(),b.push(m),et.enabled===!0&&et.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&Xs(Q,U,-1/0,v.sortObjects)}Xs(M,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,ct),Ht=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Ht&&xt.addToRenderList(m,M),this.info.render.frame++,Wt===!0&&nt.beginShadows();const B=d.state.shadowsArray;_t.render(B,M,U),Wt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(d.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let ot=0,ft=Q.length;ot<ft;ot++){const ht=Q[ot];Wa(z,N,M,ht)}Ht&&xt.render(M);for(let ot=0,ft=Q.length;ot<ft;ot++){const ht=Q[ot];Va(m,M,ht,ht.viewport)}}else N.length>0&&Wa(z,N,M,U),Ht&&xt.render(M),Va(m,M,U);L!==null&&R===0&&(Nt.updateMultisampleRenderTarget(L),Nt.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(v,M,U),at.resetDefaultState(),S=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],Wt===!0&&nt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Xs(M,U,B,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)B=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ie.intersectsSprite(M)){z&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const ot=O.update(M),ft=M.material;ft.visible&&m.push(M,ot,ft,B,Pt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ie.intersectsObject(M))){const ot=O.update(M),ft=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Pt.copy(ot.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(ft)){const ht=ot.groups;for(let Tt=0,Rt=ht.length;Tt<Rt;Tt++){const Et=ht[Tt],Bt=ft[Et.materialIndex];Bt&&Bt.visible&&m.push(M,ot,Bt,B,Pt.z,Et)}}else ft.visible&&m.push(M,ot,ft,B,Pt.z,null)}}const Q=M.children;for(let ot=0,ft=Q.length;ot<ft;ot++)Xs(Q[ot],U,B,z)}function Va(M,U,B,z){const N=M.opaque,Q=M.transmissive,ot=M.transparent;d.setupLightsView(B),Wt===!0&&nt.setGlobalState(v.clippingPlanes,B),z&&mt.viewport(P.copy(z)),N.length>0&&$i(N,U,B),Q.length>0&&$i(Q,U,B),ot.length>0&&$i(ot,U,B),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Wa(M,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Gn(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Vi:tn,minFilter:kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const Q=d.state.transmissionRenderTarget[z.id],ot=z.viewport||P;Q.setSize(ot.z*v.transmissionResolutionScale,ot.w*v.transmissionResolutionScale);const ft=v.getRenderTarget(),ht=v.getActiveCubeFace(),Tt=v.getActiveMipmapLevel();v.setRenderTarget(Q),v.getClearColor(q),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ht&&xt.render(B);const Rt=v.toneMapping;v.toneMapping=yn;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),Wt===!0&&nt.setGlobalState(v.clippingPlanes,z),$i(M,B,z),Nt.updateMultisampleRenderTarget(Q),Nt.updateRenderTargetMipmap(Q),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let $t=0,he=U.length;$t<he;$t++){const Qt=U[$t],Kt=Qt.object,bt=Qt.geometry,le=Qt.material,Gt=Qt.group;if(le.side===Oe&&Kt.layers.test(z.layers)){const Ie=le.side;le.side=De,le.needsUpdate=!0,Xa(Kt,B,z,bt,le,Gt),le.side=Ie,le.needsUpdate=!0,Bt=!0}}Bt===!0&&(Nt.updateMultisampleRenderTarget(Q),Nt.updateRenderTargetMipmap(Q))}v.setRenderTarget(ft,ht,Tt),v.setClearColor(q,W),Et!==void 0&&(z.viewport=Et),v.toneMapping=Rt}function $i(M,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=M.length;N<Q;N++){const ot=M[N],ft=ot.object,ht=ot.geometry,Tt=ot.group;let Rt=ot.material;Rt.allowOverride===!0&&z!==null&&(Rt=z),ft.layers.test(B.layers)&&Xa(ft,U,B,ht,Rt,Tt)}}function Xa(M,U,B,z,N,Q){M.onBeforeRender(v,U,B,z,N,Q),M.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,U,B,z,M,Q),N.transparent===!0&&N.side===Oe&&N.forceSinglePass===!1?(N.side=De,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,M,Q),N.side=Qe,N.needsUpdate=!0,v.renderBufferDirect(B,U,z,N,M,Q),N.side=Oe):v.renderBufferDirect(B,U,z,N,M,Q),M.onAfterRender(v,U,B,z,N,Q)}function Yi(M,U,B){U.isScene!==!0&&(U=St);const z=gt.get(M),N=d.state.lights,Q=d.state.shadowsArray,ot=N.state.version,ft=V.getParameters(M,N.state,Q,U,B),ht=V.getProgramCacheKey(ft);let Tt=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?de:xe).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Y),Tt=new Map,z.programs=Tt);let Rt=Tt.get(ht);if(Rt!==void 0){if(z.currentProgram===Rt&&z.lightsStateVersion===ot)return $a(M,ft),Rt}else ft.uniforms=V.getUniforms(M),M.onBeforeCompile(ft,v),Rt=V.acquireProgram(ft,ht),Tt.set(ht,Rt),z.uniforms=ft.uniforms;const Et=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=nt.uniform),$a(M,ft),z.needsLights=Hl(M),z.lightsStateVersion=ot,z.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Rt,z.uniformsList=null,Rt}function qa(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Ps.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function $a(M,U){const B=gt.get(M);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function zl(M,U,B,z,N){U.isScene!==!0&&(U=St),Nt.resetTextureUnits();const Q=U.fog,ot=z.isMeshStandardMaterial?U.environment:null,ft=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vi,ht=(z.isMeshStandardMaterial?de:xe).get(z.envMap||ot),Tt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!B.morphAttributes.position,Bt=!!B.morphAttributes.normal,$t=!!B.morphAttributes.color;let he=yn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(he=v.toneMapping);const Qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=Qt!==void 0?Qt.length:0,bt=gt.get(z),le=d.state.lights;if(Wt===!0&&($===!0||M!==y)){const Te=M===y&&z.id===S;nt.setState(z,M,Te)}let Gt=!1;z.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==le.state.version||bt.outputColorSpace!==ft||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==ht||z.fog===!0&&bt.fog!==Q||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==Tt||bt.vertexTangents!==Rt||bt.morphTargets!==Et||bt.morphNormals!==Bt||bt.morphColors!==$t||bt.toneMapping!==he||bt.morphTargetsCount!==Kt)&&(Gt=!0):(Gt=!0,bt.__version=z.version);let Ie=bt.currentProgram;Gt===!0&&(Ie=Yi(z,U,N));let Wn=!1,Ue=!1,bi=!1;const ce=Ie.getUniforms(),ze=bt.uniforms;if(mt.useProgram(Ie.program)&&(Wn=!0,Ue=!0,bi=!0),z.id!==S&&(S=z.id,Ue=!0),Wn||y!==M){mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ce.setValue(C,"projectionMatrix",M.projectionMatrix),ce.setValue(C,"viewMatrix",M.matrixWorldInverse);const Pe=ce.map.cameraPosition;Pe!==void 0&&Pe.setValue(C,dt.setFromMatrixPosition(M.matrixWorld)),At.logarithmicDepthBuffer&&ce.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ue=!0,bi=!0)}if(N.isSkinnedMesh){ce.setOptional(C,N,"bindMatrix"),ce.setOptional(C,N,"bindMatrixInverse");const Te=N.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),ce.setValue(C,"boneTexture",Te.boneTexture,Nt))}N.isBatchedMesh&&(ce.setOptional(C,N,"batchingTexture"),ce.setValue(C,"batchingTexture",N._matricesTexture,Nt),ce.setOptional(C,N,"batchingIdTexture"),ce.setValue(C,"batchingIdTexture",N._indirectTexture,Nt),ce.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(C,"batchingColorTexture",N._colorsTexture,Nt));const ke=B.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&tt.update(N,B,Ie),(Ue||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,ce.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ze.envMap.value=ht,ze.flipEnvMap.value=ht.isCubeTexture&&ht.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(ze.envMapIntensity.value=U.environmentIntensity),Ue&&(ce.setValue(C,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&kl(ze,bi),Q&&z.fog===!0&&Z.refreshFogUniforms(ze,Q),Z.refreshMaterialUniforms(ze,z,H,K,d.state.transmissionRenderTarget[M.id]),Ps.upload(C,qa(bt),ze,Nt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ps.upload(C,qa(bt),ze,Nt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(C,"center",N.center),ce.setValue(C,"modelViewMatrix",N.modelViewMatrix),ce.setValue(C,"normalMatrix",N.normalMatrix),ce.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Te=z.uniformsGroups;for(let Pe=0,qs=Te.length;Pe<qs;Pe++){const wn=Te[Pe];It.update(wn,Ie),It.bind(wn,Ie)}}return Ie}function kl(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Hl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,U,B){const z=gt.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),gt.get(M.texture).__webglTexture=U,gt.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const B=gt.get(M);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Gl=C.createFramebuffer();this.setRenderTarget=function(M,U=0,B=0){L=M,w=U,R=B;let z=!0,N=null,Q=!1,ot=!1;if(M){const ht=gt.get(M);if(ht.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(ht.__webglFramebuffer===void 0)Nt.setupRenderTarget(M);else if(ht.__hasExternalTextures)Nt.rebindTextures(M,gt.get(M.texture).__webglTexture,gt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Et=M.depthTexture;if(ht.__boundDepthTexture!==Et){if(Et!==null&&gt.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(M)}}const Tt=M.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);const Rt=gt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?N=Rt[U][B]:N=Rt[U],Q=!0):M.samples>0&&Nt.useMultisampledRTT(M)===!1?N=gt.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?N=Rt[B]:N=Rt,P.copy(M.viewport),F.copy(M.scissor),k=M.scissorTest}else P.copy(yt).multiplyScalar(H).floor(),F.copy(Ot).multiplyScalar(H).floor(),k=jt;if(B!==0&&(N=Gl),mt.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&mt.drawBuffers(M,N),mt.viewport(P),mt.scissor(F),mt.setScissorTest(k),Q){const ht=gt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,B)}else if(ot){const ht=U;for(let Tt=0;Tt<M.textures.length;Tt++){const Rt=gt.get(M.textures[Tt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,B,ht)}}else if(M!==null&&B!==0){const ht=gt.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ht.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(M,U,B,z,N,Q,ot,ft=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=gt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht){mt.bindFramebuffer(C.FRAMEBUFFER,ht);try{const Tt=M.textures[ft],Rt=Tt.format,Et=Tt.type;if(!At.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ft),C.readPixels(U,B,z,N,vt.convert(Rt),vt.convert(Et),Q))}finally{const Tt=L!==null?gt.get(L).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,U,B,z,N,Q,ot,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=gt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ot!==void 0&&(ht=ht[ot]),ht)if(U>=0&&U<=M.width-z&&B>=0&&B<=M.height-N){mt.bindFramebuffer(C.FRAMEBUFFER,ht);const Tt=M.textures[ft],Rt=Tt.format,Et=Tt.type;if(!At.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.bufferData(C.PIXEL_PACK_BUFFER,Q.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ft),C.readPixels(U,B,z,N,vt.convert(Rt),vt.convert(Et),0);const $t=L!==null?gt.get(L).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,$t);const he=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Ic(C,he,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Q),C.deleteBuffer(Bt),C.deleteSync(he),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,B=0){const z=Math.pow(2,-B),N=Math.floor(M.image.width*z),Q=Math.floor(M.image.height*z),ot=U!==null?U.x:0,ft=U!==null?U.y:0;Nt.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ot,ft,N,Q),mt.unbindTexture()};const Vl=C.createFramebuffer(),Wl=C.createFramebuffer();this.copyTextureToTexture=function(M,U,B=null,z=null,N=0,Q=null){Q===null&&(N!==0?(Gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ot,ft,ht,Tt,Rt,Et,Bt,$t,he;const Qt=M.isCompressedTexture?M.mipmaps[Q]:M.image;if(B!==null)ot=B.max.x-B.min.x,ft=B.max.y-B.min.y,ht=B.isBox3?B.max.z-B.min.z:1,Tt=B.min.x,Rt=B.min.y,Et=B.isBox3?B.min.z:0;else{const ke=Math.pow(2,-N);ot=Math.floor(Qt.width*ke),ft=Math.floor(Qt.height*ke),M.isDataArrayTexture?ht=Qt.depth:M.isData3DTexture?ht=Math.floor(Qt.depth*ke):ht=1,Tt=0,Rt=0,Et=0}z!==null?(Bt=z.x,$t=z.y,he=z.z):(Bt=0,$t=0,he=0);const Kt=vt.convert(U.format),bt=vt.convert(U.type);let le;U.isData3DTexture?(Nt.setTexture3D(U,0),le=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Nt.setTexture2DArray(U,0),le=C.TEXTURE_2D_ARRAY):(Nt.setTexture2D(U,0),le=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Gt=C.getParameter(C.UNPACK_ROW_LENGTH),Ie=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ue=C.getParameter(C.UNPACK_SKIP_ROWS),bi=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Qt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Rt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Et);const ce=M.isDataArrayTexture||M.isData3DTexture,ze=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const ke=gt.get(M),Te=gt.get(U),Pe=gt.get(ke.__renderTarget),qs=gt.get(Te.__renderTarget);mt.bindFramebuffer(C.READ_FRAMEBUFFER,Pe.__webglFramebuffer),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let wn=0;wn<ht;wn++)ce&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(M).__webglTexture,N,Et+wn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(U).__webglTexture,Q,he+wn)),C.blitFramebuffer(Tt,Rt,ot,ft,Bt,$t,ot,ft,C.DEPTH_BUFFER_BIT,C.NEAREST);mt.bindFramebuffer(C.READ_FRAMEBUFFER,null),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||gt.has(M)){const ke=gt.get(M),Te=gt.get(U);mt.bindFramebuffer(C.READ_FRAMEBUFFER,Vl),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,Wl);for(let Pe=0;Pe<ht;Pe++)ce?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ke.__webglTexture,N,Et+Pe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ke.__webglTexture,N),ze?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.__webglTexture,Q,he+Pe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,Q),N!==0?C.blitFramebuffer(Tt,Rt,ot,ft,Bt,$t,ot,ft,C.COLOR_BUFFER_BIT,C.NEAREST):ze?C.copyTexSubImage3D(le,Q,Bt,$t,he+Pe,Tt,Rt,ot,ft):C.copyTexSubImage2D(le,Q,Bt,$t,Tt,Rt,ot,ft);mt.bindFramebuffer(C.READ_FRAMEBUFFER,null),mt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ze?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(le,Q,Bt,$t,he,ot,ft,ht,Kt,bt,Qt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(le,Q,Bt,$t,he,ot,ft,ht,Kt,Qt.data):C.texSubImage3D(le,Q,Bt,$t,he,ot,ft,ht,Kt,bt,Qt):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Q,Bt,$t,ot,ft,Kt,bt,Qt.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Q,Bt,$t,Qt.width,Qt.height,Kt,Qt.data):C.texSubImage2D(C.TEXTURE_2D,Q,Bt,$t,ot,ft,Kt,bt,Qt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Gt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ie),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ue),C.pixelStorei(C.UNPACK_SKIP_IMAGES,bi),Q===0&&U.generateMipmaps&&C.generateMipmap(le),mt.unbindTexture()},this.initRenderTarget=function(M){gt.get(M).__webglFramebuffer===void 0&&Nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Nt.setTextureCube(M,0):M.isData3DTexture?Nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Nt.setTexture2DArray(M,0):Nt.setTexture2D(M,0),mt.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,mt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}const ae={quickTarget:5,longTarget:10,midMatchTrigger:5,initialMoney:900,maxMoney:6e3,baseIncome:1100,winIncome:500,killIncome:200,buildBudget:100,buildSeconds:120,buySeconds:18,swapSeconds:4.2,roundEndSeconds:5,roundSeconds:75,revealSeconds:35},qt=[{id:0,name:"朱队",short:"朱",title:"朱鸟",color:"#f05b4f",dark:"#7e2928",names:["你 · 阿烬","队友 · 小满"]},{id:1,name:"青队",short:"青",title:"青龙",color:"#29aeb0",dark:"#175d66",names:["青 · 岚","青 · 淼"]},{id:2,name:"金队",short:"金",title:"金虎",color:"#e8ad38",dark:"#79571d",names:["金 · 岳","金 · 铃"]},{id:3,name:"紫队",short:"紫",title:"紫鼬",color:"#9a78d1",dark:"#4c386d",names:["紫 · 朔","紫 · 苓"]}],te=[{id:0,label:"A",name:"墨庭",cx:-10.5,cz:-10.5,sx:-1,sz:-1,color:"#b85248"},{id:1,label:"B",name:"竹庭",cx:10.5,cz:-10.5,sx:1,sz:-1,color:"#318d83"},{id:2,label:"C",name:"砂庭",cx:-10.5,cz:10.5,sx:-1,sz:1,color:"#b58a38"},{id:3,label:"D",name:"霞庭",cx:10.5,cz:10.5,sx:1,sz:1,color:"#78619e"}].map(s=>({...s,minX:s.sx<0?-18:3,maxX:s.sx<0?-3:18,minZ:s.sz<0?-18:3,maxZ:s.sz<0?-3:18})),zs=[{id:"low",name:"切羽矮墙",icon:"▱",cost:20,description:"遮挡下半身，可越过墙顶观察。适合制造接近节奏。",size:[3,1.05,.55],tag:"视线 / 绕行"},{id:"high",name:"墨染高墙",icon:"▥",cost:35,description:"完全遮挡视线，改写直线冲锋路线。",size:[3,2.65,.55],tag:"强遮挡"},{id:"crate",name:"榫卯箱",icon:"◇",cost:15,description:"紧凑掩体，适合封堵缺口与制造转角。",size:[1.3,1.3,1.3],tag:"灵活"},{id:"corner",name:"回锋转角",icon:"⌐",cost:40,description:"双面 L 形掩体，保护侧翼并切割交战空间。",size:[2.8,1.85,2.8],tag:"组合掩体"}],Ea=[{id:"free",name:"无名短刃",subtitle:"基础武器",price:0,damage:22,range:2,minRange:0,arc:72,windup:.17,active:.1,recovery:.25,blockDamage:20,color:"#d9d2bd",trail:"#f3e6c5",description:"永不缺失的可靠短刃。速度均衡，距离较短。",stats:{speed:76,damage:30,range:28}},{id:"dagger",name:"蜂刺",subtitle:"疾速短刀",price:400,damage:18,range:2.05,minRange:0,arc:66,windup:.1,active:.08,recovery:.18,blockDamage:16,color:"#bfe4d8",trail:"#79f0cf",description:"极快连击与贴身追击。单发伤害低，需持续黏住对手。",stats:{speed:100,damage:24,range:30}},{id:"sword",name:"游隼",subtitle:"均衡打刀",price:800,damage:34,range:2.65,minRange:0,arc:82,windup:.23,active:.12,recovery:.34,blockDamage:28,color:"#d7e6ed",trail:"#88d9ff",description:"距离、伤害与速度均衡，挥砍较宽，适合稳定正面交战。",stats:{speed:62,damage:52,range:58}},{id:"axe",name:"断岳",subtitle:"重型刀斧",price:1400,damage:68,range:2.8,minRange:0,arc:88,windup:.55,active:.14,recovery:.66,blockDamage:48,color:"#e1c0a0",trail:"#ff9b69",description:"缓慢而致命，大幅消耗格挡体力。落空后收招代价极高。",stats:{speed:25,damage:100,range:64}},{id:"spear",name:"长虹",subtitle:"长柄薙刀",price:1100,damage:43,range:3.7,minRange:1.05,arc:36,windup:.36,active:.11,recovery:.5,blockDamage:32,color:"#e8e0c9",trail:"#f7d66b",description:"最长攻击距离与窄突刺判定。贴身过近时难以有效命中。",stats:{speed:42,damage:66,range:100}}],nl=[[{type:"high",u:-4.5,v:-4.5,r:0},{type:"low",u:4.5,v:-4.2,r:Math.PI/2},{type:"crate",u:-4.2,v:4.5,r:0},{type:"low",u:4.5,v:4.5,r:0}],[{type:"corner",u:-3.7,v:-3.7,r:0},{type:"corner",u:3.7,v:3.7,r:Math.PI},{type:"crate",u:4.6,v:-4.6,r:0}],[{type:"high",u:-4.4,v:-4.5,r:Math.PI/2},{type:"high",u:4.4,v:4.5,r:Math.PI/2},{type:"crate",u:4.3,v:-4.3,r:0},{type:"crate",u:-4.3,v:4.3,r:0}],[{type:"low",u:-4.5,v:-4.5,r:0},{type:"low",u:4.5,v:-4.5,r:Math.PI/2},{type:"corner",u:-3.7,v:3.7,r:Math.PI/2},{type:"crate",u:4.5,v:4.5,r:0}],[{type:"high",u:-4.5,v:4.4,r:0},{type:"low",u:4.4,v:-4.5,r:0},{type:"low",u:4.5,v:4.4,r:Math.PI/2},{type:"crate",u:-4.4,v:-4.5,r:0}]];function Fn(s){return Ea.find(t=>t.id===s)||Ea[0]}function hn(s){return zs.find(t=>t.id===s)||zs[0]}function ci(s,t){return te.find(e=>s>=e.minX&&s<=e.maxX&&t>=e.minZ&&t<=e.maxZ)||null}function bs(s){return[{x:s.cx-.85,z:s.cz+s.sz*5.1},{x:s.cx+.85,z:s.cz+s.sz*5.1}]}function ba(s,t=Math.random){const e=[...s];for(let n=e.length-1;n>0;n-=1){const i=Math.floor(t()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function rm(s,t=Math.random){for(let n=0;n<100;n+=1){const i=ba(Array.from({length:s},(r,a)=>a),t);if(i.every((r,a)=>r!==a))return i}const e=1+Math.floor(t()*(s-1));return Array.from({length:s},(n,i)=>(i+e)%s)}function am(s){const t=[...new Set(s)];return t.length===1?t[0]:null}function om({won:s=!1,kills:t=0,base:e=1100,winBonus:n=500,killBonus:i=200}={}){return e+(s?n:0)+Math.max(0,t)*i}function lm({mode:s,scores:t,trigger:e=5,alreadyTriggered:n=!1}){return s==="long"&&!n&&Math.max(...t)>=e}function Ar(s,t){const e=Number.parseInt(s,10);return Number.isFinite(e)?Math.min(20,Math.max(1,e)):t}function cm(s){const t=Math.max(0,Math.ceil(s));return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`}function hm(s,t,e){let n=(t-s+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),s+n*Math.min(1,e)}const ks=1e-5;function Ta(s,t,e){const n=s-e.x,i=t-e.z,r=Math.cos(e.rot||0),a=Math.sin(e.rot||0);return{x:n*r-i*a,z:n*a+i*r}}function Hs(s,t,e,n){const i=Ta(s,t,n),r=Math.max(-n.hx,Math.min(n.hx,i.x)),a=Math.max(-n.hz,Math.min(n.hz,i.z)),o=i.x-r,l=i.z-a;return o*o+l*l<e*e-ks}function mi(s,t,e,n,i=18.55){return s-e<-i||s+e>i||t-e<-i||t+e>i?!1:!n.some(r=>(r.height||3)>.35&&Hs(s,t,e,r))}function il(s,t,e,n,i,r=18.55){let a=s.x,o=s.z;return mi(a+t,o,n,i,r)&&(a+=t),mi(a,o+e,n,i,r)&&(o+=e),a===s.x&&o===s.z&&t!==0&&e!==0&&mi(a+t*.35,o+e*.35,n,i,r)&&(a+=t*.35,o+=e*.35),{x:a,z:o}}function um(s,t,e){const n=Ta(s.x,s.z,e),i=Ta(t.x,t.z,e),r=i.x-n.x,a=i.z-n.z;let o=0,l=1;for(const[c,u,h]of[[n.x,r,e.hx],[n.z,a,e.hz]])if(Math.abs(u)<ks){if(c<-h||c>h)return!1}else{let f=(-h-c)/u,p=(h-c)/u;if(f>p&&([f,p]=[p,f]),o=Math.max(o,f),l=Math.min(l,p),o>l)return!1}return l>=0&&o<=1}function hi(s,t,e,n=1.35){return!e.some(i=>(i.height||3)>=n&&um(s,t,i))}function sl(s,t=0){const e=Math.cos(s.rot||0),n=Math.sin(s.rot||0),i=s.hx+t,r=s.hz+t;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([a,o])=>({x:s.x+e*a+n*o,z:s.z-n*a+e*o}))}function dm(s,t,e=.03){const n=sl(s,e),i=sl(t,e),r=[s.rot||0,(s.rot||0)+Math.PI/2,t.rot||0,(t.rot||0)+Math.PI/2].map(a=>({x:Math.cos(a),z:-Math.sin(a)}));for(const a of r){const o=u=>u.map(h=>h.x*a.x+h.z*a.z),l=o(n),c=o(i);if(Math.max(...l)<=Math.min(...c)+ks||Math.max(...c)<=Math.min(...l)+ks)return!1}return!0}class fm{constructor(){this.items=[]}push(t){const e=this.items;e.push(t);let n=e.length-1;for(;n>0;){const i=n-1>>1;if(e[i].f<=t.f)break;e[n]=e[i],n=i}e[n]=t}pop(){const t=this.items;if(!t.length)return null;const e=t[0],n=t.pop();if(t.length){let i=0;for(;;){const r=i*2+1,a=r+1;if(r>=t.length)break;let o=r;if(a<t.length&&t[a].f<t[r].f&&(o=a),t[o].f>=n.f)break;t[i]=t[o],i=o}t[i]=n}return e}get length(){return this.items.length}}class pm{constructor({min:t=-18,max:e=18,cell:n=1,radius:i=.48}={}){this.min=t,this.max=e,this.cell=n,this.radius=i,this.size=Math.round((e-t)/n),this.blocked=new Uint8Array(this.size*this.size)}rebuild(t,e=18.55){for(let n=0;n<this.size;n+=1)for(let i=0;i<this.size;i+=1){const r=this.toWorld(i,n);this.blocked[this.index(i,n)]=mi(r.x,r.z,this.radius,t,e)?0:1}}index(t,e){return e*this.size+t}valid(t,e){return t>=0&&e>=0&&t<this.size&&e<this.size}toCell(t,e){return{x:Math.max(0,Math.min(this.size-1,Math.floor((t-this.min)/this.cell))),z:Math.max(0,Math.min(this.size-1,Math.floor((e-this.min)/this.cell)))}}toWorld(t,e){return{x:this.min+(t+.5)*this.cell,z:this.min+(e+.5)*this.cell}}nearestOpen(t){if(!this.blocked[this.index(t.x,t.z)])return t;for(let e=1;e<=5;e+=1){let n=null,i=1/0;for(let r=t.z-e;r<=t.z+e;r+=1)for(let a=t.x-e;a<=t.x+e;a+=1){if(!this.valid(a,r)||this.blocked[this.index(a,r)])continue;const o=(a-t.x)**2+(r-t.z)**2;o<i&&(n={x:a,z:r},i=o)}if(n)return n}return null}findPath(t,e){const n=this.nearestOpen(this.toCell(t.x,t.z)),i=this.nearestOpen(this.toCell(e.x,e.z));if(!n||!i)return[];const r=this.index(n.x,n.z),a=this.index(i.x,i.z);if(r===a)return[{x:e.x,z:e.z}];const o=this.size*this.size,l=new Float32Array(o);l.fill(1/0);const c=new Int32Array(o);c.fill(-1);const u=new Uint8Array(o),h=new fm;l[r]=0,h.push({index:r,x:n.x,z:n.z,f:0});const f=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];for(;h.length;){const p=h.pop();if(!u[p.index]){if(p.index===a){const g=[];let x=a;for(;x!==r&&x>=0;){const m=x%this.size,d=Math.floor(x/this.size);g.push(this.toWorld(m,d)),x=c[x]}return g.reverse(),this.blocked[this.index(this.toCell(e.x,e.z).x,this.toCell(e.x,e.z).z)]||(g[g.length-1]={x:e.x,z:e.z}),this.smooth(t,g)}u[p.index]=1;for(const[g,x,m]of f){const d=p.x+g,b=p.z+x;if(!this.valid(d,b))continue;const E=this.index(d,b);if(this.blocked[E]||u[E]||g&&x&&(this.blocked[this.index(p.x+g,p.z)]||this.blocked[this.index(p.x,p.z+x)]))continue;const v=l[p.index]+m;if(v>=l[E])continue;l[E]=v,c[E]=p.index;const A=Math.hypot(i.x-d,i.z-b);h.push({index:E,x:d,z:b,f:v+A})}}}return[]}smooth(t,e){if(e.length<3)return e;const n=[];let i=t,r=0;for(;r<e.length;){let a=r;for(let o=e.length-1;o>r;o-=1)if(this.walkableLine(i,e[o])){a=o;break}n.push(e[a]),i=e[a],r=a+1}return n}walkableLine(t,e){const n=Math.hypot(e.x-t.x,e.z-t.z),i=Math.max(1,Math.ceil(n/.35));for(let r=1;r<=i;r+=1){const a=r/i,o=t.x+(e.x-t.x)*a,l=t.z+(e.z-t.z)*a,c=this.toCell(o,l);if(this.blocked[this.index(c.x,c.z)])return!1}return!0}}const In="#17252b";function Rr(s){const t=new dh(s);return t.colorSpace=Le,t.anisotropy=4,t}class mm{constructor(t){this.container=t,this.scene=new sh,this.scene.background=new zt("#91aaa5"),this.scene.fog=new Oa("#91aaa5",42,105),this.camera=new Ge(72,window.innerWidth/window.innerHeight,.045,160),this.camera.rotation.order="YXZ",this.scene.add(this.camera),this.renderer=new sm({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Le,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ol,this.renderer.domElement.id="arena-canvas",this.renderer.domElement.tabIndex=0,t.appendChild(this.renderer.domElement),this.gradientMap=new ah(new Uint8Array([32,32,32,255,122,122,122,255,205,205,205,255,255,255,255,255]),4,1,Ve),this.gradientMap.minFilter=Re,this.gradientMap.magFilter=Re,this.gradientMap.needsUpdate=!0,this.materials=new Map,this.staticColliders=[],this.actorVisuals=new Map,this.effects=[],this.zoneMarkers=[],this.menuTime=0,this.staticGroup=new pe,this.dynamicGroup=new pe,this.actorGroup=new pe,this.effectGroup=new pe,this.scene.add(this.staticGroup,this.dynamicGroup,this.actorGroup,this.effectGroup),this.createLighting(),this.createArena(),this.createBackdrop(),this.createZoneMarkers(),this.viewModel=new pe,this.camera.add(this.viewModel),this.viewWeapon=null,this.slashView=null,this.ghost=null,this.resizeHandler=()=>this.resize(),window.addEventListener("resize",this.resizeHandler),this.setMenuCamera(0)}toon(t,e={}){const n=`${t}-${e.transparent?"t":"o"}-${e.opacity??1}`;if(!e.transparent&&this.materials.has(n))return this.materials.get(n);const i=new To({color:t,gradientMap:this.gradientMap,transparent:!!e.transparent,opacity:e.opacity??1,depthWrite:e.depthWrite??!e.transparent,side:e.side??Qe});return e.transparent||this.materials.set(n,i),i}basic(t,e={}){return new Fa({color:t,transparent:!!e.transparent,opacity:e.opacity??1,side:e.side??Qe,depthWrite:e.depthWrite??!e.transparent})}box(t,e,n,i,r=!0){const a=new pe,o=new yi(t,e,n),l=new ee(o,this.toon(i));if(l.castShadow=!0,l.receiveShadow=!0,a.add(l),r){const c=new uh(new fh(o,25),new Ma({color:In,transparent:!0,opacity:.9}));c.renderOrder=2,a.add(c)}return a}createLighting(){const t=new gh("#e6f3e8","#4e5354",1.4);this.scene.add(t);const e=new Ro("#ffe1b0",2.35);e.position.set(-24,38,18),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-30,e.shadow.camera.right=30,e.shadow.camera.top=30,e.shadow.camera.bottom=-30,e.shadow.camera.near=1,e.shadow.camera.far=90,e.shadow.bias=-35e-5,this.scene.add(e);const n=new Ro("#7ed5d0",.85);n.position.set(24,12,-30),this.scene.add(n)}createArenaTexture(){const t=document.createElement("canvas");t.width=1200,t.height=1200;const e=t.getContext("2d"),n=t.width/40,i=l=>(l+20)*n,r=l=>(l+20)*n;e.fillStyle="#c9c0a8",e.fillRect(0,0,t.width,t.height);let a=7429;const o=()=>(a=a*16807%2147483647,a/2147483647);for(let l=0;l<9e3;l+=1)e.fillStyle=o()>.5?"rgba(29,42,43,.035)":"rgba(255,249,221,.05)",e.fillRect(o()*1200,o()*1200,1+o()*2,1+o()*2);e.fillStyle="#ddd5bd",e.fillRect(i(-3),0,6*n,1200),e.fillRect(0,r(-3),1200,6*n);for(const l of te)e.fillStyle=`${l.color}28`,e.fillRect(i(l.minX),r(l.minZ),15*n,15*n),e.strokeStyle=`${l.color}bb`,e.lineWidth=8,e.strokeRect(i(l.minX),r(l.minZ),15*n,15*n),e.fillStyle="rgba(229,220,192,.88)",e.fillRect(i(l.cx-1.65),r(l.minZ),3.3*n,15*n),e.fillRect(i(l.minX),r(l.cz-1.65),15*n,3.3*n),e.strokeStyle="rgba(45,55,52,.18)",e.lineWidth=2,e.setLineDash([12,12]),e.strokeRect(i(l.cx-1.65),r(l.minZ),3.3*n,15*n),e.strokeRect(i(l.minX),r(l.cz-1.65),15*n,3.3*n),e.setLineDash([]),e.fillStyle="rgba(23,37,43,.18)",e.font="900 164px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(l.label,i(l.cx),r(l.cz)),e.font="700 25px sans-serif",e.fillText(`${l.name} / BUILD ${l.label}`,i(l.cx),r(l.cz+1.6));e.strokeStyle="rgba(28,45,47,.11)",e.lineWidth=1;for(let l=-18;l<=18;l+=1)e.beginPath(),e.moveTo(i(l),r(-18)),e.lineTo(i(l),r(18)),e.stroke(),e.beginPath(),e.moveTo(i(-18),r(l)),e.lineTo(i(18),r(l)),e.stroke();return e.strokeStyle="#253c3e",e.lineWidth=7,e.beginPath(),e.arc(i(0),r(0),3.15*n,0,Math.PI*2),e.stroke(),e.strokeStyle="#b34f40",e.lineWidth=3,e.beginPath(),e.arc(i(0),r(0),2.45*n,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(30,49,50,.78)",e.font="900 66px serif",e.fillText("界",i(0),r(0)+3),Rr(t)}createArena(){const t=new ee(new qi(40,40),new To({map:this.createArenaTexture(),gradientMap:this.gradientMap}));t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.staticGroup.add(t);const e=this.box(42,1.2,42,"#4f6662",!1);e.position.y=-.65,this.staticGroup.add(e);const n=[{x:0,z:-19.4,w:40,d:.8},{x:0,z:19.4,w:40,d:.8},{x:-19.4,z:0,w:.8,d:40},{x:19.4,z:0,w:.8,d:40}];for(const i of n){const r=this.box(i.w,3.2,i.d,"#d5cbb2");r.position.set(i.x,1.6,i.z),this.staticGroup.add(r);const a=this.box(i.w+.18,.22,i.d+.18,In,!1);a.position.set(i.x,3.25,i.z),this.staticGroup.add(a),this.staticColliders.push({x:i.x,z:i.z,hx:i.w/2,hz:i.d/2,rot:0,height:3.2})}this.createGate(0,-13.6,0,"#a64b3f"),this.createGate(0,13.6,Math.PI,"#a64b3f"),this.createGate(-13.6,0,Math.PI/2,"#386f6b"),this.createGate(13.6,0,-Math.PI/2,"#386f6b");for(const[i,r]of[[-4.6,-4.6],[4.6,-4.6],[-4.6,4.6],[4.6,4.6]]){const a=this.box(.85,.35,.85,"#596663");a.position.set(i,.175,r),this.staticGroup.add(a);const o=this.box(.38,2.4,.38,"#263b3d");o.position.set(i,1.45,r),this.staticGroup.add(o);const l=this.box(.72,.65,.72,"#e7b963");l.position.set(i,2.25,r),this.staticGroup.add(l),this.staticColliders.push({x:i,z:r,hx:.44,hz:.44,rot:0,height:2.7})}for(const i of te){const r=[{x:i.cx-.85,z:i.cz+i.sz*5.1},{x:i.cx+.85,z:i.cz+i.sz*5.1}];for(const a of r){const o=new ee(new Fi(.58,.68,24),this.basic(i.color,{transparent:!0,opacity:.75,side:Oe}));o.rotation.x=-Math.PI/2,o.position.set(a.x,.018,a.z),this.staticGroup.add(o)}}}createGate(t,e,n,i){const r=new pe;r.position.set(t,0,e),r.rotation.y=n;for(const c of[-1,1]){const u=this.box(.5,4.3,.5,i);u.position.set(c*2.45,2.15,0),r.add(u);const h=t+Math.cos(n)*c*2.45,f=e-Math.sin(n)*c*2.45;this.staticColliders.push({x:h,z:f,hx:.32,hz:.32,rot:0,height:4.3})}const a=this.box(6.2,.45,.55,i);a.position.y=4.15,r.add(a);const o=this.box(6.8,.22,.72,In);o.position.y=4.55,r.add(o);const l=this.box(1.15,.85,.18,"#d9cba9");l.position.set(0,3.75,-.32),r.add(l),this.staticGroup.add(r)}createBackdrop(){const t=new ee(new Os(110,48),this.toon("#69847d"));t.rotation.x=-Math.PI/2,t.position.y=-1.28,this.staticGroup.add(t);const e=this.toon("#526f6d");for(let i=0;i<18;i+=1){const r=i/18*Math.PI*2,a=58+i%3*8,o=new ee(new Bs(9+i%4*2,18+i%5*4,5),e);o.position.set(Math.cos(r)*a,5,Math.sin(r)*a),o.rotation.y=r,this.staticGroup.add(o)}const n=new ee(new Os(9,48),this.basic("#eac885",{side:Oe}));n.position.set(-35,28,-65),n.lookAt(0,10,0),this.staticGroup.add(n);for(let i=0;i<12;i+=1){const r=i/12*Math.PI*2,a=this.box(1.4,3.6,.07,i%2?"#b34f42":"#d8cfb6");a.position.set(Math.cos(r)*23,5+i%3,Math.sin(r)*23),a.rotation.y=-r+Math.PI/2,this.staticGroup.add(a)}}createTextSprite(t,{color:e="#ffffff",background:n="rgba(19,32,36,.88)",width:i=512,height:r=144,fontSize:a=50}={}){const o=document.createElement("canvas");o.width=i,o.height=r;const l=o.getContext("2d");l.fillStyle=n,l.beginPath(),l.roundRect(4,4,i-8,r-8,20),l.fill(),l.strokeStyle=e,l.lineWidth=5,l.stroke(),l.fillStyle=e,l.font=`800 ${a}px sans-serif`,l.textAlign="center",l.textBaseline="middle",l.fillText(t,i/2,r/2+2);const c=new Mo(new va({map:Rr(o),transparent:!0,depthWrite:!1}));return c.userData.textureCanvas=o,c}createZoneMarkers(){for(const t of te){const e=this.createTextSprite(`${t.label} · ${t.name}`,{color:t.color,fontSize:54});e.position.set(t.cx,4.2,t.cz),e.scale.set(4.4,1.24,1),this.staticGroup.add(e),this.zoneMarkers.push(e)}}setZoneOwners(t){for(const e of te){const n=t.find(o=>o.buildZone===e.id),i=this.zoneMarkers[e.id],r=i.material.map,a=this.createTextSprite(`${e.label} · ${n?.name||""}营造`,{color:n?qt[n.id].color:e.color,fontSize:48});i.material.map=a.material.map,i.material.needsUpdate=!0,r?.dispose()}}clearDynamic(){for(const t of this.actorVisuals.values())this.actorGroup.remove(t.root);this.actorVisuals.clear(),this.dynamicGroup.clear(),this.effectGroup.clear(),this.effects=[],this.ghost=null,this.viewModel.clear(),this.viewWeapon=null}createBuildMesh(t,e=0,n=!1){const i=hn(t),r=new pe,a=qt[e]?.color||"#8da19a",o=t==="crate"?"#a8926b":t==="high"?"#64716d":"#b7aa8c",l=(c,u,h,f)=>(c.position.set(u,h,f),r.add(c),c);if(t==="corner")l(this.box(2.8,1.85,.55,o),0,.925,-1.125),l(this.box(.55,1.85,2.25,o),-1.125,.925,.275),l(this.box(2.86,.13,.61,a,!1),0,1.78,-1.125),l(this.box(.61,.13,2.3,a,!1),-1.125,1.78,.275);else{const[c,u,h]=i.size;if(l(this.box(c,u,h,o),0,u/2,0),l(this.box(c+.04,.12,h+.04,a,!1),0,u-.08,0),t==="crate"){const f=this.box(.12,u+.02,h+.035,In,!1);l(f,0,u/2,0)}}return n&&r.traverse(c=>{c.isMesh&&(c.material=this.toon("#62d6a0",{transparent:!0,opacity:.42,depthWrite:!1}),c.castShadow=!1,c.receiveShadow=!1),c.isLineSegments&&(c.material=new Ma({color:"#b8ffe1",transparent:!0,opacity:.9}))}),r}setGhost(t,e){return this.ghost&&this.dynamicGroup.remove(this.ghost),this.ghost=this.createBuildMesh(t,e,!0),this.dynamicGroup.add(this.ghost),this.ghost}removeGhost(){this.ghost&&this.dynamicGroup.remove(this.ghost),this.ghost=null}setGhostValidity(t){if(!this.ghost)return;const e=t?"#62d6a0":"#ef625b";this.ghost.traverse(n=>{n.isMesh&&n.material.color.set(e),n.isLineSegments&&n.material.color.set(t?"#b8ffe1":"#ffb0a9")})}createWeaponMesh(t,e=!1){const n=Fn(t),i=new pe,r=t==="spear"?2.25:t==="axe"?1.35:t==="dagger"||t==="free"?.82:1.25,a=t==="spear"?1.7:t==="axe"?.95:.32,o=new ee(new pi(e?.035:.045,e?.04:.05,a,8),this.toon("#293b3d"));o.rotation.x=Math.PI/2,o.position.z=-a/2+.12,i.add(o);const l=this.box(t==="spear"?.12:.38,.08,.1,t==="axe"?"#9d593d":"#c5a257",!1);if(l.position.z=-a+.12,i.add(l),t==="axe"){const c=this.box(.72,.52,.12,n.color);c.position.set(.22,0,-1.18),c.rotation.z=-.2,i.add(c);const u=this.box(.12,.6,.14,"#e9e1c9",!1);u.position.set(.57,0,-1.18),i.add(u)}else{const c=Math.max(.45,r-a),u=this.box(t==="dagger"||t==="free"?.09:.13,e?.035:.055,c,n.color);u.position.z=-a-c/2+.12,t==="spear"&&(u.scale.x=2.1),i.add(u);const h=new ee(new Bs(t==="spear"?.15:.075,.25,4),this.toon(n.color));h.rotation.x=-Math.PI/2,h.rotation.y=Math.PI/4,h.position.z=-r+.02,i.add(h)}return i.userData.weaponId=t,i}createActor(t){const e=qt[t.teamId],n=new pe,i=new pe;n.add(i);const r=this.box(.74,.82,.42,e.color);r.position.y=1.17,i.add(r);const a=this.box(.79,.15,.46,In,!1);a.position.y=.88,i.add(a);const o=this.box(.44,.25,.06,"#e2d8bd",!1);o.position.set(0,1.28,-.24),i.add(o);const l=new ee(new Oi(.29,8,6),this.toon("#c99d7b"));l.position.y=1.79,l.castShadow=!0,i.add(l);const c=this.box(.4,.22,.07,"#e6dcc5");c.position.set(0,1.76,-.255),i.add(c);const u=this.box(.27,.045,.075,In,!1);u.position.set(0,1.8,-.296),i.add(u);const h=new ee(new pi(.16,.5,.24,6),this.toon("#263b3d"));h.position.y=2.06,h.castShadow=!0,i.add(h);const f=new ee(new pi(.35,.4,.07,6),this.toon(e.color));f.position.y=1.96,i.add(f);const p=new pe,g=new pe;p.position.set(-.49,1.48,0),g.position.set(.49,1.48,0);for(const R of[p,g]){const L=this.box(.25,.64,.28,e.color);L.position.y=-.27,R.add(L);const S=new ee(new Oi(.13,6,5),this.toon("#c99d7b"));S.position.y=-.62,R.add(S),i.add(R)}const x=new pe;x.position.set(0,-.62,-.05),g.add(x);const m=this.createWeaponMesh(t.weaponId);x.add(m);const d=new pe,b=new pe;d.position.set(-.2,.8,0),b.position.set(.2,.8,0);for(const R of[d,b]){const L=this.box(.28,.72,.31,"#293a3d");L.position.y=-.35,R.add(L);const S=this.box(.3,.16,.48,In);S.position.set(0,-.72,-.08),R.add(S),i.add(R)}const E=new ee(new Fi(.48,.6,28),this.basic(e.color,{transparent:!0,opacity:.82,side:Oe,depthWrite:!1}));E.rotation.x=-Math.PI/2,E.position.y=.025,n.add(E);const v=this.createActorLabel(t);v.position.set(0,2.63,0),n.add(v);const A=this.createTextSprite("!",{color:"#fff4d5",background:"rgba(211,69,53,.94)",width:128,height:128,fontSize:90});A.scale.set(.52,.52,1),A.position.set(0,3.05,0),A.visible=!1,n.add(A),n.position.set(t.x,0,t.z),this.actorGroup.add(n);const w={root:n,visual:i,body:r,leftArm:p,rightArm:g,leftLeg:d,rightLeg:b,weaponHolder:x,weaponMesh:m,weaponId:t.weaponId,ring:E,label:v,telegraph:A,walkPhase:Math.random()*10,deathProgress:0,lastHealth:t.health};return this.actorVisuals.set(t.id,w),w}createActorLabel(t){const e=qt[t.teamId],n=document.createElement("canvas");n.width=384,n.height=96;const i=Rr(n),r=new Mo(new va({map:i,transparent:!0,depthWrite:!1}));return r.scale.set(2.15,.54,1),r.userData.labelCanvas=n,r.userData.labelTexture=i,this.drawActorLabel(r,t,e),r}drawActorLabel(t,e,n=qt[e.teamId]){const i=t.userData.labelCanvas,r=i.getContext("2d");r.clearRect(0,0,i.width,i.height),r.fillStyle="rgba(16,28,31,.82)",r.beginPath(),r.roundRect(18,4,348,78,14),r.fill(),r.fillStyle=n.color,r.fillRect(18,4,8,78),r.font="700 29px sans-serif",r.textAlign="left",r.fillStyle="#f3ecd9",r.fillText(e.name,39,38),r.fillStyle="rgba(255,255,255,.17)",r.fillRect(39,56,300,10),r.fillStyle=e.health>35?n.color:"#f05b4f",r.fillRect(39,56,300*Math.max(0,e.health)/100,10),t.userData.labelTexture.needsUpdate=!0}updateActor(t,e,n){const i=this.actorVisuals.get(t.id);if(!i)return;if(i.weaponId!==t.weaponId&&(i.weaponHolder.clear(),i.weaponMesh=this.createWeaponMesh(t.weaponId),i.weaponHolder.add(i.weaponMesh),i.weaponId=t.weaponId),i.root.position.set(t.x,0,t.z),i.root.rotation.y=t.yaw,i.root.visible=!(t.isPlayer&&t.alive&&!t.forceVisible),i.label.visible=t.alive&&!t.isPlayer,i.ring.visible=t.alive,i.telegraph.visible=!!(t.alive&&!t.isPlayer&&t.attack&&t.attack.elapsed<t.attack.weapon.windup),i.lastHealth!==t.health&&(this.drawActorLabel(i.label,t),i.lastHealth=t.health),!t.alive){i.deathProgress=Math.min(1,i.deathProgress+e*2.5);const a=1-(1-i.deathProgress)**3;i.visual.rotation.z=a*1.42,i.visual.position.y=-a*.25,i.ring.material.opacity=.18;return}i.deathProgress=0,i.visual.rotation.z=0,i.ring.material.opacity=.82,i.walkPhase+=e*(t.moving?10:2);const r=t.moving?Math.sin(i.walkPhase)*.58:0;if(i.leftLeg.rotation.x=r,i.rightLeg.rotation.x=-r,i.leftArm.rotation.x=-r*.45,i.visual.position.y=t.moving?Math.abs(Math.sin(i.walkPhase))*.045:Math.sin(n*2+t.id)*.012,i.rightArm.rotation.set(-r*.3,0,0),i.rightArm.position.z=0,t.blocking&&(i.rightArm.rotation.x=-1.4,i.rightArm.rotation.z=.8,i.leftArm.rotation.x=-1.05),t.attack){const{weapon:a,elapsed:o}=t.attack,l=a.windup,c=a.windup+a.active;if(o<l){const u=o/l;i.rightArm.rotation.x=-1.65*u,i.rightArm.rotation.z=-.65*u,i.rightArm.position.z=.18*u}else if(o<c){const u=(o-l)/a.active;i.rightArm.rotation.x=-1.4+u*1.7,i.rightArm.rotation.y=-1.1+u*2.2,i.rightArm.rotation.z=-.5+u}else{const u=Math.min(1,(o-c)/a.recovery);i.rightArm.rotation.x=.3*(1-u),i.rightArm.rotation.y=1.1*(1-u)}}}rebuildViewWeapon(t){this.viewModel.clear();const e=this.box(.18,.18,.62,"#b84e43");e.position.set(.09,-.1,.2),e.rotation.x=-.25,this.viewModel.add(e);const n=new ee(new Oi(.105,8,6),this.toon("#c99d7b"));n.position.set(0,0,-.08),this.viewModel.add(n),this.viewWeapon=this.createWeaponMesh(t,!0),this.viewWeapon.position.set(0,0,-.1),this.viewModel.add(this.viewWeapon),this.viewModel.position.set(.43,-.42,-.56),this.viewModel.rotation.set(-.12,-.08,-.08),this.viewModel.scale.setScalar(.88)}updateViewModel(t,e,n,i=!0){if(this.viewModel.visible=i&&t.alive,!this.viewModel.visible||!this.viewWeapon)return;const r=t.moving?Math.sin(n*10)*.018:Math.sin(n*2)*.006,a=new I(.43,-.42+r,-.56),o=new en(-.12,-.08,-.08);if(t.blocking&&(a.set(.08,-.27,-.48),o.set(.18,.2,1.18)),t.attack){const{weapon:c,elapsed:u}=t.attack;if(u<c.windup){const h=u/c.windup;a.set(.5+h*.12,-.35+h*.16,-.42+h*.12),o.set(-.3-h*.7,-.2-h*.65,-.2-h*.55)}else if(u<c.windup+c.active){const h=(u-c.windup)/c.active;a.set(.55-h*.85,-.2-Math.sin(h*Math.PI)*.1,-.48-Math.sin(h*Math.PI)*.26),o.set(-.9+h*1.5,-.9+h*1.9,-.8+h*1.65)}else{const h=Math.min(1,(u-c.windup-c.active)/c.recovery);a.set(-.3+h*.73,-.25-h*.17,-.5-(1-h)*.1),o.set(.5-h*.62,1-h*1.08,.85-h*.93)}}const l=1-Math.exp(-e*28);this.viewModel.position.lerp(a,l),this.viewModel.rotation.x+=(o.x-this.viewModel.rotation.x)*l,this.viewModel.rotation.y+=(o.y-this.viewModel.rotation.y)*l,this.viewModel.rotation.z+=(o.z-this.viewModel.rotation.z)*l}burst(t,e,n=9,i=1){for(let r=0;r<n;r+=1){const a=new ee(new ka(.055+Math.random()*.075),this.basic(e,{transparent:!0,opacity:1,depthWrite:!1}));a.position.set(t.x,t.y??1,t.z),this.effectGroup.add(a);const o=Math.random()*Math.PI*2,l=(1.5+Math.random()*3)*i;this.effects.push({mesh:a,velocity:new I(Math.cos(o)*l,1.5+Math.random()*3,Math.sin(o)*l),life:.45+Math.random()*.25,maxLife:.7,gravity:8,spin:Math.random()*8})}}slash(t,e){const n=this.basic(e.trail,{transparent:!0,opacity:.52,side:Oe,depthWrite:!1}),i=new ee(new Fi(.65,.83,28,1,-.4,Math.PI*1.2),n);i.position.set(t.x-Math.sin(t.yaw)*.75,1.15,t.z-Math.cos(t.yaw)*.75),i.rotation.y=t.yaw+Math.PI,i.rotation.z=t.id%2?.4:-.35,i.scale.setScalar(e.range/2.1),this.effectGroup.add(i),this.effects.push({mesh:i,velocity:new I,life:.16,maxLife:.16,gravity:0,spin:0})}updateEffects(t){for(let e=this.effects.length-1;e>=0;e-=1){const n=this.effects[e];if(n.life-=t,n.life<=0){this.effectGroup.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose(),this.effects.splice(e,1);continue}n.velocity.y-=n.gravity*t,n.mesh.position.addScaledVector(n.velocity,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t,n.mesh.material.opacity=Math.max(0,n.life/n.maxLife)}}setPlayerCamera(t,e=0,n=0){this.camera.position.set(t.x,1.62+n,t.z),this.camera.rotation.set(e,t.yaw,0,"YXZ")}setSpectatorCamera(t,e,n,i=this.staticColliders){if(!t)return;const r={x:t.x,z:t.z},a=c=>Math.abs(c.x)>18.25||Math.abs(c.z)>18.25||!hi(r,c,i,1)?!1:!i.some(u=>(u.height||3)>1&&Hs(c.x,c.z,.16,u));let o=new I(t.x,1.65,t.z);for(const c of[4.2,3.2,2.3,1.5,.85]){const u=new I(t.x+Math.sin(t.yaw)*c+Math.sin(n*.12)*.35*(c/4.2),1.55+c*.36,t.z+Math.cos(t.yaw)*c);if(a(u)){o=u;break}}const l=this.camera.position.clone().lerp(o,1-Math.exp(-e*5));a(l)?this.camera.position.copy(l):this.camera.position.copy(o),this.camera.lookAt(t.x,1.25,t.z)}setMenuCamera(t){this.menuTime+=t;const e=.65+Math.sin(this.menuTime*.08)*.12;this.camera.position.set(Math.sin(e)*35,22,Math.cos(e)*35),this.camera.lookAt(0,.5,0)}project(t,e,n){const i=new I(t,e,n).project(this.camera);return{x:(i.x*.5+.5)*window.innerWidth,y:(-i.y*.5+.5)*window.innerHeight,behind:i.z>1,visible:i.z<1&&i.x>=-1&&i.x<=1&&i.y>=-1&&i.y<=1}}render(){this.renderer.render(this.scene,this.camera)}resize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65))}}class gm{constructor(){this.context=null,this.master=null,this.enabled=!0,this.musicTimer=null,this.musicStep=0}ensure(){if(!this.context){const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;this.context=new t,this.master=this.context.createGain(),this.master.gain.value=this.enabled?.36:0,this.master.connect(this.context.destination)}return this.context.state==="suspended"&&this.context.resume(),!0}toggle(){return this.enabled=!this.enabled,this.ensure(),this.master&&this.master.gain.setTargetAtTime(this.enabled?.36:0,this.context.currentTime,.02),this.enabled}tone(t,e,{type:n="sine",volume:i=.12,slide:r=0,delay:a=0}={}){if(!this.enabled||!this.ensure())return;const o=this.context.currentTime+a,l=this.context.createOscillator(),c=this.context.createGain();l.type=n,l.frequency.setValueAtTime(t,o),l.frequency.exponentialRampToValueAtTime(Math.max(30,t+r),o+e),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+Math.min(.012,e*.2)),c.gain.exponentialRampToValueAtTime(1e-4,o+e),l.connect(c).connect(this.master),l.start(o),l.stop(o+e+.02)}noise(t,{volume:e=.1,filter:n=900,delay:i=0}={}){if(!this.enabled||!this.ensure())return;const r=this.context.sampleRate,a=this.context.createBuffer(1,Math.ceil(r*t),r),o=a.getChannelData(0);for(let h=0;h<o.length;h+=1)o[h]=(Math.random()*2-1)*(1-h/o.length);const l=this.context.createBufferSource(),c=this.context.createBiquadFilter(),u=this.context.createGain();c.type="bandpass",c.frequency.value=n,c.Q.value=.7,u.gain.value=e,l.buffer=a,l.connect(c).connect(u).connect(this.master),l.start(this.context.currentTime+i)}play(t,e=0){if(!this.enabled)return;const n=Math.max(.08,1-e/30);switch(t){case"swing":this.noise(.13,{volume:.1*n,filter:1300}),this.tone(260,.1,{type:"triangle",volume:.04*n,slide:-140});break;case"heavySwing":this.noise(.22,{volume:.15*n,filter:650}),this.tone(150,.18,{type:"sawtooth",volume:.06*n,slide:-80});break;case"hit":this.noise(.09,{volume:.18*n,filter:2100}),this.tone(180,.12,{type:"square",volume:.08*n,slide:-100});break;case"hurt":this.tone(95,.18,{type:"sawtooth",volume:.09,slide:-45});break;case"block":this.tone(760,.2,{type:"triangle",volume:.12*n,slide:-260}),this.tone(1140,.1,{type:"sine",volume:.06*n,slide:-500});break;case"kill":this.tone(190,.14,{type:"square",volume:.09,slide:100}),this.tone(380,.28,{type:"triangle",volume:.08,slide:180,delay:.09});break;case"buy":this.tone(660,.08,{type:"sine",volume:.09}),this.tone(990,.16,{type:"sine",volume:.08,delay:.07});break;case"error":this.tone(130,.16,{type:"square",volume:.07,slide:-30});break;case"place":this.noise(.08,{volume:.08,filter:450}),this.tone(210,.1,{type:"triangle",volume:.07,slide:-60});break;case"delete":this.tone(310,.12,{type:"triangle",volume:.06,slide:-170});break;case"step":this.noise(.045,{volume:.026*n,filter:260});break;case"stage":this.tone(220,.35,{type:"triangle",volume:.07}),this.tone(440,.42,{type:"triangle",volume:.065,delay:.12});break;case"count":this.tone(440,.09,{type:"square",volume:.055});break;case"go":this.tone(330,.12,{type:"square",volume:.08}),this.tone(660,.3,{type:"triangle",volume:.09,delay:.08});break;case"win":[262,330,392,523].forEach((i,r)=>this.tone(i,.4,{type:"triangle",volume:.07,delay:r*.1}));break}}}const _m=s=>document.getElementById(s),Cr=(s,t,e)=>Math.max(t,Math.min(e,s)),Me=(s,t)=>Math.hypot(s.x-t.x,s.z-t.z),Ii=(s,t)=>Math.atan2(-(t.x-s.x),-(t.z-s.z)),Un=s=>({x:-Math.sin(s.yaw),z:-Math.cos(s.yaw)}),Ui=new Set(["build","swap","buy","combat","roundEnd"]),rl=["build-menu","shop-screen","round-screen","match-screen","pause-screen","help-screen"];function Bl(s,t,e){const n=Math.cos(e),i=Math.sin(e);return{x:n*s+i*t,z:-i*s+n*t}}function xm(s,t,e,n){const i=hn(s);return(s==="corner"?[{x:0,z:-1.125,hx:1.4,hz:.275,height:1.85},{x:-1.125,z:.275,hx:.275,hz:1.125,height:1.85}]:[{x:0,z:0,hx:i.size[0]/2,hz:i.size[2]/2,height:i.size[1]}]).map(a=>{const o=Bl(a.x,a.z,n);return{x:t+o.x,z:e+o.z,hx:a.hx,hz:a.hz,rot:n,height:a.height}})}function vm(s){const t=Math.abs(Math.cos(s.rot||0)),e=Math.abs(Math.sin(s.rot||0)),n=t*s.hx+e*s.hz,i=e*s.hx+t*s.hz;return{minX:s.x-n,maxX:s.x+n,minZ:s.z-i,maxZ:s.z+i}}class Mm{constructor(){this.ui={},document.querySelectorAll("[id]").forEach(t=>{this.ui[t.id]=t}),this.world=new mm(_m("scene")),this.audio=new gm,this.nav=new pm,this.colliders=[...this.world.staticColliders],this.nav.rebuild(this.colliders),this.raycaster=new Mh,this.groundPlane=new vn(new I(0,1,0),0),this.phase="menu",this.mode="quick",this.targetScore=ae.quickTarget,this.paused=!1,this.modal=null,this.helpReturn=null,this.helpWasPaused=!1,this.pointerLocked=!1,this.controlGate=!1,this.keys=new Set,this.actors=[],this.teams=[],this.builds=[],this.player=null,this.pitch=0,this.round=0,this.midTriggered=!1,this.buildSerial=0,this.attackSerial=0,this.selectedBuild=null,this.buildRotation=0,this.buildVisited=!1,this.pendingHits=[],this.killFeed=[],this.revealed=!1,this.spectatorTarget=null,this.cameraShake=0,this.toastUntil=0,this.bannerUntil=0,this.hudClock=0,this.mapClock=0,this.lastTime=performance.now(),this.elapsed=0,this.ghostValidity=null,this.bindEvents(),this.renderBuildMenu(),this.updateModeCards(),requestAnimationFrame(t=>this.loop(t)),setTimeout(()=>this.ui.loading.classList.remove("is-visible"),500)}bindEvents(){document.querySelectorAll(".mode-card").forEach(e=>{e.addEventListener("click",()=>{this.mode=e.dataset.mode,this.updateModeCards()})}),["quick-target","long-target"].forEach(e=>{this.ui[e].addEventListener("click",n=>n.stopPropagation()),this.ui[e].addEventListener("change",()=>{const n=e==="quick-target"?ae.quickTarget:ae.longTarget;this.ui[e].value=Ar(this.ui[e].value,n)})}),this.ui["start-button"].addEventListener("click",()=>{this.audio.ensure();const e=Ar(this.ui[this.mode==="quick"?"quick-target":"long-target"].value,this.mode==="quick"?5:10);this.newMatch(this.mode,e),this.requestLock()}),this.ui["sound-button"].addEventListener("click",()=>{const e=this.audio.toggle();this.ui["sound-button"].classList.toggle("muted",!e),this.toast(e?"声音已开启":"声音已静音")}),this.ui["fullscreen-button"].addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()}),this.ui["pause-button"].addEventListener("click",()=>this.pause()),this.ui["help-button"].addEventListener("click",()=>this.openHelp()),this.ui["pause-help-button"].addEventListener("click",()=>this.openHelp()),this.ui["close-help-button"].addEventListener("click",()=>this.closeHelp()),this.ui["resume-button"].addEventListener("click",()=>this.resume()),this.ui["restart-button"].addEventListener("click",()=>{this.newMatch(this.mode,this.targetScore),this.requestLock()}),this.ui["restart-pause-button"].addEventListener("click",()=>{this.newMatch(this.mode,this.targetScore),this.requestLock()}),this.ui["menu-button"].addEventListener("click",()=>this.returnToMenu()),this.ui["open-build-button"].addEventListener("click",()=>this.openBuildMenu()),this.ui["close-build-button"].addEventListener("click",()=>this.closeModal()),this.ui["ready-build-button"].addEventListener("click",()=>this.finishBuild()),this.ui["close-shop-button"].addEventListener("click",()=>this.closeModal()),this.ui["ready-shop-button"].addEventListener("click",()=>this.readyBuy()),this.ui["continue-round-button"].addEventListener("click",()=>this.continueAfterRound()),this.ui["control-button"].addEventListener("click",()=>{this.audio.ensure(),this.requestLock()});const t=this.world.renderer.domElement;t.addEventListener("click",()=>{Ui.has(this.phase)&&!this.modal&&!this.paused&&!this.pointerLocked&&this.requestLock()}),t.addEventListener("mousedown",e=>this.onMouseDown(e)),t.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("contextmenu",e=>{this.pointerLocked&&e.preventDefault()}),document.addEventListener("mouseup",e=>{e.button===2&&this.player&&(this.player.blocking=!1)}),document.addEventListener("mousemove",e=>{!this.pointerLocked||this.paused||this.modal||!this.player||!this.player.alive||["build","buy","combat"].includes(this.phase)&&(this.player.yaw-=e.movementX*.00215,this.pitch=Cr(this.pitch-e.movementY*.00195,-1.3,1.3))}),document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===t,this.pointerLocked&&["build","combat"].includes(this.phase)&&this.controlGate?(this.controlGate=!1,this.ui["control-gate"].classList.remove("is-visible"),this.phase==="combat"&&(this.showBanner("拔刀","最后存活的队伍获胜","COMBAT START"),this.audio.play("go"))):!this.pointerLocked&&["build","buy","combat"].includes(this.phase)&&!this.modal&&!this.paused&&!this.controlGate&&this.pause()}),document.addEventListener("keydown",e=>this.onKeyDown(e)),document.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.player&&(this.player.blocking=!1)})}onKeyDown(t){if(["Space","ArrowUp","ArrowDown"].includes(t.code)&&this.phase!=="menu"&&t.preventDefault(),!(t.repeat&&!["KeyW","KeyA","KeyS","KeyD"].includes(t.code))){if(t.code==="KeyM"){this.ui["sound-button"].click();return}if(t.code==="KeyH"){this.modal==="help-screen"?this.closeHelp():this.openHelp();return}if(t.code==="Escape"){this.modal==="help-screen"?this.closeHelp():this.modal==="pause-screen"?this.resume():(this.modal==="build-menu"||this.modal==="shop-screen")&&(this.closeModal(!1),this.pause());return}if(t.code==="KeyP"){this.paused?this.resume():this.pause();return}if(!this.controlGate){if(t.code==="KeyB"&&!this.paused){this.modal==="build-menu"||this.modal==="shop-screen"?this.closeModal():!this.modal&&this.phase==="build"?this.openBuildMenu():!this.modal&&this.phase==="buy"?this.openShop():!this.modal&&this.phase==="combat"&&this.toast("商店仅在回合准备阶段开放");return}if(t.code==="KeyF"&&!this.paused&&(this.modal==="build-menu"||this.modal==="shop-screen")){this.modal==="build-menu"?this.finishBuild():this.readyBuy();return}this.paused||this.modal||this.phase==="menu"||(this.keys.add(t.code),this.phase==="build"?(/^Digit[1-4]$/.test(t.code)&&this.selectBuild(zs[Number(t.code.slice(-1))-1].id),t.code==="KeyR"&&this.selectedBuild&&(this.buildRotation=(this.buildRotation+Math.PI/2)%(Math.PI*2),this.audio.play("place")),t.code==="KeyX"&&this.deleteTargetedBuild(),t.code==="KeyF"&&this.finishBuild()):this.phase==="buy"&&t.code==="KeyF"?this.readyBuy():this.phase==="combat"&&t.code==="Space"&&(this.player.alive?this.startDodge(this.player):this.cycleSpectator()))}}}onMouseDown(t){!this.pointerLocked||this.paused||this.modal||!this.player||(this.phase==="build"?(t.button===0&&this.placePlayerBuild(),t.button===2&&this.deleteTargetedBuild()):this.phase==="combat"&&this.player.alive&&!this.controlGate&&(t.button===0&&this.startAttack(this.player),t.button===2&&!this.player.attack&&this.player.stamina>0&&(this.player.blocking=!0)))}syncControlGate(){const t=["build","combat"].includes(this.phase)&&document.pointerLockElement!==this.world.renderer.domElement;this.controlGate=t;const e=this.phase==="combat";return this.ui["gate-kicker"].textContent=e?"ROUND":"CONSTRUCTION",this.ui["gate-round"].textContent=e?String(this.round).padStart(2,"0"):"",this.ui["gate-title"].textContent=e?"点击拔刀开战":"点击返回营造",this.ui["gate-subtitle"].textContent=e?"锁定鼠标 · 进入第一人称战斗":"锁定鼠标后才继续计时 · 第一人称移动与布置",this.ui["control-gate"].classList.toggle("is-visible",t),t}requestLock(){if(!(!Ui.has(this.phase)||this.modal||this.paused))try{const t=this.world.renderer.domElement.requestPointerLock?.();t?.catch&&t.catch(()=>{["build","combat"].includes(this.phase)&&this.syncControlGate()})}catch{}}updateModeCards(){document.querySelectorAll(".mode-card").forEach(t=>t.classList.toggle("active",t.dataset.mode===this.mode))}openModal(t){for(const e of rl)this.ui[e].classList.toggle("is-visible",e===t);this.modal=t,this.keys.clear(),this.player&&(this.player.blocking=!1),document.pointerLockElement&&document.exitPointerLock()}closeModal(t=!0){this.modal&&(this.ui[this.modal].classList.remove("is-visible"),this.modal=null,t&&this.requestLock())}hideAllOverlays(){for(const t of[...rl,"swap-screen","control-gate"])this.ui[t].classList.remove("is-visible");this.modal=null,this.controlGate=!1}pause(){!Ui.has(this.phase)||this.paused||["swap","roundEnd"].includes(this.phase)||(this.modal&&this.modal!=="pause-screen"&&this.closeModal(!1),this.paused=!0,this.openModal("pause-screen"))}resume(){this.paused&&(this.paused=!1,this.modal==="pause-screen"&&this.closeModal(!1),this.requestLock())}openHelp(){this.modal!=="help-screen"&&(this.helpReturn=this.modal,this.helpWasPaused=this.paused,Ui.has(this.phase)&&(this.paused=!0),this.openModal("help-screen"))}closeHelp(){this.modal==="help-screen"&&(this.ui["help-screen"].classList.remove("is-visible"),this.modal=null,this.paused=this.helpWasPaused,this.helpReturn?(this.ui[this.helpReturn].classList.add("is-visible"),this.modal=this.helpReturn):this.paused||this.requestLock(),this.helpReturn=null)}newMatch(t="quick",e=5){this.hideAllOverlays(),this.paused=!1,this.mode=t,this.targetScore=Ar(e,t==="quick"?5:10),this.round=0,this.midTriggered=!1,this.pendingMatchEnd=!1,this.pendingMidMatch=!1,this.buildSerial=0,this.killFeed=[],this.revealed=!1,this.spectatorTarget=null,this.world.clearDynamic(),this.builds=[],this.colliders=[...this.world.staticColliders],this.teams=qt.map(i=>({id:i.id,score:0,buildZone:i.id,spawnZone:null}));const n=ba([0,1,2,3]);this.teams.forEach(i=>{i.buildZone=n[i.id]}),this.actors=[];for(const i of qt)for(let r=0;r<2;r+=1){const a=i.id*2+r,o={id:a,teamId:i.id,slot:r,isPlayer:a===0,name:i.names[r],x:0,z:0,yaw:0,radius:.42,health:100,stamina:100,alive:!0,moving:!1,money:ae.initialMoney,weaponId:"free",lostWeapon:!1,attack:null,attackSerial:0,blocking:!1,cooldown:0,dodgeTime:0,dodgeCooldown:0,dodgeDirection:{x:0,z:-1},roundKills:0,totalKills:0,deaths:0,lastIncome:0,footstepClock:0,ai:{think:Math.random()*.2,repath:0,path:[],pathIndex:0,targetId:null,lastSeen:null,acquiredAt:0,reaction:.25+Math.random()*.35,skill:.45+Math.random()*.35,aggression:.75+Math.random()*.35,destination:null,stuck:0,avoidTimer:0,avoidSign:Math.random()>.5?1:-1,blockUntil:0,seenAttacks:new Set,boughtRound:-1}};this.actors.push(o),this.world.createActor(o)}this.player=this.actors[0],this.world.rebuildViewWeapon(this.player.weaponId),document.body.classList.add("in-match"),this.ui["start-screen"].classList.remove("is-visible"),this.ui.hud.classList.add("is-visible"),this.ui["quick-target"].value=this.mode==="quick"?this.targetScore:this.ui["quick-target"].value,this.renderScoreboard(),this.startBuild(!1)}returnToMenu(){this.phase="menu",this.paused=!1,this.hideAllOverlays(),this.world.clearDynamic(),this.actors=[],this.teams=[],this.builds=[],this.player=null,this.colliders=[...this.world.staticColliders],this.nav.rebuild(this.colliders),document.body.classList.remove("in-match"),this.ui.hud.classList.remove("is-visible"),this.ui["start-screen"].classList.add("is-visible"),document.pointerLockElement&&document.exitPointerLock()}startBuild(t){if(this.phase="build",this.hideAllOverlays(),this.paused=!1,this.clearBuilds(),this.buildBudgets=[ae.buildBudget,ae.buildBudget,ae.buildBudget,ae.buildBudget],this.buildTimer=ae.buildSeconds,this.buildVisited=!1,this.selectedBuild=null,this.buildRotation=0,this.pendingHits=[],t){const n=ba([0,1,2,3]);this.teams.forEach(i=>{i.buildZone=n[i.id],i.spawnZone=null})}this.world.setZoneOwners(this.teams);for(const n of this.actors){const i=te[this.teams[n.teamId].buildZone],r=bs(i)[n.slot];n.x=r.x,n.z=r.z,n.yaw=Ii(n,{x:0,z:0}),n.health=100,n.stamina=100,n.alive=!0,n.moving=!1,n.attack=null,n.blocking=!1,n.cooldown=0,n.ai.path=[],n.ai.targetId=null}this.player.x=0,this.player.z=7.5;const e=te[this.teams[0].buildZone];this.player.yaw=Ii(this.player,{x:e.cx,z:e.cz}),this.pitch=-.08;for(const n of this.teams)n.id!==0&&this.generateAIBuild(n);this.refreshColliders(),this.renderBuildMenu(),this.ui["build-zone-name"].textContent=`${e.label} · ${e.name}`,this.ui["map-mode-label"].textContent=t?"中场重建":"营造归属",this.showBanner(t?"中场重建":"营造阶段",`前往 ${e.label} 区 · ${e.name}，布置本队掩体`,t?"比分与资金保留 / 仅重建一次":"BUILD / 120 秒"),this.toast(t?"旧构件已清理，四队获得全新区域与 100 预算":"先跟随标记走到本队区域，再按 B 选择构件"),this.audio.play("stage"),this.syncControlGate(),this.updateHUD(!0)}clearBuilds(){for(const t of this.builds)this.world.dynamicGroup.remove(t.mesh);this.builds=[],this.world.removeGhost(),this.refreshColliders()}refreshColliders(){this.colliders=[...this.world.staticColliders,...this.builds.flatMap(t=>t.colliders)],this.nav.rebuild(this.colliders)}generateAIBuild(t){const e=te[t.buildZone],n=nl[Math.floor(Math.random()*nl.length)],i=Math.floor(Math.random()*4)*Math.PI/2;for(const r of n){const a=Bl(r.u,r.v,i),o=e.cx+a.x*e.sx,l=e.cz+a.z*e.sz;this.tryPlaceBuild(t.id,e.id,r.type,o,l,r.r+i,!0,!0)}}openBuildMenu(){if(this.phase!=="build")return;const t=this.teams[0].buildZone;if(ci(this.player.x,this.player.z)?.id!==t){this.toast(`请先进入 ${te[t].label} 区，再编辑本队构件`),this.audio.play("error");return}this.renderBuildMenu(),this.openModal("build-menu")}renderBuildMenu(){const t=this.buildBudgets?.[0]??ae.buildBudget;this.ui["build-menu-budget"].textContent=t,this.ui["build-options"].innerHTML=zs.map((e,n)=>`
      <button class="build-option" data-build="${e.id}" type="button" ${t<e.cost?"disabled":""}>
        <span class="option-number">0${n+1}</span><span class="build-icon">${e.icon}</span>
        <strong>${e.name}</strong><p>${e.description}</p>
        <footer><span>${e.tag}</span><b>${e.cost}</b></footer>
      </button>`).join(""),this.ui["build-options"].querySelectorAll("[data-build]").forEach(e=>{e.addEventListener("click",()=>{this.selectBuild(e.dataset.build),this.closeModal()})})}selectBuild(t){if(this.phase!=="build")return;const e=this.teams[0].buildZone;if(ci(this.player.x,this.player.z)?.id!==e){this.toast("构件编辑仅限你当前所在的本队区域");return}if(this.buildBudgets[0]<hn(t).cost){this.toast("剩余营造预算不足"),this.audio.play("error");return}this.selectedBuild=t,this.world.setGhost(t,0),this.ghostValidity=null,this.toast(`${hn(t).name}：左键放置 · R 旋转 90° · X 删除`)}validateBuild(t,e,n,i,r,a,o=!1){const l=hn(n),c=te[e];if(this.buildBudgets[t]<l.cost)return{ok:!1,reason:"预算不足"};if(!o&&(this.teams[t].buildZone!==e||ci(this.player.x,this.player.z)?.id!==e))return{ok:!1,reason:"只能在本队区域内编辑"};const u=xm(n,i,r,a);for(const h of u){const f=vm(h);if(f.minX<c.minX+.12||f.maxX>c.maxX-.12||f.minZ<c.minZ+.12||f.maxZ>c.maxZ-.12)return{ok:!1,reason:"构件必须完整位于区域边界内"};if(f.minX<c.cx+1.65&&f.maxX>c.cx-1.65)return{ok:!1,reason:"中央纵向安全通道不可占用"};if(f.minZ<c.cz+1.65&&f.maxZ>c.cz-1.65)return{ok:!1,reason:"中央横向安全通道不可占用"};for(const p of bs(c))if(Hs(p.x,p.z,1.4,h))return{ok:!1,reason:"双人出生安全区不可占用"};if(this.colliders.some(p=>dm(h,p,.06)))return{ok:!1,reason:"不能与墙体或已有构件重叠"};for(const p of this.actors)if(p.alive&&Hs(p.x,p.z,p.radius+.18,h))return{ok:!1,reason:"落点内有角色，请移开后再放置"}}return{ok:!0,colliders:u}}tryPlaceBuild(t,e,n,i,r,a,o=!0,l=!1){const c=this.validateBuild(t,e,n,i,r,a,l);if(!c.ok)return c;const u=hn(n),h=this.world.createBuildMesh(n,t);h.position.set(i,0,r),h.rotation.y=a;const f=++this.buildSerial;h.traverse(g=>{g.userData.buildId=f}),this.world.dynamicGroup.add(h);const p={id:f,teamId:t,zoneId:e,typeId:n,x:i,z:r,rotation:a,cost:u.cost,mesh:h,colliders:c.colliders};return this.builds.push(p),o&&(this.buildBudgets[t]-=u.cost),this.refreshColliders(),this.validateZoneRoutes(e)?{ok:!0,build:p}:(this.world.dynamicGroup.remove(h),this.builds.pop(),o&&(this.buildBudgets[t]+=u.cost),this.refreshColliders(),{ok:!1,reason:"该摆放会切断有效通路，已阻止"})}validateZoneRoutes(t){const e=te[t];for(const n of bs(e))if(!this.nav.findPath(n,{x:0,z:0}).length)return!1;return!0}validateAllRoutes(){return te.every(t=>this.validateZoneRoutes(t.id))}placePlayerBuild(){if(!this.selectedBuild||!this.ghostPlacement?.valid){this.toast(this.selectedBuild?this.ghostPlacement?.reason||"当前位置不可放置":"先按 B 或数字 1—4 选择构件"),this.audio.play("error");return}const{x:t,z:e}=this.ghostPlacement,n=this.tryPlaceBuild(0,this.teams[0].buildZone,this.selectedBuild,t,e,this.buildRotation);if(!n.ok){this.toast(n.reason),this.audio.play("error");return}this.audio.play("place"),this.world.burst({x:t,y:.25,z:e},qt[0].color,5,.45),this.renderBuildMenu(),this.updateGhost()}deleteTargetedBuild(){if(this.phase!=="build")return;const t=this.teams[0].buildZone;if(ci(this.player.x,this.player.z)?.id!==t){this.toast("只能在本队区域内删除构件");return}this.raycaster.setFromCamera(new Ct(0,0),this.world.camera),this.raycaster.far=7.5;const e=this.builds.filter(o=>o.teamId===0).map(o=>o.mesh);for(const o of e)o.updateMatrixWorld(!0);const n=this.raycaster.intersectObjects(e,!0).filter(o=>o.object.isMesh);if(!n.length){this.toast("看向 7.5 米内的本队构件再删除");return}const i=n[0].object.userData.buildId,r=this.builds.findIndex(o=>o.id===i&&o.teamId===0);if(r<0)return;const[a]=this.builds.splice(r,1);this.world.dynamicGroup.remove(a.mesh),this.buildBudgets[0]+=a.cost,this.refreshColliders(),this.renderBuildMenu(),this.audio.play("delete"),this.toast(`已回收 ${hn(a.typeId).name} · 退还 ${a.cost} 预算`)}updateGhost(){if(this.ghostPlacement=null,!this.world.ghost||(this.world.ghost.visible=!1,this.phase!=="build"||!this.selectedBuild||this.modal||this.paused))return;this.raycaster.setFromCamera(new Ct(0,0),this.world.camera),this.raycaster.far=100;const t=new I;if(!this.raycaster.ray.intersectPlane(this.groundPlane,t)){this.ui["interaction-tip"].textContent="看向地面以选择落点";return}if(this.world.camera.position.distanceTo(t)>7.5){this.ui["interaction-tip"].textContent="落点过远 · 靠近并看向 7.5 米内地面";return}const e=Math.round(t.x*2)/2,n=Math.round(t.z*2)/2,i=te[this.teams[0].buildZone],r=this.validateBuild(0,i.id,this.selectedBuild,e,n,this.buildRotation);this.world.ghost.visible=!0,this.world.ghost.position.set(e,.025,n),this.world.ghost.rotation.y=this.buildRotation,this.ghostValidity!==r.ok&&(this.world.setGhostValidity(r.ok),this.ghostValidity=r.ok),this.ghostPlacement={x:e,z:n,valid:r.ok,reason:r.reason},this.ui["interaction-tip"].textContent=r.ok?`左键放置 ${hn(this.selectedBuild).name} · R 旋转`:r.reason}finishBuild(){if(this.phase!=="build")return;const t=this.teams[0].buildZone;if(!this.buildVisited&&this.buildTimer>0){this.toast(`请先亲自前往 ${te[t].label} 区查看布局，再确认准备`),this.audio.play("error");return}if(!this.validateAllRoutes()){this.toast("通路检查未通过，请删除阻塞构件"),this.audio.play("error");return}this.selectedBuild=null,this.world.removeGhost(),this.ui["interaction-tip"].textContent="",this.startSwap()}startSwap(){this.phase="swap",this.hideAllOverlays(),this.swapTimer=ae.swapSeconds;const t=rm(4);for(const e of this.teams)e.spawnZone=t[e.buildZone];this.resetActorsForRound(),this.renderSwap(),this.openModallessSwap(),this.audio.play("stage"),this.updateHUD(!0)}openModallessSwap(){this.ui["swap-screen"].classList.add("is-visible"),this.modal=null,document.pointerLockElement&&document.exitPointerLock()}resetActorsForRound(){for(const t of this.actors){const e=te[this.teams[t.teamId].spawnZone],n=bs(e)[t.slot];t.x=n.x,t.z=n.z,t.yaw=Ii(t,{x:0,z:0}),t.lostWeapon&&(t.weaponId="free",t.lostWeapon=!1),t.health=100,t.stamina=100,t.alive=!0,t.moving=!1,t.attack=null,t.blocking=!1,t.cooldown=0,t.dodgeTime=0,t.dodgeCooldown=0,t.roundKills=0,t.ai.path=[],t.ai.pathIndex=0,t.ai.targetId=null,t.ai.lastSeen=null,t.ai.seenAttacks.clear(),t.ai.blockUntil=0,t.ai.repath=Math.random()*.3}this.spectatorTarget=null,this.world.rebuildViewWeapon(this.player.weaponId),this.pitch=0}renderSwap(){this.ui["swap-map"].innerHTML=te.map(n=>{const i=this.teams.find(a=>a.buildZone===n.id),r=this.teams.find(a=>a.spawnZone===n.id);return`<div class="swap-zone ${i.id===0?"player-build":""} ${r.id===0?"player-spawn":""}" style="--zone:${qt[r.id].color}"><span>${n.name}</span><strong>${n.label}</strong><small>${qt[r.id].name}出生</small></div>`}).join(""),this.ui["swap-list"].innerHTML=this.teams.map(n=>{const i=te[n.buildZone],r=te[n.spawnZone];return`<div class="swap-row ${n.id===0?"player":""}" style="--team:${qt[n.id].color}"><b>${qt[n.id].name}</b><span>营造 ${i.label} 区</span><i>→</i><strong>出生 ${r.label} 区</strong></div>`}).join("");const t=te[this.teams[0].buildZone],e=te[this.teams[0].spawnZone];this.ui["swap-player-result"].textContent=`你营造 ${t.label} 区 · ${t.name}　→　本回合出生 ${e.label} 区 · ${e.name}`}beginBuy(){this.phase==="swap"&&(this.phase="buy",this.round+=1,this.buyTimer=ae.buySeconds,this.ui["swap-screen"].classList.remove("is-visible"),this.aiPurchases(),this.renderShop(),this.openModal("shop-screen"),this.showBanner("购买与准备",`${this.round} 回合 · 出生 ${te[this.teams[0].spawnZone].label} 区`,"PREPARATION / 18 秒"),this.audio.play("stage"),this.updateHUD(!0))}aiPurchases(){const t=[["sword","dagger"],["sword","dagger","spear","axe"],["dagger","sword","axe"],["axe","spear","sword","dagger"],["spear","sword","dagger"],["sword","axe","dagger"],["dagger","sword","spear"],["axe","sword","dagger"]];for(const e of this.actors){if(e.isPlayer||e.ai.boughtRound===this.round)continue;const n=t[e.id].find(r=>Fn(r).price<=e.money)||"free",i=Fn(n);e.weaponId!==n&&e.money>=i.price&&(e.money-=i.price,e.weaponId=n),e.ai.boughtRound=this.round}}openShop(){if(this.phase!=="buy"){this.toast("商店仅在准备阶段开放");return}this.renderShop(),this.openModal("shop-screen")}renderShop(t=null,e=!1){const n=this.player;this.ui["shop-money"].textContent=`$ ${n.money}`,this.ui["shop-options"].innerHTML=Ea.map(i=>{const r=n.weaponId===i.id,a=n.money>=i.price;return`<article class="weapon-option ${r?"equipped":""} ${!a&&!r?"unaffordable":""}" style="--weapon:${i.trail}">
        <span class="weapon-class">${i.subtitle}</span><h3>${i.name}</h3><span class="weapon-price">${i.price?`$ ${i.price}`:"免费"}</span>
        <div class="weapon-silhouette"></div><p>${i.description}</p>
        <div class="weapon-stats"><div class="weapon-stat"><span>速度</span><div><i style="width:${i.stats.speed}%"></i></div></div><div class="weapon-stat"><span>伤害</span><div><i style="width:${i.stats.damage}%"></i></div></div><div class="weapon-stat"><span>距离</span><div><i style="width:${i.stats.range}%"></i></div></div></div>
        <button class="weapon-buy" data-weapon="${i.id}" type="button" ${r?"disabled":""}>${r?"当前已装备":a?"购买并装备":"资金不足"}</button>
      </article>`}).join(""),this.ui["shop-options"].querySelectorAll("[data-weapon]").forEach(i=>i.addEventListener("click",()=>this.buyWeapon(i.dataset.weapon))),t?(this.ui["shop-feedback"].textContent=t,this.ui["shop-feedback"].classList.toggle("error",e)):(this.ui["shop-feedback"].textContent="选择适合你的交战距离。购买不会退款，存活者下回合保留武器。",this.ui["shop-feedback"].classList.remove("error"))}buyWeapon(t){if(this.phase!=="buy"){this.renderShop("战斗已经开始，商店关闭。",!0),this.audio.play("error");return}const e=Fn(t);if(this.player.weaponId===t){this.renderShop(`${e.name} 已在手中，无需重复购买。`);return}if(this.player.money<e.price){this.renderShop(`资金不足：${e.name} 需要 $ ${e.price}，当前只有 $ ${this.player.money}。`,!0),this.audio.play("error");return}this.player.money-=e.price,this.player.weaponId=t,this.world.rebuildViewWeapon(t),this.audio.play("buy"),this.renderShop(`已装备 ${e.name} · 伤害 ${e.damage} / 距离 ${e.range.toFixed(1)}m。`),this.updateHUD(!0)}readyBuy(){this.phase==="buy"&&(this.buyTimer=Math.min(this.buyTimer,2.2),this.closeModal(),this.toast("已准备 · 倒计时结束后开战"))}beginCombat(){if(this.phase==="buy"){this.modal&&this.closeModal(!1),this.phase="combat",this.combatTimer=ae.roundSeconds,this.combatElapsed=0,this.revealed=!1,this.pendingHits=[];for(const t of this.actors)t.attack=null,t.blocking=!1,t.moving=!1,t.ai.acquiredAt=0;this.syncControlGate(),this.controlGate||(this.showBanner("拔刀","最后存活的队伍获得 1 分",`ROUND ${String(this.round).padStart(2,"0")}`),this.audio.play("go")),this.updateHUD(!0)}}updateBuild(t){if(this.controlGate)return;this.buildTimer-=t,this.updatePlayerMovement(t,!0);const e=this.teams[0].buildZone;ci(this.player.x,this.player.z)?.id===e&&(this.buildVisited=!0),this.updateGhost(),this.buildTimer<=0&&this.finishBuild()}updateSwap(t){this.swapTimer-=t,this.swapTimer<=0&&this.beginBuy()}updateBuy(t){this.buyTimer-=t,this.ui["shop-countdown"].textContent=`${Math.max(0,Math.ceil(this.buyTimer))} 秒后开战`,this.buyTimer<=0&&this.beginCombat()}updateCombat(t){if(this.controlGate)return;this.combatElapsed+=t,this.combatTimer-=t,!this.revealed&&this.combatElapsed>=ae.revealSeconds&&(this.revealed=!0,this.showBanner("终局揭示","所有敌人位置公开 · AI 将主动追击","ANTI-STALL / 35 秒"),this.audio.play("stage")),this.updatePlayerMovement(t,!1);for(const n of this.actors)!n.isPlayer&&n.alive&&this.updateAI(n,t);this.resolveActorCollisions(),this.pendingHits=[];for(const n of this.actors)this.updateActorCombat(n,t);this.applyPendingHits(),!this.player.alive&&!this.spectatorTarget&&this.startSpectate();const e=[...new Set(this.actors.filter(n=>n.alive).map(n=>n.teamId))];e.length<=1?this.finishRound(am(e)):this.combatTimer<=0&&this.finishRound(null)}updatePlayerMovement(t,e){const n=this.player;if(!n?.alive||!e&&(this.phase!=="combat"||this.controlGate))return;n.cooldown=Math.max(0,n.cooldown-t),n.dodgeCooldown=Math.max(0,n.dodgeCooldown-t),n.blocking||(n.stamina=Math.min(100,n.stamina+t*20)),n.stamina<=0&&(n.blocking=!1);let i=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),r=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0);const a=Math.hypot(i,r);a>0&&(i/=a,r/=a);const o=Un(n),l={x:Math.cos(n.yaw),z:-Math.sin(n.yaw)};let c=l.x*i+o.x*r,u=l.z*i+o.z*r,h=e?5.6:5.15;!e&&this.keys.has("ShiftLeft")&&!n.attack&&!n.blocking&&a>0&&(h=7.15),n.attack&&(h*=.36),n.blocking&&(h*=.5),!e&&n.dodgeTime>0&&(n.dodgeTime=Math.max(0,n.dodgeTime-t),c=n.dodgeDirection.x,u=n.dodgeDirection.z,h=13.5);const f={x:n.x,z:n.z},p=il(n,c*h*t,u*h*t,n.radius,this.colliders);n.x=p.x,n.z=p.z,n.moving=Me(f,n)>5e-4,n.moving?(n.footstepClock-=t,n.footstepClock<=0&&(this.audio.play("step"),n.footstepClock=h>6?.28:.39)):n.footstepClock=0}startDodge(t){if(!t.alive||t.attack||t.dodgeCooldown>0||t.stamina<30)return;let e=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),n=(this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0);const i=Un(t),r={x:Math.cos(t.yaw),z:-Math.sin(t.yaw)};let a=r.x*e+i.x*n,o=r.z*e+i.z*n;const l=Math.hypot(a,o)||1;t.dodgeDirection={x:a/l,z:o/l},t.dodgeTime=.2,t.dodgeCooldown=1.5,t.stamina-=30,t.blocking=!1,this.audio.play("swing")}updateAI(t,e){const n=t.ai;t.cooldown=Math.max(0,t.cooldown-e),t.dodgeCooldown=Math.max(0,t.dodgeCooldown-e),t.stamina=Math.min(100,t.stamina+(t.blocking?4:18)*e),n.think-=e,n.repath-=e,n.avoidTimer-=e,n.blockUntil-=e,t.blocking=n.blockUntil>0&&!t.attack&&t.stamina>0,n.think<=0&&(n.think=.16+Math.random()*.16,this.thinkAI(t));let i=this.actors[n.targetId];i?.alive||(i=null,n.targetId=null);let r=null,a=!1;if(i){const E=Me(t,i);a=this.revealed||E<17&&hi(t,i,this.colliders,1.35),a?(r=i,n.lastSeen={x:i.x,z:i.z,time:this.combatElapsed}):n.lastSeen&&this.combatElapsed-n.lastSeen.time<4?r=n.lastSeen:(n.targetId=null,i=null)}if(!r)if(t.id===1&&this.player.alive){const E=Un(this.player);r={x:this.player.x-E.x*1.7+Math.cos(this.player.yaw)*1.2,z:this.player.z-E.z*1.7-Math.sin(this.player.yaw)*1.2}}else{const E=t.teamId*Math.PI/2+this.round*.35;r={x:Math.sin(E)*2.1,z:Math.cos(E)*2.1}}const o=Fn(t.weaponId),l=i?Me(t,i):1/0;let c=r,u=!0;const h=i?hi(t,i,this.colliders,.8):!1;if(i&&a&&h&&l<=o.range*.92){if(u=!1,o.minRange&&l<o.minRange+.35){const E={x:t.x-i.x,z:t.z-i.z},v=Math.hypot(E.x,E.z)||1;c={x:t.x+E.x/v*2,z:t.z+E.z/v*2},u=!0}else if(!t.attack&&!t.blocking&&t.cooldown<=0&&this.combatElapsed-n.acquiredAt>=n.reaction){const E=Un(t),v=(i.x-t.x)/Math.max(.01,l),A=(i.z-t.z)/Math.max(.01,l);E.x*v+E.z*A>.45&&Math.random()<.78*n.aggression&&this.startAttack(t)}}else i&&a&&l<o.range+1.2&&!t.attack&&Math.random()<e*1.4&&(n.avoidTimer=.35,n.avoidSign=Math.random()>.5?1:-1);let f=i&&a?Ii(t,i):r?Ii(t,r):t.yaw;t.yaw=hm(t.yaw,f,e*(t.attack?2.2:7.5));let p=0,g=0;if(u&&c&&!t.blocking){(n.repath<=0||!n.destination||Me(n.destination,c)>1.4)&&(n.path=this.nav.findPath(t,c),n.pathIndex=0,n.destination={x:c.x,z:c.z},n.repath=.65+Math.random()*.4);let E=n.path[n.pathIndex]||c;if(E&&Me(t,E)<.5&&n.pathIndex<n.path.length-1&&(E=n.path[++n.pathIndex]),E){const v=E.x-t.x,A=E.z-t.z,w=Math.hypot(v,A)||1;p=v/w,g=A/w}if(n.avoidTimer>0){const v=p;p=-g*n.avoidSign,g=v*n.avoidSign}}t.attack&&(p*=.25,g*=.25);const x=4.15+t.ai.skill*.8,m={x:t.x,z:t.z},d=il(t,p*x*e,g*x*e,t.radius,this.colliders);t.x=d.x,t.z=d.z,t.moving=Me(m,t)>5e-4,Math.hypot(p,g)>.1&&!t.moving?n.stuck+=e:n.stuck=Math.max(0,n.stuck-e*2),n.stuck>.8&&(n.repath=0,n.path=[],n.avoidTimer=.55,n.avoidSign*=-1,n.stuck=0),t.moving&&Me(t,this.player)<10&&(t.footstepClock-=e,t.footstepClock<=0&&(this.audio.play("step",Me(t,this.player)),t.footstepClock=.46))}thinkAI(t){const e=t.ai,n=this.actors.filter(a=>a.alive&&a.teamId!==t.teamId),i=n.filter(a=>{const o=Me(t,a);return!this.revealed&&o>16?!1:this.revealed||hi(t,a,this.colliders,1.35)});if(i.length){i.sort((o,l)=>{const c=this.actors[1]?.ai.targetId===o.id&&t.teamId===0?-1.2:0,u=this.actors[1]?.ai.targetId===l.id&&t.teamId===0?-1.2:0;return Me(t,o)+c-(Me(t,l)+u)});const a=i[0];e.targetId!==a.id&&(e.targetId=a.id,e.acquiredAt=this.combatElapsed,e.reaction=.22+(1-e.skill)*.45+Math.random()*.18),e.lastSeen={x:a.x,z:a.z,time:this.combatElapsed}}const r=n.find(a=>a.attack&&a.attack.elapsed<a.attack.weapon.windup&&Me(t,a)<3.7);if(r&&!t.attack){const a=`${r.id}:${r.attackSerial}`;e.seenAttacks.has(a)||(e.seenAttacks.add(a),Math.random()<e.skill*.72&&(e.blockUntil=.28+Math.random()*.4))}}resolveActorCollisions(){const t=this.actors.filter(e=>e.alive);for(let e=0;e<2;e+=1)for(let n=0;n<t.length;n+=1)for(let i=n+1;i<t.length;i+=1){const r=t[n],a=t[i];let o=a.x-r.x,l=a.z-r.z,c=Math.hypot(o,l);const u=r.radius+a.radius;if(c>=u)continue;c<.001&&(o=.01*(n+1),l=.01*(i+1),c=Math.hypot(o,l));const h=(u-c)*.5,f=o/c,p=l/c;mi(r.x-f*h,r.z-p*h,r.radius,this.colliders)&&(r.x-=f*h,r.z-=p*h),mi(a.x+f*h,a.z+p*h,a.radius,this.colliders)&&(a.x+=f*h,a.z+=p*h)}}startAttack(t){if(this.phase!=="combat"||this.controlGate||!t.alive||t.attack||t.blocking||t.dodgeTime>0||t.cooldown>0)return!1;const e=Fn(t.weaponId);return t.attackSerial=++this.attackSerial,t.attack={weapon:e,elapsed:0,hitIds:new Set,effectPlayed:!1},t.blocking=!1,!0}updateActorCombat(t,e){if(!t.alive||(t.isPlayer&&!t.blocking&&!t.attack&&(t.stamina=Math.min(100,t.stamina+e*6)),!t.attack))return;const n=t.attack,{weapon:i}=n,r=n.elapsed;n.elapsed+=e,!n.effectPlayed&&r<i.windup&&n.elapsed>=i.windup&&(n.effectPlayed=!0,this.audio.play(i.id==="axe"?"heavySwing":"swing",t.isPlayer?0:Me(t,this.player)),this.world.slash(t,i)),n.elapsed>=i.windup&&n.elapsed<=i.windup+i.active&&this.performMeleeHit(t,n),n.elapsed>=i.windup+i.active+i.recovery&&(t.attack=null,t.cooldown=t.isPlayer?0:.12+Math.random()*.28)}performMeleeHit(t,e){const{weapon:n}=e,i=Un(t),r=Math.cos(n.arc*Math.PI/180/2);for(const a of this.actors){if(!a.alive||a.teamId===t.teamId||e.hitIds.has(a.id))continue;const o=a.x-t.x,l=a.z-t.z,c=Math.hypot(o,l);if(c>n.range+a.radius||c<n.minRange)continue;const u=Math.atan2(a.radius*.65,Math.max(.3,c));(i.x*o+i.z*l)/Math.max(.001,c)<Math.cos(Math.acos(r)+u)||hi(t,a,this.colliders,.8)&&(e.hitIds.add(a.id),this.pendingHits.push({source:t,target:a,weapon:n,damage:n.damage}))}}applyPendingHits(){const t=this.pendingHits;if(this.pendingHits=[],!t.length)return;const e=new Map,n=new Map;for(const r of t){const{source:a,target:o,weapon:l}=r;if(!o.alive)continue;let c=r.damage;if(o.dodgeTime>0){o.isPlayer&&this.toast("闪避成功");continue}const u=a.x-o.x,h=a.z-o.z,f=Math.hypot(u,h)||1,p=Un(o),g=(p.x*u+p.z*h)/f>Math.cos(Math.PI/3);let x=!1;o.blocking&&g&&o.stamina>0&&(o.stamina>=l.blockDamage?(o.stamina-=l.blockDamage,c=0,x=!0):(o.stamina=0,o.blocking=!1,c*=.65,o.isPlayer&&this.toast("架势被击破！")));const m={x:o.x,y:1.15,z:o.z};if(x){this.world.burst(m,"#75e1d2",8,.8),this.audio.play("block",o.isPlayer||a.isPlayer?0:Me(o,this.player)),o.isPlayer&&this.flash("block-flash"),a.isPlayer&&this.toast("对手格挡了攻击");continue}e.set(o.id,(e.get(o.id)||0)+c),n.set(o.id,a),this.world.burst(m,qt[o.teamId].color,l.id==="axe"?15:8,l.id==="axe"?1.25:.8),this.audio.play("hit",o.isPlayer||a.isPlayer?0:Me(o,this.player)),a.isPlayer&&this.flash("hit-marker"),o.isPlayer&&(this.flash("damage-flash"),this.audio.play("hurt"),this.cameraShake=Math.min(.09,this.cameraShake+c*8e-4))}const i=[];for(const[r,a]of e){const o=this.actors[r];o.health=Math.max(0,o.health-a),o.health<=0&&o.alive&&i.push({target:o,source:n.get(r)})}for(const{target:r,source:a}of i)this.killActor(r,a)}killActor(t,e){t.alive=!1,t.health=0,t.attack=null,t.blocking=!1,t.moving=!1,t.deaths+=1,t.lostWeapon=!0,e&&e!==t&&(e.roundKills+=1,e.totalKills+=1),this.world.burst({x:t.x,y:1.25,z:t.z},"#e9dfc4",20,1.35),this.audio.play("kill",t.isPlayer||e?.isPlayer?0:Me(t,this.player)),this.addKillFeed(e,t),t===this.spectatorTarget&&(this.spectatorTarget=null),t.isPlayer&&this.startSpectate()}addKillFeed(t,e){this.killFeed.unshift({source:t?.name||"演武场",sourceTeam:t?.teamId??0,target:e.name,targetTeam:e.teamId,time:this.elapsed}),this.killFeed=this.killFeed.slice(0,5),this.renderKillFeed()}renderKillFeed(){this.ui["kill-feed"].innerHTML=this.killFeed.filter(t=>this.elapsed-t.time<6).map(t=>`<div class="kill-item"><span style="color:${qt[t.sourceTeam].color}">${t.source}</span><i>刃</i><b style="color:${qt[t.targetTeam].color}">${t.target}</b></div>`).join("")}finishRound(t){if(this.phase==="combat"){this.phase="roundEnd",this.controlGate=!1,this.ui["control-gate"].classList.remove("is-visible"),this.roundEndTimer=ae.roundEndSeconds,this.roundWinner=t;for(const e of this.actors){e.attack=null,e.blocking=!1,e.moving=!1,e.lostWeapon=!e.alive;const n=om({won:e.teamId===t,kills:e.roundKills,base:ae.baseIncome,winBonus:ae.winIncome,killBonus:ae.killIncome});e.lastIncome=n,e.money=Math.min(ae.maxMoney,e.money+n)}t!==null?(this.teams[t].score+=1,t===0?this.audio.play("win"):this.audio.play("stage")):this.audio.play("stage"),this.pendingMatchEnd=t!==null&&this.teams[t].score>=this.targetScore,this.pendingMidMatch=!this.pendingMatchEnd&&lm({mode:this.mode,scores:this.teams.map(e=>e.score),trigger:Math.min(ae.midMatchTrigger,this.targetScore-1),alreadyTriggered:this.midTriggered}),this.renderRoundResult(),this.openModal("round-screen"),this.updateHUD(!0)}}renderRoundResult(){const t=this.roundWinner===0;this.ui["round-title"].textContent=this.roundWinner===null?"本回合平局":t?"本队幸存":`${qt[this.roundWinner].name}获胜`,this.ui["round-summary"].textContent=this.roundWinner===null?"无队伍得分 · 所有角色获得基础收入":`${qt[this.roundWinner].name}获得 1 分 · 最后存活队伍胜利`,this.ui["income-summary"].textContent=`你的回合收入 +$ ${this.player.lastIncome}　（基础 ${ae.baseIncome}${t?` + 胜利 ${ae.winIncome}`:""} + 击败 ${this.player.roundKills*ae.killIncome}）`,this.ui["round-standings"].innerHTML=this.standingsHTML(!1),this.ui["continue-round-button"].querySelector("span").textContent=this.pendingMatchEnd?"查看整场结果":this.pendingMidMatch?"进入中场重建":"下一回合"}continueAfterRound(){this.phase==="roundEnd"&&(this.ui["round-screen"].classList.remove("is-visible"),this.modal=null,this.pendingMatchEnd?this.showMatchEnd():this.pendingMidMatch?(this.midTriggered=!0,this.startBuild(!0),this.requestLock()):this.startSwap())}showMatchEnd(){this.phase="matchEnd";const t=[...this.teams].sort((n,i)=>i.score-n.score)[0],e=t.id===0;this.ui["match-seal"].textContent=e?"胜":"终",this.ui["match-seal"].style.borderColor=e?qt[0].color:qt[t.id].color,this.ui["match-title"].textContent=e?"本队主宰四象":`${qt[t.id].name}赢得演武`,this.ui["match-summary"].textContent=`${this.mode==="quick"?"快速模式":"长局模式"} · 目标 ${this.targetScore} 分 · 共完成 ${this.round} 回合${this.midTriggered?" · 已完成中场重建":""}`,this.ui["match-stats"].innerHTML=`<div><strong>${this.player.totalKills}</strong><small>你的总击败</small></div><div><strong>${this.player.deaths}</strong><small>你的阵亡</small></div><div><strong>${this.teams[0].score}</strong><small>本队回合分</small></div>`,this.ui["match-standings"].innerHTML=this.standingsHTML(!0),this.openModal("match-screen"),e&&this.audio.play("win")}standingsHTML(t){return[...this.teams].sort((e,n)=>n.score-e.score||e.id-n.id).map(e=>{const n=this.actors.filter(a=>a.teamId===e.id),i=n.filter(a=>a.alive).length,r=n.reduce((a,o)=>a+o.totalKills,0);return`<div class="standing-row" style="--team:${qt[e.id].color}"><b>${String(e.id+1).padStart(2,"0")}</b><span class="standing-name">${qt[e.id].name} · ${qt[e.id].title}</span><span class="standing-score">${e.score} / ${this.targetScore}</span><small>${t?`${r} 击败`:`${i} 人生还`}</small></div>`}).join("")}startSpectate(){if(this.player.alive){this.spectatorTarget=null;return}const t=this.actors.find(e=>e.teamId===0&&!e.isPlayer&&e.alive);this.spectatorTarget=t||this.actors.find(e=>e.alive&&e!==this.player)||null}cycleSpectator(){const t=this.actors.filter(i=>i.alive&&i!==this.player);if(!t.length)return;const e=t.sort((i,r)=>(i.teamId===0?-1:1)-(r.teamId===0?-1:1)||i.id-r.id),n=e.indexOf(this.spectatorTarget);this.spectatorTarget=e[(n+1)%e.length]}showBanner(t,e="",n=""){const i=this.ui["phase-banner"];i.querySelector("strong").textContent=t,i.querySelector("p").textContent=e,i.querySelector("small").textContent=n,i.classList.add("is-visible"),this.bannerUntil=this.elapsed+3.1}toast(t,e=2.5){this.ui.toast.textContent=t,this.ui.toast.classList.add("is-visible"),this.toastUntil=this.elapsed+e}flash(t){const e=this.ui[t];e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}renderScoreboard(){this.ui["team-scores"].innerHTML=this.teams.map(t=>`<div class="team-score" data-team="${t.id}" style="--team:${qt[t.id].color}"><span class="team-glyph">${qt[t.id].short}</span><small>${qt[t.id].name}</small><span class="team-alive"><i></i><i></i></span><strong class="team-points">0</strong></div>`).join("")}updateHUD(t=!1){if(!this.player||this.phase==="menu"||!t&&this.hudClock>0)return;this.hudClock=.08;const e=this.player,n=this.actors[1],i=Fn(e.weaponId),r={build:["营造阶段",this.buildTimer,`BUILD / ${this.mode==="long"&&this.midTriggered?"MID MATCH":"PREPARATION"}`,this.buildVisited?"布置完成后按 F 准备":"跟随标记前往本队区域"],swap:["随机换区",this.swapTimer,"SPAWN ROTATION","队伍、资金与装备保持原身份"],buy:["购买与准备",this.buyTimer,`ROUND ${String(this.round).padStart(2,"0")} / 目标 ${this.targetScore} 分`,"B 商店 · F 提前准备"],combat:["近战演武",this.combatTimer,`ROUND ${String(this.round).padStart(2,"0")} / 目标 ${this.targetScore} 分`,this.revealed?"终局揭示 · 全图追击":`${ae.revealSeconds} 秒后揭示 / 75 秒超时平局`],roundEnd:["回合结算",this.roundEndTimer,"ROUND COMPLETE","收入已发放"],matchEnd:["整场结束",0,"MATCH COMPLETE","可立即开始新比赛"]}[this.phase]||["",0,"",""];this.ui["phase-label"].textContent=r[0],this.ui["phase-timer"].textContent=cm(r[1]||0),this.ui["phase-kicker"].textContent=r[2],this.ui["phase-subtitle"].textContent=r[3],this.ui["health-number"].textContent=Math.ceil(e.health),this.ui["health-fill"].style.width=`${e.health}%`,this.ui["health-fill"].style.background=e.health<=30?"#ff3f38":"",this.ui["stamina-fill"].style.width=`${e.stamina}%`,this.ui["dodge-label"].textContent=e.dodgeCooldown>0?`闪避 ${e.dodgeCooldown.toFixed(1)}s`:"SPACE 闪避",this.ui["teammate-name"].textContent=n.name.replace("队友 · ",""),this.ui["teammate-health"].style.width=`${n.health}%`,this.ui["teammate-state"].textContent=n.alive?"存活":"阵亡",this.ui["teammate-state"].style.color=n.alive?"":"#ed6651",this.ui["money-label"].textContent=`$ ${e.money}`,this.ui["weapon-name"].textContent=i.name,this.ui["weapon-type"].textContent=i.subtitle,this.ui["weapon-damage"].textContent=`伤害 ${i.damage}`,this.ui["weapon-range"].textContent=`距离 ${i.range.toFixed(1)}m`,this.ui["build-budget"].textContent=this.buildBudgets?.[0]??0,this.ui["build-budget-fill"].style.width=`${this.buildBudgets?.[0]??0}%`;const a=te[this.teams[0].buildZone],o=ci(e.x,e.z)?.id===a.id;this.ui["build-status"].textContent=o?"可编辑 · 通道保护中":this.buildVisited?"返回本队区域可继续编辑":"先前往区域",this.ui["build-hud"].classList.toggle("is-visible",this.phase==="build"),this.ui["build-toolbar"].classList.toggle("is-visible",this.phase==="build"&&!!this.selectedBuild),this.ui.crosshair.classList.toggle("build",this.phase==="build"),this.ui.crosshair.classList.toggle("invalid",this.phase==="build"&&this.selectedBuild&&this.ghostPlacement&&!this.ghostPlacement.valid),this.ui.crosshair.style.display=e.alive&&["build","buy","combat"].includes(this.phase)?"":"none",this.ui["reveal-banner"].classList.toggle("is-visible",this.phase==="combat"&&this.revealed),this.ui["spectator-panel"].classList.toggle("is-visible",this.phase==="combat"&&!e.alive),this.spectatorTarget&&(this.ui["spectator-name"].textContent=this.spectatorTarget.name),this.ui["combat-hint"].innerHTML=this.phase==="buy"?"<kbd>B</kbd> 打开商店 <kbd>F</kbd> 准备":"<kbd>左键</kbd> 挥刃 <kbd>右键</kbd> 格挡 <kbd>Space</kbd> 闪避",this.ui["map-mode-label"].textContent=this.phase==="build"?"营造归属":this.revealed?"全图揭示":`出生 ${te[this.teams[0].spawnZone]?.label||"-"} 区`;for(const l of this.teams){const c=this.ui["team-scores"].querySelector(`[data-team="${l.id}"]`);if(!c)continue;c.querySelector(".team-points").textContent=l.score;const u=this.actors.filter(h=>h.teamId===l.id);c.querySelectorAll(".team-alive i").forEach((h,f)=>h.classList.toggle("dead",!u[f].alive))}this.phase!=="build"&&(this.ui["interaction-tip"].textContent=""),this.updateZoneMarker(a),this.drawMinimap(),this.renderKillFeed()}updateZoneMarker(t){const e=this.ui["zone-marker"];if(this.phase!=="build"){e.classList.remove("is-visible");return}e.classList.add("is-visible");const n=this.world.project(t.cx,2.4,t.cz);let i=n.x,r=n.y;n.behind&&(i=window.innerWidth-i,r=window.innerHeight*.75),i=Cr(i,90,window.innerWidth-90),r=Cr(r,180,window.innerHeight-190),e.style.left=`${i}px`,e.style.top=`${r}px`,e.querySelector("strong").textContent=`${t.label} 区 · ${t.name}`,e.querySelector("span").textContent=`${Math.round(Math.hypot(this.player.x-t.cx,this.player.z-t.cz))}m`}drawMinimap(){const t=this.ui.minimap,e=t.getContext("2d"),n=t.width,i=n/40,r=l=>(l+20)*i,a=l=>(l+20)*i;e.clearRect(0,0,n,n),e.fillStyle="#cfc6ad",e.fillRect(0,0,n,n);for(const l of te){const c=this.teams.find(u=>u.buildZone===l.id);e.fillStyle=`${qt[c.id].color}35`,e.fillRect(r(l.minX),a(l.minZ),15*i,15*i),e.strokeStyle=qt[c.id].color,e.lineWidth=1.5,e.strokeRect(r(l.minX),a(l.minZ),15*i,15*i),e.fillStyle="#263a3c",e.font="800 18px sans-serif",e.textAlign="center",e.fillText(l.label,r(l.cx),a(l.cz)+6)}for(const l of this.builds){e.save(),e.translate(r(l.x),a(l.z)),e.rotate(-l.rotation),e.fillStyle=qt[l.teamId].dark;const c=hn(l.typeId);e.fillRect(-c.size[0]/2*i,-c.size[2]/2*i,c.size[0]*i,c.size[2]*i),e.restore()}const o=(l,c,u,h=!1)=>{if(e.fillStyle=c,e.strokeStyle="#17282c",e.lineWidth=1,e.beginPath(),e.arc(r(l.x),a(l.z),u,0,Math.PI*2),e.fill(),e.stroke(),h){const f=Un(l);e.strokeStyle=c,e.lineWidth=2,e.beginPath(),e.moveTo(r(l.x),a(l.z)),e.lineTo(r(l.x+f.x*1.4),a(l.z+f.z*1.4)),e.stroke()}};if(this.phase==="combat"||this.phase==="buy"||this.phase==="roundEnd")for(const l of this.actors){if(!l.alive||l.isPlayer)continue;const c=l.teamId===0;(c||!this.player.alive||this.revealed||Me(l,this.player)<14&&hi(this.player,l,this.colliders,1.35))&&o(l,qt[l.teamId].color,c?4:3)}if(o(this.player,"#ffffff",4.5,!0),this.phase==="build"){const l=te[this.teams[0].buildZone];e.strokeStyle="#fff1ba",e.lineWidth=3,e.strokeRect(r(l.minX)+2,a(l.minZ)+2,15*i-4,15*i-4)}}updateCamera(t){this.phase!=="menu"&&(this.cameraShake=Math.max(0,this.cameraShake-t*.24),this.player?.alive||this.phase!=="combat"?this.world.setPlayerCamera(this.player,this.pitch,(Math.random()-.5)*this.cameraShake):(this.spectatorTarget?.alive||this.startSpectate(),this.world.setSpectatorCamera(this.spectatorTarget,t,this.elapsed,this.colliders)))}loop(t){const e=Math.min(.04,Math.max(.001,(t-this.lastTime)/1e3));if(this.lastTime=t,this.elapsed+=e,this.hudClock-=e,this.phase==="menu"&&this.world.setMenuCamera(e),!this.paused){this.phase==="build"?this.updateBuild(e):this.phase==="swap"?this.updateSwap(e):this.phase==="buy"?this.updateBuy(e):this.phase==="combat"?this.updateCombat(e):this.phase==="roundEnd"&&(this.roundEndTimer-=e,this.ui["round-auto-label"].textContent=`${Math.max(0,Math.ceil(this.roundEndTimer))} 秒后自动继续`,this.roundEndTimer<=0&&this.continueAfterRound()),this.world.updateEffects(e);for(const i of this.actors)this.world.updateActor(i,e,this.elapsed);this.updateCamera(e),this.world.updateViewModel(this.player||{alive:!1},e,this.elapsed,["buy","combat"].includes(this.phase)&&!this.modal),(Ui.has(this.phase)||this.phase==="matchEnd")&&this.updateHUD()}this.toastUntil&&this.elapsed>this.toastUntil&&this.ui.toast.classList.remove("is-visible"),this.bannerUntil&&this.elapsed>this.bannerUntil&&this.ui["phase-banner"].classList.remove("is-visible");const n=["menu","build","swap"].includes(this.phase);for(const i of this.world.zoneMarkers)i.visible=n;this.world.render(),requestAnimationFrame(i=>this.loop(i))}getDebugState(){return{phase:this.phase,mode:this.mode,targetScore:this.targetScore,round:this.round,midTriggered:this.midTriggered,teams:this.teams.map(t=>({...t})),actors:this.actors.map(t=>({id:t.id,teamId:t.teamId,isPlayer:t.isPlayer,alive:t.alive,health:t.health,money:t.money,weaponId:t.weaponId,x:t.x,z:t.z})),builds:this.builds.map(t=>({id:t.id,teamId:t.teamId,zoneId:t.zoneId,typeId:t.typeId})),routesValid:this.teams.length?this.validateAllRoutes():!0}}}const Sm=new Mm;window.__REALM_BLADE__=Sm;
