var Nh=0,Nl=1,Fh=2;var Xc=1,hl=2,Fn=3,li=0,Qe=1,pn=2,ai=0,as=1,ci=2,Fl=3,Ol=4,Oh=5,Ii=100,Bh=101,zh=102,kh=103,Vh=104,Hh=200,Gh=201,Wh=202,Xh=203,qa=204,Ya=205,qh=206,Yh=207,$h=208,Zh=209,Jh=210,Kh=211,Qh=212,jh=213,tu=214,$a=0,Za=1,Ja=2,hs=3,Ka=4,Qa=5,ja=6,to=7,qc=0,eu=1,nu=2,oi=0,iu=1,su=2,ru=3,ul=4,au=5,ou=6,lu=7;var Yc=300,us=301,ds=302,eo=303,no=304,ta=306,Fs=1e3,Di=1001,io=1002,on=1003,cu=1004;var Ks=1005;var En=1006,fa=1007;var Ui=1008;var kn=1009,$c=1010,Zc=1011,Os=1012,dl=1013,Ni=1014,Tn=1015,Xs=1016,fl=1017,pl=1018,fs=1020,Jc=35902,Kc=1021,Qc=1022,yn=1023,jc=1024,th=1025,os=1026,ps=1027,ml=1028,gl=1029,eh=1030,_l=1031;var xl=1033,wr=33776,Er=33777,Tr=33778,Ar=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,_o=37813,xo=37814,vo=37815,yo=37816,Mo=37817,So=37818,bo=37819,wo=37820,Eo=37821,Rr=36492,To=36494,Ao=36495,nh=36283,Ro=36284,Co=36285,Io=36286;var Cr=2300,Po=2301,pa=2302,Bl=2400,zl=2401,kl=2402;var hu=3200,uu=3201;var ih=0,du=1,ri="",Be="srgb",vs="srgb-linear",ea="linear",ve="srgb";var Wi=7680;var Vl=519,fu=512,pu=513,mu=514,sh=515,gu=516,_u=517,xu=518,vu=519,Hl=35044;var Gl="300 es",Bn=2e3,Ir=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ma=Math.PI/180,Lo=180/Math.PI;function qs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function yu(i,t){return(i%t+t)%t}function ga(i,t,e){return(1-e)*i+e*t}function ws(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var he=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],v=s[0],m=s[3],u=s[6],C=s[1],A=s[4],w=s[7],G=s[2],F=s[5],D=s[8];return r[0]=o*v+a*C+l*G,r[3]=o*m+a*A+l*F,r[6]=o*u+a*w+l*D,r[1]=c*v+h*C+d*G,r[4]=c*m+h*A+d*F,r[7]=c*u+h*w+d*D,r[2]=f*v+p*C+_*G,r[5]=f*m+p*A+_*F,r[8]=f*u+p*w+_*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,p=c*r-o*l,_=e*d+n*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=d*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_a=new Zt;function rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){let i=Pr("canvas");return i.style.display="block",i}var Wl={};function Ds(i){i in Wl||(Wl[i]=!0,console.warn(i))}function Su(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function bu(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function wu(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ce={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=zn(i.r),i.g=zn(i.g),i.b=zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ri?ea:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xl=[.64,.33,.3,.6,.15,.06],ql=[.2126,.7152,.0722],Yl=[.3127,.329],$l=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ce.define({[vs]:{primaries:Xl,whitePoint:Yl,transfer:ea,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:ql,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:Xl,whitePoint:Yl,transfer:ve,toXYZ:$l,fromXYZ:Zl,luminanceCoefficients:ql,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}});var Xi,Do=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Pr("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Eu=0,Lr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xa(s[o].image)):r.push(xa(s[o]))}else r=xa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Do.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tu=0,tn=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Di,s=Di,r=En,o=Ui,a=yn,l=kn,c=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=qs(),this.name="",this.source=new Lr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fs:t.x=t.x-Math.floor(t.x);break;case Di:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fs:t.y=t.y-Math.floor(t.y);break;case Di:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Yc;tn.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,w=(p+1)/2,G=(u+1)/2,F=(h+f)/4,D=(d+v)/4,k=(_+m)/4;return A>w&&A>G?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=F/n,r=D/n):w>G?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=F/s,r=k/s):G<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(G),n=D/r,s=k/r),this.set(n,s,r,e),this}let C=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(d-v)/C,this.z=(f-h)/C,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uo=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Dr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var No=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Me=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==f||c!==p||h!==_){let m=1-a,u=l*f+c*p+h*_+d*v,C=u>=0?1:-1,A=1-u*u;if(A>Number.EPSILON){let G=Math.sqrt(A),F=Math.atan2(G,u*C);m=Math.sin(m*F)/G,a=Math.sin(a*F)/G}let w=a*C;if(l=l*m+f*w,c=c*m+p*w,h=h*m+_*w,d=d*m+v*w,m===1-a){let G=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=G,c*=G,h*=G,d*=G}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*d+l*p-c*f,t[e+1]=l*_+h*f+c*d-a*p,t[e+2]=c*_+h*p+a*f-l*d,t[e+3]=h*_-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d+f*p*_;break;case"YZX":this._x=f*h*d+c*p*_,this._y=c*p*d+f*h*_,this._z=c*h*_-f*p*d,this._w=c*h*d-f*p*_;break;case"XZY":this._x=f*h*d-c*p*_,this._y=c*p*d-f*h*_,this._z=c*h*_+f*p*d,this._w=c*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return va.copy(this).projectOnVector(t),this.sub(va)}reflect(t){return this.sub(va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},va=new O,Jl=new Me,Hn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),js.subVectors(this.max,Es),qi.subVectors(t.a,Es),Yi.subVectors(t.b,Es),$i.subVectors(t.c,Es),jn.subVectors(Yi,qi),ti.subVectors($i,Yi),bi.subVectors(qi,$i);let e=[0,-jn.z,jn.y,0,-ti.z,ti.y,0,-bi.z,bi.y,jn.z,0,-jn.x,ti.z,0,-ti.x,bi.z,0,-bi.x,-jn.y,jn.x,0,-ti.y,ti.x,0,-bi.y,bi.x,0];return!ya(e,qi,Yi,$i,js)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,qi,Yi,$i,js))?!1:(tr.crossVectors(jn,ti),e=[tr.x,tr.y,tr.z],ya(e,qi,Yi,$i,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new O,new O,new O,new O,new O,new O,new O,new O],_n=new O,Qs=new Hn,qi=new O,Yi=new O,$i=new O,jn=new O,ti=new O,bi=new O,Es=new O,js=new O,tr=new O,wi=new O;function ya(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){wi.fromArray(i,r);let a=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),l=t.dot(wi),c=e.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Au=new Hn,Ts=new O,Ma=new O,Gn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Ma)),this.expandByPoint(Ts.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new O,Sa=new O,er=new O,ei=new O,ba=new O,nr=new O,wa=new O,Bs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),er.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Sa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(er),a=ei.dot(this.direction),l=-ei.dot(er),c=ei.lengthSq(),h=Math.abs(1-o*o),d,f,p,_;if(h>0)if(d=o*l-a,f=o*a-l,_=r*h,d>=0)if(f>=-_)if(f<=_){let v=1/h;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Sa).addScaledVector(er,f),p}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let n=Ln.dot(this.direction),s=Ln.dot(Ln)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),nr.subVectors(n,t),wa.crossVectors(ba,nr);let o=this.direction.dot(wa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);let l=a*this.direction.dot(nr.crossVectors(ei,nr));if(l<0)return null;let c=a*this.direction.dot(ba.cross(ei));if(c<0||l+c>o)return null;let h=-a*ei.dot(wa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,o,a,l,c,h,d,f,p,_,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,f,p,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,d,f,p,_,v,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,_=c*h,v=c*d;e[0]=f+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,_=c*h,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,p=o*d,_=a*h,v=a*d;e[0]=l*h,e[4]=_*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-f*d,e[8]=_*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+_,e[10]=f-v*d}else if(t.order==="XZY"){let f=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=o*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=a*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ru,t,Cu)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ni.crossVectors(n,rn),ni.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ni.crossVectors(n,rn)),ni.normalize(),ir.crossVectors(rn,ni),s[0]=ni.x,s[4]=ir.x,s[8]=rn.x,s[1]=ni.y,s[5]=ir.y,s[9]=rn.y,s[2]=ni.z,s[6]=ir.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],v=n[6],m=n[10],u=n[14],C=n[3],A=n[7],w=n[11],G=n[15],F=s[0],D=s[4],k=s[8],b=s[12],y=s[1],P=s[5],Y=s[9],W=s[13],$=s[2],tt=s[6],Z=s[10],at=s[14],J=s[3],ft=s[7],wt=s[11],Dt=s[15];return r[0]=o*F+a*y+l*$+c*J,r[4]=o*D+a*P+l*tt+c*ft,r[8]=o*k+a*Y+l*Z+c*wt,r[12]=o*b+a*W+l*at+c*Dt,r[1]=h*F+d*y+f*$+p*J,r[5]=h*D+d*P+f*tt+p*ft,r[9]=h*k+d*Y+f*Z+p*wt,r[13]=h*b+d*W+f*at+p*Dt,r[2]=_*F+v*y+m*$+u*J,r[6]=_*D+v*P+m*tt+u*ft,r[10]=_*k+v*Y+m*Z+u*wt,r[14]=_*b+v*W+m*at+u*Dt,r[3]=C*F+A*y+w*$+G*J,r[7]=C*D+A*P+w*tt+G*ft,r[11]=C*k+A*Y+w*Z+G*wt,r[15]=C*b+A*W+w*at+G*Dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],_=t[3],v=t[7],m=t[11],u=t[15];return _*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],_=t[12],v=t[13],m=t[14],u=t[15],C=d*m*c-v*f*c+v*l*p-a*m*p-d*l*u+a*f*u,A=_*f*c-h*m*c-_*l*p+o*m*p+h*l*u-o*f*u,w=h*v*c-_*d*c+_*a*p-o*v*p-h*a*u+o*d*u,G=_*d*l-h*v*l-_*a*f+o*v*f+h*a*m-o*d*m,F=e*C+n*A+s*w+r*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/F;return t[0]=C*D,t[1]=(v*f*r-d*m*r-v*s*p+n*m*p+d*s*u-n*f*u)*D,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*u+n*l*u)*D,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*D,t[4]=A*D,t[5]=(h*m*r-_*f*r+_*s*p-e*m*p-h*s*u+e*f*u)*D,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*u-e*l*u)*D,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*D,t[8]=w*D,t[9]=(_*d*r-h*v*r-_*n*p+e*v*p+h*n*u-e*d*u)*D,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*u+e*a*u)*D,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*D,t[12]=G*D,t[13]=(h*v*s-_*d*s+_*n*f-e*v*f-h*n*m+e*d*m)*D,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*D,t[15]=(o*d*s-h*a*s+h*n*l-e*d*l-o*n*f+e*a*f)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,p=r*h,_=r*d,v=o*h,m=o*d,u=a*d,C=l*c,A=l*h,w=l*d,G=n.x,F=n.y,D=n.z;return s[0]=(1-(v+u))*G,s[1]=(p+w)*G,s[2]=(_-A)*G,s[3]=0,s[4]=(p-w)*F,s[5]=(1-(f+u))*F,s[6]=(m+C)*F,s[7]=0,s[8]=(_+A)*D,s[9]=(m-C)*D,s[10]=(1-(f+v))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/o,d=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Bn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,_;if(a===Bn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ir)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Bn){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(o-r),f=(e+t)*c,p=(n+s)*h,_,v;if(a===Bn)_=(o+r)*d,v=-2*d;else if(a===Ir)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new O,xn=new de,Ru=new O(0,0,0),Cu=new O(1,1,1),ni=new O,ir=new O,rn=new O,Kl=new de,Ql=new Me,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Iu=0,jl=new O,Ji=new Me,Dn=new de,sr=new O,As=new O,Pu=new O,Lu=new Me,tc=new O(1,0,0),ec=new O(0,1,0),nc=new O(0,0,1),ic={type:"added"},Du={type:"removed"},Ki={type:"childadded",child:null},Ea={type:"childremoved",child:null},ze=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Rn,n=new Me,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Zt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(tc,t)}rotateY(t){return this.rotateOnAxis(ec,t)}rotateZ(t){return this.rotateOnAxis(nc,t)}translateOnAxis(t,e){return jl.copy(t).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tc,t)}translateY(t){return this.translateOnAxis(ec,t)}translateZ(t){return this.translateOnAxis(nc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sr.copy(t):sr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(As,sr,this.up):Dn.lookAt(sr,As,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ic),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Du),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ic),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Lu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ze.DEFAULT_UP=new O(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new O,Un=new O,Ta=new O,Nn=new O,Qi=new O,ji=new O,sc=new O,Aa=new O,Ra=new O,Ca=new O,Ia=new ye,Pa=new ye,La=new ye,Pi=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Un.subVectors(n,e),Ta.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Un),l=vn.dot(Ta),c=Un.dot(Un),h=Un.dot(Ta),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ia.setScalar(0),Pa.setScalar(0),La.setScalar(0),Ia.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),La.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ia,r.x),o.addScaledVector(Pa,r.y),o.addScaledVector(La,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Un.subVectors(t,e),vn.cross(Un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),vn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Qi.subVectors(s,n),ji.subVectors(r,n),Aa.subVectors(t,n);let l=Qi.dot(Aa),c=ji.dot(Aa);if(l<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);let h=Qi.dot(Ra),d=ji.dot(Ra);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Qi,o);Ca.subVectors(t,r);let p=Qi.dot(Ca),_=ji.dot(Ca);if(_>=0&&p<=_)return e.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(ji,a);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return sc.subVectors(r,s),a=(d-h)/(d-h+(p-_)),e.copy(s).addScaledVector(sc,a);let u=1/(m+v+f);return o=v*u,a=f*u,e.copy(n).addScaledVector(Qi,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},rr={h:0,s:0,l:0};function Da(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=yu(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Da(o,r,t+1/3),this.g=Da(o,r,t),this.b=Da(o,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Be){let n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Be){return ce.fromWorkingColorSpace(He.copy(this),t),Math.round(Ke(He.r*255,0,255))*65536+Math.round(Ke(He.g*255,0,255))*256+Math.round(Ke(He.b*255,0,255))}getHexString(t=Be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Be){ce.fromWorkingColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==Be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(rr);let n=ga(ii.h,rr.h,e),s=ga(ii.s,rr.s,e),r=ga(ii.l,rr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new qt;qt.NAMES=ah;var Uu=0,Wn=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=qs(),this.name="",this.blending=as,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=Ya,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ms=class extends Wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new O,ar=new he,Le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),s=Je(s,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hl&&(t.usage=this.usage),t}};var Nr=class extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fr=class extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var je=class extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Nu=0,fn=new de,Ua=new ze,ts=new O,an=new Hn,Rs=new Hn,Oe=new O,en=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?Fr:Nr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new je(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(an.min,Rs.min),an.expandByPoint(Oe),Oe.addVectors(an.max,Rs.max),an.expandByPoint(Oe)):(an.expandByPoint(Rs.min),an.expandByPoint(Rs.max))}an.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Oe.add(ts)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let k=0;k<n.count;k++)a[k]=new O,l[k]=new O;let c=new O,h=new O,d=new O,f=new he,p=new he,_=new he,v=new O,m=new O;function u(k,b,y){c.fromBufferAttribute(n,k),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,y),h.sub(c),d.sub(c),p.sub(f),_.sub(f);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),a[k].add(v),a[b].add(v),a[y].add(v),l[k].add(m),l[b].add(m),l[y].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let k=0,b=C.length;k<b;++k){let y=C[k],P=y.start,Y=y.count;for(let W=P,$=P+Y;W<$;W+=3)u(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let A=new O,w=new O,G=new O,F=new O;function D(k){G.fromBufferAttribute(s,k),F.copy(G);let b=a[k];A.copy(b),A.sub(G.multiplyScalar(G.dot(b))).normalize(),w.crossVectors(F,b);let P=w.dot(l[k])<0?-1:1;o.setXYZW(k,A.x,A.y,A.z,P)}for(let k=0,b=C.length;k<b;++k){let y=C[k],P=y.start,Y=y.count;for(let W=P,$=P+Y;W<$;W+=3)D(t.getX(W+0)),D(t.getX(W+1)),D(t.getX(W+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let u=0;u<h;u++)f[_++]=c[p++]}return new Le(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rc=new de,Ei=new Bs,or=new Gn,ac=new O,lr=new O,cr=new O,hr=new O,Na=new O,ur=new O,oc=new O,dr=new O,Ae=class extends ze{constructor(t=new en,e=new ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ur.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Na.fromBufferAttribute(d,t),o?ur.addScaledVector(Na,h):ur.addScaledVector(Na.sub(e),h))}e.add(ur)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(or.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(or,ac)===null||Ei.origin.distanceToSquared(ac)>(t.far-t.near)**2))&&(rc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(rc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=o[m.materialIndex],C=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=C,G=A;w<G;w+=3){let F=a.getX(w),D=a.getX(w+1),k=a.getX(w+2);s=fr(this,u,t,n,c,h,d,F,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let C=a.getX(m),A=a.getX(m+1),w=a.getX(m+2);s=fr(this,o,t,n,c,h,d,C,A,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){let m=f[_],u=o[m.materialIndex],C=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=C,G=A;w<G;w+=3){let F=w,D=w+1,k=w+2;s=fr(this,u,t,n,c,h,d,F,D,k),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){let C=m,A=m+1,w=m+2;s=fr(this,o,t,n,c,h,d,C,A,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Fu(i,t,e,n,s,r,o,a){let l;if(t.side===Qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;dr.copy(a),dr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(dr);return c<e.near||c>e.far?null:{distance:c,point:dr.clone(),object:i}}function fr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,lr),i.getVertexPosition(l,cr),i.getVertexPosition(c,hr);let h=Fu(i,t,e,n,lr,cr,hr,oc);if(h){let d=new O;Pi.getBarycoord(oc,lr,cr,hr,d),s&&(h.uv=Pi.getInterpolatedAttribute(s,a,l,c,d,new he)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,l,c,d,new he)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};Pi.getNormal(lr,cr,hr,f.normal),h.face=f,h.barycoord=d}return h}var ui=class i extends en{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(h,3)),this.setAttribute("uv",new je(d,2));function _(v,m,u,C,A,w,G,F,D,k,b){let y=w/D,P=G/k,Y=w/2,W=G/2,$=F/2,tt=D+1,Z=k+1,at=0,J=0,ft=new O;for(let wt=0;wt<Z;wt++){let Dt=wt*P-W;for(let $t=0;$t<tt;$t++){let ae=$t*y-Y;ft[v]=ae*C,ft[m]=Dt*A,ft[u]=$,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[u]=F>0?1:-1,h.push(ft.x,ft.y,ft.z),d.push($t/D),d.push(1-wt/k),at+=1}}for(let wt=0;wt<k;wt++)for(let Dt=0;Dt<D;Dt++){let $t=f+Dt+tt*wt,ae=f+Dt+tt*(wt+1),nt=f+(Dt+1)+tt*(wt+1),ot=f+(Dt+1)+tt*wt;l.push($t,ae,ot),l.push(ae,nt,ot),J+=6}a.addGroup(p,J,b),p+=J,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=gs(i[e]);for(let s in n)t[s]=n[s]}return t}function Ou(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var Bu={clone:gs,merge:Xe},zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zu,this.fragmentShader=ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Or=class extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new O,lc=new he,cc=new he,Ge=class extends Or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Lo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,lc,cc),e.subVectors(cc,lc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ma*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Fo=class extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Ge(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new Ge(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new Ge(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new Ge(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Ge(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Br=class extends tn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oo=class extends Vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Br(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ui(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:ai});r.uniforms.tEquirect.value=e;let o=new Ae(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=En),new Fo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Fa=new O,Vu=new O,Hu=new Zt,On=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fa.subVectors(n,e).cross(Vu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hu.getNormalMatrix(t),s=this.coplanarPoint(Fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Gn,pr=new O,zs=class{constructor(t=new On,e=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Bn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],u=s[12],C=s[13],A=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-p,w-u).normalize(),n[1].setComponents(l+r,f+c,m+p,w+u).normalize(),n[2].setComponents(l+o,f+h,m+_,w+C).normalize(),n[3].setComponents(l-o,f-h,m-_,w-C).normalize(),n[4].setComponents(l-a,f-d,m-v,w-A).normalize(),e===Bn)n[5].setComponents(l+a,f+d,m+v,w+A).normalize();else if(e===Ir)n[5].setComponents(a,d,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gu(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let v=d[p];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xn=class i extends en{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,p=[],_=[],v=[],m=[];for(let u=0;u<h;u++){let C=u*f-o;for(let A=0;A<c;A++){let w=A*d-r;_.push(w,-C,0),v.push(0,0,1),m.push(A/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let C=0;C<a;C++){let A=C+c*u,w=C+c*(u+1),G=C+1+c*(u+1),F=C+1+c*u;p.push(A,w,F),p.push(w,G,F)}this.setIndex(p),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Wu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xu=`#ifdef USE_ALPHAHASH
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
#endif`,qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
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
#endif`,Ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qu=`#ifdef USE_BATCHING
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
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,id=`#ifdef USE_IRIDESCENCE
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
#endif`,sd=`#ifdef USE_BUMPMAP
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
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fd=`#define PI 3.141592653589793
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
} // validated`,pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,md=`vec3 transformedNormal = objectNormal;
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
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Td=`#ifdef USE_ENVMAP
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
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Id=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pd=`#ifdef USE_GRADIENTMAP
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
}`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nd=`uniform bool receiveShadow;
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
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vd=`PhysicalMaterial material;
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
#endif`,Hd=`struct PhysicalMaterial {
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
}`,Gd=`
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
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jd=`#if defined( USE_POINTS_UV )
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
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,af=`#ifdef USE_MORPHTARGETS
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
#endif`,of=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
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
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cf=`float getShadowMask() {
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
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
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
#endif`,Lf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Of=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`#include <common>
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
}`,Kf=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qf=`#define DISTANCE
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
}`,jf=`#define DISTANCE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 diffuse;
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
}`,ap=`#define LAMBERT
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
}`,op=`#define LAMBERT
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
}`,lp=`#define MATCAP
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
}`,cp=`#define MATCAP
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
}`,hp=`#define NORMAL
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
}`,up=`#define NORMAL
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
}`,dp=`#define PHONG
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
}`,fp=`#define PHONG
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
}`,pp=`#define STANDARD
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
}`,mp=`#define STANDARD
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
}`,gp=`#define TOON
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
}`,_p=`#define TOON
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
}`,xp=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Mp=`uniform vec3 color;
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
}`,Sp=`uniform float rotation;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Wu,alphahash_pars_fragment:Xu,alphamap_fragment:qu,alphamap_pars_fragment:Yu,alphatest_fragment:$u,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:Ku,batching_pars_vertex:Qu,batching_vertex:ju,begin_vertex:td,beginnormal_vertex:ed,bsdfs:nd,iridescence_fragment:id,bumpmap_pars_fragment:sd,clipping_planes_fragment:rd,clipping_planes_pars_fragment:ad,clipping_planes_pars_vertex:od,clipping_planes_vertex:ld,color_fragment:cd,color_pars_fragment:hd,color_pars_vertex:ud,color_vertex:dd,common:fd,cube_uv_reflection_fragment:pd,defaultnormal_vertex:md,displacementmap_pars_vertex:gd,displacementmap_vertex:_d,emissivemap_fragment:xd,emissivemap_pars_fragment:vd,colorspace_fragment:yd,colorspace_pars_fragment:Md,envmap_fragment:Sd,envmap_common_pars_fragment:bd,envmap_pars_fragment:wd,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Fd,envmap_vertex:Td,fog_vertex:Ad,fog_pars_vertex:Rd,fog_fragment:Cd,fog_pars_fragment:Id,gradientmap_pars_fragment:Pd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Dd,lights_lambert_pars_fragment:Ud,lights_pars_begin:Nd,lights_toon_fragment:Od,lights_toon_pars_fragment:Bd,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Vd,lights_physical_pars_fragment:Hd,lights_fragment_begin:Gd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:Zd,map_fragment:Jd,map_pars_fragment:Kd,map_particle_fragment:Qd,map_particle_pars_fragment:jd,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:af,morphtarget_vertex:of,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:xf,packing:vf,premultiplied_alpha_fragment:yf,project_vertex:Mf,dithering_fragment:Sf,dithering_pars_fragment:bf,roughnessmap_fragment:wf,roughnessmap_pars_fragment:Ef,shadowmap_pars_fragment:Tf,shadowmap_pars_vertex:Af,shadowmap_vertex:Rf,shadowmask_pars_fragment:Cf,skinbase_vertex:If,skinning_pars_vertex:Pf,skinning_vertex:Lf,skinnormal_vertex:Df,specularmap_fragment:Uf,specularmap_pars_fragment:Nf,tonemapping_fragment:Ff,tonemapping_pars_fragment:Of,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Vf,uv_vertex:Hf,worldpos_vertex:Gf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:$f,cube_frag:Zf,depth_vert:Jf,depth_frag:Kf,distanceRGBA_vert:Qf,distanceRGBA_frag:jf,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:ap,meshlambert_frag:op,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:xp,points_frag:vp,shadow_vert:yp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:bp},xt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},wn={basic:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Xe([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Xe([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Xe([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Xe([xt.points,xt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Xe([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Xe([xt.common,xt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Xe([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Xe([xt.sprite,xt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Xe([xt.common,xt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Xe([xt.lights,xt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};wn.physical={uniforms:Xe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var mr={r:0,b:0,g:0},Ai=new Rn,wp=new de;function Ep(i,t,e,n,s,r,o){let a=new qt(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function _(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?e:t).get(A)),A}function v(C){let A=!1,w=_(C);w===null?u(a,l):w&&w.isColor&&(u(w,1),A=!0);let G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,A){let w=_(A);w&&(w.isCubeTexture||w.mapping===ta)?(h===void 0&&(h=new Ae(new ui(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:gs(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,F,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ai.copy(A.backgroundRotation),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wp.makeRotationFromEuler(Ai)),h.material.toneMapped=ce.getTransfer(w.colorSpace)!==ve,(d!==w||f!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ae(new Xn(2,2),new ln({name:"BackgroundMaterial",uniforms:gs(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ce.getTransfer(w.colorSpace)!==ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function u(C,A){C.getRGB(mr,oh(i)),n.buffers.color.setClear(mr.r,mr.g,mr.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(C,A=1){a.set(C),l=A,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,u(a,l)},render:v,addToRenderList:m}}function Tp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(y,P,Y,W,$){let tt=!1,Z=d(W,Y,P);r!==Z&&(r=Z,c(r.object)),tt=p(y,W,Y,$),tt&&_(y,W,Y,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,w(y,P,Y,W),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,P,Y){let W=Y.wireframe===!0,$=n[y.id];$===void 0&&($={},n[y.id]=$);let tt=$[P.id];tt===void 0&&(tt={},$[P.id]=tt);let Z=tt[W];return Z===void 0&&(Z=f(l()),tt[W]=Z),Z}function f(y){let P=[],Y=[],W=[];for(let $=0;$<e;$++)P[$]=0,Y[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Y,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,P,Y,W){let $=r.attributes,tt=P.attributes,Z=0,at=Y.getAttributes();for(let J in at)if(at[J].location>=0){let wt=$[J],Dt=tt[J];if(Dt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(Dt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(Dt=y.instanceColor)),wt===void 0||wt.attribute!==Dt||Dt&&wt.data!==Dt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==W}function _(y,P,Y,W){let $={},tt=P.attributes,Z=0,at=Y.getAttributes();for(let J in at)if(at[J].location>=0){let wt=tt[J];wt===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(wt=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(wt=y.instanceColor));let Dt={};Dt.attribute=wt,wt&&wt.data&&(Dt.data=wt.data),$[J]=Dt,Z++}r.attributes=$,r.attributesNum=Z,r.index=W}function v(){let y=r.newAttributes;for(let P=0,Y=y.length;P<Y;P++)y[P]=0}function m(y){u(y,0)}function u(y,P){let Y=r.newAttributes,W=r.enabledAttributes,$=r.attributeDivisors;Y[y]=1,W[y]===0&&(i.enableVertexAttribArray(y),W[y]=1),$[y]!==P&&(i.vertexAttribDivisor(y,P),$[y]=P)}function C(){let y=r.newAttributes,P=r.enabledAttributes;for(let Y=0,W=P.length;Y<W;Y++)P[Y]!==y[Y]&&(i.disableVertexAttribArray(Y),P[Y]=0)}function A(y,P,Y,W,$,tt,Z){Z===!0?i.vertexAttribIPointer(y,P,Y,$,tt):i.vertexAttribPointer(y,P,Y,W,$,tt)}function w(y,P,Y,W){v();let $=W.attributes,tt=Y.getAttributes(),Z=P.defaultAttributeValues;for(let at in tt){let J=tt[at];if(J.location>=0){let ft=$[at];if(ft===void 0&&(at==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),at==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor)),ft!==void 0){let wt=ft.normalized,Dt=ft.itemSize,$t=t.get(ft);if($t===void 0)continue;let ae=$t.buffer,nt=$t.type,ot=$t.bytesPerElement,St=nt===i.INT||nt===i.UNSIGNED_INT||ft.gpuType===dl;if(ft.isInterleavedBufferAttribute){let _t=ft.data,kt=_t.stride,Wt=ft.offset;if(_t.isInstancedInterleavedBuffer){for(let Gt=0;Gt<J.locationSize;Gt++)u(J.location+Gt,_t.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Gt=0;Gt<J.locationSize;Gt++)m(J.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Gt=0;Gt<J.locationSize;Gt++)A(J.location+Gt,Dt/J.locationSize,nt,wt,kt*ot,(Wt+Dt/J.locationSize*Gt)*ot,St)}else{if(ft.isInstancedBufferAttribute){for(let _t=0;_t<J.locationSize;_t++)u(J.location+_t,ft.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let _t=0;_t<J.locationSize;_t++)m(J.location+_t);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let _t=0;_t<J.locationSize;_t++)A(J.location+_t,Dt/J.locationSize,nt,wt,Dt*ot,Dt/J.locationSize*_t*ot,St)}}else if(Z!==void 0){let wt=Z[at];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(J.location,wt);break;case 3:i.vertexAttrib3fv(J.location,wt);break;case 4:i.vertexAttrib4fv(J.location,wt);break;default:i.vertexAttrib1fv(J.location,wt)}}}}C()}function G(){k();for(let y in n){let P=n[y];for(let Y in P){let W=P[Y];for(let $ in W)h(W[$].object),delete W[$];delete P[Y]}delete n[y]}}function F(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let Y in P){let W=P[Y];for(let $ in W)h(W[$].object),delete W[$];delete P[Y]}delete n[y.id]}function D(y){for(let P in n){let Y=n[P];if(Y[y.id]===void 0)continue;let W=Y[y.id];for(let $ in W)h(W[$].object),delete W[$];delete Y[y.id]}}function k(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:k,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function Ap(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=h[_];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==yn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let k=D===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==kn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Tn&&!k)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=_>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:w,vertexTextures:G,maxSamples:F}}function Cp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new On,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,A=C*4,w=u.clippingState||null;l.value=w,w=h(_,f,A,p);for(let G=0;G!==A;++G)w[G]=e[G];u.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,_){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,_!==!0||m===null){let u=p+v*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<u)&&(m=new Float32Array(u));for(let A=0,w=p;A!==v;++A,w+=4)o.copy(d[A]).applyMatrix4(C,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ip(i){let t=new WeakMap;function e(o,a){return a===eo?o.mapping=us:a===no&&(o.mapping=ds),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===eo||a===no)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Oo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zr=class extends Or{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rs=4,hc=[.125,.215,.35,.446,.526,.582],Li=20,Oa=new zr,uc=new qt,Ba=null,za=0,ka=0,Va=!1,Ci=(1+Math.sqrt(5))/2,is=1/Ci,dc=[new O(-Ci,is,0),new O(Ci,is,0),new O(-is,0,Ci),new O(is,0,Ci),new O(0,Ci,-is),new O(0,Ci,is),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],kr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,za,ka),this._renderer.xr.enabled=Va,t.scissorTest=!1,gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Va=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Xs,format:yn,colorSpace:vs,depthBuffer:!1},s=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Lp(r,t,e)}return s}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Oa)}_sceneToCubeUV(t,e,n,s){let a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(uc),h.toneMapping=oi,h.autoClear=!1;let p=new ms({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),_=new Ae(new ui,p),v=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(uc),v=!0);for(let u=0;u<6;u++){let C=u%3;C===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):C===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let A=this._cubeSize;gr(s,C*A,u>2?A:0,A,A),h.setRenderTarget(s),v&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Oa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dc[(s-r-1)%dc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ae(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Li-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Li;m>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);let u=[],C=0;for(let D=0;D<Li;++D){let k=D/v,b=Math.exp(-k*k/2);u.push(b),D===0?C+=b:D<m&&(C+=2*b)}for(let D=0;D<u.length;D++)u[D]=u[D]/C;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-n;let w=this._sizeLods[s],G=3*w*(s>A-rs?s-A+rs:0),F=4*(this._cubeSize-w);gr(e,G,F,3*w,2*w),l.setRenderTarget(e),l.render(d,Oa)}};function Pp(i){let t=[],e=[],n=[],s=i,r=i-rs+1+hc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-rs?l=hc[o-i+rs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,m=2,u=1,C=new Float32Array(v*_*p),A=new Float32Array(m*_*p),w=new Float32Array(u*_*p);for(let F=0;F<p;F++){let D=F%3*2/3-1,k=F>2?0:-1,b=[D,k,0,D+2/3,k,0,D+2/3,k+1,0,D,k,0,D+2/3,k+1,0,D,k+1,0];C.set(b,v*_*F),A.set(f,m*_*F);let y=[F,F,F,F,F,F];w.set(y,u*_*F)}let G=new en;G.setAttribute("position",new Le(C,v)),G.setAttribute("uv",new Le(A,m)),G.setAttribute("faceIndex",new Le(w,u)),t.push(G),s>rs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(i,t,e){let n=new Vn(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Lp(i,t,e){let n=new Float32Array(Li),s=new O(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function mc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function Dp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===eo||l===no,h=l===us||l===ds;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new kr(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new kr(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Up(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ds("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Np(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);for(let _ in f.morphAttributes){let v=f.morphAttributes[_];for(let m=0,u=v.length;m<u;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let _ in f)t.update(f[_],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let _ in p){let v=p[_];for(let m=0,u=v.length;m<u;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,_=d.attributes.position,v=0;if(p!==null){let C=p.array;v=p.version;for(let A=0,w=C.length;A<w;A+=3){let G=C[A+0],F=C[A+1],D=C[A+2];f.push(G,F,F,D,D,G)}}else if(_!==void 0){let C=_.array;v=_.version;for(let A=0,w=C.length/3-1;A<w;A+=3){let G=A+0,F=A+1,D=A+2;f.push(G,F,F,D,D,G)}}else return;let m=new(rh(f)?Fr:Nr)(f,1);m.version=v;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Fp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,f*o,_),e.update(p,n,_))}function h(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];e.update(m,n,1)}function d(f,p,_,v){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,_);let u=0;for(let C=0;C<_;C++)u+=p[C]*v[C];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Op(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bp(i,t,e){let n=new WeakMap,s=new ye;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let b=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],A=0;p===!0&&(A=1),_===!0&&(A=2),v===!0&&(A=3);let w=a.attributes.position.count*A,G=1;w>t.maxTextureSize&&(G=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let F=new Float32Array(w*G*4*d),D=new Dr(F,w,G,d);D.type=Tn,D.needsUpdate=!0;let k=A*4;for(let y=0;y<d;y++){let P=m[y],Y=u[y],W=C[y],$=w*G*4*y;for(let tt=0;tt<P.count;tt++){let Z=tt*k;p===!0&&(s.fromBufferAttribute(P,tt),F[$+Z+0]=s.x,F[$+Z+1]=s.y,F[$+Z+2]=s.z,F[$+Z+3]=0),_===!0&&(s.fromBufferAttribute(Y,tt),F[$+Z+4]=s.x,F[$+Z+5]=s.y,F[$+Z+6]=s.z,F[$+Z+7]=0),v===!0&&(s.fromBufferAttribute(W,tt),F[$+Z+8]=s.x,F[$+Z+9]=s.y,F[$+Z+10]=s.z,F[$+Z+11]=W.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new he(w,G)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function zp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Vr=class extends tn{constructor(t,e,n,s,r,o,a,l,c,h=os){if(h!==os&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Ni),n===void 0&&h===ps&&(n=fs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ch=new tn,gc=new Vr(1,1),hh=new Dr,uh=new No,dh=new Br,_c=[],xc=[],vc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_c[s];if(r===void 0&&(r=new Float32Array(s),_c[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Hp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Wp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),Ue(e,n)}}function Xp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Ue(e,n)}}function qp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Ue(e,n)}}function Yp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Kp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function em(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gc.compareFunction=sh,r=gc):r=ch,e.setTexture2D(t||r,s)}function nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uh,s)}function im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dh,s)}function sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hh,s)}function rm(i){switch(i){case 5126:return kp;case 35664:return Vp;case 35665:return Hp;case 35666:return Gp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return $p;case 35668:case 35672:return Zp;case 35669:case 35673:return Jp;case 5125:return Kp;case 36294:return Qp;case 36295:return jp;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}function am(i,t){i.uniform1fv(this.addr,t)}function om(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function lm(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function cm(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function hm(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function um(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dm(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function fm(i,t){i.uniform1iv(this.addr,t)}function pm(i,t){i.uniform2iv(this.addr,t)}function mm(i,t){i.uniform3iv(this.addr,t)}function gm(i,t){i.uniform4iv(this.addr,t)}function _m(i,t){i.uniform1uiv(this.addr,t)}function xm(i,t){i.uniform2uiv(this.addr,t)}function vm(i,t){i.uniform3uiv(this.addr,t)}function ym(i,t){i.uniform4uiv(this.addr,t)}function Mm(i,t,e){let n=this.cache,s=t.length,r=na(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ch,r[o])}function Sm(i,t,e){let n=this.cache,s=t.length,r=na(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uh,r[o])}function bm(i,t,e){let n=this.cache,s=t.length,r=na(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dh,r[o])}function wm(i,t,e){let n=this.cache,s=t.length,r=na(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hh,r[o])}function Em(i){switch(i){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return hm;case 35675:return um;case 35676:return dm;case 5124:case 35670:return fm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return _m;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}var Bo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rm(e.type)}},zo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Em(e.type)}},ko=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ha=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function Tm(i,t,e){let n=i.name,s=n.length;for(Ha.lastIndex=0;;){let r=Ha.exec(n),o=Ha.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sc(e,c===void 0?new Bo(a,i,t):new zo(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ko(a),Sc(e,d)),e=d}}}var cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Tm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function bc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Am=37297,Rm=0;function Cm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wc=new Zt;function Im(i){ce._getMatrix(wc,ce.workingColorSpace,i);let t=`mat3( ${wc.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case ea:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ec(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(t),o)}else return s}function Pm(i,t){let e=Im(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lm(i,t){let e;switch(t){case iu:e="Linear";break;case su:e="Reinhard";break;case ru:e="Cineon";break;case ul:e="ACESFilmic";break;case ou:e="AgX";break;case lu:e="Neutral";break;case au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _r=new O;function Dm(){ce.getLuminanceCoefficients(_r);let i=_r.x.toFixed(4),t=_r.y.toFixed(4),e=_r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function Nm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Us(i){return i!==""}function Tc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ac(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(Om,zm)}var Bm=new Map;function zm(i,t){let e=Jt[t];if(e===void 0){let n=Bm.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vo(e)}var km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(km,Vm)}function Vm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ds&&(t="ENVMAP_MODE_REFRACTION"),t}function Xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qc:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function qm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ym(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Hm(e),c=Gm(e),h=Wm(e),d=Xm(e),f=qm(e),p=Um(e),_=Nm(r),v=s.createProgram(),m,u,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Us).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Us).join(`
`),u.length>0&&(u+=`
`)):(m=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),u=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==oi?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Pm("linearToOutputTexel",e.outputColorSpace),Dm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=Vo(o),o=Tc(o,e),o=Ac(o,e),a=Vo(a),a=Tc(a,e),a=Ac(a,e),o=Rc(o),a=Rc(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let A=C+m+o,w=C+u+a,G=bc(s,s.VERTEX_SHADER,A),F=bc(s,s.FRAGMENT_SHADER,w);s.attachShader(v,G),s.attachShader(v,F),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(P){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(G).trim(),$=s.getShaderInfoLog(F).trim(),tt=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,G,F);else{let at=Ec(s,G,"vertex"),J=Ec(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+at+`
`+J)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||$==="")&&(Z=!1);Z&&(P.diagnostics={runnable:tt,programLog:Y,vertexShader:{log:W,prefix:m},fragmentShader:{log:$,prefix:u}})}s.deleteShader(G),s.deleteShader(F),k=new cs(s,v),b=Fm(s,v)}let k;this.getUniforms=function(){return k===void 0&&D(this),k};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,Am)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=G,this.fragmentShader=F,this}var $m=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Go(t),e.set(t,n)),n}},Go=class{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}};function Zm(i,t,e,n,s,r,o){let a=new Ur,l=new Ho,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,Y,W){let $=Y.fog,tt=W.geometry,Z=b.isMeshStandardMaterial?Y.environment:null,at=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),J=at&&at.mapping===ta?at.image.height:null,ft=_[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let wt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Dt=wt!==void 0?wt.length:0,$t=0;tt.morphAttributes.position!==void 0&&($t=1),tt.morphAttributes.normal!==void 0&&($t=2),tt.morphAttributes.color!==void 0&&($t=3);let ae,nt,ot,St;if(ft){let jt=wn[ft];ae=jt.vertexShader,nt=jt.fragmentShader}else ae=b.vertexShader,nt=b.fragmentShader,l.update(b),ot=l.getVertexShaderID(b),St=l.getFragmentShaderID(b);let _t=i.getRenderTarget(),kt=i.state.buffers.depth.getReversed(),Wt=W.isInstancedMesh===!0,Gt=W.isBatchedMesh===!0,ge=!!b.map,te=!!b.matcap,be=!!at,z=!!b.aoMap,Se=!!b.lightMap,ee=!!b.bumpMap,ne=!!b.normalMap,Nt=!!b.displacementMap,ue=!!b.emissiveMap,Ut=!!b.metalnessMap,T=!!b.roughnessMap,g=b.anisotropy>0,H=b.clearcoat>0,j=b.dispersion>0,st=b.iridescence>0,et=b.sheen>0,Pt=b.transmission>0,pt=g&&!!b.anisotropyMap,yt=H&&!!b.clearcoatMap,ie=H&&!!b.clearcoatNormalMap,lt=H&&!!b.clearcoatRoughnessMap,Mt=st&&!!b.iridescenceMap,Ot=st&&!!b.iridescenceThicknessMap,Bt=et&&!!b.sheenColorMap,Et=et&&!!b.sheenRoughnessMap,Kt=!!b.specularMap,Ht=!!b.specularColorMap,_e=!!b.specularIntensityMap,I=Pt&&!!b.transmissionMap,vt=Pt&&!!b.thicknessMap,K=!!b.gradientMap,it=!!b.alphaMap,mt=b.alphaTest>0,gt=!!b.alphaHash,Xt=!!b.extensions,Qt=oi;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Ie={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:ae,fragmentShader:nt,defines:b.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Gt,batchingColor:Gt&&W._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&W.instanceColor!==null,instancingMorph:Wt&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:vs,alphaToCoverage:!!b.alphaToCoverage,map:ge,matcap:te,envMap:be,envMapMode:be&&at.mapping,envMapCubeUVHeight:J,aoMap:z,lightMap:Se,bumpMap:ee,normalMap:ne,displacementMap:f&&Nt,emissiveMap:ue,normalMapObjectSpace:ne&&b.normalMapType===du,normalMapTangentSpace:ne&&b.normalMapType===ih,metalnessMap:Ut,roughnessMap:T,anisotropy:g,anisotropyMap:pt,clearcoat:H,clearcoatMap:yt,clearcoatNormalMap:ie,clearcoatRoughnessMap:lt,dispersion:j,iridescence:st,iridescenceMap:Mt,iridescenceThicknessMap:Ot,sheen:et,sheenColorMap:Bt,sheenRoughnessMap:Et,specularMap:Kt,specularColorMap:Ht,specularIntensityMap:_e,transmission:Pt,transmissionMap:I,thicknessMap:vt,gradientMap:K,opaque:b.transparent===!1&&b.blending===as&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:mt,alphaHash:gt,combine:b.combine,mapUv:ge&&v(b.map.channel),aoMapUv:z&&v(b.aoMap.channel),lightMapUv:Se&&v(b.lightMap.channel),bumpMapUv:ee&&v(b.bumpMap.channel),normalMapUv:ne&&v(b.normalMap.channel),displacementMapUv:Nt&&v(b.displacementMap.channel),emissiveMapUv:ue&&v(b.emissiveMap.channel),metalnessMapUv:Ut&&v(b.metalnessMap.channel),roughnessMapUv:T&&v(b.roughnessMap.channel),anisotropyMapUv:pt&&v(b.anisotropyMap.channel),clearcoatMapUv:yt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ie&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Et&&v(b.sheenRoughnessMap.channel),specularMapUv:Kt&&v(b.specularMap.channel),specularColorMapUv:Ht&&v(b.specularColorMap.channel),specularIntensityMapUv:_e&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:vt&&v(b.thicknessMap.channel),alphaMapUv:it&&v(b.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ne||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!tt.attributes.uv&&(ge||it),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:kt,skinning:W.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:$t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:ge&&b.map.isVideoTexture===!0&&ce.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:ue&&b.emissiveMap.isVideoTexture===!0&&ce.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===pn,flipSided:b.side===Qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&b.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function u(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(C(y,b),A(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function C(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function A(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function w(b){let y=_[b.type],P;if(y){let Y=wn[y];P=Bu.clone(Y.uniforms)}else P=b.uniforms;return P}function G(b,y){let P;for(let Y=0,W=h.length;Y<W;Y++){let $=h[Y];if($.cacheKey===y){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Ym(i,y,b,r),h.push(P)),P}function F(b){if(--b.usedTimes===0){let y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function D(b){l.remove(b)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:w,acquireProgram:G,releaseProgram:F,releaseShaderCache:D,programs:h,dispose:k}}function Jm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Km(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ic(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,_,v,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=v,u.group=m),t++,u}function a(d,f,p,_,v,m){let u=o(d,f,p,_,v,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function l(d,f,p,_,v,m){let u=o(d,f,p,_,v,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Km),n.length>1&&n.sort(f||Ic),s.length>1&&s.sort(f||Ic)}function h(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Qm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Pc,i.set(n,[o])):s>=r.length?(o=new Pc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function jm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function tg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var eg=0;function ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ig(i){let t=new jm,e=tg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new de,o=new de;function a(c){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,C=0,A=0,w=0,G=0,F=0,D=0;c.sort(ng);for(let b=0,y=c.length;b<y;b++){let P=c[b],Y=P.color,W=P.intensity,$=P.distance,tt=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=Y.r*W,d+=Y.g*W,f+=Y.b*W;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],W);D++}else if(P.isDirectionalLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let at=P.shadow,J=e.get(P);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=P.shadow.matrix,C++}n.directional[p]=Z,p++}else if(P.isSpotLight){let Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(Y).multiplyScalar(W),Z.distance=$,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[v]=Z;let at=P.shadow;if(P.map&&(n.spotLightMap[G]=P.map,G++,at.updateMatrices(P),P.castShadow&&F++),n.spotLightMatrix[v]=at.matrix,P.castShadow){let J=e.get(P);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,n.spotShadow[v]=J,n.spotShadowMap[v]=tt,w++}v++}else if(P.isRectAreaLight){let Z=t.get(P);Z.color.copy(Y).multiplyScalar(W),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Z,m++}else if(P.isPointLight){let Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){let at=P.shadow,J=e.get(P);J.shadowIntensity=at.intensity,J.shadowBias=at.bias,J.shadowNormalBias=at.normalBias,J.shadowRadius=at.radius,J.shadowMapSize=at.mapSize,J.shadowCameraNear=at.camera.near,J.shadowCameraFar=at.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=tt,n.pointShadowMatrix[_]=P.shadow.matrix,A++}n.point[_]=Z,_++}else if(P.isHemisphereLight){let Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(W),Z.groundColor.copy(P.groundColor).multiplyScalar(W),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let k=n.hash;(k.directionalLength!==p||k.pointLength!==_||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==u||k.numDirectionalShadows!==C||k.numPointShadows!==A||k.numSpotShadows!==w||k.numSpotMaps!==G||k.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=w+G-F,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=D,k.directionalLength=p,k.pointLength=_,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=u,k.numDirectionalShadows=C,k.numPointShadows=A,k.numSpotShadows=w,k.numSpotMaps=G,k.numLightProbes=D,n.version=eg++)}function l(c,h){let d=0,f=0,p=0,_=0,v=0,m=h.matrixWorldInverse;for(let u=0,C=c.length;u<C;u++){let A=c[u];if(A.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(A.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(A.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(A.width*.5,0,0),w.halfHeight.set(0,A.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(A.matrixWorld),w.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){let w=n.hemi[v];w.direction.setFromMatrixPosition(A.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Lc(i){let t=new ig(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Lc(i),t.set(s,[a])):r>=o.length?(a=new Lc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wo=class extends Wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xo=class extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,t,e){let n=new zs,s=new he,r=new he,o=new ye,a=new Wo({depthPacking:uu}),l=new Xo,c={},h=e.maxTextureSize,d={[li]:Qe,[Qe]:li,[pn]:pn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new en;_.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ae(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let u=this.type;this.render=function(F,D,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ai),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let W=u!==Fn&&this.type===Fn,$=u===Fn&&this.type!==Fn;for(let tt=0,Z=F.length;tt<Z;tt++){let at=F[tt],J=at.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let ft=J.getFrameExtents();if(s.multiply(ft),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,J.mapSize.y=r.y)),J.map===null||W===!0||$===!0){let Dt=this.type!==Fn?{minFilter:on,magFilter:on}:{};J.map!==null&&J.map.dispose(),J.map=new Vn(s.x,s.y,Dt),J.map.texture.name=at.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let wt=J.getViewportCount();for(let Dt=0;Dt<wt;Dt++){let $t=J.getViewport(Dt);o.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),Y.viewport(o),J.updateMatrices(at,Dt),n=J.getFrustum(),w(D,k,J.camera,at,this.type)}J.isPointLightShadow!==!0&&this.type===Fn&&C(J,k),J.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,P)};function C(F,D){let k=t.update(v);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Vn(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(D,null,k,f,v,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(D,null,k,p,v,null)}function A(F,D,k,b){let y=null,P=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(P!==void 0)y=P;else if(y=k.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){let Y=y.uuid,W=D.uuid,$=c[Y];$===void 0&&($={},c[Y]=$);let tt=$[W];tt===void 0&&(tt=y.clone(),$[W]=tt,D.addEventListener("dispose",G)),y=tt}if(y.visible=D.visible,y.wireframe=D.wireframe,b===Fn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:d[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,k.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let Y=i.properties.get(y);Y.light=k}return y}function w(F,D,k,b,y){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&y===Fn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);let W=t.update(F),$=F.material;if(Array.isArray($)){let tt=W.groups;for(let Z=0,at=tt.length;Z<at;Z++){let J=tt[Z],ft=$[J.materialIndex];if(ft&&ft.visible){let wt=A(F,ft,b,y);F.onBeforeShadow(i,F,D,k,W,wt,J),i.renderBufferDirect(k,null,W,wt,F,J),F.onAfterShadow(i,F,D,k,W,wt,J)}}}else if($.visible){let tt=A(F,$,b,y);F.onBeforeShadow(i,F,D,k,W,tt,null),i.renderBufferDirect(k,null,W,tt,F,null),F.onAfterShadow(i,F,D,k,W,tt,null)}}let Y=F.children;for(let W=0,$=Y.length;W<$;W++)w(Y[W],D,k,b,y)}function G(F){F.target.removeEventListener("dispose",G);for(let k in c){let b=c[k],y=F.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var lg={[$a]:Za,[Ja]:ja,[Ka]:to,[hs]:Qa,[Za]:$a,[ja]:Ja,[to]:Ka,[Qa]:hs};function cg(i,t){function e(){let I=!1,vt=new ye,K=null,it=new ye(0,0,0,0);return{setMask:function(mt){K!==mt&&!I&&(i.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){I=mt},setClear:function(mt,gt,Xt,Qt,Ie){Ie===!0&&(mt*=Qt,gt*=Qt,Xt*=Qt),vt.set(mt,gt,Xt,Qt),it.equals(vt)===!1&&(i.clearColor(mt,gt,Xt,Qt),it.copy(vt))},reset:function(){I=!1,K=null,it.set(-1,0,0,0)}}}function n(){let I=!1,vt=!1,K=null,it=null,mt=null;return{setReversed:function(gt){if(vt!==gt){let Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);let Qt=mt;mt=null,this.setClear(Qt)}vt=gt},getReversed:function(){return vt},setTest:function(gt){gt?_t(i.DEPTH_TEST):kt(i.DEPTH_TEST)},setMask:function(gt){K!==gt&&!I&&(i.depthMask(gt),K=gt)},setFunc:function(gt){if(vt&&(gt=lg[gt]),it!==gt){switch(gt){case $a:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=gt}},setLocked:function(gt){I=gt},setClear:function(gt){mt!==gt&&(vt&&(gt=1-gt),i.clearDepth(gt),mt=gt)},reset:function(){I=!1,K=null,it=null,mt=null,vt=!1}}}function s(){let I=!1,vt=null,K=null,it=null,mt=null,gt=null,Xt=null,Qt=null,Ie=null;return{setTest:function(jt){I||(jt?_t(i.STENCIL_TEST):kt(i.STENCIL_TEST))},setMask:function(jt){vt!==jt&&!I&&(i.stencilMask(jt),vt=jt)},setFunc:function(jt,nn,mn){(K!==jt||it!==nn||mt!==mn)&&(i.stencilFunc(jt,nn,mn),K=jt,it=nn,mt=mn)},setOp:function(jt,nn,mn){(gt!==jt||Xt!==nn||Qt!==mn)&&(i.stencilOp(jt,nn,mn),gt=jt,Xt=nn,Qt=mn)},setLocked:function(jt){I=jt},setClear:function(jt){Ie!==jt&&(i.clearStencil(jt),Ie=jt)},reset:function(){I=!1,vt=null,K=null,it=null,mt=null,gt=null,Xt=null,Qt=null,Ie=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,u=null,C=null,A=null,w=null,G=null,F=null,D=new qt(0,0,0),k=0,b=!1,y=null,P=null,Y=null,W=null,$=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,at=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(J)[1]),Z=at>=1):J.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Z=at>=2);let ft=null,wt={},Dt=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),ae=new ye().fromArray(Dt),nt=new ye().fromArray($t);function ot(I,vt,K,it){let mt=new Uint8Array(4),gt=i.createTexture();i.bindTexture(I,gt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<K;Xt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(vt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return gt}let St={};St[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),o.setFunc(hs),ee(!1),ne(Nl),_t(i.CULL_FACE),z(ai);function _t(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function kt(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Wt(I,vt){return d[I]!==vt?(i.bindFramebuffer(I,vt),d[I]=vt,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Gt(I,vt){let K=p,it=!1;if(I){K=f.get(vt),K===void 0&&(K=[],f.set(vt,K));let mt=I.textures;if(K.length!==mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let gt=0,Xt=mt.length;gt<Xt;gt++)K[gt]=i.COLOR_ATTACHMENT0+gt;K.length=mt.length,it=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,it=!0);it&&i.drawBuffers(K)}function ge(I){return _!==I?(i.useProgram(I),_=I,!0):!1}let te={[Ii]:i.FUNC_ADD,[Bh]:i.FUNC_SUBTRACT,[zh]:i.FUNC_REVERSE_SUBTRACT};te[kh]=i.MIN,te[Vh]=i.MAX;let be={[Hh]:i.ZERO,[Gh]:i.ONE,[Wh]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[$h]:i.DST_COLOR,[qh]:i.DST_ALPHA,[Xh]:i.ONE_MINUS_SRC_COLOR,[Ya]:i.ONE_MINUS_SRC_ALPHA,[Zh]:i.ONE_MINUS_DST_COLOR,[Yh]:i.ONE_MINUS_DST_ALPHA,[Kh]:i.CONSTANT_COLOR,[Qh]:i.ONE_MINUS_CONSTANT_COLOR,[jh]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function z(I,vt,K,it,mt,gt,Xt,Qt,Ie,jt){if(I===ai){v===!0&&(kt(i.BLEND),v=!1);return}if(v===!1&&(_t(i.BLEND),v=!0),I!==Oh){if(I!==m||jt!==b){if((u!==Ii||w!==Ii)&&(i.blendEquation(i.FUNC_ADD),u=Ii,w=Ii),jt)switch(I){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ci:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}C=null,A=null,G=null,F=null,D.set(0,0,0),k=0,m=I,b=jt}return}mt=mt||vt,gt=gt||K,Xt=Xt||it,(vt!==u||mt!==w)&&(i.blendEquationSeparate(te[vt],te[mt]),u=vt,w=mt),(K!==C||it!==A||gt!==G||Xt!==F)&&(i.blendFuncSeparate(be[K],be[it],be[gt],be[Xt]),C=K,A=it,G=gt,F=Xt),(Qt.equals(D)===!1||Ie!==k)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Ie),D.copy(Qt),k=Ie),m=I,b=!1}function Se(I,vt){I.side===pn?kt(i.CULL_FACE):_t(i.CULL_FACE);let K=I.side===Qe;vt&&(K=!K),ee(K),I.blending===as&&I.transparent===!1?z(ai):z(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let it=I.stencilWrite;a.setTest(it),it&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):kt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function ne(I){I!==Nh?(_t(i.CULL_FACE),I!==P&&(I===Nl?i.cullFace(i.BACK):I===Fh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):kt(i.CULL_FACE),P=I}function Nt(I){I!==Y&&(Z&&i.lineWidth(I),Y=I)}function ue(I,vt,K){I?(_t(i.POLYGON_OFFSET_FILL),(W!==vt||$!==K)&&(i.polygonOffset(vt,K),W=vt,$=K)):kt(i.POLYGON_OFFSET_FILL)}function Ut(I){I?_t(i.SCISSOR_TEST):kt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+tt-1),ft!==I&&(i.activeTexture(I),ft=I)}function g(I,vt,K){K===void 0&&(ft===null?K=i.TEXTURE0+tt-1:K=ft);let it=wt[K];it===void 0&&(it={type:void 0,texture:void 0},wt[K]=it),(it.type!==I||it.texture!==vt)&&(ft!==K&&(i.activeTexture(K),ft=K),i.bindTexture(I,vt||St[I]),it.type=I,it.texture=vt)}function H(){let I=wt[ft];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){ae.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function Et(I){nt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),nt.copy(I))}function Kt(I,vt){let K=c.get(vt);K===void 0&&(K=new WeakMap,c.set(vt,K));let it=K.get(I);it===void 0&&(it=i.getUniformBlockIndex(vt,I.name),K.set(I,it))}function Ht(I,vt){let it=c.get(vt).get(I);l.get(vt)!==it&&(i.uniformBlockBinding(vt,it,I.__bindingPointIndex),l.set(vt,it))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,wt={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,u=null,C=null,A=null,w=null,G=null,F=null,D=new qt(0,0,0),k=0,b=!1,y=null,P=null,Y=null,W=null,$=null,ae.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_t,disable:kt,bindFramebuffer:Wt,drawBuffers:Gt,useProgram:ge,setBlending:z,setMaterial:Se,setFlipSided:ee,setCullFace:ne,setLineWidth:Nt,setPolygonOffset:ue,setScissorTest:Ut,activeTexture:T,bindTexture:g,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:st,texImage2D:Mt,texImage3D:Ot,updateUBOMapping:Kt,uniformBlockBinding:Ht,texStorage2D:ie,texStorage3D:lt,texSubImage2D:et,texSubImage3D:Pt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Bt,viewport:Et,reset:_e}}function Dc(i,t,e,n){let s=hg(n);switch(e){case Kc:return i*t;case jc:return i*t;case th:return i*t*2;case ml:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case eh:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case Qc:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case wr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(t,8)/4;case so:case ao:return Math.max(i,8)*Math.max(t,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rr:case To:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nh:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Co:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hg(i){switch(i){case kn:case $c:return{byteLength:1,components:1};case Os:case Zc:case Xs:return{byteLength:2,components:1};case fl:case pl:return{byteLength:2,components:4};case Ni:case dl:case Tn:return{byteLength:4,components:1};case Jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ug(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Pr("canvas")}function v(T,g,H){let j=1,st=Ut(T);if((st.width>H||st.height>H)&&(j=H/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let et=Math.floor(j*st.width),Pt=Math.floor(j*st.height);d===void 0&&(d=_(et,Pt));let pt=g?_(et,Pt):d;return pt.width=et,pt.height=Pt,pt.getContext("2d").drawImage(T,0,0,et,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+et+"x"+Pt+")."),pt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,g,H,j,st=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let et=g;if(g===i.RED&&(H===i.FLOAT&&(et=i.R32F),H===i.HALF_FLOAT&&(et=i.R16F),H===i.UNSIGNED_BYTE&&(et=i.R8)),g===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.R8UI),H===i.UNSIGNED_SHORT&&(et=i.R16UI),H===i.UNSIGNED_INT&&(et=i.R32UI),H===i.BYTE&&(et=i.R8I),H===i.SHORT&&(et=i.R16I),H===i.INT&&(et=i.R32I)),g===i.RG&&(H===i.FLOAT&&(et=i.RG32F),H===i.HALF_FLOAT&&(et=i.RG16F),H===i.UNSIGNED_BYTE&&(et=i.RG8)),g===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RG8UI),H===i.UNSIGNED_SHORT&&(et=i.RG16UI),H===i.UNSIGNED_INT&&(et=i.RG32UI),H===i.BYTE&&(et=i.RG8I),H===i.SHORT&&(et=i.RG16I),H===i.INT&&(et=i.RG32I)),g===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGB8UI),H===i.UNSIGNED_SHORT&&(et=i.RGB16UI),H===i.UNSIGNED_INT&&(et=i.RGB32UI),H===i.BYTE&&(et=i.RGB8I),H===i.SHORT&&(et=i.RGB16I),H===i.INT&&(et=i.RGB32I)),g===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),H===i.UNSIGNED_INT&&(et=i.RGBA32UI),H===i.BYTE&&(et=i.RGBA8I),H===i.SHORT&&(et=i.RGBA16I),H===i.INT&&(et=i.RGBA32I)),g===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),g===i.RGBA){let Pt=st?ea:ce.getTransfer(j);H===i.FLOAT&&(et=i.RGBA32F),H===i.HALF_FLOAT&&(et=i.RGBA16F),H===i.UNSIGNED_BYTE&&(et=Pt===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function w(T,g){let H;return T?g===null||g===Ni||g===fs?H=i.DEPTH24_STENCIL8:g===Tn?H=i.DEPTH32F_STENCIL8:g===Os&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ni||g===fs?H=i.DEPTH_COMPONENT24:g===Tn?H=i.DEPTH_COMPONENT32F:g===Os&&(H=i.DEPTH_COMPONENT16),H}function G(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==En?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function F(T){let g=T.target;g.removeEventListener("dispose",F),k(g),g.isVideoTexture&&h.delete(g)}function D(T){let g=T.target;g.removeEventListener("dispose",D),y(g)}function k(T){let g=n.get(T);if(g.__webglInit===void 0)return;let H=T.source,j=f.get(H);if(j){let st=j[g.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(T),Object.keys(j).length===0&&f.delete(H)}n.remove(T)}function b(T){let g=n.get(T);i.deleteTexture(g.__webglTexture);let H=T.source,j=f.get(H);delete j[g.__cacheKey],o.memory.textures--}function y(T){let g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let st=0;st<g.__webglFramebuffer[j].length;st++)i.deleteFramebuffer(g.__webglFramebuffer[j][st]);else i.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)i.deleteFramebuffer(g.__webglFramebuffer[j]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let H=T.textures;for(let j=0,st=H.length;j<st;j++){let et=n.get(H[j]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(H[j])}n.remove(T)}let P=0;function Y(){P=0}function W(){let T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function $(T){let g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function tt(T,g){let H=n.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(H,T,g);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+g)}function Z(T,g){let H=n.get(T);if(T.version>0&&H.__version!==T.version){nt(H,T,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+g)}function at(T,g){let H=n.get(T);if(T.version>0&&H.__version!==T.version){nt(H,T,g);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+g)}function J(T,g){let H=n.get(T);if(T.version>0&&H.__version!==T.version){ot(H,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+g)}let ft={[Fs]:i.REPEAT,[Di]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},wt={[on]:i.NEAREST,[cu]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[fa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Dt={[fu]:i.NEVER,[vu]:i.ALWAYS,[pu]:i.LESS,[sh]:i.LEQUAL,[mu]:i.EQUAL,[xu]:i.GEQUAL,[gu]:i.GREATER,[_u]:i.NOTEQUAL};function $t(T,g){if(g.type===Tn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===En||g.magFilter===fa||g.magFilter===Ks||g.magFilter===Ui||g.minFilter===En||g.minFilter===fa||g.minFilter===Ks||g.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ft[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ft[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ft[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,wt[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,wt[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Dt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===on||g.minFilter!==Ks&&g.minFilter!==Ui||g.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ae(T,g){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",F));let j=g.source,st=f.get(j);st===void 0&&(st={},f.set(j,st));let et=$(g);if(et!==T.__cacheKey){st[et]===void 0&&(st[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),st[et].usedTimes++;let Pt=st[T.__cacheKey];Pt!==void 0&&(st[T.__cacheKey].usedTimes--,Pt.usedTimes===0&&b(g)),T.__cacheKey=et,T.__webglTexture=st[et].texture}return H}function nt(T,g,H){let j=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=i.TEXTURE_3D);let st=ae(T,g),et=g.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+H);let Pt=n.get(et);if(et.version!==Pt.__version||st===!0){e.activeTexture(i.TEXTURE0+H);let pt=ce.getPrimaries(ce.workingColorSpace),yt=g.colorSpace===ri?null:ce.getPrimaries(g.colorSpace),ie=g.colorSpace===ri||pt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let lt=v(g.image,!1,s.maxTextureSize);lt=ue(g,lt);let Mt=r.convert(g.format,g.colorSpace),Ot=r.convert(g.type),Bt=A(g.internalFormat,Mt,Ot,g.colorSpace,g.isVideoTexture);$t(j,g);let Et,Kt=g.mipmaps,Ht=g.isVideoTexture!==!0,_e=Pt.__version===void 0||st===!0,I=et.dataReady,vt=G(g,lt);if(g.isDepthTexture)Bt=w(g.format===ps,g.type),_e&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Bt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,lt.width,lt.height,0,Mt,Ot,null));else if(g.isDataTexture)if(Kt.length>0){Ht&&_e&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,Kt[0].width,Kt[0].height);for(let K=0,it=Kt.length;K<it;K++)Et=Kt[K],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Et.width,Et.height,Mt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,K,Bt,Et.width,Et.height,0,Mt,Ot,Et.data);g.generateMipmaps=!1}else Ht?(_e&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,lt.width,lt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Ot,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,lt.width,lt.height,0,Mt,Ot,lt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ht&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Kt[0].width,Kt[0].height,lt.depth);for(let K=0,it=Kt.length;K<it;K++)if(Et=Kt[K],g.format!==yn)if(Mt!==null)if(Ht){if(I)if(g.layerUpdates.size>0){let mt=Dc(Et.width,Et.height,g.format,g.type);for(let gt of g.layerUpdates){let Xt=Et.data.subarray(gt*mt/Et.data.BYTES_PER_ELEMENT,(gt+1)*mt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,gt,Et.width,Et.height,1,Mt,Xt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Et.width,Et.height,lt.depth,Mt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Bt,Et.width,Et.height,lt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Et.width,Et.height,lt.depth,Mt,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,Bt,Et.width,Et.height,lt.depth,0,Mt,Ot,Et.data)}else{Ht&&_e&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,Kt[0].width,Kt[0].height);for(let K=0,it=Kt.length;K<it;K++)Et=Kt[K],g.format!==yn?Mt!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Et.width,Et.height,Mt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,K,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Et.width,Et.height,Mt,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,K,Bt,Et.width,Et.height,0,Mt,Ot,Et.data)}else if(g.isDataArrayTexture)if(Ht){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,lt.width,lt.height,lt.depth),I)if(g.layerUpdates.size>0){let K=Dc(lt.width,lt.height,g.format,g.type);for(let it of g.layerUpdates){let mt=lt.data.subarray(it*K/lt.data.BYTES_PER_ELEMENT,(it+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Mt,Ot,mt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Ot,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,lt.width,lt.height,lt.depth,0,Mt,Ot,lt.data);else if(g.isData3DTexture)Ht?(_e&&e.texStorage3D(i.TEXTURE_3D,vt,Bt,lt.width,lt.height,lt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Ot,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,lt.width,lt.height,lt.depth,0,Mt,Ot,lt.data);else if(g.isFramebufferTexture){if(_e)if(Ht)e.texStorage2D(i.TEXTURE_2D,vt,Bt,lt.width,lt.height);else{let K=lt.width,it=lt.height;for(let mt=0;mt<vt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Bt,K,it,0,Mt,Ot,null),K>>=1,it>>=1}}else if(Kt.length>0){if(Ht&&_e){let K=Ut(Kt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Bt,K.width,K.height)}for(let K=0,it=Kt.length;K<it;K++)Et=Kt[K],Ht?I&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Mt,Ot,Et):e.texImage2D(i.TEXTURE_2D,K,Bt,Mt,Ot,Et);g.generateMipmaps=!1}else if(Ht){if(_e){let K=Ut(lt);e.texStorage2D(i.TEXTURE_2D,vt,Bt,K.width,K.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ot,lt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Mt,Ot,lt);m(g)&&u(j),Pt.__version=et.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function ot(T,g,H){if(g.image.length!==6)return;let j=ae(T,g),st=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);let et=n.get(st);if(st.version!==et.__version||j===!0){e.activeTexture(i.TEXTURE0+H);let Pt=ce.getPrimaries(ce.workingColorSpace),pt=g.colorSpace===ri?null:ce.getPrimaries(g.colorSpace),yt=g.colorSpace===ri||Pt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let ie=g.isCompressedTexture||g.image[0].isCompressedTexture,lt=g.image[0]&&g.image[0].isDataTexture,Mt=[];for(let it=0;it<6;it++)!ie&&!lt?Mt[it]=v(g.image[it],!0,s.maxCubemapSize):Mt[it]=lt?g.image[it].image:g.image[it],Mt[it]=ue(g,Mt[it]);let Ot=Mt[0],Bt=r.convert(g.format,g.colorSpace),Et=r.convert(g.type),Kt=A(g.internalFormat,Bt,Et,g.colorSpace),Ht=g.isVideoTexture!==!0,_e=et.__version===void 0||j===!0,I=st.dataReady,vt=G(g,Ot);$t(i.TEXTURE_CUBE_MAP,g);let K;if(ie){Ht&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,Ot.width,Ot.height);for(let it=0;it<6;it++){K=Mt[it].mipmaps;for(let mt=0;mt<K.length;mt++){let gt=K[mt];g.format!==yn?Bt!==null?Ht?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt,0,0,gt.width,gt.height,Bt,gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt,Kt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt,0,0,gt.width,gt.height,Bt,Et,gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt,Kt,gt.width,gt.height,0,Bt,Et,gt.data)}}}else{if(K=g.mipmaps,Ht&&_e){K.length>0&&vt++;let it=Ut(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt[it].width,Mt[it].height,Bt,Et,Mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,Mt[it].width,Mt[it].height,0,Bt,Et,Mt[it].data);for(let mt=0;mt<K.length;mt++){let Xt=K[mt].image[it].image;Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt+1,0,0,Xt.width,Xt.height,Bt,Et,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt+1,Kt,Xt.width,Xt.height,0,Bt,Et,Xt.data)}}else{Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Bt,Et,Mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,Bt,Et,Mt[it]);for(let mt=0;mt<K.length;mt++){let gt=K[mt];Ht?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt+1,0,0,Bt,Et,gt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,mt+1,Kt,Bt,Et,gt.image[it])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),et.__version=st.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function St(T,g,H,j,st,et){let Pt=r.convert(H.format,H.colorSpace),pt=r.convert(H.type),yt=A(H.internalFormat,Pt,pt,H.colorSpace),ie=n.get(g),lt=n.get(H);if(lt.__renderTarget=g,!ie.__hasExternalTextures){let Mt=Math.max(1,g.width>>et),Ot=Math.max(1,g.height>>et);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,et,yt,Mt,Ot,g.depth,0,Pt,pt,null):e.texImage2D(st,et,yt,Mt,Ot,0,Pt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,st,lt.__webglTexture,0,ee(g)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,st,lt.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(T,g,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){let j=g.depthTexture,st=j&&j.isDepthTexture?j.type:null,et=w(g.stencilBuffer,st),Pt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ee(g);ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,et,g.width,g.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,et,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,et,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,T)}else{let j=g.textures;for(let st=0;st<j.length;st++){let et=j[st],Pt=r.convert(et.format,et.colorSpace),pt=r.convert(et.type),yt=A(et.internalFormat,Pt,pt,et.colorSpace),ie=ee(g);H&&ne(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,yt,g.width,g.height):ne(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,yt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,yt,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(g.depthTexture);j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),tt(g.depthTexture,0);let st=j.__webglTexture,et=ee(g);if(g.depthTexture.format===os)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(g.depthTexture.format===ps)ne(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Wt(T){let g=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){let st=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),g.__depthDisposeCallback=st}g.__boundDepthTexture=j}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");kt(g.__webglFramebuffer,T)}else if(H){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=i.createRenderbuffer(),_t(g.__webglDepthbuffer[j],T,!1);else{let st=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=g.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,et)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),_t(g.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,st)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,g,H){let j=n.get(T);g!==void 0&&St(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Wt(T)}function ge(T){let g=T.texture,H=n.get(T),j=n.get(g);T.addEventListener("dispose",D);let st=T.textures,et=T.isWebGLCubeRenderTarget===!0,Pt=st.length>1;if(Pt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=g.version,o.memory.textures++),et){H.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer[pt]=[];for(let yt=0;yt<g.mipmaps.length;yt++)H.__webglFramebuffer[pt][yt]=i.createFramebuffer()}else H.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){H.__webglFramebuffer=[];for(let pt=0;pt<g.mipmaps.length;pt++)H.__webglFramebuffer[pt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let pt=0,yt=st.length;pt<yt;pt++){let ie=n.get(st[pt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ne(T)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pt=0;pt<st.length;pt++){let yt=st[pt];H.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[pt]);let ie=r.convert(yt.format,yt.colorSpace),lt=r.convert(yt.type),Mt=A(yt.internalFormat,ie,lt,yt.colorSpace,T.isXRRenderTarget===!0),Ot=ee(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Mt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,H.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),$t(i.TEXTURE_CUBE_MAP,g);for(let pt=0;pt<6;pt++)if(g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)St(H.__webglFramebuffer[pt][yt],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else St(H.__webglFramebuffer[pt],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(g)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let pt=0,yt=st.length;pt<yt;pt++){let ie=st[pt],lt=n.get(ie);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),$t(i.TEXTURE_2D,ie),St(H.__webglFramebuffer,T,ie,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(ie)&&u(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(pt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,j.__webglTexture),$t(pt,g),g.mipmaps&&g.mipmaps.length>0)for(let yt=0;yt<g.mipmaps.length;yt++)St(H.__webglFramebuffer[yt],T,g,i.COLOR_ATTACHMENT0,pt,yt);else St(H.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,pt,0);m(g)&&u(pt),e.unbindTexture()}T.depthBuffer&&Wt(T)}function te(T){let g=T.textures;for(let H=0,j=g.length;H<j;H++){let st=g[H];if(m(st)){let et=C(T),Pt=n.get(st).__webglTexture;e.bindTexture(et,Pt),u(et),e.unbindTexture()}}}let be=[],z=[];function Se(T){if(T.samples>0){if(ne(T)===!1){let g=T.textures,H=T.width,j=T.height,st=i.COLOR_BUFFER_BIT,et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(T),pt=g.length>1;if(pt)for(let yt=0;yt<g.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let yt=0;yt<g.length;yt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);let ie=n.get(g[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,st,i.NEAREST),l===!0&&(be.length=0,z.length=0,be.push(i.COLOR_ATTACHMENT0+yt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(et),z.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<g.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[yt]);let ie=n.get(g[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ee(T){return Math.min(s.maxSamples,T.samples)}function ne(T){let g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Nt(T){let g=o.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function ue(T,g){let H=T.colorSpace,j=T.format,st=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==vs&&H!==ri&&(ce.getTransfer(H)===ve?(j!==yn||st!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),g}function Ut(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=Z,this.setTexture3D=at,this.setTextureCube=J,this.rebindTextures=Gt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ne}function dg(i,t){function e(n,s=ri){let r,o=ce.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.BYTE;if(n===Zc)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Xs)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===yn)return i.RGBA;if(n===jc)return i.LUMINANCE;if(n===th)return i.LUMINANCE_ALPHA;if(n===os)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===ml)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===eh)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===wr||n===Er||n===Tr||n===Ar)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===bo||n===wo||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_o)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===So)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===To||n===Ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Rr)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===Ro||n===Co||n===Io)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var qo=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},An=class extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},fg={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mg=`
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

}`,Yo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:pg,fragmentShader:mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$o=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,_=null,v=new Yo,m=e.getContextAttributes(),u=null,C=null,A=[],w=[],G=new he,F=null,D=new Ge;D.viewport=new ye;let k=new Ge;k.viewport=new ye;let b=[D,k],y=new qo,P=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ot=A[nt];return ot===void 0&&(ot=new Ns,A[nt]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(nt){let ot=A[nt];return ot===void 0&&(ot=new Ns,A[nt]=ot),ot.getGripSpace()},this.getHand=function(nt){let ot=A[nt];return ot===void 0&&(ot=new Ns,A[nt]=ot),ot.getHandSpace()};function W(nt){let ot=w.indexOf(nt.inputSource);if(ot===-1)return;let St=A[ot];St!==void 0&&(St.update(nt.inputSource,nt.frame,c||o),St.dispatchEvent({type:nt.type,data:nt.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",tt);for(let nt=0;nt<A.length;nt++){let ot=w[nt];ot!==null&&(w[nt]=null,A[nt].disconnect(ot))}P=null,Y=null,v.reset(),t.setRenderTarget(u),p=null,f=null,d=null,s=null,C=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",tt),m.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(G),s.renderState.layers===void 0){let ot={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new Vn(p.framebufferWidth,p.framebufferHeight,{format:yn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ot=null,St=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=m.stencil?ps:os,St=m.stencil?fs:Ni);let kt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new Vn(f.textureWidth,f.textureHeight,{format:yn,type:kn,depthTexture:new Vr(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function tt(nt){for(let ot=0;ot<nt.removed.length;ot++){let St=nt.removed[ot],_t=w.indexOf(St);_t>=0&&(w[_t]=null,A[_t].disconnect(St))}for(let ot=0;ot<nt.added.length;ot++){let St=nt.added[ot],_t=w.indexOf(St);if(_t===-1){for(let Wt=0;Wt<A.length;Wt++)if(Wt>=w.length){w.push(St),_t=Wt;break}else if(w[Wt]===null){w[Wt]=St,_t=Wt;break}if(_t===-1)break}let kt=A[_t];kt&&kt.connect(St)}}let Z=new O,at=new O;function J(nt,ot,St){Z.setFromMatrixPosition(ot.matrixWorld),at.setFromMatrixPosition(St.matrixWorld);let _t=Z.distanceTo(at),kt=ot.projectionMatrix.elements,Wt=St.projectionMatrix.elements,Gt=kt[14]/(kt[10]-1),ge=kt[14]/(kt[10]+1),te=(kt[9]+1)/kt[5],be=(kt[9]-1)/kt[5],z=(kt[8]-1)/kt[0],Se=(Wt[8]+1)/Wt[0],ee=Gt*z,ne=Gt*Se,Nt=_t/(-z+Se),ue=Nt*-z;if(ot.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(ue),nt.translateZ(Nt),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),kt[10]===-1)nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Ut=Gt+Nt,T=ge+Nt,g=ee-ue,H=ne+(_t-ue),j=te*ge/T*Ut,st=be*ge/T*Ut;nt.projectionMatrix.makePerspective(g,H,j,st,Ut,T),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ft(nt,ot){ot===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ot.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ot=nt.near,St=nt.far;v.texture!==null&&(v.depthNear>0&&(ot=v.depthNear),v.depthFar>0&&(St=v.depthFar)),y.near=k.near=D.near=ot,y.far=k.far=D.far=St,(P!==y.near||Y!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,Y=y.far),D.layers.mask=nt.layers.mask|2,k.layers.mask=nt.layers.mask|4,y.layers.mask=D.layers.mask|k.layers.mask;let _t=nt.parent,kt=y.cameras;ft(y,_t);for(let Wt=0;Wt<kt.length;Wt++)ft(kt[Wt],_t);kt.length===2?J(y,D,k):y.projectionMatrix.copy(D.projectionMatrix),wt(nt,y,_t)};function wt(nt,ot,St){St===null?nt.matrix.copy(ot.matrixWorld):(nt.matrix.copy(St.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ot.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ot.projectionMatrix),nt.projectionMatrixInverse.copy(ot.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Lo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Dt=null;function $t(nt,ot){if(h=ot.getViewerPose(c||o),_=ot,h!==null){let St=h.views;p!==null&&(t.setRenderTargetFramebuffer(C,p.framebuffer),t.setRenderTarget(C));let _t=!1;St.length!==y.cameras.length&&(y.cameras.length=0,_t=!0);for(let Wt=0;Wt<St.length;Wt++){let Gt=St[Wt],ge=null;if(p!==null)ge=p.getViewport(Gt);else{let be=d.getViewSubImage(f,Gt);ge=be.viewport,Wt===0&&(t.setRenderTargetTextures(C,be.colorTexture,f.ignoreDepthValues?void 0:be.depthStencilTexture),t.setRenderTarget(C))}let te=b[Wt];te===void 0&&(te=new Ge,te.layers.enable(Wt),te.viewport=new ye,b[Wt]=te),te.matrix.fromArray(Gt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Gt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ge.x,ge.y,ge.width,ge.height),Wt===0&&(y.matrix.copy(te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_t===!0&&y.cameras.push(te)}let kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){let Wt=d.getDepthInformation(St[0]);Wt&&Wt.isValid&&Wt.texture&&v.init(t,Wt,s.renderState)}}for(let St=0;St<A.length;St++){let _t=w[St],kt=A[St];_t!==null&&kt!==void 0&&kt.update(_t,ot,c||o)}Dt&&Dt(nt,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}let ae=new lh;ae.setAnimationLoop($t),this.setAnimationLoop=function(nt){Dt=nt},this.dispose=function(){}}},Ri=new Rn,gg=new de;function _g(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,oh(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,C,A,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,w)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,C,A):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Qe&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Qe&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let C=t.get(u),A=C.envMap,w=C.envMapRotation;A&&(m.envMap.value=A,Ri.copy(w),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(Ri)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,C,A){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*C,m.scale.value=A*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,C){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qe&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){let C=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xg(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){let w=A.program;n.uniformBlockBinding(C,w)}function c(C,A){let w=s[C.id];w===void 0&&(_(C),w=h(C),s[C.id]=w,C.addEventListener("dispose",m));let G=A.program;n.updateUBOMapping(C,G);let F=t.render.frame;r[C.id]!==F&&(f(C),r[C.id]=F)}function h(C){let A=d();C.__bindingPointIndex=A;let w=i.createBuffer(),G=C.__size,F=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,G,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,w),w}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let A=s[C.id],w=C.uniforms,G=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let F=0,D=w.length;F<D;F++){let k=Array.isArray(w[F])?w[F]:[w[F]];for(let b=0,y=k.length;b<y;b++){let P=k[b];if(p(P,F,b,G)===!0){let Y=P.__offset,W=Array.isArray(P.value)?P.value:[P.value],$=0;for(let tt=0;tt<W.length;tt++){let Z=W[tt],at=v(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,Y+$,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,$),$+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,A,w,G){let F=C.value,D=A+"_"+w;if(G[D]===void 0)return typeof F=="number"||typeof F=="boolean"?G[D]=F:G[D]=F.clone(),!0;{let k=G[D];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return G[D]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function _(C){let A=C.uniforms,w=0,G=16;for(let D=0,k=A.length;D<k;D++){let b=Array.isArray(A[D])?A[D]:[A[D]];for(let y=0,P=b.length;y<P;y++){let Y=b[y],W=Array.isArray(Y.value)?Y.value:[Y.value];for(let $=0,tt=W.length;$<tt;$++){let Z=W[$],at=v(Z),J=w%G,ft=J%at.boundary,wt=J+ft;w+=ft,wt!==0&&G-wt<at.storage&&(w+=G-wt),Y.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=at.storage}}}let F=w%G;return F>0&&(w+=G-F),C.__size=w,C.__cache={},this}function v(C){let A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function m(C){let A=C.target;A.removeEventListener("dispose",m);let w=o.indexOf(A.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function u(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Hr=class{constructor(t={}){let{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),v=new Int32Array(4),m=null,u=null,C=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Be,this.toneMapping=oi,this.toneMappingExposure=1;let w=this,G=!1,F=0,D=0,k=null,b=-1,y=null,P=new ye,Y=new ye,W=null,$=new qt(0),tt=0,Z=e.width,at=e.height,J=1,ft=null,wt=null,Dt=new ye(0,0,Z,at),$t=new ye(0,0,Z,at),ae=!1,nt=new zs,ot=!1,St=!1,_t=new de,kt=new de,Wt=new O,Gt=new ye,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function be(){return k===null?J:1}let z=n;function Se(x,U){return e.getContext(x,U)}try{let x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),z===null){let U="webgl2";if(z=Se(U,x),z===null)throw Se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ee,ne,Nt,ue,Ut,T,g,H,j,st,et,Pt,pt,yt,ie,lt,Mt,Ot,Bt,Et,Kt,Ht,_e,I;function vt(){ee=new Up(z),ee.init(),Ht=new dg(z,ee),ne=new Rp(z,ee,t,Ht),Nt=new cg(z,ee),ne.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),ue=new Op(z),Ut=new Jm,T=new ug(z,ee,Nt,Ut,ne,Ht,ue),g=new Ip(w),H=new Dp(w),j=new Gu(z),_e=new Tp(z,j),st=new Np(z,j,ue,_e),et=new zp(z,st,j,ue),Bt=new Bp(z,ne,T),lt=new Cp(Ut),Pt=new Zm(w,g,H,ee,ne,_e,lt),pt=new _g(w,Ut),yt=new Qm,ie=new sg(ee),Ot=new Ep(w,g,H,Nt,et,p,l),Mt=new og(w,et,ne),I=new xg(z,ue,ne,Nt),Et=new Ap(z,ee,ue),Kt=new Fp(z,ee,ue),ue.programs=Pt.programs,w.capabilities=ne,w.extensions=ee,w.properties=Ut,w.renderLists=yt,w.shadowMap=Mt,w.state=Nt,w.info=ue}vt();let K=new $o(w,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let x=ee.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=ee.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(x){x!==void 0&&(J=x,this.setSize(Z,at,!1))},this.getSize=function(x){return x.set(Z,at)},this.setSize=function(x,U,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=x,at=U,e.width=Math.floor(x*J),e.height=Math.floor(U*J),X===!0&&(e.style.width=x+"px",e.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Z*J,at*J).floor()},this.setDrawingBufferSize=function(x,U,X){Z=x,at=U,J=X,e.width=Math.floor(x*X),e.height=Math.floor(U*X),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(P)},this.getViewport=function(x){return x.copy(Dt)},this.setViewport=function(x,U,X,q){x.isVector4?Dt.set(x.x,x.y,x.z,x.w):Dt.set(x,U,X,q),Nt.viewport(P.copy(Dt).multiplyScalar(J).round())},this.getScissor=function(x){return x.copy($t)},this.setScissor=function(x,U,X,q){x.isVector4?$t.set(x.x,x.y,x.z,x.w):$t.set(x,U,X,q),Nt.scissor(Y.copy($t).multiplyScalar(J).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(x){Nt.setScissorTest(ae=x)},this.setOpaqueSort=function(x){ft=x},this.setTransparentSort=function(x){wt=x},this.getClearColor=function(x){return x.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(x=!0,U=!0,X=!0){let q=0;if(x){let B=!1;if(k!==null){let ct=k.texture.format;B=ct===xl||ct===_l||ct===gl}if(B){let ct=k.texture.type,ht=ct===kn||ct===Ni||ct===Os||ct===fs||ct===fl||ct===pl,bt=Ot.getClearColor(),Ct=Ot.getClearAlpha(),It=bt.r,Vt=bt.g,At=bt.b;ht?(_[0]=It,_[1]=Vt,_[2]=At,_[3]=Ct,z.clearBufferuiv(z.COLOR,0,_)):(v[0]=It,v[1]=Vt,v[2]=At,v[3]=Ct,z.clearBufferiv(z.COLOR,0,v))}else q|=z.COLOR_BUFFER_BIT}U&&(q|=z.DEPTH_BUFFER_BIT),X&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),ie.dispose(),Ut.dispose(),g.dispose(),H.dispose(),et.dispose(),_e.dispose(),I.dispose(),Pt.dispose(),K.dispose(),K.removeEventListener("sessionstart",Ys),K.removeEventListener("sessionend",fi),cn.stop()};function it(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;let x=ue.autoReset,U=Mt.enabled,X=Mt.autoUpdate,q=Mt.needsUpdate,B=Mt.type;vt(),ue.autoReset=x,Mt.enabled=U,Mt.autoUpdate=X,Mt.needsUpdate=q,Mt.type=B}function gt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Xt(x){let U=x.target;U.removeEventListener("dispose",Xt),Qt(U)}function Qt(x){Ie(x),Ut.remove(x)}function Ie(x){let U=Ut.get(x).programs;U!==void 0&&(U.forEach(function(X){Pt.releaseProgram(X)}),x.isShaderMaterial&&Pt.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,X,q,B,ct){U===null&&(U=ge);let ht=B.isMesh&&B.matrixWorld.determinant()<0,bt=Yn(x,U,X,q,B);Nt.setMaterial(q,ht);let Ct=X.index,It=1;if(q.wireframe===!0){if(Ct=st.getWireframeAttribute(X),Ct===void 0)return;It=2}let Vt=X.drawRange,At=X.attributes.position,oe=Vt.start*It,pe=(Vt.start+Vt.count)*It;ct!==null&&(oe=Math.max(oe,ct.start*It),pe=Math.min(pe,(ct.start+ct.count)*It)),Ct!==null?(oe=Math.max(oe,0),pe=Math.min(pe,Ct.count)):At!=null&&(oe=Math.max(oe,0),pe=Math.min(pe,At.count));let xe=pe-oe;if(xe<0||xe===1/0)return;_e.setup(B,q,bt,X,Ct);let Ee,se=Et;if(Ct!==null&&(Ee=j.get(Ct),se=Kt,se.setIndex(Ee)),B.isMesh)q.wireframe===!0?(Nt.setLineWidth(q.wireframeLinewidth*be()),se.setMode(z.LINES)):se.setMode(z.TRIANGLES);else if(B.isLine){let Rt=q.linewidth;Rt===void 0&&(Rt=1),Nt.setLineWidth(Rt*be()),B.isLineSegments?se.setMode(z.LINES):B.isLineLoop?se.setMode(z.LINE_LOOP):se.setMode(z.LINE_STRIP)}else B.isPoints?se.setMode(z.POINTS):B.isSprite&&se.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Rt=B._multiDrawStarts,hn=B._multiDrawCounts,re=B._multiDrawCount,sn=Ct?j.get(Ct).bytesPerElement:1,$n=Ut.get(q).currentProgram.getUniforms();for(let Pe=0;Pe<re;Pe++)$n.setValue(z,"_gl_DrawID",Pe),se.render(Rt[Pe]/sn,hn[Pe])}else if(B.isInstancedMesh)se.renderInstances(oe,xe,B.count);else if(X.isInstancedBufferGeometry){let Rt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,hn=Math.min(X.instanceCount,Rt);se.renderInstances(oe,xe,hn)}else se.render(oe,xe)};function jt(x,U,X){x.transparent===!0&&x.side===pn&&x.forceSinglePass===!1?(x.side=Qe,x.needsUpdate=!0,zi(x,U,X),x.side=li,x.needsUpdate=!0,zi(x,U,X),x.side=pn):zi(x,U,X)}this.compile=function(x,U,X=null){X===null&&(X=x),u=ie.get(X),u.init(U),A.push(u),X.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),x!==X&&x.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();let q=new Set;return x.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ct=B.material;if(ct)if(Array.isArray(ct))for(let ht=0;ht<ct.length;ht++){let bt=ct[ht];jt(bt,X,B),q.add(bt)}else jt(ct,X,B),q.add(ct)}),A.pop(),u=null,q},this.compileAsync=function(x,U,X=null){let q=this.compile(x,U,X);return new Promise(B=>{function ct(){if(q.forEach(function(ht){Ut.get(ht).currentProgram.isReady()&&q.delete(ht)}),q.size===0){B(x);return}setTimeout(ct,10)}ee.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let nn=null;function mn(x){nn&&nn(x)}function Ys(){cn.stop()}function fi(){cn.start()}let cn=new lh;cn.setAnimationLoop(mn),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(x){nn=x,K.setAnimationLoop(x),x===null?cn.stop():cn.start()},K.addEventListener("sessionstart",Ys),K.addEventListener("sessionend",fi),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(U),U=K.getCamera()),x.isScene===!0&&x.onBeforeRender(w,x,U,k),u=ie.get(x,A.length),u.init(U),A.push(u),kt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(kt),St=this.localClippingEnabled,ot=lt.init(this.clippingPlanes,St),m=yt.get(x,C.length),m.init(),C.push(m),K.enabled===!0&&K.isPresenting===!0){let ct=w.xr.getDepthSensingMesh();ct!==null&&gn(ct,U,-1/0,w.sortObjects)}gn(x,U,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ft,wt),te=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,te&&Ot.addToRenderList(m,x),this.info.render.frame++,ot===!0&&lt.beginShadows();let X=u.state.shadowsArray;Mt.render(X,x,U),ot===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(u.setupLights(),U.isArrayCamera){let ct=U.cameras;if(B.length>0)for(let ht=0,bt=ct.length;ht<bt;ht++){let Ct=ct[ht];ia(q,B,x,Ct)}te&&Ot.render(x);for(let ht=0,bt=ct.length;ht<bt;ht++){let Ct=ct[ht];Cn(m,x,Ct,Ct.viewport)}}else B.length>0&&ia(q,B,x,U),te&&Ot.render(x),Cn(m,x,U);k!==null&&(T.updateMultisampleRenderTarget(k),T.updateRenderTargetMipmap(k)),x.isScene===!0&&x.onAfterRender(w,x,U),_e.resetDefaultState(),b=-1,y=null,A.pop(),A.length>0?(u=A[A.length-1],ot===!0&&lt.setGlobalState(w.clippingPlanes,u.state.camera)):u=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function gn(x,U,X,q){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||nt.intersectsSprite(x)){q&&Gt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(kt);let ht=et.update(x),bt=x.material;bt.visible&&m.push(x,ht,bt,X,Gt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||nt.intersectsObject(x))){let ht=et.update(x),bt=x.material;if(q&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Gt.copy(x.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Gt.copy(ht.boundingSphere.center)),Gt.applyMatrix4(x.matrixWorld).applyMatrix4(kt)),Array.isArray(bt)){let Ct=ht.groups;for(let It=0,Vt=Ct.length;It<Vt;It++){let At=Ct[It],oe=bt[At.materialIndex];oe&&oe.visible&&m.push(x,ht,oe,X,Gt.z,At)}}else bt.visible&&m.push(x,ht,bt,X,Gt.z,null)}}let ct=x.children;for(let ht=0,bt=ct.length;ht<bt;ht++)gn(ct[ht],U,X,q)}function Cn(x,U,X,q){let B=x.opaque,ct=x.transmissive,ht=x.transparent;u.setupLightsView(X),ot===!0&&lt.setGlobalState(w.clippingPlanes,X),q&&Nt.viewport(P.copy(q)),B.length>0&&pi(B,U,X),ct.length>0&&pi(ct,U,X),ht.length>0&&pi(ht,U,X),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function ia(x,U,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new Vn(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Xs:kn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let ct=u.state.transmissionRenderTarget[q.id],ht=q.viewport||P;ct.setSize(ht.z,ht.w);let bt=w.getRenderTarget();w.setRenderTarget(ct),w.getClearColor($),tt=w.getClearAlpha(),tt<1&&w.setClearColor(16777215,.5),w.clear(),te&&Ot.render(X);let Ct=w.toneMapping;w.toneMapping=oi;let It=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),ot===!0&&lt.setGlobalState(w.clippingPlanes,q),pi(x,X,q),T.updateMultisampleRenderTarget(ct),T.updateRenderTargetMipmap(ct),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let At=0,oe=U.length;At<oe;At++){let pe=U[At],xe=pe.object,Ee=pe.geometry,se=pe.material,Rt=pe.group;if(se.side===pn&&xe.layers.test(q.layers)){let hn=se.side;se.side=Qe,se.needsUpdate=!0,Ms(xe,X,q,Ee,se,Rt),se.side=hn,se.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(ct),T.updateRenderTargetMipmap(ct))}w.setRenderTarget(bt),w.setClearColor($,tt),It!==void 0&&(q.viewport=It),w.toneMapping=Ct}function pi(x,U,X){let q=U.isScene===!0?U.overrideMaterial:null;for(let B=0,ct=x.length;B<ct;B++){let ht=x[B],bt=ht.object,Ct=ht.geometry,It=q===null?ht.material:q,Vt=ht.group;bt.layers.test(X.layers)&&Ms(bt,U,X,Ct,It,Vt)}}function Ms(x,U,X,q,B,ct){x.onBeforeRender(w,U,X,q,B,ct),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),B.onBeforeRender(w,U,X,q,x,ct),B.transparent===!0&&B.side===pn&&B.forceSinglePass===!1?(B.side=Qe,B.needsUpdate=!0,w.renderBufferDirect(X,U,q,B,x,ct),B.side=li,B.needsUpdate=!0,w.renderBufferDirect(X,U,q,B,x,ct),B.side=pn):w.renderBufferDirect(X,U,q,B,x,ct),x.onAfterRender(w,U,X,q,B,ct)}function zi(x,U,X){U.isScene!==!0&&(U=ge);let q=Ut.get(x),B=u.state.lights,ct=u.state.shadowsArray,ht=B.state.version,bt=Pt.getParameters(x,B.state,ct,U,X),Ct=Pt.getProgramCacheKey(bt),It=q.programs;q.environment=x.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(x.isMeshStandardMaterial?H:g).get(x.envMap||q.environment),q.envMapRotation=q.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,It===void 0&&(x.addEventListener("dispose",Xt),It=new Map,q.programs=It);let Vt=It.get(Ct);if(Vt!==void 0){if(q.currentProgram===Vt&&q.lightsStateVersion===ht)return V(x,bt),Vt}else bt.uniforms=Pt.getUniforms(x),x.onBeforeCompile(bt,w),Vt=Pt.acquireProgram(bt,Ct),It.set(Ct,Vt),q.uniforms=bt.uniforms;let At=q.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(At.clippingPlanes=lt.uniform),V(x,bt),q.needsLights=qe(x),q.lightsStateVersion=ht,q.needsLights&&(At.ambientLightColor.value=B.state.ambient,At.lightProbe.value=B.state.probe,At.directionalLights.value=B.state.directional,At.directionalLightShadows.value=B.state.directionalShadow,At.spotLights.value=B.state.spot,At.spotLightShadows.value=B.state.spotShadow,At.rectAreaLights.value=B.state.rectArea,At.ltc_1.value=B.state.rectAreaLTC1,At.ltc_2.value=B.state.rectAreaLTC2,At.pointLights.value=B.state.point,At.pointLightShadows.value=B.state.pointShadow,At.hemisphereLights.value=B.state.hemi,At.directionalShadowMap.value=B.state.directionalShadowMap,At.directionalShadowMatrix.value=B.state.directionalShadowMatrix,At.spotShadowMap.value=B.state.spotShadowMap,At.spotLightMatrix.value=B.state.spotLightMatrix,At.spotLightMap.value=B.state.spotLightMap,At.pointShadowMap.value=B.state.pointShadowMap,At.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Vt,q.uniformsList=null,Vt}function qn(x){if(x.uniformsList===null){let U=x.currentProgram.getUniforms();x.uniformsList=cs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function V(x,U){let X=Ut.get(x);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Yn(x,U,X,q,B){U.isScene!==!0&&(U=ge),T.resetTextureUnits();let ct=U.fog,ht=q.isMeshStandardMaterial?U.environment:null,bt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:vs,Ct=(q.isMeshStandardMaterial?H:g).get(q.envMap||ht),It=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),At=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,pe=!!X.morphAttributes.color,xe=oi;q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(xe=w.toneMapping);let Ee=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=Ee!==void 0?Ee.length:0,Rt=Ut.get(q),hn=u.state.lights;if(ot===!0&&(St===!0||x!==y)){let Ne=x===y&&q.id===b;lt.setState(q,x,Ne)}let re=!1;q.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==hn.state.version||Rt.outputColorSpace!==bt||B.isBatchedMesh&&Rt.batching===!1||!B.isBatchedMesh&&Rt.batching===!0||B.isBatchedMesh&&Rt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Rt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Rt.instancing===!1||!B.isInstancedMesh&&Rt.instancing===!0||B.isSkinnedMesh&&Rt.skinning===!1||!B.isSkinnedMesh&&Rt.skinning===!0||B.isInstancedMesh&&Rt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Rt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Rt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Rt.instancingMorph===!1&&B.morphTexture!==null||Rt.envMap!==Ct||q.fog===!0&&Rt.fog!==ct||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==lt.numPlanes||Rt.numIntersection!==lt.numIntersection)||Rt.vertexAlphas!==It||Rt.vertexTangents!==Vt||Rt.morphTargets!==At||Rt.morphNormals!==oe||Rt.morphColors!==pe||Rt.toneMapping!==xe||Rt.morphTargetsCount!==se)&&(re=!0):(re=!0,Rt.__version=q.version);let sn=Rt.currentProgram;re===!0&&(sn=zi(q,U,B));let $n=!1,Pe=!1,mi=!1,me=sn.getUniforms(),ke=Rt.uniforms;if(Nt.useProgram(sn.program)&&($n=!0,Pe=!0,mi=!0),q.id!==b&&(b=q.id,Pe=!0),$n||y!==x){Nt.buffers.depth.getReversed()?(_t.copy(x.projectionMatrix),bu(_t),wu(_t),me.setValue(z,"projectionMatrix",_t)):me.setValue(z,"projectionMatrix",x.projectionMatrix),me.setValue(z,"viewMatrix",x.matrixWorldInverse);let un=me.map.cameraPosition;un!==void 0&&un.setValue(z,Wt.setFromMatrixPosition(x.matrixWorld)),ne.logarithmicDepthBuffer&&me.setValue(z,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(z,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Pe=!0,mi=!0)}if(B.isSkinnedMesh){me.setOptional(z,B,"bindMatrix"),me.setOptional(z,B,"bindMatrixInverse");let Ne=B.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),me.setValue(z,"boneTexture",Ne.boneTexture,T))}B.isBatchedMesh&&(me.setOptional(z,B,"batchingTexture"),me.setValue(z,"batchingTexture",B._matricesTexture,T),me.setOptional(z,B,"batchingIdTexture"),me.setValue(z,"batchingIdTexture",B._indirectTexture,T),me.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&me.setValue(z,"batchingColorTexture",B._colorsTexture,T));let gi=X.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Bt.update(B,X,sn),(Pe||Rt.receiveShadow!==B.receiveShadow)&&(Rt.receiveShadow=B.receiveShadow,me.setValue(z,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(ke.envMap.value=Ct,ke.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(ke.envMapIntensity.value=U.environmentIntensity),Pe&&(me.setValue(z,"toneMappingExposure",w.toneMappingExposure),Rt.needsLights&&sa(ke,mi),ct&&q.fog===!0&&pt.refreshFogUniforms(ke,ct),pt.refreshMaterialUniforms(ke,q,J,at,u.state.transmissionRenderTarget[x.id]),cs.upload(z,qn(Rt),ke,T)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(cs.upload(z,qn(Rt),ke,T),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(z,"center",B.center),me.setValue(z,"modelViewMatrix",B.modelViewMatrix),me.setValue(z,"normalMatrix",B.normalMatrix),me.setValue(z,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Ne=q.uniformsGroups;for(let un=0,Sn=Ne.length;un<Sn;un++){let Ss=Ne[un];I.update(Ss,sn),I.bind(Ss,sn)}}return sn}function sa(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function qe(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(x,U,X){Ut.get(x.texture).__webglTexture=U,Ut.get(x.depthTexture).__webglTexture=X;let q=Ut.get(x);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){let X=Ut.get(x);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(x,U=0,X=0){k=x,F=U,D=X;let q=!0,B=null,ct=!1,ht=!1;if(x){let Ct=Ut.get(x);if(Ct.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(z.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(Ct.__hasExternalTextures)T.rebindTextures(x,Ut.get(x.texture).__webglTexture,Ut.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let At=x.depthTexture;if(Ct.__boundDepthTexture!==At){if(At!==null&&Ut.has(At)&&(x.width!==At.image.width||x.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}let It=x.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(ht=!0);let Vt=Ut.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?B=Vt[U][X]:B=Vt[U],ct=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?B=Ut.get(x).__webglMultisampledFramebuffer:Array.isArray(Vt)?B=Vt[X]:B=Vt,P.copy(x.viewport),Y.copy(x.scissor),W=x.scissorTest}else P.copy(Dt).multiplyScalar(J).floor(),Y.copy($t).multiplyScalar(J).floor(),W=ae;if(Nt.bindFramebuffer(z.FRAMEBUFFER,B)&&q&&Nt.drawBuffers(x,B),Nt.viewport(P),Nt.scissor(Y),Nt.setScissorTest(W),ct){let Ct=Ut.get(x.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ct.__webglTexture,X)}else if(ht){let Ct=Ut.get(x.texture),It=U||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ct.__webglTexture,X||0,It)}b=-1},this.readRenderTargetPixels=function(x,U,X,q,B,ct,ht){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ut.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(bt=bt[ht]),bt){Nt.bindFramebuffer(z.FRAMEBUFFER,bt);try{let Ct=x.texture,It=Ct.format,Vt=Ct.type;if(!ne.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-q&&X>=0&&X<=x.height-B&&z.readPixels(U,X,q,B,Ht.convert(It),Ht.convert(Vt),ct)}finally{let Ct=k!==null?Ut.get(k).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(x,U,X,q,B,ct,ht){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ut.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ht!==void 0&&(bt=bt[ht]),bt){let Ct=x.texture,It=Ct.format,Vt=Ct.type;if(!ne.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-q&&X>=0&&X<=x.height-B){Nt.bindFramebuffer(z.FRAMEBUFFER,bt);let At=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.bufferData(z.PIXEL_PACK_BUFFER,ct.byteLength,z.STREAM_READ),z.readPixels(U,X,q,B,Ht.convert(It),Ht.convert(Vt),0);let oe=k!==null?Ut.get(k).__webglFramebuffer:null;Nt.bindFramebuffer(z.FRAMEBUFFER,oe);let pe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Su(z,pe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ct),z.deleteBuffer(At),z.deleteSync(pe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,X=0){x.isTexture!==!0&&(Ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);let q=Math.pow(2,-X),B=Math.floor(x.image.width*q),ct=Math.floor(x.image.height*q),ht=U!==null?U.x:0,bt=U!==null?U.y:0;T.setTexture2D(x,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,ht,bt,B,ct),Nt.unbindTexture()},this.copyTextureToTexture=function(x,U,X=null,q=null,B=0){x.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,x=arguments[1],U=arguments[2],B=arguments[3]||0,X=null);let ct,ht,bt,Ct,It,Vt,At,oe,pe,xe=x.isCompressedTexture?x.mipmaps[B]:x.image;X!==null?(ct=X.max.x-X.min.x,ht=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,It=X.min.y,Vt=X.isBox3?X.min.z:0):(ct=xe.width,ht=xe.height,bt=xe.depth||1,Ct=0,It=0,Vt=0),q!==null?(At=q.x,oe=q.y,pe=q.z):(At=0,oe=0,pe=0);let Ee=Ht.convert(U.format),se=Ht.convert(U.type),Rt;U.isData3DTexture?(T.setTexture3D(U,0),Rt=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Rt=z.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Rt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let hn=z.getParameter(z.UNPACK_ROW_LENGTH),re=z.getParameter(z.UNPACK_IMAGE_HEIGHT),sn=z.getParameter(z.UNPACK_SKIP_PIXELS),$n=z.getParameter(z.UNPACK_SKIP_ROWS),Pe=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,xe.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ct),z.pixelStorei(z.UNPACK_SKIP_ROWS,It),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Vt);let mi=x.isDataArrayTexture||x.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){let ke=Ut.get(x),gi=Ut.get(U),Ne=Ut.get(ke.__renderTarget),un=Ut.get(gi.__renderTarget);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,un.__webglFramebuffer);for(let Sn=0;Sn<bt;Sn++)mi&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.get(x).__webglTexture,B,Vt+Sn),x.isDepthTexture?(me&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.get(U).__webglTexture,B,pe+Sn),z.blitFramebuffer(Ct,It,ct,ht,At,oe,ct,ht,z.DEPTH_BUFFER_BIT,z.NEAREST)):me?z.copyTexSubImage3D(Rt,B,At,oe,pe+Sn,Ct,It,ct,ht):z.copyTexSubImage2D(Rt,B,At,oe,pe+Sn,Ct,It,ct,ht);Nt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else me?x.isDataTexture||x.isData3DTexture?z.texSubImage3D(Rt,B,At,oe,pe,ct,ht,bt,Ee,se,xe.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Rt,B,At,oe,pe,ct,ht,bt,Ee,xe.data):z.texSubImage3D(Rt,B,At,oe,pe,ct,ht,bt,Ee,se,xe):x.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,At,oe,ct,ht,Ee,se,xe.data):x.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,At,oe,xe.width,xe.height,Ee,xe.data):z.texSubImage2D(z.TEXTURE_2D,B,At,oe,ct,ht,Ee,se,xe);z.pixelStorei(z.UNPACK_ROW_LENGTH,hn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,re),z.pixelStorei(z.UNPACK_SKIP_PIXELS,sn),z.pixelStorei(z.UNPACK_SKIP_ROWS,$n),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pe),B===0&&U.generateMipmaps&&z.generateMipmap(Rt),Nt.unbindTexture()},this.copyTextureToTexture3D=function(x,U,X=null,q=null,B=0){return x.isTexture!==!0&&(Ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,x=arguments[2],U=arguments[3],B=arguments[4]||0),Ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,X,q,B)},this.initRenderTarget=function(x){Ut.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Nt.unbindTexture()},this.resetState=function(){F=0,D=0,k=null,Nt.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};var Gr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wr=class extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Zo=class extends tn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=on,h=on,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xr=class extends Le{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new de,Uc=new de,xr=[],Nc=new Hn,vg=new de,Cs=new Ae,Is=new Gn,qr=class extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Nc.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(Nc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Is.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),Uc.multiplyMatrices(n,ss),Cs.matrixWorld=Uc,Cs.raycast(t,xr);for(let o=0,a=xr.length;o<a;o++){let l=xr[o];l.instanceId=r,l.object=this,e.push(l)}xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zo(new Float32Array(s*this.count),s,this.count,ml,Tn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ks=class extends Wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Yr=new O,$r=new O,Fc=new de,Ps=new Bs,vr=new Gn,Ga=new O,Oc=new O,Jo=class extends ze{constructor(t=new en,e=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Yr.fromBufferAttribute(e,s-1),$r.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Yr.distanceTo($r);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;Fc.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(Fc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let u=h.getX(v),C=h.getX(v+1),A=yr(this,t,Ps,l,u,C);A&&e.push(A)}if(this.isLineLoop){let v=h.getX(_-1),m=h.getX(p),u=yr(this,t,Ps,l,v,m);u&&e.push(u)}}else{let p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){let u=yr(this,t,Ps,l,v,v+1);u&&e.push(u)}if(this.isLineLoop){let v=yr(this,t,Ps,l,_-1,p);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yr(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Yr.fromBufferAttribute(o,s),$r.fromBufferAttribute(o,r),e.distanceSqToSegment(Yr,$r,Ga,Oc)>n)return;Ga.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ga);if(!(l<t.near||l>t.far))return{distance:l,point:Oc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Bc=new O,zc=new O,Zr=class extends Jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bc.fromBufferAttribute(e,s),zc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bc.distanceTo(zc);t.setAttribute("lineDistance",new je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var _s=class extends Wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},kc=new de,Ko=new Bs,Mr=new Gn,Sr=new O,Vs=class extends ze{constructor(t=new en,e=new _s){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;kc.copy(s).invert(),Ko.copy(t.ray).applyMatrix4(kc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,v=p;_<v;_++){let m=c.getX(_);Sr.fromBufferAttribute(d,m),Vc(Sr,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,v=p;_<v;_++)Sr.fromBufferAttribute(d,_),Vc(Sr,_,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vc(i,t,e,n,s,r,o){let a=Ko.distanceSqToPoint(i);if(a<e){let l=new O;Ko.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Fi=class extends tn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hs=class i extends en{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],_=0,v=[],m=n/2,u=0;C(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new je(d,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(p,2));function C(){let w=new O,G=new O,F=0,D=(e-t)/n;for(let k=0;k<=r;k++){let b=[],y=k/r,P=y*(e-t)+t;for(let Y=0;Y<=s;Y++){let W=Y/s,$=W*l+a,tt=Math.sin($),Z=Math.cos($);G.x=P*tt,G.y=-y*n+m,G.z=P*Z,d.push(G.x,G.y,G.z),w.set(tt,D,Z).normalize(),f.push(w.x,w.y,w.z),p.push(W,1-y),b.push(_++)}v.push(b)}for(let k=0;k<s;k++)for(let b=0;b<r;b++){let y=v[b][k],P=v[b+1][k],Y=v[b+1][k+1],W=v[b][k+1];(t>0||b!==0)&&(h.push(y,P,W),F+=3),(e>0||b!==r-1)&&(h.push(P,Y,W),F+=3)}c.addGroup(u,F,0),u+=F}function A(w){let G=_,F=new he,D=new O,k=0,b=w===!0?t:e,y=w===!0?1:-1;for(let Y=1;Y<=s;Y++)d.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),_++;let P=_;for(let Y=0;Y<=s;Y++){let $=Y/s*l+a,tt=Math.cos($),Z=Math.sin($);D.x=b*Z,D.y=m*y,D.z=b*tt,d.push(D.x,D.y,D.z),f.push(0,y,0),F.x=tt*.5+.5,F.y=Z*.5*y+.5,p.push(F.x,F.y),_++}for(let Y=0;Y<s;Y++){let W=G+Y,$=P+Y;w===!0?h.push($,$+1,W):h.push($+1,$,W),k+=3}c.addGroup(u,k,w===!0?1:2),u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var di=class extends Wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function br(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zl:r=t,a=2*e-n;break;case kl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:o=t,l=2*n-e;break;case kl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),v=_*_,m=v*_,u=-f*m+2*f*v-f*_,C=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*_+1,A=(-1-p)*m+(1.5+p)*v+.5*_,w=p*m-p*v;for(let G=0;G!==a;++G)r[G]=u*o[h+G]+C*o[c+G]+A*o[l+G]+w*o[d+G];return r}},jo=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},tl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=br(e,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:br(t.times,Array),values:br(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Qo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Po:e=this.InterpolantFactoryMethodLinear;break;case pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Po;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&yg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let _=0;_!==n;++_){let v=e[d+_];if(v!==e[f+_]||v!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Po;var Oi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Cr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends Mn{};el.prototype.ValueTypeName="color";var nl=class extends Mn{};nl.prototype.ValueTypeName="number";var il=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Me.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jr=class extends Mn{InterpolantFactoryMethodLinear(t){return new il(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends Mn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Cr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Mn{};sl.prototype.ValueTypeName="vector";var rl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}},Mg=new rl,al=class{constructor(t){this.manager=t!==void 0?t:Mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};al.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gs=class extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Kr=class extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Wa=new de,Hc=new O,Gc=new O,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hc),Gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gc),e.updateMatrixWorld(),Wa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wc=new de,Ls=new O,Xa=new O,ol=class extends Qr{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),Xa.copy(n.position),Xa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xa),n.updateMatrixWorld(),s.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wc)}},Ws=class extends Gs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ol}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ll=class extends Qr{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new ll}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yl="\\[\\]\\.:\\/",Sg=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",bg="[^"+yl.replace("\\.","")+"]",wg=/((?:WC+[\/:])*)/.source.replace("WC",Ml),Eg=/(WCOD+)?/.source.replace("WCOD",bg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),Ag=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),Rg=new RegExp("^"+wg+Eg+Tg+Ag+"$"),Cg=["material","materials","bones","map"],cl=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sg,"")}static parseTrackName(t){let e=Rg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=cl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ug=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var fh=[[0,8184,8184,6552,6552,8184,8184,8184,8184,2016,2016,576,576,576,576,0],[0,0,0,3120,1632,960,2016,1440,2016,8184,8184,8184,8184,2640,2640,0],[0,1056,1056,1056,2016,1440,1440,2016,2016,4080,4080,2016,1632,3696,3696,0],[0,2064,3120,2016,3504,4080,384,16380,16380,7800,6168,6168,0,0,4080,0],[0,384,2016,4080,2448,4080,4080,4080,8184,8184,8184,8184,4080,3120,3696,0],[0,3120,3120,4080,2448,4080,2016,960,20464,24568,32696,16312,4080,2640,2640,0],[0,0,384,8184,16124,16380,16380,16380,16380,16380,16380,9828,9828,9828,9828,0],[0,3120,2016,4080,6552,6552,4080,2016,960,8184,4080,4080,4080,576,576,0],[0,8580,29642,10212,4080,3504,3696,2016,384,4080,2020,10222,22500,9824,1632,0],[0,0,1056,2016,4080,3504,2018,2030,4092,4080,4080,4080,2640,2640,2640,0],[0,0,576,960,4080,3504,3504,4080,4080,4080,4080,3024,2640,2640,6744,0],[0,12312,6168,8184,5064,5064,8184,960,2016,4080,3952,4080,2016,1632,1632,0],[0,384,384,2016,4080,4080,2448,2448,4080,8184,8184,16380,16380,13932,13932,0],[0,4104,8184,12300,8196,10260,8196,8580,8196,8196,12300,6120,7224,5160,13932,0],[0,384,960,960,2016,1440,1440,2016,4080,4080,1056,4080,4080,1632,1632,0],[0,1056,2016,4080,3504,1440,2016,960,960,4080,8184,8184,2064,2064,6168,0]];var ph=`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><filter id="inkbleed" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="4"/></filter></svg>
<canvas id="stage" aria-label="Shadow puzzle stage"></canvas>
<div class="vignette"></div>
<div class="corner"><button type="button" class="chip" id="rf" aria-label="Omikuji and RF">\u2014 RF</button><button class="chip" id="bLang" type="button">EN</button><button class="chip" id="bMute" type="button" aria-pressed="true">\u266A ON</button></div>
<section id="title">
 <div class="tBox">
  <div class="brand"><div class="scroll" aria-label="\u304B\u3052\u307C\u3046\u3057"><span class="ink">\u304B\u3052\u307C\u3046\u3057</span><span class="seal" aria-hidden="true">\u5F71</span></div><small>SHADOW FRIENDS</small></div>
  <p class="lead" data-j="\u5149\u306E\u524D\u3067\u304F\u308B\u308A\u3068\u56DE\u3059\u3068\u3001\u969C\u5B50\u306B\u3042\u306A\u305F\u306E\u30D5\u30EC\u30F3\u30C9\u304C\u73FE\u308C\u308B\u3002" data-e="Turn the pieces in the lamplight until your Friend appears on the paper screen."></p>
  <ol class="steps">
   <li><b>\u4E00</b><span data-j="\u3070\u3089\u3070\u3089\u306B\u6D6E\u304B\u3076\u7ACB\u4F53\u3092\u3001\u30C9\u30E9\u30C3\u30B0\u3067\u56DE\u3059" data-e="Drag to turn the floating pieces"></span></li>
   <li><b>\u4E8C</b><span data-j="\u969C\u5B50\u306E\u5F71\u3092\u3001\u304A\u984C\u306E\u30B7\u30EB\u30A8\u30C3\u30C8\u306B\u5408\u308F\u305B\u308B" data-e="Match the shadow to the silhouette card"></span></li>
   <li><b>\u4E09</b><span data-j="\u3074\u305F\u308A\u3068\u5408\u3046\u3068\u3001\u5F71\u304B\u3089\u30D5\u30EC\u30F3\u30C9\u304C\u98DB\u3073\u51FA\u3059" data-e="Line it up and your Friend steps out of the shadow"></span></li>
  </ol>
  <button class="cta" id="bStart" type="button" data-j="\u958B\u6F14" data-e="Begin"></button>
  <p class="note" data-j="12\u306E\u5F71\u3002\u56F0\u3063\u305F\u3089\u3001\u304A\u307F\u304F\u3058(1\u56DE 1 RF)\u304C\u6B21\u306E\u624B\u3092\u6559\u3048\u3066\u304F\u308C\u307E\u3059(\u30D7\u30EC\u30D3\u30E5\u30FC\u3067\u306F\u4EEE\u306E RF)\u3002" data-e="12 shadows. Stuck? An omikuji (1 RF) tells you the next moves (RF is simulated in preview)."></p>
 </div>
</section>
<div id="hud" hidden>
 <div class="top"><span class="chip"><span data-j="\u5F71" data-e="Shadow"></span> <span id="stNo">1 / 12</span></span><button type="button" class="chip" id="stTier" aria-pressed="false"><i>\u21C4</i><span id="stTierTxt"></span></button><span class="chip"><span id="time">0.0</span><span data-j="\u79D2" data-e=" s"></span></span></div>
 <div class="bottom">
  <div class="goal">
   <div class="card"><span id="cardLab">\u304A\u984C</span><canvas id="card" width="120" height="120"></canvas></div>
   <div id="meter"><div class="lab"><span data-j="\u5F71\u306E\u4E00\u81F4" data-e="Shadow match"></span><span id="meterNum">0%</span></div><div class="bar"><div id="meterFill"></div></div></div>
  </div>
  <div id="how" hidden></div>
  <div class="acts">
   <div class="lightWrap"><button class="round" id="bReset" type="button" aria-label="Reset angle" title="\u306F\u3058\u3081\u306E\u5411\u304D\u306B\u3082\u3069\u3059 (R)">\u21BA</button><span class="cap" data-j="\u3082\u3069\u3059" data-e="Reset"></span></div>
   <div id="twist" hidden><div class="twb"><button class="round" id="bTwL" type="button" aria-label="Twist left" title="\u5DE6\u306B\u3072\u306D\u308B (Q)">\u27F2</button><button class="round" id="bTwR" type="button" aria-label="Twist right" title="\u53F3\u306B\u3072\u306D\u308B (E)">\u27F3</button></div><span class="cap" data-j="\u3072\u306D\u308B(\u9577\u62BC\u3057)" data-e="Twist (hold)"></span></div>
   <div class="lightWrap"><div id="lights" hidden></div>
    <button id="bLight" class="round" type="button" aria-label="Lamp colour"><i></i></button>
    <span class="cap" data-j="\u30E9\u30F3\u30D7\u306E\u8272" data-e="Lamp colour"></span></div>
   <button id="bHint" type="button"><span><b data-j="\u304A\u307F\u304F\u3058" data-e="Omikuji"></b><small id="hintSub"></small></span><span class="hb"><span id="hintBar"></span></span><i class="cnt" id="lanternCnt">0</i></button>
  </div>
 </div>
</div>
<div id="toast" role="status" aria-live="polite"></div>
<div id="legend" hidden><span class="lg ok"></span><span data-j="\u91D1\uFF1A\u5F71\u304C\u304A\u984C\u306E\u4E2D" data-e="Gold: shadow inside the goal"></span><span class="lg ng"></span><span data-j="\u8D64\uFF08\u70B9\u6EC5\uFF09\uFF1A\u306F\u307F\u51FA\u3057" data-e="Red (blinking): sticks out"></span></div>
<div id="clear" hidden><div class="cBox" role="dialog" aria-labelledby="clearTitle">
 <h2 id="clearTitle" data-j="\u5F71\u304C\u3001\u3042\u306A\u305F\u306E\u30D5\u30EC\u30F3\u30C9\u306B\u306A\u3063\u305F\u3002" data-e="The shadow became your Friend."></h2>
 <div id="clearStars">\u2605\u2605\u2605</div><div id="clearInfo"></div><div id="clearHint"></div>
 <div class="row"><button type="button" id="bRetry" data-j="\u3082\u3046\u4E00\u5EA6" data-e="Retry"></button><button type="button" class="go" id="bNext"></button></div>
</div></div>
<div id="shop" hidden role="dialog" aria-modal="true" aria-label="Omikuji"><div class="sBox" id="shopBox"></div></div>
<div id="omi" class="omi" hidden role="dialog" aria-modal="true" aria-label="Omikuji"></div>
<div id="oracle" hidden role="status" aria-live="polite"></div>
`;var mh={ja:["\u9858\u671B","\u5F85\u4EBA","\u5931\u7269","\u65C5\u884C","\u4ED5\u4E8B","\u5B66\u554F","\u604B\u611B","\u91D1\u904B"],en:["Wish","Visitor","Lost item","Travel","Work","Study","Love","Money"]},gh={ja:[[["\u601D\u3046\u307E\u307E\u306B\u53F6\u3046","\u901F\u3084\u304B\u306B\u53F6\u3046\u3000\u8FF7\u3046\u306A","\u9858\u3044\u901A\u308A\u306B\u306A\u308B","\u4EBA\u306E\u52A9\u3051\u3042\u308A\u3066\u53F6\u3046"],["\u6765\u308B\u3000\u559C\u3073\u3042\u308A","\u97F3\u4FE1\u3042\u308A\u3000\u65E9\u304F\u6765\u308B","\u601D\u308F\u306C\u4EBA\u6765\u305F\u308B","\u6765\u308B\u3000\u9023\u308C\u3042\u308A"],["\u51FA\u308B\u3000\u9AD8\u304D\u6240\u3092\u63A2\u305B","\u3059\u3050\u306B\u898B\u3064\u304B\u308B","\u6771\u306E\u65B9\u306B\u3042\u308A\u3000\u51FA\u308B","\u4EBA\u306B\u805E\u3051\u3070\u51FA\u308B"],["\u3069\u3053\u3078\u884C\u304F\u3082\u5409","\u5357\u306E\u65B9\u3088\u3057\u3000\u5B9F\u308A\u3042\u308A","\u601D\u3044\u7ACB\u3064\u65E5\u304C\u5409\u65E5","\u9023\u308C\u3068\u884C\u3051\u3000\u697D\u3057\u307F\u591A\u3057"],["\u5229\u76CA\u3042\u308A\u3000\u624B\u3092\u5E83\u3052\u3088","\u601D\u3044\u5207\u3063\u3066\u9032\u3081\u3066\u5409","\u4EBA\u306E\u7E01\u3088\u308A\u798F\u6765\u308B","\u5927\u3044\u306B\u6804\u3048\u308B"],["\u52AA\u529B\u304C\u5B9F\u308B","\u5B89\u5FC3\u3057\u3066\u52B1\u3081","\u671B\u307F\u901A\u308A\u306E\u6210\u679C\u3042\u308A","\u5E2B\u306E\u8A00\u8449\u3092\u5927\u5207\u306B"],["\u60F3\u3044\u306F\u5FC5\u305A\u901A\u3058\u308B","\u771F\u5FC3\u3092\u4F1D\u3048\u3088\u3000\u7D50\u3070\u308C\u308B","\u826F\u304D\u7E01\u306B\u6075\u307E\u308C\u308B","\u305F\u3081\u3089\u308F\u305A\u9032\u3081"],["\u8CA1\u3092\u5F97\u308B\u3000\u65BD\u305B\u3070\u306A\u304A\u826F\u3057","\u601D\u308F\u306C\u5B9F\u5165\u308A\u3042\u308A","\u84C4\u3048\u308C\u3070\u5927\u3044\u306B\u5897\u3059","\u4F7F\u3046\u307B\u3069\u5DE1\u308A\u6765\u308B"]],[["\u5C11\u3057\u9045\u308C\u3066\u53F6\u3046","\u7126\u3089\u306D\u3070\u53F6\u3046","\u52AA\u3081\u308C\u3070\u53F6\u3046","\u4EBA\u306B\u983C\u308C\u3070\u53F6\u3046"],["\u9045\u308C\u3066\u6765\u308B","\u305F\u3088\u308A\u3042\u308A","\u6765\u308B\u304C\u6642\u304B\u304B\u308B","\u5F85\u3066\u3070\u6765\u308B"],["\u51FA\u308B\u3000\u8EAB\u8FD1\u306A\u6240","\u6642\u304C\u7D4C\u3066\u3070\u51FA\u308B","\u51FA\u308B\u3000\u4F4E\u304D\u6240","\u5BB6\u306E\u5185\u306B\u3042\u308A"],["\u8FD1\u304F\u306A\u3089\u3070\u5409","\u652F\u5EA6\u3092\u6574\u3048\u308C\u3070\u5409","\u6025\u304C\u305A\u884C\u3051","\u897F\u306E\u65B9\u3088\u3057"],["\u5730\u9053\u306B\u7D9A\u3051\u308C\u3070\u5229\u3042\u308A","\u5805\u5B9F\u306B\u305B\u3088","\u5C0F\u3055\u304F\u59CB\u3081\u3066\u5409","\u6642\u3092\u5F85\u3066\u3000\u597D\u6A5F\u6765\u308B"],["\u52AA\u529B\u6B21\u7B2C\u3067\u4F38\u3073\u308B","\u57FA\u790E\u3092\u56FA\u3081\u3088","\u7126\u3089\u305A\u9032\u3081","\u7E70\u308A\u8FD4\u3057\u5B66\u3079"],["\u8AA0\u610F\u3092\u898B\u305B\u3088","\u3086\u3063\u304F\u308A\u80B2\u3066\u3088","\u8A00\u8449\u3092\u60DC\u3057\u3080\u306A","\u76F8\u624B\u306E\u8A71\u3092\u3088\u304F\u805E\u3051"],["\u7121\u99C4\u3092\u7701\u3051\u3070\u5897\u3059","\u307B\u3069\u307B\u3069\u306B\u3042\u308A","\u5805\u304F\u5B88\u308C\u3070\u5409","\u5C11\u3057\u305A\u3064\u8CAF\u307E\u308B"]],[["\u6642\u3092\u5F85\u3066","\u53F6\u3046\u304C\u9045\u3057","\u4E00\u6B69\u305A\u3064\u9032\u3081","\u6B32\u5F35\u3089\u306D\u3070\u53F6\u3046"],["\u6765\u308B\u304C\u9045\u3044","\u97F3\u4FE1\u306F\u9045\u3057","\u601D\u308F\u306C\u6642\u306B\u6765\u308B","\u305F\u3088\u308A\u306E\u307F\u3042\u308A"],["\u63A2\u305B\u3070\u51FA\u308B\u3000\u9045\u3057","\u51FA\u308B\u304C\u624B\u9593\u53D6\u308B","\u4EBA\u306B\u5C0B\u306D\u3088","\u7269\u306E\u4E0B\u306B\u3042\u308A"],["\u8FD1\u5834\u306A\u3089\u5409","\u7121\u7406\u3092\u3059\u308B\u306A","\u652F\u5EA6\u3092\u5FF5\u5165\u308A\u306B","\u65E5\u3092\u6539\u3081\u3088"],["\u5229\u306F\u5C11\u306A\u3057\u3000\u7D9A\u3051\u3088","\u614E\u91CD\u306B\u9032\u3081\u3088","\u4EBA\u3068\u4E89\u3046\u306A","\u4ECA\u306F\u6E96\u5099\u306E\u6642"],["\u6CB9\u65AD\u3059\u308B\u306A","\u82E6\u624B\u3092\u514B\u670D\u305B\u3088","\u57FA\u672C\u306B\u7ACB\u3061\u8FD4\u308C","\u5C11\u3057\u305A\u3064\u4F38\u3073\u308B"],["\u7126\u308B\u306A\u3000\u6642\u3092\u5F85\u3066","\u6C17\u6301\u3061\u3092\u7D20\u76F4\u306B","\u53CB\u304B\u3089\u59CB\u3081\u3088","\u7121\u7406\u306B\u62BC\u3059\u306A"],["\u51FA\u8CBB\u306B\u6CE8\u610F","\u6D6A\u8CBB\u3092\u3064\u3064\u3057\u3081","\u5C0F\u3055\u306A\u5F97\u3042\u308A","\u8CAF\u3081\u308B\u3053\u3068\u3092\u899A\u3048\u3088"]],[["\u4ECA\u306F\u53F6\u3044\u96E3\u3057\u3000\u6642\u3092\u5F85\u3066","\u671B\u307F\u3092\u5C0F\u3055\u304F\u305B\u3088","\u7126\u308C\u3070\u9060\u306E\u304F","\u5FC3\u3092\u6539\u3081\u308C\u3070\u9053\u958B\u304F"],["\u6765\u305A","\u6765\u308B\u304C\u9045\u3057","\u305F\u3088\u308A\u306A\u3057","\u3042\u304D\u3089\u3081\u305A\u5F85\u3066"],["\u51FA\u96E3\u3057","\u51FA\u308B\u304C\u9045\u3057","\u8AE6\u3081\u305A\u306B\u63A2\u305B","\u601D\u308F\u306C\u6240\u306B\u3042\u308A"],["\u898B\u5408\u308F\u305B\u3088","\u8FD1\u5834\u306B\u7559\u3081\u3088","\u6025\u3050\u3079\u304B\u3089\u305A","\u614E\u91CD\u306B\u305B\u3088"],["\u640D\u3042\u308A\u3000\u63A7\u3048\u3088","\u4ECA\u306F\u52D5\u304F\u306A","\u4EBA\u306E\u8A00\u8449\u306B\u60D1\u3046\u306A","\u5B88\u308A\u3092\u56FA\u3081\u3088"],["\u6CB9\u65AD\u5927\u6575","\u57FA\u672C\u304B\u3089\u3084\u308A\u76F4\u305B","\u6020\u308C\u3070\u843D\u3061\u308B","\u52AA\u529B\u3092\u60DC\u3057\u3080\u306A"],["\u4ECA\u306F\u63A7\u3048\u3088","\u8A00\u8449\u306B\u6C17\u3092\u3064\u3051\u3088","\u7126\u3089\u305A\u5F85\u3066","\u8AA4\u89E3\u3092\u89E3\u3051"],["\u51FA\u8CBB\u591A\u3057\u3000\u3064\u3064\u3057\u3081","\u8CB8\u3057\u501F\u308A\u3059\u308B\u306A","\u7121\u99C4\u9063\u3044\u306B\u6CE8\u610F","\u4ECA\u306F\u5B88\u308C"]]],en:[[["Granted as you wish","Granted soon; don't hesitate","It will go your way","Granted with help from others"],["Comes, bringing joy","News soon; they come early","Someone unexpected arrives","Comes with company"],["Found; look up high","Found right away","Found toward the east","Ask around and it turns up"],["Good wherever you go","Go south; it pays off","The day you decide is lucky","Go with a friend; much fun"],["Profit; expand boldly","Push forward; it goes well","Luck comes through people","Great prosperity"],["Effort pays off","Study with confidence","The results you hoped for","Treasure your teacher's words"],["Your feelings will reach them","Speak from the heart; you'll be together","A good match is coming","Go ahead without hesitating"],["Wealth comes; share it","An unexpected gain","Save and it grows","What you spend comes back"]],[["Granted, a little late","Granted if you don't rush","Granted with effort","Granted if you ask for help"],["Arrives late","News will come","Comes, but it takes time","Wait and they come"],["Found close by","Turns up in time","Found somewhere low","It is inside the house"],["Good if nearby","Good if well prepared","Travel without hurry","Go west"],["Steady work brings profit","Play it safe","Start small","Wait; a chance will come"],["You grow with effort","Build the basics","Don't rush","Review again and again"],["Show sincerity","Let it grow slowly","Don't hold back your words","Listen closely to them"],["Cut waste and it grows","Enough, not more","Guard it well","It builds up slowly"]],[["Wait for the right time","Granted, but late","One step at a time","Granted if you don't ask too much"],["Comes late","News is slow","Comes when you least expect","Only a letter comes"],["Found late if you search","Found, with some trouble","Ask someone","It is under something"],["Good if close by","Don't push yourself","Prepare carefully","Pick another day"],["Small profit; keep going","Proceed with care","Avoid quarrels","Now is time to prepare"],["Don't get careless","Work on your weak spots","Go back to the basics","Slow but steady growth"],["Don't rush; wait","Be honest about your feelings","Start as friends","Don't push too hard"],["Watch your spending","Avoid waste","A small gain","Learn to save"]],[["Hard for now; wait","Wish for less","Rushing pushes it away","Change your heart and a way opens"],["Does not come","Comes late","No news","Keep waiting"],["Hard to find","Found late","Keep searching","In an unexpected place"],["Put it off","Stay close to home","Do not hurry","Be careful"],["Loss; hold back","Don't move now","Don't be swayed by talk","Strengthen your defenses"],["Carelessness is your enemy","Start again from the basics","Slack off and you fall behind","Spare no effort"],["Hold back for now","Mind your words","Wait patiently","Clear up misunderstandings"],["Heavy spending; be careful","Don't lend or borrow","Beware of waste","Protect what you have"]]]};function Vg(i,t={}){i.innerHTML=ph;let e=[],n=new Set,s=[],r=(M,S,E,L)=>{M.addEventListener(S,E,L),e.push(()=>M.removeEventListener(S,E,L))},o=(M,S)=>{let E=setTimeout(()=>{n.delete(E),S()},M);return n.add(E),E},a=M=>i.querySelector("#"+M),l=matchMedia("(prefers-reduced-motion: reduce)").matches,c={free:!1,lang:t.lang||((navigator.language||"").toLowerCase().startsWith("ja")?"ja":"en"),mute:!1,stars:{},started:!1,ext:!1,hid:!1},h=(M,S)=>c.lang==="ja"?M:S,d=t.fmt||(M=>(Number(M)/1e18).toFixed(2).replace(/\.?0+$/,"")),f=()=>c.ext||c.hid||c.omi,p={client:t.client||null,snap:null,busy:!1,err:"",canBuy:!1},_=fh.map(M=>{let S=[];return M.forEach((E,L)=>{for(let N=0;N<16;N++)E&1<<15-N&&S.push([N,L])}),S}),v=["#e8413a","#3b78e7","#c9873f","#3fae4a","#f2c230","#ef7fb5","#9a64e0","#f2eee4"],m={mask:null,id:t.friendId!=null?"#"+String(t.friendId):"",col:"#c8321e"},u=[0,3,8,12,5,1,10,6,2,14,9,-1],C=[0,.26,.28,.3,.32,.34,.37,.42,.47,.42,.47,.52],A=[0,0,0,0,0,0,0,0,0,.25,.35,.45],w=u.map((M,S)=>({sp:M<0?7:M,me:M<0,tilt:C[S],twist:A[S],tier:S<1?1:S<9?2:3,depth:[2,2,3,3,3,4,4,5,5,6,6,7][S],seed:1e3+S*77,par:[25,30,35,40,45,50,55,60,70,75,80,90][S]})),G=M=>M.me&&m.mask?m.mask:_[M.sp],F=M=>!!(M&&M.me&&m.mask);function D(M){let S=M>>>0;return()=>{S|=0,S=S+1831565813|0;let E=Math.imul(S^S>>>15,1|S);return E=E+Math.imul(E^E>>>7,61|E)^E,((E^E>>>14)>>>0)/4294967296}}let k=a("stage"),b=new Hr({canvas:k,antialias:!0,powerPreference:"high-performance"}),y=/Mobi|Android/i.test(navigator.userAgent)||(navigator.hardwareConcurrency||8)<=4;b.setPixelRatio(Math.min(devicePixelRatio||1,y?1.5:2)),b.shadowMap.enabled=!0,b.shadowMap.type=hl,b.toneMapping=ul,b.toneMappingExposure=1.05,b.outputColorSpace=Be;let P=new Wr;P.background=new qt("#0b0806"),P.fog=new Gr("#0b0806",12,30);let Y=new Ge(38,1,.1,80),W=new O(-.3,-.14,-1).normalize(),$=W.clone().negate(),tt=new O(0,1,0).sub($.clone().multiplyScalar($.y)).normalize(),Z=new O().crossVectors(tt,$).normalize(),at=new O(0,1.55,-3.2),J=.2,ft=at.clone().addScaledVector(W,-3.7);function wt(){let M=document.createElement("canvas");M.width=M.height=512;let S=M.getContext("2d"),E=S.createRadialGradient(256,240,40,256,256,380);E.addColorStop(0,"#f4e7cb"),E.addColorStop(1,"#d9c49c"),S.fillStyle=E,S.fillRect(0,0,512,512);let L=D(7);for(let R=0;R<2600;R++){S.strokeStyle=`rgba(${150+L()*60},${120+L()*50},${80+L()*40},${.05+L()*.08})`,S.lineWidth=.5+L();let Q=L()*512,rt=L()*512,ut=L()*Math.PI*2,dt=4+L()*22;S.beginPath(),S.moveTo(Q,rt),S.quadraticCurveTo(Q+Math.cos(ut+1)*dt*.5,rt+Math.sin(ut+1)*dt*.5,Q+Math.cos(ut)*dt,rt+Math.sin(ut)*dt),S.stroke()}let N=new Fi(M);return N.colorSpace=Be,N.anisotropy=4,N}function Dt(){let M=document.createElement("canvas");M.width=512,M.height=512;let S=M.getContext("2d"),E=D(3);for(let N=0;N<8;N++){let R=N*64;S.fillStyle=`hsl(${22+E()*6},${30+E()*10}%,${9+E()*4}%)`,S.fillRect(0,R,512,64);for(let Q=0;Q<40;Q++){S.strokeStyle=`rgba(0,0,0,${.1+E()*.2})`,S.lineWidth=1,S.beginPath();let rt=R+E()*64;S.moveTo(0,rt),S.bezierCurveTo(170,rt+E()*6-3,340,rt+E()*6-3,512,rt+E()*4-2),S.stroke()}S.fillStyle="rgba(0,0,0,.55)",S.fillRect(0,R,512,2)}let L=new Fi(M);return L.colorSpace=Be,L.wrapS=L.wrapT=Fs,L.repeat.set(3,3),L}let $t=new Ae(new Xn(40,40),new di({map:Dt(),roughness:.75,metalness:.05}));$t.rotation.x=-Math.PI/2,$t.position.y=-1.35,$t.receiveShadow=!0,P.add($t);let ae=new An,nt=new de().makeBasis(Z,tt,$);ae.quaternion.setFromRotationMatrix(nt),ae.position.copy(at),P.add(ae);let ot=6.4,St=4.6,_t=new di({map:wt(),color:"#cfc2a8",roughness:1,metalness:0,emissive:new qt("#ffb45c"),emissiveIntensity:0}),kt=new Ae(new Xn(ot,St),_t);kt.receiveShadow=!0,ae.add(kt);let Wt=new di({color:"#2a1a10",roughness:.55,metalness:.1});function Gt(M,S,E,L,N=.05,R=.1){let Q=new Ae(new ui(M,S,R),Wt);return Q.position.set(E,L,N),Q.castShadow=!1,Q.receiveShadow=!0,ae.add(Q),Q}Gt(ot+.5,.25,0,St/2+.12,.06,.2),Gt(ot+.5,.25,0,-St/2-.12,.06,.2),Gt(.25,St+.5,-ot/2-.12,0,.06,.2),Gt(.25,St+.5,ot/2+.12,0,.06,.2);for(let M of[-2.35,2.35])Gt(.05,St,M,0,-.04,.05);for(let M of[-1.55,1.55])Gt(ot,.05,0,M,-.04,.05);for(let M of[-ot/2-.12,ot/2+.12]){let S=Gt(.25,.9,M,-St/2-.45,.06,.25);S.castShadow=!0}let ge=document.createElement("canvas");ge.width=ge.height=256;let te=new Fi(ge);te.colorSpace=Be;let be=new Ae(new Xn(16*J*1.25,16*J*1.25),new ms({map:te,transparent:!0,opacity:.16,depthWrite:!1}));be.position.z=.004,ae.add(be);function z(M,S){let E=ge.getContext("2d");E.clearRect(0,0,256,256);let L=256/20,N=2*L,R=new Set(M.map(([Q,rt])=>Q+","+rt));E.strokeStyle="#3b2414",E.lineWidth=3,E.setLineDash([6,5]),E.beginPath();for(let[Q,rt]of M){let ut=N+Q*L,dt=N+rt*L;R.has(Q+","+(rt-1))||(E.moveTo(ut,dt),E.lineTo(ut+L,dt)),R.has(Q+","+(rt+1))||(E.moveTo(ut,dt+L),E.lineTo(ut+L,dt+L)),R.has(Q-1+","+rt)||(E.moveTo(ut,dt),E.lineTo(ut,dt+L)),R.has(Q+1+","+rt)||(E.moveTo(ut+L,dt),E.lineTo(ut+L,dt+L))}if(E.stroke(),S){E.setLineDash([]),E.fillStyle=S;for(let[Q,rt]of M)E.fillRect(N+Q*L,N+rt*L,L,L)}te.needsUpdate=!0}let Se=new jr("#ffd29a",3.2);Se.position.copy(at).addScaledVector(W,-14),Se.target.position.copy(at),P.add(Se,Se.target),Se.castShadow=!0,Se.shadow.mapSize.set(y?1024:2048,y?1024:2048),Object.assign(Se.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:4,far:24}),Se.shadow.bias=-6e-4,Se.shadow.normalBias=.02,Se.shadow.radius=3;let ee=new Kr("#3c2c4a","#120906",.55);P.add(ee);let ne=new Ws("#7fa8ff",6,9,2);ne.position.set(-2.6,3.2,1.2),P.add(ne);let Nt=new Ws("#ffb45c",0,7,2);Nt.position.copy(at).addScaledVector($,.8),P.add(Nt);let ue=new An;ue.position.copy(at).addScaledVector(W,-8.5).add(new O(0,.4,0)),P.add(ue);let Ut=new Ae(new Hs(.42,.42,.95,24,1,!0),new di({color:"#ffd9a0",emissive:"#ff9e3d",emissiveIntensity:2.2,side:pn}));ue.add(Ut);let T=new Hs(.35,3.6,1,32,1,!0);T.translate(0,-.5,0),T.rotateX(-Math.PI/2);let g=new ln({transparent:!0,depthWrite:!1,blending:ci,side:pn,uniforms:{uCol:{value:new qt("#ffb766")},uAmt:{value:.09}},vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 w=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-w.xyz); gl_Position=projectionMatrix*w; }",fragmentShader:"uniform vec3 uCol; uniform float uAmt; varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ float edge=pow(abs(dot(vN,vV)),1.6); float along=smoothstep(0.,.25,vUv.y)*(1.-vUv.y*.55); gl_FragColor=vec4(uCol*edge*along*uAmt,1.); }"}),H=new Ae(T,g);H.position.copy(ue.position),H.lookAt(at),H.scale.set(1,1,ue.position.distanceTo(at)),P.add(H);let j=y?150:260,st=new en,et=new Float32Array(j*3),Pt=new Float32Array(j);{let M=D(11);for(let S=0;S<j;S++)Pt[S]=M()}st.setAttribute("position",new Le(et,3));let pt=new Float32Array(j*3);st.setAttribute("color",new Le(pt,3));let yt=document.createElement("canvas");yt.width=yt.height=32;{let M=yt.getContext("2d"),S=M.createRadialGradient(16,16,0,16,16,16);S.addColorStop(0,"rgba(255,230,190,1)"),S.addColorStop(1,"rgba(255,200,120,0)"),M.fillStyle=S,M.fillRect(0,0,32,32)}let ie=new Fi(yt),lt=new Vs(st,new _s({size:.11,map:ie,vertexColors:!0,transparent:!0,depthWrite:!1,blending:ci,opacity:.9}));l||P.add(lt);let Mt=220,Ot=new en,Bt=new Float32Array(Mt*3),Et=[],Kt=new Float32Array(Mt);Ot.setAttribute("position",new Le(Bt,3));let Ht=new Vs(Ot,new _s({size:.09,map:ie,transparent:!0,depthWrite:!1,blending:ci,color:"#ffd27a"}));Ht.visible=!1,P.add(Ht);function _e(M,S=Mt){Ht.visible=!0;for(let E=0;E<Mt;E++){Bt.set([M.x,M.y,M.z],E*3);let L=new O(Math.random()-.5,Math.random()-.2,Math.random()-.5).normalize().multiplyScalar(1.2+Math.random()*3);Et[E]=L,Kt[E]=E<S?1+Math.random()*1.2:0}Ot.attributes.position.needsUpdate=!0}let I=new An;I.position.copy(ft),P.add(I);let vt=256,K=new ui(J*.985,J*.985,J*.985),it=new di({roughness:.32,metalness:.35}),mt=new qr(K,it,vt);mt.castShadow=!0,mt.receiveShadow=!0,I.add(mt);let gt=new Me().setFromRotationMatrix(nt),Xt=gt.clone().multiply(new Me().setFromAxisAngle(new O(0,1,0),Math.PI)),Qt=[],Ie=new de,jt=new O,nn=new Me,mn=new O(1,1,1),Ys=new qt;function fi(){for(let M=0;M<Qt.length;M++){let S=Qt[M];jt.set(S.x*J,S.y*J,S.w*J),Ie.compose(jt,nn.identity(),mn.setScalar(S.s??1)),mt.setMatrixAt(M,Ie),mt.setColorAt(M,Ys.set(S.col))}mt.count=Qt.length,mt.instanceMatrix.needsUpdate=!0,mt.instanceColor&&(mt.instanceColor.needsUpdate=!0)}let cn=3,gn=24*cn,Cn=new Uint8Array(gn*gn),ia=[];function pi(M,S,E){let L=(M+12)*cn,N=(S+12)*cn,R=.62*cn;for(let Q=Math.max(0,Math.floor(N-R));Q<=Math.min(gn-1,Math.ceil(N+R));Q++)for(let rt=Math.max(0,Math.floor(L-R));rt<=Math.min(gn-1,Math.ceil(L+R));rt++){let ut=rt+.5-L,dt=Q+.5-N;ut*ut+dt*dt<=R*R&&(Cn[Q*gn+rt]|=E)}}let Ms=null;function zi(){let M=new Uint8Array(gn*gn);Cn.fill(0);for(let S of Qt)pi(S.x,S.y,2);Ms=Cn.slice()}function qn(M){Cn.set(Ms);for(let L of Qt)jt.set(L.x,L.y,L.w).applyQuaternion(M),pi(jt.dot(Z),jt.dot(tt),1);let S=0,E=0;for(let L=0;L<Cn.length;L++){let N=Cn[L];N&&(E++,N===3&&S++)}return S/E}let V={st:0,stage:null,t0:0,time:0,running:!1,won:!1,hints:0,oracleT:0,turns:0,sol:gt,score:0,winT:-1,faceQ:null,mag:!1,vel:[0,0,0],lampAnim:null,attract:!0};function Yn(M){let S=w[M],E=D(S.seed);V.st=M,V.stage=S;let L=[v[S.sp%8],"#1a1412","#c8962e","#6b1d14"];Qt=G(S).map(([Q,rt])=>{let ut=Math.round((E()*2-1)*S.depth);return{x:Q-7.5,y:7.5-rt,w:ut,w0:ut,col:L[E()<.45?0:E()<.5?1:E()<.6?2:3],fin:v[S.sp%8]}}),Qt.forEach(Q=>Q.col0=Q.col),fi(),zi(),z(G(S)),V.sols=[gt],qn(Xt)>.985&&V.sols.push(Xt);let N,R=0;do{let Q=(E()<.5?-1:1)*(1.1+E()*1.5),rt=S.tilt?(E()<.5?-1:1)*S.tilt*(.85+E()*.3):0,ut=S.twist?(E()<.5?-1:1)*S.twist*(.85+E()*.3):0;N=new Me().setFromAxisAngle(tt,Q).multiply(new Me().setFromAxisAngle(Z,rt)).multiply(new Me().setFromAxisAngle($,ut)).multiply(gt)}while((qn(N)>.45||!sa(N,S))&&++R<30);R>=30&&(N=new Me().setFromAxisAngle(tt,1.4).multiply(new Me().setFromAxisAngle(Z,S.tilt)).multiply(gt)),I.quaternion.copy(N),I.position.copy(ft),I.scale.setScalar(1),V.q0=N.clone(),Object.assign(V,{won:!1,running:!1,hints:0,turns:0,time:0,winT:-1,vel:[0,0,0],attract:!1,resetAnim:null}),me(),ra.clear();for(let[Q,rt]of G(S))ra.add(Q+","+rt);_t.emissiveIntensity=0,Nt.intensity=0,_i(),vh(),M===1&&o(400,()=>xi(dn?h("\u3053\u3053\u304B\u3089 \u305F\u3066\u306B\u3082\u56DE\u3057\u307E\u3059\uFF1A\u4E0A\u4E0B\u306B\u306A\u305E\u308B","Tilting starts here: swipe up or down"):h("\u3053\u3053\u304B\u3089 \u305F\u3066\u306B\u3082\u56DE\u3057\u307E\u3059\uFF1A\u4E0A\u4E0B\u306B\u30C9\u30E9\u30C3\u30B0","Tilting starts here: drag up or down"),3200)),M===9&&o(400,()=>{xi(dn?h("\u3053\u3053\u304B\u3089 \u3072\u306D\u308A\u3082\u4F7F\u3044\u307E\u3059\uFF1A2\u672C\u6307\u3067\u56DE\u3059 \u304B \u53F3\u4E0B\u306E \u27F2\u27F3 \u3092\u9577\u62BC\u3057","Twisting starts here: rotate with two fingers or hold \u27F2 \u27F3"):h("\u3053\u3053\u304B\u3089 \u3072\u306D\u308A\u3082\u4F7F\u3044\u307E\u3059\uFF1A\u53F3\u4E0B\u306E \u27F2\u27F3 \u3092\u9577\u62BC\u3057 \u304B Q\u30FBE\u30AD\u30FC","Twisting starts here: hold \u27F2 \u27F3 (bottom right) or press Q / E"),4200),bl()})}function sa(M,S){let E=[tt,S.tier>=2?Z:null,S.tier>=3?$:null].filter(Boolean),L=M.clone(),N=new Me,R=new Me,Q=ut=>qn(ut),rt=ut=>V.sols.some(dt=>ut.angleTo(dt)<.19);for(let ut=0;ut<6;ut++){let dt=E[ut%E.length],Ft=-1,Yt=null;for(let Tt=-Math.PI;Tt<=Math.PI;Tt+=.05){R.copy(L).premultiply(N.setFromAxisAngle(dt,Tt));let Lt=Q(R);Lt>Ft&&(Ft=Lt,Yt=R.clone())}if(L.copy(Yt),Ft>.9||rt(L))return ut+1>=Math.min(2,E.length)}return!1}let qe=new Map,x=null,U=null;k.addEventListener("pointerdown",M=>{!c.started||V.won||f()||(k.setPointerCapture(M.pointerId),qe.set(M.pointerId,{x:M.clientX,y:M.clientY}),V.running||Vt(),U={moved:0,axis:null,ax:0,ay:0},qe.size===2&&(x=q()),$s())}),k.addEventListener("pointermove",M=>{let S=qe.get(M.pointerId);if(!S||V.won||f())return;let E=M.clientX-S.x,L=M.clientY-S.y;if(S.x=M.clientX,S.y=M.clientY,qe.size>=2&&(V.stage.tier>=3||c.free)){let R=q();x!==null&&ht($,-(R-x)),x=R;return}let N=.0085;if(U){if(U.moved+=Math.abs(E)+Math.abs(L),c.free){ht(tt,E*N),ht(Z,L*N),V.vel=[E*N,L*N,0];return}if(!U.axis){if(U.ax+=E,U.ay+=L,Math.abs(U.ax)+Math.abs(U.ay)<10)return;U.axis=V.stage.tier<2||Math.abs(U.ax)>=Math.abs(U.ay)?"x":"y",E=U.ax,L=U.ay}U.axis==="x"?(ht(tt,E*N),V.vel=[E*N,0,0]):(ht(Z,L*N),V.vel=[0,L*N,0])}});function X(M){qe.delete(M.pointerId),qe.size<2&&(x=null),!qe.size&&U&&(U.moved>6&&(V.turns++,Dh()),U=null)}k.addEventListener("pointerup",X),k.addEventListener("pointercancel",X);function q(){let[M,S]=[...qe.values()];return Math.atan2(S.y-M.y,S.x-M.x)}let B=new Me;function ct(){return c.free?[tt,Z,$]:[tt,V.stage.tier>=2?Z:null,V.stage.tier>=3?$:null].filter(Boolean)}function ht(M,S){B.setFromAxisAngle(M,S),I.quaternion.premultiply(B).normalize()}let bt=0;function Ct(){!c.started||V.won||f()||(I.quaternion.copy(V.q0),V.vel=[0,0,0],Ye(392,0,.07,.6),Ye(293.66,.08,.07,.8),xi(h("\u306F\u3058\u3081\u306E\u5411\u304D\u306B\u3082\u3069\u3057\u307E\u3057\u305F","Back to the starting angle")))}a("bReset").addEventListener("click",Ct),a("stTier").addEventListener("click",()=>{c.free=!c.free,_i(),Jn(),xi(c.free?h("\u81EA\u7531\u306B\u56DE\u305B\u307E\u3059\u3002\u3072\u306D\u308B\u306E\u306F\u53F3\u4E0B\u306E \u27F2\u27F3","Free turning. Twist with \u27F2 \u27F3 at bottom right"):h("\u56DE\u3059\u5411\u304D\u3092\u6C7A\u3081\u3066\u56DE\u3057\u307E\u3059","Turning one way at a time"),2600),c.free&&bl()});for(let[M,S]of[["bTwL",1],["bTwR",-1]]){let E=a(M);E.addEventListener("pointerdown",L=>{L.preventDefault(),!f()&&(!V.running&&!V.won&&Vt(),bt=S,$s())});for(let L of["pointerup","pointerleave","pointercancel"])E.addEventListener(L,()=>{bt&&(bt=0,V.turns++)})}let It=new Set;r(window,"keydown",M=>{if(f())return;if(!c.started||V.won){M.key==="Enter"&&!a("title").hidden&&oa();return}let S=M.key.toLowerCase();["arrowleft","arrowright","arrowup","arrowdown","a","d","w","s","q","e"].includes(S)&&(M.preventDefault(),V.running||Vt(),It.add(S)),S==="h"&&Pe(),S==="r"&&Ct()}),r(window,"keyup",M=>{let S=M.key.toLowerCase();It.delete(S)&&!It.size&&V.turns++});function Vt(){V.running=!0,V.t0=performance.now()-V.time*1e3}let At=[{id:"andon",j:"\u884C\u706F",e:"Lantern",key:"#ffd29a",glow:"#ff9e3d",beam:"#ffb766",bg:"#0b0806",hemi:"#3c2c4a"},{id:"moon",j:"\u6708\u3042\u304B\u308A",e:"Moonlight",key:"#cfe0ff",glow:"#8fb4ff",beam:"#9cc0ff",bg:"#05070d",hemi:"#1c2a4a"},{id:"beni",j:"\u7D05",e:"Crimson",key:"#ff9c8a",glow:"#ff4a3a",beam:"#ff6a55",bg:"#0d0505",hemi:"#4a1c24"},{id:"hotaru",j:"\u86CD",e:"Firefly",key:"#d8ffb0",glow:"#9dff5a",beam:"#b6ff7a",bg:"#050a05",hemi:"#1f3a22"}],oe=0;function pe(M){oe=M;let S=At[M];Se.color.set(S.key),Ut.material.color.set(S.key),Ut.material.emissive.set(S.glow),g.uniforms.uCol.value.set(S.beam),P.background.set(S.bg),P.fog.color.set(S.bg),ee.color.set(S.hemi),_t.emissive.set(S.glow),ca.uniforms.uCol.value.set(S.glow),i.querySelectorAll("#lights button").forEach((E,L)=>E.setAttribute("aria-pressed",String(L===M))),a("bLight").style.setProperty("--lc",S.glow)}a("bLight").addEventListener("click",()=>{let M=a("lights");M.hidden=!M.hidden,Jn()}),At.forEach((M,S)=>{let E=document.createElement("button");E.type="button",E.style.setProperty("--lc",M.glow),E.innerHTML=`<i></i><span data-j="${M.j}" data-e="${M.e}">${M.j}</span>`,E.addEventListener("click",()=>{pe(S),a("lights").hidden=!0,Ye(Zn[S+3],0,.08,.8)}),a("lights").appendChild(E)});let xe=30,Ee=[{j:"\u5927\u5409",e:"Great Luck",steps:3},{j:"\u4E2D\u5409",e:"Good Luck",steps:2},{j:"\u5C0F\u5409",e:"Small Luck",steps:1},{j:"\u51F6",e:"Bad Luck",steps:0}],se=M=>h(Ee[M]?.j||"?",Ee[M]?.e||"?");async function Rt(){if(!p.client)return null;let M=await p.client.read();p.snap=M;try{p.canBuy=await p.client.canBuy(1n)}catch{p.canBuy=!1}return ke(),M}async function hn(M,S){if(!(p.busy||!p.client)){p.busy=!0,p.err="",ke();try{await M(),await Rt(),S&&S()}catch(E){p.err=E instanceof Error?E.message:h("\u3046\u307E\u304F\u3044\u304D\u307E\u305B\u3093\u3067\u3057\u305F","Action failed"),xi(h("\u53D6\u308A\u6D88\u3057\u307E\u3057\u305F","Cancelled"),2200),await Rt().catch(()=>{})}finally{p.busy=!1,ke(),a("shop").hidden||Ne()}}}let re=()=>p.snap?p.snap.plays.find(M=>M.outcomeId===null):null;function sn(M){let S=ct(),E=ki(),L=I.quaternion.clone(),N=new Me,R=new Me,Q=[];for(let rt=0;rt<M;rt++){let ut=L.angleTo(E),dt=null;for(let Ft of S)for(let Yt=-Math.PI;Yt<=Math.PI+1e-6;Yt+=Math.PI/36){R.copy(L).premultiply(N.setFromAxisAngle(Ft,Yt));let Tt=R.angleTo(E);(!dt||Tt<dt.d)&&(dt={ax:Ft,a:Yt,d:Tt})}if(!dt||ut-dt.d<.03||Math.abs(dt.a)<.06)break;if(L.premultiply(N.setFromAxisAngle(dt.ax,dt.a)),Q.push(dt),dt.d<.19){Q.push({done:!0});break}}return Q.map(rt=>({t:$n(rt),done:!!rt.done}))}function $n(M){if(M.done)return h("\u3053\u308C\u3067\u5F71\u304C\u5408\u3046","\u2026and the shadow fits");let S=Math.abs(M.a)*180/Math.PI,E=S<22?h("\u5C11\u3057","a little"):S<55?h("\u3050\u3063\u3068","a good way"):S<120?h("\u5927\u304D\u304F(4\u5206\u306E1\u56DE\u8EE2\u307B\u3069)","about a quarter turn"):h("\u3050\u308B\u3063\u3068\u534A\u56DE\u8EE2","about half a turn");return M.ax===tt?M.a>0?h(`\u53F3\u3078${E}\u56DE\u3059`,`Turn right ${E}`):h(`\u5DE6\u3078${E}\u56DE\u3059`,`Turn left ${E}`):M.ax===Z?M.a>0?h(`\u4E0B\u3078${E}\u50BE\u3051\u308B`,`Tilt down ${E}`):h(`\u4E0A\u3078${E}\u50BE\u3051\u308B`,`Tilt up ${E}`):M.a>0?h(`\u27F2 \u5DE6\u306B${E}\u3072\u306D\u308B`,`Twist left \u27F2 ${E}`):h(`\u27F3 \u53F3\u306B${E}\u3072\u306D\u308B`,`Twist right \u27F3 ${E}`)}function Pe(){if(V.won||!c.started||f()||p.busy)return;if($s(),!p.client){xi(h("\u3053\u306E\u753B\u9762\u3067\u306F\u304A\u307F\u304F\u3058\u3092\u5F15\u3051\u307E\u305B\u3093","Omikuji is not available here"),2200);return}if(!p.snap){Rt().catch(()=>{});return}let M=p.snap;if(!re()&&M.consumables===0n&&!p.canBuy){Ne();return}if(!re()&&!V.omiOk){gi();return}V.omiOk=!1;let S=null;hn(async()=>{let E=re();E||(p.snap.consumables===0n&&await p.client.buy(1n),E=(await p.client.play(1n))[0]),S=await p.client.settle(E.id)},()=>{if(!S||!S.outcomeId)return;let E=S.outcomeId-1,L=Ee[E]?sn(Ee[E].steps):[];V.hints++,_i(),Sn(E,Number(S.id),L,()=>{V.won||!c.started||(V.running||Vt(),E===3&&(V.resetAnim={from:I.quaternion.clone(),t:0},V.vel=[0,0,0]),mi(E,Number(S.id),L))})})}function mi(M,S,E){let L=a("oracle");if(!L)return;let N=M===3?[{t:h("\u306F\u3058\u3081\u306E\u5411\u304D\u306B\u623B\u3057\u307E\u3057\u305F","Back to the starting angle")}]:E.length?E:[{t:h("\u3082\u3046\u3001\u307B\u3068\u3093\u3069\u5408\u3063\u3066\u3044\u308B","You are almost there"),done:!0}];L.innerHTML=`<div class="oHead"><b>${se(M)}</b><span>${h(`\u304A\u307F\u304F\u3058 \u7B2C${un(S*37%98+1)}\u756A\u306E\u304A\u544A\u3052`,`Omikuji No. ${S*37%98+1}`)}</span></div><ol>${N.map((R,Q)=>`<li class="${R.done?"done":""}"><i>${R.done?"\u25CE":M===3?"\u30FB":h("\u4E00\u4E8C\u4E09\u56DB"[Q]||Q+1,String(Q+1))}</i>${R.t}</li>`).join("")}</ol><div class="oBar"><i id="oracleBar"></i></div>`,L.className=M===3?"kyo":"",L.hidden=!1,V.oracleT=xe}function me(){let M=a("oracle");M&&(M.hidden=!0),V.oracleT=0}function ke(){let M=p.snap,S=!p.client||p.client.mode!=="chain";a("rf").textContent=M?`${d(M.rfBalance)} RF${S?h("(\u4EEE)"," (sim)"):""}`:"\u2014 RF";let E=M&&p.client?M.inventory.reduce((L,N,R)=>L+(p.client.definition.outcomes[R]?.reward>0n?N:0n),0n):0n;a("lanternCnt").textContent=String(E),a("lanternCnt").hidden=E===0n,a("hintSub").textContent=re()?h("\u5F15\u3044\u305F\u304A\u307F\u304F\u3058\u3092\u958B\u304F","Open your omikuji"):h("1\u56DE 1 RF\u30FB\u6B21\u306E\u624B\u3092\u6559\u3048\u3066\u304F\u308C\u308B","1 RF \xB7 tells you the next moves"),V.stage&&(a("bHint").disabled=V.won||p.busy||!c.started)}function gi(){let M=a("shopBox"),S=p.snap,E=p.client.definition,L=p.client.mode!=="chain",N=S.consumables>0n?S.rfBalance:S.rfBalance-E.price,R=[h("\u6B21\u306E3\u624B\uFF0B\u304A\u4EE3\u304C\u8FD4\u308B","next 3 moves + refund"),h("\u6B21\u306E2\u624B","next 2 moves"),h("\u6B21\u306E1\u624B","next move"),h("\u306F\u3058\u3081\u306E\u5411\u304D\u306B\u623B\u308B","back to the start")],Q=E.outcomes.map((rt,ut)=>`<tr><td><b>${se(ut)}</b></td><td>${(rt.chanceBps/100).toFixed(0)}%</td><td>${R[ut]||""}</td></tr>`).join("");a("shop").hidden=!1,M.innerHTML=`<h2>${h("\u304A\u307F\u304F\u3058\u3092\u5F15\u304D\u307E\u3059\u304B\uFF1F","Draw an omikuji?")} ${L?`<small>${h("RF \u306F\u3059\u3079\u3066\u4EEE(\u30D7\u30EC\u30D3\u30E5\u30FC)","All RF is simulated (preview)")}</small>`:""}</h2>
    <div class="bal"><span>${h("\u304A\u4EE3","Price")}</span><b>${d(E.price)} RF</b><span>${h("\u30D5\u30EC\u30F3\u30C9\u306E RF","Friend RF")}</span><b>${d(S.rfBalance)} \u2192 ${d(N)} RF</b></div>
    <table class="odds"><thead><tr><th>${h("\u7D50\u679C","Result")}</th><th>${h("\u78BA\u7387","Chance")}</th><th>${h("\u4E2D\u8EAB","What it does")}</th></tr></thead><tbody>${Q}</tbody></table>
    <p class="dim">${h("\u5F15\u304F\u3068\u3001\u3053\u306E\u9762\u306F\u26053\u306B\u306A\u308A\u307E\u305B\u3093\u3002","Drawing costs the third star on this stage.")}${t.trial?"":" "+h("\u3053\u306E\u3042\u3068\u3001\u516C\u5F0F\u306E\u78BA\u8A8D\u753B\u9762(\u82F1\u8A9E)\u3082\u51FA\u307E\u3059\u3002","The official confirmation appears next.")}</p>
    <div class="row"><button type="button" class="btn gold" data-act="omiGo">${h("\u5F15\u304F","Draw")}</button><button type="button" class="btn" data-act="close">${h("\u3084\u3081\u308B","Cancel")}</button></div>`,M.querySelector('[data-act="omiGo"]').focus()}function Ne(){let M=a("shopBox"),S=p.snap,E=p.client?p.client.definition:null,L=!p.client||p.client.mode!=="chain";a("shop").hidden=!1;let N=`<h2>${h("\u304A\u307F\u304F\u3058","Omikuji")} <small>${L?h("RF \u306F\u3059\u3079\u3066\u4EEE(\u30D7\u30EC\u30D3\u30E5\u30FC)","All RF is simulated (preview)"):h("\u672C\u7269\u306E RF","Live RF")}</small></h2>`;if(!E){M.innerHTML=`${N}<p>${h("\u3053\u306E\u753B\u9762\u3067\u306F RF \u3092\u4F7F\u3048\u307E\u305B\u3093\u3002","RF is not available here.")}</p><div class="row"><button type="button" class="btn" data-act="close">${h("\u3068\u3058\u308B","Close")}</button></div>`;return}if(!S){M.innerHTML=`${N}<p>${h("\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026","Loading\u2026")}</p>`,Rt().then(Ne,()=>{M.innerHTML=`${N}<p class="err">${h("\u8AAD\u307F\u8FBC\u3081\u307E\u305B\u3093\u3067\u3057\u305F","Could not load")}</p><div class="row"><button type="button" class="btn" data-act="retry">${h("\u3082\u3046\u4E00\u5EA6","Retry")}</button><button type="button" class="btn" data-act="close">${h("\u3068\u3058\u308B","Close")}</button></div>`});return}let R=[h("\u6B21\u306E3\u624B\u3092\u6559\u3048\u3066\u304F\u308C\u308B","shows the next 3 moves"),h("\u6B21\u306E2\u624B\u3092\u6559\u3048\u3066\u304F\u308C\u308B","shows the next 2 moves"),h("\u6B21\u306E1\u624B\u3092\u6559\u3048\u3066\u304F\u308C\u308B","shows the next move"),h("\u306F\u3058\u3081\u306E\u5411\u304D\u306B\u623B\u3055\u308C\u308B","sends you back to the start")],Q=E.outcomes.map((Ft,Yt)=>`<tr><td><b>${se(Yt)}</b></td><td>${(Ft.chanceBps/100).toFixed(0)}%</td><td>${R[Yt]||""}${Ft.reward>0n?h(`\u30FB\u304A\u4EE3 ${d(Ft.reward)} RF \u304C\u8FD4\u308B`,` \xB7 ${d(Ft.reward)} RF back`):""}</td></tr>`).join(""),rt=E.outcomes.map((Ft,Yt)=>({o:Ft,i:Yt,n:S.inventory[Yt]||0n})).filter(Ft=>Ft.n>0n&&Ft.o.reward>0n),ut=rt.length?rt.map(({o:Ft,i:Yt,n:Tt})=>`<li><span>${h(`${se(Yt)}\u306E\u8FD4\u91D1`,`${se(Yt)} refund`)} \xD7${Tt}</span><button type="button" class="btn sm" data-act="redeem" data-i="${Yt}" ${p.busy?"disabled":""}>${h(`\u53D7\u3051\u53D6\u308B +${d(Ft.reward)} RF`,`Collect +${d(Ft.reward)} RF`)}</button></li>`).join(""):`<li class="dim">${h("\u53D7\u3051\u53D6\u308C\u308B\u8FD4\u91D1\u306F\u3042\u308A\u307E\u305B\u3093","Nothing to collect")}</li>`,dt=re();M.innerHTML=`${N}
    <p class="lead2">${h("\u300C\u304A\u307F\u304F\u3058\u300D\u30DC\u30BF\u30F3\u30671\u56DE 1 RF\u3002\u5F15\u3044\u305F\u304A\u307F\u304F\u3058\u306B\u3001\u3044\u307E\u304B\u3089\u6B63\u89E3\u306B\u8FD1\u3065\u304F\u56DE\u3057\u65B9\u304C\u66F8\u3044\u3066\u3042\u308A\u307E\u3059\u3002","Press Omikuji: 1 RF per draw. The slip tells you how to turn the pieces to get closer to the answer.")}</p>
    <div class="bal"><span>${h("\u30D5\u30EC\u30F3\u30C9\u306E RF","Friend RF")}</span><b>${d(S.rfBalance)} RF</b><span>${h("\u304A\u4EE3","Price")}</span><b>${d(E.price)} RF</b></div>
    ${dt?`<div class="row"><button type="button" class="btn gold" data-act="draw" ${p.busy?"disabled":""}>${h("\u5F15\u3044\u305F\u304A\u307F\u304F\u3058\u3092\u958B\u304F","Open your omikuji")}</button></div>`:""}
    <table class="odds"><thead><tr><th>${h("\u7D50\u679C","Result")}</th><th>${h("\u78BA\u7387","Chance")}</th><th>${h("\u4E2D\u8EAB","What it does")}</th></tr></thead><tbody>${Q}</tbody></table>
    <p class="dim">${h("\u3046\u3067\u307E\u3048\u3067\u78BA\u7387\u306F\u5909\u308F\u308A\u307E\u305B\u3093\u3002\u304A\u307F\u304F\u3058\u3092\u5F15\u304F\u3068\u3001\u305D\u306E\u9762\u306F\u26053\u306B\u306A\u308A\u307E\u305B\u3093\u3002","Skill never changes the odds. Drawing one costs the third star on that stage.")}</p>
    <h3>${h("\u5927\u5409\u306E\u8FD4\u91D1","Great Luck refunds")}</h3><ul class="kept">${ut}</ul>
    ${p.err?`<p class="err">${p.err}</p>`:""}
    <div class="row"><button type="button" class="btn" data-act="close">${h("\u3068\u3058\u308B","Close")}</button></div>`}r(i,"click",M=>{let S=M.target.closest&&M.target.closest("[data-act]");if(!S||!i.contains(S))return;let E=S.dataset.act;if(E==="close")a("shop").hidden=!0,p.err="";else if(E==="retry")Ne();else if(E==="draw")a("shop").hidden=!0,Pe();else if(E==="omiGo")a("shop").hidden=!0,V.omiOk=!0,Pe();else if(E==="redeem"){let L=+S.dataset.i;hn(()=>p.client.redeem(L+1,1n),()=>{Ye(784,0,.08,.8),xi(h("\u304A\u4EE3\u3092\u53D7\u3051\u53D6\u308A\u307E\u3057\u305F","Refund collected"),2e3)})}});let un=M=>{let S="\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D";if(M<10)return S[M];let E=Math.floor(M/10),L=M%10;return(E>1?S[E]:"")+"\u5341"+(L?S[L]:"")};function Sn(M,S,E,L){let N=a("omi"),R=c.lang==="ja"?"ja":"en",Q=S*37%98+1,rt=p.client.definition.outcomes[M],dt=`<div class="pSep"></div><ul class="pFort">${mh[R].map((fe,Ze)=>[fe,gh[R][M][Ze][(Q+Ze*3)%4]]).map(([fe,Ze])=>`<li><b>${fe}</b>${Ze}</li>`).join("")}</ul>`,Ft=M===3?`<p class="pKyo">${h("\u306F\u3058\u3081\u306E\u5411\u304D\u304B\u3089\u3001\u3084\u308A\u76F4\u3059\u3079\u3057","Start again from the beginning")}</p>`:`<div class="pHead">${h("\u304A\u544A\u3052","The oracle says")}</div><ol class="pSteps">${(E.length?E:[{t:h("\u3082\u3046\u3001\u307B\u3068\u3093\u3069\u5408\u3063\u3066\u3044\u308B","You are almost there"),done:!0}]).map((fe,Ze)=>fe.done?`<li class="done"><i>\u25CE</i>${fe.t}</li>`:`<li><i>${h("\u4E00\u4E8C\u4E09\u56DB"[Ze]||"",String(Ze+1)+".")}</i>${fe.t}</li>`).join("")}</ol>`;N.className="omi"+(R==="en"?" en":"")+(M===0?" great":M===1?" good":M===3?" kyo":"")+(l?" rm":""),N.innerHTML=`<div class="omiBg"></div><div class="omiStage">
    <div class="tsBox"><div class="tsutsuWrap"><div class="stick"></div><div class="tsutsu"><svg viewBox="0 0 120 250" aria-hidden="true"><defs><linearGradient id="wd" x1="0" x2="1"><stop offset="0" stop-color="#5a3518"/><stop offset=".22" stop-color="#9a6634"/><stop offset=".5" stop-color="#c58d52"/><stop offset=".78" stop-color="#9a6634"/><stop offset="1" stop-color="#4a2a12"/></linearGradient></defs>
      <path d="M8 20 L30 8 H90 L112 20 V236 L90 246 H30 L8 236 Z" fill="url(#wd)" stroke="#2a170a" stroke-width="3"/>
      <path d="M30 8 V246 M90 8 V246" stroke="#2a170a" stroke-opacity=".35" stroke-width="2"/>
      <rect x="8" y="34" width="104" height="9" fill="#2a170a" opacity=".55"/><rect x="8" y="212" width="104" height="9" fill="#2a170a" opacity=".55"/>
      <ellipse cx="60" cy="14" rx="9" ry="4" fill="#140b04"/></svg>
      <span class="tsLabel">\u5FA1\u795E\u7C64</span></div></div>
      <div class="stickNo">${R==="ja"?un(Q)+"\u756A":"No. "+Q}</div></div>
    <div class="paperWrap"><div class="paper"><div class="pIn">
      <div class="pNo">${R==="ja"?`\u7B2C${un(Q)}\u756A`:`No. ${Q}`}</div>
      <div class="pLuck">${Ee[M]?R==="ja"?Ee[M].j:Ee[M].e:""}</div>
      <div class="pMain">${Ft}</div>${dt}
      ${rt.reward>0n?`<div class="pPrize">${h(`\u304A\u4EE3 ${d(rt.reward)} RF \u3092\u304A\u8FD4\u3057`,`${d(rt.reward)} RF refunded`)}</div>`:""}
    </div></div></div></div>
    <p class="omiTap">${h("\u30BF\u30C3\u30D7\u3067\u9589\u3058\u308B(\u304A\u544A\u3052\u306F\u5DE6\u4E0A\u306B30\u79D2\u306E\u3053\u308A\u307E\u3059)","Tap to close (the oracle stays at the top left for 30 s)")}</p>`,N.hidden=!1,c.omi=!0,Js();let Yt=0,Tt=!1;if(!l){for(let fe=0;fe<13;fe++)Ss(.25+fe*.095+Math.random()*.03,850+Math.random()*500,.05);Ss(1.95,420,.12);for(let fe=0;fe<4;fe++)Ye(Zn[fe]*2,2.8+fe*.05,.03,.4)}_h(l?.1:3.45,M);let Lt=()=>{N.getAnimations({subtree:!0}).forEach(fe=>{try{fe.finish()}catch{}}),Yt=1};o(l?50:4e3,()=>{Yt=1});let Te=()=>{if(!Tt){if(!Yt){Lt();return}Tt=!0,N.classList.add("out"),Jn(),o(l?10:520,()=>{N.hidden=!0,N.innerHTML="",c.omi=!1,Js(),ke(),L()})}};N.onclick=Te,N.onkeydown=fe=>{(fe.key==="Enter"||fe.key===" "||fe.key==="Escape")&&(fe.preventDefault(),Te())},N.tabIndex=-1,N.focus({preventScroll:!0})}function Ss(M,S,E){if(!zt)return;let L=zt.createOscillator(),N=zt.createGain(),R=zt.createBiquadFilter();L.type="triangle";let Q=zt.currentTime+M;L.frequency.setValueAtTime(S,Q),L.frequency.exponentialRampToValueAtTime(S*.6,Q+.04),R.type="bandpass",R.frequency.value=S,R.Q.value=4,N.gain.setValueAtTime(0,Q),N.gain.linearRampToValueAtTime(E,Q+.002),N.gain.exponentialRampToValueAtTime(5e-4,Q+.07),L.connect(R),R.connect(N),N.connect(bn),L.start(Q),L.stop(Q+.1)}function _h(M,S){if(!zt)return;let E=zt.currentTime+M,L=S===3;for(let[N,R,Q]of L?[[392,.08,1.8],[196,.05,1.6]]:[[1318.5,.07,2.4],[2637,.025,1.6],[3951,.012,.9]]){let rt=zt.createOscillator(),ut=zt.createGain();rt.type="sine",rt.frequency.value=N,ut.gain.setValueAtTime(0,E),ut.gain.linearRampToValueAtTime(R,E+.01),ut.gain.exponentialRampToValueAtTime(4e-4,E+Q),rt.connect(ut),ut.connect(bn),rt.start(E),rt.stop(E+Q+.05)}S===0?[0,2,4,5,7].forEach((N,R)=>Ye(Zn[N]*2,M+.25+R*.09,.07,1.4)):S===1&&[0,2,4].forEach((N,R)=>Ye(Zn[N]*2,M+.25+R*.1,.05,1.1))}let ra=new Set;function Lg(){let M=0;for(let S=0;S<Qt.length;S++){let E=Qt[S];jt.set(E.x,E.y,E.w).applyQuaternion(I.quaternion);let L=Math.round(jt.dot(Z)+7.5),N=Math.round(7.5-jt.dot(tt)),R=ra.has(L+","+N);R&&M++,E.hint=R?1:-1}return M}function ki(){let M=V.sols[0],S=9;for(let E of V.sols){let L=I.quaternion.angleTo(E);L<S&&(S=L,M=E)}return M}function Sl(){if(V.won)return;V.won=!0,V.resetAnim=null,me();for(let Tt of Qt)Tt.s=1,Tt.col=Tt.col0;fi(),V.running=!1,V.winT=0,V.winFrom=I.quaternion.clone(),V.winTo=ki();let M=Y.position.clone().sub(ft).normalize(),S=new O(0,1,0),E=new O().crossVectors(S,M).normalize(),L=new O().crossVectors(M,E);V.faceQ=new Me().setFromRotationMatrix(new de().makeBasis(E,L,M));let N=V.stage,R=V.time,Q=1+(R<=N.par?1:0)+(R<=N.par&&!V.hints?1:0);V.result={stars:Q,time:R},c.stars[V.st]=Math.max(c.stars[V.st]||0,Q);let rt=Tt=>-Tt.y*100+Tt.x,ut=Qt.slice().sort((Tt,Lt)=>rt(Tt)-rt(Lt));if(!m.mask){V.morph=null,Al(),z(G(N)),_i();return}let dt=m.mask.map(([Tt,Lt])=>({x:Tt-7.5,y:7.5-Lt})).sort((Tt,Lt)=>rt(Tt)-rt(Lt)),Ft=Math.max(ut.length,dt.length),Yt=[];for(let Tt=0;Tt<Ft;Tt++){let Lt=ut[Math.min(Tt,ut.length-1)],Te=dt[Tt];Yt.push({x:Lt.x,y:Lt.y,w:Lt.w0,w0:Lt.w0,fx:Lt.x,fy:Lt.y,tx:Te?Te.x:Lt.x,ty:Te?Te.y:Lt.y,s:1,s0:Tt<ut.length?1:0,s1:Te?1:0,col:Lt.col,col0:Lt.col,fin:Lt.fin})}V.morph=Yt,Al(),z(G(N)),_i()}function xh(){let{stars:M,time:S}=V.result,E=V.st>=w.length-1;a("clearStars").textContent="\u2605".repeat(M)+"\u2606".repeat(3-M),a("clearInfo").textContent=h(`${S.toFixed(1)}\u79D2 \u30FB ${V.turns}\u56DE\u307E\u308F\u3057\u305F${V.hints?` \u30FB \u30D2\u30F3\u30C8${V.hints}\u56DE`:""}`,`${S.toFixed(1)} s \xB7 ${V.turns} turns${V.hints?` \xB7 ${V.hints} hint${V.hints>1?"s":""}`:""}`),a("clearHint").textContent=M<3?h(`\u76EE\u6A19 ${V.stage.par}\u79D2\u4EE5\u5185\u30FB\u30D2\u30F3\u30C8\u306A\u3057\u3067\u26053`,`\u2605\u2605\u2605: under ${V.stage.par} s with no hint`):h("\u304B\u3093\u307A\u304D!","Perfect!"),a("bNext").textContent=E?h("\u306F\u3058\u3081\u304B\u3089","Play again"):h("\u3064\u304E\u306E\u5F71\u3078","Next shadow"),a("clearTitle").textContent=m.mask?E&&V.stage.me?h(`\u6700\u5F8C\u306E\u5F71\u306F\u3001\u3042\u306A\u305F\u306E\u30D5\u30EC\u30F3\u30C9 ${m.id} \u3067\u3057\u305F\u3002`,`The last shadow was your own Friend ${m.id}.`):h(`\u5F71\u304B\u3089\u3001\u3042\u306A\u305F\u306E\u30D5\u30EC\u30F3\u30C9 ${m.id} \u304C\u73FE\u308C\u305F\u3002`,`Your Friend ${m.id} stepped out of the shadow.`):h("\u5F71\u304C\u3074\u305F\u308A\u3068\u91CD\u306A\u3063\u305F\u3002","The shadow fits perfectly."),a("clear").hidden=!1,a("bNext").focus()}a("bNext").addEventListener("click",()=>{a("clear").hidden=!0,Yn(V.st>=w.length-1?0:V.st+1),Jn()}),a("bRetry").addEventListener("click",()=>{a("clear").hidden=!0,Yn(V.st),Jn()});function _i(){yh(),a("stNo").textContent=`${V.st+1} / ${w.length}`,a("stTierTxt").textContent=c.free?h("\u81EA\u7531\u306B\u56DE\u3059","Free turn"):[h("\u3088\u3053\u306B\u56DE\u3059","Turn sideways"),h("\u305F\u3066\u30FB\u3088\u3053\u306B\u56DE\u3059","Turn up/down & sideways"),h("\u305F\u3066\u30FB\u3088\u3053\u30FB\u3072\u306D\u308B","Up/down, sideways & twist")][V.stage.tier-1],a("stTier").setAttribute("aria-pressed",String(c.free)),a("stTier").classList.toggle("on",c.free),ke(),a("twist").hidden=V.stage.tier<3&&!c.free,a("bReset").disabled=V.won,a("cardLab").textContent=F(V.stage)?h("\u304A\u984C\uFF1A\u3042\u306A\u305F","Goal: you"):h("\u304A\u984C","Goal")}function vh(){let M=a("card"),S=M.getContext("2d"),E=M.width,L=G(V.stage),N=E/20;S.clearRect(0,0,E,E),S.fillStyle="#1b120c";for(let[R,Q]of L)S.fillRect((R+2)*N,(Q+2)*N,N+.5,N+.5)}let aa=0;function xi(M,S=1800){let E=a("toast");E.textContent=M,E.classList.add("on"),clearTimeout(aa),n.delete(aa),aa=o(S,()=>E.classList.remove("on"))}let dn=matchMedia("(pointer:coarse)").matches;function yh(){if(!V.stage)return;let M=a("how"),S=c.lang==="ja",E=c.free?"free":V.st===0?"yoko":V.st===1?"tate":V.st===9?"hineru":null;if(M.hidden=!E||!c.started,M.hidden)return;let L=c.free?0:V.stage.tier,N=[],R=(Q,rt,ut,dt,Ft)=>N.push(`<span class="${Q===E?"new":""}"><b>${S?rt:dt}</b>${S?ut:Ft}</span>`);L===0?R("free","\u56DE\u3059",dn?"\u597D\u304D\u306A\u5411\u304D\u306B\u306A\u305E\u308B":"\u597D\u304D\u306A\u5411\u304D\u306B\u30C9\u30E9\u30C3\u30B0","Turn",dn?"swipe any way":"drag any way"):(R("yoko","\u3088\u3053",dn?"\u5DE6\u53F3\u306B\u306A\u305E\u308B":"\u5DE6\u53F3\u306B\u30C9\u30E9\u30C3\u30B0","Sideways",dn?"swipe left/right":"drag left/right"),L>=2&&R("tate","\u305F\u3066",dn?"\u4E0A\u4E0B\u306B\u306A\u305E\u308B":"\u4E0A\u4E0B\u306B\u30C9\u30E9\u30C3\u30B0","Tilt",dn?"swipe up/down":"drag up/down")),(L===0||L===3)&&R("hineru","\u3072\u306D\u308B",dn?"2\u672C\u6307 \u304B \u27F2\u27F3\u9577\u62BC\u3057":"\u27F2\u27F3\u9577\u62BC\u3057 \u304B Q\u30FBE","Twist",dn?"two fingers or hold \u27F2\u27F3":"hold \u27F2\u27F3 or Q / E"),R("","\u3082\u3069\u3059",dn?"\u21BA":"\u21BA \u304B R","Reset",dn?"\u21BA":"\u21BA or R"),M.innerHTML=N.join("")}function bl(){let M=a("twist");M.classList.remove("pulse"),M.offsetWidth,M.classList.add("pulse")}function wl(){document.documentElement.lang=c.lang,i.querySelectorAll("[data-j]").forEach(M=>{M.textContent=c.lang==="ja"?M.dataset.j:M.dataset.e}),a("bLang").textContent=c.lang==="ja"?"EN":"\u65E5\u672C\u8A9E",_i()}a("bLang").addEventListener("click",()=>{c.lang=c.lang==="ja"?"en":"ja",wl()}),a("bMute").addEventListener("click",()=>{c.mute=!c.mute,a("bMute").setAttribute("aria-pressed",String(!c.mute)),a("bMute").textContent=c.mute?"\u266A OFF":"\u266A ON",zt&&(bn.gain.value=c.mute?0:.8)}),a("bHint").addEventListener("click",Pe),a("rf").addEventListener("click",()=>{Jn(),Ne()}),a("bStart").addEventListener("click",oa);function oa(){c.started=!0,a("title").hidden=!0,a("hud").hidden=!1,$s(),Yn(0),Jn()}let zt=null,bn=null;function $s(){if(!zt)try{zt=new AudioContext,bn=zt.createGain(),bn.gain.value=c.mute?0:.8,bn.connect(zt.destination),Mh()}catch{zt=null}}function Ye(M,S=0,E=.18,L=1.2){if(!zt)return;let N=zt.createOscillator(),R=zt.createGain(),Q=zt.createBiquadFilter();N.type="triangle",N.frequency.value=M,Q.type="lowpass",Q.frequency.value=M*5;let rt=zt.currentTime+S;R.gain.setValueAtTime(0,rt),R.gain.linearRampToValueAtTime(E,rt+.005),R.gain.exponentialRampToValueAtTime(8e-4,rt+L),N.connect(Q),Q.connect(R),R.connect(bn),N.start(rt),N.stop(rt+L+.05)}function El(M=0){if(!zt)return;let S=zt.createOscillator(),E=zt.createGain();S.type="sine";let L=zt.currentTime+M;S.frequency.setValueAtTime(120,L),S.frequency.exponentialRampToValueAtTime(42,L+.35),E.gain.setValueAtTime(.6,L),E.gain.exponentialRampToValueAtTime(.001,L+.6),S.connect(E),E.connect(bn),S.start(L),S.stop(L+.65)}let In=null;function Mh(){let M=zt.createGain();M.gain.value=.6,M.connect(bn);let S=zt.createDelay(1.5);S.delayTime.value=.55;let E=zt.createGain();E.gain.value=.3;let L=zt.createGain();L.gain.value=.3;let N=zt.createBiquadFilter();N.type="lowpass",N.frequency.value=2200,M.connect(S),S.connect(N),N.connect(E),E.connect(S),N.connect(L),L.connect(bn),In={bus:M,next:zt.currentTime+.3,step:0},s.push(setInterval(Eh,120))}let la={D3:146.83,A3:220,Bb3:233.08,D4:293.66,Eb4:311.13,G4:392,A4:440,Bb4:466.16,D5:587.33,Eb5:622.25,G5:783.99};function Tl(M,S,E,L=1.8){let N=zt.createOscillator(),R=zt.createOscillator(),Q=zt.createGain(),rt=zt.createBiquadFilter(),ut=zt.createGain();N.type="triangle",R.type="sine",N.frequency.setValueAtTime(M*1.012,S),N.frequency.exponentialRampToValueAtTime(M,S+.05),R.frequency.value=M*3.01,ut.gain.value=.12,rt.type="lowpass",rt.frequency.setValueAtTime(M*9,S),rt.frequency.exponentialRampToValueAtTime(M*1.6,S+.5),Q.gain.setValueAtTime(0,S),Q.gain.linearRampToValueAtTime(E,S+.003),Q.gain.exponentialRampToValueAtTime(5e-4,S+L),N.connect(rt),R.connect(ut),ut.connect(rt),rt.connect(Q),Q.connect(In.bus),N.start(S),R.start(S),N.stop(S+L+.05),R.stop(S+L+.05)}function Sh(M,S,E,L=.05){let N=zt.createOscillator(),R=zt.createOscillator(),Q=zt.createGain(),rt=zt.createGain(),ut=zt.createOscillator(),dt=zt.createGain(),Ft=zt.createBiquadFilter();N.type="sine",R.type="sine",N.frequency.setValueAtTime(M*.975,S),N.frequency.linearRampToValueAtTime(M,S+.28),R.frequency.setValueAtTime(M*2*.975,S),R.frequency.linearRampToValueAtTime(M*2,S+.28),rt.gain.value=.18,ut.frequency.value=4.6,dt.gain.setValueAtTime(0,S),dt.gain.linearRampToValueAtTime(M*.006,S+E*.7),ut.connect(dt),dt.connect(N.frequency),dt.connect(R.frequency),Ft.type="lowpass",Ft.frequency.value=1800,Q.gain.setValueAtTime(0,S),Q.gain.linearRampToValueAtTime(L,S+.22),Q.gain.setValueAtTime(L,S+E*.75),Q.gain.linearRampToValueAtTime(L*.6,S+E*.9),Q.gain.linearRampToValueAtTime(0,S+E),N.connect(Q),R.connect(rt),rt.connect(Q),Q.connect(Ft),Ft.connect(In.bus);for(let Yt of[N,R,ut])Yt.start(S),Yt.stop(S+E+.05)}let bh=[["A4",2],["Bb4",1],["A4",1],["G4",3],[null,1],["Eb4",2],["D4",2],["Eb4",1],["G4",1],["A4",2],["D5",3],["Bb4",1],["A4",2],["G4",2],["A4",6],[null,2],["G4",2],["A4",1],["Bb4",1],["D5",2],["Eb5",2],["D5",3],["Bb4",1],["A4",4],["G4",2],["Eb4",2],["D4",4],[null,8]],Vi=[];{let M=0;for(let[S,E]of bh)Vi.push([M,S,E]),M+=E;Vi.len=M}let wh=["D3","A3","D4","Eb4","D4","A3","Bb3","A3"];function Eh(){if(!zt||!In)return;let M=60/66,S=M/2;for(;In.next<zt.currentTime+.6;){let E=In.next,L=In.step,N=L/2%(Vi.len*2);if(Math.floor(L/8)%8===7&&L%8>=4||Tl(la[wh[L%8]],E,L%8===0?.075:.05),L%32===0&&Tl(la.D3/2,E,.09,3.2),L%2===0&&N>=Vi.len){let Q=N-Vi.len;for(let[rt,ut,dt]of Vi)rt===Q&&ut&&Sh(la[ut],E,dt*M*.98)}In.next+=S,In.step++}}let Zn=[293.7,329.6,392,440,493.9,587.3,659.3,784];function Jn(){Ye(587.3,0,.1,.5)}function Dg(){for(let S=0;S<4;S++)Ye(Zn[S+2]*2,S*.07,.07,.9)}function Al(){El(0),[0,2,4,5,7].forEach((M,S)=>Ye(Zn[M],.12+S*.11,.16,1.6)),Ye(Zn[7]*2,.8,.08,2.2)}let Rl=0;function Th(M){let S=Math.floor(M*10);S>Rl&&S>=5&&Ye(Zn[Math.min(7,S-3)],0,.05,.4),Rl=S}function Cl(){let M=innerWidth,S=innerHeight;b.setSize(M,S,!1),Y.aspect=M/S;let E=M<S;Y.fov=E?52:34;let L=$.clone().applyAxisAngle(new O(0,1,0),E?-.5:-.62);L.y+=.08;let N=E?15.5:11.2,R=at.clone().lerp(ft,E?.5:.42).add(new O(0,E?.75:-.15,0));Y.position.copy(R).addScaledVector(L.normalize(),N),Y.lookAt(R),Y.updateProjectionMatrix(),V.look=R}r(window,"resize",Cl),Cl();let Zs=3,ca=new ln({transparent:!0,depthWrite:!1,blending:ci,uniforms:{uB:{value:Array.from({length:Zs},()=>new O)},uCol:{value:new qt("#ffb45c")},uAmt:{value:1}},vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 uB[${Zs}]; uniform vec3 uCol; uniform float uAmt; varying vec2 vP;
    void main(){ float v=0.; for(int i=0;i<${Zs};i++){ vec2 d=vP-uB[i].xy; v+=uB[i].z*(exp(-dot(d,d)*2.2)*.8+exp(-dot(d,d)*.5)*.25); } gl_FragColor=vec4(uCol*v*.3*uAmt,1.); }`}),Il=new Ae(new Xn(ot,St),ca);Il.position.z=.006,ae.add(Il);let Ah=Array.from({length:Zs},(M,S)=>({x:(S-1)*1.6,y:S%2?.6:-.5,vx:0,vy:0,ph:S*2.1,a:1-S*.25})),Re={guide:0,idle:9,axis:null,sign:0,recalc:0};function Rh(){let M=ct(),S=ki(),E=new Me,L=new Me,N=I.quaternion.angleTo(S),R={axis:null,sign:0,gain:0};for(let Q of M)for(let rt of[1,-1]){E.copy(I.quaternion).premultiply(L.setFromAxisAngle(Q,rt*.1));let ut=N-E.angleTo(S);ut>R.gain&&(R={axis:Q,sign:rt,gain:ut})}return R}function Ch(M){let S=c.started&&!V.won&&!V.attract&&(qe.size>0||It.size>0||bt!==0);Re.idle=S?0:Re.idle+M;let E=(S||Re.idle<1.5)&&!V.near&&V.stage&&!V.won;if(Re.recalc-=M,E&&Re.recalc<=0){Re.recalc=.4;let R=Rh();Re.axis=R.axis,Re.sign=R.sign}Re.guide+=((E&&Re.axis?1:0)-Re.guide)*Math.min(1,M*.8);let L=Re.guide,N=[ot/2-.4,St/2-.4];Ah.forEach((R,Q)=>{let rt=Math.sin($e*.11+R.ph)*2.2+Math.sin($e*.047+R.ph*1.7)*1.4,ut=Math.cos(rt)*.22,dt=Math.sin(rt)*.16;if(L>.01&&Re.axis){let Tt=0,Lt=0;if(Re.axis===tt)Tt=Re.sign;else if(Re.axis===Z)Lt=-Re.sign;else{let Te=Math.hypot(R.x,R.y)||1;Tt=-R.y/Te*Re.sign,Lt=R.x/Te*Re.sign}ut=ut*(1-.45*L)+Tt*.26*L,dt=dt*(1-.45*L)+Lt*.2*L}R.vx+=(ut-R.vx)*Math.min(1,M*.6),R.vy+=(dt-R.vy)*Math.min(1,M*.6),R.x+=R.vx*M,R.y+=R.vy*M;let Ft=1;for(let[Tt,Lt]of[["x",N[0]],["y",N[1]]])R[Tt]>Lt+1.2&&(R[Tt]=-Lt-1.2),R[Tt]<-Lt-1.2&&(R[Tt]=Lt+1.2),Ft=Math.min(Ft,Math.min(1,(Lt+1.2-Math.abs(R[Tt]))/1.2));let Yt=1+Math.sin($e*1.7+R.ph)*.08;ca.uniforms.uB.value[Q].set(R.x,R.y,R.a*Ft*Yt*(V.won?.4:1))})}let vi=new O,yi=new O,Mi=new O,We={x:8,y:4.6,z:5},le=new Float32Array(j*3),Fe=new Float32Array(j*3),Hi=new Int16Array(j).fill(-1),Kn=new Float32Array(j*6),Qn=new Float32Array(j*6),bs=new en;bs.setAttribute("position",new Le(Kn,3)),bs.setAttribute("color",new Le(Qn,3));let Ih=new Zr(bs,new ks({vertexColors:!0,transparent:!0,depthWrite:!1,blending:ci}));l||P.add(Ih);let ha=[],Pl=3;{let M=D(29);for(let S=0;S<j;S++)le[S*3]=(M()*2-1)*We.x,le[S*3+1]=(M()*2-1)*We.y,le[S*3+2]=(M()*2-1)*We.z}function ua(M,S,E,L,N){let R=1-N;return M*R*R*R+3*S*R*R*N+3*E*R*N*N+L*N*N*N}function Ph(){let M=Math.random,S=16+Math.floor(M()*10),E=M()<.5?-1:1,L=5.2,N=2.8,R=(M()*2-1)*1.5,Q=[-E*L*(.6+M()*.3),(M()*2-1)*N*.8,R],rt=[E*L*(.3+M()*.6),(M()*2-1)*N*.8,R+(M()-.5)*1.5],ut=[Q[0]+E*(1.5+M()*2.5),Q[1]+(M()-.5)*5,R],dt=[rt[0]-E*(1.5+M()*2.5),rt[1]+(M()-.5)*5,R],Ft=[];for(let Lt=0;Lt<j;Lt++)Hi[Lt]<0&&Ft.push(Lt);let Yt=[];for(let Lt=0;Lt<S&&Ft.length;Lt++)Yt.push(Ft.splice(Math.floor(M()*Ft.length),1)[0]);let Tt={P:[Q,ut,dt,rt],ids:Yt,t:0,dur:1.8+M()*1,lag:.03};Yt.forEach(Lt=>{Hi[Lt]=1,le[Lt*3]=Q[0],le[Lt*3+1]=Q[1],le[Lt*3+2]=Q[2]}),ha.push(Tt)}function Lh(M){if(l)return;Y.matrixWorld.extractBasis(vi,yi,Mi);let S=V.look||at,E=At[oe],L=new qt(E.key);!V.won&&(Pl-=M)<=0&&(Ph(),Pl=5+Math.random()*5);for(let N=0;N<j;N++){let R=N*3;if(Hi[N]>=0)continue;let Q=le[R],rt=le[R+1],ut=le[R+2],dt=Pt[N]*6.28,Ft=Math.sin(rt*.45+$e*.13+dt)*.16+.05,Yt=Math.sin(Q*.38-$e*.11+dt*.7)*.12+Math.sin($e*.3+dt)*.03,Tt=Math.cos(Q*.3+rt*.3+$e*.09)*.08;Fe[R]+=(Ft-Fe[R])*Math.min(1,M*.8),Fe[R+1]+=(Yt-Fe[R+1])*Math.min(1,M*.8),Fe[R+2]+=(Tt-Fe[R+2])*Math.min(1,M*.8),le[R]+=Fe[R]*M,le[R+1]+=Fe[R+1]*M,le[R+2]+=Fe[R+2]*M,le[R]>We.x&&(le[R]-=2*We.x),le[R]<-We.x&&(le[R]+=2*We.x),le[R+1]>We.y&&(le[R+1]-=2*We.y),le[R+1]<-We.y&&(le[R+1]+=2*We.y),le[R+2]>We.z&&(le[R+2]-=2*We.z),le[R+2]<-We.z&&(le[R+2]+=2*We.z);let Lt=.45+.3*Math.sin($e*(.7+Pt[N])+dt);pt[R]=L.r*Lt,pt[R+1]=L.g*Lt,pt[R+2]=L.b*Lt;let Te=N*6;Qn.fill(0,Te,Te+6)}ha=ha.filter((N,R)=>{N.t+=M;let Q=!1;return N.ids.forEach((rt,ut)=>{let dt=rt*3,Ft=Math.min(1,Math.max(0,(N.t-ut*N.lag)/N.dur)),Yt=Ft<.5?4*Ft*Ft*Ft:1-Math.pow(-2*Ft+2,3)/2,Tt=N.P,Lt=ua(Tt[0][0],Tt[1][0],Tt[2][0],Tt[3][0],Yt),Te=ua(Tt[0][1],Tt[1][1],Tt[2][1],Tt[3][1],Yt),fe=ua(Tt[0][2],Tt[1][2],Tt[2][2],Tt[3][2],Yt);Fe[dt]=(Lt-le[dt])/Math.max(M,.001),Fe[dt+1]=(Te-le[dt+1])/Math.max(M,.001),Fe[dt+2]=(fe-le[dt+2])/Math.max(M,.001),le[dt]=Lt,le[dt+1]=Te,le[dt+2]=fe;let Ze=Math.sin(Math.PI*(ut+.5)/N.ids.length),Ul=Math.sin(Math.PI*Ft),Gi=(.2+(1+Ze*1.3)*Ul)*(Ft>0?1:.15);pt[dt]=L.r*Gi,pt[dt+1]=L.g*Gi,pt[dt+2]=L.b*Gi,Ft<1?Q=!0:N.t-ut*N.lag>N.dur+.1&&(Hi[rt]=-1,Fe[dt]*=.15,Fe[dt+1]*=.15,Fe[dt+2]*=.15);let Si=rt*6,Uh=.12*Ul;Kn[Si+3]=0,Qn[Si]=L.r*Gi*.8,Qn[Si+1]=L.g*Gi*.8,Qn[Si+2]=L.b*Gi*.8,Qn[Si+3]=Qn[Si+4]=Qn[Si+5]=0,le[dt]-=0,N._tl=Uh}),Q||N.ids.forEach(rt=>{Hi[rt]=-1}),Q});for(let N=0;N<j;N++){let R=N*3,Q=le[R],rt=le[R+1],ut=le[R+2],dt=S.x+vi.x*Q+yi.x*rt+Mi.x*ut,Ft=S.y+vi.y*Q+yi.y*rt+Mi.y*ut,Yt=S.z+vi.z*Q+yi.z*rt+Mi.z*ut;et[R]=dt,et[R+1]=Ft,et[R+2]=Yt;let Tt=N*6;Kn[Tt]=dt,Kn[Tt+1]=Ft,Kn[Tt+2]=Yt;let Lt=Hi[N]>=0?.07:0,Te=Fe[R]*Lt,fe=Fe[R+1]*Lt,Ze=Fe[R+2]*Lt;Kn[Tt+3]=dt-(vi.x*Te+yi.x*fe+Mi.x*Ze),Kn[Tt+4]=Ft-(vi.y*Te+yi.y*fe+Mi.y*Ze),Kn[Tt+5]=Yt-(vi.z*Te+yi.z*fe+Mi.z*Ze)}st.attributes.position.needsUpdate=!0,st.attributes.color.needsUpdate=!0,bs.attributes.position.needsUpdate=!0,bs.attributes.color.needsUpdate=!0}let Ll=performance.now(),$e=0,da=0;function Dl(M){let S=window.__dt||Math.min(.05,(M-Ll)/1e3);if(Ll=M,$e+=S,V.running&&!f()&&(V.time=(M-V.t0)/1e3,a("time").textContent=V.time.toFixed(1)),V.attract){let E=Math.sin($e*.35)*.5+.5;I.quaternion.copy(gt).premultiply(new Me().setFromAxisAngle(tt,(1-E)*1.6+Math.sin($e*.23)*.2))}else if(!V.won&&!f()){let E=1.4*S;if((It.has("arrowleft")||It.has("a"))&&ht(tt,-E),(It.has("arrowright")||It.has("d"))&&ht(tt,E),(V.stage.tier>=2||c.free)&&((It.has("arrowup")||It.has("w"))&&ht(Z,-E),(It.has("arrowdown")||It.has("s"))&&ht(Z,E)),(V.stage.tier>=3||c.free)&&(It.has("q")&&ht($,E),It.has("e")&&ht($,-E),bt&&ht($,bt*E)),!qe.size){let R=Math.exp(-5*S);V.vel=V.vel.map(Q=>Q*R),Math.abs(V.vel[0])>1e-4&&ht(tt,V.vel[0]),Math.abs(V.vel[1])>1e-4&&ht(Z,V.vel[1])}if(V.resetAnim){let R=V.resetAnim;R.t=Math.min(1,R.t+S/.9);let Q=R.t*R.t*(3-2*R.t);I.quaternion.copy(R.from).slerp(V.q0,Q),R.t>=1&&(V.resetAnim=null)}if(V.oracleT>0){V.oracleT=Math.max(0,V.oracleT-S);let R=a("oracleBar");R&&(R.style.transform=`scaleX(${V.oracleT/xe})`),V.oracleT===0&&me()}V.score=qn(I.quaternion),Th(V.score);let L=I.quaternion.angleTo(ki())<.19;if(V.near=V.score>.9||L,V.near&&!qe.size&&!It.size&&!bt&&Re.idle>.3){let R=ki();I.quaternion.slerp(R,1-Math.exp(-2.2*S)),I.quaternion.angleTo(R)<.02&&(I.quaternion.copy(R),Sl())}V.score>.985&&Sl();let N=Math.round(V.score*100);a("meterFill").style.transform=`scaleX(${V.score})`,a("meterNum").textContent=N+"%",a("meter").classList.toggle("hot",V.near)}if(V.won&&V.winT>=0){V.winT+=S*(l?3:1);let E=V.winT;if(E<.5&&I.quaternion.copy(V.winFrom).slerp(V.winTo,1-Math.pow(1-E/.5,3)),_t.emissiveIntensity=Math.min(.32,E*.6)*(E<2.4?1:Math.max(.25,1-(E-2.4)*.3)),Nt.intensity=_t.emissiveIntensity*14,E>.5&&E<1.5){let L=(E-.5)/1,N=L*L*(3-2*L);for(let R of Qt)R.w=R.w0*(1-N),R.col=R.fin,R.s=1;it.emissive.set(v[V.stage.sp%8]),it.emissiveIntensity=N*.25,fi(),L>.02&&!V.burst1&&(V.burst1=!0)}if(E>=1.5&&!V.burst2&&(V.burst2=!0,_e(ft),El(0)),E>1.5){let L=Math.min(1,(E-1.5)/.7),N=1-Math.pow(1-L,3);I.quaternion.copy(V.winTo).slerp(V.faceQ,N),I.position.copy(ft).add(new O(0,Math.abs(Math.sin((E-1.5)*5))*.25*N,0)).addScaledVector(Y.position.clone().sub(ft).normalize(),N*.5),I.scale.setScalar(1+N*.08)}if(E>1.9&&V.morph){Qt!==V.morph&&(Qt=V.morph);let L=Math.min(1,(E-1.9)/.8),N=L*L*(3-2*L);for(let R of Qt)R.x=R.fx+(R.tx-R.fx)*N,R.y=R.fy+(R.ty-R.fy)*N,R.w=0,R.s=R.s0+(R.s1-R.s0)*N,R.col=N>.5?m.col:R.fin;it.emissive.set(N>.5?m.col:v[V.stage.sp%8]),fi(),L>=1&&!V.meShown&&(V.meShown=!0,Ye(587.33,0,.1,1.2),Ye(784,.1,.08,1.4))}E>3&&!V.shown&&(V.shown=!0,xh())}if(V.won||(V.burst1=V.burst2=V.shown=V.meShown=!1,it.emissiveIntensity=0),Ht.visible){let E=0;for(let L=0;L<Mt;L++){if(Kt[L]<=0){Bt[L*3+1]=-99;continue}E++,Kt[L]-=S;let N=Et[L];N.y-=2.2*S,N.multiplyScalar(Math.exp(-1.2*S)),Bt[L*3]+=N.x*S,Bt[L*3+1]+=N.y*S,Bt[L*3+2]+=N.z*S}Ot.attributes.position.needsUpdate=!0,E||(Ht.visible=!1)}if(!l){let E=1+Math.sin($e*7.3)*.025+Math.sin($e*12.1)*.015;Se.intensity=3.2*E,Ut.material.emissiveIntensity=2.2*E,g.uniforms.uAmt.value=.09*E,Y.position.x+=Math.sin($e*.25)*8e-4,Y.lookAt(V.look)}Ch(S),Lh(S),b.render(P,Y),da=requestAnimationFrame(Dl)}function Dh(){Jn()}function Js(){f()?(V.running&&(V.time=(performance.now()-V.t0)/1e3,V.running=!1,V.resume=!0),qe.clear(),It.clear(),bt=0,U=null,zt&&zt.state==="running"&&(c.ext||c.hid)&&zt.suspend().catch(()=>{})):V.resume&&(V.resume=!1,V.won||Vt()),!(c.ext||c.hid)&&zt&&zt.state==="suspended"&&!c.mute&&zt.resume().catch(()=>{})}return r(document,"visibilitychange",()=>{c.hid=document.hidden,Js()}),Yn(0),V.attract=!0,pe(0),wl(),a("hud").hidden=!0,da=requestAnimationFrame(Dl),Rt().catch(()=>{}),window.__kage={G:V,S:c,ECON:p,STAGES:w,makeStage:Yn,iou:()=>qn(I.quaternion),solve:()=>{I.quaternion.copy(gt)},obj:I,useHint:Pe,startGame:oa,rotate:ht,nearAng:()=>I.quaternion.angleTo(ki()),ME:m},{setPaused(M){c.ext=!!M,Js()},setFriend(M){let S=M&&M.rows,E=[];S&&S.forEach((L,N)=>{for(let R=0;R<16;R++)L[R]==="#"&&E.push([R,N])}),m.mask=E.length>=12?E:null,V.stage&&V.stage.me&&!V.won?Yn(V.st):_i()},destroy(){cancelAnimationFrame(da),s.forEach(clearInterval),n.forEach(clearTimeout),e.forEach(M=>M());try{zt&&zt.close()}catch{}b.dispose(),i.innerHTML="",window.__kage&&delete window.__kage}}}export{Vg as createGame};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
