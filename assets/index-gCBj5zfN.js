const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-6c8v8erw.js","assets/index-COBN-aVN.js","assets/index-BNXHsM2Y.js","assets/test-mode-easter-egg-BfUbZPBp.js","assets/save-C8r8sQFB.js","assets/index-CVH0YhY8.js"])))=>i.map(i=>d[i]);
import{r as z_,C as Mi,_ as Ja}from"./index-COBN-aVN.js";import{_ as Qa,X as Pt,J as j,Z as D,O as Nu,B as St,b as Et,i as yn,W as Ae,V as Tt,a as vi,f as Ze,k as co,t as wv,e as G_,d as id,r as Il,j as Lt,u as bn,F as De,G as _n,S as ci,Y as Ev,n as Fs,M as Xt,K as lo,m as Sh,R as Da,D as If,A as In,c as Nl,h as ml,H as Gr,U as Qs,E as Dl,a1 as Av,v as sd,a2 as H_,o as od,p as bt,T as ca,C as Yt,g as gl,$ as V_,I as Tv,L as Rv,z as Du,P as sn,q as dc,a0 as W_,w as st,x as q_,y as hc,l as rd,s as yi,Q as X_,N as $_}from"./save-C8r8sQFB.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Yn={pitch:0,roll:0,brake:!1,boost:!1,isInputActive:!1,activeInputType:"none"};let kl=!1;function Lv(){kl=!0}function j_(){return kl?(kl=!1,!0):!1}function Nf(){kl=!1}let Ol=!1;function Cv(){Ol=!0}function Y_(){return Ol?(Ol=!1,!0):!1}function ku(){Ol=!1}const xt={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};let Oi=!1;function Z_(){Oi=!1}function K_(){return Oi}function J_(){const n=(xt.down?1:0)-(xt.up?1:0),e=(xt.right?1:0)-(xt.left?1:0),t=xt.up||xt.down||xt.left||xt.right,i=xt.brake||xt.boost||xt.oneShot;return{pitch:n,roll:e,brake:xt.brake,boost:xt.boost,isActive:t||i}}function Pv(n,e){switch(n.key){case"ArrowUp":case"w":case"W":xt.up=e,Oi=!0;break;case"ArrowDown":case"s":case"S":xt.down=e,Oi=!0;break;case"ArrowLeft":case"a":case"A":xt.left=e,Oi=!0;break;case"ArrowRight":case"d":case"D":xt.right=e,Oi=!0;break;case" ":case"Spacebar":xt.brake=e&&Nu(),Oi=!0,n.preventDefault();break;case"Shift":e&&!xt.boost&&Cv(),xt.boost=e,Oi=!0;break;case"f":case"F":e&&!xt.oneShot&&Lv(),xt.oneShot=e,Oi=!0;break;case"t":case"T":e&&(j.testMode=!j.testMode,Qa(),Pt());break;case"b":case"B":if(e&&j.testMode){const t=St.oneShot.tiers.length-1,i=D.boosterOverride!=null?D.boosterOverride:4;D.boosterOverride=(i+1)%(t+1)}break}}window.addEventListener("keydown",n=>Pv(n,!0));window.addEventListener("keyup",n=>Pv(n,!1));function yo(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}const Iv={"glider-wind":{src:"ambient/wind-glide.mp3",channel:"sfx",mode:"loop",gain:.3,filtered:!0},"ocean-surf-bed":{src:"ambient/ocean-waves.mp3",channel:"sfx",mode:"loop",gain:.55},"forest-bed":{src:"ambient/forest-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},"thermal-lift":{src:"ambient/thermal-lift.mp3",channel:"sfx",mode:"loop",gain:.6},"city-bed":{src:"ambient/city-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},touchdown:{src:"sfx/tyres-touchdown.mp3",channel:"sfx",mode:"oneshot",gain:.13},crash:{src:"sfx/crash.mp3",channel:"sfx",mode:"oneshot",gain:.8},"gear-deploy":{src:"sfx/gear-extend.mp3",channel:"sfx",mode:"oneshot",gain:.16},"spend-points":{src:"sfx/spend-points.mp3",channel:"sfx",mode:"oneshot",gain:.6},"buy-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.7},"spend-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.6,rate:.82},"ring-first":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.18},"ring-recollect":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.08,rate:.92},"one-shot-boost":{src:"sfx/boost.mp3",channel:"sfx",mode:"oneshot",gain:.7},"landing-success":{src:"sfx/success.mp3",channel:"sfx",mode:"oneshot",gain:.3},denied:{src:"sfx/denied.mp3",channel:"sfx",mode:"oneshot",gain:.45},"ui-confirm":{src:"sfx/ui-click.mp3",channel:"sfx",mode:"oneshot",gain:.35},"golden-activate":{src:"sfx/ui-click.mp3",channel:"sfx",mode:"oneshot",gain:.45},"menu-music":{src:"music/menu-music.mp3",channel:"music",mode:"stream",gain:1}},Nv="teide-settings",Dv=100,Df=3e3,kv=1e4,kf=1e7,Ov={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:Df,samples:kf}},ka={low:{segments:600,samples:5e5},standard:{segments:1200,samples:12e5},high:{segments:1200,samples:2e6}},Q_={low:1,standard:1.25,high:1.5},eb=1.25,tb=2,nb={...Ov.standard},ib={...ka.standard};function ad(){return{...yo()?ib:nb,language:null,onboardingDone:!1,tutorialDone:!1,invertPitch:!0,controlMode:"touch",gyroSensitivity:yn.sensDefault,musicVolume:Et.musicVolume,musicMuted:!1,sfxVolume:Et.sfxVolume,sfxMuted:!1}}function ht(){try{const n=localStorage.getItem(Nv);if(!n)return ad();const e=JSON.parse(n);return sb({...ad(),...e})}catch{return ad()}}function li(n){try{localStorage.setItem(Nv,JSON.stringify(Uv(n)))}catch{}}function Uv(n){return{...n,segments:Math.max(Dv,Math.min(Df,n.segments|0)),samples:Math.max(kv,Math.min(kf,n.samples|0))}}function sb(n){if(n=Uv(n),!yo())return n;const e=ka.high;return n.segments>e.segments||n.samples>e.samples?(console.info(`[settings] Mobile clamp: persisted segments=${n.segments} samples=${n.samples} exceed mobile-high (${e.segments}/${e.samples}). Using mobile-standard for this session.`),{...ka.standard,language:n.language,onboardingDone:n.onboardingDone,tutorialDone:n.tutorialDone,invertPitch:n.invertPitch,controlMode:n.controlMode,gyroSensitivity:n.gyroSensitivity,musicVolume:n.musicVolume,musicMuted:n.musicMuted,sfxVolume:n.sfxVolume,sfxMuted:n.sfxMuted}):n}function ob(){const n=window.devicePixelRatio||1;if(!yo())return Math.min(n,tb);const e=ht();let t=null;for(const[s,o]of Object.entries(ka))if(o.segments===e.segments&&o.samples===e.samples){t=s;break}const i=t&&Q_[t]||eb;return Math.min(n,i)}function rb(){const n=ht(),e=new URLSearchParams(window.location.search),t=parseInt(e.get("segments"),10),i=parseInt(e.get("samples"),10);return Number.isFinite(t)&&t>=Dv&&t<=Df&&(n.segments=t),Number.isFinite(i)&&i>=kv&&i<=kf&&(n.samples=i),Ae.segments=n.segments,Tt.sampleCount=n.samples,n}function ab(){const n=yo()?ka:Ov;return Object.entries(n).map(([e,t])=>({name:e,...t}))}function cb(){return!!ht().onboardingDone}function lb(n=!0){const e=ht();e.onboardingDone=!!n,li(e)}function ub(){return!!ht().tutorialDone}function db(n=!0){const e=ht();e.tutorialDone=!!n,li(e)}function hb(){const n=ht().invertPitch;return n===void 0?!0:!!n}function fb(n){const e=ht();e.invertPitch=!!n,li(e)}function pb(){return ht().controlMode==="gyro"?"gyro":"touch"}function Op(n){const e=ht();e.controlMode=n==="gyro"?"gyro":"touch",li(e)}function Of(){const n=Number(ht().gyroSensitivity);return Number.isFinite(n)?Math.max(yn.sensMin,Math.min(yn.sensMax,n)):yn.sensDefault}function mb(n){const e=ht(),t=Number(n);e.gyroSensitivity=Number.isFinite(t)?Math.max(yn.sensMin,Math.min(yn.sensMax,t)):yn.sensDefault,li(e)}const Ou=(n,e)=>(n=Number(n),Number.isFinite(n)?Math.max(0,Math.min(1,n)):e);function gb(){return Ou(ht().musicVolume,Et.musicVolume)}function vb(n){const e=ht();e.musicVolume=Ou(n,Et.musicVolume),li(e)}function Fv(){return!!ht().musicMuted}function Bv(n){const e=ht();e.musicMuted=!!n,li(e)}function yb(){return Ou(ht().sfxVolume,Et.sfxVolume)}function xb(n){const e=ht();e.sfxVolume=Ou(n,Et.sfxVolume),li(e)}function zv(){return!!ht().sfxMuted}function Gv(n){const e=ht();e.sfxMuted=!!n,li(e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="160",_b=0,Up=1,bb=2,Hv=1,Sb=2,ki=3,ys=0,wn=1,Kt=2,ds=0,ar=1,Ul=2,Fp=3,Bp=4,Mb=5,Bs=100,wb=101,Eb=102,zp=103,Gp=104,Ab=200,Tb=201,Rb=202,Lb=203,Mh=204,wh=205,Cb=206,Pb=207,Ib=208,Nb=209,Db=210,kb=211,Ob=212,Ub=213,Fb=214,Bb=0,zb=1,Gb=2,Fl=3,Hb=4,Vb=5,Wb=6,qb=7,Ff=0,Xb=1,$b=2,hs=0,jb=1,Yb=2,Zb=3,Kb=4,Jb=5,Qb=6,Vv=300,br=301,Sr=302,Eh=303,Ah=304,Uu=306,Th=1e3,ti=1001,Rh=1002,gn=1003,Hp=1004,cd=1005,zn=1006,eS=1007,Oa=1008,fs=1009,tS=1010,nS=1011,Bf=1012,Wv=1013,rs=1014,as=1015,Ua=1016,qv=1017,Xv=1018,eo=1020,iS=1021,ni=1023,sS=1024,oS=1025,to=1026,Mr=1027,rS=1028,$v=1029,aS=1030,jv=1031,Yv=1033,ld=33776,ud=33777,dd=33778,hd=33779,Vp=35840,Wp=35841,qp=35842,Xp=35843,Zv=36196,$p=37492,jp=37496,Yp=37808,Zp=37809,Kp=37810,Jp=37811,Qp=37812,em=37813,tm=37814,nm=37815,im=37816,sm=37817,om=37818,rm=37819,am=37820,cm=37821,fd=36492,lm=36494,um=36495,cS=36283,dm=36284,hm=36285,fm=36286,Kv=3e3,no=3001,lS=3200,uS=3201,Jv=0,dS=1,Hn="",Ot="srgb",qi="srgb-linear",zf="display-p3",Fu="display-p3-linear",Bl="linear",dt="srgb",zl="rec709",Gl="p3",Ao=7680,pm=519,hS=512,fS=513,pS=514,Qv=515,mS=516,gS=517,vS=518,yS=519,mm=35044,gm="300 es",Lh=1035,Bi=2e3,Hl=2001;class kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vm=1234567;const cr=Math.PI/180,Fa=180/Math.PI;function xo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function Gf(n,e){return(n%e+e)%e}function xS(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _S(n,e,t){return n!==e?(t-n)/(e-n):0}function ga(n,e,t){return(1-t)*n+t*e}function bS(n,e,t,i){return ga(n,e,1-Math.exp(-t*i))}function SS(n,e=1){return e-Math.abs(Gf(n,e*2)-e)}function MS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function wS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ES(n,e){return n+Math.floor(Math.random()*(e-n+1))}function AS(n,e){return n+Math.random()*(e-n)}function TS(n){return n*(.5-Math.random())}function RS(n){n!==void 0&&(vm=n);let e=vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function LS(n){return n*cr}function CS(n){return n*Fa}function Ch(n){return(n&n-1)===0&&n!==0}function PS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function IS(n,e,t,i,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),l=o((e+i)/2),u=r((e+i)/2),d=o((e-i)/2),f=r((e-i)/2),m=o((i-e)/2),v=r((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*v,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*v,a*l);break;case"ZYZ":n.set(c*v,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $o(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Xi={DEG2RAD:cr,RAD2DEG:Fa,generateUUID:xo,clamp:Zt,euclideanModulo:Gf,mapLinear:xS,inverseLerp:_S,lerp:ga,damp:bS,pingpong:SS,smoothstep:MS,smootherstep:wS,randInt:ES,randFloat:AS,randFloatSpread:TS,seededRandom:RS,degToRad:LS,radToDeg:CS,isPowerOfTwo:Ch,ceilPowerOfTwo:PS,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:IS,normalize:hn,denormalize:$o};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,o,r,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l)}set(e,t,i,s,o,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],v=i[8],y=s[0],p=s[3],h=s[6],_=s[1],g=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return o[0]=r*y+a*_+c*R,o[3]=r*p+a*g+c*E,o[6]=r*h+a*b+c*A,o[1]=l*y+u*_+d*R,o[4]=l*p+u*g+d*E,o[7]=l*h+u*b+d*A,o[2]=f*y+m*_+v*R,o[5]=f*p+m*g+v*E,o[8]=f*h+m*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*r-a*l,f=a*c-u*o,m=l*o-r*c,v=t*d+i*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(s*l-u*i)*y,e[2]=(a*i-s*r)*y,e[3]=f*y,e[4]=(u*t-s*c)*y,e[5]=(s*o-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(r*t-i*o)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pd.makeScale(e,t)),this}rotate(e){return this.premultiply(pd.makeRotation(-e)),this}translate(e,t){return this.premultiply(pd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pd=new Ge;function ey(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function NS(){const n=Wl("canvas");return n.style.display="block",n}const ym={};function va(n){n in ym||(ym[n]=!0,console.warn(n))}const xm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_m=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fc={[qi]:{transfer:Bl,primaries:zl,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:dt,primaries:zl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Fu]:{transfer:Bl,primaries:Gl,toReference:n=>n.applyMatrix3(_m),fromReference:n=>n.applyMatrix3(xm)},[zf]:{transfer:dt,primaries:Gl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(_m),fromReference:n=>n.applyMatrix3(xm).convertLinearToSRGB()}},DS=new Set([qi,Fu]),ot={enabled:!0,_workingColorSpace:qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!DS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=fc[e].toReference,s=fc[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return fc[n].primaries},getTransfer:function(n){return n===Hn?Bl:fc[n].transfer}};function lr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function md(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let To;class ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{To===void 0&&(To=Wl("canvas")),To.width=e.width,To.height=e.height;const i=To.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=To}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=lr(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(lr(t[i]/255)*255):t[i]=lr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kS=0;class ny{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=xo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(gd(s[r].image)):o.push(gd(s[r]))}else o=gd(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function gd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ty.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OS=0;class Dn extends kr{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,i=ti,s=ti,o=zn,r=Oa,a=ni,c=fs,l=Dn.DEFAULT_ANISOTROPY,u=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=xo(),this.name="",this.source=new ny(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===no?Ot:Hn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?no:Kv}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===no?Ot:Hn}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Vv;Dn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,s=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],v=c[9],y=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,b=(m+1)/2,R=(h+1)/2,E=(u+f)/4,A=(d+y)/4,U=(v+p)/4;return g>b&&g>R?g<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(g),s=E/i,o=A/i):b>R?b<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),i=E/s,o=U/s):R<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),i=A/o,s=U/o),this.set(i,s,o,t),this}let _=Math.sqrt((p-v)*(p-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((l+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class US extends kr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===no?Ot:Hn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Dn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ny(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends US{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class iy extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class FS extends Dn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=o[r+0],m=o[r+1],v=o[r+2],y=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=y;return}if(d!==y||c!==f||l!==m||u!==v){let p=1-a;const h=c*f+l*m+u*v+d*y,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const R=Math.sqrt(g),E=Math.atan2(R,h*_);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const b=a*_;if(c=c*p+f*b,l=l*p+m*b,u=u*p+v*b,d=d*p+y*b,p===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=o[r],f=o[r+1],m=o[r+2],v=o[r+3];return e[t]=a*v+u*d+c*m-l*f,e[t+1]=c*v+u*f+l*d-a*m,e[t+2]=l*v+u*m+a*f-c*d,e[t+3]=u*v-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(o/2),f=c(i/2),m=c(s/2),v=c(o/2);switch(r){case"XYZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"YZX":this._x=f*u*d+l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d-f*m*v;break;case"XZY":this._x=f*u*d-l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(r-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(r-s)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(o),i*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*i),u=2*(a*t-o*s),d=2*(o*i-r*t);return this.x=t+c*l+r*d-a*u,this.y=i+c*u+a*l-o*d,this.z=s+c*d+o*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vd=new I,bm=new Ct;class _o{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Zn):Zn.fromBufferAttribute(o,r),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pc.copy(i.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),mc.subVectors(this.max,Hr),Ro.subVectors(e.a,Hr),Lo.subVectors(e.b,Hr),Co.subVectors(e.c,Hr),Yi.subVectors(Lo,Ro),Zi.subVectors(Co,Lo),Rs.subVectors(Ro,Co);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-Rs.z,Rs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,Rs.z,0,-Rs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-Rs.y,Rs.x,0];return!yd(t,Ro,Lo,Co,mc)||(t=[1,0,0,0,1,0,0,0,1],!yd(t,Ro,Lo,Co,mc))?!1:(gc.crossVectors(Yi,Zi),t=[gc.x,gc.y,gc.z],yd(t,Ro,Lo,Co,mc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new I,new I,new I,new I,new I,new I,new I,new I],Zn=new I,pc=new _o,Ro=new I,Lo=new I,Co=new I,Yi=new I,Zi=new I,Rs=new I,Hr=new I,mc=new I,gc=new I,Ls=new I;function yd(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Ls.fromArray(n,o);const a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=e.dot(Ls),l=t.dot(Ls),u=i.dot(Ls);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const BS=new _o,Vr=new I,xd=new I;class Ms{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):BS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(xd)),this.expandByPoint(Vr.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new I,_d=new I,vc=new I,Ki=new I,bd=new I,yc=new I,Sd=new I;class Hf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){_d.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(_d);const o=e.distanceTo(t)*.5,r=-this.direction.dot(vc),a=Ki.dot(this.direction),c=-Ki.dot(vc),l=Ki.lengthSq(),u=Math.abs(1-r*r);let d,f,m,v;if(u>0)if(d=r*c-a,f=r*a-c,v=o*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,m=d*(d+r*f+2*a)+f*(r*d+f+2*c)+l}else f=o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),m=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-o,-c),o),m=f*(f+2*c)+l):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),m=-d*d+f*(f+2*c)+l);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_d).addScaledVector(vc,f),m}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),s=Li.dot(Li)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,o){bd.subVectors(t,e),yc.subVectors(i,e),Sd.crossVectors(bd,yc);let r=this.direction.dot(Sd),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ki.subVectors(this.origin,e);const c=a*this.direction.dot(yc.crossVectors(Ki,yc));if(c<0)return null;const l=a*this.direction.dot(bd.cross(Ki));if(l<0||c+l>r)return null;const u=-a*Ki.dot(Sd);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p)}set(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=o,h[5]=r,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Po.setFromMatrixColumn(e,0).length(),o=1/Po.setFromMatrixColumn(e,1).length(),r=1/Po.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=r*u,m=r*d,v=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+v*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=v+m*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,v=l*u,y=l*d;t[0]=f+y*a,t[4]=v*a-m,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=m*a-v,t[6]=y+f*a,t[10]=r*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,v=l*u,y=l*d;t[0]=f-y*a,t[4]=-r*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=r*u,t[9]=y-f*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const f=r*u,m=r*d,v=a*u,y=a*d;t[0]=c*u,t[4]=v*l-m,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,m=r*l,v=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=v*d+m,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+v,t[10]=f-y*d}else if(e.order==="XZY"){const f=r*c,m=r*l,v=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=r*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,GS)}lookAt(e,t,i){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ji.crossVectors(i,Tn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ji.crossVectors(i,Tn)),Ji.normalize(),xc.crossVectors(Tn,Ji),s[0]=Ji.x,s[4]=xc.x,s[8]=Tn.x,s[1]=Ji.y,s[5]=xc.y,s[9]=Tn.y,s[2]=Ji.z,s[6]=xc.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],v=i[2],y=i[6],p=i[10],h=i[14],_=i[3],g=i[7],b=i[11],R=i[15],E=s[0],A=s[4],U=s[8],M=s[12],w=s[1],V=s[5],W=s[9],oe=s[13],O=s[2],q=s[6],Y=s[10],K=s[14],z=s[3],Q=s[7],ae=s[11],ue=s[15];return o[0]=r*E+a*w+c*O+l*z,o[4]=r*A+a*V+c*q+l*Q,o[8]=r*U+a*W+c*Y+l*ae,o[12]=r*M+a*oe+c*K+l*ue,o[1]=u*E+d*w+f*O+m*z,o[5]=u*A+d*V+f*q+m*Q,o[9]=u*U+d*W+f*Y+m*ae,o[13]=u*M+d*oe+f*K+m*ue,o[2]=v*E+y*w+p*O+h*z,o[6]=v*A+y*V+p*q+h*Q,o[10]=v*U+y*W+p*Y+h*ae,o[14]=v*M+y*oe+p*K+h*ue,o[3]=_*E+g*w+b*O+R*z,o[7]=_*A+g*V+b*q+R*Q,o[11]=_*U+g*W+b*Y+R*ae,o[15]=_*M+g*oe+b*K+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],y=e[7],p=e[11],h=e[15];return v*(+o*c*d-s*l*d-o*a*f+i*l*f+s*a*m-i*c*m)+y*(+t*c*m-t*l*f+o*r*f-s*r*m+s*l*u-o*c*u)+p*(+t*l*d-t*a*m-o*r*d+i*r*m+o*a*u-i*l*u)+h*(-s*a*u-t*c*d+t*a*f+s*r*d-i*r*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],y=e[13],p=e[14],h=e[15],_=d*p*l-y*f*l+y*c*m-a*p*m-d*c*h+a*f*h,g=v*f*l-u*p*l-v*c*m+r*p*m+u*c*h-r*f*h,b=u*y*l-v*d*l+v*a*m-r*y*m-u*a*h+r*d*h,R=v*d*c-u*y*c-v*a*f+r*y*f+u*a*p-r*d*p,E=t*_+i*g+s*b+o*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(y*f*o-d*p*o-y*s*m+i*p*m+d*s*h-i*f*h)*A,e[2]=(a*p*o-y*c*o+y*s*l-i*p*l-a*s*h+i*c*h)*A,e[3]=(d*c*o-a*f*o-d*s*l+i*f*l+a*s*m-i*c*m)*A,e[4]=g*A,e[5]=(u*p*o-v*f*o+v*s*m-t*p*m-u*s*h+t*f*h)*A,e[6]=(v*c*o-r*p*o-v*s*l+t*p*l+r*s*h-t*c*h)*A,e[7]=(r*f*o-u*c*o+u*s*l-t*f*l-r*s*m+t*c*m)*A,e[8]=b*A,e[9]=(v*d*o-u*y*o-v*i*m+t*y*m+u*i*h-t*d*h)*A,e[10]=(r*y*o-v*a*o+v*i*l-t*y*l-r*i*h+t*a*h)*A,e[11]=(u*a*o-r*d*o-u*i*l+t*d*l+r*i*m-t*a*m)*A,e[12]=R*A,e[13]=(u*y*s-v*d*s+v*i*f-t*y*f-u*i*p+t*d*p)*A,e[14]=(v*a*s-r*y*s-v*i*c+t*y*c+r*i*p-t*a*p)*A,e[15]=(r*d*s-u*a*s+u*i*c-t*d*c-r*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,c=e.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,u=r+r,d=a+a,f=o*l,m=o*u,v=o*d,y=r*u,p=r*d,h=a*d,_=c*l,g=c*u,b=c*d,R=i.x,E=i.y,A=i.z;return s[0]=(1-(y+h))*R,s[1]=(m+b)*R,s[2]=(v-g)*R,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(f+h))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(v+g)*A,s[9]=(p-_)*A,s[10]=(1-(f+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Po.set(s[0],s[1],s[2]).length();const r=Po.set(s[4],s[5],s[6]).length(),a=Po.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Kn.copy(this);const l=1/o,u=1/r,d=1/a;return Kn.elements[0]*=l,Kn.elements[1]*=l,Kn.elements[2]*=l,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=d,Kn.elements[9]*=d,Kn.elements[10]*=d,t.setFromRotationMatrix(Kn),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=Bi){const c=this.elements,l=2*o/(t-e),u=2*o/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,v;if(a===Bi)m=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===Hl)m=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=Bi){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(r-o),f=(t+e)*l,m=(i+s)*u;let v,y;if(a===Bi)v=(r+o)*d,y=-2*d;else if(a===Hl)v=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Po=new I,Kn=new Ke,zS=new I(0,0,0),GS=new I(1,1,1),Ji=new I,xc=new I,Tn=new I,Sm=new Ke,Mm=new Ct;class $n{constructor(e=0,t=0,i=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class sy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const wm=new I,Io=new Ct,Ci=new Ke,_c=new I,Wr=new I,VS=new I,WS=new Ct,Em=new I(1,0,0),Am=new I(0,1,0),Tm=new I(0,0,1),qS={type:"added"},XS={type:"removed"};class Ut extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new I,t=new $n,i=new Ct,s=new I(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ge}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Io.setFromAxisAngle(e,t),this.quaternion.multiply(Io),this}rotateOnWorldAxis(e,t){return Io.setFromAxisAngle(e,t),this.quaternion.premultiply(Io),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return wm.copy(e).applyQuaternion(this.quaternion),this.position.add(wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_c.copy(e):_c.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Wr,_c,this.up):Ci.lookAt(_c,Wr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Io.setFromRotationMatrix(Ci),this.quaternion.premultiply(Io.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,VS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),f=r(e.skeletons),m=r(e.animations),v=r(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new I(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new I,Pi=new I,Md=new I,Ii=new I,No=new I,Do=new I,Rm=new I,wd=new I,Ed=new I,Ad=new I;let bc=!1;class Gn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Jn.subVectors(e,t),s.cross(Jn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Jn.subVectors(s,t),Pi.subVectors(i,t),Md.subVectors(e,t);const r=Jn.dot(Jn),a=Jn.dot(Pi),c=Jn.dot(Md),l=Pi.dot(Pi),u=Pi.dot(Md),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(l*c-a*u)*f,v=(r*u-a*c)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getUV(e,t,i,s,o,r,a,c){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),this.getInterpolation(e,t,i,s,o,r,a,c)}static getInterpolation(e,t,i,s,o,r,a,c){return this.getBarycoord(e,t,i,s,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ii.x),c.addScaledVector(r,Ii.y),c.addScaledVector(a,Ii.z),c)}static isFrontFacing(e,t,i,s){return Jn.subVectors(i,t),Pi.subVectors(e,t),Jn.cross(Pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,o){return bc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),bc=!0),Gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}getInterpolation(e,t,i,s,o){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;No.subVectors(s,i),Do.subVectors(o,i),wd.subVectors(e,i);const c=No.dot(wd),l=Do.dot(wd);if(c<=0&&l<=0)return t.copy(i);Ed.subVectors(e,s);const u=No.dot(Ed),d=Do.dot(Ed);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(No,r);Ad.subVectors(e,o);const m=No.dot(Ad),v=Do.dot(Ad);if(v>=0&&m<=v)return t.copy(o);const y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(Do,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return Rm.subVectors(o,s),a=(d-u)/(d-u+(m-v)),t.copy(s).addScaledVector(Rm,a);const h=1/(p+y+f);return r=y*h,a=f*h,t.copy(i).addScaledVector(No,r).addScaledVector(Do,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Td(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Gf(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=Td(r,o,e+1/3),this.g=Td(r,o,e),this.b=Td(r,o,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Ot){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=oy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=md(e.r),this.g=md(e.g),this.b=md(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return ot.fromWorkingColorSpace(nn.copy(this),e),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,o=nn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ot){ot.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Sc);const i=ga(Qi.h,Sc.h,t),s=ga(Qi.s,Sc.s,t),o=ga(Qi.l,Sc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ee;Ee.NAMES=oy;let $S=0;class bo extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=ar,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=wh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mh&&(i.blendSrc=this.blendSrc),this.blendDst!==wh&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jn extends bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,Mc=new pe;class Dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mc.fromBufferAttribute(this,t),Mc.applyMatrix3(e),this.setXY(t,Mc.x,Mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$o(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$o(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$o(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$o(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),o=hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class ry extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ay extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let jS=0;const Un=new Ke,Rd=new Ut,ko=new I,Rn=new _o,qr=new _o,Ht=new I;class gt extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ey(e)?ay:ry)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Ge().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(Rn.min,qr.min),Rn.expandByPoint(Ht),Ht.addVectors(Rn.max,qr.max),Rn.expandByPoint(Ht)):(Rn.expandByPoint(qr.min),Rn.expandByPoint(qr.max))}Rn.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Ht.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(ko.fromBufferAttribute(e,l),Ht.add(ko)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,o=t.normal.array,r=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new I,u[w]=new I;const d=new I,f=new I,m=new I,v=new pe,y=new pe,p=new pe,h=new I,_=new I;function g(w,V,W){d.fromArray(s,w*3),f.fromArray(s,V*3),m.fromArray(s,W*3),v.fromArray(r,w*2),y.fromArray(r,V*2),p.fromArray(r,W*2),f.sub(d),m.sub(d),y.sub(v),p.sub(v);const oe=1/(y.x*p.y-p.x*y.y);isFinite(oe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(oe),_.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(oe),l[w].add(h),l[V].add(h),l[W].add(h),u[w].add(_),u[V].add(_),u[W].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,O=W.count;for(let q=oe,Y=oe+O;q<Y;q+=3)g(i[q+0],i[q+1],i[q+2])}const R=new I,E=new I,A=new I,U=new I;function M(w){A.fromArray(o,w*3),U.copy(A);const V=l[w];R.copy(V),R.sub(A.multiplyScalar(A.dot(V))).normalize(),E.crossVectors(U,V);const oe=E.dot(u[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=oe}for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,O=W.count;for(let q=oe,Y=oe+O;q<Y;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,y),r.fromBufferAttribute(t,p),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let h=0;h<u;h++)f[v++]=l[m++]}return new Dt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Ke,Cs=new Hf,wc=new Ms,Cm=new I,Oo=new I,Uo=new I,Fo=new I,Ld=new I,Ec=new I,Ac=new pe,Tc=new pe,Rc=new pe,Pm=new I,Im=new I,Nm=new I,Lc=new I,Cc=new I;class nt extends Ut{constructor(e=new gt,t=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){Ec.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(Ld.fromBufferAttribute(d,e),r?Ec.addScaledVector(Ld,u):Ec.addScaledVector(Ld.sub(t),u))}t.add(Ec)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(o),Cs.copy(e.ray).recast(e.near),!(wc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(wc,Cm)===null||Cs.origin.distanceToSquared(Cm)>(e.far-e.near)**2))&&(Lm.copy(o).invert(),Cs.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&Cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,y=f.length;v<y;v++){const p=f[v],h=r[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=a.getX(b),A=a.getX(b+1),U=a.getX(b+2);s=Pc(this,h,e,i,l,u,d,E,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,h=y;p<h;p+=3){const _=a.getX(p),g=a.getX(p+1),b=a.getX(p+2);s=Pc(this,r,e,i,l,u,d,_,g,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,y=f.length;v<y;v++){const p=f[v],h=r[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=b,A=b+1,U=b+2;s=Pc(this,h,e,i,l,u,d,E,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=v,h=y;p<h;p+=3){const _=p,g=p+1,b=p+2;s=Pc(this,r,e,i,l,u,d,_,g,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function YS(n,e,t,i,s,o,r,a){let c;if(e.side===wn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,e.side===ys,a),c===null)return null;Cc.copy(a),Cc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Cc);return l<t.near||l>t.far?null:{distance:l,point:Cc.clone(),object:n}}function Pc(n,e,t,i,s,o,r,a,c,l){n.getVertexPosition(a,Oo),n.getVertexPosition(c,Uo),n.getVertexPosition(l,Fo);const u=YS(n,e,t,i,Oo,Uo,Fo,Lc);if(u){s&&(Ac.fromBufferAttribute(s,a),Tc.fromBufferAttribute(s,c),Rc.fromBufferAttribute(s,l),u.uv=Gn.getInterpolation(Lc,Oo,Uo,Fo,Ac,Tc,Rc,new pe)),o&&(Ac.fromBufferAttribute(o,a),Tc.fromBufferAttribute(o,c),Rc.fromBufferAttribute(o,l),u.uv1=Gn.getInterpolation(Lc,Oo,Uo,Fo,Ac,Tc,Rc,new pe),u.uv2=u.uv1),r&&(Pm.fromBufferAttribute(r,a),Im.fromBufferAttribute(r,c),Nm.fromBufferAttribute(r,l),u.normal=Gn.getInterpolation(Lc,Oo,Uo,Fo,Pm,Im,Nm,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Gn.getNormal(Oo,Uo,Fo,d.normal),u.face=d}return u}class rn extends gt{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,r,o,0),v("z","y","x",1,-1,i,t,-e,r,o,1),v("x","z","y",1,1,e,i,t,s,r,2),v("x","z","y",1,-1,e,i,-t,s,r,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function v(y,p,h,_,g,b,R,E,A,U,M){const w=b/A,V=R/U,W=b/2,oe=R/2,O=E/2,q=A+1,Y=U+1;let K=0,z=0;const Q=new I;for(let ae=0;ae<Y;ae++){const ue=ae*V-oe;for(let ye=0;ye<q;ye++){const te=ye*w-W;Q[y]=te*_,Q[p]=ue*g,Q[h]=O,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[p]=0,Q[h]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ye/A),d.push(1-ae/U),K+=1}}for(let ae=0;ae<U;ae++)for(let ue=0;ue<A;ue++){const ye=f+ue+q*ae,te=f+ue+q*(ae+1),k=f+(ue+1)+q*(ae+1),N=f+(ue+1)+q*ae;c.push(ye,te,N),c.push(te,k,N),z+=6}a.addGroup(m,z,M),m+=z,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const s in i)e[s]=i[s]}return e}function ZS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cy(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}const KS={clone:wr,merge:fn};var JS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JS,this.fragmentShader=QS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=ZS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ly extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Cn extends ly{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(cr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bo=-90,zo=1;class eM extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Bo,zo,e,t);s.layers=this.layers,this.add(s);const o=new Cn(Bo,zo,e,t);o.layers=this.layers,this.add(o);const r=new Cn(Bo,zo,e,t);r.layers=this.layers,this.add(r);const a=new Cn(Bo,zo,e,t);a.layers=this.layers,this.add(a);const c=new Cn(Bo,zo,e,t);c.layers=this.layers,this.add(c);const l=new Cn(Bo,zo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class uy extends Dn{constructor(e,t,i,s,o,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tM extends uo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===no?Ot:Hn),this.texture=new uy(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),o=new xs({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:ds});o.uniforms.tEquirect.value=t;const r=new nt(s,o),a=t.minFilter;return t.minFilter===Oa&&(t.minFilter=zn),new eM(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const Cd=new I,nM=new I,iM=new Ge;class ks{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Cd.subVectors(i,t).cross(nM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Cd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iM.getNormalMatrix(e),s=this.coplanarPoint(Cd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new Ms,Ic=new I;class Vf{constructor(e=new ks,t=new ks,i=new ks,s=new ks,o=new ks,r=new ks){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],y=s[10],p=s[11],h=s[12],_=s[13],g=s[14],b=s[15];if(i[0].setComponents(c-o,f-l,p-m,b-h).normalize(),i[1].setComponents(c+o,f+l,p+m,b+h).normalize(),i[2].setComponents(c+r,f+u,p+v,b+_).normalize(),i[3].setComponents(c-r,f-u,p-v,b-_).normalize(),i[4].setComponents(c-a,f-d,p-y,b-g).normalize(),t===Bi)i[5].setComponents(c+a,f+d,p+y,b+g).normalize();else if(t===Hl)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ic.x=s.normal.x>0?e.max.x:e.min.x,Ic.y=s.normal.y>0?e.max.y:e.min.y,Ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dy(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function sM(n,e){const t=e.isWebGL2,i=new WeakMap;function s(l,u){const d=l.array,f=l.usage,m=d.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,d,f),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function o(l,u,d){const f=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&v.length===0&&n.bufferSubData(d,0,f),v.length!==0){for(let y=0,p=v.length;y<p;y++){const h=v[y];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);if(d===void 0)i.set(l,s(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,l,u),d.version=l.version}}return{get:r,remove:a,update:c}}class So extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,m=[],v=[],y=[],p=[];for(let h=0;h<u;h++){const _=h*f-r;for(let g=0;g<l;g++){const b=g*d-o;v.push(b,-_,0),y.push(0,0,1),p.push(g/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<a;_++){const g=_+l*h,b=_+l*(h+1),R=_+1+l*(h+1),E=_+1+l*h;m.push(g,b,E),m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.widthSegments,e.heightSegments)}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rM=`#ifdef USE_ALPHAHASH
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
#endif`,aM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
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
#endif`,hM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,pM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,xM=`#ifdef USE_BUMPMAP
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,RM=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CM=`vec3 transformedNormal = objectNormal;
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
#endif`,PM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,UM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,FM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KM=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,JM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,QM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iw=`PhysicalMaterial material;
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
#endif`,sw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,ow=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,rw=`#if defined( RE_IndirectDiffuse )
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
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mw=`#if defined( USE_POINTS_UV )
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
#endif`,gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,_w=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Sw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tw=`#ifdef USE_NORMALMAP
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
#endif`,Rw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Dw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ow=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ww=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,Xw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$w=`#ifdef USE_SKINNING
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
#endif`,jw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oE=`uniform sampler2D t2D;
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
}`,rE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`#include <common>
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
}`,dE=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,hE=`#define DISTANCE
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
}`,fE=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yE=`#include <common>
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
}`,xE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_E=`#define LAMBERT
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
}`,bE=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,SE=`#define MATCAP
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
}`,ME=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wE=`#define NORMAL
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
}`,EE=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AE=`#define PHONG
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
}`,TE=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,RE=`#define STANDARD
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
}`,LE=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,CE=`#define TOON
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
}`,PE=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,IE=`uniform float size;
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
}`,NE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,kE=`uniform vec3 color;
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
}`,OE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,UE=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xe={alphahash_fragment:oM,alphahash_pars_fragment:rM,alphamap_fragment:aM,alphamap_pars_fragment:cM,alphatest_fragment:lM,alphatest_pars_fragment:uM,aomap_fragment:dM,aomap_pars_fragment:hM,batching_pars_vertex:fM,batching_vertex:pM,begin_vertex:mM,beginnormal_vertex:gM,bsdfs:vM,iridescence_fragment:yM,bumpmap_pars_fragment:xM,clipping_planes_fragment:_M,clipping_planes_pars_fragment:bM,clipping_planes_pars_vertex:SM,clipping_planes_vertex:MM,color_fragment:wM,color_pars_fragment:EM,color_pars_vertex:AM,color_vertex:TM,common:RM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:CM,displacementmap_pars_vertex:PM,displacementmap_vertex:IM,emissivemap_fragment:NM,emissivemap_pars_fragment:DM,colorspace_fragment:kM,colorspace_pars_fragment:OM,envmap_fragment:UM,envmap_common_pars_fragment:FM,envmap_pars_fragment:BM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:JM,envmap_vertex:GM,fog_vertex:HM,fog_pars_vertex:VM,fog_fragment:WM,fog_pars_fragment:qM,gradientmap_pars_fragment:XM,lightmap_fragment:$M,lightmap_pars_fragment:jM,lights_lambert_fragment:YM,lights_lambert_pars_fragment:ZM,lights_pars_begin:KM,lights_toon_fragment:QM,lights_toon_pars_fragment:ew,lights_phong_fragment:tw,lights_phong_pars_fragment:nw,lights_physical_fragment:iw,lights_physical_pars_fragment:sw,lights_fragment_begin:ow,lights_fragment_maps:rw,lights_fragment_end:aw,logdepthbuf_fragment:cw,logdepthbuf_pars_fragment:lw,logdepthbuf_pars_vertex:uw,logdepthbuf_vertex:dw,map_fragment:hw,map_pars_fragment:fw,map_particle_fragment:pw,map_particle_pars_fragment:mw,metalnessmap_fragment:gw,metalnessmap_pars_fragment:vw,morphcolor_vertex:yw,morphnormal_vertex:xw,morphtarget_pars_vertex:_w,morphtarget_vertex:bw,normal_fragment_begin:Sw,normal_fragment_maps:Mw,normal_pars_fragment:ww,normal_pars_vertex:Ew,normal_vertex:Aw,normalmap_pars_fragment:Tw,clearcoat_normal_fragment_begin:Rw,clearcoat_normal_fragment_maps:Lw,clearcoat_pars_fragment:Cw,iridescence_pars_fragment:Pw,opaque_fragment:Iw,packing:Nw,premultiplied_alpha_fragment:Dw,project_vertex:kw,dithering_fragment:Ow,dithering_pars_fragment:Uw,roughnessmap_fragment:Fw,roughnessmap_pars_fragment:Bw,shadowmap_pars_fragment:zw,shadowmap_pars_vertex:Gw,shadowmap_vertex:Hw,shadowmask_pars_fragment:Vw,skinbase_vertex:Ww,skinning_pars_vertex:qw,skinning_vertex:Xw,skinnormal_vertex:$w,specularmap_fragment:jw,specularmap_pars_fragment:Yw,tonemapping_fragment:Zw,tonemapping_pars_fragment:Kw,transmission_fragment:Jw,transmission_pars_fragment:Qw,uv_pars_fragment:eE,uv_pars_vertex:tE,uv_vertex:nE,worldpos_vertex:iE,background_vert:sE,background_frag:oE,backgroundCube_vert:rE,backgroundCube_frag:aE,cube_vert:cE,cube_frag:lE,depth_vert:uE,depth_frag:dE,distanceRGBA_vert:hE,distanceRGBA_frag:fE,equirect_vert:pE,equirect_frag:mE,linedashed_vert:gE,linedashed_frag:vE,meshbasic_vert:yE,meshbasic_frag:xE,meshlambert_vert:_E,meshlambert_frag:bE,meshmatcap_vert:SE,meshmatcap_frag:ME,meshnormal_vert:wE,meshnormal_frag:EE,meshphong_vert:AE,meshphong_frag:TE,meshphysical_vert:RE,meshphysical_frag:LE,meshtoon_vert:CE,meshtoon_frag:PE,points_vert:IE,points_frag:NE,shadow_vert:DE,shadow_frag:kE,sprite_vert:OE,sprite_frag:UE},Se={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pi={basic:{uniforms:fn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:fn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:fn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:fn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:fn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:fn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:fn([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:fn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:fn([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:fn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:fn([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:fn([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:fn([Se.lights,Se.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};pi.physical={uniforms:fn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Nc={r:0,b:0,g:0};function FE(n,e,t,i,s,o,r){const a=new Ee(0);let c=o===!0?0:1,l,u,d=null,f=0,m=null;function v(p,h){let _=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(a,c):g&&g.isColor&&(y(g,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Uu)?(u===void 0&&(u=new nt(new rn(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:wr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=ot.getTransfer(g.colorSpace)!==dt,(d!==g||f!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new nt(new So(2,2),new xs({name:"BackgroundMaterial",uniforms:wr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=ot.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,h){p.getRGB(Nc,cy(n)),i.buffers.color.setClear(Nc.r,Nc.g,Nc.b,h,r)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),c=h,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:v}}function BE(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||o!==null,a={},c=p(null);let l=c,u=!1;function d(O,q,Y,K,z){let Q=!1;if(r){const ae=y(K,Y,q);l!==ae&&(l=ae,m(l.object)),Q=h(O,K,Y,z),Q&&_(O,K,Y,z)}else{const ae=q.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==ae)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=ae,Q=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,U(O,q,Y,K),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):o.bindVertexArrayOES(O)}function v(O){return i.isWebGL2?n.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function y(O,q,Y){const K=Y.wireframe===!0;let z=a[O.id];z===void 0&&(z={},a[O.id]=z);let Q=z[q.id];Q===void 0&&(Q={},z[q.id]=Q);let ae=Q[K];return ae===void 0&&(ae=p(f()),Q[K]=ae),ae}function p(O){const q=[],Y=[],K=[];for(let z=0;z<s;z++)q[z]=0,Y[z]=0,K[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:K,object:O,attributes:{},index:null}}function h(O,q,Y,K){const z=l.attributes,Q=q.attributes;let ae=0;const ue=Y.getAttributes();for(const ye in ue)if(ue[ye].location>=0){const k=z[ye];let N=Q[ye];if(N===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(N=O.instanceColor)),k===void 0||k.attribute!==N||N&&k.data!==N.data)return!0;ae++}return l.attributesNum!==ae||l.index!==K}function _(O,q,Y,K){const z={},Q=q.attributes;let ae=0;const ue=Y.getAttributes();for(const ye in ue)if(ue[ye].location>=0){let k=Q[ye];k===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const N={};N.attribute=k,k&&k.data&&(N.data=k.data),z[ye]=N,ae++}l.attributes=z,l.attributesNum=ae,l.index=K}function g(){const O=l.newAttributes;for(let q=0,Y=O.length;q<Y;q++)O[q]=0}function b(O){R(O,0)}function R(O,q){const Y=l.newAttributes,K=l.enabledAttributes,z=l.attributeDivisors;Y[O]=1,K[O]===0&&(n.enableVertexAttribArray(O),K[O]=1),z[O]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),z[O]=q)}function E(){const O=l.newAttributes,q=l.enabledAttributes;for(let Y=0,K=q.length;Y<K;Y++)q[Y]!==O[Y]&&(n.disableVertexAttribArray(Y),q[Y]=0)}function A(O,q,Y,K,z,Q,ae){ae===!0?n.vertexAttribIPointer(O,q,Y,z,Q):n.vertexAttribPointer(O,q,Y,K,z,Q)}function U(O,q,Y,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const z=K.attributes,Q=Y.getAttributes(),ae=q.defaultAttributeValues;for(const ue in Q){const ye=Q[ue];if(ye.location>=0){let te=z[ue];if(te===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){const k=te.normalized,N=te.itemSize,L=t.get(te);if(L===void 0)continue;const T=L.buffer,ee=L.type,ce=L.bytesPerElement,X=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||te.gpuType===Wv);if(te.isInterleavedBufferAttribute){const de=te.data,P=de.stride,ne=te.offset;if(de.isInstancedInterleavedBuffer){for(let B=0;B<ye.locationSize;B++)R(ye.location+B,de.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let B=0;B<ye.locationSize;B++)b(ye.location+B);n.bindBuffer(n.ARRAY_BUFFER,T);for(let B=0;B<ye.locationSize;B++)A(ye.location+B,N/ye.locationSize,ee,k,P*ce,(ne+N/ye.locationSize*B)*ce,X)}else{if(te.isInstancedBufferAttribute){for(let de=0;de<ye.locationSize;de++)R(ye.location+de,te.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<ye.locationSize;de++)b(ye.location+de);n.bindBuffer(n.ARRAY_BUFFER,T);for(let de=0;de<ye.locationSize;de++)A(ye.location+de,N/ye.locationSize,ee,k,N*ce,N/ye.locationSize*de*ce,X)}}else if(ae!==void 0){const k=ae[ue];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(ye.location,k);break;case 3:n.vertexAttrib3fv(ye.location,k);break;case 4:n.vertexAttrib4fv(ye.location,k);break;default:n.vertexAttrib1fv(ye.location,k)}}}}E()}function M(){W();for(const O in a){const q=a[O];for(const Y in q){const K=q[Y];for(const z in K)v(K[z].object),delete K[z];delete q[Y]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;const q=a[O.id];for(const Y in q){const K=q[Y];for(const z in K)v(K[z].object),delete K[z];delete q[Y]}delete a[O.id]}function V(O){for(const q in a){const Y=a[q];if(Y[O.id]===void 0)continue;const K=Y[O.id];for(const z in K)v(K[z].object),delete K[z];delete Y[O.id]}}function W(){oe(),u=!0,l!==c&&(l=c,m(l.object))}function oe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:b,disableUnusedAttributes:E}}function zE(n,e,t,i){const s=i.isWebGL2;let o;function r(u){o=u}function a(u,d){n.drawArrays(o,u,d),t.update(d,o,1)}function c(u,d,f){if(f===0)return;let m,v;if(s)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](o,u,d,f),t.update(d,o,f)}function l(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(u[v],d[v]);else{m.multiDrawArraysWEBGL(o,u,0,d,0,f);let v=0;for(let y=0;y<f;y++)v+=d[y];t.update(v,o,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function GE(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,b=r||e.has("OES_texture_float"),R=g&&b,E=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function HE(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new ks,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||o&&!p)o?u(null):l();else{const _=o?0:i,g=_*4;let b=h.clippingState||null;c.value=b,b=u(v,f,g,m);for(let R=0;R!==g;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,v){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=c.value,v!==!0||p===null){const h=m+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let g=0,b=m;g!==y;++g,b+=4)r.copy(d[g]).applyMatrix4(_,a),r.normal.toArray(p,b),p[b+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function VE(n){let e=new WeakMap;function t(r,a){return a===Eh?r.mapping=br:a===Ah&&(r.mapping=Sr),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Eh||a===Ah)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new tM(c.height/2);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class hy extends ly{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ko=4,Dm=[.125,.215,.35,.446,.526,.582],zs=20,Pd=new hy,km=new Ee;let Id=null,Nd=0,Dd=0;const Os=(1+Math.sqrt(5))/2,Go=1/Os,Om=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Os,Go),new I(0,Os,-Go),new I(Go,0,Os),new I(-Go,0,Os),new I(Os,Go,0),new I(-Os,Go,0)];class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Id=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Id,Nd,Dd),e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Id=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Ua,format:ni,colorSpace:qi,depthBuffer:!1},s=Fm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WE(o)),this._blurMaterial=qE(o,e,t)}return s}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,Pd)}_sceneToCubeUV(e,t,i,s){const a=new Cn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(km),u.toneMapping=hs,u.autoClear=!1;const m=new jn({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),v=new nt(new rn,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(km),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):_===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const g=this._cubeSize;Dc(s,_*g,h>2?g:0,g,g),u.setRenderTarget(s),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===br||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new nt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;Dc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,Pd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Om[(s-1)%Om.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new nt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*zs-1),y=o/v,p=isFinite(o)?1+Math.floor(u*y):zs;p>zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zs}`);const h=[];let _=0;for(let A=0;A<zs;++A){const U=A/y,M=Math.exp(-U*U/2);h.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const b=this._sizeLods[s],R=3*b*(s>g-Ko?s-g+Ko:0),E=4*(this._cubeSize-b);Dc(t,R,E,3*b,2*b),c.setRenderTarget(t),c.render(d,Pd)}}function WE(n){const e=[],t=[],i=[];let s=n;const o=n-Ko+1+Dm.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>n-Ko?c=Dm[r-n+Ko-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,y=3,p=2,h=1,_=new Float32Array(y*v*m),g=new Float32Array(p*v*m),b=new Float32Array(h*v*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,U=E>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(M,y*v*E),g.set(f,p*v*E);const w=[E,E,E,E,E,E];b.set(w,h*v*E)}const R=new gt;R.setAttribute("position",new Dt(_,y)),R.setAttribute("uv",new Dt(g,p)),R.setAttribute("faceIndex",new Dt(b,h)),e.push(R),s>Ko&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fm(n,e,t){const i=new uo(n,e,t);return i.texture.mapping=Uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Dc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function qE(n,e,t){const i=new Float32Array(zs),s=new I(0,1,0);return new xs({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Bm(){return new xs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wf(),fragmentShader:`

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
		`,blending:ds,depthTest:!1,depthWrite:!1})}function zm(){return new xs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ds,depthTest:!1,depthWrite:!1})}function Wf(){return`

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
	`}function XE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Eh||c===Ah,u=c===br||c===Sr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Um(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Um(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function $E(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function jE(n,e,t,i){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let p=0,h=y.length;p<h;p++)e.remove(y[p])}f.removeEventListener("dispose",r),delete s[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const y=m[v];for(let p=0,h=y.length;p<h;p++)e.update(y[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,v=d.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,b=_.length;g<b;g+=3){const R=_[g+0],E=_[g+1],A=_[g+2];f.push(R,E,E,A,A,R)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,b=_.length/3-1;g<b;g+=3){const R=g+0,E=g+1,A=g+2;f.push(R,E,E,A,A,R)}}else return;const p=new(ey(f)?ay:ry)(f,1);p.version=y;const h=o.get(d);h&&e.remove(h),o.set(d,p)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function YE(n,e,t,i){const s=i.isWebGL2;let o;function r(m){o=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,v){n.drawElements(o,v,a,m*c),t.update(v,o,1)}function d(m,v,y){if(y===0)return;let p,h;if(s)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](o,v,a,m*c,y),t.update(v,o,y)}function f(m,v,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<y;h++)this.render(m[h]/c,v[h]);else{p.multiDrawElementsWEBGL(o,v,0,a,m,0,y);let h=0;for(let _=0;_<y;_++)h+=v[_];t.update(h,o,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function ZE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function KE(n,e){return n[0]-e[0]}function JE(n,e){return Math.abs(e[1])-Math.abs(n[1])}function QE(n,e,t){const i={},s=new Float32Array(8),o=new WeakMap,r=new $t,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let y=o.get(u);if(y===void 0||y.count!==v){let O=function(){W.dispose(),o.delete(u),u.removeEventListener("dispose",O)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let U=0;_===!0&&(U=1),g===!0&&(U=2),b===!0&&(U=3);let M=u.attributes.position.count*U,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*w*4*v),W=new iy(V,M,w,v);W.type=as,W.needsUpdate=!0;const oe=U*4;for(let q=0;q<v;q++){const Y=R[q],K=E[q],z=A[q],Q=M*w*4*q;for(let ae=0;ae<Y.count;ae++){const ue=ae*oe;_===!0&&(r.fromBufferAttribute(Y,ae),V[Q+ue+0]=r.x,V[Q+ue+1]=r.y,V[Q+ue+2]=r.z,V[Q+ue+3]=0),g===!0&&(r.fromBufferAttribute(K,ae),V[Q+ue+4]=r.x,V[Q+ue+5]=r.y,V[Q+ue+6]=r.z,V[Q+ue+7]=0),b===!0&&(r.fromBufferAttribute(z,ae),V[Q+ue+8]=r.x,V[Q+ue+9]=r.y,V[Q+ue+10]=r.z,V[Q+ue+11]=z.itemSize===4?r.w:1)}}y={count:v,texture:W,size:new pe(M,w)},o.set(u,y),u.addEventListener("dispose",O)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const m=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let g=0;g<m;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<m;g++){const b=v[g];b[0]=g,b[1]=f[g]}v.sort(JE);for(let g=0;g<8;g++)g<m&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(KE);const y=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const b=a[g],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(y&&u.getAttribute("morphTarget"+g)!==y[R]&&u.setAttribute("morphTarget"+g,y[R]),p&&u.getAttribute("morphNormal"+g)!==p[R]&&u.setAttribute("morphNormal"+g,p[R]),s[g]=E,h+=E):(y&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),p&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),s[g]=0)}const _=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function eA(n,e,t,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class fy extends Dn{constructor(e,t,i,s,o,r,a,c,l,u){if(u=u!==void 0?u:to,u!==to&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===to&&(i=rs),i===void 0&&u===Mr&&(i=eo),super(null,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const py=new Dn,my=new fy(1,1);my.compareFunction=Qv;const gy=new iy,vy=new FS,yy=new uy,Gm=[],Hm=[],Vm=new Float32Array(16),Wm=new Float32Array(9),qm=new Float32Array(4);function Or(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=Gm[s];if(o===void 0&&(o=new Float32Array(s),Gm[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bu(n,e){let t=Hm[e];t===void 0&&(t=new Int32Array(e),Hm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function iA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function sA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function oA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;qm.set(i),n.uniformMatrix2fv(this.addr,!1,qm),Bt(t,i)}}function rA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Wm.set(i),n.uniformMatrix3fv(this.addr,!1,Wm),Bt(t,i)}}function aA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Vm.set(i),n.uniformMatrix4fv(this.addr,!1,Vm),Bt(t,i)}}function cA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function lA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function uA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function dA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function hA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function pA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function mA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function gA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const o=this.type===n.SAMPLER_2D_SHADOW?my:py;t.setTexture2D(e||o,s)}function vA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||vy,s)}function yA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yy,s)}function xA(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gy,s)}function _A(n){switch(n){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return sA;case 35674:return oA;case 35675:return rA;case 35676:return aA;case 5124:case 35670:return cA;case 35667:case 35671:return lA;case 35668:case 35672:return uA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return fA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return xA}}function bA(n,e){n.uniform1fv(this.addr,e)}function SA(n,e){const t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function MA(n,e){const t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function wA(n,e){const t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function EA(n,e){const t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AA(n,e){const t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function TA(n,e){const t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RA(n,e){n.uniform1iv(this.addr,e)}function LA(n,e){n.uniform2iv(this.addr,e)}function CA(n,e){n.uniform3iv(this.addr,e)}function PA(n,e){n.uniform4iv(this.addr,e)}function IA(n,e){n.uniform1uiv(this.addr,e)}function NA(n,e){n.uniform2uiv(this.addr,e)}function DA(n,e){n.uniform3uiv(this.addr,e)}function kA(n,e){n.uniform4uiv(this.addr,e)}function OA(n,e,t){const i=this.cache,s=e.length,o=Bu(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||py,o[r])}function UA(n,e,t){const i=this.cache,s=e.length,o=Bu(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||vy,o[r])}function FA(n,e,t){const i=this.cache,s=e.length,o=Bu(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||yy,o[r])}function BA(n,e,t){const i=this.cache,s=e.length,o=Bu(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||gy,o[r])}function zA(n){switch(n){case 5126:return bA;case 35664:return SA;case 35665:return MA;case 35666:return wA;case 35674:return EA;case 35675:return AA;case 35676:return TA;case 5124:case 35670:return RA;case 35667:case 35671:return LA;case 35668:case 35672:return CA;case 35669:case 35673:return PA;case 5125:return IA;case 36294:return NA;case 36295:return DA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return BA}}class GA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_A(t.type)}}class HA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class VA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function Xm(n,e){n.seq.push(e),n.map[e.id]=e}function WA(n,e,t){const i=n.name,s=i.length;for(kd.lastIndex=0;;){const o=kd.exec(i),r=kd.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Xm(t,l===void 0?new GA(a,n,e):new HA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new VA(a),Xm(t,d)),t=d}}}class vl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);WA(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function $m(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qA=37297;let XA=0;function $A(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}function jA(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Gl&&t===zl?i="LinearDisplayP3ToLinearSRGB":e===zl&&t===Gl&&(i="LinearSRGBToLinearDisplayP3"),n){case qi:case Fu:return[i,"LinearTransferOETF"];case Ot:case zf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$A(n.getShaderSource(e),r)}else return s}function YA(n,e){const t=jA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ZA(n,e){let t;switch(e){case jb:t="Linear";break;case Yb:t="Reinhard";break;case Zb:t="OptimizedCineon";break;case Kb:t="ACESFilmic";break;case Qb:t="AgX";break;case Jb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Jo).join(`
`)}function JA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Jo).join(`
`)}function QA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function Jo(n){return n!==""}function Ym(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(n){return n.replace(tT,iT)}const nT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function iT(n,e){let t=Xe[e];if(t===void 0){const i=nT.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ph(t)}const sT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Km(n){return n.replace(sT,oT)}function oT(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Jm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sb?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function aT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function lT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ff:e="ENVMAP_BLENDING_MULTIPLY";break;case Xb:e="ENVMAP_BLENDING_MIX";break;case $b:e="ENVMAP_BLENDING_ADD";break}return e}function uT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dT(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=rT(t),l=aT(t),u=cT(t),d=lT(t),f=uT(t),m=t.isWebGL2?"":KA(t),v=JA(t),y=QA(o),p=s.createProgram();let h,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Jo).join(`
`),h.length>0&&(h+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Jo).join(`
`),_.length>0&&(_+=`
`)):(h=[Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),_=[m,Jm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hs?"#define TONE_MAPPING":"",t.toneMapping!==hs?Xe.tonemapping_pars_fragment:"",t.toneMapping!==hs?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,YA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),r=Ph(r),r=Ym(r,t),r=Zm(r,t),a=Ph(a),a=Ym(a,t),a=Zm(a,t),r=Km(r),a=Km(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=g+h+r,R=g+_+a,E=$m(s,s.VERTEX_SHADER,b),A=$m(s,s.FRAGMENT_SHADER,R);s.attachShader(p,E),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(W){if(n.debug.checkShaderErrors){const oe=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(E).trim(),q=s.getShaderInfoLog(A).trim();let Y=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,A);else{const z=jm(s,E,"vertex"),Q=jm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+z+`
`+Q)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(O===""||q==="")&&(K=!1);K&&(W.diagnostics={runnable:Y,programLog:oe,vertexShader:{log:O,prefix:h},fragmentShader:{log:q,prefix:_}})}s.deleteShader(E),s.deleteShader(A),M=new vl(s,p),w=eT(s,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,qA)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let hT=0;class fT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pT(e),t.set(e,i)),i}}class pT{constructor(e){this.id=hT++,this.code=e,this.usedTimes=0}}function mT(n,e,t,i,s,o,r){const a=new sy,c=new fT,l=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,w,V,W,oe){const O=W.fog,q=oe.geometry,Y=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),z=K&&K.mapping===Uu?K.image.height:null,Q=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=ae!==void 0?ae.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let te,k,N,L;if(Q){const ln=pi[Q];te=ln.vertexShader,k=ln.fragmentShader}else te=M.vertexShader,k=M.fragmentShader,c.update(M),N=c.getVertexShaderID(M),L=c.getFragmentShaderID(M);const T=n.getRenderTarget(),ee=oe.isInstancedMesh===!0,ce=oe.isBatchedMesh===!0,X=!!M.map,de=!!M.matcap,P=!!K,ne=!!M.aoMap,B=!!M.lightMap,Z=!!M.bumpMap,$=!!M.normalMap,fe=!!M.displacementMap,F=!!M.emissiveMap,x=!!M.metalnessMap,S=!!M.roughnessMap,H=M.anisotropy>0,me=M.clearcoat>0,ge=M.iridescence>0,le=M.sheen>0,Te=M.transmission>0,_e=H&&!!M.anisotropyMap,Re=me&&!!M.clearcoatMap,Ie=me&&!!M.clearcoatNormalMap,Fe=me&&!!M.clearcoatRoughnessMap,ve=ge&&!!M.iridescenceMap,Je=ge&&!!M.iridescenceThicknessMap,We=le&&!!M.sheenColorMap,Be=le&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Ce=!!M.specularColorMap,qe=!!M.specularIntensityMap,it=Te&&!!M.transmissionMap,vt=Te&&!!M.thicknessMap,je=!!M.gradientMap,be=!!M.alphaMap,G=M.alphaTest>0,Me=!!M.alphaHash,we=!!M.extensions,Ue=!!q.attributes.uv1,ke=!!q.attributes.uv2,rt=!!q.attributes.uv3;let at=hs;return M.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:k,defines:M.defines,customVertexShaderID:N,customFragmentShaderID:L,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ce,instancing:ee,instancingColor:ee&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:T===null?n.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qi,map:X,matcap:de,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:z,aoMap:ne,lightMap:B,bumpMap:Z,normalMap:$,displacementMap:f&&fe,emissiveMap:F,normalMapObjectSpace:$&&M.normalMapType===dS,normalMapTangentSpace:$&&M.normalMapType===Jv,metalnessMap:x,roughnessMap:S,anisotropy:H,anisotropyMap:_e,clearcoat:me,clearcoatMap:Re,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Fe,iridescence:ge,iridescenceMap:ve,iridescenceThicknessMap:Je,sheen:le,sheenColorMap:We,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Ce,specularIntensityMap:qe,transmission:Te,transmissionMap:it,thicknessMap:vt,gradientMap:je,opaque:M.transparent===!1&&M.blending===ar,alphaMap:be,alphaTest:G,alphaHash:Me,combine:M.combine,mapUv:X&&y(M.map.channel),aoMapUv:ne&&y(M.aoMap.channel),lightMapUv:B&&y(M.lightMap.channel),bumpMapUv:Z&&y(M.bumpMap.channel),normalMapUv:$&&y(M.normalMap.channel),displacementMapUv:fe&&y(M.displacementMap.channel),emissiveMapUv:F&&y(M.emissiveMap.channel),metalnessMapUv:x&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:_e&&y(M.anisotropyMap.channel),clearcoatMapUv:Re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&y(M.sheenRoughnessMap.channel),specularMapUv:Ne&&y(M.specularMap.channel),specularColorMapUv:Ce&&y(M.specularColorMap.channel),specularIntensityMapUv:qe&&y(M.specularIntensityMap.channel),transmissionMapUv:it&&y(M.transmissionMap.channel),thicknessMapUv:vt&&y(M.thicknessMap.channel),alphaMapUv:be&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:ke,vertexUv3s:rt,pointsUvs:oe.isPoints===!0&&!!q.attributes.uv&&(X||be),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:oe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&ot.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kt,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)w.push(V),w.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=v[M.type];let V;if(w){const W=pi[w];V=KS.clone(W.uniforms)}else V=M.uniforms;return V}function R(M,w){let V;for(let W=0,oe=l.length;W<oe;W++){const O=l[W];if(O.cacheKey===w){V=O,++V.usedTimes;break}}return V===void 0&&(V=new dT(n,w,M,o),l.push(V)),V}function E(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:U}}function gT(){let n=new WeakMap;function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function t(o){n.delete(o)}function i(o,r,a){n.get(o)[r]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function vT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Qm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function eg(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,m,v,y,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:y,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=y,h.group=p),e++,h}function a(d,f,m,v,y,p){const h=r(d,f,m,v,y,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(d,f,m,v,y,p){const h=r(d,f,m,v,y,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||vT),i.length>1&&i.sort(f||Qm),s.length>1&&s.sort(f||Qm)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function yT(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new eg,n.set(i,[r])):s>=o.length?(r=new eg,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function xT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function _T(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bT=0;function ST(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MT(n,e){const t=new xT,i=_T(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const o=new I,r=new Ke,a=new Ke;function c(u,d){let f=0,m=0,v=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,p=0,h=0,_=0,g=0,b=0,R=0,E=0,A=0,U=0,M=0;u.sort(ST);const w=d===!0?Math.PI:1;for(let W=0,oe=u.length;W<oe;W++){const O=u[W],q=O.color,Y=O.intensity,K=O.distance,z=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=q.r*Y*w,m+=q.g*Y*w,v+=q.b*Y*w;else if(O.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(O.sh.coefficients[Q],Y);M++}else if(O.isDirectionalLight){const Q=t.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const ae=O.shadow,ue=i.get(O);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,s.directionalShadow[y]=ue,s.directionalShadowMap[y]=z,s.directionalShadowMatrix[y]=O.shadow.matrix,b++}s.directional[y]=Q,y++}else if(O.isSpotLight){const Q=t.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(q).multiplyScalar(Y*w),Q.distance=K,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,s.spot[h]=Q;const ae=O.shadow;if(O.map&&(s.spotLightMap[A]=O.map,A++,ae.updateMatrices(O),O.castShadow&&U++),s.spotLightMatrix[h]=ae.matrix,O.castShadow){const ue=i.get(O);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,s.spotShadow[h]=ue,s.spotShadowMap[h]=z,E++}h++}else if(O.isRectAreaLight){const Q=t.get(O);Q.color.copy(q).multiplyScalar(Y),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),s.rectArea[_]=Q,_++}else if(O.isPointLight){const Q=t.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity*w),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){const ae=O.shadow,ue=i.get(O);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,ue.shadowCameraNear=ae.camera.near,ue.shadowCameraFar=ae.camera.far,s.pointShadow[p]=ue,s.pointShadowMap[p]=z,s.pointShadowMatrix[p]=O.shadow.matrix,R++}s.point[p]=Q,p++}else if(O.isHemisphereLight){const Q=t.get(O);Q.skyColor.copy(O.color).multiplyScalar(Y*w),Q.groundColor.copy(O.groundColor).multiplyScalar(Y*w),s.hemi[g]=Q,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==y||V.pointLength!==p||V.spotLength!==h||V.rectAreaLength!==_||V.hemiLength!==g||V.numDirectionalShadows!==b||V.numPointShadows!==R||V.numSpotShadows!==E||V.numSpotMaps!==A||V.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=h,s.rectArea.length=_,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-U,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,V.directionalLength=y,V.pointLength=p,V.spotLength=h,V.rectAreaLength=_,V.hemiLength=g,V.numDirectionalShadows=b,V.numPointShadows=R,V.numSpotShadows=E,V.numSpotMaps=A,V.numLightProbes=M,s.version=bT++)}function l(u,d){let f=0,m=0,v=0,y=0,p=0;const h=d.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const b=u[_];if(b.isDirectionalLight){const R=s.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),f++}else if(b.isSpotLight){const R=s.spot[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),v++}else if(b.isRectAreaLight){const R=s.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:c,setupView:l,state:s}}function tg(n,e){const t=new MT(n,e),i=[],s=[];function o(){i.length=0,s.length=0}function r(d){i.push(d)}function a(d){s.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function wT(n,e){let t=new WeakMap;function i(o,r=0){const a=t.get(o);let c;return a===void 0?(c=new tg(n,e),t.set(o,[c])):r>=a.length?(c=new tg(n,e),a.push(c)):c=a[r],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class ET extends bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AT extends bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const TT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RT=`uniform sampler2D shadow_pass;
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
}`;function LT(n,e,t){let i=new Vf;const s=new pe,o=new pe,r=new $t,a=new ET({depthPacking:uS}),c=new AT,l={},u=t.maxTextureSize,d={[ys]:wn,[wn]:ys,[Kt]:Kt},f=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:TT,fragmentShader:RT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new gt;v.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new nt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let h=this.type;this.render=function(E,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ds),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const oe=h!==ki&&this.type===ki,O=h===ki&&this.type!==ki;for(let q=0,Y=E.length;q<Y;q++){const K=E[q],z=K.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Q=z.getFrameExtents();if(s.multiply(Q),o.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/Q.x),s.x=o.x*Q.x,z.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/Q.y),s.y=o.y*Q.y,z.mapSize.y=o.y)),z.map===null||oe===!0||O===!0){const ue=this.type!==ki?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new uo(s.x,s.y,ue),z.map.texture.name=K.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ae=z.getViewportCount();for(let ue=0;ue<ae;ue++){const ye=z.getViewport(ue);r.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),W.viewport(r),z.updateMatrices(K,ue),i=z.getFrustum(),b(A,U,z.camera,K,this.type)}z.isPointLightShadow!==!0&&this.type===ki&&_(z,U),z.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,w,V)};function _(E,A){const U=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new uo(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,U,f,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,U,m,y,null)}function g(E,A,U,M){let w=null;const V=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)w=V;else if(w=U.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=w.uuid,oe=A.uuid;let O=l[W];O===void 0&&(O={},l[W]=O);let q=O[oe];q===void 0&&(q=w.clone(),O[oe]=q,A.addEventListener("dispose",R)),w=q}if(w.visible=A.visible,w.wireframe=A.wireframe,M===ki?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=n.properties.get(w);W.light=U}return w}function b(E,A,U,M,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ki)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),O=E.material;if(Array.isArray(O)){const q=oe.groups;for(let Y=0,K=q.length;Y<K;Y++){const z=q[Y],Q=O[z.materialIndex];if(Q&&Q.visible){const ae=g(E,Q,M,w);E.onBeforeShadow(n,E,A,U,oe,ae,z),n.renderBufferDirect(U,null,oe,ae,E,z),E.onAfterShadow(n,E,A,U,oe,ae,z)}}}else if(O.visible){const q=g(E,O,M,w);E.onBeforeShadow(n,E,A,U,oe,q,null),n.renderBufferDirect(U,null,oe,q,E,null),E.onAfterShadow(n,E,A,U,oe,q,null)}}const W=E.children;for(let oe=0,O=W.length;oe<O;oe++)b(W[oe],A,U,M,w)}function R(E){E.target.removeEventListener("dispose",R);for(const U in l){const M=l[U],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function CT(n,e,t){const i=t.isWebGL2;function s(){let G=!1;const Me=new $t;let we=null;const Ue=new $t(0,0,0,0);return{setMask:function(ke){we!==ke&&!G&&(n.colorMask(ke,ke,ke,ke),we=ke)},setLocked:function(ke){G=ke},setClear:function(ke,rt,at,zt,ln){ln===!0&&(ke*=zt,rt*=zt,at*=zt),Me.set(ke,rt,at,zt),Ue.equals(Me)===!1&&(n.clearColor(ke,rt,at,zt),Ue.copy(Me))},reset:function(){G=!1,we=null,Ue.set(-1,0,0,0)}}}function o(){let G=!1,Me=null,we=null,Ue=null;return{setTest:function(ke){ke?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(ke){Me!==ke&&!G&&(n.depthMask(ke),Me=ke)},setFunc:function(ke){if(we!==ke){switch(ke){case Bb:n.depthFunc(n.NEVER);break;case zb:n.depthFunc(n.ALWAYS);break;case Gb:n.depthFunc(n.LESS);break;case Fl:n.depthFunc(n.LEQUAL);break;case Hb:n.depthFunc(n.EQUAL);break;case Vb:n.depthFunc(n.GEQUAL);break;case Wb:n.depthFunc(n.GREATER);break;case qb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=ke}},setLocked:function(ke){G=ke},setClear:function(ke){Ue!==ke&&(n.clearDepth(ke),Ue=ke)},reset:function(){G=!1,Me=null,we=null,Ue=null}}}function r(){let G=!1,Me=null,we=null,Ue=null,ke=null,rt=null,at=null,zt=null,ln=null;return{setTest:function(ct){G||(ct?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(ct){Me!==ct&&!G&&(n.stencilMask(ct),Me=ct)},setFunc:function(ct,un,ui){(we!==ct||Ue!==un||ke!==ui)&&(n.stencilFunc(ct,un,ui),we=ct,Ue=un,ke=ui)},setOp:function(ct,un,ui){(rt!==ct||at!==un||zt!==ui)&&(n.stencilOp(ct,un,ui),rt=ct,at=un,zt=ui)},setLocked:function(ct){G=ct},setClear:function(ct){ln!==ct&&(n.clearStencil(ct),ln=ct)},reset:function(){G=!1,Me=null,we=null,Ue=null,ke=null,rt=null,at=null,zt=null,ln=null}}}const a=new s,c=new o,l=new r,u=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,y=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,A=null,U=null,M=new Ee(0,0,0),w=0,V=!1,W=null,oe=null,O=null,q=null,Y=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),z=Q>=1):ae.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),z=Q>=2);let ue=null,ye={};const te=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),N=new $t().fromArray(te),L=new $t().fromArray(k);function T(G,Me,we,Ue){const ke=new Uint8Array(4),rt=n.createTexture();n.bindTexture(G,rt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<we;at++)i&&(G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Me+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return rt}const ee={};ee[n.TEXTURE_2D]=T(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=T(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=T(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=T(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(n.DEPTH_TEST),c.setFunc(Fl),F(!1),x(Up),ce(n.CULL_FACE),$(ds);function ce(G){f[G]!==!0&&(n.enable(G),f[G]=!0)}function X(G){f[G]!==!1&&(n.disable(G),f[G]=!1)}function de(G,Me){return m[G]!==Me?(n.bindFramebuffer(G,Me),m[G]=Me,i&&(G===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),G===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function P(G,Me){let we=y,Ue=!1;if(G)if(we=v.get(Me),we===void 0&&(we=[],v.set(Me,we)),G.isWebGLMultipleRenderTargets){const ke=G.texture;if(we.length!==ke.length||we[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,at=ke.length;rt<at;rt++)we[rt]=n.COLOR_ATTACHMENT0+rt;we.length=ke.length,Ue=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ue=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function ne(G){return p!==G?(n.useProgram(G),p=G,!0):!1}const B={[Bs]:n.FUNC_ADD,[wb]:n.FUNC_SUBTRACT,[Eb]:n.FUNC_REVERSE_SUBTRACT};if(i)B[zp]=n.MIN,B[Gp]=n.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(B[zp]=G.MIN_EXT,B[Gp]=G.MAX_EXT)}const Z={[Ab]:n.ZERO,[Tb]:n.ONE,[Rb]:n.SRC_COLOR,[Mh]:n.SRC_ALPHA,[Db]:n.SRC_ALPHA_SATURATE,[Ib]:n.DST_COLOR,[Cb]:n.DST_ALPHA,[Lb]:n.ONE_MINUS_SRC_COLOR,[wh]:n.ONE_MINUS_SRC_ALPHA,[Nb]:n.ONE_MINUS_DST_COLOR,[Pb]:n.ONE_MINUS_DST_ALPHA,[kb]:n.CONSTANT_COLOR,[Ob]:n.ONE_MINUS_CONSTANT_COLOR,[Ub]:n.CONSTANT_ALPHA,[Fb]:n.ONE_MINUS_CONSTANT_ALPHA};function $(G,Me,we,Ue,ke,rt,at,zt,ln,ct){if(G===ds){h===!0&&(X(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),G!==Mb){if(G!==_||ct!==V){if((g!==Bs||E!==Bs)&&(n.blendEquation(n.FUNC_ADD),g=Bs,E=Bs),ct)switch(G){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.ONE,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ul:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}b=null,R=null,A=null,U=null,M.set(0,0,0),w=0,_=G,V=ct}return}ke=ke||Me,rt=rt||we,at=at||Ue,(Me!==g||ke!==E)&&(n.blendEquationSeparate(B[Me],B[ke]),g=Me,E=ke),(we!==b||Ue!==R||rt!==A||at!==U)&&(n.blendFuncSeparate(Z[we],Z[Ue],Z[rt],Z[at]),b=we,R=Ue,A=rt,U=at),(zt.equals(M)===!1||ln!==w)&&(n.blendColor(zt.r,zt.g,zt.b,ln),M.copy(zt),w=ln),_=G,V=!1}function fe(G,Me){G.side===Kt?X(n.CULL_FACE):ce(n.CULL_FACE);let we=G.side===wn;Me&&(we=!we),F(we),G.blending===ar&&G.transparent===!1?$(ds):$(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);const Ue=G.stencilWrite;l.setTest(Ue),Ue&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),H(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(G){W!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),W=G)}function x(G){G!==_b?(ce(n.CULL_FACE),G!==oe&&(G===Up?n.cullFace(n.BACK):G===bb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),oe=G}function S(G){G!==O&&(z&&n.lineWidth(G),O=G)}function H(G,Me,we){G?(ce(n.POLYGON_OFFSET_FILL),(q!==Me||Y!==we)&&(n.polygonOffset(Me,we),q=Me,Y=we)):X(n.POLYGON_OFFSET_FILL)}function me(G){G?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function ge(G){G===void 0&&(G=n.TEXTURE0+K-1),ue!==G&&(n.activeTexture(G),ue=G)}function le(G,Me,we){we===void 0&&(ue===null?we=n.TEXTURE0+K-1:we=ue);let Ue=ye[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},ye[we]=Ue),(Ue.type!==G||Ue.texture!==Me)&&(ue!==we&&(n.activeTexture(we),ue=we),n.bindTexture(G,Me||ee[G]),Ue.type=G,Ue.texture=Me)}function Te(){const G=ye[ue];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(G){N.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),N.copy(G))}function it(G){L.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),L.copy(G))}function vt(G,Me){let we=d.get(Me);we===void 0&&(we=new WeakMap,d.set(Me,we));let Ue=we.get(G);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,G.name),we.set(G,Ue))}function je(G,Me){const Ue=d.get(Me).get(G);u.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,G.__bindingPointIndex),u.set(Me,Ue))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ue=null,ye={},m={},v=new WeakMap,y=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,A=null,U=null,M=new Ee(0,0,0),w=0,V=!1,W=null,oe=null,O=null,q=null,Y=null,N.set(0,0,n.canvas.width,n.canvas.height),L.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ce,disable:X,bindFramebuffer:de,drawBuffers:P,useProgram:ne,setBlending:$,setMaterial:fe,setFlipSided:F,setCullFace:x,setLineWidth:S,setPolygonOffset:H,setScissorTest:me,activeTexture:ge,bindTexture:le,unbindTexture:Te,compressedTexImage2D:_e,compressedTexImage3D:Re,texImage2D:Ne,texImage3D:Ce,updateUBOMapping:vt,uniformBlockBinding:je,texStorage2D:We,texStorage3D:Be,texSubImage2D:Ie,texSubImage3D:Fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Je,scissor:qe,viewport:it,reset:be}}function PT(n,e,t,i,s,o,r){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,S){return m?new OffscreenCanvas(x,S):Wl("canvas")}function y(x,S,H,me){let ge=1;if((x.width>me||x.height>me)&&(ge=me/Math.max(x.width,x.height)),ge<1||S===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const le=S?Vl:Math.floor,Te=le(ge*x.width),_e=le(ge*x.height);d===void 0&&(d=v(Te,_e));const Re=H?v(Te,_e):d;return Re.width=Te,Re.height=_e,Re.getContext("2d").drawImage(x,0,0,Te,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Te+"x"+_e+")."),Re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return Ch(x.width)&&Ch(x.height)}function h(x){return a?!1:x.wrapS!==ti||x.wrapT!==ti||x.minFilter!==gn&&x.minFilter!==zn}function _(x,S){return x.generateMipmaps&&S&&x.minFilter!==gn&&x.minFilter!==zn}function g(x){n.generateMipmap(x)}function b(x,S,H,me,ge=!1){if(a===!1)return S;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let le=S;if(S===n.RED&&(H===n.FLOAT&&(le=n.R32F),H===n.HALF_FLOAT&&(le=n.R16F),H===n.UNSIGNED_BYTE&&(le=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(le=n.R8UI),H===n.UNSIGNED_SHORT&&(le=n.R16UI),H===n.UNSIGNED_INT&&(le=n.R32UI),H===n.BYTE&&(le=n.R8I),H===n.SHORT&&(le=n.R16I),H===n.INT&&(le=n.R32I)),S===n.RG&&(H===n.FLOAT&&(le=n.RG32F),H===n.HALF_FLOAT&&(le=n.RG16F),H===n.UNSIGNED_BYTE&&(le=n.RG8)),S===n.RGBA){const Te=ge?Bl:ot.getTransfer(me);H===n.FLOAT&&(le=n.RGBA32F),H===n.HALF_FLOAT&&(le=n.RGBA16F),H===n.UNSIGNED_BYTE&&(le=Te===dt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function R(x,S,H){return _(x,H)===!0||x.isFramebufferTexture&&x.minFilter!==gn&&x.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?S.mipmaps.length:1}function E(x){return x===gn||x===Hp||x===cd?n.NEAREST:n.LINEAR}function A(x){const S=x.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&u.delete(S)}function U(x){const S=x.target;S.removeEventListener("dispose",U),V(S)}function M(x){const S=i.get(x);if(S.__webglInit===void 0)return;const H=x.source,me=f.get(H);if(me){const ge=me[S.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&w(x),Object.keys(me).length===0&&f.delete(H)}i.remove(x)}function w(x){const S=i.get(x);n.deleteTexture(S.__webglTexture);const H=x.source,me=f.get(H);delete me[S.__cacheKey],r.memory.textures--}function V(x){const S=x.texture,H=i.get(x),me=i.get(S);if(me.__webglTexture!==void 0&&(n.deleteTexture(me.__webglTexture),r.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(H.__webglFramebuffer[ge]))for(let le=0;le<H.__webglFramebuffer[ge].length;le++)n.deleteFramebuffer(H.__webglFramebuffer[ge][le]);else n.deleteFramebuffer(H.__webglFramebuffer[ge]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[ge])}else{if(Array.isArray(H.__webglFramebuffer))for(let ge=0;ge<H.__webglFramebuffer.length;ge++)n.deleteFramebuffer(H.__webglFramebuffer[ge]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ge=0;ge<H.__webglColorRenderbuffer.length;ge++)H.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[ge]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ge=0,le=S.length;ge<le;ge++){const Te=i.get(S[ge]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),r.memory.textures--),i.remove(S[ge])}i.remove(S),i.remove(x)}let W=0;function oe(){W=0}function O(){const x=W;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),W+=1,x}function q(x){const S=[];return S.push(x.wrapS),S.push(x.wrapT),S.push(x.wrapR||0),S.push(x.magFilter),S.push(x.minFilter),S.push(x.anisotropy),S.push(x.internalFormat),S.push(x.format),S.push(x.type),S.push(x.generateMipmaps),S.push(x.premultiplyAlpha),S.push(x.flipY),S.push(x.unpackAlignment),S.push(x.colorSpace),S.join()}function Y(x,S){const H=i.get(x);if(x.isVideoTexture&&fe(x),x.isRenderTargetTexture===!1&&x.version>0&&H.__version!==x.version){const me=x.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(H,x,S);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function K(x,S){const H=i.get(x);if(x.version>0&&H.__version!==x.version){N(H,x,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function z(x,S){const H=i.get(x);if(x.version>0&&H.__version!==x.version){N(H,x,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function Q(x,S){const H=i.get(x);if(x.version>0&&H.__version!==x.version){L(H,x,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const ae={[Th]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[Rh]:n.MIRRORED_REPEAT},ue={[gn]:n.NEAREST,[Hp]:n.NEAREST_MIPMAP_NEAREST,[cd]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[eS]:n.LINEAR_MIPMAP_NEAREST,[Oa]:n.LINEAR_MIPMAP_LINEAR},ye={[hS]:n.NEVER,[yS]:n.ALWAYS,[fS]:n.LESS,[Qv]:n.LEQUAL,[pS]:n.EQUAL,[vS]:n.GEQUAL,[mS]:n.GREATER,[gS]:n.NOTEQUAL};function te(x,S,H){if(H?(n.texParameteri(x,n.TEXTURE_WRAP_S,ae[S.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ae[S.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ae[S.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ue[S.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ue[S.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==ti||S.wrapT!==ti)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==gn&&S.minFilter!==zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===gn||S.minFilter!==cd&&S.minFilter!==Oa||S.type===as&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ua&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(x,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function k(x,S){let H=!1;x.__webglInit===void 0&&(x.__webglInit=!0,S.addEventListener("dispose",A));const me=S.source;let ge=f.get(me);ge===void 0&&(ge={},f.set(me,ge));const le=q(S);if(le!==x.__cacheKey){ge[le]===void 0&&(ge[le]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,H=!0),ge[le].usedTimes++;const Te=ge[x.__cacheKey];Te!==void 0&&(ge[x.__cacheKey].usedTimes--,Te.usedTimes===0&&w(S)),x.__cacheKey=le,x.__webglTexture=ge[le].texture}return H}function N(x,S,H){let me=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(me=n.TEXTURE_3D);const ge=k(x,S),le=S.source;t.bindTexture(me,x.__webglTexture,n.TEXTURE0+H);const Te=i.get(le);if(le.version!==Te.__version||ge===!0){t.activeTexture(n.TEXTURE0+H);const _e=ot.getPrimaries(ot.workingColorSpace),Re=S.colorSpace===Hn?null:ot.getPrimaries(S.colorSpace),Ie=S.colorSpace===Hn||_e===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Fe=h(S)&&p(S.image)===!1;let ve=y(S.image,Fe,!1,s.maxTextureSize);ve=F(S,ve);const Je=p(ve)||a,We=o.convert(S.format,S.colorSpace);let Be=o.convert(S.type),Ne=b(S.internalFormat,We,Be,S.colorSpace,S.isVideoTexture);te(me,S,Je);let Ce;const qe=S.mipmaps,it=a&&S.isVideoTexture!==!0&&Ne!==Zv,vt=Te.__version===void 0||ge===!0,je=R(S,ve,Je);if(S.isDepthTexture)Ne=n.DEPTH_COMPONENT,a?S.type===as?Ne=n.DEPTH_COMPONENT32F:S.type===rs?Ne=n.DEPTH_COMPONENT24:S.type===eo?Ne=n.DEPTH24_STENCIL8:Ne=n.DEPTH_COMPONENT16:S.type===as&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===to&&Ne===n.DEPTH_COMPONENT&&S.type!==Bf&&S.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=rs,Be=o.convert(S.type)),S.format===Mr&&Ne===n.DEPTH_COMPONENT&&(Ne=n.DEPTH_STENCIL,S.type!==eo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=eo,Be=o.convert(S.type))),vt&&(it?t.texStorage2D(n.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,We,Be,null));else if(S.isDataTexture)if(qe.length>0&&Je){it&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let be=0,G=qe.length;be<G;be++)Ce=qe[be],it?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ce.width,Ce.height,We,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,be,Ne,Ce.width,Ce.height,0,We,Be,Ce.data);S.generateMipmaps=!1}else it?(vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,We,Be,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,We,Be,ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){it&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ne,qe[0].width,qe[0].height,ve.depth);for(let be=0,G=qe.length;be<G;be++)Ce=qe[be],S.format!==ni?We!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ce.width,Ce.height,ve.depth,We,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Ne,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Ce.width,Ce.height,ve.depth,We,Be,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Ne,Ce.width,Ce.height,ve.depth,0,We,Be,Ce.data)}else{it&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let be=0,G=qe.length;be<G;be++)Ce=qe[be],S.format!==ni?We!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Ce.width,Ce.height,We,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Ne,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Ce.width,Ce.height,We,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,be,Ne,Ce.width,Ce.height,0,We,Be,Ce.data)}else if(S.isDataArrayTexture)it?(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ne,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,We,Be,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,We,Be,ve.data);else if(S.isData3DTexture)it?(vt&&t.texStorage3D(n.TEXTURE_3D,je,Ne,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,We,Be,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,We,Be,ve.data);else if(S.isFramebufferTexture){if(vt)if(it)t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height);else{let be=ve.width,G=ve.height;for(let Me=0;Me<je;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ne,be,G,0,We,Be,null),be>>=1,G>>=1}}else if(qe.length>0&&Je){it&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let be=0,G=qe.length;be<G;be++)Ce=qe[be],it?t.texSubImage2D(n.TEXTURE_2D,be,0,0,We,Be,Ce):t.texImage2D(n.TEXTURE_2D,be,Ne,We,Be,Ce);S.generateMipmaps=!1}else it?(vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,Be,ve)):t.texImage2D(n.TEXTURE_2D,0,Ne,We,Be,ve);_(S,Je)&&g(me),Te.__version=le.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function L(x,S,H){if(S.image.length!==6)return;const me=k(x,S),ge=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+H);const le=i.get(ge);if(ge.version!==le.__version||me===!0){t.activeTexture(n.TEXTURE0+H);const Te=ot.getPrimaries(ot.workingColorSpace),_e=S.colorSpace===Hn?null:ot.getPrimaries(S.colorSpace),Re=S.colorSpace===Hn||Te===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let be=0;be<6;be++)!Ie&&!Fe?ve[be]=y(S.image[be],!1,!0,s.maxCubemapSize):ve[be]=Fe?S.image[be].image:S.image[be],ve[be]=F(S,ve[be]);const Je=ve[0],We=p(Je)||a,Be=o.convert(S.format,S.colorSpace),Ne=o.convert(S.type),Ce=b(S.internalFormat,Be,Ne,S.colorSpace),qe=a&&S.isVideoTexture!==!0,it=le.__version===void 0||me===!0;let vt=R(S,Je,We);te(n.TEXTURE_CUBE_MAP,S,We);let je;if(Ie){qe&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ce,Je.width,Je.height);for(let be=0;be<6;be++){je=ve[be].mipmaps;for(let G=0;G<je.length;G++){const Me=je[G];S.format!==ni?Be!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G,0,0,Me.width,Me.height,Be,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G,Ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G,0,0,Me.width,Me.height,Be,Ne,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G,Ce,Me.width,Me.height,0,Be,Ne,Me.data)}}}else{je=S.mipmaps,qe&&it&&(je.length>0&&vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ce,ve[0].width,ve[0].height));for(let be=0;be<6;be++)if(Fe){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ve[be].width,ve[be].height,Be,Ne,ve[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ce,ve[be].width,ve[be].height,0,Be,Ne,ve[be].data);for(let G=0;G<je.length;G++){const we=je[G].image[be].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G+1,0,0,we.width,we.height,Be,Ne,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G+1,Ce,we.width,we.height,0,Be,Ne,we.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Be,Ne,ve[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ce,Be,Ne,ve[be]);for(let G=0;G<je.length;G++){const Me=je[G];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G+1,0,0,Be,Ne,Me.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,G+1,Ce,Be,Ne,Me.image[be])}}}_(S,We)&&g(n.TEXTURE_CUBE_MAP),le.__version=ge.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function T(x,S,H,me,ge,le){const Te=o.convert(H.format,H.colorSpace),_e=o.convert(H.type),Re=b(H.internalFormat,Te,_e,H.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>le),ve=Math.max(1,S.height>>le);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,le,Re,Fe,ve,S.depth,0,Te,_e,null):t.texImage2D(ge,le,Re,Fe,ve,0,Te,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ge,i.get(H).__webglTexture,0,Z(S)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ge,i.get(H).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(x,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,x),S.depthBuffer&&!S.stencilBuffer){let me=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||$(S)){const ge=S.depthTexture;ge&&ge.isDepthTexture&&(ge.type===as?me=n.DEPTH_COMPONENT32F:ge.type===rs&&(me=n.DEPTH_COMPONENT24));const le=Z(S);$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,me,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,me,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,me,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(S.depthBuffer&&S.stencilBuffer){const me=Z(S);H&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const me=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ge=0;ge<me.length;ge++){const le=me[ge],Te=o.convert(le.format,le.colorSpace),_e=o.convert(le.type),Re=b(le.internalFormat,Te,_e,le.colorSpace),Ie=Z(S);H&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Re,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Re,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Re,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(x,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const me=i.get(S.depthTexture).__webglTexture,ge=Z(S);if(S.depthTexture.format===to)$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(S.depthTexture.format===Mr)$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function X(x){const S=i.get(x),H=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,x)}else if(H){S.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[me]),S.__webglDepthbuffer[me]=n.createRenderbuffer(),ee(S.__webglDepthbuffer[me],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ee(S.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(x,S,H){const me=i.get(x);S!==void 0&&T(me.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&X(x)}function P(x){const S=x.texture,H=i.get(x),me=i.get(S);x.addEventListener("dispose",U),x.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=S.version,r.memory.textures++);const ge=x.isWebGLCubeRenderTarget===!0,le=x.isWebGLMultipleRenderTargets===!0,Te=p(x)||a;if(ge){H.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[_e]=[];for(let Re=0;Re<S.mipmaps.length;Re++)H.__webglFramebuffer[_e][Re]=n.createFramebuffer()}else H.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)H.__webglFramebuffer[_e]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(le)if(s.drawBuffers){const _e=x.texture;for(let Re=0,Ie=_e.length;Re<Ie;Re++){const Fe=i.get(_e[Re]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&$(x)===!1){const _e=le?S:[S];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Ie=_e[Re];H.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[Re]);const Fe=o.convert(Ie.format,Ie.colorSpace),ve=o.convert(Ie.type),Je=b(Ie.internalFormat,Fe,ve,Ie.colorSpace,x.isXRRenderTarget===!0),We=Z(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Je,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,H.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(H.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),te(n.TEXTURE_CUBE_MAP,S,Te);for(let _e=0;_e<6;_e++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)T(H.__webglFramebuffer[_e][Re],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else T(H.__webglFramebuffer[_e],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(S,Te)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const _e=x.texture;for(let Re=0,Ie=_e.length;Re<Ie;Re++){const Fe=_e[Re],ve=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),te(n.TEXTURE_2D,Fe,Te),T(H.__webglFramebuffer,x,Fe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),_(Fe,Te)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?_e=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,me.__webglTexture),te(_e,S,Te),a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)T(H.__webglFramebuffer[Re],x,S,n.COLOR_ATTACHMENT0,_e,Re);else T(H.__webglFramebuffer,x,S,n.COLOR_ATTACHMENT0,_e,0);_(S,Te)&&g(_e),t.unbindTexture()}x.depthBuffer&&X(x)}function ne(x){const S=p(x)||a,H=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let me=0,ge=H.length;me<ge;me++){const le=H[me];if(_(le,S)){const Te=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(le).__webglTexture;t.bindTexture(Te,_e),g(Te),t.unbindTexture()}}}function B(x){if(a&&x.samples>0&&$(x)===!1){const S=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],H=x.width,me=x.height;let ge=n.COLOR_BUFFER_BIT;const le=[],Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(x),Re=x.isWebGLMultipleRenderTargets===!0;if(Re)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){le.push(n.COLOR_ATTACHMENT0+Ie),x.depthBuffer&&le.push(Te);const Fe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Fe===!1&&(x.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Re){const ve=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,H,me,0,0,H,me,ge,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ie]);const Fe=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Z(x){return Math.min(s.maxSamples,x.samples)}function $(x){const S=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(x){const S=r.render.frame;u.get(x)!==S&&(u.set(x,S),x.update())}function F(x,S){const H=x.colorSpace,me=x.format,ge=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Lh||H!==qi&&H!==Hn&&(ot.getTransfer(H)===dt?a===!1?e.has("EXT_sRGB")===!0&&me===ni?(x.format=Lh,x.minFilter=zn,x.generateMipmaps=!1):S=ty.sRGBToLinear(S):(me!==ni||ge!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=O,this.resetTextureUnits=oe,this.setTexture2D=Y,this.setTexture2DArray=K,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=de,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=T,this.useMultisampledRTT=$}function IT(n,e,t){const i=t.isWebGL2;function s(o,r=Hn){let a;const c=ot.getTransfer(r);if(o===fs)return n.UNSIGNED_BYTE;if(o===qv)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Xv)return n.UNSIGNED_SHORT_5_5_5_1;if(o===tS)return n.BYTE;if(o===nS)return n.SHORT;if(o===Bf)return n.UNSIGNED_SHORT;if(o===Wv)return n.INT;if(o===rs)return n.UNSIGNED_INT;if(o===as)return n.FLOAT;if(o===Ua)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===iS)return n.ALPHA;if(o===ni)return n.RGBA;if(o===sS)return n.LUMINANCE;if(o===oS)return n.LUMINANCE_ALPHA;if(o===to)return n.DEPTH_COMPONENT;if(o===Mr)return n.DEPTH_STENCIL;if(o===Lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===rS)return n.RED;if(o===$v)return n.RED_INTEGER;if(o===aS)return n.RG;if(o===jv)return n.RG_INTEGER;if(o===Yv)return n.RGBA_INTEGER;if(o===ld||o===ud||o===dd||o===hd)if(c===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===ld)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ud)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===dd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===hd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===ld)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ud)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===dd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===hd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Vp||o===Wp||o===qp||o===Xp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Vp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Wp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===qp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Xp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Zv)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===$p||o===jp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===$p)return c===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===jp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Yp||o===Zp||o===Kp||o===Jp||o===Qp||o===em||o===tm||o===nm||o===im||o===sm||o===om||o===rm||o===am||o===cm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Yp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Zp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Kp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Jp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Qp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===em)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===tm)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===nm)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===im)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===sm)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===om)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===rm)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===am)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===cm)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===fd||o===lm||o===um)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===fd)return c===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===lm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===um)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===cS||o===dm||o===hm||o===fm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===fd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===dm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===hm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===fm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===eo?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:s}}class NT extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class Od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),h=this._getHandJoint(l,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class kT extends kr{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,v=null;const y=t.getContextAttributes();let p=null,h=null;const _=[],g=[],b=new pe;let R=null;const E=new Cn;E.layers.enable(1),E.viewport=new $t;const A=new Cn;A.layers.enable(2),A.viewport=new $t;const U=[E,A],M=new NT;M.layers.enable(1),M.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let k=_[te];return k===void 0&&(k=new Od,_[te]=k),k.getTargetRaySpace()},this.getControllerGrip=function(te){let k=_[te];return k===void 0&&(k=new Od,_[te]=k),k.getGripSpace()},this.getHand=function(te){let k=_[te];return k===void 0&&(k=new Od,_[te]=k),k.getHandSpace()};function W(te){const k=g.indexOf(te.inputSource);if(k===-1)return;const N=_[k];N!==void 0&&(N.update(te.inputSource,te.frame,l||r),N.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",O);for(let te=0;te<_.length;te++){const k=g[te];k!==null&&(g[te]=null,_[te].disconnect(k))}w=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new uo(m.framebufferWidth,m.framebufferHeight,{format:ni,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let k=null,N=null,L=null;y.depth&&(L=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=y.stencil?Mr:to,N=y.stencil?eo:rs);const T={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:o};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(T),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new uo(f.textureWidth,f.textureHeight,{format:ni,type:fs,depthTexture:new fy(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ee=e.properties.get(h);ee.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(te){for(let k=0;k<te.removed.length;k++){const N=te.removed[k],L=g.indexOf(N);L>=0&&(g[L]=null,_[L].disconnect(N))}for(let k=0;k<te.added.length;k++){const N=te.added[k];let L=g.indexOf(N);if(L===-1){for(let ee=0;ee<_.length;ee++)if(ee>=g.length){g.push(N),L=ee;break}else if(g[ee]===null){g[ee]=N,L=ee;break}if(L===-1)break}const T=_[L];T&&T.connect(N)}}const q=new I,Y=new I;function K(te,k,N){q.setFromMatrixPosition(k.matrixWorld),Y.setFromMatrixPosition(N.matrixWorld);const L=q.distanceTo(Y),T=k.projectionMatrix.elements,ee=N.projectionMatrix.elements,ce=T[14]/(T[10]-1),X=T[14]/(T[10]+1),de=(T[9]+1)/T[5],P=(T[9]-1)/T[5],ne=(T[8]-1)/T[0],B=(ee[8]+1)/ee[0],Z=ce*ne,$=ce*B,fe=L/(-ne+B),F=fe*-ne;k.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(F),te.translateZ(fe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const x=ce+fe,S=X+fe,H=Z-F,me=$+(L-F),ge=de*X/S*x,le=P*X/S*x;te.projectionMatrix.makePerspective(H,me,ge,le,x,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function z(te,k){k===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(k.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;M.near=A.near=E.near=te.near,M.far=A.far=E.far=te.far,(w!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,V=M.far);const k=te.parent,N=M.cameras;z(M,k);for(let L=0;L<N.length;L++)z(N[L],k);N.length===2?K(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),Q(te,M,k)};function Q(te,k,N){N===null?te.matrix.copy(k.matrixWorld):(te.matrix.copy(N.matrixWorld),te.matrix.invert(),te.matrix.multiply(k.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(k.projectionMatrix),te.projectionMatrixInverse.copy(k.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Fa*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let ae=null;function ue(te,k){if(u=k.getViewerPose(l||r),v=k,u!==null){const N=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let L=!1;N.length!==M.cameras.length&&(M.cameras.length=0,L=!0);for(let T=0;T<N.length;T++){const ee=N[T];let ce=null;if(m!==null)ce=m.getViewport(ee);else{const de=d.getViewSubImage(f,ee);ce=de.viewport,T===0&&(e.setRenderTargetTextures(h,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(h))}let X=U[T];X===void 0&&(X=new Cn,X.layers.enable(T),X.viewport=new $t,U[T]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),T===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),L===!0&&M.cameras.push(X)}}for(let N=0;N<_.length;N++){const L=g[N],T=_[N];L!==null&&T!==void 0&&T.update(L,k,l||r)}ae&&ae(te,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),v=null}const ye=new dy;ye.setAnimationLoop(ue),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}}function OT(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,cy(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,_,g,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(p,h):h.isMeshToonMaterial?(o(p,h),d(p,h)):h.isMeshPhongMaterial?(o(p,h),u(p,h)):h.isMeshStandardMaterial?(o(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(o(p,h),v(p,h)):h.isMeshDepthMaterial?o(p,h):h.isMeshDistanceMaterial?(o(p,h),y(p,h)):h.isMeshNormalMaterial?o(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,_,g):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===wn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===wn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,_,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=g*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function UT(n,e,t,i){let s={},o={},r=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,g){const b=g.program;i.uniformBlockBinding(_,b)}function l(_,g){let b=s[_.id];b===void 0&&(v(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(_,R);const E=e.render.frame;o[_.id]!==E&&(f(_),o[_.id]=E)}function u(_){const g=d();_.__bindingPointIndex=g;const b=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,b),b}function d(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=s[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,A=b.length;E<A;E++){const U=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,w=U.length;M<w;M++){const V=U[M];if(m(V,E,M,R)===!0){const W=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let O=0;for(let q=0;q<oe.length;q++){const Y=oe[q],K=y(Y);typeof Y=="number"||typeof Y=="boolean"?(V.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,W+O,V.__data)):Y.isMatrix3?(V.__data[0]=Y.elements[0],V.__data[1]=Y.elements[1],V.__data[2]=Y.elements[2],V.__data[3]=0,V.__data[4]=Y.elements[3],V.__data[5]=Y.elements[4],V.__data[6]=Y.elements[5],V.__data[7]=0,V.__data[8]=Y.elements[6],V.__data[9]=Y.elements[7],V.__data[10]=Y.elements[8],V.__data[11]=0):(Y.toArray(V.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,g,b,R){const E=_.value,A=g+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const U=R[A];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return R[A]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function v(_){const g=_.uniforms;let b=0;const R=16;for(let A=0,U=g.length;A<U;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let w=0,V=M.length;w<V;w++){const W=M[w],oe=Array.isArray(W.value)?W.value:[W.value];for(let O=0,q=oe.length;O<q;O++){const Y=oe[O],K=y(Y),z=b%R;z!==0&&R-z<K.boundary&&(b+=R-z),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=K.storage}}}const E=b%R;return E>0&&(b+=R-E),_.__size=b,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const b=r.indexOf(g.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[g.id]),delete s[g.id],delete o[g.id]}function h(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:h}}class qf{constructor(e={}){const{canvas:t=NS(),context:i=null,depth:s=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=hs,this.toneMappingExposure=1;const g=this;let b=!1,R=0,E=0,A=null,U=-1,M=null;const w=new $t,V=new $t;let W=null;const oe=new Ee(0);let O=0,q=t.width,Y=t.height,K=1,z=null,Q=null;const ae=new $t(0,0,q,Y),ue=new $t(0,0,q,Y);let ye=!1;const te=new Vf;let k=!1,N=!1,L=null;const T=new Ke,ee=new pe,ce=new I,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return A===null?K:1}let P=i;function ne(C,J){for(let se=0;se<C.length;se++){const re=C[se],ie=t.getContext(re,J);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){const J=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&J.shift(),P=ne(J,C),P===null)throw ne(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,Z,$,fe,F,x,S,H,me,ge,le,Te,_e,Re,Ie,Fe,ve,Je,We,Be,Ne,Ce,qe,it;function vt(){B=new $E(P),Z=new GE(P,B,e),B.init(Z),Ce=new IT(P,B,Z),$=new CT(P,B,Z),fe=new ZE(P),F=new gT,x=new PT(P,B,$,F,Z,Ce,fe),S=new VE(g),H=new XE(g),me=new sM(P,Z),qe=new BE(P,B,me,Z),ge=new jE(P,me,fe,qe),le=new eA(P,ge,me,fe),We=new QE(P,Z,x),Fe=new HE(F),Te=new mT(g,S,H,B,Z,qe,Fe),_e=new OT(g,F),Re=new yT,Ie=new wT(B,Z),Je=new FE(g,S,H,$,le,f,c),ve=new LT(g,le,Z),it=new UT(P,fe,Z,$),Be=new zE(P,B,fe,Z),Ne=new YE(P,B,fe,Z),fe.programs=Te.programs,g.capabilities=Z,g.extensions=B,g.properties=F,g.renderLists=Re,g.shadowMap=ve,g.state=$,g.info=fe}vt();const je=new kT(g,P);this.xr=je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(q,Y,!1))},this.getSize=function(C){return C.set(q,Y)},this.setSize=function(C,J,se=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,Y=J,t.width=Math.floor(C*K),t.height=Math.floor(J*K),se===!0&&(t.style.width=C+"px",t.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set(q*K,Y*K).floor()},this.setDrawingBufferSize=function(C,J,se){q=C,Y=J,K=se,t.width=Math.floor(C*se),t.height=Math.floor(J*se),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,J,se,re){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,J,se,re),$.viewport(w.copy(ae).multiplyScalar(K).floor())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,J,se,re){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,J,se,re),$.scissor(V.copy(ue).multiplyScalar(K).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){$.setScissorTest(ye=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,J=!0,se=!0){let re=0;if(C){let ie=!1;if(A!==null){const Le=A.texture.format;ie=Le===Yv||Le===jv||Le===$v}if(ie){const Le=A.texture.type,Pe=Le===fs||Le===rs||Le===Bf||Le===eo||Le===qv||Le===Xv,Oe=Je.getClearColor(),ze=Je.getClearAlpha(),$e=Oe.r,He=Oe.g,Ve=Oe.b;Pe?(m[0]=$e,m[1]=He,m[2]=Ve,m[3]=ze,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=$e,v[1]=He,v[2]=Ve,v[3]=ze,P.clearBufferiv(P.COLOR,0,v))}else re|=P.COLOR_BUFFER_BIT}J&&(re|=P.DEPTH_BUFFER_BIT),se&&(re|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),Ie.dispose(),F.dispose(),S.dispose(),H.dispose(),le.dispose(),qe.dispose(),it.dispose(),Te.dispose(),je.dispose(),je.removeEventListener("sessionstart",ln),je.removeEventListener("sessionend",ct),L&&(L.dispose(),L=null),un.stop()};function be(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=fe.autoReset,J=ve.enabled,se=ve.autoUpdate,re=ve.needsUpdate,ie=ve.type;vt(),fe.autoReset=C,ve.enabled=J,ve.autoUpdate=se,ve.needsUpdate=re,ve.type=ie}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const J=C.target;J.removeEventListener("dispose",we),Ue(J)}function Ue(C){ke(C),F.remove(C)}function ke(C){const J=F.get(C).programs;J!==void 0&&(J.forEach(function(se){Te.releaseProgram(se)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,se,re,ie,Le){J===null&&(J=X);const Pe=ie.isMesh&&ie.matrixWorld.determinant()<0,Oe=O_(C,J,se,re,ie);$.setMaterial(re,Pe);let ze=se.index,$e=1;if(re.wireframe===!0){if(ze=ge.getWireframeAttribute(se),ze===void 0)return;$e=2}const He=se.drawRange,Ve=se.attributes.position;let wt=He.start*$e,An=(He.start+He.count)*$e;Le!==null&&(wt=Math.max(wt,Le.start*$e),An=Math.min(An,(Le.start+Le.count)*$e)),ze!==null?(wt=Math.max(wt,0),An=Math.min(An,ze.count)):Ve!=null&&(wt=Math.max(wt,0),An=Math.min(An,Ve.count));const Gt=An-wt;if(Gt<0||Gt===1/0)return;qe.setup(ie,re,Oe,se,ze);let Ti,ft=Be;if(ze!==null&&(Ti=me.get(ze),ft=Ne,ft.setIndex(Ti)),ie.isMesh)re.wireframe===!0?($.setLineWidth(re.wireframeLinewidth*de()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(ie.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),$.setLineWidth(Ye*de()),ie.isLineSegments?ft.setMode(P.LINES):ie.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else ie.isPoints?ft.setMode(P.POINTS):ie.isSprite&&ft.setMode(P.TRIANGLES);if(ie.isBatchedMesh)ft.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)ft.renderInstances(wt,Gt,ie.count);else if(se.isInstancedBufferGeometry){const Ye=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Qu=Math.min(se.instanceCount,Ye);ft.renderInstances(wt,Gt,Qu)}else ft.render(wt,Gt)};function rt(C,J,se){C.transparent===!0&&C.side===Kt&&C.forceSinglePass===!1?(C.side=wn,C.needsUpdate=!0,uc(C,J,se),C.side=ys,C.needsUpdate=!0,uc(C,J,se),C.side=Kt):uc(C,J,se)}this.compile=function(C,J,se=null){se===null&&(se=C),p=Ie.get(se),p.init(),_.push(p),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(J.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),C!==se&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(J.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),p.setupLights(g._useLegacyLights);const re=new Set;return C.traverse(function(ie){const Le=ie.material;if(Le)if(Array.isArray(Le))for(let Pe=0;Pe<Le.length;Pe++){const Oe=Le[Pe];rt(Oe,se,ie),re.add(Oe)}else rt(Le,se,ie),re.add(Le)}),_.pop(),p=null,re},this.compileAsync=function(C,J,se=null){const re=this.compile(C,J,se);return new Promise(ie=>{function Le(){if(re.forEach(function(Pe){F.get(Pe).currentProgram.isReady()&&re.delete(Pe)}),re.size===0){ie(C);return}setTimeout(Le,10)}B.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let at=null;function zt(C){at&&at(C)}function ln(){un.stop()}function ct(){un.start()}const un=new dy;un.setAnimationLoop(zt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(C){at=C,je.setAnimationLoop(C),C===null?un.stop():un.start()},je.addEventListener("sessionstart",ln),je.addEventListener("sessionend",ct),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(J),J=je.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,J,A),p=Ie.get(C,_.length),p.init(),_.push(p),T.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),te.setFromProjectionMatrix(T),N=this.localClippingEnabled,k=Fe.init(this.clippingPlanes,N),y=Re.get(C,h.length),y.init(),h.push(y),ui(C,J,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(z,Q),this.info.render.frame++,k===!0&&Fe.beginShadows();const se=p.state.shadowsArray;if(ve.render(se,C,J),k===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(y,C),p.setupLights(g._useLegacyLights),J.isArrayCamera){const re=J.cameras;for(let ie=0,Le=re.length;ie<Le;ie++){const Pe=re[ie];Cp(y,C,Pe,Pe.viewport)}}else Cp(y,C,J);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,J),qe.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ui(C,J,se,re){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){re&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(T);const Pe=le.update(C),Oe=C.material;Oe.visible&&y.push(C,Pe,Oe,se,ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Pe=le.update(C),Oe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ce.copy(Pe.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(T)),Array.isArray(Oe)){const ze=Pe.groups;for(let $e=0,He=ze.length;$e<He;$e++){const Ve=ze[$e],wt=Oe[Ve.materialIndex];wt&&wt.visible&&y.push(C,Pe,wt,se,ce.z,Ve)}}else Oe.visible&&y.push(C,Pe,Oe,se,ce.z,null)}}const Le=C.children;for(let Pe=0,Oe=Le.length;Pe<Oe;Pe++)ui(Le[Pe],J,se,re)}function Cp(C,J,se,re){const ie=C.opaque,Le=C.transmissive,Pe=C.transparent;p.setupLightsView(se),k===!0&&Fe.setGlobalState(g.clippingPlanes,se),Le.length>0&&k_(ie,Le,J,se),re&&$.viewport(w.copy(re)),ie.length>0&&lc(ie,J,se),Le.length>0&&lc(Le,J,se),Pe.length>0&&lc(Pe,J,se),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function k_(C,J,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Le=Z.isWebGL2;L===null&&(L=new uo(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?Ua:fs,minFilter:Oa,samples:Le?4:0})),g.getDrawingBufferSize(ee),Le?L.setSize(ee.x,ee.y):L.setSize(Vl(ee.x),Vl(ee.y));const Pe=g.getRenderTarget();g.setRenderTarget(L),g.getClearColor(oe),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const Oe=g.toneMapping;g.toneMapping=hs,lc(C,se,re),x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L);let ze=!1;for(let $e=0,He=J.length;$e<He;$e++){const Ve=J[$e],wt=Ve.object,An=Ve.geometry,Gt=Ve.material,Ti=Ve.group;if(Gt.side===Kt&&wt.layers.test(re.layers)){const ft=Gt.side;Gt.side=wn,Gt.needsUpdate=!0,Pp(wt,se,re,An,Gt,Ti),Gt.side=ft,Gt.needsUpdate=!0,ze=!0}}ze===!0&&(x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L)),g.setRenderTarget(Pe),g.setClearColor(oe,O),g.toneMapping=Oe}function lc(C,J,se){const re=J.isScene===!0?J.overrideMaterial:null;for(let ie=0,Le=C.length;ie<Le;ie++){const Pe=C[ie],Oe=Pe.object,ze=Pe.geometry,$e=re===null?Pe.material:re,He=Pe.group;Oe.layers.test(se.layers)&&Pp(Oe,J,se,ze,$e,He)}}function Pp(C,J,se,re,ie,Le){C.onBeforeRender(g,J,se,re,ie,Le),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(g,J,se,re,C,Le),ie.transparent===!0&&ie.side===Kt&&ie.forceSinglePass===!1?(ie.side=wn,ie.needsUpdate=!0,g.renderBufferDirect(se,J,re,ie,C,Le),ie.side=ys,ie.needsUpdate=!0,g.renderBufferDirect(se,J,re,ie,C,Le),ie.side=Kt):g.renderBufferDirect(se,J,re,ie,C,Le),C.onAfterRender(g,J,se,re,ie,Le)}function uc(C,J,se){J.isScene!==!0&&(J=X);const re=F.get(C),ie=p.state.lights,Le=p.state.shadowsArray,Pe=ie.state.version,Oe=Te.getParameters(C,ie.state,Le,J,se),ze=Te.getProgramCacheKey(Oe);let $e=re.programs;re.environment=C.isMeshStandardMaterial?J.environment:null,re.fog=J.fog,re.envMap=(C.isMeshStandardMaterial?H:S).get(C.envMap||re.environment),$e===void 0&&(C.addEventListener("dispose",we),$e=new Map,re.programs=$e);let He=$e.get(ze);if(He!==void 0){if(re.currentProgram===He&&re.lightsStateVersion===Pe)return Np(C,Oe),He}else Oe.uniforms=Te.getUniforms(C),C.onBuild(se,Oe,g),C.onBeforeCompile(Oe,g),He=Te.acquireProgram(Oe,ze),$e.set(ze,He),re.uniforms=Oe.uniforms;const Ve=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Fe.uniform),Np(C,Oe),re.needsLights=F_(C),re.lightsStateVersion=Pe,re.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.currentProgram=He,re.uniformsList=null,He}function Ip(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=vl.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Np(C,J){const se=F.get(C);se.outputColorSpace=J.outputColorSpace,se.batching=J.batching,se.instancing=J.instancing,se.instancingColor=J.instancingColor,se.skinning=J.skinning,se.morphTargets=J.morphTargets,se.morphNormals=J.morphNormals,se.morphColors=J.morphColors,se.morphTargetsCount=J.morphTargetsCount,se.numClippingPlanes=J.numClippingPlanes,se.numIntersection=J.numClipIntersection,se.vertexAlphas=J.vertexAlphas,se.vertexTangents=J.vertexTangents,se.toneMapping=J.toneMapping}function O_(C,J,se,re,ie){J.isScene!==!0&&(J=X),x.resetTextureUnits();const Le=J.fog,Pe=re.isMeshStandardMaterial?J.environment:null,Oe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:qi,ze=(re.isMeshStandardMaterial?H:S).get(re.envMap||Pe),$e=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,He=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ve=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,An=!!se.morphAttributes.color;let Gt=hs;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Gt=g.toneMapping);const Ti=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ft=Ti!==void 0?Ti.length:0,Ye=F.get(re),Qu=p.state.lights;if(k===!0&&(N===!0||C!==M)){const On=C===M&&re.id===U;Fe.setState(re,C,On)}let yt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Qu.state.version||Ye.outputColorSpace!==Oe||ie.isBatchedMesh&&Ye.batching===!1||!ie.isBatchedMesh&&Ye.batching===!0||ie.isInstancedMesh&&Ye.instancing===!1||!ie.isInstancedMesh&&Ye.instancing===!0||ie.isSkinnedMesh&&Ye.skinning===!1||!ie.isSkinnedMesh&&Ye.skinning===!0||ie.isInstancedMesh&&Ye.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ye.instancingColor===!1&&ie.instanceColor!==null||Ye.envMap!==ze||re.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==He||Ye.morphTargets!==Ve||Ye.morphNormals!==wt||Ye.morphColors!==An||Ye.toneMapping!==Gt||Z.isWebGL2===!0&&Ye.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,Ye.__version=re.version);let As=Ye.currentProgram;yt===!0&&(As=uc(re,J,ie));let Dp=!1,zr=!1,ed=!1;const en=As.getUniforms(),Ts=Ye.uniforms;if($.useProgram(As.program)&&(Dp=!0,zr=!0,ed=!0),re.id!==U&&(U=re.id,zr=!0),Dp||M!==C){en.setValue(P,"projectionMatrix",C.projectionMatrix),en.setValue(P,"viewMatrix",C.matrixWorldInverse);const On=en.map.cameraPosition;On!==void 0&&On.setValue(P,ce.setFromMatrixPosition(C.matrixWorld)),Z.logarithmicDepthBuffer&&en.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&en.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,zr=!0,ed=!0)}if(ie.isSkinnedMesh){en.setOptional(P,ie,"bindMatrix"),en.setOptional(P,ie,"bindMatrixInverse");const On=ie.skeleton;On&&(Z.floatVertexTextures?(On.boneTexture===null&&On.computeBoneTexture(),en.setValue(P,"boneTexture",On.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(en.setOptional(P,ie,"batchingTexture"),en.setValue(P,"batchingTexture",ie._matricesTexture,x));const td=se.morphAttributes;if((td.position!==void 0||td.normal!==void 0||td.color!==void 0&&Z.isWebGL2===!0)&&We.update(ie,se,As),(zr||Ye.receiveShadow!==ie.receiveShadow)&&(Ye.receiveShadow=ie.receiveShadow,en.setValue(P,"receiveShadow",ie.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ts.envMap.value=ze,Ts.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),zr&&(en.setValue(P,"toneMappingExposure",g.toneMappingExposure),Ye.needsLights&&U_(Ts,ed),Le&&re.fog===!0&&_e.refreshFogUniforms(Ts,Le),_e.refreshMaterialUniforms(Ts,re,K,Y,L),vl.upload(P,Ip(Ye),Ts,x)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(vl.upload(P,Ip(Ye),Ts,x),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&en.setValue(P,"center",ie.center),en.setValue(P,"modelViewMatrix",ie.modelViewMatrix),en.setValue(P,"normalMatrix",ie.normalMatrix),en.setValue(P,"modelMatrix",ie.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const On=re.uniformsGroups;for(let nd=0,B_=On.length;nd<B_;nd++)if(Z.isWebGL2){const kp=On[nd];it.update(kp,As),it.bind(kp,As)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return As}function U_(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function F_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,J,se){F.get(C.texture).__webglTexture=J,F.get(C.depthTexture).__webglTexture=se;const re=F.get(C);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,J){const se=F.get(C);se.__webglFramebuffer=J,se.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,se=0){A=C,R=J,E=se;let re=!0,ie=null,Le=!1,Pe=!1;if(C){const ze=F.get(C);ze.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),re=!1):ze.__webglFramebuffer===void 0?x.setupRenderTarget(C):ze.__hasExternalTextures&&x.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);const He=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[J])?ie=He[J][se]:ie=He[J],Le=!0):Z.isWebGL2&&C.samples>0&&x.useMultisampledRTT(C)===!1?ie=F.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?ie=He[se]:ie=He,w.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest}else w.copy(ae).multiplyScalar(K).floor(),V.copy(ue).multiplyScalar(K).floor(),W=ye;if($.bindFramebuffer(P.FRAMEBUFFER,ie)&&Z.drawBuffers&&re&&$.drawBuffers(C,ie),$.viewport(w),$.scissor(V),$.setScissorTest(W),Le){const ze=F.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+J,ze.__webglTexture,se)}else if(Pe){const ze=F.get(C.texture),$e=J||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,se||0,$e)}U=-1},this.readRenderTargetPixels=function(C,J,se,re,ie,Le,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){$.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const ze=C.texture,$e=ze.format,He=ze.type;if($e!==ni&&Ce.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===Ua&&(B.has("EXT_color_buffer_half_float")||Z.isWebGL2&&B.has("EXT_color_buffer_float"));if(He!==fs&&Ce.convert(He)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===as&&(Z.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-re&&se>=0&&se<=C.height-ie&&P.readPixels(J,se,re,ie,Ce.convert($e),Ce.convert(He),Le)}finally{const ze=A!==null?F.get(A).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,J,se=0){const re=Math.pow(2,-se),ie=Math.floor(J.image.width*re),Le=Math.floor(J.image.height*re);x.setTexture2D(J,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,C.x,C.y,ie,Le),$.unbindTexture()},this.copyTextureToTexture=function(C,J,se,re=0){const ie=J.image.width,Le=J.image.height,Pe=Ce.convert(se.format),Oe=Ce.convert(se.type);x.setTexture2D(se,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,se.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,se.unpackAlignment),J.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,C.x,C.y,ie,Le,Pe,Oe,J.image.data):J.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,C.x,C.y,J.mipmaps[0].width,J.mipmaps[0].height,Pe,J.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,re,C.x,C.y,Pe,Oe,J.image),re===0&&se.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,J,se,re,ie=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Oe=C.max.z-C.min.z+1,ze=Ce.convert(re.format),$e=Ce.convert(re.type);let He;if(re.isData3DTexture)x.setTexture3D(re,0),He=P.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)x.setTexture2DArray(re,0),He=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,re.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,re.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),wt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),An=P.getParameter(P.UNPACK_SKIP_PIXELS),Gt=P.getParameter(P.UNPACK_SKIP_ROWS),Ti=P.getParameter(P.UNPACK_SKIP_IMAGES),ft=se.isCompressedTexture?se.mipmaps[ie]:se.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?P.texSubImage3D(He,ie,J.x,J.y,J.z,Le,Pe,Oe,ze,$e,ft.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(He,ie,J.x,J.y,J.z,Le,Pe,Oe,ze,ft.data)):P.texSubImage3D(He,ie,J.x,J.y,J.z,Le,Pe,Oe,ze,$e,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,An),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ti),ie===0&&re.generateMipmaps&&P.generateMipmap(He),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?x.setTextureCube(C,0):C.isData3DTexture?x.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?x.setTexture2DArray(C,0):x.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,$.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zf?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Fu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?no:Kv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===no?Ot:qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FT extends qf{}FT.prototype.isWebGL1Renderer=!0;class ec{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xy extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ih extends Dt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ho=new Ke,ng=new Ke,kc=[],ig=new _o,BT=new Ke,Xr=new nt,$r=new Ms;class an extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ih(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,BT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _o),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ho),ig.copy(e.boundingBox).applyMatrix4(Ho),this.boundingBox.union(ig)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ho),$r.copy(e.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),e.ray.intersectsSphere($r)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ho),ng.multiplyMatrices(i,Ho),Xr.matrixWorld=ng,Xr.raycast(e,kc);for(let r=0,a=kc.length;r<a;r++){const c=kc[r];c.instanceId=o,c.object=this,t.push(c)}kc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ih(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zu extends bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sg=new I,og=new I,rg=new Ke,Ud=new Hf,Oc=new Ms;class _y extends Ut{constructor(e=new gt,t=new zu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)sg.fromBufferAttribute(t,s-1),og.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=sg.distanceTo(og);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oc.copy(i.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=o,e.ray.intersectsSphere(Oc)===!1)return;rg.copy(s).invert(),Ud.copy(e.ray).applyMatrix4(rg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,d=new I,f=new I,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const h=Math.max(0,r.start),_=Math.min(v.count,r.start+r.count);for(let g=h,b=_-1;g<b;g+=m){const R=v.getX(g),E=v.getX(g+1);if(l.fromBufferAttribute(p,R),u.fromBufferAttribute(p,E),Ud.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let g=h,b=_-1;g<b;g+=m){if(l.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),Ud.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const ag=new I,cg=new I;class by extends _y{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)ag.fromBufferAttribute(t,s),cg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ag.distanceTo(cg);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sy extends bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lg=new Ke,Nh=new Hf,Uc=new Ms,Fc=new I;class My extends Ut{constructor(e=new gt,t=new Sy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uc.copy(i.boundingSphere),Uc.applyMatrix4(s),Uc.radius+=o,e.ray.intersectsSphere(Uc)===!1)return;lg.copy(s).invert(),Nh.copy(e.ray).applyMatrix4(lg);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let v=f,y=m;v<y;v++){const p=l.getX(v);Fc.fromBufferAttribute(d,p),ug(Fc,p,c,s,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,y=m;v<y;v++)Fc.fromBufferAttribute(d,v),ug(Fc,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function ug(n,e,t,i,s,o,r){const a=Nh.distanceSqToPoint(n);if(a<t){const c=new I;Nh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class Ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],f=i[s+1]-u,m=(r-u)/f;return(s+m)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=t||(r.isVector2?new pe:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],o=[],r=[],a=new I,c=new Ke;for(let m=0;m<=e;m++){const v=m/e;s[m]=this.getTangentAt(v,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let m=1;m<=e;m++){if(o[m]=o[m-1].clone(),r[m]=r[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Zt(s[m-1].dot(s[m]),-1,1));o[m].applyMatrix4(c.makeRotationAxis(a,v))}r[m].crossVectors(s[m],o[m])}if(t===!0){let m=Math.acos(Zt(o[0].dot(o[e]),-1,1));m/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(m=-m);for(let v=1;v<=e;v++)o[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xf extends Ai{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new pe,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*d+this.aX,l=f*d+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zT extends Xf{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function $f(){let n=0,e=0,t=0,i=0;function s(o,r,a,c){n=o,e=a,t=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,d){let f=(r-o)/l-(a-o)/(l+u)+(a-r)/u,m=(a-r)/u-(c-r)/(u+d)+(c-a)/d;f*=u,m*=u,s(r,a,f,m)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const Bc=new I,Fd=new $f,Bd=new $f,zd=new $f;class GT extends Ai{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Bc.subVectors(s[0],s[1]).add(s[0]),l=Bc);const d=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Bc.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);y<1e-4&&(y=1),v<1e-4&&(v=y),p<1e-4&&(p=y),Fd.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,v,y,p),Bd.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,v,y,p),zd.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,v,y,p)}else this.curveType==="catmullrom"&&(Fd.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Bd.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),zd.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Fd.calc(c),Bd.calc(c),zd.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dg(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+r)*c+(-3*t+3*i-2*o-r)*a+o*n+t}function HT(n,e){const t=1-n;return t*t*e}function VT(n,e){return 2*(1-n)*n*e}function WT(n,e){return n*n*e}function ya(n,e,t,i){return HT(n,e)+VT(n,t)+WT(n,i)}function qT(n,e){const t=1-n;return t*t*t*e}function XT(n,e){const t=1-n;return 3*t*t*n*e}function $T(n,e){return 3*(1-n)*n*n*e}function jT(n,e){return n*n*n*e}function xa(n,e,t,i,s){return qT(n,e)+XT(n,t)+$T(n,i)+jT(n,s)}class wy extends Ai{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(xa(e,s.x,o.x,r.x,a.x),xa(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class YT extends Ai{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(xa(e,s.x,o.x,r.x,a.x),xa(e,s.y,o.y,r.y,a.y),xa(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ey extends Ai{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ZT extends Ai{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ay extends Ai{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(ya(e,s.x,o.x,r.x),ya(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class KT extends Ai{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(ya(e,s.x,o.x,r.x),ya(e,s.y,o.y,r.y),ya(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ty extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(dg(a,c.x,l.x,u.x,d.x),dg(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var Dh=Object.freeze({__proto__:null,ArcCurve:zT,CatmullRomCurve3:GT,CubicBezierCurve:wy,CubicBezierCurve3:YT,EllipseCurve:Xf,LineCurve:Ey,LineCurve3:ZT,QuadraticBezierCurve:Ay,QuadraticBezierCurve3:KT,SplineCurve:Ty});class JT extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Dh[s.type]().fromJSON(s))}return this}}class ur extends JT{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ey(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new Ay(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new wy(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Ty(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,o,r,a,c),this}absellipse(e,t,i,s,o,r,a,c){const l=new Xf(e,t,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gu extends gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],r=[],a=[],c=[],l=new I,u=new pe;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=i+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[f]/e+1)/2,u.y=(r[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xn extends gt{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],f=[],m=[];let v=0;const y=[],p=i/2;let h=0;_(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(m,2));function _(){const b=new I,R=new I;let E=0;const A=(t-e)/i;for(let U=0;U<=o;U++){const M=[],w=U/o,V=w*(t-e)+e;for(let W=0;W<=s;W++){const oe=W/s,O=oe*c+a,q=Math.sin(O),Y=Math.cos(O);R.x=V*q,R.y=-w*i+p,R.z=V*Y,d.push(R.x,R.y,R.z),b.set(q,A,Y).normalize(),f.push(b.x,b.y,b.z),m.push(oe,1-w),M.push(v++)}y.push(M)}for(let U=0;U<s;U++)for(let M=0;M<o;M++){const w=y[M][U],V=y[M+1][U],W=y[M+1][U+1],oe=y[M][U+1];u.push(w,V,oe),u.push(V,W,oe),E+=6}l.addGroup(h,E,0),h+=E}function g(b){const R=v,E=new pe,A=new I;let U=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),v++;const V=v;for(let W=0;W<=s;W++){const O=W/s*c+a,q=Math.cos(O),Y=Math.sin(O);A.x=M*Y,A.y=p*w,A.z=M*q,d.push(A.x,A.y,A.z),f.push(0,w,0),E.x=q*.5+.5,E.y=Y*.5*w+.5,m.push(E.x,E.y),v++}for(let W=0;W<s;W++){const oe=R+W,O=V+W;b===!0?u.push(O,O+1,oe):u.push(O+1,O,oe),U+=3}l.addGroup(h,U,b===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends Xn{constructor(e=1,t=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jf extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],r=[];a(s),l(i),u(),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(o.slice(),3)),this.setAttribute("uv",new Qe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const g=new I,b=new I,R=new I;for(let E=0;E<t.length;E+=3)m(t[E+0],g),m(t[E+1],b),m(t[E+2],R),c(g,b,R,_)}function c(_,g,b,R){const E=R+1,A=[];for(let U=0;U<=E;U++){A[U]=[];const M=_.clone().lerp(b,U/E),w=g.clone().lerp(b,U/E),V=E-U;for(let W=0;W<=V;W++)W===0&&U===E?A[U][W]=M:A[U][W]=M.clone().lerp(w,W/V)}for(let U=0;U<E;U++)for(let M=0;M<2*(E-U)-1;M++){const w=Math.floor(M/2);M%2===0?(f(A[U][w+1]),f(A[U+1][w]),f(A[U][w])):(f(A[U][w+1]),f(A[U+1][w+1]),f(A[U+1][w]))}}function l(_){const g=new I;for(let b=0;b<o.length;b+=3)g.x=o[b+0],g.y=o[b+1],g.z=o[b+2],g.normalize().multiplyScalar(_),o[b+0]=g.x,o[b+1]=g.y,o[b+2]=g.z}function u(){const _=new I;for(let g=0;g<o.length;g+=3){_.x=o[g+0],_.y=o[g+1],_.z=o[g+2];const b=p(_)/2/Math.PI+.5,R=h(_)/Math.PI+.5;r.push(b,1-R)}v(),d()}function d(){for(let _=0;_<r.length;_+=6){const g=r[_+0],b=r[_+2],R=r[_+4],E=Math.max(g,b,R),A=Math.min(g,b,R);E>.9&&A<.1&&(g<.2&&(r[_+0]+=1),b<.2&&(r[_+2]+=1),R<.2&&(r[_+4]+=1))}}function f(_){o.push(_.x,_.y,_.z)}function m(_,g){const b=_*3;g.x=e[b+0],g.y=e[b+1],g.z=e[b+2]}function v(){const _=new I,g=new I,b=new I,R=new I,E=new pe,A=new pe,U=new pe;for(let M=0,w=0;M<o.length;M+=9,w+=6){_.set(o[M+0],o[M+1],o[M+2]),g.set(o[M+3],o[M+4],o[M+5]),b.set(o[M+6],o[M+7],o[M+8]),E.set(r[w+0],r[w+1]),A.set(r[w+2],r[w+3]),U.set(r[w+4],r[w+5]),R.copy(_).add(g).add(b).divideScalar(3);const V=p(R);y(E,w+0,_,V),y(A,w+2,g,V),y(U,w+4,b,V)}}function y(_,g,b,R){R<0&&_.x===1&&(r[g]=_.x-1),b.x===0&&b.z===0&&(r[g]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jf(e.vertices,e.indices,e.radius,e.details)}}const zc=new I,Gc=new I,Gd=new I,Hc=new Gn;class Ry extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(cr*t),r=e.getIndex(),a=e.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let v=0;v<c;v+=3){r?(l[0]=r.getX(v),l[1]=r.getX(v+1),l[2]=r.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:y,b:p,c:h}=Hc;if(y.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),h.fromBufferAttribute(a,l[2]),Hc.getNormal(Gd),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const g=(_+1)%3,b=d[_],R=d[g],E=Hc[u[_]],A=Hc[u[g]],U=`${b}_${R}`,M=`${R}_${b}`;M in f&&f[M]?(Gd.dot(f[M].normal)<=o&&(m.push(E.x,E.y,E.z),m.push(A.x,A.y,A.z)),f[M]=null):U in f||(f[U]={index0:l[_],index1:l[g],normal:Gd.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:p}=f[v];zc.fromBufferAttribute(a,y),Gc.fromBufferAttribute(a,p),m.push(zc.x,zc.y,zc.z),m.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new Qe(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class io extends ur{constructor(e){super(e),this.uuid=xo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new ur().fromJSON(s))}return this}}const QT={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=Ly(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,d,f,m;if(i&&(o=s1(n,e,o,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let v=t;v<s;v+=t)d=n[v],f=n[v+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Ba(o,r,t,a,c,m,0),r}};function Ly(n,e,t,i,s){let o,r;if(s===m1(n,e,t,i)>0)for(o=e;o<t;o+=i)r=hg(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=hg(o,n[o],n[o+1],r);return r&&Hu(r,r.next)&&(Ga(r),r=r.next),r}function ho(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Hu(t,t.next)||pt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ba(n,e,t,i,s,o,r){if(!n)return;!r&&o&&l1(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?t1(n,i,s,o):e1(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Ga(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=n1(ho(n),e,t),Ba(n,e,t,i,s,o,2)):r===2&&i1(n,e,t,i,s,o):Ba(ho(n),e,t,i,s,o,1);break}}}function e1(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,c=t.y,l=i.y,u=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,m=a>c?a>l?a:l:c>l?c:l;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=d&&v.y<=m&&Qo(s,a,o,c,r,l,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function t1(n,e,t,i){const s=n.prev,o=n,r=n.next;if(pt(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,d=o.y,f=r.y,m=a<c?a<l?a:l:c<l?c:l,v=u<d?u<f?u:f:d<f?d:f,y=a>c?a>l?a:l:c>l?c:l,p=u>d?u>f?u:f:d>f?d:f,h=kh(m,v,e,t,i),_=kh(y,p,e,t,i);let g=n.prevZ,b=n.nextZ;for(;g&&g.z>=h&&b&&b.z<=_;){if(g.x>=m&&g.x<=y&&g.y>=v&&g.y<=p&&g!==s&&g!==r&&Qo(a,u,c,d,l,f,g.x,g.y)&&pt(g.prev,g,g.next)>=0||(g=g.prevZ,b.x>=m&&b.x<=y&&b.y>=v&&b.y<=p&&b!==s&&b!==r&&Qo(a,u,c,d,l,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;g&&g.z>=h;){if(g.x>=m&&g.x<=y&&g.y>=v&&g.y<=p&&g!==s&&g!==r&&Qo(a,u,c,d,l,f,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=y&&b.y>=v&&b.y<=p&&b!==s&&b!==r&&Qo(a,u,c,d,l,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function n1(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!Hu(s,o)&&Cy(s,i,i.next,o)&&za(s,o)&&za(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),Ga(i),Ga(i.next),i=n=o),i=i.next}while(i!==n);return ho(i)}function i1(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&h1(r,a)){let c=Py(r,a);r=ho(r,r.next),c=ho(c,c.next),Ba(r,e,t,i,s,o,0),Ba(c,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function s1(n,e,t,i){const s=[];let o,r,a,c,l;for(o=0,r=e.length;o<r;o++)a=e[o]*i,c=o<r-1?e[o+1]*i:n.length,l=Ly(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(d1(l));for(s.sort(o1),o=0;o<s.length;o++)t=r1(s[o],t);return t}function o1(n,e){return n.x-e.x}function r1(n,e){const t=a1(n,e);if(!t)return e;const i=Py(t,n);return ho(i,i.next),ho(t,t.next)}function a1(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=o&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,d;t=s;do o>=t.x&&t.x>=c&&o!==t.x&&Qo(r<l?o:i,r,c,l,r<l?i:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),za(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&c1(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function c1(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function l1(n,e,t,i){let s=n;do s.z===0&&(s.z=kh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,u1(s)}function u1(n){let e,t,i,s,o,r,a,c,l=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,l*=2}while(r>1);return n}function kh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function d1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Qo(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function h1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!f1(n,e)&&(za(n,e)&&za(e,n)&&p1(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Hu(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Hu(n,e){return n.x===e.x&&n.y===e.y}function Cy(n,e,t,i){const s=Wc(pt(n,e,t)),o=Wc(pt(n,e,i)),r=Wc(pt(t,i,n)),a=Wc(pt(t,i,e));return!!(s!==o&&r!==a||s===0&&Vc(n,t,e)||o===0&&Vc(n,i,e)||r===0&&Vc(t,n,i)||a===0&&Vc(t,e,i))}function Vc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Wc(n){return n>0?1:n<0?-1:0}function f1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function za(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function p1(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Py(n,e){const t=new Oh(n.i,n.x,n.y),i=new Oh(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function hg(n,e,t,i){const s=new Oh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ga(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m1(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class wi{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return wi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];fg(e),pg(i,e);let r=e.length;t.forEach(fg);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,pg(i,t[c]);const a=QT.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function fg(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function pg(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Yf extends gt{constructor(e=new io([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];r(l)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:g1;let g,b=!1,R,E,A,U;h&&(g=h.getSpacedPoints(u),b=!0,f=!1,R=h.computeFrenetFrames(u,!1),E=new I,A=new I,U=new I),f||(p=0,m=0,v=0,y=0);const M=a.extractPoints(l);let w=M.shape;const V=M.holes;if(!wi.isClockWise(w)){w=w.reverse();for(let P=0,ne=V.length;P<ne;P++){const B=V[P];wi.isClockWise(B)&&(V[P]=B.reverse())}}const oe=wi.triangulateShape(w,V),O=w;for(let P=0,ne=V.length;P<ne;P++){const B=V[P];w=w.concat(B)}function q(P,ne,B){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ne,B)}const Y=w.length,K=oe.length;function z(P,ne,B){let Z,$,fe;const F=P.x-ne.x,x=P.y-ne.y,S=B.x-P.x,H=B.y-P.y,me=F*F+x*x,ge=F*H-x*S;if(Math.abs(ge)>Number.EPSILON){const le=Math.sqrt(me),Te=Math.sqrt(S*S+H*H),_e=ne.x-x/le,Re=ne.y+F/le,Ie=B.x-H/Te,Fe=B.y+S/Te,ve=((Ie-_e)*H-(Fe-Re)*S)/(F*H-x*S);Z=_e+F*ve-P.x,$=Re+x*ve-P.y;const Je=Z*Z+$*$;if(Je<=2)return new pe(Z,$);fe=Math.sqrt(Je/2)}else{let le=!1;F>Number.EPSILON?S>Number.EPSILON&&(le=!0):F<-Number.EPSILON?S<-Number.EPSILON&&(le=!0):Math.sign(x)===Math.sign(H)&&(le=!0),le?(Z=-x,$=F,fe=Math.sqrt(me)):(Z=F,$=x,fe=Math.sqrt(me/2))}return new pe(Z/fe,$/fe)}const Q=[];for(let P=0,ne=O.length,B=ne-1,Z=P+1;P<ne;P++,B++,Z++)B===ne&&(B=0),Z===ne&&(Z=0),Q[P]=z(O[P],O[B],O[Z]);const ae=[];let ue,ye=Q.concat();for(let P=0,ne=V.length;P<ne;P++){const B=V[P];ue=[];for(let Z=0,$=B.length,fe=$-1,F=Z+1;Z<$;Z++,fe++,F++)fe===$&&(fe=0),F===$&&(F=0),ue[Z]=z(B[Z],B[fe],B[F]);ae.push(ue),ye=ye.concat(ue)}for(let P=0;P<p;P++){const ne=P/p,B=m*Math.cos(ne*Math.PI/2),Z=v*Math.sin(ne*Math.PI/2)+y;for(let $=0,fe=O.length;$<fe;$++){const F=q(O[$],Q[$],Z);T(F.x,F.y,-B)}for(let $=0,fe=V.length;$<fe;$++){const F=V[$];ue=ae[$];for(let x=0,S=F.length;x<S;x++){const H=q(F[x],ue[x],Z);T(H.x,H.y,-B)}}}const te=v+y;for(let P=0;P<Y;P++){const ne=f?q(w[P],ye[P],te):w[P];b?(A.copy(R.normals[0]).multiplyScalar(ne.x),E.copy(R.binormals[0]).multiplyScalar(ne.y),U.copy(g[0]).add(A).add(E),T(U.x,U.y,U.z)):T(ne.x,ne.y,0)}for(let P=1;P<=u;P++)for(let ne=0;ne<Y;ne++){const B=f?q(w[ne],ye[ne],te):w[ne];b?(A.copy(R.normals[P]).multiplyScalar(B.x),E.copy(R.binormals[P]).multiplyScalar(B.y),U.copy(g[P]).add(A).add(E),T(U.x,U.y,U.z)):T(B.x,B.y,d/u*P)}for(let P=p-1;P>=0;P--){const ne=P/p,B=m*Math.cos(ne*Math.PI/2),Z=v*Math.sin(ne*Math.PI/2)+y;for(let $=0,fe=O.length;$<fe;$++){const F=q(O[$],Q[$],Z);T(F.x,F.y,d+B)}for(let $=0,fe=V.length;$<fe;$++){const F=V[$];ue=ae[$];for(let x=0,S=F.length;x<S;x++){const H=q(F[x],ue[x],Z);b?T(H.x,H.y+g[u-1].y,g[u-1].x+B):T(H.x,H.y,d+B)}}}k(),N();function k(){const P=s.length/3;if(f){let ne=0,B=Y*ne;for(let Z=0;Z<K;Z++){const $=oe[Z];ee($[2]+B,$[1]+B,$[0]+B)}ne=u+p*2,B=Y*ne;for(let Z=0;Z<K;Z++){const $=oe[Z];ee($[0]+B,$[1]+B,$[2]+B)}}else{for(let ne=0;ne<K;ne++){const B=oe[ne];ee(B[2],B[1],B[0])}for(let ne=0;ne<K;ne++){const B=oe[ne];ee(B[0]+Y*u,B[1]+Y*u,B[2]+Y*u)}}i.addGroup(P,s.length/3-P,0)}function N(){const P=s.length/3;let ne=0;L(O,ne),ne+=O.length;for(let B=0,Z=V.length;B<Z;B++){const $=V[B];L($,ne),ne+=$.length}i.addGroup(P,s.length/3-P,1)}function L(P,ne){let B=P.length;for(;--B>=0;){const Z=B;let $=B-1;$<0&&($=P.length-1);for(let fe=0,F=u+p*2;fe<F;fe++){const x=Y*fe,S=Y*(fe+1),H=ne+Z+x,me=ne+$+x,ge=ne+$+S,le=ne+Z+S;ce(H,me,ge,le)}}}function T(P,ne,B){c.push(P),c.push(ne),c.push(B)}function ee(P,ne,B){X(P),X(ne),X(B);const Z=s.length/3,$=_.generateTopUV(i,s,Z-3,Z-2,Z-1);de($[0]),de($[1]),de($[2])}function ce(P,ne,B,Z){X(P),X(ne),X(Z),X(ne),X(B),X(Z);const $=s.length/3,fe=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);de(fe[0]),de(fe[1]),de(fe[3]),de(fe[1]),de(fe[2]),de(fe[3])}function X(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function de(P){o.push(P.x),o.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return v1(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dh[s.type]().fromJSON(s)),new Yf(i,e.options)}}const g1={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new pe(o,r),new pe(a,c),new pe(l,u)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],m=e[s*3+1],v=e[s*3+2],y=e[o*3],p=e[o*3+1],h=e[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new pe(r,1-c),new pe(l,1-d),new pe(f,1-v),new pe(y,1-h)]:[new pe(a,1-c),new pe(u,1-d),new pe(m,1-v),new pe(p,1-h)]}};function v1(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class tc extends jf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tc(e.radius,e.detail)}}class Zf extends gt{constructor(e=new io([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(r,2));function l(u){const d=s.length/3,f=u.extractPoints(t);let m=f.shape;const v=f.holes;wi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=v.length;p<h;p++){const _=v[p];wi.isClockWise(_)===!0&&(v[p]=_.reverse())}const y=wi.triangulateShape(m,v);for(let p=0,h=v.length;p<h;p++){const _=v[p];m=m.concat(_)}for(let p=0,h=m.length;p<h;p++){const _=m[p];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let p=0,h=y.length;p<h;p++){const _=y[p],g=_[0]+d,b=_[1]+d,R=_[2]+d;i.push(g,b,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return y1(t,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const r=t[e.shapes[s]];i.push(r)}return new Zf(i,e.curveSegments)}}function y1(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class nc extends gt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],d=new I,f=new I,m=[],v=[],y=[],p=[];for(let h=0;h<=i;h++){const _=[],g=h/i;let b=0;h===0&&r===0?b=.5/t:h===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(s+E*o)*Math.sin(r+g*a),d.y=e*Math.cos(r+g*a),d.z=e*Math.sin(s+E*o)*Math.sin(r+g*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(E+b,1-g),_.push(l++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const g=u[h][_+1],b=u[h][_],R=u[h+1][_],E=u[h+1][_+1];(h!==0||r>0)&&m.push(g,b,E),(h!==i-1||c<Math.PI)&&m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vu extends gt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let v=0;v<=s;v++){const y=v/s*o,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(v/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=s;v++){const y=(s+1)*m+v-1,p=(s+1)*(m-1)+v-1,h=(s+1)*(m-1)+v,_=(s+1)*m+v;r.push(y,p,_),r.push(p,h,_)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends bo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ff,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const mg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class x1{constructor(e,t,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],v=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const _1=new x1;class Kf{constructor(e){this.manager=e!==void 0?e:_1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class b1 extends Error{constructor(e,t){super(e),this.response=t}}class S1 extends Kf{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=mg.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:i,onError:s});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:i,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ni[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,v=m!==0;let y=0;const p=new ReadableStream({start(h){_();function _(){d.read().then(({done:g,value:b})=>{if(g)h.close();else{y+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:m});for(let E=0,A=u.length;E<A;E++){const U=u[E];U.onProgress&&U.onProgress(R)}h.enqueue(b),_()}})}}});return new Response(p)}else throw new b1(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{mg.add(e,l);const u=Ni[e];delete Ni[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ni[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jf extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class M1 extends Jf{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Hd=new Ke,gg=new I,vg=new I;class w1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vf,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(gg),vg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vg),t.updateMatrixWorld(),Hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E1 extends w1{constructor(){super(new hy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uh extends Jf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new E1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A1 extends Jf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const yg=new pe;class T1{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=yg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Is{constructor(){this.type="ShapePath",this.color=new Ee,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ur,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,o,r){return this.currentPath.bezierCurveTo(e,t,i,s,o,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const _=[];for(let g=0,b=h.length;g<b;g++){const R=h[g],E=new io;E.curves=R.curves,_.push(E)}return _}function i(h,_){const g=_.length;let b=!1;for(let R=g-1,E=0;E<g;R=E++){let A=_[R],U=_[E],M=U.x-A.x,w=U.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=_[E],M=-M,U=_[R],w=-w),h.y<A.y||h.y>U.y)continue;if(h.y===A.y){if(h.x===A.x)return!0}else{const V=w*(h.x-A.x)-M*(h.y-A.y);if(V===0)return!0;if(V<0)continue;b=!b}}else{if(h.y!==A.y)continue;if(U.x<=h.x&&h.x<=A.x||A.x<=h.x&&h.x<=U.x)return!0}}return b}const s=wi.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new io,c.curves=a.curves,l.push(c),l;let u=!s(o[0].getPoints());u=e?!u:u;const d=[],f=[];let m=[],v=0,y;f[v]=void 0,m[v]=[];for(let h=0,_=o.length;h<_;h++)a=o[h],y=a.getPoints(),r=s(y),r=e?!r:r,r?(!u&&f[v]&&v++,f[v]={s:new io,p:y},f[v].s.curves=a.curves,u&&v++,m[v]=[]):m[v].push({h:a,p:y[0]});if(!f[0])return t(o);if(f.length>1){let h=!1,_=0;for(let g=0,b=f.length;g<b;g++)d[g]=[];for(let g=0,b=f.length;g<b;g++){const R=m[g];for(let E=0;E<R.length;E++){const A=R[E];let U=!0;for(let M=0;M<f.length;M++)i(A.p,f[M].p)&&(g!==M&&_++,U?(U=!1,d[M].push(A)):h=!0);U&&d[g].push(A)}}_>0&&h===!1&&(m=d)}let p;for(let h=0,_=f.length;h<_;h++){c=f[h].s,l.push(c),p=m[h];for(let g=0,b=p.length;g<b;g++)c.holes.push(p[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);function R1(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function L1(n){n.vertexShader=`attribute float instanceAlpha;
varying float vInstanceAlpha;
`+n.vertexShader.replace("void main() {",`void main() {
	vInstanceAlpha = instanceAlpha;`),n.fragmentShader=`varying float vInstanceAlpha;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= vInstanceAlpha;`)}function Fh(n,e="instanceAlpha"){return n.onBeforeCompile=L1,n.customProgramCacheKey=()=>e,n}function Bh(n,e,t=1){const i=new Float32Array(e).fill(t);return n.setAttribute("instanceAlpha",new Ih(i,1)),i}const tt=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6500,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of tt)n.activeHeading=n.heading;function Iy(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const C1=.42,P1=.55;function I1(n,e){for(const t of tt){const i=n.x-t.x,s=n.z-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)>t.width*.5-C1||Math.abs(c)>t.length*.5-P1)continue;const l=n.y-t.elevation;if(l<-.5||l>co.rollingHeight)continue;const u=Iy(e-t.activeHeading);if(!(Math.abs(u)>co.headingTolerance))return t}return null}function N1(n,e=1){for(const t of tt){const i=n.x-t.x,s=n.z-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)<=t.width*.55+e&&Math.abs(c)<=t.length*.5+e)return t}return null}function D1(n,e,t){for(const i of tt){const s=n.x-i.x,o=n.z-i.z,r=Math.sqrt(s*s+o*o),a=n.y-i.elevation;if(r<e&&a<t&&a>-2)return!0}return!1}const Ny=[],Dy=[],k1=Fh(new jn({color:16771240,transparent:!0,depthWrite:!1})),O1=new jn({}),U1=new nc(.15,8,6),ky=new Ee(7227922),F1=new Ee(16770976),B1=.45,ql=.22,z1=new ut({color:14729280,flatShading:!0}),Oy=new Xn(.05,.06,ql,5);Oy.translate(0,ql/2,0);const xg=new Ee,_g=new Ke,G1=new I,H1=new I,V1=new Ct,Qf=[],bg=1,Xl=.32,Sg=1.6,Mg=1.2,zh={T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],F:["#####","#....","#....","####.","#....","#....","#...."],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],G:[".###.","#...#","#....","#.###","#...#","#...#",".###."],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],P:["####.","#...#","#...#","####.","#....","#....","#...."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],L:["#....","#....","#....","#....","#....","#....","#####"],A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"]},W1=new jn({color:15790320,side:Kt});function Uy(n){const e=[],t=[];for(const[o,r,a,c]of n){const l=e.length/3,u=a/2,d=c/2;e.push(o-u,.06,r-d,o+u,.06,r-d,o+u,.06,r+d,o-u,.06,r+d),t.push(l,l+1,l+2,l,l+2,l+3)}const s=new gt;return s.setAttribute("position",new Qe(e,3)),s.setIndex(t),new nt(s,W1)}function q1(n){const t=2.8000000000000003,i=.4*.7,s=[...n.id].filter(o=>zh[o]).length;return{cell:.4,glyphL:t,gap:i,totalL:s*t+Math.max(0,s-1)*i,center:n.length*.3}}function X1(n){const e=[],i=n.width/2-.09-.1;e.push([-i,0,.18,n.length*.98],[i,0,.18,n.length*.98]);const s=6,o=3,r=n.width*.9/s,a=r*.55;for(const c of[-1,1]){const l=c*(n.length/2-o/2-.8);for(let u=0;u<s;u++)e.push([(u-(s-1)/2)*r,l,a,o])}return Uy(e)}function $1(n){const e=[],{cell:t,glyphL:i,gap:s,totalL:o,center:r}=q1(n),a=[...n.id].filter(h=>zh[h]);let c=r-o/2;for(const h of a){const _=zh[h];for(let g=0;g<7;g++)for(let b=0;b<5;b++)_[g][b]==="#"&&e.push([(b-2)*t,c+g*t,t*.85,t*.85]);c+=i+s}const l=3,u=3,d=.18,f=n.length*.8,m=o/2+6,v=Math.max(1,Math.floor((f+u)/(l+u)));let p=-(v*l+(v-1)*u)/2+l/2;for(let h=0;h<v;h++)Math.abs(p-r)>m&&e.push([0,p,d,l]),p+=l+u;return Uy(e)}const Ui={concrete:new ut({color:vi.colors.concrete,flatShading:!0}),glass:new ut({color:vi.colors.glass,flatShading:!0}),accent:new ut({color:vi.colors.accent,flatShading:!0})};function j1(){const n=vi.towerHeight,e=n*.66,t=n*.2,i=new lt,s=(a,c,l)=>{const u=new nt(a,c);u.position.y=l,i.add(u)};s(new rn(3,.6,3),Ui.concrete,.3),s(new rn(1.5,e,1.5),Ui.concrete,.6+e/2),s(new rn(2.4,t,2.4),Ui.glass,.6+e+t/2);const o=.6+e+t;s(new rn(2.7,.25,2.7),Ui.concrete,o+.125);const r=new Xn(.05,.05,n*.22,5);for(const a of[-.55,.55]){const c=new nt(r,Ui.accent);c.position.set(a,o+.25+n*.11,0),i.add(c)}return s(new nc(.32,8,6),Ui.concrete,o+.55),i}function Y1(){const n=vi.terminal,e=new lt,t=(i,s,o,r,a)=>{const c=new nt(i,s);c.position.set(o,r,a),e.add(c)};return t(new rn(n.depth,n.height,n.length),Ui.concrete,0,n.height/2,0),t(new rn(.2,n.height*.55,n.length*.88),Ui.glass,-3/2,n.height*.5,0),t(new rn(n.depth+.6,.25,n.length+.6),Ui.concrete,0,n.height+.125,0),e}const Z1=j1(),K1=Y1();function J1(){const n=new lt,e=new ut({color:Ze.runway,flatShading:!0}),t=new Ke;for(let i=0;i<tt.length;i++){const s=tt[i],o=new lt,r=new So(s.width,s.length);r.rotateX(-Math.PI/2),o.add(new nt(r,e)),o.add(X1(s));const a=new lt,c=s.width*.68,l=c*1.05,u=new io;u.moveTo(0,l*.55),u.lineTo(-c/2,-l*.45),u.lineTo(0,-l*.05),u.lineTo(c/2,-l*.45),u.closePath();const d=new Zf(u);d.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5)),m=new Float32Array(f),v=Bh(d,f,Xl),y=new an(d,k1,f);y.renderOrder=1;for(let w=0;w<f;w++){const V=w/(f-1)-.5;t.makeTranslation(0,.08,V*s.length*.85),y.setMatrixAt(w,t),m[w]=.5-V,v[w]=Xl}y.instanceMatrix.needsUpdate=!0,a.add(y),Ny.push({mesh:y,alpha:v,posT:m,count:f});const h=Math.max(2,Math.floor(s.length/4.5)),_=h*2,g=new Float32Array(_),b=new Float32Array(_*3),R=new an(U1,O1,_),E=new an(Oy,z1,_);let A=0;for(let w=0;w<h;w++){const V=w/(h-1)-.5,W=V*s.length*.97,oe=.5-V;for(const O of[-1,1]){const q=O*s.width*.6;t.makeTranslation(q,ql,W),R.setMatrixAt(A,t),R.setColorAt(A,ky),t.makeTranslation(q,0,W),E.setMatrixAt(A,t),g[A]=oe,b[A*3]=q,b[A*3+1]=ql,b[A*3+2]=W,A++}}R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,a.add(R),a.add(E),Dy.push({mesh:R,posT:g,base:b,count:_}),a.add($1(s)),o.add(a),Qf[i]=a;const U=Z1.clone();U.scale.setScalar(vi.towerScale),U.position.set(vi.towerSide,0,vi.towerAlong*s.length*.5),o.add(U);const M=K1.clone();M.position.set(vi.terminal.side,0,vi.terminal.along*s.length*.5),o.add(M),o.position.set(s.x,s.elevation+.04,s.z),o.rotation.y=s.heading,n.add(o)}return n}function Q1(n){const e=n%Sg/Sg;for(const i of Ny){const{alpha:s,posT:o,count:r}=i;for(let a=0;a<r;a++){const c=(e-o[a]+1)%1;s[a]=c<.16?bg-(bg-Xl)*(c/.16):Xl}i.mesh.geometry.attributes.instanceAlpha.needsUpdate=!0}const t=n%Mg/Mg;for(const i of Dy){const{mesh:s,posT:o,base:r,count:a}=i;for(let c=0;c<a;c++){const l=(t-o[c]+1)%1,u=l<.22?1-l/.22:0;xg.copy(ky).lerp(F1,u),s.setColorAt(c,xg);const d=1+u*B1;_g.compose(G1.set(r[c*3],r[c*3+1],r[c*3+2]),V1,H1.set(d,d,d)),s.setMatrixAt(c,_g)}s.instanceColor.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0}}function eR(n){const e=tt.indexOf(n);return Qf[e]??null}function Fy(n){for(let e=0;e<tt.length;e++){const t=tt[e];if(t===n)continue;const i=Math.random()<.5;t.activeHeading=i?Iy(t.heading+Math.PI):t.heading;const s=Qf[e];s&&(s.rotation.y=i?Math.PI:0)}}const _t={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let Qn=null,By=[];async function tR(n="/teide-game/landcover/canaries.png"){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0);const s=i.getImageData(0,0,e.width,e.height).data,o=new Uint8Array(e.width*e.height);for(let r=0,a=0;a<o.length;r+=4,a++)o[a]=s[r];Qn={data:o,w:e.width,h:e.height},By=sR()}function nR(n,e){const{center:t,metersPerUnit:i}=Ae.heightmap,s=n*i,o=-e*i,r=t.lat+o/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:r,lon:a}}function iR(n,e){const{bbox:t,center:i,metersPerUnit:s}=Ae.heightmap,o=t.lonW+n/(Qn.w-1)*(t.lonE-t.lonW),r=t.latN-e/(Qn.h-1)*(t.latN-t.latS),a=(o-i.lon)*111320*Math.cos(i.lat*Math.PI/180),c=(r-i.lat)*111320;return{x:a/s,z:-c/s}}function Vn(n,e){if(!Qn)return _t.WATER;const{lat:t,lon:i}=nR(n,e),{bbox:s}=Ae.heightmap,o=(i-s.lonW)/(s.lonE-s.lonW)*(Qn.w-1),r=(s.latN-t)/(s.latN-s.latS)*(Qn.h-1);if(o<0||r<0||o>Qn.w-1||r>Qn.h-1)return _t.WATER;const a=Math.round(o),c=Math.round(r);return Qn.data[c*Qn.w+a]}function sR(){const{data:n,w:e,h:t}=Qn,{minClusterPixels:i}=Tt.urban,s=new Uint8Array(n.length),o=[],r=[],a=[0,0,0,0];function c(u){const d=u%e,f=u/e|0;let m=0;return d>0&&(a[m++]=u-1),d<e-1&&(a[m++]=u+1),f>0&&(a[m++]=u-e),f<t-1&&(a[m++]=u+e),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==_t.URBAN)continue;const d=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const v=f[m++];d.push(v);const y=c(v);for(let p=0;p<y;p++){const h=a[p];!s[h]&&n[h]===_t.URBAN&&(s[h]=1,f.push(h))}}d.length<i?r.push(...d):o.push(d)}for(const u of r){const d=c(u),f=new Map;for(let y=0;y<d;y++){const p=n[a[y]];p!==_t.URBAN&&p!==_t.WATER&&f.set(p,(f.get(p)||0)+1)}let m=_t.GRASS,v=0;for(const[y,p]of f)p>v&&(m=y,v=p);n[u]=m}const l=o.map(u=>{let d=0,f=0;const m=[];for(const v of u){const y=v%e,p=v/e|0,{x:h,z:_}=iR(y,p);m.push({x:h,z:_}),d+=h,f+=_}return{pixelCount:u.length,centerX:d/u.length,centerZ:f/u.length,pixels:m}});return l.sort((u,d)=>d.pixelCount-u.pixelCount),console.log(`landcover: ${l.length} urban clusters surviving (${r.length} tiny urban pixels reclassified)`),l}function oR(){return By}let Bn=null;function rR(){return Bn}let Gs=null,la=0;async function aR(n=Ae.heightmap.url){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0),Bn={data:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}function cR(n,e){const{center:t,metersPerUnit:i}=Ae.heightmap,s=n*i,o=-e*i,r=t.lat+o/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:r,lon:a}}function lR(n,e){if(!Bn)return 0;const{bbox:t,elevRange:i}=Ae.heightmap,s=(e-t.lonW)/(t.lonE-t.lonW)*(Bn.w-1),o=(t.latN-n)/(t.latN-t.latS)*(Bn.h-1);if(s<0||o<0||s>Bn.w-1||o>Bn.h-1)return 0;const r=Math.floor(s),a=Math.floor(o),c=Math.min(r+1,Bn.w-1),l=Math.min(a+1,Bn.h-1),u=s-r,d=o-a,f=i[1]-i[0],m=(v,y)=>{const p=(y*Bn.w+v)*4,h=Bn.data[p]<<8|Bn.data[p+1];return i[0]+h/65535*f};return(1-u)*(1-d)*m(r,a)+u*(1-d)*m(c,a)+(1-u)*d*m(r,l)+u*d*m(c,l)}function Nn(n,e){const{lat:t,lon:i}=cR(n,e);return lR(t,i)/Ae.heightmap.metersPerUnit*Ae.heightmap.elevationExaggeration}function uR(n,e,t){const i=wv;if(t<Ae.waterLevel+i.waterGuard)return t;const s=i.slopeEps,o=(Nn(n+s,e)-Nn(n-s,e))/(2*s),r=(Nn(n,e+s)-Nn(n,e-s))/(2*s),a=Xi.smoothstep(Math.hypot(o,r),i.slopeGateLo,i.slopeGateHi);if(a<=0)return t;const c=i.stepHeight,l=Math.floor(t/c)*c,u=t/c-Math.floor(t/c),d=l+c*u*u*(3-2*u);return t+(d-t)*i.riserSharpness*a}function Ur(n,e){return uR(n,e,Nn(n,e))}function zy(n,e,t){let i=t,s=0;const o=Il;for(const r of tt){const a=n-r.x,c=e-r.z,l=Math.cos(r.heading),u=Math.sin(r.heading),d=a*l-c*u,f=a*u+c*l,m=Math.max(0,Math.abs(d)-r.width/2),v=Math.max(0,Math.abs(f)-r.length/2),y=Math.max(0,m-o.sideApron),p=Math.max(0,v-o.endApron),h=Math.sqrt(y*y+p*p);if(h<o.fadeWidth){const _=Xi.smoothstep(h,0,o.fadeWidth);i=Xi.lerp(r.elevation,i,_),s=Math.max(s,1-_)}if(m<o.corridorHalfWidth){const _=r.elevation+Math.max(0,v-o.endApron)*o.climbGradient;i>_&&(i=_)}}return{y:i,onRunway:s}}function Gh(n,e){return zy(n,e,Ur(n,e)).y}function Rt(n,e){if(!Gs)return Gh(n,e);const t=Ae.size/2,i=Ae.segments,s=Ae.size/i,o=(n+t)/s,r=(e+t)/s;if(o<0||r<0||o>i||r>i)return Gh(n,e);const a=Math.min(i-1,Math.floor(o)),c=Math.min(i-1,Math.floor(r)),l=o-a,u=r-c,d=Gs[c*la+a],f=Gs[c*la+a+1],m=Gs[(c+1)*la+a],v=Gs[(c+1)*la+a+1];return(1-l)*(1-u)*d+l*(1-u)*f+(1-l)*u*m+l*u*v}const dR=90,hR=200,Hh=[];function fR(){const n=Ae.size,e=Ae.segments,t=n/e,i=e+1;la=i,Gs=new Float32Array(i*i);const s=new Float32Array(i*i),o=new Float32Array(i*i*3),r=new Ee(Ze.pineCanopy),a=new Ee(Ze.laurelCanopy),c=new Ee(Ze.shrubBody),l=new Ee(Ze.grassGround),u=new Ee(Ze.cropGround),d=new Ee(Ze.urbanGround),f=new Ee(Ze.bareGround),m=new Ee(Ze.shore),v=new Ee(Ze.snow),y=new Ee(Ze.runway),p=new Ee(Ze.rock),h=new Ee,_=Ae.heightmap.metersPerUnit,g=Ae.heightmap.elevationExaggeration,b=80/_*g,R=2500/_*g,E=3200/_*g,A=Tt.laurelMaxAltitude*g,U=i*i;for(let oe=0;oe<U;oe++){const O=oe%i,q=oe/i|0,Y=-8e3+O*t,K=-8e3+q*t,z=zy(Y,K,Ur(Y,K)),Q=z.y,ae=z.onRunway;switch(s[oe]=Q<Ae.waterLevel?Q-G_.sinkDepth:Q,Gs[oe]=s[oe],Vn(Y,K)){case _t.TREE:h.copy(Q>=A?r:a);break;case _t.SHRUB:h.copy(c);break;case _t.GRASS:h.copy(l);break;case _t.CROP:h.copy(u);break;case _t.URBAN:h.copy(d);break;case _t.BARE:h.copy(f);break;default:h.copy(m);break}if(Q>Ae.waterLevel){const te=wv.slopeEps,k=(Nn(Y+te,K)-Nn(Y-te,K))/(2*te),N=(Nn(Y,K+te)-Nn(Y,K-te))/(2*te),L=Xi.smoothstep(Math.hypot(k,N),id.slopeLo,id.slopeHi);L>0&&h.lerp(p,L*id.strength)}if(Q>E)h.copy(v);else if(Q>R){const te=(Q-R)/(E-R);h.lerp(v,te)}if(Q<Ae.waterLevel+b){const te=(Q-Ae.waterLevel)/b;h.lerp(m,1-Math.max(0,te))}ae>.001&&h.lerp(y,ae*.35);const ye=.94+R1(Y,K)*.12;o[oe*3]=h.r*ye,o[oe*3+1]=h.g*ye,o[oe*3+2]=h.b*ye}const M=new ut({vertexColors:!0,flatShading:!0}),w=new lt,V=dR,W=Math.ceil(e/V);for(let oe=0;oe<W;oe++){const O=oe*V,q=Math.min(V,e-O);for(let Y=0;Y<W;Y++){const K=Y*V,z=Math.min(V,e-K),Q=new So(z*t,q*t,z,q);Q.rotateX(-Math.PI/2);const ae=Q.attributes.position,ue=new Float32Array(ae.count*3);for(let L=0;L<=q;L++)for(let T=0;T<=z;T++){const ee=L*(z+1)+T,ce=(O+L)*i+(K+T);ae.setY(ee,s[ce]),ue[ee*3]=o[ce*3],ue[ee*3+1]=o[ce*3+1],ue[ee*3+2]=o[ce*3+2]}Q.setAttribute("color",new Dt(ue,3)),Q.computeBoundingSphere();const ye=new nt(Q,M),te=-8e3+K*t+z*t/2,k=-8e3+O*t+q*t/2;ye.position.set(te,0,k),w.add(ye);const N=Q.boundingSphere;Hh.push({mesh:ye,cx:te+N.center.x,cy:N.center.y,cz:k+N.center.z,radius:N.radius})}}return w}function pR(n,e){if(!e){for(const r of Hh)r.mesh.visible=!0;return}const t=Ae.fogEnd+hR,i=n.position.x,s=n.position.y,o=n.position.z;for(const r of Hh){const a=i-r.cx,c=s-r.cy,l=o-r.cz;r.mesh.visible=Math.sqrt(a*a+c*c+l*l)-r.radius<t}}function mR(){const n=new So(Ae.size*1.6,Ae.size*1.6);n.rotateX(-Math.PI/2);const e=new ut({color:Ze.water,transparent:!0,opacity:.96}),t=new nt(n,e);return t.position.y=Ae.waterLevel,t}const gR={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:9,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:11,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:8,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:11,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:5,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function vR(n){let e=n>>>0;return()=>{e=e+2654435769>>>0;let t=e;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),((t^t>>>15)>>>0)/4294967296}}function yR(){const n=[],e=vR(12648430);for(const t of Lt){const i=gR[t.id];if(i)for(let s=0;s<i.count;s++){const o=e()*Math.PI*2,r=Math.sqrt(e())*i.spread,a=t.x+Math.cos(o)*r,c=t.z+Math.sin(o)*r,l=i.radiusRange[0]+e()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+e()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:a,z:c,radius:l,strength:u})}}return n}const pn=yR(),$l=.55,Gy=1.05,xR=.9;let jr,yl,xl,Vh,ns,jl,Wh=null;function Hy(n){Wh&&(Wh.visible=!!n)}function _R(){const n=new lt;Wh=n;for(let a=pn.length-1;a>=0;a--)Rt(pn[a].x,pn[a].z)<Ae.waterLevel+.5&&pn.splice(a,1);for(const a of pn)a.baseElevation=Rt(a.x,a.z);for(const a of pn){const c=new jn({color:bn.columnColor,transparent:!0,opacity:bn.columnOpacity*a.strength,side:Kt,depthWrite:!1}),l=new Xn(a.radius*Gy,a.radius*$l,bn.columnTop,20,1,!0);l.translate(0,bn.columnTop/2,0);const u=new nt(l,c);u.position.set(a.x,a.baseElevation,a.z),n.add(u)}const e=pn.map(a=>Math.max(10,Math.floor(bn.particleDensity*Math.PI*a.radius*a.radius))),t=e.reduce((a,c)=>a+c,0);jr=new Float32Array(t*3),yl=new Float32Array(t),xl=new Float32Array(t),Vh=new Uint16Array(t),ns=new Float32Array(t);const i=new Float32Array(t);let s=0;for(let a=0;a<pn.length;a++){const c=pn[a];for(let l=0;l<e[a];l++){const u=Math.sqrt(Math.random())*xR,d=Math.random()*Math.PI*2;yl[s]=Math.cos(d)*u,xl[s]=Math.sin(d)*u,Vh[s]=a,ns[s]=Math.random(),i[s]=bn.particleSize*(.7+.5*c.strength);const f=c.radius*$l;jr[s*3+0]=c.x+yl[s]*f,jr[s*3+1]=c.baseElevation,jr[s*3+2]=c.z+xl[s]*f,s++}}const o=new gt;o.setAttribute("position",new Dt(jr,3)),o.setAttribute("size",new Dt(i,1));const r=new xs({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ee(bn.particleColor)},uOpacity:{value:bn.particleOpacity}},vertexShader:`
      attribute float size;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        // Soft round dot
        vec2 d = gl_PointCoord - vec2(0.5);
        float a = smoothstep(0.5, 0.15, length(d));
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, uOpacity * a);
      }
    `});return jl=new My(o,r),n.add(jl),n}function bR(n){if(!jl)return;const e=jl.geometry.attributes.position,t=e.array,i=bn.columnTop,s=bn.riseSpeed;for(let o=0;o<ns.length;o++){const r=pn[Vh[o]];ns[o]+=s*r.strength/i*n,ns[o]>=1&&(ns[o]-=1);const a=r.radius*($l+(Gy-$l)*ns[o]);t[o*3+0]=r.x+yl[o]*a,t[o*3+1]=r.baseElevation+ns[o]*i,t[o*3+2]=r.z+xl[o]*a}e.needsUpdate=!0}function Vy(n,e,t){let i=0;for(const s of pn){const o=n-s.x,r=t-s.z,a=Math.sqrt(o*o+r*r);if(a>=s.radius)continue;const c=e-(s.baseElevation??0);if(c<0)continue;const l=1-a/s.radius,u=Math.max(0,1-c/bn.maxAltitude);i+=bn.liftAtCenter*s.strength*l*u}return i}const Wy="/teide-game/audio/",wg=window.AudioContext||window.webkitAudioContext;let et=null,Yr=null,Yl=null,Zl=null,ep=!1;const Kl={},tp={},Jl={},$s={};let Ql=Et.musicVolume,np=!1,eu=Et.sfxVolume,ip=!1,_l=null,qh=!1,Eg=!1;const Hs=n=>n<0?0:n>1?1:n,Vo=(n,e,t)=>n+(e-n)*t,tu=(n,e)=>(n=Number(n),Number.isFinite(n)?n:e);function SR(){if(et||!wg)return;try{et=new wg}catch{et=null;return}Yr=et.createGain(),Yr.gain.value=Et.master,Yr.connect(et.destination),Yl=et.createGain(),Zl=et.createGain(),Yl.connect(Yr),Zl.connect(Yr);const n=ht();Ql=tu(n.musicVolume,Et.musicVolume),np=!!n.musicMuted,eu=tu(n.sfxVolume,Et.sfxVolume),ip=!!n.sfxMuted,ic(),_l=D.flightState,qh=D.gearAmount>.02,ER(),ep=!0}function MR(){if(!(!et||et.state==="running")){et.resume().catch(()=>{});try{const n=et.createBufferSource();n.buffer=et.createBuffer(1,1,22050),n.connect(et.destination),n.start(0)}catch{}}}function qy(){if(et){for(const n in Jl){const e=Jl[n];e&&!e.el.paused&&e.el.pause()}et.state==="running"&&et.suspend()}}function Xy(){et&&et.state!=="running"&&et.resume().catch(()=>{})}function ic(){et&&(Yl.gain.value=np?0:Ql,Zl.gain.value=ip?0:eu)}function wR(n){return fetch(n).then(e=>e.arrayBuffer()).then(e=>e&&e.byteLength>0?e:Promise.reject(new Error("empty"))).catch(()=>new Promise((e,t)=>{const i=new XMLHttpRequest;i.open("GET",n),i.responseType="arraybuffer",i.onload=()=>i.response&&i.response.byteLength>0?e(i.response):t(new Error("empty")),i.onerror=()=>t(new Error("xhr")),i.send()}))}async function ER(){for(const[e,t]of Object.entries(Iv)){if(t.mode==="stream"){RR(e,t);continue}let i;try{i=await wR(Wy+t.src)}catch{$s[e]="load";continue}try{Kl[e]=await et.decodeAudioData(i)}catch{$s[e]="decode";continue}$s[e]="ok",t.mode==="loop"&&TR(e,t)}const n=Object.entries($s).filter(([,e])=>e!=="ok");n.length&&console.warn("[audio] nicht ladbar:",n.map(([e,t])=>`${e} (${t})`).join(", "))}function AR(){let n=0;const e=[];for(const i in $s)$s[i]==="ok"?n++:e.push(`${i}: ${$s[i]}`);let t=`${et?et.state:"no-ctx"} · buf ${n}/${n+e.length}`;return e.length&&(t+=`
  ✗ `+e.slice(0,5).join(`
  ✗ `)),t}function sp(n){return n==="music"?Yl:Zl}function TR(n,e){const t=et.createBufferSource();t.buffer=Kl[n],t.loop=!0,t.playbackRate.value=e.rate||1;const i=et.createGain();i.gain.value=0;let s=null;e.filtered?(s=et.createBiquadFilter(),s.type="lowpass",s.frequency.value=Et.wind.cutoffMin,t.connect(s),s.connect(i)):t.connect(i),i.connect(sp(e.channel)),t.start(),tp[n]={src:t,gain:i,lp:s}}function RR(n,e){const t=new Audio(Wy+e.src);t.loop=!0,t.preload="auto";let i;try{i=et.createMediaElementSource(t)}catch{return}const s=et.createGain();s.gain.value=0,i.connect(s),s.connect(sp(e.channel)),Jl[n]={el:t,gain:s}}function LR(n){Ql=Hs(tu(n,Ql)),ic()}function $y(n){np=!!n,ic()}function CR(n){eu=Hs(tu(n,eu)),ic()}function jy(n){ip=!!n,ic()}function on(n,e){if(!ep||!Kl[n])return;const t=Iv[n],i=et.createBufferSource();i.buffer=Kl[n],i.playbackRate.value=e&&e.rate||t.rate||1;const s=et.createGain();s.gain.value=e&&e.gain!=null?e.gain:t.gain!=null?t.gain:1,i.connect(s),s.connect(sp(t.channel)),i.onended=()=>{try{i.disconnect(),s.disconnect()}catch{}};try{i.start()}catch{}}function Di(n,e,t){const i=tp[n];i&&i.gain.gain.setTargetAtTime(Math.max(0,e),et.currentTime,t||.1)}function Ag(n,e,t,i){const s=tp["glider-wind"];if(!s)return;const o=et.currentTime;s.gain.gain.setTargetAtTime(Math.max(0,n),o,i),s.src.playbackRate.setTargetAtTime(e,o,i),s.lp&&s.lp.frequency.setTargetAtTime(t,o,i)}function PR(n,e,t){const i=Jl[n];i&&(i.gain.gain.setTargetAtTime(e,et.currentTime,Math.max(.02,t/1e3/3)),e>.001&&i.el.paused?i.el.play().catch(()=>{}):e<=.001&&!i.el.paused&&i.gain.gain.value<.005&&i.el.pause())}function IR(n,e,t){let i=0;return Rt(n,e)<Ae.waterLevel&&i++,Rt(n+t,e)<Ae.waterLevel&&i++,Rt(n-t,e)<Ae.waterLevel&&i++,Rt(n,e+t)<Ae.waterLevel&&i++,Rt(n,e-t)<Ae.waterLevel&&i++,i/5}function NR(n,e,t){const i=_t.TREE;let s=0;return Vn(n,e)===i&&s++,Vn(n+t,e)===i&&s++,Vn(n-t,e)===i&&s++,Vn(n,e+t)===i&&s++,Vn(n,e-t)===i&&s++,s/5}function DR(n,e,t){const i=_t.URBAN;let s=0;return Vn(n,e)===i&&s++,Vn(n+t,e)===i&&s++,Vn(n-t,e)===i&&s++,Vn(n,e+t)===i&&s++,Vn(n,e-t)===i&&s++,s/5}function kR(n,e){if(!ep)return;const t=D,i=De,s=t.paused;PR("menu-music",s?1:0,s?Et.fade.musicIn:Et.fade.musicOut);const o=!s&&t.flightState===i.FLYING,r=t.flightState===i.TAKEOFF_ROLL||t.flightState===i.LANDING_ROLL,a=!s&&(o||r),c=Et.wind;if(a){const y=Hs((t.speed-c.speedMin)/(c.speedMax-c.speedMin));let p=Vo(c.gainMin,c.gainMax,y),h=Vo(c.rateMin,c.rateMax,y),_=Vo(c.cutoffMin,c.cutoffMax,y);const g=t.brakeAmount;g>.001&&(h*=Vo(1,c.brakeRate,g),_*=Vo(1,c.brakeCutoff,g),p*=Vo(1,c.brakeGain,g)),Ag(p,h,_,c.smooth)}else Ag(0,1,c.cutoffMin,c.smooth);const l=Et.ocean,u=Et.forest,d=Et.city,f=Et.thermal;if(o){const y=e.position.x,p=e.position.z,h=e.position.y,_=Hs(1-(h-Ae.waterLevel)/l.maxAlt);Di("ocean-surf-bed",IR(y,p,l.coastRadius)*_*l.gain,l.smooth);const g=Hs(1-(h-Ae.waterLevel)/u.maxAlt);Di("forest-bed",NR(y,p,u.coastRadius)*g*u.gain,u.smooth);const b=Hs(1-(h-Ae.waterLevel)/d.maxAlt);Di("city-bed",DR(y,p,d.coastRadius)*b*d.gain,d.smooth),Di("thermal-lift",Hs(Vy(y,h,p)/f.liftRef)*f.gain,f.smooth)}else Di("ocean-surf-bed",0,l.smooth),Di("forest-bed",0,u.smooth),Di("city-bed",0,d.smooth),Di("thermal-lift",0,f.smooth);Di("grey-boost",t.greyActive?Et.boost.greyGain:0,.05),t.oneShotActive&&!Eg&&on("one-shot-boost",{gain:Et.boost.oneShotGain}),Eg=t.oneShotActive;const m=t.flightState;m!==_l&&(m===i.LANDING_ROLL&&_l===i.FLYING?on("touchdown"):m===i.LANDED?on("landing-success"):m===i.CRASHING&&on("crash"),_l=m);const v=t.gearAmount>.02;v&&!qh&&m===i.FLYING&&on("gear-deploy"),qh=v}const is=z_("PlayGames"),Ns=Mi.getPlatform()==="android";let Ln=!1,_a="";const Xh=new Set;function Tg(){for(const n of Xh)try{n(Ln)}catch(e){console.warn("[games] auth listener failed",e)}}function OR(n){return _n.achievements.android?.[n]||""}function Rg(n){return _n.leaderboards.android?.[n]}async function UR(){if(Ln=!!(await is.isAuthenticated())?.authenticated,Ln)try{_a=(await is.getPlayer())?.displayName||""}catch{_a=""}}async function Lg(){for(const n of Object.keys(j.achievementsUnlocked||{}))j.achievementsUnlocked[n]&&Wn.unlockAchievement(n);Wn.submitBestRun(j.bestFlightPunkte|0)}const Wn={isAvailable(){return Ns},isSignedIn(){return Ln},playerName(){return _a},onAuthChange(n){return Xh.add(n),()=>Xh.delete(n)},async init(){if(Ns){try{await UR(),Ln&&await Lg()}catch(n){console.warn("[games] init failed",n)}Tg()}},async signIn(){if(!Ns)return{authenticated:!1};try{if(Ln=!!(await is.signIn())?.authenticated,Ln){try{_a=(await is.getPlayer())?.displayName||""}catch{_a=""}await Lg()}}catch(n){console.warn("[games] signIn failed",n),Ln=!1}return Tg(),{authenticated:Ln}},unlockAchievement(n){if(!Ns||!Ln)return;const e=OR(n);e&&is.unlockAchievement({achievementId:e}).catch(t=>console.warn("[games] unlock failed",n,t))},submitBestRun(n){if(!Ns||!Ln)return;const e=Rg("bestRun");n>=_n.minSubmitPunkte&&is.submitScore({leaderboardId:e,score:Math.round(n)}).catch(t=>console.warn("[games] submitScore failed",t))},async showAchievements(){if(Ns&&!(!Ln&&!(await this.signIn()).authenticated))try{await is.showAchievements()}catch(n){console.warn("[games] showAchievements failed",n)}},async showLeaderboard(){if(!Ns||!Ln&&!(await this.signIn()).authenticated)return;const n=Rg("bestRun");try{await is.showLeaderboard({leaderboardId:n})}catch(e){console.warn("[games] showLeaderboard failed",e)}}},Cg=tt.filter(n=>n.id!==ci).length,FR=tt.find(n=>n.id===ci),BR=Ev(FR);function Vd(n){let e=0;for(const t of tt)t.id!==ci&&n.landedRunways[t.id]&&e++;return e}function Wd(n){let e=0;for(const t of Object.keys(n.gofiosByIsland))t!==BR&&n.visitedIslands[t]&&e++;return e}function Pg(n){return Object.keys(n.gofiosByIsland).length-1}function qc(n){return Object.keys(n.exploredPOIs).length}function Xc(n){return Math.ceil(n*Fs.length)}function qd(n){return Object.keys(n.runAirports).length}let $c=null;function zR(){if($c)return $c;let n=null,e=0;for(const t of Fs){const i=Gh(t.x,t.z);i>e&&(e=i,n=t.id)}return n&&($c=n),$c}const GR=[{key:"firstLanding",isEarned:n=>n.landings>=1},{key:"newAirport",isEarned:n=>Vd(n)>=1},{key:"airportsHalf",isEarned:n=>Vd(n)>=Math.ceil(_n.airportsHalfFraction*Cg)},{key:"airportsAll",isEarned:n=>Vd(n)>=Cg},{key:"runAirports3",isEarned:(n,e)=>qd(e)>=_n.runAirportCounts[0]},{key:"runAirports5",isEarned:(n,e)=>qd(e)>=_n.runAirportCounts[1]},{key:"runAirportsAll",isEarned:(n,e)=>qd(e)>=tt.length},{key:"islandFirst",isEarned:n=>Wd(n)>=1},{key:"islandsHalf",isEarned:n=>Wd(n)>=Math.ceil(.5*Pg(n))},{key:"islandsAll",isEarned:n=>Wd(n)>=Pg(n)},{key:"signatureIsland",isEarned:n=>!!n.visitedIslands[_n.signatureIsland]},{key:"boosterT2",isEarned:n=>n.oneShotTier>=2},{key:"boosterT3",isEarned:n=>n.oneShotTier>=3},{key:"boosterT4",isEarned:n=>n.oneShotTier>=4},{key:"poi25",isEarned:n=>qc(n)>=Xc(_n.poiFractions.poi25)},{key:"poi50",isEarned:n=>qc(n)>=Xc(_n.poiFractions.poi50)},{key:"poi75",isEarned:n=>qc(n)>=Xc(_n.poiFractions.poi75)},{key:"poi100",isEarned:n=>qc(n)>=Xc(_n.poiFractions.poi100)},{key:"goldenWings",isEarned:n=>!!n.goldenWingsActive},{key:"summit",isEarned:n=>{const e=zR();return!!(e&&n.exploredPOIs[e])}},{key:"streak5",isEarned:n=>n.bestSessionLandings>=_n.streakTarget},{key:"landings50",isEarned:n=>n.landings>=_n.careerLandingsTarget},...["punkte250k","punkte500k","punkte1m","punkte2m","punkte5m","punkte10m"].map((n,e)=>({key:n,isEarned:t=>t.punkteLifetime>=_n.punkteMilestones[e]}))];function sc(){if(j.testMode||D.tutorial)return;let n=!1;for(const e of GR)j.achievementsUnlocked[e.key]||e.isEarned(j,D)&&(j.achievementsUnlocked[e.key]=!0,Wn.unlockAchievement(e.key),n=!0);n&&Pt()}const nu=new Set;function Er(){const n=!!j.goldenWingsActive,e=n?Xt.goldenStart:1,t=n?Xt.goldenCap:Xt.cap;return Math.min(t,e+nu.size*Xt.increment)}function op(){return!!j.goldenWingsActive}function rp(){return j.goldenWingsOwned|0}function HR(){const n=!!j.goldenWingsActive,e=n?Xt.goldenStart:1,t=n?Xt.goldenCap:Xt.cap;return t<=e?0:Math.min(1,(Er()-e)/(t-e))}function VR(n){if(D.tutorial||nu.has(n))return 0;const e=Er();nu.add(n);const t=Er();return t>e?t:0}function Yy(){nu.clear()}function WR(){j.goldenWingsActive=!1}function qR(){return(j.obsidian|0)<Xt.goldenPrice?!1:(j.obsidian=(j.obsidian|0)-Xt.goldenPrice,j.goldenWingsOwned=(j.goldenWingsOwned|0)+1,Pt(),!0)}function XR(){return j.goldenWingsActive||(j.goldenWingsOwned|0)<1?!1:(j.goldenWingsOwned=(j.goldenWingsOwned|0)-1,j.goldenWingsActive=!0,Pt(),sc(),!0)}const Ha=document.getElementById("golden-panel"),Ig=document.getElementById("golden-slide"),Sn=document.getElementById("golden-slide-handle"),Ng=document.getElementById("golden-panel-active"),$h=document.getElementById("golden-panel-shop"),dr=document.getElementById("golden-btn"),$R=document.getElementById("golden-count-touch"),jR=document.getElementById("golden-count-desktop"),Zy=document.getElementById("touch-brake");let Hi=!1,iu="",ba=null;function ap(){ba&&(clearTimeout(ba),ba=null)}function YR(){!Ha||Hi||(ap(),Hi=!0,iu="",Ha.hidden=!1)}function oc(){!Ha||!Hi||(ap(),Hi=!1,Ha.hidden=!0,su())}function Ky(){Hi?oc():YR()}function ZR(){const n=D.flightState===De.PRELAUNCH&&!D.tutorial;!n&&Hi&&oc();const e=op(),t=rp(),i=`${n}|${Hi}|${e}|${t}`;if(i===iu)return;iu=i,dr&&(dr.hidden=!n);const s=n&&t>0;for(const r of[$R,jR])r&&(r.hidden=!s,s&&(r.textContent=t>99?"99+":String(t)));const o=n&&e;Zy?.classList.toggle("golden-active",o),dr?.classList.toggle("golden-active",o),Hi&&(Ig&&(Ig.hidden=e||t<1),Ng&&(Ng.hidden=!e),$h&&($h.hidden=e||t>0))}let Ar=null,Jy=0,jh=0;function su(){Ar=null,Sn&&(Sn.style.transition="",Sn.style.transform="translateY(0)")}Sn?.addEventListener("pointerdown",n=>{if(Ar!==null)return;Ar=n.pointerId,Jy=n.clientY;const e=Sn.parentElement;jh=Math.max(20,e.clientHeight-Sn.offsetHeight-8),Sn.style.transition="none";try{Sn.setPointerCapture(n.pointerId)}catch{}n.preventDefault()});Sn?.addEventListener("pointermove",n=>{if(n.pointerId!==Ar)return;const e=Math.min(0,Math.max(-jh,n.clientY-Jy));if(Sn.style.transform=`translateY(${e.toFixed(1)}px)`,-e>=jh*.92){Ar=null;try{Sn.releasePointerCapture(n.pointerId)}catch{}if(XR()){on("golden-activate"),su(),iu="";for(const t of[Zy,dr])t&&(t.classList.remove("golden-pop"),t.offsetWidth,t.classList.add("golden-pop"));ap(),ba=setTimeout(()=>{ba=null,oc()},Xt.goldenLingerMs)}else su()}});function Qy(n){n.pointerId===Ar&&su()}Sn?.addEventListener("pointerup",Qy);Sn?.addEventListener("pointercancel",Qy);Sn?.addEventListener("contextmenu",n=>n.preventDefault());$h?.addEventListener("click",async()=>{oc();const n=D.paused;D.paused=!0;const{openModal:e}=await Ja(async()=>{const{openModal:t}=await Promise.resolve().then(()=>iN);return{openModal:t}},void 0);e("shop",{onClose:()=>{n||(D.paused=!1)}})});dr?.addEventListener("click",()=>Ky());document.addEventListener("pointerdown",n=>{Hi&&(Ha.contains(n.target)||dr?.contains(n.target)||n.target.closest?.("#touch-brake")||oc())},!0);yo()&&document.body.classList.add("touch-mode");const Vs=document.getElementById("touch-joystick-zone"),Fi=document.getElementById("touch-joystick"),Tr=Fi?.querySelector(".touch-joystick-thumb"),ii=document.getElementById("touch-brake"),Rr=document.getElementById("touch-boost"),ri=document.getElementById("touch-oneshot"),KR=document.getElementById("touch-boost-corner"),Dg=document.getElementById("touch-actions"),kg=document.getElementById("map-btn"),bi=document.getElementById("map-card"),ps=document.getElementById("map-card-backdrop"),jc=60,Xd=8;let Va=null,Yh=0,Zh=0,Kh=!0;function ou(n){Kh=!!n,Kh||cp()}const Qt={pitch:0,roll:0,brake:!1,boost:!1,isActive:!1};let Mo=!1;function JR(){return Mo}function QR(){Mo=!1}function eL(){return Qt}const tL=["welcome-overlay","pause-overlay","levels-overlay","crash","hangar-overlay","shop-overlay","settings-overlay","obsidian-confirm","reset-confirm","imprint-overlay","licenses-overlay"];function nL(){for(const n of tL){const e=document.getElementById(n);if(e&&e.classList.contains("visible"))return!0}return!1}function cp(){Va=null,Qt.pitch=0,Qt.roll=0,Qt.isActive=!1,Fi&&(Fi.hidden=!0,Fi.setAttribute("aria-hidden","true")),Tr&&(Tr.style.transform="translate(0px, 0px)")}function iL(n){if(Kh&&n.pointerType==="touch"&&Va===null&&!nL()){Va=n.pointerId,Yh=n.clientX,Zh=n.clientY,Fi&&(Fi.style.left=Yh+"px",Fi.style.top=Zh+"px",Fi.hidden=!1,Fi.setAttribute("aria-hidden","false")),Tr&&(Tr.style.transform="translate(0px, 0px)"),Qt.isActive=!0,Mo=!0;try{Vs.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function sL(n){if(n.pointerId!==Va)return;let e=n.clientX-Yh,t=n.clientY-Zh;const i=Math.hypot(e,t);let s=e,o=t;if(i>jc&&(s=e*jc/i,o=t*jc/i),Tr&&(Tr.style.transform=`translate(${s.toFixed(1)}px, ${o.toFixed(1)}px)`),i<=Xd)Qt.pitch=0,Qt.roll=0;else{const r=Math.min(1,(i-Xd)/(jc-Xd));Qt.roll=e/i*r,Qt.pitch=t/i*r}Mo=!0}function Og(n){if(n.pointerId===Va){try{Vs.releasePointerCapture?.(n.pointerId)}catch{}cp()}}Vs&&(Vs.addEventListener("pointerdown",iL),Vs.addEventListener("pointermove",sL),Vs.addEventListener("pointerup",Og),Vs.addEventListener("pointercancel",Og));let Wa=null;const qa=new Set;function ji(n,e){n&&n.classList.toggle("is-pressed",!!e)}function oL(n){if(ii?.classList.contains("golden-mode")){Ky(),n.preventDefault();return}if(!Nu()){n.preventDefault();return}Wa=n.pointerId,Qt.brake=!0,Mo=!0,ji(ii,!0);try{ii.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function rL(n){n.pointerId===Wa&&(Wa=null,Qt.brake=!1,ji(ii,!1))}function ex(n){const e=qa.size===0;qa.add(n.pointerId),Qt.boost=!0,Mo=!0,e&&Cv(),ji(Rr,!0);try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function tx(n){qa.delete(n.pointerId)&&qa.size===0&&(Qt.boost=!1,ji(Rr,!1))}const aL=140;let Yc=null;function cL(n){Lv(),Mo=!0,ji(ri,!0),Yc&&clearTimeout(Yc),Yc=setTimeout(()=>{ji(ri,!1),Yc=null},aL),n.preventDefault()}function lp(n,e,t){n&&(n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.addEventListener("contextmenu",i=>i.preventDefault()))}lp(ii,oL,rL);lp(Rr,ex,tx);lp(KR,ex,tx);ri&&(ri.addEventListener("pointerdown",cL),ri.addEventListener("contextmenu",n=>n.preventDefault()));const lL=1e3;let Ug=null,Fg=-1,Bg=-1,zg=-1,Zr=0,ru=!0,Zc=!1;function $d(n){n!==!ru&&(ru=!n,ri&&(ri.hidden=!n),n&&!Zc?(Dg?.classList.add("has-oneshot"),Zc=!0):!n&&Zc&&(Dg?.classList.remove("has-oneshot"),Zc=!1))}let Gg=null,Hg=null;function uL(){const n=D.flightState,e=n===De.PRELAUNCH&&!D.tutorial,t=!e&&n!==De.FLYING&&n!==De.LANDING_ROLL;e!==Gg&&(ii?.classList.toggle("golden-mode",e),Gg=e),t!==Hg&&(ii?.classList.toggle("brake-hidden",t),Hg=t);const i=!Nu();i!==Ug&&(ii&&ii.classList.toggle("is-locked",i),i&&Qt.brake&&(Qt.brake=!1,Wa=null,ji(ii,!1)),Ug=i);const s=lo();if(s!==Fg){if(ri&&s>0){const r=St.oneShot.tiers[s]?.color??St.oneShot.tiers[0].color,a=r>>16&255,c=r>>8&255,l=r&255;ri.style.setProperty("--tier-color",`rgba(${a}, ${c}, ${l}, 0.5)`)}Fg=s}if(s===0)$d(!1),Zr=0;else{const r=D.boostFuelOneshot;Math.abs(r-Bg)>.005&&(ri&&ri.style.setProperty("--fuel",r.toFixed(3)),Bg=r),r<=.001?(Zr===0&&(Zr=performance.now()),!ru&&performance.now()-Zr>=lL&&$d(!1)):(Zr=0,ru&&$d(!0))}const o=D.boostFuelGrey;Math.abs(o-zg)>.005&&(Rr&&Rr.style.setProperty("--fuel",o.toFixed(3)),zg=o)}function nx(){cp(),Wa=null,qa.clear(),Qt.brake=!1,Qt.boost=!1,ji(ii,!1),ji(Rr,!1)}document.addEventListener("visibilitychange",()=>{document.hidden&&nx()});window.addEventListener("blur",nx);let ix=!1;function dL(){!bi||bi.classList.contains("is-open")||(ix=D.paused,D.paused=!0,bi.classList.add("is-open"),bi.setAttribute("aria-modal","true"),ps&&(ps.classList.add("is-open"),ps.setAttribute("aria-hidden","false")))}function up(){!bi||!bi.classList.contains("is-open")||(bi.classList.remove("is-open"),bi.removeAttribute("aria-modal"),ps&&(ps.classList.remove("is-open"),ps.setAttribute("aria-hidden","true")),ix||(D.paused=!1))}kg&&kg.addEventListener("click",()=>{bi?.classList.contains("is-open")?up():dL()});ps&&ps.addEventListener("click",up);document.addEventListener("keydown",n=>{n.key==="Escape"&&bi?.classList.contains("is-open")&&(up(),n.stopImmediatePropagation())});const hL=`The MIT License

Copyright © 2010-2023 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`,fL=`MIT License

Copyright (c) 2017-present Drifty Co.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,pL=`Copyright 2006 The Inconsolata Project Authors (https://github.com/cyrealtype/Inconsolata)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
`,mL=`Material Symbols
Copyright Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
The full license text follows.

-----------------------------------------------------------


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`,gL=[{name:"three.js",license:"MIT License",text:hL},{name:"Capacitor",license:"MIT License",text:fL},{name:"Inconsolata",license:"SIL Open Font License 1.1",text:pL},{name:"Material Symbols",license:"Apache License 2.0",text:mL}],Vg=document.getElementById("licenses-list");if(Vg)for(const n of gL){const e=document.createElement("section");e.className="license-item";const t=document.createElement("div");t.className="license-head";const i=document.createElement("span");i.className="license-name",i.textContent=n.name;const s=document.createElement("span");s.className="license-tag",s.textContent=n.license,t.append(i,s);const o=document.createElement("details");o.className="license-details";const r=document.createElement("summary");r.textContent="Lizenztext anzeigen";const a=document.createElement("pre");a.className="license-text",a.textContent=n.text.trim(),o.append(r,a),e.append(t,o),Vg.append(e)}const Mt=new xy;Mt.background=new Ee(Ze.sky);Mt.fog=new ec(Ze.sky,Ae.fogStart,Ae.fogEnd);const Wt=new Cn(62,window.innerWidth/window.innerHeight,.5,15e3),mn=new qf({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});mn.setPixelRatio(ob());mn.setSize(window.innerWidth,window.innerHeight);mn.outputColorSpace=Ot;document.body.appendChild(mn.domElement);const sx=new Uh(16774882,1.05);sx.position.set(80,140,60);Mt.add(sx);const vL=new M1(14542572,8292974,.55);Mt.add(vL);const Jh=new I(0,1,0);window.addEventListener("resize",()=>{Wt.aspect=window.innerWidth/window.innerHeight,Wt.updateProjectionMatrix(),mn.setSize(window.innerWidth,window.innerHeight)});const yL=typeof window<"u"?new URLSearchParams(window.location.search):null;function ox(n){if(yL?.get(n)==="1")return!0;try{return localStorage.getItem(n)==="1"}catch{return!1}}const rx=ox("debugGl"),xL=ox("debugPerf")||rx;let mi=null,Kr=0,Jr=0;const _L=(()=>{try{for(const n of document.querySelectorAll("script")){const e=(n.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(e)return e[1]}}catch{}return"?"})();function bL(){mi||(mi=document.createElement("div"),mi.id="debug-perf",mi.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),mi.textContent="measuring…",document.body.appendChild(mi))}const hr=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,fr=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let Wg=null;hr&&hr.addEventListener("click",()=>{D.showPerf=!D.showPerf,hr.classList.toggle("off",!D.showPerf)});fr&&fr.addEventListener("click",()=>{D.showAds=!D.showAds,fr.classList.toggle("off",!D.showAds)});function SL(){const n=!!j.testMode;n!==Wg&&(Wg=n,hr&&(hr.classList.toggle("visible",n),hr.classList.toggle("off",!D.showPerf)),fr&&(fr.classList.toggle("visible",n),fr.classList.toggle("off",!D.showAds)))}function ML(n){SL();const e=xL||j.testMode&&D.showPerf,t=rx||j.testMode&&D.showPerf;if(!e){mi&&(mi.style.display="none"),Kr=0,Jr=0;return}if(bL(),mi.style.display="",Kr++,!Jr){Jr=n;return}const i=n-Jr;if(i<500)return;const s=Math.round(Kr*1e3/i),o=Math.round(i/Kr*10)/10,r=mn?mn.getPixelRatio():0,a=mn?`${mn.domElement.width}x${mn.domElement.height}`:"?";let c=`Build:    ${_L}
FPS:      ${s}
Frame:    ${o} ms
Mobile:   ${yo()?"yes":"no"}
DPR set:  ${r.toFixed(2)} (dev ${(window.devicePixelRatio||0).toFixed(2)})
Buffer:   ${a}
Segments: ${Ae.segments}
Samples:  ${Tt.sampleCount.toLocaleString("de-DE")}
Audio:    ${AR()}`;if(t&&mn){const l=mn.info.render,u=mn.info.memory;c+=`
Calls:    ${l.calls}
Tris:     ${l.triangles.toLocaleString("de-DE")}
Programs: ${mn.info.programs?.length??"?"}
Geoms:    ${u.geometries}
Textures: ${u.textures}`}mi.textContent=c,Kr=0,Jr=n}function ax(){const n=new gt,e=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Dt(e,3)),n.computeVertexNormals();const t=new ut({color:Ze.paper,flatShading:!0,side:Kt}),i=new nt(n,t);i.name="paperBody";const s=new Ry(n,18),o=new zu({color:Ze.ink,transparent:!0,opacity:.22}),r=new by(s,o),a=new lt;a.add(i),a.add(r);const c=new Gu(.03,20),l=new jn({color:1712164,side:Kt});for(const u of[-.36,.36]){const d=new nt(c,l);d.position.set(u,.13,.423),a.add(d)}return a}const he=ax();he.position.set(0,38,0);const wL=1712164;function dp(){return Sh}function Fr(n){return Sh.find(e=>e.id===n)||Sh[0]}function cx(){return Fr(j.equippedSkin)}function lx(n){return!!j.ownedSkins[n]}function Wu(n){j.ownedSkins[n]=!0,Pt()}function hp(n){return Fr(n).teaser||!lx(n)?!1:(j.equippedSkin=n,dx(),Pt(),!0)}function EL(n){if(n.userData._skinRole!==void 0)return n.userData._skinRole;let e=null;const t=n.color?n.color.getHex():-1;return n.isLineBasicMaterial&&t===Ze.ink?e="ink":n.isMeshBasicMaterial&&t===wL?e="vent":n.isMeshLambertMaterial&&t===Ze.paper&&(e="paper"),n.userData._skinRole=e,e}function ux(n,e){!e||e.teaser||n.traverse(t=>{if(!t.material)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const s of i){const o=EL(s);o==="paper"&&e.paper!=null?(s.color.setHex(e.paper),s.emissive&&(s.emissive.setHex(e.emissive!=null?e.emissive:0),"emissiveIntensity"in s&&(s.emissiveIntensity=e.emissiveIntensity!=null?e.emissiveIntensity:1))):o==="ink"&&e.ink!=null?s.color.setHex(e.ink):o==="vent"&&e.vent!=null&&s.color.setHex(e.vent)}})}function dx(){ux(he,cx())}const qg={android:"goog_dseUNtdcnlZGNWfAOgAdDoYIyki",ios:"appl_adobEJBJMEfqpVfgpItUNUsfWVS"},jd="default",Qh=new URLSearchParams(window.location.search).has("mockiap"),Yd=()=>!Mi.isNativePlatform()||Qh,hx=n=>If.find(e=>e.id===n),fp=n=>If.find(e=>e.productId===n);function fx(n){const e=fp(n);return e?Math.floor(e.diamonds*(1+e.bonusPct/100)):0}function px(n){const e=fx(n.productId);return j.obsidian=(j.obsidian|0)+e,j.obsidianLifetimeGranted=(j.obsidianLifetimeGranted|0)+e,on("buy-diamonds"),Pt(),e}function Xg(n){let e=0;for(const i of n?.nonSubscriptionTransactions||[])e+=fx(i.productIdentifier);const t=Math.max(0,e-(j.obsidianLifetimeGranted|0));return t>0&&(j.obsidian=(j.obsidian|0)+t,j.obsidianLifetimeGranted=e,Pt()),t}function Zd(n){!!n?.entitlements?.active?.[Da.entitlement]&&!j.adsRemoveOwned&&(j.adsRemoveOwned=!0,Pt())}const mx={name:"mock",async init(){},localizedPrice(n){const e=fp(n);return e?e.priceFallback:""},async purchasePack(n){if(!Yd())return{success:!1};const e=hx(n);return e?{success:!0,diamonds:px(e)}:{success:!1}},async purchaseSkin(n){return Yd()?(Wu(n),{success:!0}):{success:!1}},async purchaseRemoveAds(){return Yd()?(j.adsRemoveOwned=!0,Pt(),{success:!0}):{success:!1}},async restore(){return{success:!0,restored:[]}},hasEntitlement(n){return!!j.ownedSkins[n]}},$g={name:"revenuecat",_Purchases:null,_prices:{},_packages:{},async init(n){const{Purchases:e,LOG_LEVEL:t}=await Ja(async()=>{const{Purchases:i,LOG_LEVEL:s}=await import("./index-6c8v8erw.js");return{Purchases:i,LOG_LEVEL:s}},__vite__mapDeps([0,1]));this._Purchases=e,await e.configure({apiKey:n});try{await e.setLogLevel({level:t.WARN})}catch{}await this._loadOfferings(),TL();try{const{customerInfo:i}=await e.getCustomerInfo();Xg(i),Zd(i)}catch(i){console.warn("[iap] init reconcile failed",i)}},async _loadOfferings(){try{const n=await this._Purchases.getOfferings(),e=n?.all?.[jd]||n?.current;for(const t of e?.availablePackages||[]){const i=t?.product?.identifier;i&&(this._prices[i]=t.product.priceString||"",this._packages[i]=t)}}catch(n){console.warn("[iap] getOfferings failed",n)}},localizedPrice(n){return this._prices[n]||(fp(n)?.priceFallback??"")},async purchasePack(n){const e=hx(n);if(!e)return{success:!1};const t=this._packages[e.productId];if(!t)return console.warn(`[iap] no RevenueCat package for ${e.productId} — is it in the "${jd}" offering?`),{success:!1};try{return await this._Purchases.purchasePackage({aPackage:t}),{success:!0,diamonds:px(e)}}catch(i){return i?.userCancelled||i?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchasePack failed",i),{success:!1})}},async purchaseSkin(n){try{return Wu(n),{success:!0}}catch(e){return e?.userCancelled?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseSkin failed",e),{success:!1})}},async purchaseRemoveAds(){const n=this._packages[Da.productId];if(!n)return console.warn(`[iap] no RevenueCat package for ${Da.productId} — is it in the "${jd}" offering?`),{success:!1};try{const{customerInfo:e}=await this._Purchases.purchasePackage({aPackage:n});return Zd(e),{success:!0}}catch(e){return e?.userCancelled||e?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseRemoveAds failed",e),{success:!1})}},async restore(){try{const{customerInfo:n}=await this._Purchases.restorePurchases(),e=Xg(n);return Zd(n),{success:!0,restored:e>0?["obsidian"]:[],regranted:e}}catch(n){return console.warn("[iap] restore failed",n),{success:!1}}},hasEntitlement(n){return!!j.ownedSkins[n]}},gx=[];function AL(n){gx.push(n)}function TL(){for(const n of gx)try{n()}catch(e){console.warn("[iap] price listener failed",e)}}let di=mx;const fo={async init(){if(Qh||!Mi.isNativePlatform())return;const n=Mi.getPlatform()==="ios"?qg.ios:qg.android;try{await $g.init(n),di=$g}catch(e){console.warn("[iap] RevenueCat init failed — using mock",e),di=mx}},isAvailable(){return Mi.isNativePlatform()||Qh},localizedPrice(n){return di.localizedPrice(n)},purchasePack(n){return di.purchasePack(n)},purchaseSkin(n){return di.purchaseSkin(n)},purchaseRemoveAds(){return di.purchaseRemoveAds()},removeAdsPrice(){return di.localizedPrice(Da.productId)||Da.priceFallback},restore(){return di.restore()},hasEntitlement(n){return di.hasEntitlement(n)},get providerName(){return di.name}},RL=new URLSearchParams(window.location.search).has("mockads"),bl=Mi.isNativePlatform()||RL;function pp(){return Mi.getPlatform()==="ios"?"ios":"android"}function mp(){return!!In.useTestAds?.[pp()]}function jg(){const n=pp();return mp()?In.test[n].interstitial:In[n].interstitial}function Yg(){const n=pp();return mp()?In.test[n].rewarded:In[n].rewarded}function Zg(){try{window.focus()}catch{}try{window.dispatchEvent(new Event("resize"))}catch{}}function Kg(){return new Date().toISOString().slice(0,10)}function vx(){j.rewardedDay!==Kg()&&(j.rewardedDay=Kg(),j.rewardedToday=0)}function Jg(){return vx(),Math.max(0,In.rewardedDailyCap-(j.rewardedToday|0))}let Kd=0,Qg=-1/0;const yx={name:"mock",async init(){},async preloadInterstitial(){},async preloadRewarded(){},async showInterstitial(){console.log("[ads] mock interstitial")},async showRewarded(){return console.log("[ads] mock rewarded → granted"),!0}},ef={name:"admob",_AdMob:null,_mod:null,_interReady:!1,_rewardReady:!1,async init(){this._mod=await Ja(()=>import("./index-BNXHsM2Y.js"),__vite__mapDeps([2,1])),this._AdMob=this._mod.AdMob,await this._AdMob.initialize({initializeForTesting:mp()});try{const n=await this._AdMob.requestConsentInfo();n?.isConsentFormAvailable&&n?.status==="REQUIRED"&&await this._AdMob.showConsentForm()}catch(n){console.warn("[ads] consent failed",n)}if(Mi.getPlatform()==="ios")try{await this._AdMob.requestTrackingAuthorization()}catch{}},async preloadInterstitial(){try{await this._AdMob.prepareInterstitial({adId:jg()}),this._interReady=!0}catch(n){this._interReady=!1,console.warn("[ads] preload interstitial failed",n)}},async preloadRewarded(){try{await this._AdMob.prepareRewardVideoAd({adId:Yg()}),this._rewardReady=!0}catch(n){this._rewardReady=!1,console.warn("[ads] preload rewarded failed",n)}},_present(n,e,t){return new Promise(i=>{let s=!1,o=null,r=null;const a=()=>{if(!s){s=!0;try{o?.remove()}catch{}try{r?.remove()}catch{}i()}};Promise.all([this._AdMob.addListener(e,a).then(c=>{o=c}),this._AdMob.addListener(t,a).then(c=>{r=c})]).then(()=>n().catch(a))})},async showInterstitial(){try{this._interReady||await this._AdMob.prepareInterstitial({adId:jg()}),this._interReady=!1,await this._present(()=>this._AdMob.showInterstitial(),this._mod.InterstitialAdPluginEvents.Dismissed,this._mod.InterstitialAdPluginEvents.FailedToShow)}catch(n){console.warn("[ads] interstitial failed",n)}Zg(),this.preloadInterstitial()},async showRewarded(){let n=!1,e=null;try{e=await this._AdMob.addListener(this._mod.RewardAdPluginEvents.Rewarded,()=>{n=!0}),this._rewardReady||await this._AdMob.prepareRewardVideoAd({adId:Yg()}),this._rewardReady=!1,await this._present(()=>this._AdMob.showRewardVideoAd(),this._mod.RewardAdPluginEvents.Dismissed,this._mod.RewardAdPluginEvents.FailedToShow)}catch(t){console.warn("[ads] rewarded failed",t)}finally{try{e?.remove()}catch{}}return Zg(),this.preloadRewarded(),n}};let ss=yx,Wo=null;function Kc(){return Wo||(!bl||!Mi.isNativePlatform()?(Wo=Promise.resolve(),Wo):(Wo=ef.init().then(()=>{ss=ef}).catch(n=>{console.warn("[ads] AdMob init failed — using mock",n),ss=yx}),Wo))}const po={isAvailable(){return bl},async warmup(){await Kc(),ss===ef&&(ss.preloadInterstitial(),ss.preloadRewarded())},async onCrashRestart(){if(Kd++,!bl)return;if(j.testMode){D.showAds&&(await Kc(),await ss.showInterstitial());return}if(j.adsRemoveOwned||Kd<=In.crashGraceCount||Kd%In.interstitialEveryNCrashes!==0)return;const n=performance.now();n-Qg<In.interstitialMinGapSec*1e3||(Qg=n,await Kc(),await ss.showInterstitial())},rewardedRemaining:Jg,async watchRewarded(){return bl?Jg()<=0?{success:!1,capped:!0}:(await Kc(),await ss.showRewarded()?(vx(),j.rewardedToday=(j.rewardedToday|0)+1,j.obsidian=(j.obsidian|0)+In.rewardedDiamonds,on("buy-diamonds"),Pt(),{success:!0,diamonds:In.rewardedDiamonds}):{success:!1}):{success:!1}}},LL={sub:"Building the world…",hint:"Higher quality settings may take a few seconds."},CL={pause:"Pause",map:"Map",close:"Close",landings:"Landings",brake:"Brake",oneShot:"One-Shot",boost:"Boost",sell:"Sell for {cost} points",flightScore:"Points this flight",goldenBuy:"Buy Golden Wings for {cost} Obsidian"},PL={lift:"Lift",soon:"soon",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",hintNormalTouch:"Steer with joystick · Right Boost / Brake / One-Shot",hintPrelaunch:"Pull down to launch",hintPrelaunchGyro:"Tap boost to take off",hintTakeoff:"Takeoff roll…",landingToast:"Touchdown! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"New island discovered!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land at the marked airport to refuel your boosters and earn bonus points.",airportUnlockTitle:"Airport unlocked!",airportUnlockBody:"Spawn at {name} any time from the Levels menu.",airportUnlocked:"{name} unlocked",wrongApproach:"Wrong approach side — line up from the other end.",multiplierUp:"Multiplier ×{mult}",goldenTitle:"Golden Wings",goldenSub:"×2 points until your next crash",goldenActive:"Golden Wings active",goldenOneUse:"Single use — you can stock up on several.",goldenOwnedCount:"In stock: {count}",goldenSlide:"Slide up to activate",goldenToShop:"Get them in the shop"},IL={names:["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],unlock:["","Booster Level 1 unlocked","Booster Level 2 unlocked — La Gomera in range","Booster Level 3 unlocked — Gran Canaria in range","Booster Level MAX unlocked — Fuerteventura / Lanzarote"]},NL={start:"Start",startSubDefault:"Last checkpoint",levels:"Levels",levelsSub:"Choose airport",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Shop",shopSub:"Obsidian & designs",settings:"Settings",settingsSub:"Graphics & performance",imprint:"Imprint",licenses:"Licences"},DL={checkpoint:"Checkpoint · {id}",firstFlight:"First flight · TFN"},kL={title:"Pause",resume:"Resume flight",home:"Main menu"},OL={title:"Crash landing",restart:"Take Off Again",hint:"Spacebar",hangar:"Hangar",shop:"Shop"},UL={title:"Hangar",points:"Points",locations:"Locations",obsidian:"Obsidian",highscore:"High score",plane:"Plane",dragToRotate:"Drag to rotate",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tap an upgrade to see its description.",buy:"Buy · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Level {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Your boost level rises automatically once you've discovered enough locations. Fly through new POIs to improve your One-Shot boost.",equip:"Equip",equipped:"Equipped",comingSoon:"Coming soon",getDiamonds:"Get Obsidian →",skinPrev:"Previous design",skinNext:"Next design"},FL={title:"Pay with Obsidian?",text:"This upgrade costs <strong></strong>.",warn:"Obsidian is bought with real money. Only tap <em>Confirm</em> if you really want to spend Obsidian.",cancel:"Cancel",confirm:"Confirm",spendSkin:"You're spending {obsidian} on the {label} design."},BL={default:{name:"Paper",desc:"The classic fold."},charcoal:{name:"Charcoal",desc:"A matte slate livery — earned by explorers."},gold:{name:"Gold",desc:"A gleaming premium livery."},comingSoon:{name:"More soon",desc:"New designs are on the way."}},zL={intro:"Obsidian unlocks designs in the hangar and instant upgrades.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Best value",granted:"+ {amount} Obsidian added",restore:"Restore purchases",restored:"Purchases restored",viewSkins:"View designs →",disclosure:"Obsidian and designs are stored on this device.",watchAd:"Watch a video",adsLeftToday:"{count}/{cap} today",adsCapReached:"Come back tomorrow",removeAds:"Remove ads",removeAdsOwned:"Ads removed"},GL={title:"Settings",quality:"Graphics quality",presetLow:"Low",presetStandard:"Standard",presetHigh:"High",presetUltra:"Ultra",advanced:"Advanced",meshRes:"Mesh resolution",meshHint:"Segments · 100–3000",vegSamples:"Vegetation samples",vegHint:"10,000–10,000,000",restartNote:"Changes require a restart. Applying will reload the page.",cancel:"Cancel",apply:"Apply & reload",language:"Language",controls:"Controls",invertPitch:"Inverted flight controls",invertPitchHint:"Pull down to climb",gyroControl:"Tilt steering",gyroControlHint:"Tilt your device to steer",gyroSensitivity:"Sensitivity",gyroRecalibrate:"Recalibrate",tutorial:"Tutorial",replayTutorial:"Replay tutorial",dangerZone:"Danger zone",dangerDesc:"Resets all progress: points, locations, upgrades, discovered POIs, airports and checkpoint. Graphics settings are kept.",resetSave:"Reset progress",audio:"Audio",music:"Music",musicHint:"Menu theme by Daniel Schultes",musicVolume:"Music volume",sound:"Sound",soundHint:"Wind, ambience & effects",soundVolume:"Sound volume",headphoneHint:"Best experienced with headphones.",games:"Google Play Games",gamesSignedOut:"Not signed in",gamesSignedInAs:"Signed in as {name}",gamesSignIn:"Sign in",gamesAchievements:"Achievements",gamesLeaderboard:"Leaderboard"},HL={title:"Really delete your save?",text:"All points, locations, upgrades and discovered POIs will be lost. You'll start at <strong>Tenerife Nord</strong> with the basic plane.",warn:"This action cannot be undone.",cancel:"Cancel",confirm:"Reset"},VL={eyebrow:"Island",archTitle:"Canary Islands",legendSpawn:"Spawn",legendDiscovered:"Discovered",legendLocked:"Unknown",hintDefault:"Tap a spawn point to start there.",hintNone:"Land at an airport to unlock it as a spawn point.",hintProgress:"{landed} / {total} airports unlocked. Tap a spawn point.",hintAll:"All airports unlocked. Tap a spawn point.",markerLocked:"???",tipStart:"Start at {id}",tipNotLanded:"{id} — not landed yet",tipUndiscovered:"Not discovered yet"},WL={title:"Imprint",provider:"Provider",contact:"Contact",privacy:"Privacy policy",privacyLink:"Open privacy policy",linksLiability:"Liability for links",linksText:"Our offering contains links to external third-party websites whose content we cannot influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",footer:"Swiss Innovation Studios · 2026"},qL={title:"Open-source licences",intro:"Teide includes the following open-source components. The full licence texts are below and bundled with the app.",audioTitle:"Audio — sound & music",audioCredit:"Sound effects from Pixabay, used under the Pixabay Content Licence. Music composed by Daniel Schultes.",iconTitle:"Icons",iconCredit:"“Feather Wing” icon (Golden Wings) from SVG Repo, free for commercial use.",footer:"Swiss Innovation Studios · 2026"},XL={title:"Please rotate your device",sub:"Teide is played in landscape mode"},$L={title:"Test mode",prompt:"Enter PIN",wrong:"Wrong PIN",cancel:"Cancel",confirm:"OK"},jL={drag:{label:"Aerodynamics",desc:"Smoother folds — less drag, longer glide."},maxSpeed:{label:"Top speed",desc:"Raises the maximum cruise speed."},speedFromPitch:{label:"Dive",desc:"More acceleration in a dive — altitude becomes speed."},stallSpeed:{label:"Stability",desc:"Lower stall threshold — forgives slow flying."},takeoffSpeed:{label:"Runway",desc:"Faster take-off acceleration — less roll distance."},brake:{label:"Airbrake",desc:"Unlocks the brake flaps (Space in flight)."},greyBoost:{label:"Reserve boost",desc:"Stronger emergency thrust: longer burn, more push, faster refill."}},YL={pickLanguage:"Choose your language",welcome:"Welcome to the Canaries",story:["You've folded the perfect paper plane and launched it from the slopes of Mount Teide. Now ride the thermals and glide out across the Canary Islands.","Catch rising air to stay aloft, dive through points of interest to collect locations, and touch down on runways to unlock them as new starting points.","Landing is how you keep going: each touchdown refuels your booster for the next hop. Line up with a runway and set down gently.","Spend your points in the hangar to upgrade your plane and booster. Glide far enough and new islands come within reach — from La Gomera all the way to Lanzarote. How far can you go?"],next:"Next",begin:"Let's go"},ZL={eyebrow:"Tutorial",skip:"Skip",retry:"Try again!",done:"You're ready — off you go!",launch:"Pull down to take off and start gliding",navLeft:"Now bank left",navRight:"Now bank right",navUp:"Now climb",navDown:"Now descend",rings:"Fly through both rings ({collected}/{total})",boost:"Hold boost for a burst of speed",thermal:"Steer into the updraft to gain height",ringHigh:"Use your new height — catch the high ring",ringLow:"Now dive back down — through the low ring",invertHint:"Climbing feels backwards? Flip it.",steerHint:"Steer here",endTitle:"You're ready to glide!",endBody:"Explore the Canary Islands and dive through rings to collect locations. Gather enough and your One-Shot boost reaches the next island. How far can you glide?",endGo:"Let's go"},KL={loading:LL,a11y:CL,hud:PL,booster:IL,menu:NL,welcome:DL,pause:kL,crash:OL,hangar:UL,obsidian:FL,skins:BL,shop:zL,settings:GL,reset:HL,levels:VL,imprint:WL,licenses:qL,portrait:XL,testpin:$L,upgrades:jL,onboarding:YL,tutorial:ZL},JL={sub:"Welt wird gebaut…",hint:"Bei höheren Qualitätseinstellungen kann das einige Sekunden dauern."},QL={pause:"Pause",map:"Karte",close:"Schliessen",landings:"Landungen",brake:"Bremse",oneShot:"One-Shot",boost:"Boost",sell:"Verkaufen für {cost} Punkte",flightScore:"Punkte dieses Flugs",goldenBuy:"Goldene Flügel für {cost} Obsidian kaufen"},eC={lift:"Lift",soon:"bald",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Bremse · Shift Boost · F One-Shot",hintNormalTouch:"Joystick steuern · Rechts Boost / Bremse / One-Shot",hintPrelaunch:"Zum Starten nach unten ziehen",hintPrelaunchGyro:"Boost antippen zum Abheben",hintTakeoff:"Startrollen…",landingToast:"Geschafft! · {id}",landingBonus:"+ {bonus} Pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Neue Insel entdeckt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Lande am markierten Flughafen, um deine Booster aufzufüllen und Extra-Punkte zu sammeln.",airportUnlockTitle:"Flughafen freigeschaltet!",airportUnlockBody:"Starte jederzeit über das Levels-Menü bei {name}.",airportUnlocked:"{name} freigeschaltet",wrongApproach:"Falsche Anflugseite — flieg von der anderen Seite an.",multiplierUp:"Multiplikator ×{mult}",goldenTitle:"Goldene Flügel",goldenSub:"×2 Punkte bis zur nächsten Bruchlandung",goldenActive:"Goldene Flügel aktiv",goldenOneUse:"Einmalig — du kannst mehrere auf Vorrat kaufen.",goldenOwnedCount:"Vorrat: {count}",goldenSlide:"Zum Aktivieren nach oben schieben",goldenToShop:"Im Shop holen"},tC={names:["Kein Booster","Booster Stufe 1","Booster Stufe 2","Booster Stufe 3","Booster Stufe MAX"],unlock:["","Booster Stufe 1 freigeschaltet","Booster Stufe 2 freigeschaltet — La Gomera in Reichweite","Booster Stufe 3 freigeschaltet — Gran Canaria in Reichweite","Booster Stufe MAX freigeschaltet — Fuerteventura / Lanzarote"]},nC={start:"Start",startSubDefault:"Letzter Checkpoint",levels:"Levels",levelsSub:"Flughäfen auswählen",hangar:"Hangar",hangarSub:"Upgrades & Status",shop:"Shop",shopSub:"Obsidian & Designs",settings:"Einstellungen",settingsSub:"Grafik & Performance",imprint:"Impressum",licenses:"Lizenzen"},iC={checkpoint:"Checkpoint · {id}",firstFlight:"Erstflug · TFN"},sC={title:"Pause",resume:"Flug fortsetzen",home:"Hauptmenü"},oC={title:"Bruchlandung",restart:"Erneut abheben",hint:"Leertaste",hangar:"Hangar",shop:"Shop"},rC={title:"Hangar",points:"Punkte",locations:"Orte",obsidian:"Obsidian",highscore:"Highscore",plane:"Flugzeug",dragToRotate:"Ziehen zum Drehen",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tippe ein Upgrade an, um die Beschreibung zu sehen.",buy:"Kaufen · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Stufe {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Die Boost-Stufe steigt automatisch, sobald genug Orte entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.",equip:"Anlegen",equipped:"Angelegt",comingSoon:"Bald verfügbar",getDiamonds:"Obsidian holen →",skinPrev:"Vorheriges Design",skinNext:"Nächstes Design"},aC={title:"Mit Obsidian bezahlen?",text:"Dieses Upgrade kostet <strong></strong>.",warn:"Obsidian wird mit echtem Geld gekauft. Klick auf <em>Bestätigen</em> nur, wenn du wirklich Obsidian ausgeben willst.",cancel:"Abbrechen",confirm:"Bestätigen",spendSkin:"Du gibst {obsidian} für das Design {label} aus."},cC={default:{name:"Papier",desc:"Die klassische Faltung."},charcoal:{name:"Anthrazit",desc:"Eine matte Schiefer-Lackierung — von Entdeckern verdient."},gold:{name:"Gold",desc:"Eine glänzende Premium-Lackierung."},comingSoon:{name:"Bald mehr",desc:"Neue Designs sind unterwegs."}},lC={intro:"Obsidian schaltet Designs im Hangar und Sofort-Upgrades frei.",bonus:"+{pct}%",badgePopular:"Beliebt",badgeValue:"Bester Wert",granted:"+ {amount} Obsidian erhalten",restore:"Käufe wiederherstellen",restored:"Käufe wiederhergestellt",viewSkins:"Designs ansehen →",disclosure:"Obsidian und Designs werden auf diesem Gerät gespeichert.",watchAd:"Video ansehen",adsLeftToday:"{count}/{cap} heute",adsCapReached:"Komm morgen wieder",removeAds:"Werbung entfernen",removeAdsOwned:"Werbung entfernt"},uC={title:"Einstellungen",quality:"Grafikqualität",presetLow:"Niedrig",presetStandard:"Standard",presetHigh:"Hoch",presetUltra:"Ultra",advanced:"Erweitert",meshRes:"Mesh-Auflösung",meshHint:"Segments · 100–3000",vegSamples:"Vegetations-Samples",vegHint:"10'000–10'000'000",restartNote:"Änderungen erfordern einen Neustart. Beim Anwenden wird die Seite neu geladen.",cancel:"Abbrechen",apply:"Anwenden & Neu laden",language:"Sprache",controls:"Steuerung",invertPitch:"Umgekehrte Flugsteuerung",invertPitchHint:"Nach unten ziehen zum Steigen",gyroControl:"Neigungssteuerung",gyroControlHint:"Gerät neigen zum Steuern",gyroSensitivity:"Empfindlichkeit",gyroRecalibrate:"Neu kalibrieren",tutorial:"Tutorial",replayTutorial:"Tutorial wiederholen",dangerZone:"Danger Zone",dangerDesc:"Setzt den kompletten Spielfortschritt zurück: Punkte, Orte, Upgrades, entdeckte POIs, Flughäfen und Checkpoint. Grafik-Einstellungen bleiben erhalten.",resetSave:"Spielstand zurücksetzen",audio:"Audio",music:"Musik",musicHint:"Menü-Titel von Daniel Schultes",musicVolume:"Musiklautstärke",sound:"Ton",soundHint:"Wind, Ambiente & Effekte",soundVolume:"Tonlautstärke",headphoneHint:"Am besten mit Kopfhörern.",games:"Google Play Games",gamesSignedOut:"Nicht angemeldet",gamesSignedInAs:"Angemeldet als {name}",gamesSignIn:"Anmelden",gamesAchievements:"Erfolge",gamesLeaderboard:"Bestenliste"},dC={title:"Spielstand wirklich löschen?",text:"Alle Punkte, Orte, Upgrades und entdeckten POIs gehen verloren. Du startest auf <strong>Tenerife Nord</strong> mit dem Basis-Flugzeug.",warn:"Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",confirm:"Zurücksetzen"},hC={eyebrow:"Insel",archTitle:"Kanarische Inseln",legendSpawn:"Spawn",legendDiscovered:"Entdeckt",legendLocked:"Unbekannt",hintDefault:"Tippe einen Spawn an, um dort zu starten.",hintNone:"Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.",hintProgress:"{landed} / {total} Flughäfen freigeschaltet. Tippe einen Spawn an.",hintAll:"Alle Flughäfen freigeschaltet. Tippe einen Spawn an.",markerLocked:"???",tipStart:"Bei {id} starten",tipNotLanded:"{id} — noch nicht gelandet",tipUndiscovered:"Noch nicht entdeckt"},fC={title:"Impressum",provider:"Anbieter",contact:"Kontakt",privacy:"Datenschutz",privacyLink:"Datenschutzerklärung öffnen",linksLiability:"Haftung für Links",linksText:"Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",footer:"Swiss Innovation Studios · 2026"},pC={title:"Open-Source-Lizenzen",intro:"Teide enthält die folgenden quelloffenen Komponenten. Die vollständigen Lizenztexte sind unten und im App-Paket beigelegt.",audioTitle:"Audio — Ton & Musik",audioCredit:"Soundeffekte von Pixabay, genutzt unter der Pixabay Content License. Musik komponiert von Daniel Schultes.",iconTitle:"Icons",iconCredit:"„Feather Wing“-Icon (Goldene Flügel) von SVG Repo, frei für kommerzielle Nutzung.",footer:"Swiss Innovation Studios · 2026"},mC={title:"Bitte Gerät drehen",sub:"Teide wird im Landscape-Modus gespielt"},gC={title:"Testmodus",prompt:"PIN eingeben",wrong:"Falsche PIN",cancel:"Abbrechen",confirm:"OK"},vC={drag:{label:"Aerodynamik",desc:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten."},maxSpeed:{label:"Spitzentempo",desc:"Erhöht die maximale Fluggeschwindigkeit im Cruise."},speedFromPitch:{label:"Sturzflug",desc:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo."},stallSpeed:{label:"Stabilität",desc:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen."},takeoffSpeed:{label:"Startbahn",desc:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke."},brake:{label:"Luftbremse",desc:"Schaltet die Bremsklappen frei (Leertaste im Flug)."},greyBoost:{label:"Reserve-Boost",desc:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill."}},yC={pickLanguage:"Sprache wählen",welcome:"Willkommen auf den Kanaren",story:["Du hast den perfekten Papierflieger gefaltet und ihn von den Hängen des Teide gestartet. Reite jetzt die Thermik und gleite hinaus über die Kanarischen Inseln.","Fang Aufwinde ein, um oben zu bleiben, flieg durch Points of Interest, um Orte zu sammeln, und lande auf Pisten, um sie als neue Startpunkte freizuschalten.","Landen heißt weiterkommen: Jede Landung füllt deinen Booster für den nächsten Sprung wieder auf. Richte dich auf eine Bahn aus und setze sanft auf.","Gib deine Punkte im Hangar aus, um Flugzeug und Booster zu verbessern. Gleitest du weit genug, kommen neue Inseln in Reichweite — von La Gomera bis Lanzarote. Wie weit kommst du?"],next:"Weiter",begin:"Los geht's"},xC={eyebrow:"Tutorial",skip:"Überspringen",retry:"Nochmal!",done:"Geschafft — los geht's!",launch:"Nach unten ziehen zum Abheben und Gleiten",navLeft:"Jetzt nach links",navRight:"Jetzt nach rechts",navUp:"Jetzt steigen",navDown:"Jetzt sinken",rings:"Flieg durch beide Ringe ({collected}/{total})",boost:"Halte Boost für einen Schub",thermal:"Steuere in den Aufwind, um Höhe zu gewinnen",ringHigh:"Nutz deine Höhe — schnapp dir den hohen Ring",ringLow:"Jetzt wieder runter — durch den tiefen Ring",invertHint:"Steigen falsch herum? Hier umstellen.",steerHint:"Hier steuern",endTitle:"Bereit zum Gleiten!",endBody:"Erkunde die Kanaren und flieg durch Ringe, um Orte zu sammeln. Sammle genug, und dein One-Shot-Boost bringt dich zur nächsten Insel. Wie weit gleitest du?",endGo:"Los geht's"},_C={loading:JL,a11y:QL,hud:eC,booster:tC,menu:nC,welcome:iC,pause:sC,crash:oC,hangar:rC,obsidian:aC,skins:cC,shop:lC,settings:uC,reset:dC,levels:hC,imprint:fC,licenses:pC,portrait:mC,testpin:gC,upgrades:vC,onboarding:yC,tutorial:xC},bC={sub:"Construyendo el mundo…",hint:"Con ajustes de calidad altos puede tardar unos segundos."},SC={pause:"Pausa",map:"Mapa",close:"Cerrar",landings:"Aterrizajes",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vender por {cost} puntos",flightScore:"Puntos de este vuelo",goldenBuy:"Comprar Alas Doradas por {cost} de obsidiana"},MC={lift:"Ascenso",soon:"pronto",hintNormal:"↑ ↓ Cabeceo · ← → Alabeo · Espacio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Controla con el joystick · Derecha Boost / Freno / One-Shot",hintPrelaunch:"Tira hacia abajo para despegar",hintPrelaunchGyro:"Toca boost para despegar",hintTakeoff:"Carrera de despegue…",landingToast:"¡Aterrizaje! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"¡Nueva isla descubierta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Aterriza en el aeropuerto marcado para recargar tus propulsores y ganar puntos extra.",airportUnlockTitle:"¡Aeropuerto desbloqueado!",airportUnlockBody:"Aparece en {name} cuando quieras desde el menú Niveles.",airportUnlocked:"{name} desbloqueado",wrongApproach:"Lado de aproximación incorrecto: alinéate desde el otro extremo.",multiplierUp:"Multiplicador ×{mult}",goldenTitle:"Alas Doradas",goldenSub:"×2 puntos hasta que te estrelles",goldenActive:"Alas Doradas activas",goldenOneUse:"De un solo uso — puedes acumular varias.",goldenOwnedCount:"En reserva: {count}",goldenSlide:"Desliza hacia arriba para activar",goldenToShop:"Consíguelas en la tienda"},wC={names:["Sin Booster","Booster Nivel 1","Booster Nivel 2","Booster Nivel 3","Booster Nivel MÁX"],unlock:["","Booster Nivel 1 desbloqueado","Booster Nivel 2 desbloqueado — La Gomera a tu alcance","Booster Nivel 3 desbloqueado — Gran Canaria a tu alcance","Booster Nivel MÁX desbloqueado — Fuerteventura / Lanzarote"]},EC={start:"Empezar",startSubDefault:"Último checkpoint",levels:"Niveles",levelsSub:"Elegir aeropuerto",hangar:"Hangar",hangarSub:"Mejoras y estado",shop:"Tienda",shopSub:"Obsidiana y diseños",settings:"Ajustes",settingsSub:"Gráficos y rendimiento",imprint:"Aviso legal",licenses:"Licencias"},AC={checkpoint:"Checkpoint · {id}",firstFlight:"Primer vuelo · TFN"},TC={title:"Pausa",resume:"Reanudar vuelo",home:"Menú principal"},RC={title:"Aterrizaje forzoso",restart:"Despegar de nuevo",hint:"Barra espaciadora",hangar:"Hangar",shop:"Tienda"},LC={title:"Hangar",points:"Puntos",locations:"Lugares",obsidian:"Obsidiana",highscore:"Récord",plane:"Avión",dragToRotate:"Arrastra para girar",upgrades:"Mejoras",booster:"Booster",selectUpgrade:"Toca una mejora para ver su descripción.",buy:"Comprar · {cost}",buyObsidian:"Obsidiana · {cost}",max:"Máx",level:"Nivel {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Tu nivel de boost sube automáticamente cuando descubres suficientes lugares. Vuela a través de nuevos POIs para mejorar tu boost One-Shot.",equip:"Equipar",equipped:"Equipado",comingSoon:"Próximamente",getDiamonds:"Conseguir obsidiana →",skinPrev:"Diseño anterior",skinNext:"Diseño siguiente"},CC={title:"¿Pagar con obsidiana?",text:"Esta mejora cuesta <strong></strong>.",warn:"La obsidiana se compra con dinero real. Pulsa <em>Confirmar</em> solo si de verdad quieres gastar obsidiana.",cancel:"Cancelar",confirm:"Confirmar",spendSkin:"Vas a gastar {obsidian} en el diseño {label}."},PC={default:{name:"Papel",desc:"El pliegue clásico."},charcoal:{name:"Carbón",desc:"Una librea de pizarra mate — para exploradores."},gold:{name:"Oro",desc:"Una reluciente librea premium."},comingSoon:{name:"Más pronto",desc:"Llegan nuevos diseños."}},IC={intro:"La obsidiana desbloquea diseños en el hangar y mejoras instantáneas.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Mejor valor",granted:"+ {amount} obsidiana añadida",restore:"Restaurar compras",restored:"Compras restauradas",viewSkins:"Ver diseños →",disclosure:"La obsidiana y los diseños se guardan en este dispositivo.",watchAd:"Ver un vídeo",adsLeftToday:"{count}/{cap} hoy",adsCapReached:"Vuelve mañana",removeAds:"Quitar anuncios",removeAdsOwned:"Anuncios eliminados"},NC={title:"Ajustes",quality:"Calidad gráfica",presetLow:"Baja",presetStandard:"Estándar",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzado",meshRes:"Resolución de malla",meshHint:"Segments · 100–3000",vegSamples:"Muestras de vegetación",vegHint:"10.000–10.000.000",restartNote:"Los cambios requieren reiniciar. Al aplicar se recargará la página.",cancel:"Cancelar",apply:"Aplicar y recargar",language:"Idioma",controls:"Controles",invertPitch:"Controles de vuelo invertidos",invertPitchHint:"Tira hacia abajo para subir",gyroControl:"Control por inclinación",gyroControlHint:"Inclina el dispositivo para dirigir",gyroSensitivity:"Sensibilidad",gyroRecalibrate:"Recalibrar",tutorial:"Tutorial",replayTutorial:"Repetir tutorial",dangerZone:"Zona de peligro",dangerDesc:"Restablece todo el progreso: puntos, lugares, mejoras, POIs descubiertos, aeropuertos y checkpoint. Los ajustes gráficos se mantienen.",resetSave:"Restablecer progreso",audio:"Audio",music:"Música",musicHint:"Tema del menú de Daniel Schultes",musicVolume:"Volumen de música",sound:"Sonido",soundHint:"Viento, ambiente y efectos",soundVolume:"Volumen de sonido",headphoneHint:"Mejor con auriculares.",games:"Google Play Games",gamesSignedOut:"Sesión no iniciada",gamesSignedInAs:"Sesión iniciada como {name}",gamesSignIn:"Iniciar sesión",gamesAchievements:"Logros",gamesLeaderboard:"Clasificación"},DC={title:"¿Borrar de verdad tu partida?",text:"Se perderán todos los puntos, lugares, mejoras y POIs descubiertos. Empezarás en <strong>Tenerife Nord</strong> con el avión básico.",warn:"Esta acción no se puede deshacer.",cancel:"Cancelar",confirm:"Restablecer"},kC={eyebrow:"Isla",archTitle:"Islas Canarias",legendSpawn:"Inicio",legendDiscovered:"Descubierto",legendLocked:"Desconocido",hintDefault:"Toca un punto de inicio para empezar ahí.",hintNone:"Aterriza en un aeropuerto para desbloquearlo como punto de inicio.",hintProgress:"{landed} / {total} aeropuertos desbloqueados. Toca un punto de inicio.",hintAll:"Todos los aeropuertos desbloqueados. Toca un punto de inicio.",markerLocked:"???",tipStart:"Empezar en {id}",tipNotLanded:"{id} — aún sin aterrizar",tipUndiscovered:"Aún sin descubrir"},OC={title:"Aviso legal",provider:"Proveedor",contact:"Contacto",privacy:"Privacidad",privacyLink:"Abrir la política de privacidad",linksLiability:"Responsabilidad de los enlaces",linksText:"Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por estos contenidos ajenos. Del contenido de las páginas enlazadas es siempre responsable el respectivo proveedor u operador de dichas páginas.",footer:"Swiss Innovation Studios · 2026"},UC={title:"Licencias de código abierto",intro:"Teide incluye los siguientes componentes de código abierto. Los textos completos de las licencias están abajo y se incluyen en la app.",audioTitle:"Audio — sonido y música",audioCredit:"Efectos de sonido de Pixabay, usados bajo la Licencia de Contenido de Pixabay. Música compuesta por Daniel Schultes.",iconTitle:"Iconos",iconCredit:"Icono «Feather Wing» (Alas Doradas) de SVG Repo, de uso comercial libre.",footer:"Swiss Innovation Studios · 2026"},FC={title:"Gira tu dispositivo",sub:"Teide se juega en modo horizontal"},BC={title:"Modo de prueba",prompt:"Introduce el PIN",wrong:"PIN incorrecto",cancel:"Cancelar",confirm:"OK"},zC={drag:{label:"Aerodinámica",desc:"Pliegues más limpios — menos resistencia, planeo más largo."},maxSpeed:{label:"Velocidad máx",desc:"Aumenta la velocidad máxima de crucero."},speedFromPitch:{label:"Picado",desc:"Más aceleración en picado — la altura se convierte en velocidad."},stallSpeed:{label:"Estabilidad",desc:"Umbral de pérdida más bajo — perdona el vuelo lento."},takeoffSpeed:{label:"Pista",desc:"Aceleración de despegue más rápida — menos carrera."},brake:{label:"Aerofreno",desc:"Desbloquea los alerones de freno (Espacio en vuelo)."},greyBoost:{label:"Boost de reserva",desc:"Empuje de emergencia más fuerte: más duración, más impulso, recarga más rápida."}},GC={pickLanguage:"Elige tu idioma",welcome:"Bienvenido a las Canarias",story:["Has plegado el avión de papel perfecto y lo has lanzado desde las laderas del Teide. Ahora cabalga las térmicas y planea sobre las Islas Canarias.","Aprovecha las corrientes ascendentes para mantenerte en el aire, atraviesa puntos de interés para recoger lugares y aterriza en las pistas para desbloquearlas como nuevos puntos de partida.","Aterrizar es seguir avanzando: cada toma de tierra recarga tu propulsor para el siguiente salto. Alinéate con una pista y posa con suavidad.","Gasta tus puntos en el hangar para mejorar tu avión y tu booster. Si planeas lo suficiente, nuevas islas quedan a tu alcance — desde La Gomera hasta Lanzarote. ¿Hasta dónde llegarás?"],next:"Siguiente",begin:"¡Vamos!"},HC={eyebrow:"Tutorial",skip:"Saltar",retry:"¡Otra vez!",done:"¡Listo, a volar!",launch:"Tira hacia abajo para despegar y planear",navLeft:"Ahora a la izquierda",navRight:"Ahora a la derecha",navUp:"Ahora sube",navDown:"Ahora baja",rings:"Atraviesa los dos aros ({collected}/{total})",boost:"Mantén el boost para un empujón",thermal:"Dirígete a la corriente ascendente para ganar altura",ringHigh:"Aprovecha la altura — atrapa el aro alto",ringLow:"Ahora baja de nuevo — por el aro bajo",invertHint:"¿Subir va al revés? Cámbialo.",steerHint:"Dirige aquí",endTitle:"¡Listo para planear!",endBody:"Explora las Islas Canarias y atraviesa aros para reunir lugares. Reúne suficientes y tu boost One-Shot te lleva a la siguiente isla. ¿Hasta dónde planeas?",endGo:"¡Vamos!"},VC={loading:bC,a11y:SC,hud:MC,booster:wC,menu:EC,welcome:AC,pause:TC,crash:RC,hangar:LC,obsidian:CC,skins:PC,shop:IC,settings:NC,reset:DC,levels:kC,imprint:OC,licenses:UC,portrait:FC,testpin:BC,upgrades:zC,onboarding:GC,tutorial:HC},WC={sub:"Construction du monde…",hint:"Avec des réglages de qualité élevés, cela peut prendre quelques secondes."},qC={pause:"Pause",map:"Carte",close:"Fermer",landings:"Atterrissages",brake:"Frein",oneShot:"One-Shot",boost:"Boost",sell:"Vendre pour {cost} points",flightScore:"Points de ce vol",goldenBuy:"Acheter les Ailes dorées pour {cost} obsidienne"},XC={lift:"Ascendance",soon:"bientôt",hintNormal:"↑ ↓ Tangage · ← → Roulis · Espace Frein · Maj Boost · F One-Shot",hintNormalTouch:"Piloter au joystick · Droite Boost / Frein / One-Shot",hintPrelaunch:"Tire vers le bas pour décoller",hintPrelaunchGyro:"Appuie sur boost pour décoller",hintTakeoff:"Roulage au décollage…",landingToast:"Atterri ! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nouvelle île découverte !",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Pose-toi à l'aéroport indiqué pour recharger tes boosters et gagner des points bonus.",airportUnlockTitle:"Aéroport débloqué !",airportUnlockBody:"Réapparais à {name} quand tu veux depuis le menu Niveaux.",airportUnlocked:"{name} débloqué",wrongApproach:"Mauvais côté d'approche — aligne-toi depuis l'autre bout.",multiplierUp:"Multiplicateur ×{mult}",goldenTitle:"Ailes dorées",goldenSub:"×2 points jusqu’au prochain crash",goldenActive:"Ailes dorées actives",goldenOneUse:"Usage unique — tu peux en garder plusieurs.",goldenOwnedCount:"En stock : {count}",goldenSlide:"Glisse vers le haut pour activer",goldenToShop:"À obtenir dans la boutique"},$C={names:["Aucun Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 débloqué","Booster Niveau 2 débloqué — La Gomera à portée","Booster Niveau 3 débloqué — Gran Canaria à portée","Booster Niveau MAX débloqué — Fuerteventura / Lanzarote"]},jC={start:"Démarrer",startSubDefault:"Dernier checkpoint",levels:"Niveaux",levelsSub:"Choisir un aéroport",hangar:"Hangar",hangarSub:"Améliorations et statut",shop:"Boutique",shopSub:"Obsidienne et designs",settings:"Réglages",settingsSub:"Graphismes et performances",imprint:"Mentions légales",licenses:"Licences"},YC={checkpoint:"Checkpoint · {id}",firstFlight:"Premier vol · TFN"},ZC={title:"Pause",resume:"Reprendre le vol",home:"Menu principal"},KC={title:"Atterrissage manqué",restart:"Redécoller",hint:"Barre d'espace",hangar:"Hangar",shop:"Boutique"},JC={title:"Hangar",points:"Points",locations:"Lieux",obsidian:"Obsidienne",highscore:"Record",plane:"Avion",dragToRotate:"Glisser pour tourner",upgrades:"Améliorations",booster:"Booster",selectUpgrade:"Touche une amélioration pour voir sa description.",buy:"Acheter · {cost}",buyObsidian:"Obsidienne · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Ton niveau de boost augmente automatiquement quand tu découvres assez de lieux. Survole de nouveaux POI pour améliorer ton boost One-Shot.",equip:"Équiper",equipped:"Équipé",comingSoon:"Bientôt",getDiamonds:"Obtenir de l'obsidienne →",skinPrev:"Design précédent",skinNext:"Design suivant"},QC={title:"Payer avec de l'obsidienne ?",text:"Cette amélioration coûte <strong></strong>.",warn:"L'obsidienne s'achète avec de l'argent réel. Touche <em>Confirmer</em> seulement si tu veux vraiment dépenser de l'obsidienne.",cancel:"Annuler",confirm:"Confirmer",spendSkin:"Tu dépenses {obsidian} pour le design {label}."},eP={default:{name:"Papier",desc:"Le pliage classique."},charcoal:{name:"Anthracite",desc:"Une livrée ardoise mate — méritée par les explorateurs."},gold:{name:"Or",desc:"Une livrée premium étincelante."},comingSoon:{name:"Bientôt plus",desc:"De nouveaux designs arrivent."}},tP={intro:"L'obsidienne débloque des designs dans le hangar et des améliorations instantanées.",bonus:"+{pct}%",badgePopular:"Populaire",badgeValue:"Meilleur prix",granted:"+ {amount} obsidienne ajoutée",restore:"Restaurer les achats",restored:"Achats restaurés",viewSkins:"Voir les designs →",disclosure:"L'obsidienne et les designs sont stockés sur cet appareil.",watchAd:"Regarder une vidéo",adsLeftToday:"{count}/{cap} aujourd'hui",adsCapReached:"Reviens demain",removeAds:"Supprimer les pubs",removeAdsOwned:"Pubs supprimées"},nP={title:"Réglages",quality:"Qualité graphique",presetLow:"Faible",presetStandard:"Standard",presetHigh:"Élevée",presetUltra:"Ultra",advanced:"Avancé",meshRes:"Résolution du maillage",meshHint:"Segments · 100–3000",vegSamples:"Échantillons de végétation",vegHint:"10 000–10 000 000",restartNote:"Les changements nécessitent un redémarrage. L'application rechargera la page.",cancel:"Annuler",apply:"Appliquer et recharger",language:"Langue",controls:"Commandes",invertPitch:"Commandes de vol inversées",invertPitchHint:"Tirez vers le bas pour monter",gyroControl:"Pilotage par inclinaison",gyroControlHint:"Inclinez l'appareil pour diriger",gyroSensitivity:"Sensibilité",gyroRecalibrate:"Recalibrer",tutorial:"Tutoriel",replayTutorial:"Revoir le tutoriel",dangerZone:"Zone de danger",dangerDesc:"Réinitialise toute la progression : points, lieux, améliorations, POI découverts, aéroports et checkpoint. Les réglages graphiques sont conservés.",resetSave:"Réinitialiser la progression",audio:"Audio",music:"Musique",musicHint:"Thème du menu par Daniel Schultes",musicVolume:"Volume de la musique",sound:"Son",soundHint:"Vent, ambiance et effets",soundVolume:"Volume du son",headphoneHint:"Idéal au casque.",games:"Google Play Jeux",gamesSignedOut:"Non connecté",gamesSignedInAs:"Connecté en tant que {name}",gamesSignIn:"Se connecter",gamesAchievements:"Succès",gamesLeaderboard:"Classement"},iP={title:"Vraiment supprimer ta sauvegarde ?",text:"Tous les points, lieux, améliorations et POI découverts seront perdus. Tu recommenceras à <strong>Tenerife Nord</strong> avec l'avion de base.",warn:"Cette action est irréversible.",cancel:"Annuler",confirm:"Réinitialiser"},sP={eyebrow:"Île",archTitle:"Îles Canaries",legendSpawn:"Départ",legendDiscovered:"Découvert",legendLocked:"Inconnu",hintDefault:"Touche un point de départ pour commencer là.",hintNone:"Atterris dans un aéroport pour le débloquer comme point de départ.",hintProgress:"{landed} / {total} aéroports débloqués. Touche un point de départ.",hintAll:"Tous les aéroports débloqués. Touche un point de départ.",markerLocked:"???",tipStart:"Démarrer à {id}",tipNotLanded:"{id} — pas encore atterri",tipUndiscovered:"Pas encore découvert"},oP={title:"Mentions légales",provider:"Fournisseur",contact:"Contact",privacy:"Confidentialité",privacyLink:"Ouvrir la politique de confidentialité",linksLiability:"Responsabilité des liens",linksText:"Notre offre contient des liens vers des sites web externes de tiers dont nous ne pouvons pas influencer le contenu. Nous déclinons donc toute responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant des pages liées est toujours responsable de leur contenu.",footer:"Swiss Innovation Studios · 2026"},rP={title:"Licences open source",intro:"Teide inclut les composants open source suivants. Les textes complets des licences figurent ci-dessous et sont inclus dans l'application.",audioTitle:"Audio — son et musique",audioCredit:"Effets sonores de Pixabay, utilisés sous la licence de contenu Pixabay. Musique composée par Daniel Schultes.",iconTitle:"Icônes",iconCredit:"Icône « Feather Wing » (Ailes dorées) de SVG Repo, libre d’utilisation commerciale.",footer:"Swiss Innovation Studios · 2026"},aP={title:"Tourne ton appareil",sub:"Teide se joue en mode paysage"},cP={title:"Mode test",prompt:"Saisir le code PIN",wrong:"Code PIN incorrect",cancel:"Annuler",confirm:"OK"},lP={drag:{label:"Aérodynamique",desc:"Pliage plus net — moins de traînée, vol plané plus long."},maxSpeed:{label:"Vitesse max",desc:"Augmente la vitesse de croisière maximale."},speedFromPitch:{label:"Piqué",desc:"Plus d'accélération en piqué — l'altitude devient de la vitesse."},stallSpeed:{label:"Stabilité",desc:"Seuil de décrochage plus bas — pardonne le vol lent."},takeoffSpeed:{label:"Piste",desc:"Accélération au décollage plus rapide — moins de roulage."},brake:{label:"Aérofrein",desc:"Débloque les volets de frein (Espace en vol)."},greyBoost:{label:"Boost de réserve",desc:"Poussée d'urgence plus forte : combustion plus longue, plus de poussée, recharge plus rapide."}},uP={pickLanguage:"Choisis ta langue",welcome:"Bienvenue aux Canaries",story:["Tu as plié l'avion en papier parfait et tu l'as lancé depuis les pentes du Teide. Chevauche maintenant les thermiques et plane au-dessus des îles Canaries.","Capte les courants ascendants pour rester en l'air, traverse des points d'intérêt pour récolter des lieux et pose-toi sur les pistes pour les débloquer comme nouveaux points de départ.","Se poser, c'est continuer : chaque atterrissage recharge ton booster pour le prochain saut. Aligne-toi sur une piste et pose-toi en douceur.","Dépense tes points au hangar pour améliorer ton avion et ton booster. Plane assez loin et de nouvelles îles deviennent accessibles — de La Gomera jusqu'à Lanzarote. Jusqu'où iras-tu ?"],next:"Suivant",begin:"C'est parti !"},dP={eyebrow:"Tutoriel",skip:"Passer",retry:"Réessaie !",done:"Prêt — c'est parti !",launch:"Tire vers le bas pour décoller et planer",navLeft:"Maintenant à gauche",navRight:"Maintenant à droite",navUp:"Maintenant monte",navDown:"Maintenant descends",rings:"Traverse les deux anneaux ({collected}/{total})",boost:"Maintiens le boost pour une accélération",thermal:"Dirige-toi vers l'ascendance pour prendre de l'altitude",ringHigh:"Profite de l'altitude — attrape l'anneau haut",ringLow:"Maintenant redescends — par l'anneau bas",invertHint:"Monter à l'envers ? Inverse-le.",steerHint:"Pilote ici",endTitle:"Prêt à planer !",endBody:"Explore les îles Canaries et traverse des anneaux pour collecter des lieux. Réunis-en assez et ton boost One-Shot t'emmène à l'île suivante. Jusqu'où planeras-tu ?",endGo:"C'est parti !"},hP={loading:WC,a11y:qC,hud:XC,booster:$C,menu:jC,welcome:YC,pause:ZC,crash:KC,hangar:JC,obsidian:QC,skins:eP,shop:tP,settings:nP,reset:iP,levels:sP,imprint:oP,licenses:rP,portrait:aP,testpin:cP,upgrades:lP,onboarding:uP,tutorial:dP},fP={sub:"Costruzione del mondo…",hint:"Con impostazioni di qualità elevate può richiedere alcuni secondi."},pP={pause:"Pausa",map:"Mappa",close:"Chiudi",landings:"Atterraggi",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vendi per {cost} punti",flightScore:"Punti di questo volo",goldenBuy:"Compra le Ali Dorate per {cost} ossidiana"},mP={lift:"Ascendenza",soon:"presto",hintNormal:"↑ ↓ Beccheggio · ← → Rollio · Spazio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Guida col joystick · Destra Boost / Freno / One-Shot",hintPrelaunch:"Tira giù per decollare",hintPrelaunchGyro:"Tocca boost per decollare",hintTakeoff:"Rullaggio al decollo…",landingToast:"Atterrato! · {id}",landingBonus:"+ {bonus} pti",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nuova isola scoperta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Atterra all'aeroporto segnalato per ricaricare i propulsori e guadagnare punti extra.",airportUnlockTitle:"Aeroporto sbloccato!",airportUnlockBody:"Riparti da {name} quando vuoi dal menu Livelli.",airportUnlocked:"{name} sbloccato",wrongApproach:"Lato di avvicinamento sbagliato: allineati dall'altra estremità.",multiplierUp:"Moltiplicatore ×{mult}",goldenTitle:"Ali Dorate",goldenSub:"×2 punti fino al prossimo schianto",goldenActive:"Ali Dorate attive",goldenOneUse:"Monouso — puoi farne scorta.",goldenOwnedCount:"Scorta: {count}",goldenSlide:"Scorri in su per attivare",goldenToShop:"Prendile nello shop"},gP={names:["Nessun Booster","Booster Livello 1","Booster Livello 2","Booster Livello 3","Booster Livello MAX"],unlock:["","Booster Livello 1 sbloccato","Booster Livello 2 sbloccato — La Gomera a portata","Booster Livello 3 sbloccato — Gran Canaria a portata","Booster Livello MAX sbloccato — Fuerteventura / Lanzarote"]},vP={start:"Inizia",startSubDefault:"Ultimo checkpoint",levels:"Livelli",levelsSub:"Scegli aeroporto",hangar:"Hangar",hangarSub:"Potenziamenti e stato",shop:"Negozio",shopSub:"Ossidiana e design",settings:"Impostazioni",settingsSub:"Grafica e prestazioni",imprint:"Note legali",licenses:"Licenze"},yP={checkpoint:"Checkpoint · {id}",firstFlight:"Primo volo · TFN"},xP={title:"Pausa",resume:"Riprendi volo",home:"Menu principale"},_P={title:"Atterraggio di fortuna",restart:"Decolla di nuovo",hint:"Barra spaziatrice",hangar:"Hangar",shop:"Negozio"},bP={title:"Hangar",points:"Punti",locations:"Luoghi",obsidian:"Ossidiana",highscore:"Record",plane:"Aereo",dragToRotate:"Trascina per ruotare",upgrades:"Potenziamenti",booster:"Booster",selectUpgrade:"Tocca un potenziamento per vederne la descrizione.",buy:"Acquista · {cost}",buyObsidian:"Ossidiana · {cost}",max:"Max",level:"Livello {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Il tuo livello di boost aumenta automaticamente quando scopri abbastanza luoghi. Attraversa nuovi POI per migliorare il tuo boost One-Shot.",equip:"Equipaggia",equipped:"Equipaggiato",comingSoon:"In arrivo",getDiamonds:"Ottieni ossidiana →",skinPrev:"Design precedente",skinNext:"Design successivo"},SP={title:"Pagare con l'ossidiana?",text:"Questo potenziamento costa <strong></strong>.",warn:"L'ossidiana si acquista con denaro reale. Tocca <em>Conferma</em> solo se vuoi davvero spendere ossidiana.",cancel:"Annulla",confirm:"Conferma",spendSkin:"Stai spendendo {obsidian} per il design {label}."},MP={default:{name:"Carta",desc:"La piega classica."},charcoal:{name:"Antracite",desc:"Una livrea ardesia opaca — guadagnata dagli esploratori."},gold:{name:"Oro",desc:"Una scintillante livrea premium."},comingSoon:{name:"Altri presto",desc:"Nuovi design in arrivo."}},wP={intro:"L'ossidiana sblocca design nell'hangar e potenziamenti istantanei.",bonus:"+{pct}%",badgePopular:"Popolare",badgeValue:"Miglior valore",granted:"+ {amount} ossidiana aggiunta",restore:"Ripristina acquisti",restored:"Acquisti ripristinati",viewSkins:"Vedi i design →",disclosure:"Ossidiana e design sono salvati su questo dispositivo.",watchAd:"Guarda un video",adsLeftToday:"{count}/{cap} oggi",adsCapReached:"Torna domani",removeAds:"Rimuovi annunci",removeAdsOwned:"Annunci rimossi"},EP={title:"Impostazioni",quality:"Qualità grafica",presetLow:"Bassa",presetStandard:"Standard",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzate",meshRes:"Risoluzione mesh",meshHint:"Segments · 100–3000",vegSamples:"Campioni vegetazione",vegHint:"10.000–10.000.000",restartNote:"Le modifiche richiedono un riavvio. Applicando, la pagina verrà ricaricata.",cancel:"Annulla",apply:"Applica e ricarica",language:"Lingua",controls:"Comandi",invertPitch:"Comandi di volo invertiti",invertPitchHint:"Tira giù per salire",gyroControl:"Controllo a inclinazione",gyroControlHint:"Inclina il dispositivo per virare",gyroSensitivity:"Sensibilità",gyroRecalibrate:"Ricalibra",tutorial:"Tutorial",replayTutorial:"Ripeti tutorial",dangerZone:"Zona pericolo",dangerDesc:"Reimposta tutti i progressi: punti, luoghi, potenziamenti, POI scoperti, aeroporti e checkpoint. Le impostazioni grafiche vengono mantenute.",resetSave:"Reimposta progressi",audio:"Audio",music:"Musica",musicHint:"Tema del menu di Daniel Schultes",musicVolume:"Volume musica",sound:"Suono",soundHint:"Vento, ambiente ed effetti",soundVolume:"Volume suoni",headphoneHint:"Meglio con le cuffie.",games:"Google Play Games",gamesSignedOut:"Accesso non effettuato",gamesSignedInAs:"Connesso come {name}",gamesSignIn:"Accedi",gamesAchievements:"Obiettivi",gamesLeaderboard:"Classifica"},AP={title:"Vuoi davvero eliminare il salvataggio?",text:"Tutti i punti, i luoghi, i potenziamenti e i POI scoperti andranno persi. Ripartirai da <strong>Tenerife Nord</strong> con l'aereo base.",warn:"Questa azione non può essere annullata.",cancel:"Annulla",confirm:"Reimposta"},TP={eyebrow:"Isola",archTitle:"Isole Canarie",legendSpawn:"Partenza",legendDiscovered:"Scoperto",legendLocked:"Sconosciuto",hintDefault:"Tocca un punto di partenza per iniziare lì.",hintNone:"Atterra in un aeroporto per sbloccarlo come punto di partenza.",hintProgress:"{landed} / {total} aeroporti sbloccati. Tocca un punto di partenza.",hintAll:"Tutti gli aeroporti sbloccati. Tocca un punto di partenza.",markerLocked:"???",tipStart:"Parti da {id}",tipNotLanded:"{id} — non ancora atterrato",tipUndiscovered:"Non ancora scoperto"},RP={title:"Note legali",provider:"Fornitore",contact:"Contatto",privacy:"Privacy",privacyLink:"Apri l'informativa sulla privacy",linksLiability:"Responsabilità per i link",linksText:"La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto non possiamo assumerci alcuna responsabilità per tali contenuti di terzi. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore delle pagine.",footer:"Swiss Innovation Studios · 2026"},LP={title:"Licenze open source",intro:"Teide include i seguenti componenti open source. I testi completi delle licenze sono qui sotto e inclusi nell'app.",audioTitle:"Audio — suoni e musica",audioCredit:"Effetti sonori da Pixabay, usati con la Licenza dei Contenuti Pixabay. Musica composta da Daniel Schultes.",iconTitle:"Icone",iconCredit:"Icona “Feather Wing” (Ali Dorate) da SVG Repo, libera per uso commerciale.",footer:"Swiss Innovation Studios · 2026"},CP={title:"Ruota il dispositivo",sub:"Teide si gioca in modalità orizzontale"},PP={title:"Modalità test",prompt:"Inserisci il PIN",wrong:"PIN errato",cancel:"Annulla",confirm:"OK"},IP={drag:{label:"Aerodinamica",desc:"Pieghe più lisce — meno resistenza, planata più lunga."},maxSpeed:{label:"Velocità max",desc:"Aumenta la velocità di crociera massima."},speedFromPitch:{label:"Picchiata",desc:"Più accelerazione in picchiata — la quota diventa velocità."},stallSpeed:{label:"Stabilità",desc:"Soglia di stallo più bassa — perdona il volo lento."},takeoffSpeed:{label:"Pista",desc:"Accelerazione al decollo più rapida — meno rullaggio."},brake:{label:"Aerofreno",desc:"Sblocca gli alettoni freno (Spazio in volo)."},greyBoost:{label:"Boost di riserva",desc:"Spinta d'emergenza più forte: combustione più lunga, più spinta, ricarica più rapida."}},NP={pickLanguage:"Scegli la lingua",welcome:"Benvenuto alle Canarie",story:["Hai piegato il perfetto aeroplanino di carta e lo hai lanciato dai pendii del Teide. Ora cavalca le termiche e plana sulle Isole Canarie.","Sfrutta le correnti ascensionali per restare in volo, attraversa i punti d'interesse per raccogliere i luoghi e atterra sulle piste per sbloccarle come nuovi punti di partenza.","Atterrare significa proseguire: ogni atterraggio ricarica il tuo propulsore per il salto successivo. Allineati a una pista e posati con delicatezza.","Spendi i tuoi punti nell'hangar per potenziare aereo e booster. Plana abbastanza lontano e nuove isole entrano nel raggio — da La Gomera fino a Lanzarote. Fin dove arriverai?"],next:"Avanti",begin:"Si parte!"},DP={eyebrow:"Tutorial",skip:"Salta",retry:"Riprova!",done:"Pronto — si vola!",launch:"Tira giù per decollare e planare",navLeft:"Ora a sinistra",navRight:"Ora a destra",navUp:"Ora sali",navDown:"Ora scendi",rings:"Attraversa entrambi gli anelli ({collected}/{total})",boost:"Tieni premuto il boost per uno scatto",thermal:"Punta verso la corrente ascensionale per guadagnare quota",ringHigh:"Sfrutta la quota — prendi l'anello alto",ringLow:"Ora ridiscendi — attraverso l'anello basso",invertHint:"Salire sembra al contrario? Invertilo.",steerHint:"Guida qui",endTitle:"Pronto a planare!",endBody:"Esplora le Canarie e attraversa gli anelli per raccogliere luoghi. Raccogline a sufficienza e il tuo boost One-Shot ti porta all'isola successiva. Fin dove plani?",endGo:"Si vola!"},kP={loading:fP,a11y:pP,hud:mP,booster:gP,menu:vP,welcome:yP,pause:xP,crash:_P,hangar:bP,obsidian:SP,skins:MP,shop:wP,settings:EP,reset:AP,levels:TP,imprint:RP,licenses:LP,portrait:CP,testpin:PP,upgrades:IP,onboarding:NP,tutorial:DP},OP={sub:"Wereld wordt gebouwd…",hint:"Bij hogere kwaliteitsinstellingen kan dit enkele seconden duren."},UP={pause:"Pauze",map:"Kaart",close:"Sluiten",landings:"Landingen",brake:"Rem",oneShot:"One-Shot",boost:"Boost",sell:"Verkopen voor {cost} punten",flightScore:"Punten deze vlucht",goldenBuy:"Gouden Vleugels kopen voor {cost} obsidiaan"},FP={lift:"Lift",soon:"binnenkort",hintNormal:"↑ ↓ Pitch · ← → Rol · Spatie Rem · Shift Boost · F One-Shot",hintNormalTouch:"Stuur met joystick · Rechts Boost / Rem / One-Shot",hintPrelaunch:"Trek omlaag om te starten",hintPrelaunchGyro:"Tik op boost om op te stijgen",hintTakeoff:"Startrun…",landingToast:"Geland! · {id}",landingBonus:"+ {bonus} ptn",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nieuw eiland ontdekt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land op het gemarkeerde vliegveld om je boosters bij te vullen en bonuspunten te verdienen.",airportUnlockTitle:"Vliegveld ontgrendeld!",airportUnlockBody:"Start wanneer je wilt bij {name} via het menu Levels.",airportUnlocked:"{name} ontgrendeld",wrongApproach:"Verkeerde aanvliegzijde — kom van de andere kant.",multiplierUp:"Multiplier ×{mult}",goldenTitle:"Gouden Vleugels",goldenSub:"×2 punten tot je volgende crash",goldenActive:"Gouden Vleugels actief",goldenOneUse:"Eenmalig — je kunt er meerdere sparen.",goldenOwnedCount:"Voorraad: {count}",goldenSlide:"Schuif omhoog om te activeren",goldenToShop:"Haal ze in de shop"},BP={names:["Geen Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 ontgrendeld","Booster Niveau 2 ontgrendeld — La Gomera binnen bereik","Booster Niveau 3 ontgrendeld — Gran Canaria binnen bereik","Booster Niveau MAX ontgrendeld — Fuerteventura / Lanzarote"]},zP={start:"Start",startSubDefault:"Laatste checkpoint",levels:"Levels",levelsSub:"Kies vliegveld",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Winkel",shopSub:"Obsidiaan & designs",settings:"Instellingen",settingsSub:"Graphics & prestaties",imprint:"Colofon",licenses:"Licenties"},GP={checkpoint:"Checkpoint · {id}",firstFlight:"Eerste vlucht · TFN"},HP={title:"Pauze",resume:"Vlucht hervatten",home:"Hoofdmenu"},VP={title:"Crashlanding",restart:"Opnieuw opstijgen",hint:"Spatiebalk",hangar:"Hangar",shop:"Winkel"},WP={title:"Hangar",points:"Punten",locations:"Locaties",obsidian:"Obsidiaan",highscore:"Record",plane:"Vliegtuig",dragToRotate:"Sleep om te draaien",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tik op een upgrade om de beschrijving te zien.",buy:"Kopen · {cost}",buyObsidian:"Obsidiaan · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Je boostniveau stijgt automatisch zodra je genoeg locaties hebt ontdekt. Vlieg door nieuwe POI's om je One-Shot-boost te verbeteren.",equip:"Uitrusten",equipped:"Uitgerust",comingSoon:"Binnenkort",getDiamonds:"Obsidiaan halen →",skinPrev:"Vorig design",skinNext:"Volgend design"},qP={title:"Met obsidiaan betalen?",text:"Deze upgrade kost <strong></strong>.",warn:"Obsidiaan wordt met echt geld gekocht. Tik alleen op <em>Bevestigen</em> als je echt obsidiaan wilt uitgeven.",cancel:"Annuleren",confirm:"Bevestigen",spendSkin:"Je geeft {obsidian} uit aan het design {label}."},XP={default:{name:"Papier",desc:"De klassieke vouw."},charcoal:{name:"Antraciet",desc:"Een matte leikleurige livrei — verdiend door ontdekkers."},gold:{name:"Goud",desc:"Een glanzende premium livrei."},comingSoon:{name:"Binnenkort meer",desc:"Nieuwe designs zijn onderweg."}},$P={intro:"Obsidiaan ontgrendelt designs in de hangar en directe upgrades.",bonus:"+{pct}%",badgePopular:"Populair",badgeValue:"Beste waarde",granted:"+ {amount} obsidiaan toegevoegd",restore:"Aankopen herstellen",restored:"Aankopen hersteld",viewSkins:"Designs bekijken →",disclosure:"Obsidiaan en designs worden op dit apparaat bewaard.",watchAd:"Bekijk een video",adsLeftToday:"{count}/{cap} vandaag",adsCapReached:"Kom morgen terug",removeAds:"Advertenties verwijderen",removeAdsOwned:"Advertenties verwijderd"},jP={title:"Instellingen",quality:"Grafische kwaliteit",presetLow:"Laag",presetStandard:"Standaard",presetHigh:"Hoog",presetUltra:"Ultra",advanced:"Geavanceerd",meshRes:"Mesh-resolutie",meshHint:"Segments · 100–3000",vegSamples:"Vegetatie-samples",vegHint:"10.000–10.000.000",restartNote:"Wijzigingen vereisen een herstart. Bij toepassen wordt de pagina herladen.",cancel:"Annuleren",apply:"Toepassen & herladen",language:"Taal",controls:"Besturing",invertPitch:"Omgekeerde vluchtbesturing",invertPitchHint:"Trek omlaag om te klimmen",gyroControl:"Kantelbesturing",gyroControlHint:"Kantel je toestel om te sturen",gyroSensitivity:"Gevoeligheid",gyroRecalibrate:"Herkalibreren",tutorial:"Tutorial",replayTutorial:"Tutorial opnieuw",dangerZone:"Gevarenzone",dangerDesc:"Zet alle voortgang terug: punten, locaties, upgrades, ontdekte POI's, vliegvelden en checkpoint. Grafische instellingen blijven behouden.",resetSave:"Voortgang resetten",audio:"Audio",music:"Muziek",musicHint:"Menuthema van Daniel Schultes",musicVolume:"Muziekvolume",sound:"Geluid",soundHint:"Wind, sfeer en effecten",soundVolume:"Geluidsvolume",headphoneHint:"Het best met een koptelefoon.",games:"Google Play Games",gamesSignedOut:"Niet aangemeld",gamesSignedInAs:"Aangemeld als {name}",gamesSignIn:"Aanmelden",gamesAchievements:"Prestaties",gamesLeaderboard:"Ranglijst"},YP={title:"Opslag echt verwijderen?",text:"Alle punten, locaties, upgrades en ontdekte plekken gaan verloren. Je begint op <strong>Tenerife Nord</strong> met het basisvliegtuig.",warn:"Deze actie kan niet ongedaan worden gemaakt.",cancel:"Annuleren",confirm:"Resetten"},ZP={eyebrow:"Eiland",archTitle:"Canarische Eilanden",legendSpawn:"Start",legendDiscovered:"Ontdekt",legendLocked:"Onbekend",hintDefault:"Tik op een startpunt om daar te beginnen.",hintNone:"Land op een vliegveld om het als startpunt te ontgrendelen.",hintProgress:"{landed} / {total} vliegvelden ontgrendeld. Tik op een startpunt.",hintAll:"Alle vliegvelden ontgrendeld. Tik op een startpunt.",markerLocked:"???",tipStart:"Start bij {id}",tipNotLanded:"{id} — nog niet geland",tipUndiscovered:"Nog niet ontdekt"},KP={title:"Colofon",provider:"Aanbieder",contact:"Contact",privacy:"Privacy",privacyLink:"Privacybeleid openen",linksLiability:"Aansprakelijkheid voor links",linksText:"Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina's is steeds de betreffende aanbieder of beheerder van de pagina's verantwoordelijk.",footer:"Swiss Innovation Studios · 2026"},JP={title:"Opensource-licenties",intro:"Teide bevat de volgende opensourcecomponenten. De volledige licentieteksten staan hieronder en zijn bij de app gevoegd.",audioTitle:"Audio — geluid en muziek",audioCredit:"Geluidseffecten van Pixabay, gebruikt onder de Pixabay Content-licentie. Muziek gecomponeerd door Daniel Schultes.",iconTitle:"Iconen",iconCredit:"“Feather Wing”-icoon (Gouden Vleugels) van SVG Repo, vrij voor commercieel gebruik.",footer:"Swiss Innovation Studios · 2026"},QP={title:"Draai je apparaat",sub:"Teide wordt in liggende stand gespeeld"},e2={title:"Testmodus",prompt:"Voer pincode in",wrong:"Onjuiste pincode",cancel:"Annuleren",confirm:"OK"},t2={drag:{label:"Aerodynamica",desc:"Strakkere vouwen — minder weerstand, langere glijvlucht."},maxSpeed:{label:"Topsnelheid",desc:"Verhoogt de maximale kruissnelheid."},speedFromPitch:{label:"Duikvlucht",desc:"Meer versnelling in een duik — hoogte wordt snelheid."},stallSpeed:{label:"Stabiliteit",desc:"Lagere overtreksnelheid — vergeeft langzaam vliegen."},takeoffSpeed:{label:"Startbaan",desc:"Snellere startversnelling — kortere startrun."},brake:{label:"Remklep",desc:"Ontgrendelt de remkleppen (Spatie tijdens de vlucht)."},greyBoost:{label:"Reserveboost",desc:"Sterkere noodstuwing: langere brandtijd, meer duwkracht, sneller bijvullen."}},n2={pickLanguage:"Kies je taal",welcome:"Welkom op de Canarische Eilanden",story:["Je hebt het perfecte papieren vliegtuigje gevouwen en het vanaf de hellingen van de Teide gelanceerd. Berijd nu de thermiek en zweef over de Canarische Eilanden.","Vang opstijgende lucht om in de lucht te blijven, duik door points of interest om locaties te verzamelen en land op startbanen om ze als nieuwe startpunten te ontgrendelen.","Landen is doorgaan: elke landing vult je booster aan voor de volgende sprong. Lijn uit met een baan en zet zacht neer.","Geef je punten uit in de hangar om je vliegtuig en booster te verbeteren. Zweef ver genoeg en nieuwe eilanden komen binnen bereik — van La Gomera tot Lanzarote. Hoe ver kom jij?"],next:"Volgende",begin:"Aan de slag!"},i2={eyebrow:"Tutorial",skip:"Overslaan",retry:"Opnieuw!",done:"Klaar — daar ga je!",launch:"Trek omlaag om op te stijgen en te zweven",navLeft:"Nu naar links",navRight:"Nu naar rechts",navUp:"Nu klimmen",navDown:"Nu dalen",rings:"Vlieg door beide ringen ({collected}/{total})",boost:"Houd boost vast voor een snelheidsstoot",thermal:"Stuur de opstijgwind in om hoogte te winnen",ringHigh:"Gebruik je hoogte — pak de hoge ring",ringLow:"Nu weer omlaag — door de lage ring",invertHint:"Klimmen omgekeerd? Wissel het om.",steerHint:"Hier sturen",endTitle:"Klaar om te zweven!",endBody:"Verken de Canarische Eilanden en vlieg door ringen om locaties te verzamelen. Verzamel er genoeg en je One-Shot-boost brengt je naar het volgende eiland. Hoe ver zweef jij?",endGo:"Daar gaan we"},s2={loading:OP,a11y:UP,hud:FP,booster:BP,menu:zP,welcome:GP,pause:HP,crash:VP,hangar:WP,obsidian:qP,skins:XP,shop:$P,settings:jP,reset:YP,levels:ZP,imprint:KP,licenses:JP,portrait:QP,testpin:e2,upgrades:t2,onboarding:n2,tutorial:i2},o2={sub:"Budowanie świata…",hint:"Przy wyższych ustawieniach jakości może to potrwać kilka sekund."},r2={pause:"Pauza",map:"Mapa",close:"Zamknij",landings:"Lądowania",brake:"Hamulec",oneShot:"One-Shot",boost:"Boost",sell:"Sprzedaj za {cost} pkt",flightScore:"Punkty w tym locie",goldenBuy:"Kup Złote Skrzydła za {cost} obsydianu"},a2={lift:"Wznoszenie",soon:"wkrótce",hintNormal:"↑ ↓ Pochylenie · ← → Przechył · Spacja Hamulec · Shift Boost · F One-Shot",hintNormalTouch:"Steruj joystickiem · Prawo Boost / Hamulec / One-Shot",hintPrelaunch:"Pociągnij w dół, aby wystartować",hintPrelaunchGyro:"Dotknij boost, aby wystartować",hintTakeoff:"Rozbieg…",landingToast:"Wylądowano! · {id}",landingBonus:"+ {bonus} pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Odkryto nową wyspę!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Wyląduj na oznaczonym lotnisku, aby naładować boostery i zdobyć dodatkowe punkty.",airportUnlockTitle:"Lotnisko odblokowane!",airportUnlockBody:"Startuj w {name} w dowolnej chwili z menu Poziomy.",airportUnlocked:"{name} odblokowane",wrongApproach:"Zła strona podejścia — podejdź z drugiej strony.",multiplierUp:"Mnożnik ×{mult}",goldenTitle:"Złote Skrzydła",goldenSub:"×2 punkty do następnej kraksy",goldenActive:"Złote Skrzydła aktywne",goldenOneUse:"Jednorazowe — możesz zgromadzić kilka.",goldenOwnedCount:"Zapas: {count}",goldenSlide:"Przesuń w górę, aby aktywować",goldenToShop:"Zdobądź je w sklepie"},c2={names:["Brak Boostera","Booster Poziom 1","Booster Poziom 2","Booster Poziom 3","Booster Poziom MAX"],unlock:["","Booster Poziom 1 odblokowany","Booster Poziom 2 odblokowany — La Gomera w zasięgu","Booster Poziom 3 odblokowany — Gran Canaria w zasięgu","Booster Poziom MAX odblokowany — Fuerteventura / Lanzarote"]},l2={start:"Start",startSubDefault:"Ostatni checkpoint",levels:"Poziomy",levelsSub:"Wybierz lotnisko",hangar:"Hangar",hangarSub:"Ulepszenia i status",shop:"Sklep",shopSub:"Obsydian i wzory",settings:"Ustawienia",settingsSub:"Grafika i wydajność",imprint:"Nota prawna",licenses:"Licencje"},u2={checkpoint:"Checkpoint · {id}",firstFlight:"Pierwszy lot · TFN"},d2={title:"Pauza",resume:"Wznów lot",home:"Menu główne"},h2={title:"Rozbicie",restart:"Wystartuj ponownie",hint:"Spacja",hangar:"Hangar",shop:"Sklep"},f2={title:"Hangar",points:"Punkty",locations:"Miejsca",obsidian:"Obsydian",highscore:"Rekord",plane:"Samolot",dragToRotate:"Przeciągnij, aby obrócić",upgrades:"Ulepszenia",booster:"Booster",selectUpgrade:"Dotknij ulepszenia, aby zobaczyć opis.",buy:"Kup · {cost}",buyObsidian:"Obsydian · {cost}",max:"Maks",level:"Poziom {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Poziom boostera rośnie automatycznie, gdy odkryjesz wystarczająco wiele miejsc. Przelatuj przez nowe POI, aby ulepszyć swój boost One-Shot.",equip:"Załóż",equipped:"Założony",comingSoon:"Wkrótce",getDiamonds:"Zdobądź obsydian →",skinPrev:"Poprzedni wzór",skinNext:"Następny wzór"},p2={title:"Zapłacić obsydianem?",text:"To ulepszenie kosztuje <strong></strong>.",warn:"Obsydian kupuje się za prawdziwe pieniądze. Dotknij <em>Potwierdź</em> tylko, jeśli naprawdę chcesz wydać obsydian.",cancel:"Anuluj",confirm:"Potwierdź",spendSkin:"Wydajesz {obsidian} na wzór {label}."},m2={default:{name:"Papier",desc:"Klasyczne złożenie."},charcoal:{name:"Antracyt",desc:"Matowe łupkowe malowanie — dla odkrywców."},gold:{name:"Złoto",desc:"Lśniące malowanie premium."},comingSoon:{name:"Wkrótce więcej",desc:"Nowe wzory są w drodze."}},g2={intro:"Obsydian odblokowuje wzory w hangarze i natychmiastowe ulepszenia.",bonus:"+{pct}%",badgePopular:"Popularne",badgeValue:"Najlepsza oferta",granted:"+ {amount} obsydianu dodano",restore:"Przywróć zakupy",restored:"Zakupy przywrócone",viewSkins:"Zobacz wzory →",disclosure:"Obsydian i wzory są przechowywane na tym urządzeniu.",watchAd:"Obejrzyj film",adsLeftToday:"{count}/{cap} dziś",adsCapReached:"Wróć jutro",removeAds:"Usuń reklamy",removeAdsOwned:"Reklamy usunięte"},v2={title:"Ustawienia",quality:"Jakość grafiki",presetLow:"Niska",presetStandard:"Standard",presetHigh:"Wysoka",presetUltra:"Ultra",advanced:"Zaawansowane",meshRes:"Rozdzielczość siatki",meshHint:"Segments · 100–3000",vegSamples:"Próbki roślinności",vegHint:"10 000–10 000 000",restartNote:"Zmiany wymagają ponownego uruchomienia. Po zastosowaniu strona zostanie przeładowana.",cancel:"Anuluj",apply:"Zastosuj i przeładuj",language:"Język",controls:"Sterowanie",invertPitch:"Odwrócone sterowanie lotem",invertPitchHint:"Pociągnij w dół, aby się wznosić",gyroControl:"Sterowanie przechyłem",gyroControlHint:"Przechylaj urządzenie, aby sterować",gyroSensitivity:"Czułość",gyroRecalibrate:"Kalibruj ponownie",tutorial:"Samouczek",replayTutorial:"Powtórz samouczek",dangerZone:"Strefa zagrożenia",dangerDesc:"Resetuje cały postęp: punkty, miejsca, ulepszenia, odkryte POI, lotniska i checkpoint. Ustawienia grafiki zostają zachowane.",resetSave:"Zresetuj postęp",audio:"Audio",music:"Muzyka",musicHint:"Motyw menu: Daniel Schultes",musicVolume:"Głośność muzyki",sound:"Dźwięk",soundHint:"Wiatr, tło i efekty",soundVolume:"Głośność dźwięku",headphoneHint:"Najlepiej na słuchawkach.",games:"Google Play Games",gamesSignedOut:"Nie zalogowano",gamesSignedInAs:"Zalogowano jako {name}",gamesSignIn:"Zaloguj się",gamesAchievements:"Osiągnięcia",gamesLeaderboard:"Ranking"},y2={title:"Na pewno usunąć zapis?",text:"Wszystkie punkty, miejsca, ulepszenia i odkryte POI przepadną. Zaczniesz na <strong>Tenerife Nord</strong> podstawowym samolotem.",warn:"Tej operacji nie można cofnąć.",cancel:"Anuluj",confirm:"Resetuj"},x2={eyebrow:"Wyspa",archTitle:"Wyspy Kanaryjskie",legendSpawn:"Start",legendDiscovered:"Odkryte",legendLocked:"Nieznane",hintDefault:"Dotknij punktu startu, aby tam zacząć.",hintNone:"Wyląduj na lotnisku, aby odblokować je jako punkt startu.",hintProgress:"{landed} / {total} lotnisk odblokowanych. Dotknij punktu startu.",hintAll:"Wszystkie lotniska odblokowane. Dotknij punktu startu.",markerLocked:"???",tipStart:"Start na {id}",tipNotLanded:"{id} — jeszcze nie wylądowano",tipUndiscovered:"Jeszcze nieodkryte"},_2={title:"Nota prawna",provider:"Dostawca",contact:"Kontakt",privacy:"Prywatność",privacyLink:"Otwórz politykę prywatności",linksLiability:"Odpowiedzialność za linki",linksText:"Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treść nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator.",footer:"Swiss Innovation Studios · 2026"},b2={title:"Licencje open source",intro:"Teide zawiera następujące komponenty open source. Pełne teksty licencji znajdują się poniżej i są dołączone do aplikacji.",audioTitle:"Audio — dźwięk i muzyka",audioCredit:"Efekty dźwiękowe z Pixabay, na licencji Pixabay Content License. Muzykę skomponował Daniel Schultes.",iconTitle:"Ikony",iconCredit:"Ikona „Feather Wing” (Złote Skrzydła) z SVG Repo, do bezpłatnego użytku komercyjnego.",footer:"Swiss Innovation Studios · 2026"},S2={title:"Obróć urządzenie",sub:"W Teide gra się w trybie poziomym"},M2={title:"Tryb testowy",prompt:"Wpisz PIN",wrong:"Błędny PIN",cancel:"Anuluj",confirm:"OK"},w2={drag:{label:"Aerodynamika",desc:"Gładsze złożenia — mniejszy opór, dłuższy lot ślizgowy."},maxSpeed:{label:"Prędkość maks.",desc:"Zwiększa maksymalną prędkość przelotową."},speedFromPitch:{label:"Nurkowanie",desc:"Większe przyspieszenie w nurkowaniu — wysokość zamienia się w prędkość."},stallSpeed:{label:"Stabilność",desc:"Niższy próg przeciągnięcia — wybacza wolny lot."},takeoffSpeed:{label:"Pas startowy",desc:"Szybsze przyspieszenie przy starcie — krótszy rozbieg."},brake:{label:"Hamulec aerodynamiczny",desc:"Odblokowuje klapy hamujące (Spacja w locie)."},greyBoost:{label:"Boost rezerwowy",desc:"Mocniejszy ciąg awaryjny: dłuższe spalanie, większy napęd, szybsze ładowanie."}},E2={pickLanguage:"Wybierz język",welcome:"Witaj na Wyspach Kanaryjskich",story:["Złożyłeś idealny papierowy samolot i wypuściłeś go ze zboczy Teide. Teraz ujeżdżaj kominy termiczne i szybuj nad Wyspami Kanaryjskimi.","Łap prądy wznoszące, aby utrzymać się w powietrzu, przelatuj przez punkty zainteresowania, aby zbierać miejsca, i ląduj na pasach, aby odblokować je jako nowe punkty startu.","Lądowanie pozwala lecieć dalej: każde lądowanie ładuje twój booster na kolejny skok. Wyrównaj do pasa i wyląduj łagodnie.","Wydawaj punkty w hangarze, aby ulepszać samolot i booster. Szybuj wystarczająco daleko, a nowe wyspy znajdą się w zasięgu — od La Gomery po Lanzarote. Jak daleko dolecisz?"],next:"Dalej",begin:"Zaczynamy!"},A2={eyebrow:"Samouczek",skip:"Pomiń",retry:"Jeszcze raz!",done:"Gotowe — lecimy!",launch:"Pociągnij w dół, aby wystartować i szybować",navLeft:"Teraz w lewo",navRight:"Teraz w prawo",navUp:"Teraz wznoś się",navDown:"Teraz opadaj",rings:"Przeleć przez oba pierścienie ({collected}/{total})",boost:"Przytrzymaj boost, by przyspieszyć",thermal:"Skieruj się w prąd wznoszący, aby nabrać wysokości",ringHigh:"Wykorzystaj wysokość — złap wysoki pierścień",ringLow:"Teraz w dół — przez niski pierścień",invertHint:"Wznoszenie na odwrót? Przełącz.",steerHint:"Steruj tutaj",endTitle:"Gotowy do szybowania!",endBody:"Odkrywaj Wyspy Kanaryjskie i przelatuj przez pierścienie, aby zbierać miejsca. Zbierz ich dość, a boost One-Shot zaniesie cię na kolejną wyspę. Jak daleko poszybujesz?",endGo:"Lecimy!"},T2={loading:o2,a11y:r2,hud:a2,booster:c2,menu:l2,welcome:u2,pause:d2,crash:h2,hangar:f2,obsidian:p2,skins:m2,shop:g2,settings:v2,reset:y2,levels:x2,imprint:_2,licenses:b2,portrait:S2,testpin:M2,upgrades:w2,onboarding:E2,tutorial:A2},R2={en:KL,de:_C,es:VC,fr:hP,it:kP,nl:s2,pl:T2},rc=["en","de","es","fr","it","nl","pl"],L2={en:{label:"English",flag:"🇬🇧"},de:{label:"Deutsch",flag:"🇩🇪"},es:{label:"Español",flag:"🇪🇸"},fr:{label:"Français",flag:"🇫🇷"},it:{label:"Italiano",flag:"🇮🇹"},nl:{label:"Nederlands",flag:"🇳🇱"},pl:{label:"Polski",flag:"🇵🇱"}};let Vi="en";const tf=new Set;function C2(){const e=(navigator.languages&&navigator.languages[0]||navigator.language||"en").slice(0,2).toLowerCase();return rc.includes(e)?e:"en"}function P2(n){return n&&rc.includes(n)?n:C2()}function e0(n,e){let t=R2[n];for(const i of e.split(".")){if(t==null)return;t=t[i]}return t}function xe(n,e){let t=e0(Vi,n);return t===void 0&&Vi!=="en"&&(t=e0("en",n)),t===void 0?n:(typeof t!="string"||e&&(t=t.replace(/\{(\w+)\}/g,(i,s)=>s in e?String(e[s]):i)),t)}function I2(){return Vi}const N2={en:"en-GB",de:"de-DE",es:"es-ES",fr:"fr-FR",it:"it-IT",nl:"nl-NL",pl:"pl-PL"};function gp(){return N2[Vi]||"en-GB"}function D2(){const n=new URLSearchParams(window.location.search).get("lang");return Vi=n&&rc.includes(n)?n:P2(ht().language),document.documentElement.lang=Vi,_x(),Vi}function xx(n){if(!rc.includes(n)||n===Vi)return;Vi=n,document.documentElement.lang=n;const e=ht();e.language=n,li(e),_x();for(const t of tf)try{t(n)}catch(i){console.warn("[i18n] listener failed",i)}}function qu(n){return tf.add(n),()=>tf.delete(n)}function _x(n=document){n.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=xe(e.dataset.i18n)}),n.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=xe(e.dataset.i18nHtml)}),n.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",xe(e.dataset.i18nAria))}),n.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=xe(e.dataset.i18nTitle)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=xe(e.dataset.i18nPlaceholder)})}function bx(n,{onPick:e,active:t,flagsOnly:i=!1}={}){if(!n)return;n.innerHTML="";const s=t||I2();for(const o of rc){const r=L2[o]||{label:o,flag:""},a=document.createElement("button");a.type="button",a.className="lang-chip"+(i?" lang-chip-flagsonly":"")+(o===s?" active":""),a.dataset.lang=o,a.setAttribute("aria-label",r.label),o===s&&a.setAttribute("aria-current","true"),a.innerHTML=i?`<span class="lang-chip-flag">${r.flag}</span>`:`<span class="lang-chip-flag">${r.flag}</span><span class="lang-chip-label">${r.label}</span>`,a.addEventListener("click",()=>e&&e(o)),n.appendChild(a)}}const k2=Math.PI/180,Pn={pitch:0,roll:0,isActive:!1};let au=!1,cu=!1,Sx=yn.sensDefault,t0=null,n0=null,Xa=!0,er=0,tr=0,vp=!1;function O2(){return vp}function U2(){vp=!1}function F2(){return Pn}function Mx(n){const e=Number(n);Number.isFinite(e)&&(Sx=Math.max(yn.sensMin,Math.min(yn.sensMax,e)))}function Xu(){Xa=!0}function B2(n){return((n+180)%360+360)%360-180}function wx(n){if(n.beta==null||n.gamma==null)return;if(Xa){t0=n.beta,n0=n.gamma,Xa=!1,er=0,tr=0,Pn.pitch=0,Pn.roll=0,Pn.isActive=!0;return}const e=B2(n.beta-t0),t=n.gamma-n0,i=(typeof screen<"u"&&screen.orientation?screen.orientation.angle:window.orientation??0)*k2,s=Math.cos(i),o=Math.sin(i);let r=t*s+e*o,a=-t*o+e*s;const c=Math.max(1,yn.maxTiltDeg/Sx),l=m=>{const v=Math.abs(m);if(v<=yn.deadZoneDeg)return 0;const y=Math.min(1,(v-yn.deadZoneDeg)/(c-yn.deadZoneDeg));return Math.sign(m)*y};let u=l(r),d=-l(a);const f=yn.smoothing;tr+=(u-tr)*f,er+=(d-er)*f,Pn.roll=tr,Pn.pitch=er,Pn.isActive=!0,vp=!0}function z2(){cu||(window.addEventListener("deviceorientation",wx),cu=!0)}function G2(){cu&&(window.removeEventListener("deviceorientation",wx),cu=!1)}async function H2(){const n=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(n&&typeof n.requestPermission=="function")try{return await n.requestPermission()==="granted"}catch{return!1}return!0}async function Ex(){return au=!0,Xa=!0,Pn.isActive=!1,await H2()?(z2(),!0):(au=!1,!1)}function V2(){au=!1,G2(),Pn.pitch=0,Pn.roll=0,Pn.isActive=!1,er=0,tr=0}function Ax(){Pn.pitch=0,Pn.roll=0,er=0,tr=0,au&&(Xa=!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&Ax()});window.addEventListener("blur",Ax);let lu=hb();function Tx(){return lu}function uu(n){lu=!!n,fb(lu)}let $a=pb();Mx(Of());function yp(){return $a}async function W2(n){const e=n==="gyro"?"gyro":"touch";return $a=e,Op(e),ou(e!=="gyro"),e==="gyro"?await Ex()?!0:($a="touch",Op("touch"),ou(!0),!1):(V2(),!0)}function q2(n){Mx(n)}$a==="gyro"&&(ou(!1),Ex().then(n=>{n||ou(!0)}));let Rx=!1,Lx=!1,Cx=!1;function xp({brake:n=!1,boost:e=!1,oneShot:t=!1}={}){Rx=!!n,Lx=!!e,Cx=!!t}function wo(){const n=J_(),e=eL(),t=F2(),i=e.isActive,s=$a==="gyro"&&t.isActive;let o,r;return i?(o=e.pitch,r=e.roll):s?(o=t.pitch,r=t.roll):(o=n.pitch,r=n.roll),Yn.pitch=lu?o:-o,Yn.roll=r,Yn.brake=e.brake||n.brake,Yn.boost=e.boost||n.boost,Rx&&(Yn.brake=!1),Lx&&(Yn.boost=!1,ku()),Cx&&Nf(),Yn.isInputActive=n.isActive||e.isActive||s,JR()?(Yn.activeInputType="touch",QR()):O2()?(Yn.activeInputType="gyro",U2()):K_()&&(Yn.activeInputType="keyboard",Z_()),Yn}function Px(){const n=new lt,e=[],t=.32,i=.22,s=Math.atan2(.28,.95),o=new ut({color:Ze.paper,side:Kt,flatShading:!0}),r=new zu({color:Ze.ink,transparent:!0,opacity:.32});for(const a of[-.45,.45]){const c=new lt;c.position.set(a,.045,.05),c.rotation.z=a<0?s:-s;const l=new So(t,i);l.translate(0,-i/2,0),l.rotateX(-Math.PI/2);const u=new nt(l,o),d=new Ry(l);u.add(new by(d,r)),c.add(u),n.add(c),e.push(u)}return{group:n,flaps:e}}const{group:X2,flaps:Ix}=Px();he.add(X2);function $2(n){const e=wo().brake&&D.alive&&D.flightState===De.FLYING?1:0,t=1-Math.exp(-n/Nl.deployTau);D.brakeAmount+=(e-D.brakeAmount)*t;const i=-D.brakeAmount*Nl.maxAngle;for(const s of Ix)s.rotation.x=i}function j2(){D.brakeAmount=0;for(const n of Ix)n.rotation.x=0}function Nx(){const n=new lt,e=new ut({color:Ze.ink,flatShading:!0});function t(i,s,o,r){const a=new lt,c=new Xn(.018,.018,o,6);c.translate(0,-o/2,0),a.add(new nt(c,e));const l=new Xn(r,r,.04,12);return l.rotateZ(Math.PI/2),l.translate(0,-o,0),a.add(new nt(l,e)),a.position.set(i,-.05,s),a}return n.add(t(0,-.55,.11,.055)),n.add(t(-.42,.12,.12,.06)),n.add(t(.42,.12,.12,.06)),n}const mo=Nx();mo.scale.setScalar(.001);mo.visible=!1;he.add(mo);function Y2(n){const e=D1(he.position,ml.triggerDist,ml.triggerHeight)?1:0,t=1-Math.exp(-n/ml.deployTau);D.gearAmount+=(e-D.gearAmount)*t;const i=Math.max(.001,D.gearAmount);mo.scale.setScalar(i),mo.visible=D.gearAmount>.02}function Z2(){D.gearAmount=1,mo.scale.setScalar(1),mo.visible=!0}const i0=new Ee;let ua=0;function Dx(){const n=new lt,e=[],t=St.exhaust;for(const i of[-.36,t.offsetX]){const s=new Xn(t.radiusNarrow,t.radiusWide,1,12,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,.5);const o=new jn({color:16777215,transparent:!0,opacity:0,blending:Ul,depthWrite:!1,side:Kt}),r=new nt(s,o);r.position.set(i,t.offsetY,t.offsetZ),r.scale.z=0,n.add(r),e.push(r)}return{group:n,streams:e}}const{group:K2,streams:kx}=Dx();he.add(K2);function J2(){return D.oneShotActive?(St.oneShot.tiers[lo()]||St.oneShot.tiers[0]).color:D.greyActive?St.grey.color:null}function Q2(n){const e=St.exhaust,t=D.oneShotActive||D.greyActive?1:0,i=1-Math.exp(-n/Math.max(e.intensityTau,1e-4));ua+=(t-ua)*i;const s=J2();s!==null&&i0.setHex(s);for(const o of kx)o.scale.z=e.length*ua,o.material.opacity=.85*ua,s!==null&&o.material.color.copy(i0)}function eI(){ua=0;for(const n of kx)n.scale.z=0,n.material.opacity=0}let ms=null,jo=null,pr=null,kt=null,s0=null,Sa=null,nf=null,js=null,Ma=null,sf=null,Jd=0,Jc=0,Qc=0,es=0;const o0=new Ee;let mr=0,of=0,Sl=!1,Ds=null,du=0,hu=0,Qr=null,rf=null;const tI=.35;function nI(){if(ms)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;ms=new qf({canvas:n,antialias:!0,alpha:!0}),ms.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),jo=new xy;const e=new Uh(16774368,.85);e.position.set(2.5,3,2),jo.add(e);const t=new Uh(13229290,.45);t.position.set(-2,1.5,-2),jo.add(t),jo.add(new A1(16777215,.35)),pr=new Cn(28,1,.05,50),pr.position.set(0,.25,3.6),pr.lookAt(0,0,0),kt=ax(),kt.scale.setScalar(1.5),kt.rotation.x=-.18,kt.rotation.y=.55,jo.add(kt);const i=Px();Sa=i.group,Sa.visible=!1,kt.add(Sa),nf=i.flaps,js=Nx(),js.scale.setScalar(.001),js.visible=!1,kt.add(js);const s=Dx();return Ma=s.group,Ma.visible=!1,kt.add(Ma),sf=s.streams,Ux(),iI(n),s0=new ResizeObserver(r0),s0.observe(n),r0(),!0}function r0(){if(!ms)return;const e=ms.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));ms.setSize(t,i,!1),pr.aspect=t/i,pr.updateProjectionMatrix()}function iI(n){n.addEventListener("pointerdown",t=>{Sl=!0,Ds={px:t.clientX,py:t.clientY,rotX:kt.rotation.x,rotY:kt.rotation.y},Qr={ts:performance.now(),px:t.clientX,py:t.clientY},du=0,hu=0,n.setPointerCapture(t.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",t=>{if(!Sl||!Ds)return;const i=t.clientX-Ds.px,s=t.clientY-Ds.py;kt.rotation.y=Ds.rotY+i*.0085,kt.rotation.x=Xi.clamp(Ds.rotX+s*.0085,-1.2,1.2);const o=performance.now(),r=Math.max(.001,(o-Qr.ts)/1e3);hu=(t.clientX-Qr.px)*.0085/r,du=(t.clientY-Qr.py)*.0085/r,Qr={ts:o,px:t.clientX,py:t.clientY}});const e=()=>{Sl=!1,Ds=null,n.style.cursor="grab"};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("pointerleave",e),n.style.cursor="grab",n.style.touchAction="none"}function Ox(n){if(!ms||!kt)return;const e=Math.min(.05,(n-of)/1e3||0);of=n,Sl||(du*=.92,hu*=.92,kt.rotation.y+=(hu+tI)*e,kt.rotation.x=Xi.clamp(kt.rotation.x+du*e-kt.rotation.x*.35*e,-1.2,1.2)),sI(e),ms.render(jo,pr),mr=requestAnimationFrame(Ox)}function sI(n){es=(es+n)%Gr.cyclePeriod;const e=1-Math.exp(-n/Math.max(Gr.smoothTau,1e-4));if(js){const t=j.testMode||(j.upgrades?.takeoffSpeed|0)>0,[i,s]=Gr.gearWindow,r=t&&es>=i&&es<=s?1:0,a=1-Math.exp(-n/Math.max(ml.deployTau,1e-4));Qc+=(r-Qc)*a;const c=Math.max(.001,Qc);js.scale.setScalar(c),js.visible=t&&Qc>.02}if(nf&&Sa){const t=Nu();Sa.visible=t;const[i,s]=Gr.brakeWindow,r=t&&es>=i&&es<=s?1:0;Jd+=(r-Jd)*e;const a=-Jd*Nl.maxAngle;for(const c of nf)c.rotation.x=a}if(sf&&Ma){const t=lo(),i=St.oneShot.tiers[t]||St.oneShot.tiers[0];Ma.visible=t>0;const[s,o]=Gr.boostWindow,a=t>0&&es>=s&&es<=o?1:0;Jc+=(a-Jc)*e,o0.setHex(i.color||16777215);const c=St.exhaust;for(const l of sf)l.scale.z=c.length*Jc,l.material.opacity=.85*Jc,l.material.color.copy(o0)}}function Ux(){if(!kt)return;const n=rf?Fr(rf):cx();ux(kt,n)}function oI(n){rf=n,Ux()}function rI(){nI()&&(mr||(of=performance.now(),mr=requestAnimationFrame(Ox)))}function Fx(){mr&&(cancelAnimationFrame(mr),mr=0)}AL(()=>{qn==="shop"&&ws()});const $u={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},a0=document.getElementById("garage-punkte"),c0=document.getElementById("garage-highscore"),l0=document.getElementById("garage-obsidian"),u0=document.getElementById("garage-gofios"),nr=document.getElementById("garage-upgrades"),Qd=document.getElementById("garage-upgrade-info"),d0=document.getElementById("shop-obsidian"),h0=document.getElementById("hangar-skin-name"),aI=document.getElementById("hangar-skin-price"),cI=document.getElementById("hangar-skin-dots"),Ml=document.getElementById("hangar-skin-action"),lI=document.getElementById("hangar-skin-prev"),uI=document.getElementById("hangar-skin-next"),af=document.getElementById("hangar-skin-getdiamonds"),Yo=document.getElementById("shop-packs"),cf=document.getElementById("shop-restore"),eh=document.getElementById("shop-extras"),wl=document.getElementById("shop-watch-ad"),f0=document.getElementById("shop-watch-ad-sub"),p0=document.getElementById("shop-watch-ad-reward"),El=document.getElementById("shop-remove-ads"),m0=document.getElementById("shop-remove-ads-sub");let xi=0,ei=null;const fu="__booster__";let vn=null;const cs=document.getElementById("obsidian-confirm"),g0=document.getElementById("obsidian-confirm-text"),dI=document.getElementById("obsidian-confirm-cancel"),hI=document.getElementById("obsidian-confirm-ok"),Lr=document.getElementById("settings-segments"),Cr=document.getElementById("settings-samples"),fI=document.getElementById("settings-apply"),pI=document.getElementById("settings-cancel"),mI=document.getElementById("settings-reset-save"),gI=document.getElementById("settings-langs"),zi=document.getElementById("settings-invert-toggle");zi&&zi.addEventListener("change",()=>uu(zi.checked));const wa=document.getElementById("settings-music-toggle"),Ea=document.getElementById("settings-music-vol"),Aa=document.getElementById("settings-sfx-toggle"),Ta=document.getElementById("settings-sfx-vol");wa&&wa.addEventListener("change",()=>{const n=!wa.checked;Bv(n),$y(n)});Aa&&Aa.addEventListener("change",()=>{const n=!Aa.checked;Gv(n),jy(n)});Ea&&Ea.addEventListener("input",()=>{const n=parseFloat(Ea.value);vb(n),LR(n)});Ta&&Ta.addEventListener("input",()=>{const n=parseFloat(Ta.value);xb(n),CR(n)});const v0=document.getElementById("settings-gyro-block"),Ra=document.getElementById("settings-gyro-toggle"),pu=document.getElementById("settings-gyro-tune"),Pr=document.getElementById("settings-gyro-sens"),vI=document.getElementById("settings-gyro-sens-open"),si=document.getElementById("settings-gyro-advanced"),yI=document.getElementById("settings-gyro-recalibrate"),th=document.getElementById("settings-games-block"),y0=document.getElementById("settings-games-status"),lf=document.getElementById("settings-games-signin"),xI=document.getElementById("settings-games-achievements"),_I=document.getElementById("settings-games-leaderboard"),Ir=document.getElementById("settings-quality-slider"),mu=document.getElementById("settings-quality-ticks"),ir=document.getElementById("settings-quality-readout"),bI=document.getElementById("settings-advanced-open"),oi=document.getElementById("settings-advanced"),ja=ab(),Si=document.getElementById("reset-confirm"),SI=document.getElementById("reset-confirm-cancel"),MI=document.getElementById("reset-confirm-ok");let qn=null,_s=null,_p=null;function wI(n){return xe(`booster.names.${n}`)}function xn(n){return Math.round(n).toLocaleString(gp())}function go(n,e={}){sr();const t=$u[n];t&&(n==="hangar"&&(DI(),bs()),n==="shop"&&ws(),n==="settings"&&qI(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),qn=n,_s=typeof e.onClose=="function"?e.onClose:null,n==="hangar"&&rI())}function sr(){if(!qn)return;qn==="hangar"&&Fx();const n=$u[qn];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),qn=null;const e=_s;_s=null,e&&e()}function Bx(){qn==="hangar"&&Fx();for(const n of Object.values($u))n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true"));qn=null,_s=null}function bs(){AI(),EI(),Gx(),Hx(),uf()}function EI(){if(vn===fu||vn&&Qs[vn])return;const n=Object.keys(Qs);for(const e of n){const t=j.upgrades[e]|0,i=Qs[e].levels.length-1;if(t<i){vn=e;return}}vn=n[0]||null}function zx(){const n=lo(),e=St.oneShot.tiers[n]||St.oneShot.tiers[0],t="#"+(e.color|0).toString(16).padStart(6,"0"),i=Av(),s=sd.length-1;if(n>=s)return{tier:n,tierCfg:e,colorHex:t,pct:100,rightLabel:xe("hangar.max"),gofios:i};const o=sd[n]|0,r=sd[n+1]|0,a=Math.max(1,r-o),c=Math.max(0,Math.min(100,(i-o)/a*100));return{tier:n,tierCfg:e,colorHex:t,pct:c,rightLabel:`${i} / ${r} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function AI(){if(a0&&(a0.textContent=xn(j.punkte)),c0&&(c0.textContent=xn(j.bestFlightPunkte|0)),l0&&(l0.textContent=xn(j.obsidian|0)),u0){const n=j.gofiosByIsland[j.currentIsland]|0;u0.textContent=xn(n)}}const TI={drag:"air",maxSpeed:"speed",speedFromPitch:"trending_down",stallSpeed:"paragliding",takeoffSpeed:"flight_takeoff",brake:"back_hand",greyBoost:"bolt"};function x0(n,e,t){let i="";for(let s=0;s<e;s++){const o=s<n,r=o&&t?` style="background:${t};border-color:${t}"`:"";i+=`<span class="upg-pip${o?" is-on":""}"${r}></span>`}return i}function Gx(){if(!nr)return;nr.innerHTML="";const n='<span class="material-symbols-outlined upg-buy-icon">stars</span>',e='<span class="material-symbols-outlined upg-buy-icon">diamond</span>';for(const[o,r]of Object.entries(Qs)){const a=j.upgrades[o]|0,c=r.levels.length-1,l=a>=c,u=l?0:r.costs[a+1],d=l?0:Vx(o),f=o===vn;let m,v,y;j.punkte>=u?(m=`${xn(u)} ${n}`,v=xe("hangar.buy",{cost:xn(u)}),y="punkte"):(j.obsidian|0)>=d?(m=`${d} ${e}`,v=xe("hangar.buyObsidian",{cost:d}),y="obsidian"):(m=`${d} ${e}`,v=xe("hangar.getDiamonds"),y="shop");const p=j.testMode&&a>0?`<button class="upg-sell" type="button" data-sell="${o}"
                aria-label="${xe("a11y.sell",{cost:xn(r.costs[a])})}">−</button>`:"",h=l?`<span class="upg-max">${xe("hangar.max")}</span>`:`<button class="upg-buy${y==="punkte"?"":" pay-obsidian"}" type="button"
                data-buy="${o}" data-pay="${y}" aria-label="${v}">${m}</button>`,_=document.createElement("div");_.className=`upg-card${l?" is-maxed":""}${f?" is-selected":""}`,_.dataset.select=o,_.innerHTML=`
      <div class="upg-card-head">
        <span class="upg-card-icon material-symbols-outlined">${TI[o]||"tune"}</span>
        <span class="upg-card-label">${xe(`upgrades.${o}.label`)}</span>
        ${p}
      </div>
      <div class="upg-card-foot">
        <div class="upg-pips">${x0(a,c,null)}</div>
        ${h}
      </div>
    `,nr.appendChild(_)}const t=zx(),i=vn===fu,s=document.createElement("div");s.className=`upg-card upg-card-booster${i?" is-selected":""}`,s.dataset.select=fu,s.innerHTML=`
    <div class="upg-card-head">
      <span class="upg-card-icon material-symbols-outlined">rocket_launch</span>
      <span class="upg-card-label">${xe("hangar.booster")}</span>
    </div>
    <div class="upg-card-foot">
      <div class="upg-pips">${x0(t.tier,4,t.colorHex)}</div>
      <span class="upg-gofios">${t.rightLabel}</span>
    </div>
  `,nr.appendChild(s)}function Hx(){if(!Qd)return;const n=Qd.querySelector(".upgrade-info-title"),e=Qd.querySelector(".upgrade-info-desc");if(vn===fu){const r=zx();n&&(n.textContent=xe("hangar.boosterTitle",{name:wI(r.tier)})),e&&(e.textContent=xe("hangar.boosterDesc"));return}const t=vn&&Qs[vn];if(!t){n&&(n.textContent=""),e&&(e.textContent=xe("hangar.selectUpgrade"));return}const i=j.upgrades[vn]|0,s=t.levels.length-1,o=i>=s;if(n){const r=o?xe("hangar.max"):xe("hangar.level",{level:i,max:s});n.textContent=`${xe(`upgrades.${vn}.label`)} · ${r}`}e&&(e.textContent=xe(`upgrades.${vn}.desc`))}function RI(n){if(!j.testMode)return;const e=Qs[n];if(!e)return;const t=j.upgrades[n]|0;if(t<=0)return;const i=e.costs[t];j.upgrades[n]=t-1,j.punkte+=i,Qa(),Pt(),bs()}function LI(n){const e=Qs[n],t=j.upgrades[n]|0,i=e.costs[t+1];j.punkte<i||(j.punkte-=i,on("spend-points"),j.upgrades[n]=t+1,Qa(),Pt(),bs())}function Vx(n){const e=Dl.obsidianUpgradeCosts,t=j.obsidianUpgradeCount?.[n]|0;return e[Math.min(t,e.length-1)]}function CI(n){const e=j.upgrades[n]|0,t=Vx(n);(j.obsidian|0)<t||(j.obsidian=(j.obsidian|0)-t,on("spend-diamonds"),j.upgrades[n]=e+1,j.obsidianUpgradeCount[n]=(j.obsidianUpgradeCount?.[n]|0)+1,Qa(),Pt(),bs())}function PI({textHtml:n,onConfirm:e}){_p={onConfirm:e},g0&&(g0.innerHTML=n),cs.classList.add("visible"),cs.setAttribute("aria-hidden","false")}function Al(){cs.classList.remove("visible"),cs.setAttribute("aria-hidden","true"),_p=null}function II(){const n=_p?.onConfirm;Al(),n&&n()}function NI(n){const e=Fr(n),t=`<strong>${e.costObsidian} <span class="material-symbols-outlined inline-icon">diamond</span></strong>`,i=`<strong>${xe(e.nameKey)}</strong>`;PI({textHtml:xe("obsidian.spendSkin",{obsidian:t,label:i}),onConfirm:()=>OI(n)})}function DI(){const n=dp().findIndex(e=>e.id===j.equippedSkin);xi=n>=0?n:0}function kI(n){const e=Fr(n);e.costPunkte==null||j.punkte<e.costPunkte||(j.punkte-=e.costPunkte,on("spend-points"),Wu(n),hp(n),bs())}function OI(n){const e=Fr(n);e.costObsidian==null||(j.obsidian|0)<e.costObsidian||(j.obsidian=(j.obsidian|0)-e.costObsidian,on("spend-diamonds"),Wu(n),hp(n),bs())}function _0(){on("denied");const n=_s;_s=null,go("shop",{onClose:()=>go("hangar",{onClose:n})})}function UI(){const n=_s;_s=null,go("hangar",{onClose:()=>go("shop",{onClose:n})})}function uf(){if(!h0)return;const n=dp();(xi<0||xi>=n.length)&&(xi=0);const e=n[xi];h0.textContent=xe(e.nameKey),aI.textContent=xe(e.descKey),cI.innerHTML=n.map((c,l)=>`<span class="skin-dot${l===xi?" is-active":""}"></span>`).join(""),oI(e.teaser?j.equippedSkin:e.id);const t='<span class="material-symbols-outlined skin-action-icon">diamond</span>',i='<span class="material-symbols-outlined skin-action-icon">stars</span>';let s,o=!1,r=!1,a=!1;if(ei=null,e.teaser)s=xe("hangar.comingSoon"),o=!0,r=!0;else if(lx(e.id))j.equippedSkin===e.id?(s=xe("hangar.equipped"),o=!0,r=!0):(s=xe("hangar.equip"),ei={kind:"equip",id:e.id});else{const c=e.costPunkte!=null,l=e.costObsidian!=null,u=c&&j.punkte>=e.costPunkte,d=l&&(j.obsidian|0)>=e.costObsidian;u?(s=`${xe("hangar.buy",{cost:xn(e.costPunkte)})} ${i}`,ei={kind:"buyPunkte",id:e.id}):d?(s=`${xe("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,ei={kind:"buyObsidian",id:e.id}):c?(s=`${xe("hangar.buy",{cost:xn(e.costPunkte)})} ${i}`,o=!0,a=l):(s=`${xe("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,o=!0,a=!0)}Ml.innerHTML=s,Ml.disabled=o,Ml.classList.toggle("is-quiet",r),af&&(af.hidden=!a)}function ws(){d0&&(d0.textContent=xn(j.obsidian|0)),FI(),zI();const n=fo.isAvailable();if(cf&&(cf.hidden=!n),!!Yo){if(!n){Yo.innerHTML="",Yo.hidden=!0;return}Yo.hidden=!1,Yo.innerHTML=If.map(e=>{const t=Math.floor(e.diamonds*(1+e.bonusPct/100)),i=fo.localizedPrice(e.productId),s=e.badgeKey?`<span class="pack-badge">${xe(e.badgeKey)}</span>`:"",o=e.bonusPct>0?`<span class="pack-bonus">${xe("shop.bonus",{pct:e.bonusPct})}</span>`:"";return`
      <button class="pack-card" type="button" data-pack="${e.id}">
        ${s}
        <span class="pack-amount">
          <span class="material-symbols-outlined pack-icon">diamond</span>${xn(t)}
        </span>
        ${o}
        <span class="pack-price">${i}</span>
      </button>`}).join("")}}function FI(){const n=document.getElementById("shop-golden-buy"),e=document.getElementById("shop-golden-owned"),t=document.getElementById("shop-golden-price");if(!n)return;const i=Xt.goldenPrice,s=(j.obsidian|0)>=i;n.disabled=!s,e&&(e.textContent=xe("hud.goldenOwnedCount",{count:rp()})),t&&(t.innerHTML=`${i} <span class="material-symbols-outlined">diamond</span>`),n.setAttribute("aria-label",xe("a11y.goldenBuy",{cost:i}))}function BI(){if(!qR())return;on("spend-diamonds"),ws();const n=document.getElementById("shop-msg");n&&(n.textContent=`${xe("hud.goldenTitle")} +1 · ${xe("hud.goldenOwnedCount",{count:rp()})}`,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}function zI(){if(!eh)return;if(!po.isAvailable()){eh.hidden=!0;return}eh.hidden=!1;const n=po.rewardedRemaining();p0&&(p0.innerHTML=`+${In.rewardedDiamonds} <span class="material-symbols-outlined">diamond</span>`),f0&&(f0.textContent=n>0?xe("shop.adsLeftToday",{count:n,cap:In.rewardedDailyCap}):xe("shop.adsCapReached")),wl&&(wl.disabled=n<=0,wl.classList.toggle("is-disabled",n<=0));const e=!!j.adsRemoveOwned;m0&&(m0.textContent=e?xe("shop.removeAdsOwned"):fo.removeAdsPrice()),El&&(El.disabled=e,El.classList.toggle("is-owned",e))}async function GI(){const n=await po.watchRewarded();ws();const e=document.getElementById("shop-msg");if(e){if(n?.success)e.textContent=xe("shop.granted",{amount:xn(n.diamonds)});else if(n?.capped)e.textContent=xe("shop.adsCapReached");else return;e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}}async function HI(){(await fo.purchaseRemoveAds())?.success&&ws()}async function VI(n){const e=await fo.purchasePack(n);if(e?.success){ws();const t=document.getElementById("shop-msg");t&&(t.textContent=xe("shop.granted",{amount:xn(e.diamonds)}),t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2400))}}async function WI(){await fo.restore(),ws();const n=document.getElementById("shop-msg");n&&(n.textContent=xe("shop.restored"),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}let Jt=null;function qI(){Jt=ht(),Lr&&(Lr.value=Jt.segments),Cr&&(Cr.value=Jt.samples),ZI(),ir&&(ir.innerHTML='<span class="settings-ro-item"><span class="material-symbols-outlined">grid_on</span><b data-ro="seg">0</b></span><span class="settings-ro-item"><span class="material-symbols-outlined">forest</span><b data-ro="samples">0</b></span>'),bp(!1),Wx(),zi&&(zi.checked=Tx()),wa&&(wa.checked=!Fv()),Ea&&(Ea.value=gb()),Aa&&(Aa.checked=!zv()),Ta&&(Ta.value=yb()),XI(),Tl()}function Tl(){if(!th||(th.hidden=!Wn.isAvailable(),th.hidden))return;const n=Wn.isSignedIn();y0&&(y0.textContent=n?xe("settings.gamesSignedInAs",{name:Wn.playerName()}):xe("settings.gamesSignedOut")),lf&&(lf.hidden=n)}function XI(){if(!v0)return;const n=yo();if(v0.hidden=!n,!n)return;const e=yp()==="gyro";Ra&&(Ra.checked=e),Pr&&(Pr.value=String(Of())),pu&&(pu.hidden=!e)}function Wx(){bx(gI,{flagsOnly:!0,onPick:n=>{xx(n),Jt&&(Jt.language=n)}})}function $I(n){return n.charAt(0).toUpperCase()+n.slice(1)}function jI(n){return ja.findIndex(e=>e.segments===n.segments&&e.samples===n.samples)}function YI(n){let e=0,t=1/0;return ja.forEach((i,s)=>{const o=Math.abs(i.segments-n.segments);o<t&&(t=o,e=s)}),e}function ZI(){Ir&&(Ir.max=String(ja.length-1)),mu&&(mu.innerHTML=ja.map(n=>`<span class="settings-tick">${xe("settings.preset"+$I(n.name))}</span>`).join(""))}function bp(n){if(!Jt)return;const e=jI(Jt),t=e>=0?e:YI(Jt);Ir&&(Ir.value=String(t)),mu&&[...mu.children].forEach((i,s)=>i.classList.toggle("active",e>=0&&s===t)),ir&&(b0(ir.querySelector('[data-ro="seg"]'),Jt.segments,n),b0(ir.querySelector('[data-ro="samples"]'),Jt.samples,n),ir.classList.toggle("is-custom",e<0))}function KI(n){const e=ja[n];e&&(Jt={...Jt,segments:e.segments,samples:e.samples},Lr&&(Lr.value=e.segments),Cr&&(Cr.value=e.samples),bp(!0))}function b0(n,e,t){if(!n)return;n._roRaf&&cancelAnimationFrame(n._roRaf);const i=t?parseFloat(n.dataset.cur)||0:e;if(!t||i===e){n.dataset.cur=String(e),n.textContent=xn(e),n._roRaf=0;return}const s=performance.now(),o=320,r=a=>{const c=Math.min(1,(a-s)/o),l=1-Math.pow(1-c,3),u=i+(e-i)*l;n.dataset.cur=c<1?String(u):String(e),n.textContent=xn(Math.round(u)),n._roRaf=c<1?requestAnimationFrame(r):0};n._roRaf=requestAnimationFrame(r)}function df(){if(!Jt)return;const n=parseInt(Lr?.value,10),e=parseInt(Cr?.value,10);Number.isFinite(n)&&(Jt.segments=n),Number.isFinite(e)&&(Jt.samples=e),bp(!1)}function JI(){oi&&(oi.classList.add("visible"),oi.setAttribute("aria-hidden","false"))}function nh(){oi&&(oi.classList.remove("visible"),oi.setAttribute("aria-hidden","true"))}function QI(){si&&(Pr&&(Pr.value=String(Of())),si.classList.add("visible"),si.setAttribute("aria-hidden","false"))}function ih(){si&&(si.classList.remove("visible"),si.setAttribute("aria-hidden","true"))}function eN(){if(df(),!Jt)return;li(Jt);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function tN(){Si&&(Si.classList.add("visible"),Si.setAttribute("aria-hidden","false"))}function sh(){Si&&(Si.classList.remove("visible"),Si.setAttribute("aria-hidden","true"))}function nN(){H_();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const i=t.dataset.modalClose;(i==="hangar"||i==="shop"||i==="settings")&&t.addEventListener("click",sr)});for(const t of Object.values($u))t&&t.addEventListener("click",i=>{i.target===t&&sr()});nr&&nr.addEventListener("click",t=>{const i=t.target.closest("[data-sell]");if(i&&!i.disabled){RI(i.dataset.sell);return}const s=t.target.closest("[data-buy]");if(s){if(s.disabled)return;const r=s.dataset.buy,a=s.dataset.pay;vn=r,a==="punkte"?LI(r):a==="obsidian"?CI(r):a==="shop"&&_0();return}const o=t.target.closest("[data-select]");o&&(vn=o.dataset.select,Gx(),Hx())}),cs&&(cs.addEventListener("click",t=>{t.target===cs&&Al()}),dI?.addEventListener("click",Al),hI?.addEventListener("click",II));const e=dp().length;lI?.addEventListener("click",()=>{xi=(xi-1+e)%e,uf()}),uI?.addEventListener("click",()=>{xi=(xi+1)%e,uf()}),Ml?.addEventListener("click",()=>{ei&&(ei.kind==="equip"?(hp(ei.id),bs()):ei.kind==="buyPunkte"?kI(ei.id):ei.kind==="buyObsidian"&&NI(ei.id))}),af?.addEventListener("click",_0),Yo?.addEventListener("click",t=>{const i=t.target.closest("[data-pack]");i&&VI(i.dataset.pack)}),cf?.addEventListener("click",WI),wl?.addEventListener("click",GI),El?.addEventListener("click",HI),document.getElementById("shop-golden-buy")?.addEventListener("click",BI),document.getElementById("shop-view-skins")?.addEventListener("click",UI),Si&&(Si.addEventListener("click",t=>{t.target===Si&&sh()}),SI?.addEventListener("click",sh),MI?.addEventListener("click",nN)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(Si?.classList.contains("visible")?(sh(),t.stopImmediatePropagation()):cs?.classList.contains("visible")?(Al(),t.stopImmediatePropagation()):oi?.classList.contains("visible")?(nh(),t.stopImmediatePropagation()):si?.classList.contains("visible")?(ih(),t.stopImmediatePropagation()):qn&&(sr(),t.stopImmediatePropagation()))}),Ir?.addEventListener("input",()=>KI(parseInt(Ir.value,10))),bI?.addEventListener("click",JI),oi&&(oi.addEventListener("click",t=>{t.target===oi&&nh()}),oi.querySelector("[data-settings-advanced-close]")?.addEventListener("click",nh)),Lr?.addEventListener("input",df),Cr?.addEventListener("input",df),Ra?.addEventListener("change",async()=>{const t=Ra.checked,i=await W2(t?"gyro":"touch"),s=t&&i;Ra.checked=s,pu&&(pu.hidden=!s),t&&i?(uu(!1),zi&&(zi.checked=!1)):t||(uu(!0),zi&&(zi.checked=!0))}),Pr?.addEventListener("input",()=>{const t=parseFloat(Pr.value);q2(t),mb(t)}),yI?.addEventListener("click",Xu),vI?.addEventListener("click",QI),si&&(si.addEventListener("click",t=>{t.target===si&&ih()}),si.querySelector("[data-settings-gyro-advanced-close]")?.addEventListener("click",ih)),pI?.addEventListener("click",sr),fI?.addEventListener("click",eN),mI?.addEventListener("click",tN),lf?.addEventListener("click",async()=>{await Wn.signIn(),Tl()}),xI?.addEventListener("click",()=>Wn.showAchievements()),_I?.addEventListener("click",()=>Wn.showLeaderboard()),Wn.onAuthChange(Tl),qu(()=>{qn==="hangar"&&bs(),qn==="shop"&&ws(),qn==="settings"&&(Wx(),Tl())})})();const iN=Object.freeze(Object.defineProperty({__proto__:null,closeModal:sr,closeModalSilently:Bx,openModal:go},Symbol.toStringTag,{value:"Module"})),sN=.4,oN=.08,Ya=20,gs=Math.ceil(Ae.size/Ya)+2,S0=-8e3-Ya,qx=Array.from({length:gs*gs},()=>[]);function Xx(n,e){return{cx:Math.floor((n-S0)/Ya),cz:Math.floor((e-S0)/Ya)}}function ac(n,e,t,i,s){const o=i+sN,r={x:n,z:t,r2:o*o,yMin:e,yMax:e+s+oN},a=Math.ceil(o/Ya),{cx:c,cz:l}=Xx(n,t);for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){const f=c+d,m=l+u;f<0||m<0||f>=gs||m>=gs||qx[m*gs+f].push(r)}}function rN(n,e,t){const{cx:i,cz:s}=Xx(n,t);if(i<0||s<0||i>=gs||s>=gs)return!1;const o=qx[s*gs+i];for(let r=0;r<o.length;r++){const a=o[r];if(e<a.yMin||e>a.yMax)continue;const c=a.x-n,l=a.z-t;if(c*c+l*l<a.r2)return!0}return!1}const ls=1024,so=427,M0=1.08,aN=700,cN=5e3,lN={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},os=document.getElementById("tp-minimap-canvas"),ts=document.createElement("div"),da=document.createElement("canvas"),gu=document.createElement("div"),el=document.createElement("div"),gr=document.createElement("div"),Rl=document.createElement("div"),Ll=document.createElement("span"),w0=document.getElementById("tp-island"),E0=document.getElementById("map-card"),uN=6;let ea=null,oh=0,vu=!1,hf=0,ff=0,A0="",Sp=0,tl=null;const rh=new I;function Mp(){if(tl)return tl;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const s of Lt)n=Math.min(n,s.x-s.bboxRadius),e=Math.max(e,s.x+s.bboxRadius),t=Math.min(t,s.z-s.bboxRadius),i=Math.max(i,s.z+s.bboxRadius);return tl={cx:(n+e)/2,cz:(t+i)/2,hw:(e-n)/2*M0,hh:(i-t)/2*M0},tl}function dN(n,e){let t=Lt[0].id,i=1/0;for(const s of Lt){const o=n-s.x,r=e-s.z,a=o*o+r*r;a<i&&(i=a,t=s.id)}return t}function hN(){!os||vu||(vu=!0,os.innerHTML="",ts.className="minimap-stage",ts.style.width=ls+"px",ts.style.height=so+"px",ts.style.transformOrigin="0 0",da.className="minimap-canvas",da.width=ls,da.height=so,ts.appendChild(da),gu.className="minimap-runways",ts.appendChild(gu),os.appendChild(ts),el.className="minimap-overlay",gr.className="minimap-plane",gr.innerHTML='<span class="minimap-plane-tri"></span>',el.appendChild(gr),Rl.className="minimap-compass",Ll.className="minimap-compass-inner",Ll.textContent="N",Rl.appendChild(Ll),el.appendChild(Rl),os.appendChild(el),os.addEventListener("pointerdown",()=>{Sp=performance.now()+cN,os.classList.add("is-overview")}),$x(),Yx(),pf(),window.addEventListener("resize",pf))}function $x(){if(!vu)return;const n=rR();if(!n)return;const e=da.getContext("2d"),t=e.createImageData(ls,so),{cx:i,cz:s,hw:o,hh:r}=Mp(),a=Ae.heightmap.metersPerUnit,c=Ae.waterLevel,l=Ae.heightmap.elevRange,u=Ae.heightmap.bbox,d=Ae.heightmap.center,f=Math.cos(d.lat*Math.PI/180),m=u.lonE-u.lonW,v=u.latN-u.latS,y=(d.lon-u.lonW)/m*(n.w-1),p=a/(111320*f)/m*(n.w-1),h=(u.latN-d.lat)/v*(n.h-1),_=a/111320/v*(n.h-1),g=l[1]-l[0],b=l[0],R={};for(const M of Lt)R[M.id]=!1;for(const M of tt)if(j.discoveredRunways[M.id]){const w=lN[M.id];w&&(R[w]=!0)}const E=n.data,A=n.w,U=n.h;for(let M=0;M<so;M++){const w=s+(M/(so-1)-.5)*2*r,W=Math.max(0,Math.min(U-1,Math.floor(h+w*_)))*A*4;for(let oe=0;oe<ls;oe++){const O=i+(oe/(ls-1)-.5)*2*o,q=Math.floor(y+O*p);let Y,K,z;if(q<0||q>=A)Y=52,K=92,z=118;else{const ae=W+q*4,ue=E[ae]<<8|E[ae+1],ye=(b+ue/65535*g)/a;if(ye<c+.05)Y=52,K=92,z=118;else{const te=dN(O,w),k=ye*a;R[te]?[Y,K,z]=fN(k):Y=K=z=pN(k)}}const Q=(M*ls+oe)*4;t.data[Q]=Y,t.data[Q+1]=K,t.data[Q+2]=z,t.data[Q+3]=255}}e.putImageData(t,0,0)}function fN(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function pN(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function jx(n,e){const{cx:t,cz:i,hw:s,hh:o}=Mp();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*o)+.5}}function Yx(){gu.innerHTML="";for(const n of tt){const e=!!j.landedRunways[n.id];if(!!!j.discoveredRunways[n.id]&&!e)continue;const{fracX:i,fracY:s}=jx(n.x,n.z);if(i<0||i>1||s<0||s>1)continue;const o=document.createElement("span");o.className=`minimap-runway ${e?"is-landed":"is-seen"}`,o.style.left=(i*100).toFixed(2)+"%",o.style.top=(s*100).toFixed(2)+"%",gu.appendChild(o)}}function wp(n){if(Ur(n.x,n.z)<Ae.waterLevel+.05)return null;let t=null,i=1/0;for(const s of Lt){const o=n.x-s.x,r=n.z-s.z,a=o*o+r*r;a<i&&(i=a,t=s)}return t}function Zx(){return performance.now()<Sp}const mN="Islas Canarias";let T0="";function gN(n){if(!w0)return;const e=wp(n),i=Zx()||!e?mN:e.name;i!==T0&&(T0=i,w0.textContent=i)}function pf(){const n=os.getBoundingClientRect();hf=n.width,ff=n.height}function vN(){return E0?!document.body.classList.contains("touch-mode")||E0.classList.contains("is-open"):!0}function yN(n){if(!vu||!n||(gN(n.position),!vN()))return;const e=tt.map(b=>j.discoveredRunways[b.id]?"1":"0").join("")+"|"+tt.map(b=>j.landedRunways[b.id]?"1":"0").join("");e!==A0&&($x(),Yx(),A0=e),(hf<1||ff<1)&&pf();const t=hf,i=ff;if(t<1||i<1)return;const s=t/2,o=i/2;rh.set(0,0,-1).applyQuaternion(n.quaternion);const r=Math.atan2(rh.x,-rh.z),a=performance.now(),c=a<Sp,{hw:l}=Mp(),u=2*l/ls,d=t*u/aN,f=i/so,m=c?f:d,v=oh?Math.min(.1,(a-oh)/1e3):0;if(oh=a,ea===null)ea=m;else{const b=1-Math.exp(-v*uN);ea+=(m-ea)*b}c||os.classList.remove("is-overview");const{fracX:y,fracY:p}=jx(n.position.x,n.position.z),h=y*ls,_=p*so;ts.style.transform=`translate(${s}px, ${o}px) rotate(${-r}rad) scale(${ea}) translate(${-h}px, ${-_}px)`,gr.style.left=s+"px",gr.style.top=o+"px",gr.style.transform="translate(-50%, -50%)";const g=Math.min(t,i)*.43;Rl.style.transform=`translate(-50%, -50%) rotate(${-r}rad) translateY(-${g}px)`,Ll.style.transform=`rotate(${r}rad)`}const mf=document.getElementById("landing-toast"),R0=document.getElementById("controls-hint"),ah=document.getElementById("boost-grey-fill"),nl=document.getElementById("boost-oneshot-tile"),L0=document.getElementById("test-mode-border"),kn=document.getElementById("poi-toast"),_i=document.getElementById("poi-label"),oo=document.getElementById("wrong-approach-toast");document.getElementById("tp-island");const xN={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},ch=document.getElementById("map-card-punkte"),lh=document.getElementById("map-card-highscore"),uh=document.getElementById("map-card-landings"),C0=document.getElementById("map-card-landings-best"),hi=document.getElementById("score-chip"),P0=document.getElementById("score-chip-value"),dh=document.getElementById("score-chip-mult");let gf="",vf="",yf="",I0=0;function xf(n){return Math.round(n).toLocaleString(gp())}function Kx(n){return n.toLocaleString(gp(),{minimumFractionDigits:1,maximumFractionDigits:1})}let Ys=null,yu=null,il=null,xu=!1,Za=null,N0=-1,D0=null,_f=null,k0=!1,Nr=!1;qu(()=>{_f=null,vf="",gf="",yf="",Nr&&oo&&(oo.textContent=xe("hud.wrongApproach"))});function _N(n,e,t){const i=xe("hud.landingBonus",{bonus:e??co.landingBonus}),s=t?`<span class="mult-up">${xe("hud.multiplierUp",{mult:Kx(t)})}</span>`:"";mf.innerHTML=`${xe("hud.landingToast",{id:n.id})}<span class="bonus">${i}</span>${s}`,mf.classList.add("show")}function Jx(){mf.classList.remove("show")}function O0(n,e,t,i){if(!_i)return;const s=t>0?xe("hud.poiRewardFull",{punkte:e,gofios:t}):xe("hud.poiRewardPunkte",{punkte:e}),o=i?xe(`booster.unlock.${i}`):"",r=o?`<span class="tier-up">${o}</span>`:"";_i.innerHTML=`<span class="poi-name">${n}</span><span class="reward">${s}</span>${r}`,_i.classList.add("show","prominent"),xu=!0,Za=n,il&&clearTimeout(il),il=setTimeout(()=>{_i.classList.remove("prominent"),xu=!1,il=null,_i.innerHTML=`<span class="poi-name">${n}</span>`},bt.activationToast.duration*1e3)}function Ep(n){yu=n,kn.classList.add("show"),Ys&&clearTimeout(Ys),Ys=setTimeout(()=>{kn.classList.remove("show"),Ys=null,yu=null},bt.activationToast.duration*1e3)}function bN(n,e){kn&&(kn.innerHTML=`${n}<span class="reward">${xe("hud.discoveryReward",{diamonds:e})}</span><span class="tier-up">${xe("hud.discoveryTitle")}</span>`,kn.classList.remove("compact"),Ep("discovery"))}function SN(){kn&&(kn.innerHTML=xe("hud.runwayApproach"),kn.classList.remove("compact"),Ep("approach"))}function hh(){!kn||yu!=="approach"||(Ys&&(clearTimeout(Ys),Ys=null),kn.classList.remove("show"),yu=null)}function MN(n,e){kn&&(kn.innerHTML=e?`${xe("hud.airportUnlockTitle")}<span class="reward">${xe("hud.airportUnlockBody",{name:n})}</span>`:xe("hud.airportUnlocked",{name:n}),kn.classList.add("compact"),Ep("unlock"))}function wN(){!oo||Nr||(oo.textContent=xe("hud.wrongApproach"),oo.classList.add("show"),Nr=!0,bf())}function U0(){!oo||!Nr||(oo.classList.remove("show"),Nr=!1)}function EN(n){_i&&(xu||Nr||n!==Za&&(_i.innerHTML=`<span class="poi-name">${n}</span>`,_i.classList.add("show"),Za=n))}function bf(){_i&&(xu||Za!==null&&(_i.classList.remove("show"),Za=null))}function AN(){const n=yp()==="gyro"?"hud.hintPrelaunchGyro":"hud.hintPrelaunch",e=D.flightState===De.INTRO||D.flightState===De.CRASHING?"":D.flightState===De.PRELAUNCH?xe(n):D.flightState===De.TAKEOFF_ROLL?xe("hud.hintTakeoff"):xe("hud.hintNormal");e!==_f&&(R0.textContent=e,_f=e);const t=D.flightState===De.PRELAUNCH;t!==k0&&(R0.classList.toggle("hint-pinned",t),k0=t),LN(),CN(),PN(),RN(),TN(),ZR()}function TN(){if(!hi)return;const n=D.flightState,e=Er(),t=op(),i=Math.round(D.flightPunkte),s=n===De.TAKEOFF_ROLL||n===De.FLYING||n===De.LANDING_ROLL||n===De.LANDED||n===De.CRASHING,o=!D.tutorial&&(s||n===De.PRELAUNCH&&(e>1||t||i>0)),r=e>1||t,a=`${o}|${i}|${r?e:0}|${t}`;if(a===yf)return;yf=a,o&&i-I0>=Xt.chipPulseMinDelta&&(hi.classList.remove("pulse"),hi.offsetWidth,hi.classList.add("pulse")),I0=i,hi.classList.toggle("show",o),hi.classList.toggle("golden",t),P0&&(P0.textContent=xf(i)),dh&&(dh.hidden=!r,r&&(dh.textContent="×"+Kx(e)));const c=t?0:HR();if(c>0){const l=Math.round(244+-12*c),u=Math.round(241+-63*c),d=Math.round(232+-174*c);hi.style.borderColor=`rgba(${l}, ${u}, ${d}, ${(.6+.3*c).toFixed(2)})`,hi.style.boxShadow=`var(--hud-scrim-shadow), 0 0 ${Math.round(4+16*c)}px rgba(232, 178, 58, ${(.6*c).toFixed(2)})`}else hi.style.borderColor="",hi.style.boxShadow=""}function RN(){if(!ch&&!lh&&!uh)return;const n=Math.round(D.flightPunkte|0),e=Math.round(j.bestFlightPunkte|0),t=D.sessionLandings|0,i=j.bestSessionLandings|0,s=`${n}|${e}|${t}|${i}`;s!==vf&&(vf=s,ch&&(ch.textContent=xf(n)),lh&&(lh.textContent=xf(e)),uh&&(uh.textContent=t.toString()),C0&&(C0.textContent=i.toString()))}function LN(){if(ah&&(ah.style.width=(D.boostFuelGrey*100).toFixed(1)+"%",ah.style.opacity=D.greyActive?"1":"0.7"),!nl)return;const n=lo(),e=St.oneShot.tiers[n]||St.oneShot.tiers[0];if(n!==N0){nl.hidden=n===0;const s="#"+(e.color|0).toString(16).padStart(6,"0");nl.style.setProperty("--boost-fill",s),N0=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,D.boostFuelOneshot)))*100).toFixed(1)+"%";nl.style.setProperty("--drain-pct",i)}function CN(){L0&&j.testMode!==D0&&(L0.classList.toggle("visible",!!j.testMode),D0=j.testMode)}function PN(){const n=Zx(),e=wp(he.position),t=n||!e,i={peak:0,city:0,landscape:0,beach:0},s={peak:0,city:0,landscape:0,beach:0};if(t)for(const a of Object.keys(od))for(const c of od[a])i[c.type]++,j.exploredPOIs[c.id]&&s[c.type]++;else for(const a of od[e.id]||[])i[a.type]++,j.exploredPOIs[a.id]&&s[a.type]++;const r=`${t?"arch":e.id}|${s.peak}/${i.peak}|${s.city}/${i.city}|${s.landscape}/${i.landscape}|${s.beach}/${i.beach}`;if(r!==gf){gf=r;for(const a of["peak","city","landscape","beach"]){const c=xN[a];if(!c)continue;const l=s[a],u=i[a];u>0&&l>=u?c.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':c.textContent=`${l} / ${u}`}}}const Fn=new I(0,0,-1),sl=new I,F0=new I,Nt=new I,qt=new I,gi=new I,B0=new I,ta=new I(0,0,-1),fh=new I;let ph=!1;function Qx(){switch(D.flightState){case De.PRELAUNCH:case De.LANDED:return 0;case De.TAKEOFF_ROLL:case De.LANDING_ROLL:return Xi.clamp(D.speed/ca.takeoffSpeed,0,1);default:return 1}}function La(n,e,t){return n+(e-n)*t}let mh=0;function na(n,e){return 1-Math.exp(-e/Math.max(n,1e-4))}function z0(n){const e=1-n;return 1-e*e*e}function IN(n){return qt.set(0,0,-1).applyQuaternion(he.quaternion),Nt.set(qt.x,0,qt.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize(),gi.set(0,Yt.height,0),n.copy(he.position).addScaledVector(Nt,-6.5).add(gi)}function NN(n){if(D.flightState===De.INTRO&&D.introStartCamPos){const u=z0(Math.min(1,D.introT));IN(B0),Wt.position.lerpVectors(D.introStartCamPos,B0,u),Wt.up.set(0,1,0),Wt.lookAt(he.position);return}if(D.flightState!==De.CRASHING&&(ph=!1),D.flightState===De.LANDED){qt.set(0,0,-1).applyQuaternion(he.quaternion),Fn.copy(qt),Nt.set(qt.x,0,qt.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize(),gi.set(0,Yt.runwayHeight,0),Wt.position.copy(he.position).addScaledVector(Nt,-3).add(gi),Wt.up.set(0,1,0),Wt.lookAt(he.position);return}if(D.flightState===De.CRASHING){ph||(qt.set(0,0,-1).applyQuaternion(he.quaternion),ta.set(qt.x,0,qt.z),ta.lengthSq()<1e-4&&ta.set(0,0,-1),ta.normalize(),fh.copy(he.position),ph=!0);const u=z0(Math.min(1,D.crashT)),d=Yt.distance+gl.camPullback*u;gi.set(0,Yt.height+gl.camRise*u,0),sl.copy(fh).addScaledVector(ta,-d).add(gi),Wt.position.lerp(sl,na(gl.camTau,n)),Wt.up.set(0,1,0),Wt.lookAt(fh);return}qt.set(0,0,-1).applyQuaternion(he.quaternion);const e=na(Yt.yawTau,n),t=na(Yt.pitchTau,n);Fn.x+=(qt.x-Fn.x)*e,Fn.z+=(qt.z-Fn.z)*e,Fn.y+=(qt.y-Fn.y)*t,Fn.normalize(),Nt.set(Fn.x,0,Fn.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize();const i=D.greyActive||D.oneShotActive?1:0,s=na(St.camPushbackTau,n);mh+=(i-mh)*s;const o=Qx(),r=La(Yt.runwayDistance,Yt.distance,o),a=La(Yt.runwayHeight,Yt.height,o),c=La(Yt.runwayLookAhead,Yt.lookAhead,o);gi.set(0,a,0),sl.copy(he.position).addScaledVector(Nt,-(r+St.camPushback*mh)).add(gi);const l=na(Yt.posTau,n);Wt.position.lerp(sl,l),F0.copy(he.position).addScaledVector(Fn,c),Wt.up.set(0,1,0),Wt.lookAt(F0)}function ju(){qt.set(0,0,-1).applyQuaternion(he.quaternion),Fn.copy(qt),Nt.set(qt.x,0,qt.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize();const n=Qx(),e=La(Yt.runwayDistance,Yt.distance,n),t=La(Yt.runwayHeight,Yt.height,n);gi.set(0,t,0),Wt.position.copy(he.position).addScaledVector(Nt,-e).add(gi)}const Ap={value:0},ia=he.getObjectByName("paperBody");if(ia){const n=ia.geometry,e=n.getAttribute("position"),t=e.count/3,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3);for(let o=0;o<t;o++){const r=o*3,a=r+1,c=r+2,l=(e.getX(r)+e.getX(a)+e.getX(c))/3,u=(e.getY(r)+e.getY(a)+e.getY(c))/3,d=(e.getZ(r)+e.getZ(a)+e.getZ(c))/3,f=Math.random(),m=Math.random(),v=Math.random();for(const y of[r,a,c])i[y*3]=l,i[y*3+1]=u,i[y*3+2]=d,s[y*3]=f,s[y*3+1]=m,s[y*3+2]=v}n.setAttribute("aCentroid",new Dt(i,3)),n.setAttribute("aRand",new Dt(s,3)),ia.material.onBeforeCompile=o=>{o.uniforms.uShatter=Ap,o.vertexShader=`attribute vec3 aCentroid;
attribute vec3 aRand;
uniform float uShatter;
`+o.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = vec3( position );
         if ( uShatter > 0.0001 ) {
           float s = uShatter;
           vec3 c = aCentroid;
           // outward drift direction, biased slightly upward + jittered per tri
           vec3 dir = normalize( c + vec3( 0.0, 0.15, 0.0 ) + ( aRand - 0.5 ) * 0.6 );
           // tumble each triangle around its own centroid (Rodrigues rotation)
           vec3 axis = normalize( aRand * 2.0 - 1.0 );
           float ang = s * ( 4.0 + aRand.x * 8.0 );
           vec3 rel  = position - c;
           vec3 rot  = rel * cos( ang ) + cross( axis, rel ) * sin( ang )
                       + axis * dot( axis, rel ) * ( 1.0 - cos( ang ) );
           vec3 disp = dir * ( s * ( 2.0 + aRand.y * 3.0 ) );
           disp.y -= s * s * 5.0;   // gravity — accelerates downward
           transformed = c + rot + disp;
         }`)},ia.material.customProgramCacheKey=()=>"paperShatter",ia.material.needsUpdate=!0}let Ss=null;function DN(){Ss=[],he.traverse(n=>{if(!n.material)return;const e=Array.isArray(n.material)?n.material:[n.material];for(const t of e)t.userData.crashBaseOpacity=t.opacity,Ss.push(t)})}function kN(){Ss||DN();for(const n of Ss)n.transparent=!0}function ON(n){if(Ap.value=n,!Ss)return;const e=Math.max(0,1-n*1.15);for(const t of Ss)t.opacity=t.userData.crashBaseOpacity*e}function UN(){if(Ap.value=0,!!Ss)for(const n of Ss)n.opacity=n.userData.crashBaseOpacity}let Cl=null;const fi=new I,G0=new I,H0=new I,V0=new Ct,W0=new $n,ol=new I,q0=new I,FN=new I;function Yu(n,e=FN){return e.set(0,0,-1).applyEuler(new $n(0,n,0))}function Tp(n){const e=Yu(n.activeHeading);he.position.set(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),he.quaternion.setFromEuler(new $n(0,n.activeHeading,0)),D.speed=0,D.flightState=De.PRELAUNCH,D.currentRunway=n,D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,D.greyActive=!1,D.oneShotActive=!1,Nf(),ku(),Xu(),ju()}const e_=document.getElementById("crash");let Sf=null;function BN(n){Sf=n}function t_(){D.flightPunkte>j.bestFlightPunkte&&(j.bestFlightPunkte=D.flightPunkte,!j.testMode&&!D.tutorial&&Wn.submitBestRun(j.bestFlightPunkte))}function Pl(){if(D.tutorial){Sf&&Sf("crash");return}D.flightState===De.CRASHING||D.flightState===De.CRASHED||(D.speed=0,D.flightState=De.CRASHING,D.crashT=0,D.sessionLandings=0,Yy(),WR(),t_(),Pt(),kN())}function zN(n){D.crashT+=n/gl.duration,ON(Math.min(1,D.crashT)),D.crashT>=1&&(D.alive=!1,D.flightState=De.CRASHED,e_.classList.add("visible"))}let X0=!1;function Zu(n={}){n.runwayId&&n.runwayId!==j.checkpointRunwayId&&(j.checkpointRunwayId=n.runwayId,Pt());const e=j.checkpointRunwayId??ci,t=tt.find(s=>s.id===e)??tt[0],i=n.forceIntro||!j.introPlayed;if(V_(),Yy(),j2(),Z2(),eI(),UN(),Jx(),e_.classList.remove("visible"),Tp(t),X0||(Fy(t),X0=!0),i){const s=new I(0,0,-1).applyQuaternion(he.quaternion),o=new I(s.x,0,s.z).normalize();D.introStartCamPos=he.position.clone().addScaledVector(o,-4e3).add(new I(0,Tv.startHeight,0)),D.introT=0,D.flightState=De.INTRO,Mt.fog&&(Cl=Mt.fog,Mt.fog=null)}}function GN(){const n=wo();return n.pitch!==0||n.roll!==0||n.brake}function n_(n){if(D.refillT>=1)return;D.refillT=Math.min(1,D.refillT+n/St.refillDuration);const e=D.refillT;D.boostFuelGrey=D.refillStartGrey+(1-D.refillStartGrey)*e,D.boostFuelOneshot=D.refillStartOneshot+(1-D.refillStartOneshot)*e}function HN(){D.refillT=1,D.boostFuelGrey=1,D.boostFuelOneshot=1}function VN(n){const e=wo();j_()&&lo()>0&&(j.testMode&&D.oneShotActive?D.oneShotActive=!1:!D.oneShotActive&&D.boostFuelOneshot>0&&(D.oneShotActive=!0)),D.greyActive=e.boost&&D.boostFuelGrey>0;let t=0,i=0;if(D.oneShotActive){const s=St.oneShot.tiers[lo()]||St.oneShot.tiers[0];D.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),D.boostFuelOneshot<=0&&(D.boostFuelOneshot=j.testMode?1:0,D.oneShotActive=j.testMode),D.oneShotActive&&(t+=s.speedBonus,i+=s.accelRate)}if(D.greyActive){const s=St.grey;D.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),D.boostFuelGrey<=0?(D.boostFuelGrey=0,D.greyActive=!1):(t+=s.speedBonus,i+=s.accelRate)}return!D.greyActive&&!D.oneShotActive&&D.boostFuelGrey<1&&(D.boostFuelGrey=Math.min(1,D.boostFuelGrey+n/St.grey.rechargeTime)),{speedBonus:t,accelBonus:i}}function WN(n){GN()?D.introT=1:D.introT+=n/Tv.duration,D.introT>=1&&(D.introT=0,D.introStartCamPos=null,D.flightState=De.PRELAUNCH,j.introPlayed=!0,ku(),Xu(),Cl&&(Mt.fog=Cl,Cl=null),ju())}function qN(n){n_(n);const e=Y_();(yp()!=="gyro"&&wo().pitch>0||e)&&(D.flightState=De.TAKEOFF_ROLL,D.takeoffTime=0)}function XN(n){const e=D.currentRunway;D.takeoffTime+=n,n_(n);const t=ca.takeoffSpeed,i=ca.linearShare,s=1-i,r=e.length*ca.liftoffFraction/(t*(i/2+s/3)),a=Math.min(1,D.takeoffTime/r);D.speed=t*(i*a+s*a*a);const c=Yu(e.activeHeading);he.position.x+=c.x*D.speed*n,he.position.z+=c.z*D.speed*n,he.position.y=e.elevation+.22,he.quaternion.setFromEuler(new $n(0,e.activeHeading,0)),a>=1&&(he.rotateX(ca.pitchUpAtLiftoff),D.flightState=De.FLYING,D.currentRunway=null,D.postLiftCooldown=1.2,HN())}const $0=200,$N=250;function jN(n){for(const e of tt){if(j.discoveredRunways[e.id])continue;const t=n.x-e.x,i=n.z-e.z;if(t*t+i*i>$0*$0)continue;const s=n.y-e.elevation;s<-50||s>$N||(j.discoveredRunways[e.id]=!0,Pt())}}function YN(n){const e=VN(n),t=wo(),i=t.pitch,s=t.roll,o=Math.max(0,sn.stallSpeed-D.speed)/sn.stallSpeed,r=1-o*(1-sn.stallAuthority),a=i*r;fi.set(0,0,-1).applyQuaternion(he.quaternion);const c=Math.asin(Xi.clamp(fi.y,-1,1));let l=a*sn.pitchRate*n;l>0&&(l=Math.min(l,Math.max(0,sn.maxClimbPitch-c))),he.rotateX(l),he.rotateZ(-s*sn.rollRate*n),fi.set(0,0,-1).applyQuaternion(he.quaternion),G0.set(1,0,0).applyQuaternion(he.quaternion),H0.set(0,1,0).applyQuaternion(he.quaternion);const u=Math.atan2(G0.y,H0.y);he.rotateOnWorldAxis(Jh,Math.sin(u)*sn.turnFactor*n),o>.01&&(ol.set(fi.x,0,fi.z),ol.lengthSq()>1e-4&&(ol.normalize(),q0.crossVectors(ol,Jh).normalize(),he.rotateOnWorldAxis(q0,-o*sn.stallPitchRate*n))),fi.set(0,0,-1).applyQuaternion(he.quaternion);const d=fi.y;D.speed-=d*sn.speedFromPitch*n,D.speed-=sn.drag*n,D.brakeAmount>.01&&(D.speed-=D.brakeAmount*Nl.force*n);const f=Vy(he.position.x,he.position.y,he.position.z);D.speed+=f*.13*n,D.inThermal=f>.5;const m=sn.maxSpeed+e.speedBonus;e.accelBonus>0&&D.speed<m&&(D.speed=Math.min(m,D.speed+e.accelBonus*n)),D.speed=Math.max(sn.minSpeed,Math.min(m,D.speed));const v=he.position.x,y=he.position.z;he.position.addScaledVector(fi,D.speed*n);const p=sn.sinkRate*(1+o*sn.stallSink);if(he.position.y-=p*n,he.position.y+=f*n,!D.tutorial){const b=he.position.x-v,R=he.position.z-y;Du(Math.sqrt(b*b+R*R))}const h=Ae.size/2-30;if(he.position.x>h&&(he.position.x=h),he.position.x<-h&&(he.position.x=-h),he.position.z>h&&(he.position.z=h),he.position.z<-h&&(he.position.z=-h),D.postLiftCooldown>0){D.postLiftCooldown-=n;return}if(!D.tutorial){jN(he.position);const b=Math.atan2(-fi.x,-fi.z),R=I1(he.position,b);if(R){D.flightState=De.LANDING_ROLL,D.currentRunway=R,he.position.y=R.elevation+.22;return}}const _=N1(he.position);if(_&&he.position.y-_.elevation<co.rollingHeight){Pl();return}const g=Rt(he.position.x,he.position.z);(he.position.y<Math.max(g+.4,Ae.waterLevel+.4)||rN(he.position.x,he.position.y,he.position.z))&&Pl()}function ZN(n){const e=D.currentRunway;D.speed=Math.max(0,D.speed-co.brakeForce*n);const t=Yu(e.activeHeading),i=he.position.x,s=he.position.z;he.position.x+=t.x*D.speed*n,he.position.z+=t.z*D.speed*n,he.position.y=e.elevation+.22;const o=he.position.x-i,r=he.position.z-s;Du(Math.sqrt(o*o+r*r)),W0.set(0,e.activeHeading,0),V0.setFromEuler(W0),he.quaternion.slerp(V0,.22);const a=he.position.x-e.x,c=he.position.z-e.z,l=a*Math.sin(e.heading)+c*Math.cos(e.heading);if(Math.abs(l)>e.length*.5){Pl();return}D.speed<co.landingSpeed&&KN(e)}function KN(n){D.speed=0,D.flightState=De.LANDED,D.landedToastTimer=Rv.toastDuration,D.cinematicT=0,D.cinematicFromPos=he.position.clone(),D.cinematicFromQuat=he.quaternion.clone();const e=n.activeHeading,t=Yu(e,new I);D.cinematicToPos=new I(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),D.cinematicToQuat=new Ct().setFromEuler(new $n(0,e,0)),j.landings+=1;const i=VR(n.id),s=Math.round(co.landingBonus*Er());Du(s),j.checkpointRunwayId=n.id,Fy(n);const o=!j.landedRunways[n.id],r=Object.keys(j.landedRunways).some(a=>a!==ci&&j.landedRunways[a]);j.landedRunways[n.id]=!0,j.discoveredRunways[n.id]=!0,D.runAirports[n.id]=!0,D.sessionLandings+=1,D.sessionLandings>j.bestSessionLandings&&(j.bestSessionLandings=D.sessionLandings),t_(),Pt(),sc(),_N(n,s,i),o&&n.id!==ci&&(D.pendingAirportUnlock={id:n.id,full:!r})}function JN(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function QN(n){if(D.landedToastTimer>0){D.landedToastTimer-=n;return}if(D.cinematicT+=n/Rv.tweenDuration,D.currentRunway,D.cinematicT>=1){he.position.copy(D.cinematicToPos),he.quaternion.copy(D.cinematicToQuat),D.cinematicT=0,D.cinematicFromPos=null,D.cinematicToPos=null,D.cinematicFromQuat=null,D.cinematicToQuat=null,D.flightState=De.PRELAUNCH,Nf(),ku(),Xu(),D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,ju(),Jx(),D.pendingAirportUnlock&&(MN(D.pendingAirportUnlock.id,D.pendingAirportUnlock.full),D.pendingAirportUnlock=null);return}const e=JN(D.cinematicT);he.position.lerpVectors(D.cinematicFromPos,D.cinematicToPos,e),he.quaternion.copy(D.cinematicFromQuat)}function eD(n){if(D.alive&&!D.paused)switch(D.flightState){case De.INTRO:return WN(n);case De.PRELAUNCH:return qN(n);case De.TAKEOFF_ROLL:return XN(n);case De.FLYING:return YN(n);case De.LANDING_ROLL:return ZN(n);case De.LANDED:return QN(n);case De.CRASHING:return zN(n);case De.CRASHED:return}}const tD=Ot;class _u extends Kf{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const o=this,r=new S1(o.manager);r.setPath(o.path),r.setRequestHeader(o.requestHeader),r.setWithCredentials(o.withCredentials),r.load(e,function(a){try{t(o.parse(a))}catch(c){s?s(c):console.error(c),o.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(k,N){if(k.nodeType!==1)return;const L=b(k);let T=!1,ee=null;switch(k.nodeName){case"svg":N=v(k,N);break;case"style":o(k);break;case"g":N=v(k,N);break;case"path":N=v(k,N),k.hasAttribute("d")&&(ee=s(k));break;case"rect":N=v(k,N),ee=c(k);break;case"polygon":N=v(k,N),ee=l(k);break;case"polyline":N=v(k,N),ee=u(k);break;case"circle":N=v(k,N),ee=d(k);break;case"ellipse":N=v(k,N),ee=f(k);break;case"line":N=v(k,N),ee=m(k);break;case"defs":T=!0;break;case"use":N=v(k,N);const de=(k.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=k.viewportElement.getElementById(de);P?i(P,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}ee&&(N.fill!==void 0&&N.fill!=="none"&&ee.color.setStyle(N.fill,tD),E(ee,ue),W.push(ee),ee.userData={node:k,style:N});const ce=k.childNodes;for(let X=0;X<ce.length;X++){const de=ce[X];T&&de.nodeName!=="style"&&de.nodeName!=="defs"||i(de,N)}L&&(O.pop(),O.length>0?ue.copy(O[O.length-1]):ue.identity())}function s(k){const N=new Is,L=new pe,T=new pe,ee=new pe;let ce=!0,X=!1;const de=k.getAttribute("d");if(de===""||de==="none")return null;const P=de.match(/[a-df-z][^a-df-z]*/ig);for(let ne=0,B=P.length;ne<B;ne++){const Z=P[ne],$=Z.charAt(0),fe=Z.slice(1).trim();ce===!0&&(X=!0,ce=!1);let F;switch($){case"M":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x=F[x+0],L.y=F[x+1],T.x=L.x,T.y=L.y,x===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),x===0&&ee.copy(L);break;case"H":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.x=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"V":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.y=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"L":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x=F[x+0],L.y=F[x+1],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"C":F=p(fe);for(let x=0,S=F.length;x<S;x+=6)N.bezierCurveTo(F[x+0],F[x+1],F[x+2],F[x+3],F[x+4],F[x+5]),T.x=F[x+2],T.y=F[x+3],L.x=F[x+4],L.y=F[x+5],x===0&&X===!0&&ee.copy(L);break;case"S":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.bezierCurveTo(y(L.x,T.x),y(L.y,T.y),F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],L.x=F[x+2],L.y=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"Q":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.quadraticCurveTo(F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],L.x=F[x+2],L.y=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"T":F=p(fe);for(let x=0,S=F.length;x<S;x+=2){const H=y(L.x,T.x),me=y(L.y,T.y);N.quadraticCurveTo(H,me,F[x+0],F[x+1]),T.x=H,T.y=me,L.x=F[x+0],L.y=F[x+1],x===0&&X===!0&&ee.copy(L)}break;case"A":F=p(fe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==L.x&&F[x+6]==L.y)continue;const H=L.clone();L.x=F[x+5],L.y=F[x+6],T.x=L.x,T.y=L.y,r(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],H,L),x===0&&X===!0&&ee.copy(L)}break;case"m":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x+=F[x+0],L.y+=F[x+1],T.x=L.x,T.y=L.y,x===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),x===0&&ee.copy(L);break;case"h":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.x+=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"v":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.y+=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"l":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x+=F[x+0],L.y+=F[x+1],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"c":F=p(fe);for(let x=0,S=F.length;x<S;x+=6)N.bezierCurveTo(L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3],L.x+F[x+4],L.y+F[x+5]),T.x=L.x+F[x+2],T.y=L.y+F[x+3],L.x+=F[x+4],L.y+=F[x+5],x===0&&X===!0&&ee.copy(L);break;case"s":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.bezierCurveTo(y(L.x,T.x),y(L.y,T.y),L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3]),T.x=L.x+F[x+0],T.y=L.y+F[x+1],L.x+=F[x+2],L.y+=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"q":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.quadraticCurveTo(L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3]),T.x=L.x+F[x+0],T.y=L.y+F[x+1],L.x+=F[x+2],L.y+=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"t":F=p(fe);for(let x=0,S=F.length;x<S;x+=2){const H=y(L.x,T.x),me=y(L.y,T.y);N.quadraticCurveTo(H,me,L.x+F[x+0],L.y+F[x+1]),T.x=H,T.y=me,L.x=L.x+F[x+0],L.y=L.y+F[x+1],x===0&&X===!0&&ee.copy(L)}break;case"a":F=p(fe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==0&&F[x+6]==0)continue;const H=L.clone();L.x+=F[x+5],L.y+=F[x+6],T.x=L.x,T.y=L.y,r(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],H,L),x===0&&X===!0&&ee.copy(L)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(L.copy(ee),N.currentPath.currentPoint.copy(L),ce=!0);break;default:console.warn(Z)}X=!1}return N}function o(k){if(!(!k.sheet||!k.sheet.cssRules||!k.sheet.cssRules.length))for(let N=0;N<k.sheet.cssRules.length;N++){const L=k.sheet.cssRules[N];if(L.type!==1)continue;const T=L.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<T.length;ee++){const ce=Object.fromEntries(Object.entries(L.style).filter(([,X])=>X!==""));oe[T[ee]]=Object.assign(oe[T[ee]]||{},ce)}}}function r(k,N,L,T,ee,ce,X,de){if(N==0||L==0){k.lineTo(de.x,de.y);return}T=T*Math.PI/180,N=Math.abs(N),L=Math.abs(L);const P=(X.x-de.x)/2,ne=(X.y-de.y)/2,B=Math.cos(T)*P+Math.sin(T)*ne,Z=-Math.sin(T)*P+Math.cos(T)*ne;let $=N*N,fe=L*L;const F=B*B,x=Z*Z,S=F/$+x/fe;if(S>1){const ve=Math.sqrt(S);N=ve*N,L=ve*L,$=N*N,fe=L*L}const H=$*x+fe*F,me=($*fe-H)/H;let ge=Math.sqrt(Math.max(0,me));ee===ce&&(ge=-ge);const le=ge*N*Z/L,Te=-ge*L*B/N,_e=Math.cos(T)*le-Math.sin(T)*Te+(X.x+de.x)/2,Re=Math.sin(T)*le+Math.cos(T)*Te+(X.y+de.y)/2,Ie=a(1,0,(B-le)/N,(Z-Te)/L),Fe=a((B-le)/N,(Z-Te)/L,(-B-le)/N,(-Z-Te)/L)%(Math.PI*2);k.currentPath.absellipse(_e,Re,N,L,Ie,Ie+Fe,ce===0,T)}function a(k,N,L,T){const ee=k*L+N*T,ce=Math.sqrt(k*k+N*N)*Math.sqrt(L*L+T*T);let X=Math.acos(Math.max(-1,Math.min(1,ee/ce)));return k*T-N*L<0&&(X=-X),X}function c(k){const N=g(k.getAttribute("x")||0),L=g(k.getAttribute("y")||0),T=g(k.getAttribute("rx")||k.getAttribute("ry")||0),ee=g(k.getAttribute("ry")||k.getAttribute("rx")||0),ce=g(k.getAttribute("width")),X=g(k.getAttribute("height")),de=1-.551915024494,P=new Is;return P.moveTo(N+T,L),P.lineTo(N+ce-T,L),(T!==0||ee!==0)&&P.bezierCurveTo(N+ce-T*de,L,N+ce,L+ee*de,N+ce,L+ee),P.lineTo(N+ce,L+X-ee),(T!==0||ee!==0)&&P.bezierCurveTo(N+ce,L+X-ee*de,N+ce-T*de,L+X,N+ce-T,L+X),P.lineTo(N+T,L+X),(T!==0||ee!==0)&&P.bezierCurveTo(N+T*de,L+X,N,L+X-ee*de,N,L+X-ee),P.lineTo(N,L+ee),(T!==0||ee!==0)&&P.bezierCurveTo(N,L+ee*de,N+T*de,L,N+T,L),P}function l(k){function N(ce,X,de){const P=g(X),ne=g(de);ee===0?T.moveTo(P,ne):T.lineTo(P,ne),ee++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Is;let ee=0;return k.getAttribute("points").replace(L,N),T.currentPath.autoClose=!0,T}function u(k){function N(ce,X,de){const P=g(X),ne=g(de);ee===0?T.moveTo(P,ne):T.lineTo(P,ne),ee++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Is;let ee=0;return k.getAttribute("points").replace(L,N),T.currentPath.autoClose=!1,T}function d(k){const N=g(k.getAttribute("cx")||0),L=g(k.getAttribute("cy")||0),T=g(k.getAttribute("r")||0),ee=new ur;ee.absarc(N,L,T,0,Math.PI*2);const ce=new Is;return ce.subPaths.push(ee),ce}function f(k){const N=g(k.getAttribute("cx")||0),L=g(k.getAttribute("cy")||0),T=g(k.getAttribute("rx")||0),ee=g(k.getAttribute("ry")||0),ce=new ur;ce.absellipse(N,L,T,ee,0,Math.PI*2);const X=new Is;return X.subPaths.push(ce),X}function m(k){const N=g(k.getAttribute("x1")||0),L=g(k.getAttribute("y1")||0),T=g(k.getAttribute("x2")||0),ee=g(k.getAttribute("y2")||0),ce=new Is;return ce.moveTo(N,L),ce.lineTo(T,ee),ce.currentPath.autoClose=!1,ce}function v(k,N){N=Object.assign({},N);let L={};if(k.hasAttribute("class")){const X=k.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<X.length;de++)L=Object.assign(L,oe["."+X[de]])}k.hasAttribute("id")&&(L=Object.assign(L,oe["#"+k.getAttribute("id")]));function T(X,de,P){P===void 0&&(P=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),k.hasAttribute(X)&&(N[de]=P(k.getAttribute(X))),L[X]&&(N[de]=P(L[X])),k.style&&k.style[X]!==""&&(N[de]=P(k.style[X]))}function ee(X){return Math.max(0,Math.min(1,g(X)))}function ce(X){return Math.max(0,g(X))}return T("fill","fill"),T("fill-opacity","fillOpacity",ee),T("fill-rule","fillRule"),T("opacity","opacity",ee),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",ee),T("stroke-width","strokeWidth",ce),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",ce),T("visibility","visibility"),N}function y(k,N){return k-(N-k)}function p(k,N,L){if(typeof k!="string")throw new TypeError("Invalid input: "+typeof k);const T={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,ce=1,X=2,de=3;let P=ee,ne=!0,B="",Z="";const $=[];function fe(H,me,ge){const le=new SyntaxError('Unexpected character "'+H+'" at index '+me+".");throw le.partial=ge,le}function F(){B!==""&&(Z===""?$.push(Number(B)):$.push(Number(B)*Math.pow(10,Number(Z)))),B="",Z=""}let x;const S=k.length;for(let H=0;H<S;H++){if(x=k[H],Array.isArray(N)&&N.includes($.length%L)&&T.FLAGS.test(x)){P=ce,B=x,F();continue}if(P===ee){if(T.WHITESPACE.test(x))continue;if(T.DIGIT.test(x)||T.SIGN.test(x)){P=ce,B=x;continue}if(T.POINT.test(x)){P=X,B=x;continue}T.COMMA.test(x)&&(ne&&fe(x,H,$),ne=!0)}if(P===ce){if(T.DIGIT.test(x)){B+=x;continue}if(T.POINT.test(x)){B+=x,P=X;continue}if(T.EXP.test(x)){P=de;continue}T.SIGN.test(x)&&B.length===1&&T.SIGN.test(B[0])&&fe(x,H,$)}if(P===X){if(T.DIGIT.test(x)){B+=x;continue}if(T.EXP.test(x)){P=de;continue}T.POINT.test(x)&&B[B.length-1]==="."&&fe(x,H,$)}if(P===de){if(T.DIGIT.test(x)){Z+=x;continue}if(T.SIGN.test(x)){if(Z===""){Z+=x;continue}Z.length===1&&T.SIGN.test(Z)&&fe(x,H,$)}}T.WHITESPACE.test(x)?(F(),P=ee,ne=!1):T.COMMA.test(x)?(F(),P=ee,ne=!0):T.SIGN.test(x)?(F(),P=ce,B=x):T.POINT.test(x)?(F(),P=X,B=x):fe(x,H,$)}return F(),$}const h=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(k){let N="px";if(typeof k=="string"||k instanceof String)for(let T=0,ee=h.length;T<ee;T++){const ce=h[T];if(k.endsWith(ce)){N=ce,k=k.substring(0,k.length-ce.length);break}}let L;return N==="px"&&t.defaultUnit!=="px"?L=_.in[t.defaultUnit]/t.defaultDPI:(L=_[N][t.defaultUnit],L<0&&(L=_[N].in*t.defaultDPI)),L*parseFloat(k)}function b(k){if(!(k.hasAttribute("transform")||k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))))return null;const N=R(k);return O.length>0&&N.premultiply(O[O.length-1]),ue.copy(N),O.push(N),N}function R(k){const N=new Ge,L=q;if(k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))){const T=g(k.getAttribute("x")),ee=g(k.getAttribute("y"));N.translate(T,ee)}if(k.hasAttribute("transform")){const T=k.getAttribute("transform").split(")");for(let ee=T.length-1;ee>=0;ee--){const ce=T[ee].trim();if(ce==="")continue;const X=ce.indexOf("("),de=ce.length;if(X>0&&X<de){const P=ce.slice(0,X),ne=p(ce.slice(X+1));switch(L.identity(),P){case"translate":if(ne.length>=1){const B=ne[0];let Z=0;ne.length>=2&&(Z=ne[1]),L.translate(B,Z)}break;case"rotate":if(ne.length>=1){let B=0,Z=0,$=0;B=ne[0]*Math.PI/180,ne.length>=3&&(Z=ne[1],$=ne[2]),Y.makeTranslation(-Z,-$),K.makeRotation(B),z.multiplyMatrices(K,Y),Y.makeTranslation(Z,$),L.multiplyMatrices(Y,z)}break;case"scale":if(ne.length>=1){const B=ne[0];let Z=B;ne.length>=2&&(Z=ne[1]),L.scale(B,Z)}break;case"skewX":ne.length===1&&L.set(1,Math.tan(ne[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ne.length===1&&L.set(1,0,0,Math.tan(ne[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ne.length===6&&L.set(ne[0],ne[2],ne[4],ne[1],ne[3],ne[5],0,0,1);break}}N.premultiply(L)}}return N}function E(k,N){function L(X){ae.set(X.x,X.y,1).applyMatrix3(N),X.set(ae.x,ae.y)}function T(X){const de=X.xRadius,P=X.yRadius,ne=Math.cos(X.aRotation),B=Math.sin(X.aRotation),Z=new I(de*ne,de*B,0),$=new I(-P*B,P*ne,0),fe=Z.applyMatrix3(N),F=$.applyMatrix3(N),x=q.set(fe.x,F.x,0,fe.y,F.y,0,0,0,1),S=Y.copy(x).invert(),ge=K.copy(S).transpose().multiply(S).elements,le=V(ge[0],ge[1],ge[4]),Te=Math.sqrt(le.rt1),_e=Math.sqrt(le.rt2);if(X.xRadius=1/Te,X.yRadius=1/_e,X.aRotation=Math.atan2(le.sn,le.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ie=Y.set(Te,0,0,0,_e,0,0,0,1),Fe=K.set(le.cs,le.sn,0,-le.sn,le.cs,0,0,0,1),ve=Ie.multiply(Fe).multiply(x),Je=We=>{const{x:Be,y:Ne}=new I(Math.cos(We),Math.sin(We),0).applyMatrix3(ve);return Math.atan2(Ne,Be)};X.aStartAngle=Je(X.aStartAngle),X.aEndAngle=Je(X.aEndAngle),A(N)&&(X.aClockwise=!X.aClockwise)}}function ee(X){const de=M(N),P=w(N);X.xRadius*=de,X.yRadius*=P;const ne=de>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);X.aRotation+=ne,A(N)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ce=k.subPaths;for(let X=0,de=ce.length;X<de;X++){const ne=ce[X].curves;for(let B=0;B<ne.length;B++){const Z=ne[B];Z.isLineCurve?(L(Z.v1),L(Z.v2)):Z.isCubicBezierCurve?(L(Z.v0),L(Z.v1),L(Z.v2),L(Z.v3)):Z.isQuadraticBezierCurve?(L(Z.v0),L(Z.v1),L(Z.v2)):Z.isEllipseCurve&&(Q.set(Z.aX,Z.aY),L(Q),Z.aX=Q.x,Z.aY=Q.y,U(N)?T(Z):ee(Z))}}}function A(k){const N=k.elements;return N[0]*N[4]-N[1]*N[3]<0}function U(k){const N=k.elements,L=N[0]*N[3]+N[1]*N[4];if(L===0)return!1;const T=M(k),ee=w(k);return Math.abs(L/(T*ee))>Number.EPSILON}function M(k){const N=k.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function w(k){const N=k.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function V(k,N,L){let T,ee,ce,X,de;const P=k+L,ne=k-L,B=Math.sqrt(ne*ne+4*N*N);return P>0?(T=.5*(P+B),de=1/T,ee=k*de*L-N*de*N):P<0?ee=.5*(P-B):(T=.5*B,ee=-.5*B),ne>0?ce=ne+B:ce=ne-B,Math.abs(ce)>2*Math.abs(N)?(de=-2*N/ce,X=1/Math.sqrt(1+de*de),ce=de*X):Math.abs(N)===0?(ce=1,X=0):(de=-.5*ce/N,ce=1/Math.sqrt(1+de*de),X=de*ce),ne>0&&(de=ce,ce=-X,X=de),{rt1:T,rt2:ee,cs:ce,sn:X}}const W=[],oe={},O=[],q=new Ge,Y=new Ge,K=new Ge,z=new Ge,Q=new pe,ae=new I,ue=new Ge,ye=new DOMParser().parseFromString(e,"image/svg+xml");return i(ye.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:ye.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function o(y,p,h,_){const g=y.x,b=p.x,R=h.x,E=_.x,A=y.y,U=p.y,M=h.y,w=_.y,V=(E-R)*(A-M)-(w-M)*(g-R),W=(b-g)*(A-M)-(U-A)*(g-R),oe=(w-M)*(b-g)-(E-R)*(U-A),O=V/oe,q=W/oe;if(oe===0&&V!==0||O<=0||O>=1||q<0||q>1)return null;if(V===0&&oe===0){for(let Y=0;Y<2;Y++)if(r(Y===0?h:_,y,p),s.loc==i.ORIGIN){const K=Y===0?h:_;return{x:K.x,y:K.y,t:s.t}}else if(s.loc==i.BETWEEN){const K=+(g+s.t*(b-g)).toPrecision(10),z=+(A+s.t*(U-A)).toPrecision(10);return{x:K,y:z,t:s.t}}return null}else{for(let z=0;z<2;z++)if(r(z===0?h:_,y,p),s.loc==i.ORIGIN){const Q=z===0?h:_;return{x:Q.x,y:Q.y,t:s.t}}const Y=+(g+O*(b-g)).toPrecision(10),K=+(A+O*(U-A)).toPrecision(10);return{x:Y,y:K,t:O}}}function r(y,p,h){const _=h.x-p.x,g=h.y-p.y,b=y.x-p.x,R=y.y-p.y,E=_*R-b*g;if(y.x===p.x&&y.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(y.x===h.x&&y.y===h.y){s.loc=i.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=i.LEFT;return}if(E>Number.EPSILON){s.loc=i.RIGHT;return}if(_*b<0||g*R<0){s.loc=i.BEHIND;return}if(Math.sqrt(_*_+g*g)<Math.sqrt(b*b+R*R)){s.loc=i.BEYOND;return}let A;_!==0?A=b/_:A=R/g,s.loc=i.BETWEEN,s.t=A}function a(y,p){const h=[],_=[];for(let g=1;g<y.length;g++){const b=y[g-1],R=y[g];for(let E=1;E<p.length;E++){const A=p[E-1],U=p[E],M=o(b,R,A,U);M!==null&&h.find(w=>w.t<=M.t+Number.EPSILON&&w.t>=M.t-Number.EPSILON)===void 0&&(h.push(M),_.push(new pe(M.x,M.y)))}}return _}function c(y,p,h){const _=new pe;p.getCenter(_);const g=[];return h.forEach(b=>{b.boundingBox.containsPoint(_)&&a(y,b.points).forEach(E=>{g.push({identifier:b.identifier,isCW:b.isCW,point:E})})}),g.sort((b,R)=>b.point.x-R.point.x),g}function l(y,p,h,_,g){(g==null||g==="")&&(g="nonzero");const b=new pe;y.boundingBox.getCenter(b);const R=[new pe(h,b.y),new pe(_,b.y)],E=c(R,y.boundingBox,p);E.sort((W,oe)=>W.point.x-oe.point.x);const A=[],U=[];E.forEach(W=>{W.identifier===y.identifier?A.push(W):U.push(W)});const M=A[0].point.x,w=[];let V=0;for(;V<U.length&&U[V].point.x<M;)w.length>0&&w[w.length-1]===U[V].identifier?w.pop():w.push(U[V].identifier),V++;if(w.push(y.identifier),g==="evenodd"){const W=w.length%2===0,oe=w[w.length-2];return{identifier:y.identifier,isHole:W,for:oe}}else if(g==="nonzero"){let W=!0,oe=null,O=null;for(let q=0;q<w.length;q++){const Y=w[q];W?(O=p[Y].isCW,W=!1,oe=Y):O!==p[Y].isCW&&(O=p[Y].isCW,W=!0)}return{identifier:y.identifier,isHole:W,for:oe}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,d=-999999999,f=e.subPaths.map(y=>{const p=y.getPoints();let h=-999999999,_=999999999,g=-999999999,b=999999999;for(let R=0;R<p.length;R++){const E=p[R];E.y>h&&(h=E.y),E.y<_&&(_=E.y),E.x>g&&(g=E.x),E.x<b&&(b=E.x)}return d<=g&&(d=g+1),u>=b&&(u=b-1),{curves:y.curves,points:p,isCW:wi.isClockWise(p),identifier:-1,boundingBox:new T1(new pe(b,_),new pe(g,h))}});f=f.filter(y=>y.points.length>1);for(let y=0;y<f.length;y++)f[y].identifier=y;const m=f.map(y=>l(y,f,u,d,e.userData?e.userData.style.fillRule:void 0)),v=[];return f.forEach(y=>{if(!m[y.identifier].isHole){const h=new io;h.curves=y.curves,m.filter(g=>g.isHole&&g.for===y.identifier).forEach(g=>{const b=f[g.identifier],R=new ur;R.curves=b.curves,h.holes.push(R)}),v.push(h)}}),v}static getStrokeStyle(e,t,i,s,o){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",o=o!==void 0?o:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:o}}static pointsToStroke(e,t,i,s){const o=[],r=[],a=[];if(_u.pointsToStrokeWithBuffers(e,t,i,s,o,r,a)===0)return null;const c=new gt;return c.setAttribute("position",new Qe(o,3)),c.setAttribute("normal",new Qe(r,3)),c.setAttribute("uv",new Qe(a,2)),c}static pointsToStrokeWithBuffers(e,t,i,s,o,r,a,c){const l=new pe,u=new pe,d=new pe,f=new pe,m=new pe,v=new pe,y=new pe,p=new pe,h=new pe,_=new pe,g=new pe,b=new pe,R=new pe,E=new pe,A=new pe,U=new pe,M=new pe;i=i!==void 0?i:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=ne(e);const w=e.length;if(w<2)return 0;const V=e[0].equals(e[w-1]);let W,oe=e[0],O;const q=t.strokeWidth/2,Y=1/(w-1);let K=0,z,Q,ae,ue,ye=!1,te=0,k=c*3,N=c*2;L(e[0],e[1],l).multiplyScalar(q),p.copy(e[0]).sub(l),h.copy(e[0]).add(l),_.copy(p),g.copy(h);for(let B=1;B<w;B++){W=e[B],B===w-1?V?O=e[1]:O=void 0:O=e[B+1];const Z=l;if(L(oe,W,Z),d.copy(Z).multiplyScalar(q),b.copy(W).sub(d),R.copy(W).add(d),z=K+Y,Q=!1,O!==void 0){L(W,O,u),d.copy(u).multiplyScalar(q),E.copy(W).sub(d),A.copy(W).add(d),ae=!0,d.subVectors(O,oe),Z.dot(d)<0&&(ae=!1),B===1&&(ye=ae),d.subVectors(O,W),d.normalize();const $=Math.abs(Z.dot(d));if($>Number.EPSILON){const fe=q/$;d.multiplyScalar(-fe),f.subVectors(W,oe),m.copy(f).setLength(fe).add(d),U.copy(m).negate();const F=m.length(),x=f.length();f.divideScalar(x),v.subVectors(O,W);const S=v.length();switch(v.divideScalar(S),f.dot(U)<x&&v.dot(U)<S&&(Q=!0),M.copy(m).add(W),U.add(W),ue=!1,Q?ae?(A.copy(U),R.copy(U)):(E.copy(U),b.copy(U)):ce(),t.strokeLineJoin){case"bevel":X(ae,Q,z);break;case"round":de(ae,Q),ae?ee(W,b,E,z,0):ee(W,A,R,z,1);break;case"miter":case"miter-clip":default:const H=q*t.strokeMiterLimit/F;if(H<1)if(t.strokeLineJoin!=="miter-clip"){X(ae,Q,z);break}else de(ae,Q),ae?(v.subVectors(M,b).multiplyScalar(H).add(b),y.subVectors(M,E).multiplyScalar(H).add(E),T(b,z,0),T(v,z,0),T(W,z,.5),T(W,z,.5),T(v,z,0),T(y,z,0),T(W,z,.5),T(y,z,0),T(E,z,0)):(v.subVectors(M,R).multiplyScalar(H).add(R),y.subVectors(M,A).multiplyScalar(H).add(A),T(R,z,1),T(v,z,1),T(W,z,.5),T(W,z,.5),T(v,z,1),T(y,z,1),T(W,z,.5),T(y,z,1),T(A,z,1));else Q?(ae?(T(h,K,1),T(p,K,0),T(M,z,0),T(h,K,1),T(M,z,0),T(U,z,1)):(T(h,K,1),T(p,K,0),T(M,z,1),T(p,K,0),T(U,z,0),T(M,z,1)),ae?E.copy(M):A.copy(M)):ae?(T(b,z,0),T(M,z,0),T(W,z,.5),T(W,z,.5),T(M,z,0),T(E,z,0)):(T(R,z,1),T(M,z,1),T(W,z,.5),T(W,z,.5),T(M,z,1),T(A,z,1)),ue=!0;break}}else ce()}else ce();!V&&B===w-1&&P(e[0],_,g,ae,!0,K),K=z,oe=W,p.copy(E),h.copy(A)}if(!V)P(W,b,R,ae,!1,z);else if(Q&&o){let B=M,Z=U;ye!==ae&&(B=U,Z=M),ae?(ue||ye)&&(Z.toArray(o,0*3),Z.toArray(o,3*3),ue&&B.toArray(o,1*3)):(ue||!ye)&&(Z.toArray(o,1*3),Z.toArray(o,3*3),ue&&B.toArray(o,0*3))}return te;function L(B,Z,$){return $.subVectors(Z,B),$.set(-$.y,$.x).normalize()}function T(B,Z,$){o&&(o[k]=B.x,o[k+1]=B.y,o[k+2]=0,r&&(r[k]=0,r[k+1]=0,r[k+2]=1),k+=3,a&&(a[N]=Z,a[N+1]=$,N+=2)),te+=3}function ee(B,Z,$,fe,F){l.copy(Z).sub(B).normalize(),u.copy($).sub(B).normalize();let x=Math.PI;const S=l.dot(u);Math.abs(S)<1&&(x=Math.abs(Math.acos(S))),x/=i,d.copy(Z);for(let H=0,me=i-1;H<me;H++)f.copy(d).rotateAround(B,x),T(d,fe,F),T(f,fe,F),T(B,fe,.5),d.copy(f);T(f,fe,F),T($,fe,F),T(B,fe,.5)}function ce(){T(h,K,1),T(p,K,0),T(b,z,0),T(h,K,1),T(b,z,1),T(R,z,0)}function X(B,Z,$){Z?B?(T(h,K,1),T(p,K,0),T(b,z,0),T(h,K,1),T(b,z,0),T(U,z,1),T(b,$,0),T(E,$,0),T(U,$,.5)):(T(h,K,1),T(p,K,0),T(R,z,1),T(p,K,0),T(U,z,0),T(R,z,1),T(R,$,1),T(U,$,0),T(A,$,1)):B?(T(b,$,0),T(E,$,0),T(W,$,.5)):(T(R,$,1),T(A,$,0),T(W,$,.5))}function de(B,Z){Z&&(B?(T(h,K,1),T(p,K,0),T(b,z,0),T(h,K,1),T(b,z,0),T(U,z,1),T(b,K,0),T(W,z,.5),T(U,z,1),T(W,z,.5),T(E,K,0),T(U,z,1)):(T(h,K,1),T(p,K,0),T(R,z,1),T(p,K,0),T(U,z,0),T(R,z,1),T(R,K,1),T(U,z,0),T(W,z,.5),T(W,z,.5),T(U,z,0),T(A,K,1)))}function P(B,Z,$,fe,F,x){switch(t.strokeLineCap){case"round":F?ee(B,$,Z,x,.5):ee(B,Z,$,x,.5);break;case"square":if(F)l.subVectors(Z,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B),fe?(d.toArray(o,1*3),f.toArray(o,0*3),f.toArray(o,3*3)):(d.toArray(o,1*3),d.toArray(o,3*3),f.toArray(o,0*3));else{l.subVectors($,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B);const S=o.length;fe?(d.toArray(o,S-1*3),f.toArray(o,S-2*3),f.toArray(o,S-4*3)):(f.toArray(o,S-2*3),d.toArray(o,S-1*3),f.toArray(o,S-4*3))}break}}function ne(B){let Z=!1;for(let fe=1,F=B.length-1;fe<F;fe++)if(B[fe].distanceTo(B[fe+1])<s){Z=!0;break}if(!Z)return B;const $=[];$.push(B[0]);for(let fe=1,F=B.length-1;fe<F;fe++)B[fe].distanceTo(B[fe+1])>=s&&$.push(B[fe]);return $.push(B[B.length-1]),$}}}const nD={[dc.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[dc.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[dc.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[dc.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},i_=[];let Zs=null,Ws=null,Mf=null;function s_(n){Mf&&(Mf.visible=!!n)}const Ks=new Ke,rl=new Ct,j0=new I,Y0=new I(1,1,1),Z0=new I(0,1,0),or=new Ee;function iD(){return new Vu(bt.ring.majorRadius,bt.ring.tubeRadius,10,48)}const o_={};function sD(){const n=new _u,e=bt.symbol.size/960,t=bt.symbol.extrudeDepth/e;for(const[i,s]of Object.entries(nD)){const o=n.parse(s),r=[];for(const c of o.paths)r.push(..._u.createShapes(c));const a=new Yf(r,{depth:t,bevelEnabled:!1});a.scale(1,-1,1),a.center(),a.scale(e,e,e),o_[i]=a}}function oD(n,e,t){let i=-1/0;for(let s=-t;s<=t;s+=.5)for(let o=-t;o<=t;o+=.5){if(s*s+o*o>t*t)continue;const r=Rt(n+s,e+o);r>i&&(i=r)}return i}function rD(n,e){const t=bt.ring;let i=null,s=null;e:for(let d=1;d<=t.coastSnapMaxRadius;d+=1){const f=Math.max(8,Math.round(d*8));for(let m=0;m<f;m++){const v=m/f*Math.PI*2,y=n+Math.cos(v)*d,p=e+Math.sin(v)*d;if(Rt(y,p)>=Ae.waterLevel){i=y,s=p;break e}}}if(i===null)return{x:n,z:e};let o=n-i,r=e-s;const a=Math.hypot(o,r)||1;o/=a,r/=a;let c=i+o*t.coastSeawardOffset,l=s+r*t.coastSeawardOffset;const u=Ae.waterLevel+t.coastRingHeight-t.majorRadius;for(let d=0;d<8&&oD(c,l,t.majorRadius+.5)>u;d++)c+=o*1.5,l+=r*1.5;return{x:c,z:l}}function aD(n,e){const t=bt.ring,i=Rt(n,e);if(i<Ae.waterLevel){const a=rD(n,e);return{x:a.x,z:a.z,y:Ae.waterLevel+t.coastRingHeight}}const s=t.terrainSearchRadius;let o=-1/0;for(let a=-s;a<=s;a+=1)for(let c=-s;c<=s;c+=1){if(a*a+c*c>s*s)continue;const l=Ur(n+a,e+c);l>o&&(o=l)}const r=Math.max(i,o+t.terrainClearance-t.hoverHeight);return{x:n,z:e,y:r+t.hoverHeight}}function cD(){sD();const n=iD(),e=new lt;Mf=e;const t={};for(const r of Fs)t[r.type]=(t[r.type]||0)+1;const i=Fh(new jn({transparent:!0}));Bh(n,Fs.length,bt.ring.opacity);const s=new an(n,i,Fs.length);s.frustumCulled=!1,e.add(s),Zs=s;const o=Fh(new ut({transparent:!0,flatShading:!0,side:Kt}));Ws={};for(const r of Object.keys(t)){const a=o_[r];Bh(a,t[r],.95);const c=new an(a,o,t[r]);c.frustumCulled=!1,e.add(c),Ws[r]={mesh:c,next:0}}for(let r=0;r<Fs.length;r++){const a=Fs[r],c=bt.colorsByType[a.type],{x:l,y:u,z:d}=aD(a.x,a.z),f=Ws[a.type],m=f.next++;Ks.makeTranslation(l,u,d),s.setMatrixAt(r,Ks),f.mesh.setMatrixAt(m,Ks),s.setColorAt(r,or.setHex(c.ring)),f.mesh.setColorAt(m,or.setHex(c.symbol)),i_.push({poi:a,ringIndex:r,symbolMesh:f.mesh,symbolIndex:m,ringAlpha:n.attributes.instanceAlpha.array,symbolAlpha:f.mesh.geometry.attributes.instanceAlpha.array,x:l,y:u,z:d,spin:0,frozen:!1,wasInsideZone:!1,appliedActivated:null})}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0;for(const r of Object.keys(Ws)){const a=Ws[r].mesh;a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0}return e}function lD(n,e){const t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;return t*t+i*i+s*s<=bt.activation.radius*bt.activation.radius}function uD(){const n=W_(Av()),e=j.oneShotTier|0;return n>e?(j.oneShotTier=n,n):0}function dD(n){const e=bt.rewardsByType[n.type];if(j.testMode){O0(n.name,e.punkte,e.gofios,0);return}const t=!!j.exploredPOIs[n.id],i=Math.round(t?e.punkte*bt.revisitPunkteFactor:e.punkte*Er());Du(i),on(t?"ring-recollect":"ring-first");let s=0,o=0;t||(j.exploredPOIs[n.id]=!0,j.gofiosByIsland[n.island]=(j.gofiosByIsland[n.island]|0)+e.gofios,s=e.gofios,o=uD()),O0(n.name,i,s,o),Pt(),sc()}function hD(n,e){if(e)Zs.setColorAt(n.ringIndex,or.setHex(bt.ring.colorActivated)),n.ringAlpha[n.ringIndex]=bt.ring.opacityActivated,n.symbolMesh.setColorAt(n.symbolIndex,or.setHex(bt.symbol.colorActivated)),n.symbolAlpha[n.symbolIndex]=.55;else{const t=bt.colorsByType[n.poi.type];Zs.setColorAt(n.ringIndex,or.setHex(t.ring)),n.ringAlpha[n.ringIndex]=bt.ring.opacity,n.symbolMesh.setColorAt(n.symbolIndex,or.setHex(t.symbol)),n.symbolAlpha[n.symbolIndex]=.95}Zs.instanceColor.needsUpdate=!0,Zs.geometry.attributes.instanceAlpha.needsUpdate=!0,n.symbolMesh.instanceColor.needsUpdate=!0,n.symbolMesh.geometry.attributes.instanceAlpha.needsUpdate=!0,n.frozen=e}function fD(n,e){if(D.tutorial){bf();return}const t=e.position,i=Ev(t);if(i!==j.currentIsland){if(j.currentIsland=i,!j.testMode&&!j.visitedIslands[i]){j.visitedIslands[i]=!0,j.obsidian=(j.obsidian|0)+Dl.islandDiscoveryDiamonds;const r=Lt.find(a=>a.id===i);bN(r?r.name:i,Dl.islandDiscoveryDiamonds)}Pt(),sc()}let s=null,o=bt.hoverLabelRadius*bt.hoverLabelRadius;for(const r of i_){const a=!j.testMode&&!!j.exploredPOIs[r.poi.id];a!==r.appliedActivated&&(hD(r,a),r.appliedActivated=a);const c=Math.atan2(t.x-r.x,t.z-r.z);rl.setFromAxisAngle(Z0,c),Ks.compose(j0.set(r.x,r.y,r.z),rl,Y0),Zs.setMatrixAt(r.ringIndex,Ks),r.frozen||(r.spin+=bt.symbol.rotRate*n),rl.setFromAxisAngle(Z0,c+r.spin),Ks.compose(j0.set(r.x,r.y,r.z),rl,Y0),r.symbolMesh.setMatrixAt(r.symbolIndex,Ks);const l=lD(r,t);if(l&&!r.wasInsideZone&&dD(r.poi),r.wasInsideZone=l,j.exploredPOIs[r.poi.id]){const u=t.x-r.x,d=t.z-r.z,f=u*u+d*d;f<o&&(o=f,s=r.poi)}}Zs.instanceMatrix.needsUpdate=!0;for(const r of Object.keys(Ws))Ws[r].mesh.instanceMatrix.needsUpdate=!0;s?EN(s.name):bf()}const At={LAUNCH:0,NAV:1,RINGS:2,GREY_BOOST:3,THERMAL:4,RING_HIGH:5,RING_LOW:6,END:7},rr=[{key:"tutorial.navLeft",test:n=>n.roll<=-.45,invert:!1},{key:"tutorial.navRight",test:n=>n.roll>=st.navThreshold,invert:!1},{key:"tutorial.navUp",test:n=>n.pitch>=st.navThreshold,invert:!0},{key:"tutorial.navDown",test:n=>n.pitch<=-.45,invert:!0}],Gi=document.getElementById("tutorial-layer"),al=document.getElementById("tutorial-banner"),K0=document.getElementById("tutorial-text"),J0=document.getElementById("tutorial-invert"),Ca=document.getElementById("tutorial-invert-toggle"),Dr=document.getElementById("tutorial-skip"),sa=document.getElementById("tutorial-flash"),Q0=document.getElementById("tutorial-steer-hint"),Wi=document.getElementById("tutorial-end"),ev=document.getElementById("tutorial-end-go");let vo=!1,En=At.LAUNCH,Us=null,Zo=0,ha=0,fa=0,ro=null;const us=new I,vs=new I(0,0,-1),gh=new I(1,0,0),Rp=new I(0,0,-1),vr={pos:new I,quat:new Ct,state:"PRELAUNCH"};let wf="",r_=null,Js=null,mt=[],Ei=null,Pa=null,bu=[];const yr={x:0,z:0,radius:st.thermal.radius,strength:st.thermal.strength,baseElevation:0},dn=new I,tv=new Ct,pD=new I(0,1,0),qs=new I(0,0,-1),qo=new I(0,0,-1),mD=[85,175,300,420,500];function a_(){return 3046806}function gD(){const n=new lt,e=new Vu(3.4,.2,10,40);mt=[];for(let t=0;t<4;t++){const i=new jn({color:a_(),transparent:!0,opacity:.95}),s=new nt(e,i);s.visible=!1,n.add(s),mt.push({mesh:s,mat:i,pos:new I,collected:!1,popT:1,forward:0})}return Ei=vD(),Ei.visible=!1,n.add(Ei),n}function vD(){const n=new lt,e=st.thermal,t=bn.columnTop,i=new jn({color:13625071,transparent:!0,opacity:.18,side:Kt,depthWrite:!1}),s=new Xn(e.radius*1.05,e.radius*.55,t,24,1,!0);s.translate(0,t/2,0),n.add(new nt(s,i));const o=64,r=new Float32Array(o*3);bu=[];for(let l=0;l<o;l++){const u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*e.radius*.82;bu.push({ux:Math.cos(u)*d,uz:Math.sin(u)*d,phase:Math.random()})}const a=new gt;a.setAttribute("position",new Dt(r,3));const c=new Sy({color:16777215,size:1.7,transparent:!0,opacity:.6,depthWrite:!1});return Pa=new My(a,c),n.add(Pa),n}function yD(){Js||(Js=gD()),Js.parent||Mt.add(Js)}function c_(){for(const n of mt)n.mesh.visible=!1;Ei&&(Ei.visible=!1)}function xD(n){let e=-1/0;for(const t of mD){const i=Rt(us.x+n.x*t,us.z+n.z*t);i>e&&(e=i)}return e}function _D(){const n=Ae.waterLevel+st.corridorClearHeight,e=Math.max(1,st.corridorSearchSteps);let t=1/0;vs.copy(qs);for(let i=0;i<=e;i++){if(qo.copy(qs).lerp(Rp,i/e),qo.lengthSq()<1e-4)continue;qo.normalize();const s=xD(qo);if(s<n){vs.copy(qo);return}s<t&&(t=s,vs.copy(qo))}}function bD(){us.copy(he.position),dn.set(0,0,-1).applyQuaternion(he.quaternion),qs.set(dn.x,0,dn.z),qs.lengthSq()<1e-4&&qs.set(0,0,-1),qs.normalize(),qs.addScaledVector(Rp,st.seawardBias).normalize(),_D(),gh.crossVectors(vs,Jh).normalize();const n=us.y,e=[st.ring1,st.ring2,st.ring3,st.ring4];for(let s=0;s<4;s++){const o=e[s];dn.copy(us).addScaledVector(vs,o.forward).addScaledVector(gh,o.side);const r=Rt(dn.x,dn.z),a=Math.max(r,Ae.waterLevel)+st.ringClearance,c=Math.max(n+o.dy,a);mt[s].pos.set(dn.x,c,dn.z),mt[s].mesh.position.copy(mt[s].pos),mt[s].forward=o.forward}const t=st.thermal;dn.copy(us).addScaledVector(vs,t.forward).addScaledVector(gh,t.side);const i=Math.max(Rt(dn.x,dn.z),Ae.waterLevel);yr.x=dn.x,yr.z=dn.z,yr.baseElevation=i,Ei.position.set(dn.x,i,dn.z)}function Lp(){return(he.position.x-us.x)*vs.x+(he.position.z-us.z)*vs.z}function SD(n){for(const e of mt){if(!e.mesh.visible)continue;const t=Math.atan2(he.position.x-e.pos.x,he.position.z-e.pos.z);if(tv.setFromAxisAngle(pD,t),e.mesh.quaternion.copy(tv),e.popT<1){e.popT=Math.min(1,e.popT+n*2.2);const i=1+e.popT*.7;e.mesh.scale.setScalar(i),e.mat.opacity=.95*(1-e.popT),e.popT>=1&&(e.mesh.visible=!1)}}if(Ei&&Ei.visible&&Pa){const e=Pa.geometry.attributes.position.array,t=bn.columnTop;for(let i=0;i<bu.length;i++){const s=bu[i];s.phase+=n*.28,s.phase>=1&&(s.phase-=1),e[i*3]=s.ux,e[i*3+1]=s.phase*t,e[i*3+2]=s.uz}Pa.geometry.attributes.position.needsUpdate=!0}}function ao(n){const e=mt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(a_()),e.mat.opacity=.95,e.mesh.visible=!0}function l_(n){const e=mt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(8293522),e.mat.opacity=.4,e.mesh.visible=!0}function u_(){K0&&(K0.textContent=wf?xe(wf,r_||void 0):"")}function Es(n,e=null){wf=n,r_=e,u_(),al&&(al.classList.remove("step-pop"),al.offsetWidth,al.classList.add("step-pop"))}function Ku(n){J0&&(J0.hidden=!n,n&&Ca&&(Ca.checked=Tx()))}function Ef(n){Q0&&Q0.classList.toggle("show",!!n)}function MD(n){sa&&(sa.textContent=n,sa.classList.remove("show"),sa.offsetWidth,sa.classList.add("show"))}function Eo(n){vr.pos.copy(he.position),vr.quat.copy(he.quaternion),vr.state=n}function wD(){if(vr.state==="PRELAUNCH"){Tp(Us);return}he.position.copy(vr.pos),he.quaternion.copy(vr.quat),D.speed=st.airSpeed,D.flightState=De.FLYING,D.postLiftCooldown=st.resetGrace,D.greyActive=!1,D.oneShotActive=!1,ju()}function Ju(){MD(xe("tutorial.retry")),En===At.RINGS?(ao(0),l_(1),Su()):En===At.RING_HIGH?ao(2):En===At.RING_LOW&&ao(3),wD()}function ED(){En=At.NAV,Zo=0,ha=0,Eo("FLYING"),Es(rr[0].key),Ku(rr[0].invert)}function AD(n){const e=wo();if(ha=rr[Zo].test(e)?ha+n:0,ha>=st.navHold){if(Zo++,ha=0,Zo>=rr.length){TD();return}Es(rr[Zo].key),Ku(rr[Zo].invert)}}function Su(){const n=(mt[0].collected?1:0)+(mt[1].collected?1:0);Es("tutorial.rings",{collected:n,total:2})}function TD(){En=At.RINGS,Ku(!1),D.speed=Math.max(D.speed,st.ringsEntrySpeed),Eo("FLYING"),bD(),ao(0),l_(1),Su()}function RD(){if(!mt[0].collected)Mu(0)&&(wu(0),ao(1),Su());else if(!mt[1].collected&&Mu(1)){wu(1),Su(),LD();return}Lp()>mt[1].forward+st.ringsOvershoot&&Ju()}function LD(){En=At.GREY_BOOST,fa=0,Eo("FLYING"),Dr&&(Dr.hidden=!0),xp({brake:!0,boost:!1,oneShot:!0}),document.body.classList.add("tut-show-boost"),Es("tutorial.boost")}function CD(n){fa=wo().boost?fa+n:Math.max(0,fa-n*.5),fa>=st.boostHold&&PD()}function PD(){En=At.THERMAL,Eo("FLYING"),Ei.visible=!0,ao(2),Es("tutorial.thermal")}function ID(){he.position.y>=mt[2].pos.y-st.thermalReach&&ND()}function ND(){En=At.RING_HIGH,Eo("FLYING"),Es("tutorial.ringHigh")}function DD(){if(!mt[2].collected&&Mu(2)){wu(2),kD();return}Lp()>mt[2].forward+st.highOvershoot&&Ju()}function kD(){En=At.RING_LOW,Eo("FLYING"),ao(3),Es("tutorial.ringLow")}function OD(){if(!mt[3].collected&&Mu(3)){wu(3),UD();return}Lp()>mt[3].forward+st.highOvershoot&&Ju()}function UD(){En=At.END,Ei.visible=!1,D.paused=!0,Wi&&(Wi.classList.add("visible"),Wi.setAttribute("aria-hidden","false")),ro=setTimeout(d_,st.endCardMs)}function d_(){ro&&(clearTimeout(ro),ro=null),Wi&&(Wi.classList.remove("visible"),Wi.setAttribute("aria-hidden","true")),f_()}function Mu(n){const e=mt[n],t=he.position.x-e.pos.x,i=he.position.y-e.pos.y,s=he.position.z-e.pos.z;return t*t+i*i+s*s<=st.ringRadius*st.ringRadius}function wu(n){mt[n].collected=!0,mt[n].popT=0}function h_(){if(vo)return;Us=tt.find(e=>e.id===st.runwayId)??tt[0],Us.activeHeading=Us.heading;const n=eR(Us);n&&(n.rotation.y=0),Rp.set(0,0,-1).applyEuler(new $n(0,Us.activeHeading,0)),Bx(),vo=!0,D.tutorial=!0,j.introPlayed=!0,Mt.fog=new ec(Ze.sky,st.fog.start,st.fog.end),yD(),c_(),s_(!1),Hy(!1),pn.indexOf(yr)<0&&pn.push(yr),xp({brake:!0,boost:!0,oneShot:!0}),document.body.classList.add("tut-hide-actions"),document.body.classList.remove("tut-show-boost"),Tp(Us),En=At.LAUNCH,Eo("PRELAUNCH"),Gi&&(Gi.classList.add("visible"),Gi.classList.remove("menu-hidden"),Gi.setAttribute("aria-hidden","false")),Dr&&(Dr.hidden=!1),Es("tutorial.launch"),Ku(!1),D.paused=!1}function FD(){return ub()?!1:(h_(),!0)}function f_(){if(!vo)return;vo=!1,D.tutorial=!1,D.paused=!1,Mt.fog=new ec(Ze.sky,Ae.fogStart,Ae.fogEnd),c_(),s_(!0),Hy(!0),Js&&Js.parent&&Mt.remove(Js);const n=pn.indexOf(yr);n>=0&&pn.splice(n,1),xp({brake:!1,boost:!1,oneShot:!1}),document.body.classList.remove("tut-hide-actions","tut-show-boost"),Gi&&(Gi.classList.remove("visible","menu-hidden"),Gi.setAttribute("aria-hidden","true")),Ef(!1),db(!0)}function p_(){vo&&(ro&&(clearTimeout(ro),ro=null),Wi&&(Wi.classList.remove("visible"),Wi.setAttribute("aria-hidden","true")),f_())}function BD(n){if(!vo)return;const e=D.paused;if(Gi&&Gi.classList.toggle("menu-hidden",e),e){Ef(!1);return}switch(Ef(En===At.LAUNCH||En===At.NAV),En){case At.LAUNCH:D.flightState===De.FLYING&&ED();break;case At.NAV:AD(n);break;case At.RINGS:RD();break;case At.GREY_BOOST:CD(n);break;case At.THERMAL:ID();break;case At.RING_HIGH:DD();break;case At.RING_LOW:OD();break}SD(n)}BN(Ju);Ca&&Ca.addEventListener("change",()=>uu(Ca.checked));Dr&&Dr.addEventListener("click",p_);ev&&ev.addEventListener("click",d_);qu(()=>{vo&&u_()});const zD="3.4.0",GD=19,nv={version:zD,build:GD},HD={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},cn=document.getElementById("welcome-overlay"),iv=document.getElementById("welcome-start-sub"),sv=document.getElementById("pause-btn"),ai=document.getElementById("pause-overlay"),ov=document.getElementById("pause-resume"),rv=document.getElementById("pause-home"),Ia=document.getElementById("pause-music-toggle"),Na=document.getElementById("pause-sfx-toggle"),VD=document.getElementById("crash"),av=document.getElementById("welcome-version");av&&(av.textContent=`v${nv.version} · Build ${nv.build} · Swiss Innovation Studios`);const Mn=document.getElementById("levels-overlay"),pa=document.getElementById("levels-map"),xr=document.getElementById("levels-markers"),cv=document.getElementById("levels-title"),cl=document.getElementById("levels-hint"),oa=768,ll=320,lv=1.08;let uv=null,ul=null;function m_(){if(ul)return ul;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const c of Lt)n=Math.min(n,c.x-c.bboxRadius),e=Math.max(e,c.x+c.bboxRadius),t=Math.min(t,c.z-c.bboxRadius),i=Math.max(i,c.z+c.bboxRadius);const s=(n+e)/2,o=(t+i)/2,r=(e-n)/2*lv,a=(i-t)/2*lv;return ul={cx:s,cz:o,hw:r,hh:a},ul}function g_(){return cn?.classList.contains("visible")===!0}function dv(){return ai?.classList.contains("visible")===!0}function cc(){cn&&(p_(),ma(),D.paused=!0,x_(),cn.classList.add("visible"),cn.setAttribute("aria-hidden","false"))}function Af(){cn&&(cn.classList.remove("visible"),cn.setAttribute("aria-hidden","true"),y_()||(D.paused=!1))}function Tf(){ai&&(D.paused=!0,Ia&&(Ia.checked=!Fv()),Na&&(Na.checked=!zv()),ai.classList.add("visible"),ai.setAttribute("aria-hidden","false"))}function ma(){ai&&ai.classList.contains("visible")&&(ai.classList.remove("visible"),ai.setAttribute("aria-hidden","true"),y_()||(D.paused=!1))}function v_(){D.paused||D.flightState!==De.CRASHED&&(D.tutorial||Tf())}function y_(){return cn?.classList.contains("visible")||Mn?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function x_(){if(!iv)return;const n=j.checkpointRunwayId;iv.textContent=n?xe("welcome.checkpoint",{id:n}):xe("welcome.firstFlight")}function WD(){Mn&&(cn?.classList.remove("visible"),cn?.setAttribute("aria-hidden","true"),Mn.classList.add("visible"),Mn.setAttribute("aria-hidden","false"),__())}function hv(){Mn&&(Mn.classList.remove("visible"),Mn.setAttribute("aria-hidden","true"),cc())}function __(){if(!pa)return;cv&&(cv.textContent=xe("levels.archTitle"));const n=qD(),e=Lt.map(t=>n[t.id]?"1":"0").join("");uv!==e&&($D(n),uv=e),ZD(),KD(n),JD()}function qD(){const n={};for(const e of Lt)n[e.id]=!1;for(const e of tt){if(!j.discoveredRunways[e.id])continue;const t=HD[e.id];t&&(n[t]=!0)}return n}function XD(n,e){let t=Lt[0].id,i=1/0;for(const s of Lt){const o=n-s.x,r=e-s.z,a=o*o+r*r;a<i&&(i=a,t=s.id)}return t}function $D(n){if(!pa)return;pa.width=oa,pa.height=ll;const e=pa.getContext("2d"),t=e.createImageData(oa,ll),{cx:i,cz:s,hw:o,hh:r}=m_(),a=Ae.heightmap.metersPerUnit,c=Ae.waterLevel;for(let l=0;l<ll;l++){const u=s+(l/(ll-1)-.5)*2*r;for(let d=0;d<oa;d++){const f=i+(d/(oa-1)-.5)*2*o,m=Ur(f,u);let v,y,p;if(m<c+.05)v=52,y=92,p=118;else{const _=XD(f,u),g=m*a;n[_]?[v,y,p]=jD(g):v=y=p=YD(g)}const h=(l*oa+d)*4;t.data[h]=v,t.data[h+1]=y,t.data[h+2]=p,t.data[h+3]=255}}e.putImageData(t,0,0)}function jD(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function YD(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function b_(n,e){const{cx:t,cz:i,hw:s,hh:o}=m_();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*o)+.5}}function ZD(){if(xr){xr.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of tt){const e=!!j.landedRunways[n.id],t=!!j.discoveredRunways[n.id],i=e?"landed":t?"discovered":"locked",{fracX:s,fracY:o}=b_(n.x,n.z);if(s<0||s>1||o<0||o>1)continue;const r=document.createElement("button");r.type="button",r.className=`levels-marker levels-marker-${i}`,r.style.left=(s*100).toFixed(2)+"%",r.style.top=(o*100).toFixed(2)+"%",r.dataset.runwayId=n.id,r.disabled=!e;const a=i==="locked"?xe("levels.markerLocked"):n.id;r.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${a}</span>
    `,e?(r.title=xe("levels.tipStart",{id:n.id}),r.addEventListener("click",()=>QD(n.id))):t?r.title=xe("levels.tipNotLanded",{id:n.id}):r.title=xe("levels.tipUndiscovered"),xr.appendChild(r)}}}function KD(n){if(xr){xr.querySelectorAll(".levels-island-label").forEach(e=>e.remove());for(const e of Lt){if(!n[e.id])continue;const{fracX:t,fracY:i}=b_(e.x,e.z);if(t<0||t>1||i<0||i>1)continue;const s=document.createElement("span");s.className="levels-island-label",s.textContent=e.name,s.style.left=(t*100).toFixed(2)+"%",s.style.top=(i*100).toFixed(2)+"%",xr.appendChild(s)}}}function JD(){if(!cl)return;const n=tt.filter(e=>j.landedRunways[e.id]).length;n===0?cl.textContent=xe("levels.hintNone"):n<tt.length?cl.textContent=xe("levels.hintProgress",{landed:n,total:tt.length}):cl.textContent=xe("levels.hintAll")}async function QD(n){Mn?.classList.remove("visible"),Mn?.setAttribute("aria-hidden","true"),cn?.classList.remove("visible"),cn?.setAttribute("aria-hidden","true"),D.flightState===De.CRASHED&&await po.onCrashRestart(),D.paused=!1,Zu({runwayId:n,forceIntro:!0})}async function e3(){D.flightState===De.CRASHED?(await po.onCrashRestart(),Af(),Zu()):Af()}function vh(n){cn?.classList.remove("visible"),cn?.setAttribute("aria-hidden","true"),go(n,{onClose:cc})}(function(){cn&&cn.addEventListener("click",t=>{const i=t.target.closest("[data-welcome-action]");if(!i)return;const s=i.dataset.welcomeAction;s==="start"?e3():s==="levels"?WD():s==="hangar"?vh("hangar"):s==="shop"?vh("shop"):s==="settings"&&vh("settings")}),Mn&&Mn.addEventListener("click",t=>{if(t.target===Mn){hv();return}if(t.target.closest('[data-modal-close="levels"]')){hv();return}});const e=document.getElementById("settings-replay-tutorial");e&&e.addEventListener("click",()=>{for(const t of["settings-overlay","welcome-overlay","levels-overlay"]){const i=document.getElementById(t);i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}h_()}),sv&&sv.addEventListener("click",()=>{dv()?ma():Tf()}),ov&&ov.addEventListener("click",ma),Ia&&Ia.addEventListener("change",()=>{const t=!Ia.checked;Bv(t),$y(t)}),Na&&Na.addEventListener("change",()=>{const t=!Na.checked;Gv(t),jy(t)}),rv&&rv.addEventListener("click",cc),ai&&ai.addEventListener("click",t=>{t.target===ai&&ma()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("onboarding-overlay")?.classList.contains("visible")&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!Mn?.classList.contains("visible")){if(g_()){Af(),D.flightState===De.CRASHED&&VD?.classList.add("visible");return}if(dv()){ma();return}D.flightState!==De.CRASHED&&Tf()}})})();qu(()=>{g_()&&x_(),Mn?.classList.contains("visible")&&__()});const Ka=document.getElementById("onboarding-overlay"),Eu=document.getElementById("onboarding-lang-step"),Au=document.getElementById("onboarding-story-step"),t3=document.getElementById("onboarding-langs"),fv=document.getElementById("onboarding-story-text"),yh=document.getElementById("onboarding-dots"),Tu=document.getElementById("onboarding-next");let _r=0,Rf=null;function S_(){const n=xe("onboarding.story");return Array.isArray(n)?n:[]}function n3(n){if(Rf=typeof n=="function"?n:()=>{},!Ka||cb()){Rf();return}i3()}function i3(){D.paused=!0,Ka.classList.add("visible"),Ka.setAttribute("aria-hidden","false"),s3()}function s3(){Au&&(Au.hidden=!0),Eu&&(Eu.hidden=!1),bx(t3,{onPick:n=>{xx(n),o3()}})}function o3(){Eu&&(Eu.hidden=!0),Au&&(Au.hidden=!1),_r=0,M_()}function M_(){const n=S_();if(fv&&(fv.textContent=n[_r]||""),yh){yh.innerHTML="";for(let t=0;t<n.length;t++){const i=document.createElement("span");i.className="onboarding-dot"+(t===_r?" active":""),yh.appendChild(i)}}const e=_r>=n.length-1;Tu&&(Tu.textContent=xe(e?"onboarding.begin":"onboarding.next"))}function r3(){_r<S_().length-1?(_r++,M_()):a3()}function a3(){lb(!0),Ka.classList.remove("visible"),Ka.setAttribute("aria-hidden","true"),Rf()}Tu&&Tu.addEventListener("click",r3);const Br=new I(0,1,0);function Ru(n,e){for(const t of tt){const i=n-t.x,s=e-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)<t.width/2+Il.vegClearSide&&Math.abs(c)<t.length/2+Il.vegClearEnd)return!0}return!1}const Xo=8;function c3(n,e,t){const i=Nn(n+Xo,e),s=Nn(n-Xo,e),o=Nn(n,e+Xo),r=Nn(n,e-Xo);return t.gx=(i-s)/(2*Xo),t.gz=(o-r)/(2*Xo),t}function l3(){const e=Lt.reduce((t,i)=>t+i.bboxRadius*i.bboxRadius,0);return Lt.map(t=>{const i=t.bboxRadius*t.bboxRadius/e;return Math.max(8e3,Math.floor(Tt.sampleCount*i))})}function u3(){const{treeDensity:n,shrubDensity:e,grassDensity:t,cropDensity:i,bareDensity:s,droughtShrubDensity:o,snowDensity:r,wetlandDensity:a,laurelMaxAltitude:c}=Tt,l={};for(const y of Lt)l[y.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const u=Tt.slopeThreshold,d=Tt.cliffDensity,f=c*Ae.heightmap.elevationExaggeration,m={gx:0,gz:0};for(const y of q_){const p=l[y.island];if(!p)continue;const h=y.ringCount,_=y.ringRadius,g=1.4;for(let R=0;R<h;R++){const E=R/h*Math.PI*2+(Math.random()-.5)*.08,A=_*(.88+Math.random()*.24),U=y.x+Math.cos(E)*A,M=y.z+Math.sin(E)*A,w=Rt(U,M);w<Ae.waterLevel+.5||Ru(U,M)||p.cliffs.push({x:U,y:w,z:M,gx:Math.cos(E)*g,gz:Math.sin(E)*g})}const b=Math.floor(h*.4);for(let R=0;R<b;R++){const E=Math.random()*Math.PI*2,A=Math.sqrt(Math.random())*_*.75,U=y.x+Math.cos(E)*A,M=y.z+Math.sin(E)*A,w=Rt(U,M);w<Ae.waterLevel+.5||p.rocks.push({x:U,y:w,z:M})}}const v=l3();for(let y=0;y<Lt.length;y++){const p=Lt[y],h=p.bboxRadius,_=v[y],g=l[p.id];for(let b=0;b<_;b++){const R=p.x+(Math.random()-.5)*2*h,E=p.z+(Math.random()-.5)*2*h,A=Rt(R,E);if(A<Ae.waterLevel+.5||Ru(R,E))continue;c3(R,E,m);const M=Math.hypot(m.gx,m.gz)>=u&&Math.random()<d;M&&g.cliffs.push({x:R,y:A,z:E,gx:m.gx,gz:m.gz});const w=Vn(R,E);w===_t.TREE&&Math.random()<n?A>=f?g.pines.push({x:R,y:A,z:E}):g.laurels.push({x:R,y:A,z:E}):w===_t.SHRUB&&Math.random()<e?g.shrubs.push({x:R,y:A,z:E}):w===_t.GRASS&&Math.random()<t?g.grasses.push({x:R,y:A,z:E}):w===_t.CROP&&Math.random()<i?g.crops.push({x:R,y:A,z:E}):w===_t.BARE?(!M&&Math.random()<s&&g.rocks.push({x:R,y:A,z:E}),Math.random()<o&&g.shrubs.push({x:R,y:A,z:E})):w===_t.SNOW&&Math.random()<r?g.snow.push({x:R,y:A,z:E}):w===_t.WETLAND&&Math.random()<a&&g.wetlands.push({x:R,y:A,z:E})}}return l}function w_(n,e,t,i,s,o,r,a,c){const l=new an(e,i,n.length),u=new an(t,s,n.length),d=new Ke,f=new Ct,m=new I,v=new I;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p],b=o+Math.random()*(r-o);v.set(h,_-.3,g),m.set(b,b+Math.random()*.3,b),f.setFromAxisAngle(Br,Math.random()*Math.PI*2),d.compose(v,f,m),l.setMatrixAt(p,d),u.setMatrixAt(p,d),ac(h,_,g,a*b,c*b)}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const y=new lt;return y.add(l,u),y}function d3(n){const e=new Xn(.18,.26,1.6,5);e.translate(0,.8,0);const t=new $i(1,4.8,7);t.translate(0,3.8,0);const i=new ut({color:Ze.trunk,flatShading:!0}),s=new ut({color:Ze.pineCanopy,flatShading:!0}),o=Tt.treeScale;return w_(n,e,t,i,s,.75*o,1.3*o,1,6.2)}function h3(n){const e=new Xn(.22,.32,1,5);e.translate(0,.5,0);const t=new nc(1.7,7,5);t.scale(1,.85,1),t.translate(0,2,0);const i=new ut({color:Ze.trunk,flatShading:!0}),s=new ut({color:Ze.laurelCanopy,flatShading:!0}),o=Tt.treeScale;return w_(n,e,t,i,s,.85*o,1.25*o,1.7,3.5)}function f3(n){const e=new $i(.7,1,5);e.translate(0,.5,0);const t=new ut({color:Ze.shrubBody,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I;for(let c=0;c<n.length;c++){const{x:l,y:u,z:d}=n[c],f=.5+Math.random()*.6;a.set(l,u-.2,d),r.set(f+Math.random()*.2,f,f+Math.random()*.2),o.setFromAxisAngle(Br,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(c,s),ac(l,u,d,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function p3(n){const e=new $i(.35,.55,4);e.translate(0,.25,0);const t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Ee(Ze.grassGround),l=Tt.grassTints,u=new Ee;for(let d=0;d<n.length;d++){const{x:f,y:m,z:v}=n[d],y=.6+Math.random()*.7;a.set(f,m-.1,v),r.set(y,y*(.8+Math.random()*.5),y),o.setFromAxisAngle(Br,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(d,s);const[p,h,_]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*h,c.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function m3(n){const e=new $i(.4,.75,4);e.translate(0,.35,0);const t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Ee(Ze.cropGround),l=Tt.grassTints,u=new Ee;for(let d=0;d<n.length;d++){const{x:f,y:m,z:v}=n[d],y=.7+Math.random()*.6;a.set(f,m-.12,v),r.set(y,y*(.9+Math.random()*.4),y),o.setFromAxisAngle(Br,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(d,s);const[p,h,_]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*h,c.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function g3(n){const e=new tc(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new $n,l=new Ee(Ze.rock),u=Tt.rockTintsLow,d=Tt.rockTintsMid,f=Tt.rockTintsHigh,m=Tt.rockZoneLowMax,v=Tt.rockZoneHighMin,y=new Ee;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p];let b,R,E;_<m?(b=u,R=.3,E=1.5):_>v?(b=f,R=.4,E=2.5):(b=d,R=.5,E=3.5);const A=R+Math.random()*Math.random()*(E-R);a.set(h,_-A*.15,g),r.set(A*(.7+Math.random()*.6),A*(.55+Math.random()*.45),A*(.7+Math.random()*.6)),c.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),o.setFromEuler(c),s.compose(a,o,r),i.setMatrixAt(p,s);const[U,M,w]=b[Math.random()*b.length|0];y.setRGB(l.r*U,l.g*M,l.b*w),i.setColorAt(p,y),A>1.5&&ac(h,_,g,A,A)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function v3(n){const e=new tc(.6,0),t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new Ct,a=new I,c=new I,l=new I(0,1,0),u=new I,d=new Ee(Ze.rock),f=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Ee,[v,y]=Tt.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g,gx:b,gz:R}=n[p];u.set(-b,1,-R).normalize();const E=v+Math.random()*(y-v),A=1.4+Math.random()*1.8;o.setFromUnitVectors(l,u),r.setFromAxisAngle(u,Math.random()*Math.PI*2),o.premultiply(r);const U=(.3+Math.random()*.1)*E;c.set(h-u.x*U,_-u.y*U,g-u.z*U),a.set(A*(.85+Math.random()*.4),E,A*(.85+Math.random()*.4)),s.compose(c,o,a),i.setMatrixAt(p,s);const[M,w,V]=f[Math.random()*f.length|0];m.setRGB(d.r*M,d.g*w,d.b*V),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function y3(n){const e=new tc(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new $n,l=new Ee;for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],v=.4+Math.random()*.9;a.set(d,f-.05,m),r.set(v*(.9+Math.random()*.3),v*(.25+Math.random()*.2),v*(.9+Math.random()*.3)),c.set(0,Math.random()*Math.PI*2,0),o.setFromEuler(c),s.compose(a,o,r),i.setMatrixAt(u,s);const y=.93+Math.random()*.07;l.setRGB(y,y,y),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function x3(n){const e=new rn(1,.04,1);e.translate(0,.02,0);const t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Ee,l=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],v=1+Math.random()*.8;a.set(d,f+.05,m),r.set(v*(.9+Math.random()*.4),1,v*(.9+Math.random()*.4)),o.setFromAxisAngle(Br,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(u,s);const[y,p,h]=l[Math.random()*l.length|0];c.setRGB(.92*y,.94*p,.96*h),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function _3(n){const{clusterScaleMin:e,clusterScaleMax:t}=Tt.urban,i=Math.min(1,Math.pow(n/50,.4));return e+i*(t-e)}function b3(){const n=oR(),{churchClusterPixels:e,housesPerPixel:t,housesMin:i,housesMax:s,houseMinSpacing:o,pixelJitter:r}=Tt.urban,a=[],c=[],l=o*o;for(const u of n){const d=Math.max(i,Math.min(s,Math.round(u.pixelCount*t))),f=_3(u.pixelCount),m=[];let v=0;const y=d*14;for(;m.length<d&&v<y;){v++;const p=u.pixels[Math.random()*u.pixels.length|0],h=p.x+(Math.random()-.5)*r,_=p.z+(Math.random()-.5)*r;let g=!0;for(const R of m){const E=R.x-h,A=R.z-_;if(E*E+A*A<l){g=!1;break}}if(!g)continue;const b=Rt(h,_);b<Ae.waterLevel+.5||Ru(h,_)||m.push({x:h,y:b,z:_,scale:f})}if(a.push(...m),u.pixelCount>=e){const p=u.centerX,h=u.centerZ,_=Rt(p,h);_>=Ae.waterLevel+.5&&!Ru(p,h)&&c.push({x:p,y:_,z:h,scale:f})}}return{houses:a,churches:c}}function S3(n){const e=new rn(1.4,1,1.6);e.translate(0,.5,0);const t=new $i(1.15,.75,4);t.rotateY(Math.PI/4),t.translate(0,1.37,0);const i=new ut({color:Ze.houseWall,flatShading:!0}),s=new ut({color:16777215,flatShading:!0}),o=new an(e,i,n.length),r=new an(t,s,n.length),a=new Ke,c=new Ct,l=new I,u=new I,d=new Ee(Ze.houseRoof),f=Tt.roofTints,m=new Ee;for(let y=0;y<n.length;y++){const{x:p,y:h,z:_,scale:g}=n[y],b=g*(.85+Math.random()*.3),R=g*(.8+Math.random()*.35),E=g*(.85+Math.random()*.3);u.set(p,h,_),l.set(b,R,E);const A=Math.random()*8|0;c.setFromAxisAngle(Br,A*Math.PI/4),a.compose(u,c,l),o.setMatrixAt(y,a),r.setMatrixAt(y,a);const[U,M,w]=f[Math.random()*f.length|0];m.setRGB(d.r*U,d.g*M,d.b*w),r.setColorAt(y,m),ac(p,h,_,.85*g,1.75*g)}o.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0;const v=new lt;return v.add(o,r),v}function M3(){const n=new ut({color:Ze.houseWall,flatShading:!0}),e=new ut({color:Ze.houseRoof,flatShading:!0}),t=new nt(new rn(1.6,1.2,2.6),n);t.position.y=.6;const i=new nt(new $i(1.4,.7,4),e);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new nt(new rn(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const o=new nt(new $i(.5,1.05,4),e);o.rotation.y=Math.PI/4,o.position.set(0,2.95,-1.65);const r=new lt;return r.add(t,i,s,o),r}function w3(n){const e=M3(),t=new lt;for(const{x:i,y:s,z:o,scale:r}of n){const a=e.clone();a.position.set(i,s,o);const c=r*(.95+Math.random()*.2);a.scale.set(c,c,c),a.rotation.y=Math.random()*Math.PI*2,t.add(a),ac(i,s,o,1.9*c,3.5*c)}return t}const Lf=[],E3=400;function A3(n,e){const t=new I(e.x,60,e.z),i=e.bboxRadius*1.4+50;return n.traverse(s=>{(s.isInstancedMesh||s.isMesh)&&(s.frustumCulled=!0,s.boundingSphere=new Ms(t,i))}),{center:t,radius:i}}function T3(){const n=u3(),e=b3(),t=new lt,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const s of Lt){const o=n[s.id];if(!o)continue;const r=new lt;r.name=`vegetation:${s.id}`,o.pines.length&&(r.add(d3(o.pines)),i.pines+=o.pines.length),o.laurels.length&&(r.add(h3(o.laurels)),i.laurels+=o.laurels.length),o.shrubs.length&&(r.add(f3(o.shrubs)),i.shrubs+=o.shrubs.length),o.grasses.length&&(r.add(p3(o.grasses)),i.grasses+=o.grasses.length),o.crops.length&&(r.add(m3(o.crops)),i.crops+=o.crops.length),o.rocks.length&&(r.add(g3(o.rocks)),i.rocks+=o.rocks.length),o.cliffs.length&&(r.add(v3(o.cliffs)),i.cliffs+=o.cliffs.length),o.snow.length&&(r.add(y3(o.snow)),i.snow+=o.snow.length),o.wetlands.length&&(r.add(x3(o.wetlands)),i.wetlands+=o.wetlands.length);const a=A3(r,s);Lf.push({group:r,center:a.center,radius:a.radius}),t.add(r)}return e.houses.length&&t.add(S3(e.houses)),e.churches.length&&t.add(w3(e.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${e.houses.length} houses, ${e.churches.length} churches`),t}function R3(n,e){if(!e){for(const i of Lf)i.group.visible=!0;return}const t=Ae.fogEnd+E3;for(const i of Lf)i.group.visible=n.position.distanceTo(i.center)-i.radius<t}const Lu=document.getElementById("island-compass"),xh=Lu?.querySelector(".compass-track"),dl=document.getElementById("island-name");let pv=null;const Cf=Math.PI/2,mv=6,L3=400,C3=2,Cu=7,P3=8,I3=6.2,N3=12;let E_=560;const A_=new Map;let jt=null;const _h=new I;function D3(){if(!xh)return;for(const e of Lt){const t=document.createElement("div");t.className="compass-marker"+(e.playable?"":" unreachable"),t.dataset.island=e.id,t.innerHTML=`
      <span class="compass-name">${e.name}</span>
      <span class="compass-dist"></span>
    `,xh.appendChild(t),A_.set(e.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}const n=document.createElement("div");n.className="compass-marker runway-hint hidden",n.innerHTML=`
    <span class="compass-name"></span>
    <span class="compass-dist"></span>
  `,xh.appendChild(n),jt={el:n,name:n.querySelector(".compass-name"),dist:n.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastName:null,lastHidden:!0},gv(),window.addEventListener("resize",gv)}function hl(n,e){if(!jt)return;if(!e){jt.lastHidden||(jt.el.classList.add("hidden"),jt.lastHidden=!0);return}const t=Ae.heightmap.metersPerUnit,i=T_(n),s=e.x-n.position.x,o=e.z-n.position.z,r=Math.sqrt(s*s+o*o)*t/1e3,a=Math.atan2(s,-o);let l=(R_(a-i)/Cf*.5+.5)*100;l=Math.max(Cu,Math.min(100-Cu,l)),jt.lastHidden&&(jt.el.classList.remove("hidden"),jt.lastHidden=!1),e.id!==jt.lastName&&(jt.name.textContent=e.id,jt.lastName=e.id);const u=l.toFixed(1)+"%";u!==jt.lastLeft&&(jt.el.style.left=u,jt.lastLeft=u);const d=r<10?r.toFixed(1)+" km":Math.round(r)+" km";d!==jt.lastDist&&(jt.dist.textContent=d,jt.lastDist=d)}function T_(n){return _h.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(_h.x,-_h.z)}function R_(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const ra=[],Vt=[];function gv(){if(!Lu)return;const n=Lu.getBoundingClientRect().width;n>0&&(E_=n)}function k3(n){if(!dl)return;const e=n?n.name:"";e!==pv&&(pv=e,e?(dl.textContent=e,dl.classList.add("show")):dl.classList.remove("show"))}function O3(n){if(!Lu)return;const e=T_(n),t=Ae.heightmap.metersPerUnit,i=wp(n.position);k3(i),ra.length=0;for(const s of Lt){const o=A_.get(s.id);if(!o)continue;const r=s.x-n.position.x,a=s.z-n.position.z,l=Math.sqrt(r*r+a*a)*t/1e3,u=Math.max(0,l-s.bboxRadius*t/1e3),d=Math.atan2(r,-a),f=R_(d-e);if(i&&s.id===i.id||Math.abs(f)>Cf||l<.5||l>L3){ra.push({m:o,distKm:l,edgeKm:u,pct:0,halfPct:0,show:!1});continue}const v=(f/Cf*.5+.5)*100,y=(s.name.length*I3+N3)/E_*50;ra.push({m:o,distKm:l,edgeKm:u,pct:v,halfPct:y,show:!0})}Vt.length=0;for(const s of ra)s.show&&Vt.push(s);Vt.sort((s,o)=>s.distKm-o.distKm);for(let s=mv;s<Vt.length;s++)Vt[s].show=!1;Vt.length=Math.min(Vt.length,mv),Vt.sort((s,o)=>s.pct-o.pct);for(let s=0;s<P3;s++){for(let o=0;o<Vt.length-1;o++){const r=Vt[o],a=Vt[o+1],c=r.halfPct+a.halfPct+C3-(a.pct-r.pct);c>0&&(r.pct-=c/2,a.pct+=c/2)}Vt.length&&(Vt[0].pct=Math.max(Cu,Vt[0].pct),Vt[Vt.length-1].pct=Math.min(100-Cu,Vt[Vt.length-1].pct))}for(const s of ra){const o=s.m,r=!s.show;if(r!==o.lastHidden&&(o.el.classList.toggle("hidden",r),o.lastHidden=r),r)continue;const a=s.pct.toFixed(1)+"%";a!==o.lastLeft&&(o.el.style.left=a,o.lastLeft=a);const c=s.edgeKm<10?s.edgeKm.toFixed(1)+" km":Math.round(s.edgeKm)+" km";c!==o.lastDist&&(o.dist.textContent=c,o.lastDist=c)}}const bh=new I;function U3(){for(const n in j.landedRunways)if(n!==ci&&j.landedRunways[n])return!1;return!0}function F3(n){let e=null,t=1/0;for(const i of tt){if(i.id===ci)continue;const s=n.x-i.x,o=n.z-i.z,r=s*s+o*o;r<t&&(t=r,e=i)}return e?{runway:e,dist:Math.sqrt(t)}:null}function B3(n){return bh.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(-bh.x,-bh.z)}function z3(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}let aa=null;function G3(n,e){if(!(D.flightState===De.FLYING)||D.paused||D.tutorial){hl(e,null),hh(),U0(),aa=null;return}const i=e.position;if(U3()){const r=F3(i);r?(hl(e,r.runway),r.dist<rd.hideDistance?hh():r.dist<=rd.showDistance?aa!==r.runway.id&&(SN(),aa=r.runway.id):r.dist>rd.rearmDistance&&aa===r.runway.id&&(aa=null)):hl(e,null)}else hl(e,null),hh();const s=B3(e);let o=!1;for(const r of tt){const a=i.x-r.x,c=i.z-r.z,l=Math.cos(r.heading),u=Math.sin(r.heading),d=a*l-c*u,f=a*u+c*l;if(Math.abs(d)>hc.corridorHalfWidth||Math.abs(f)>r.length*.5+hc.approachDepth)continue;const m=i.y-r.elevation;if(m<-2||m>hc.maxHeight)continue;if(Math.abs(z3(s-(r.activeHeading+Math.PI)))<=hc.coneTolerance){o=!0;break}}o?wN():U0()}const H3=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],Pu=[];let vv=!1;const yv=document.getElementById("lift-indicator");let xv=null;function V3(){for(const n of H3){const e=document.getElementById(n.id);if(!e)continue;e.innerHTML="";const t=document.createElement("div");t.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,t.appendChild(i),e.appendChild(t);const s=document.createElement("div");s.className="edge-tape-window",e.appendChild(s);const o=document.createElement("div");o.className="edge-tape-track",o.style.height=n.range*n.pxPerUnit+"px",s.appendChild(o);for(let c=0;c<=n.range;c+=n.tickStep){const l=document.createElement("div"),u=c%n.majorStep===0;if(l.className="edge-tape-tick"+(u?" major":""),l.style.top=(n.range-c)*n.pxPerUnit+"px",u){const d=document.createElement("span");d.className="edge-tape-label",d.textContent=c,l.appendChild(d)}o.appendChild(l)}const r=document.createElement("div");r.className="edge-tape-center-line",s.appendChild(r);const a=document.createElement("div");a.className="edge-tape-current",a.textContent="0",s.appendChild(a),Pu.push({cfg:n,win:s,track:o,current:a,lastDisplayed:NaN,winH:0})}vv||(vv=!0,window.addEventListener("resize",()=>{for(const n of Pu)n.winH=0}))}function _v(n,e){const t=Math.max(0,Math.min(n.cfg.range,e));let i=n.winH;if(!i){if(i=n.win.clientHeight,i===0)return;n.winH=i}const s=i/2-(n.cfg.range-t)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${s}px)`;const o=Math.round(e);o!==n.lastDisplayed&&(n.current.textContent=o,n.lastDisplayed=o)}function W3(n){if(!n||Pu.length===0)return;const e=Rt(n.position.x,n.position.z),t=n.position.y-Math.max(e,Ae.waterLevel);for(const i of Pu)i.cfg.id==="speed-tape"?_v(i,D.speed):i.cfg.id==="alt-tape"&&_v(i,t);if(yv){const i=!!D.inThermal;i!==xv&&(yv.classList.toggle("is-active",i),xv=i)}}const Pf=[],fl=new Ee,bv=new Ee,pl=he.getObjectByName("paperBody");let Sv=null;(function(){for(const e of[-.95,.95]){const t=new Float32Array(yi.verts*3),i=new Float32Array(yi.verts*3);for(let a=0;a<yi.verts;a++){const c=a/(yi.verts-1);t[a*3]=e,t[a*3+1]=-.05,t[a*3+2]=.42+c*yi.maxLen;const l=1-c;i[a*3]=l,i[a*3+1]=l,i[a*3+2]=l}const s=new gt;s.setAttribute("position",new Dt(t,3)),s.setAttribute("color",new Dt(i,3));const o=new zu({vertexColors:!0,transparent:!0,opacity:0,blending:Ul,depthWrite:!1}),r=new _y(s,o);he.add(r),Pf.push(r)}})();function q3(){const n=sn.stallSpeed+3,e=sn.maxSpeed*.7,t=Xi.clamp((D.speed-n)/(e-n),0,1),i=yi.maxLen*(.3+t*.7),s=op();if(s!==Sv){Sv=s,fl.set(s?Xt.goldenStreakColor:16777215);for(const o of Pf){const r=o.geometry.attributes.color.array;for(let a=0;a<yi.verts;a++){const c=1-a/(yi.verts-1);r[a*3]=c*fl.r,r[a*3+1]=c*fl.g,r[a*3+2]=c*fl.b}o.geometry.attributes.color.needsUpdate=!0}!s&&pl&&pl.material.emissive?.setHex(0)}if(s&&pl){const o=Xt.goldenGlowMin+(Xt.goldenGlowMax-Xt.goldenGlowMin)*(.5+.5*Math.sin(performance.now()*.001*Xt.goldenGlowSpeed));bv.set(Xt.goldenGlowColor).multiplyScalar(o),pl.material.emissive?.copy(bv)}for(const o of Pf){const r=o.geometry.attributes.position.array;for(let a=0;a<yi.verts;a++){const c=a/(yi.verts-1);r[a*3+2]=.42+c*i}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=t*.95}}const X3=.9,L_=.55,$3=35,j3=1.6,C_=new Gu(X3,28);C_.rotateX(-Math.PI/2);const P_=new jn({color:0,transparent:!0,opacity:L_,depthWrite:!1}),Xs=new nt(C_,P_);Xs.renderOrder=1;function Y3(){const n=Rt(he.position.x,he.position.z),e=Math.max(n,Ae.waterLevel),t=Math.max(0,he.position.y-e);Xs.position.x=he.position.x,Xs.position.z=he.position.z,Xs.position.y=e+.04;const i=Math.min(1,t/$3),s=Math.min(1,t/j3);P_.opacity=L_*s*(1-.85*i);const o=1+i*.4;Xs.scale.set(o,1,o),Xs.visible=he.position.y>e-.5}Ja(()=>import("./test-mode-easter-egg-BfUbZPBp.js"),__vite__mapDeps([3,4]));rb();D2();X_();$_();Qa();j.landedRunways[ci]||(j.landedRunways[ci]=!0,j.discoveredRunways[ci]=!0);if(!j.starterGranted){j.obsidian=(j.obsidian|0)+Dl.starterDiamonds,j.visitedIslands[j.currentIsland]=!0;for(const n of Object.keys(j.gofiosByIsland))(j.gofiosByIsland[n]|0)>0&&(j.visitedIslands[n]=!0);j.starterGranted=!0,Pt()}dx();fo.init();await Promise.all([aR(),tR()]);tt.forEach(n=>{n.elevation=Math.max(Ur(n.x,n.z),Ae.waterLevel+Il.minAboveWater)});Wn.init();sc();Mt.add(fR());Mt.add(mR());Mt.add(T3());Mt.add(J1());Mt.add(_R());Mt.add(cD());Mt.add(Xs);Mt.add(he);D3();hN();V3();SR();["pointerdown","touchend","click","keydown"].forEach(n=>window.addEventListener(n,MR));window.addEventListener("click",n=>{const e=n.target.closest("button");e&&e.closest("#welcome-overlay, #pause-overlay, #levels-overlay, #crash, .modal-overlay")&&on("ui-confirm")});const Z3=document.getElementById("restart-btn"),Iu=document.getElementById("crash");async function I_(){await po.onCrashRestart(),Zu()}Z3.addEventListener("click",I_);window.addEventListener("keydown",n=>{n.code==="Space"&&Iu.classList.contains("visible")&&(n.preventDefault(),I_())});function N_(n){Iu.classList.remove("visible"),go(n,{onClose:()=>Iu.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>N_("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>N_("shop"));document.getElementById("crash-home-btn").addEventListener("click",()=>{Iu.classList.remove("visible"),cc()});Zu();n3(()=>{FD()||cc()});requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});setTimeout(()=>po.warmup(),5e3);document.addEventListener("visibilitychange",()=>{document.hidden?(qy(),v_()):Xy()});Mi.isNativePlatform()&&Ja(async()=>{const{App:n}=await import("./index-CVH0YhY8.js");return{App:n}},__vite__mapDeps([5,1])).then(({App:n})=>n.addListener("appStateChange",({isActive:e})=>{if(e){Xy();return}qy(),v_()})).catch(n=>console.warn("[lifecycle] appStateChange unavailable",n));let Mv=performance.now();function D_(n){requestAnimationFrame(D_);const e=Math.min(.05,(n-Mv)/1e3);Mv=n,eD(e),BD(e),$2(e),Y2(e),Q2(e),q3(),Y3(),Q1(n/1e3),bR(e),fD(e,he),kR(e,he),O3(he),G3(e,he),yN(he),W3(he),NN(e);const t=Mt.fog!==null;R3(Wt,t),pR(Wt,t),AN(),uL(),ML(n),mn.render(Mt,Wt)}requestAnimationFrame(D_);
