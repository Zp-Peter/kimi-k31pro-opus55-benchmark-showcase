(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const la="180",Il=0,La=1,Ul=2,Hc=1,Vc=2,Rn=3,Kn=0,Ge=1,xe=2,Xn=0,Gi=1,Da=2,Ia=3,Ua=4,Nl=5,li=100,Fl=101,Ol=102,Bl=103,zl=104,kl=200,Gl=201,Hl=202,Vl=203,_o=204,vo=205,Wl=206,Xl=207,ql=208,Yl=209,Kl=210,$l=211,Jl=212,Zl=213,jl=214,xo=0,Mo=1,So=2,Xi=3,yo=4,Eo=5,bo=6,To=7,Wc=0,Ql=1,tu=2,qn=0,eu=1,nu=2,iu=3,Xc=4,su=5,ru=6,ou=7,qc=300,qi=301,Yi=302,wo=303,Ao=304,Tr=306,gr=1e3,hi=1001,Ro=1002,$e=1003,au=1004,Ns=1005,_n=1006,Ir=1007,di=1008,Mn=1009,Yc=1010,Kc=1011,ys=1012,ua=1013,fi=1014,vn=1015,Cs=1016,ha=1017,da=1018,Es=1020,$c=35902,Jc=35899,Zc=1021,jc=1022,dn=1023,bs=1026,Ts=1027,fa=1028,pa=1029,Qc=1030,ma=1031,ga=1033,lr=33776,ur=33777,hr=33778,dr=33779,Co=35840,Po=35841,Lo=35842,Do=35843,Io=36196,Uo=37492,No=37496,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Go=37813,Ho=37814,Vo=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Ko=37820,$o=37821,Jo=36492,Zo=36494,jo=36495,Qo=36283,ta=36284,ea=36285,na=36286,cu=3200,lu=3201,tl=0,uu=1,Wn="",Ve="srgb",Ki="srgb-linear",_r="linear",de="srgb",Ei=7680,Na=519,hu=512,du=513,fu=514,el=515,pu=516,mu=517,gu=518,_u=519,Fa=35044,Oa=35048,Ba="300 es",xn=2e3,vr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let za=1234567;const _s=Math.PI/180,ws=180/Math.PI;function es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function _a(i,t){return(i%t+t)%t}function vu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xu(i,t,e){return i!==t?(e-i)/(t-i):0}function vs(i,t,e){return(1-e)*i+e*t}function Mu(i,t,e,n){return vs(i,t,1-Math.exp(-e*n))}function Su(i,t=1){return t-Math.abs(_a(i,t*2)-t)}function yu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Eu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Tu(i,t){return i+Math.random()*(t-i)}function wu(i){return i*(.5-Math.random())}function Au(i){i!==void 0&&(za=i);let t=za+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ru(i){return i*_s}function Cu(i){return i*ws}function Pu(i){return(i&i-1)===0&&i!==0}function Lu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Du(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Iu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),p=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $i={DEG2RAD:_s,RAD2DEG:ws,generateUUID:es,clamp:Zt,euclideanModulo:_a,mapLinear:vu,inverseLerp:xu,lerp:vs,damp:Mu,pingpong:Su,smoothstep:yu,smootherstep:Eu,randInt:bu,randFloat:Tu,randFloatSpread:wu,seededRandom:Au,degToRad:Ru,radToDeg:Cu,isPowerOfTwo:Pu,ceilPowerOfTwo:Lu,floorPowerOfTwo:Du,setQuaternionFromProperEuler:Iu,normalize:Oe,denormalize:zi};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const p=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==p||c!==f||u!==g){let m=1-a;const d=l*p+c*f+u*g+h*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const C=Math.sqrt(y),A=Math.atan2(C,d*M);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const v=a*M;if(l=l*m+p*v,c=c*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],p=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+l*f-c*p,t[e+1]=l*g+u*p+c*h-a*f,t[e+2]=c*g+u*f+a*p-l*h,t[e+3]=u*g-a*h-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),p=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*u*h+c*f*g,this._y=c*f*h-p*u*g,this._z=c*u*g+p*f*h,this._w=c*u*h-p*f*g;break;case"YXZ":this._x=p*u*h+c*f*g,this._y=c*f*h-p*u*g,this._z=c*u*g-p*f*h,this._w=c*u*h+p*f*g;break;case"ZXY":this._x=p*u*h-c*f*g,this._y=c*f*h+p*u*g,this._z=c*u*g+p*f*h,this._w=c*u*h-p*f*g;break;case"ZYX":this._x=p*u*h-c*f*g,this._y=c*f*h+p*u*g,this._z=c*u*g-p*f*h,this._w=c*u*h+p*f*g;break;case"YZX":this._x=p*u*h+c*f*g,this._y=c*f*h+p*u*g,this._z=c*u*g-p*f*h,this._w=c*u*h-p*f*g;break;case"XZY":this._x=p*u*h-c*f*g,this._y=c*f*h-p*u*g,this._z=c*u*g+p*f*h,this._w=c*u*h+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+a+h;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=r*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ur.copy(this).projectOnVector(t),this.sub(Ur)}reflect(t){return this.sub(Ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new R,ka=new Dn;class Yt{constructor(t,e,n,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],f=n[5],g=n[8],_=s[0],m=s[3],d=s[6],M=s[1],y=s[4],v=s[7],C=s[2],A=s[5],P=s[8];return r[0]=o*_+a*M+l*C,r[3]=o*m+a*y+l*A,r[6]=o*d+a*v+l*P,r[1]=c*_+u*M+h*C,r[4]=c*m+u*y+h*A,r[7]=c*d+u*v+h*P,r[2]=p*_+f*M+g*C,r[5]=p*m+f*y+g*A,r[8]=p*d+f*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,p=a*l-u*r,f=c*r-o*l,g=e*h+n*p+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nr.makeScale(t,e)),this}rotate(t){return this.premultiply(Nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Nr=new Yt;function nl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uu(){const i=xr("canvas");return i.style.display="block",i}const Ga={};function As(i){i in Ga||(Ga[i]=!0,console.warn(i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ha=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Va=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fu(){const i={enabled:!0,workingColorSpace:Ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=Hi(s.r),s.g=Hi(s.g),s.b=Hi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?_r:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return As("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ki]:{primaries:t,whitePoint:n,transfer:_r,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Ha,fromXYZ:Va,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}const re=Fu();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Ou{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=xr("canvas")),bi.width=t.width,bi.height=t.height;const s=bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bu=0;class va{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fr(s[o].image)):r.push(Fr(s[o]))}else r=Fr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ou.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;const Or=new R;class Ue extends ts{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,n=hi,s=hi,r=_n,o=di,a=dn,l=Mn,c=Ue.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=es(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Or).x}get height(){return this.source.getSize(Or).y}get depth(){return this.source.getSize(Or).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case hi:t.x=t.x<0?0:1;break;case Ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case hi:t.y=t.y<0?0:1;break;case Ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=qc;Ue.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],f=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(f+1)/2,C=(d+1)/2,A=(u+p)/4,P=(h+_)/4,I=(g+m)/4;return y>v&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=P/n):v>C?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(p-u)/M,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends ts{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ue(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new va(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends ku{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class il extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gu extends Ue{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Os.subVectors(this.max,ls),Ti.subVectors(t.a,ls),wi.subVectors(t.b,ls),Ai.subVectors(t.c,ls),Nn.subVectors(wi,Ti),Fn.subVectors(Ai,wi),ti.subVectors(Ti,Ai);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-ti.z,ti.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,ti.z,0,-ti.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-ti.y,ti.x,0];return!Br(e,Ti,wi,Ai,Os)||(e=[1,0,0,0,1,0,0,0,1],!Br(e,Ti,wi,Ai,Os))?!1:(Bs.crossVectors(Nn,Fn),e=[Bs.x,Bs.y,Bs.z],Br(e,Ti,wi,Ai,Os))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const En=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,Fs=new gi,Ti=new R,wi=new R,Ai=new R,Nn=new R,Fn=new R,ti=new R,ls=new R,Os=new R,Bs=new R,ei=new R;function Br(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ei.fromArray(i,r);const a=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),l=t.dot(ei),c=e.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Hu=new gi,us=new R,zr=new R;class ns{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);const e=us.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(zr)),this.expandByPoint(us.copy(t.center).sub(zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const bn=new R,kr=new R,zs=new R,On=new R,Gr=new R,ks=new R,Hr=new R;class sl{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){kr.copy(t).add(e).multiplyScalar(.5),zs.copy(e).sub(t).normalize(),On.copy(this.origin).sub(kr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(zs),a=On.dot(this.direction),l=-On.dot(zs),c=On.lengthSq(),u=Math.abs(1-o*o);let h,p,f,g;if(u>0)if(h=o*l-a,p=o*a-l,g=r*u,h>=0)if(p>=-g)if(p<=g){const _=1/u;h*=_,p*=_,f=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=r,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+p*(p+2*l)+c);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(kr).addScaledVector(zs,p),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(r=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(r=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Gr.subVectors(e,t),ks.subVectors(n,t),Hr.crossVectors(Gr,ks);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(ks.crossVectors(On,ks));if(l<0)return null;const c=a*this.direction.dot(Gr.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(Hr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,l,c,u,h,p,f,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,p,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,u,h,p,f,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=p,d[3]=f,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),o=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const p=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+g*c,e[5]=p-_*c,e[9]=-a*l,e[2]=_-p*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,f=l*h,g=c*u,_=c*h;e[0]=p+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,f=l*h,g=c*u,_=c*h;e[0]=p-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,f=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-f,e[8]=p*c+_,e[1]=l*h,e[5]=_*c+p,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-p*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*h+g,e[10]=p-_*h}else if(t.order==="XZY"){const p=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vu,t,Wu)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Bn.crossVectors(n,Xe),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Bn.crossVectors(n,Xe)),Bn.normalize(),Gs.crossVectors(Xe,Bn),s[0]=Bn.x,s[4]=Gs.x,s[8]=Xe.x,s[1]=Bn.y,s[5]=Gs.y,s[9]=Xe.y,s[2]=Bn.z,s[6]=Gs.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],f=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],y=n[7],v=n[11],C=n[15],A=s[0],P=s[4],I=s[8],S=s[12],b=s[1],U=s[5],z=s[9],X=s[13],j=s[2],Q=s[6],et=s[10],rt=s[14],J=s[3],lt=s[7],vt=s[11],It=s[15];return r[0]=o*A+a*b+l*j+c*J,r[4]=o*P+a*U+l*Q+c*lt,r[8]=o*I+a*z+l*et+c*vt,r[12]=o*S+a*X+l*rt+c*It,r[1]=u*A+h*b+p*j+f*J,r[5]=u*P+h*U+p*Q+f*lt,r[9]=u*I+h*z+p*et+f*vt,r[13]=u*S+h*X+p*rt+f*It,r[2]=g*A+_*b+m*j+d*J,r[6]=g*P+_*U+m*Q+d*lt,r[10]=g*I+_*z+m*et+d*vt,r[14]=g*S+_*X+m*rt+d*It,r[3]=M*A+y*b+v*j+C*J,r[7]=M*P+y*U+v*Q+C*lt,r[11]=M*I+y*z+v*et+C*vt,r[15]=M*S+y*X+v*rt+C*It,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],f=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*h-s*c*h-r*a*p+n*c*p+s*a*f-n*l*f)+_*(+e*l*f-e*c*p+r*o*p-s*o*f+s*c*u-r*l*u)+m*(+e*c*h-e*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+d*(-s*a*u-e*l*h+e*a*p+s*o*h-n*o*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],f=t[11],g=t[12],_=t[13],m=t[14],d=t[15],M=h*m*c-_*p*c+_*l*f-a*m*f-h*l*d+a*p*d,y=g*p*c-u*m*c-g*l*f+o*m*f+u*l*d-o*p*d,v=u*_*c-g*h*c+g*a*f-o*_*f-u*a*d+o*h*d,C=g*h*l-u*_*l-g*a*p+o*_*p+u*a*m-o*h*m,A=e*M+n*y+s*v+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=M*P,t[1]=(_*p*r-h*m*r-_*s*f+n*m*f+h*s*d-n*p*d)*P,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*P,t[3]=(h*l*r-a*p*r-h*s*c+n*p*c+a*s*f-n*l*f)*P,t[4]=y*P,t[5]=(u*m*r-g*p*r+g*s*f-e*m*f-u*s*d+e*p*d)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*P,t[7]=(o*p*r-u*l*r+u*s*c-e*p*c-o*s*f+e*l*f)*P,t[8]=v*P,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*d-e*h*d)*P,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*P,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*f-e*a*f)*P,t[12]=C*P,t[13]=(u*_*s-g*h*s+g*n*p-e*_*p-u*n*m+e*h*m)*P,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*p+e*a*p)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,p=r*c,f=r*u,g=r*h,_=o*u,m=o*h,d=a*h,M=l*c,y=l*u,v=l*h,C=n.x,A=n.y,P=n.z;return s[0]=(1-(_+d))*C,s[1]=(f+v)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(p+d))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+y)*P,s[9]=(m-M)*P,s[10]=(1-(p+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const o=Ri.set(s[4],s[5],s[6]).length(),a=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);const c=1/r,u=1/o,h=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=u,cn.elements[5]*=u,cn.elements[6]*=u,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,e.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),p=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===xn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===vr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),p=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===xn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===vr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new R,cn=new he,Vu=new R(0,0,0),Wu=new R(1,1,1),Bn=new R,Gs=new R,Xe=new R,Wa=new he,Xa=new Dn;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xu=0;const qa=new R,Ci=new Dn,Tn=new he,Hs=new R,hs=new R,qu=new R,Yu=new Dn,Ya=new R(1,0,0),Ka=new R(0,1,0),$a=new R(0,0,1),Ja={type:"added"},Ku={type:"removed"},Pi={type:"childadded",child:null},Vr={type:"childremoved",child:null};class Me extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new R,e=new pn,n=new Dn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Yt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Ya,t)}rotateY(t){return this.rotateOnAxis(Ka,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return qa.copy(t).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ya,t)}translateY(t){return this.translateOnAxis(Ka,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hs.copy(t):Hs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(hs,Hs,this.up):Tn.lookAt(Hs,hs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Me.DEFAULT_UP=new R(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new R,wn=new R,Wr=new R,An=new R,Li=new R,Di=new R,Za=new R,Xr=new R,qr=new R,Yr=new R,Kr=new _e,$r=new _e,Jr=new _e;class hn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),wn.subVectors(n,e),Wr.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(wn),l=ln.dot(Wr),c=wn.dot(wn),u=wn.dot(Wr),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,f=(c*l-a*u)*p,g=(o*u-a*l)*p;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,An)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,An.x),l.addScaledVector(o,An.y),l.addScaledVector(a,An.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Kr.setScalar(0),$r.setScalar(0),Jr.setScalar(0),Kr.fromBufferAttribute(t,e),$r.fromBufferAttribute(t,n),Jr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kr,r.x),o.addScaledVector($r,r.y),o.addScaledVector(Jr,r.z),o}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),wn.subVectors(t,e),ln.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),ln.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Li.subVectors(s,n),Di.subVectors(r,n),Xr.subVectors(t,n);const l=Li.dot(Xr),c=Di.dot(Xr);if(l<=0&&c<=0)return e.copy(n);qr.subVectors(t,s);const u=Li.dot(qr),h=Di.dot(qr);if(u>=0&&h<=u)return e.copy(s);const p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Li,o);Yr.subVectors(t,r);const f=Li.dot(Yr),g=Di.dot(Yr);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Za.subVectors(r,s),a=(h-u)/(h-u+(f-g)),e.copy(s).addScaledVector(Za,a);const d=1/(m+_+p);return o=_*d,a=p*d,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ol={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Vs={h:0,s:0,l:0};function Zr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=_a(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=Ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){const n=ol[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return re.workingToColorSpace(Ie.copy(this),t),Math.round(Zt(Ie.r*255,0,255))*65536+Math.round(Zt(Ie.g*255,0,255))*256+Math.round(Zt(Ie.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Ve){re.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Vs);const n=vs(zn.h,Vs.h,e),s=vs(zn.s,Vs.s,e),r=vs(zn.l,Vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Gt;Gt.NAMES=ol;let $u=0;class is extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Gi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=vo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==vo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Mr extends is{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new R,Ws=new At;let Ju=0;class Le{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class al extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cl extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Xt extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zu=0;const Qe=new he,jr=new Me,Ii=new R,qe=new gi,ds=new gi,Re=new R;class fe extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nl(t)?cl:al)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return jr.lookAt(t),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(qe.min,ds.min),qe.expandByPoint(Re),Re.addVectors(qe.max,ds.max),qe.expandByPoint(Re)):(qe.expandByPoint(ds.min),qe.expandByPoint(ds.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Re.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Re.add(Ii)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new R,l[I]=new R;const c=new R,u=new R,h=new R,p=new At,f=new At,g=new At,_=new R,m=new R;function d(I,S,b){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),f.sub(p),g.sub(p);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(U),a[I].add(_),a[S].add(_),a[b].add(_),l[I].add(m),l[S].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,S=M.length;I<S;++I){const b=M[I],U=b.start,z=b.count;for(let X=U,j=U+z;X<j;X+=3)d(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const y=new R,v=new R,C=new R,A=new R;function P(I){C.fromBufferAttribute(s,I),A.copy(C);const S=a[I];y.copy(S),y.sub(C.multiplyScalar(C.dot(S))).normalize(),v.crossVectors(A,S);const U=v.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,U)}for(let I=0,S=M.length;I<S;++I){const b=M[I],U=b.start,z=b.count;for(let X=U,j=U+z;X<j;X+=3)P(t.getX(X+0)),P(t.getX(X+1)),P(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(t)for(let p=0,f=t.count;p<f;p+=3){const g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let d=0;d<u;d++)p[g++]=c[f++]}return new Le(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new fe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const p=c[u],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,f=h.length;p<f;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new he,ni=new sl,Xs=new ns,Qa=new R,qs=new R,Ys=new R,Ks=new R,Qr=new R,$s=new R,tc=new R,Js=new R;class me extends Me{constructor(t=new fe,e=new Mr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Qr.fromBufferAttribute(h,t),o?$s.addScaledVector(Qr,u):$s.addScaledVector(Qr.sub(e),u))}e.add($s)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Xs.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Xs,Qa)===null||ni.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(ja.copy(r).invert(),ni.copy(t.ray).applyMatrix4(ja),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,p=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,C=y;v<C;v+=3){const A=a.getX(v),P=a.getX(v+1),I=a.getX(v+2);s=Zs(this,d,t,n,c,u,h,A,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){const M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Zs(this,o,t,n,c,u,h,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){const m=p[g],d=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,C=y;v<C;v+=3){const A=v,P=v+1,I=v+2;s=Zs(this,d,t,n,c,u,h,A,P,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,d=_;m<d;m+=3){const M=m,y=m+1,v=m+2;s=Zs(this,o,t,n,c,u,h,M,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function ju(i,t,e,n,s,r,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Kn,a),l===null)return null;Js.copy(a),Js.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Js);return c<e.near||c>e.far?null:{distance:c,point:Js.clone(),object:i}}function Zs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,qs),i.getVertexPosition(l,Ys),i.getVertexPosition(c,Ks);const u=ju(i,t,e,n,qs,Ys,Ks,tc);if(u){const h=new R;hn.getBarycoord(tc,qs,Ys,Ks,h),s&&(u.uv=hn.getInterpolatedAttribute(s,a,l,c,h,new At)),r&&(u.uv1=hn.getInterpolatedAttribute(r,a,l,c,h,new At)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,h,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new R,materialIndex:0};hn.getNormal(qs,Ys,Ks,p.normal),u.face=p,u.barycoord=h}return u}class Jn extends fe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(h,2));function g(_,m,d,M,y,v,C,A,P,I,S){const b=v/P,U=C/I,z=v/2,X=C/2,j=A/2,Q=P+1,et=I+1;let rt=0,J=0;const lt=new R;for(let vt=0;vt<et;vt++){const It=vt*U-X;for(let Ht=0;Ht<Q;Ht++){const ee=Ht*b-z;lt[_]=ee*M,lt[m]=It*y,lt[d]=j,c.push(lt.x,lt.y,lt.z),lt[_]=0,lt[m]=0,lt[d]=A>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(Ht/P),h.push(1-vt/I),rt+=1}}for(let vt=0;vt<I;vt++)for(let It=0;It<P;It++){const Ht=p+It+Q*vt,ee=p+It+Q*(vt+1),le=p+(It+1)+Q*(vt+1),jt=p+(It+1)+Q*vt;l.push(Ht,ee,jt),l.push(ee,le,jt),J+=6}a.addGroup(f,J,S),f+=J,p+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Ji(i[e]);for(const s in n)t[s]=n[s]}return t}function Qu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ll(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const ul={clone:Ji,merge:Be};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends is{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hl extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new R,ec=new At,nc=new At;class nn extends hl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(_s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_s*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class nh extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Ui,Ni,t,e);s.layers=this.layers,this.add(s);const r=new nn(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const o=new nn(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ui,Ni,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ui,Ni,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dl extends Ue{constructor(t=[],e=qi,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Xn});r.uniforms.tEquirect.value=e;const o=new me(s,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=_n),new nh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ve extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sh={type:"move"};class to{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sh)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Gt(t),this.near=e,this.far=n}clone(){return new xa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rh extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class oh extends Ue{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,u=$e,h,p){super(null,o,a,l,c,u,s,r,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fi=new he,sc=new he,js=[],rc=new gi,ah=new he,fs=new me,ps=new ns;class un extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ah)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),rc.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),ps.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),sc.multiplyMatrices(n,Fi),fs.matrixWorld=sc,fs.raycast(t,js);for(let o=0,a=js.length;o<a;o++){const l=js[o];l.instanceId=r,l.object=this,e.push(l)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oh(new Float32Array(s*this.count),s,this.count,fa,vn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const eo=new R,ch=new R,lh=new Yt;class ai{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=eo.subVectors(n,e).cross(ch.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(eo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lh.getNormalMatrix(t),s=this.coplanarPoint(eo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new ns,uh=new At(.5,.5),Qs=new R;class Ma{constructor(t=new ai,e=new ai,n=new ai,s=new ai,r=new ai,o=new ai){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],p=r[6],f=r[7],g=r[8],_=r[9],m=r[10],d=r[11],M=r[12],y=r[13],v=r[14],C=r[15];if(s[0].setComponents(c-o,f-u,d-g,C-M).normalize(),s[1].setComponents(c+o,f+u,d+g,C+M).normalize(),s[2].setComponents(c+a,f+h,d+_,C+y).normalize(),s[3].setComponents(c-a,f-h,d-_,C-y).normalize(),n)s[4].setComponents(l,p,m,v).normalize(),s[5].setComponents(c-l,f-p,d-m,C-v).normalize();else if(s[4].setComponents(c-l,f-p,d-m,C-v).normalize(),e===xn)s[5].setComponents(c+l,f+p,d+m,C+v).normalize();else if(e===vr)s[5].setComponents(l,p,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){ii.center.set(0,0,0);const e=uh.distanceTo(t.center);return ii.radius=.7071067811865476+e,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Qs.x=s.normal.x>0?t.max.x:t.min.x,Qs.y=s.normal.y>0?t.max.y:t.min.y,Qs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sa extends is{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oc=new he,ia=new sl,tr=new ns,er=new R;class fl extends Me{constructor(t=new fe,e=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),tr.radius+=r,t.ray.intersectsSphere(tr)===!1)return;oc.copy(s).invert(),ia.copy(t.ray).applyMatrix4(oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=p,_=f;g<_;g++){const m=c.getX(g);er.fromBufferAttribute(h,m),ac(er,m,l,s,t,e,this)}}else{const p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=p,_=f;g<_;g++)er.fromBufferAttribute(h,g),ac(er,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ac(i,t,e,n,s,r,o){const a=ia.distanceSqToPoint(i);if(a<e){const l=new R;ia.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hh extends Ue{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pl extends Ue{constructor(t,e,n=fi,s,r,o,a=$e,l=$e,c,u=bs,h=1){if(u!==bs&&u!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:h};super(p,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ml extends Ue{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ya extends fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,u=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){const f=n+h/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[p]/t+1)/2,u.y=(o[p+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ke extends fe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],p=[],f=[];let g=0;const _=[],m=n/2;let d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(f,2));function M(){const v=new R,C=new R;let A=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const S=[],b=I/r,U=b*(e-t)+t;for(let z=0;z<=s;z++){const X=z/s,j=X*l+a,Q=Math.sin(j),et=Math.cos(j);C.x=U*Q,C.y=-b*n+m,C.z=U*et,h.push(C.x,C.y,C.z),v.set(Q,P,et).normalize(),p.push(v.x,v.y,v.z),f.push(X,1-b),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const b=_[S][I],U=_[S+1][I],z=_[S+1][I+1],X=_[S][I+1];(t>0||S!==0)&&(u.push(b,U,X),A+=3),(e>0||S!==r-1)&&(u.push(U,z,X),A+=3)}c.addGroup(d,A,0),d+=A}function y(v){const C=g,A=new At,P=new R;let I=0;const S=v===!0?t:e,b=v===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*b,0),p.push(0,b,0),f.push(.5,.5),g++;const U=g;for(let z=0;z<=s;z++){const j=z/s*l+a,Q=Math.cos(j),et=Math.sin(j);P.x=S*et,P.y=m*b,P.z=S*Q,h.push(P.x,P.y,P.z),p.push(0,b,0),A.x=Q*.5+.5,A.y=et*.5*b+.5,f.push(A.x,A.y),g++}for(let z=0;z<s;z++){const X=C+z,j=U+z;v===!0?u.push(j,j+1,X):u.push(j+1,j,X),I+=3}c.addGroup(d,I,v===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vi extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Vi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ea extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new R,v=new R,C=new R;for(let A=0;A<e.length;A+=3)f(e[A+0],y),f(e[A+1],v),f(e[A+2],C),l(y,v,C,M)}function l(M,y,v,C){const A=C+1,P=[];for(let I=0;I<=A;I++){P[I]=[];const S=M.clone().lerp(v,I/A),b=y.clone().lerp(v,I/A),U=A-I;for(let z=0;z<=U;z++)z===0&&I===A?P[I][z]=S:P[I][z]=S.clone().lerp(b,z/U)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){const b=Math.floor(S/2);S%2===0?(p(P[I][b+1]),p(P[I+1][b]),p(P[I][b])):(p(P[I][b+1]),p(P[I+1][b+1]),p(P[I+1][b]))}}function c(M){const y=new R;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(M),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const M=new R;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const v=m(M)/2/Math.PI+.5,C=d(M)/Math.PI+.5;o.push(v,1-C)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){const y=o[M+0],v=o[M+2],C=o[M+4],A=Math.max(y,v,C),P=Math.min(y,v,C);A>.9&&P<.1&&(y<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function f(M,y){const v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const M=new R,y=new R,v=new R,C=new R,A=new At,P=new At,I=new At;for(let S=0,b=0;S<r.length;S+=9,b+=6){M.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(o[b+0],o[b+1]),P.set(o[b+2],o[b+3]),I.set(o[b+4],o[b+5]),C.copy(M).add(y).add(v).divideScalar(3);const U=m(C);_(A,b+0,M,U),_(P,b+2,y,U),_(I,b+4,v,U)}}function _(M,y,v,C){C<0&&M.x===1&&(o[y]=M.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ea(t.vertices,t.indices,t.radius,t.details)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],p=n[s+1]-u,f=(o-u)/p;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new At:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new R,s=[],r=[],o=[],a=new R,l=new he;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gl extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*u-f*h+this.aX,c=p*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dh extends gl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let p=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;p*=u,f*=u,s(o,a,p,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const nr=new R,no=new ba,io=new ba,so=new ba;class wr extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(nr.subVectors(s[0],s[1]).add(s[0]),c=nr);const h=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),no.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,g,_,m),io.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,g,_,m),so.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),io.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),so.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(no.calc(l),io.calc(l),so.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function fh(i,t){const e=1-i;return e*e*t}function ph(i,t){return 2*(1-i)*i*t}function mh(i,t){return i*i*t}function xs(i,t,e,n){return fh(i,t)+ph(i,e)+mh(i,n)}function gh(i,t){const e=1-i;return e*e*e*t}function _h(i,t){const e=1-i;return 3*e*e*i*t}function vh(i,t){return 3*(1-i)*i*i*t}function xh(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return gh(i,t)+_h(i,e)+vh(i,n)+xh(i,s)}class Mh extends In{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,s.x,r.x,o.x,a.x),Ms(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sh extends In{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ms(t,s.x,r.x,o.x,a.x),Ms(t,s.y,r.y,o.y,a.y),Ms(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yh extends In{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eh extends In{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bh extends In{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _l extends In{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(xs(t,s.x,r.x,o.x),xs(t,s.y,r.y,o.y),xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Th extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(cc(a,l.x,c.x,u.x,h.x),cc(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var wh=Object.freeze({__proto__:null,ArcCurve:dh,CatmullRomCurve3:wr,CubicBezierCurve:Mh,CubicBezierCurve3:Sh,EllipseCurve:gl,LineCurve:yh,LineCurve3:Eh,QuadraticBezierCurve:bh,QuadraticBezierCurve3:_l,SplineCurve:Th});class Sr extends Ea{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sr(t.radius,t.detail)}}class Ta extends fe{constructor(t=[new At(0,-.5),new At(.5,0),new At(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Zt(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],u=1/e,h=new R,p=new At,f=new R,g=new R,_=new R;let m=0,d=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-m,f.z=d*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,d=t[M+1].y-t[M].y,f.x=d*1,f.y=-m,f.z=d*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let M=0;M<=e;M++){const y=n+M*u*s,v=Math.sin(y),C=Math.cos(y);for(let A=0;A<=t.length-1;A++){h.x=t[A].x*v,h.y=t[A].y,h.z=t[A].x*C,o.push(h.x,h.y,h.z),p.x=M/e,p.y=A/(t.length-1),a.push(p.x,p.y);const P=l[3*A+0]*v,I=l[3*A+1],S=l[3*A+0]*C;c.push(P,I,S)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const v=y+M*t.length,C=v,A=v+t.length,P=v+t.length+1,I=v+1;r.push(C,A,I),r.push(P,I,A)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.points,t.segments,t.phiStart,t.phiLength)}}class Ye extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,p=e/l,f=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*p-o;for(let y=0;y<c;y++){const v=y*h-r;g.push(v,-M,0),_.push(0,0,1),m.push(y/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const y=M+c*d,v=M+c*(d+1),C=M+1+c*(d+1),A=M+1+c*d;f.push(y,v,A),f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.widthSegments,t.heightSegments)}}class wa extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const p=(e-t)/s,f=new R,g=new At;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=r+m/n*o;f.x=h*Math.cos(d),f.y=h*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=p}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const M=d+m,y=M,v=M+n+1,C=M+n+2,A=M+1;a.push(y,v,A),a.push(v,C,A)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class mi extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,p=new R,f=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],y=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const A=C/e;h.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(A+v,1-y),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<e;M++){const y=u[d][M+1],v=u[d][M],C=u[d+1][M],A=u[d+1][M+1];(d!==0||o>0)&&f.push(y,v,A),(d!==n-1||l<Math.PI)&&f.push(v,C,A)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ar extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new R,h=new R,p=new R;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(_),h.y=(t+e*Math.cos(m))*Math.sin(_),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(_),u.y=t*Math.sin(_),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,d=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(_,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rr extends fe{constructor(t=new _l(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new At;let u=new R;const h=[],p=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xt(h,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),M(),d()}function m(y){u=t.getPointAt(y/e,u);const v=o.normals[y],C=o.binormals[y];for(let A=0;A<=s;A++){const P=A/s*Math.PI*2,I=Math.sin(P),S=-Math.cos(P);l.x=S*v.x+I*C.x,l.y=S*v.y+I*C.y,l.z=S*v.z+I*C.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function d(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const C=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),P=(s+1)*y+v,I=(s+1)*(y-1)+v;g.push(C,A,I),g.push(A,P,I)}}function M(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)c.x=y/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Rr(new wh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Qt extends is{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ah extends is{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rh extends is{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vl extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ch extends vl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ro=new he,lc=new R,uc=new R;class Ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ma,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lc.setFromMatrixPosition(t.matrixWorld),e.position.copy(lc),uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uc),e.updateMatrixWorld(),ro.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ro,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ro)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xl extends hl{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Lh extends Ph{constructor(){super(new xl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hc extends vl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dh extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function dc(i,t,e,n){const s=Ih(n);switch(e){case Zc:return i*t;case fa:return i*t/s.components*s.byteLength;case pa:return i*t/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case ma:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case ga:return i*t*4/s.components*s.byteLength;case lr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:case Do:return Math.max(i,16)*Math.max(t,8)/4;case Co:case Lo:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Zo:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ih(i){switch(i){case Mn:case Yc:return{byteLength:1,components:1};case ys:case Kc:case Cs:return{byteLength:2,components:1};case ha:case da:return{byteLength:2,components:4};case fi:case ua:case vn:return{byteLength:4,components:1};case $c:case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:la}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=la);function Ml(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Uh(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<h.length;f++){const g=h[p],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,h[p]=_)}h.length=p+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fh=`#ifdef USE_ALPHAHASH
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
#endif`,Oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
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
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kh=`#ifdef USE_IRIDESCENCE
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
#endif`,$h=`#ifdef USE_BUMPMAP
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sd=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yd=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wd=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dd=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Od=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,df=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_f=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mf=`float getShadowMask() {
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
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,Tf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cf=`#ifdef USE_TRANSMISSION
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
#endif`,Pf=`#ifdef USE_TRANSMISSION
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
#endif`,Lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ff=`uniform sampler2D t2D;
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
}`,Of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`#include <common>
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
}`,Hf=`#if DEPTH_PACKING == 3200
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
}`,Vf=`#define DISTANCE
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
}`,Wf=`#define DISTANCE
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
}`,Xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yf=`uniform float scale;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,$f=`#include <common>
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Zf=`#define LAMBERT
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
}`,jf=`#define LAMBERT
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
}`,Qf=`#define MATCAP
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
}`,tp=`#define MATCAP
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
}`,ep=`#define NORMAL
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
}`,np=`#define NORMAL
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
}`,ip=`#define PHONG
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
}`,sp=`#define PHONG
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
}`,rp=`#define STANDARD
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
}`,op=`#define STANDARD
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
}`,ap=`#define TOON
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
}`,cp=`#define TOON
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
}`,lp=`uniform float size;
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
}`,up=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,dp=`uniform vec3 color;
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
}`,fp=`uniform float rotation;
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
}`,pp=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Nh,alphahash_pars_fragment:Fh,alphamap_fragment:Oh,alphamap_pars_fragment:Bh,alphatest_fragment:zh,alphatest_pars_fragment:kh,aomap_fragment:Gh,aomap_pars_fragment:Hh,batching_pars_vertex:Vh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:qh,bsdfs:Yh,iridescence_fragment:Kh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:jh,clipping_planes_vertex:Qh,color_fragment:td,color_pars_fragment:ed,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:od,displacementmap_pars_vertex:ad,displacementmap_vertex:cd,emissivemap_fragment:ld,emissivemap_pars_fragment:ud,colorspace_fragment:hd,colorspace_pars_fragment:dd,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Ad,envmap_vertex:_d,fog_vertex:vd,fog_pars_vertex:xd,fog_fragment:Md,fog_pars_fragment:Sd,gradientmap_pars_fragment:yd,lightmap_pars_fragment:Ed,lights_lambert_fragment:bd,lights_lambert_pars_fragment:Td,lights_pars_begin:wd,lights_toon_fragment:Rd,lights_toon_pars_fragment:Cd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Ld,lights_physical_fragment:Dd,lights_physical_pars_fragment:Id,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Fd,logdepthbuf_fragment:Od,logdepthbuf_pars_fragment:Bd,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:kd,map_fragment:Gd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:qd,morphinstance_vertex:Yd,morphcolor_vertex:Kd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Zd,normal_fragment_begin:jd,normal_fragment_maps:Qd,normal_pars_fragment:tf,normal_pars_vertex:ef,normal_vertex:nf,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:of,clearcoat_pars_fragment:af,iridescence_pars_fragment:cf,opaque_fragment:lf,packing:uf,premultiplied_alpha_fragment:hf,project_vertex:df,dithering_fragment:ff,dithering_pars_fragment:pf,roughnessmap_fragment:mf,roughnessmap_pars_fragment:gf,shadowmap_pars_fragment:_f,shadowmap_pars_vertex:vf,shadowmap_vertex:xf,shadowmask_pars_fragment:Mf,skinbase_vertex:Sf,skinning_pars_vertex:yf,skinning_vertex:Ef,skinnormal_vertex:bf,specularmap_fragment:Tf,specularmap_pars_fragment:wf,tonemapping_fragment:Af,tonemapping_pars_fragment:Rf,transmission_fragment:Cf,transmission_pars_fragment:Pf,uv_pars_fragment:Lf,uv_pars_vertex:Df,uv_vertex:If,worldpos_vertex:Uf,background_vert:Nf,background_frag:Ff,backgroundCube_vert:Of,backgroundCube_frag:Bf,cube_vert:zf,cube_frag:kf,depth_vert:Gf,depth_frag:Hf,distanceRGBA_vert:Vf,distanceRGBA_frag:Wf,equirect_vert:Xf,equirect_frag:qf,linedashed_vert:Yf,linedashed_frag:Kf,meshbasic_vert:$f,meshbasic_frag:Jf,meshlambert_vert:Zf,meshlambert_frag:jf,meshmatcap_vert:Qf,meshmatcap_frag:tp,meshnormal_vert:ep,meshnormal_frag:np,meshphong_vert:ip,meshphong_frag:sp,meshphysical_vert:rp,meshphysical_frag:op,meshtoon_vert:ap,meshtoon_frag:cp,points_vert:lp,points_frag:up,shadow_vert:hp,shadow_frag:dp,sprite_vert:fp,sprite_frag:pp},St={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},gn={basic:{uniforms:Be([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Be([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Be([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Be([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Be([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Be([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Be([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Be([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Be([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Be([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Be([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Be([St.common,St.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Be([St.lights,St.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};gn.physical={uniforms:Be([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const ir={r:0,b:0,g:0},si=new pn,mp=new he;function gp(i,t,e,n,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,u,h=null,p=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const C=g(y);C===null?d(a,l):C&&C.isColor&&(d(C,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===Tr)?(u===void 0&&(u=new me(new Jn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),si.copy(v.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mp.makeRotationFromEuler(si)),u.material.toneMapped=re.getTransfer(C.colorSpace)!==de,(h!==C||p!==C.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=C,p=C.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new me(new Ye(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=re.getTransfer(C.colorSpace)!==de,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||p!==C.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=C,p=C.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(ir,ll(i)),n.buffers.color.setClear(ir.r,ir.g,ir.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(a,l)},render:_,addToRenderList:m,dispose:M}}function _p(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(b,U,z,X,j){let Q=!1;const et=h(X,z,U);r!==et&&(r=et,c(r.object)),Q=f(b,X,z,j),Q&&g(b,X,z,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,v(b,U,z,X),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,U,z){const X=z.wireframe===!0;let j=n[b.id];j===void 0&&(j={},n[b.id]=j);let Q=j[U.id];Q===void 0&&(Q={},j[U.id]=Q);let et=Q[X];return et===void 0&&(et=p(l()),Q[X]=et),et}function p(b){const U=[],z=[],X=[];for(let j=0;j<e;j++)U[j]=0,z[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:X,object:b,attributes:{},index:null}}function f(b,U,z,X){const j=r.attributes,Q=U.attributes;let et=0;const rt=z.getAttributes();for(const J in rt)if(rt[J].location>=0){const vt=j[J];let It=Q[J];if(It===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(It=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(It=b.instanceColor)),vt===void 0||vt.attribute!==It||It&&vt.data!==It.data)return!0;et++}return r.attributesNum!==et||r.index!==X}function g(b,U,z,X){const j={},Q=U.attributes;let et=0;const rt=z.getAttributes();for(const J in rt)if(rt[J].location>=0){let vt=Q[J];vt===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(vt=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(vt=b.instanceColor));const It={};It.attribute=vt,vt&&vt.data&&(It.data=vt.data),j[J]=It,et++}r.attributes=j,r.attributesNum=et,r.index=X}function _(){const b=r.newAttributes;for(let U=0,z=b.length;U<z;U++)b[U]=0}function m(b){d(b,0)}function d(b,U){const z=r.newAttributes,X=r.enabledAttributes,j=r.attributeDivisors;z[b]=1,X[b]===0&&(i.enableVertexAttribArray(b),X[b]=1),j[b]!==U&&(i.vertexAttribDivisor(b,U),j[b]=U)}function M(){const b=r.newAttributes,U=r.enabledAttributes;for(let z=0,X=U.length;z<X;z++)U[z]!==b[z]&&(i.disableVertexAttribArray(z),U[z]=0)}function y(b,U,z,X,j,Q,et){et===!0?i.vertexAttribIPointer(b,U,z,j,Q):i.vertexAttribPointer(b,U,z,X,j,Q)}function v(b,U,z,X){_();const j=X.attributes,Q=z.getAttributes(),et=U.defaultAttributeValues;for(const rt in Q){const J=Q[rt];if(J.location>=0){let lt=j[rt];if(lt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),lt!==void 0){const vt=lt.normalized,It=lt.itemSize,Ht=t.get(lt);if(Ht===void 0)continue;const ee=Ht.buffer,le=Ht.type,jt=Ht.bytesPerElement,tt=le===i.INT||le===i.UNSIGNED_INT||lt.gpuType===ua;if(lt.isInterleavedBufferAttribute){const st=lt.data,Et=st.stride,Ft=lt.offset;if(st.isInstancedInterleavedBuffer){for(let Ct=0;Ct<J.locationSize;Ct++)d(J.location+Ct,st.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ct=0;Ct<J.locationSize;Ct++)m(J.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Ct=0;Ct<J.locationSize;Ct++)y(J.location+Ct,It/J.locationSize,le,vt,Et*jt,(Ft+It/J.locationSize*Ct)*jt,tt)}else{if(lt.isInstancedBufferAttribute){for(let st=0;st<J.locationSize;st++)d(J.location+st,lt.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let st=0;st<J.locationSize;st++)m(J.location+st);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let st=0;st<J.locationSize;st++)y(J.location+st,It/J.locationSize,le,vt,It*jt,It/J.locationSize*st*jt,tt)}}else if(et!==void 0){const vt=et[rt];if(vt!==void 0)switch(vt.length){case 2:i.vertexAttrib2fv(J.location,vt);break;case 3:i.vertexAttrib3fv(J.location,vt);break;case 4:i.vertexAttrib4fv(J.location,vt);break;default:i.vertexAttrib1fv(J.location,vt)}}}}M()}function C(){I();for(const b in n){const U=n[b];for(const z in U){const X=U[z];for(const j in X)u(X[j].object),delete X[j];delete U[z]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const z in U){const X=U[z];for(const j in X)u(X[j].object),delete X[j];delete U[z]}delete n[b.id]}function P(b){for(const U in n){const z=n[U];if(z[b.id]===void 0)continue;const X=z[b.id];for(const j in X)u(X[j].object),delete X[j];delete z[b.id]}}function I(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function vp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function l(c,u,h,p){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==dn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Cs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==vn&&!I)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:A}}function Mp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ai,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const f=h.length!==0||p||n!==0||s;return s=p,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,y=M*4;let v=d.clippingState||null;l.value=v,v=u(g,p,y,f);for(let C=0;C!==y;++C)v[C]=e[C];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=f+_*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Sp(i){let t=new WeakMap;function e(o,a){return a===wo?o.mapping=qi:a===Ao&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wo||a===Ao)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ih(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ki=4,fc=[.125,.215,.35,.446,.526,.582],ui=20,oo=new xl,pc=new Gt;let ao=null,co=0,lo=0,uo=!1;const ci=(1+Math.sqrt(5))/2,Oi=1/ci,mc=[new R(-ci,Oi,0),new R(ci,Oi,0),new R(-Oi,0,ci),new R(Oi,0,ci),new R(0,ci,-Oi),new R(0,ci,Oi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],yp=new R;class gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=yp}=r;ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,co,lo),this._renderer.xr.enabled=uo,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Cs,format:dn,colorSpace:Ki,depthBuffer:!1},s=_c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(r)),this._blurMaterial=bp(r,t,e)}return s}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,s,r){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(pc),h.toneMapping=qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const _=new Mr({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new me(new Jn,_);let d=!1;const M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,d=!0):(_.color.copy(pc),d=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const C=this._cubeSize;sr(s,v*C,y>2?C:0,C,C),h.setRenderTarget(s),d&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=p,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;sr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mc[(s-r-1)%mc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new me(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ui-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ui;m>ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const d=[];let M=0;for(let P=0;P<ui;++P){const I=P/_,S=Math.exp(-I*I/2);d.push(S),P===0?M+=S:P<m&&(M+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;const v=this._sizeLods[s],C=3*v*(s>y-ki?s-y+ki:0),A=4*(this._cubeSize-v);sr(e,C,A,3*v,2*v),l.setRenderTarget(e),l.render(h,oo)}}function Ep(i){const t=[],e=[],n=[];let s=i;const r=i-ki+1+fc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ki?l=fc[o-i+ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(d*g*f);for(let A=0;A<f;A++){const P=A%3*2/3-1,I=A>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];M.set(S,_*g*A),y.set(p,m*g*A);const b=[A,A,A,A,A,A];v.set(b,d*g*A)}const C=new fe;C.setAttribute("position",new Le(M,_)),C.setAttribute("uv",new Le(y,m)),C.setAttribute("faceIndex",new Le(v,d)),t.push(C),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function _c(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=Tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bp(i,t,e){const n=new Float32Array(ui),s=new R(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vc(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function xc(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Tp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wo||l===Ao,u=l===qi||l===Yi;if(c||u){let h=t.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new gc(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new gc(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function wp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ap(i,t,e,n){const s={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(h){const p=h.attributes;for(const f in p)t.update(p[f],i.ARRAY_BUFFER)}function c(h){const p=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let y=0,v=M.length;y<v;y+=3){const C=M[y+0],A=M[y+1],P=M[y+2];p.push(C,A,A,P,P,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const C=y+0,A=y+1,P=y+2;p.push(C,A,A,P,P,C)}}else return;const m=new(nl(p)?cl:al)(p,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const p=r.get(h);if(p){const f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Rp(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,f){i.drawElements(n,f,r,p*o),e.update(f,n,1)}function c(p,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,p*o,g),e.update(f,n,g))}function u(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,g);let m=0;for(let d=0;d<g;d++)m+=f[d];e.update(m,n,1)}function h(p,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<p.length;d++)c(p[d]/o,f[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,p,0,_,0,g);let d=0;for(let M=0;M<g;M++)d+=f[M]*_[M];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Cp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pp(i,t,e){const n=new WeakMap,s=new _e;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let b=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;p!==void 0&&p.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*A*4*h),I=new il(P,C,A,h);I.type=vn,I.needsUpdate=!0;const S=v*4;for(let U=0;U<h;U++){const z=d[U],X=M[U],j=y[U],Q=C*A*4*U;for(let et=0;et<z.count;et++){const rt=et*S;g===!0&&(s.fromBufferAttribute(z,et),P[Q+rt+0]=s.x,P[Q+rt+1]=s.y,P[Q+rt+2]=s.z,P[Q+rt+3]=0),_===!0&&(s.fromBufferAttribute(X,et),P[Q+rt+4]=s.x,P[Q+rt+5]=s.y,P[Q+rt+6]=s.z,P[Q+rt+7]=0),m===!0&&(s.fromBufferAttribute(j,et),P[Q+rt+8]=s.x,P[Q+rt+9]=s.y,P[Q+rt+10]=s.z,P[Q+rt+11]=j.itemSize===4?s.w:1)}}p={count:h,texture:I,size:new At(C,A)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Lp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Sl=new Ue,Mc=new pl(1,1),yl=new il,El=new Gu,bl=new dl,Sc=[],yc=[],Ec=new Float32Array(16),bc=new Float32Array(9),Tc=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cr(i,t){let e=yc[t];e===void 0&&(e=new Int32Array(t),yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function Fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Tc.set(n),i.uniformMatrix2fv(this.addr,!1,Tc),Ae(e,n)}}function Op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;bc.set(n),i.uniformMatrix3fv(this.addr,!1,bc),Ae(e,n)}}function Bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),Ae(e,n)}}function zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function Hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Mc.compareFunction=el,r=Mc):r=Sl,e.setTexture2D(t||r,s)}function Kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||El,s)}function $p(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bl,s)}function Jp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yl,s)}function Zp(i){switch(i){case 5126:return Dp;case 35664:return Ip;case 35665:return Up;case 35666:return Np;case 35674:return Fp;case 35675:return Op;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Vp;case 36294:return Wp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return Kp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return Jp}}function jp(i,t){i.uniform1fv(this.addr,t)}function Qp(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function tm(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function em(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function nm(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function im(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function sm(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function rm(i,t){i.uniform1iv(this.addr,t)}function om(i,t){i.uniform2iv(this.addr,t)}function am(i,t){i.uniform3iv(this.addr,t)}function cm(i,t){i.uniform4iv(this.addr,t)}function lm(i,t){i.uniform1uiv(this.addr,t)}function um(i,t){i.uniform2uiv(this.addr,t)}function hm(i,t){i.uniform3uiv(this.addr,t)}function dm(i,t){i.uniform4uiv(this.addr,t)}function fm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sl,r[o])}function pm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||El,r[o])}function mm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bl,r[o])}function gm(i,t,e){const n=this.cache,s=t.length,r=Cr(e,s);we(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yl,r[o])}function _m(i){switch(i){case 5126:return jp;case 35664:return Qp;case 35665:return tm;case 35666:return em;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return um;case 36295:return hm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}class vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zp(e.type)}}class xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}}class Mm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ho=/(\w+)(\])?(\[|\.)?/g;function wc(i,t){i.seq.push(t),i.map[t.id]=t}function Sm(i,t,e){const n=i.name,s=n.length;for(ho.lastIndex=0;;){const r=ho.exec(n),o=ho.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wc(e,c===void 0?new vm(a,i,t):new xm(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Mm(a),wc(e,h)),e=h}}}class fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Sm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ym=37297;let Em=0;function bm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Rc=new Yt;function Tm(i){re._getMatrix(Rc,re.workingColorSpace,i);const t=`mat3( ${Rc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case _r:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+bm(i.getShaderSource(t),a)}else return r}function wm(i,t){const e=Tm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Am(i,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case iu:e="Cineon";break;case Xc:e="ACESFilmic";break;case ru:e="AgX";break;case ou:e="Neutral";break;case su:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rr=new R;function Rm(){re.getLuminanceCoefficients(rr);const i=rr.x.toFixed(4),t=rr.y.toFixed(4),e=rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function Pm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function gs(i){return i!==""}function Pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(Dm,Um)}const Im=new Map;function Um(i,t){let e=Kt[t];if(e===void 0){const n=Im.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sa(e)}const Nm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(i){return i.replace(Nm,Fm)}function Fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Om(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Bm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Yi&&(t="ENVMAP_MODE_REFRACTION"),t}function km(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ql:t="ENVMAP_BLENDING_MIX";break;case tu:t="ENVMAP_BLENDING_ADD";break}return t}function Gm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Om(e),c=Bm(e),u=zm(e),h=km(e),p=Gm(e),f=Cm(e),g=Pm(r),_=s.createProgram();let m,d,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(gs).join(`
`),d.length>0&&(d+=`
`)):(m=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),d=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==qn?Am("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),o=sa(o),o=Pc(o,e),o=Lc(o,e),a=sa(a),a=Pc(a,e),a=Lc(a,e),o=Dc(o),a=Dc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+m+o,v=M+d+a,C=Ac(s,s.VERTEX_SHADER,y),A=Ac(s,s.FRAGMENT_SHADER,v);s.attachShader(_,C),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(U){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(C)||"",j=s.getShaderInfoLog(A)||"",Q=z.trim(),et=X.trim(),rt=j.trim();let J=!0,lt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,A);else{const vt=Cc(s,C,"vertex"),It=Cc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+vt+`
`+It)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(et===""||rt==="")&&(lt=!1);lt&&(U.diagnostics={runnable:J,programLog:Q,vertexShader:{log:et,prefix:m},fragmentShader:{log:rt,prefix:d}})}s.deleteShader(C),s.deleteShader(A),I=new fr(s,_),S=Lm(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,ym)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Em++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let Vm=0;class Wm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Xm(t),e.set(t,n)),n}}class Xm{constructor(t){this.id=Vm++,this.code=t,this.usedTimes=0}}function qm(i,t,e,n,s,r,o){const a=new rl,l=new Wm,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,U,z,X){const j=z.fog,Q=X.geometry,et=S.isMeshStandardMaterial?z.environment:null,rt=(S.isMeshStandardMaterial?e:t).get(S.envMap||et),J=rt&&rt.mapping===Tr?rt.image.height:null,lt=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,It=vt!==void 0?vt.length:0;let Ht=0;Q.morphAttributes.position!==void 0&&(Ht=1),Q.morphAttributes.normal!==void 0&&(Ht=2),Q.morphAttributes.color!==void 0&&(Ht=3);let ee,le,jt,tt;if(lt){const ne=gn[lt];ee=ne.vertexShader,le=ne.fragmentShader}else ee=S.vertexShader,le=S.fragmentShader,l.update(S),jt=l.getVertexShaderID(S),tt=l.getFragmentShaderID(S);const st=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Ft=X.isInstancedMesh===!0,Ct=X.isBatchedMesh===!0,kt=!!S.map,Se=!!S.matcap,D=!!rt,ie=!!S.aoMap,Ot=!!S.lightMap,Ut=!!S.bumpMap,nt=!!S.normalMap,qt=!!S.displacementMap,Rt=!!S.emissiveMap,Vt=!!S.metalnessMap,pe=!!S.roughnessMap,te=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,V=S.iridescence>0,B=S.sheen>0,q=S.transmission>0,W=te&&!!S.anisotropyMap,ht=T&&!!S.clearcoatMap,ot=T&&!!S.clearcoatNormalMap,bt=T&&!!S.clearcoatRoughnessMap,yt=V&&!!S.iridescenceMap,ct=V&&!!S.iridescenceThicknessMap,gt=B&&!!S.sheenColorMap,Nt=B&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,ft=!!S.specularColorMap,Bt=!!S.specularIntensityMap,N=q&&!!S.transmissionMap,dt=q&&!!S.thicknessMap,pt=!!S.gradientMap,Tt=!!S.alphaMap,ut=S.alphaTest>0,it=!!S.alphaHash,Pt=!!S.extensions;let zt=qn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(zt=i.toneMapping);const se={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:le,defines:S.defines,customVertexShaderID:jt,customFragmentShaderID:tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ct,batchingColor:Ct&&X._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&X.instanceColor!==null,instancingMorph:Ft&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ki,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:Se,envMap:D,envMapMode:D&&rt.mapping,envMapCubeUVHeight:J,aoMap:ie,lightMap:Ot,bumpMap:Ut,normalMap:nt,displacementMap:p&&qt,emissiveMap:Rt,normalMapObjectSpace:nt&&S.normalMapType===uu,normalMapTangentSpace:nt&&S.normalMapType===tl,metalnessMap:Vt,roughnessMap:pe,anisotropy:te,anisotropyMap:W,clearcoat:T,clearcoatMap:ht,clearcoatNormalMap:ot,clearcoatRoughnessMap:bt,dispersion:x,iridescence:V,iridescenceMap:yt,iridescenceThicknessMap:ct,sheen:B,sheenColorMap:gt,sheenRoughnessMap:Nt,specularMap:Mt,specularColorMap:ft,specularIntensityMap:Bt,transmission:q,transmissionMap:N,thicknessMap:dt,gradientMap:pt,opaque:S.transparent===!1&&S.blending===Gi&&S.alphaToCoverage===!1,alphaMap:Tt,alphaTest:ut,alphaHash:it,combine:S.combine,mapUv:kt&&_(S.map.channel),aoMapUv:ie&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:Ut&&_(S.bumpMap.channel),normalMapUv:nt&&_(S.normalMap.channel),displacementMapUv:qt&&_(S.displacementMap.channel),emissiveMapUv:Rt&&_(S.emissiveMap.channel),metalnessMapUv:Vt&&_(S.metalnessMap.channel),roughnessMapUv:pe&&_(S.roughnessMap.channel),anisotropyMapUv:W&&_(S.anisotropyMap.channel),clearcoatMapUv:ht&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(S.sheenRoughnessMap.channel),specularMapUv:Mt&&_(S.specularMap.channel),specularColorMapUv:ft&&_(S.specularColorMap.channel),specularIntensityMapUv:Bt&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:dt&&_(S.thicknessMap.channel),alphaMapUv:Tt&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(nt||te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Q.attributes.uv&&(kt||Tt),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Et,skinning:X.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&re.getTransfer(S.map.colorSpace)===de,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&re.getTransfer(S.emissiveMap.colorSpace)===de,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===xe,flipSided:S.side===Ge,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&S.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function d(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(M(b,S),y(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const b=g[S.type];let U;if(b){const z=gn[b];U=ul.clone(z.uniforms)}else U=S.uniforms;return U}function C(S,b){let U;for(let z=0,X=u.length;z<X;z++){const j=u[z];if(j.cacheKey===b){U=j,++U.usedTimes;break}}return U===void 0&&(U=new Hm(i,b,S,r),u.push(U)),U}function A(S){if(--S.usedTimes===0){const b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function P(S){l.remove(S)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:u,dispose:I}}function Ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,p,f,g,_,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:p,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,p,f,g,_,m){const d=o(h,p,f,g,_,m);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):e.push(d)}function l(h,p,f,g,_,m){const d=o(h,p,f,g,_,m);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,p){e.length>1&&e.sort(h||Km),n.length>1&&n.sort(p||Uc),s.length>1&&s.sort(p||Uc)}function u(){for(let h=t,p=i.length;h<p;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function $m(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Nc,i.set(n,[o])):s>=r.length?(o=new Nc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Gt};break;case"SpotLight":e={position:new R,direction:new R,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jm=0;function Qm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function t0(i){const t=new Jm,e=Zm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new he,o=new he;function a(c){let u=0,h=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,d=0,M=0,y=0,v=0,C=0,A=0,P=0;c.sort(Qm);for(let S=0,b=c.length;S<b;S++){const U=c[S],z=U.color,X=U.intensity,j=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)u+=z.r*X,h+=z.g*X,p+=z.b*X;else if(U.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(U.sh.coefficients[et],X);P++}else if(U.isDirectionalLight){const et=t.get(U);if(et.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const rt=U.shadow,J=e.get(U);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=U.shadow.matrix,M++}n.directional[f]=et,f++}else if(U.isSpotLight){const et=t.get(U);et.position.setFromMatrixPosition(U.matrixWorld),et.color.copy(z).multiplyScalar(X),et.distance=j,et.coneCos=Math.cos(U.angle),et.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),et.decay=U.decay,n.spot[_]=et;const rt=U.shadow;if(U.map&&(n.spotLightMap[C]=U.map,C++,rt.updateMatrices(U),U.castShadow&&A++),n.spotLightMatrix[_]=rt.matrix,U.castShadow){const J=e.get(U);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=Q,v++}_++}else if(U.isRectAreaLight){const et=t.get(U);et.color.copy(z).multiplyScalar(X),et.halfWidth.set(U.width*.5,0,0),et.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=et,m++}else if(U.isPointLight){const et=t.get(U);if(et.color.copy(U.color).multiplyScalar(U.intensity),et.distance=U.distance,et.decay=U.decay,U.castShadow){const rt=U.shadow,J=e.get(U);J.shadowIntensity=rt.intensity,J.shadowBias=rt.bias,J.shadowNormalBias=rt.normalBias,J.shadowRadius=rt.radius,J.shadowMapSize=rt.mapSize,J.shadowCameraNear=rt.camera.near,J.shadowCameraFar=rt.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=U.shadow.matrix,y++}n.point[g]=et,g++}else if(U.isHemisphereLight){const et=t.get(U);et.skyColor.copy(U.color).multiplyScalar(X),et.groundColor.copy(U.groundColor).multiplyScalar(X),n.hemi[d]=et,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==v||I.numSpotMaps!==C||I.numLightProbes!==P)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=v,I.numSpotMaps=C,I.numLightProbes=P,n.version=jm++)}function l(c,u){let h=0,p=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let d=0,M=c.length;d<M;d++){const y=c[d];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Fc(i){const t=new t0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function e0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Fc(i),t.set(s,[a])):r>=o.length?(a=new Fc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
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
}`;function s0(i,t,e){let n=new Ma;const s=new At,r=new At,o=new _e,a=new Ah({depthPacking:lu}),l=new Rh,c={},u=e.maxTextureSize,h={[Kn]:Ge,[Ge]:Kn,[xe]:xe},p=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const g=new fe;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let d=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Xn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const X=d!==Rn&&this.type===Rn,j=d===Rn&&this.type!==Rn;for(let Q=0,et=A.length;Q<et;Q++){const rt=A[Q],J=rt.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const lt=J.getFrameExtents();if(s.multiply(lt),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,J.mapSize.y=r.y)),J.map===null||X===!0||j===!0){const It=this.type!==Rn?{minFilter:$e,magFilter:$e}:{};J.map!==null&&J.map.dispose(),J.map=new pi(s.x,s.y,It),J.map.texture.name=rt.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const vt=J.getViewportCount();for(let It=0;It<vt;It++){const Ht=J.getViewport(It);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(o),J.updateMatrices(rt,It),n=J.getFrustum(),v(P,I,J.camera,rt,this.type)}J.isPointLightShadow!==!0&&this.type===Rn&&M(J,I),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,U)};function M(A,P){const I=t.update(_);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new pi(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,p,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,f,_,null)}function y(A,P,I,S){let b=null;const U=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=I.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=b.uuid,X=P.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Q=j[X];Q===void 0&&(Q=b.clone(),j[X]=Q,P.addEventListener("dispose",C)),b=Q}if(b.visible=P.visible,b.wireframe=P.wireframe,S===Rn?b.side=P.shadowSide!==null?P.shadowSide:P.side:b.side=P.shadowSide!==null?P.shadowSide:h[P.side],b.alphaMap=P.alphaMap,b.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,b.map=P.map,b.clipShadows=P.clipShadows,b.clippingPlanes=P.clippingPlanes,b.clipIntersection=P.clipIntersection,b.displacementMap=P.displacementMap,b.displacementScale=P.displacementScale,b.displacementBias=P.displacementBias,b.wireframeLinewidth=P.wireframeLinewidth,b.linewidth=P.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=I}return b}function v(A,P,I,S,b){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const X=t.update(A),j=A.material;if(Array.isArray(j)){const Q=X.groups;for(let et=0,rt=Q.length;et<rt;et++){const J=Q[et],lt=j[J.materialIndex];if(lt&&lt.visible){const vt=y(A,lt,S,b);A.onBeforeShadow(i,A,P,I,X,vt,J),i.renderBufferDirect(I,null,X,vt,A,J),A.onAfterShadow(i,A,P,I,X,vt,J)}}}else if(j.visible){const Q=y(A,j,S,b);A.onBeforeShadow(i,A,P,I,X,Q,null),i.renderBufferDirect(I,null,X,Q,A,null),A.onAfterShadow(i,A,P,I,X,Q,null)}}const z=A.children;for(let X=0,j=z.length;X<j;X++)v(z[X],P,I,S,b)}function C(A){A.target.removeEventListener("dispose",C);for(const I in c){const S=c[I],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const r0={[xo]:Mo,[So]:bo,[yo]:To,[Xi]:Eo,[Mo]:xo,[bo]:So,[To]:yo,[Eo]:Xi};function o0(i,t){function e(){let N=!1;const dt=new _e;let pt=null;const Tt=new _e(0,0,0,0);return{setMask:function(ut){pt!==ut&&!N&&(i.colorMask(ut,ut,ut,ut),pt=ut)},setLocked:function(ut){N=ut},setClear:function(ut,it,Pt,zt,se){se===!0&&(ut*=zt,it*=zt,Pt*=zt),dt.set(ut,it,Pt,zt),Tt.equals(dt)===!1&&(i.clearColor(ut,it,Pt,zt),Tt.copy(dt))},reset:function(){N=!1,pt=null,Tt.set(-1,0,0,0)}}}function n(){let N=!1,dt=!1,pt=null,Tt=null,ut=null;return{setReversed:function(it){if(dt!==it){const Pt=t.get("EXT_clip_control");it?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),dt=it;const zt=ut;ut=null,this.setClear(zt)}},getReversed:function(){return dt},setTest:function(it){it?st(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(it){pt!==it&&!N&&(i.depthMask(it),pt=it)},setFunc:function(it){if(dt&&(it=r0[it]),Tt!==it){switch(it){case xo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case To:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Tt=it}},setLocked:function(it){N=it},setClear:function(it){ut!==it&&(dt&&(it=1-it),i.clearDepth(it),ut=it)},reset:function(){N=!1,pt=null,Tt=null,ut=null,dt=!1}}}function s(){let N=!1,dt=null,pt=null,Tt=null,ut=null,it=null,Pt=null,zt=null,se=null;return{setTest:function(ne){N||(ne?st(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(ne){dt!==ne&&!N&&(i.stencilMask(ne),dt=ne)},setFunc:function(ne,rn,Ne){(pt!==ne||Tt!==rn||ut!==Ne)&&(i.stencilFunc(ne,rn,Ne),pt=ne,Tt=rn,ut=Ne)},setOp:function(ne,rn,Ne){(it!==ne||Pt!==rn||zt!==Ne)&&(i.stencilOp(ne,rn,Ne),it=ne,Pt=rn,zt=Ne)},setLocked:function(ne){N=ne},setClear:function(ne){se!==ne&&(i.clearStencil(ne),se=ne)},reset:function(){N=!1,dt=null,pt=null,Tt=null,ut=null,it=null,Pt=null,zt=null,se=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},p=new WeakMap,f=[],g=null,_=!1,m=null,d=null,M=null,y=null,v=null,C=null,A=null,P=new Gt(0,0,0),I=0,S=!1,b=null,U=null,z=null,X=null,j=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,rt=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(J)[1]),et=rt>=1):J.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),et=rt>=2);let lt=null,vt={};const It=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),ee=new _e().fromArray(It),le=new _e().fromArray(Ht);function jt(N,dt,pt,Tt){const ut=new Uint8Array(4),it=i.createTexture();i.bindTexture(N,it),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<pt;Pt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Tt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(dt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return it}const tt={};tt[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Xi),Ut(!1),nt(La),st(i.CULL_FACE),ie(Xn);function st(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Et(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ft(N,dt){return h[N]!==dt?(i.bindFramebuffer(N,dt),h[N]=dt,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=dt),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Ct(N,dt){let pt=f,Tt=!1;if(N){pt=p.get(dt),pt===void 0&&(pt=[],p.set(dt,pt));const ut=N.textures;if(pt.length!==ut.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Pt=ut.length;it<Pt;it++)pt[it]=i.COLOR_ATTACHMENT0+it;pt.length=ut.length,Tt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,Tt=!0);Tt&&i.drawBuffers(pt)}function kt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Se={[li]:i.FUNC_ADD,[Fl]:i.FUNC_SUBTRACT,[Ol]:i.FUNC_REVERSE_SUBTRACT};Se[Bl]=i.MIN,Se[zl]=i.MAX;const D={[kl]:i.ZERO,[Gl]:i.ONE,[Hl]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[Kl]:i.SRC_ALPHA_SATURATE,[ql]:i.DST_COLOR,[Wl]:i.DST_ALPHA,[Vl]:i.ONE_MINUS_SRC_COLOR,[vo]:i.ONE_MINUS_SRC_ALPHA,[Yl]:i.ONE_MINUS_DST_COLOR,[Xl]:i.ONE_MINUS_DST_ALPHA,[$l]:i.CONSTANT_COLOR,[Jl]:i.ONE_MINUS_CONSTANT_COLOR,[Zl]:i.CONSTANT_ALPHA,[jl]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(N,dt,pt,Tt,ut,it,Pt,zt,se,ne){if(N===Xn){_===!0&&(Et(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),N!==Nl){if(N!==m||ne!==S){if((d!==li||v!==li)&&(i.blendEquation(i.FUNC_ADD),d=li,v=li),ne)switch(N){case Gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFunc(i.ONE,i.ONE);break;case Ia:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ua:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Da:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ia:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,C=null,A=null,P.set(0,0,0),I=0,m=N,S=ne}return}ut=ut||dt,it=it||pt,Pt=Pt||Tt,(dt!==d||ut!==v)&&(i.blendEquationSeparate(Se[dt],Se[ut]),d=dt,v=ut),(pt!==M||Tt!==y||it!==C||Pt!==A)&&(i.blendFuncSeparate(D[pt],D[Tt],D[it],D[Pt]),M=pt,y=Tt,C=it,A=Pt),(zt.equals(P)===!1||se!==I)&&(i.blendColor(zt.r,zt.g,zt.b,se),P.copy(zt),I=se),m=N,S=!1}function Ot(N,dt){N.side===xe?Et(i.CULL_FACE):st(i.CULL_FACE);let pt=N.side===Ge;dt&&(pt=!pt),Ut(pt),N.blending===Gi&&N.transparent===!1?ie(Xn):ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Tt=N.stencilWrite;a.setTest(Tt),Tt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function nt(N){N!==Il?(st(i.CULL_FACE),N!==U&&(N===La?i.cullFace(i.BACK):N===Ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),U=N}function qt(N){N!==z&&(et&&i.lineWidth(N),z=N)}function Rt(N,dt,pt){N?(st(i.POLYGON_OFFSET_FILL),(X!==dt||j!==pt)&&(i.polygonOffset(dt,pt),X=dt,j=pt)):Et(i.POLYGON_OFFSET_FILL)}function Vt(N){N?st(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function pe(N){N===void 0&&(N=i.TEXTURE0+Q-1),lt!==N&&(i.activeTexture(N),lt=N)}function te(N,dt,pt){pt===void 0&&(lt===null?pt=i.TEXTURE0+Q-1:pt=lt);let Tt=vt[pt];Tt===void 0&&(Tt={type:void 0,texture:void 0},vt[pt]=Tt),(Tt.type!==N||Tt.texture!==dt)&&(lt!==pt&&(i.activeTexture(pt),lt=pt),i.bindTexture(N,dt||tt[N]),Tt.type=N,Tt.texture=dt)}function T(){const N=vt[lt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(N){ee.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ee.copy(N))}function Nt(N){le.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),le.copy(N))}function Mt(N,dt){let pt=c.get(dt);pt===void 0&&(pt=new WeakMap,c.set(dt,pt));let Tt=pt.get(N);Tt===void 0&&(Tt=i.getUniformBlockIndex(dt,N.name),pt.set(N,Tt))}function ft(N,dt){const Tt=c.get(dt).get(N);l.get(dt)!==Tt&&(i.uniformBlockBinding(dt,Tt,N.__bindingPointIndex),l.set(dt,Tt))}function Bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,vt={},h={},p=new WeakMap,f=[],g=null,_=!1,m=null,d=null,M=null,y=null,v=null,C=null,A=null,P=new Gt(0,0,0),I=0,S=!1,b=null,U=null,z=null,X=null,j=null,ee.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:Et,bindFramebuffer:Ft,drawBuffers:Ct,useProgram:kt,setBlending:ie,setMaterial:Ot,setFlipSided:Ut,setCullFace:nt,setLineWidth:qt,setPolygonOffset:Rt,setScissorTest:Vt,activeTexture:pe,bindTexture:te,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:V,texImage2D:yt,texImage3D:ct,updateUBOMapping:Mt,uniformBlockBinding:ft,texStorage2D:ot,texStorage3D:bt,texSubImage2D:B,texSubImage3D:q,compressedTexSubImage2D:W,compressedTexSubImage3D:ht,scissor:gt,viewport:Nt,reset:Bt}}function a0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,u=new WeakMap;let h;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):xr("canvas")}function _(T,x,V){let B=1;const q=te(T);if((q.width>V||q.height>V)&&(B=V/Math.max(q.width,q.height)),B<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(B*q.width),ht=Math.floor(B*q.height);h===void 0&&(h=g(W,ht));const ot=x?g(W,ht):h;return ot.width=W,ot.height=ht,ot.getContext("2d").drawImage(T,0,0,W,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+W+"x"+ht+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,x,V,B,q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=x;if(x===i.RED&&(V===i.FLOAT&&(W=i.R32F),V===i.HALF_FLOAT&&(W=i.R16F),V===i.UNSIGNED_BYTE&&(W=i.R8)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.R8UI),V===i.UNSIGNED_SHORT&&(W=i.R16UI),V===i.UNSIGNED_INT&&(W=i.R32UI),V===i.BYTE&&(W=i.R8I),V===i.SHORT&&(W=i.R16I),V===i.INT&&(W=i.R32I)),x===i.RG&&(V===i.FLOAT&&(W=i.RG32F),V===i.HALF_FLOAT&&(W=i.RG16F),V===i.UNSIGNED_BYTE&&(W=i.RG8)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RG8UI),V===i.UNSIGNED_SHORT&&(W=i.RG16UI),V===i.UNSIGNED_INT&&(W=i.RG32UI),V===i.BYTE&&(W=i.RG8I),V===i.SHORT&&(W=i.RG16I),V===i.INT&&(W=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGB8UI),V===i.UNSIGNED_SHORT&&(W=i.RGB16UI),V===i.UNSIGNED_INT&&(W=i.RGB32UI),V===i.BYTE&&(W=i.RGB8I),V===i.SHORT&&(W=i.RGB16I),V===i.INT&&(W=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),V===i.UNSIGNED_INT&&(W=i.RGBA32UI),V===i.BYTE&&(W=i.RGBA8I),V===i.SHORT&&(W=i.RGBA16I),V===i.INT&&(W=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),x===i.RGBA){const ht=q?_r:re.getTransfer(B);V===i.FLOAT&&(W=i.RGBA32F),V===i.HALF_FLOAT&&(W=i.RGBA16F),V===i.UNSIGNED_BYTE&&(W=ht===de?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(T,x){let V;return T?x===null||x===fi||x===Es?V=i.DEPTH24_STENCIL8:x===vn?V=i.DEPTH32F_STENCIL8:x===ys&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===fi||x===Es?V=i.DEPTH_COMPONENT24:x===vn?V=i.DEPTH_COMPONENT32F:x===ys&&(V=i.DEPTH_COMPONENT16),V}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==$e&&T.minFilter!==_n?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){const x=T.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&u.delete(x)}function P(T){const x=T.target;x.removeEventListener("dispose",P),b(x)}function I(T){const x=n.get(T);if(x.__webglInit===void 0)return;const V=T.source,B=p.get(V);if(B){const q=B[x.__cacheKey];q.usedTimes--,q.usedTimes===0&&S(T),Object.keys(B).length===0&&p.delete(V)}n.remove(T)}function S(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const V=T.source,B=p.get(V);delete B[x.__cacheKey],o.memory.textures--}function b(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(x.__webglFramebuffer[B]))for(let q=0;q<x.__webglFramebuffer[B].length;q++)i.deleteFramebuffer(x.__webglFramebuffer[B][q]);else i.deleteFramebuffer(x.__webglFramebuffer[B]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[B])}else{if(Array.isArray(x.__webglFramebuffer))for(let B=0;B<x.__webglFramebuffer.length;B++)i.deleteFramebuffer(x.__webglFramebuffer[B]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let B=0;B<x.__webglColorRenderbuffer.length;B++)x.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[B]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=T.textures;for(let B=0,q=V.length;B<q;B++){const W=n.get(V[B]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(V[B])}n.remove(T)}let U=0;function z(){U=0}function X(){const T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function j(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Q(T,x){const V=n.get(T);if(T.isVideoTexture&&Vt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){const B=T.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(V,T,x);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function et(T,x){const V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){tt(V,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function rt(T,x){const V=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){tt(V,T,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function J(T,x){const V=n.get(T);if(T.version>0&&V.__version!==T.version){st(V,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}const lt={[gr]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Ro]:i.MIRRORED_REPEAT},vt={[$e]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Ir]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},It={[hu]:i.NEVER,[_u]:i.ALWAYS,[du]:i.LESS,[el]:i.LEQUAL,[fu]:i.EQUAL,[gu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function Ht(T,x){if(x.type===vn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===_n||x.magFilter===Ir||x.magFilter===Ns||x.magFilter===di||x.minFilter===_n||x.minFilter===Ir||x.minFilter===Ns||x.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,lt[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,lt[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,lt[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,vt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,It[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==Ns&&x.minFilter!==di||x.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const B=x.source;let q=p.get(B);q===void 0&&(q={},p.set(B,q));const W=j(x);if(W!==T.__cacheKey){q[W]===void 0&&(q[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),q[W].usedTimes++;const ht=q[T.__cacheKey];ht!==void 0&&(q[T.__cacheKey].usedTimes--,ht.usedTimes===0&&S(x)),T.__cacheKey=W,T.__webglTexture=q[W].texture}return V}function le(T,x,V){return Math.floor(Math.floor(T/V)/x)}function jt(T,x,V,B){const W=T.updateRanges;if(W.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,B,x.data);else{W.sort((ct,gt)=>ct.start-gt.start);let ht=0;for(let ct=1;ct<W.length;ct++){const gt=W[ht],Nt=W[ct],Mt=gt.start+gt.count,ft=le(Nt.start,x.width,4),Bt=le(gt.start,x.width,4);Nt.start<=Mt+1&&ft===Bt&&le(Nt.start+Nt.count-1,x.width,4)===ft?gt.count=Math.max(gt.count,Nt.start+Nt.count-gt.start):(++ht,W[ht]=Nt)}W.length=ht+1;const ot=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ct=0,gt=W.length;ct<gt;ct++){const Nt=W[ct],Mt=Math.floor(Nt.start/4),ft=Math.ceil(Nt.count/4),Bt=Mt%x.width,N=Math.floor(Mt/x.width),dt=ft,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Bt,N,dt,pt,V,B,x.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ot),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function tt(T,x,V){let B=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(B=i.TEXTURE_3D);const q=ee(T,x),W=x.source;e.bindTexture(B,T.__webglTexture,i.TEXTURE0+V);const ht=n.get(W);if(W.version!==ht.__version||q===!0){e.activeTexture(i.TEXTURE0+V);const ot=re.getPrimaries(re.workingColorSpace),bt=x.colorSpace===Wn?null:re.getPrimaries(x.colorSpace),yt=x.colorSpace===Wn||ot===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ct=_(x.image,!1,s.maxTextureSize);ct=pe(x,ct);const gt=r.convert(x.format,x.colorSpace),Nt=r.convert(x.type);let Mt=y(x.internalFormat,gt,Nt,x.colorSpace,x.isVideoTexture);Ht(B,x);let ft;const Bt=x.mipmaps,N=x.isVideoTexture!==!0,dt=ht.__version===void 0||q===!0,pt=W.dataReady,Tt=C(x,ct);if(x.isDepthTexture)Mt=v(x.format===Ts,x.type),dt&&(N?e.texStorage2D(i.TEXTURE_2D,1,Mt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Mt,ct.width,ct.height,0,gt,Nt,null));else if(x.isDataTexture)if(Bt.length>0){N&&dt&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Bt[0].width,Bt[0].height);for(let ut=0,it=Bt.length;ut<it;ut++)ft=Bt[ut],N?pt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,ft.width,ft.height,gt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,ut,Mt,ft.width,ft.height,0,gt,Nt,ft.data);x.generateMipmaps=!1}else N?(dt&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ct.width,ct.height),pt&&jt(x,ct,gt,Nt)):e.texImage2D(i.TEXTURE_2D,0,Mt,ct.width,ct.height,0,gt,Nt,ct.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Mt,Bt[0].width,Bt[0].height,ct.depth);for(let ut=0,it=Bt.length;ut<it;ut++)if(ft=Bt[ut],x.format!==dn)if(gt!==null)if(N){if(pt)if(x.layerUpdates.size>0){const Pt=dc(ft.width,ft.height,x.format,x.type);for(const zt of x.layerUpdates){const se=ft.data.subarray(zt*Pt/ft.data.BYTES_PER_ELEMENT,(zt+1)*Pt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,zt,ft.width,ft.height,1,gt,se)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,ft.width,ft.height,ct.depth,gt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Mt,ft.width,ft.height,ct.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,ft.width,ft.height,ct.depth,gt,Nt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Mt,ft.width,ft.height,ct.depth,0,gt,Nt,ft.data)}else{N&&dt&&e.texStorage2D(i.TEXTURE_2D,Tt,Mt,Bt[0].width,Bt[0].height);for(let ut=0,it=Bt.length;ut<it;ut++)ft=Bt[ut],x.format!==dn?gt!==null?N?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,ft.width,ft.height,gt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Mt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?pt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,ft.width,ft.height,gt,Nt,ft.data):e.texImage2D(i.TEXTURE_2D,ut,Mt,ft.width,ft.height,0,gt,Nt,ft.data)}else if(x.isDataArrayTexture)if(N){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Mt,ct.width,ct.height,ct.depth),pt)if(x.layerUpdates.size>0){const ut=dc(ct.width,ct.height,x.format,x.type);for(const it of x.layerUpdates){const Pt=ct.data.subarray(it*ut/ct.data.BYTES_PER_ELEMENT,(it+1)*ut/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,gt,Nt,Pt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,gt,Nt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,ct.width,ct.height,ct.depth,0,gt,Nt,ct.data);else if(x.isData3DTexture)N?(dt&&e.texStorage3D(i.TEXTURE_3D,Tt,Mt,ct.width,ct.height,ct.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,gt,Nt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,ct.width,ct.height,ct.depth,0,gt,Nt,ct.data);else if(x.isFramebufferTexture){if(dt)if(N)e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ct.width,ct.height);else{let ut=ct.width,it=ct.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Mt,ut,it,0,gt,Nt,null),ut>>=1,it>>=1}}else if(Bt.length>0){if(N&&dt){const ut=te(Bt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ut.width,ut.height)}for(let ut=0,it=Bt.length;ut<it;ut++)ft=Bt[ut],N?pt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,gt,Nt,ft):e.texImage2D(i.TEXTURE_2D,ut,Mt,gt,Nt,ft);x.generateMipmaps=!1}else if(N){if(dt){const ut=te(ct);e.texStorage2D(i.TEXTURE_2D,Tt,Mt,ut.width,ut.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Nt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Mt,gt,Nt,ct);m(x)&&d(B),ht.__version=W.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function st(T,x,V){if(x.image.length!==6)return;const B=ee(T,x),q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+V);const W=n.get(q);if(q.version!==W.__version||B===!0){e.activeTexture(i.TEXTURE0+V);const ht=re.getPrimaries(re.workingColorSpace),ot=x.colorSpace===Wn?null:re.getPrimaries(x.colorSpace),bt=x.colorSpace===Wn||ht===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,ct=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let it=0;it<6;it++)!yt&&!ct?gt[it]=_(x.image[it],!0,s.maxCubemapSize):gt[it]=ct?x.image[it].image:x.image[it],gt[it]=pe(x,gt[it]);const Nt=gt[0],Mt=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),Bt=y(x.internalFormat,Mt,ft,x.colorSpace),N=x.isVideoTexture!==!0,dt=W.__version===void 0||B===!0,pt=q.dataReady;let Tt=C(x,Nt);Ht(i.TEXTURE_CUBE_MAP,x);let ut;if(yt){N&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Bt,Nt.width,Nt.height);for(let it=0;it<6;it++){ut=gt[it].mipmaps;for(let Pt=0;Pt<ut.length;Pt++){const zt=ut[Pt];x.format!==dn?Mt!==null?N?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,zt.width,zt.height,Mt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Bt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,0,0,zt.width,zt.height,Mt,ft,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt,Bt,zt.width,zt.height,0,Mt,ft,zt.data)}}}else{if(ut=x.mipmaps,N&&dt){ut.length>0&&Tt++;const it=te(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,Bt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){N?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,gt[it].width,gt[it].height,Mt,ft,gt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,gt[it].width,gt[it].height,0,Mt,ft,gt[it].data);for(let Pt=0;Pt<ut.length;Pt++){const se=ut[Pt].image[it].image;N?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,se.width,se.height,Mt,ft,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Bt,se.width,se.height,0,Mt,ft,se.data)}}else{N?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt,ft,gt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,Mt,ft,gt[it]);for(let Pt=0;Pt<ut.length;Pt++){const zt=ut[Pt];N?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,0,0,Mt,ft,zt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Pt+1,Bt,Mt,ft,zt.image[it])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),W.__version=q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Et(T,x,V,B,q,W){const ht=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),bt=y(V.internalFormat,ht,ot,V.colorSpace),yt=n.get(x),ct=n.get(V);if(ct.__renderTarget=x,!yt.__hasExternalTextures){const gt=Math.max(1,x.width>>W),Nt=Math.max(1,x.height>>W);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,W,bt,gt,Nt,x.depth,0,ht,ot,null):e.texImage2D(q,W,bt,gt,Nt,0,ht,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Rt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,q,ct.__webglTexture,0,qt(x)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,q,ct.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(T,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const B=x.depthTexture,q=B&&B.isDepthTexture?B.type:null,W=v(x.stencilBuffer,q),ht=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=qt(x);Rt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,W,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,W,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,W,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,T)}else{const B=x.textures;for(let q=0;q<B.length;q++){const W=B[q],ht=r.convert(W.format,W.colorSpace),ot=r.convert(W.type),bt=y(W.internalFormat,ht,ot,W.colorSpace),yt=qt(x);V&&Rt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,bt,x.width,x.height):Rt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,bt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,bt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=n.get(x.depthTexture);B.__renderTarget=x,(!B.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Q(x.depthTexture,0);const q=B.__webglTexture,W=qt(x);if(x.depthTexture.format===bs)Rt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(x.depthTexture.format===Ts)Rt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function kt(T){const x=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const B=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),B){const q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,B.removeEventListener("dispose",q)};B.addEventListener("dispose",q),x.__depthDisposeCallback=q}x.__boundDepthTexture=B}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const B=T.texture.mipmaps;B&&B.length>0?Ct(x.__webglFramebuffer[0],T):Ct(x.__webglFramebuffer,T)}else if(V){x.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[B]),x.__webglDepthbuffer[B]===void 0)x.__webglDepthbuffer[B]=i.createRenderbuffer(),Ft(x.__webglDepthbuffer[B],T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,W)}}else{const B=T.texture.mipmaps;if(B&&B.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ft(x.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,W)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(T,x,V){const B=n.get(T);x!==void 0&&Et(B.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&kt(T)}function D(T){const x=T.texture,V=n.get(T),B=n.get(x);T.addEventListener("dispose",P);const q=T.textures,W=T.isWebGLCubeRenderTarget===!0,ht=q.length>1;if(ht||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=x.version,o.memory.textures++),W){V.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ot]=[];for(let bt=0;bt<x.mipmaps.length;bt++)V.__webglFramebuffer[ot][bt]=i.createFramebuffer()}else V.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ot=0;ot<x.mipmaps.length;ot++)V.__webglFramebuffer[ot]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ht)for(let ot=0,bt=q.length;ot<bt;ot++){const yt=n.get(q[ot]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Rt(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ot=0;ot<q.length;ot++){const bt=q[ot];V.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ot]);const yt=r.convert(bt.format,bt.colorSpace),ct=r.convert(bt.type),gt=y(bt.internalFormat,yt,ct,bt.colorSpace,T.isXRRenderTarget===!0),Nt=qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,gt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,V.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,x);for(let ot=0;ot<6;ot++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)Et(V.__webglFramebuffer[ot][bt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,bt);else Et(V.__webglFramebuffer[ot],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,bt=q.length;ot<bt;ot++){const yt=q[ot],ct=n.get(yt);let gt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(gt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,ct.__webglTexture),Ht(gt,yt),Et(V.__webglFramebuffer,T,yt,i.COLOR_ATTACHMENT0+ot,gt,0),m(yt)&&d(gt)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,B.__webglTexture),Ht(ot,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)Et(V.__webglFramebuffer[bt],T,x,i.COLOR_ATTACHMENT0,ot,bt);else Et(V.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ot,0);m(x)&&d(ot),e.unbindTexture()}T.depthBuffer&&kt(T)}function ie(T){const x=T.textures;for(let V=0,B=x.length;V<B;V++){const q=x[V];if(m(q)){const W=M(T),ht=n.get(q).__webglTexture;e.bindTexture(W,ht),d(W),e.unbindTexture()}}}const Ot=[],Ut=[];function nt(T){if(T.samples>0){if(Rt(T)===!1){const x=T.textures,V=T.width,B=T.height;let q=i.COLOR_BUFFER_BIT;const W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(T),ot=x.length>1;if(ot)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const bt=T.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[yt]);const ct=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,V,B,0,0,V,B,q,i.NEAREST),l===!0&&(Ot.length=0,Ut.length=0,Ot.push(i.COLOR_ATTACHMENT0+yt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ot.push(W),Ut.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ut)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[yt]);const ct=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qt(T){return Math.min(s.maxSamples,T.samples)}function Rt(T){const x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Vt(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function pe(T,x){const V=T.colorSpace,B=T.format,q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==Ki&&V!==Wn&&(re.getTransfer(V)===de?(B!==dn||q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=et,this.setTexture3D=rt,this.setTextureCube=J,this.rebindTextures=Se,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Rt}function c0(i,t){function e(n,s=Wn){let r;const o=re.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Cs)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===dn)return i.RGBA;if(n===bs)return i.DEPTH_COMPONENT;if(n===Ts)return i.DEPTH_STENCIL;if(n===fa)return i.RED;if(n===pa)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===ma)return i.RG_INTEGER;if(n===ga)return i.RGBA_INTEGER;if(n===lr||n===ur||n===hr||n===dr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Uo||n===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Uo)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===No)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===Ko||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ko)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Zo||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===ta||n===ea||n===na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const l0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
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

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ml(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Sn({vertexShader:l0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d0 extends ts{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new h0,d={},M=e.getContextAttributes();let y=null,v=null;const C=[],A=[],P=new At;let I=null;const S=new nn;S.viewport=new _e;const b=new nn;b.viewport=new _e;const U=[S,b],z=new Dh;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let st=C[tt];return st===void 0&&(st=new to,C[tt]=st),st.getTargetRaySpace()},this.getControllerGrip=function(tt){let st=C[tt];return st===void 0&&(st=new to,C[tt]=st),st.getGripSpace()},this.getHand=function(tt){let st=C[tt];return st===void 0&&(st=new to,C[tt]=st),st.getHandSpace()};function Q(tt){const st=A.indexOf(tt.inputSource);if(st===-1)return;const Et=C[st];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,c||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function et(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",rt);for(let tt=0;tt<C.length;tt++){const st=A[tt];st!==null&&(A[tt]=null,C[tt].disconnect(st))}X=null,j=null,m.reset();for(const tt in d)delete d[tt];t.setRenderTarget(y),f=null,p=null,h=null,s=null,v=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",et),s.addEventListener("inputsourceschange",rt),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ft=null,Ct=null;M.depth&&(Ct=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=M.stencil?Ts:bs,Ft=M.stencil?Es:fi);const kt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(kt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),v=new pi(p.textureWidth,p.textureHeight,{format:dn,type:Mn,depthTexture:new pl(p.textureWidth,p.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new pi(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(tt){for(let st=0;st<tt.removed.length;st++){const Et=tt.removed[st],Ft=A.indexOf(Et);Ft>=0&&(A[Ft]=null,C[Ft].disconnect(Et))}for(let st=0;st<tt.added.length;st++){const Et=tt.added[st];let Ft=A.indexOf(Et);if(Ft===-1){for(let kt=0;kt<C.length;kt++)if(kt>=A.length){A.push(Et),Ft=kt;break}else if(A[kt]===null){A[kt]=Et,Ft=kt;break}if(Ft===-1)break}const Ct=C[Ft];Ct&&Ct.connect(Et)}}const J=new R,lt=new R;function vt(tt,st,Et){J.setFromMatrixPosition(st.matrixWorld),lt.setFromMatrixPosition(Et.matrixWorld);const Ft=J.distanceTo(lt),Ct=st.projectionMatrix.elements,kt=Et.projectionMatrix.elements,Se=Ct[14]/(Ct[10]-1),D=Ct[14]/(Ct[10]+1),ie=(Ct[9]+1)/Ct[5],Ot=(Ct[9]-1)/Ct[5],Ut=(Ct[8]-1)/Ct[0],nt=(kt[8]+1)/kt[0],qt=Se*Ut,Rt=Se*nt,Vt=Ft/(-Ut+nt),pe=Vt*-Ut;if(st.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(pe),tt.translateZ(Vt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ct[10]===-1)tt.projectionMatrix.copy(st.projectionMatrix),tt.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const te=Se+Vt,T=D+Vt,x=qt-pe,V=Rt+(Ft-pe),B=ie*D/T*te,q=Ot*D/T*te;tt.projectionMatrix.makePerspective(x,V,B,q,te,T),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function It(tt,st){st===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(st.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let st=tt.near,Et=tt.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),z.near=b.near=S.near=st,z.far=b.far=S.far=Et,(X!==z.near||j!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),X=z.near,j=z.far),z.layers.mask=tt.layers.mask|6,S.layers.mask=z.layers.mask&3,b.layers.mask=z.layers.mask&5;const Ft=tt.parent,Ct=z.cameras;It(z,Ft);for(let kt=0;kt<Ct.length;kt++)It(Ct[kt],Ft);Ct.length===2?vt(z,S,b):z.projectionMatrix.copy(S.projectionMatrix),Ht(tt,z,Ft)};function Ht(tt,st,Et){Et===null?tt.matrix.copy(st.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(st.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(st.projectionMatrix),tt.projectionMatrixInverse.copy(st.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ws*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(tt){l=tt,p!==null&&(p.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(tt){return d[tt]};let ee=null;function le(tt,st){if(u=st.getViewerPose(c||o),g=st,u!==null){const Et=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Ft=!1;Et.length!==z.cameras.length&&(z.cameras.length=0,Ft=!0);for(let D=0;D<Et.length;D++){const ie=Et[D];let Ot=null;if(f!==null)Ot=f.getViewport(ie);else{const nt=h.getViewSubImage(p,ie);Ot=nt.viewport,D===0&&(t.setRenderTargetTextures(v,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(v))}let Ut=U[D];Ut===void 0&&(Ut=new nn,Ut.layers.enable(D),Ut.viewport=new _e,U[D]=Ut),Ut.matrix.fromArray(ie.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(ie.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),D===0&&(z.matrix.copy(Ut.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ft===!0&&z.cameras.push(Ut)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const D=h.getDepthInformation(Et[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Ct&&Ct.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let D=0;D<Et.length;D++){const ie=Et[D].camera;if(ie){let Ot=d[ie];Ot||(Ot=new ml,d[ie]=Ot);const Ut=h.getCameraImage(ie);Ot.sourceTexture=Ut}}}}for(let Et=0;Et<C.length;Et++){const Ft=A[Et],Ct=C[Et];Ft!==null&&Ct!==void 0&&Ct.update(Ft,st,c||o)}ee&&ee(tt,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const jt=new Ml;jt.setAnimationLoop(le),this.setAnimationLoop=function(tt){ee=tt},this.dispose=function(){}}}const ri=new pn,f0=new he;function p0(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ll(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),p(m,d),d.isMeshPhysicalMaterial&&f(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,M,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ge&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ge&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=t.get(d),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,ri.copy(v),ri.x*=-1,ri.y*=-1,ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(f0.makeRotationFromEuler(ri)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ge&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function m0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function c(M,y){let v=s[M.id];v===void 0&&(g(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(M,C);const A=t.render.frame;r[M.id]!==A&&(p(M),r[M.id]=A)}function u(M){const y=h();M.__bindingPointIndex=y;const v=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const y=s[M.id],v=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,P=v.length;A<P;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,b=I.length;S<b;S++){const U=I[S];if(f(U,A,S,C)===!0){const z=U.__offset,X=Array.isArray(U.value)?U.value:[U.value];let j=0;for(let Q=0;Q<X.length;Q++){const et=X[Q],rt=_(et);typeof et=="number"||typeof et=="boolean"?(U.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,z+j,U.__data)):et.isMatrix3?(U.__data[0]=et.elements[0],U.__data[1]=et.elements[1],U.__data[2]=et.elements[2],U.__data[3]=0,U.__data[4]=et.elements[3],U.__data[5]=et.elements[4],U.__data[6]=et.elements[5],U.__data[7]=0,U.__data[8]=et.elements[6],U.__data[9]=et.elements[7],U.__data[10]=et.elements[8],U.__data[11]=0):(et.toArray(U.__data,j),j+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,v,C){const A=M.value,P=y+"_"+v;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{const I=C[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(M){const y=M.uniforms;let v=0;const C=16;for(let P=0,I=y.length;P<I;P++){const S=Array.isArray(y[P])?y[P]:[y[P]];for(let b=0,U=S.length;b<U;b++){const z=S[b],X=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Q=X.length;j<Q;j++){const et=X[j],rt=_(et),J=v%C,lt=J%rt.boundary,vt=J+lt;v+=lt,vt!==0&&C-vt<rt.storage&&(v+=C-vt),z.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=rt.storage}}}const A=v%C;return A>0&&(v+=C-A),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class g0{constructor(t={}){const{canvas:e=Uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let C=!1;this._outputColorSpace=Ve;let A=0,P=0,I=null,S=-1,b=null;const U=new _e,z=new _e;let X=null;const j=new Gt(0);let Q=0,et=e.width,rt=e.height,J=1,lt=null,vt=null;const It=new _e(0,0,et,rt),Ht=new _e(0,0,et,rt);let ee=!1;const le=new Ma;let jt=!1,tt=!1;const st=new he,Et=new R,Ft=new _e,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function Se(){return I===null?J:1}let D=n;function ie(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${la}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){const k="webgl2";if(D=ie(k,E),D===null)throw ie(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ot,Ut,nt,qt,Rt,Vt,pe,te,T,x,V,B,q,W,ht,ot,bt,yt,ct,gt,Nt,Mt,ft,Bt;function N(){Ot=new wp(D),Ot.init(),Mt=new c0(D,Ot),Ut=new xp(D,Ot,t,Mt),nt=new o0(D,Ot),Ut.reversedDepthBuffer&&p&&nt.buffers.depth.setReversed(!0),qt=new Cp(D),Rt=new Ym,Vt=new a0(D,Ot,nt,Rt,Ut,Mt,qt),pe=new Sp(v),te=new Tp(v),T=new Uh(D),ft=new _p(D,T),x=new Ap(D,T,qt,ft),V=new Lp(D,x,T,qt),ct=new Pp(D,Ut,Vt),ot=new Mp(Rt),B=new qm(v,pe,te,Ot,Ut,ft,ot),q=new p0(v,Rt),W=new $m,ht=new e0(Ot),yt=new gp(v,pe,te,nt,V,f,l),bt=new s0(v,V,Ut),Bt=new m0(D,qt,Ut,nt),gt=new vp(D,Ot,qt),Nt=new Rp(D,Ot,qt),qt.programs=B.programs,v.capabilities=Ut,v.extensions=Ot,v.properties=Rt,v.renderLists=W,v.shadowMap=bt,v.state=nt,v.info=qt}N();const dt=new d0(v,D);this.xr=dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ot.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ot.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(et,rt,!1))},this.getSize=function(E){return E.set(et,rt)},this.setSize=function(E,k,Y=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=E,rt=k,e.width=Math.floor(E*J),e.height=Math.floor(k*J),Y===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(et*J,rt*J).floor()},this.setDrawingBufferSize=function(E,k,Y){et=E,rt=k,J=Y,e.width=Math.floor(E*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(U)},this.getViewport=function(E){return E.copy(It)},this.setViewport=function(E,k,Y,K){E.isVector4?It.set(E.x,E.y,E.z,E.w):It.set(E,k,Y,K),nt.viewport(U.copy(It).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,k,Y,K){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,k,Y,K),nt.scissor(z.copy(Ht).multiplyScalar(J).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){nt.setScissorTest(ee=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){vt=E},this.getClearColor=function(E){return E.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,Y=!0){let K=0;if(E){let G=!1;if(I!==null){const w=I.texture.format;G=w===ga||w===ma||w===pa}if(G){const w=I.texture.type,L=w===Mn||w===fi||w===ys||w===Es||w===ha||w===da,F=yt.getClearColor(),O=yt.getClearAlpha(),H=F.r,$=F.g,Z=F.b;L?(g[0]=H,g[1]=$,g[2]=Z,g[3]=O,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=H,_[1]=$,_[2]=Z,_[3]=O,D.clearBufferiv(D.COLOR,0,_))}else K|=D.COLOR_BUFFER_BIT}k&&(K|=D.DEPTH_BUFFER_BIT),Y&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),yt.dispose(),W.dispose(),ht.dispose(),Rt.dispose(),pe.dispose(),te.dispose(),V.dispose(),ft.dispose(),Bt.dispose(),B.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Ne),dt.removeEventListener("sessionend",Ds),yn.stop()};function pt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=qt.autoReset,k=bt.enabled,Y=bt.autoUpdate,K=bt.needsUpdate,G=bt.type;N(),qt.autoReset=E,bt.enabled=k,bt.autoUpdate=Y,bt.needsUpdate=K,bt.type=G}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const k=E.target;k.removeEventListener("dispose",it),Pt(k)}function Pt(E){zt(E),Rt.remove(E)}function zt(E){const k=Rt.get(E).programs;k!==void 0&&(k.forEach(function(Y){B.releaseProgram(Y)}),E.isShaderMaterial&&B.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Y,K,G,w){k===null&&(k=Ct);const L=G.isMesh&&G.matrixWorld.determinant()<0,F=Is(E,k,Y,K,G);nt.setMaterial(K,L);let O=Y.index,H=1;if(K.wireframe===!0){if(O=x.getWireframeAttribute(Y),O===void 0)return;H=2}const $=Y.drawRange,Z=Y.attributes.position;let at=$.start*H,mt=($.start+$.count)*H;w!==null&&(at=Math.max(at,w.start*H),mt=Math.min(mt,(w.start+w.count)*H)),O!==null?(at=Math.max(at,0),mt=Math.min(mt,O.count)):Z!=null&&(at=Math.max(at,0),mt=Math.min(mt,Z.count));const Dt=mt-at;if(Dt<0||Dt===1/0)return;ft.setup(G,K,F,Y,O);let wt,Wt=gt;if(O!==null&&(wt=T.get(O),Wt=Nt,Wt.setIndex(wt)),G.isMesh)K.wireframe===!0?(nt.setLineWidth(K.wireframeLinewidth*Se()),Wt.setMode(D.LINES)):Wt.setMode(D.TRIANGLES);else if(G.isLine){let Lt=K.linewidth;Lt===void 0&&(Lt=1),nt.setLineWidth(Lt*Se()),G.isLineSegments?Wt.setMode(D.LINES):G.isLineLoop?Wt.setMode(D.LINE_LOOP):Wt.setMode(D.LINE_STRIP)}else G.isPoints?Wt.setMode(D.POINTS):G.isSprite&&Wt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)As("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Wt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Lt=G._multiDrawStarts,oe=G._multiDrawCounts,$t=G._multiDrawCount,Ee=O?T.get(O).bytesPerElement:1,Un=Rt.get(K).currentProgram.getUniforms();for(let We=0;We<$t;We++)Un.setValue(D,"_gl_DrawID",We),Wt.render(Lt[We]/Ee,oe[We])}else if(G.isInstancedMesh)Wt.renderInstances(at,Dt,G.count);else if(Y.isInstancedBufferGeometry){const Lt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,oe=Math.min(Y.instanceCount,Lt);Wt.renderInstances(at,Dt,oe)}else Wt.render(at,Dt)};function se(E,k,Y){E.transparent===!0&&E.side===xe&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,Je(E,k,Y),E.side=Kn,E.needsUpdate=!0,Je(E,k,Y),E.side=xe):Je(E,k,Y)}this.compile=function(E,k,Y=null){Y===null&&(Y=E),d=ht.get(Y),d.init(k),y.push(d),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),E!==Y&&E.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const K=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const w=G.material;if(w)if(Array.isArray(w))for(let L=0;L<w.length;L++){const F=w[L];se(F,Y,G),K.add(F)}else se(w,Y,G),K.add(w)}),d=y.pop(),K},this.compileAsync=function(E,k,Y=null){const K=this.compile(E,k,Y);return new Promise(G=>{function w(){if(K.forEach(function(L){Rt.get(L).currentProgram.isReady()&&K.delete(L)}),K.size===0){G(E);return}setTimeout(w,10)}Ot.get("KHR_parallel_shader_compile")!==null?w():setTimeout(w,10)})};let ne=null;function rn(E){ne&&ne(E)}function Ne(){yn.stop()}function Ds(){yn.start()}const yn=new Ml;yn.setAnimationLoop(rn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(E){ne=E,dt.setAnimationLoop(E),E===null?yn.stop():yn.start()},dt.addEventListener("sessionstart",Ne),dt.addEventListener("sessionend",Ds),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(k),k=dt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,k,I),d=ht.get(E,y.length),d.init(k),y.push(d),st.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(st,xn,k.reversedDepth),tt=this.localClippingEnabled,jt=ot.init(this.clippingPlanes,tt),m=W.get(E,M.length),m.init(),M.push(m),dt.enabled===!0&&dt.isPresenting===!0){const w=v.xr.getDepthSensingMesh();w!==null&&xi(w,k,-1/0,v.sortObjects)}xi(E,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(lt,vt),kt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,kt&&yt.addToRenderList(m,E),this.info.render.frame++,jt===!0&&ot.beginShadows();const Y=d.state.shadowsArray;bt.render(Y,E,k),jt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(d.setupLights(),k.isArrayCamera){const w=k.cameras;if(G.length>0)for(let L=0,F=w.length;L<F;L++){const O=w[L];os(K,G,E,O)}kt&&yt.render(E);for(let L=0,F=w.length;L<F;L++){const O=w[L];Zn(m,E,O,O.viewport)}}else G.length>0&&os(K,G,E,k),kt&&yt.render(E),Zn(m,E,k);I!==null&&P===0&&(Vt.updateMultisampleRenderTarget(I),Vt.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,k),ft.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(d=y[y.length-1],jt===!0&&ot.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function xi(E,k,Y,K){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||le.intersectsSprite(E)){K&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);const L=V.update(E),F=E.material;F.visible&&m.push(E,L,F,Y,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||le.intersectsObject(E))){const L=V.update(E),F=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(L.boundingSphere===null&&L.computeBoundingSphere(),Ft.copy(L.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(st)),Array.isArray(F)){const O=L.groups;for(let H=0,$=O.length;H<$;H++){const Z=O[H],at=F[Z.materialIndex];at&&at.visible&&m.push(E,L,at,Y,Ft.z,Z)}}else F.visible&&m.push(E,L,F,Y,Ft.z,null)}}const w=E.children;for(let L=0,F=w.length;L<F;L++)xi(w[L],k,Y,K)}function Zn(E,k,Y,K){const G=E.opaque,w=E.transmissive,L=E.transparent;d.setupLightsView(Y),jt===!0&&ot.setGlobalState(v.clippingPlanes,Y),K&&nt.viewport(U.copy(K)),G.length>0&&Mi(G,k,Y),w.length>0&&Mi(w,k,Y),L.length>0&&Mi(L,k,Y),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function os(E,k,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new pi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Cs:Mn,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const w=d.state.transmissionRenderTarget[K.id],L=K.viewport||U;w.setSize(L.z*v.transmissionResolutionScale,L.w*v.transmissionResolutionScale);const F=v.getRenderTarget(),O=v.getActiveCubeFace(),H=v.getActiveMipmapLevel();v.setRenderTarget(w),v.getClearColor(j),Q=v.getClearAlpha(),Q<1&&v.setClearColor(16777215,.5),v.clear(),kt&&yt.render(Y);const $=v.toneMapping;v.toneMapping=qn;const Z=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),jt===!0&&ot.setGlobalState(v.clippingPlanes,K),Mi(E,Y,K),Vt.updateMultisampleRenderTarget(w),Vt.updateRenderTargetMipmap(w),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let mt=0,Dt=k.length;mt<Dt;mt++){const wt=k[mt],Wt=wt.object,Lt=wt.geometry,oe=wt.material,$t=wt.group;if(oe.side===xe&&Wt.layers.test(K.layers)){const Ee=oe.side;oe.side=Ge,oe.needsUpdate=!0,jn(Wt,Y,K,Lt,oe,$t),oe.side=Ee,oe.needsUpdate=!0,at=!0}}at===!0&&(Vt.updateMultisampleRenderTarget(w),Vt.updateRenderTargetMipmap(w))}v.setRenderTarget(F,O,H),v.setClearColor(j,Q),Z!==void 0&&(K.viewport=Z),v.toneMapping=$}function Mi(E,k,Y){const K=k.isScene===!0?k.overrideMaterial:null;for(let G=0,w=E.length;G<w;G++){const L=E[G],F=L.object,O=L.geometry,H=L.group;let $=L.material;$.allowOverride===!0&&K!==null&&($=K),F.layers.test(Y.layers)&&jn(F,k,Y,O,$,H)}}function jn(E,k,Y,K,G,w){E.onBeforeRender(v,k,Y,K,G,w),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(v,k,Y,K,E,w),G.transparent===!0&&G.side===xe&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,v.renderBufferDirect(Y,k,K,G,E,w),G.side=Kn,G.needsUpdate=!0,v.renderBufferDirect(Y,k,K,G,E,w),G.side=xe):v.renderBufferDirect(Y,k,K,G,E,w),E.onAfterRender(v,k,Y,K,G,w)}function Je(E,k,Y){k.isScene!==!0&&(k=Ct);const K=Rt.get(E),G=d.state.lights,w=d.state.shadowsArray,L=G.state.version,F=B.getParameters(E,G.state,w,k,Y),O=B.getProgramCacheKey(F);let H=K.programs;K.environment=E.isMeshStandardMaterial?k.environment:null,K.fog=k.fog,K.envMap=(E.isMeshStandardMaterial?te:pe).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,H===void 0&&(E.addEventListener("dispose",it),H=new Map,K.programs=H);let $=H.get(O);if($!==void 0){if(K.currentProgram===$&&K.lightsStateVersion===L)return mn(E,F),$}else F.uniforms=B.getUniforms(E),E.onBeforeCompile(F,v),$=B.acquireProgram(F,O),H.set(O,$),K.uniforms=F.uniforms;const Z=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Z.clippingPlanes=ot.uniform),mn(E,F),K.needsLights=Si(E),K.lightsStateVersion=L,K.needsLights&&(Z.ambientLightColor.value=G.state.ambient,Z.lightProbe.value=G.state.probe,Z.directionalLights.value=G.state.directional,Z.directionalLightShadows.value=G.state.directionalShadow,Z.spotLights.value=G.state.spot,Z.spotLightShadows.value=G.state.spotShadow,Z.rectAreaLights.value=G.state.rectArea,Z.ltc_1.value=G.state.rectAreaLTC1,Z.ltc_2.value=G.state.rectAreaLTC2,Z.pointLights.value=G.state.point,Z.pointLightShadows.value=G.state.pointShadow,Z.hemisphereLights.value=G.state.hemi,Z.directionalShadowMap.value=G.state.directionalShadowMap,Z.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Z.spotShadowMap.value=G.state.spotShadowMap,Z.spotLightMatrix.value=G.state.spotLightMatrix,Z.spotLightMap.value=G.state.spotLightMap,Z.pointShadowMap.value=G.state.pointShadowMap,Z.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=$,K.uniformsList=null,$}function on(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=fr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function mn(E,k){const Y=Rt.get(E);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Is(E,k,Y,K,G){k.isScene!==!0&&(k=Ct),Vt.resetTextureUnits();const w=k.fog,L=K.isMeshStandardMaterial?k.environment:null,F=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ki,O=(K.isMeshStandardMaterial?te:pe).get(K.envMap||L),H=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,$=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Z=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,mt=!!Y.morphAttributes.color;let Dt=qn;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const wt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Wt=wt!==void 0?wt.length:0,Lt=Rt.get(K),oe=d.state.lights;if(jt===!0&&(tt===!0||E!==b)){const Fe=E===b&&K.id===S;ot.setState(K,E,Fe)}let $t=!1;K.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==oe.state.version||Lt.outputColorSpace!==F||G.isBatchedMesh&&Lt.batching===!1||!G.isBatchedMesh&&Lt.batching===!0||G.isBatchedMesh&&Lt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Lt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Lt.instancing===!1||!G.isInstancedMesh&&Lt.instancing===!0||G.isSkinnedMesh&&Lt.skinning===!1||!G.isSkinnedMesh&&Lt.skinning===!0||G.isInstancedMesh&&Lt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Lt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Lt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Lt.instancingMorph===!1&&G.morphTexture!==null||Lt.envMap!==O||K.fog===!0&&Lt.fog!==w||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ot.numPlanes||Lt.numIntersection!==ot.numIntersection)||Lt.vertexAlphas!==H||Lt.vertexTangents!==$||Lt.morphTargets!==Z||Lt.morphNormals!==at||Lt.morphColors!==mt||Lt.toneMapping!==Dt||Lt.morphTargetsCount!==Wt)&&($t=!0):($t=!0,Lt.__version=K.version);let Ee=Lt.currentProgram;$t===!0&&(Ee=Je(K,k,G));let Un=!1,We=!1,cs=!1;const ge=Ee.getUniforms(),Ze=Lt.uniforms;if(nt.useProgram(Ee.program)&&(Un=!0,We=!0,cs=!0),K.id!==S&&(S=K.id,We=!0),Un||b!==E){nt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ge.setValue(D,"projectionMatrix",E.projectionMatrix),ge.setValue(D,"viewMatrix",E.matrixWorldInverse);const He=ge.map.cameraPosition;He!==void 0&&He.setValue(D,Et.setFromMatrixPosition(E.matrixWorld)),Ut.logarithmicDepthBuffer&&ge.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ge.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,We=!0,cs=!0)}if(G.isSkinnedMesh){ge.setOptional(D,G,"bindMatrix"),ge.setOptional(D,G,"bindMatrixInverse");const Fe=G.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),ge.setValue(D,"boneTexture",Fe.boneTexture,Vt))}G.isBatchedMesh&&(ge.setOptional(D,G,"batchingTexture"),ge.setValue(D,"batchingTexture",G._matricesTexture,Vt),ge.setOptional(D,G,"batchingIdTexture"),ge.setValue(D,"batchingIdTexture",G._indirectTexture,Vt),ge.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(D,"batchingColorTexture",G._colorsTexture,Vt));const je=Y.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&ct.update(G,Y,Ee),(We||Lt.receiveShadow!==G.receiveShadow)&&(Lt.receiveShadow=G.receiveShadow,ge.setValue(D,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Ze.envMap.value=O,Ze.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&k.environment!==null&&(Ze.envMapIntensity.value=k.environmentIntensity),We&&(ge.setValue(D,"toneMappingExposure",v.toneMappingExposure),Lt.needsLights&&Us(Ze,cs),w&&K.fog===!0&&q.refreshFogUniforms(Ze,w),q.refreshMaterialUniforms(Ze,K,J,rt,d.state.transmissionRenderTarget[E.id]),fr.upload(D,on(Lt),Ze,Vt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fr.upload(D,on(Lt),Ze,Vt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ge.setValue(D,"center",G.center),ge.setValue(D,"modelViewMatrix",G.modelViewMatrix),ge.setValue(D,"normalMatrix",G.normalMatrix),ge.setValue(D,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Fe=K.uniformsGroups;for(let He=0,Dr=Fe.length;He<Dr;He++){const Qn=Fe[He];Bt.update(Qn,Ee),Bt.bind(Qn,Ee)}}return Ee}function Us(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Si(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,k,Y){const K=Rt.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Rt.get(E.texture).__webglTexture=k,Rt.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Y,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const Y=Rt.get(E);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const yi=D.createFramebuffer();this.setRenderTarget=function(E,k=0,Y=0){I=E,A=k,P=Y;let K=!0,G=null,w=!1,L=!1;if(E){const O=Rt.get(E);if(O.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(D.FRAMEBUFFER,null),K=!1;else if(O.__webglFramebuffer===void 0)Vt.setupRenderTarget(E);else if(O.__hasExternalTextures)Vt.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Z=E.depthTexture;if(O.__boundDepthTexture!==Z){if(Z!==null&&Rt.has(Z)&&(E.width!==Z.image.width||E.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(E)}}const H=E.texture;(H.isData3DTexture||H.isDataArrayTexture||H.isCompressedArrayTexture)&&(L=!0);const $=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($[k])?G=$[k][Y]:G=$[k],w=!0):E.samples>0&&Vt.useMultisampledRTT(E)===!1?G=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray($)?G=$[Y]:G=$,U.copy(E.viewport),z.copy(E.scissor),X=E.scissorTest}else U.copy(It).multiplyScalar(J).floor(),z.copy(Ht).multiplyScalar(J).floor(),X=ee;if(Y!==0&&(G=yi),nt.bindFramebuffer(D.FRAMEBUFFER,G)&&K&&nt.drawBuffers(E,G),nt.viewport(U),nt.scissor(z),nt.setScissorTest(X),w){const O=Rt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,O.__webglTexture,Y)}else if(L){const O=k;for(let H=0;H<E.textures.length;H++){const $=Rt.get(E.textures[H]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+H,$.__webglTexture,Y,O)}}else if(E!==null&&Y!==0){const O=Rt.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,O.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(E,k,Y,K,G,w,L,F=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&L!==void 0&&(O=O[L]),O){nt.bindFramebuffer(D.FRAMEBUFFER,O);try{const H=E.textures[F],$=H.format,Z=H.type;if(!Ut.textureFormatReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-K&&Y>=0&&Y<=E.height-G&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+F),D.readPixels(k,Y,K,G,Mt.convert($),Mt.convert(Z),w))}finally{const H=I!==null?Rt.get(I).__webglFramebuffer:null;nt.bindFramebuffer(D.FRAMEBUFFER,H)}}},this.readRenderTargetPixelsAsync=async function(E,k,Y,K,G,w,L,F=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&L!==void 0&&(O=O[L]),O)if(k>=0&&k<=E.width-K&&Y>=0&&Y<=E.height-G){nt.bindFramebuffer(D.FRAMEBUFFER,O);const H=E.textures[F],$=H.format,Z=H.type;if(!Ut.textureFormatReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.bufferData(D.PIXEL_PACK_BUFFER,w.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+F),D.readPixels(k,Y,K,G,Mt.convert($),Mt.convert(Z),0);const mt=I!==null?Rt.get(I).__webglFramebuffer:null;nt.bindFramebuffer(D.FRAMEBUFFER,mt);const Dt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nu(D,Dt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,at),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,w),D.deleteBuffer(at),D.deleteSync(Dt),w}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,Y=0){const K=Math.pow(2,-Y),G=Math.floor(E.image.width*K),w=Math.floor(E.image.height*K),L=k!==null?k.x:0,F=k!==null?k.y:0;Vt.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,L,F,G,w),nt.unbindTexture()};const Lr=D.createFramebuffer(),as=D.createFramebuffer();this.copyTextureToTexture=function(E,k,Y=null,K=null,G=0,w=null){w===null&&(G!==0?(As("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),w=G,G=0):w=0);let L,F,O,H,$,Z,at,mt,Dt;const wt=E.isCompressedTexture?E.mipmaps[w]:E.image;if(Y!==null)L=Y.max.x-Y.min.x,F=Y.max.y-Y.min.y,O=Y.isBox3?Y.max.z-Y.min.z:1,H=Y.min.x,$=Y.min.y,Z=Y.isBox3?Y.min.z:0;else{const je=Math.pow(2,-G);L=Math.floor(wt.width*je),F=Math.floor(wt.height*je),E.isDataArrayTexture?O=wt.depth:E.isData3DTexture?O=Math.floor(wt.depth*je):O=1,H=0,$=0,Z=0}K!==null?(at=K.x,mt=K.y,Dt=K.z):(at=0,mt=0,Dt=0);const Wt=Mt.convert(k.format),Lt=Mt.convert(k.type);let oe;k.isData3DTexture?(Vt.setTexture3D(k,0),oe=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Vt.setTexture2DArray(k,0),oe=D.TEXTURE_2D_ARRAY):(Vt.setTexture2D(k,0),oe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const $t=D.getParameter(D.UNPACK_ROW_LENGTH),Ee=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Un=D.getParameter(D.UNPACK_SKIP_PIXELS),We=D.getParameter(D.UNPACK_SKIP_ROWS),cs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,wt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,H),D.pixelStorei(D.UNPACK_SKIP_ROWS,$),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Z);const ge=E.isDataArrayTexture||E.isData3DTexture,Ze=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const je=Rt.get(E),Fe=Rt.get(k),He=Rt.get(je.__renderTarget),Dr=Rt.get(Fe.__renderTarget);nt.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let Qn=0;Qn<O;Qn++)ge&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,G,Z+Qn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.get(k).__webglTexture,w,Dt+Qn)),D.blitFramebuffer(H,$,L,F,at,mt,L,F,D.DEPTH_BUFFER_BIT,D.NEAREST);nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||Rt.has(E)){const je=Rt.get(E),Fe=Rt.get(k);nt.bindFramebuffer(D.READ_FRAMEBUFFER,Lr),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,as);for(let He=0;He<O;He++)ge?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,je.__webglTexture,G,Z+He):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,je.__webglTexture,G),Ze?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,w,Dt+He):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,w),G!==0?D.blitFramebuffer(H,$,L,F,at,mt,L,F,D.COLOR_BUFFER_BIT,D.NEAREST):Ze?D.copyTexSubImage3D(oe,w,at,mt,Dt+He,H,$,L,F):D.copyTexSubImage2D(oe,w,at,mt,H,$,L,F);nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ze?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(oe,w,at,mt,Dt,L,F,O,Wt,Lt,wt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(oe,w,at,mt,Dt,L,F,O,Wt,wt.data):D.texSubImage3D(oe,w,at,mt,Dt,L,F,O,Wt,Lt,wt):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,w,at,mt,L,F,Wt,Lt,wt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,w,at,mt,wt.width,wt.height,Wt,wt.data):D.texSubImage2D(D.TEXTURE_2D,w,at,mt,L,F,Wt,Lt,wt);D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Un),D.pixelStorei(D.UNPACK_SKIP_ROWS,We),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cs),w===0&&k.generateMipmaps&&D.generateMipmap(oe),nt.unbindTexture()},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&Vt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Vt.setTextureCube(E,0):E.isData3DTexture?Vt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Vt.setTexture2DArray(E,0):Vt.setTexture2D(E,0),nt.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,nt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}function Ra(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new fe;let c=0;for(let u=0;u<i.length;++u){const h=i[u];let p=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0;const h=[];for(let p=0;p<i.length;++p){const f=i[p].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(const u in r){const h=Oc(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][p]);const g=Oc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Oc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Le(o,e,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const h=l/e;for(let p=0,f=u.count;p<f;p++)for(let g=0;g<e;g++){const _=u.getComponent(p,g);a.setComponent(p+h,g,_)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Bc=new R(0,1,0);function Ps(i){return function(){let e=i+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function _i(i,t=1,e=1){const n=new hh(i);return n.colorSpace=Ve,n.wrapS=n.wrapT=gr,n.repeat.set(t,e),n.anisotropy=4,n}function _0(){const i=document.createElement("canvas");i.width=i.height=512;const t=i.getContext("2d"),e=Ps(8021);t.fillStyle="#827864",t.fillRect(0,0,512,512);for(let n=-1;n<9;n+=1){const s=n*64,r=n%2===0?-45:-5;for(let o=-1;o<6;o+=1){const a=r+o*104,l=92+Math.floor(e()*30);t.fillStyle=`rgb(${l-8}, ${l+4}, ${l+5})`,t.strokeStyle="rgba(192, 169, 128, 0.55)",t.lineWidth=4,t.beginPath(),t.moveTo(a+5+e()*5,s+6),t.lineTo(a+96,s+3+e()*7),t.lineTo(a+99-e()*5,s+57),t.lineTo(a+7,s+60-e()*5),t.closePath(),t.fill(),t.stroke()}}for(let n=0;n<900;n+=1){const s=e()>.48;t.fillStyle=s?`rgba(151, 119, 76, ${.05+e()*.16})`:`rgba(219, 213, 184, ${.04+e()*.12})`;const r=.5+e()*2.4;t.fillRect(e()*512,e()*512,r,r)}return _i(i)}function v0(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=Ps(3419);t.fillStyle="#778063",t.fillRect(0,0,256,256);for(let n=0;n<2400;n+=1){const s=e()>.38;t.fillStyle=s?`rgba(49, 78, 52, ${.04+e()*.13})`:`rgba(181, 157, 107, ${.03+e()*.11})`;const r=1+e()*4;t.fillRect(e()*256,e()*256,r,r*.45)}return _i(i,34,34)}function x0(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=Ps(977);t.fillStyle="#68775a",t.fillRect(0,0,256,256);for(let n=0;n<9;n+=1){const s=n*31+5;t.strokeStyle="rgba(190, 203, 164, 0.35)",t.lineWidth=4,t.beginPath(),t.moveTo(0,s+7),t.lineTo(256,s+7),t.stroke();for(let r=5;r<256;r+=17)t.strokeStyle=e()>.5?"#788c45":"#87984e",t.lineWidth=2,t.beginPath(),t.moveTo(r,s+5),t.lineTo(r-3,s-7-e()*5),t.moveTo(r,s+5),t.lineTo(r+4,s-6-e()*5),t.stroke()}return _i(i)}function M0(){const i=document.createElement("canvas");i.width=i.height=256;const t=i.getContext("2d"),e=Ps(6401);t.fillStyle="#354442",t.fillRect(0,0,256,256);for(let n=0;n<256;n+=24)t.fillStyle="rgba(13, 28, 29, 0.38)",t.fillRect(n,0,4,256),t.fillStyle="rgba(132, 148, 132, 0.18)",t.fillRect(n+5,0,2,256);for(let n=0;n<256;n+=42)t.fillStyle="rgba(15, 27, 28, 0.4)",t.fillRect(0,n,256,3),t.fillStyle="rgba(151, 153, 127, 0.12)",t.fillRect(0,n+4,256,2);for(let n=0;n<350;n+=1)t.fillStyle=`rgba(185, 184, 149, ${e()*.08})`,t.fillRect(e()*256,e()*256,1+e()*3,1);return _i(i,3,2)}function S0(){const i=document.createElement("canvas");i.width=1024,i.height=256;const t=i.getContext("2d");return t.fillStyle="#35291f",t.fillRect(0,0,1024,256),t.strokeStyle="#b89452",t.lineWidth=12,t.strokeRect(18,18,988,220),t.strokeStyle="rgba(232, 197, 119, 0.45)",t.lineWidth=2,t.strokeRect(34,34,956,188),t.font='bold 142px "STKaiti", "KaiTi", "Songti SC", serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#e1bd70",t.fillText("江南赛牛",512,132),_i(i)}function y0(){const i=document.createElement("canvas");i.width=256,i.height=128;const t=i.getContext("2d");return t.fillStyle="#a53a2c",t.fillRect(0,0,256,128),t.strokeStyle="#d2aa60",t.lineWidth=6,t.strokeRect(8,8,240,112),t.font='bold 82px "STKaiti", "KaiTi", serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle="#e3bd70",t.fillText("赛",130,67),_i(i)}function E0(){const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d"),e=t.createRadialGradient(31,30,2,32,32,28);return e.addColorStop(0,"rgba(255, 235, 224, 1)"),e.addColorStop(.55,"rgba(225, 157, 157, 0.9)"),e.addColorStop(1,"rgba(205, 126, 137, 0)"),t.fillStyle=e,t.beginPath(),t.ellipse(32,32,24,13,-.45,0,Math.PI*2),t.fill(),_i(i)}function or(i,t,e,n,s={}){const{y:r=.12,centerOffset:o=0,crown:a=0,crossSegments:l=4,uvLength:c=7}=s,u=l+1,h=[],p=[],f=[];for(let _=0;_<=n;_+=1){const m=_/n,d=i.getPointAt(m),M=i.getTangentAt(m).setY(0).normalize(),y=new R(M.z,0,-M.x);for(let v=0;v<=l;v+=1){const C=v/l-.5,A=o+C*e,P=r+a*(1-Math.pow(C*2,2));h.push(d.x+y.x*A,P,d.z+y.z*A),p.push(v/l,m*t/c)}}for(let _=0;_<n;_+=1)for(let m=0;m<l;m+=1){const d=_*u+m,M=d+1,y=d+u,v=y+1;f.push(d,y,M,M,y,v)}const g=new fe;return g.setAttribute("position",new Xt(h,3)),g.setAttribute("uv",new Xt(p,2)),g.setIndex(f),g.computeVertexNormals(),g.computeBoundingSphere(),g}function ra(i,t,e,n){const s=Math.pow(Math.abs(i)/(e*.5),6);return n*(1-t)+.16*Math.pow(t,5)+.34*s*(.25+.75*t)}function b0(i,t,e){const r=[],o=[],a=[];for(let u=0;u<2;u+=1){const h=u===0?-1:1,p=u*11*6;for(let f=0;f<=10;f+=1){const g=f/10,_=(g-.5)*i;for(let m=0;m<=5;m+=1){const d=m/5;r.push(_,ra(_,d,i,e),h*t*.5*d),o.push(g,d)}}for(let f=0;f<10;f+=1)for(let g=0;g<5;g+=1){const _=p+f*6+g,m=_+6,d=_+1,M=m+1;h>0?a.push(_,d,m,m,d,M):a.push(_,m,d,m,M,d)}}const c=new fe;return c.setAttribute("position",new Xt(r,3)),c.setAttribute("uv",new Xt(o,2)),c.setIndex(a),c.computeVertexNormals(),c}function T0(i,t,e){const n=[],s=[],r=[],l=[new R(-i/2,0,-t/2),new R(i/2,0,-t/2),new R(i/2,0,t/2),new R(-i/2,0,t/2)];for(let u=0;u<4;u+=1){const h=l[u],p=l[(u+1)%4],f=u*5*5;for(let g=0;g<=4;g+=1){const _=g/4;for(let m=0;m<=4;m+=1){const d=m/4,M=$i.lerp(h.x,p.x,d),y=$i.lerp(h.z,p.z,d),v=.14*Math.pow(_,4)+.28*Math.pow(Math.abs(d*2-1),6)*Math.pow(_,3);n.push(M*_,e*(1-_)+v,y*_),s.push(d,_)}}for(let g=0;g<4;g+=1)for(let _=0;_<4;_+=1){const m=f+g*5+_,d=m+1,M=m+5,y=M+1;r.push(m,M,d,d,M,y)}}const c=new fe;return c.setAttribute("position",new Xt(n,3)),c.setAttribute("uv",new Xt(s,2)),c.setIndex(r),c.computeVertexNormals(),c}function w0(i,t,e){const n=[];for(const r of[-i/2,i/2])n.push(r,0,-t/2,r,0,t/2,r,e,0);const s=new fe;return s.setAttribute("position",new Xt(n,3)),s.computeVertexNormals(),s}function A0(){const t=[1,.83,.56,.29],e=[0,.23,.55,.8],n=[],s=[];for(let a=0;a<t.length;a+=1)for(let l=0;l<9;l+=1){const c=l/9*Math.PI*2,u=1+Math.sin(l*4.17+a*1.9)*.12;n.push(Math.cos(c)*t[a]*u+a*.025,e[a]*(1+Math.sin(l*2.3+a)*.055),Math.sin(c)*t[a]*u)}const r=n.length/3;n.push(.09,1,-.035);for(let a=0;a<t.length-1;a+=1)for(let l=0;l<9;l+=1){const c=(l+1)%9,u=a*9+l,h=a*9+c,p=(a+1)*9+l,f=(a+1)*9+c;s.push(u,p,h,h,p,f)}for(let a=0;a<9;a+=1){const l=(t.length-1)*9+a,c=(t.length-1)*9+(a+1)%9;s.push(l,r,c)}const o=new fe;return o.setAttribute("position",new Xt(n,3)),o.setIndex(s),o.computeVertexNormals(),o}function R0(){const i=new Ye(.22,1,1,2);i.translate(0,.5,0);const t=[i,i.clone().rotateY(Math.PI/3),i.clone().rotateY(Math.PI*2/3)],e=Ra(t,!1);return t[1].dispose(),t[2].dispose(),i.dispose(),e}function C0(){return new Sn({name:"Jiangnan stylized reflective water",uniforms:ul.merge([St.fog,{uTime:{value:0},uDeep:{value:new Gt(3563356)},uShallow:{value:new Gt(7509386)},uSky:{value:new Gt(12175287)}}]),vertexShader:`
      uniform float uTime;
      varying vec3 vWorldPosition;
      #include <fog_pars_vertex>
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        float wave = sin(worldPosition.x * 0.36 + uTime * 0.75) * 0.012;
        wave += sin(worldPosition.z * 0.51 - uTime * 0.58) * 0.009;
        worldPosition.y += wave;
        vWorldPosition = worldPosition.xyz;
        vec4 mvPosition = viewMatrix * worldPosition;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform vec3 uDeep;
      uniform vec3 uShallow;
      uniform vec3 uSky;
      varying vec3 vWorldPosition;
      #include <fog_pars_fragment>
      void main() {
        vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
        float fresnel = pow(1.0 - clamp(viewDirection.y, 0.0, 1.0), 2.0);
        float broad = sin(vWorldPosition.x * 0.15 + vWorldPosition.z * 0.11 + uTime * 0.32);
        float ripple = sin(vWorldPosition.x * 1.35 + uTime * 1.1)
          * sin(vWorldPosition.z * 1.12 - uTime * 0.83);
        float glint = smoothstep(0.74, 0.98, ripple * 0.5 + 0.5);
        vec3 color = mix(uDeep, uShallow, 0.48 + broad * 0.18);
        color = mix(color, uSky, fresnel * 0.62);
        color += vec3(0.15, 0.16, 0.12) * glint * 0.55;
        gl_FragColor = vec4(color, 0.91);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }
    `,transparent:!0,depthWrite:!1,side:xe,fog:!0})}function P0(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`
        #include <begin_vertex>
        float flagPhase = 0.0;
        #ifdef USE_INSTANCING
          flagPhase = instanceMatrix[3].x * 0.17 + instanceMatrix[3].z * 0.11;
        #endif
        float freeEdge = clamp(position.x / 2.2, 0.0, 1.0);
        transformed.z += sin(position.x * 3.4 - uTime * 3.1 + flagPhase + position.y) * 0.18 * freeEdge;
        transformed.y += sin(position.x * 2.1 - uTime * 2.2 + flagPhase) * 0.035 * freeEdge;
      `)},i.customProgramCacheKey=()=>"jiangnan-flag-wave-v1"}function L0(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime=t,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`
        #include <begin_vertex>
        float ricePhase = 0.0;
        #ifdef USE_INSTANCING
          ricePhase = instanceMatrix[3].x * 0.29 + instanceMatrix[3].z * 0.23;
        #endif
        float tip = clamp(position.y, 0.0, 1.0);
        transformed.x += sin(uTime * 1.55 + ricePhase) * 0.12 * tip * tip;
        transformed.z += cos(uTime * 1.17 + ricePhase) * 0.055 * tip * tip;
      `)},i.customProgramCacheKey=()=>"jiangnan-rice-wind-v1"}function D0(i){i.updateMatrixWorld(!0);const t=new Map;i.traverse(n=>{if(!n.isMesh||n.isInstancedMesh||Array.isArray(n.material))return;const s=`${n.material.uuid}:${n.castShadow}:${n.receiveShadow}`;t.has(s)||t.set(s,{material:n.material,castShadow:n.castShadow,receiveShadow:n.receiveShadow,geometries:[]});const r=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();r.applyMatrix4(n.matrixWorld);for(const o of Object.keys(r.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&r.deleteAttribute(o);r.attributes.normal||r.computeVertexNormals(),r.attributes.uv||r.setAttribute("uv",new Xt(new Float32Array(r.attributes.position.count*2),2)),t.get(s).geometries.push(r)});const e=new ve;e.name="Batched Jiangnan architecture and planting";for(const n of t.values()){const s=Ra(n.geometries,!1);for(const o of n.geometries)o.dispose();if(!s)continue;s.computeBoundingSphere();const r=new me(s,n.material);r.castShadow=n.castShadow,r.receiveShadow=n.receiveShadow,e.add(r)}return i.removeFromParent(),i.clear(),e}function I0(i){const t=new ve;t.name="Jiangnan water-town buffalo race",i.add(t);const e=Ps(20261023),n={value:0},s=12,r=[[0,0,80],[50,0,78],[86,0,50],[95,0,5],[72,0,-28],[82,0,-64],[45,0,-90],[0,0,-75],[-35,0,-95],[-80,0,-72],[-95,0,-30],[-70,0,5],[-90,0,42],[-55,0,78]].map(([w,L,F])=>new R(w,L,F)),o=new wr(r,!0,"catmullrom",.35);o.curveType="catmullrom",o.tension=.35,o.closed=!0;const a=o.getLength(),l=Array.from({length:260},(w,L)=>o.getPointAt(L/260));function c(w,L){let F=1/0;for(const O of l){const H=w-O.x,$=L-O.z;F=Math.min(F,H*H+$*$)}return F}const u={ground:new Qt({map:v0(),roughness:1}),earth:new Qt({color:9205335,roughness:1}),road:new Qt({map:_0(),roughness:.93}),stone:new Qt({color:8752e3,roughness:.94}),paleStone:new Qt({color:11776155,roughness:.9}),wall:new Qt({color:14276029,roughness:.96,side:xe}),wallWarm:new Qt({color:13616294,roughness:.96}),roof:new Qt({map:M0(),color:11055782,roughness:.84,metalness:.04,side:xe}),roofEdge:new Qt({color:2504501,roughness:.82}),wood:new Qt({color:6439729,roughness:.9}),darkWood:new Qt({color:3747109,roughness:.9}),redWood:new Qt({color:7617328,roughness:.86}),red:new Qt({color:11879732,emissive:3541766,emissiveIntensity:.18,roughness:.76,side:xe}),gold:new Qt({color:12819029,roughness:.63,metalness:.18}),paper:new Qt({color:14863777,roughness:.9}),glow:new Qt({color:14859640,emissive:11954988,emissiveIntensity:.75,roughness:.8}),leaf:new Qt({color:4811593,roughness:.95,side:xe}),leafLight:new Qt({color:7308625,roughness:.95,side:xe}),bamboo:new Qt({color:5666636,roughness:.88}),bambooNode:new Qt({color:9082720,roughness:.9}),willow:new Qt({color:7506777,roughness:.96,side:xe}),blossom:new Qt({color:14131616,roughness:.94,flatShading:!0}),blossomPale:new Qt({color:14991024,roughness:.94,flatShading:!0}),straw:new Qt({color:12163673,roughness:1}),reed:new Qt({color:7438420,roughness:1})},h=new Ye(470,470,28,28);h.rotateX(-Math.PI/2);const p=h.attributes.position;for(let w=0;w<p.count;w+=1){const L=p.getX(w),F=p.getZ(w),O=-.34+Math.sin(L*.035)*Math.cos(F*.029)*.045;p.setY(w,Math.min(-.25,O))}h.computeVertexNormals();const f=new me(h,u.ground);f.name="Low Jiangnan fields terrain",f.receiveShadow=!0,t.add(f);const g=Math.ceil(a/1.15),_=new me(or(o,a,s+3.4,g,{y:.045,crown:.012,crossSegments:2,uvLength:8}),u.earth);_.receiveShadow=!0,_.name="Warm earth track shoulders",t.add(_);const m=new me(or(o,a,s,g,{y:.12,crown:.025,crossSegments:4,uvLength:7}),u.road);m.receiveShadow=!0,m.name="Blue flagstone and warm earth racing ribbon",t.add(m);for(const w of[-1,1]){const L=new me(or(o,a,.18,g,{y:.153,centerOffset:w*(s*.5-.22),crossSegments:1}),u.paleStone);L.receiveShadow=!0,t.add(L);const F=new me(or(o,a,.28,g,{y:.105,centerOffset:w*(s*.5+.35),crossSegments:1}),u.stone);F.receiveShadow=!0,t.add(F)}const d=new ve;d.name="Detailed static Jiangnan set dressing",t.add(d);const M={box:new Jn(1,1,1),cylinder:new Ke(1,1,1,7),fineCylinder:new Ke(1,1,1,10),sphere:new mi(1,10,7),lowSphere:new Sr(1,1),cone:new Vi(1,1,8),leaf:new Ye(1,1)};function y(w,L,F=d){const O=new me(w,L);return O.castShadow=!0,O.receiveShadow=!0,F.add(O),O}function v(w,L,F,O,H,$,Z,at,mt=0){const Dt=y(M.box,H,w);return Dt.position.set($,Z,at),Dt.rotation.y=mt,Dt.scale.set(L,F,O),Dt}function C(w,L,F,O,H,$,Z,at=!1){const mt=y(at?M.fineCylinder:M.cylinder,O,w);return mt.position.set(H,$,Z),mt.scale.set(L,F,L),mt}function A(w,L,F,O,H,$=!1){const Z=new R().subVectors(F,L),at=Z.length();if(at<1e-4)return null;const mt=y($?M.box:M.cylinder,H,w);return mt.position.copy(L).add(F).multiplyScalar(.5),mt.quaternion.setFromUnitVectors(Bc,Z.normalize()),mt.scale.set(O,at,O),mt}function P(w,L,F,O,H=0,$=1){const Z=new ve;return Z.position.set(L,F,O),Z.rotation.y=H,Z.scale.setScalar($),w.add(Z),Z}function I(w,L,F,O,H=1){const $=y(M.sphere,u.red,w);$.position.set(L,F,O),$.scale.set(.32*H,.42*H,.32*H),C(w,.2*H,.09*H,u.gold,L,F+.42*H,O,!0),C(w,.18*H,.08*H,u.gold,L,F-.42*H,O,!0),C(w,.035*H,.42*H,u.red,L,F-.67*H,O)}function S(w,L,F,O,H,$,Z,at=0){const mt=P(w,L,F,O,at);y(b0(H,$,Z),u.roof,mt);const Dt=Math.max(8,Math.round(H/.7));for(let wt=0;wt<=Dt;wt+=1){const Wt=(wt/Dt-.5)*H*.94;for(const Lt of[-1,1]){const oe=new R(Wt,ra(Wt,0,H,Z)+.035,0),$t=new R(Wt,ra(Wt,1,H,Z)+.035,Lt*$*.5);A(mt,oe,$t,.034,u.roofEdge)}}A(mt,new R(-H/2,Z+.1,0),new R(H/2,Z+.1,0),.085,u.roofEdge,!0);for(const wt of[-1,1]){v(mt,H*.98,.12,.12,u.roofEdge,0,.12,wt*$/2);const Wt=y(M.cone,u.roofEdge,mt);Wt.position.set(wt*H*.5,Z+.31,0),Wt.scale.set(.12,.42,.12)}return mt}function b(w,L,F,O,H){const $=P(w,0,L,0);y(T0(F,O,H),u.roof,$);const Z=[new R(-F/2,0,-O/2),new R(F/2,0,-O/2),new R(F/2,0,O/2),new R(-F/2,0,O/2)];for(let at=0;at<4;at+=1){const mt=Z[at],Dt=Z[(at+1)%4];for(let Lt=0;Lt<=4;Lt+=1){const oe=Lt/4,$t=.14+.28*Math.pow(Math.abs(oe*2-1),6),Ee=new R().lerpVectors(mt,Dt,oe);Ee.y=$t+.03,A($,new R(0,H+.03,0),Ee,.038,u.roofEdge)}const wt=mt.clone().setY(.12),Wt=Dt.clone().setY(.12);A($,wt,Wt,.075,u.roofEdge,!0)}return $}const U=[[-5,48,.08,1.05],[13,45,-.12,.9],[-28,48,.28,.85],[42,32,-.55,.85],[-47,28,.65,.85],[48,-35,-.4,.9],[-42,-48,.35,1],[2,-48,0,.9],[110,68,-.5,1],[-112,-10,.4,.9],[50,105,.1,1],[-50,110,-.2,.9]];function z(w,L,F,O){const H=P(d,w,-.14,L,F,O),$=7,Z=5.2,at=3.1,mt=.35,Dt=mt+at;v(H,7.25,mt,5.45,u.stone,0,mt/2,0),v(H,$,at,Z,u.wall,0,mt+at/2,0),v(H,7.5,.13,5.7,u.darkWood,0,Dt,0),y(w0($,Z,1.4),u.wall,H).position.y=Dt,S(H,0,Dt,0,8.5,6.65,1.55),v(H,1.25,2.05,.12,u.darkWood,0,mt+1.03,Z/2+.045),v(H,.92,1.82,.13,u.wood,0,mt+.96,Z/2+.115),v(H,1.55,.18,.65,u.paleStone,0,.18,Z/2+.3);for(const wt of[-2.15,2.15])v(H,1.25,1.25,.1,u.darkWood,wt,2.05,Z/2+.06),v(H,.96,.96,.12,u.paper,wt,2.05,Z/2+.12),v(H,.07,1.02,.04,u.wood,wt,2.05,Z/2+.2),v(H,1.02,.07,.04,u.wood,wt,2.05,Z/2+.2),v(H,.045,1.02,.04,u.wood,wt-.27,2.05,Z/2+.2),v(H,.045,1.02,.04,u.wood,wt+.27,2.05,Z/2+.2);return I(H,-.95,2.45,Z/2+.35,.78),I(H,.95,2.45,Z/2+.35,.78),H}for(const w of U)z(...w);const X=P(d,32,-.14,52,.15);v(X,9,.45,9,u.paleStone,0,.225,0);for(let w=0;w<5;w+=1){const L=6.8-w*.82,F=.45+w*2.42;v(X,L+.85,.16,L+.85,u.darkWood,0,F+.08,0),v(X,L,1.72,L,w%2?u.wallWarm:u.wall,0,F+.96,0);for(const O of[-1,1])for(const H of[-1,1])C(X,.13,1.9,u.redWood,O*L*.46,F+1.02,H*L*.46,!0);for(const O of[-1,1])v(X,L+.5,.1,.1,u.redWood,0,F+.58,O*(L/2+.28)),v(X,.1,.1,L+.5,u.redWood,O*(L/2+.28),F+.58,0);if(b(X,F+1.82,L+2,L+2,.96),w<4)for(const O of[-1,1])I(X,O*(L/2+.35),F+1.5,L/2+.35,.58),I(X,O*(L/2+.35),F+1.5,-L/2-.35,.58)}const j=.45+4*2.42+1.82+.96;C(X,.11,1.4,u.gold,0,j+.65,0,!0);const Q=y(M.cone,u.gold,X);Q.position.set(0,j+1.55,0),Q.scale.set(.32,.85,.32);const et=[];function rt(w,L,F,O,H=0,$=0,Z=1){C(w,.075,O,u.darkWood,L,$+O/2,F,!0);const at=y(M.sphere,u.gold,w);at.position.set(L,$+O+.08,F),at.scale.setScalar(.13),w.updateWorldMatrix(!0,!1);const mt=new R(L,$+O-.9,F).applyMatrix4(w.matrixWorld),Dt=w.getWorldQuaternion(new Dn);Dt.multiply(new Dn().setFromAxisAngle(Bc,H)),et.push({position:mt,quaternion:Dt,scale:Z})}function J(w){const L=(w%1+1)%1,F=o.getPointAt(L),O=o.getTangentAt(L).setY(0).normalize();return P(d,F.x,0,F.z,Math.atan2(O.x,O.z))}const lt=J(.012);for(const w of[-1,1])v(lt,1.05,.55,1.05,u.paleStone,w*6.85,.275,0),C(lt,.32,6.35,u.redWood,w*6.85,3.55,0,!0),C(lt,.18,4.65,u.redWood,w*4.75,2.6,0,!0),v(lt,.75,.38,.75,u.paleStone,w*4.75,.19,0);v(lt,15.2,.42,.62,u.redWood,0,5.15,0),v(lt,16.4,.36,.72,u.redWood,0,6.03,0),v(lt,10.2,.28,.55,u.gold,0,4.67,0),v(lt,5.75,1.55,.74,u.darkWood,0,5.55,0),S(lt,0,6.15,0,17.8,3.8,1.18),v(lt,7.4,.75,1.2,u.redWood,0,7.35,0),S(lt,0,7.65,0,8.8,4.25,1.05);for(const w of[-5.65,-3.25,3.25,5.65])I(lt,w,4.25,0,1.05);rt(lt,-9.1,0,5.1,Math.PI,0,1.05),rt(lt,9.1,0,5.1,0,0,1.05);const vt=new Qt({map:S0(),roughness:.75,side:xe}),It=new Ye(5.4,1.35);y(It,vt,lt).position.set(0,5.55,.381);const ee=y(It,vt,lt);ee.position.set(0,5.55,-.381),ee.rotation.y=Math.PI;const le=J(.0015),jt=14;for(let w=0;w<2;w+=1)for(let L=0;L<jt;L+=1){const F=(w+L)%2?u.paleStone:u.darkWood;v(le,s/jt,.018,.42,F,-s/2+(L+.5)*s/jt,.151,(w-.5)*.42)}const tt=new fe;tt.setAttribute("position",new Xt([-.3,0,0,.3,0,0,0,-.55,0],3)),tt.computeVertexNormals(),A(lt,new R(-6.2,4.78,.42),new R(6.2,4.78,.42),.022,u.darkWood);for(let w=0;w<17;w+=1)y(tt,w%3===0?u.gold:u.red,lt).position.set(-5.9+w*.735,4.76,.43);for(let w=0;w<12;w+=1){const F=(-.028+w*.007+1)%1,O=o.getPointAt(F),H=o.getTangentAt(F).setY(0).normalize(),$=new R(H.z,0,-H.x),Z=w%2?1:-1,at=Z*(s/2+2.6);rt(d,O.x+$.x*at,O.z+$.z*at,4.25+w%3*.25,Math.atan2(H.x,H.z)+(Z<0?Math.PI:0),-.08,.82)}function st(w,L,F){const O=Math.max(2,Math.ceil((L-w)*a/3.2));let H=null;for(let $=0;$<=O;$+=1){const Z=$i.lerp(w,L,$/O),at=o.getPointAt(Z),mt=o.getTangentAt(Z).setY(0).normalize(),Dt=F*(s/2+1.75),wt=new R(at.x+mt.z*Dt,0,at.z-mt.x*Dt);if(v(d,.18,1.15,.18,u.wood,wt.x,.48,wt.z),H)for(const Wt of[.46,.84])A(d,H.clone().setY(Wt),wt.clone().setY(Wt),.09,u.wood,!0);H=wt}}st(.105,.17,1),st(.29,.35,-1),st(.48,.55,1),st(.71,.77,-1);const Et=Math.floor(a/3.4);for(let w=0;w<Et;w+=1){const L=w/Et,F=o.getPointAt(L),O=o.getTangentAt(L).setY(0).normalize(),H=Math.atan2(O.x,O.z);for(const $ of[-1,1]){const Z=$*(s/2+.45);v(d,.34,.18,1.55,u.paleStone,F.x+O.z*Z,.12,F.z-O.x*Z,H)}}const Ft=C0();function Ct(w,L,F,O=1,H=1){const $=new me(w,Ft);return $.rotation.x=-Math.PI/2,$.position.set(L,-.12,F),$.scale.set(O,H,1),$.renderOrder=1,t.add($),$}function kt(w,L,F,O){const H=new me(new wa(1,1.085,64),u.earth);H.rotation.x=-Math.PI/2,H.position.set(w,-.155,L),H.scale.set(F,O,1),H.receiveShadow=!0,t.add(H),Ct(new ya(1,64),w,L,F,O);for(let $=0;$<72;$+=1){const Z=e()*Math.PI*2,at=1.025+e()*.055,mt=w+Math.cos(Z)*F*at,Dt=L+Math.sin(Z)*O*at,wt=.55+e()*.8;if(C(d,.025,wt,u.reed,mt,-.12+wt/2,Dt),$%3===0){const Wt=y(M.cone,u.straw,d);Wt.position.set(mt,wt-.03,Dt),Wt.scale.set(.065,.28,.065)}}}kt(132,12,28,42),kt(-130,47,25,34);const Se=new Qt({map:x0(),color:12698525,roughness:.78,metalness:.03}),D=[[-20,15,24,20],[18,15,24,20],[-20,-17,24,18],[18,-17,24,18],[0,-38,30,11]],ie=[];for(const[w,L,F,O]of D){const H=new Ye(F,O),$=H.attributes.uv;for(let at=0;at<$.count;at+=1)$.setXY(at,$.getX(at)*F/8,$.getY(at)*O/8);const Z=y(H,Se);Z.rotation.x=-Math.PI/2,Z.position.set(w,-.075,L),v(d,F+.5,.2,.38,u.earth,w,-.015,L-O/2),v(d,F+.5,.2,.38,u.earth,w,-.015,L+O/2),v(d,.38,.2,O,u.earth,w-F/2,-.015,L),v(d,.38,.2,O,u.earth,w+F/2,-.015,L);for(let at=-F/2+.8;at<F/2-.5;at+=1.55)for(let mt=-O/2+.8;mt<O/2-.5;mt+=1.55)e()<.1||ie.push({x:w+at+(e()-.5)*.18,z:L+mt+(e()-.5)*.18,scale:.5+e()*.32,angle:e()*Math.PI,shade:e()})}Ct(new Ye(2.2,67),-1,0),Ct(new Ye(66,2.2),0,-1.5);for(let w=0;w<9;w+=1)v(d,.43,.13,2.4,u.wood,-2.75+w*.44,.17,10);for(const w of[8.95,11.05]){v(d,4.4,.1,.1,u.darkWood,-1,.78,w);for(const L of[-3,1])v(d,.12,1.1,.12,u.wood,L,.4,w)}for(let w=0;w<15;w+=1)v(d,.78,.14,3.1,u.wood,104.5+w*.79,.18,23);for(const w of[105,110,116])for(const L of[21.7,24.3])C(d,.12,1.65,u.darkWood,w,-.25,L);const Ot=new Qt({color:8557901,roughness:.95,side:xe});L0(Ot,n);const Ut=new un(R0(),Ot,ie.length),nt=new Me,qt=new Gt;for(let w=0;w<ie.length;w+=1){const L=ie[w];nt.position.set(L.x,-.055,L.z),nt.rotation.set(0,L.angle,0),nt.scale.set(L.scale,L.scale,L.scale),nt.updateMatrix(),Ut.setMatrixAt(w,nt.matrix),qt.setHSL(.19+L.shade*.035,.35,.37+L.shade*.1),Ut.setColorAt(w,qt)}Ut.instanceMatrix.needsUpdate=!0,Ut.instanceColor.needsUpdate=!0,Ut.receiveShadow=!0,Ut.name="Wind animated instanced rice seedlings",t.add(Ut);const Rt=new Ta([new At(0,0),new At(.88,0),new At(1,.3),new At(.84,1.05),new At(.48,1.62),new At(0,1.88)],12),Vt=[[-35,10],[-34,-25],[33,21],[34,-23],[12,-33],[-12,-35],[54,52],[-55,58],[103,77],[-104,-17]];for(const[w,L]of Vt){const F=y(Rt,u.straw);F.position.set(w,-.12,L),F.rotation.y=e()*Math.PI;const O=.85+e()*.35;F.scale.setScalar(O);for(const H of[.45,.95]){const $=new me(new Ar(.86,.035,4,12),u.darkWood);$.rotation.x=Math.PI/2,$.position.set(w,H*O-.12,L),$.scale.setScalar(O),$.castShadow=!0,d.add($)}}function pe(w,L,F=1){const O=P(d,w,-.12,L,e()*.25,F);v(O,.78,.22,.78,u.stone,0,.11,0),C(O,.16,.75,u.stone,0,.58,0),v(O,.38,.4,.38,u.glow,0,1.17,0);for(const Z of[-1,1])for(const at of[-1,1])v(O,.09,.5,.09,u.stone,Z*.25,1.17,at*.25);const H=y(new Vi(.62,.38,4),u.stone,O);H.position.y=1.58,H.rotation.y=Math.PI/4;const $=y(M.sphere,u.stone,O);$.position.y=1.84,$.scale.setScalar(.1)}const te=[[-10,43],[7,40],[25,45],[39,45],[-36,39],[-51,20],[42,-28],[-36,-43],[8,-43],[57,96],[-44,101],[104,61]];for(const[w,L]of te)pe(w,L,.9+e()*.25);function T(w,L,F,O=5){for(let H=0;H<F;H+=1){const $=w+(e()-.5)*O,Z=L+(e()-.5)*O,at=3.8+e()*2.7,mt=.055+e()*.035;C(d,mt,at,u.bamboo,$,-.14+at/2,Z,!0);for(let Dt=1;Dt<5;Dt+=1)C(d,mt*1.35,.045,u.bambooNode,$,-.14+at*Dt/5,Z);for(let Dt=0;Dt<4;Dt+=1){const wt=y(M.leaf,Dt%2?u.leaf:u.leafLight);wt.position.set($+(e()-.5)*.65,at*(.58+e()*.35),Z+(e()-.5)*.65),wt.rotation.set((e()-.5)*1.2,e()*Math.PI,(e()-.5)*1.1),wt.scale.set(.75+e()*.5,.13+e()*.08,1)}}}T(61,59,16,7),T(-60,61,16,7),T(58,-4,14,6),T(-59,-20,15,7),T(17,-60,14,6),T(106,-43,14,7);const x=new Ye(.24,2.8,1,4);x.translate(0,-1.4,0);function V(w,L,F=1){const O=P(d,w,-.14,L,e()*Math.PI,F);A(O,new R(0,0,0),new R(.25,4.4,.1),.24,u.wood);for(let H=0;H<8;H+=1){const $=H/8*Math.PI*2+e()*.3,Z=new R(.2,3.2+e(),0),at=new R(Math.cos($)*2,4.2+e()*.7,Math.sin($)*2);A(O,Z,at,.075,u.wood);const mt=y(M.lowSphere,u.willow,O);mt.position.copy(at),mt.scale.set(1.1,.55,.9);for(let Dt=0;Dt<2;Dt+=1){const wt=y(x,u.willow,O);wt.position.set(at.x+(e()-.5)*.7,at.y,at.z+(e()-.5)*.7),wt.rotation.y=$+Dt*Math.PI/2,wt.scale.y=.75+e()*.45}}}V(104,44,1.15),V(111,-26,1),V(153,45,1.2),V(-105,66,1.1),V(-111,19,.95),V(-150,72,1.15),V(-6,31,.85);const B=[];function q(w,L,F=1,O=!1){const H=P(d,w,-.14,L,e()*Math.PI,F);B.push({x:w,z:L,scale:F}),A(H,new R(0,0,0),new R(0,3.25,0),.2,u.wood);for(let $=0;$<7;$+=1){const Z=$/7*Math.PI*2,at=new R(Math.cos(Z)*(1.2+e()*.65),3.2+e()*1.25,Math.sin(Z)*(1.2+e()*.65));A(H,new R(0,2.1+e()*.8,0),at,.065,u.wood);const mt=y(M.lowSphere,O?u.blossomPale:u.blossom,H);mt.position.copy(at),mt.scale.set(.85+e()*.4,.65+e()*.3,.85+e()*.4)}}q(-15,59,1.15),q(12,61,1.05,!0),q(-40,38,.95),q(50,43,1.05,!0),q(39,-46,1.1),q(-30,-58,1,!0),q(58,94,1.2),q(-62,96,1.1,!0),q(102,83,1.1),q(-105,-3,.9);const W=[];let ht=0;for(;W.length<76&&ht<1600;){ht+=1;const w=e()*Math.PI*2,L=108+e()*48,F=Math.cos(w)*L,O=Math.sin(w)*L;if(c(F,O)<196)continue;const H=Math.pow((F-132)/34,2)+Math.pow((O-12)/49,2),$=Math.pow((F+130)/31,2)+Math.pow((O-47)/41,2);if(H<1||$<1)continue;let Z=!1;for(const[at,mt]of U)if((F-at)**2+(O-mt)**2<81){Z=!0;break}Z||W.push({x:F,z:O,height:2.8+e()*2.5,width:1.4+e()*1.25,shade:e()})}const ot=new Qt({color:5850933,roughness:1}),bt=new Qt({color:16777215,roughness:.96,flatShading:!0}),yt=new un(M.cylinder,ot,W.length),ct=new un(M.lowSphere,bt,W.length*2);for(let w=0;w<W.length;w+=1){const L=W[w];nt.position.set(L.x,L.height/2-.18,L.z),nt.rotation.set(0,e()*Math.PI,0),nt.scale.set(.18,L.height,.18),nt.updateMatrix(),yt.setMatrixAt(w,nt.matrix);for(let F=0;F<2;F+=1){nt.position.set(L.x+(F?.55:-.3)*L.width,L.height+(F?.15:.65),L.z+(F?-.2:.25)*L.width),nt.rotation.set(e(),e()*Math.PI,e()*.25),nt.scale.set(L.width,L.width*.85,L.width),nt.updateMatrix();const O=w*2+F;ct.setMatrixAt(O,nt.matrix),qt.setHSL(.29+L.shade*.045,.26,.3+L.shade*.12+F*.025),ct.setColorAt(O,qt)}}yt.instanceMatrix.needsUpdate=!0,ct.instanceMatrix.needsUpdate=!0,ct.instanceColor.needsUpdate=!0,yt.castShadow=ct.castShadow=!0,yt.receiveShadow=ct.receiveShadow=!0,t.add(yt,ct);const gt=52,Nt=new Ke(.22,.3,.9,6),Mt=new mi(.2,8,6),ft=new Vi(.38,.2,12),Bt=new Qt({color:16777215,roughness:.94}),N=new Qt({color:13211248,roughness:.94}),dt=new Qt({color:11836005,roughness:1}),pt=new un(Nt,Bt,gt),Tt=new un(Mt,N,gt),ut=new un(ft,dt,gt),it=[7307380,9329996,5860731,11573874,7630930,10188656];for(let w=0;w<gt;w+=1){const L=(-.035+w%26*.0034+1)%1,F=w<26?-1:1,O=o.getPointAt(L),H=o.getTangentAt(L).setY(0).normalize(),$=F*(s/2+3.2+e()*3.1),Z=O.x+H.z*$,at=O.z-H.x*$,mt=.86+e()*.22,Dt=Math.atan2(-H.z*F,H.x*F)+(e()-.5)*.35;nt.position.set(Z,.33*mt-.12,at),nt.rotation.set(0,Dt,0),nt.scale.setScalar(mt),nt.updateMatrix(),pt.setMatrixAt(w,nt.matrix),qt.set(it[w%it.length]),pt.setColorAt(w,qt),nt.position.y=1*mt-.12,nt.updateMatrix(),Tt.setMatrixAt(w,nt.matrix),nt.position.y=1.25*mt-.12,nt.updateMatrix(),ut.setMatrixAt(w,nt.matrix)}pt.instanceMatrix.needsUpdate=Tt.instanceMatrix.needsUpdate=!0,ut.instanceMatrix.needsUpdate=!0,pt.instanceColor.needsUpdate=!0,pt.castShadow=Tt.castShadow=ut.castShadow=!0,t.add(pt,Tt,ut);const Pt=A0();function zt(w,L,F,O,H,$,Z,at,mt){const Dt=new Qt({color:16777215,roughness:1,flatShading:!0,side:xe}),wt=new un(Pt,Dt,L),Wt=new Gt(mt);for(let Lt=0;Lt<L;Lt+=1){const oe=Lt/L*Math.PI*2+(e()-.5)*.14,$t=F+e()*(O-F),Ee=Z+e()*(at-Z),Un=H+e()*($-H);nt.position.set(Math.cos(oe)*$t,-.38,Math.sin(oe)*$t),nt.rotation.set(0,e()*Math.PI,0),nt.scale.set(Ee,Un,Ee*(.72+e()*.5)),nt.updateMatrix(),wt.setMatrixAt(Lt,nt.matrix),qt.copy(Wt).offsetHSL((e()-.5)*.018,0,(e()-.5)*.075),wt.setColorAt(Lt,qt)}return wt.instanceMatrix.needsUpdate=!0,wt.instanceColor.needsUpdate=!0,wt.name=w,t.add(wt),wt}zt("Near sage karst peaks",18,166,194,18,35,22,38,5206371),zt("Middle jade mountain layer",22,210,250,30,55,30,50,7310717),zt("Far mist blue mountain layer",26,270,325,42,76,38,62,9544600);const se=[];let ne=0;for(;se.length<24&&ne<600;){ne+=1;const w=e()*Math.PI*2,L=126+e()*37,F=Math.cos(w)*L,O=Math.sin(w)*L;c(F,O)<529||se.push({x:F,z:O,angle:e()*Math.PI,width:16+e()*15,height:4+e()*7})}const rn=new Qt({color:7307354,roughness:1,flatShading:!0}),Ne=new un(Pt,rn,se.length);for(let w=0;w<se.length;w+=1){const L=se[w];nt.position.set(L.x,-.35,L.z),nt.rotation.set(0,L.angle,0),nt.scale.set(L.width,L.height,L.width*.85),nt.updateMatrix(),Ne.setMatrixAt(w,nt.matrix)}Ne.instanceMatrix.needsUpdate=!0,Ne.receiveShadow=!0,t.add(Ne);const Ds=new Sr(1,1),yn=new Mr({color:15657176,transparent:!0,opacity:.48,depthWrite:!1}),xi=40,Zn=new un(Ds,yn,xi);for(let w=0;w<xi;w+=1){const L=Math.floor(w/4),F=w%4,O=L/10*Math.PI*2+.2,H=165+L%3*28,$=Math.cos(O)*H,Z=Math.sin(O)*H;nt.position.set($+(F-1.5)*5.5,49+L%4*5+F%2*1.8,Z),nt.rotation.set(0,e()*Math.PI,0),nt.scale.set(6+e()*4,2.2+e()*1.5,3.4+e()*2.5),nt.updateMatrix(),Zn.setMatrixAt(w,nt.matrix)}Zn.instanceMatrix.needsUpdate=!0,t.add(Zn);const os=new fe;os.setAttribute("position",new Xt([0,0,0,-.85,.18,-.18,-.18,0,.35,0,0,0,.85,.18,-.18,.18,0,.35],3));const Mi=new Mr({color:3689027,side:xe}),jn=new un(os,Mi,18);for(let w=0;w<18;w+=1){const L=w/18*Math.PI*2,F=85+e()*65;nt.position.set(Math.cos(L)*F,30+e()*18,Math.sin(L)*F),nt.rotation.set((e()-.5)*.3,e()*Math.PI,0),nt.scale.setScalar(.65+e()*.65),nt.updateMatrix(),jn.setMatrixAt(w,nt.matrix)}jn.instanceMatrix.needsUpdate=!0,t.add(jn);const Je=210,on=new Float32Array(Je*3),mn=new Float32Array(Je*3),Is=new Float32Array(Je),Us=new Float32Array(Je),Si=new Float32Array(Je*3);for(let w=0;w<Je;w+=1){const L=B[w%B.length],F=w*3,O=1+e()*4.2*L.scale,H=e()*Math.PI*2;mn[F]=L.x+Math.cos(H)*O,mn[F+1]=0,mn[F+2]=L.z+Math.sin(H)*O,on[F]=mn[F],on[F+1]=.15+e()*5.3,on[F+2]=mn[F+2],Is[w]=e()*Math.PI*2,Us[w]=.16+e()*.3,qt.set(w%3?14854823:15780795),Si[F]=qt.r,Si[F+1]=qt.g,Si[F+2]=qt.b}const yi=new fe;yi.setAttribute("position",new Le(on,3)),yi.setAttribute("color",new Le(Si,3));const Lr=new Sa({map:E0(),size:.28,sizeAttenuation:!0,transparent:!0,opacity:.82,alphaTest:.06,depthWrite:!1,vertexColors:!0}),as=new fl(yi,Lr);as.frustumCulled=!1,as.name="Drifting peach and pear blossom petals",t.add(as);const E=new Ye(2.2,1.25,10,3);E.translate(1.1,0,0);const k=new Qt({map:y0(),color:16777215,roughness:.82,side:xe});P0(k,n);const Y=new un(E,k,et.length);for(let w=0;w<et.length;w+=1){const L=et[w];nt.position.copy(L.position),nt.quaternion.copy(L.quaternion),nt.scale.setScalar(L.scale),nt.updateMatrix(),Y.setMatrixAt(w,nt.matrix)}Y.instanceMatrix.needsUpdate=!0,Y.castShadow=!0,Y.name="GPU waved race flags",t.add(Y),t.add(D0(d));const K=o.getSpacedPoints(180).map(w=>new At(w.x,w.z));function G(w=0,L=0,F=null){n.value=w,Ft.uniforms.uTime.value=w,jn.rotation.y=w*.012,Zn.position.x=Math.sin(w*.018)*3.5;const O=Math.min(.05,Math.max(0,L||0));for(let H=0;H<Je;H+=1){const $=H*3,Z=Is[H];let at=on[$+1]-O*Us[H];at<.08&&(at=4.5+Z/(Math.PI*2)*1.2),on[$]=mn[$]+Math.sin(w*.48+Z)*1.05+(5-at)*.075,on[$+1]=at,on[$+2]=mn[$+2]+Math.cos(w*.36+Z*1.3)*.72}yi.attributes.position.needsUpdate=!0}return{curve:o,trackLength:a,trackWidth:s,update:G,minimapPoints:K}}const ms=new R;function tn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ms.copy(t),ms[n]=0,ms.normalize();const c=.5*o/(o+a),u=1-ms.angleTo(i)/l;return Math.sign(ms[e])===1?u*c:a/(o+a)+c+c*(1-u)}class Gn extends Jn{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new R,c=new R,u=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,_=new R,m=.5/o;for(let d=0,M=0;d<h.length;d+=3,M+=2)switch(l.fromArray(h,d),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[d+0]=u.x*Math.sign(l.x)+c.x*r,h[d+1]=u.y*Math.sign(l.y)+c.y*r,h[d+2]=u.z*Math.sign(l.z)+c.z*r,p[d+0]=c.x,p[d+1]=c.y,p[d+2]=c.z,Math.floor(d/g)){case 0:_.set(1,0,0),f[M+0]=tn(_,c,"z","y",r,n),f[M+1]=1-tn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[M+0]=1-tn(_,c,"z","y",r,n),f[M+1]=1-tn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[M+0]=1-tn(_,c,"x","z",r,t),f[M+1]=tn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[M+0]=1-tn(_,c,"x","z",r,t),f[M+1]=1-tn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[M+0]=1-tn(_,c,"x","y",r,t),f[M+1]=1-tn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[M+0]=tn(_,c,"x","y",r,t),f[M+1]=1-tn(_,c,"y","x",r,e);break}}static fromJSON(t){return new Gn(t.width,t.height,t.depth,t.segments,t.radius)}}const ar=$i.clamp;function Jt(i,t=[0,0,0],e=[1,1,1],n=[0,0,0]){const s=i.clone(),r=new he,o=new Dn().setFromEuler(new pn(...n));return r.compose(new R(...t),o,new R(...e)),s.applyMatrix4(r),s}function be(i){const t=i.map(n=>{if(n.index===null)return n;const s=n.toNonIndexed();return n.dispose(),s}),e=Ra(t,!1);if(t.forEach(n=>n.dispose()),!e)throw new Error("Unable to merge procedural buffalo geometry.");return e.computeBoundingBox(),e.computeBoundingSphere(),e}function ae(i,t,e,n,s=!0){const r=new me(t,e);return r.name=n,r.castShadow=s,r.receiveShadow=!0,i.add(r),r}function cr(i,t,e=12,n=6){const s=new wr(i.map(r=>new R(...r)));return new Rr(s,e,t,n,!1)}function oi(i,t,e,n,s,r=8){const o=new R(...t),a=new R(...e),l=a.clone().sub(o),c=l.length();if(c<1e-5)return;const u=new Ke(s,n,c,r,1,!1),h=new Dn().setFromUnitVectors(new R(0,1,0),l.normalize()),p=new he().compose(o.clone().lerp(a,.5),h,new R(1,1,1));u.applyMatrix4(p),i.push(u)}function U0(i){const t=[[.24,.25,.05],[.43,.3,-.02],[.61,.35,-.16],[.68,.47,-.34],[.61,.61,-.49],[.48,.67,-.55]].map(([c,u,h])=>new R(c*i,u,h)),e=new wr(t),n=24,s=9,r=new Rr(e,n,.085,s,!1),o=r.attributes.position,a=new R,l=new R;for(let c=0;c<=n;c+=1){const u=c/n;e.getPointAt(u,a);const h=.065+.935*Math.pow(1-u,.8),p=1+Math.sin(u*Math.PI*18)*.055*(1-u);for(let f=0;f<=s;f+=1){const g=c*(s+1)+f;l.fromBufferAttribute(o,g),l.sub(a).multiplyScalar(h*p).add(a),o.setXYZ(g,l.x,l.y,l.z)}}return o.needsUpdate=!0,r.computeVertexNormals(),r.computeBoundingSphere(),r}function N0(i){const t={0:["a","b","c","d","e","f"],1:["b","c"],2:["a","b","g","e","d"],3:["a","b","g","c","d"],4:["f","g","b","c"],5:["a","f","g","c","d"],6:["a","f","g","e","c","d"],7:["a","b","c"],8:["a","b","c","d","e","f","g"],9:["a","b","c","d","f","g"]},e=.12,n=.22,s=.018,r=.012,o={a:[[0,n/2,0],[e,s,r]],g:[[0,0,0],[e,s,r]],d:[[0,-n/2,0],[e,s,r]],f:[[-e/2,n/4,0],[s,n/2,r]],b:[[e/2,n/4,0],[s,n/2,r]],e:[[-e/2,-n/4,0],[s,n/2,r]],c:[[e/2,-n/4,0],[s,n/2,r]]},a=new Jn(1,1,1),l=[],c=e+.045;return[...i].forEach((u,h)=>{const p=(h-(i.length-1)/2)*c;for(const f of t[u]){const[g,_]=o[f];l.push(Jt(a,[g[0]+p,g[1],g[2]],_))}}),a.dispose(),be(l)}function F0(i){const r=new Float32Array(399),o=new Float32Array(399),a=new Float32Array(266),l=[];for(let I=0;I<=18;I+=1)for(let S=0;S<=6;S+=1){const b=I*7+S;if(a[b*2]=I/18,a[b*2+1]=S/6,I<18&&S<6){const U=I*7+S,z=(I+1)*7+S,X=(I+1)*7+S+1,j=I*7+S+1;l.push(U,j,z,z,j,X)}}const c=new fe,u=new Le(r,3).setUsage(Oa),h=new Le(o,3).setUsage(Oa);c.setAttribute("position",u),c.setAttribute("normal",h),c.setAttribute("uv",new Le(a,2)),c.setIndex(l);const p=new me(c,i);p.name="Supple leather rein",p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1;const f=new R,g=new R,_=new R,m=new R,d=new R,M=new R,y=new R,v=new R(0,1,0),C=new R(1,0,0),A=.011;function P(I,S,b,U,z){f.copy(I).lerp(S,.5),f.y-=.15-U*.075,f.x+=z*Math.sin(b*3.1+z)*(.012+U*.018),f.z+=Math.sin(b*(4+U*4)+z)*.015*U;for(let X=0;X<=18;X+=1){const j=X/18,Q=1-j;g.copy(I).multiplyScalar(Q*Q).addScaledVector(f,2*Q*j).addScaledVector(S,j*j),_.copy(f).sub(I).multiplyScalar(2*Q),m.copy(S).sub(f).multiplyScalar(2*j),_.add(m).normalize();const et=Math.sin(Math.PI*j)*Math.sin(b*(3+U*5)-j*5+z);g.x+=z*et*(.006+U*.012),g.y+=et*U*.005;const rt=Math.abs(_.y)>.92?C:v;d.crossVectors(_,rt).normalize(),M.crossVectors(_,d).normalize();for(let J=0;J<=6;J+=1){const lt=J/6*Math.PI*2;y.copy(d).multiplyScalar(Math.cos(lt)).addScaledVector(M,Math.sin(lt)).normalize();const vt=X*7+J;r[vt*3]=g.x+y.x*A,r[vt*3+1]=g.y+y.y*A,r[vt*3+2]=g.z+y.z*A,o[vt*3]=y.x,o[vt*3+1]=y.y,o[vt*3+2]=y.z}}u.needsUpdate=!0,h.needsUpdate=!0}return{mesh:p,update:P}}function O0(i={}){const t=i&&typeof i=="object"?i:{},e=new Gt(t.bodyColor??3422775),n=new Gt(t.clothColor??10168632),s=new Gt(t.accentColor??13872481),r=new Gt(t.skinColor??14065784),o=e.clone().lerp(new Gt(8420208),.24),a=e.clone().lerp(new Gt(8411214),.48),l=(B,q=.8,W={})=>new Qt({color:B,roughness:q,metalness:0,...W}),c={body:l(e,.86),muzzle:l(o,.78),innerEar:l(a,.9),horn:l(2368287,.48,{flatShading:!0}),hoof:l(2697767,.67,{flatShading:!0}),eye:l(591879,.16),darkDetail:l(1184015,.7),glint:l(16773596,.25,{emissive:16770498,emissiveIntensity:.18}),cloth:l(n,.91),accent:l(s,.68),number:l(16773330,.7),leather:l(4204828,.76),rope:l(6834219,.82),skin:l(r,.82),jacket:l(2705757,.92,{flatShading:!0}),pants:l(2700346,.94),binding:l(13154708,.96),straw:l(13083489,.9,{flatShading:!0}),shoe:l(2107177,.93)},u=new ve;u.name="Chinese water buffalo and shepherd boy";const h=new ve;h.name="Animated buffalo body",u.add(h);const p=new mi(1,18,12),f=new mi(1,10,7),g=be([Jt(p,[0,1.43,-.05],[.64,.6,1.02]),Jt(p,[0,1.45,-.68],[.66,.64,.68]),Jt(p,[0,1.52,.57],[.65,.68,.65]),Jt(p,[0,1.62,.99],[.45,.53,.49]),Jt(p,[0,1.19,.09],[.53,.39,.83]),Jt(p,[0,1.25,.8],[.39,.39,.4])]);ae(h,g,c.body,"Barrel, haunches, shoulders and dewlap");const _=new ve;_.name="Head animation pivot",_.position.set(0,1.72,1.08),h.add(_);const m=be([Jt(p,[0,.02,.18],[.36,.37,.4]),Jt(p,[-.17,-.11,.31],[.23,.24,.29]),Jt(p,[.17,-.11,.31],[.23,.24,.29]),Jt(p,[0,.09,.42],[.25,.26,.25])]);ae(_,m,c.body,"Broad water buffalo skull"),ae(_,Jt(p,[0,-.15,.57],[.3,.22,.31]),c.muzzle,"Heavy soft muzzle");for(const B of[-1,1])ae(_,U0(B),c.horn,B<0?"Left crescent horn":"Right crescent horn");const d=[];for(const B of[-1,1]){const q=new ve;q.position.set(B*.34,.17,.08),_.add(q);const W=ae(q,p,c.body,"Leaf-shaped ear");W.position.set(B*.12,0,0),W.scale.set(.22,.065,.12),W.rotation.set(.1,B*.18,B*.25);const ht=ae(q,f,c.innerEar,"Inner ear",!1);ht.position.set(B*.13,.047,.015),ht.scale.set(.14,.018,.075),ht.rotation.copy(W.rotation),d.push({pivot:q,side:B})}const M=[],y=[],v=[];for(const B of[-1,1])M.push(Jt(f,[B*.325,.09,.4],[.043,.045,.035])),y.push(Jt(f,[B*.34,.108,.418],[.011,.011,.011])),v.push(Jt(f,[B*.135,-.13,.858],[.052,.035,.018]));ae(_,be(M),c.eye,"Dark alert eyes",!1),ae(_,be(y),c.glint,"Eye catchlights",!1),ae(_,be(v),c.darkDetail,"Wide nostrils",!1),ae(_,cr([[-.19,-.245,.73],[0,-.275,.82],[.19,-.245,.73]],.009,10,5),c.darkDetail,"Curved mouth line",!1);const C=ae(_,new Ar(1,.045,6,24),c.leather,"Muzzle bridle band");C.position.set(0,-.12,.62),C.scale.set(.3,.22,.7);const A=[];for(const B of[-1,1])A.push(cr([[B*.28,.26,.16],[B*.34,.05,.36],[B*.27,-.1,.62]],.018,10,5));A.push(cr([[-.26,.23,.22],[0,.3,.36],[.26,.23,.22]],.016,10,5)),ae(_,be(A),c.leather,"Cheek straps and brow band");const P=be([Jt(p,[0,-.08,0],[.16,.21,.17]),Jt(new Ke(.14,.095,.44,9),[0,-.25,0])]),I=be([Jt(new Ke(.085,.052,.5,8),[0,-.28,0]),Jt(f,[0,-.02,0],[.09,.08,.09]),Jt(f,[0,-.54,.01],[.072,.095,.075])]),S=be([Jt(new Gn(.09,.2,.24,2,.024),[-.052,0,.035]),Jt(new Gn(.09,.2,.24,2,.024),[.052,0,.035])]),b=[];[{x:-.46,z:.68,front:!0,phase:0},{x:.46,z:.68,front:!0,phase:Math.PI},{x:-.47,z:-.7,front:!1,phase:Math.PI+.35},{x:.47,z:-.7,front:!1,phase:.35}].forEach((B,q)=>{const W=new ve;W.name=B.front?"Front leg hip":"Rear leg hip",W.position.set(B.x,1.27,B.z),h.add(W),ae(W,P,c.body,"Muscular upper leg");const ht=new ve;ht.position.y=-.45,W.add(ht),ae(ht,I,c.body,"Tapered cannon bone and fetlock");const ot=ae(ht,S,c.hoof,"Cloven two-toed hoof");ot.position.set(0,-.7,0),b.push({hip:W,knee:ht,hoof:ot,phase:B.phase,front:B.front,index:q})});const z=new ve;z.name="Tail swish pivot",z.position.set(0,1.58,-1.28),h.add(z),ae(z,cr([[0,0,0],[0,-.08,-.16],[.02,-.32,-.29],[0,-.57,-.4],[0,-.72,-.42]],.032,16,7),c.body,"Curved tail");const X=ae(z,f,c.horn,"Tail switch");X.position.set(0,-.73,-.42),X.scale.set(.09,.18,.09);const j=new ve;j.name="Chinese racing saddle cloth",h.add(j),ae(j,new Gn(1.04,.12,1.12,3,.055),c.cloth,"Rounded saddle blanket").position.set(0,2.06,-.12);const Q=Number(t.number??8),et=Number.isFinite(Q)?String(Math.trunc(ar(Q,0,99))):"8",rt=N0(et),J=new Gn(.5,.36,.035,2,.025),lt=new Gn(.065,.55,1.02,2,.025),vt=new Ke(.018,.018,1.02,8),It=[];for(const B of[-1,1]){const q=new ve;q.position.set(B*.6,2.06,-.12),j.add(q),ae(q,lt,c.cloth,"Hanging saddle cloth").position.set(B*.055,-.27,0);const ht=ae(q,vt,c.accent,"Saddle cloth lower border");ht.position.set(B*.09,-.54,0),ht.rotation.x=Math.PI/2;const ot=new ve;ot.name=`Race number ${et}`,ot.position.set(B*.092,-.25,.04),ot.rotation.y=B*Math.PI/2,q.add(ot),ae(ot,J,c.accent,"Rounded number plate");const bt=ae(ot,rt,c.number,"Geometry race numeral",!1);bt.position.z=.025,It.push({pivot:q,side:B})}const Ht=new ve;Ht.name="Shepherd boy rider",h.add(Ht);const ee=[Jt(p,[0,2.18,-.18],[.25,.16,.22])],le=[],jt=[];for(const B of[-1,1]){const q=[B*.14,2.18,-.18],W=[B*.61,1.91,.02],ht=[B*.65,1.49,.03];oi(ee,q,W,.105,.083,9),ee.push(Jt(f,W,[.088,.09,.09])),oi(le,W,ht,.069,.057,9);const ot=new R(...W),bt=new R(...ht),yt=bt.clone().sub(ot).normalize();for(const ct of[.2,.42,.64,.83]){const gt=ot.clone().lerp(bt,ct),Nt=gt.clone().addScaledVector(yt,-.014),Mt=gt.clone().addScaledVector(yt,.014);oi(le,Nt.toArray(),Mt.toArray(),.073,.073,9)}jt.push(Jt(p,[B*.65,1.43,.12],[.11,.07,.17]))}ae(Ht,be(ee),c.pants,"Seated trousers and bent thighs"),ae(Ht,be(le),c.binding,"Traditional wrapped calf bindings"),ae(Ht,be(jt),c.shoe,"Black cloth riding shoes");const tt=new ve;tt.name="Rider upper-body sway",tt.position.set(0,2.18,-.18),Ht.add(tt);const st=[Jt(new Ke(.19,.24,.44,10),[0,.29,0],[1,1,.78]),Jt(p,[0,.43,0],[.23,.14,.16]),Jt(new Ke(.105,.115,.08,12),[0,.54,.015],[1,1,.85])],Et=[],Ft=[];for(const B of[-1,1]){const q=[B*.21,.43,0],W=[B*.29,.25,.2],ht=[B*.23,.14,.48];oi(st,q,W,.078,.064,9),st.push(Jt(f,q,[.08,.085,.08])),oi(Et,W,ht,.055,.043,9),Et.push(Jt(f,W,[.059,.06,.06])),Et.push(Jt(f,ht,[.058,.052,.07]));const ot=new Me;ot.position.set(...ht),tt.add(ot),Ft.push({anchor:ot,side:B})}oi(Et,[0,.5,.02],[0,.62,.02],.075,.07,10),ae(tt,be(st),c.jacket,"Indigo short jacket and sleeves"),ae(tt,be(Et),c.skin,"Forearms, gripping hands and neck");const Ct=[Jt(new Gn(.025,.36,.018,1,.006),[0,.29,.165])];for(const B of[.4,.28,.16])oi(Ct,[-.067,B,.18],[.067,B,.18],.011,.011,7),Ct.push(Jt(f,[0,B,.187],[.022,.018,.012]));ae(tt,be(Ct),c.accent,"Chinese frog-button placket",!1);const kt=new ve;kt.name="Rider head look pivot",kt.position.set(0,.66,.02),tt.add(kt);const Se=be([Jt(p,[0,0,0],[.155,.18,.15]),Jt(f,[0,-.015,.145],[.035,.045,.04]),Jt(f,[-.155,0,0],[.035,.055,.025]),Jt(f,[.155,0,0],[.035,.055,.025])]);ae(kt,Se,c.skin,"Boy face, nose and ears");const D=[];for(const B of[-1,1])D.push(Jt(f,[B*.058,.035,.137],[.014,.018,.012])),D.push(Jt(f,[B*.058,.07,.135],[.024,.006,.008]));ae(kt,be(D),c.eye,"Boy eyes and brows",!1);const ie=new Vi(.35,.2,24,1,!1);ie.translate(0,.25,0);const Ot=new Ke(.37,.37,.025,24);Ot.translate(0,.15,0),ae(kt,be([ie,Ot]),c.straw,"Conical bamboo douli hat");const Ut=[];for(const B of[-1,1]){const q=new Me;q.position.set(B*.27,-.1,.64),_.add(q),Ut.push({anchor:q,side:B})}const nt=[],qt=new he,Rt=new R,Vt=new R;for(let B=0;B<2;B+=1){const q=F0(c.rope);h.add(q.mesh),nt.push(q)}let pe,te=0,T=0;function x(B){u.updateWorldMatrix(!0,!0),qt.copy(h.matrixWorld).invert();for(let q=0;q<nt.length;q+=1)Rt.setFromMatrixPosition(Ut[q].anchor.matrixWorld).applyMatrix4(qt),Vt.setFromMatrixPosition(Ft[q].anchor.matrixWorld).applyMatrix4(qt),nt[q].update(Rt,Vt,B,T,Ut[q].side)}function V(B,q,W=0){const ht=Number.isFinite(B)?B:0,ot=Number(q),bt=Number.isFinite(ot)?Math.abs(ot):0,yt=ar(Number.isFinite(W)?W:0,-1,1),ct=ar(bt/6,0,1),gt=pe===void 0?0:ar(ht-pe,0,.05);pe===void 0?T=ct:T+=(ct-T)*(1-Math.exp(-gt*8)),pe=ht,te+=gt*(3+7*T)*Math.min(bt*1.5,1);const Nt=Math.sin(ht*1.7)*.006*(1-T);h.position.y=Nt+Math.sin(te*2)*.035*T,h.rotation.z=-yt*(.018+T*.026),h.rotation.x=Math.sin(te*2)*.012*T;for(const Mt of b){const ft=te+Mt.phase,Bt=Math.sin(ft),N=Math.max(0,-Bt);Mt.hip.rotation.x=Bt*.58*T;const dt=(.08+.58*N)*T;Mt.knee.rotation.x=Mt.front?dt:-dt*.68,Mt.hoof.rotation.x=-(Mt.hip.rotation.x+Mt.knee.rotation.x)*.42,Mt.hoof.rotation.z=Math.sin(ft+Mt.index)*.025*T}_.rotation.y=yt*.18+Math.sin(ht*.72)*.012*(1-T),_.rotation.x=Math.sin(te*2+.4)*.027*T+Math.sin(ht*1.3)*.012*(1-T),_.rotation.z=-yt*.045;for(const{pivot:Mt,side:ft}of d){const Bt=Math.pow(Math.max(0,Math.sin(ht*.83+ft*1.7)),12)*Math.sin(ht*15);Mt.rotation.y=ft*(.04*Math.sin(ht*1.9+ft)+Bt*.1),Mt.rotation.z=ft*(.1+.035*Math.sin(ht*1.4+ft))+Math.sin(te*2+ft)*.025*T}z.rotation.z=Math.sin(ht*(2.1+T*4.5))*(.13+T*.2)+yt*.1,z.rotation.x=-.06+T*.1+Math.sin(ht*1.6)*.045,X.rotation.z=Math.sin(ht*3.2+.7)*(.08+T*.12),tt.rotation.x=T*.07+Math.sin(te*2)*.014*T,tt.rotation.z=-yt*.085+Math.sin(te)*.014*T,kt.rotation.y=yt*.11+Math.sin(ht*.6)*.01,kt.rotation.z=yt*.025;for(const{pivot:Mt,side:ft}of It)Mt.rotation.z=ft*(.012+Math.sin(te*2+ft*.8)*.035*T)+yt*.012,Mt.rotation.x=Math.sin(te*2.7+ft)*.024*T;x(ht)}return V(0,0,0),pe=void 0,te=0,T=0,{group:u,update:V}}class B0{constructor(){this.context=null,this.master=null,this.enabled=!1,this.nextNote=0,this.nextHoof=0,this.noteIndex=0}ensure(){if(this.context){this.context.state==="suspended"&&this.context.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.context=new t;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination);const n=e.sampleRate*3,s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);let o=0;for(let u=0;u<n;u++)o=o*.985+(Math.random()*2-1)*.015,r[u]=o*2.4;const a=e.createBufferSource();a.buffer=s,a.loop=!0;const l=e.createBiquadFilter();l.type="lowpass",l.frequency.value=720;const c=e.createGain();c.gain.value=.12,a.connect(l).connect(c).connect(this.master),a.start()}setEnabled(t){this.enabled=t,t&&this.ensure(),!(!this.context||!this.master)&&(this.context.state==="suspended"&&this.context.resume(),this.master.gain.cancelScheduledValues(this.context.currentTime),this.master.gain.setTargetAtTime(t?.34:0,this.context.currentTime,.08))}tone(t,e=.18,n=.12,s="sine",r=0){if(!this.enabled||!this.context)return;const o=this.context,a=o.currentTime+r,l=o.createOscillator(),c=o.createGain();l.type=s,l.frequency.setValueAtTime(t,a),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.018),c.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(c).connect(this.master),l.start(a),l.stop(a+e+.03)}countdown(t){this.tone(t>0?392:587.33,t>0?.2:.5,.18,"triangle"),t===0&&this.tone(880,.55,.08,"sine",.04)}boost(){this.tone(164.81,.28,.07,"sawtooth"),this.tone(329.63,.35,.05,"triangle",.04)}finish(){[293.66,369.99,440,587.33].forEach((t,e)=>this.tone(t,1.2,.08,"sine",e*.12))}update(t,e){if(!this.enabled||!this.context)return;const n=this.context.currentTime;if(e&&t>3&&n>=this.nextHoof){const s=Math.max(.12,.46-t*.008);this.nextHoof=n+s,this.tone(72+Math.random()*18,.075,.055,"triangle"),this.tone(135+Math.random()*25,.045,.025,"sine",.02)}if(n>=this.nextNote){const s=[293.66,329.63,369.99,440,493.88,587.33],r=[0,2,4,3,1,3,5,4,2,1,0,3],o=s[r[this.noteIndex++%r.length]];this.tone(o,1.5,.025,"sine"),this.tone(o*2.005,.85,.008,"triangle",.02),this.nextNote=n+(e?1.45:2.1)+Math.random()*.8}}}const xt=i=>document.getElementById(i),fn=$i.clamp,Ls=$i.damp,z0=Math.PI*2,Tl=2,vi=new B0,ze=Object.create(null),Pn={left:!1,right:!1,gas:!1,brake:!1,boost:!1},k0=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let sn,Ce,ke,ue,_t,ce="loading",wl="racing",oa="normal",Pe=[],rs=0,$n=0,pr=0,aa=-1,Ss=0,yr=0,Hn=6,Ca=[],en=0,Vn=!1,zc=0,mr=0,fo=0,Er=performance.now(),Te;const Al=()=>ue.trackLength*Tl,Yn=new R,br=new R,ca=new R,Zi=new R,Cn=new R,Wi=new R,G0=[{name:"阿禾",buffalo:"青嶂",village:"青溪村",bodyColor:"#353a37",clothColor:"#a33e2c",accentColor:"#d6b36d",skill:1,player:!0},{name:"林小满",buffalo:"墨岩",village:"竹林村",bodyColor:"#303432",clothColor:"#315f68",accentColor:"#c5a256",topSpeed:28.5},{name:"石阿宝",buffalo:"大山",village:"石潭村",bodyColor:"#48443c",clothColor:"#a55432",accentColor:"#dbc27f",topSpeed:27.8},{name:"沈青青",buffalo:"乌澜",village:"枕水村",bodyColor:"#292f31",clothColor:"#486647",accentColor:"#cdb578",topSpeed:29.1},{name:"陆阿远",buffalo:"沉霄",village:"云岭村",bodyColor:"#3b3936",clothColor:"#564c78",accentColor:"#d0ad63",topSpeed:28.7},{name:"白荞",buffalo:"铁柱",village:"稻香村",bodyColor:"#494b45",clothColor:"#b08a3f",accentColor:"#e1c98c",topSpeed:27.4}];function ji(i){if(!Number.isFinite(i))return"--:--.---";const t=Math.floor(i/60),e=Math.floor(i%60),n=Math.floor(i%1*1e3);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}.${String(n).padStart(3,"0")}`}function Qi(i){const t=xt("toast");t.textContent=i,t.classList.add("show"),clearTimeout(zc),zc=setTimeout(()=>t.classList.remove("show"),1900)}function Rl(i,t,e=2.1){const n=xt("race-message");n.querySelector("small").textContent=i,n.querySelector("strong").textContent=t,n.classList.add("show"),mr=e}function H0(){sn.background=new Gt("#b8cdc2"),sn.fog=new xa("#b7c9b9",105,325);const i=new me(new mi(440,32,16),new Sn({side:Ge,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vWorld; void main(){ vec4 world = modelMatrix * vec4(position,1.0); vWorld = world.xyz; gl_Position = projectionMatrix * viewMatrix * world; }",fragmentShader:`
        varying vec3 vWorld;
        void main(){
          vec3 dir = normalize(vWorld - cameraPosition);
          float h = smoothstep(-0.12, 0.72, dir.y);
          vec3 horizon = vec3(0.82, 0.82, 0.69);
          vec3 zenith = vec3(0.35, 0.59, 0.64);
          vec3 color = mix(horizon, zenith, h);
          float sun = pow(max(dot(dir, normalize(vec3(-0.55,0.48,-0.35))), 0.0), 180.0);
          color += vec3(1.0,0.72,0.38) * sun * 0.85;
          gl_FragColor = vec4(color,1.0);
        }`}));i.frustumCulled=!1,sn.add(i);const t=new Ch("#fff0cf","#465e4b",2);sn.add(t);const e=new hc("#ffe0aa",3.25);e.position.set(-65,95,35),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-62,e.shadow.camera.right=62,e.shadow.camera.top=62,e.shadow.camera.bottom=-62,e.shadow.camera.near=15,e.shadow.camera.far=240,e.shadow.bias=-3e-4,e.shadow.normalBias=.025,e.shadow.radius=3,sn.add(e,e.target);const n=new hc("#b9d8d2",.75);return n.position.set(65,35,-70),sn.add(n),e}function V0(){const t=new Float32Array(780);t.fill(-100);const e=new fe;e.setAttribute("position",new Le(t,3));const n=new Sa({color:"#dbc392",size:.32,transparent:!0,opacity:.42,depthWrite:!1,sizeAttenuation:!0}),s=new fl(e,n);return s.frustumCulled=!1,sn.add(s),{points:s,positions:t,cursor:0,emission:0,particles:Array.from({length:260},()=>({life:0,velocity:new R}))}}function W0(i,t){if(!Te||i.speed<5)return;const e=Math.abs(i.lane)>ue.trackWidth*.5-.6;for(Te.emission+=t*i.speed*(e?1.8:.65);Te.emission>=1;){Te.emission--;const n=Te.cursor++%Te.particles.length,s=Te.particles[n],r=n*3,o=(Math.random()-.5)*1.35;Yn.set(i.tangent.z,0,-i.tangent.x),Te.positions[r]=i.point.x-i.tangent.x*1.45+Yn.x*o,Te.positions[r+1]=i.point.y+.2+Math.random()*.15,Te.positions[r+2]=i.point.z-i.tangent.z*1.45+Yn.z*o,s.velocity.set(-i.tangent.x*(.7+Math.random())+(Math.random()-.5),.3+Math.random()*.5,-i.tangent.z*(.7+Math.random())+(Math.random()-.5)),s.life=.65+Math.random()*.55}}function X0(i){if(Te){for(let t=0;t<Te.particles.length;t++){const e=Te.particles[t];if(e.life<=0)continue;e.life-=i;const n=t*3;if(e.life<=0){Te.positions[n+1]=-100;continue}Te.positions[n]+=e.velocity.x*i,Te.positions[n+1]+=e.velocity.y*i,Te.positions[n+2]+=e.velocity.z*i,e.velocity.multiplyScalar(Math.max(0,1-i*1.4))}Te.points.geometry.attributes.position.needsUpdate=!0}}function q0(){const i=[{distance:-13,lane:2.05},{distance:-2.8,lane:-2.05},{distance:-2.8,lane:2.05},{distance:-7.8,lane:-2.05},{distance:-7.8,lane:2.05},{distance:-12.8,lane:-2.05}];Pe=G0.map((t,e)=>{const n=O0({...t,number:e+1});return sn.add(n.group),{...t,index:e,model:n,group:n.group,point:new R,tangent:new R(0,0,1),initialDistance:i[e].distance,initialLane:i[e].lane,distance:i[e].distance,lane:i[e].lane,speed:0,steering:0,targetLane:i[e].lane,boost:100,boosting:!1,finished:!1,finishTime:null,currentLap:1,nextLapDistance:ue.trackLength,lapStart:0,lapTimes:[],bestLap:1/0,phase:e*1.73,reaction:e*.11}}),_t=Pe[0]}function Pa(){rs=0,yr=0,Ca=[];for(const i of Pe)i.distance=i.initialDistance,i.lane=i.initialLane,i.targetLane=i.initialLane,i.speed=0,i.steering=0,i.boost=100,i.boosting=!1,i.finished=!1,i.finishTime=null,i.currentLap=1,i.nextLapDistance=ue.trackLength,i.lapStart=0,i.lapTimes=[],i.bestLap=1/0,i.section=-1,Rs(i,0);xt("timer").textContent="00:00.000",xt("best-lap").textContent="最佳 --:--.---",xt("lap").textContent="1",xt("speed").textContent="0",xt("boost-fill").style.width="100%",xt("lap-progress").style.width="0%",xt("result-screen").classList.remove("is-visible"),xt("pause-screen").classList.remove("is-visible"),xt("race-message").classList.remove("show"),Pr()}function Rs(i,t){const e=(i.distance%ue.trackLength+ue.trackLength)%ue.trackLength/ue.trackLength;ue.curve.getPointAt(e,i.point),ue.curve.getTangentAt(e,i.tangent).normalize(),Yn.set(i.tangent.z,0,-i.tangent.x).normalize(),i.group.position.copy(i.point).addScaledVector(Yn,i.lane),i.group.position.y+=.16;const n=Math.atan2(i.tangent.x,i.tangent.z);i.group.rotation.set(0,n+i.steering*.105,-i.steering*.025),i.model.update($n+i.phase,i.speed,i.steering,t)}function Pr(){Object.keys(ze).forEach(i=>{ze[i]=!1}),Object.keys(Pn).forEach(i=>{Pn[i]=!1}),document.querySelectorAll("[data-control]").forEach(i=>i.classList.remove("pressed"))}function po(){_t&&(Pa(),ce="countdown",pr=3,aa=-1,Ss=0,xt("start-screen").classList.remove("is-visible"),xt("pause-screen").classList.remove("is-visible"),xt("result-screen").classList.remove("is-visible"),xt("game").classList.add("is-racing"),xt("countdown").classList.add("show"),en=0,xt("camera-label").textContent="追逐视角",xt("camera-button").disabled=!1,xt("pause-button").disabled=!1,xt("pause-button").setAttribute("aria-label","暂停比赛"),xt("pause-button").title="暂停（Esc）",rg())}function Y0(){ce="menu",Pa(),xt("game").classList.remove("is-racing"),xt("result-screen").classList.remove("is-visible"),xt("pause-screen").classList.remove("is-visible"),xt("countdown").classList.remove("show"),xt("start-screen").classList.add("is-visible")}function mo(){["racing","countdown"].includes(ce)&&(wl=ce,ce="paused",Pr(),xt("camera-button").disabled=!0,xt("pause-button").setAttribute("aria-label","继续比赛"),xt("pause-button").title="继续（Esc）",xt("pause-screen").classList.add("is-visible"))}function go(){ce==="paused"&&(ce=wl,xt("camera-button").disabled=!1,xt("pause-button").setAttribute("aria-label","暂停比赛"),xt("pause-button").title="暂停（Esc）",xt("pause-screen").classList.remove("is-visible"),Er=performance.now())}function K0(i){pr-=i;const t=Math.max(0,Math.ceil(pr));if(t!==aa){aa=t;const e=xt("countdown");e.querySelector("span").textContent=t>0?t:"逐风",e.querySelector("small").textContent=t>0?["","备 鞍","握 缰","凝 神"][t]:"百 牛 争 先",e.classList.remove("pop"),e.offsetWidth,e.classList.add("pop"),vi.countdown(t)}pr<=0&&(ce="racing",rs=0,Ss=.85)}function $0(i){const t=(i.distance%ue.trackLength+ue.trackLength)%ue.trackLength/ue.trackLength;ue.curve.getTangentAt((t+.009)%1,br);const e=Math.acos(fn(i.tangent.dot(br),-1,1));return fn(1-e*1.8,.7,1)}function J0(i){const t=ze.KeyW||ze.ArrowUp||Pn.gas,e=ze.KeyS||ze.ArrowDown||Pn.brake,n=ze.KeyA||ze.ArrowLeft||Pn.left,s=ze.KeyD||ze.ArrowRight||Pn.right,r=ze.Space||ze.ShiftLeft||ze.ShiftRight||Pn.boost,o=(s?1:0)-(n?1:0);_t.steering=Ls(_t.steering,o,8.5,i);const a=Math.abs(_t.lane)>ue.trackWidth*.5-.75,l=_t.boosting;_t.boosting=!!(r&&_t.boost>1&&_t.speed>4&&!e),_t.boosting&&!l&&vi.boost();let c=_t.boosting?42:33;a&&(c=Math.min(c,17));let u=t?11.8:-2.4;e&&(u=-20),_t.boosting?(u+=14,_t.boost=Math.max(0,_t.boost-25*i)):_t.boost=Math.min(100,_t.boost+(t?6.5:10)*i),a&&(u-=5.5),_t.speed>c&&(u=Math.min(u,a?-9:-4)),_t.speed=fn(_t.speed+u*i,0,42);const h=1.25+_t.speed*.15;_t.lane=fn(_t.lane+_t.steering*h*i,-ue.trackWidth*.5-3.6,ue.trackWidth*.5+3.6);const p=_t.distance;_t.distance+=_t.speed*i,Cl(_t,p,i),W0(_t,i)}function Z0(i,t){if(rs<i.reaction)return;const e=_t.distance-i.distance,n=oa==="hard"?2.25:0;let s=i.topSpeed+n;s*=$0(i),e>35&&(s+=1.5),e<-45&&(s-=1.1),i.finished&&(s=17),i.targetLane=Math.sin($n*.18+i.phase)*2.65+Math.sin(i.phase*2.1)*.65;for(const a of Pe){if(a===i)continue;const l=a.distance-i.distance;l>0&&l<6&&Math.abs(a.lane-i.lane)<1.6&&(i.targetLane+=a.lane>0?-2.2:2.2)}i.targetLane=fn(i.targetLane,-4.4,4.4),i.steering=Ls(i.steering,fn((i.targetLane-i.lane)*.55,-1,1),3.5,t),i.lane+=i.steering*(2+i.speed*.08)*t;const r=i.speed<s?8.2:-5;i.speed=fn(i.speed+r*t,0,36);const o=i.distance;i.distance+=i.speed*t,Cl(i,o,t)}function Cl(i,t,e){for(;!i.finished&&i.distance>=i.nextLapDistance;){const n=Math.max(1e-4,i.distance-t),s=fn((i.nextLapDistance-t)/n,0,1),r=rs-e+s*e,o=r-i.lapStart;i.lapTimes.push(o),i.bestLap=Math.min(i.bestLap,o),i.lapStart=r,i.nextLapDistance+=ue.trackLength,i.currentLap++,i.distance>=Al()?(i.finished=!0,i.finishTime=r):i.player&&(Rl("青溪古道","最终圈",2.4),xt("best-lap").textContent=`最佳 ${ji(i.bestLap)}`,vi.tone(523.25,.35,.09,"triangle"))}}function j0(){for(let i=0;i<Pe.length;i++)for(let t=i+1;t<Pe.length;t++){const e=Pe[i],n=Pe[t],s=Math.abs(e.distance-n.distance),r=e.lane-n.lane;if(s<3.25&&Math.abs(r)<1.45){const o=e.distance<n.distance?e:n,a=o===e?n:e;o.speed=Math.min(o.speed,a.speed*.93);const l=(1.45-Math.abs(r))*.035;e.lane+=r>=0?l:-l,n.lane-=r>=0?l:-l,(e.player||n.player)&&(_t.speed*=.998)}}}function Q0(i){rs+=i,J0(i);for(let t=1;t<Pe.length;t++)Z0(Pe[t],i);j0(),_t.finished&&ce==="racing"&&eg();for(const t of Pe)Rs(t,i);Ss>0&&(Ss-=i,Ss<=0&&xt("countdown").classList.remove("show"))}function tg(i){_t.boosting=!1,_t.speed=Ls(_t.speed,10,1.4,i),_t.distance+=_t.speed*i;for(let t=1;t<Pe.length;t++){const e=Pe[t];e.distance+=e.speed*i}for(const t of Pe)Rs(t,i);yr-=i,yr<=0&&ng()}function Pl(){return[...Pe].sort((i,t)=>i.finishTime!==null&&t.finishTime!==null?i.finishTime-t.finishTime:i.finishTime!==null?-1:t.finishTime!==null?1:t.distance-i.distance)}function Ll(){return Pl().indexOf(_t)+1}function eg(){Hn=Ll(),Ca=Pl().map(i=>({name:i.name,buffalo:i.buffalo,clothColor:i.clothColor,player:i.player,finishTime:i.finishTime,gap:i.finishTime!==null?ji(i.finishTime):`+${Math.max(0,Al()-i.distance).toFixed(0)}m`})),ce="finished",yr=1.7,Pr(),Rl("青溪古道 · 完赛",Hn===1?"一骑绝尘":"逐风而归",2.2),xt("best-lap").textContent=`最佳 ${ji(_t.bestLap)}`,vi.finish()}function ng(){ce="result",xt("camera-button").disabled=!0,xt("pause-button").disabled=!0,xt("result-position").textContent=Hn,xt("result-time").textContent=ji(_t.finishTime),xt("result-best").textContent=ji(_t.bestLap),xt("result-title").textContent=Hn===1?"一骑绝尘":Hn<=3?"逐风而归":"来日争先",xt("result-seal").textContent=Hn===1?"胜":"归",xt("result-subtitle").textContent=Hn===1?"青溪古道 · 魁首":`青溪古道 · 第 ${Hn} 名`;const i=xt("result-standings");i.replaceChildren(),Ca.forEach((t,e)=>{const n=document.createElement("li");t.player&&n.classList.add("player"),n.innerHTML=`<b>${e+1}</b><i style="background:${t.clothColor}"></i><span>${t.name} · ${t.buffalo}</span><small>${t.gap}</small>`,i.appendChild(n)}),xt("result-screen").classList.add("is-visible")}function ig(i){xt("position").textContent=Ll();const t=fn(_t.currentLap,1,Tl);xt("lap").textContent=t;const e=_t.finished?1:fn(Math.max(0,_t.distance)/ue.trackLength%1,0,1);xt("lap-progress").style.width=`${e*100}%`,xt("timer").textContent=ji(rs),xt("speed").textContent=Math.round(_t.speed*3.6),xt("boost-fill").style.width=`${_t.boost}%`;const n=xt("speed-arc"),s=n.dataset.length||n.getTotalLength();n.dataset.length=s,n.style.strokeDasharray=s,n.style.strokeDashoffset=s*(1-fn(_t.speed/42,0,1)),fo-=i,fo<=0&&(fo=.075,sg())}let Bi;function sg(){const i=xt("minimap"),t=i.getContext("2d"),e=i.width,n=i.height;if(t.clearRect(0,0,e,n),!Bi){const a=ue.curve.getPoints(160),l=a.map(_=>_.x),c=a.map(_=>_.z),u=Math.min(...l),h=Math.max(...l),p=Math.min(...c),f=Math.max(...c),g=Math.min((e-34)/(h-u),(n-26)/(f-p));Bi={cx:(u+h)/2,cz:(p+f)/2,scale:g}}const s=a=>[e/2+(a.x-Bi.cx)*Bi.scale,n/2+(a.z-Bi.cz)*Bi.scale],r=(a,l)=>{t.beginPath();for(let c=0;c<=160;c++){const[u,h]=s(ue.curve.getPointAt(c%160/160,ca));c===0?t.moveTo(u,h):t.lineTo(u,h)}t.lineWidth=a,t.strokeStyle=l,t.lineJoin="round",t.stroke()};r(8,"rgba(9,25,20,.38)"),r(2,"rgba(229,219,188,.55)");const o=s(ue.curve.getPointAt(0,ca));t.fillStyle="#e7d8b5",t.fillRect(o[0]-3,o[1]-3,6,6);for(const a of Pe){const[l,c]=s(a.point);t.beginPath(),t.arc(l,c,a.player?4.2:2.6,0,z0),t.fillStyle=a.player?"#f0c578":a.clothColor,t.fill(),a.player&&(t.lineWidth=1.4,t.strokeStyle="#fff2cf",t.stroke())}}function rg(){Dl(1,!0)}function Dl(i,t=!1){if(!_t)return;const e=_t.speed/42,n=[10.5,15.5,6.4],s=[5.4,13.5,3.25],r=[7.5,10,6],o=n[en]+e*1.4;Cn.copy(_t.group.position).addScaledVector(_t.tangent,-o),Cn.y+=s[en],Yn.set(_t.tangent.z,0,-_t.tangent.x),en===2&&Cn.addScaledVector(Yn,.35),(_t.boosting||Math.abs(_t.lane)>6)&&!k0&&(Cn.x+=Math.sin($n*31)*.025*e,Cn.y+=Math.sin($n*37)*.025*e),Wi.copy(_t.group.position).addScaledVector(_t.tangent,r[en]+_t.speed*.055),Wi.y+=en===1?.5:1.65;const a=t?1:1-Math.exp(-i*(en===1?3.2:5.2));Ce.position.lerp(Cn,a),Zi.lerp(Wi,t?1:1-Math.exp(-i*7)),Ce.lookAt(Zi);const l=(en===1?53:57)+(_t.boosting?7:0)+e*2;Ce.fov=Ls(Ce.fov,l,4,i),Ce.updateProjectionMatrix()}function og(i){const t=Yn.copy(_t.group.position).addScaledVector(_t.tangent,7);br.set(_t.tangent.z,0,-_t.tangent.x),Cn.copy(t).addScaledVector(_t.tangent,-22).addScaledVector(br,16+Math.sin($n*.12)*3),Cn.y+=8.5+Math.sin($n*.17)*.5,Wi.copy(t).addScaledVector(_t.tangent,4),Wi.y=2,Ce.position.lerp(Cn,1-Math.exp(-i*1.7)),Zi.lerp(Wi,1-Math.exp(-i*2)),Ce.lookAt(Zi),Ce.fov=Ls(Ce.fov,52,3,i),Ce.updateProjectionMatrix()}function ag(){if(!_t||ce!=="racing")return;const i=(_t.distance%ue.trackLength+ue.trackLength)%ue.trackLength/ue.trackLength,t=Math.floor(i*4);if(_t.section===-1){_t.section=t;return}t!==_t.section&&(_t.section=t,Qi(`途经 · ${["青溪牌坊","稻香田","枕水人家","竹林坡"][t]}`))}function kc(){if(!["racing","countdown","finished"].includes(ce))return;en=(en+1)%3;const i=["追逐视角","俯瞰视角","近景视角"];xt("camera-label").textContent=i[en],Qi(`已切换 · ${i[en]}`)}function Gc(){Vn=!Vn,vi.setEnabled(Vn),xt("sound-button").classList.toggle("sound-enabled",Vn),xt("sound-button").setAttribute("aria-label",Vn?"关闭声音":"开启声音"),Qi(Vn?"山水有声 · 声音已开启":"声音已关闭")}function cg(){ce==="racing"&&(_t.lane=0,_t.steering=0,_t.speed=Math.min(_t.speed,8),Qi("青嶂已回到赛道中央"))}function lg(){xt("start-button").addEventListener("click",()=>{Vn||(Vn=!0,vi.setEnabled(!0),xt("sound-button").classList.add("sound-enabled"),xt("sound-button").setAttribute("aria-label","关闭声音")),po()}),xt("resume-button").addEventListener("click",go),xt("pause-button").addEventListener("click",()=>ce==="paused"?go():mo()),xt("restart-button").addEventListener("click",po),xt("restart-button-pause").addEventListener("click",po),xt("menu-button").addEventListener("click",Y0),xt("camera-button").addEventListener("click",kc),xt("sound-button").addEventListener("click",Gc),xt("fullscreen-button").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Qi("当前浏览器暂不支持全屏")}}),document.querySelectorAll("[data-difficulty]").forEach(i=>{i.addEventListener("click",()=>{oa=i.dataset.difficulty,document.querySelectorAll("[data-difficulty]").forEach(t=>t.classList.toggle("active",t===i)),Qi(oa==="hard"?"争先模式 · 对手将更加迅捷":"标准模式 · 尽享田园竞速")})}),document.querySelectorAll("[data-control]").forEach(i=>{const t=i.dataset.control,e=()=>{Pn[t]=!1,i.classList.remove("pressed")};i.addEventListener("pointerdown",n=>{n.preventDefault(),i.setPointerCapture(n.pointerId),Pn[t]=!0,i.classList.add("pressed")}),i.addEventListener("pointerup",e),i.addEventListener("pointercancel",e),i.addEventListener("lostpointercapture",e)}),window.addEventListener("keydown",i=>{const t=i.target instanceof Element&&!!i.target.closest('button,a,input,select,textarea,[role="button"]');t&&(i.code==="Enter"||i.code==="Space")||(!t&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(i.code)&&ce!=="menu"&&i.preventDefault(),!(i.repeat&&["Escape","KeyC","KeyR","KeyM","Enter"].includes(i.code))&&(ze[i.code]=!0,i.code==="Escape"?ce==="paused"?go():mo():i.code==="KeyC"?kc():i.code==="KeyR"?cg():i.code==="KeyM"?Gc():i.code==="Enter"&&ce==="menu"&&!t&&xt("start-button").click()))}),window.addEventListener("keyup",i=>{ze[i.code]=!1}),window.addEventListener("blur",Pr),document.addEventListener("visibilitychange",()=>{document.hidden&&["racing","countdown"].includes(ce)&&mo()})}function ug(){!ke||!Ce||(Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),ke.setSize(window.innerWidth,window.innerHeight),ke.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<760?1.35:1.8)))}function hg(i){const t=Math.min(.05,Math.max(.001,(i-Er)/1e3));if(Er=i,ce!=="paused"&&($n+=t),ce==="countdown"){K0(t);for(const e of Pe)Rs(e,t)}else if(ce==="racing")Q0(t),ag();else if(ce==="finished")tg(t);else if(ce==="menu")for(const e of Pe)Rs(e,t);ce!=="loading"&&ce!=="paused"&&(ue.update($n,t,_t.group.position),X0(t),ce==="menu"?og(t):Dl(t),vi.update(_t.speed,ce==="racing")),["racing","countdown","finished"].includes(ce)&&ig(t),mr>0&&ce!=="paused"&&(mr-=t,mr<=0&&xt("race-message").classList.remove("show")),ke.render(sn,Ce)}async function dg(){const i=xt("loading-progress"),t=xt("loading-text");i.style.width="12%",await new Promise(r=>setTimeout(r,32)),sn=new rh,Ce=new nn(52,window.innerWidth/window.innerHeight,.1,700),ke=new g0({antialias:!0,powerPreference:"high-performance"}),ke.outputColorSpace=Ve,ke.toneMapping=Xc,ke.toneMappingExposure=1.08,ke.shadowMap.enabled=!0,ke.shadowMap.type=Vc,ke.setSize(window.innerWidth,window.innerHeight),ke.setPixelRatio(Math.min(window.devicePixelRatio,window.innerWidth<760?1.35:1.8)),xt("scene").appendChild(ke.domElement);const e=H0();t.textContent="正在营造稻田、村落与青山",i.style.width="34%",await new Promise(r=>setTimeout(r,32)),ue=I0(sn),t.textContent="正在召集牧童与水牛",i.style.width="70%",await new Promise(r=>setTimeout(r,32)),q0(),Te=V0(),Pa(),lg(),window.addEventListener("resize",ug),setInterval(()=>{_t&&(e.target.position.copy(_t.group.position),e.position.copy(_t.group.position).add(ca.set(-65,95,35)),e.target.updateMatrixWorld())},120);const s=ue.curve.getPointAt(.97);Ce.position.copy(s).add(new R(-10,9,20)),Zi.copy(_t.group.position),Ce.lookAt(Zi),ke.render(sn,Ce),i.style.width="100%",t.textContent="青溪山水已就绪",ce="menu",Er=performance.now(),ke.setAnimationLoop(hg),setTimeout(()=>xt("loading").classList.remove("is-visible"),450)}dg().catch(i=>{console.error(i),xt("loading-text").textContent="场景未能载入，请确认浏览器支持 WebGL 后刷新",xt("loading-progress").style.background="#b44b36"});
