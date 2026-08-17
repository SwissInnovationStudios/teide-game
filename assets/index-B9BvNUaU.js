const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-6c8v8erw.js","assets/index-COBN-aVN.js","assets/index-BNXHsM2Y.js","assets/test-mode-easter-egg-D2hRZ9fM.js","assets/save-CaudacLP.js","assets/index-CVH0YhY8.js"])))=>i.map(i=>d[i]);
import{_ as Xa,C as ki}from"./index-COBN-aVN.js";import{Z as $a,Q as Dt,z as J,Y as D,N as Su,B as St,b as Et,h as yn,W as Ae,V as Tt,a as fi,f as Ze,j as no,s as tv,e as g_,d as Xu,q as bl,i as Lt,t as _n,F as De,M as Xt,J as io,l as ah,R as Ra,D as pf,A as Cn,c as Sl,G as ol,H as Or,U as $s,E as Ml,a0 as nv,u as $u,a1 as v_,n as ju,o as bt,T as ia,C as Yt,g as rl,_ as y_,I as iv,S as rs,L as sv,y as Mu,P as sn,m as Ur,X as x_,p as sc,$ as __,v as it,w as b_,x as oc,k as Yu,r as pi,O as S_,K as M_}from"./save-CaudacLP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Xn={pitch:0,roll:0,brake:!1,boost:!1,isInputActive:!1,activeInputType:"none"};let wl=!1;function ov(){wl=!0}function w_(){return wl?(wl=!1,!0):!1}function mf(){wl=!1}let El=!1;function rv(){El=!0}function E_(){return El?(El=!1,!0):!1}function wu(){El=!1}const xt={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};let Pi=!1;function A_(){Pi=!1}function T_(){return Pi}function R_(){const n=(xt.down?1:0)-(xt.up?1:0),e=(xt.right?1:0)-(xt.left?1:0),t=xt.up||xt.down||xt.left||xt.right,i=xt.brake||xt.boost||xt.oneShot;return{pitch:n,roll:e,brake:xt.brake,boost:xt.boost,isActive:t||i}}function av(n,e){switch(n.key){case"ArrowUp":case"w":case"W":xt.up=e,Pi=!0;break;case"ArrowDown":case"s":case"S":xt.down=e,Pi=!0;break;case"ArrowLeft":case"a":case"A":xt.left=e,Pi=!0;break;case"ArrowRight":case"d":case"D":xt.right=e,Pi=!0;break;case" ":case"Spacebar":xt.brake=e&&Su(),Pi=!0,n.preventDefault();break;case"Shift":e&&!xt.boost&&rv(),xt.boost=e,Pi=!0;break;case"f":case"F":e&&!xt.oneShot&&ov(),xt.oneShot=e,Pi=!0;break;case"t":case"T":e&&(J.testMode=!J.testMode,$a(),Dt());break;case"b":case"B":if(e&&J.testMode){const t=St.oneShot.tiers.length-1,i=D.boosterOverride!=null?D.boosterOverride:4;D.boosterOverride=(i+1)%(t+1)}break}}window.addEventListener("keydown",n=>av(n,!0));window.addEventListener("keyup",n=>av(n,!1));function ho(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}const cv={"glider-wind":{src:"ambient/wind-glide.mp3",channel:"sfx",mode:"loop",gain:.3,filtered:!0},"ocean-surf-bed":{src:"ambient/ocean-waves.mp3",channel:"sfx",mode:"loop",gain:.55},"forest-bed":{src:"ambient/forest-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},"thermal-lift":{src:"ambient/thermal-lift.mp3",channel:"sfx",mode:"loop",gain:.6},"city-bed":{src:"ambient/city-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},touchdown:{src:"sfx/tyres-touchdown.mp3",channel:"sfx",mode:"oneshot",gain:.13},crash:{src:"sfx/crash.mp3",channel:"sfx",mode:"oneshot",gain:.8},"gear-deploy":{src:"sfx/gear-extend.mp3",channel:"sfx",mode:"oneshot",gain:.16},"spend-points":{src:"sfx/spend-points.mp3",channel:"sfx",mode:"oneshot",gain:.6},"buy-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.7},"spend-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.6,rate:.82},"ring-first":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.18},"ring-recollect":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.08,rate:.92},"one-shot-boost":{src:"sfx/boost.mp3",channel:"sfx",mode:"oneshot",gain:.7},"landing-success":{src:"sfx/success.mp3",channel:"sfx",mode:"oneshot",gain:.3},denied:{src:"sfx/denied.mp3",channel:"sfx",mode:"oneshot",gain:.45},"ui-confirm":{src:"sfx/ui-click.mp3",channel:"sfx",mode:"oneshot",gain:.35},"golden-activate":{src:"sfx/ui-click.mp3",channel:"sfx",mode:"oneshot",gain:.45},"menu-music":{src:"music/menu-music.mp3",channel:"music",mode:"stream",gain:1}},lv="teide-settings",uv=100,gf=3e3,dv=1e4,vf=1e7,hv={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:gf,samples:vf}},La={low:{segments:600,samples:5e5},standard:{segments:1200,samples:12e5},high:{segments:1200,samples:2e6}},L_={low:1,standard:1.25,high:1.5},C_=1.25,P_=2,I_={...hv.standard},N_={...La.standard};function Zu(){return{...ho()?N_:I_,language:null,onboardingDone:!1,tutorialDone:!1,invertPitch:!0,controlMode:"touch",gyroSensitivity:yn.sensDefault,musicVolume:Et.musicVolume,musicMuted:!1,sfxVolume:Et.sfxVolume,sfxMuted:!1}}function ht(){try{const n=localStorage.getItem(lv);if(!n)return Zu();const e=JSON.parse(n);return D_({...Zu(),...e})}catch{return Zu()}}function oi(n){try{localStorage.setItem(lv,JSON.stringify(fv(n)))}catch{}}function fv(n){return{...n,segments:Math.max(uv,Math.min(gf,n.segments|0)),samples:Math.max(dv,Math.min(vf,n.samples|0))}}function D_(n){if(n=fv(n),!ho())return n;const e=La.high;return n.segments>e.segments||n.samples>e.samples?(console.info(`[settings] Mobile clamp: persisted segments=${n.segments} samples=${n.samples} exceed mobile-high (${e.segments}/${e.samples}). Using mobile-standard for this session.`),{...La.standard,language:n.language,onboardingDone:n.onboardingDone,tutorialDone:n.tutorialDone,invertPitch:n.invertPitch,controlMode:n.controlMode,gyroSensitivity:n.gyroSensitivity,musicVolume:n.musicVolume,musicMuted:n.musicMuted,sfxVolume:n.sfxVolume,sfxMuted:n.sfxMuted}):n}function O_(){const n=window.devicePixelRatio||1;if(!ho())return Math.min(n,P_);const e=ht();let t=null;for(const[s,o]of Object.entries(La))if(o.segments===e.segments&&o.samples===e.samples){t=s;break}const i=t&&L_[t]||C_;return Math.min(n,i)}function U_(){const n=ht(),e=new URLSearchParams(window.location.search),t=parseInt(e.get("segments"),10),i=parseInt(e.get("samples"),10);return Number.isFinite(t)&&t>=uv&&t<=gf&&(n.segments=t),Number.isFinite(i)&&i>=dv&&i<=vf&&(n.samples=i),Ae.segments=n.segments,Tt.sampleCount=n.samples,n}function k_(){const n=ho()?La:hv;return Object.entries(n).map(([e,t])=>({name:e,...t}))}function F_(){return!!ht().onboardingDone}function B_(n=!0){const e=ht();e.onboardingDone=!!n,oi(e)}function z_(){return!!ht().tutorialDone}function H_(n=!0){const e=ht();e.tutorialDone=!!n,oi(e)}function G_(){const n=ht().invertPitch;return n===void 0?!0:!!n}function V_(n){const e=ht();e.invertPitch=!!n,oi(e)}function W_(){return ht().controlMode==="gyro"?"gyro":"touch"}function yp(n){const e=ht();e.controlMode=n==="gyro"?"gyro":"touch",oi(e)}function yf(){const n=Number(ht().gyroSensitivity);return Number.isFinite(n)?Math.max(yn.sensMin,Math.min(yn.sensMax,n)):yn.sensDefault}function q_(n){const e=ht(),t=Number(n);e.gyroSensitivity=Number.isFinite(t)?Math.max(yn.sensMin,Math.min(yn.sensMax,t)):yn.sensDefault,oi(e)}const Eu=(n,e)=>(n=Number(n),Number.isFinite(n)?Math.max(0,Math.min(1,n)):e);function X_(){return Eu(ht().musicVolume,Et.musicVolume)}function $_(n){const e=ht();e.musicVolume=Eu(n,Et.musicVolume),oi(e)}function pv(){return!!ht().musicMuted}function mv(n){const e=ht();e.musicMuted=!!n,oi(e)}function j_(){return Eu(ht().sfxVolume,Et.sfxVolume)}function Y_(n){const e=ht();e.sfxVolume=Eu(n,Et.sfxVolume),oi(e)}function gv(){return!!ht().sfxMuted}function vv(n){const e=ht();e.sfxMuted=!!n,oi(e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="160",Z_=0,xp=1,K_=2,yv=1,J_=2,Ci=3,ps=0,Mn=1,Kt=2,as=0,tr=1,Al=2,_p=3,bp=4,Q_=5,Ns=100,eb=101,tb=102,Sp=103,Mp=104,nb=200,ib=201,sb=202,ob=203,ch=204,lh=205,rb=206,ab=207,cb=208,lb=209,ub=210,db=211,hb=212,fb=213,pb=214,mb=0,gb=1,vb=2,Tl=3,yb=4,xb=5,_b=6,bb=7,_f=0,Sb=1,Mb=2,cs=0,wb=1,Eb=2,Ab=3,Tb=4,Rb=5,Lb=6,xv=300,mr=301,gr=302,uh=303,dh=304,Au=306,hh=1e3,Jn=1001,fh=1002,gn=1003,wp=1004,Ku=1005,Fn=1006,Cb=1007,Ca=1008,ls=1009,Pb=1010,Ib=1011,bf=1012,_v=1013,ts=1014,ns=1015,Pa=1016,bv=1017,Sv=1018,js=1020,Nb=1021,Qn=1023,Db=1024,Ob=1025,Ys=1026,vr=1027,Ub=1028,Mv=1029,kb=1030,wv=1031,Ev=1033,Ju=33776,Qu=33777,ed=33778,td=33779,Ep=35840,Ap=35841,Tp=35842,Rp=35843,Av=36196,Lp=37492,Cp=37496,Pp=37808,Ip=37809,Np=37810,Dp=37811,Op=37812,Up=37813,kp=37814,Fp=37815,Bp=37816,zp=37817,Hp=37818,Gp=37819,Vp=37820,Wp=37821,nd=36492,qp=36494,Xp=36495,Fb=36283,$p=36284,jp=36285,Yp=36286,Tv=3e3,Zs=3001,Bb=3200,zb=3201,Rv=0,Hb=1,zn="",Ut="srgb",Hi="srgb-linear",Sf="display-p3",Tu="display-p3-linear",Rl="linear",dt="srgb",Ll="rec709",Cl="p3",_o=7680,Zp=519,Gb=512,Vb=513,Wb=514,Lv=515,qb=516,Xb=517,$b=518,jb=519,Kp=35044,Jp="300 es",ph=1035,Di=2e3,Pl=2001;class Lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qp=1234567;const nr=Math.PI/180,Ia=180/Math.PI;function fo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function Mf(n,e){return(n%e+e)%e}function Yb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Zb(n,e,t){return n!==e?(t-n)/(e-n):0}function da(n,e,t){return(1-t)*n+t*e}function Kb(n,e,t,i){return da(n,e,1-Math.exp(-t*i))}function Jb(n,e=1){return e-Math.abs(Mf(n,e*2)-e)}function Qb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function eS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function tS(n,e){return n+Math.floor(Math.random()*(e-n+1))}function nS(n,e){return n+Math.random()*(e-n)}function iS(n){return n*(.5-Math.random())}function sS(n){n!==void 0&&(Qp=n);let e=Qp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function oS(n){return n*nr}function rS(n){return n*Ia}function mh(n){return(n&n-1)===0&&n!==0}function aS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Il(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cS(n,e,t,i,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),l=o((e+i)/2),u=r((e+i)/2),d=o((e-i)/2),f=r((e-i)/2),m=o((i-e)/2),v=r((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*v,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*v,a*l);break;case"ZYZ":n.set(c*v,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ho(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gi={DEG2RAD:nr,RAD2DEG:Ia,generateUUID:fo,clamp:Zt,euclideanModulo:Mf,mapLinear:Yb,inverseLerp:Zb,lerp:da,damp:Kb,pingpong:Jb,smoothstep:Qb,smootherstep:eS,randInt:tS,randFloat:nS,randFloatSpread:iS,seededRandom:sS,degToRad:oS,radToDeg:rS,isPowerOfTwo:mh,ceilPowerOfTwo:aS,floorPowerOfTwo:Il,setQuaternionFromProperEuler:cS,normalize:hn,denormalize:Ho};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,o,r,a,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l)}set(e,t,i,s,o,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],v=i[8],y=s[0],p=s[3],h=s[6],_=s[1],g=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return o[0]=r*y+a*_+c*R,o[3]=r*p+a*g+c*E,o[6]=r*h+a*b+c*A,o[1]=l*y+u*_+d*R,o[4]=l*p+u*g+d*E,o[7]=l*h+u*b+d*A,o[2]=f*y+m*_+v*R,o[5]=f*p+m*g+v*E,o[8]=f*h+m*b+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*r-a*l,f=a*c-u*o,m=l*o-r*c,v=t*d+i*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(s*l-u*i)*y,e[2]=(a*i-s*r)*y,e[3]=f*y,e[4]=(u*t-s*c)*y,e[5]=(s*o-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(r*t-i*o)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(id.makeScale(e,t)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,t){return this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new He;function Cv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lS(){const n=Nl("canvas");return n.style.display="block",n}const em={};function ha(n){n in em||(em[n]=!0,console.warn(n))}const tm=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nm=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rc={[Hi]:{transfer:Rl,primaries:Ll,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:dt,primaries:Ll,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Tu]:{transfer:Rl,primaries:Cl,toReference:n=>n.applyMatrix3(nm),fromReference:n=>n.applyMatrix3(tm)},[Sf]:{transfer:dt,primaries:Cl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(nm),fromReference:n=>n.applyMatrix3(tm).convertLinearToSRGB()}},uS=new Set([Hi,Tu]),st={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!uS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=rc[e].toReference,s=rc[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return rc[n].primaries},getTransfer:function(n){return n===zn?Rl:rc[n].transfer}};function ir(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bo;class Pv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bo===void 0&&(bo=Nl("canvas")),bo.width=e.width,bo.height=e.height;const i=bo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=ir(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ir(t[i]/255)*255):t[i]=ir(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class Iv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(od(s[r].image)):o.push(od(s[r]))}else o=od(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function od(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Pv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class In extends Lr{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=Jn,s=Jn,o=Fn,r=Ca,a=Qn,c=ls,l=In.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=fo(),this.name="",this.source=new Iv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Zs?Ut:zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hh:e.x=e.x-Math.floor(e.x);break;case Jn:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hh:e.y=e.y-Math.floor(e.y);break;case Jn:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?Zs:Tv}set encoding(e){ha("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zs?Ut:zn}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=xv;In.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,s=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],v=c[9],y=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,b=(m+1)/2,R=(h+1)/2,E=(u+f)/4,A=(d+y)/4,k=(v+p)/4;return g>b&&g>R?g<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(g),s=E/i,o=A/i):b>R?b<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),i=E/s,o=k/s):R<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),i=A/o,s=k/o),this.set(i,s,o,t),this}let _=Math.sqrt((p-v)*(p-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((l+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fS extends Lr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(ha("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Zs?Ut:zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new In(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Iv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class so extends fS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nv extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pS extends In{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=o[r+0],m=o[r+1],v=o[r+2],y=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=y;return}if(d!==y||c!==f||l!==m||u!==v){let p=1-a;const h=c*f+l*m+u*v+d*y,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const R=Math.sqrt(g),E=Math.atan2(R,h*_);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const b=a*_;if(c=c*p+f*b,l=l*p+m*b,u=u*p+v*b,d=d*p+y*b,p===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=o[r],f=o[r+1],m=o[r+2],v=o[r+3];return e[t]=a*v+u*d+c*m-l*f,e[t+1]=c*v+u*f+l*d-a*m,e[t+2]=l*v+u*m+a*f-c*d,e[t+3]=u*v-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(o/2),f=c(i/2),m=c(s/2),v=c(o/2);switch(r){case"XYZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"YZX":this._x=f*u*d+l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d-f*m*v;break;case"XZY":this._x=f*u*d-l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(r-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(r-s)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(o),i*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(im.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*i),u=2*(a*t-o*s),d=2*(o*i-r*t);return this.x=t+c*l+r*d-a*u,this.y=i+c*u+a*l-o*d,this.z=s+c*d+o*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new I,im=new Ct;class po{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,$n):$n.fromBufferAttribute(o,r),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),cc.subVectors(this.max,kr),So.subVectors(e.a,kr),Mo.subVectors(e.b,kr),wo.subVectors(e.c,kr),qi.subVectors(Mo,So),Xi.subVectors(wo,Mo),ws.subVectors(So,wo);let t=[0,-qi.z,qi.y,0,-Xi.z,Xi.y,0,-ws.z,ws.y,qi.z,0,-qi.x,Xi.z,0,-Xi.x,ws.z,0,-ws.x,-qi.y,qi.x,0,-Xi.y,Xi.x,0,-ws.y,ws.x,0];return!ad(t,So,Mo,wo,cc)||(t=[1,0,0,0,1,0,0,0,1],!ad(t,So,Mo,wo,cc))?!1:(lc.crossVectors(qi,Xi),t=[lc.x,lc.y,lc.z],ad(t,So,Mo,wo,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new I,new I,new I,new I,new I,new I,new I,new I],$n=new I,ac=new po,So=new I,Mo=new I,wo=new I,qi=new I,Xi=new I,ws=new I,kr=new I,cc=new I,lc=new I,Es=new I;function ad(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){Es.fromArray(n,o);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),c=e.dot(Es),l=t.dot(Es),u=i.dot(Es);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const mS=new po,Fr=new I,cd=new I;class xs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Fr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(cd)),this.expandByPoint(Fr.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new I,ld=new I,uc=new I,$i=new I,ud=new I,dc=new I,dd=new I;class wf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ld.copy(e).add(t).multiplyScalar(.5),uc.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(ld);const o=e.distanceTo(t)*.5,r=-this.direction.dot(uc),a=$i.dot(this.direction),c=-$i.dot(uc),l=$i.lengthSq(),u=Math.abs(1-r*r);let d,f,m,v;if(u>0)if(d=r*c-a,f=r*a-c,v=o*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,m=d*(d+r*f+2*a)+f*(r*d+f+2*c)+l}else f=o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),m=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-o,-c),o),m=f*(f+2*c)+l):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),m=-d*d+f*(f+2*c)+l);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ld).addScaledVector(uc,f),m}intersectSphere(e,t){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),s=wi.dot(wi)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,o){ud.subVectors(t,e),dc.subVectors(i,e),dd.crossVectors(ud,dc);let r=this.direction.dot(dd),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;$i.subVectors(this.origin,e);const c=a*this.direction.dot(dc.crossVectors($i,dc));if(c<0)return null;const l=a*this.direction.dot(ud.cross($i));if(l<0||c+l>r)return null;const u=-a*$i.dot(dd);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p)}set(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=o,h[5]=r,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Eo.setFromMatrixColumn(e,0).length(),o=1/Eo.setFromMatrixColumn(e,1).length(),r=1/Eo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=r*u,m=r*d,v=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+v*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=v+m*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,v=l*u,y=l*d;t[0]=f+y*a,t[4]=v*a-m,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=m*a-v,t[6]=y+f*a,t[10]=r*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,v=l*u,y=l*d;t[0]=f-y*a,t[4]=-r*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=r*u,t[9]=y-f*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const f=r*u,m=r*d,v=a*u,y=a*d;t[0]=c*u,t[4]=v*l-m,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,m=r*l,v=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=v*d+m,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+v,t[10]=f-y*d}else if(e.order==="XZY"){const f=r*c,m=r*l,v=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=r*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,t,i){const s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),ji.crossVectors(i,An),ji.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),ji.crossVectors(i,An)),ji.normalize(),hc.crossVectors(An,ji),s[0]=ji.x,s[4]=hc.x,s[8]=An.x,s[1]=ji.y,s[5]=hc.y,s[9]=An.y,s[2]=ji.z,s[6]=hc.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],v=i[2],y=i[6],p=i[10],h=i[14],_=i[3],g=i[7],b=i[11],R=i[15],E=s[0],A=s[4],k=s[8],M=s[12],w=s[1],V=s[5],W=s[9],oe=s[13],U=s[2],q=s[6],j=s[10],Z=s[14],z=s[3],Q=s[7],ae=s[11],ue=s[15];return o[0]=r*E+a*w+c*U+l*z,o[4]=r*A+a*V+c*q+l*Q,o[8]=r*k+a*W+c*j+l*ae,o[12]=r*M+a*oe+c*Z+l*ue,o[1]=u*E+d*w+f*U+m*z,o[5]=u*A+d*V+f*q+m*Q,o[9]=u*k+d*W+f*j+m*ae,o[13]=u*M+d*oe+f*Z+m*ue,o[2]=v*E+y*w+p*U+h*z,o[6]=v*A+y*V+p*q+h*Q,o[10]=v*k+y*W+p*j+h*ae,o[14]=v*M+y*oe+p*Z+h*ue,o[3]=_*E+g*w+b*U+R*z,o[7]=_*A+g*V+b*q+R*Q,o[11]=_*k+g*W+b*j+R*ae,o[15]=_*M+g*oe+b*Z+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],y=e[7],p=e[11],h=e[15];return v*(+o*c*d-s*l*d-o*a*f+i*l*f+s*a*m-i*c*m)+y*(+t*c*m-t*l*f+o*r*f-s*r*m+s*l*u-o*c*u)+p*(+t*l*d-t*a*m-o*r*d+i*r*m+o*a*u-i*l*u)+h*(-s*a*u-t*c*d+t*a*f+s*r*d-i*r*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],y=e[13],p=e[14],h=e[15],_=d*p*l-y*f*l+y*c*m-a*p*m-d*c*h+a*f*h,g=v*f*l-u*p*l-v*c*m+r*p*m+u*c*h-r*f*h,b=u*y*l-v*d*l+v*a*m-r*y*m-u*a*h+r*d*h,R=v*d*c-u*y*c-v*a*f+r*y*f+u*a*p-r*d*p,E=t*_+i*g+s*b+o*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(y*f*o-d*p*o-y*s*m+i*p*m+d*s*h-i*f*h)*A,e[2]=(a*p*o-y*c*o+y*s*l-i*p*l-a*s*h+i*c*h)*A,e[3]=(d*c*o-a*f*o-d*s*l+i*f*l+a*s*m-i*c*m)*A,e[4]=g*A,e[5]=(u*p*o-v*f*o+v*s*m-t*p*m-u*s*h+t*f*h)*A,e[6]=(v*c*o-r*p*o-v*s*l+t*p*l+r*s*h-t*c*h)*A,e[7]=(r*f*o-u*c*o+u*s*l-t*f*l-r*s*m+t*c*m)*A,e[8]=b*A,e[9]=(v*d*o-u*y*o-v*i*m+t*y*m+u*i*h-t*d*h)*A,e[10]=(r*y*o-v*a*o+v*i*l-t*y*l-r*i*h+t*a*h)*A,e[11]=(u*a*o-r*d*o-u*i*l+t*d*l+r*i*m-t*a*m)*A,e[12]=R*A,e[13]=(u*y*s-v*d*s+v*i*f-t*y*f-u*i*p+t*d*p)*A,e[14]=(v*a*s-r*y*s-v*i*c+t*y*c+r*i*p-t*a*p)*A,e[15]=(r*d*s-u*a*s+u*i*c-t*d*c-r*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,c=e.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,u=r+r,d=a+a,f=o*l,m=o*u,v=o*d,y=r*u,p=r*d,h=a*d,_=c*l,g=c*u,b=c*d,R=i.x,E=i.y,A=i.z;return s[0]=(1-(y+h))*R,s[1]=(m+b)*R,s[2]=(v-g)*R,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(f+h))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(v+g)*A,s[9]=(p-_)*A,s[10]=(1-(f+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=Eo.set(s[0],s[1],s[2]).length();const r=Eo.set(s[4],s[5],s[6]).length(),a=Eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],jn.copy(this);const l=1/o,u=1/r,d=1/a;return jn.elements[0]*=l,jn.elements[1]*=l,jn.elements[2]*=l,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=d,jn.elements[9]*=d,jn.elements[10]*=d,t.setFromRotationMatrix(jn),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=Di){const c=this.elements,l=2*o/(t-e),u=2*o/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,v;if(a===Di)m=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===Pl)m=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=Di){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(r-o),f=(t+e)*l,m=(i+s)*u;let v,y;if(a===Di)v=(r+o)*d,y=-2*d;else if(a===Pl)v=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Eo=new I,jn=new Ke,gS=new I(0,0,0),vS=new I(1,1,1),ji=new I,hc=new I,An=new I,sm=new Ke,om=new Ct;class Wn{constructor(e=0,t=0,i=0,s=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yS=0;const rm=new I,Ao=new Ct,Ei=new Ke,fc=new I,Br=new I,xS=new I,_S=new Ct,am=new I(1,0,0),cm=new I(0,1,0),lm=new I(0,0,1),bS={type:"added"},SS={type:"removed"};class kt extends Lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new I,t=new Wn,i=new Ct,s=new I(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new He}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(lm,e)}translateOnAxis(e,t){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fc.copy(e):fc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Br,fc,this.up):Ei.lookAt(fc,Br,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(Ei),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(SS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,_S,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),f=r(e.skeletons),m=r(e.animations),v=r(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}kt.DEFAULT_UP=new I(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new I,Ai=new I,hd=new I,Ti=new I,To=new I,Ro=new I,um=new I,fd=new I,pd=new I,md=new I;let pc=!1;class Bn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Yn.subVectors(e,t),s.cross(Yn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Yn.subVectors(s,t),Ai.subVectors(i,t),hd.subVectors(e,t);const r=Yn.dot(Yn),a=Yn.dot(Ai),c=Yn.dot(hd),l=Ai.dot(Ai),u=Ai.dot(hd),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(l*c-a*u)*f,v=(r*u-a*c)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getUV(e,t,i,s,o,r,a,c){return pc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pc=!0),this.getInterpolation(e,t,i,s,o,r,a,c)}static getInterpolation(e,t,i,s,o,r,a,c){return this.getBarycoord(e,t,i,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Ti.x),c.addScaledVector(r,Ti.y),c.addScaledVector(a,Ti.z),c)}static isFrontFacing(e,t,i,s){return Yn.subVectors(i,t),Ai.subVectors(e,t),Yn.cross(Ai).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Yn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,o){return pc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),pc=!0),Bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}getInterpolation(e,t,i,s,o){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;To.subVectors(s,i),Ro.subVectors(o,i),fd.subVectors(e,i);const c=To.dot(fd),l=Ro.dot(fd);if(c<=0&&l<=0)return t.copy(i);pd.subVectors(e,s);const u=To.dot(pd),d=Ro.dot(pd);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(To,r);md.subVectors(e,o);const m=To.dot(md),v=Ro.dot(md);if(v>=0&&m<=v)return t.copy(o);const y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(Ro,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return um.subVectors(o,s),a=(d-u)/(d-u+(m-v)),t.copy(s).addScaledVector(um,a);const h=1/(p+y+f);return r=y*h,a=f*h,t.copy(i).addScaledVector(To,r).addScaledVector(Ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},mc={h:0,s:0,l:0};function gd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ee{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Mf(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=gd(r,o,e+1/3),this.g=gd(r,o,e),this.b=gd(r,o,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=Ov[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=sd(e.r),this.g=sd(e.g),this.b=sd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return st.fromWorkingColorSpace(nn.copy(this),e),Math.round(Zt(nn.r*255,0,255))*65536+Math.round(Zt(nn.g*255,0,255))*256+Math.round(Zt(nn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(nn.copy(this),t);const i=nn.r,s=nn.g,o=nn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Ut){st.fromWorkingColorSpace(nn.copy(this),e);const t=nn.r,i=nn.g,s=nn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(mc);const i=da(Yi.h,mc.h,t),s=da(Yi.s,mc.s,t),o=da(Yi.l,mc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ee;Ee.NAMES=Ov;let MS=0;class mo extends Lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=fo(),this.name="",this.type="Material",this.blending=tr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=lh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Tl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==tr&&(i.blending=this.blending),this.side!==ps&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==lh&&(i.blendDst=this.blendDst),this.blendEquation!==Ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Tl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new I,gc=new pe;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ho(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=hn(t,this.array),i=hn(i,this.array),s=hn(s,this.array),o=hn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kp&&(e.usage=this.usage),e}}class Uv extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kv extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wS=0;const On=new Ke,vd=new kt,Lo=new I,Tn=new po,zr=new po,Gt=new I;class gt extends Lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cv(e)?kv:Uv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new He().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,i){return On.makeTranslation(e,t,i),this.applyMatrix4(On),this}scale(e,t,i){return On.makeScale(e,t,i),this.applyMatrix4(On),this}lookAt(e){return vd.lookAt(e),vd.updateMatrix(),this.applyMatrix4(vd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];Tn.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Tn.min,zr.min),Tn.expandByPoint(Gt),Gt.addVectors(Tn.max,zr.max),Tn.expandByPoint(Gt)):(Tn.expandByPoint(zr.min),Tn.expandByPoint(zr.max))}Tn.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Gt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Gt.fromBufferAttribute(a,l),c&&(Lo.fromBufferAttribute(e,l),Gt.add(Lo)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,o=t.normal.array,r=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new I,u[w]=new I;const d=new I,f=new I,m=new I,v=new pe,y=new pe,p=new pe,h=new I,_=new I;function g(w,V,W){d.fromArray(s,w*3),f.fromArray(s,V*3),m.fromArray(s,W*3),v.fromArray(r,w*2),y.fromArray(r,V*2),p.fromArray(r,W*2),f.sub(d),m.sub(d),y.sub(v),p.sub(v);const oe=1/(y.x*p.y-p.x*y.y);isFinite(oe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(oe),_.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(oe),l[w].add(h),l[V].add(h),l[W].add(h),u[w].add(_),u[V].add(_),u[W].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,U=W.count;for(let q=oe,j=oe+U;q<j;q+=3)g(i[q+0],i[q+1],i[q+2])}const R=new I,E=new I,A=new I,k=new I;function M(w){A.fromArray(o,w*3),k.copy(A);const V=l[w];R.copy(V),R.sub(A.multiplyScalar(A.dot(V))).normalize(),E.crossVectors(k,V);const oe=E.dot(u[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=oe}for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,U=W.count;for(let q=oe,j=oe+U;q<j;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,y),r.fromBufferAttribute(t,p),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let h=0;h<u;h++)f[v++]=l[m++]}return new Nt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new Ke,As=new wf,vc=new xs,hm=new I,Co=new I,Po=new I,Io=new I,yd=new I,yc=new I,xc=new pe,_c=new pe,bc=new pe,fm=new I,pm=new I,mm=new I,Sc=new I,Mc=new I;class tt extends kt{constructor(e=new gt,t=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){yc.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(yd.fromBufferAttribute(d,e),r?yc.addScaledVector(yd,u):yc.addScaledVector(yd.sub(t),u))}t.add(yc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(o),As.copy(e.ray).recast(e.near),!(vc.containsPoint(As.origin)===!1&&(As.intersectSphere(vc,hm)===null||As.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(o).invert(),As.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,y=f.length;v<y;v++){const p=f[v],h=r[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=a.getX(b),A=a.getX(b+1),k=a.getX(b+2);s=wc(this,h,e,i,l,u,d,E,A,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,h=y;p<h;p+=3){const _=a.getX(p),g=a.getX(p+1),b=a.getX(p+2);s=wc(this,r,e,i,l,u,d,_,g,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,y=f.length;v<y;v++){const p=f[v],h=r[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=b,A=b+1,k=b+2;s=wc(this,h,e,i,l,u,d,E,A,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=v,h=y;p<h;p+=3){const _=p,g=p+1,b=p+2;s=wc(this,r,e,i,l,u,d,_,g,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function ES(n,e,t,i,s,o,r,a){let c;if(e.side===Mn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,e.side===ps,a),c===null)return null;Mc.copy(a),Mc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Mc);return l<t.near||l>t.far?null:{distance:l,point:Mc.clone(),object:n}}function wc(n,e,t,i,s,o,r,a,c,l){n.getVertexPosition(a,Co),n.getVertexPosition(c,Po),n.getVertexPosition(l,Io);const u=ES(n,e,t,i,Co,Po,Io,Sc);if(u){s&&(xc.fromBufferAttribute(s,a),_c.fromBufferAttribute(s,c),bc.fromBufferAttribute(s,l),u.uv=Bn.getInterpolation(Sc,Co,Po,Io,xc,_c,bc,new pe)),o&&(xc.fromBufferAttribute(o,a),_c.fromBufferAttribute(o,c),bc.fromBufferAttribute(o,l),u.uv1=Bn.getInterpolation(Sc,Co,Po,Io,xc,_c,bc,new pe),u.uv2=u.uv1),r&&(fm.fromBufferAttribute(r,a),pm.fromBufferAttribute(r,c),mm.fromBufferAttribute(r,l),u.normal=Bn.getInterpolation(Sc,Co,Po,Io,fm,pm,mm,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};Bn.getNormal(Co,Po,Io,d.normal),u.face=d}return u}class rn extends gt{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,r,o,0),v("z","y","x",1,-1,i,t,-e,r,o,1),v("x","z","y",1,1,e,i,t,s,r,2),v("x","z","y",1,-1,e,i,-t,s,r,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function v(y,p,h,_,g,b,R,E,A,k,M){const w=b/A,V=R/k,W=b/2,oe=R/2,U=E/2,q=A+1,j=k+1;let Z=0,z=0;const Q=new I;for(let ae=0;ae<j;ae++){const ue=ae*V-oe;for(let ye=0;ye<q;ye++){const te=ye*w-W;Q[y]=te*_,Q[p]=ue*g,Q[h]=U,l.push(Q.x,Q.y,Q.z),Q[y]=0,Q[p]=0,Q[h]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(ye/A),d.push(1-ae/k),Z+=1}}for(let ae=0;ae<k;ae++)for(let ue=0;ue<A;ue++){const ye=f+ue+q*ae,te=f+ue+q*(ae+1),O=f+(ue+1)+q*(ae+1),N=f+(ue+1)+q*ae;c.push(ye,te,N),c.push(te,O,N),z+=6}a.addGroup(m,z,M),m+=z,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const s in i)e[s]=i[s]}return e}function AS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fv(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const TS={clone:yr,merge:fn};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bv extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rn extends Bv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(nr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(nr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const No=-90,Do=1;class CS extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(No,Do,e,t);s.layers=this.layers,this.add(s);const o=new Rn(No,Do,e,t);o.layers=this.layers,this.add(o);const r=new Rn(No,Do,e,t);r.layers=this.layers,this.add(r);const a=new Rn(No,Do,e,t);a.layers=this.layers,this.add(a);const c=new Rn(No,Do,e,t);c.layers=this.layers,this.add(c);const l=new Rn(No,Do,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class zv extends In{constructor(e,t,i,s,o,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PS extends so{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ha("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zs?Ut:zn),this.texture=new zv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rn(5,5,5),o=new ms({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:as});o.uniforms.tEquirect.value=t;const r=new tt(s,o),a=t.minFilter;return t.minFilter===Ca&&(t.minFilter=Fn),new CS(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const xd=new I,IS=new I,NS=new He;class Cs{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=xd.subVectors(i,t).cross(IS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(xd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||NS.getNormalMatrix(e),s=this.coplanarPoint(xd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new xs,Ec=new I;class Ef{constructor(e=new Cs,t=new Cs,i=new Cs,s=new Cs,o=new Cs,r=new Cs){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],y=s[10],p=s[11],h=s[12],_=s[13],g=s[14],b=s[15];if(i[0].setComponents(c-o,f-l,p-m,b-h).normalize(),i[1].setComponents(c+o,f+l,p+m,b+h).normalize(),i[2].setComponents(c+r,f+u,p+v,b+_).normalize(),i[3].setComponents(c-r,f-u,p-v,b-_).normalize(),i[4].setComponents(c-a,f-d,p-y,b-g).normalize(),t===Di)i[5].setComponents(c+a,f+d,p+y,b+g).normalize();else if(t===Pl)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ec.x=s.normal.x>0?e.max.x:e.min.x,Ec.y=s.normal.y>0?e.max.y:e.min.y,Ec.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hv(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function DS(n,e){const t=e.isWebGL2,i=new WeakMap;function s(l,u){const d=l.array,f=l.usage,m=d.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,d,f),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function o(l,u,d){const f=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&v.length===0&&n.bufferSubData(d,0,f),v.length!==0){for(let y=0,p=v.length;y<p;y++){const h=v[y];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);if(d===void 0)i.set(l,s(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,l,u),d.version=l.version}}return{get:r,remove:a,update:c}}class go extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,m=[],v=[],y=[],p=[];for(let h=0;h<u;h++){const _=h*f-r;for(let g=0;g<l;g++){const b=g*d-o;v.push(b,-_,0),y.push(0,0,1),p.push(g/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<a;_++){const g=_+l*h,b=_+l*(h+1),R=_+1+l*(h+1),E=_+1+l*h;m.push(g,b,E),m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.widthSegments,e.heightSegments)}}var OS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
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
#endif`,kS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HS=`#ifdef USE_AOMAP
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
#endif`,GS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
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
#endif`,WS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jS=`#ifdef USE_IRIDESCENCE
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
#endif`,YS=`#ifdef USE_BUMPMAP
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
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
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`
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
}`,fM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
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
}`,MM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
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
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
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
#endif`,DM=`struct PhysicalMaterial {
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
}`,OM=`
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YM=`#ifdef USE_MORPHNORMALS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
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
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ew=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iw=`#ifdef USE_NORMALMAP
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
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xw=`float getShadowMask() {
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
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mw=`#ifdef USE_SKINNING
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
#endif`,ww=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ew=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`#include <common>
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
}`,Hw=`#if DEPTH_PACKING == 3200
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
}`,Gw=`#define DISTANCE
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
}`,Vw=`#define DISTANCE
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`uniform float scale;
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
}`,$w=`uniform vec3 diffuse;
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
}`,jw=`#include <common>
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
}`,Yw=`uniform vec3 diffuse;
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
}`,Zw=`#define LAMBERT
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
}`,Kw=`#define LAMBERT
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
}`,Jw=`#define MATCAP
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
}`,Qw=`#define MATCAP
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
}`,eE=`#define NORMAL
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
}`,tE=`#define NORMAL
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
}`,nE=`#define PHONG
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
}`,iE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,oE=`#define STANDARD
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
}`,rE=`#define TOON
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
}`,aE=`#define TOON
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
}`,cE=`uniform float size;
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
}`,lE=`uniform vec3 diffuse;
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
}`,uE=`#include <common>
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
}`,dE=`uniform vec3 color;
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
}`,hE=`uniform float rotation;
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
}`,fE=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:OS,alphahash_pars_fragment:US,alphamap_fragment:kS,alphamap_pars_fragment:FS,alphatest_fragment:BS,alphatest_pars_fragment:zS,aomap_fragment:HS,aomap_pars_fragment:GS,batching_pars_vertex:VS,batching_vertex:WS,begin_vertex:qS,beginnormal_vertex:XS,bsdfs:$S,iridescence_fragment:jS,bumpmap_pars_fragment:YS,clipping_planes_fragment:ZS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:QS,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:sM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:rM,displacementmap_pars_vertex:aM,displacementmap_vertex:cM,emissivemap_fragment:lM,emissivemap_pars_fragment:uM,colorspace_fragment:dM,colorspace_pars_fragment:hM,envmap_fragment:fM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:RM,envmap_vertex:vM,fog_vertex:yM,fog_pars_vertex:xM,fog_fragment:_M,fog_pars_fragment:bM,gradientmap_pars_fragment:SM,lightmap_fragment:MM,lightmap_pars_fragment:wM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:AM,lights_pars_begin:TM,lights_toon_fragment:LM,lights_toon_pars_fragment:CM,lights_phong_fragment:PM,lights_phong_pars_fragment:IM,lights_physical_fragment:NM,lights_physical_pars_fragment:DM,lights_fragment_begin:OM,lights_fragment_maps:UM,lights_fragment_end:kM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:WM,map_particle_pars_fragment:qM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:$M,morphcolor_vertex:jM,morphnormal_vertex:YM,morphtarget_pars_vertex:ZM,morphtarget_vertex:KM,normal_fragment_begin:JM,normal_fragment_maps:QM,normal_pars_fragment:ew,normal_pars_vertex:tw,normal_vertex:nw,normalmap_pars_fragment:iw,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:rw,iridescence_pars_fragment:aw,opaque_fragment:cw,packing:lw,premultiplied_alpha_fragment:uw,project_vertex:dw,dithering_fragment:hw,dithering_pars_fragment:fw,roughnessmap_fragment:pw,roughnessmap_pars_fragment:mw,shadowmap_pars_fragment:gw,shadowmap_pars_vertex:vw,shadowmap_vertex:yw,shadowmask_pars_fragment:xw,skinbase_vertex:_w,skinning_pars_vertex:bw,skinning_vertex:Sw,skinnormal_vertex:Mw,specularmap_fragment:ww,specularmap_pars_fragment:Ew,tonemapping_fragment:Aw,tonemapping_pars_fragment:Tw,transmission_fragment:Rw,transmission_pars_fragment:Lw,uv_pars_fragment:Cw,uv_pars_vertex:Pw,uv_vertex:Iw,worldpos_vertex:Nw,background_vert:Dw,background_frag:Ow,backgroundCube_vert:Uw,backgroundCube_frag:kw,cube_vert:Fw,cube_frag:Bw,depth_vert:zw,depth_frag:Hw,distanceRGBA_vert:Gw,distanceRGBA_frag:Vw,equirect_vert:Ww,equirect_frag:qw,linedashed_vert:Xw,linedashed_frag:$w,meshbasic_vert:jw,meshbasic_frag:Yw,meshlambert_vert:Zw,meshlambert_frag:Kw,meshmatcap_vert:Jw,meshmatcap_frag:Qw,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:nE,meshphong_frag:iE,meshphysical_vert:sE,meshphysical_frag:oE,meshtoon_vert:rE,meshtoon_frag:aE,points_vert:cE,points_frag:lE,shadow_vert:uE,shadow_frag:dE,sprite_vert:hE,sprite_frag:fE},be={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ui={basic:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:fn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:fn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:fn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:fn([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:fn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:fn([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:fn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:fn([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:fn([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:fn([be.lights,be.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ui.physical={uniforms:fn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ac={r:0,b:0,g:0};function pE(n,e,t,i,s,o,r){const a=new Ee(0);let c=o===!0?0:1,l,u,d=null,f=0,m=null;function v(p,h){let _=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(a,c):g&&g.isColor&&(y(g,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Au)?(u===void 0&&(u=new tt(new rn(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:yr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=st.getTransfer(g.colorSpace)!==dt,(d!==g||f!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new tt(new go(2,2),new ms({name:"BackgroundMaterial",uniforms:yr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=st.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,h){p.getRGB(Ac,Fv(n)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,h,r)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),c=h,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:v}}function mE(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||o!==null,a={},c=p(null);let l=c,u=!1;function d(U,q,j,Z,z){let Q=!1;if(r){const ae=y(Z,j,q);l!==ae&&(l=ae,m(l.object)),Q=h(U,Z,j,z),Q&&_(U,Z,j,z)}else{const ae=q.wireframe===!0;(l.geometry!==Z.id||l.program!==j.id||l.wireframe!==ae)&&(l.geometry=Z.id,l.program=j.id,l.wireframe=ae,Q=!0)}z!==null&&t.update(z,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,k(U,q,j,Z),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):o.bindVertexArrayOES(U)}function v(U){return i.isWebGL2?n.deleteVertexArray(U):o.deleteVertexArrayOES(U)}function y(U,q,j){const Z=j.wireframe===!0;let z=a[U.id];z===void 0&&(z={},a[U.id]=z);let Q=z[q.id];Q===void 0&&(Q={},z[q.id]=Q);let ae=Q[Z];return ae===void 0&&(ae=p(f()),Q[Z]=ae),ae}function p(U){const q=[],j=[],Z=[];for(let z=0;z<s;z++)q[z]=0,j[z]=0,Z[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:Z,object:U,attributes:{},index:null}}function h(U,q,j,Z){const z=l.attributes,Q=q.attributes;let ae=0;const ue=j.getAttributes();for(const ye in ue)if(ue[ye].location>=0){const O=z[ye];let N=Q[ye];if(N===void 0&&(ye==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),ye==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),O===void 0||O.attribute!==N||N&&O.data!==N.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Z}function _(U,q,j,Z){const z={},Q=q.attributes;let ae=0;const ue=j.getAttributes();for(const ye in ue)if(ue[ye].location>=0){let O=Q[ye];O===void 0&&(ye==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),ye==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const N={};N.attribute=O,O&&O.data&&(N.data=O.data),z[ye]=N,ae++}l.attributes=z,l.attributesNum=ae,l.index=Z}function g(){const U=l.newAttributes;for(let q=0,j=U.length;q<j;q++)U[q]=0}function b(U){R(U,0)}function R(U,q){const j=l.newAttributes,Z=l.enabledAttributes,z=l.attributeDivisors;j[U]=1,Z[U]===0&&(n.enableVertexAttribArray(U),Z[U]=1),z[U]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,q),z[U]=q)}function E(){const U=l.newAttributes,q=l.enabledAttributes;for(let j=0,Z=q.length;j<Z;j++)q[j]!==U[j]&&(n.disableVertexAttribArray(j),q[j]=0)}function A(U,q,j,Z,z,Q,ae){ae===!0?n.vertexAttribIPointer(U,q,j,z,Q):n.vertexAttribPointer(U,q,j,Z,z,Q)}function k(U,q,j,Z){if(i.isWebGL2===!1&&(U.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const z=Z.attributes,Q=j.getAttributes(),ae=q.defaultAttributeValues;for(const ue in Q){const ye=Q[ue];if(ye.location>=0){let te=z[ue];if(te===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){const O=te.normalized,N=te.itemSize,L=t.get(te);if(L===void 0)continue;const T=L.buffer,ee=L.type,ce=L.bytesPerElement,X=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||te.gpuType===_v);if(te.isInterleavedBufferAttribute){const de=te.data,P=de.stride,ne=te.offset;if(de.isInstancedInterleavedBuffer){for(let B=0;B<ye.locationSize;B++)R(ye.location+B,de.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let B=0;B<ye.locationSize;B++)b(ye.location+B);n.bindBuffer(n.ARRAY_BUFFER,T);for(let B=0;B<ye.locationSize;B++)A(ye.location+B,N/ye.locationSize,ee,O,P*ce,(ne+N/ye.locationSize*B)*ce,X)}else{if(te.isInstancedBufferAttribute){for(let de=0;de<ye.locationSize;de++)R(ye.location+de,te.meshPerAttribute);U.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let de=0;de<ye.locationSize;de++)b(ye.location+de);n.bindBuffer(n.ARRAY_BUFFER,T);for(let de=0;de<ye.locationSize;de++)A(ye.location+de,N/ye.locationSize,ee,O,N*ce,N/ye.locationSize*de*ce,X)}}else if(ae!==void 0){const O=ae[ue];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ye.location,O);break;case 3:n.vertexAttrib3fv(ye.location,O);break;case 4:n.vertexAttrib4fv(ye.location,O);break;default:n.vertexAttrib1fv(ye.location,O)}}}}E()}function M(){W();for(const U in a){const q=a[U];for(const j in q){const Z=q[j];for(const z in Z)v(Z[z].object),delete Z[z];delete q[j]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;const q=a[U.id];for(const j in q){const Z=q[j];for(const z in Z)v(Z[z].object),delete Z[z];delete q[j]}delete a[U.id]}function V(U){for(const q in a){const j=a[q];if(j[U.id]===void 0)continue;const Z=j[U.id];for(const z in Z)v(Z[z].object),delete Z[z];delete j[U.id]}}function W(){oe(),u=!0,l!==c&&(l=c,m(l.object))}function oe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:b,disableUnusedAttributes:E}}function gE(n,e,t,i){const s=i.isWebGL2;let o;function r(u){o=u}function a(u,d){n.drawArrays(o,u,d),t.update(d,o,1)}function c(u,d,f){if(f===0)return;let m,v;if(s)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](o,u,d,f),t.update(d,o,f)}function l(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(u[v],d[v]);else{m.multiDrawArraysWEBGL(o,u,0,d,0,f);let v=0;for(let y=0;y<f;y++)v+=d[y];t.update(v,o,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function vE(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,b=r||e.has("OES_texture_float"),R=g&&b,E=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function yE(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new Cs,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||o&&!p)o?u(null):l();else{const _=o?0:i,g=_*4;let b=h.clippingState||null;c.value=b,b=u(v,f,g,m);for(let R=0;R!==g;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,v){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=c.value,v!==!0||p===null){const h=m+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let g=0,b=m;g!==y;++g,b+=4)r.copy(d[g]).applyMatrix4(_,a),r.normal.toArray(p,b),p[b+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function xE(n){let e=new WeakMap;function t(r,a){return a===uh?r.mapping=mr:a===dh&&(r.mapping=gr),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===uh||a===dh)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new PS(c.height/2);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Gv extends Bv{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const qo=4,gm=[.125,.215,.35,.446,.526,.582],Ds=20,_d=new Gv,vm=new Ee;let bd=null,Sd=0,Md=0;const Ps=(1+Math.sqrt(5))/2,Oo=1/Ps,ym=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ps,Oo),new I(0,Ps,-Oo),new I(Oo,0,Ps),new I(-Oo,0,Ps),new I(Ps,Oo,0),new I(-Ps,Oo,0)];class xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){bd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bd,Sd,Md),e.scissorTest=!1,Tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Md=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Pa,format:Qn,colorSpace:Hi,depthBuffer:!1},s=_m(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_E(o)),this._blurMaterial=bE(o,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,_d)}_sceneToCubeUV(e,t,i,s){const a=new Rn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vm),u.toneMapping=cs,u.autoClear=!1;const m=new qn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),v=new tt(new rn,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(vm),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):_===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const g=this._cubeSize;Tc(s,_*g,h>2?g:0,g,g),u.setRenderTarget(s),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===mr||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bm());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new tt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;Tc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,_d)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=ym[(s-1)%ym.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ds-1),y=o/v,p=isFinite(o)?1+Math.floor(u*y):Ds;p>Ds&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ds}`);const h=[];let _=0;for(let A=0;A<Ds;++A){const k=A/y,M=Math.exp(-k*k/2);h.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const b=this._sizeLods[s],R=3*b*(s>g-qo?s-g+qo:0),E=4*(this._cubeSize-b);Tc(t,R,E,3*b,2*b),c.setRenderTarget(t),c.render(d,_d)}}function _E(n){const e=[],t=[],i=[];let s=n;const o=n-qo+1+gm.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>n-qo?c=gm[r-n+qo-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,y=3,p=2,h=1,_=new Float32Array(y*v*m),g=new Float32Array(p*v*m),b=new Float32Array(h*v*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,k=E>2?0:-1,M=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];_.set(M,y*v*E),g.set(f,p*v*E);const w=[E,E,E,E,E,E];b.set(w,h*v*E)}const R=new gt;R.setAttribute("position",new Nt(_,y)),R.setAttribute("uv",new Nt(g,p)),R.setAttribute("faceIndex",new Nt(b,h)),e.push(R),s>qo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _m(n,e,t){const i=new so(n,e,t);return i.texture.mapping=Au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function bE(n,e,t){const i=new Float32Array(Ds),s=new I(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Af(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function bm(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Af(),fragmentShader:`

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
		`,blending:as,depthTest:!1,depthWrite:!1})}function Sm(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:as,depthTest:!1,depthWrite:!1})}function Af(){return`

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
	`}function SE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===uh||c===dh,u=c===mr||c===gr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new xm(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new xm(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function ME(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function wE(n,e,t,i){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let p=0,h=y.length;p<h;p++)e.remove(y[p])}f.removeEventListener("dispose",r),delete s[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const y=m[v];for(let p=0,h=y.length;p<h;p++)e.update(y[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,v=d.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,b=_.length;g<b;g+=3){const R=_[g+0],E=_[g+1],A=_[g+2];f.push(R,E,E,A,A,R)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,b=_.length/3-1;g<b;g+=3){const R=g+0,E=g+1,A=g+2;f.push(R,E,E,A,A,R)}}else return;const p=new(Cv(f)?kv:Uv)(f,1);p.version=y;const h=o.get(d);h&&e.remove(h),o.set(d,p)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function EE(n,e,t,i){const s=i.isWebGL2;let o;function r(m){o=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,v){n.drawElements(o,v,a,m*c),t.update(v,o,1)}function d(m,v,y){if(y===0)return;let p,h;if(s)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](o,v,a,m*c,y),t.update(v,o,y)}function f(m,v,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<y;h++)this.render(m[h]/c,v[h]);else{p.multiDrawElementsWEBGL(o,v,0,a,m,0,y);let h=0;for(let _=0;_<y;_++)h+=v[_];t.update(h,o,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function AE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function TE(n,e){return n[0]-e[0]}function RE(n,e){return Math.abs(e[1])-Math.abs(n[1])}function LE(n,e,t){const i={},s=new Float32Array(8),o=new WeakMap,r=new $t,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let y=o.get(u);if(y===void 0||y.count!==v){let U=function(){W.dispose(),o.delete(u),u.removeEventListener("dispose",U)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let k=0;_===!0&&(k=1),g===!0&&(k=2),b===!0&&(k=3);let M=u.attributes.position.count*k,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*w*4*v),W=new Nv(V,M,w,v);W.type=ns,W.needsUpdate=!0;const oe=k*4;for(let q=0;q<v;q++){const j=R[q],Z=E[q],z=A[q],Q=M*w*4*q;for(let ae=0;ae<j.count;ae++){const ue=ae*oe;_===!0&&(r.fromBufferAttribute(j,ae),V[Q+ue+0]=r.x,V[Q+ue+1]=r.y,V[Q+ue+2]=r.z,V[Q+ue+3]=0),g===!0&&(r.fromBufferAttribute(Z,ae),V[Q+ue+4]=r.x,V[Q+ue+5]=r.y,V[Q+ue+6]=r.z,V[Q+ue+7]=0),b===!0&&(r.fromBufferAttribute(z,ae),V[Q+ue+8]=r.x,V[Q+ue+9]=r.y,V[Q+ue+10]=r.z,V[Q+ue+11]=z.itemSize===4?r.w:1)}}y={count:v,texture:W,size:new pe(M,w)},o.set(u,y),u.addEventListener("dispose",U)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const m=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let g=0;g<m;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<m;g++){const b=v[g];b[0]=g,b[1]=f[g]}v.sort(RE);for(let g=0;g<8;g++)g<m&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(TE);const y=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const b=a[g],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(y&&u.getAttribute("morphTarget"+g)!==y[R]&&u.setAttribute("morphTarget"+g,y[R]),p&&u.getAttribute("morphNormal"+g)!==p[R]&&u.setAttribute("morphNormal"+g,p[R]),s[g]=E,h+=E):(y&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),p&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),s[g]=0)}const _=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function CE(n,e,t,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class Vv extends In{constructor(e,t,i,s,o,r,a,c,l,u){if(u=u!==void 0?u:Ys,u!==Ys&&u!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ys&&(i=ts),i===void 0&&u===vr&&(i=js),super(null,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Wv=new In,qv=new Vv(1,1);qv.compareFunction=Lv;const Xv=new Nv,$v=new pS,jv=new zv,Mm=[],wm=[],Em=new Float32Array(16),Am=new Float32Array(9),Tm=new Float32Array(4);function Cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=Mm[s];if(o===void 0&&(o=new Float32Array(s),Mm[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ru(n,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function IE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function NE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function DE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function OE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Tm.set(i),n.uniformMatrix2fv(this.addr,!1,Tm),Bt(t,i)}}function UE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Am.set(i),n.uniformMatrix3fv(this.addr,!1,Am),Bt(t,i)}}function kE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ft(t,i))return;Em.set(i),n.uniformMatrix4fv(this.addr,!1,Em),Bt(t,i)}}function FE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function zE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function HE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function GE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function WE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function qE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function XE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const o=this.type===n.SAMPLER_2D_SHADOW?qv:Wv;t.setTexture2D(e||o,s)}function $E(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||$v,s)}function jE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jv,s)}function YE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xv,s)}function ZE(n){switch(n){case 5126:return PE;case 35664:return IE;case 35665:return NE;case 35666:return DE;case 35674:return OE;case 35675:return UE;case 35676:return kE;case 5124:case 35670:return FE;case 35667:case 35671:return BE;case 35668:case 35672:return zE;case 35669:case 35673:return HE;case 5125:return GE;case 36294:return VE;case 36295:return WE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return YE}}function KE(n,e){n.uniform1fv(this.addr,e)}function JE(n,e){const t=Cr(e,this.size,2);n.uniform2fv(this.addr,t)}function QE(n,e){const t=Cr(e,this.size,3);n.uniform3fv(this.addr,t)}function eA(n,e){const t=Cr(e,this.size,4);n.uniform4fv(this.addr,t)}function tA(n,e){const t=Cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nA(n,e){const t=Cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iA(n,e){const t=Cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sA(n,e){n.uniform1iv(this.addr,e)}function oA(n,e){n.uniform2iv(this.addr,e)}function rA(n,e){n.uniform3iv(this.addr,e)}function aA(n,e){n.uniform4iv(this.addr,e)}function cA(n,e){n.uniform1uiv(this.addr,e)}function lA(n,e){n.uniform2uiv(this.addr,e)}function uA(n,e){n.uniform3uiv(this.addr,e)}function dA(n,e){n.uniform4uiv(this.addr,e)}function hA(n,e,t){const i=this.cache,s=e.length,o=Ru(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Wv,o[r])}function fA(n,e,t){const i=this.cache,s=e.length,o=Ru(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||$v,o[r])}function pA(n,e,t){const i=this.cache,s=e.length,o=Ru(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||jv,o[r])}function mA(n,e,t){const i=this.cache,s=e.length,o=Ru(t,s);Ft(i,o)||(n.uniform1iv(this.addr,o),Bt(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Xv,o[r])}function gA(n){switch(n){case 5126:return KE;case 35664:return JE;case 35665:return QE;case 35666:return eA;case 35674:return tA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return sA;case 35667:case 35671:return oA;case 35668:case 35672:return rA;case 35669:case 35673:return aA;case 5125:return cA;case 36294:return lA;case 36295:return uA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class vA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ZE(t.type)}}class yA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gA(t.type)}}class xA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function Rm(n,e){n.seq.push(e),n.map[e.id]=e}function _A(n,e,t){const i=n.name,s=i.length;for(wd.lastIndex=0;;){const o=wd.exec(i),r=wd.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Rm(t,l===void 0?new vA(a,n,e):new yA(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new xA(a),Rm(t,d)),t=d}}}class al{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);_A(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Lm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bA=37297;let SA=0;function MA(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}function wA(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===Cl&&t===Ll?i="LinearDisplayP3ToLinearSRGB":e===Ll&&t===Cl&&(i="LinearSRGBToLinearDisplayP3"),n){case Hi:case Tu:return[i,"LinearTransferOETF"];case Ut:case Sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Cm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+MA(n.getShaderSource(e),r)}else return s}function EA(n,e){const t=wA(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function AA(n,e){let t;switch(e){case wb:t="Linear";break;case Eb:t="Reinhard";break;case Ab:t="OptimizedCineon";break;case Tb:t="ACESFilmic";break;case Lb:t="AgX";break;case Rb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function TA(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Xo).join(`
`)}function RA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Xo).join(`
`)}function LA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function Xo(n){return n!==""}function Pm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Im(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PA=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(n){return n.replace(PA,NA)}const IA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function NA(n,e){let t=Xe[e];if(t===void 0){const i=IA.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gh(t)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(n){return n.replace(DA,OA)}function OA(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Dm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function kA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gr:e="ENVMAP_MODE_REFRACTION";break}return e}function BA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _f:e="ENVMAP_BLENDING_MULTIPLY";break;case Sb:e="ENVMAP_BLENDING_MIX";break;case Mb:e="ENVMAP_BLENDING_ADD";break}return e}function zA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HA(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=UA(t),l=kA(t),u=FA(t),d=BA(t),f=zA(t),m=t.isWebGL2?"":TA(t),v=RA(t),y=LA(o),p=s.createProgram();let h,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xo).join(`
`),h.length>0&&(h+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xo).join(`
`),_.length>0&&(_+=`
`)):(h=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),_=[m,Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cs?"#define TONE_MAPPING":"",t.toneMapping!==cs?Xe.tonemapping_pars_fragment:"",t.toneMapping!==cs?AA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,EA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),r=gh(r),r=Pm(r,t),r=Im(r,t),a=gh(a),a=Pm(a,t),a=Im(a,t),r=Nm(r),a=Nm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=g+h+r,R=g+_+a,E=Lm(s,s.VERTEX_SHADER,b),A=Lm(s,s.FRAGMENT_SHADER,R);s.attachShader(p,E),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(W){if(n.debug.checkShaderErrors){const oe=s.getProgramInfoLog(p).trim(),U=s.getShaderInfoLog(E).trim(),q=s.getShaderInfoLog(A).trim();let j=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,A);else{const z=Cm(s,E,"vertex"),Q=Cm(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+z+`
`+Q)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(U===""||q==="")&&(Z=!1);Z&&(W.diagnostics={runnable:j,programLog:oe,vertexShader:{log:U,prefix:h},fragmentShader:{log:q,prefix:_}})}s.deleteShader(E),s.deleteShader(A),M=new al(s,p),w=CA(s,p)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,bA)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new WA(e),t.set(e,i)),i}}class WA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function qA(n,e,t,i,s,o,r){const a=new Dv,c=new VA,l=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,w,V,W,oe){const U=W.fog,q=oe.geometry,j=M.isMeshStandardMaterial?W.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),z=Z&&Z.mapping===Au?Z.image.height:null,Q=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=ae!==void 0?ae.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let te,O,N,L;if(Q){const ln=ui[Q];te=ln.vertexShader,O=ln.fragmentShader}else te=M.vertexShader,O=M.fragmentShader,c.update(M),N=c.getVertexShaderID(M),L=c.getFragmentShaderID(M);const T=n.getRenderTarget(),ee=oe.isInstancedMesh===!0,ce=oe.isBatchedMesh===!0,X=!!M.map,de=!!M.matcap,P=!!Z,ne=!!M.aoMap,B=!!M.lightMap,Y=!!M.bumpMap,$=!!M.normalMap,fe=!!M.displacementMap,F=!!M.emissiveMap,x=!!M.metalnessMap,S=!!M.roughnessMap,G=M.anisotropy>0,me=M.clearcoat>0,ge=M.iridescence>0,le=M.sheen>0,Te=M.transmission>0,xe=G&&!!M.anisotropyMap,Re=me&&!!M.clearcoatMap,Ie=me&&!!M.clearcoatNormalMap,Fe=me&&!!M.clearcoatRoughnessMap,ve=ge&&!!M.iridescenceMap,Je=ge&&!!M.iridescenceThicknessMap,We=le&&!!M.sheenColorMap,Be=le&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Ce=!!M.specularColorMap,qe=!!M.specularIntensityMap,nt=Te&&!!M.transmissionMap,vt=Te&&!!M.thicknessMap,je=!!M.gradientMap,_e=!!M.alphaMap,H=M.alphaTest>0,Me=!!M.alphaHash,we=!!M.extensions,ke=!!q.attributes.uv1,Oe=!!q.attributes.uv2,rt=!!q.attributes.uv3;let at=cs;return M.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:O,defines:M.defines,customVertexShaderID:N,customFragmentShaderID:L,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ce,instancing:ee,instancingColor:ee&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:T===null?n.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hi,map:X,matcap:de,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:z,aoMap:ne,lightMap:B,bumpMap:Y,normalMap:$,displacementMap:f&&fe,emissiveMap:F,normalMapObjectSpace:$&&M.normalMapType===Hb,normalMapTangentSpace:$&&M.normalMapType===Rv,metalnessMap:x,roughnessMap:S,anisotropy:G,anisotropyMap:xe,clearcoat:me,clearcoatMap:Re,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Fe,iridescence:ge,iridescenceMap:ve,iridescenceThicknessMap:Je,sheen:le,sheenColorMap:We,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Ce,specularIntensityMap:qe,transmission:Te,transmissionMap:nt,thicknessMap:vt,gradientMap:je,opaque:M.transparent===!1&&M.blending===tr,alphaMap:_e,alphaTest:H,alphaHash:Me,combine:M.combine,mapUv:X&&y(M.map.channel),aoMapUv:ne&&y(M.aoMap.channel),lightMapUv:B&&y(M.lightMap.channel),bumpMapUv:Y&&y(M.bumpMap.channel),normalMapUv:$&&y(M.normalMap.channel),displacementMapUv:fe&&y(M.displacementMap.channel),emissiveMapUv:F&&y(M.emissiveMap.channel),metalnessMapUv:x&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:xe&&y(M.anisotropyMap.channel),clearcoatMapUv:Re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&y(M.sheenRoughnessMap.channel),specularMapUv:Ne&&y(M.specularMap.channel),specularColorMapUv:Ce&&y(M.specularColorMap.channel),specularIntensityMapUv:qe&&y(M.specularIntensityMap.channel),transmissionMapUv:nt&&y(M.transmissionMap.channel),thicknessMapUv:vt&&y(M.thicknessMap.channel),alphaMapUv:_e&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:ke,vertexUv2s:Oe,vertexUv3s:rt,pointsUvs:oe.isPoints===!0&&!!q.attributes.uv&&(X||_e),fog:!!U,useFog:M.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:oe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Kt,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)w.push(V),w.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=v[M.type];let V;if(w){const W=ui[w];V=TS.clone(W.uniforms)}else V=M.uniforms;return V}function R(M,w){let V;for(let W=0,oe=l.length;W<oe;W++){const U=l[W];if(U.cacheKey===w){V=U,++V.usedTimes;break}}return V===void 0&&(V=new HA(n,w,M,o),l.push(V)),V}function E(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:l,dispose:k}}function XA(){let n=new WeakMap;function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function t(o){n.delete(o)}function i(o,r,a){n.get(o)[r]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function $A(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Om(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Um(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,m,v,y,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:y,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=y,h.group=p),e++,h}function a(d,f,m,v,y,p){const h=r(d,f,m,v,y,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(d,f,m,v,y,p){const h=r(d,f,m,v,y,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||$A),i.length>1&&i.sort(f||Om),s.length>1&&s.sort(f||Om)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function jA(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new Um,n.set(i,[r])):s>=o.length?(r=new Um,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function YA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function ZA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let KA=0;function JA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function QA(n,e){const t=new YA,i=ZA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const o=new I,r=new Ke,a=new Ke;function c(u,d){let f=0,m=0,v=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,p=0,h=0,_=0,g=0,b=0,R=0,E=0,A=0,k=0,M=0;u.sort(JA);const w=d===!0?Math.PI:1;for(let W=0,oe=u.length;W<oe;W++){const U=u[W],q=U.color,j=U.intensity,Z=U.distance,z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=q.r*j*w,m+=q.g*j*w,v+=q.b*j*w;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(U.sh.coefficients[Q],j);M++}else if(U.isDirectionalLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const ae=U.shadow,ue=i.get(U);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,s.directionalShadow[y]=ue,s.directionalShadowMap[y]=z,s.directionalShadowMatrix[y]=U.shadow.matrix,b++}s.directional[y]=Q,y++}else if(U.isSpotLight){const Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(q).multiplyScalar(j*w),Q.distance=Z,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,s.spot[h]=Q;const ae=U.shadow;if(U.map&&(s.spotLightMap[A]=U.map,A++,ae.updateMatrices(U),U.castShadow&&k++),s.spotLightMatrix[h]=ae.matrix,U.castShadow){const ue=i.get(U);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,s.spotShadow[h]=ue,s.spotShadowMap[h]=z,E++}h++}else if(U.isRectAreaLight){const Q=t.get(U);Q.color.copy(q).multiplyScalar(j),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),s.rectArea[_]=Q,_++}else if(U.isPointLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*w),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const ae=U.shadow,ue=i.get(U);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,ue.shadowCameraNear=ae.camera.near,ue.shadowCameraFar=ae.camera.far,s.pointShadow[p]=ue,s.pointShadowMap[p]=z,s.pointShadowMatrix[p]=U.shadow.matrix,R++}s.point[p]=Q,p++}else if(U.isHemisphereLight){const Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar(j*w),Q.groundColor.copy(U.groundColor).multiplyScalar(j*w),s.hemi[g]=Q,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==y||V.pointLength!==p||V.spotLength!==h||V.rectAreaLength!==_||V.hemiLength!==g||V.numDirectionalShadows!==b||V.numPointShadows!==R||V.numSpotShadows!==E||V.numSpotMaps!==A||V.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=h,s.rectArea.length=_,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-k,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,V.directionalLength=y,V.pointLength=p,V.spotLength=h,V.rectAreaLength=_,V.hemiLength=g,V.numDirectionalShadows=b,V.numPointShadows=R,V.numSpotShadows=E,V.numSpotMaps=A,V.numLightProbes=M,s.version=KA++)}function l(u,d){let f=0,m=0,v=0,y=0,p=0;const h=d.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const b=u[_];if(b.isDirectionalLight){const R=s.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),f++}else if(b.isSpotLight){const R=s.spot[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),v++}else if(b.isRectAreaLight){const R=s.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:c,setupView:l,state:s}}function km(n,e){const t=new QA(n,e),i=[],s=[];function o(){i.length=0,s.length=0}function r(d){i.push(d)}function a(d){s.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function eT(n,e){let t=new WeakMap;function i(o,r=0){const a=t.get(o);let c;return a===void 0?(c=new km(n,e),t.set(o,[c])):r>=a.length?(c=new km(n,e),a.push(c)):c=a[r],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class tT extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nT extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`;function oT(n,e,t){let i=new Ef;const s=new pe,o=new pe,r=new $t,a=new tT({depthPacking:zb}),c=new nT,l={},u=t.maxTextureSize,d={[ps]:Mn,[Mn]:ps,[Kt]:Kt},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:iT,fragmentShader:sT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new gt;v.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let h=this.type;this.render=function(E,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(as),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const oe=h!==Ci&&this.type===Ci,U=h===Ci&&this.type!==Ci;for(let q=0,j=E.length;q<j;q++){const Z=E[q],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Q=z.getFrameExtents();if(s.multiply(Q),o.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/Q.x),s.x=o.x*Q.x,z.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/Q.y),s.y=o.y*Q.y,z.mapSize.y=o.y)),z.map===null||oe===!0||U===!0){const ue=this.type!==Ci?{minFilter:gn,magFilter:gn}:{};z.map!==null&&z.map.dispose(),z.map=new so(s.x,s.y,ue),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const ae=z.getViewportCount();for(let ue=0;ue<ae;ue++){const ye=z.getViewport(ue);r.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),W.viewport(r),z.updateMatrices(Z,ue),i=z.getFrustum(),b(A,k,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Ci&&_(z,k),z.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,w,V)};function _(E,A){const k=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new so(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,k,f,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,k,m,y,null)}function g(E,A,k,M){let w=null;const V=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)w=V;else if(w=k.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=w.uuid,oe=A.uuid;let U=l[W];U===void 0&&(U={},l[W]=U);let q=U[oe];q===void 0&&(q=w.clone(),U[oe]=q,A.addEventListener("dispose",R)),w=q}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Ci?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=n.properties.get(w);W.light=k}return w}function b(E,A,k,M,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Ci)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),U=E.material;if(Array.isArray(U)){const q=oe.groups;for(let j=0,Z=q.length;j<Z;j++){const z=q[j],Q=U[z.materialIndex];if(Q&&Q.visible){const ae=g(E,Q,M,w);E.onBeforeShadow(n,E,A,k,oe,ae,z),n.renderBufferDirect(k,null,oe,ae,E,z),E.onAfterShadow(n,E,A,k,oe,ae,z)}}}else if(U.visible){const q=g(E,U,M,w);E.onBeforeShadow(n,E,A,k,oe,q,null),n.renderBufferDirect(k,null,oe,q,E,null),E.onAfterShadow(n,E,A,k,oe,q,null)}}const W=E.children;for(let oe=0,U=W.length;oe<U;oe++)b(W[oe],A,k,M,w)}function R(E){E.target.removeEventListener("dispose",R);for(const k in l){const M=l[k],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function rT(n,e,t){const i=t.isWebGL2;function s(){let H=!1;const Me=new $t;let we=null;const ke=new $t(0,0,0,0);return{setMask:function(Oe){we!==Oe&&!H&&(n.colorMask(Oe,Oe,Oe,Oe),we=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,rt,at,zt,ln){ln===!0&&(Oe*=zt,rt*=zt,at*=zt),Me.set(Oe,rt,at,zt),ke.equals(Me)===!1&&(n.clearColor(Oe,rt,at,zt),ke.copy(Me))},reset:function(){H=!1,we=null,ke.set(-1,0,0,0)}}}function o(){let H=!1,Me=null,we=null,ke=null;return{setTest:function(Oe){Oe?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(Oe){Me!==Oe&&!H&&(n.depthMask(Oe),Me=Oe)},setFunc:function(Oe){if(we!==Oe){switch(Oe){case mb:n.depthFunc(n.NEVER);break;case gb:n.depthFunc(n.ALWAYS);break;case vb:n.depthFunc(n.LESS);break;case Tl:n.depthFunc(n.LEQUAL);break;case yb:n.depthFunc(n.EQUAL);break;case xb:n.depthFunc(n.GEQUAL);break;case _b:n.depthFunc(n.GREATER);break;case bb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){ke!==Oe&&(n.clearDepth(Oe),ke=Oe)},reset:function(){H=!1,Me=null,we=null,ke=null}}}function r(){let H=!1,Me=null,we=null,ke=null,Oe=null,rt=null,at=null,zt=null,ln=null;return{setTest:function(ct){H||(ct?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(ct){Me!==ct&&!H&&(n.stencilMask(ct),Me=ct)},setFunc:function(ct,un,ri){(we!==ct||ke!==un||Oe!==ri)&&(n.stencilFunc(ct,un,ri),we=ct,ke=un,Oe=ri)},setOp:function(ct,un,ri){(rt!==ct||at!==un||zt!==ri)&&(n.stencilOp(ct,un,ri),rt=ct,at=un,zt=ri)},setLocked:function(ct){H=ct},setClear:function(ct){ln!==ct&&(n.clearStencil(ct),ln=ct)},reset:function(){H=!1,Me=null,we=null,ke=null,Oe=null,rt=null,at=null,zt=null,ln=null}}}const a=new s,c=new o,l=new r,u=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,y=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,A=null,k=null,M=new Ee(0,0,0),w=0,V=!1,W=null,oe=null,U=null,q=null,j=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Q=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(ae)[1]),z=Q>=1):ae.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),z=Q>=2);let ue=null,ye={};const te=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),N=new $t().fromArray(te),L=new $t().fromArray(O);function T(H,Me,we,ke){const Oe=new Uint8Array(4),rt=n.createTexture();n.bindTexture(H,rt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<we;at++)i&&(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(Me+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return rt}const ee={};ee[n.TEXTURE_2D]=T(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=T(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=T(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=T(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(n.DEPTH_TEST),c.setFunc(Tl),F(!1),x(xp),ce(n.CULL_FACE),$(as);function ce(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function X(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function de(H,Me){return m[H]!==Me?(n.bindFramebuffer(H,Me),m[H]=Me,i&&(H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function P(H,Me){let we=y,ke=!1;if(H)if(we=v.get(Me),we===void 0&&(we=[],v.set(Me,we)),H.isWebGLMultipleRenderTargets){const Oe=H.texture;if(we.length!==Oe.length||we[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,at=Oe.length;rt<at;rt++)we[rt]=n.COLOR_ATTACHMENT0+rt;we.length=Oe.length,ke=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,ke=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,ke=!0);ke&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function ne(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const B={[Ns]:n.FUNC_ADD,[eb]:n.FUNC_SUBTRACT,[tb]:n.FUNC_REVERSE_SUBTRACT};if(i)B[Sp]=n.MIN,B[Mp]=n.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(B[Sp]=H.MIN_EXT,B[Mp]=H.MAX_EXT)}const Y={[nb]:n.ZERO,[ib]:n.ONE,[sb]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[ub]:n.SRC_ALPHA_SATURATE,[cb]:n.DST_COLOR,[rb]:n.DST_ALPHA,[ob]:n.ONE_MINUS_SRC_COLOR,[lh]:n.ONE_MINUS_SRC_ALPHA,[lb]:n.ONE_MINUS_DST_COLOR,[ab]:n.ONE_MINUS_DST_ALPHA,[db]:n.CONSTANT_COLOR,[hb]:n.ONE_MINUS_CONSTANT_COLOR,[fb]:n.CONSTANT_ALPHA,[pb]:n.ONE_MINUS_CONSTANT_ALPHA};function $(H,Me,we,ke,Oe,rt,at,zt,ln,ct){if(H===as){h===!0&&(X(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),H!==Q_){if(H!==_||ct!==V){if((g!==Ns||E!==Ns)&&(n.blendEquation(n.FUNC_ADD),g=Ns,E=Ns),ct)switch(H){case tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case _p:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _p:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,R=null,A=null,k=null,M.set(0,0,0),w=0,_=H,V=ct}return}Oe=Oe||Me,rt=rt||we,at=at||ke,(Me!==g||Oe!==E)&&(n.blendEquationSeparate(B[Me],B[Oe]),g=Me,E=Oe),(we!==b||ke!==R||rt!==A||at!==k)&&(n.blendFuncSeparate(Y[we],Y[ke],Y[rt],Y[at]),b=we,R=ke,A=rt,k=at),(zt.equals(M)===!1||ln!==w)&&(n.blendColor(zt.r,zt.g,zt.b,ln),M.copy(zt),w=ln),_=H,V=!1}function fe(H,Me){H.side===Kt?X(n.CULL_FACE):ce(n.CULL_FACE);let we=H.side===Mn;Me&&(we=!we),F(we),H.blending===tr&&H.transparent===!1?$(as):$(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const ke=H.stencilWrite;l.setTest(ke),ke&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),G(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(H){W!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),W=H)}function x(H){H!==Z_?(ce(n.CULL_FACE),H!==oe&&(H===xp?n.cullFace(n.BACK):H===K_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),oe=H}function S(H){H!==U&&(z&&n.lineWidth(H),U=H)}function G(H,Me,we){H?(ce(n.POLYGON_OFFSET_FILL),(q!==Me||j!==we)&&(n.polygonOffset(Me,we),q=Me,j=we)):X(n.POLYGON_OFFSET_FILL)}function me(H){H?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function ge(H){H===void 0&&(H=n.TEXTURE0+Z-1),ue!==H&&(n.activeTexture(H),ue=H)}function le(H,Me,we){we===void 0&&(ue===null?we=n.TEXTURE0+Z-1:we=ue);let ke=ye[we];ke===void 0&&(ke={type:void 0,texture:void 0},ye[we]=ke),(ke.type!==H||ke.texture!==Me)&&(ue!==we&&(n.activeTexture(we),ue=we),n.bindTexture(H,Me||ee[H]),ke.type=H,ke.texture=Me)}function Te(){const H=ye[ue];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(H){N.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),N.copy(H))}function nt(H){L.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),L.copy(H))}function vt(H,Me){let we=d.get(Me);we===void 0&&(we=new WeakMap,d.set(Me,we));let ke=we.get(H);ke===void 0&&(ke=n.getUniformBlockIndex(Me,H.name),we.set(H,ke))}function je(H,Me){const ke=d.get(Me).get(H);u.get(Me)!==ke&&(n.uniformBlockBinding(Me,ke,H.__bindingPointIndex),u.set(Me,ke))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ue=null,ye={},m={},v=new WeakMap,y=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,A=null,k=null,M=new Ee(0,0,0),w=0,V=!1,W=null,oe=null,U=null,q=null,j=null,N.set(0,0,n.canvas.width,n.canvas.height),L.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ce,disable:X,bindFramebuffer:de,drawBuffers:P,useProgram:ne,setBlending:$,setMaterial:fe,setFlipSided:F,setCullFace:x,setLineWidth:S,setPolygonOffset:G,setScissorTest:me,activeTexture:ge,bindTexture:le,unbindTexture:Te,compressedTexImage2D:xe,compressedTexImage3D:Re,texImage2D:Ne,texImage3D:Ce,updateUBOMapping:vt,uniformBlockBinding:je,texStorage2D:We,texStorage3D:Be,texSubImage2D:Ie,texSubImage3D:Fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Je,scissor:qe,viewport:nt,reset:_e}}function aT(n,e,t,i,s,o,r){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,S){return m?new OffscreenCanvas(x,S):Nl("canvas")}function y(x,S,G,me){let ge=1;if((x.width>me||x.height>me)&&(ge=me/Math.max(x.width,x.height)),ge<1||S===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const le=S?Il:Math.floor,Te=le(ge*x.width),xe=le(ge*x.height);d===void 0&&(d=v(Te,xe));const Re=G?v(Te,xe):d;return Re.width=Te,Re.height=xe,Re.getContext("2d").drawImage(x,0,0,Te,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Te+"x"+xe+")."),Re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return mh(x.width)&&mh(x.height)}function h(x){return a?!1:x.wrapS!==Jn||x.wrapT!==Jn||x.minFilter!==gn&&x.minFilter!==Fn}function _(x,S){return x.generateMipmaps&&S&&x.minFilter!==gn&&x.minFilter!==Fn}function g(x){n.generateMipmap(x)}function b(x,S,G,me,ge=!1){if(a===!1)return S;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let le=S;if(S===n.RED&&(G===n.FLOAT&&(le=n.R32F),G===n.HALF_FLOAT&&(le=n.R16F),G===n.UNSIGNED_BYTE&&(le=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(le=n.R8UI),G===n.UNSIGNED_SHORT&&(le=n.R16UI),G===n.UNSIGNED_INT&&(le=n.R32UI),G===n.BYTE&&(le=n.R8I),G===n.SHORT&&(le=n.R16I),G===n.INT&&(le=n.R32I)),S===n.RG&&(G===n.FLOAT&&(le=n.RG32F),G===n.HALF_FLOAT&&(le=n.RG16F),G===n.UNSIGNED_BYTE&&(le=n.RG8)),S===n.RGBA){const Te=ge?Rl:st.getTransfer(me);G===n.FLOAT&&(le=n.RGBA32F),G===n.HALF_FLOAT&&(le=n.RGBA16F),G===n.UNSIGNED_BYTE&&(le=Te===dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function R(x,S,G){return _(x,G)===!0||x.isFramebufferTexture&&x.minFilter!==gn&&x.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?S.mipmaps.length:1}function E(x){return x===gn||x===wp||x===Ku?n.NEAREST:n.LINEAR}function A(x){const S=x.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&u.delete(S)}function k(x){const S=x.target;S.removeEventListener("dispose",k),V(S)}function M(x){const S=i.get(x);if(S.__webglInit===void 0)return;const G=x.source,me=f.get(G);if(me){const ge=me[S.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&w(x),Object.keys(me).length===0&&f.delete(G)}i.remove(x)}function w(x){const S=i.get(x);n.deleteTexture(S.__webglTexture);const G=x.source,me=f.get(G);delete me[S.__cacheKey],r.memory.textures--}function V(x){const S=x.texture,G=i.get(x),me=i.get(S);if(me.__webglTexture!==void 0&&(n.deleteTexture(me.__webglTexture),r.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(G.__webglFramebuffer[ge]))for(let le=0;le<G.__webglFramebuffer[ge].length;le++)n.deleteFramebuffer(G.__webglFramebuffer[ge][le]);else n.deleteFramebuffer(G.__webglFramebuffer[ge]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ge])}else{if(Array.isArray(G.__webglFramebuffer))for(let ge=0;ge<G.__webglFramebuffer.length;ge++)n.deleteFramebuffer(G.__webglFramebuffer[ge]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ge=0;ge<G.__webglColorRenderbuffer.length;ge++)G.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ge]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ge=0,le=S.length;ge<le;ge++){const Te=i.get(S[ge]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),r.memory.textures--),i.remove(S[ge])}i.remove(S),i.remove(x)}let W=0;function oe(){W=0}function U(){const x=W;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),W+=1,x}function q(x){const S=[];return S.push(x.wrapS),S.push(x.wrapT),S.push(x.wrapR||0),S.push(x.magFilter),S.push(x.minFilter),S.push(x.anisotropy),S.push(x.internalFormat),S.push(x.format),S.push(x.type),S.push(x.generateMipmaps),S.push(x.premultiplyAlpha),S.push(x.flipY),S.push(x.unpackAlignment),S.push(x.colorSpace),S.join()}function j(x,S){const G=i.get(x);if(x.isVideoTexture&&fe(x),x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){const me=x.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(G,x,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function Z(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){N(G,x,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function z(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){N(G,x,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Q(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){L(G,x,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const ae={[hh]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[fh]:n.MIRRORED_REPEAT},ue={[gn]:n.NEAREST,[wp]:n.NEAREST_MIPMAP_NEAREST,[Ku]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Cb]:n.LINEAR_MIPMAP_NEAREST,[Ca]:n.LINEAR_MIPMAP_LINEAR},ye={[Gb]:n.NEVER,[jb]:n.ALWAYS,[Vb]:n.LESS,[Lv]:n.LEQUAL,[Wb]:n.EQUAL,[$b]:n.GEQUAL,[qb]:n.GREATER,[Xb]:n.NOTEQUAL};function te(x,S,G){if(G?(n.texParameteri(x,n.TEXTURE_WRAP_S,ae[S.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ae[S.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ae[S.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ue[S.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ue[S.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Jn||S.wrapT!==Jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==gn&&S.minFilter!==Fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===gn||S.minFilter!==Ku&&S.minFilter!==Ca||S.type===ns&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Pa&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(x,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function O(x,S){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,S.addEventListener("dispose",A));const me=S.source;let ge=f.get(me);ge===void 0&&(ge={},f.set(me,ge));const le=q(S);if(le!==x.__cacheKey){ge[le]===void 0&&(ge[le]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),ge[le].usedTimes++;const Te=ge[x.__cacheKey];Te!==void 0&&(ge[x.__cacheKey].usedTimes--,Te.usedTimes===0&&w(S)),x.__cacheKey=le,x.__webglTexture=ge[le].texture}return G}function N(x,S,G){let me=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(me=n.TEXTURE_3D);const ge=O(x,S),le=S.source;t.bindTexture(me,x.__webglTexture,n.TEXTURE0+G);const Te=i.get(le);if(le.version!==Te.__version||ge===!0){t.activeTexture(n.TEXTURE0+G);const xe=st.getPrimaries(st.workingColorSpace),Re=S.colorSpace===zn?null:st.getPrimaries(S.colorSpace),Ie=S.colorSpace===zn||xe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Fe=h(S)&&p(S.image)===!1;let ve=y(S.image,Fe,!1,s.maxTextureSize);ve=F(S,ve);const Je=p(ve)||a,We=o.convert(S.format,S.colorSpace);let Be=o.convert(S.type),Ne=b(S.internalFormat,We,Be,S.colorSpace,S.isVideoTexture);te(me,S,Je);let Ce;const qe=S.mipmaps,nt=a&&S.isVideoTexture!==!0&&Ne!==Av,vt=Te.__version===void 0||ge===!0,je=R(S,ve,Je);if(S.isDepthTexture)Ne=n.DEPTH_COMPONENT,a?S.type===ns?Ne=n.DEPTH_COMPONENT32F:S.type===ts?Ne=n.DEPTH_COMPONENT24:S.type===js?Ne=n.DEPTH24_STENCIL8:Ne=n.DEPTH_COMPONENT16:S.type===ns&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ys&&Ne===n.DEPTH_COMPONENT&&S.type!==bf&&S.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ts,Be=o.convert(S.type)),S.format===vr&&Ne===n.DEPTH_COMPONENT&&(Ne=n.DEPTH_STENCIL,S.type!==js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=js,Be=o.convert(S.type))),vt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,We,Be,null));else if(S.isDataTexture)if(qe.length>0&&Je){nt&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],nt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,We,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Ce.width,Ce.height,0,We,Be,Ce.data);S.generateMipmaps=!1}else nt?(vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,We,Be,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,We,Be,ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ne,qe[0].width,qe[0].height,ve.depth);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],S.format!==Qn?We!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,ve.depth,We,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,ve.depth,We,Be,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Ce.width,Ce.height,ve.depth,0,We,Be,Ce.data)}else{nt&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],S.format!==Qn?We!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,We,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ne,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,We,Be,Ce.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Ce.width,Ce.height,0,We,Be,Ce.data)}else if(S.isDataArrayTexture)nt?(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ne,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,We,Be,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,We,Be,ve.data);else if(S.isData3DTexture)nt?(vt&&t.texStorage3D(n.TEXTURE_3D,je,Ne,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,We,Be,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,We,Be,ve.data);else if(S.isFramebufferTexture){if(vt)if(nt)t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height);else{let _e=ve.width,H=ve.height;for(let Me=0;Me<je;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ne,_e,H,0,We,Be,null),_e>>=1,H>>=1}}else if(qe.length>0&&Je){nt&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],nt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,We,Be,Ce):t.texImage2D(n.TEXTURE_2D,_e,Ne,We,Be,Ce);S.generateMipmaps=!1}else nt?(vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,Be,ve)):t.texImage2D(n.TEXTURE_2D,0,Ne,We,Be,ve);_(S,Je)&&g(me),Te.__version=le.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function L(x,S,G){if(S.image.length!==6)return;const me=O(x,S),ge=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+G);const le=i.get(ge);if(ge.version!==le.__version||me===!0){t.activeTexture(n.TEXTURE0+G);const Te=st.getPrimaries(st.workingColorSpace),xe=S.colorSpace===zn?null:st.getPrimaries(S.colorSpace),Re=S.colorSpace===zn||Te===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let _e=0;_e<6;_e++)!Ie&&!Fe?ve[_e]=y(S.image[_e],!1,!0,s.maxCubemapSize):ve[_e]=Fe?S.image[_e].image:S.image[_e],ve[_e]=F(S,ve[_e]);const Je=ve[0],We=p(Je)||a,Be=o.convert(S.format,S.colorSpace),Ne=o.convert(S.type),Ce=b(S.internalFormat,Be,Ne,S.colorSpace),qe=a&&S.isVideoTexture!==!0,nt=le.__version===void 0||me===!0;let vt=R(S,Je,We);te(n.TEXTURE_CUBE_MAP,S,We);let je;if(Ie){qe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ce,Je.width,Je.height);for(let _e=0;_e<6;_e++){je=ve[_e].mipmaps;for(let H=0;H<je.length;H++){const Me=je[H];S.format!==Qn?Be!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,0,0,Me.width,Me.height,Be,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,Ce,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,0,0,Me.width,Me.height,Be,Ne,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,Ce,Me.width,Me.height,0,Be,Ne,Me.data)}}}else{je=S.mipmaps,qe&&nt&&(je.length>0&&vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ce,ve[0].width,ve[0].height));for(let _e=0;_e<6;_e++)if(Fe){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ve[_e].width,ve[_e].height,Be,Ne,ve[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,ve[_e].width,ve[_e].height,0,Be,Ne,ve[_e].data);for(let H=0;H<je.length;H++){const we=je[H].image[_e].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,0,0,we.width,we.height,Be,Ne,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,Ce,we.width,we.height,0,Be,Ne,we.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Be,Ne,ve[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,Be,Ne,ve[_e]);for(let H=0;H<je.length;H++){const Me=je[H];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,0,0,Be,Ne,Me.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,Ce,Be,Ne,Me.image[_e])}}}_(S,We)&&g(n.TEXTURE_CUBE_MAP),le.__version=ge.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function T(x,S,G,me,ge,le){const Te=o.convert(G.format,G.colorSpace),xe=o.convert(G.type),Re=b(G.internalFormat,Te,xe,G.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>le),ve=Math.max(1,S.height>>le);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,le,Re,Fe,ve,S.depth,0,Te,xe,null):t.texImage2D(ge,le,Re,Fe,ve,0,Te,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ge,i.get(G).__webglTexture,0,Y(S)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ge,i.get(G).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(x,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,x),S.depthBuffer&&!S.stencilBuffer){let me=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||$(S)){const ge=S.depthTexture;ge&&ge.isDepthTexture&&(ge.type===ns?me=n.DEPTH_COMPONENT32F:ge.type===ts&&(me=n.DEPTH_COMPONENT24));const le=Y(S);$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,me,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,me,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,me,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(S.depthBuffer&&S.stencilBuffer){const me=Y(S);G&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const me=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ge=0;ge<me.length;ge++){const le=me[ge],Te=o.convert(le.format,le.colorSpace),xe=o.convert(le.type),Re=b(le.internalFormat,Te,xe,le.colorSpace),Ie=Y(S);G&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Re,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Re,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Re,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(x,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const me=i.get(S.depthTexture).__webglTexture,ge=Y(S);if(S.depthTexture.format===Ys)$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(S.depthTexture.format===vr)$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function X(x){const S=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,x)}else if(G){S.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[me]),S.__webglDepthbuffer[me]=n.createRenderbuffer(),ee(S.__webglDepthbuffer[me],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ee(S.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(x,S,G){const me=i.get(x);S!==void 0&&T(me.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&X(x)}function P(x){const S=x.texture,G=i.get(x),me=i.get(S);x.addEventListener("dispose",k),x.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=S.version,r.memory.textures++);const ge=x.isWebGLCubeRenderTarget===!0,le=x.isWebGLMultipleRenderTargets===!0,Te=p(x)||a;if(ge){G.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[xe]=[];for(let Re=0;Re<S.mipmaps.length;Re++)G.__webglFramebuffer[xe][Re]=n.createFramebuffer()}else G.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)G.__webglFramebuffer[xe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(le)if(s.drawBuffers){const xe=x.texture;for(let Re=0,Ie=xe.length;Re<Ie;Re++){const Fe=i.get(xe[Re]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&$(x)===!1){const xe=le?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ie=xe[Re];G.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Re]);const Fe=o.convert(Ie.format,Ie.colorSpace),ve=o.convert(Ie.type),Je=b(Ie.internalFormat,Fe,ve,Ie.colorSpace,x.isXRRenderTarget===!0),We=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Je,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,G.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(G.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),te(n.TEXTURE_CUBE_MAP,S,Te);for(let xe=0;xe<6;xe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)T(G.__webglFramebuffer[xe][Re],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re);else T(G.__webglFramebuffer[xe],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(S,Te)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const xe=x.texture;for(let Re=0,Ie=xe.length;Re<Ie;Re++){const Fe=xe[Re],ve=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),te(n.TEXTURE_2D,Fe,Te),T(G.__webglFramebuffer,x,Fe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),_(Fe,Te)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?xe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,me.__webglTexture),te(xe,S,Te),a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)T(G.__webglFramebuffer[Re],x,S,n.COLOR_ATTACHMENT0,xe,Re);else T(G.__webglFramebuffer,x,S,n.COLOR_ATTACHMENT0,xe,0);_(S,Te)&&g(xe),t.unbindTexture()}x.depthBuffer&&X(x)}function ne(x){const S=p(x)||a,G=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let me=0,ge=G.length;me<ge;me++){const le=G[me];if(_(le,S)){const Te=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(le).__webglTexture;t.bindTexture(Te,xe),g(Te),t.unbindTexture()}}}function B(x){if(a&&x.samples>0&&$(x)===!1){const S=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],G=x.width,me=x.height;let ge=n.COLOR_BUFFER_BIT;const le=[],Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(x),Re=x.isWebGLMultipleRenderTargets===!0;if(Re)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){le.push(n.COLOR_ATTACHMENT0+Ie),x.depthBuffer&&le.push(Te);const Fe=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Fe===!1&&(x.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Re){const ve=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,G,me,0,0,G,me,ge,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);const Fe=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Y(x){return Math.min(s.maxSamples,x.samples)}function $(x){const S=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(x){const S=r.render.frame;u.get(x)!==S&&(u.set(x,S),x.update())}function F(x,S){const G=x.colorSpace,me=x.format,ge=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===ph||G!==Hi&&G!==zn&&(st.getTransfer(G)===dt?a===!1?e.has("EXT_sRGB")===!0&&me===Qn?(x.format=ph,x.minFilter=Fn,x.generateMipmaps=!1):S=Pv.sRGBToLinear(S):(me!==Qn||ge!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=U,this.resetTextureUnits=oe,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=z,this.setTextureCube=Q,this.rebindTextures=de,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=T,this.useMultisampledRTT=$}function cT(n,e,t){const i=t.isWebGL2;function s(o,r=zn){let a;const c=st.getTransfer(r);if(o===ls)return n.UNSIGNED_BYTE;if(o===bv)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Sv)return n.UNSIGNED_SHORT_5_5_5_1;if(o===Pb)return n.BYTE;if(o===Ib)return n.SHORT;if(o===bf)return n.UNSIGNED_SHORT;if(o===_v)return n.INT;if(o===ts)return n.UNSIGNED_INT;if(o===ns)return n.FLOAT;if(o===Pa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Nb)return n.ALPHA;if(o===Qn)return n.RGBA;if(o===Db)return n.LUMINANCE;if(o===Ob)return n.LUMINANCE_ALPHA;if(o===Ys)return n.DEPTH_COMPONENT;if(o===vr)return n.DEPTH_STENCIL;if(o===ph)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===Ub)return n.RED;if(o===Mv)return n.RED_INTEGER;if(o===kb)return n.RG;if(o===wv)return n.RG_INTEGER;if(o===Ev)return n.RGBA_INTEGER;if(o===Ju||o===Qu||o===ed||o===td)if(c===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Ju)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Qu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Ju)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Qu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Ep||o===Ap||o===Tp||o===Rp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Ep)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Ap)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Rp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Av)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Lp||o===Cp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Lp)return c===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Cp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Pp||o===Ip||o===Np||o===Dp||o===Op||o===Up||o===kp||o===Fp||o===Bp||o===zp||o===Hp||o===Gp||o===Vp||o===Wp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Pp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Ip)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Np)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Dp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Op)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Up)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===kp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Fp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Bp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===zp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Hp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Gp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Vp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Wp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===nd||o===qp||o===Xp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===nd)return c===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===qp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Xp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Fb||o===$p||o===jp||o===Yp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===nd)return a.COMPRESSED_RED_RGTC1_EXT;if(o===$p)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===jp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Yp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===js?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:s}}class lT extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),h=this._getHandJoint(l,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class dT extends Lr{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,v=null;const y=t.getContextAttributes();let p=null,h=null;const _=[],g=[],b=new pe;let R=null;const E=new Rn;E.layers.enable(1),E.viewport=new $t;const A=new Rn;A.layers.enable(2),A.viewport=new $t;const k=[E,A],M=new lT;M.layers.enable(1),M.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let O=_[te];return O===void 0&&(O=new Ed,_[te]=O),O.getTargetRaySpace()},this.getControllerGrip=function(te){let O=_[te];return O===void 0&&(O=new Ed,_[te]=O),O.getGripSpace()},this.getHand=function(te){let O=_[te];return O===void 0&&(O=new Ed,_[te]=O),O.getHandSpace()};function W(te){const O=g.indexOf(te.inputSource);if(O===-1)return;const N=_[O];N!==void 0&&(N.update(te.inputSource,te.frame,l||r),N.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",U);for(let te=0;te<_.length;te++){const O=g[te];O!==null&&(g[te]=null,_[te].disconnect(O))}w=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new so(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let O=null,N=null,L=null;y.depth&&(L=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=y.stencil?vr:Ys,N=y.stencil?js:ts);const T={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:o};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(T),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new so(f.textureWidth,f.textureHeight,{format:Qn,type:ls,depthTexture:new Vv(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ee=e.properties.get(h);ee.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(te){for(let O=0;O<te.removed.length;O++){const N=te.removed[O],L=g.indexOf(N);L>=0&&(g[L]=null,_[L].disconnect(N))}for(let O=0;O<te.added.length;O++){const N=te.added[O];let L=g.indexOf(N);if(L===-1){for(let ee=0;ee<_.length;ee++)if(ee>=g.length){g.push(N),L=ee;break}else if(g[ee]===null){g[ee]=N,L=ee;break}if(L===-1)break}const T=_[L];T&&T.connect(N)}}const q=new I,j=new I;function Z(te,O,N){q.setFromMatrixPosition(O.matrixWorld),j.setFromMatrixPosition(N.matrixWorld);const L=q.distanceTo(j),T=O.projectionMatrix.elements,ee=N.projectionMatrix.elements,ce=T[14]/(T[10]-1),X=T[14]/(T[10]+1),de=(T[9]+1)/T[5],P=(T[9]-1)/T[5],ne=(T[8]-1)/T[0],B=(ee[8]+1)/ee[0],Y=ce*ne,$=ce*B,fe=L/(-ne+B),F=fe*-ne;O.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(F),te.translateZ(fe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const x=ce+fe,S=X+fe,G=Y-F,me=$+(L-F),ge=de*X/S*x,le=P*X/S*x;te.projectionMatrix.makePerspective(G,me,ge,le,x,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function z(te,O){O===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(O.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;M.near=A.near=E.near=te.near,M.far=A.far=E.far=te.far,(w!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,V=M.far);const O=te.parent,N=M.cameras;z(M,O);for(let L=0;L<N.length;L++)z(N[L],O);N.length===2?Z(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),Q(te,M,O)};function Q(te,O,N){N===null?te.matrix.copy(O.matrixWorld):(te.matrix.copy(N.matrixWorld),te.matrix.invert(),te.matrix.multiply(O.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(O.projectionMatrix),te.projectionMatrixInverse.copy(O.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ia*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let ae=null;function ue(te,O){if(u=O.getViewerPose(l||r),v=O,u!==null){const N=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let L=!1;N.length!==M.cameras.length&&(M.cameras.length=0,L=!0);for(let T=0;T<N.length;T++){const ee=N[T];let ce=null;if(m!==null)ce=m.getViewport(ee);else{const de=d.getViewSubImage(f,ee);ce=de.viewport,T===0&&(e.setRenderTargetTextures(h,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(h))}let X=k[T];X===void 0&&(X=new Rn,X.layers.enable(T),X.viewport=new $t,k[T]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),T===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),L===!0&&M.cameras.push(X)}}for(let N=0;N<_.length;N++){const L=g[N],T=_[N];L!==null&&T!==void 0&&T.update(L,O,l||r)}ae&&ae(te,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),v=null}const ye=new Hv;ye.setAnimationLoop(ue),this.setAnimationLoop=function(te){ae=te},this.dispose=function(){}}}function hT(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Fv(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,_,g,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(p,h):h.isMeshToonMaterial?(o(p,h),d(p,h)):h.isMeshPhongMaterial?(o(p,h),u(p,h)):h.isMeshStandardMaterial?(o(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(o(p,h),v(p,h)):h.isMeshDepthMaterial?o(p,h):h.isMeshDistanceMaterial?(o(p,h),y(p,h)):h.isMeshNormalMaterial?o(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,_,g):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Mn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Mn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,_,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=g*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fT(n,e,t,i){let s={},o={},r=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,g){const b=g.program;i.uniformBlockBinding(_,b)}function l(_,g){let b=s[_.id];b===void 0&&(v(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(_,R);const E=e.render.frame;o[_.id]!==E&&(f(_),o[_.id]=E)}function u(_){const g=d();_.__bindingPointIndex=g;const b=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,b),b}function d(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=s[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,A=b.length;E<A;E++){const k=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,w=k.length;M<w;M++){const V=k[M];if(m(V,E,M,R)===!0){const W=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let U=0;for(let q=0;q<oe.length;q++){const j=oe[q],Z=y(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,W+U,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,U),U+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,g,b,R){const E=_.value,A=g+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const k=R[A];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return R[A]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function v(_){const g=_.uniforms;let b=0;const R=16;for(let A=0,k=g.length;A<k;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let w=0,V=M.length;w<V;w++){const W=M[w],oe=Array.isArray(W.value)?W.value:[W.value];for(let U=0,q=oe.length;U<q;U++){const j=oe[U],Z=y(j),z=b%R;z!==0&&R-z<Z.boundary&&(b+=R-z),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=Z.storage}}}const E=b%R;return E>0&&(b+=R-E),_.__size=b,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const b=r.indexOf(g.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[g.id]),delete s[g.id],delete o[g.id]}function h(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:h}}class Tf{constructor(e={}){const{canvas:t=lS(),context:i=null,depth:s=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=cs,this.toneMappingExposure=1;const g=this;let b=!1,R=0,E=0,A=null,k=-1,M=null;const w=new $t,V=new $t;let W=null;const oe=new Ee(0);let U=0,q=t.width,j=t.height,Z=1,z=null,Q=null;const ae=new $t(0,0,q,j),ue=new $t(0,0,q,j);let ye=!1;const te=new Ef;let O=!1,N=!1,L=null;const T=new Ke,ee=new pe,ce=new I,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return A===null?Z:1}let P=i;function ne(C,K){for(let se=0;se<C.length;se++){const re=C[se],ie=t.getContext(re,K);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xf}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){const K=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&K.shift(),P=ne(K,C),P===null)throw ne(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,Y,$,fe,F,x,S,G,me,ge,le,Te,xe,Re,Ie,Fe,ve,Je,We,Be,Ne,Ce,qe,nt;function vt(){B=new ME(P),Y=new vE(P,B,e),B.init(Y),Ce=new cT(P,B,Y),$=new rT(P,B,Y),fe=new AE(P),F=new XA,x=new aT(P,B,$,F,Y,Ce,fe),S=new xE(g),G=new SE(g),me=new DS(P,Y),qe=new mE(P,B,me,Y),ge=new wE(P,me,fe,qe),le=new CE(P,ge,me,fe),We=new LE(P,Y,x),Fe=new yE(F),Te=new qA(g,S,G,B,Y,qe,Fe),xe=new hT(g,F),Re=new jA,Ie=new eT(B,Y),Je=new pE(g,S,G,$,le,f,c),ve=new oT(g,le,Y),nt=new fT(P,fe,Y,$),Be=new gE(P,B,fe,Y),Ne=new EE(P,B,fe,Y),fe.programs=Te.programs,g.capabilities=Y,g.extensions=B,g.properties=F,g.renderLists=Re,g.shadowMap=ve,g.state=$,g.info=fe}vt();const je=new dT(g,P);this.xr=je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(q,j,!1))},this.getSize=function(C){return C.set(q,j)},this.setSize=function(C,K,se=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,j=K,t.width=Math.floor(C*Z),t.height=Math.floor(K*Z),se===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(q*Z,j*Z).floor()},this.setDrawingBufferSize=function(C,K,se){q=C,j=K,Z=se,t.width=Math.floor(C*se),t.height=Math.floor(K*se),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,K,se,re){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,K,se,re),$.viewport(w.copy(ae).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,K,se,re){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,K,se,re),$.scissor(V.copy(ue).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){$.setScissorTest(ye=C)},this.setOpaqueSort=function(C){z=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,K=!0,se=!0){let re=0;if(C){let ie=!1;if(A!==null){const Le=A.texture.format;ie=Le===Ev||Le===wv||Le===Mv}if(ie){const Le=A.texture.type,Pe=Le===ls||Le===ts||Le===bf||Le===js||Le===bv||Le===Sv,Ue=Je.getClearColor(),ze=Je.getClearAlpha(),$e=Ue.r,Ge=Ue.g,Ve=Ue.b;Pe?(m[0]=$e,m[1]=Ge,m[2]=Ve,m[3]=ze,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=$e,v[1]=Ge,v[2]=Ve,v[3]=ze,P.clearBufferiv(P.COLOR,0,v))}else re|=P.COLOR_BUFFER_BIT}K&&(re|=P.DEPTH_BUFFER_BIT),se&&(re|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),Ie.dispose(),F.dispose(),S.dispose(),G.dispose(),le.dispose(),qe.dispose(),nt.dispose(),Te.dispose(),je.dispose(),je.removeEventListener("sessionstart",ln),je.removeEventListener("sessionend",ct),L&&(L.dispose(),L=null),un.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=fe.autoReset,K=ve.enabled,se=ve.autoUpdate,re=ve.needsUpdate,ie=ve.type;vt(),fe.autoReset=C,ve.enabled=K,ve.autoUpdate=se,ve.needsUpdate=re,ve.type=ie}function Me(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const K=C.target;K.removeEventListener("dispose",we),ke(K)}function ke(C){Oe(C),F.remove(C)}function Oe(C){const K=F.get(C).programs;K!==void 0&&(K.forEach(function(se){Te.releaseProgram(se)}),C.isShaderMaterial&&Te.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,se,re,ie,Le){K===null&&(K=X);const Pe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ue=h_(C,K,se,re,ie);$.setMaterial(re,Pe);let ze=se.index,$e=1;if(re.wireframe===!0){if(ze=ge.getWireframeAttribute(se),ze===void 0)return;$e=2}const Ge=se.drawRange,Ve=se.attributes.position;let wt=Ge.start*$e,En=(Ge.start+Ge.count)*$e;Le!==null&&(wt=Math.max(wt,Le.start*$e),En=Math.min(En,(Le.start+Le.count)*$e)),ze!==null?(wt=Math.max(wt,0),En=Math.min(En,ze.count)):Ve!=null&&(wt=Math.max(wt,0),En=Math.min(En,Ve.count));const Ht=En-wt;if(Ht<0||Ht===1/0)return;qe.setup(ie,re,Ue,se,ze);let Si,ft=Be;if(ze!==null&&(Si=me.get(ze),ft=Ne,ft.setIndex(Si)),ie.isMesh)re.wireframe===!0?($.setLineWidth(re.wireframeLinewidth*de()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(ie.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),$.setLineWidth(Ye*de()),ie.isLineSegments?ft.setMode(P.LINES):ie.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else ie.isPoints?ft.setMode(P.POINTS):ie.isSprite&&ft.setMode(P.TRIANGLES);if(ie.isBatchedMesh)ft.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)ft.renderInstances(wt,Ht,ie.count);else if(se.isInstancedBufferGeometry){const Ye=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Gu=Math.min(se.instanceCount,Ye);ft.renderInstances(wt,Ht,Gu)}else ft.render(wt,Ht)};function rt(C,K,se){C.transparent===!0&&C.side===Kt&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,ic(C,K,se),C.side=ps,C.needsUpdate=!0,ic(C,K,se),C.side=Kt):ic(C,K,se)}this.compile=function(C,K,se=null){se===null&&(se=C),p=Ie.get(se),p.init(),_.push(p),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),C!==se&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),p.setupLights(g._useLegacyLights);const re=new Set;return C.traverse(function(ie){const Le=ie.material;if(Le)if(Array.isArray(Le))for(let Pe=0;Pe<Le.length;Pe++){const Ue=Le[Pe];rt(Ue,se,ie),re.add(Ue)}else rt(Le,se,ie),re.add(Le)}),_.pop(),p=null,re},this.compileAsync=function(C,K,se=null){const re=this.compile(C,K,se);return new Promise(ie=>{function Le(){if(re.forEach(function(Pe){F.get(Pe).currentProgram.isReady()&&re.delete(Pe)}),re.size===0){ie(C);return}setTimeout(Le,10)}B.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let at=null;function zt(C){at&&at(C)}function ln(){un.stop()}function ct(){un.start()}const un=new Hv;un.setAnimationLoop(zt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(C){at=C,je.setAnimationLoop(C),C===null?un.stop():un.start()},je.addEventListener("sessionstart",ln),je.addEventListener("sessionend",ct),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(K),K=je.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,K,A),p=Ie.get(C,_.length),p.init(),_.push(p),T.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),te.setFromProjectionMatrix(T),N=this.localClippingEnabled,O=Fe.init(this.clippingPlanes,N),y=Re.get(C,h.length),y.init(),h.push(y),ri(C,K,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(z,Q),this.info.render.frame++,O===!0&&Fe.beginShadows();const se=p.state.shadowsArray;if(ve.render(se,C,K),O===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(y,C),p.setupLights(g._useLegacyLights),K.isArrayCamera){const re=K.cameras;for(let ie=0,Le=re.length;ie<Le;ie++){const Pe=re[ie];hp(y,C,Pe,Pe.viewport)}}else hp(y,C,K);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(g,C,K),qe.resetDefaultState(),k=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ri(C,K,se,re){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){re&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(T);const Pe=le.update(C),Ue=C.material;Ue.visible&&y.push(C,Pe,Ue,se,ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const Pe=le.update(C),Ue=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ce.copy(Pe.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(T)),Array.isArray(Ue)){const ze=Pe.groups;for(let $e=0,Ge=ze.length;$e<Ge;$e++){const Ve=ze[$e],wt=Ue[Ve.materialIndex];wt&&wt.visible&&y.push(C,Pe,wt,se,ce.z,Ve)}}else Ue.visible&&y.push(C,Pe,Ue,se,ce.z,null)}}const Le=C.children;for(let Pe=0,Ue=Le.length;Pe<Ue;Pe++)ri(Le[Pe],K,se,re)}function hp(C,K,se,re){const ie=C.opaque,Le=C.transmissive,Pe=C.transparent;p.setupLightsView(se),O===!0&&Fe.setGlobalState(g.clippingPlanes,se),Le.length>0&&d_(ie,Le,K,se),re&&$.viewport(w.copy(re)),ie.length>0&&nc(ie,K,se),Le.length>0&&nc(Le,K,se),Pe.length>0&&nc(Pe,K,se),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function d_(C,K,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Le=Y.isWebGL2;L===null&&(L=new so(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?Pa:ls,minFilter:Ca,samples:Le?4:0})),g.getDrawingBufferSize(ee),Le?L.setSize(ee.x,ee.y):L.setSize(Il(ee.x),Il(ee.y));const Pe=g.getRenderTarget();g.setRenderTarget(L),g.getClearColor(oe),U=g.getClearAlpha(),U<1&&g.setClearColor(16777215,.5),g.clear();const Ue=g.toneMapping;g.toneMapping=cs,nc(C,se,re),x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L);let ze=!1;for(let $e=0,Ge=K.length;$e<Ge;$e++){const Ve=K[$e],wt=Ve.object,En=Ve.geometry,Ht=Ve.material,Si=Ve.group;if(Ht.side===Kt&&wt.layers.test(re.layers)){const ft=Ht.side;Ht.side=Mn,Ht.needsUpdate=!0,fp(wt,se,re,En,Ht,Si),Ht.side=ft,Ht.needsUpdate=!0,ze=!0}}ze===!0&&(x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L)),g.setRenderTarget(Pe),g.setClearColor(oe,U),g.toneMapping=Ue}function nc(C,K,se){const re=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Le=C.length;ie<Le;ie++){const Pe=C[ie],Ue=Pe.object,ze=Pe.geometry,$e=re===null?Pe.material:re,Ge=Pe.group;Ue.layers.test(se.layers)&&fp(Ue,K,se,ze,$e,Ge)}}function fp(C,K,se,re,ie,Le){C.onBeforeRender(g,K,se,re,ie,Le),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(g,K,se,re,C,Le),ie.transparent===!0&&ie.side===Kt&&ie.forceSinglePass===!1?(ie.side=Mn,ie.needsUpdate=!0,g.renderBufferDirect(se,K,re,ie,C,Le),ie.side=ps,ie.needsUpdate=!0,g.renderBufferDirect(se,K,re,ie,C,Le),ie.side=Kt):g.renderBufferDirect(se,K,re,ie,C,Le),C.onAfterRender(g,K,se,re,ie,Le)}function ic(C,K,se){K.isScene!==!0&&(K=X);const re=F.get(C),ie=p.state.lights,Le=p.state.shadowsArray,Pe=ie.state.version,Ue=Te.getParameters(C,ie.state,Le,K,se),ze=Te.getProgramCacheKey(Ue);let $e=re.programs;re.environment=C.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(C.isMeshStandardMaterial?G:S).get(C.envMap||re.environment),$e===void 0&&(C.addEventListener("dispose",we),$e=new Map,re.programs=$e);let Ge=$e.get(ze);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Pe)return mp(C,Ue),Ge}else Ue.uniforms=Te.getUniforms(C),C.onBuild(se,Ue,g),C.onBeforeCompile(Ue,g),Ge=Te.acquireProgram(Ue,ze),$e.set(ze,Ge),re.uniforms=Ue.uniforms;const Ve=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=Fe.uniform),mp(C,Ue),re.needsLights=p_(C),re.lightsStateVersion=Pe,re.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function pp(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=al.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function mp(C,K){const se=F.get(C);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function h_(C,K,se,re,ie){K.isScene!==!0&&(K=X),x.resetTextureUnits();const Le=K.fog,Pe=re.isMeshStandardMaterial?K.environment:null,Ue=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,ze=(re.isMeshStandardMaterial?G:S).get(re.envMap||Pe),$e=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ge=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ve=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,En=!!se.morphAttributes.color;let Ht=cs;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ht=g.toneMapping);const Si=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ft=Si!==void 0?Si.length:0,Ye=F.get(re),Gu=p.state.lights;if(O===!0&&(N===!0||C!==M)){const Dn=C===M&&re.id===k;Fe.setState(re,C,Dn)}let yt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Gu.state.version||Ye.outputColorSpace!==Ue||ie.isBatchedMesh&&Ye.batching===!1||!ie.isBatchedMesh&&Ye.batching===!0||ie.isInstancedMesh&&Ye.instancing===!1||!ie.isInstancedMesh&&Ye.instancing===!0||ie.isSkinnedMesh&&Ye.skinning===!1||!ie.isSkinnedMesh&&Ye.skinning===!0||ie.isInstancedMesh&&Ye.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ye.instancingColor===!1&&ie.instanceColor!==null||Ye.envMap!==ze||re.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==Ge||Ye.morphTargets!==Ve||Ye.morphNormals!==wt||Ye.morphColors!==En||Ye.toneMapping!==Ht||Y.isWebGL2===!0&&Ye.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,Ye.__version=re.version);let Ss=Ye.currentProgram;yt===!0&&(Ss=ic(re,K,ie));let gp=!1,Dr=!1,Vu=!1;const en=Ss.getUniforms(),Ms=Ye.uniforms;if($.useProgram(Ss.program)&&(gp=!0,Dr=!0,Vu=!0),re.id!==k&&(k=re.id,Dr=!0),gp||M!==C){en.setValue(P,"projectionMatrix",C.projectionMatrix),en.setValue(P,"viewMatrix",C.matrixWorldInverse);const Dn=en.map.cameraPosition;Dn!==void 0&&Dn.setValue(P,ce.setFromMatrixPosition(C.matrixWorld)),Y.logarithmicDepthBuffer&&en.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&en.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Dr=!0,Vu=!0)}if(ie.isSkinnedMesh){en.setOptional(P,ie,"bindMatrix"),en.setOptional(P,ie,"bindMatrixInverse");const Dn=ie.skeleton;Dn&&(Y.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),en.setValue(P,"boneTexture",Dn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(en.setOptional(P,ie,"batchingTexture"),en.setValue(P,"batchingTexture",ie._matricesTexture,x));const Wu=se.morphAttributes;if((Wu.position!==void 0||Wu.normal!==void 0||Wu.color!==void 0&&Y.isWebGL2===!0)&&We.update(ie,se,Ss),(Dr||Ye.receiveShadow!==ie.receiveShadow)&&(Ye.receiveShadow=ie.receiveShadow,en.setValue(P,"receiveShadow",ie.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ms.envMap.value=ze,Ms.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Dr&&(en.setValue(P,"toneMappingExposure",g.toneMappingExposure),Ye.needsLights&&f_(Ms,Vu),Le&&re.fog===!0&&xe.refreshFogUniforms(Ms,Le),xe.refreshMaterialUniforms(Ms,re,Z,j,L),al.upload(P,pp(Ye),Ms,x)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(al.upload(P,pp(Ye),Ms,x),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&en.setValue(P,"center",ie.center),en.setValue(P,"modelViewMatrix",ie.modelViewMatrix),en.setValue(P,"normalMatrix",ie.normalMatrix),en.setValue(P,"modelMatrix",ie.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Dn=re.uniformsGroups;for(let qu=0,m_=Dn.length;qu<m_;qu++)if(Y.isWebGL2){const vp=Dn[qu];nt.update(vp,Ss),nt.bind(vp,Ss)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ss}function f_(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function p_(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,K,se){F.get(C.texture).__webglTexture=K,F.get(C.depthTexture).__webglTexture=se;const re=F.get(C);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const se=F.get(C);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,se=0){A=C,R=K,E=se;let re=!0,ie=null,Le=!1,Pe=!1;if(C){const ze=F.get(C);ze.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),re=!1):ze.__webglFramebuffer===void 0?x.setupRenderTarget(C):ze.__hasExternalTextures&&x.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);const Ge=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?ie=Ge[K][se]:ie=Ge[K],Le=!0):Y.isWebGL2&&C.samples>0&&x.useMultisampledRTT(C)===!1?ie=F.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[se]:ie=Ge,w.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest}else w.copy(ae).multiplyScalar(Z).floor(),V.copy(ue).multiplyScalar(Z).floor(),W=ye;if($.bindFramebuffer(P.FRAMEBUFFER,ie)&&Y.drawBuffers&&re&&$.drawBuffers(C,ie),$.viewport(w),$.scissor(V),$.setScissorTest(W),Le){const ze=F.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+K,ze.__webglTexture,se)}else if(Pe){const ze=F.get(C.texture),$e=K||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,se||0,$e)}k=-1},this.readRenderTargetPixels=function(C,K,se,re,ie,Le,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){$.bindFramebuffer(P.FRAMEBUFFER,Ue);try{const ze=C.texture,$e=ze.format,Ge=ze.type;if($e!==Qn&&Ce.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Pa&&(B.has("EXT_color_buffer_half_float")||Y.isWebGL2&&B.has("EXT_color_buffer_float"));if(Ge!==ls&&Ce.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===ns&&(Y.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-re&&se>=0&&se<=C.height-ie&&P.readPixels(K,se,re,ie,Ce.convert($e),Ce.convert(Ge),Le)}finally{const ze=A!==null?F.get(A).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,K,se=0){const re=Math.pow(2,-se),ie=Math.floor(K.image.width*re),Le=Math.floor(K.image.height*re);x.setTexture2D(K,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,C.x,C.y,ie,Le),$.unbindTexture()},this.copyTextureToTexture=function(C,K,se,re=0){const ie=K.image.width,Le=K.image.height,Pe=Ce.convert(se.format),Ue=Ce.convert(se.type);x.setTexture2D(se,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,se.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,C.x,C.y,ie,Le,Pe,Ue,K.image.data):K.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Pe,K.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,re,C.x,C.y,Pe,Ue,K.image),re===0&&se.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,K,se,re,ie=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,ze=Ce.convert(re.format),$e=Ce.convert(re.type);let Ge;if(re.isData3DTexture)x.setTexture3D(re,0),Ge=P.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)x.setTexture2DArray(re,0),Ge=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,re.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,re.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),wt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),En=P.getParameter(P.UNPACK_SKIP_PIXELS),Ht=P.getParameter(P.UNPACK_SKIP_ROWS),Si=P.getParameter(P.UNPACK_SKIP_IMAGES),ft=se.isCompressedTexture?se.mipmaps[ie]:se.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?P.texSubImage3D(Ge,ie,K.x,K.y,K.z,Le,Pe,Ue,ze,$e,ft.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ge,ie,K.x,K.y,K.z,Le,Pe,Ue,ze,ft.data)):P.texSubImage3D(Ge,ie,K.x,K.y,K.z,Le,Pe,Ue,ze,$e,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,En),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ht),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Si),ie===0&&re.generateMipmaps&&P.generateMipmap(Ge),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?x.setTextureCube(C,0):C.isData3DTexture?x.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?x.setTexture2DArray(C,0):x.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,$.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sf?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Tu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?Zs:Tv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zs?Ut:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pT extends Tf{}pT.prototype.isWebGL1Renderer=!0;class ja{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=i}clone(){return new ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yv extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class vh extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Uo=new Ke,Fm=new Ke,Rc=[],Bm=new po,mT=new Ke,Hr=new tt,Gr=new xs;class an extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vh(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,mT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new po),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Uo),Bm.copy(e.boundingBox).applyMatrix4(Uo),this.boundingBox.union(Bm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Uo),Gr.copy(e.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(i),e.ray.intersectsSphere(Gr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Uo),Fm.multiplyMatrices(i,Uo),Hr.matrixWorld=Fm,Hr.raycast(e,Rc);for(let r=0,a=Rc.length;r<a;r++){const c=Rc[r];c.instanceId=o,c.object=this,t.push(c)}Rc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Lu extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zm=new I,Hm=new I,Gm=new Ke,Ad=new wf,Lc=new xs;class Zv extends kt{constructor(e=new gt,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)zm.fromBufferAttribute(t,s-1),Hm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=zm.distanceTo(Hm);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(s),Lc.radius+=o,e.ray.intersectsSphere(Lc)===!1)return;Gm.copy(s).invert(),Ad.copy(e.ray).applyMatrix4(Gm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,d=new I,f=new I,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const h=Math.max(0,r.start),_=Math.min(v.count,r.start+r.count);for(let g=h,b=_-1;g<b;g+=m){const R=v.getX(g),E=v.getX(g+1);if(l.fromBufferAttribute(p,R),u.fromBufferAttribute(p,E),Ad.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let g=h,b=_-1;g<b;g+=m){if(l.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),Ad.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const Vm=new I,Wm=new I;class Kv extends Zv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)Vm.fromBufferAttribute(t,s),Wm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vm.distanceTo(Wm);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jv extends mo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new Ke,yh=new wf,Cc=new xs,Pc=new I;class Qv extends kt{constructor(e=new gt,t=new Jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cc.copy(i.boundingSphere),Cc.applyMatrix4(s),Cc.radius+=o,e.ray.intersectsSphere(Cc)===!1)return;qm.copy(s).invert(),yh.copy(e.ray).applyMatrix4(qm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let v=f,y=m;v<y;v++){const p=l.getX(v);Pc.fromBufferAttribute(d,p),Xm(Pc,p,c,s,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,y=m;v<y;v++)Pc.fromBufferAttribute(d,v),Xm(Pc,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Xm(n,e,t,i,s,o,r){const a=yh.distanceSqToPoint(n);if(a<t){const c=new I;yh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],f=i[s+1]-u,m=(r-u)/f;return(s+m)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=t||(r.isVector2?new pe:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],o=[],r=[],a=new I,c=new Ke;for(let m=0;m<=e;m++){const v=m/e;s[m]=this.getTangentAt(v,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let m=1;m<=e;m++){if(o[m]=o[m-1].clone(),r[m]=r[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Zt(s[m-1].dot(s[m]),-1,1));o[m].applyMatrix4(c.makeRotationAxis(a,v))}r[m].crossVectors(s[m],o[m])}if(t===!0){let m=Math.acos(Zt(o[0].dot(o[e]),-1,1));m/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(m=-m);for(let v=1;v<=e;v++)o[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rf extends bi{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new pe,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*d+this.aX,l=f*d+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gT extends Rf{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Lf(){let n=0,e=0,t=0,i=0;function s(o,r,a,c){n=o,e=a,t=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,d){let f=(r-o)/l-(a-o)/(l+u)+(a-r)/u,m=(a-r)/u-(c-r)/(u+d)+(c-a)/d;f*=u,m*=u,s(r,a,f,m)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const Ic=new I,Td=new Lf,Rd=new Lf,Ld=new Lf;class vT extends bi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(Ic.subVectors(s[0],s[1]).add(s[0]),l=Ic);const d=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Ic.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Ic),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);y<1e-4&&(y=1),v<1e-4&&(v=y),p<1e-4&&(p=y),Td.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,v,y,p),Rd.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,v,y,p),Ld.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,v,y,p)}else this.curveType==="catmullrom"&&(Td.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),Rd.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),Ld.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(Td.calc(c),Rd.calc(c),Ld.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $m(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+r)*c+(-3*t+3*i-2*o-r)*a+o*n+t}function yT(n,e){const t=1-n;return t*t*e}function xT(n,e){return 2*(1-n)*n*e}function _T(n,e){return n*n*e}function fa(n,e,t,i){return yT(n,e)+xT(n,t)+_T(n,i)}function bT(n,e){const t=1-n;return t*t*t*e}function ST(n,e){const t=1-n;return 3*t*t*n*e}function MT(n,e){return 3*(1-n)*n*n*e}function wT(n,e){return n*n*n*e}function pa(n,e,t,i,s){return bT(n,e)+ST(n,t)+MT(n,i)+wT(n,s)}class ey extends bi{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(pa(e,s.x,o.x,r.x,a.x),pa(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ET extends bi{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(pa(e,s.x,o.x,r.x,a.x),pa(e,s.y,o.y,r.y,a.y),pa(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ty extends bi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class AT extends bi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends bi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(fa(e,s.x,o.x,r.x),fa(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TT extends bi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(fa(e,s.x,o.x,r.x),fa(e,s.y,o.y,r.y),fa(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iy extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set($m(a,c.x,l.x,u.x,d.x),$m(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var xh=Object.freeze({__proto__:null,ArcCurve:gT,CatmullRomCurve3:vT,CubicBezierCurve:ey,CubicBezierCurve3:ET,EllipseCurve:Rf,LineCurve:ty,LineCurve3:AT,QuadraticBezierCurve:ny,QuadraticBezierCurve3:TT,SplineCurve:iy});class RT extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new xh[s.type]().fromJSON(s))}return this}}class sr extends RT{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ty(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new ny(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new ey(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new iy(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,o,r,a,c),this}absellipse(e,t,i,s,o,r,a,c){const l=new Rf(e,t,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cu extends gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],r=[],a=[],c=[],l=new I,u=new pe;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=i+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[f]/e+1)/2,u.y=(r[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Vn extends gt{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],f=[],m=[];let v=0;const y=[],p=i/2;let h=0;_(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(m,2));function _(){const b=new I,R=new I;let E=0;const A=(t-e)/i;for(let k=0;k<=o;k++){const M=[],w=k/o,V=w*(t-e)+e;for(let W=0;W<=s;W++){const oe=W/s,U=oe*c+a,q=Math.sin(U),j=Math.cos(U);R.x=V*q,R.y=-w*i+p,R.z=V*j,d.push(R.x,R.y,R.z),b.set(q,A,j).normalize(),f.push(b.x,b.y,b.z),m.push(oe,1-w),M.push(v++)}y.push(M)}for(let k=0;k<s;k++)for(let M=0;M<o;M++){const w=y[M][k],V=y[M+1][k],W=y[M+1][k+1],oe=y[M][k+1];u.push(w,V,oe),u.push(V,W,oe),E+=6}l.addGroup(h,E,0),h+=E}function g(b){const R=v,E=new pe,A=new I;let k=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),v++;const V=v;for(let W=0;W<=s;W++){const U=W/s*c+a,q=Math.cos(U),j=Math.sin(U);A.x=M*j,A.y=p*w,A.z=M*q,d.push(A.x,A.y,A.z),f.push(0,w,0),E.x=q*.5+.5,E.y=j*.5*w+.5,m.push(E.x,E.y),v++}for(let W=0;W<s;W++){const oe=R+W,U=V+W;b===!0?u.push(U,U+1,oe):u.push(U+1,U,oe),k+=3}l.addGroup(h,k,b===!0?1:2),h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vi extends Vn{constructor(e=1,t=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Vi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cf extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],r=[];a(s),l(i),u(),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(o.slice(),3)),this.setAttribute("uv",new Qe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const g=new I,b=new I,R=new I;for(let E=0;E<t.length;E+=3)m(t[E+0],g),m(t[E+1],b),m(t[E+2],R),c(g,b,R,_)}function c(_,g,b,R){const E=R+1,A=[];for(let k=0;k<=E;k++){A[k]=[];const M=_.clone().lerp(b,k/E),w=g.clone().lerp(b,k/E),V=E-k;for(let W=0;W<=V;W++)W===0&&k===E?A[k][W]=M:A[k][W]=M.clone().lerp(w,W/V)}for(let k=0;k<E;k++)for(let M=0;M<2*(E-k)-1;M++){const w=Math.floor(M/2);M%2===0?(f(A[k][w+1]),f(A[k+1][w]),f(A[k][w])):(f(A[k][w+1]),f(A[k+1][w+1]),f(A[k+1][w]))}}function l(_){const g=new I;for(let b=0;b<o.length;b+=3)g.x=o[b+0],g.y=o[b+1],g.z=o[b+2],g.normalize().multiplyScalar(_),o[b+0]=g.x,o[b+1]=g.y,o[b+2]=g.z}function u(){const _=new I;for(let g=0;g<o.length;g+=3){_.x=o[g+0],_.y=o[g+1],_.z=o[g+2];const b=p(_)/2/Math.PI+.5,R=h(_)/Math.PI+.5;r.push(b,1-R)}v(),d()}function d(){for(let _=0;_<r.length;_+=6){const g=r[_+0],b=r[_+2],R=r[_+4],E=Math.max(g,b,R),A=Math.min(g,b,R);E>.9&&A<.1&&(g<.2&&(r[_+0]+=1),b<.2&&(r[_+2]+=1),R<.2&&(r[_+4]+=1))}}function f(_){o.push(_.x,_.y,_.z)}function m(_,g){const b=_*3;g.x=e[b+0],g.y=e[b+1],g.z=e[b+2]}function v(){const _=new I,g=new I,b=new I,R=new I,E=new pe,A=new pe,k=new pe;for(let M=0,w=0;M<o.length;M+=9,w+=6){_.set(o[M+0],o[M+1],o[M+2]),g.set(o[M+3],o[M+4],o[M+5]),b.set(o[M+6],o[M+7],o[M+8]),E.set(r[w+0],r[w+1]),A.set(r[w+2],r[w+3]),k.set(r[w+4],r[w+5]),R.copy(_).add(g).add(b).divideScalar(3);const V=p(R);y(E,w+0,_,V),y(A,w+2,g,V),y(k,w+4,b,V)}}function y(_,g,b,R){R<0&&_.x===1&&(r[g]=_.x-1),b.x===0&&b.z===0&&(r[g]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.vertices,e.indices,e.radius,e.details)}}const Nc=new I,Dc=new I,Cd=new I,Oc=new Bn;class sy extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(nr*t),r=e.getIndex(),a=e.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let v=0;v<c;v+=3){r?(l[0]=r.getX(v),l[1]=r.getX(v+1),l[2]=r.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:y,b:p,c:h}=Oc;if(y.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),h.fromBufferAttribute(a,l[2]),Oc.getNormal(Cd),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const g=(_+1)%3,b=d[_],R=d[g],E=Oc[u[_]],A=Oc[u[g]],k=`${b}_${R}`,M=`${R}_${b}`;M in f&&f[M]?(Cd.dot(f[M].normal)<=o&&(m.push(E.x,E.y,E.z),m.push(A.x,A.y,A.z)),f[M]=null):k in f||(f[k]={index0:l[_],index1:l[g],normal:Cd.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:p}=f[v];Nc.fromBufferAttribute(a,y),Dc.fromBufferAttribute(a,p),m.push(Nc.x,Nc.y,Nc.z),m.push(Dc.x,Dc.y,Dc.z)}this.setAttribute("position",new Qe(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ks extends sr{constructor(e){super(e),this.uuid=fo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new sr().fromJSON(s))}return this}}const LT={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=oy(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,d,f,m;if(i&&(o=DT(n,e,o,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let v=t;v<s;v+=t)d=n[v],f=n[v+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Na(o,r,t,a,c,m,0),r}};function oy(n,e,t,i,s){let o,r;if(s===qT(n,e,t,i)>0)for(o=e;o<t;o+=i)r=jm(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=jm(o,n[o],n[o+1],r);return r&&Pu(r,r.next)&&(Oa(r),r=r.next),r}function oo(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Pu(t,t.next)||pt(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Na(n,e,t,i,s,o,r){if(!n)return;!r&&o&&BT(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?PT(n,i,s,o):CT(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Oa(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=IT(oo(n),e,t),Na(n,e,t,i,s,o,2)):r===2&&NT(n,e,t,i,s,o):Na(oo(n),e,t,i,s,o,1);break}}}function CT(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,c=t.y,l=i.y,u=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,m=a>c?a>l?a:l:c>l?c:l;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=d&&v.y<=m&&$o(s,a,o,c,r,l,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function PT(n,e,t,i){const s=n.prev,o=n,r=n.next;if(pt(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,d=o.y,f=r.y,m=a<c?a<l?a:l:c<l?c:l,v=u<d?u<f?u:f:d<f?d:f,y=a>c?a>l?a:l:c>l?c:l,p=u>d?u>f?u:f:d>f?d:f,h=_h(m,v,e,t,i),_=_h(y,p,e,t,i);let g=n.prevZ,b=n.nextZ;for(;g&&g.z>=h&&b&&b.z<=_;){if(g.x>=m&&g.x<=y&&g.y>=v&&g.y<=p&&g!==s&&g!==r&&$o(a,u,c,d,l,f,g.x,g.y)&&pt(g.prev,g,g.next)>=0||(g=g.prevZ,b.x>=m&&b.x<=y&&b.y>=v&&b.y<=p&&b!==s&&b!==r&&$o(a,u,c,d,l,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;g&&g.z>=h;){if(g.x>=m&&g.x<=y&&g.y>=v&&g.y<=p&&g!==s&&g!==r&&$o(a,u,c,d,l,f,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=y&&b.y>=v&&b.y<=p&&b!==s&&b!==r&&$o(a,u,c,d,l,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function IT(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!Pu(s,o)&&ry(s,i,i.next,o)&&Da(s,o)&&Da(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),Oa(i),Oa(i.next),i=n=o),i=i.next}while(i!==n);return oo(i)}function NT(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&GT(r,a)){let c=ay(r,a);r=oo(r,r.next),c=oo(c,c.next),Na(r,e,t,i,s,o,0),Na(c,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function DT(n,e,t,i){const s=[];let o,r,a,c,l;for(o=0,r=e.length;o<r;o++)a=e[o]*i,c=o<r-1?e[o+1]*i:n.length,l=oy(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(HT(l));for(s.sort(OT),o=0;o<s.length;o++)t=UT(s[o],t);return t}function OT(n,e){return n.x-e.x}function UT(n,e){const t=kT(n,e);if(!t)return e;const i=ay(t,n);return oo(i,i.next),oo(t,t.next)}function kT(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=o&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,d;t=s;do o>=t.x&&t.x>=c&&o!==t.x&&$o(r<l?o:i,r,c,l,r<l?i:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),Da(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&FT(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function FT(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function BT(n,e,t,i){let s=n;do s.z===0&&(s.z=_h(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zT(s)}function zT(n){let e,t,i,s,o,r,a,c,l=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,l*=2}while(r>1);return n}function _h(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function HT(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function $o(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function GT(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!VT(n,e)&&(Da(n,e)&&Da(e,n)&&WT(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Pu(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Pu(n,e){return n.x===e.x&&n.y===e.y}function ry(n,e,t,i){const s=kc(pt(n,e,t)),o=kc(pt(n,e,i)),r=kc(pt(t,i,n)),a=kc(pt(t,i,e));return!!(s!==o&&r!==a||s===0&&Uc(n,t,e)||o===0&&Uc(n,i,e)||r===0&&Uc(t,n,i)||a===0&&Uc(t,e,i))}function Uc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function kc(n){return n>0?1:n<0?-1:0}function VT(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ry(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Da(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function WT(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ay(n,e){const t=new bh(n.i,n.x,n.y),i=new bh(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function jm(n,e,t,i){const s=new bh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Oa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qT(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class xi{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return xi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];Ym(e),Zm(i,e);let r=e.length;t.forEach(Ym);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Zm(i,t[c]);const a=LT.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ym(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Pf extends gt{constructor(e=new Ks([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];r(l)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:XT;let g,b=!1,R,E,A,k;h&&(g=h.getSpacedPoints(u),b=!0,f=!1,R=h.computeFrenetFrames(u,!1),E=new I,A=new I,k=new I),f||(p=0,m=0,v=0,y=0);const M=a.extractPoints(l);let w=M.shape;const V=M.holes;if(!xi.isClockWise(w)){w=w.reverse();for(let P=0,ne=V.length;P<ne;P++){const B=V[P];xi.isClockWise(B)&&(V[P]=B.reverse())}}const oe=xi.triangulateShape(w,V),U=w;for(let P=0,ne=V.length;P<ne;P++){const B=V[P];w=w.concat(B)}function q(P,ne,B){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ne,B)}const j=w.length,Z=oe.length;function z(P,ne,B){let Y,$,fe;const F=P.x-ne.x,x=P.y-ne.y,S=B.x-P.x,G=B.y-P.y,me=F*F+x*x,ge=F*G-x*S;if(Math.abs(ge)>Number.EPSILON){const le=Math.sqrt(me),Te=Math.sqrt(S*S+G*G),xe=ne.x-x/le,Re=ne.y+F/le,Ie=B.x-G/Te,Fe=B.y+S/Te,ve=((Ie-xe)*G-(Fe-Re)*S)/(F*G-x*S);Y=xe+F*ve-P.x,$=Re+x*ve-P.y;const Je=Y*Y+$*$;if(Je<=2)return new pe(Y,$);fe=Math.sqrt(Je/2)}else{let le=!1;F>Number.EPSILON?S>Number.EPSILON&&(le=!0):F<-Number.EPSILON?S<-Number.EPSILON&&(le=!0):Math.sign(x)===Math.sign(G)&&(le=!0),le?(Y=-x,$=F,fe=Math.sqrt(me)):(Y=F,$=x,fe=Math.sqrt(me/2))}return new pe(Y/fe,$/fe)}const Q=[];for(let P=0,ne=U.length,B=ne-1,Y=P+1;P<ne;P++,B++,Y++)B===ne&&(B=0),Y===ne&&(Y=0),Q[P]=z(U[P],U[B],U[Y]);const ae=[];let ue,ye=Q.concat();for(let P=0,ne=V.length;P<ne;P++){const B=V[P];ue=[];for(let Y=0,$=B.length,fe=$-1,F=Y+1;Y<$;Y++,fe++,F++)fe===$&&(fe=0),F===$&&(F=0),ue[Y]=z(B[Y],B[fe],B[F]);ae.push(ue),ye=ye.concat(ue)}for(let P=0;P<p;P++){const ne=P/p,B=m*Math.cos(ne*Math.PI/2),Y=v*Math.sin(ne*Math.PI/2)+y;for(let $=0,fe=U.length;$<fe;$++){const F=q(U[$],Q[$],Y);T(F.x,F.y,-B)}for(let $=0,fe=V.length;$<fe;$++){const F=V[$];ue=ae[$];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],ue[x],Y);T(G.x,G.y,-B)}}}const te=v+y;for(let P=0;P<j;P++){const ne=f?q(w[P],ye[P],te):w[P];b?(A.copy(R.normals[0]).multiplyScalar(ne.x),E.copy(R.binormals[0]).multiplyScalar(ne.y),k.copy(g[0]).add(A).add(E),T(k.x,k.y,k.z)):T(ne.x,ne.y,0)}for(let P=1;P<=u;P++)for(let ne=0;ne<j;ne++){const B=f?q(w[ne],ye[ne],te):w[ne];b?(A.copy(R.normals[P]).multiplyScalar(B.x),E.copy(R.binormals[P]).multiplyScalar(B.y),k.copy(g[P]).add(A).add(E),T(k.x,k.y,k.z)):T(B.x,B.y,d/u*P)}for(let P=p-1;P>=0;P--){const ne=P/p,B=m*Math.cos(ne*Math.PI/2),Y=v*Math.sin(ne*Math.PI/2)+y;for(let $=0,fe=U.length;$<fe;$++){const F=q(U[$],Q[$],Y);T(F.x,F.y,d+B)}for(let $=0,fe=V.length;$<fe;$++){const F=V[$];ue=ae[$];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],ue[x],Y);b?T(G.x,G.y+g[u-1].y,g[u-1].x+B):T(G.x,G.y,d+B)}}}O(),N();function O(){const P=s.length/3;if(f){let ne=0,B=j*ne;for(let Y=0;Y<Z;Y++){const $=oe[Y];ee($[2]+B,$[1]+B,$[0]+B)}ne=u+p*2,B=j*ne;for(let Y=0;Y<Z;Y++){const $=oe[Y];ee($[0]+B,$[1]+B,$[2]+B)}}else{for(let ne=0;ne<Z;ne++){const B=oe[ne];ee(B[2],B[1],B[0])}for(let ne=0;ne<Z;ne++){const B=oe[ne];ee(B[0]+j*u,B[1]+j*u,B[2]+j*u)}}i.addGroup(P,s.length/3-P,0)}function N(){const P=s.length/3;let ne=0;L(U,ne),ne+=U.length;for(let B=0,Y=V.length;B<Y;B++){const $=V[B];L($,ne),ne+=$.length}i.addGroup(P,s.length/3-P,1)}function L(P,ne){let B=P.length;for(;--B>=0;){const Y=B;let $=B-1;$<0&&($=P.length-1);for(let fe=0,F=u+p*2;fe<F;fe++){const x=j*fe,S=j*(fe+1),G=ne+Y+x,me=ne+$+x,ge=ne+$+S,le=ne+Y+S;ce(G,me,ge,le)}}}function T(P,ne,B){c.push(P),c.push(ne),c.push(B)}function ee(P,ne,B){X(P),X(ne),X(B);const Y=s.length/3,$=_.generateTopUV(i,s,Y-3,Y-2,Y-1);de($[0]),de($[1]),de($[2])}function ce(P,ne,B,Y){X(P),X(ne),X(Y),X(ne),X(B),X(Y);const $=s.length/3,fe=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);de(fe[0]),de(fe[1]),de(fe[3]),de(fe[1]),de(fe[2]),de(fe[3])}function X(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function de(P){o.push(P.x),o.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return $T(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xh[s.type]().fromJSON(s)),new Pf(i,e.options)}}const XT={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new pe(o,r),new pe(a,c),new pe(l,u)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],m=e[s*3+1],v=e[s*3+2],y=e[o*3],p=e[o*3+1],h=e[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new pe(r,1-c),new pe(l,1-d),new pe(f,1-v),new pe(y,1-h)]:[new pe(a,1-c),new pe(u,1-d),new pe(m,1-v),new pe(p,1-h)]}};function $T(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ya extends Cf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ya(e.radius,e.detail)}}class If extends gt{constructor(e=new Ks([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(r,2));function l(u){const d=s.length/3,f=u.extractPoints(t);let m=f.shape;const v=f.holes;xi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=v.length;p<h;p++){const _=v[p];xi.isClockWise(_)===!0&&(v[p]=_.reverse())}const y=xi.triangulateShape(m,v);for(let p=0,h=v.length;p<h;p++){const _=v[p];m=m.concat(_)}for(let p=0,h=m.length;p<h;p++){const _=m[p];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let p=0,h=y.length;p<h;p++){const _=y[p],g=_[0]+d,b=_[1]+d,R=_[2]+d;i.push(g,b,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jT(t,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const r=t[e.shapes[s]];i.push(r)}return new If(i,e.curveSegments)}}function jT(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Za extends gt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],d=new I,f=new I,m=[],v=[],y=[],p=[];for(let h=0;h<=i;h++){const _=[],g=h/i;let b=0;h===0&&r===0?b=.5/t:h===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(s+E*o)*Math.sin(r+g*a),d.y=e*Math.cos(r+g*a),d.z=e*Math.sin(s+E*o)*Math.sin(r+g*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(E+b,1-g),_.push(l++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const g=u[h][_+1],b=u[h][_],R=u[h+1][_],E=u[h+1][_+1];(h!==0||r>0)&&m.push(g,b,E),(h!==i-1||c<Math.PI)&&m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Iu extends gt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let v=0;v<=s;v++){const y=v/s*o,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(v/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=s;v++){const y=(s+1)*m+v-1,p=(s+1)*(m-1)+v-1,h=(s+1)*(m-1)+v,_=(s+1)*m+v;r.push(y,p,_),r.push(p,h,_)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends mo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rv,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_f,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Km={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class YT{constructor(e,t,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],v=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const ZT=new YT;class Nf{constructor(e){this.manager=e!==void 0?e:ZT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Nf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri={};class KT extends Error{constructor(e,t){super(e),this.response=t}}class JT extends Nf{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Km.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:i,onError:s});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:i,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ri[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,v=m!==0;let y=0;const p=new ReadableStream({start(h){_();function _(){d.read().then(({done:g,value:b})=>{if(g)h.close();else{y+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:m});for(let E=0,A=u.length;E<A;E++){const k=u[E];k.onProgress&&k.onProgress(R)}h.enqueue(b),_()}})}}});return new Response(p)}else throw new KT(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{Km.add(e,l);const u=Ri[e];delete Ri[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Ri[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ri[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Df extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class QT extends Df{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pd=new Ke,Jm=new I,Qm=new I;class e1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ef,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Jm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jm),Qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qm),t.updateMatrixWorld(),Pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t1 extends e1{constructor(){super(new Gv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sh extends Df{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new t1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class n1 extends Df{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const eg=new pe;class i1{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=eg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,eg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Rs{constructor(){this.type="ShapePath",this.color=new Ee,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new sr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,o,r){return this.currentPath.bezierCurveTo(e,t,i,s,o,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const _=[];for(let g=0,b=h.length;g<b;g++){const R=h[g],E=new Ks;E.curves=R.curves,_.push(E)}return _}function i(h,_){const g=_.length;let b=!1;for(let R=g-1,E=0;E<g;R=E++){let A=_[R],k=_[E],M=k.x-A.x,w=k.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=_[E],M=-M,k=_[R],w=-w),h.y<A.y||h.y>k.y)continue;if(h.y===A.y){if(h.x===A.x)return!0}else{const V=w*(h.x-A.x)-M*(h.y-A.y);if(V===0)return!0;if(V<0)continue;b=!b}}else{if(h.y!==A.y)continue;if(k.x<=h.x&&h.x<=A.x||A.x<=h.x&&h.x<=k.x)return!0}}return b}const s=xi.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Ks,c.curves=a.curves,l.push(c),l;let u=!s(o[0].getPoints());u=e?!u:u;const d=[],f=[];let m=[],v=0,y;f[v]=void 0,m[v]=[];for(let h=0,_=o.length;h<_;h++)a=o[h],y=a.getPoints(),r=s(y),r=e?!r:r,r?(!u&&f[v]&&v++,f[v]={s:new Ks,p:y},f[v].s.curves=a.curves,u&&v++,m[v]=[]):m[v].push({h:a,p:y[0]});if(!f[0])return t(o);if(f.length>1){let h=!1,_=0;for(let g=0,b=f.length;g<b;g++)d[g]=[];for(let g=0,b=f.length;g<b;g++){const R=m[g];for(let E=0;E<R.length;E++){const A=R[E];let k=!0;for(let M=0;M<f.length;M++)i(A.p,f[M].p)&&(g!==M&&_++,k?(k=!1,d[M].push(A)):h=!0);k&&d[g].push(A)}}_>0&&h===!1&&(m=d)}let p;for(let h=0,_=f.length;h<_;h++){c=f[h].s,l.push(c),p=m[h];for(let g=0,b=p.length;g<b;g++)c.holes.push(p[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);function s1(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function o1(n){n.vertexShader=`attribute float instanceAlpha;
varying float vInstanceAlpha;
`+n.vertexShader.replace("void main() {",`void main() {
	vInstanceAlpha = instanceAlpha;`),n.fragmentShader=`varying float vInstanceAlpha;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= vInstanceAlpha;`)}function Mh(n,e="instanceAlpha"){return n.onBeforeCompile=o1,n.customProgramCacheKey=()=>e,n}function wh(n,e,t=1){const i=new Float32Array(e).fill(t);return n.setAttribute("instanceAlpha",new vh(i,1)),i}const ot=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6500,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of ot)n.activeHeading=n.heading;function cy(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const r1=.42,a1=.55;function c1(n,e){for(const t of ot){const i=n.x-t.x,s=n.z-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)>t.width*.5-r1||Math.abs(c)>t.length*.5-a1)continue;const l=n.y-t.elevation;if(l<-.5||l>no.rollingHeight)continue;const u=cy(e-t.activeHeading);if(!(Math.abs(u)>no.headingTolerance))return t}return null}function l1(n,e=1){for(const t of ot){const i=n.x-t.x,s=n.z-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)<=t.width*.55+e&&Math.abs(c)<=t.length*.5+e)return t}return null}function u1(n,e,t){for(const i of ot){const s=n.x-i.x,o=n.z-i.z,r=Math.sqrt(s*s+o*o),a=n.y-i.elevation;if(r<e&&a<t&&a>-2)return!0}return!1}const ly=[],uy=[],d1=Mh(new qn({color:16771240,transparent:!0,depthWrite:!1})),h1=new qn({}),f1=new Za(.15,8,6),dy=new Ee(7227922),p1=new Ee(16770976),m1=.45,Dl=.22,g1=new ut({color:14729280,flatShading:!0}),hy=new Vn(.05,.06,Dl,5);hy.translate(0,Dl/2,0);const tg=new Ee,ng=new Ke,v1=new I,y1=new I,x1=new Ct,Of=[],ig=1,Ol=.32,sg=1.6,og=1.2,Eh={T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],F:["#####","#....","#....","####.","#....","#....","#...."],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],G:[".###.","#...#","#....","#.###","#...#","#...#",".###."],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],P:["####.","#...#","#...#","####.","#....","#....","#...."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],L:["#....","#....","#....","#....","#....","#....","#####"],A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"]},_1=new qn({color:15790320,side:Kt});function fy(n){const e=[],t=[];for(const[o,r,a,c]of n){const l=e.length/3,u=a/2,d=c/2;e.push(o-u,.06,r-d,o+u,.06,r-d,o+u,.06,r+d,o-u,.06,r+d),t.push(l,l+1,l+2,l,l+2,l+3)}const s=new gt;return s.setAttribute("position",new Qe(e,3)),s.setIndex(t),new tt(s,_1)}function b1(n){const t=2.8000000000000003,i=.4*.7,s=[...n.id].filter(o=>Eh[o]).length;return{cell:.4,glyphL:t,gap:i,totalL:s*t+Math.max(0,s-1)*i,center:n.length*.3}}function S1(n){const e=[],i=n.width/2-.09-.1;e.push([-i,0,.18,n.length*.98],[i,0,.18,n.length*.98]);const s=6,o=3,r=n.width*.9/s,a=r*.55;for(const c of[-1,1]){const l=c*(n.length/2-o/2-.8);for(let u=0;u<s;u++)e.push([(u-(s-1)/2)*r,l,a,o])}return fy(e)}function M1(n){const e=[],{cell:t,glyphL:i,gap:s,totalL:o,center:r}=b1(n),a=[...n.id].filter(h=>Eh[h]);let c=r-o/2;for(const h of a){const _=Eh[h];for(let g=0;g<7;g++)for(let b=0;b<5;b++)_[g][b]==="#"&&e.push([(b-2)*t,c+g*t,t*.85,t*.85]);c+=i+s}const l=3,u=3,d=.18,f=n.length*.8,m=o/2+6,v=Math.max(1,Math.floor((f+u)/(l+u)));let p=-(v*l+(v-1)*u)/2+l/2;for(let h=0;h<v;h++)Math.abs(p-r)>m&&e.push([0,p,d,l]),p+=l+u;return fy(e)}const Ii={concrete:new ut({color:fi.colors.concrete,flatShading:!0}),glass:new ut({color:fi.colors.glass,flatShading:!0}),accent:new ut({color:fi.colors.accent,flatShading:!0})};function w1(){const n=fi.towerHeight,e=n*.66,t=n*.2,i=new lt,s=(a,c,l)=>{const u=new tt(a,c);u.position.y=l,i.add(u)};s(new rn(3,.6,3),Ii.concrete,.3),s(new rn(1.5,e,1.5),Ii.concrete,.6+e/2),s(new rn(2.4,t,2.4),Ii.glass,.6+e+t/2);const o=.6+e+t;s(new rn(2.7,.25,2.7),Ii.concrete,o+.125);const r=new Vn(.05,.05,n*.22,5);for(const a of[-.55,.55]){const c=new tt(r,Ii.accent);c.position.set(a,o+.25+n*.11,0),i.add(c)}return s(new Za(.32,8,6),Ii.concrete,o+.55),i}function E1(){const n=fi.terminal,e=new lt,t=(i,s,o,r,a)=>{const c=new tt(i,s);c.position.set(o,r,a),e.add(c)};return t(new rn(n.depth,n.height,n.length),Ii.concrete,0,n.height/2,0),t(new rn(.2,n.height*.55,n.length*.88),Ii.glass,-3/2,n.height*.5,0),t(new rn(n.depth+.6,.25,n.length+.6),Ii.concrete,0,n.height+.125,0),e}const A1=w1(),T1=E1();function R1(){const n=new lt,e=new ut({color:Ze.runway,flatShading:!0}),t=new Ke;for(let i=0;i<ot.length;i++){const s=ot[i],o=new lt,r=new go(s.width,s.length);r.rotateX(-Math.PI/2),o.add(new tt(r,e)),o.add(S1(s));const a=new lt,c=s.width*.68,l=c*1.05,u=new Ks;u.moveTo(0,l*.55),u.lineTo(-c/2,-l*.45),u.lineTo(0,-l*.05),u.lineTo(c/2,-l*.45),u.closePath();const d=new If(u);d.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5)),m=new Float32Array(f),v=wh(d,f,Ol),y=new an(d,d1,f);y.renderOrder=1;for(let w=0;w<f;w++){const V=w/(f-1)-.5;t.makeTranslation(0,.08,V*s.length*.85),y.setMatrixAt(w,t),m[w]=.5-V,v[w]=Ol}y.instanceMatrix.needsUpdate=!0,a.add(y),ly.push({mesh:y,alpha:v,posT:m,count:f});const h=Math.max(2,Math.floor(s.length/4.5)),_=h*2,g=new Float32Array(_),b=new Float32Array(_*3),R=new an(f1,h1,_),E=new an(hy,g1,_);let A=0;for(let w=0;w<h;w++){const V=w/(h-1)-.5,W=V*s.length*.97,oe=.5-V;for(const U of[-1,1]){const q=U*s.width*.6;t.makeTranslation(q,Dl,W),R.setMatrixAt(A,t),R.setColorAt(A,dy),t.makeTranslation(q,0,W),E.setMatrixAt(A,t),g[A]=oe,b[A*3]=q,b[A*3+1]=Dl,b[A*3+2]=W,A++}}R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,a.add(R),a.add(E),uy.push({mesh:R,posT:g,base:b,count:_}),a.add(M1(s)),o.add(a),Of[i]=a;const k=A1.clone();k.scale.setScalar(fi.towerScale),k.position.set(fi.towerSide,0,fi.towerAlong*s.length*.5),o.add(k);const M=T1.clone();M.position.set(fi.terminal.side,0,fi.terminal.along*s.length*.5),o.add(M),o.position.set(s.x,s.elevation+.04,s.z),o.rotation.y=s.heading,n.add(o)}return n}function L1(n){const e=n%sg/sg;for(const i of ly){const{alpha:s,posT:o,count:r}=i;for(let a=0;a<r;a++){const c=(e-o[a]+1)%1;s[a]=c<.16?ig-(ig-Ol)*(c/.16):Ol}i.mesh.geometry.attributes.instanceAlpha.needsUpdate=!0}const t=n%og/og;for(const i of uy){const{mesh:s,posT:o,base:r,count:a}=i;for(let c=0;c<a;c++){const l=(t-o[c]+1)%1,u=l<.22?1-l/.22:0;tg.copy(dy).lerp(p1,u),s.setColorAt(c,tg);const d=1+u*m1;ng.compose(v1.set(r[c*3],r[c*3+1],r[c*3+2]),x1,y1.set(d,d,d)),s.setMatrixAt(c,ng)}s.instanceColor.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0}}function C1(n){const e=ot.indexOf(n);return Of[e]??null}function py(n){for(let e=0;e<ot.length;e++){const t=ot[e];if(t===n)continue;const i=Math.random()<.5;t.activeHeading=i?cy(t.heading+Math.PI):t.heading;const s=Of[e];s&&(s.rotation.y=i?Math.PI:0)}}const _t={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let Zn=null,my=[];async function P1(n="/teide-game/landcover/canaries.png"){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0);const s=i.getImageData(0,0,e.width,e.height).data,o=new Uint8Array(e.width*e.height);for(let r=0,a=0;a<o.length;r+=4,a++)o[a]=s[r];Zn={data:o,w:e.width,h:e.height},my=D1()}function I1(n,e){const{center:t,metersPerUnit:i}=Ae.heightmap,s=n*i,o=-e*i,r=t.lat+o/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:r,lon:a}}function N1(n,e){const{bbox:t,center:i,metersPerUnit:s}=Ae.heightmap,o=t.lonW+n/(Zn.w-1)*(t.lonE-t.lonW),r=t.latN-e/(Zn.h-1)*(t.latN-t.latS),a=(o-i.lon)*111320*Math.cos(i.lat*Math.PI/180),c=(r-i.lat)*111320;return{x:a/s,z:-c/s}}function Hn(n,e){if(!Zn)return _t.WATER;const{lat:t,lon:i}=I1(n,e),{bbox:s}=Ae.heightmap,o=(i-s.lonW)/(s.lonE-s.lonW)*(Zn.w-1),r=(s.latN-t)/(s.latN-s.latS)*(Zn.h-1);if(o<0||r<0||o>Zn.w-1||r>Zn.h-1)return _t.WATER;const a=Math.round(o),c=Math.round(r);return Zn.data[c*Zn.w+a]}function D1(){const{data:n,w:e,h:t}=Zn,{minClusterPixels:i}=Tt.urban,s=new Uint8Array(n.length),o=[],r=[],a=[0,0,0,0];function c(u){const d=u%e,f=u/e|0;let m=0;return d>0&&(a[m++]=u-1),d<e-1&&(a[m++]=u+1),f>0&&(a[m++]=u-e),f<t-1&&(a[m++]=u+e),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==_t.URBAN)continue;const d=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const v=f[m++];d.push(v);const y=c(v);for(let p=0;p<y;p++){const h=a[p];!s[h]&&n[h]===_t.URBAN&&(s[h]=1,f.push(h))}}d.length<i?r.push(...d):o.push(d)}for(const u of r){const d=c(u),f=new Map;for(let y=0;y<d;y++){const p=n[a[y]];p!==_t.URBAN&&p!==_t.WATER&&f.set(p,(f.get(p)||0)+1)}let m=_t.GRASS,v=0;for(const[y,p]of f)p>v&&(m=y,v=p);n[u]=m}const l=o.map(u=>{let d=0,f=0;const m=[];for(const v of u){const y=v%e,p=v/e|0,{x:h,z:_}=N1(y,p);m.push({x:h,z:_}),d+=h,f+=_}return{pixelCount:u.length,centerX:d/u.length,centerZ:f/u.length,pixels:m}});return l.sort((u,d)=>d.pixelCount-u.pixelCount),console.log(`landcover: ${l.length} urban clusters surviving (${r.length} tiny urban pixels reclassified)`),l}function O1(){return my}let kn=null;function U1(){return kn}let Os=null,sa=0;async function k1(n=Ae.heightmap.url){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0),kn={data:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}function F1(n,e){const{center:t,metersPerUnit:i}=Ae.heightmap,s=n*i,o=-e*i,r=t.lat+o/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:r,lon:a}}function B1(n,e){if(!kn)return 0;const{bbox:t,elevRange:i}=Ae.heightmap,s=(e-t.lonW)/(t.lonE-t.lonW)*(kn.w-1),o=(t.latN-n)/(t.latN-t.latS)*(kn.h-1);if(s<0||o<0||s>kn.w-1||o>kn.h-1)return 0;const r=Math.floor(s),a=Math.floor(o),c=Math.min(r+1,kn.w-1),l=Math.min(a+1,kn.h-1),u=s-r,d=o-a,f=i[1]-i[0],m=(v,y)=>{const p=(y*kn.w+v)*4,h=kn.data[p]<<8|kn.data[p+1];return i[0]+h/65535*f};return(1-u)*(1-d)*m(r,a)+u*(1-d)*m(c,a)+(1-u)*d*m(r,l)+u*d*m(c,l)}function Pn(n,e){const{lat:t,lon:i}=F1(n,e);return B1(t,i)/Ae.heightmap.metersPerUnit*Ae.heightmap.elevationExaggeration}function z1(n,e,t){const i=tv;if(t<Ae.waterLevel+i.waterGuard)return t;const s=i.slopeEps,o=(Pn(n+s,e)-Pn(n-s,e))/(2*s),r=(Pn(n,e+s)-Pn(n,e-s))/(2*s),a=Gi.smoothstep(Math.hypot(o,r),i.slopeGateLo,i.slopeGateHi);if(a<=0)return t;const c=i.stepHeight,l=Math.floor(t/c)*c,u=t/c-Math.floor(t/c),d=l+c*u*u*(3-2*u);return t+(d-t)*i.riserSharpness*a}function Pr(n,e){return z1(n,e,Pn(n,e))}function gy(n,e,t){let i=t,s=0;const o=bl;for(const r of ot){const a=n-r.x,c=e-r.z,l=Math.cos(r.heading),u=Math.sin(r.heading),d=a*l-c*u,f=a*u+c*l,m=Math.max(0,Math.abs(d)-r.width/2),v=Math.max(0,Math.abs(f)-r.length/2),y=Math.max(0,m-o.sideApron),p=Math.max(0,v-o.endApron),h=Math.sqrt(y*y+p*p);if(h<o.fadeWidth){const _=Gi.smoothstep(h,0,o.fadeWidth);i=Gi.lerp(r.elevation,i,_),s=Math.max(s,1-_)}if(m<o.corridorHalfWidth){const _=r.elevation+Math.max(0,v-o.endApron)*o.climbGradient;i>_&&(i=_)}}return{y:i,onRunway:s}}function rg(n,e){return gy(n,e,Pr(n,e)).y}function Rt(n,e){if(!Os)return rg(n,e);const t=Ae.size/2,i=Ae.segments,s=Ae.size/i,o=(n+t)/s,r=(e+t)/s;if(o<0||r<0||o>i||r>i)return rg(n,e);const a=Math.min(i-1,Math.floor(o)),c=Math.min(i-1,Math.floor(r)),l=o-a,u=r-c,d=Os[c*sa+a],f=Os[c*sa+a+1],m=Os[(c+1)*sa+a],v=Os[(c+1)*sa+a+1];return(1-l)*(1-u)*d+l*(1-u)*f+(1-l)*u*m+l*u*v}const H1=90,G1=200,Ah=[];function V1(){const n=Ae.size,e=Ae.segments,t=n/e,i=e+1;sa=i,Os=new Float32Array(i*i);const s=new Float32Array(i*i),o=new Float32Array(i*i*3),r=new Ee(Ze.pineCanopy),a=new Ee(Ze.laurelCanopy),c=new Ee(Ze.shrubBody),l=new Ee(Ze.grassGround),u=new Ee(Ze.cropGround),d=new Ee(Ze.urbanGround),f=new Ee(Ze.bareGround),m=new Ee(Ze.shore),v=new Ee(Ze.snow),y=new Ee(Ze.runway),p=new Ee(Ze.rock),h=new Ee,_=Ae.heightmap.metersPerUnit,g=Ae.heightmap.elevationExaggeration,b=80/_*g,R=2500/_*g,E=3200/_*g,A=Tt.laurelMaxAltitude*g,k=i*i;for(let oe=0;oe<k;oe++){const U=oe%i,q=oe/i|0,j=-8e3+U*t,Z=-8e3+q*t,z=gy(j,Z,Pr(j,Z)),Q=z.y,ae=z.onRunway;switch(s[oe]=Q<Ae.waterLevel?Q-g_.sinkDepth:Q,Os[oe]=s[oe],Hn(j,Z)){case _t.TREE:h.copy(Q>=A?r:a);break;case _t.SHRUB:h.copy(c);break;case _t.GRASS:h.copy(l);break;case _t.CROP:h.copy(u);break;case _t.URBAN:h.copy(d);break;case _t.BARE:h.copy(f);break;default:h.copy(m);break}if(Q>Ae.waterLevel){const te=tv.slopeEps,O=(Pn(j+te,Z)-Pn(j-te,Z))/(2*te),N=(Pn(j,Z+te)-Pn(j,Z-te))/(2*te),L=Gi.smoothstep(Math.hypot(O,N),Xu.slopeLo,Xu.slopeHi);L>0&&h.lerp(p,L*Xu.strength)}if(Q>E)h.copy(v);else if(Q>R){const te=(Q-R)/(E-R);h.lerp(v,te)}if(Q<Ae.waterLevel+b){const te=(Q-Ae.waterLevel)/b;h.lerp(m,1-Math.max(0,te))}ae>.001&&h.lerp(y,ae*.35);const ye=.94+s1(j,Z)*.12;o[oe*3]=h.r*ye,o[oe*3+1]=h.g*ye,o[oe*3+2]=h.b*ye}const M=new ut({vertexColors:!0,flatShading:!0}),w=new lt,V=H1,W=Math.ceil(e/V);for(let oe=0;oe<W;oe++){const U=oe*V,q=Math.min(V,e-U);for(let j=0;j<W;j++){const Z=j*V,z=Math.min(V,e-Z),Q=new go(z*t,q*t,z,q);Q.rotateX(-Math.PI/2);const ae=Q.attributes.position,ue=new Float32Array(ae.count*3);for(let L=0;L<=q;L++)for(let T=0;T<=z;T++){const ee=L*(z+1)+T,ce=(U+L)*i+(Z+T);ae.setY(ee,s[ce]),ue[ee*3]=o[ce*3],ue[ee*3+1]=o[ce*3+1],ue[ee*3+2]=o[ce*3+2]}Q.setAttribute("color",new Nt(ue,3)),Q.computeBoundingSphere();const ye=new tt(Q,M),te=-8e3+Z*t+z*t/2,O=-8e3+U*t+q*t/2;ye.position.set(te,0,O),w.add(ye);const N=Q.boundingSphere;Ah.push({mesh:ye,cx:te+N.center.x,cy:N.center.y,cz:O+N.center.z,radius:N.radius})}}return w}function W1(n,e){if(!e){for(const r of Ah)r.mesh.visible=!0;return}const t=Ae.fogEnd+G1,i=n.position.x,s=n.position.y,o=n.position.z;for(const r of Ah){const a=i-r.cx,c=s-r.cy,l=o-r.cz;r.mesh.visible=Math.sqrt(a*a+c*c+l*l)-r.radius<t}}function q1(){const n=new go(Ae.size*1.6,Ae.size*1.6);n.rotateX(-Math.PI/2);const e=new ut({color:Ze.water,transparent:!0,opacity:.96}),t=new tt(n,e);return t.position.y=Ae.waterLevel,t}const X1={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:9,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:11,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:8,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:11,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:5,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function $1(n){let e=n>>>0;return()=>{e=e+2654435769>>>0;let t=e;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),((t^t>>>15)>>>0)/4294967296}}function j1(){const n=[],e=$1(12648430);for(const t of Lt){const i=X1[t.id];if(i)for(let s=0;s<i.count;s++){const o=e()*Math.PI*2,r=Math.sqrt(e())*i.spread,a=t.x+Math.cos(o)*r,c=t.z+Math.sin(o)*r,l=i.radiusRange[0]+e()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+e()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:a,z:c,radius:l,strength:u})}}return n}const pn=j1(),Ul=.55,vy=1.05,Y1=.9;let Vr,cl,ll,Th,Ji,kl,Rh=null;function yy(n){Rh&&(Rh.visible=!!n)}function Z1(){const n=new lt;Rh=n;for(let a=pn.length-1;a>=0;a--)Rt(pn[a].x,pn[a].z)<Ae.waterLevel+.5&&pn.splice(a,1);for(const a of pn)a.baseElevation=Rt(a.x,a.z);for(const a of pn){const c=new qn({color:_n.columnColor,transparent:!0,opacity:_n.columnOpacity*a.strength,side:Kt,depthWrite:!1}),l=new Vn(a.radius*vy,a.radius*Ul,_n.columnTop,20,1,!0);l.translate(0,_n.columnTop/2,0);const u=new tt(l,c);u.position.set(a.x,a.baseElevation,a.z),n.add(u)}const e=pn.map(a=>Math.max(10,Math.floor(_n.particleDensity*Math.PI*a.radius*a.radius))),t=e.reduce((a,c)=>a+c,0);Vr=new Float32Array(t*3),cl=new Float32Array(t),ll=new Float32Array(t),Th=new Uint16Array(t),Ji=new Float32Array(t);const i=new Float32Array(t);let s=0;for(let a=0;a<pn.length;a++){const c=pn[a];for(let l=0;l<e[a];l++){const u=Math.sqrt(Math.random())*Y1,d=Math.random()*Math.PI*2;cl[s]=Math.cos(d)*u,ll[s]=Math.sin(d)*u,Th[s]=a,Ji[s]=Math.random(),i[s]=_n.particleSize*(.7+.5*c.strength);const f=c.radius*Ul;Vr[s*3+0]=c.x+cl[s]*f,Vr[s*3+1]=c.baseElevation,Vr[s*3+2]=c.z+ll[s]*f,s++}}const o=new gt;o.setAttribute("position",new Nt(Vr,3)),o.setAttribute("size",new Nt(i,1));const r=new ms({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ee(_n.particleColor)},uOpacity:{value:_n.particleOpacity}},vertexShader:`
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
    `});return kl=new Qv(o,r),n.add(kl),n}function K1(n){if(!kl)return;const e=kl.geometry.attributes.position,t=e.array,i=_n.columnTop,s=_n.riseSpeed;for(let o=0;o<Ji.length;o++){const r=pn[Th[o]];Ji[o]+=s*r.strength/i*n,Ji[o]>=1&&(Ji[o]-=1);const a=r.radius*(Ul+(vy-Ul)*Ji[o]);t[o*3+0]=r.x+cl[o]*a,t[o*3+1]=r.baseElevation+Ji[o]*i,t[o*3+2]=r.z+ll[o]*a}e.needsUpdate=!0}function xy(n,e,t){let i=0;for(const s of pn){const o=n-s.x,r=t-s.z,a=Math.sqrt(o*o+r*r);if(a>=s.radius)continue;const c=e-(s.baseElevation??0);if(c<0)continue;const l=1-a/s.radius,u=Math.max(0,1-c/_n.maxAltitude);i+=_n.liftAtCenter*s.strength*l*u}return i}const _y="/teide-game/audio/",ag=window.AudioContext||window.webkitAudioContext;let et=null,Wr=null,Fl=null,Bl=null,Uf=!1;const zl={},kf={},Hl={},Hs={};let Gl=Et.musicVolume,Ff=!1,Vl=Et.sfxVolume,Bf=!1,ul=null,Lh=!1,cg=!1;const Us=n=>n<0?0:n>1?1:n,ko=(n,e,t)=>n+(e-n)*t,Wl=(n,e)=>(n=Number(n),Number.isFinite(n)?n:e);function J1(){if(et||!ag)return;try{et=new ag}catch{et=null;return}Wr=et.createGain(),Wr.gain.value=Et.master,Wr.connect(et.destination),Fl=et.createGain(),Bl=et.createGain(),Fl.connect(Wr),Bl.connect(Wr);const n=ht();Gl=Wl(n.musicVolume,Et.musicVolume),Ff=!!n.musicMuted,Vl=Wl(n.sfxVolume,Et.sfxVolume),Bf=!!n.sfxMuted,Ka(),ul=D.flightState,Lh=D.gearAmount>.02,tR(),Uf=!0}function Q1(){if(!(!et||et.state==="running")){et.resume().catch(()=>{});try{const n=et.createBufferSource();n.buffer=et.createBuffer(1,1,22050),n.connect(et.destination),n.start(0)}catch{}}}function by(){if(et){for(const n in Hl){const e=Hl[n];e&&!e.el.paused&&e.el.pause()}et.state==="running"&&et.suspend()}}function Sy(){et&&et.state!=="running"&&et.resume().catch(()=>{})}function Ka(){et&&(Fl.gain.value=Ff?0:Gl,Bl.gain.value=Bf?0:Vl)}function eR(n){return fetch(n).then(e=>e.arrayBuffer()).then(e=>e&&e.byteLength>0?e:Promise.reject(new Error("empty"))).catch(()=>new Promise((e,t)=>{const i=new XMLHttpRequest;i.open("GET",n),i.responseType="arraybuffer",i.onload=()=>i.response&&i.response.byteLength>0?e(i.response):t(new Error("empty")),i.onerror=()=>t(new Error("xhr")),i.send()}))}async function tR(){for(const[e,t]of Object.entries(cv)){if(t.mode==="stream"){sR(e,t);continue}let i;try{i=await eR(_y+t.src)}catch{Hs[e]="load";continue}try{zl[e]=await et.decodeAudioData(i)}catch{Hs[e]="decode";continue}Hs[e]="ok",t.mode==="loop"&&iR(e,t)}const n=Object.entries(Hs).filter(([,e])=>e!=="ok");n.length&&console.warn("[audio] nicht ladbar:",n.map(([e,t])=>`${e} (${t})`).join(", "))}function nR(){let n=0;const e=[];for(const i in Hs)Hs[i]==="ok"?n++:e.push(`${i}: ${Hs[i]}`);let t=`${et?et.state:"no-ctx"} · buf ${n}/${n+e.length}`;return e.length&&(t+=`
  ✗ `+e.slice(0,5).join(`
  ✗ `)),t}function zf(n){return n==="music"?Fl:Bl}function iR(n,e){const t=et.createBufferSource();t.buffer=zl[n],t.loop=!0,t.playbackRate.value=e.rate||1;const i=et.createGain();i.gain.value=0;let s=null;e.filtered?(s=et.createBiquadFilter(),s.type="lowpass",s.frequency.value=Et.wind.cutoffMin,t.connect(s),s.connect(i)):t.connect(i),i.connect(zf(e.channel)),t.start(),kf[n]={src:t,gain:i,lp:s}}function sR(n,e){const t=new Audio(_y+e.src);t.loop=!0,t.preload="auto";let i;try{i=et.createMediaElementSource(t)}catch{return}const s=et.createGain();s.gain.value=0,i.connect(s),s.connect(zf(e.channel)),Hl[n]={el:t,gain:s}}function oR(n){Gl=Us(Wl(n,Gl)),Ka()}function My(n){Ff=!!n,Ka()}function rR(n){Vl=Us(Wl(n,Vl)),Ka()}function wy(n){Bf=!!n,Ka()}function on(n,e){if(!Uf||!zl[n])return;const t=cv[n],i=et.createBufferSource();i.buffer=zl[n],i.playbackRate.value=e&&e.rate||t.rate||1;const s=et.createGain();s.gain.value=e&&e.gain!=null?e.gain:t.gain!=null?t.gain:1,i.connect(s),s.connect(zf(t.channel)),i.onended=()=>{try{i.disconnect(),s.disconnect()}catch{}};try{i.start()}catch{}}function Li(n,e,t){const i=kf[n];i&&i.gain.gain.setTargetAtTime(Math.max(0,e),et.currentTime,t||.1)}function lg(n,e,t,i){const s=kf["glider-wind"];if(!s)return;const o=et.currentTime;s.gain.gain.setTargetAtTime(Math.max(0,n),o,i),s.src.playbackRate.setTargetAtTime(e,o,i),s.lp&&s.lp.frequency.setTargetAtTime(t,o,i)}function aR(n,e,t){const i=Hl[n];i&&(i.gain.gain.setTargetAtTime(e,et.currentTime,Math.max(.02,t/1e3/3)),e>.001&&i.el.paused?i.el.play().catch(()=>{}):e<=.001&&!i.el.paused&&i.gain.gain.value<.005&&i.el.pause())}function cR(n,e,t){let i=0;return Rt(n,e)<Ae.waterLevel&&i++,Rt(n+t,e)<Ae.waterLevel&&i++,Rt(n-t,e)<Ae.waterLevel&&i++,Rt(n,e+t)<Ae.waterLevel&&i++,Rt(n,e-t)<Ae.waterLevel&&i++,i/5}function lR(n,e,t){const i=_t.TREE;let s=0;return Hn(n,e)===i&&s++,Hn(n+t,e)===i&&s++,Hn(n-t,e)===i&&s++,Hn(n,e+t)===i&&s++,Hn(n,e-t)===i&&s++,s/5}function uR(n,e,t){const i=_t.URBAN;let s=0;return Hn(n,e)===i&&s++,Hn(n+t,e)===i&&s++,Hn(n-t,e)===i&&s++,Hn(n,e+t)===i&&s++,Hn(n,e-t)===i&&s++,s/5}function dR(n,e){if(!Uf)return;const t=D,i=De,s=t.paused;aR("menu-music",s?1:0,s?Et.fade.musicIn:Et.fade.musicOut);const o=!s&&t.flightState===i.FLYING,r=t.flightState===i.TAKEOFF_ROLL||t.flightState===i.LANDING_ROLL,a=!s&&(o||r),c=Et.wind;if(a){const y=Us((t.speed-c.speedMin)/(c.speedMax-c.speedMin));let p=ko(c.gainMin,c.gainMax,y),h=ko(c.rateMin,c.rateMax,y),_=ko(c.cutoffMin,c.cutoffMax,y);const g=t.brakeAmount;g>.001&&(h*=ko(1,c.brakeRate,g),_*=ko(1,c.brakeCutoff,g),p*=ko(1,c.brakeGain,g)),lg(p,h,_,c.smooth)}else lg(0,1,c.cutoffMin,c.smooth);const l=Et.ocean,u=Et.forest,d=Et.city,f=Et.thermal;if(o){const y=e.position.x,p=e.position.z,h=e.position.y,_=Us(1-(h-Ae.waterLevel)/l.maxAlt);Li("ocean-surf-bed",cR(y,p,l.coastRadius)*_*l.gain,l.smooth);const g=Us(1-(h-Ae.waterLevel)/u.maxAlt);Li("forest-bed",lR(y,p,u.coastRadius)*g*u.gain,u.smooth);const b=Us(1-(h-Ae.waterLevel)/d.maxAlt);Li("city-bed",uR(y,p,d.coastRadius)*b*d.gain,d.smooth),Li("thermal-lift",Us(xy(y,h,p)/f.liftRef)*f.gain,f.smooth)}else Li("ocean-surf-bed",0,l.smooth),Li("forest-bed",0,u.smooth),Li("city-bed",0,d.smooth),Li("thermal-lift",0,f.smooth);Li("grey-boost",t.greyActive?Et.boost.greyGain:0,.05),t.oneShotActive&&!cg&&on("one-shot-boost",{gain:Et.boost.oneShotGain}),cg=t.oneShotActive;const m=t.flightState;m!==ul&&(m===i.LANDING_ROLL&&ul===i.FLYING?on("touchdown"):m===i.LANDED?on("landing-success"):m===i.CRASHING&&on("crash"),ul=m);const v=t.gearAmount>.02;v&&!Lh&&m===i.FLYING&&on("gear-deploy"),Lh=v}const ql=new Set;function xr(){const n=!!J.goldenWingsActive,e=n?Xt.goldenStart:1,t=n?Xt.goldenCap:Xt.cap;return Math.min(t,e+ql.size*Xt.increment)}function Hf(){return!!J.goldenWingsActive}function Gf(){return J.goldenWingsOwned|0}function hR(){const n=!!J.goldenWingsActive,e=n?Xt.goldenStart:1,t=n?Xt.goldenCap:Xt.cap;return t<=e?0:Math.min(1,(xr()-e)/(t-e))}function fR(n){if(D.tutorial||ql.has(n))return 0;const e=xr();ql.add(n);const t=xr();return t>e?t:0}function Ey(){ql.clear()}function pR(){J.goldenWingsActive=!1}function mR(){return(J.obsidian|0)<Xt.goldenPrice?!1:(J.obsidian=(J.obsidian|0)-Xt.goldenPrice,J.goldenWingsOwned=(J.goldenWingsOwned|0)+1,Dt(),!0)}function gR(){return J.goldenWingsActive||(J.goldenWingsOwned|0)<1?!1:(J.goldenWingsOwned=(J.goldenWingsOwned|0)-1,J.goldenWingsActive=!0,Dt(),!0)}const Ua=document.getElementById("golden-panel"),ug=document.getElementById("golden-slide"),bn=document.getElementById("golden-slide-handle"),dg=document.getElementById("golden-panel-active"),Ch=document.getElementById("golden-panel-shop"),or=document.getElementById("golden-btn"),vR=document.getElementById("golden-count-touch"),yR=document.getElementById("golden-count-desktop"),Ay=document.getElementById("touch-brake");let Fi=!1,Xl="",ma=null;function Vf(){ma&&(clearTimeout(ma),ma=null)}function xR(){!Ua||Fi||(Vf(),Fi=!0,Xl="",Ua.hidden=!1)}function Ja(){!Ua||!Fi||(Vf(),Fi=!1,Ua.hidden=!0,$l())}function Ty(){Fi?Ja():xR()}function _R(){const n=D.flightState===De.PRELAUNCH&&!D.tutorial;!n&&Fi&&Ja();const e=Hf(),t=Gf(),i=`${n}|${Fi}|${e}|${t}`;if(i===Xl)return;Xl=i,or&&(or.hidden=!n);const s=n&&t>0;for(const r of[vR,yR])r&&(r.hidden=!s,s&&(r.textContent=t>99?"99+":String(t)));const o=n&&e;Ay?.classList.toggle("golden-active",o),or?.classList.toggle("golden-active",o),Fi&&(ug&&(ug.hidden=e||t<1),dg&&(dg.hidden=!e),Ch&&(Ch.hidden=e||t>0))}let _r=null,Ry=0,Ph=0;function $l(){_r=null,bn&&(bn.style.transition="",bn.style.transform="translateY(0)")}bn?.addEventListener("pointerdown",n=>{if(_r!==null)return;_r=n.pointerId,Ry=n.clientY;const e=bn.parentElement;Ph=Math.max(20,e.clientHeight-bn.offsetHeight-8),bn.style.transition="none";try{bn.setPointerCapture(n.pointerId)}catch{}n.preventDefault()});bn?.addEventListener("pointermove",n=>{if(n.pointerId!==_r)return;const e=Math.min(0,Math.max(-Ph,n.clientY-Ry));if(bn.style.transform=`translateY(${e.toFixed(1)}px)`,-e>=Ph*.92){_r=null;try{bn.releasePointerCapture(n.pointerId)}catch{}if(gR()){on("golden-activate"),$l(),Xl="";for(const t of[Ay,or])t&&(t.classList.remove("golden-pop"),t.offsetWidth,t.classList.add("golden-pop"));Vf(),ma=setTimeout(()=>{ma=null,Ja()},Xt.goldenLingerMs)}else $l()}});function Ly(n){n.pointerId===_r&&$l()}bn?.addEventListener("pointerup",Ly);bn?.addEventListener("pointercancel",Ly);bn?.addEventListener("contextmenu",n=>n.preventDefault());Ch?.addEventListener("click",async()=>{Ja();const n=D.paused;D.paused=!0;const{openModal:e}=await Xa(async()=>{const{openModal:t}=await Promise.resolve().then(()=>EI);return{openModal:t}},void 0);e("shop",{onClose:()=>{n||(D.paused=!1)}})});or?.addEventListener("click",()=>Ty());document.addEventListener("pointerdown",n=>{Fi&&(Ua.contains(n.target)||or?.contains(n.target)||n.target.closest?.("#touch-brake")||Ja())},!0);ho()&&document.body.classList.add("touch-mode");const ks=document.getElementById("touch-joystick-zone"),Ni=document.getElementById("touch-joystick"),br=Ni?.querySelector(".touch-joystick-thumb"),ei=document.getElementById("touch-brake"),Sr=document.getElementById("touch-boost"),ii=document.getElementById("touch-oneshot"),bR=document.getElementById("touch-boost-corner"),hg=document.getElementById("touch-actions"),fg=document.getElementById("map-btn"),vi=document.getElementById("map-card"),us=document.getElementById("map-card-backdrop"),Fc=60,Id=8;let ka=null,Ih=0,Nh=0,Dh=!0;function jl(n){Dh=!!n,Dh||Wf()}const Qt={pitch:0,roll:0,brake:!1,boost:!1,isActive:!1};let vo=!1;function SR(){return vo}function MR(){vo=!1}function wR(){return Qt}const ER=["welcome-overlay","pause-overlay","levels-overlay","crash","hangar-overlay","shop-overlay","settings-overlay","obsidian-confirm","reset-confirm","imprint-overlay","licenses-overlay"];function AR(){for(const n of ER){const e=document.getElementById(n);if(e&&e.classList.contains("visible"))return!0}return!1}function Wf(){ka=null,Qt.pitch=0,Qt.roll=0,Qt.isActive=!1,Ni&&(Ni.hidden=!0,Ni.setAttribute("aria-hidden","true")),br&&(br.style.transform="translate(0px, 0px)")}function TR(n){if(Dh&&n.pointerType==="touch"&&ka===null&&!AR()){ka=n.pointerId,Ih=n.clientX,Nh=n.clientY,Ni&&(Ni.style.left=Ih+"px",Ni.style.top=Nh+"px",Ni.hidden=!1,Ni.setAttribute("aria-hidden","false")),br&&(br.style.transform="translate(0px, 0px)"),Qt.isActive=!0,vo=!0;try{ks.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function RR(n){if(n.pointerId!==ka)return;let e=n.clientX-Ih,t=n.clientY-Nh;const i=Math.hypot(e,t);let s=e,o=t;if(i>Fc&&(s=e*Fc/i,o=t*Fc/i),br&&(br.style.transform=`translate(${s.toFixed(1)}px, ${o.toFixed(1)}px)`),i<=Id)Qt.pitch=0,Qt.roll=0;else{const r=Math.min(1,(i-Id)/(Fc-Id));Qt.roll=e/i*r,Qt.pitch=t/i*r}vo=!0}function pg(n){if(n.pointerId===ka){try{ks.releasePointerCapture?.(n.pointerId)}catch{}Wf()}}ks&&(ks.addEventListener("pointerdown",TR),ks.addEventListener("pointermove",RR),ks.addEventListener("pointerup",pg),ks.addEventListener("pointercancel",pg));let Fa=null;const Ba=new Set;function Wi(n,e){n&&n.classList.toggle("is-pressed",!!e)}function LR(n){if(ei?.classList.contains("golden-mode")){Ty(),n.preventDefault();return}if(!Su()){n.preventDefault();return}Fa=n.pointerId,Qt.brake=!0,vo=!0,Wi(ei,!0);try{ei.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function CR(n){n.pointerId===Fa&&(Fa=null,Qt.brake=!1,Wi(ei,!1))}function Cy(n){const e=Ba.size===0;Ba.add(n.pointerId),Qt.boost=!0,vo=!0,e&&rv(),Wi(Sr,!0);try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function Py(n){Ba.delete(n.pointerId)&&Ba.size===0&&(Qt.boost=!1,Wi(Sr,!1))}const PR=140;let Bc=null;function IR(n){ov(),vo=!0,Wi(ii,!0),Bc&&clearTimeout(Bc),Bc=setTimeout(()=>{Wi(ii,!1),Bc=null},PR),n.preventDefault()}function qf(n,e,t){n&&(n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.addEventListener("contextmenu",i=>i.preventDefault()))}qf(ei,LR,CR);qf(Sr,Cy,Py);qf(bR,Cy,Py);ii&&(ii.addEventListener("pointerdown",IR),ii.addEventListener("contextmenu",n=>n.preventDefault()));const NR=1e3;let mg=null,gg=-1,vg=-1,yg=-1,qr=0,Yl=!0,zc=!1;function Nd(n){n!==!Yl&&(Yl=!n,ii&&(ii.hidden=!n),n&&!zc?(hg?.classList.add("has-oneshot"),zc=!0):!n&&zc&&(hg?.classList.remove("has-oneshot"),zc=!1))}let xg=null,_g=null;function DR(){const n=D.flightState,e=n===De.PRELAUNCH&&!D.tutorial,t=!e&&n!==De.FLYING&&n!==De.LANDING_ROLL;e!==xg&&(ei?.classList.toggle("golden-mode",e),xg=e),t!==_g&&(ei?.classList.toggle("brake-hidden",t),_g=t);const i=!Su();i!==mg&&(ei&&ei.classList.toggle("is-locked",i),i&&Qt.brake&&(Qt.brake=!1,Fa=null,Wi(ei,!1)),mg=i);const s=io();if(s!==gg){if(ii&&s>0){const r=St.oneShot.tiers[s]?.color??St.oneShot.tiers[0].color,a=r>>16&255,c=r>>8&255,l=r&255;ii.style.setProperty("--tier-color",`rgba(${a}, ${c}, ${l}, 0.5)`)}gg=s}if(s===0)Nd(!1),qr=0;else{const r=D.boostFuelOneshot;Math.abs(r-vg)>.005&&(ii&&ii.style.setProperty("--fuel",r.toFixed(3)),vg=r),r<=.001?(qr===0&&(qr=performance.now()),!Yl&&performance.now()-qr>=NR&&Nd(!1)):(qr=0,Yl&&Nd(!0))}const o=D.boostFuelGrey;Math.abs(o-yg)>.005&&(Sr&&Sr.style.setProperty("--fuel",o.toFixed(3)),yg=o)}function Iy(){Wf(),Fa=null,Ba.clear(),Qt.brake=!1,Qt.boost=!1,Wi(ei,!1),Wi(Sr,!1)}document.addEventListener("visibilitychange",()=>{document.hidden&&Iy()});window.addEventListener("blur",Iy);let Ny=!1;function OR(){!vi||vi.classList.contains("is-open")||(Ny=D.paused,D.paused=!0,vi.classList.add("is-open"),vi.setAttribute("aria-modal","true"),us&&(us.classList.add("is-open"),us.setAttribute("aria-hidden","false")))}function Xf(){!vi||!vi.classList.contains("is-open")||(vi.classList.remove("is-open"),vi.removeAttribute("aria-modal"),us&&(us.classList.remove("is-open"),us.setAttribute("aria-hidden","true")),Ny||(D.paused=!1))}fg&&fg.addEventListener("click",()=>{vi?.classList.contains("is-open")?Xf():OR()});us&&us.addEventListener("click",Xf);document.addEventListener("keydown",n=>{n.key==="Escape"&&vi?.classList.contains("is-open")&&(Xf(),n.stopImmediatePropagation())});const UR=`The MIT License

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
`,kR=`MIT License

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
`,FR=`Copyright 2006 The Inconsolata Project Authors (https://github.com/cyrealtype/Inconsolata)

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
`,BR=`Material Symbols
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
   limitations under the License.`,zR=[{name:"three.js",license:"MIT License",text:UR},{name:"Capacitor",license:"MIT License",text:kR},{name:"Inconsolata",license:"SIL Open Font License 1.1",text:FR},{name:"Material Symbols",license:"Apache License 2.0",text:BR}],bg=document.getElementById("licenses-list");if(bg)for(const n of zR){const e=document.createElement("section");e.className="license-item";const t=document.createElement("div");t.className="license-head";const i=document.createElement("span");i.className="license-name",i.textContent=n.name;const s=document.createElement("span");s.className="license-tag",s.textContent=n.license,t.append(i,s);const o=document.createElement("details");o.className="license-details";const r=document.createElement("summary");r.textContent="Lizenztext anzeigen";const a=document.createElement("pre");a.className="license-text",a.textContent=n.text.trim(),o.append(r,a),e.append(t,o),bg.append(e)}const Mt=new Yv;Mt.background=new Ee(Ze.sky);Mt.fog=new ja(Ze.sky,Ae.fogStart,Ae.fogEnd);const Wt=new Rn(62,window.innerWidth/window.innerHeight,.5,15e3),mn=new Tf({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});mn.setPixelRatio(O_());mn.setSize(window.innerWidth,window.innerHeight);mn.outputColorSpace=Ut;document.body.appendChild(mn.domElement);const Dy=new Sh(16774882,1.05);Dy.position.set(80,140,60);Mt.add(Dy);const HR=new QT(14542572,8292974,.55);Mt.add(HR);const Oh=new I(0,1,0);window.addEventListener("resize",()=>{Wt.aspect=window.innerWidth/window.innerHeight,Wt.updateProjectionMatrix(),mn.setSize(window.innerWidth,window.innerHeight)});const GR=typeof window<"u"?new URLSearchParams(window.location.search):null;function Oy(n){if(GR?.get(n)==="1")return!0;try{return localStorage.getItem(n)==="1"}catch{return!1}}const Uy=Oy("debugGl"),VR=Oy("debugPerf")||Uy;let di=null,Xr=0,$r=0;const WR=(()=>{try{for(const n of document.querySelectorAll("script")){const e=(n.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(e)return e[1]}}catch{}return"?"})();function qR(){di||(di=document.createElement("div"),di.id="debug-perf",di.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),di.textContent="measuring…",document.body.appendChild(di))}const rr=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,ar=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let Sg=null;rr&&rr.addEventListener("click",()=>{D.showPerf=!D.showPerf,rr.classList.toggle("off",!D.showPerf)});ar&&ar.addEventListener("click",()=>{D.showAds=!D.showAds,ar.classList.toggle("off",!D.showAds)});function XR(){const n=!!J.testMode;n!==Sg&&(Sg=n,rr&&(rr.classList.toggle("visible",n),rr.classList.toggle("off",!D.showPerf)),ar&&(ar.classList.toggle("visible",n),ar.classList.toggle("off",!D.showAds)))}function $R(n){XR();const e=VR||J.testMode&&D.showPerf,t=Uy||J.testMode&&D.showPerf;if(!e){di&&(di.style.display="none"),Xr=0,$r=0;return}if(qR(),di.style.display="",Xr++,!$r){$r=n;return}const i=n-$r;if(i<500)return;const s=Math.round(Xr*1e3/i),o=Math.round(i/Xr*10)/10,r=mn?mn.getPixelRatio():0,a=mn?`${mn.domElement.width}x${mn.domElement.height}`:"?";let c=`Build:    ${WR}
FPS:      ${s}
Frame:    ${o} ms
Mobile:   ${ho()?"yes":"no"}
DPR set:  ${r.toFixed(2)} (dev ${(window.devicePixelRatio||0).toFixed(2)})
Buffer:   ${a}
Segments: ${Ae.segments}
Samples:  ${Tt.sampleCount.toLocaleString("de-DE")}
Audio:    ${nR()}`;if(t&&mn){const l=mn.info.render,u=mn.info.memory;c+=`
Calls:    ${l.calls}
Tris:     ${l.triangles.toLocaleString("de-DE")}
Programs: ${mn.info.programs?.length??"?"}
Geoms:    ${u.geometries}
Textures: ${u.textures}`}di.textContent=c,Xr=0,$r=n}function ky(){const n=new gt,e=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Nt(e,3)),n.computeVertexNormals();const t=new ut({color:Ze.paper,flatShading:!0,side:Kt}),i=new tt(n,t);i.name="paperBody";const s=new sy(n,18),o=new Lu({color:Ze.ink,transparent:!0,opacity:.22}),r=new Kv(s,o),a=new lt;a.add(i),a.add(r);const c=new Cu(.03,20),l=new qn({color:1712164,side:Kt});for(const u of[-.36,.36]){const d=new tt(c,l);d.position.set(u,.13,.423),a.add(d)}return a}const he=ky();he.position.set(0,38,0);const jR=1712164;function $f(){return ah}function Ir(n){return ah.find(e=>e.id===n)||ah[0]}function Fy(){return Ir(J.equippedSkin)}function By(n){return!!J.ownedSkins[n]}function Nu(n){J.ownedSkins[n]=!0,Dt()}function jf(n){return Ir(n).teaser||!By(n)?!1:(J.equippedSkin=n,Hy(),Dt(),!0)}function YR(n){if(n.userData._skinRole!==void 0)return n.userData._skinRole;let e=null;const t=n.color?n.color.getHex():-1;return n.isLineBasicMaterial&&t===Ze.ink?e="ink":n.isMeshBasicMaterial&&t===jR?e="vent":n.isMeshLambertMaterial&&t===Ze.paper&&(e="paper"),n.userData._skinRole=e,e}function zy(n,e){!e||e.teaser||n.traverse(t=>{if(!t.material)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const s of i){const o=YR(s);o==="paper"&&e.paper!=null?(s.color.setHex(e.paper),s.emissive&&(s.emissive.setHex(e.emissive!=null?e.emissive:0),"emissiveIntensity"in s&&(s.emissiveIntensity=e.emissiveIntensity!=null?e.emissiveIntensity:1))):o==="ink"&&e.ink!=null?s.color.setHex(e.ink):o==="vent"&&e.vent!=null&&s.color.setHex(e.vent)}})}function Hy(){zy(he,Fy())}const Mg={android:"goog_dseUNtdcnlZGNWfAOgAdDoYIyki",ios:"appl_adobEJBJMEfqpVfgpItUNUsfWVS"},Dd="default",Uh=new URLSearchParams(window.location.search).has("mockiap"),Od=()=>!ki.isNativePlatform()||Uh,Gy=n=>pf.find(e=>e.id===n),Yf=n=>pf.find(e=>e.productId===n);function Vy(n){const e=Yf(n);return e?Math.floor(e.diamonds*(1+e.bonusPct/100)):0}function Wy(n){const e=Vy(n.productId);return J.obsidian=(J.obsidian|0)+e,J.obsidianLifetimeGranted=(J.obsidianLifetimeGranted|0)+e,on("buy-diamonds"),Dt(),e}function wg(n){let e=0;for(const i of n?.nonSubscriptionTransactions||[])e+=Vy(i.productIdentifier);const t=Math.max(0,e-(J.obsidianLifetimeGranted|0));return t>0&&(J.obsidian=(J.obsidian|0)+t,J.obsidianLifetimeGranted=e,Dt()),t}function Ud(n){!!n?.entitlements?.active?.[Ra.entitlement]&&!J.adsRemoveOwned&&(J.adsRemoveOwned=!0,Dt())}const qy={name:"mock",async init(){},localizedPrice(n){const e=Yf(n);return e?e.priceFallback:""},async purchasePack(n){if(!Od())return{success:!1};const e=Gy(n);return e?{success:!0,diamonds:Wy(e)}:{success:!1}},async purchaseSkin(n){return Od()?(Nu(n),{success:!0}):{success:!1}},async purchaseRemoveAds(){return Od()?(J.adsRemoveOwned=!0,Dt(),{success:!0}):{success:!1}},async restore(){return{success:!0,restored:[]}},hasEntitlement(n){return!!J.ownedSkins[n]}},Eg={name:"revenuecat",_Purchases:null,_prices:{},_packages:{},async init(n){const{Purchases:e,LOG_LEVEL:t}=await Xa(async()=>{const{Purchases:i,LOG_LEVEL:s}=await import("./index-6c8v8erw.js");return{Purchases:i,LOG_LEVEL:s}},__vite__mapDeps([0,1]));this._Purchases=e,await e.configure({apiKey:n});try{await e.setLogLevel({level:t.WARN})}catch{}await this._loadOfferings(),KR();try{const{customerInfo:i}=await e.getCustomerInfo();wg(i),Ud(i)}catch(i){console.warn("[iap] init reconcile failed",i)}},async _loadOfferings(){try{const n=await this._Purchases.getOfferings(),e=n?.all?.[Dd]||n?.current;for(const t of e?.availablePackages||[]){const i=t?.product?.identifier;i&&(this._prices[i]=t.product.priceString||"",this._packages[i]=t)}}catch(n){console.warn("[iap] getOfferings failed",n)}},localizedPrice(n){return this._prices[n]||(Yf(n)?.priceFallback??"")},async purchasePack(n){const e=Gy(n);if(!e)return{success:!1};const t=this._packages[e.productId];if(!t)return console.warn(`[iap] no RevenueCat package for ${e.productId} — is it in the "${Dd}" offering?`),{success:!1};try{return await this._Purchases.purchasePackage({aPackage:t}),{success:!0,diamonds:Wy(e)}}catch(i){return i?.userCancelled||i?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchasePack failed",i),{success:!1})}},async purchaseSkin(n){try{return Nu(n),{success:!0}}catch(e){return e?.userCancelled?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseSkin failed",e),{success:!1})}},async purchaseRemoveAds(){const n=this._packages[Ra.productId];if(!n)return console.warn(`[iap] no RevenueCat package for ${Ra.productId} — is it in the "${Dd}" offering?`),{success:!1};try{const{customerInfo:e}=await this._Purchases.purchasePackage({aPackage:n});return Ud(e),{success:!0}}catch(e){return e?.userCancelled||e?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseRemoveAds failed",e),{success:!1})}},async restore(){try{const{customerInfo:n}=await this._Purchases.restorePurchases(),e=wg(n);return Ud(n),{success:!0,restored:e>0?["obsidian"]:[],regranted:e}}catch(n){return console.warn("[iap] restore failed",n),{success:!1}}},hasEntitlement(n){return!!J.ownedSkins[n]}},Xy=[];function ZR(n){Xy.push(n)}function KR(){for(const n of Xy)try{n()}catch(e){console.warn("[iap] price listener failed",e)}}let ai=qy;const ro={async init(){if(Uh||!ki.isNativePlatform())return;const n=ki.getPlatform()==="ios"?Mg.ios:Mg.android;try{await Eg.init(n),ai=Eg}catch(e){console.warn("[iap] RevenueCat init failed — using mock",e),ai=qy}},isAvailable(){return ki.isNativePlatform()||Uh},localizedPrice(n){return ai.localizedPrice(n)},purchasePack(n){return ai.purchasePack(n)},purchaseSkin(n){return ai.purchaseSkin(n)},purchaseRemoveAds(){return ai.purchaseRemoveAds()},removeAdsPrice(){return ai.localizedPrice(Ra.productId)||Ra.priceFallback},restore(){return ai.restore()},hasEntitlement(n){return ai.hasEntitlement(n)},get providerName(){return ai.name}},JR=new URLSearchParams(window.location.search).has("mockads"),dl=ki.isNativePlatform()||JR;function Zf(){return ki.getPlatform()==="ios"?"ios":"android"}function Kf(){return!!Cn.useTestAds?.[Zf()]}function Ag(){const n=Zf();return Kf()?Cn.test[n].interstitial:Cn[n].interstitial}function Tg(){const n=Zf();return Kf()?Cn.test[n].rewarded:Cn[n].rewarded}function Rg(){try{window.focus()}catch{}try{window.dispatchEvent(new Event("resize"))}catch{}}function Lg(){return new Date().toISOString().slice(0,10)}function $y(){J.rewardedDay!==Lg()&&(J.rewardedDay=Lg(),J.rewardedToday=0)}function Cg(){return $y(),Math.max(0,Cn.rewardedDailyCap-(J.rewardedToday|0))}let kd=0,Pg=-1/0;const jy={name:"mock",async init(){},async preloadInterstitial(){},async preloadRewarded(){},async showInterstitial(){console.log("[ads] mock interstitial")},async showRewarded(){return console.log("[ads] mock rewarded → granted"),!0}},kh={name:"admob",_AdMob:null,_mod:null,_interReady:!1,_rewardReady:!1,async init(){this._mod=await Xa(()=>import("./index-BNXHsM2Y.js"),__vite__mapDeps([2,1])),this._AdMob=this._mod.AdMob,await this._AdMob.initialize({initializeForTesting:Kf()});try{const n=await this._AdMob.requestConsentInfo();n?.isConsentFormAvailable&&n?.status==="REQUIRED"&&await this._AdMob.showConsentForm()}catch(n){console.warn("[ads] consent failed",n)}if(ki.getPlatform()==="ios")try{await this._AdMob.requestTrackingAuthorization()}catch{}},async preloadInterstitial(){try{await this._AdMob.prepareInterstitial({adId:Ag()}),this._interReady=!0}catch(n){this._interReady=!1,console.warn("[ads] preload interstitial failed",n)}},async preloadRewarded(){try{await this._AdMob.prepareRewardVideoAd({adId:Tg()}),this._rewardReady=!0}catch(n){this._rewardReady=!1,console.warn("[ads] preload rewarded failed",n)}},_present(n,e,t){return new Promise(i=>{let s=!1,o=null,r=null;const a=()=>{if(!s){s=!0;try{o?.remove()}catch{}try{r?.remove()}catch{}i()}};Promise.all([this._AdMob.addListener(e,a).then(c=>{o=c}),this._AdMob.addListener(t,a).then(c=>{r=c})]).then(()=>n().catch(a))})},async showInterstitial(){try{this._interReady||await this._AdMob.prepareInterstitial({adId:Ag()}),this._interReady=!1,await this._present(()=>this._AdMob.showInterstitial(),this._mod.InterstitialAdPluginEvents.Dismissed,this._mod.InterstitialAdPluginEvents.FailedToShow)}catch(n){console.warn("[ads] interstitial failed",n)}Rg(),this.preloadInterstitial()},async showRewarded(){let n=!1,e=null;try{e=await this._AdMob.addListener(this._mod.RewardAdPluginEvents.Rewarded,()=>{n=!0}),this._rewardReady||await this._AdMob.prepareRewardVideoAd({adId:Tg()}),this._rewardReady=!1,await this._present(()=>this._AdMob.showRewardVideoAd(),this._mod.RewardAdPluginEvents.Dismissed,this._mod.RewardAdPluginEvents.FailedToShow)}catch(t){console.warn("[ads] rewarded failed",t)}finally{try{e?.remove()}catch{}}return Rg(),this.preloadRewarded(),n}};let Qi=jy,Fo=null;function Hc(){return Fo||(!dl||!ki.isNativePlatform()?(Fo=Promise.resolve(),Fo):(Fo=kh.init().then(()=>{Qi=kh}).catch(n=>{console.warn("[ads] AdMob init failed — using mock",n),Qi=jy}),Fo))}const ao={isAvailable(){return dl},async warmup(){await Hc(),Qi===kh&&(Qi.preloadInterstitial(),Qi.preloadRewarded())},async onCrashRestart(){if(kd++,!dl)return;if(J.testMode){D.showAds&&(await Hc(),await Qi.showInterstitial());return}if(J.adsRemoveOwned||kd<=Cn.crashGraceCount||kd%Cn.interstitialEveryNCrashes!==0)return;const n=performance.now();n-Pg<Cn.interstitialMinGapSec*1e3||(Pg=n,await Hc(),await Qi.showInterstitial())},rewardedRemaining:Cg,async watchRewarded(){return dl?Cg()<=0?{success:!1,capped:!0}:(await Hc(),await Qi.showRewarded()?($y(),J.rewardedToday=(J.rewardedToday|0)+1,J.obsidian=(J.obsidian|0)+Cn.rewardedDiamonds,on("buy-diamonds"),Dt(),{success:!0,diamonds:Cn.rewardedDiamonds}):{success:!1}):{success:!1}}},QR={sub:"Building the world…",hint:"Higher quality settings may take a few seconds."},eL={pause:"Pause",map:"Map",close:"Close",landings:"Landings",brake:"Brake",oneShot:"One-Shot",boost:"Boost",sell:"Sell for {cost} points",flightScore:"Points this flight",goldenBuy:"Buy Golden Wings for {cost} Obsidian"},tL={lift:"Lift",soon:"soon",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",hintNormalTouch:"Steer with joystick · Right Boost / Brake / One-Shot",hintPrelaunch:"Pull down to launch",hintPrelaunchGyro:"Tap boost to take off",hintTakeoff:"Takeoff roll…",landingToast:"Touchdown! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"New island discovered!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land at the marked airport to refuel your boosters and earn bonus points.",airportUnlockTitle:"Airport unlocked!",airportUnlockBody:"Spawn at {name} any time from the Levels menu.",airportUnlocked:"{name} unlocked",wrongApproach:"Wrong approach side — line up from the other end.",multiplierUp:"Multiplier ×{mult}",goldenTitle:"Golden Wings",goldenSub:"×2 points until your next crash",goldenActive:"Golden Wings active",goldenOneUse:"Single use — you can stock up on several.",goldenOwnedCount:"In stock: {count}",goldenSlide:"Slide up to activate",goldenToShop:"Get them in the shop"},nL={names:["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],unlock:["","Booster Level 1 unlocked","Booster Level 2 unlocked — La Gomera in range","Booster Level 3 unlocked — Gran Canaria in range","Booster Level MAX unlocked — Fuerteventura / Lanzarote"]},iL={start:"Start",startSubDefault:"Last checkpoint",levels:"Levels",levelsSub:"Choose airport",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Shop",shopSub:"Obsidian & designs",settings:"Settings",settingsSub:"Graphics & performance",imprint:"Imprint",licenses:"Licences"},sL={checkpoint:"Checkpoint · {id}",firstFlight:"First flight · TFN"},oL={title:"Pause",resume:"Resume flight",home:"Main menu"},rL={title:"Crash landing",restart:"Take Off Again",hint:"Spacebar",hangar:"Hangar",shop:"Shop"},aL={title:"Hangar",points:"Points",locations:"Locations",obsidian:"Obsidian",highscore:"High score",plane:"Plane",dragToRotate:"Drag to rotate",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tap an upgrade to see its description.",buy:"Buy · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Level {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Your boost level rises automatically once you've discovered enough locations. Fly through new POIs to improve your One-Shot boost.",equip:"Equip",equipped:"Equipped",comingSoon:"Coming soon",getDiamonds:"Get Obsidian →",skinPrev:"Previous design",skinNext:"Next design"},cL={title:"Pay with Obsidian?",text:"This upgrade costs <strong></strong>.",warn:"Obsidian is bought with real money. Only tap <em>Confirm</em> if you really want to spend Obsidian.",cancel:"Cancel",confirm:"Confirm",spendSkin:"You're spending {obsidian} on the {label} design."},lL={default:{name:"Paper",desc:"The classic fold."},charcoal:{name:"Charcoal",desc:"A matte slate livery — earned by explorers."},gold:{name:"Gold",desc:"A gleaming premium livery."},comingSoon:{name:"More soon",desc:"New designs are on the way."}},uL={intro:"Obsidian unlocks designs in the hangar and instant upgrades.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Best value",granted:"+ {amount} Obsidian added",restore:"Restore purchases",restored:"Purchases restored",viewSkins:"View designs →",disclosure:"Obsidian and designs are stored on this device.",watchAd:"Watch a video",adsLeftToday:"{count}/{cap} today",adsCapReached:"Come back tomorrow",removeAds:"Remove ads",removeAdsOwned:"Ads removed"},dL={title:"Settings",quality:"Graphics quality",presetLow:"Low",presetStandard:"Standard",presetHigh:"High",presetUltra:"Ultra",advanced:"Advanced",meshRes:"Mesh resolution",meshHint:"Segments · 100–3000",vegSamples:"Vegetation samples",vegHint:"10,000–10,000,000",restartNote:"Changes require a restart. Applying will reload the page.",cancel:"Cancel",apply:"Apply & reload",language:"Language",controls:"Controls",invertPitch:"Inverted flight controls",invertPitchHint:"Pull down to climb",gyroControl:"Tilt steering",gyroControlHint:"Tilt your device to steer",gyroSensitivity:"Sensitivity",gyroRecalibrate:"Recalibrate",tutorial:"Tutorial",replayTutorial:"Replay tutorial",dangerZone:"Danger zone",dangerDesc:"Resets all progress: points, locations, upgrades, discovered POIs, airports and checkpoint. Graphics settings are kept.",resetSave:"Reset progress",audio:"Audio",music:"Music",musicHint:"Menu theme by Daniel Schultes",musicVolume:"Music volume",sound:"Sound",soundHint:"Wind, ambience & effects",soundVolume:"Sound volume",headphoneHint:"Best experienced with headphones."},hL={title:"Really delete your save?",text:"All points, locations, upgrades and discovered POIs will be lost. You'll start at <strong>Tenerife Nord</strong> with the basic plane.",warn:"This action cannot be undone.",cancel:"Cancel",confirm:"Reset"},fL={eyebrow:"Island",archTitle:"Canary Islands",legendSpawn:"Spawn",legendDiscovered:"Discovered",legendLocked:"Unknown",hintDefault:"Tap a spawn point to start there.",hintNone:"Land at an airport to unlock it as a spawn point.",hintProgress:"{landed} / {total} airports unlocked. Tap a spawn point.",hintAll:"All airports unlocked. Tap a spawn point.",markerLocked:"???",tipStart:"Start at {id}",tipNotLanded:"{id} — not landed yet",tipUndiscovered:"Not discovered yet"},pL={title:"Imprint",provider:"Provider",contact:"Contact",privacy:"Privacy policy",privacyLink:"Open privacy policy",linksLiability:"Liability for links",linksText:"Our offering contains links to external third-party websites whose content we cannot influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",footer:"Swiss Innovation Studios · 2026"},mL={title:"Open-source licences",intro:"Teide includes the following open-source components. The full licence texts are below and bundled with the app.",audioTitle:"Audio — sound & music",audioCredit:"Sound effects from Pixabay, used under the Pixabay Content Licence. Music composed by Daniel Schultes.",iconTitle:"Icons",iconCredit:"“Feather Wing” icon (Golden Wings) from SVG Repo, free for commercial use.",footer:"Swiss Innovation Studios · 2026"},gL={title:"Please rotate your device",sub:"Teide is played in landscape mode"},vL={title:"Test mode",prompt:"Enter PIN",wrong:"Wrong PIN",cancel:"Cancel",confirm:"OK"},yL={drag:{label:"Aerodynamics",desc:"Smoother folds — less drag, longer glide."},maxSpeed:{label:"Top speed",desc:"Raises the maximum cruise speed."},speedFromPitch:{label:"Dive",desc:"More acceleration in a dive — altitude becomes speed."},stallSpeed:{label:"Stability",desc:"Lower stall threshold — forgives slow flying."},takeoffSpeed:{label:"Runway",desc:"Faster take-off acceleration — less roll distance."},brake:{label:"Airbrake",desc:"Unlocks the brake flaps (Space in flight)."},greyBoost:{label:"Reserve boost",desc:"Stronger emergency thrust: longer burn, more push, faster refill."}},xL={pickLanguage:"Choose your language",welcome:"Welcome to the Canaries",story:["You've folded the perfect paper plane and launched it from the slopes of Mount Teide. Now ride the thermals and glide out across the Canary Islands.","Catch rising air to stay aloft, dive through points of interest to collect locations, and touch down on runways to unlock them as new starting points.","Landing is how you keep going: each touchdown refuels your booster for the next hop. Line up with a runway and set down gently.","Spend your points in the hangar to upgrade your plane and booster. Glide far enough and new islands come within reach — from La Gomera all the way to Lanzarote. How far can you go?"],next:"Next",begin:"Let's go"},_L={eyebrow:"Tutorial",skip:"Skip",retry:"Try again!",done:"You're ready — off you go!",launch:"Pull down to take off and start gliding",navLeft:"Now bank left",navRight:"Now bank right",navUp:"Now climb",navDown:"Now descend",rings:"Fly through both rings ({collected}/{total})",boost:"Hold boost for a burst of speed",thermal:"Steer into the updraft to gain height",ringHigh:"Use your new height — catch the high ring",ringLow:"Now dive back down — through the low ring",invertHint:"Climbing feels backwards? Flip it.",steerHint:"Steer here",endTitle:"You're ready to glide!",endBody:"Explore the Canary Islands and dive through rings to collect locations. Gather enough and your One-Shot boost reaches the next island. How far can you glide?",endGo:"Let's go"},bL={loading:QR,a11y:eL,hud:tL,booster:nL,menu:iL,welcome:sL,pause:oL,crash:rL,hangar:aL,obsidian:cL,skins:lL,shop:uL,settings:dL,reset:hL,levels:fL,imprint:pL,licenses:mL,portrait:gL,testpin:vL,upgrades:yL,onboarding:xL,tutorial:_L},SL={sub:"Welt wird gebaut…",hint:"Bei höheren Qualitätseinstellungen kann das einige Sekunden dauern."},ML={pause:"Pause",map:"Karte",close:"Schliessen",landings:"Landungen",brake:"Bremse",oneShot:"One-Shot",boost:"Boost",sell:"Verkaufen für {cost} Punkte",flightScore:"Punkte dieses Flugs",goldenBuy:"Goldene Flügel für {cost} Obsidian kaufen"},wL={lift:"Lift",soon:"bald",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Bremse · Shift Boost · F One-Shot",hintNormalTouch:"Joystick steuern · Rechts Boost / Bremse / One-Shot",hintPrelaunch:"Zum Starten nach unten ziehen",hintPrelaunchGyro:"Boost antippen zum Abheben",hintTakeoff:"Startrollen…",landingToast:"Geschafft! · {id}",landingBonus:"+ {bonus} Pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Neue Insel entdeckt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Lande am markierten Flughafen, um deine Booster aufzufüllen und Extra-Punkte zu sammeln.",airportUnlockTitle:"Flughafen freigeschaltet!",airportUnlockBody:"Starte jederzeit über das Levels-Menü bei {name}.",airportUnlocked:"{name} freigeschaltet",wrongApproach:"Falsche Anflugseite — flieg von der anderen Seite an.",multiplierUp:"Multiplikator ×{mult}",goldenTitle:"Goldene Flügel",goldenSub:"×2 Punkte bis zur nächsten Bruchlandung",goldenActive:"Goldene Flügel aktiv",goldenOneUse:"Einmalig — du kannst mehrere auf Vorrat kaufen.",goldenOwnedCount:"Vorrat: {count}",goldenSlide:"Zum Aktivieren nach oben schieben",goldenToShop:"Im Shop holen"},EL={names:["Kein Booster","Booster Stufe 1","Booster Stufe 2","Booster Stufe 3","Booster Stufe MAX"],unlock:["","Booster Stufe 1 freigeschaltet","Booster Stufe 2 freigeschaltet — La Gomera in Reichweite","Booster Stufe 3 freigeschaltet — Gran Canaria in Reichweite","Booster Stufe MAX freigeschaltet — Fuerteventura / Lanzarote"]},AL={start:"Start",startSubDefault:"Letzter Checkpoint",levels:"Levels",levelsSub:"Flughäfen auswählen",hangar:"Hangar",hangarSub:"Upgrades & Status",shop:"Shop",shopSub:"Obsidian & Designs",settings:"Einstellungen",settingsSub:"Grafik & Performance",imprint:"Impressum",licenses:"Lizenzen"},TL={checkpoint:"Checkpoint · {id}",firstFlight:"Erstflug · TFN"},RL={title:"Pause",resume:"Flug fortsetzen",home:"Hauptmenü"},LL={title:"Bruchlandung",restart:"Erneut abheben",hint:"Leertaste",hangar:"Hangar",shop:"Shop"},CL={title:"Hangar",points:"Punkte",locations:"Orte",obsidian:"Obsidian",highscore:"Highscore",plane:"Flugzeug",dragToRotate:"Ziehen zum Drehen",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tippe ein Upgrade an, um die Beschreibung zu sehen.",buy:"Kaufen · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Stufe {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Die Boost-Stufe steigt automatisch, sobald genug Orte entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.",equip:"Anlegen",equipped:"Angelegt",comingSoon:"Bald verfügbar",getDiamonds:"Obsidian holen →",skinPrev:"Vorheriges Design",skinNext:"Nächstes Design"},PL={title:"Mit Obsidian bezahlen?",text:"Dieses Upgrade kostet <strong></strong>.",warn:"Obsidian wird mit echtem Geld gekauft. Klick auf <em>Bestätigen</em> nur, wenn du wirklich Obsidian ausgeben willst.",cancel:"Abbrechen",confirm:"Bestätigen",spendSkin:"Du gibst {obsidian} für das Design {label} aus."},IL={default:{name:"Papier",desc:"Die klassische Faltung."},charcoal:{name:"Anthrazit",desc:"Eine matte Schiefer-Lackierung — von Entdeckern verdient."},gold:{name:"Gold",desc:"Eine glänzende Premium-Lackierung."},comingSoon:{name:"Bald mehr",desc:"Neue Designs sind unterwegs."}},NL={intro:"Obsidian schaltet Designs im Hangar und Sofort-Upgrades frei.",bonus:"+{pct}%",badgePopular:"Beliebt",badgeValue:"Bester Wert",granted:"+ {amount} Obsidian erhalten",restore:"Käufe wiederherstellen",restored:"Käufe wiederhergestellt",viewSkins:"Designs ansehen →",disclosure:"Obsidian und Designs werden auf diesem Gerät gespeichert.",watchAd:"Video ansehen",adsLeftToday:"{count}/{cap} heute",adsCapReached:"Komm morgen wieder",removeAds:"Werbung entfernen",removeAdsOwned:"Werbung entfernt"},DL={title:"Einstellungen",quality:"Grafikqualität",presetLow:"Niedrig",presetStandard:"Standard",presetHigh:"Hoch",presetUltra:"Ultra",advanced:"Erweitert",meshRes:"Mesh-Auflösung",meshHint:"Segments · 100–3000",vegSamples:"Vegetations-Samples",vegHint:"10'000–10'000'000",restartNote:"Änderungen erfordern einen Neustart. Beim Anwenden wird die Seite neu geladen.",cancel:"Abbrechen",apply:"Anwenden & Neu laden",language:"Sprache",controls:"Steuerung",invertPitch:"Umgekehrte Flugsteuerung",invertPitchHint:"Nach unten ziehen zum Steigen",gyroControl:"Neigungssteuerung",gyroControlHint:"Gerät neigen zum Steuern",gyroSensitivity:"Empfindlichkeit",gyroRecalibrate:"Neu kalibrieren",tutorial:"Tutorial",replayTutorial:"Tutorial wiederholen",dangerZone:"Danger Zone",dangerDesc:"Setzt den kompletten Spielfortschritt zurück: Punkte, Orte, Upgrades, entdeckte POIs, Flughäfen und Checkpoint. Grafik-Einstellungen bleiben erhalten.",resetSave:"Spielstand zurücksetzen",audio:"Audio",music:"Musik",musicHint:"Menü-Titel von Daniel Schultes",musicVolume:"Musiklautstärke",sound:"Ton",soundHint:"Wind, Ambiente & Effekte",soundVolume:"Tonlautstärke",headphoneHint:"Am besten mit Kopfhörern."},OL={title:"Spielstand wirklich löschen?",text:"Alle Punkte, Orte, Upgrades und entdeckten POIs gehen verloren. Du startest auf <strong>Tenerife Nord</strong> mit dem Basis-Flugzeug.",warn:"Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",confirm:"Zurücksetzen"},UL={eyebrow:"Insel",archTitle:"Kanarische Inseln",legendSpawn:"Spawn",legendDiscovered:"Entdeckt",legendLocked:"Unbekannt",hintDefault:"Tippe einen Spawn an, um dort zu starten.",hintNone:"Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.",hintProgress:"{landed} / {total} Flughäfen freigeschaltet. Tippe einen Spawn an.",hintAll:"Alle Flughäfen freigeschaltet. Tippe einen Spawn an.",markerLocked:"???",tipStart:"Bei {id} starten",tipNotLanded:"{id} — noch nicht gelandet",tipUndiscovered:"Noch nicht entdeckt"},kL={title:"Impressum",provider:"Anbieter",contact:"Kontakt",privacy:"Datenschutz",privacyLink:"Datenschutzerklärung öffnen",linksLiability:"Haftung für Links",linksText:"Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",footer:"Swiss Innovation Studios · 2026"},FL={title:"Open-Source-Lizenzen",intro:"Teide enthält die folgenden quelloffenen Komponenten. Die vollständigen Lizenztexte sind unten und im App-Paket beigelegt.",audioTitle:"Audio — Ton & Musik",audioCredit:"Soundeffekte von Pixabay, genutzt unter der Pixabay Content License. Musik komponiert von Daniel Schultes.",iconTitle:"Icons",iconCredit:"„Feather Wing“-Icon (Goldene Flügel) von SVG Repo, frei für kommerzielle Nutzung.",footer:"Swiss Innovation Studios · 2026"},BL={title:"Bitte Gerät drehen",sub:"Teide wird im Landscape-Modus gespielt"},zL={title:"Testmodus",prompt:"PIN eingeben",wrong:"Falsche PIN",cancel:"Abbrechen",confirm:"OK"},HL={drag:{label:"Aerodynamik",desc:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten."},maxSpeed:{label:"Spitzentempo",desc:"Erhöht die maximale Fluggeschwindigkeit im Cruise."},speedFromPitch:{label:"Sturzflug",desc:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo."},stallSpeed:{label:"Stabilität",desc:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen."},takeoffSpeed:{label:"Startbahn",desc:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke."},brake:{label:"Luftbremse",desc:"Schaltet die Bremsklappen frei (Leertaste im Flug)."},greyBoost:{label:"Reserve-Boost",desc:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill."}},GL={pickLanguage:"Sprache wählen",welcome:"Willkommen auf den Kanaren",story:["Du hast den perfekten Papierflieger gefaltet und ihn von den Hängen des Teide gestartet. Reite jetzt die Thermik und gleite hinaus über die Kanarischen Inseln.","Fang Aufwinde ein, um oben zu bleiben, flieg durch Points of Interest, um Orte zu sammeln, und lande auf Pisten, um sie als neue Startpunkte freizuschalten.","Landen heißt weiterkommen: Jede Landung füllt deinen Booster für den nächsten Sprung wieder auf. Richte dich auf eine Bahn aus und setze sanft auf.","Gib deine Punkte im Hangar aus, um Flugzeug und Booster zu verbessern. Gleitest du weit genug, kommen neue Inseln in Reichweite — von La Gomera bis Lanzarote. Wie weit kommst du?"],next:"Weiter",begin:"Los geht's"},VL={eyebrow:"Tutorial",skip:"Überspringen",retry:"Nochmal!",done:"Geschafft — los geht's!",launch:"Nach unten ziehen zum Abheben und Gleiten",navLeft:"Jetzt nach links",navRight:"Jetzt nach rechts",navUp:"Jetzt steigen",navDown:"Jetzt sinken",rings:"Flieg durch beide Ringe ({collected}/{total})",boost:"Halte Boost für einen Schub",thermal:"Steuere in den Aufwind, um Höhe zu gewinnen",ringHigh:"Nutz deine Höhe — schnapp dir den hohen Ring",ringLow:"Jetzt wieder runter — durch den tiefen Ring",invertHint:"Steigen falsch herum? Hier umstellen.",steerHint:"Hier steuern",endTitle:"Bereit zum Gleiten!",endBody:"Erkunde die Kanaren und flieg durch Ringe, um Orte zu sammeln. Sammle genug, und dein One-Shot-Boost bringt dich zur nächsten Insel. Wie weit gleitest du?",endGo:"Los geht's"},WL={loading:SL,a11y:ML,hud:wL,booster:EL,menu:AL,welcome:TL,pause:RL,crash:LL,hangar:CL,obsidian:PL,skins:IL,shop:NL,settings:DL,reset:OL,levels:UL,imprint:kL,licenses:FL,portrait:BL,testpin:zL,upgrades:HL,onboarding:GL,tutorial:VL},qL={sub:"Construyendo el mundo…",hint:"Con ajustes de calidad altos puede tardar unos segundos."},XL={pause:"Pausa",map:"Mapa",close:"Cerrar",landings:"Aterrizajes",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vender por {cost} puntos",flightScore:"Puntos de este vuelo",goldenBuy:"Comprar Alas Doradas por {cost} de obsidiana"},$L={lift:"Ascenso",soon:"pronto",hintNormal:"↑ ↓ Cabeceo · ← → Alabeo · Espacio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Controla con el joystick · Derecha Boost / Freno / One-Shot",hintPrelaunch:"Tira hacia abajo para despegar",hintPrelaunchGyro:"Toca boost para despegar",hintTakeoff:"Carrera de despegue…",landingToast:"¡Aterrizaje! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"¡Nueva isla descubierta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Aterriza en el aeropuerto marcado para recargar tus propulsores y ganar puntos extra.",airportUnlockTitle:"¡Aeropuerto desbloqueado!",airportUnlockBody:"Aparece en {name} cuando quieras desde el menú Niveles.",airportUnlocked:"{name} desbloqueado",wrongApproach:"Lado de aproximación incorrecto: alinéate desde el otro extremo.",multiplierUp:"Multiplicador ×{mult}",goldenTitle:"Alas Doradas",goldenSub:"×2 puntos hasta que te estrelles",goldenActive:"Alas Doradas activas",goldenOneUse:"De un solo uso — puedes acumular varias.",goldenOwnedCount:"En reserva: {count}",goldenSlide:"Desliza hacia arriba para activar",goldenToShop:"Consíguelas en la tienda"},jL={names:["Sin Booster","Booster Nivel 1","Booster Nivel 2","Booster Nivel 3","Booster Nivel MÁX"],unlock:["","Booster Nivel 1 desbloqueado","Booster Nivel 2 desbloqueado — La Gomera a tu alcance","Booster Nivel 3 desbloqueado — Gran Canaria a tu alcance","Booster Nivel MÁX desbloqueado — Fuerteventura / Lanzarote"]},YL={start:"Empezar",startSubDefault:"Último checkpoint",levels:"Niveles",levelsSub:"Elegir aeropuerto",hangar:"Hangar",hangarSub:"Mejoras y estado",shop:"Tienda",shopSub:"Obsidiana y diseños",settings:"Ajustes",settingsSub:"Gráficos y rendimiento",imprint:"Aviso legal",licenses:"Licencias"},ZL={checkpoint:"Checkpoint · {id}",firstFlight:"Primer vuelo · TFN"},KL={title:"Pausa",resume:"Reanudar vuelo",home:"Menú principal"},JL={title:"Aterrizaje forzoso",restart:"Despegar de nuevo",hint:"Barra espaciadora",hangar:"Hangar",shop:"Tienda"},QL={title:"Hangar",points:"Puntos",locations:"Lugares",obsidian:"Obsidiana",highscore:"Récord",plane:"Avión",dragToRotate:"Arrastra para girar",upgrades:"Mejoras",booster:"Booster",selectUpgrade:"Toca una mejora para ver su descripción.",buy:"Comprar · {cost}",buyObsidian:"Obsidiana · {cost}",max:"Máx",level:"Nivel {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Tu nivel de boost sube automáticamente cuando descubres suficientes lugares. Vuela a través de nuevos POIs para mejorar tu boost One-Shot.",equip:"Equipar",equipped:"Equipado",comingSoon:"Próximamente",getDiamonds:"Conseguir obsidiana →",skinPrev:"Diseño anterior",skinNext:"Diseño siguiente"},eC={title:"¿Pagar con obsidiana?",text:"Esta mejora cuesta <strong></strong>.",warn:"La obsidiana se compra con dinero real. Pulsa <em>Confirmar</em> solo si de verdad quieres gastar obsidiana.",cancel:"Cancelar",confirm:"Confirmar",spendSkin:"Vas a gastar {obsidian} en el diseño {label}."},tC={default:{name:"Papel",desc:"El pliegue clásico."},charcoal:{name:"Carbón",desc:"Una librea de pizarra mate — para exploradores."},gold:{name:"Oro",desc:"Una reluciente librea premium."},comingSoon:{name:"Más pronto",desc:"Llegan nuevos diseños."}},nC={intro:"La obsidiana desbloquea diseños en el hangar y mejoras instantáneas.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Mejor valor",granted:"+ {amount} obsidiana añadida",restore:"Restaurar compras",restored:"Compras restauradas",viewSkins:"Ver diseños →",disclosure:"La obsidiana y los diseños se guardan en este dispositivo.",watchAd:"Ver un vídeo",adsLeftToday:"{count}/{cap} hoy",adsCapReached:"Vuelve mañana",removeAds:"Quitar anuncios",removeAdsOwned:"Anuncios eliminados"},iC={title:"Ajustes",quality:"Calidad gráfica",presetLow:"Baja",presetStandard:"Estándar",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzado",meshRes:"Resolución de malla",meshHint:"Segments · 100–3000",vegSamples:"Muestras de vegetación",vegHint:"10.000–10.000.000",restartNote:"Los cambios requieren reiniciar. Al aplicar se recargará la página.",cancel:"Cancelar",apply:"Aplicar y recargar",language:"Idioma",controls:"Controles",invertPitch:"Controles de vuelo invertidos",invertPitchHint:"Tira hacia abajo para subir",gyroControl:"Control por inclinación",gyroControlHint:"Inclina el dispositivo para dirigir",gyroSensitivity:"Sensibilidad",gyroRecalibrate:"Recalibrar",tutorial:"Tutorial",replayTutorial:"Repetir tutorial",dangerZone:"Zona de peligro",dangerDesc:"Restablece todo el progreso: puntos, lugares, mejoras, POIs descubiertos, aeropuertos y checkpoint. Los ajustes gráficos se mantienen.",resetSave:"Restablecer progreso",audio:"Audio",music:"Música",musicHint:"Tema del menú de Daniel Schultes",musicVolume:"Volumen de música",sound:"Sonido",soundHint:"Viento, ambiente y efectos",soundVolume:"Volumen de sonido",headphoneHint:"Mejor con auriculares."},sC={title:"¿Borrar de verdad tu partida?",text:"Se perderán todos los puntos, lugares, mejoras y POIs descubiertos. Empezarás en <strong>Tenerife Nord</strong> con el avión básico.",warn:"Esta acción no se puede deshacer.",cancel:"Cancelar",confirm:"Restablecer"},oC={eyebrow:"Isla",archTitle:"Islas Canarias",legendSpawn:"Inicio",legendDiscovered:"Descubierto",legendLocked:"Desconocido",hintDefault:"Toca un punto de inicio para empezar ahí.",hintNone:"Aterriza en un aeropuerto para desbloquearlo como punto de inicio.",hintProgress:"{landed} / {total} aeropuertos desbloqueados. Toca un punto de inicio.",hintAll:"Todos los aeropuertos desbloqueados. Toca un punto de inicio.",markerLocked:"???",tipStart:"Empezar en {id}",tipNotLanded:"{id} — aún sin aterrizar",tipUndiscovered:"Aún sin descubrir"},rC={title:"Aviso legal",provider:"Proveedor",contact:"Contacto",privacy:"Privacidad",privacyLink:"Abrir la política de privacidad",linksLiability:"Responsabilidad de los enlaces",linksText:"Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por estos contenidos ajenos. Del contenido de las páginas enlazadas es siempre responsable el respectivo proveedor u operador de dichas páginas.",footer:"Swiss Innovation Studios · 2026"},aC={title:"Licencias de código abierto",intro:"Teide incluye los siguientes componentes de código abierto. Los textos completos de las licencias están abajo y se incluyen en la app.",audioTitle:"Audio — sonido y música",audioCredit:"Efectos de sonido de Pixabay, usados bajo la Licencia de Contenido de Pixabay. Música compuesta por Daniel Schultes.",iconTitle:"Iconos",iconCredit:"Icono «Feather Wing» (Alas Doradas) de SVG Repo, de uso comercial libre.",footer:"Swiss Innovation Studios · 2026"},cC={title:"Gira tu dispositivo",sub:"Teide se juega en modo horizontal"},lC={title:"Modo de prueba",prompt:"Introduce el PIN",wrong:"PIN incorrecto",cancel:"Cancelar",confirm:"OK"},uC={drag:{label:"Aerodinámica",desc:"Pliegues más limpios — menos resistencia, planeo más largo."},maxSpeed:{label:"Velocidad máx",desc:"Aumenta la velocidad máxima de crucero."},speedFromPitch:{label:"Picado",desc:"Más aceleración en picado — la altura se convierte en velocidad."},stallSpeed:{label:"Estabilidad",desc:"Umbral de pérdida más bajo — perdona el vuelo lento."},takeoffSpeed:{label:"Pista",desc:"Aceleración de despegue más rápida — menos carrera."},brake:{label:"Aerofreno",desc:"Desbloquea los alerones de freno (Espacio en vuelo)."},greyBoost:{label:"Boost de reserva",desc:"Empuje de emergencia más fuerte: más duración, más impulso, recarga más rápida."}},dC={pickLanguage:"Elige tu idioma",welcome:"Bienvenido a las Canarias",story:["Has plegado el avión de papel perfecto y lo has lanzado desde las laderas del Teide. Ahora cabalga las térmicas y planea sobre las Islas Canarias.","Aprovecha las corrientes ascendentes para mantenerte en el aire, atraviesa puntos de interés para recoger lugares y aterriza en las pistas para desbloquearlas como nuevos puntos de partida.","Aterrizar es seguir avanzando: cada toma de tierra recarga tu propulsor para el siguiente salto. Alinéate con una pista y posa con suavidad.","Gasta tus puntos en el hangar para mejorar tu avión y tu booster. Si planeas lo suficiente, nuevas islas quedan a tu alcance — desde La Gomera hasta Lanzarote. ¿Hasta dónde llegarás?"],next:"Siguiente",begin:"¡Vamos!"},hC={eyebrow:"Tutorial",skip:"Saltar",retry:"¡Otra vez!",done:"¡Listo, a volar!",launch:"Tira hacia abajo para despegar y planear",navLeft:"Ahora a la izquierda",navRight:"Ahora a la derecha",navUp:"Ahora sube",navDown:"Ahora baja",rings:"Atraviesa los dos aros ({collected}/{total})",boost:"Mantén el boost para un empujón",thermal:"Dirígete a la corriente ascendente para ganar altura",ringHigh:"Aprovecha la altura — atrapa el aro alto",ringLow:"Ahora baja de nuevo — por el aro bajo",invertHint:"¿Subir va al revés? Cámbialo.",steerHint:"Dirige aquí",endTitle:"¡Listo para planear!",endBody:"Explora las Islas Canarias y atraviesa aros para reunir lugares. Reúne suficientes y tu boost One-Shot te lleva a la siguiente isla. ¿Hasta dónde planeas?",endGo:"¡Vamos!"},fC={loading:qL,a11y:XL,hud:$L,booster:jL,menu:YL,welcome:ZL,pause:KL,crash:JL,hangar:QL,obsidian:eC,skins:tC,shop:nC,settings:iC,reset:sC,levels:oC,imprint:rC,licenses:aC,portrait:cC,testpin:lC,upgrades:uC,onboarding:dC,tutorial:hC},pC={sub:"Construction du monde…",hint:"Avec des réglages de qualité élevés, cela peut prendre quelques secondes."},mC={pause:"Pause",map:"Carte",close:"Fermer",landings:"Atterrissages",brake:"Frein",oneShot:"One-Shot",boost:"Boost",sell:"Vendre pour {cost} points",flightScore:"Points de ce vol",goldenBuy:"Acheter les Ailes dorées pour {cost} obsidienne"},gC={lift:"Ascendance",soon:"bientôt",hintNormal:"↑ ↓ Tangage · ← → Roulis · Espace Frein · Maj Boost · F One-Shot",hintNormalTouch:"Piloter au joystick · Droite Boost / Frein / One-Shot",hintPrelaunch:"Tire vers le bas pour décoller",hintPrelaunchGyro:"Appuie sur boost pour décoller",hintTakeoff:"Roulage au décollage…",landingToast:"Atterri ! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nouvelle île découverte !",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Pose-toi à l'aéroport indiqué pour recharger tes boosters et gagner des points bonus.",airportUnlockTitle:"Aéroport débloqué !",airportUnlockBody:"Réapparais à {name} quand tu veux depuis le menu Niveaux.",airportUnlocked:"{name} débloqué",wrongApproach:"Mauvais côté d'approche — aligne-toi depuis l'autre bout.",multiplierUp:"Multiplicateur ×{mult}",goldenTitle:"Ailes dorées",goldenSub:"×2 points jusqu’au prochain crash",goldenActive:"Ailes dorées actives",goldenOneUse:"Usage unique — tu peux en garder plusieurs.",goldenOwnedCount:"En stock : {count}",goldenSlide:"Glisse vers le haut pour activer",goldenToShop:"À obtenir dans la boutique"},vC={names:["Aucun Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 débloqué","Booster Niveau 2 débloqué — La Gomera à portée","Booster Niveau 3 débloqué — Gran Canaria à portée","Booster Niveau MAX débloqué — Fuerteventura / Lanzarote"]},yC={start:"Démarrer",startSubDefault:"Dernier checkpoint",levels:"Niveaux",levelsSub:"Choisir un aéroport",hangar:"Hangar",hangarSub:"Améliorations et statut",shop:"Boutique",shopSub:"Obsidienne et designs",settings:"Réglages",settingsSub:"Graphismes et performances",imprint:"Mentions légales",licenses:"Licences"},xC={checkpoint:"Checkpoint · {id}",firstFlight:"Premier vol · TFN"},_C={title:"Pause",resume:"Reprendre le vol",home:"Menu principal"},bC={title:"Atterrissage manqué",restart:"Redécoller",hint:"Barre d'espace",hangar:"Hangar",shop:"Boutique"},SC={title:"Hangar",points:"Points",locations:"Lieux",obsidian:"Obsidienne",highscore:"Record",plane:"Avion",dragToRotate:"Glisser pour tourner",upgrades:"Améliorations",booster:"Booster",selectUpgrade:"Touche une amélioration pour voir sa description.",buy:"Acheter · {cost}",buyObsidian:"Obsidienne · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Ton niveau de boost augmente automatiquement quand tu découvres assez de lieux. Survole de nouveaux POI pour améliorer ton boost One-Shot.",equip:"Équiper",equipped:"Équipé",comingSoon:"Bientôt",getDiamonds:"Obtenir de l'obsidienne →",skinPrev:"Design précédent",skinNext:"Design suivant"},MC={title:"Payer avec de l'obsidienne ?",text:"Cette amélioration coûte <strong></strong>.",warn:"L'obsidienne s'achète avec de l'argent réel. Touche <em>Confirmer</em> seulement si tu veux vraiment dépenser de l'obsidienne.",cancel:"Annuler",confirm:"Confirmer",spendSkin:"Tu dépenses {obsidian} pour le design {label}."},wC={default:{name:"Papier",desc:"Le pliage classique."},charcoal:{name:"Anthracite",desc:"Une livrée ardoise mate — méritée par les explorateurs."},gold:{name:"Or",desc:"Une livrée premium étincelante."},comingSoon:{name:"Bientôt plus",desc:"De nouveaux designs arrivent."}},EC={intro:"L'obsidienne débloque des designs dans le hangar et des améliorations instantanées.",bonus:"+{pct}%",badgePopular:"Populaire",badgeValue:"Meilleur prix",granted:"+ {amount} obsidienne ajoutée",restore:"Restaurer les achats",restored:"Achats restaurés",viewSkins:"Voir les designs →",disclosure:"L'obsidienne et les designs sont stockés sur cet appareil.",watchAd:"Regarder une vidéo",adsLeftToday:"{count}/{cap} aujourd'hui",adsCapReached:"Reviens demain",removeAds:"Supprimer les pubs",removeAdsOwned:"Pubs supprimées"},AC={title:"Réglages",quality:"Qualité graphique",presetLow:"Faible",presetStandard:"Standard",presetHigh:"Élevée",presetUltra:"Ultra",advanced:"Avancé",meshRes:"Résolution du maillage",meshHint:"Segments · 100–3000",vegSamples:"Échantillons de végétation",vegHint:"10 000–10 000 000",restartNote:"Les changements nécessitent un redémarrage. L'application rechargera la page.",cancel:"Annuler",apply:"Appliquer et recharger",language:"Langue",controls:"Commandes",invertPitch:"Commandes de vol inversées",invertPitchHint:"Tirez vers le bas pour monter",gyroControl:"Pilotage par inclinaison",gyroControlHint:"Inclinez l'appareil pour diriger",gyroSensitivity:"Sensibilité",gyroRecalibrate:"Recalibrer",tutorial:"Tutoriel",replayTutorial:"Revoir le tutoriel",dangerZone:"Zone de danger",dangerDesc:"Réinitialise toute la progression : points, lieux, améliorations, POI découverts, aéroports et checkpoint. Les réglages graphiques sont conservés.",resetSave:"Réinitialiser la progression",audio:"Audio",music:"Musique",musicHint:"Thème du menu par Daniel Schultes",musicVolume:"Volume de la musique",sound:"Son",soundHint:"Vent, ambiance et effets",soundVolume:"Volume du son",headphoneHint:"Idéal au casque."},TC={title:"Vraiment supprimer ta sauvegarde ?",text:"Tous les points, lieux, améliorations et POI découverts seront perdus. Tu recommenceras à <strong>Tenerife Nord</strong> avec l'avion de base.",warn:"Cette action est irréversible.",cancel:"Annuler",confirm:"Réinitialiser"},RC={eyebrow:"Île",archTitle:"Îles Canaries",legendSpawn:"Départ",legendDiscovered:"Découvert",legendLocked:"Inconnu",hintDefault:"Touche un point de départ pour commencer là.",hintNone:"Atterris dans un aéroport pour le débloquer comme point de départ.",hintProgress:"{landed} / {total} aéroports débloqués. Touche un point de départ.",hintAll:"Tous les aéroports débloqués. Touche un point de départ.",markerLocked:"???",tipStart:"Démarrer à {id}",tipNotLanded:"{id} — pas encore atterri",tipUndiscovered:"Pas encore découvert"},LC={title:"Mentions légales",provider:"Fournisseur",contact:"Contact",privacy:"Confidentialité",privacyLink:"Ouvrir la politique de confidentialité",linksLiability:"Responsabilité des liens",linksText:"Notre offre contient des liens vers des sites web externes de tiers dont nous ne pouvons pas influencer le contenu. Nous déclinons donc toute responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant des pages liées est toujours responsable de leur contenu.",footer:"Swiss Innovation Studios · 2026"},CC={title:"Licences open source",intro:"Teide inclut les composants open source suivants. Les textes complets des licences figurent ci-dessous et sont inclus dans l'application.",audioTitle:"Audio — son et musique",audioCredit:"Effets sonores de Pixabay, utilisés sous la licence de contenu Pixabay. Musique composée par Daniel Schultes.",iconTitle:"Icônes",iconCredit:"Icône « Feather Wing » (Ailes dorées) de SVG Repo, libre d’utilisation commerciale.",footer:"Swiss Innovation Studios · 2026"},PC={title:"Tourne ton appareil",sub:"Teide se joue en mode paysage"},IC={title:"Mode test",prompt:"Saisir le code PIN",wrong:"Code PIN incorrect",cancel:"Annuler",confirm:"OK"},NC={drag:{label:"Aérodynamique",desc:"Pliage plus net — moins de traînée, vol plané plus long."},maxSpeed:{label:"Vitesse max",desc:"Augmente la vitesse de croisière maximale."},speedFromPitch:{label:"Piqué",desc:"Plus d'accélération en piqué — l'altitude devient de la vitesse."},stallSpeed:{label:"Stabilité",desc:"Seuil de décrochage plus bas — pardonne le vol lent."},takeoffSpeed:{label:"Piste",desc:"Accélération au décollage plus rapide — moins de roulage."},brake:{label:"Aérofrein",desc:"Débloque les volets de frein (Espace en vol)."},greyBoost:{label:"Boost de réserve",desc:"Poussée d'urgence plus forte : combustion plus longue, plus de poussée, recharge plus rapide."}},DC={pickLanguage:"Choisis ta langue",welcome:"Bienvenue aux Canaries",story:["Tu as plié l'avion en papier parfait et tu l'as lancé depuis les pentes du Teide. Chevauche maintenant les thermiques et plane au-dessus des îles Canaries.","Capte les courants ascendants pour rester en l'air, traverse des points d'intérêt pour récolter des lieux et pose-toi sur les pistes pour les débloquer comme nouveaux points de départ.","Se poser, c'est continuer : chaque atterrissage recharge ton booster pour le prochain saut. Aligne-toi sur une piste et pose-toi en douceur.","Dépense tes points au hangar pour améliorer ton avion et ton booster. Plane assez loin et de nouvelles îles deviennent accessibles — de La Gomera jusqu'à Lanzarote. Jusqu'où iras-tu ?"],next:"Suivant",begin:"C'est parti !"},OC={eyebrow:"Tutoriel",skip:"Passer",retry:"Réessaie !",done:"Prêt — c'est parti !",launch:"Tire vers le bas pour décoller et planer",navLeft:"Maintenant à gauche",navRight:"Maintenant à droite",navUp:"Maintenant monte",navDown:"Maintenant descends",rings:"Traverse les deux anneaux ({collected}/{total})",boost:"Maintiens le boost pour une accélération",thermal:"Dirige-toi vers l'ascendance pour prendre de l'altitude",ringHigh:"Profite de l'altitude — attrape l'anneau haut",ringLow:"Maintenant redescends — par l'anneau bas",invertHint:"Monter à l'envers ? Inverse-le.",steerHint:"Pilote ici",endTitle:"Prêt à planer !",endBody:"Explore les îles Canaries et traverse des anneaux pour collecter des lieux. Réunis-en assez et ton boost One-Shot t'emmène à l'île suivante. Jusqu'où planeras-tu ?",endGo:"C'est parti !"},UC={loading:pC,a11y:mC,hud:gC,booster:vC,menu:yC,welcome:xC,pause:_C,crash:bC,hangar:SC,obsidian:MC,skins:wC,shop:EC,settings:AC,reset:TC,levels:RC,imprint:LC,licenses:CC,portrait:PC,testpin:IC,upgrades:NC,onboarding:DC,tutorial:OC},kC={sub:"Costruzione del mondo…",hint:"Con impostazioni di qualità elevate può richiedere alcuni secondi."},FC={pause:"Pausa",map:"Mappa",close:"Chiudi",landings:"Atterraggi",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vendi per {cost} punti",flightScore:"Punti di questo volo",goldenBuy:"Compra le Ali Dorate per {cost} ossidiana"},BC={lift:"Ascendenza",soon:"presto",hintNormal:"↑ ↓ Beccheggio · ← → Rollio · Spazio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Guida col joystick · Destra Boost / Freno / One-Shot",hintPrelaunch:"Tira giù per decollare",hintPrelaunchGyro:"Tocca boost per decollare",hintTakeoff:"Rullaggio al decollo…",landingToast:"Atterrato! · {id}",landingBonus:"+ {bonus} pti",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nuova isola scoperta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Atterra all'aeroporto segnalato per ricaricare i propulsori e guadagnare punti extra.",airportUnlockTitle:"Aeroporto sbloccato!",airportUnlockBody:"Riparti da {name} quando vuoi dal menu Livelli.",airportUnlocked:"{name} sbloccato",wrongApproach:"Lato di avvicinamento sbagliato: allineati dall'altra estremità.",multiplierUp:"Moltiplicatore ×{mult}",goldenTitle:"Ali Dorate",goldenSub:"×2 punti fino al prossimo schianto",goldenActive:"Ali Dorate attive",goldenOneUse:"Monouso — puoi farne scorta.",goldenOwnedCount:"Scorta: {count}",goldenSlide:"Scorri in su per attivare",goldenToShop:"Prendile nello shop"},zC={names:["Nessun Booster","Booster Livello 1","Booster Livello 2","Booster Livello 3","Booster Livello MAX"],unlock:["","Booster Livello 1 sbloccato","Booster Livello 2 sbloccato — La Gomera a portata","Booster Livello 3 sbloccato — Gran Canaria a portata","Booster Livello MAX sbloccato — Fuerteventura / Lanzarote"]},HC={start:"Inizia",startSubDefault:"Ultimo checkpoint",levels:"Livelli",levelsSub:"Scegli aeroporto",hangar:"Hangar",hangarSub:"Potenziamenti e stato",shop:"Negozio",shopSub:"Ossidiana e design",settings:"Impostazioni",settingsSub:"Grafica e prestazioni",imprint:"Note legali",licenses:"Licenze"},GC={checkpoint:"Checkpoint · {id}",firstFlight:"Primo volo · TFN"},VC={title:"Pausa",resume:"Riprendi volo",home:"Menu principale"},WC={title:"Atterraggio di fortuna",restart:"Decolla di nuovo",hint:"Barra spaziatrice",hangar:"Hangar",shop:"Negozio"},qC={title:"Hangar",points:"Punti",locations:"Luoghi",obsidian:"Ossidiana",highscore:"Record",plane:"Aereo",dragToRotate:"Trascina per ruotare",upgrades:"Potenziamenti",booster:"Booster",selectUpgrade:"Tocca un potenziamento per vederne la descrizione.",buy:"Acquista · {cost}",buyObsidian:"Ossidiana · {cost}",max:"Max",level:"Livello {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Il tuo livello di boost aumenta automaticamente quando scopri abbastanza luoghi. Attraversa nuovi POI per migliorare il tuo boost One-Shot.",equip:"Equipaggia",equipped:"Equipaggiato",comingSoon:"In arrivo",getDiamonds:"Ottieni ossidiana →",skinPrev:"Design precedente",skinNext:"Design successivo"},XC={title:"Pagare con l'ossidiana?",text:"Questo potenziamento costa <strong></strong>.",warn:"L'ossidiana si acquista con denaro reale. Tocca <em>Conferma</em> solo se vuoi davvero spendere ossidiana.",cancel:"Annulla",confirm:"Conferma",spendSkin:"Stai spendendo {obsidian} per il design {label}."},$C={default:{name:"Carta",desc:"La piega classica."},charcoal:{name:"Antracite",desc:"Una livrea ardesia opaca — guadagnata dagli esploratori."},gold:{name:"Oro",desc:"Una scintillante livrea premium."},comingSoon:{name:"Altri presto",desc:"Nuovi design in arrivo."}},jC={intro:"L'ossidiana sblocca design nell'hangar e potenziamenti istantanei.",bonus:"+{pct}%",badgePopular:"Popolare",badgeValue:"Miglior valore",granted:"+ {amount} ossidiana aggiunta",restore:"Ripristina acquisti",restored:"Acquisti ripristinati",viewSkins:"Vedi i design →",disclosure:"Ossidiana e design sono salvati su questo dispositivo.",watchAd:"Guarda un video",adsLeftToday:"{count}/{cap} oggi",adsCapReached:"Torna domani",removeAds:"Rimuovi annunci",removeAdsOwned:"Annunci rimossi"},YC={title:"Impostazioni",quality:"Qualità grafica",presetLow:"Bassa",presetStandard:"Standard",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzate",meshRes:"Risoluzione mesh",meshHint:"Segments · 100–3000",vegSamples:"Campioni vegetazione",vegHint:"10.000–10.000.000",restartNote:"Le modifiche richiedono un riavvio. Applicando, la pagina verrà ricaricata.",cancel:"Annulla",apply:"Applica e ricarica",language:"Lingua",controls:"Comandi",invertPitch:"Comandi di volo invertiti",invertPitchHint:"Tira giù per salire",gyroControl:"Controllo a inclinazione",gyroControlHint:"Inclina il dispositivo per virare",gyroSensitivity:"Sensibilità",gyroRecalibrate:"Ricalibra",tutorial:"Tutorial",replayTutorial:"Ripeti tutorial",dangerZone:"Zona pericolo",dangerDesc:"Reimposta tutti i progressi: punti, luoghi, potenziamenti, POI scoperti, aeroporti e checkpoint. Le impostazioni grafiche vengono mantenute.",resetSave:"Reimposta progressi",audio:"Audio",music:"Musica",musicHint:"Tema del menu di Daniel Schultes",musicVolume:"Volume musica",sound:"Suono",soundHint:"Vento, ambiente ed effetti",soundVolume:"Volume suoni",headphoneHint:"Meglio con le cuffie."},ZC={title:"Vuoi davvero eliminare il salvataggio?",text:"Tutti i punti, i luoghi, i potenziamenti e i POI scoperti andranno persi. Ripartirai da <strong>Tenerife Nord</strong> con l'aereo base.",warn:"Questa azione non può essere annullata.",cancel:"Annulla",confirm:"Reimposta"},KC={eyebrow:"Isola",archTitle:"Isole Canarie",legendSpawn:"Partenza",legendDiscovered:"Scoperto",legendLocked:"Sconosciuto",hintDefault:"Tocca un punto di partenza per iniziare lì.",hintNone:"Atterra in un aeroporto per sbloccarlo come punto di partenza.",hintProgress:"{landed} / {total} aeroporti sbloccati. Tocca un punto di partenza.",hintAll:"Tutti gli aeroporti sbloccati. Tocca un punto di partenza.",markerLocked:"???",tipStart:"Parti da {id}",tipNotLanded:"{id} — non ancora atterrato",tipUndiscovered:"Non ancora scoperto"},JC={title:"Note legali",provider:"Fornitore",contact:"Contatto",privacy:"Privacy",privacyLink:"Apri l'informativa sulla privacy",linksLiability:"Responsabilità per i link",linksText:"La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto non possiamo assumerci alcuna responsabilità per tali contenuti di terzi. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore delle pagine.",footer:"Swiss Innovation Studios · 2026"},QC={title:"Licenze open source",intro:"Teide include i seguenti componenti open source. I testi completi delle licenze sono qui sotto e inclusi nell'app.",audioTitle:"Audio — suoni e musica",audioCredit:"Effetti sonori da Pixabay, usati con la Licenza dei Contenuti Pixabay. Musica composta da Daniel Schultes.",iconTitle:"Icone",iconCredit:"Icona “Feather Wing” (Ali Dorate) da SVG Repo, libera per uso commerciale.",footer:"Swiss Innovation Studios · 2026"},eP={title:"Ruota il dispositivo",sub:"Teide si gioca in modalità orizzontale"},tP={title:"Modalità test",prompt:"Inserisci il PIN",wrong:"PIN errato",cancel:"Annulla",confirm:"OK"},nP={drag:{label:"Aerodinamica",desc:"Pieghe più lisce — meno resistenza, planata più lunga."},maxSpeed:{label:"Velocità max",desc:"Aumenta la velocità di crociera massima."},speedFromPitch:{label:"Picchiata",desc:"Più accelerazione in picchiata — la quota diventa velocità."},stallSpeed:{label:"Stabilità",desc:"Soglia di stallo più bassa — perdona il volo lento."},takeoffSpeed:{label:"Pista",desc:"Accelerazione al decollo più rapida — meno rullaggio."},brake:{label:"Aerofreno",desc:"Sblocca gli alettoni freno (Spazio in volo)."},greyBoost:{label:"Boost di riserva",desc:"Spinta d'emergenza più forte: combustione più lunga, più spinta, ricarica più rapida."}},iP={pickLanguage:"Scegli la lingua",welcome:"Benvenuto alle Canarie",story:["Hai piegato il perfetto aeroplanino di carta e lo hai lanciato dai pendii del Teide. Ora cavalca le termiche e plana sulle Isole Canarie.","Sfrutta le correnti ascensionali per restare in volo, attraversa i punti d'interesse per raccogliere i luoghi e atterra sulle piste per sbloccarle come nuovi punti di partenza.","Atterrare significa proseguire: ogni atterraggio ricarica il tuo propulsore per il salto successivo. Allineati a una pista e posati con delicatezza.","Spendi i tuoi punti nell'hangar per potenziare aereo e booster. Plana abbastanza lontano e nuove isole entrano nel raggio — da La Gomera fino a Lanzarote. Fin dove arriverai?"],next:"Avanti",begin:"Si parte!"},sP={eyebrow:"Tutorial",skip:"Salta",retry:"Riprova!",done:"Pronto — si vola!",launch:"Tira giù per decollare e planare",navLeft:"Ora a sinistra",navRight:"Ora a destra",navUp:"Ora sali",navDown:"Ora scendi",rings:"Attraversa entrambi gli anelli ({collected}/{total})",boost:"Tieni premuto il boost per uno scatto",thermal:"Punta verso la corrente ascensionale per guadagnare quota",ringHigh:"Sfrutta la quota — prendi l'anello alto",ringLow:"Ora ridiscendi — attraverso l'anello basso",invertHint:"Salire sembra al contrario? Invertilo.",steerHint:"Guida qui",endTitle:"Pronto a planare!",endBody:"Esplora le Canarie e attraversa gli anelli per raccogliere luoghi. Raccogline a sufficienza e il tuo boost One-Shot ti porta all'isola successiva. Fin dove plani?",endGo:"Si vola!"},oP={loading:kC,a11y:FC,hud:BC,booster:zC,menu:HC,welcome:GC,pause:VC,crash:WC,hangar:qC,obsidian:XC,skins:$C,shop:jC,settings:YC,reset:ZC,levels:KC,imprint:JC,licenses:QC,portrait:eP,testpin:tP,upgrades:nP,onboarding:iP,tutorial:sP},rP={sub:"Wereld wordt gebouwd…",hint:"Bij hogere kwaliteitsinstellingen kan dit enkele seconden duren."},aP={pause:"Pauze",map:"Kaart",close:"Sluiten",landings:"Landingen",brake:"Rem",oneShot:"One-Shot",boost:"Boost",sell:"Verkopen voor {cost} punten",flightScore:"Punten deze vlucht",goldenBuy:"Gouden Vleugels kopen voor {cost} obsidiaan"},cP={lift:"Lift",soon:"binnenkort",hintNormal:"↑ ↓ Pitch · ← → Rol · Spatie Rem · Shift Boost · F One-Shot",hintNormalTouch:"Stuur met joystick · Rechts Boost / Rem / One-Shot",hintPrelaunch:"Trek omlaag om te starten",hintPrelaunchGyro:"Tik op boost om op te stijgen",hintTakeoff:"Startrun…",landingToast:"Geland! · {id}",landingBonus:"+ {bonus} ptn",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nieuw eiland ontdekt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land op het gemarkeerde vliegveld om je boosters bij te vullen en bonuspunten te verdienen.",airportUnlockTitle:"Vliegveld ontgrendeld!",airportUnlockBody:"Start wanneer je wilt bij {name} via het menu Levels.",airportUnlocked:"{name} ontgrendeld",wrongApproach:"Verkeerde aanvliegzijde — kom van de andere kant.",multiplierUp:"Multiplier ×{mult}",goldenTitle:"Gouden Vleugels",goldenSub:"×2 punten tot je volgende crash",goldenActive:"Gouden Vleugels actief",goldenOneUse:"Eenmalig — je kunt er meerdere sparen.",goldenOwnedCount:"Voorraad: {count}",goldenSlide:"Schuif omhoog om te activeren",goldenToShop:"Haal ze in de shop"},lP={names:["Geen Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 ontgrendeld","Booster Niveau 2 ontgrendeld — La Gomera binnen bereik","Booster Niveau 3 ontgrendeld — Gran Canaria binnen bereik","Booster Niveau MAX ontgrendeld — Fuerteventura / Lanzarote"]},uP={start:"Start",startSubDefault:"Laatste checkpoint",levels:"Levels",levelsSub:"Kies vliegveld",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Winkel",shopSub:"Obsidiaan & designs",settings:"Instellingen",settingsSub:"Graphics & prestaties",imprint:"Colofon",licenses:"Licenties"},dP={checkpoint:"Checkpoint · {id}",firstFlight:"Eerste vlucht · TFN"},hP={title:"Pauze",resume:"Vlucht hervatten",home:"Hoofdmenu"},fP={title:"Crashlanding",restart:"Opnieuw opstijgen",hint:"Spatiebalk",hangar:"Hangar",shop:"Winkel"},pP={title:"Hangar",points:"Punten",locations:"Locaties",obsidian:"Obsidiaan",highscore:"Record",plane:"Vliegtuig",dragToRotate:"Sleep om te draaien",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tik op een upgrade om de beschrijving te zien.",buy:"Kopen · {cost}",buyObsidian:"Obsidiaan · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Je boostniveau stijgt automatisch zodra je genoeg locaties hebt ontdekt. Vlieg door nieuwe POI's om je One-Shot-boost te verbeteren.",equip:"Uitrusten",equipped:"Uitgerust",comingSoon:"Binnenkort",getDiamonds:"Obsidiaan halen →",skinPrev:"Vorig design",skinNext:"Volgend design"},mP={title:"Met obsidiaan betalen?",text:"Deze upgrade kost <strong></strong>.",warn:"Obsidiaan wordt met echt geld gekocht. Tik alleen op <em>Bevestigen</em> als je echt obsidiaan wilt uitgeven.",cancel:"Annuleren",confirm:"Bevestigen",spendSkin:"Je geeft {obsidian} uit aan het design {label}."},gP={default:{name:"Papier",desc:"De klassieke vouw."},charcoal:{name:"Antraciet",desc:"Een matte leikleurige livrei — verdiend door ontdekkers."},gold:{name:"Goud",desc:"Een glanzende premium livrei."},comingSoon:{name:"Binnenkort meer",desc:"Nieuwe designs zijn onderweg."}},vP={intro:"Obsidiaan ontgrendelt designs in de hangar en directe upgrades.",bonus:"+{pct}%",badgePopular:"Populair",badgeValue:"Beste waarde",granted:"+ {amount} obsidiaan toegevoegd",restore:"Aankopen herstellen",restored:"Aankopen hersteld",viewSkins:"Designs bekijken →",disclosure:"Obsidiaan en designs worden op dit apparaat bewaard.",watchAd:"Bekijk een video",adsLeftToday:"{count}/{cap} vandaag",adsCapReached:"Kom morgen terug",removeAds:"Advertenties verwijderen",removeAdsOwned:"Advertenties verwijderd"},yP={title:"Instellingen",quality:"Grafische kwaliteit",presetLow:"Laag",presetStandard:"Standaard",presetHigh:"Hoog",presetUltra:"Ultra",advanced:"Geavanceerd",meshRes:"Mesh-resolutie",meshHint:"Segments · 100–3000",vegSamples:"Vegetatie-samples",vegHint:"10.000–10.000.000",restartNote:"Wijzigingen vereisen een herstart. Bij toepassen wordt de pagina herladen.",cancel:"Annuleren",apply:"Toepassen & herladen",language:"Taal",controls:"Besturing",invertPitch:"Omgekeerde vluchtbesturing",invertPitchHint:"Trek omlaag om te klimmen",gyroControl:"Kantelbesturing",gyroControlHint:"Kantel je toestel om te sturen",gyroSensitivity:"Gevoeligheid",gyroRecalibrate:"Herkalibreren",tutorial:"Tutorial",replayTutorial:"Tutorial opnieuw",dangerZone:"Gevarenzone",dangerDesc:"Zet alle voortgang terug: punten, locaties, upgrades, ontdekte POI's, vliegvelden en checkpoint. Grafische instellingen blijven behouden.",resetSave:"Voortgang resetten",audio:"Audio",music:"Muziek",musicHint:"Menuthema van Daniel Schultes",musicVolume:"Muziekvolume",sound:"Geluid",soundHint:"Wind, sfeer en effecten",soundVolume:"Geluidsvolume",headphoneHint:"Het best met een koptelefoon."},xP={title:"Opslag echt verwijderen?",text:"Alle punten, locaties, upgrades en ontdekte plekken gaan verloren. Je begint op <strong>Tenerife Nord</strong> met het basisvliegtuig.",warn:"Deze actie kan niet ongedaan worden gemaakt.",cancel:"Annuleren",confirm:"Resetten"},_P={eyebrow:"Eiland",archTitle:"Canarische Eilanden",legendSpawn:"Start",legendDiscovered:"Ontdekt",legendLocked:"Onbekend",hintDefault:"Tik op een startpunt om daar te beginnen.",hintNone:"Land op een vliegveld om het als startpunt te ontgrendelen.",hintProgress:"{landed} / {total} vliegvelden ontgrendeld. Tik op een startpunt.",hintAll:"Alle vliegvelden ontgrendeld. Tik op een startpunt.",markerLocked:"???",tipStart:"Start bij {id}",tipNotLanded:"{id} — nog niet geland",tipUndiscovered:"Nog niet ontdekt"},bP={title:"Colofon",provider:"Aanbieder",contact:"Contact",privacy:"Privacy",privacyLink:"Privacybeleid openen",linksLiability:"Aansprakelijkheid voor links",linksText:"Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina's is steeds de betreffende aanbieder of beheerder van de pagina's verantwoordelijk.",footer:"Swiss Innovation Studios · 2026"},SP={title:"Opensource-licenties",intro:"Teide bevat de volgende opensourcecomponenten. De volledige licentieteksten staan hieronder en zijn bij de app gevoegd.",audioTitle:"Audio — geluid en muziek",audioCredit:"Geluidseffecten van Pixabay, gebruikt onder de Pixabay Content-licentie. Muziek gecomponeerd door Daniel Schultes.",iconTitle:"Iconen",iconCredit:"“Feather Wing”-icoon (Gouden Vleugels) van SVG Repo, vrij voor commercieel gebruik.",footer:"Swiss Innovation Studios · 2026"},MP={title:"Draai je apparaat",sub:"Teide wordt in liggende stand gespeeld"},wP={title:"Testmodus",prompt:"Voer pincode in",wrong:"Onjuiste pincode",cancel:"Annuleren",confirm:"OK"},EP={drag:{label:"Aerodynamica",desc:"Strakkere vouwen — minder weerstand, langere glijvlucht."},maxSpeed:{label:"Topsnelheid",desc:"Verhoogt de maximale kruissnelheid."},speedFromPitch:{label:"Duikvlucht",desc:"Meer versnelling in een duik — hoogte wordt snelheid."},stallSpeed:{label:"Stabiliteit",desc:"Lagere overtreksnelheid — vergeeft langzaam vliegen."},takeoffSpeed:{label:"Startbaan",desc:"Snellere startversnelling — kortere startrun."},brake:{label:"Remklep",desc:"Ontgrendelt de remkleppen (Spatie tijdens de vlucht)."},greyBoost:{label:"Reserveboost",desc:"Sterkere noodstuwing: langere brandtijd, meer duwkracht, sneller bijvullen."}},AP={pickLanguage:"Kies je taal",welcome:"Welkom op de Canarische Eilanden",story:["Je hebt het perfecte papieren vliegtuigje gevouwen en het vanaf de hellingen van de Teide gelanceerd. Berijd nu de thermiek en zweef over de Canarische Eilanden.","Vang opstijgende lucht om in de lucht te blijven, duik door points of interest om locaties te verzamelen en land op startbanen om ze als nieuwe startpunten te ontgrendelen.","Landen is doorgaan: elke landing vult je booster aan voor de volgende sprong. Lijn uit met een baan en zet zacht neer.","Geef je punten uit in de hangar om je vliegtuig en booster te verbeteren. Zweef ver genoeg en nieuwe eilanden komen binnen bereik — van La Gomera tot Lanzarote. Hoe ver kom jij?"],next:"Volgende",begin:"Aan de slag!"},TP={eyebrow:"Tutorial",skip:"Overslaan",retry:"Opnieuw!",done:"Klaar — daar ga je!",launch:"Trek omlaag om op te stijgen en te zweven",navLeft:"Nu naar links",navRight:"Nu naar rechts",navUp:"Nu klimmen",navDown:"Nu dalen",rings:"Vlieg door beide ringen ({collected}/{total})",boost:"Houd boost vast voor een snelheidsstoot",thermal:"Stuur de opstijgwind in om hoogte te winnen",ringHigh:"Gebruik je hoogte — pak de hoge ring",ringLow:"Nu weer omlaag — door de lage ring",invertHint:"Klimmen omgekeerd? Wissel het om.",steerHint:"Hier sturen",endTitle:"Klaar om te zweven!",endBody:"Verken de Canarische Eilanden en vlieg door ringen om locaties te verzamelen. Verzamel er genoeg en je One-Shot-boost brengt je naar het volgende eiland. Hoe ver zweef jij?",endGo:"Daar gaan we"},RP={loading:rP,a11y:aP,hud:cP,booster:lP,menu:uP,welcome:dP,pause:hP,crash:fP,hangar:pP,obsidian:mP,skins:gP,shop:vP,settings:yP,reset:xP,levels:_P,imprint:bP,licenses:SP,portrait:MP,testpin:wP,upgrades:EP,onboarding:AP,tutorial:TP},LP={sub:"Budowanie świata…",hint:"Przy wyższych ustawieniach jakości może to potrwać kilka sekund."},CP={pause:"Pauza",map:"Mapa",close:"Zamknij",landings:"Lądowania",brake:"Hamulec",oneShot:"One-Shot",boost:"Boost",sell:"Sprzedaj za {cost} pkt",flightScore:"Punkty w tym locie",goldenBuy:"Kup Złote Skrzydła za {cost} obsydianu"},PP={lift:"Wznoszenie",soon:"wkrótce",hintNormal:"↑ ↓ Pochylenie · ← → Przechył · Spacja Hamulec · Shift Boost · F One-Shot",hintNormalTouch:"Steruj joystickiem · Prawo Boost / Hamulec / One-Shot",hintPrelaunch:"Pociągnij w dół, aby wystartować",hintPrelaunchGyro:"Dotknij boost, aby wystartować",hintTakeoff:"Rozbieg…",landingToast:"Wylądowano! · {id}",landingBonus:"+ {bonus} pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Odkryto nową wyspę!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Wyląduj na oznaczonym lotnisku, aby naładować boostery i zdobyć dodatkowe punkty.",airportUnlockTitle:"Lotnisko odblokowane!",airportUnlockBody:"Startuj w {name} w dowolnej chwili z menu Poziomy.",airportUnlocked:"{name} odblokowane",wrongApproach:"Zła strona podejścia — podejdź z drugiej strony.",multiplierUp:"Mnożnik ×{mult}",goldenTitle:"Złote Skrzydła",goldenSub:"×2 punkty do następnej kraksy",goldenActive:"Złote Skrzydła aktywne",goldenOneUse:"Jednorazowe — możesz zgromadzić kilka.",goldenOwnedCount:"Zapas: {count}",goldenSlide:"Przesuń w górę, aby aktywować",goldenToShop:"Zdobądź je w sklepie"},IP={names:["Brak Boostera","Booster Poziom 1","Booster Poziom 2","Booster Poziom 3","Booster Poziom MAX"],unlock:["","Booster Poziom 1 odblokowany","Booster Poziom 2 odblokowany — La Gomera w zasięgu","Booster Poziom 3 odblokowany — Gran Canaria w zasięgu","Booster Poziom MAX odblokowany — Fuerteventura / Lanzarote"]},NP={start:"Start",startSubDefault:"Ostatni checkpoint",levels:"Poziomy",levelsSub:"Wybierz lotnisko",hangar:"Hangar",hangarSub:"Ulepszenia i status",shop:"Sklep",shopSub:"Obsydian i wzory",settings:"Ustawienia",settingsSub:"Grafika i wydajność",imprint:"Nota prawna",licenses:"Licencje"},DP={checkpoint:"Checkpoint · {id}",firstFlight:"Pierwszy lot · TFN"},OP={title:"Pauza",resume:"Wznów lot",home:"Menu główne"},UP={title:"Rozbicie",restart:"Wystartuj ponownie",hint:"Spacja",hangar:"Hangar",shop:"Sklep"},kP={title:"Hangar",points:"Punkty",locations:"Miejsca",obsidian:"Obsydian",highscore:"Rekord",plane:"Samolot",dragToRotate:"Przeciągnij, aby obrócić",upgrades:"Ulepszenia",booster:"Booster",selectUpgrade:"Dotknij ulepszenia, aby zobaczyć opis.",buy:"Kup · {cost}",buyObsidian:"Obsydian · {cost}",max:"Maks",level:"Poziom {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Poziom boostera rośnie automatycznie, gdy odkryjesz wystarczająco wiele miejsc. Przelatuj przez nowe POI, aby ulepszyć swój boost One-Shot.",equip:"Załóż",equipped:"Założony",comingSoon:"Wkrótce",getDiamonds:"Zdobądź obsydian →",skinPrev:"Poprzedni wzór",skinNext:"Następny wzór"},FP={title:"Zapłacić obsydianem?",text:"To ulepszenie kosztuje <strong></strong>.",warn:"Obsydian kupuje się za prawdziwe pieniądze. Dotknij <em>Potwierdź</em> tylko, jeśli naprawdę chcesz wydać obsydian.",cancel:"Anuluj",confirm:"Potwierdź",spendSkin:"Wydajesz {obsidian} na wzór {label}."},BP={default:{name:"Papier",desc:"Klasyczne złożenie."},charcoal:{name:"Antracyt",desc:"Matowe łupkowe malowanie — dla odkrywców."},gold:{name:"Złoto",desc:"Lśniące malowanie premium."},comingSoon:{name:"Wkrótce więcej",desc:"Nowe wzory są w drodze."}},zP={intro:"Obsydian odblokowuje wzory w hangarze i natychmiastowe ulepszenia.",bonus:"+{pct}%",badgePopular:"Popularne",badgeValue:"Najlepsza oferta",granted:"+ {amount} obsydianu dodano",restore:"Przywróć zakupy",restored:"Zakupy przywrócone",viewSkins:"Zobacz wzory →",disclosure:"Obsydian i wzory są przechowywane na tym urządzeniu.",watchAd:"Obejrzyj film",adsLeftToday:"{count}/{cap} dziś",adsCapReached:"Wróć jutro",removeAds:"Usuń reklamy",removeAdsOwned:"Reklamy usunięte"},HP={title:"Ustawienia",quality:"Jakość grafiki",presetLow:"Niska",presetStandard:"Standard",presetHigh:"Wysoka",presetUltra:"Ultra",advanced:"Zaawansowane",meshRes:"Rozdzielczość siatki",meshHint:"Segments · 100–3000",vegSamples:"Próbki roślinności",vegHint:"10 000–10 000 000",restartNote:"Zmiany wymagają ponownego uruchomienia. Po zastosowaniu strona zostanie przeładowana.",cancel:"Anuluj",apply:"Zastosuj i przeładuj",language:"Język",controls:"Sterowanie",invertPitch:"Odwrócone sterowanie lotem",invertPitchHint:"Pociągnij w dół, aby się wznosić",gyroControl:"Sterowanie przechyłem",gyroControlHint:"Przechylaj urządzenie, aby sterować",gyroSensitivity:"Czułość",gyroRecalibrate:"Kalibruj ponownie",tutorial:"Samouczek",replayTutorial:"Powtórz samouczek",dangerZone:"Strefa zagrożenia",dangerDesc:"Resetuje cały postęp: punkty, miejsca, ulepszenia, odkryte POI, lotniska i checkpoint. Ustawienia grafiki zostają zachowane.",resetSave:"Zresetuj postęp",audio:"Audio",music:"Muzyka",musicHint:"Motyw menu: Daniel Schultes",musicVolume:"Głośność muzyki",sound:"Dźwięk",soundHint:"Wiatr, tło i efekty",soundVolume:"Głośność dźwięku",headphoneHint:"Najlepiej na słuchawkach."},GP={title:"Na pewno usunąć zapis?",text:"Wszystkie punkty, miejsca, ulepszenia i odkryte POI przepadną. Zaczniesz na <strong>Tenerife Nord</strong> podstawowym samolotem.",warn:"Tej operacji nie można cofnąć.",cancel:"Anuluj",confirm:"Resetuj"},VP={eyebrow:"Wyspa",archTitle:"Wyspy Kanaryjskie",legendSpawn:"Start",legendDiscovered:"Odkryte",legendLocked:"Nieznane",hintDefault:"Dotknij punktu startu, aby tam zacząć.",hintNone:"Wyląduj na lotnisku, aby odblokować je jako punkt startu.",hintProgress:"{landed} / {total} lotnisk odblokowanych. Dotknij punktu startu.",hintAll:"Wszystkie lotniska odblokowane. Dotknij punktu startu.",markerLocked:"???",tipStart:"Start na {id}",tipNotLanded:"{id} — jeszcze nie wylądowano",tipUndiscovered:"Jeszcze nieodkryte"},WP={title:"Nota prawna",provider:"Dostawca",contact:"Kontakt",privacy:"Prywatność",privacyLink:"Otwórz politykę prywatności",linksLiability:"Odpowiedzialność za linki",linksText:"Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treść nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator.",footer:"Swiss Innovation Studios · 2026"},qP={title:"Licencje open source",intro:"Teide zawiera następujące komponenty open source. Pełne teksty licencji znajdują się poniżej i są dołączone do aplikacji.",audioTitle:"Audio — dźwięk i muzyka",audioCredit:"Efekty dźwiękowe z Pixabay, na licencji Pixabay Content License. Muzykę skomponował Daniel Schultes.",iconTitle:"Ikony",iconCredit:"Ikona „Feather Wing” (Złote Skrzydła) z SVG Repo, do bezpłatnego użytku komercyjnego.",footer:"Swiss Innovation Studios · 2026"},XP={title:"Obróć urządzenie",sub:"W Teide gra się w trybie poziomym"},$P={title:"Tryb testowy",prompt:"Wpisz PIN",wrong:"Błędny PIN",cancel:"Anuluj",confirm:"OK"},jP={drag:{label:"Aerodynamika",desc:"Gładsze złożenia — mniejszy opór, dłuższy lot ślizgowy."},maxSpeed:{label:"Prędkość maks.",desc:"Zwiększa maksymalną prędkość przelotową."},speedFromPitch:{label:"Nurkowanie",desc:"Większe przyspieszenie w nurkowaniu — wysokość zamienia się w prędkość."},stallSpeed:{label:"Stabilność",desc:"Niższy próg przeciągnięcia — wybacza wolny lot."},takeoffSpeed:{label:"Pas startowy",desc:"Szybsze przyspieszenie przy starcie — krótszy rozbieg."},brake:{label:"Hamulec aerodynamiczny",desc:"Odblokowuje klapy hamujące (Spacja w locie)."},greyBoost:{label:"Boost rezerwowy",desc:"Mocniejszy ciąg awaryjny: dłuższe spalanie, większy napęd, szybsze ładowanie."}},YP={pickLanguage:"Wybierz język",welcome:"Witaj na Wyspach Kanaryjskich",story:["Złożyłeś idealny papierowy samolot i wypuściłeś go ze zboczy Teide. Teraz ujeżdżaj kominy termiczne i szybuj nad Wyspami Kanaryjskimi.","Łap prądy wznoszące, aby utrzymać się w powietrzu, przelatuj przez punkty zainteresowania, aby zbierać miejsca, i ląduj na pasach, aby odblokować je jako nowe punkty startu.","Lądowanie pozwala lecieć dalej: każde lądowanie ładuje twój booster na kolejny skok. Wyrównaj do pasa i wyląduj łagodnie.","Wydawaj punkty w hangarze, aby ulepszać samolot i booster. Szybuj wystarczająco daleko, a nowe wyspy znajdą się w zasięgu — od La Gomery po Lanzarote. Jak daleko dolecisz?"],next:"Dalej",begin:"Zaczynamy!"},ZP={eyebrow:"Samouczek",skip:"Pomiń",retry:"Jeszcze raz!",done:"Gotowe — lecimy!",launch:"Pociągnij w dół, aby wystartować i szybować",navLeft:"Teraz w lewo",navRight:"Teraz w prawo",navUp:"Teraz wznoś się",navDown:"Teraz opadaj",rings:"Przeleć przez oba pierścienie ({collected}/{total})",boost:"Przytrzymaj boost, by przyspieszyć",thermal:"Skieruj się w prąd wznoszący, aby nabrać wysokości",ringHigh:"Wykorzystaj wysokość — złap wysoki pierścień",ringLow:"Teraz w dół — przez niski pierścień",invertHint:"Wznoszenie na odwrót? Przełącz.",steerHint:"Steruj tutaj",endTitle:"Gotowy do szybowania!",endBody:"Odkrywaj Wyspy Kanaryjskie i przelatuj przez pierścienie, aby zbierać miejsca. Zbierz ich dość, a boost One-Shot zaniesie cię na kolejną wyspę. Jak daleko poszybujesz?",endGo:"Lecimy!"},KP={loading:LP,a11y:CP,hud:PP,booster:IP,menu:NP,welcome:DP,pause:OP,crash:UP,hangar:kP,obsidian:FP,skins:BP,shop:zP,settings:HP,reset:GP,levels:VP,imprint:WP,licenses:qP,portrait:XP,testpin:$P,upgrades:jP,onboarding:YP,tutorial:ZP},JP={en:bL,de:WL,es:fC,fr:UC,it:oP,nl:RP,pl:KP},Qa=["en","de","es","fr","it","nl","pl"],QP={en:{label:"English",flag:"🇬🇧"},de:{label:"Deutsch",flag:"🇩🇪"},es:{label:"Español",flag:"🇪🇸"},fr:{label:"Français",flag:"🇫🇷"},it:{label:"Italiano",flag:"🇮🇹"},nl:{label:"Nederlands",flag:"🇳🇱"},pl:{label:"Polski",flag:"🇵🇱"}};let Bi="en";const Fh=new Set;function e2(){const e=(navigator.languages&&navigator.languages[0]||navigator.language||"en").slice(0,2).toLowerCase();return Qa.includes(e)?e:"en"}function t2(n){return n&&Qa.includes(n)?n:e2()}function Ig(n,e){let t=JP[n];for(const i of e.split(".")){if(t==null)return;t=t[i]}return t}function Se(n,e){let t=Ig(Bi,n);return t===void 0&&Bi!=="en"&&(t=Ig("en",n)),t===void 0?n:(typeof t!="string"||e&&(t=t.replace(/\{(\w+)\}/g,(i,s)=>s in e?String(e[s]):i)),t)}function n2(){return Bi}const i2={en:"en-GB",de:"de-DE",es:"es-ES",fr:"fr-FR",it:"it-IT",nl:"nl-NL",pl:"pl-PL"};function Jf(){return i2[Bi]||"en-GB"}function s2(){const n=new URLSearchParams(window.location.search).get("lang");return Bi=n&&Qa.includes(n)?n:t2(ht().language),document.documentElement.lang=Bi,Zy(),Bi}function Yy(n){if(!Qa.includes(n)||n===Bi)return;Bi=n,document.documentElement.lang=n;const e=ht();e.language=n,oi(e),Zy();for(const t of Fh)try{t(n)}catch(i){console.warn("[i18n] listener failed",i)}}function Du(n){return Fh.add(n),()=>Fh.delete(n)}function Zy(n=document){n.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Se(e.dataset.i18n)}),n.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=Se(e.dataset.i18nHtml)}),n.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",Se(e.dataset.i18nAria))}),n.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=Se(e.dataset.i18nTitle)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=Se(e.dataset.i18nPlaceholder)})}function Ky(n,{onPick:e,active:t,flagsOnly:i=!1}={}){if(!n)return;n.innerHTML="";const s=t||n2();for(const o of Qa){const r=QP[o]||{label:o,flag:""},a=document.createElement("button");a.type="button",a.className="lang-chip"+(i?" lang-chip-flagsonly":"")+(o===s?" active":""),a.dataset.lang=o,a.setAttribute("aria-label",r.label),o===s&&a.setAttribute("aria-current","true"),a.innerHTML=i?`<span class="lang-chip-flag">${r.flag}</span>`:`<span class="lang-chip-flag">${r.flag}</span><span class="lang-chip-label">${r.label}</span>`,a.addEventListener("click",()=>e&&e(o)),n.appendChild(a)}}const o2=Math.PI/180,Ln={pitch:0,roll:0,isActive:!1};let Zl=!1,Kl=!1,Jy=yn.sensDefault,Ng=null,Dg=null,za=!0,jo=0,Yo=0,Qf=!1;function r2(){return Qf}function a2(){Qf=!1}function c2(){return Ln}function Qy(n){const e=Number(n);Number.isFinite(e)&&(Jy=Math.max(yn.sensMin,Math.min(yn.sensMax,e)))}function Ou(){za=!0}function l2(n){return((n+180)%360+360)%360-180}function ex(n){if(n.beta==null||n.gamma==null)return;if(za){Ng=n.beta,Dg=n.gamma,za=!1,jo=0,Yo=0,Ln.pitch=0,Ln.roll=0,Ln.isActive=!0;return}const e=l2(n.beta-Ng),t=n.gamma-Dg,i=(typeof screen<"u"&&screen.orientation?screen.orientation.angle:window.orientation??0)*o2,s=Math.cos(i),o=Math.sin(i);let r=t*s+e*o,a=-t*o+e*s;const c=Math.max(1,yn.maxTiltDeg/Jy),l=m=>{const v=Math.abs(m);if(v<=yn.deadZoneDeg)return 0;const y=Math.min(1,(v-yn.deadZoneDeg)/(c-yn.deadZoneDeg));return Math.sign(m)*y};let u=l(r),d=-l(a);const f=yn.smoothing;Yo+=(u-Yo)*f,jo+=(d-jo)*f,Ln.roll=Yo,Ln.pitch=jo,Ln.isActive=!0,Qf=!0}function u2(){Kl||(window.addEventListener("deviceorientation",ex),Kl=!0)}function d2(){Kl&&(window.removeEventListener("deviceorientation",ex),Kl=!1)}async function h2(){const n=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(n&&typeof n.requestPermission=="function")try{return await n.requestPermission()==="granted"}catch{return!1}return!0}async function tx(){return Zl=!0,za=!0,Ln.isActive=!1,await h2()?(u2(),!0):(Zl=!1,!1)}function f2(){Zl=!1,d2(),Ln.pitch=0,Ln.roll=0,Ln.isActive=!1,jo=0,Yo=0}function nx(){Ln.pitch=0,Ln.roll=0,jo=0,Yo=0,Zl&&(za=!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&nx()});window.addEventListener("blur",nx);let Jl=G_();function ix(){return Jl}function Ql(n){Jl=!!n,V_(Jl)}let Ha=W_();Qy(yf());function ep(){return Ha}async function p2(n){const e=n==="gyro"?"gyro":"touch";return Ha=e,yp(e),jl(e!=="gyro"),e==="gyro"?await tx()?!0:(Ha="touch",yp("touch"),jl(!0),!1):(f2(),!0)}function m2(n){Qy(n)}Ha==="gyro"&&(jl(!1),tx().then(n=>{n||jl(!0)}));let sx=!1,ox=!1,rx=!1;function tp({brake:n=!1,boost:e=!1,oneShot:t=!1}={}){sx=!!n,ox=!!e,rx=!!t}function yo(){const n=R_(),e=wR(),t=c2(),i=e.isActive,s=Ha==="gyro"&&t.isActive;let o,r;return i?(o=e.pitch,r=e.roll):s?(o=t.pitch,r=t.roll):(o=n.pitch,r=n.roll),Xn.pitch=Jl?o:-o,Xn.roll=r,Xn.brake=e.brake||n.brake,Xn.boost=e.boost||n.boost,sx&&(Xn.brake=!1),ox&&(Xn.boost=!1,wu()),rx&&mf(),Xn.isInputActive=n.isActive||e.isActive||s,SR()?(Xn.activeInputType="touch",MR()):r2()?(Xn.activeInputType="gyro",a2()):T_()&&(Xn.activeInputType="keyboard",A_()),Xn}function ax(){const n=new lt,e=[],t=.32,i=.22,s=Math.atan2(.28,.95),o=new ut({color:Ze.paper,side:Kt,flatShading:!0}),r=new Lu({color:Ze.ink,transparent:!0,opacity:.32});for(const a of[-.45,.45]){const c=new lt;c.position.set(a,.045,.05),c.rotation.z=a<0?s:-s;const l=new go(t,i);l.translate(0,-i/2,0),l.rotateX(-Math.PI/2);const u=new tt(l,o),d=new sy(l);u.add(new Kv(d,r)),c.add(u),n.add(c),e.push(u)}return{group:n,flaps:e}}const{group:g2,flaps:cx}=ax();he.add(g2);function v2(n){const e=yo().brake&&D.alive&&D.flightState===De.FLYING?1:0,t=1-Math.exp(-n/Sl.deployTau);D.brakeAmount+=(e-D.brakeAmount)*t;const i=-D.brakeAmount*Sl.maxAngle;for(const s of cx)s.rotation.x=i}function y2(){D.brakeAmount=0;for(const n of cx)n.rotation.x=0}function lx(){const n=new lt,e=new ut({color:Ze.ink,flatShading:!0});function t(i,s,o,r){const a=new lt,c=new Vn(.018,.018,o,6);c.translate(0,-o/2,0),a.add(new tt(c,e));const l=new Vn(r,r,.04,12);return l.rotateZ(Math.PI/2),l.translate(0,-o,0),a.add(new tt(l,e)),a.position.set(i,-.05,s),a}return n.add(t(0,-.55,.11,.055)),n.add(t(-.42,.12,.12,.06)),n.add(t(.42,.12,.12,.06)),n}const co=lx();co.scale.setScalar(.001);co.visible=!1;he.add(co);function x2(n){const e=u1(he.position,ol.triggerDist,ol.triggerHeight)?1:0,t=1-Math.exp(-n/ol.deployTau);D.gearAmount+=(e-D.gearAmount)*t;const i=Math.max(.001,D.gearAmount);co.scale.setScalar(i),co.visible=D.gearAmount>.02}function _2(){D.gearAmount=1,co.scale.setScalar(1),co.visible=!0}const Og=new Ee;let oa=0;function ux(){const n=new lt,e=[],t=St.exhaust;for(const i of[-.36,t.offsetX]){const s=new Vn(t.radiusNarrow,t.radiusWide,1,12,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,.5);const o=new qn({color:16777215,transparent:!0,opacity:0,blending:Al,depthWrite:!1,side:Kt}),r=new tt(s,o);r.position.set(i,t.offsetY,t.offsetZ),r.scale.z=0,n.add(r),e.push(r)}return{group:n,streams:e}}const{group:b2,streams:dx}=ux();he.add(b2);function S2(){return D.oneShotActive?(St.oneShot.tiers[io()]||St.oneShot.tiers[0]).color:D.greyActive?St.grey.color:null}function M2(n){const e=St.exhaust,t=D.oneShotActive||D.greyActive?1:0,i=1-Math.exp(-n/Math.max(e.intensityTau,1e-4));oa+=(t-oa)*i;const s=S2();s!==null&&Og.setHex(s);for(const o of dx)o.scale.z=e.length*oa,o.material.opacity=.85*oa,s!==null&&o.material.color.copy(Og)}function w2(){oa=0;for(const n of dx)n.scale.z=0,n.material.opacity=0}let ds=null,Go=null,cr=null,Ot=null,Ug=null,ga=null,Bh=null,Gs=null,va=null,zh=null,Fd=0,Gc=0,Vc=0,Zi=0;const kg=new Ee;let lr=0,Hh=0,hl=!1,Ls=null,eu=0,tu=0,jr=null,Gh=null;const E2=.35;function A2(){if(ds)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;ds=new Tf({canvas:n,antialias:!0,alpha:!0}),ds.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Go=new Yv;const e=new Sh(16774368,.85);e.position.set(2.5,3,2),Go.add(e);const t=new Sh(13229290,.45);t.position.set(-2,1.5,-2),Go.add(t),Go.add(new n1(16777215,.35)),cr=new Rn(28,1,.05,50),cr.position.set(0,.25,3.6),cr.lookAt(0,0,0),Ot=ky(),Ot.scale.setScalar(1.5),Ot.rotation.x=-.18,Ot.rotation.y=.55,Go.add(Ot);const i=ax();ga=i.group,ga.visible=!1,Ot.add(ga),Bh=i.flaps,Gs=lx(),Gs.scale.setScalar(.001),Gs.visible=!1,Ot.add(Gs);const s=ux();return va=s.group,va.visible=!1,Ot.add(va),zh=s.streams,fx(),T2(n),Ug=new ResizeObserver(Fg),Ug.observe(n),Fg(),!0}function Fg(){if(!ds)return;const e=ds.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));ds.setSize(t,i,!1),cr.aspect=t/i,cr.updateProjectionMatrix()}function T2(n){n.addEventListener("pointerdown",t=>{hl=!0,Ls={px:t.clientX,py:t.clientY,rotX:Ot.rotation.x,rotY:Ot.rotation.y},jr={ts:performance.now(),px:t.clientX,py:t.clientY},eu=0,tu=0,n.setPointerCapture(t.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",t=>{if(!hl||!Ls)return;const i=t.clientX-Ls.px,s=t.clientY-Ls.py;Ot.rotation.y=Ls.rotY+i*.0085,Ot.rotation.x=Gi.clamp(Ls.rotX+s*.0085,-1.2,1.2);const o=performance.now(),r=Math.max(.001,(o-jr.ts)/1e3);tu=(t.clientX-jr.px)*.0085/r,eu=(t.clientY-jr.py)*.0085/r,jr={ts:o,px:t.clientX,py:t.clientY}});const e=()=>{hl=!1,Ls=null,n.style.cursor="grab"};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("pointerleave",e),n.style.cursor="grab",n.style.touchAction="none"}function hx(n){if(!ds||!Ot)return;const e=Math.min(.05,(n-Hh)/1e3||0);Hh=n,hl||(eu*=.92,tu*=.92,Ot.rotation.y+=(tu+E2)*e,Ot.rotation.x=Gi.clamp(Ot.rotation.x+eu*e-Ot.rotation.x*.35*e,-1.2,1.2)),R2(e),ds.render(Go,cr),lr=requestAnimationFrame(hx)}function R2(n){Zi=(Zi+n)%Or.cyclePeriod;const e=1-Math.exp(-n/Math.max(Or.smoothTau,1e-4));if(Gs){const t=J.testMode||(J.upgrades?.takeoffSpeed|0)>0,[i,s]=Or.gearWindow,r=t&&Zi>=i&&Zi<=s?1:0,a=1-Math.exp(-n/Math.max(ol.deployTau,1e-4));Vc+=(r-Vc)*a;const c=Math.max(.001,Vc);Gs.scale.setScalar(c),Gs.visible=t&&Vc>.02}if(Bh&&ga){const t=Su();ga.visible=t;const[i,s]=Or.brakeWindow,r=t&&Zi>=i&&Zi<=s?1:0;Fd+=(r-Fd)*e;const a=-Fd*Sl.maxAngle;for(const c of Bh)c.rotation.x=a}if(zh&&va){const t=io(),i=St.oneShot.tiers[t]||St.oneShot.tiers[0];va.visible=t>0;const[s,o]=Or.boostWindow,a=t>0&&Zi>=s&&Zi<=o?1:0;Gc+=(a-Gc)*e,kg.setHex(i.color||16777215);const c=St.exhaust;for(const l of zh)l.scale.z=c.length*Gc,l.material.opacity=.85*Gc,l.material.color.copy(kg)}}function fx(){if(!Ot)return;const n=Gh?Ir(Gh):Fy();zy(Ot,n)}function L2(n){Gh=n,fx()}function C2(){A2()&&(lr||(Hh=performance.now(),lr=requestAnimationFrame(hx)))}function px(){lr&&(cancelAnimationFrame(lr),lr=0)}ZR(()=>{Gn==="shop"&&_s()});const Uu={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},Bg=document.getElementById("garage-punkte"),zg=document.getElementById("garage-highscore"),Hg=document.getElementById("garage-obsidian"),Gg=document.getElementById("garage-gofios"),Zo=document.getElementById("garage-upgrades"),Bd=document.getElementById("garage-upgrade-info"),Vg=document.getElementById("shop-obsidian"),Wg=document.getElementById("hangar-skin-name"),P2=document.getElementById("hangar-skin-price"),I2=document.getElementById("hangar-skin-dots"),fl=document.getElementById("hangar-skin-action"),N2=document.getElementById("hangar-skin-prev"),D2=document.getElementById("hangar-skin-next"),Vh=document.getElementById("hangar-skin-getdiamonds"),Vo=document.getElementById("shop-packs"),Wh=document.getElementById("shop-restore"),zd=document.getElementById("shop-extras"),pl=document.getElementById("shop-watch-ad"),qg=document.getElementById("shop-watch-ad-sub"),Xg=document.getElementById("shop-watch-ad-reward"),ml=document.getElementById("shop-remove-ads"),$g=document.getElementById("shop-remove-ads-sub");let mi=0,Kn=null;const nu="__booster__";let vn=null;const is=document.getElementById("obsidian-confirm"),jg=document.getElementById("obsidian-confirm-text"),O2=document.getElementById("obsidian-confirm-cancel"),U2=document.getElementById("obsidian-confirm-ok"),Mr=document.getElementById("settings-segments"),wr=document.getElementById("settings-samples"),k2=document.getElementById("settings-apply"),F2=document.getElementById("settings-cancel"),B2=document.getElementById("settings-reset-save"),z2=document.getElementById("settings-langs"),Oi=document.getElementById("settings-invert-toggle");Oi&&Oi.addEventListener("change",()=>Ql(Oi.checked));const ya=document.getElementById("settings-music-toggle"),xa=document.getElementById("settings-music-vol"),_a=document.getElementById("settings-sfx-toggle"),ba=document.getElementById("settings-sfx-vol");ya&&ya.addEventListener("change",()=>{const n=!ya.checked;mv(n),My(n)});_a&&_a.addEventListener("change",()=>{const n=!_a.checked;vv(n),wy(n)});xa&&xa.addEventListener("input",()=>{const n=parseFloat(xa.value);$_(n),oR(n)});ba&&ba.addEventListener("input",()=>{const n=parseFloat(ba.value);Y_(n),rR(n)});const Yg=document.getElementById("settings-gyro-block"),Sa=document.getElementById("settings-gyro-toggle"),iu=document.getElementById("settings-gyro-tune"),Er=document.getElementById("settings-gyro-sens"),H2=document.getElementById("settings-gyro-sens-open"),ti=document.getElementById("settings-gyro-advanced"),G2=document.getElementById("settings-gyro-recalibrate"),Ar=document.getElementById("settings-quality-slider"),su=document.getElementById("settings-quality-ticks"),Ko=document.getElementById("settings-quality-readout"),V2=document.getElementById("settings-advanced-open"),ni=document.getElementById("settings-advanced"),Ga=k_(),yi=document.getElementById("reset-confirm"),W2=document.getElementById("reset-confirm-cancel"),q2=document.getElementById("reset-confirm-ok");let Gn=null,gs=null,np=null;function X2(n){return Se(`booster.names.${n}`)}function xn(n){return Math.round(n).toLocaleString(Jf())}function lo(n,e={}){Jo();const t=Uu[n];t&&(n==="hangar"&&(nI(),vs()),n==="shop"&&_s(),n==="settings"&&fI(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),Gn=n,gs=typeof e.onClose=="function"?e.onClose:null,n==="hangar"&&C2())}function Jo(){if(!Gn)return;Gn==="hangar"&&px();const n=Uu[Gn];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),Gn=null;const e=gs;gs=null,e&&e()}function mx(){Gn==="hangar"&&px();for(const n of Object.values(Uu))n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true"));Gn=null,gs=null}function vs(){j2(),$2(),vx(),yx(),qh()}function $2(){if(vn===nu||vn&&$s[vn])return;const n=Object.keys($s);for(const e of n){const t=J.upgrades[e]|0,i=$s[e].levels.length-1;if(t<i){vn=e;return}}vn=n[0]||null}function gx(){const n=io(),e=St.oneShot.tiers[n]||St.oneShot.tiers[0],t="#"+(e.color|0).toString(16).padStart(6,"0"),i=nv(),s=$u.length-1;if(n>=s)return{tier:n,tierCfg:e,colorHex:t,pct:100,rightLabel:Se("hangar.max"),gofios:i};const o=$u[n]|0,r=$u[n+1]|0,a=Math.max(1,r-o),c=Math.max(0,Math.min(100,(i-o)/a*100));return{tier:n,tierCfg:e,colorHex:t,pct:c,rightLabel:`${i} / ${r} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function j2(){if(Bg&&(Bg.textContent=xn(J.punkte)),zg&&(zg.textContent=xn(J.bestFlightPunkte|0)),Hg&&(Hg.textContent=xn(J.obsidian|0)),Gg){const n=J.gofiosByIsland[J.currentIsland]|0;Gg.textContent=xn(n)}}const Y2={drag:"air",maxSpeed:"speed",speedFromPitch:"trending_down",stallSpeed:"paragliding",takeoffSpeed:"flight_takeoff",brake:"back_hand",greyBoost:"bolt"};function Zg(n,e,t){let i="";for(let s=0;s<e;s++){const o=s<n,r=o&&t?` style="background:${t};border-color:${t}"`:"";i+=`<span class="upg-pip${o?" is-on":""}"${r}></span>`}return i}function vx(){if(!Zo)return;Zo.innerHTML="";const n='<span class="material-symbols-outlined upg-buy-icon">stars</span>',e='<span class="material-symbols-outlined upg-buy-icon">diamond</span>';for(const[o,r]of Object.entries($s)){const a=J.upgrades[o]|0,c=r.levels.length-1,l=a>=c,u=l?0:r.costs[a+1],d=l?0:xx(o),f=o===vn;let m,v,y;J.punkte>=u?(m=`${xn(u)} ${n}`,v=Se("hangar.buy",{cost:xn(u)}),y="punkte"):(J.obsidian|0)>=d?(m=`${d} ${e}`,v=Se("hangar.buyObsidian",{cost:d}),y="obsidian"):(m=`${d} ${e}`,v=Se("hangar.getDiamonds"),y="shop");const p=J.testMode&&a>0?`<button class="upg-sell" type="button" data-sell="${o}"
                aria-label="${Se("a11y.sell",{cost:xn(r.costs[a])})}">−</button>`:"",h=l?`<span class="upg-max">${Se("hangar.max")}</span>`:`<button class="upg-buy${y==="punkte"?"":" pay-obsidian"}" type="button"
                data-buy="${o}" data-pay="${y}" aria-label="${v}">${m}</button>`,_=document.createElement("div");_.className=`upg-card${l?" is-maxed":""}${f?" is-selected":""}`,_.dataset.select=o,_.innerHTML=`
      <div class="upg-card-head">
        <span class="upg-card-icon material-symbols-outlined">${Y2[o]||"tune"}</span>
        <span class="upg-card-label">${Se(`upgrades.${o}.label`)}</span>
        ${p}
      </div>
      <div class="upg-card-foot">
        <div class="upg-pips">${Zg(a,c,null)}</div>
        ${h}
      </div>
    `,Zo.appendChild(_)}const t=gx(),i=vn===nu,s=document.createElement("div");s.className=`upg-card upg-card-booster${i?" is-selected":""}`,s.dataset.select=nu,s.innerHTML=`
    <div class="upg-card-head">
      <span class="upg-card-icon material-symbols-outlined">rocket_launch</span>
      <span class="upg-card-label">${Se("hangar.booster")}</span>
    </div>
    <div class="upg-card-foot">
      <div class="upg-pips">${Zg(t.tier,4,t.colorHex)}</div>
      <span class="upg-gofios">${t.rightLabel}</span>
    </div>
  `,Zo.appendChild(s)}function yx(){if(!Bd)return;const n=Bd.querySelector(".upgrade-info-title"),e=Bd.querySelector(".upgrade-info-desc");if(vn===nu){const r=gx();n&&(n.textContent=Se("hangar.boosterTitle",{name:X2(r.tier)})),e&&(e.textContent=Se("hangar.boosterDesc"));return}const t=vn&&$s[vn];if(!t){n&&(n.textContent=""),e&&(e.textContent=Se("hangar.selectUpgrade"));return}const i=J.upgrades[vn]|0,s=t.levels.length-1,o=i>=s;if(n){const r=o?Se("hangar.max"):Se("hangar.level",{level:i,max:s});n.textContent=`${Se(`upgrades.${vn}.label`)} · ${r}`}e&&(e.textContent=Se(`upgrades.${vn}.desc`))}function Z2(n){if(!J.testMode)return;const e=$s[n];if(!e)return;const t=J.upgrades[n]|0;if(t<=0)return;const i=e.costs[t];J.upgrades[n]=t-1,J.punkte+=i,$a(),Dt(),vs()}function K2(n){const e=$s[n],t=J.upgrades[n]|0,i=e.costs[t+1];J.punkte<i||(J.punkte-=i,on("spend-points"),J.upgrades[n]=t+1,$a(),Dt(),vs())}function xx(n){const e=Ml.obsidianUpgradeCosts,t=J.obsidianUpgradeCount?.[n]|0;return e[Math.min(t,e.length-1)]}function J2(n){const e=J.upgrades[n]|0,t=xx(n);(J.obsidian|0)<t||(J.obsidian=(J.obsidian|0)-t,on("spend-diamonds"),J.upgrades[n]=e+1,J.obsidianUpgradeCount[n]=(J.obsidianUpgradeCount?.[n]|0)+1,$a(),Dt(),vs())}function Q2({textHtml:n,onConfirm:e}){np={onConfirm:e},jg&&(jg.innerHTML=n),is.classList.add("visible"),is.setAttribute("aria-hidden","false")}function gl(){is.classList.remove("visible"),is.setAttribute("aria-hidden","true"),np=null}function eI(){const n=np?.onConfirm;gl(),n&&n()}function tI(n){const e=Ir(n),t=`<strong>${e.costObsidian} <span class="material-symbols-outlined inline-icon">diamond</span></strong>`,i=`<strong>${Se(e.nameKey)}</strong>`;Q2({textHtml:Se("obsidian.spendSkin",{obsidian:t,label:i}),onConfirm:()=>sI(n)})}function nI(){const n=$f().findIndex(e=>e.id===J.equippedSkin);mi=n>=0?n:0}function iI(n){const e=Ir(n);e.costPunkte==null||J.punkte<e.costPunkte||(J.punkte-=e.costPunkte,on("spend-points"),Nu(n),jf(n),vs())}function sI(n){const e=Ir(n);e.costObsidian==null||(J.obsidian|0)<e.costObsidian||(J.obsidian=(J.obsidian|0)-e.costObsidian,on("spend-diamonds"),Nu(n),jf(n),vs())}function Kg(){on("denied");const n=gs;gs=null,lo("shop",{onClose:()=>lo("hangar",{onClose:n})})}function oI(){const n=gs;gs=null,lo("hangar",{onClose:()=>lo("shop",{onClose:n})})}function qh(){if(!Wg)return;const n=$f();(mi<0||mi>=n.length)&&(mi=0);const e=n[mi];Wg.textContent=Se(e.nameKey),P2.textContent=Se(e.descKey),I2.innerHTML=n.map((c,l)=>`<span class="skin-dot${l===mi?" is-active":""}"></span>`).join(""),L2(e.teaser?J.equippedSkin:e.id);const t='<span class="material-symbols-outlined skin-action-icon">diamond</span>',i='<span class="material-symbols-outlined skin-action-icon">stars</span>';let s,o=!1,r=!1,a=!1;if(Kn=null,e.teaser)s=Se("hangar.comingSoon"),o=!0,r=!0;else if(By(e.id))J.equippedSkin===e.id?(s=Se("hangar.equipped"),o=!0,r=!0):(s=Se("hangar.equip"),Kn={kind:"equip",id:e.id});else{const c=e.costPunkte!=null,l=e.costObsidian!=null,u=c&&J.punkte>=e.costPunkte,d=l&&(J.obsidian|0)>=e.costObsidian;u?(s=`${Se("hangar.buy",{cost:xn(e.costPunkte)})} ${i}`,Kn={kind:"buyPunkte",id:e.id}):d?(s=`${Se("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,Kn={kind:"buyObsidian",id:e.id}):c?(s=`${Se("hangar.buy",{cost:xn(e.costPunkte)})} ${i}`,o=!0,a=l):(s=`${Se("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,o=!0,a=!0)}fl.innerHTML=s,fl.disabled=o,fl.classList.toggle("is-quiet",r),Vh&&(Vh.hidden=!a)}function _s(){Vg&&(Vg.textContent=xn(J.obsidian|0)),rI(),cI();const n=ro.isAvailable();if(Wh&&(Wh.hidden=!n),!!Vo){if(!n){Vo.innerHTML="",Vo.hidden=!0;return}Vo.hidden=!1,Vo.innerHTML=pf.map(e=>{const t=Math.floor(e.diamonds*(1+e.bonusPct/100)),i=ro.localizedPrice(e.productId),s=e.badgeKey?`<span class="pack-badge">${Se(e.badgeKey)}</span>`:"",o=e.bonusPct>0?`<span class="pack-bonus">${Se("shop.bonus",{pct:e.bonusPct})}</span>`:"";return`
      <button class="pack-card" type="button" data-pack="${e.id}">
        ${s}
        <span class="pack-amount">
          <span class="material-symbols-outlined pack-icon">diamond</span>${xn(t)}
        </span>
        ${o}
        <span class="pack-price">${i}</span>
      </button>`}).join("")}}function rI(){const n=document.getElementById("shop-golden-buy"),e=document.getElementById("shop-golden-owned"),t=document.getElementById("shop-golden-price");if(!n)return;const i=Xt.goldenPrice,s=(J.obsidian|0)>=i;n.disabled=!s,e&&(e.textContent=Se("hud.goldenOwnedCount",{count:Gf()})),t&&(t.innerHTML=`${i} <span class="material-symbols-outlined">diamond</span>`),n.setAttribute("aria-label",Se("a11y.goldenBuy",{cost:i}))}function aI(){if(!mR())return;on("spend-diamonds"),_s();const n=document.getElementById("shop-msg");n&&(n.textContent=`${Se("hud.goldenTitle")} +1 · ${Se("hud.goldenOwnedCount",{count:Gf()})}`,n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}function cI(){if(!zd)return;if(!ao.isAvailable()){zd.hidden=!0;return}zd.hidden=!1;const n=ao.rewardedRemaining();Xg&&(Xg.innerHTML=`+${Cn.rewardedDiamonds} <span class="material-symbols-outlined">diamond</span>`),qg&&(qg.textContent=n>0?Se("shop.adsLeftToday",{count:n,cap:Cn.rewardedDailyCap}):Se("shop.adsCapReached")),pl&&(pl.disabled=n<=0,pl.classList.toggle("is-disabled",n<=0));const e=!!J.adsRemoveOwned;$g&&($g.textContent=e?Se("shop.removeAdsOwned"):ro.removeAdsPrice()),ml&&(ml.disabled=e,ml.classList.toggle("is-owned",e))}async function lI(){const n=await ao.watchRewarded();_s();const e=document.getElementById("shop-msg");if(e){if(n?.success)e.textContent=Se("shop.granted",{amount:xn(n.diamonds)});else if(n?.capped)e.textContent=Se("shop.adsCapReached");else return;e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}}async function uI(){(await ro.purchaseRemoveAds())?.success&&_s()}async function dI(n){const e=await ro.purchasePack(n);if(e?.success){_s();const t=document.getElementById("shop-msg");t&&(t.textContent=Se("shop.granted",{amount:xn(e.diamonds)}),t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2400))}}async function hI(){await ro.restore(),_s();const n=document.getElementById("shop-msg");n&&(n.textContent=Se("shop.restored"),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}let Jt=null;function fI(){Jt=ht(),Mr&&(Mr.value=Jt.segments),wr&&(wr.value=Jt.samples),yI(),Ko&&(Ko.innerHTML='<span class="settings-ro-item"><span class="material-symbols-outlined">grid_on</span><b data-ro="seg">0</b></span><span class="settings-ro-item"><span class="material-symbols-outlined">forest</span><b data-ro="samples">0</b></span>'),ip(!1),_x(),Oi&&(Oi.checked=ix()),ya&&(ya.checked=!pv()),xa&&(xa.value=X_()),_a&&(_a.checked=!gv()),ba&&(ba.value=j_()),pI()}function pI(){if(!Yg)return;const n=ho();if(Yg.hidden=!n,!n)return;const e=ep()==="gyro";Sa&&(Sa.checked=e),Er&&(Er.value=String(yf())),iu&&(iu.hidden=!e)}function _x(){Ky(z2,{flagsOnly:!0,onPick:n=>{Yy(n),Jt&&(Jt.language=n)}})}function mI(n){return n.charAt(0).toUpperCase()+n.slice(1)}function gI(n){return Ga.findIndex(e=>e.segments===n.segments&&e.samples===n.samples)}function vI(n){let e=0,t=1/0;return Ga.forEach((i,s)=>{const o=Math.abs(i.segments-n.segments);o<t&&(t=o,e=s)}),e}function yI(){Ar&&(Ar.max=String(Ga.length-1)),su&&(su.innerHTML=Ga.map(n=>`<span class="settings-tick">${Se("settings.preset"+mI(n.name))}</span>`).join(""))}function ip(n){if(!Jt)return;const e=gI(Jt),t=e>=0?e:vI(Jt);Ar&&(Ar.value=String(t)),su&&[...su.children].forEach((i,s)=>i.classList.toggle("active",e>=0&&s===t)),Ko&&(Jg(Ko.querySelector('[data-ro="seg"]'),Jt.segments,n),Jg(Ko.querySelector('[data-ro="samples"]'),Jt.samples,n),Ko.classList.toggle("is-custom",e<0))}function xI(n){const e=Ga[n];e&&(Jt={...Jt,segments:e.segments,samples:e.samples},Mr&&(Mr.value=e.segments),wr&&(wr.value=e.samples),ip(!0))}function Jg(n,e,t){if(!n)return;n._roRaf&&cancelAnimationFrame(n._roRaf);const i=t?parseFloat(n.dataset.cur)||0:e;if(!t||i===e){n.dataset.cur=String(e),n.textContent=xn(e),n._roRaf=0;return}const s=performance.now(),o=320,r=a=>{const c=Math.min(1,(a-s)/o),l=1-Math.pow(1-c,3),u=i+(e-i)*l;n.dataset.cur=c<1?String(u):String(e),n.textContent=xn(Math.round(u)),n._roRaf=c<1?requestAnimationFrame(r):0};n._roRaf=requestAnimationFrame(r)}function Xh(){if(!Jt)return;const n=parseInt(Mr?.value,10),e=parseInt(wr?.value,10);Number.isFinite(n)&&(Jt.segments=n),Number.isFinite(e)&&(Jt.samples=e),ip(!1)}function _I(){ni&&(ni.classList.add("visible"),ni.setAttribute("aria-hidden","false"))}function Hd(){ni&&(ni.classList.remove("visible"),ni.setAttribute("aria-hidden","true"))}function bI(){ti&&(Er&&(Er.value=String(yf())),ti.classList.add("visible"),ti.setAttribute("aria-hidden","false"))}function Gd(){ti&&(ti.classList.remove("visible"),ti.setAttribute("aria-hidden","true"))}function SI(){if(Xh(),!Jt)return;oi(Jt);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function MI(){yi&&(yi.classList.add("visible"),yi.setAttribute("aria-hidden","false"))}function Vd(){yi&&(yi.classList.remove("visible"),yi.setAttribute("aria-hidden","true"))}function wI(){v_();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const i=t.dataset.modalClose;(i==="hangar"||i==="shop"||i==="settings")&&t.addEventListener("click",Jo)});for(const t of Object.values(Uu))t&&t.addEventListener("click",i=>{i.target===t&&Jo()});Zo&&Zo.addEventListener("click",t=>{const i=t.target.closest("[data-sell]");if(i&&!i.disabled){Z2(i.dataset.sell);return}const s=t.target.closest("[data-buy]");if(s){if(s.disabled)return;const r=s.dataset.buy,a=s.dataset.pay;vn=r,a==="punkte"?K2(r):a==="obsidian"?J2(r):a==="shop"&&Kg();return}const o=t.target.closest("[data-select]");o&&(vn=o.dataset.select,vx(),yx())}),is&&(is.addEventListener("click",t=>{t.target===is&&gl()}),O2?.addEventListener("click",gl),U2?.addEventListener("click",eI));const e=$f().length;N2?.addEventListener("click",()=>{mi=(mi-1+e)%e,qh()}),D2?.addEventListener("click",()=>{mi=(mi+1)%e,qh()}),fl?.addEventListener("click",()=>{Kn&&(Kn.kind==="equip"?(jf(Kn.id),vs()):Kn.kind==="buyPunkte"?iI(Kn.id):Kn.kind==="buyObsidian"&&tI(Kn.id))}),Vh?.addEventListener("click",Kg),Vo?.addEventListener("click",t=>{const i=t.target.closest("[data-pack]");i&&dI(i.dataset.pack)}),Wh?.addEventListener("click",hI),pl?.addEventListener("click",lI),ml?.addEventListener("click",uI),document.getElementById("shop-golden-buy")?.addEventListener("click",aI),document.getElementById("shop-view-skins")?.addEventListener("click",oI),yi&&(yi.addEventListener("click",t=>{t.target===yi&&Vd()}),W2?.addEventListener("click",Vd),q2?.addEventListener("click",wI)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(yi?.classList.contains("visible")?(Vd(),t.stopImmediatePropagation()):is?.classList.contains("visible")?(gl(),t.stopImmediatePropagation()):ni?.classList.contains("visible")?(Hd(),t.stopImmediatePropagation()):ti?.classList.contains("visible")?(Gd(),t.stopImmediatePropagation()):Gn&&(Jo(),t.stopImmediatePropagation()))}),Ar?.addEventListener("input",()=>xI(parseInt(Ar.value,10))),V2?.addEventListener("click",_I),ni&&(ni.addEventListener("click",t=>{t.target===ni&&Hd()}),ni.querySelector("[data-settings-advanced-close]")?.addEventListener("click",Hd)),Mr?.addEventListener("input",Xh),wr?.addEventListener("input",Xh),Sa?.addEventListener("change",async()=>{const t=Sa.checked,i=await p2(t?"gyro":"touch"),s=t&&i;Sa.checked=s,iu&&(iu.hidden=!s),t&&i?(Ql(!1),Oi&&(Oi.checked=!1)):t||(Ql(!0),Oi&&(Oi.checked=!0))}),Er?.addEventListener("input",()=>{const t=parseFloat(Er.value);m2(t),q_(t)}),G2?.addEventListener("click",Ou),H2?.addEventListener("click",bI),ti&&(ti.addEventListener("click",t=>{t.target===ti&&Gd()}),ti.querySelector("[data-settings-gyro-advanced-close]")?.addEventListener("click",Gd)),F2?.addEventListener("click",Jo),k2?.addEventListener("click",SI),B2?.addEventListener("click",MI),Du(()=>{Gn==="hangar"&&vs(),Gn==="shop"&&_s(),Gn==="settings"&&_x()})})();const EI=Object.freeze(Object.defineProperty({__proto__:null,closeModal:Jo,closeModalSilently:mx,openModal:lo},Symbol.toStringTag,{value:"Module"})),AI=.4,TI=.08,Va=20,hs=Math.ceil(Ae.size/Va)+2,Qg=-8e3-Va,bx=Array.from({length:hs*hs},()=>[]);function Sx(n,e){return{cx:Math.floor((n-Qg)/Va),cz:Math.floor((e-Qg)/Va)}}function ec(n,e,t,i,s){const o=i+AI,r={x:n,z:t,r2:o*o,yMin:e,yMax:e+s+TI},a=Math.ceil(o/Va),{cx:c,cz:l}=Sx(n,t);for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){const f=c+d,m=l+u;f<0||m<0||f>=hs||m>=hs||bx[m*hs+f].push(r)}}function RI(n,e,t){const{cx:i,cz:s}=Sx(n,t);if(i<0||s<0||i>=hs||s>=hs)return!1;const o=bx[s*hs+i];for(let r=0;r<o.length;r++){const a=o[r];if(e<a.yMin||e>a.yMax)continue;const c=a.x-n,l=a.z-t;if(c*c+l*l<a.r2)return!0}return!1}const ss=1024,Js=427,e0=1.08,LI=700,CI=5e3,PI={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},es=document.getElementById("tp-minimap-canvas"),Ki=document.createElement("div"),ra=document.createElement("canvas"),ou=document.createElement("div"),Wc=document.createElement("div"),ur=document.createElement("div"),vl=document.createElement("div"),yl=document.createElement("span"),t0=document.getElementById("tp-island"),n0=document.getElementById("map-card"),II=6;let Yr=null,Wd=0,ru=!1,$h=0,jh=0,i0="",sp=0,qc=null;const qd=new I;function op(){if(qc)return qc;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const s of Lt)n=Math.min(n,s.x-s.bboxRadius),e=Math.max(e,s.x+s.bboxRadius),t=Math.min(t,s.z-s.bboxRadius),i=Math.max(i,s.z+s.bboxRadius);return qc={cx:(n+e)/2,cz:(t+i)/2,hw:(e-n)/2*e0,hh:(i-t)/2*e0},qc}function NI(n,e){let t=Lt[0].id,i=1/0;for(const s of Lt){const o=n-s.x,r=e-s.z,a=o*o+r*r;a<i&&(i=a,t=s.id)}return t}function DI(){!es||ru||(ru=!0,es.innerHTML="",Ki.className="minimap-stage",Ki.style.width=ss+"px",Ki.style.height=Js+"px",Ki.style.transformOrigin="0 0",ra.className="minimap-canvas",ra.width=ss,ra.height=Js,Ki.appendChild(ra),ou.className="minimap-runways",Ki.appendChild(ou),es.appendChild(Ki),Wc.className="minimap-overlay",ur.className="minimap-plane",ur.innerHTML='<span class="minimap-plane-tri"></span>',Wc.appendChild(ur),vl.className="minimap-compass",yl.className="minimap-compass-inner",yl.textContent="N",vl.appendChild(yl),Wc.appendChild(vl),es.appendChild(Wc),es.addEventListener("pointerdown",()=>{sp=performance.now()+CI,es.classList.add("is-overview")}),Mx(),Ex(),Yh(),window.addEventListener("resize",Yh))}function Mx(){if(!ru)return;const n=U1();if(!n)return;const e=ra.getContext("2d"),t=e.createImageData(ss,Js),{cx:i,cz:s,hw:o,hh:r}=op(),a=Ae.heightmap.metersPerUnit,c=Ae.waterLevel,l=Ae.heightmap.elevRange,u=Ae.heightmap.bbox,d=Ae.heightmap.center,f=Math.cos(d.lat*Math.PI/180),m=u.lonE-u.lonW,v=u.latN-u.latS,y=(d.lon-u.lonW)/m*(n.w-1),p=a/(111320*f)/m*(n.w-1),h=(u.latN-d.lat)/v*(n.h-1),_=a/111320/v*(n.h-1),g=l[1]-l[0],b=l[0],R={};for(const M of Lt)R[M.id]=!1;for(const M of ot)if(J.discoveredRunways[M.id]){const w=PI[M.id];w&&(R[w]=!0)}const E=n.data,A=n.w,k=n.h;for(let M=0;M<Js;M++){const w=s+(M/(Js-1)-.5)*2*r,W=Math.max(0,Math.min(k-1,Math.floor(h+w*_)))*A*4;for(let oe=0;oe<ss;oe++){const U=i+(oe/(ss-1)-.5)*2*o,q=Math.floor(y+U*p);let j,Z,z;if(q<0||q>=A)j=52,Z=92,z=118;else{const ae=W+q*4,ue=E[ae]<<8|E[ae+1],ye=(b+ue/65535*g)/a;if(ye<c+.05)j=52,Z=92,z=118;else{const te=NI(U,w),O=ye*a;R[te]?[j,Z,z]=OI(O):j=Z=z=UI(O)}}const Q=(M*ss+oe)*4;t.data[Q]=j,t.data[Q+1]=Z,t.data[Q+2]=z,t.data[Q+3]=255}}e.putImageData(t,0,0)}function OI(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function UI(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function wx(n,e){const{cx:t,cz:i,hw:s,hh:o}=op();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*o)+.5}}function Ex(){ou.innerHTML="";for(const n of ot){const e=!!J.landedRunways[n.id];if(!!!J.discoveredRunways[n.id]&&!e)continue;const{fracX:i,fracY:s}=wx(n.x,n.z);if(i<0||i>1||s<0||s>1)continue;const o=document.createElement("span");o.className=`minimap-runway ${e?"is-landed":"is-seen"}`,o.style.left=(i*100).toFixed(2)+"%",o.style.top=(s*100).toFixed(2)+"%",ou.appendChild(o)}}function rp(n){if(Pr(n.x,n.z)<Ae.waterLevel+.05)return null;let t=null,i=1/0;for(const s of Lt){const o=n.x-s.x,r=n.z-s.z,a=o*o+r*r;a<i&&(i=a,t=s)}return t}function Ax(){return performance.now()<sp}const kI="Islas Canarias";let s0="";function FI(n){if(!t0)return;const e=rp(n),i=Ax()||!e?kI:e.name;i!==s0&&(s0=i,t0.textContent=i)}function Yh(){const n=es.getBoundingClientRect();$h=n.width,jh=n.height}function BI(){return n0?!document.body.classList.contains("touch-mode")||n0.classList.contains("is-open"):!0}function zI(n){if(!ru||!n||(FI(n.position),!BI()))return;const e=ot.map(b=>J.discoveredRunways[b.id]?"1":"0").join("")+"|"+ot.map(b=>J.landedRunways[b.id]?"1":"0").join("");e!==i0&&(Mx(),Ex(),i0=e),($h<1||jh<1)&&Yh();const t=$h,i=jh;if(t<1||i<1)return;const s=t/2,o=i/2;qd.set(0,0,-1).applyQuaternion(n.quaternion);const r=Math.atan2(qd.x,-qd.z),a=performance.now(),c=a<sp,{hw:l}=op(),u=2*l/ss,d=t*u/LI,f=i/Js,m=c?f:d,v=Wd?Math.min(.1,(a-Wd)/1e3):0;if(Wd=a,Yr===null)Yr=m;else{const b=1-Math.exp(-v*II);Yr+=(m-Yr)*b}c||es.classList.remove("is-overview");const{fracX:y,fracY:p}=wx(n.position.x,n.position.z),h=y*ss,_=p*Js;Ki.style.transform=`translate(${s}px, ${o}px) rotate(${-r}rad) scale(${Yr}) translate(${-h}px, ${-_}px)`,ur.style.left=s+"px",ur.style.top=o+"px",ur.style.transform="translate(-50%, -50%)";const g=Math.min(t,i)*.43;vl.style.transform=`translate(-50%, -50%) rotate(${-r}rad) translateY(-${g}px)`,yl.style.transform=`rotate(${r}rad)`}const Zh=document.getElementById("landing-toast"),o0=document.getElementById("controls-hint"),Xd=document.getElementById("boost-grey-fill"),Xc=document.getElementById("boost-oneshot-tile"),r0=document.getElementById("test-mode-border"),Nn=document.getElementById("poi-toast"),gi=document.getElementById("poi-label"),Qs=document.getElementById("wrong-approach-toast");document.getElementById("tp-island");const HI={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},$d=document.getElementById("map-card-punkte"),jd=document.getElementById("map-card-highscore"),Yd=document.getElementById("map-card-landings"),a0=document.getElementById("map-card-landings-best"),ci=document.getElementById("score-chip"),c0=document.getElementById("score-chip-value"),Zd=document.getElementById("score-chip-mult");let Kh="",Jh="",Qh="",l0=0;function ef(n){return Math.round(n).toLocaleString(Jf())}function Tx(n){return n.toLocaleString(Jf(),{minimumFractionDigits:1,maximumFractionDigits:1})}let Vs=null,au=null,$c=null,cu=!1,Wa=null,u0=-1,d0=null,tf=null,h0=!1,Tr=!1;Du(()=>{tf=null,Jh="",Kh="",Qh="",Tr&&Qs&&(Qs.textContent=Se("hud.wrongApproach"))});function GI(n,e,t){const i=Se("hud.landingBonus",{bonus:e??no.landingBonus}),s=t?`<span class="mult-up">${Se("hud.multiplierUp",{mult:Tx(t)})}</span>`:"";Zh.innerHTML=`${Se("hud.landingToast",{id:n.id})}<span class="bonus">${i}</span>${s}`,Zh.classList.add("show")}function Rx(){Zh.classList.remove("show")}function f0(n,e,t,i){if(!gi)return;const s=t>0?Se("hud.poiRewardFull",{punkte:e,gofios:t}):Se("hud.poiRewardPunkte",{punkte:e}),o=i?Se(`booster.unlock.${i}`):"",r=o?`<span class="tier-up">${o}</span>`:"";gi.innerHTML=`<span class="poi-name">${n}</span><span class="reward">${s}</span>${r}`,gi.classList.add("show","prominent"),cu=!0,Wa=n,$c&&clearTimeout($c),$c=setTimeout(()=>{gi.classList.remove("prominent"),cu=!1,$c=null,gi.innerHTML=`<span class="poi-name">${n}</span>`},bt.activationToast.duration*1e3)}function ap(n){au=n,Nn.classList.add("show"),Vs&&clearTimeout(Vs),Vs=setTimeout(()=>{Nn.classList.remove("show"),Vs=null,au=null},bt.activationToast.duration*1e3)}function VI(n,e){Nn&&(Nn.innerHTML=`${n}<span class="reward">${Se("hud.discoveryReward",{diamonds:e})}</span><span class="tier-up">${Se("hud.discoveryTitle")}</span>`,Nn.classList.remove("compact"),ap("discovery"))}function WI(){Nn&&(Nn.innerHTML=Se("hud.runwayApproach"),Nn.classList.remove("compact"),ap("approach"))}function Kd(){!Nn||au!=="approach"||(Vs&&(clearTimeout(Vs),Vs=null),Nn.classList.remove("show"),au=null)}function qI(n,e){Nn&&(Nn.innerHTML=e?`${Se("hud.airportUnlockTitle")}<span class="reward">${Se("hud.airportUnlockBody",{name:n})}</span>`:Se("hud.airportUnlocked",{name:n}),Nn.classList.add("compact"),ap("unlock"))}function XI(){!Qs||Tr||(Qs.textContent=Se("hud.wrongApproach"),Qs.classList.add("show"),Tr=!0,nf())}function p0(){!Qs||!Tr||(Qs.classList.remove("show"),Tr=!1)}function $I(n){gi&&(cu||Tr||n!==Wa&&(gi.innerHTML=`<span class="poi-name">${n}</span>`,gi.classList.add("show"),Wa=n))}function nf(){gi&&(cu||Wa!==null&&(gi.classList.remove("show"),Wa=null))}function jI(){const n=ep()==="gyro"?"hud.hintPrelaunchGyro":"hud.hintPrelaunch",e=D.flightState===De.INTRO||D.flightState===De.CRASHING?"":D.flightState===De.PRELAUNCH?Se(n):D.flightState===De.TAKEOFF_ROLL?Se("hud.hintTakeoff"):Se("hud.hintNormal");e!==tf&&(o0.textContent=e,tf=e);const t=D.flightState===De.PRELAUNCH;t!==h0&&(o0.classList.toggle("hint-pinned",t),h0=t),KI(),JI(),QI(),ZI(),YI(),_R()}function YI(){if(!ci)return;const n=D.flightState,e=xr(),t=Hf(),i=Math.round(D.flightPunkte),s=n===De.TAKEOFF_ROLL||n===De.FLYING||n===De.LANDING_ROLL||n===De.LANDED||n===De.CRASHING,o=!D.tutorial&&(s||n===De.PRELAUNCH&&(e>1||t||i>0)),r=e>1||t,a=`${o}|${i}|${r?e:0}|${t}`;if(a===Qh)return;Qh=a,o&&i-l0>=Xt.chipPulseMinDelta&&(ci.classList.remove("pulse"),ci.offsetWidth,ci.classList.add("pulse")),l0=i,ci.classList.toggle("show",o),ci.classList.toggle("golden",t),c0&&(c0.textContent=ef(i)),Zd&&(Zd.hidden=!r,r&&(Zd.textContent="×"+Tx(e)));const c=t?0:hR();if(c>0){const l=Math.round(244+-12*c),u=Math.round(241+-63*c),d=Math.round(232+-174*c);ci.style.borderColor=`rgba(${l}, ${u}, ${d}, ${(.6+.3*c).toFixed(2)})`,ci.style.boxShadow=`var(--hud-scrim-shadow), 0 0 ${Math.round(4+16*c)}px rgba(232, 178, 58, ${(.6*c).toFixed(2)})`}else ci.style.borderColor="",ci.style.boxShadow=""}function ZI(){if(!$d&&!jd&&!Yd)return;const n=Math.round(D.flightPunkte|0),e=Math.round(J.bestFlightPunkte|0),t=D.sessionLandings|0,i=J.bestSessionLandings|0,s=`${n}|${e}|${t}|${i}`;s!==Jh&&(Jh=s,$d&&($d.textContent=ef(n)),jd&&(jd.textContent=ef(e)),Yd&&(Yd.textContent=t.toString()),a0&&(a0.textContent=i.toString()))}function KI(){if(Xd&&(Xd.style.width=(D.boostFuelGrey*100).toFixed(1)+"%",Xd.style.opacity=D.greyActive?"1":"0.7"),!Xc)return;const n=io(),e=St.oneShot.tiers[n]||St.oneShot.tiers[0];if(n!==u0){Xc.hidden=n===0;const s="#"+(e.color|0).toString(16).padStart(6,"0");Xc.style.setProperty("--boost-fill",s),u0=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,D.boostFuelOneshot)))*100).toFixed(1)+"%";Xc.style.setProperty("--drain-pct",i)}function JI(){r0&&J.testMode!==d0&&(r0.classList.toggle("visible",!!J.testMode),d0=J.testMode)}function QI(){const n=Ax(),e=rp(he.position),t=n||!e,i={peak:0,city:0,landscape:0,beach:0},s={peak:0,city:0,landscape:0,beach:0};if(t)for(const a of Object.keys(ju))for(const c of ju[a])i[c.type]++,J.exploredPOIs[c.id]&&s[c.type]++;else for(const a of ju[e.id]||[])i[a.type]++,J.exploredPOIs[a.id]&&s[a.type]++;const r=`${t?"arch":e.id}|${s.peak}/${i.peak}|${s.city}/${i.city}|${s.landscape}/${i.landscape}|${s.beach}/${i.beach}`;if(r!==Kh){Kh=r;for(const a of["peak","city","landscape","beach"]){const c=HI[a];if(!c)continue;const l=s[a],u=i[a];u>0&&l>=u?c.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':c.textContent=`${l} / ${u}`}}}const Un=new I(0,0,-1),jc=new I,m0=new I,It=new I,qt=new I,hi=new I,g0=new I,Zr=new I(0,0,-1),Jd=new I;let Qd=!1;function Lx(){switch(D.flightState){case De.PRELAUNCH:case De.LANDED:return 0;case De.TAKEOFF_ROLL:case De.LANDING_ROLL:return Gi.clamp(D.speed/ia.takeoffSpeed,0,1);default:return 1}}function Ma(n,e,t){return n+(e-n)*t}let eh=0;function Kr(n,e){return 1-Math.exp(-e/Math.max(n,1e-4))}function v0(n){const e=1-n;return 1-e*e*e}function eN(n){return qt.set(0,0,-1).applyQuaternion(he.quaternion),It.set(qt.x,0,qt.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize(),hi.set(0,Yt.height,0),n.copy(he.position).addScaledVector(It,-6.5).add(hi)}function tN(n){if(D.flightState===De.INTRO&&D.introStartCamPos){const u=v0(Math.min(1,D.introT));eN(g0),Wt.position.lerpVectors(D.introStartCamPos,g0,u),Wt.up.set(0,1,0),Wt.lookAt(he.position);return}if(D.flightState!==De.CRASHING&&(Qd=!1),D.flightState===De.LANDED){qt.set(0,0,-1).applyQuaternion(he.quaternion),Un.copy(qt),It.set(qt.x,0,qt.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize(),hi.set(0,Yt.runwayHeight,0),Wt.position.copy(he.position).addScaledVector(It,-3).add(hi),Wt.up.set(0,1,0),Wt.lookAt(he.position);return}if(D.flightState===De.CRASHING){Qd||(qt.set(0,0,-1).applyQuaternion(he.quaternion),Zr.set(qt.x,0,qt.z),Zr.lengthSq()<1e-4&&Zr.set(0,0,-1),Zr.normalize(),Jd.copy(he.position),Qd=!0);const u=v0(Math.min(1,D.crashT)),d=Yt.distance+rl.camPullback*u;hi.set(0,Yt.height+rl.camRise*u,0),jc.copy(Jd).addScaledVector(Zr,-d).add(hi),Wt.position.lerp(jc,Kr(rl.camTau,n)),Wt.up.set(0,1,0),Wt.lookAt(Jd);return}qt.set(0,0,-1).applyQuaternion(he.quaternion);const e=Kr(Yt.yawTau,n),t=Kr(Yt.pitchTau,n);Un.x+=(qt.x-Un.x)*e,Un.z+=(qt.z-Un.z)*e,Un.y+=(qt.y-Un.y)*t,Un.normalize(),It.set(Un.x,0,Un.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize();const i=D.greyActive||D.oneShotActive?1:0,s=Kr(St.camPushbackTau,n);eh+=(i-eh)*s;const o=Lx(),r=Ma(Yt.runwayDistance,Yt.distance,o),a=Ma(Yt.runwayHeight,Yt.height,o),c=Ma(Yt.runwayLookAhead,Yt.lookAhead,o);hi.set(0,a,0),jc.copy(he.position).addScaledVector(It,-(r+St.camPushback*eh)).add(hi);const l=Kr(Yt.posTau,n);Wt.position.lerp(jc,l),m0.copy(he.position).addScaledVector(Un,c),Wt.up.set(0,1,0),Wt.lookAt(m0)}function ku(){qt.set(0,0,-1).applyQuaternion(he.quaternion),Un.copy(qt),It.set(qt.x,0,qt.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize();const n=Lx(),e=Ma(Yt.runwayDistance,Yt.distance,n),t=Ma(Yt.runwayHeight,Yt.height,n);hi.set(0,t,0),Wt.position.copy(he.position).addScaledVector(It,-e).add(hi)}const cp={value:0},Jr=he.getObjectByName("paperBody");if(Jr){const n=Jr.geometry,e=n.getAttribute("position"),t=e.count/3,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3);for(let o=0;o<t;o++){const r=o*3,a=r+1,c=r+2,l=(e.getX(r)+e.getX(a)+e.getX(c))/3,u=(e.getY(r)+e.getY(a)+e.getY(c))/3,d=(e.getZ(r)+e.getZ(a)+e.getZ(c))/3,f=Math.random(),m=Math.random(),v=Math.random();for(const y of[r,a,c])i[y*3]=l,i[y*3+1]=u,i[y*3+2]=d,s[y*3]=f,s[y*3+1]=m,s[y*3+2]=v}n.setAttribute("aCentroid",new Nt(i,3)),n.setAttribute("aRand",new Nt(s,3)),Jr.material.onBeforeCompile=o=>{o.uniforms.uShatter=cp,o.vertexShader=`attribute vec3 aCentroid;
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
         }`)},Jr.material.customProgramCacheKey=()=>"paperShatter",Jr.material.needsUpdate=!0}let ys=null;function nN(){ys=[],he.traverse(n=>{if(!n.material)return;const e=Array.isArray(n.material)?n.material:[n.material];for(const t of e)t.userData.crashBaseOpacity=t.opacity,ys.push(t)})}function iN(){ys||nN();for(const n of ys)n.transparent=!0}function sN(n){if(cp.value=n,!ys)return;const e=Math.max(0,1-n*1.15);for(const t of ys)t.opacity=t.userData.crashBaseOpacity*e}function oN(){if(cp.value=0,!!ys)for(const n of ys)n.opacity=n.userData.crashBaseOpacity}let xl=null;const li=new I,y0=new I,x0=new I,_0=new Ct,b0=new Wn,Yc=new I,S0=new I,rN=new I;function Fu(n,e=rN){return e.set(0,0,-1).applyEuler(new Wn(0,n,0))}function lp(n){const e=Fu(n.activeHeading);he.position.set(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),he.quaternion.setFromEuler(new Wn(0,n.activeHeading,0)),D.speed=0,D.flightState=De.PRELAUNCH,D.currentRunway=n,D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,D.greyActive=!1,D.oneShotActive=!1,mf(),wu(),Ou(),ku()}const Cx=document.getElementById("crash");let sf=null;function aN(n){sf=n}function Px(){D.flightPunkte>J.bestFlightPunkte&&(J.bestFlightPunkte=D.flightPunkte)}function _l(){if(D.tutorial){sf&&sf("crash");return}D.flightState===De.CRASHING||D.flightState===De.CRASHED||(D.speed=0,D.flightState=De.CRASHING,D.crashT=0,D.sessionLandings=0,Ey(),pR(),Px(),Dt(),iN())}function cN(n){D.crashT+=n/rl.duration,sN(Math.min(1,D.crashT)),D.crashT>=1&&(D.alive=!1,D.flightState=De.CRASHED,Cx.classList.add("visible"))}let M0=!1;function Bu(n={}){n.runwayId&&n.runwayId!==J.checkpointRunwayId&&(J.checkpointRunwayId=n.runwayId,Dt());const e=J.checkpointRunwayId??rs,t=ot.find(s=>s.id===e)??ot[0],i=n.forceIntro||!J.introPlayed;if(y_(),Ey(),y2(),_2(),w2(),oN(),Rx(),Cx.classList.remove("visible"),lp(t),M0||(py(t),M0=!0),i){const s=new I(0,0,-1).applyQuaternion(he.quaternion),o=new I(s.x,0,s.z).normalize();D.introStartCamPos=he.position.clone().addScaledVector(o,-4e3).add(new I(0,iv.startHeight,0)),D.introT=0,D.flightState=De.INTRO,Mt.fog&&(xl=Mt.fog,Mt.fog=null)}}function lN(){const n=yo();return n.pitch!==0||n.roll!==0||n.brake}function Ix(n){if(D.refillT>=1)return;D.refillT=Math.min(1,D.refillT+n/St.refillDuration);const e=D.refillT;D.boostFuelGrey=D.refillStartGrey+(1-D.refillStartGrey)*e,D.boostFuelOneshot=D.refillStartOneshot+(1-D.refillStartOneshot)*e}function uN(){D.refillT=1,D.boostFuelGrey=1,D.boostFuelOneshot=1}function dN(n){const e=yo();w_()&&io()>0&&(J.testMode&&D.oneShotActive?D.oneShotActive=!1:!D.oneShotActive&&D.boostFuelOneshot>0&&(D.oneShotActive=!0)),D.greyActive=e.boost&&D.boostFuelGrey>0;let t=0,i=0;if(D.oneShotActive){const s=St.oneShot.tiers[io()]||St.oneShot.tiers[0];D.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),D.boostFuelOneshot<=0&&(D.boostFuelOneshot=J.testMode?1:0,D.oneShotActive=J.testMode),D.oneShotActive&&(t+=s.speedBonus,i+=s.accelRate)}if(D.greyActive){const s=St.grey;D.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),D.boostFuelGrey<=0?(D.boostFuelGrey=0,D.greyActive=!1):(t+=s.speedBonus,i+=s.accelRate)}return!D.greyActive&&!D.oneShotActive&&D.boostFuelGrey<1&&(D.boostFuelGrey=Math.min(1,D.boostFuelGrey+n/St.grey.rechargeTime)),{speedBonus:t,accelBonus:i}}function hN(n){lN()?D.introT=1:D.introT+=n/iv.duration,D.introT>=1&&(D.introT=0,D.introStartCamPos=null,D.flightState=De.PRELAUNCH,J.introPlayed=!0,wu(),Ou(),xl&&(Mt.fog=xl,xl=null),ku())}function fN(n){Ix(n);const e=E_();(ep()!=="gyro"&&yo().pitch>0||e)&&(D.flightState=De.TAKEOFF_ROLL,D.takeoffTime=0)}function pN(n){const e=D.currentRunway;D.takeoffTime+=n,Ix(n);const t=ia.takeoffSpeed,i=ia.linearShare,s=1-i,r=e.length*ia.liftoffFraction/(t*(i/2+s/3)),a=Math.min(1,D.takeoffTime/r);D.speed=t*(i*a+s*a*a);const c=Fu(e.activeHeading);he.position.x+=c.x*D.speed*n,he.position.z+=c.z*D.speed*n,he.position.y=e.elevation+.22,he.quaternion.setFromEuler(new Wn(0,e.activeHeading,0)),a>=1&&(he.rotateX(ia.pitchUpAtLiftoff),D.flightState=De.FLYING,D.currentRunway=null,D.postLiftCooldown=1.2,uN())}const w0=200,mN=250;function gN(n){for(const e of ot){if(J.discoveredRunways[e.id])continue;const t=n.x-e.x,i=n.z-e.z;if(t*t+i*i>w0*w0)continue;const s=n.y-e.elevation;s<-50||s>mN||(J.discoveredRunways[e.id]=!0,Dt())}}function vN(n){const e=dN(n),t=yo(),i=t.pitch,s=t.roll,o=Math.max(0,sn.stallSpeed-D.speed)/sn.stallSpeed,r=1-o*(1-sn.stallAuthority),a=i*r;li.set(0,0,-1).applyQuaternion(he.quaternion);const c=Math.asin(Gi.clamp(li.y,-1,1));let l=a*sn.pitchRate*n;l>0&&(l=Math.min(l,Math.max(0,sn.maxClimbPitch-c))),he.rotateX(l),he.rotateZ(-s*sn.rollRate*n),li.set(0,0,-1).applyQuaternion(he.quaternion),y0.set(1,0,0).applyQuaternion(he.quaternion),x0.set(0,1,0).applyQuaternion(he.quaternion);const u=Math.atan2(y0.y,x0.y);he.rotateOnWorldAxis(Oh,Math.sin(u)*sn.turnFactor*n),o>.01&&(Yc.set(li.x,0,li.z),Yc.lengthSq()>1e-4&&(Yc.normalize(),S0.crossVectors(Yc,Oh).normalize(),he.rotateOnWorldAxis(S0,-o*sn.stallPitchRate*n))),li.set(0,0,-1).applyQuaternion(he.quaternion);const d=li.y;D.speed-=d*sn.speedFromPitch*n,D.speed-=sn.drag*n,D.brakeAmount>.01&&(D.speed-=D.brakeAmount*Sl.force*n);const f=xy(he.position.x,he.position.y,he.position.z);D.speed+=f*.13*n,D.inThermal=f>.5;const m=sn.maxSpeed+e.speedBonus;e.accelBonus>0&&D.speed<m&&(D.speed=Math.min(m,D.speed+e.accelBonus*n)),D.speed=Math.max(sn.minSpeed,Math.min(m,D.speed));const v=he.position.x,y=he.position.z;he.position.addScaledVector(li,D.speed*n);const p=sn.sinkRate*(1+o*sn.stallSink);if(he.position.y-=p*n,he.position.y+=f*n,!D.tutorial){const b=he.position.x-v,R=he.position.z-y;Mu(Math.sqrt(b*b+R*R))}const h=Ae.size/2-30;if(he.position.x>h&&(he.position.x=h),he.position.x<-h&&(he.position.x=-h),he.position.z>h&&(he.position.z=h),he.position.z<-h&&(he.position.z=-h),D.postLiftCooldown>0){D.postLiftCooldown-=n;return}if(!D.tutorial){gN(he.position);const b=Math.atan2(-li.x,-li.z),R=c1(he.position,b);if(R){D.flightState=De.LANDING_ROLL,D.currentRunway=R,he.position.y=R.elevation+.22;return}}const _=l1(he.position);if(_&&he.position.y-_.elevation<no.rollingHeight){_l();return}const g=Rt(he.position.x,he.position.z);(he.position.y<Math.max(g+.4,Ae.waterLevel+.4)||RI(he.position.x,he.position.y,he.position.z))&&_l()}function yN(n){const e=D.currentRunway;D.speed=Math.max(0,D.speed-no.brakeForce*n);const t=Fu(e.activeHeading),i=he.position.x,s=he.position.z;he.position.x+=t.x*D.speed*n,he.position.z+=t.z*D.speed*n,he.position.y=e.elevation+.22;const o=he.position.x-i,r=he.position.z-s;Mu(Math.sqrt(o*o+r*r)),b0.set(0,e.activeHeading,0),_0.setFromEuler(b0),he.quaternion.slerp(_0,.22);const a=he.position.x-e.x,c=he.position.z-e.z,l=a*Math.sin(e.heading)+c*Math.cos(e.heading);if(Math.abs(l)>e.length*.5){_l();return}D.speed<no.landingSpeed&&xN(e)}function xN(n){D.speed=0,D.flightState=De.LANDED,D.landedToastTimer=sv.toastDuration,D.cinematicT=0,D.cinematicFromPos=he.position.clone(),D.cinematicFromQuat=he.quaternion.clone();const e=n.activeHeading,t=Fu(e,new I);D.cinematicToPos=new I(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),D.cinematicToQuat=new Ct().setFromEuler(new Wn(0,e,0)),J.landings+=1;const i=fR(n.id),s=Math.round(no.landingBonus*xr());Mu(s),J.checkpointRunwayId=n.id,py(n);const o=!J.landedRunways[n.id],r=Object.keys(J.landedRunways).some(a=>a!==rs&&J.landedRunways[a]);J.landedRunways[n.id]=!0,J.discoveredRunways[n.id]=!0,D.sessionLandings+=1,D.sessionLandings>J.bestSessionLandings&&(J.bestSessionLandings=D.sessionLandings),Px(),Dt(),GI(n,s,i),o&&n.id!==rs&&(D.pendingAirportUnlock={id:n.id,full:!r})}function _N(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function bN(n){if(D.landedToastTimer>0){D.landedToastTimer-=n;return}if(D.cinematicT+=n/sv.tweenDuration,D.cinematicT>=1){he.position.copy(D.cinematicToPos),he.quaternion.copy(D.cinematicToQuat),D.cinematicT=0,D.cinematicFromPos=null,D.cinematicToPos=null,D.cinematicFromQuat=null,D.cinematicToQuat=null,D.flightState=De.PRELAUNCH,mf(),wu(),Ou(),D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,ku(),Rx(),D.pendingAirportUnlock&&(qI(D.pendingAirportUnlock.id,D.pendingAirportUnlock.full),D.pendingAirportUnlock=null);return}const e=_N(D.cinematicT);he.position.lerpVectors(D.cinematicFromPos,D.cinematicToPos,e),he.quaternion.copy(D.cinematicFromQuat)}function SN(n){if(D.alive&&!D.paused)switch(D.flightState){case De.INTRO:return hN(n);case De.PRELAUNCH:return fN(n);case De.TAKEOFF_ROLL:return pN(n);case De.FLYING:return vN(n);case De.LANDING_ROLL:return yN(n);case De.LANDED:return bN(n);case De.CRASHING:return cN(n);case De.CRASHED:return}}const MN=Ut;class lu extends Nf{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const o=this,r=new JT(o.manager);r.setPath(o.path),r.setRequestHeader(o.requestHeader),r.setWithCredentials(o.withCredentials),r.load(e,function(a){try{t(o.parse(a))}catch(c){s?s(c):console.error(c),o.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(O,N){if(O.nodeType!==1)return;const L=b(O);let T=!1,ee=null;switch(O.nodeName){case"svg":N=v(O,N);break;case"style":o(O);break;case"g":N=v(O,N);break;case"path":N=v(O,N),O.hasAttribute("d")&&(ee=s(O));break;case"rect":N=v(O,N),ee=c(O);break;case"polygon":N=v(O,N),ee=l(O);break;case"polyline":N=v(O,N),ee=u(O);break;case"circle":N=v(O,N),ee=d(O);break;case"ellipse":N=v(O,N),ee=f(O);break;case"line":N=v(O,N),ee=m(O);break;case"defs":T=!0;break;case"use":N=v(O,N);const de=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=O.viewportElement.getElementById(de);P?i(P,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}ee&&(N.fill!==void 0&&N.fill!=="none"&&ee.color.setStyle(N.fill,MN),E(ee,ue),W.push(ee),ee.userData={node:O,style:N});const ce=O.childNodes;for(let X=0;X<ce.length;X++){const de=ce[X];T&&de.nodeName!=="style"&&de.nodeName!=="defs"||i(de,N)}L&&(U.pop(),U.length>0?ue.copy(U[U.length-1]):ue.identity())}function s(O){const N=new Rs,L=new pe,T=new pe,ee=new pe;let ce=!0,X=!1;const de=O.getAttribute("d");if(de===""||de==="none")return null;const P=de.match(/[a-df-z][^a-df-z]*/ig);for(let ne=0,B=P.length;ne<B;ne++){const Y=P[ne],$=Y.charAt(0),fe=Y.slice(1).trim();ce===!0&&(X=!0,ce=!1);let F;switch($){case"M":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x=F[x+0],L.y=F[x+1],T.x=L.x,T.y=L.y,x===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),x===0&&ee.copy(L);break;case"H":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.x=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"V":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.y=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"L":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x=F[x+0],L.y=F[x+1],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"C":F=p(fe);for(let x=0,S=F.length;x<S;x+=6)N.bezierCurveTo(F[x+0],F[x+1],F[x+2],F[x+3],F[x+4],F[x+5]),T.x=F[x+2],T.y=F[x+3],L.x=F[x+4],L.y=F[x+5],x===0&&X===!0&&ee.copy(L);break;case"S":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.bezierCurveTo(y(L.x,T.x),y(L.y,T.y),F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],L.x=F[x+2],L.y=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"Q":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.quadraticCurveTo(F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],L.x=F[x+2],L.y=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"T":F=p(fe);for(let x=0,S=F.length;x<S;x+=2){const G=y(L.x,T.x),me=y(L.y,T.y);N.quadraticCurveTo(G,me,F[x+0],F[x+1]),T.x=G,T.y=me,L.x=F[x+0],L.y=F[x+1],x===0&&X===!0&&ee.copy(L)}break;case"A":F=p(fe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==L.x&&F[x+6]==L.y)continue;const G=L.clone();L.x=F[x+5],L.y=F[x+6],T.x=L.x,T.y=L.y,r(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,L),x===0&&X===!0&&ee.copy(L)}break;case"m":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x+=F[x+0],L.y+=F[x+1],T.x=L.x,T.y=L.y,x===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),x===0&&ee.copy(L);break;case"h":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.x+=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"v":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.y+=F[x],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"l":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x+=F[x+0],L.y+=F[x+1],T.x=L.x,T.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&ee.copy(L);break;case"c":F=p(fe);for(let x=0,S=F.length;x<S;x+=6)N.bezierCurveTo(L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3],L.x+F[x+4],L.y+F[x+5]),T.x=L.x+F[x+2],T.y=L.y+F[x+3],L.x+=F[x+4],L.y+=F[x+5],x===0&&X===!0&&ee.copy(L);break;case"s":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.bezierCurveTo(y(L.x,T.x),y(L.y,T.y),L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3]),T.x=L.x+F[x+0],T.y=L.y+F[x+1],L.x+=F[x+2],L.y+=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"q":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.quadraticCurveTo(L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3]),T.x=L.x+F[x+0],T.y=L.y+F[x+1],L.x+=F[x+2],L.y+=F[x+3],x===0&&X===!0&&ee.copy(L);break;case"t":F=p(fe);for(let x=0,S=F.length;x<S;x+=2){const G=y(L.x,T.x),me=y(L.y,T.y);N.quadraticCurveTo(G,me,L.x+F[x+0],L.y+F[x+1]),T.x=G,T.y=me,L.x=L.x+F[x+0],L.y=L.y+F[x+1],x===0&&X===!0&&ee.copy(L)}break;case"a":F=p(fe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==0&&F[x+6]==0)continue;const G=L.clone();L.x+=F[x+5],L.y+=F[x+6],T.x=L.x,T.y=L.y,r(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,L),x===0&&X===!0&&ee.copy(L)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(L.copy(ee),N.currentPath.currentPoint.copy(L),ce=!0);break;default:console.warn(Y)}X=!1}return N}function o(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){const L=O.sheet.cssRules[N];if(L.type!==1)continue;const T=L.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<T.length;ee++){const ce=Object.fromEntries(Object.entries(L.style).filter(([,X])=>X!==""));oe[T[ee]]=Object.assign(oe[T[ee]]||{},ce)}}}function r(O,N,L,T,ee,ce,X,de){if(N==0||L==0){O.lineTo(de.x,de.y);return}T=T*Math.PI/180,N=Math.abs(N),L=Math.abs(L);const P=(X.x-de.x)/2,ne=(X.y-de.y)/2,B=Math.cos(T)*P+Math.sin(T)*ne,Y=-Math.sin(T)*P+Math.cos(T)*ne;let $=N*N,fe=L*L;const F=B*B,x=Y*Y,S=F/$+x/fe;if(S>1){const ve=Math.sqrt(S);N=ve*N,L=ve*L,$=N*N,fe=L*L}const G=$*x+fe*F,me=($*fe-G)/G;let ge=Math.sqrt(Math.max(0,me));ee===ce&&(ge=-ge);const le=ge*N*Y/L,Te=-ge*L*B/N,xe=Math.cos(T)*le-Math.sin(T)*Te+(X.x+de.x)/2,Re=Math.sin(T)*le+Math.cos(T)*Te+(X.y+de.y)/2,Ie=a(1,0,(B-le)/N,(Y-Te)/L),Fe=a((B-le)/N,(Y-Te)/L,(-B-le)/N,(-Y-Te)/L)%(Math.PI*2);O.currentPath.absellipse(xe,Re,N,L,Ie,Ie+Fe,ce===0,T)}function a(O,N,L,T){const ee=O*L+N*T,ce=Math.sqrt(O*O+N*N)*Math.sqrt(L*L+T*T);let X=Math.acos(Math.max(-1,Math.min(1,ee/ce)));return O*T-N*L<0&&(X=-X),X}function c(O){const N=g(O.getAttribute("x")||0),L=g(O.getAttribute("y")||0),T=g(O.getAttribute("rx")||O.getAttribute("ry")||0),ee=g(O.getAttribute("ry")||O.getAttribute("rx")||0),ce=g(O.getAttribute("width")),X=g(O.getAttribute("height")),de=1-.551915024494,P=new Rs;return P.moveTo(N+T,L),P.lineTo(N+ce-T,L),(T!==0||ee!==0)&&P.bezierCurveTo(N+ce-T*de,L,N+ce,L+ee*de,N+ce,L+ee),P.lineTo(N+ce,L+X-ee),(T!==0||ee!==0)&&P.bezierCurveTo(N+ce,L+X-ee*de,N+ce-T*de,L+X,N+ce-T,L+X),P.lineTo(N+T,L+X),(T!==0||ee!==0)&&P.bezierCurveTo(N+T*de,L+X,N,L+X-ee*de,N,L+X-ee),P.lineTo(N,L+ee),(T!==0||ee!==0)&&P.bezierCurveTo(N,L+ee*de,N+T*de,L,N+T,L),P}function l(O){function N(ce,X,de){const P=g(X),ne=g(de);ee===0?T.moveTo(P,ne):T.lineTo(P,ne),ee++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Rs;let ee=0;return O.getAttribute("points").replace(L,N),T.currentPath.autoClose=!0,T}function u(O){function N(ce,X,de){const P=g(X),ne=g(de);ee===0?T.moveTo(P,ne):T.lineTo(P,ne),ee++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Rs;let ee=0;return O.getAttribute("points").replace(L,N),T.currentPath.autoClose=!1,T}function d(O){const N=g(O.getAttribute("cx")||0),L=g(O.getAttribute("cy")||0),T=g(O.getAttribute("r")||0),ee=new sr;ee.absarc(N,L,T,0,Math.PI*2);const ce=new Rs;return ce.subPaths.push(ee),ce}function f(O){const N=g(O.getAttribute("cx")||0),L=g(O.getAttribute("cy")||0),T=g(O.getAttribute("rx")||0),ee=g(O.getAttribute("ry")||0),ce=new sr;ce.absellipse(N,L,T,ee,0,Math.PI*2);const X=new Rs;return X.subPaths.push(ce),X}function m(O){const N=g(O.getAttribute("x1")||0),L=g(O.getAttribute("y1")||0),T=g(O.getAttribute("x2")||0),ee=g(O.getAttribute("y2")||0),ce=new Rs;return ce.moveTo(N,L),ce.lineTo(T,ee),ce.currentPath.autoClose=!1,ce}function v(O,N){N=Object.assign({},N);let L={};if(O.hasAttribute("class")){const X=O.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<X.length;de++)L=Object.assign(L,oe["."+X[de]])}O.hasAttribute("id")&&(L=Object.assign(L,oe["#"+O.getAttribute("id")]));function T(X,de,P){P===void 0&&(P=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),O.hasAttribute(X)&&(N[de]=P(O.getAttribute(X))),L[X]&&(N[de]=P(L[X])),O.style&&O.style[X]!==""&&(N[de]=P(O.style[X]))}function ee(X){return Math.max(0,Math.min(1,g(X)))}function ce(X){return Math.max(0,g(X))}return T("fill","fill"),T("fill-opacity","fillOpacity",ee),T("fill-rule","fillRule"),T("opacity","opacity",ee),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",ee),T("stroke-width","strokeWidth",ce),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",ce),T("visibility","visibility"),N}function y(O,N){return O-(N-O)}function p(O,N,L){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const T={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,ce=1,X=2,de=3;let P=ee,ne=!0,B="",Y="";const $=[];function fe(G,me,ge){const le=new SyntaxError('Unexpected character "'+G+'" at index '+me+".");throw le.partial=ge,le}function F(){B!==""&&(Y===""?$.push(Number(B)):$.push(Number(B)*Math.pow(10,Number(Y)))),B="",Y=""}let x;const S=O.length;for(let G=0;G<S;G++){if(x=O[G],Array.isArray(N)&&N.includes($.length%L)&&T.FLAGS.test(x)){P=ce,B=x,F();continue}if(P===ee){if(T.WHITESPACE.test(x))continue;if(T.DIGIT.test(x)||T.SIGN.test(x)){P=ce,B=x;continue}if(T.POINT.test(x)){P=X,B=x;continue}T.COMMA.test(x)&&(ne&&fe(x,G,$),ne=!0)}if(P===ce){if(T.DIGIT.test(x)){B+=x;continue}if(T.POINT.test(x)){B+=x,P=X;continue}if(T.EXP.test(x)){P=de;continue}T.SIGN.test(x)&&B.length===1&&T.SIGN.test(B[0])&&fe(x,G,$)}if(P===X){if(T.DIGIT.test(x)){B+=x;continue}if(T.EXP.test(x)){P=de;continue}T.POINT.test(x)&&B[B.length-1]==="."&&fe(x,G,$)}if(P===de){if(T.DIGIT.test(x)){Y+=x;continue}if(T.SIGN.test(x)){if(Y===""){Y+=x;continue}Y.length===1&&T.SIGN.test(Y)&&fe(x,G,$)}}T.WHITESPACE.test(x)?(F(),P=ee,ne=!1):T.COMMA.test(x)?(F(),P=ee,ne=!0):T.SIGN.test(x)?(F(),P=ce,B=x):T.POINT.test(x)?(F(),P=X,B=x):fe(x,G,$)}return F(),$}const h=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(O){let N="px";if(typeof O=="string"||O instanceof String)for(let T=0,ee=h.length;T<ee;T++){const ce=h[T];if(O.endsWith(ce)){N=ce,O=O.substring(0,O.length-ce.length);break}}let L;return N==="px"&&t.defaultUnit!=="px"?L=_.in[t.defaultUnit]/t.defaultDPI:(L=_[N][t.defaultUnit],L<0&&(L=_[N].in*t.defaultDPI)),L*parseFloat(O)}function b(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const N=R(O);return U.length>0&&N.premultiply(U[U.length-1]),ue.copy(N),U.push(N),N}function R(O){const N=new He,L=q;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const T=g(O.getAttribute("x")),ee=g(O.getAttribute("y"));N.translate(T,ee)}if(O.hasAttribute("transform")){const T=O.getAttribute("transform").split(")");for(let ee=T.length-1;ee>=0;ee--){const ce=T[ee].trim();if(ce==="")continue;const X=ce.indexOf("("),de=ce.length;if(X>0&&X<de){const P=ce.slice(0,X),ne=p(ce.slice(X+1));switch(L.identity(),P){case"translate":if(ne.length>=1){const B=ne[0];let Y=0;ne.length>=2&&(Y=ne[1]),L.translate(B,Y)}break;case"rotate":if(ne.length>=1){let B=0,Y=0,$=0;B=ne[0]*Math.PI/180,ne.length>=3&&(Y=ne[1],$=ne[2]),j.makeTranslation(-Y,-$),Z.makeRotation(B),z.multiplyMatrices(Z,j),j.makeTranslation(Y,$),L.multiplyMatrices(j,z)}break;case"scale":if(ne.length>=1){const B=ne[0];let Y=B;ne.length>=2&&(Y=ne[1]),L.scale(B,Y)}break;case"skewX":ne.length===1&&L.set(1,Math.tan(ne[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ne.length===1&&L.set(1,0,0,Math.tan(ne[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ne.length===6&&L.set(ne[0],ne[2],ne[4],ne[1],ne[3],ne[5],0,0,1);break}}N.premultiply(L)}}return N}function E(O,N){function L(X){ae.set(X.x,X.y,1).applyMatrix3(N),X.set(ae.x,ae.y)}function T(X){const de=X.xRadius,P=X.yRadius,ne=Math.cos(X.aRotation),B=Math.sin(X.aRotation),Y=new I(de*ne,de*B,0),$=new I(-P*B,P*ne,0),fe=Y.applyMatrix3(N),F=$.applyMatrix3(N),x=q.set(fe.x,F.x,0,fe.y,F.y,0,0,0,1),S=j.copy(x).invert(),ge=Z.copy(S).transpose().multiply(S).elements,le=V(ge[0],ge[1],ge[4]),Te=Math.sqrt(le.rt1),xe=Math.sqrt(le.rt2);if(X.xRadius=1/Te,X.yRadius=1/xe,X.aRotation=Math.atan2(le.sn,le.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ie=j.set(Te,0,0,0,xe,0,0,0,1),Fe=Z.set(le.cs,le.sn,0,-le.sn,le.cs,0,0,0,1),ve=Ie.multiply(Fe).multiply(x),Je=We=>{const{x:Be,y:Ne}=new I(Math.cos(We),Math.sin(We),0).applyMatrix3(ve);return Math.atan2(Ne,Be)};X.aStartAngle=Je(X.aStartAngle),X.aEndAngle=Je(X.aEndAngle),A(N)&&(X.aClockwise=!X.aClockwise)}}function ee(X){const de=M(N),P=w(N);X.xRadius*=de,X.yRadius*=P;const ne=de>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);X.aRotation+=ne,A(N)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ce=O.subPaths;for(let X=0,de=ce.length;X<de;X++){const ne=ce[X].curves;for(let B=0;B<ne.length;B++){const Y=ne[B];Y.isLineCurve?(L(Y.v1),L(Y.v2)):Y.isCubicBezierCurve?(L(Y.v0),L(Y.v1),L(Y.v2),L(Y.v3)):Y.isQuadraticBezierCurve?(L(Y.v0),L(Y.v1),L(Y.v2)):Y.isEllipseCurve&&(Q.set(Y.aX,Y.aY),L(Q),Y.aX=Q.x,Y.aY=Q.y,k(N)?T(Y):ee(Y))}}}function A(O){const N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function k(O){const N=O.elements,L=N[0]*N[3]+N[1]*N[4];if(L===0)return!1;const T=M(O),ee=w(O);return Math.abs(L/(T*ee))>Number.EPSILON}function M(O){const N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function w(O){const N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function V(O,N,L){let T,ee,ce,X,de;const P=O+L,ne=O-L,B=Math.sqrt(ne*ne+4*N*N);return P>0?(T=.5*(P+B),de=1/T,ee=O*de*L-N*de*N):P<0?ee=.5*(P-B):(T=.5*B,ee=-.5*B),ne>0?ce=ne+B:ce=ne-B,Math.abs(ce)>2*Math.abs(N)?(de=-2*N/ce,X=1/Math.sqrt(1+de*de),ce=de*X):Math.abs(N)===0?(ce=1,X=0):(de=-.5*ce/N,ce=1/Math.sqrt(1+de*de),X=de*ce),ne>0&&(de=ce,ce=-X,X=de),{rt1:T,rt2:ee,cs:ce,sn:X}}const W=[],oe={},U=[],q=new He,j=new He,Z=new He,z=new He,Q=new pe,ae=new I,ue=new He,ye=new DOMParser().parseFromString(e,"image/svg+xml");return i(ye.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:ye.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function o(y,p,h,_){const g=y.x,b=p.x,R=h.x,E=_.x,A=y.y,k=p.y,M=h.y,w=_.y,V=(E-R)*(A-M)-(w-M)*(g-R),W=(b-g)*(A-M)-(k-A)*(g-R),oe=(w-M)*(b-g)-(E-R)*(k-A),U=V/oe,q=W/oe;if(oe===0&&V!==0||U<=0||U>=1||q<0||q>1)return null;if(V===0&&oe===0){for(let j=0;j<2;j++)if(r(j===0?h:_,y,p),s.loc==i.ORIGIN){const Z=j===0?h:_;return{x:Z.x,y:Z.y,t:s.t}}else if(s.loc==i.BETWEEN){const Z=+(g+s.t*(b-g)).toPrecision(10),z=+(A+s.t*(k-A)).toPrecision(10);return{x:Z,y:z,t:s.t}}return null}else{for(let z=0;z<2;z++)if(r(z===0?h:_,y,p),s.loc==i.ORIGIN){const Q=z===0?h:_;return{x:Q.x,y:Q.y,t:s.t}}const j=+(g+U*(b-g)).toPrecision(10),Z=+(A+U*(k-A)).toPrecision(10);return{x:j,y:Z,t:U}}}function r(y,p,h){const _=h.x-p.x,g=h.y-p.y,b=y.x-p.x,R=y.y-p.y,E=_*R-b*g;if(y.x===p.x&&y.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(y.x===h.x&&y.y===h.y){s.loc=i.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=i.LEFT;return}if(E>Number.EPSILON){s.loc=i.RIGHT;return}if(_*b<0||g*R<0){s.loc=i.BEHIND;return}if(Math.sqrt(_*_+g*g)<Math.sqrt(b*b+R*R)){s.loc=i.BEYOND;return}let A;_!==0?A=b/_:A=R/g,s.loc=i.BETWEEN,s.t=A}function a(y,p){const h=[],_=[];for(let g=1;g<y.length;g++){const b=y[g-1],R=y[g];for(let E=1;E<p.length;E++){const A=p[E-1],k=p[E],M=o(b,R,A,k);M!==null&&h.find(w=>w.t<=M.t+Number.EPSILON&&w.t>=M.t-Number.EPSILON)===void 0&&(h.push(M),_.push(new pe(M.x,M.y)))}}return _}function c(y,p,h){const _=new pe;p.getCenter(_);const g=[];return h.forEach(b=>{b.boundingBox.containsPoint(_)&&a(y,b.points).forEach(E=>{g.push({identifier:b.identifier,isCW:b.isCW,point:E})})}),g.sort((b,R)=>b.point.x-R.point.x),g}function l(y,p,h,_,g){(g==null||g==="")&&(g="nonzero");const b=new pe;y.boundingBox.getCenter(b);const R=[new pe(h,b.y),new pe(_,b.y)],E=c(R,y.boundingBox,p);E.sort((W,oe)=>W.point.x-oe.point.x);const A=[],k=[];E.forEach(W=>{W.identifier===y.identifier?A.push(W):k.push(W)});const M=A[0].point.x,w=[];let V=0;for(;V<k.length&&k[V].point.x<M;)w.length>0&&w[w.length-1]===k[V].identifier?w.pop():w.push(k[V].identifier),V++;if(w.push(y.identifier),g==="evenodd"){const W=w.length%2===0,oe=w[w.length-2];return{identifier:y.identifier,isHole:W,for:oe}}else if(g==="nonzero"){let W=!0,oe=null,U=null;for(let q=0;q<w.length;q++){const j=w[q];W?(U=p[j].isCW,W=!1,oe=j):U!==p[j].isCW&&(U=p[j].isCW,W=!0)}return{identifier:y.identifier,isHole:W,for:oe}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,d=-999999999,f=e.subPaths.map(y=>{const p=y.getPoints();let h=-999999999,_=999999999,g=-999999999,b=999999999;for(let R=0;R<p.length;R++){const E=p[R];E.y>h&&(h=E.y),E.y<_&&(_=E.y),E.x>g&&(g=E.x),E.x<b&&(b=E.x)}return d<=g&&(d=g+1),u>=b&&(u=b-1),{curves:y.curves,points:p,isCW:xi.isClockWise(p),identifier:-1,boundingBox:new i1(new pe(b,_),new pe(g,h))}});f=f.filter(y=>y.points.length>1);for(let y=0;y<f.length;y++)f[y].identifier=y;const m=f.map(y=>l(y,f,u,d,e.userData?e.userData.style.fillRule:void 0)),v=[];return f.forEach(y=>{if(!m[y.identifier].isHole){const h=new Ks;h.curves=y.curves,m.filter(g=>g.isHole&&g.for===y.identifier).forEach(g=>{const b=f[g.identifier],R=new sr;R.curves=b.curves,h.holes.push(R)}),v.push(h)}}),v}static getStrokeStyle(e,t,i,s,o){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",o=o!==void 0?o:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:o}}static pointsToStroke(e,t,i,s){const o=[],r=[],a=[];if(lu.pointsToStrokeWithBuffers(e,t,i,s,o,r,a)===0)return null;const c=new gt;return c.setAttribute("position",new Qe(o,3)),c.setAttribute("normal",new Qe(r,3)),c.setAttribute("uv",new Qe(a,2)),c}static pointsToStrokeWithBuffers(e,t,i,s,o,r,a,c){const l=new pe,u=new pe,d=new pe,f=new pe,m=new pe,v=new pe,y=new pe,p=new pe,h=new pe,_=new pe,g=new pe,b=new pe,R=new pe,E=new pe,A=new pe,k=new pe,M=new pe;i=i!==void 0?i:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=ne(e);const w=e.length;if(w<2)return 0;const V=e[0].equals(e[w-1]);let W,oe=e[0],U;const q=t.strokeWidth/2,j=1/(w-1);let Z=0,z,Q,ae,ue,ye=!1,te=0,O=c*3,N=c*2;L(e[0],e[1],l).multiplyScalar(q),p.copy(e[0]).sub(l),h.copy(e[0]).add(l),_.copy(p),g.copy(h);for(let B=1;B<w;B++){W=e[B],B===w-1?V?U=e[1]:U=void 0:U=e[B+1];const Y=l;if(L(oe,W,Y),d.copy(Y).multiplyScalar(q),b.copy(W).sub(d),R.copy(W).add(d),z=Z+j,Q=!1,U!==void 0){L(W,U,u),d.copy(u).multiplyScalar(q),E.copy(W).sub(d),A.copy(W).add(d),ae=!0,d.subVectors(U,oe),Y.dot(d)<0&&(ae=!1),B===1&&(ye=ae),d.subVectors(U,W),d.normalize();const $=Math.abs(Y.dot(d));if($>Number.EPSILON){const fe=q/$;d.multiplyScalar(-fe),f.subVectors(W,oe),m.copy(f).setLength(fe).add(d),k.copy(m).negate();const F=m.length(),x=f.length();f.divideScalar(x),v.subVectors(U,W);const S=v.length();switch(v.divideScalar(S),f.dot(k)<x&&v.dot(k)<S&&(Q=!0),M.copy(m).add(W),k.add(W),ue=!1,Q?ae?(A.copy(k),R.copy(k)):(E.copy(k),b.copy(k)):ce(),t.strokeLineJoin){case"bevel":X(ae,Q,z);break;case"round":de(ae,Q),ae?ee(W,b,E,z,0):ee(W,A,R,z,1);break;case"miter":case"miter-clip":default:const G=q*t.strokeMiterLimit/F;if(G<1)if(t.strokeLineJoin!=="miter-clip"){X(ae,Q,z);break}else de(ae,Q),ae?(v.subVectors(M,b).multiplyScalar(G).add(b),y.subVectors(M,E).multiplyScalar(G).add(E),T(b,z,0),T(v,z,0),T(W,z,.5),T(W,z,.5),T(v,z,0),T(y,z,0),T(W,z,.5),T(y,z,0),T(E,z,0)):(v.subVectors(M,R).multiplyScalar(G).add(R),y.subVectors(M,A).multiplyScalar(G).add(A),T(R,z,1),T(v,z,1),T(W,z,.5),T(W,z,.5),T(v,z,1),T(y,z,1),T(W,z,.5),T(y,z,1),T(A,z,1));else Q?(ae?(T(h,Z,1),T(p,Z,0),T(M,z,0),T(h,Z,1),T(M,z,0),T(k,z,1)):(T(h,Z,1),T(p,Z,0),T(M,z,1),T(p,Z,0),T(k,z,0),T(M,z,1)),ae?E.copy(M):A.copy(M)):ae?(T(b,z,0),T(M,z,0),T(W,z,.5),T(W,z,.5),T(M,z,0),T(E,z,0)):(T(R,z,1),T(M,z,1),T(W,z,.5),T(W,z,.5),T(M,z,1),T(A,z,1)),ue=!0;break}}else ce()}else ce();!V&&B===w-1&&P(e[0],_,g,ae,!0,Z),Z=z,oe=W,p.copy(E),h.copy(A)}if(!V)P(W,b,R,ae,!1,z);else if(Q&&o){let B=M,Y=k;ye!==ae&&(B=k,Y=M),ae?(ue||ye)&&(Y.toArray(o,0*3),Y.toArray(o,3*3),ue&&B.toArray(o,1*3)):(ue||!ye)&&(Y.toArray(o,1*3),Y.toArray(o,3*3),ue&&B.toArray(o,0*3))}return te;function L(B,Y,$){return $.subVectors(Y,B),$.set(-$.y,$.x).normalize()}function T(B,Y,$){o&&(o[O]=B.x,o[O+1]=B.y,o[O+2]=0,r&&(r[O]=0,r[O+1]=0,r[O+2]=1),O+=3,a&&(a[N]=Y,a[N+1]=$,N+=2)),te+=3}function ee(B,Y,$,fe,F){l.copy(Y).sub(B).normalize(),u.copy($).sub(B).normalize();let x=Math.PI;const S=l.dot(u);Math.abs(S)<1&&(x=Math.abs(Math.acos(S))),x/=i,d.copy(Y);for(let G=0,me=i-1;G<me;G++)f.copy(d).rotateAround(B,x),T(d,fe,F),T(f,fe,F),T(B,fe,.5),d.copy(f);T(f,fe,F),T($,fe,F),T(B,fe,.5)}function ce(){T(h,Z,1),T(p,Z,0),T(b,z,0),T(h,Z,1),T(b,z,1),T(R,z,0)}function X(B,Y,$){Y?B?(T(h,Z,1),T(p,Z,0),T(b,z,0),T(h,Z,1),T(b,z,0),T(k,z,1),T(b,$,0),T(E,$,0),T(k,$,.5)):(T(h,Z,1),T(p,Z,0),T(R,z,1),T(p,Z,0),T(k,z,0),T(R,z,1),T(R,$,1),T(k,$,0),T(A,$,1)):B?(T(b,$,0),T(E,$,0),T(W,$,.5)):(T(R,$,1),T(A,$,0),T(W,$,.5))}function de(B,Y){Y&&(B?(T(h,Z,1),T(p,Z,0),T(b,z,0),T(h,Z,1),T(b,z,0),T(k,z,1),T(b,Z,0),T(W,z,.5),T(k,z,1),T(W,z,.5),T(E,Z,0),T(k,z,1)):(T(h,Z,1),T(p,Z,0),T(R,z,1),T(p,Z,0),T(k,z,0),T(R,z,1),T(R,Z,1),T(k,z,0),T(W,z,.5),T(W,z,.5),T(k,z,0),T(A,Z,1)))}function P(B,Y,$,fe,F,x){switch(t.strokeLineCap){case"round":F?ee(B,$,Y,x,.5):ee(B,Y,$,x,.5);break;case"square":if(F)l.subVectors(Y,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B),fe?(d.toArray(o,1*3),f.toArray(o,0*3),f.toArray(o,3*3)):(d.toArray(o,1*3),d.toArray(o,3*3),f.toArray(o,0*3));else{l.subVectors($,B),u.set(l.y,-l.x),d.addVectors(l,u).add(B),f.subVectors(u,l).add(B);const S=o.length;fe?(d.toArray(o,S-1*3),f.toArray(o,S-2*3),f.toArray(o,S-4*3)):(f.toArray(o,S-2*3),d.toArray(o,S-1*3),f.toArray(o,S-4*3))}break}}function ne(B){let Y=!1;for(let fe=1,F=B.length-1;fe<F;fe++)if(B[fe].distanceTo(B[fe+1])<s){Y=!0;break}if(!Y)return B;const $=[];$.push(B[0]);for(let fe=1,F=B.length-1;fe<F;fe++)B[fe].distanceTo(B[fe+1])>=s&&$.push(B[fe]);return $.push(B[B.length-1]),$}}}const wN={[sc.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[sc.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[sc.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[sc.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},Nx=[];let Ws=null,Fs=null,of=null;function Dx(n){of&&(of.visible=!!n)}const qs=new Ke,Zc=new Ct,E0=new I,A0=new I(1,1,1),T0=new I(0,1,0),Qo=new Ee;function EN(){return new Iu(bt.ring.majorRadius,bt.ring.tubeRadius,10,48)}const Ox={};function AN(){const n=new lu,e=bt.symbol.size/960,t=bt.symbol.extrudeDepth/e;for(const[i,s]of Object.entries(wN)){const o=n.parse(s),r=[];for(const c of o.paths)r.push(...lu.createShapes(c));const a=new Pf(r,{depth:t,bevelEnabled:!1});a.scale(1,-1,1),a.center(),a.scale(e,e,e),Ox[i]=a}}function TN(n,e,t){let i=-1/0;for(let s=-t;s<=t;s+=.5)for(let o=-t;o<=t;o+=.5){if(s*s+o*o>t*t)continue;const r=Rt(n+s,e+o);r>i&&(i=r)}return i}function RN(n,e){const t=bt.ring;let i=null,s=null;e:for(let d=1;d<=t.coastSnapMaxRadius;d+=1){const f=Math.max(8,Math.round(d*8));for(let m=0;m<f;m++){const v=m/f*Math.PI*2,y=n+Math.cos(v)*d,p=e+Math.sin(v)*d;if(Rt(y,p)>=Ae.waterLevel){i=y,s=p;break e}}}if(i===null)return{x:n,z:e};let o=n-i,r=e-s;const a=Math.hypot(o,r)||1;o/=a,r/=a;let c=i+o*t.coastSeawardOffset,l=s+r*t.coastSeawardOffset;const u=Ae.waterLevel+t.coastRingHeight-t.majorRadius;for(let d=0;d<8&&TN(c,l,t.majorRadius+.5)>u;d++)c+=o*1.5,l+=r*1.5;return{x:c,z:l}}function LN(n,e){const t=bt.ring,i=Rt(n,e);if(i<Ae.waterLevel){const a=RN(n,e);return{x:a.x,z:a.z,y:Ae.waterLevel+t.coastRingHeight}}const s=t.terrainSearchRadius;let o=-1/0;for(let a=-s;a<=s;a+=1)for(let c=-s;c<=s;c+=1){if(a*a+c*c>s*s)continue;const l=Pr(n+a,e+c);l>o&&(o=l)}const r=Math.max(i,o+t.terrainClearance-t.hoverHeight);return{x:n,z:e,y:r+t.hoverHeight}}function CN(){AN();const n=EN(),e=new lt;of=e;const t={};for(const r of Ur)t[r.type]=(t[r.type]||0)+1;const i=Mh(new qn({transparent:!0}));wh(n,Ur.length,bt.ring.opacity);const s=new an(n,i,Ur.length);s.frustumCulled=!1,e.add(s),Ws=s;const o=Mh(new ut({transparent:!0,flatShading:!0,side:Kt}));Fs={};for(const r of Object.keys(t)){const a=Ox[r];wh(a,t[r],.95);const c=new an(a,o,t[r]);c.frustumCulled=!1,e.add(c),Fs[r]={mesh:c,next:0}}for(let r=0;r<Ur.length;r++){const a=Ur[r],c=bt.colorsByType[a.type],{x:l,y:u,z:d}=LN(a.x,a.z),f=Fs[a.type],m=f.next++;qs.makeTranslation(l,u,d),s.setMatrixAt(r,qs),f.mesh.setMatrixAt(m,qs),s.setColorAt(r,Qo.setHex(c.ring)),f.mesh.setColorAt(m,Qo.setHex(c.symbol)),Nx.push({poi:a,ringIndex:r,symbolMesh:f.mesh,symbolIndex:m,ringAlpha:n.attributes.instanceAlpha.array,symbolAlpha:f.mesh.geometry.attributes.instanceAlpha.array,x:l,y:u,z:d,spin:0,frozen:!1,wasInsideZone:!1,appliedActivated:null})}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0;for(const r of Object.keys(Fs)){const a=Fs[r].mesh;a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0}return e}function PN(n,e){const t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;return t*t+i*i+s*s<=bt.activation.radius*bt.activation.radius}function IN(){const n=__(nv()),e=J.oneShotTier|0;return n>e?(J.oneShotTier=n,n):0}function NN(n){const e=bt.rewardsByType[n.type];if(J.testMode){f0(n.name,e.punkte,e.gofios,0);return}const t=!!J.exploredPOIs[n.id],i=Math.round(t?e.punkte*bt.revisitPunkteFactor:e.punkte*xr());Mu(i),on(t?"ring-recollect":"ring-first");let s=0,o=0;t||(J.exploredPOIs[n.id]=!0,J.gofiosByIsland[n.island]=(J.gofiosByIsland[n.island]|0)+e.gofios,s=e.gofios,o=IN()),f0(n.name,i,s,o),Dt()}function DN(n,e){if(e)Ws.setColorAt(n.ringIndex,Qo.setHex(bt.ring.colorActivated)),n.ringAlpha[n.ringIndex]=bt.ring.opacityActivated,n.symbolMesh.setColorAt(n.symbolIndex,Qo.setHex(bt.symbol.colorActivated)),n.symbolAlpha[n.symbolIndex]=.55;else{const t=bt.colorsByType[n.poi.type];Ws.setColorAt(n.ringIndex,Qo.setHex(t.ring)),n.ringAlpha[n.ringIndex]=bt.ring.opacity,n.symbolMesh.setColorAt(n.symbolIndex,Qo.setHex(t.symbol)),n.symbolAlpha[n.symbolIndex]=.95}Ws.instanceColor.needsUpdate=!0,Ws.geometry.attributes.instanceAlpha.needsUpdate=!0,n.symbolMesh.instanceColor.needsUpdate=!0,n.symbolMesh.geometry.attributes.instanceAlpha.needsUpdate=!0,n.frozen=e}function ON(n,e){if(D.tutorial){nf();return}const t=e.position,i=x_(t);if(i!==J.currentIsland){if(J.currentIsland=i,!J.testMode&&!J.visitedIslands[i]){J.visitedIslands[i]=!0,J.obsidian=(J.obsidian|0)+Ml.islandDiscoveryDiamonds;const r=Lt.find(a=>a.id===i);VI(r?r.name:i,Ml.islandDiscoveryDiamonds)}Dt()}let s=null,o=bt.hoverLabelRadius*bt.hoverLabelRadius;for(const r of Nx){const a=!J.testMode&&!!J.exploredPOIs[r.poi.id];a!==r.appliedActivated&&(DN(r,a),r.appliedActivated=a);const c=Math.atan2(t.x-r.x,t.z-r.z);Zc.setFromAxisAngle(T0,c),qs.compose(E0.set(r.x,r.y,r.z),Zc,A0),Ws.setMatrixAt(r.ringIndex,qs),r.frozen||(r.spin+=bt.symbol.rotRate*n),Zc.setFromAxisAngle(T0,c+r.spin),qs.compose(E0.set(r.x,r.y,r.z),Zc,A0),r.symbolMesh.setMatrixAt(r.symbolIndex,qs);const l=PN(r,t);if(l&&!r.wasInsideZone&&NN(r.poi),r.wasInsideZone=l,J.exploredPOIs[r.poi.id]){const u=t.x-r.x,d=t.z-r.z,f=u*u+d*d;f<o&&(o=f,s=r.poi)}}Ws.instanceMatrix.needsUpdate=!0;for(const r of Object.keys(Fs))Fs[r].mesh.instanceMatrix.needsUpdate=!0;s?$I(s.name):nf()}const At={LAUNCH:0,NAV:1,RINGS:2,GREY_BOOST:3,THERMAL:4,RING_HIGH:5,RING_LOW:6,END:7},er=[{key:"tutorial.navLeft",test:n=>n.roll<=-.45,invert:!1},{key:"tutorial.navRight",test:n=>n.roll>=it.navThreshold,invert:!1},{key:"tutorial.navUp",test:n=>n.pitch>=it.navThreshold,invert:!0},{key:"tutorial.navDown",test:n=>n.pitch<=-.45,invert:!0}],Ui=document.getElementById("tutorial-layer"),Kc=document.getElementById("tutorial-banner"),R0=document.getElementById("tutorial-text"),L0=document.getElementById("tutorial-invert"),wa=document.getElementById("tutorial-invert-toggle"),Rr=document.getElementById("tutorial-skip"),Qr=document.getElementById("tutorial-flash"),C0=document.getElementById("tutorial-steer-hint"),zi=document.getElementById("tutorial-end"),P0=document.getElementById("tutorial-end-go");let uo=!1,wn=At.LAUNCH,Is=null,Wo=0,aa=0,ca=0,eo=null;const os=new I,fs=new I(0,0,-1),th=new I(1,0,0),up=new I(0,0,-1),dr={pos:new I,quat:new Ct,state:"PRELAUNCH"};let rf="",Ux=null,Xs=null,mt=[],_i=null,Ea=null,uu=[];const hr={x:0,z:0,radius:it.thermal.radius,strength:it.thermal.strength,baseElevation:0},dn=new I,I0=new Ct,UN=new I(0,1,0),Bs=new I(0,0,-1),Bo=new I(0,0,-1),kN=[85,175,300,420,500];function kx(){return 3046806}function FN(){const n=new lt,e=new Iu(3.4,.2,10,40);mt=[];for(let t=0;t<4;t++){const i=new qn({color:kx(),transparent:!0,opacity:.95}),s=new tt(e,i);s.visible=!1,n.add(s),mt.push({mesh:s,mat:i,pos:new I,collected:!1,popT:1,forward:0})}return _i=BN(),_i.visible=!1,n.add(_i),n}function BN(){const n=new lt,e=it.thermal,t=_n.columnTop,i=new qn({color:13625071,transparent:!0,opacity:.18,side:Kt,depthWrite:!1}),s=new Vn(e.radius*1.05,e.radius*.55,t,24,1,!0);s.translate(0,t/2,0),n.add(new tt(s,i));const o=64,r=new Float32Array(o*3);uu=[];for(let l=0;l<o;l++){const u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*e.radius*.82;uu.push({ux:Math.cos(u)*d,uz:Math.sin(u)*d,phase:Math.random()})}const a=new gt;a.setAttribute("position",new Nt(r,3));const c=new Jv({color:16777215,size:1.7,transparent:!0,opacity:.6,depthWrite:!1});return Ea=new Qv(a,c),n.add(Ea),n}function zN(){Xs||(Xs=FN()),Xs.parent||Mt.add(Xs)}function Fx(){for(const n of mt)n.mesh.visible=!1;_i&&(_i.visible=!1)}function HN(n){let e=-1/0;for(const t of kN){const i=Rt(os.x+n.x*t,os.z+n.z*t);i>e&&(e=i)}return e}function GN(){const n=Ae.waterLevel+it.corridorClearHeight,e=Math.max(1,it.corridorSearchSteps);let t=1/0;fs.copy(Bs);for(let i=0;i<=e;i++){if(Bo.copy(Bs).lerp(up,i/e),Bo.lengthSq()<1e-4)continue;Bo.normalize();const s=HN(Bo);if(s<n){fs.copy(Bo);return}s<t&&(t=s,fs.copy(Bo))}}function VN(){os.copy(he.position),dn.set(0,0,-1).applyQuaternion(he.quaternion),Bs.set(dn.x,0,dn.z),Bs.lengthSq()<1e-4&&Bs.set(0,0,-1),Bs.normalize(),Bs.addScaledVector(up,it.seawardBias).normalize(),GN(),th.crossVectors(fs,Oh).normalize();const n=os.y,e=[it.ring1,it.ring2,it.ring3,it.ring4];for(let s=0;s<4;s++){const o=e[s];dn.copy(os).addScaledVector(fs,o.forward).addScaledVector(th,o.side);const r=Rt(dn.x,dn.z),a=Math.max(r,Ae.waterLevel)+it.ringClearance,c=Math.max(n+o.dy,a);mt[s].pos.set(dn.x,c,dn.z),mt[s].mesh.position.copy(mt[s].pos),mt[s].forward=o.forward}const t=it.thermal;dn.copy(os).addScaledVector(fs,t.forward).addScaledVector(th,t.side);const i=Math.max(Rt(dn.x,dn.z),Ae.waterLevel);hr.x=dn.x,hr.z=dn.z,hr.baseElevation=i,_i.position.set(dn.x,i,dn.z)}function dp(){return(he.position.x-os.x)*fs.x+(he.position.z-os.z)*fs.z}function WN(n){for(const e of mt){if(!e.mesh.visible)continue;const t=Math.atan2(he.position.x-e.pos.x,he.position.z-e.pos.z);if(I0.setFromAxisAngle(UN,t),e.mesh.quaternion.copy(I0),e.popT<1){e.popT=Math.min(1,e.popT+n*2.2);const i=1+e.popT*.7;e.mesh.scale.setScalar(i),e.mat.opacity=.95*(1-e.popT),e.popT>=1&&(e.mesh.visible=!1)}}if(_i&&_i.visible&&Ea){const e=Ea.geometry.attributes.position.array,t=_n.columnTop;for(let i=0;i<uu.length;i++){const s=uu[i];s.phase+=n*.28,s.phase>=1&&(s.phase-=1),e[i*3]=s.ux,e[i*3+1]=s.phase*t,e[i*3+2]=s.uz}Ea.geometry.attributes.position.needsUpdate=!0}}function to(n){const e=mt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(kx()),e.mat.opacity=.95,e.mesh.visible=!0}function Bx(n){const e=mt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(8293522),e.mat.opacity=.4,e.mesh.visible=!0}function zx(){R0&&(R0.textContent=rf?Se(rf,Ux||void 0):"")}function bs(n,e=null){rf=n,Ux=e,zx(),Kc&&(Kc.classList.remove("step-pop"),Kc.offsetWidth,Kc.classList.add("step-pop"))}function zu(n){L0&&(L0.hidden=!n,n&&wa&&(wa.checked=ix()))}function af(n){C0&&C0.classList.toggle("show",!!n)}function qN(n){Qr&&(Qr.textContent=n,Qr.classList.remove("show"),Qr.offsetWidth,Qr.classList.add("show"))}function xo(n){dr.pos.copy(he.position),dr.quat.copy(he.quaternion),dr.state=n}function XN(){if(dr.state==="PRELAUNCH"){lp(Is);return}he.position.copy(dr.pos),he.quaternion.copy(dr.quat),D.speed=it.airSpeed,D.flightState=De.FLYING,D.postLiftCooldown=it.resetGrace,D.greyActive=!1,D.oneShotActive=!1,ku()}function Hu(){qN(Se("tutorial.retry")),wn===At.RINGS?(to(0),Bx(1),du()):wn===At.RING_HIGH?to(2):wn===At.RING_LOW&&to(3),XN()}function $N(){wn=At.NAV,Wo=0,aa=0,xo("FLYING"),bs(er[0].key),zu(er[0].invert)}function jN(n){const e=yo();if(aa=er[Wo].test(e)?aa+n:0,aa>=it.navHold){if(Wo++,aa=0,Wo>=er.length){YN();return}bs(er[Wo].key),zu(er[Wo].invert)}}function du(){const n=(mt[0].collected?1:0)+(mt[1].collected?1:0);bs("tutorial.rings",{collected:n,total:2})}function YN(){wn=At.RINGS,zu(!1),D.speed=Math.max(D.speed,it.ringsEntrySpeed),xo("FLYING"),VN(),to(0),Bx(1),du()}function ZN(){if(!mt[0].collected)hu(0)&&(fu(0),to(1),du());else if(!mt[1].collected&&hu(1)){fu(1),du(),KN();return}dp()>mt[1].forward+it.ringsOvershoot&&Hu()}function KN(){wn=At.GREY_BOOST,ca=0,xo("FLYING"),Rr&&(Rr.hidden=!0),tp({brake:!0,boost:!1,oneShot:!0}),document.body.classList.add("tut-show-boost"),bs("tutorial.boost")}function JN(n){ca=yo().boost?ca+n:Math.max(0,ca-n*.5),ca>=it.boostHold&&QN()}function QN(){wn=At.THERMAL,xo("FLYING"),_i.visible=!0,to(2),bs("tutorial.thermal")}function eD(){he.position.y>=mt[2].pos.y-it.thermalReach&&tD()}function tD(){wn=At.RING_HIGH,xo("FLYING"),bs("tutorial.ringHigh")}function nD(){if(!mt[2].collected&&hu(2)){fu(2),iD();return}dp()>mt[2].forward+it.highOvershoot&&Hu()}function iD(){wn=At.RING_LOW,xo("FLYING"),to(3),bs("tutorial.ringLow")}function sD(){if(!mt[3].collected&&hu(3)){fu(3),oD();return}dp()>mt[3].forward+it.highOvershoot&&Hu()}function oD(){wn=At.END,_i.visible=!1,D.paused=!0,zi&&(zi.classList.add("visible"),zi.setAttribute("aria-hidden","false")),eo=setTimeout(Hx,it.endCardMs)}function Hx(){eo&&(clearTimeout(eo),eo=null),zi&&(zi.classList.remove("visible"),zi.setAttribute("aria-hidden","true")),Vx()}function hu(n){const e=mt[n],t=he.position.x-e.pos.x,i=he.position.y-e.pos.y,s=he.position.z-e.pos.z;return t*t+i*i+s*s<=it.ringRadius*it.ringRadius}function fu(n){mt[n].collected=!0,mt[n].popT=0}function Gx(){if(uo)return;Is=ot.find(e=>e.id===it.runwayId)??ot[0],Is.activeHeading=Is.heading;const n=C1(Is);n&&(n.rotation.y=0),up.set(0,0,-1).applyEuler(new Wn(0,Is.activeHeading,0)),mx(),uo=!0,D.tutorial=!0,J.introPlayed=!0,Mt.fog=new ja(Ze.sky,it.fog.start,it.fog.end),zN(),Fx(),Dx(!1),yy(!1),pn.indexOf(hr)<0&&pn.push(hr),tp({brake:!0,boost:!0,oneShot:!0}),document.body.classList.add("tut-hide-actions"),document.body.classList.remove("tut-show-boost"),lp(Is),wn=At.LAUNCH,xo("PRELAUNCH"),Ui&&(Ui.classList.add("visible"),Ui.classList.remove("menu-hidden"),Ui.setAttribute("aria-hidden","false")),Rr&&(Rr.hidden=!1),bs("tutorial.launch"),zu(!1),D.paused=!1}function rD(){return z_()?!1:(Gx(),!0)}function Vx(){if(!uo)return;uo=!1,D.tutorial=!1,D.paused=!1,Mt.fog=new ja(Ze.sky,Ae.fogStart,Ae.fogEnd),Fx(),Dx(!0),yy(!0),Xs&&Xs.parent&&Mt.remove(Xs);const n=pn.indexOf(hr);n>=0&&pn.splice(n,1),tp({brake:!1,boost:!1,oneShot:!1}),document.body.classList.remove("tut-hide-actions","tut-show-boost"),Ui&&(Ui.classList.remove("visible","menu-hidden"),Ui.setAttribute("aria-hidden","true")),af(!1),H_(!0)}function Wx(){uo&&(eo&&(clearTimeout(eo),eo=null),zi&&(zi.classList.remove("visible"),zi.setAttribute("aria-hidden","true")),Vx())}function aD(n){if(!uo)return;const e=D.paused;if(Ui&&Ui.classList.toggle("menu-hidden",e),e){af(!1);return}switch(af(wn===At.LAUNCH||wn===At.NAV),wn){case At.LAUNCH:D.flightState===De.FLYING&&$N();break;case At.NAV:jN(n);break;case At.RINGS:ZN();break;case At.GREY_BOOST:JN(n);break;case At.THERMAL:eD();break;case At.RING_HIGH:nD();break;case At.RING_LOW:sD();break}WN(n)}aN(Hu);wa&&wa.addEventListener("change",()=>Ql(wa.checked));Rr&&Rr.addEventListener("click",Wx);P0&&P0.addEventListener("click",Hx);Du(()=>{uo&&zx()});const cD="3.3.0",lD=17,N0={version:cD,build:lD},uD={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},cn=document.getElementById("welcome-overlay"),D0=document.getElementById("welcome-start-sub"),O0=document.getElementById("pause-btn"),si=document.getElementById("pause-overlay"),U0=document.getElementById("pause-resume"),k0=document.getElementById("pause-home"),Aa=document.getElementById("pause-music-toggle"),Ta=document.getElementById("pause-sfx-toggle"),dD=document.getElementById("crash"),F0=document.getElementById("welcome-version");F0&&(F0.textContent=`v${N0.version} · Build ${N0.build} · Swiss Innovation Studios`);const Sn=document.getElementById("levels-overlay"),la=document.getElementById("levels-map"),fr=document.getElementById("levels-markers"),B0=document.getElementById("levels-title"),Jc=document.getElementById("levels-hint"),ea=768,Qc=320,z0=1.08;let H0=null,el=null;function qx(){if(el)return el;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const c of Lt)n=Math.min(n,c.x-c.bboxRadius),e=Math.max(e,c.x+c.bboxRadius),t=Math.min(t,c.z-c.bboxRadius),i=Math.max(i,c.z+c.bboxRadius);const s=(n+e)/2,o=(t+i)/2,r=(e-n)/2*z0,a=(i-t)/2*z0;return el={cx:s,cz:o,hw:r,hh:a},el}function Xx(){return cn?.classList.contains("visible")===!0}function G0(){return si?.classList.contains("visible")===!0}function tc(){cn&&(Wx(),ua(),D.paused=!0,Yx(),cn.classList.add("visible"),cn.setAttribute("aria-hidden","false"))}function cf(){cn&&(cn.classList.remove("visible"),cn.setAttribute("aria-hidden","true"),jx()||(D.paused=!1))}function lf(){si&&(D.paused=!0,Aa&&(Aa.checked=!pv()),Ta&&(Ta.checked=!gv()),si.classList.add("visible"),si.setAttribute("aria-hidden","false"))}function ua(){si&&si.classList.contains("visible")&&(si.classList.remove("visible"),si.setAttribute("aria-hidden","true"),jx()||(D.paused=!1))}function $x(){D.paused||D.flightState!==De.CRASHED&&(D.tutorial||lf())}function jx(){return cn?.classList.contains("visible")||Sn?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function Yx(){if(!D0)return;const n=J.checkpointRunwayId;D0.textContent=n?Se("welcome.checkpoint",{id:n}):Se("welcome.firstFlight")}function hD(){Sn&&(cn?.classList.remove("visible"),cn?.setAttribute("aria-hidden","true"),Sn.classList.add("visible"),Sn.setAttribute("aria-hidden","false"),Zx())}function V0(){Sn&&(Sn.classList.remove("visible"),Sn.setAttribute("aria-hidden","true"),tc())}function Zx(){if(!la)return;B0&&(B0.textContent=Se("levels.archTitle"));const n=fD(),e=Lt.map(t=>n[t.id]?"1":"0").join("");H0!==e&&(mD(n),H0=e),yD(),xD(n),_D()}function fD(){const n={};for(const e of Lt)n[e.id]=!1;for(const e of ot){if(!J.discoveredRunways[e.id])continue;const t=uD[e.id];t&&(n[t]=!0)}return n}function pD(n,e){let t=Lt[0].id,i=1/0;for(const s of Lt){const o=n-s.x,r=e-s.z,a=o*o+r*r;a<i&&(i=a,t=s.id)}return t}function mD(n){if(!la)return;la.width=ea,la.height=Qc;const e=la.getContext("2d"),t=e.createImageData(ea,Qc),{cx:i,cz:s,hw:o,hh:r}=qx(),a=Ae.heightmap.metersPerUnit,c=Ae.waterLevel;for(let l=0;l<Qc;l++){const u=s+(l/(Qc-1)-.5)*2*r;for(let d=0;d<ea;d++){const f=i+(d/(ea-1)-.5)*2*o,m=Pr(f,u);let v,y,p;if(m<c+.05)v=52,y=92,p=118;else{const _=pD(f,u),g=m*a;n[_]?[v,y,p]=gD(g):v=y=p=vD(g)}const h=(l*ea+d)*4;t.data[h]=v,t.data[h+1]=y,t.data[h+2]=p,t.data[h+3]=255}}e.putImageData(t,0,0)}function gD(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function vD(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function Kx(n,e){const{cx:t,cz:i,hw:s,hh:o}=qx();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*o)+.5}}function yD(){if(fr){fr.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of ot){const e=!!J.landedRunways[n.id],t=!!J.discoveredRunways[n.id],i=e?"landed":t?"discovered":"locked",{fracX:s,fracY:o}=Kx(n.x,n.z);if(s<0||s>1||o<0||o>1)continue;const r=document.createElement("button");r.type="button",r.className=`levels-marker levels-marker-${i}`,r.style.left=(s*100).toFixed(2)+"%",r.style.top=(o*100).toFixed(2)+"%",r.dataset.runwayId=n.id,r.disabled=!e;const a=i==="locked"?Se("levels.markerLocked"):n.id;r.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${a}</span>
    `,e?(r.title=Se("levels.tipStart",{id:n.id}),r.addEventListener("click",()=>bD(n.id))):t?r.title=Se("levels.tipNotLanded",{id:n.id}):r.title=Se("levels.tipUndiscovered"),fr.appendChild(r)}}}function xD(n){if(fr){fr.querySelectorAll(".levels-island-label").forEach(e=>e.remove());for(const e of Lt){if(!n[e.id])continue;const{fracX:t,fracY:i}=Kx(e.x,e.z);if(t<0||t>1||i<0||i>1)continue;const s=document.createElement("span");s.className="levels-island-label",s.textContent=e.name,s.style.left=(t*100).toFixed(2)+"%",s.style.top=(i*100).toFixed(2)+"%",fr.appendChild(s)}}}function _D(){if(!Jc)return;const n=ot.filter(e=>J.landedRunways[e.id]).length;n===0?Jc.textContent=Se("levels.hintNone"):n<ot.length?Jc.textContent=Se("levels.hintProgress",{landed:n,total:ot.length}):Jc.textContent=Se("levels.hintAll")}async function bD(n){Sn?.classList.remove("visible"),Sn?.setAttribute("aria-hidden","true"),cn?.classList.remove("visible"),cn?.setAttribute("aria-hidden","true"),D.flightState===De.CRASHED&&await ao.onCrashRestart(),D.paused=!1,Bu({runwayId:n,forceIntro:!0})}async function SD(){D.flightState===De.CRASHED?(await ao.onCrashRestart(),cf(),Bu()):cf()}function nh(n){cn?.classList.remove("visible"),cn?.setAttribute("aria-hidden","true"),lo(n,{onClose:tc})}(function(){cn&&cn.addEventListener("click",t=>{const i=t.target.closest("[data-welcome-action]");if(!i)return;const s=i.dataset.welcomeAction;s==="start"?SD():s==="levels"?hD():s==="hangar"?nh("hangar"):s==="shop"?nh("shop"):s==="settings"&&nh("settings")}),Sn&&Sn.addEventListener("click",t=>{if(t.target===Sn){V0();return}if(t.target.closest('[data-modal-close="levels"]')){V0();return}});const e=document.getElementById("settings-replay-tutorial");e&&e.addEventListener("click",()=>{for(const t of["settings-overlay","welcome-overlay","levels-overlay"]){const i=document.getElementById(t);i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}Gx()}),O0&&O0.addEventListener("click",()=>{G0()?ua():lf()}),U0&&U0.addEventListener("click",ua),Aa&&Aa.addEventListener("change",()=>{const t=!Aa.checked;mv(t),My(t)}),Ta&&Ta.addEventListener("change",()=>{const t=!Ta.checked;vv(t),wy(t)}),k0&&k0.addEventListener("click",tc),si&&si.addEventListener("click",t=>{t.target===si&&ua()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("onboarding-overlay")?.classList.contains("visible")&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!Sn?.classList.contains("visible")){if(Xx()){cf(),D.flightState===De.CRASHED&&dD?.classList.add("visible");return}if(G0()){ua();return}D.flightState!==De.CRASHED&&lf()}})})();Du(()=>{Xx()&&Yx(),Sn?.classList.contains("visible")&&Zx()});const qa=document.getElementById("onboarding-overlay"),pu=document.getElementById("onboarding-lang-step"),mu=document.getElementById("onboarding-story-step"),MD=document.getElementById("onboarding-langs"),W0=document.getElementById("onboarding-story-text"),ih=document.getElementById("onboarding-dots"),gu=document.getElementById("onboarding-next");let pr=0,uf=null;function Jx(){const n=Se("onboarding.story");return Array.isArray(n)?n:[]}function wD(n){if(uf=typeof n=="function"?n:()=>{},!qa||F_()){uf();return}ED()}function ED(){D.paused=!0,qa.classList.add("visible"),qa.setAttribute("aria-hidden","false"),AD()}function AD(){mu&&(mu.hidden=!0),pu&&(pu.hidden=!1),Ky(MD,{onPick:n=>{Yy(n),TD()}})}function TD(){pu&&(pu.hidden=!0),mu&&(mu.hidden=!1),pr=0,Qx()}function Qx(){const n=Jx();if(W0&&(W0.textContent=n[pr]||""),ih){ih.innerHTML="";for(let t=0;t<n.length;t++){const i=document.createElement("span");i.className="onboarding-dot"+(t===pr?" active":""),ih.appendChild(i)}}const e=pr>=n.length-1;gu&&(gu.textContent=Se(e?"onboarding.begin":"onboarding.next"))}function RD(){pr<Jx().length-1?(pr++,Qx()):LD()}function LD(){B_(!0),qa.classList.remove("visible"),qa.setAttribute("aria-hidden","true"),uf()}gu&&gu.addEventListener("click",RD);const Nr=new I(0,1,0);function vu(n,e){for(const t of ot){const i=n-t.x,s=e-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)<t.width/2+bl.vegClearSide&&Math.abs(c)<t.length/2+bl.vegClearEnd)return!0}return!1}const zo=8;function CD(n,e,t){const i=Pn(n+zo,e),s=Pn(n-zo,e),o=Pn(n,e+zo),r=Pn(n,e-zo);return t.gx=(i-s)/(2*zo),t.gz=(o-r)/(2*zo),t}function PD(){const e=Lt.reduce((t,i)=>t+i.bboxRadius*i.bboxRadius,0);return Lt.map(t=>{const i=t.bboxRadius*t.bboxRadius/e;return Math.max(8e3,Math.floor(Tt.sampleCount*i))})}function ID(){const{treeDensity:n,shrubDensity:e,grassDensity:t,cropDensity:i,bareDensity:s,droughtShrubDensity:o,snowDensity:r,wetlandDensity:a,laurelMaxAltitude:c}=Tt,l={};for(const y of Lt)l[y.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const u=Tt.slopeThreshold,d=Tt.cliffDensity,f=c*Ae.heightmap.elevationExaggeration,m={gx:0,gz:0};for(const y of b_){const p=l[y.island];if(!p)continue;const h=y.ringCount,_=y.ringRadius,g=1.4;for(let R=0;R<h;R++){const E=R/h*Math.PI*2+(Math.random()-.5)*.08,A=_*(.88+Math.random()*.24),k=y.x+Math.cos(E)*A,M=y.z+Math.sin(E)*A,w=Rt(k,M);w<Ae.waterLevel+.5||vu(k,M)||p.cliffs.push({x:k,y:w,z:M,gx:Math.cos(E)*g,gz:Math.sin(E)*g})}const b=Math.floor(h*.4);for(let R=0;R<b;R++){const E=Math.random()*Math.PI*2,A=Math.sqrt(Math.random())*_*.75,k=y.x+Math.cos(E)*A,M=y.z+Math.sin(E)*A,w=Rt(k,M);w<Ae.waterLevel+.5||p.rocks.push({x:k,y:w,z:M})}}const v=PD();for(let y=0;y<Lt.length;y++){const p=Lt[y],h=p.bboxRadius,_=v[y],g=l[p.id];for(let b=0;b<_;b++){const R=p.x+(Math.random()-.5)*2*h,E=p.z+(Math.random()-.5)*2*h,A=Rt(R,E);if(A<Ae.waterLevel+.5||vu(R,E))continue;CD(R,E,m);const M=Math.hypot(m.gx,m.gz)>=u&&Math.random()<d;M&&g.cliffs.push({x:R,y:A,z:E,gx:m.gx,gz:m.gz});const w=Hn(R,E);w===_t.TREE&&Math.random()<n?A>=f?g.pines.push({x:R,y:A,z:E}):g.laurels.push({x:R,y:A,z:E}):w===_t.SHRUB&&Math.random()<e?g.shrubs.push({x:R,y:A,z:E}):w===_t.GRASS&&Math.random()<t?g.grasses.push({x:R,y:A,z:E}):w===_t.CROP&&Math.random()<i?g.crops.push({x:R,y:A,z:E}):w===_t.BARE?(!M&&Math.random()<s&&g.rocks.push({x:R,y:A,z:E}),Math.random()<o&&g.shrubs.push({x:R,y:A,z:E})):w===_t.SNOW&&Math.random()<r?g.snow.push({x:R,y:A,z:E}):w===_t.WETLAND&&Math.random()<a&&g.wetlands.push({x:R,y:A,z:E})}}return l}function e_(n,e,t,i,s,o,r,a,c){const l=new an(e,i,n.length),u=new an(t,s,n.length),d=new Ke,f=new Ct,m=new I,v=new I;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p],b=o+Math.random()*(r-o);v.set(h,_-.3,g),m.set(b,b+Math.random()*.3,b),f.setFromAxisAngle(Nr,Math.random()*Math.PI*2),d.compose(v,f,m),l.setMatrixAt(p,d),u.setMatrixAt(p,d),ec(h,_,g,a*b,c*b)}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const y=new lt;return y.add(l,u),y}function ND(n){const e=new Vn(.18,.26,1.6,5);e.translate(0,.8,0);const t=new Vi(1,4.8,7);t.translate(0,3.8,0);const i=new ut({color:Ze.trunk,flatShading:!0}),s=new ut({color:Ze.pineCanopy,flatShading:!0}),o=Tt.treeScale;return e_(n,e,t,i,s,.75*o,1.3*o,1,6.2)}function DD(n){const e=new Vn(.22,.32,1,5);e.translate(0,.5,0);const t=new Za(1.7,7,5);t.scale(1,.85,1),t.translate(0,2,0);const i=new ut({color:Ze.trunk,flatShading:!0}),s=new ut({color:Ze.laurelCanopy,flatShading:!0}),o=Tt.treeScale;return e_(n,e,t,i,s,.85*o,1.25*o,1.7,3.5)}function OD(n){const e=new Vi(.7,1,5);e.translate(0,.5,0);const t=new ut({color:Ze.shrubBody,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I;for(let c=0;c<n.length;c++){const{x:l,y:u,z:d}=n[c],f=.5+Math.random()*.6;a.set(l,u-.2,d),r.set(f+Math.random()*.2,f,f+Math.random()*.2),o.setFromAxisAngle(Nr,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(c,s),ec(l,u,d,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function UD(n){const e=new Vi(.35,.55,4);e.translate(0,.25,0);const t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Ee(Ze.grassGround),l=Tt.grassTints,u=new Ee;for(let d=0;d<n.length;d++){const{x:f,y:m,z:v}=n[d],y=.6+Math.random()*.7;a.set(f,m-.1,v),r.set(y,y*(.8+Math.random()*.5),y),o.setFromAxisAngle(Nr,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(d,s);const[p,h,_]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*h,c.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function kD(n){const e=new Vi(.4,.75,4);e.translate(0,.35,0);const t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Ee(Ze.cropGround),l=Tt.grassTints,u=new Ee;for(let d=0;d<n.length;d++){const{x:f,y:m,z:v}=n[d],y=.7+Math.random()*.6;a.set(f,m-.12,v),r.set(y,y*(.9+Math.random()*.4),y),o.setFromAxisAngle(Nr,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(d,s);const[p,h,_]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*h,c.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function FD(n){const e=new Ya(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Wn,l=new Ee(Ze.rock),u=Tt.rockTintsLow,d=Tt.rockTintsMid,f=Tt.rockTintsHigh,m=Tt.rockZoneLowMax,v=Tt.rockZoneHighMin,y=new Ee;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p];let b,R,E;_<m?(b=u,R=.3,E=1.5):_>v?(b=f,R=.4,E=2.5):(b=d,R=.5,E=3.5);const A=R+Math.random()*Math.random()*(E-R);a.set(h,_-A*.15,g),r.set(A*(.7+Math.random()*.6),A*(.55+Math.random()*.45),A*(.7+Math.random()*.6)),c.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),o.setFromEuler(c),s.compose(a,o,r),i.setMatrixAt(p,s);const[k,M,w]=b[Math.random()*b.length|0];y.setRGB(l.r*k,l.g*M,l.b*w),i.setColorAt(p,y),A>1.5&&ec(h,_,g,A,A)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function BD(n){const e=new Ya(.6,0),t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new Ct,a=new I,c=new I,l=new I(0,1,0),u=new I,d=new Ee(Ze.rock),f=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Ee,[v,y]=Tt.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g,gx:b,gz:R}=n[p];u.set(-b,1,-R).normalize();const E=v+Math.random()*(y-v),A=1.4+Math.random()*1.8;o.setFromUnitVectors(l,u),r.setFromAxisAngle(u,Math.random()*Math.PI*2),o.premultiply(r);const k=(.3+Math.random()*.1)*E;c.set(h-u.x*k,_-u.y*k,g-u.z*k),a.set(A*(.85+Math.random()*.4),E,A*(.85+Math.random()*.4)),s.compose(c,o,a),i.setMatrixAt(p,s);const[M,w,V]=f[Math.random()*f.length|0];m.setRGB(d.r*M,d.g*w,d.b*V),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function zD(n){const e=new Ya(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Wn,l=new Ee;for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],v=.4+Math.random()*.9;a.set(d,f-.05,m),r.set(v*(.9+Math.random()*.3),v*(.25+Math.random()*.2),v*(.9+Math.random()*.3)),c.set(0,Math.random()*Math.PI*2,0),o.setFromEuler(c),s.compose(a,o,r),i.setMatrixAt(u,s);const y=.93+Math.random()*.07;l.setRGB(y,y,y),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function HD(n){const e=new rn(1,.04,1);e.translate(0,.02,0);const t=new ut({color:16777215,flatShading:!0}),i=new an(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Ee,l=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],v=1+Math.random()*.8;a.set(d,f+.05,m),r.set(v*(.9+Math.random()*.4),1,v*(.9+Math.random()*.4)),o.setFromAxisAngle(Nr,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(u,s);const[y,p,h]=l[Math.random()*l.length|0];c.setRGB(.92*y,.94*p,.96*h),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function GD(n){const{clusterScaleMin:e,clusterScaleMax:t}=Tt.urban,i=Math.min(1,Math.pow(n/50,.4));return e+i*(t-e)}function VD(){const n=O1(),{churchClusterPixels:e,housesPerPixel:t,housesMin:i,housesMax:s,houseMinSpacing:o,pixelJitter:r}=Tt.urban,a=[],c=[],l=o*o;for(const u of n){const d=Math.max(i,Math.min(s,Math.round(u.pixelCount*t))),f=GD(u.pixelCount),m=[];let v=0;const y=d*14;for(;m.length<d&&v<y;){v++;const p=u.pixels[Math.random()*u.pixels.length|0],h=p.x+(Math.random()-.5)*r,_=p.z+(Math.random()-.5)*r;let g=!0;for(const R of m){const E=R.x-h,A=R.z-_;if(E*E+A*A<l){g=!1;break}}if(!g)continue;const b=Rt(h,_);b<Ae.waterLevel+.5||vu(h,_)||m.push({x:h,y:b,z:_,scale:f})}if(a.push(...m),u.pixelCount>=e){const p=u.centerX,h=u.centerZ,_=Rt(p,h);_>=Ae.waterLevel+.5&&!vu(p,h)&&c.push({x:p,y:_,z:h,scale:f})}}return{houses:a,churches:c}}function WD(n){const e=new rn(1.4,1,1.6);e.translate(0,.5,0);const t=new Vi(1.15,.75,4);t.rotateY(Math.PI/4),t.translate(0,1.37,0);const i=new ut({color:Ze.houseWall,flatShading:!0}),s=new ut({color:16777215,flatShading:!0}),o=new an(e,i,n.length),r=new an(t,s,n.length),a=new Ke,c=new Ct,l=new I,u=new I,d=new Ee(Ze.houseRoof),f=Tt.roofTints,m=new Ee;for(let y=0;y<n.length;y++){const{x:p,y:h,z:_,scale:g}=n[y],b=g*(.85+Math.random()*.3),R=g*(.8+Math.random()*.35),E=g*(.85+Math.random()*.3);u.set(p,h,_),l.set(b,R,E);const A=Math.random()*8|0;c.setFromAxisAngle(Nr,A*Math.PI/4),a.compose(u,c,l),o.setMatrixAt(y,a),r.setMatrixAt(y,a);const[k,M,w]=f[Math.random()*f.length|0];m.setRGB(d.r*k,d.g*M,d.b*w),r.setColorAt(y,m),ec(p,h,_,.85*g,1.75*g)}o.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0;const v=new lt;return v.add(o,r),v}function qD(){const n=new ut({color:Ze.houseWall,flatShading:!0}),e=new ut({color:Ze.houseRoof,flatShading:!0}),t=new tt(new rn(1.6,1.2,2.6),n);t.position.y=.6;const i=new tt(new Vi(1.4,.7,4),e);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new tt(new rn(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const o=new tt(new Vi(.5,1.05,4),e);o.rotation.y=Math.PI/4,o.position.set(0,2.95,-1.65);const r=new lt;return r.add(t,i,s,o),r}function XD(n){const e=qD(),t=new lt;for(const{x:i,y:s,z:o,scale:r}of n){const a=e.clone();a.position.set(i,s,o);const c=r*(.95+Math.random()*.2);a.scale.set(c,c,c),a.rotation.y=Math.random()*Math.PI*2,t.add(a),ec(i,s,o,1.9*c,3.5*c)}return t}const df=[],$D=400;function jD(n,e){const t=new I(e.x,60,e.z),i=e.bboxRadius*1.4+50;return n.traverse(s=>{(s.isInstancedMesh||s.isMesh)&&(s.frustumCulled=!0,s.boundingSphere=new xs(t,i))}),{center:t,radius:i}}function YD(){const n=ID(),e=VD(),t=new lt,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const s of Lt){const o=n[s.id];if(!o)continue;const r=new lt;r.name=`vegetation:${s.id}`,o.pines.length&&(r.add(ND(o.pines)),i.pines+=o.pines.length),o.laurels.length&&(r.add(DD(o.laurels)),i.laurels+=o.laurels.length),o.shrubs.length&&(r.add(OD(o.shrubs)),i.shrubs+=o.shrubs.length),o.grasses.length&&(r.add(UD(o.grasses)),i.grasses+=o.grasses.length),o.crops.length&&(r.add(kD(o.crops)),i.crops+=o.crops.length),o.rocks.length&&(r.add(FD(o.rocks)),i.rocks+=o.rocks.length),o.cliffs.length&&(r.add(BD(o.cliffs)),i.cliffs+=o.cliffs.length),o.snow.length&&(r.add(zD(o.snow)),i.snow+=o.snow.length),o.wetlands.length&&(r.add(HD(o.wetlands)),i.wetlands+=o.wetlands.length);const a=jD(r,s);df.push({group:r,center:a.center,radius:a.radius}),t.add(r)}return e.houses.length&&t.add(WD(e.houses)),e.churches.length&&t.add(XD(e.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${e.houses.length} houses, ${e.churches.length} churches`),t}function ZD(n,e){if(!e){for(const i of df)i.group.visible=!0;return}const t=Ae.fogEnd+$D;for(const i of df)i.group.visible=n.position.distanceTo(i.center)-i.radius<t}const yu=document.getElementById("island-compass"),sh=yu?.querySelector(".compass-track"),tl=document.getElementById("island-name");let q0=null;const hf=Math.PI/2,X0=6,KD=400,JD=2,xu=7,QD=8,e3=6.2,t3=12;let t_=560;const n_=new Map;let jt=null;const oh=new I;function n3(){if(!sh)return;for(const e of Lt){const t=document.createElement("div");t.className="compass-marker"+(e.playable?"":" unreachable"),t.dataset.island=e.id,t.innerHTML=`
      <span class="compass-name">${e.name}</span>
      <span class="compass-dist"></span>
    `,sh.appendChild(t),n_.set(e.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}const n=document.createElement("div");n.className="compass-marker runway-hint hidden",n.innerHTML=`
    <span class="compass-name"></span>
    <span class="compass-dist"></span>
  `,sh.appendChild(n),jt={el:n,name:n.querySelector(".compass-name"),dist:n.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastName:null,lastHidden:!0},$0(),window.addEventListener("resize",$0)}function nl(n,e){if(!jt)return;if(!e){jt.lastHidden||(jt.el.classList.add("hidden"),jt.lastHidden=!0);return}const t=Ae.heightmap.metersPerUnit,i=i_(n),s=e.x-n.position.x,o=e.z-n.position.z,r=Math.sqrt(s*s+o*o)*t/1e3,a=Math.atan2(s,-o);let l=(s_(a-i)/hf*.5+.5)*100;l=Math.max(xu,Math.min(100-xu,l)),jt.lastHidden&&(jt.el.classList.remove("hidden"),jt.lastHidden=!1),e.id!==jt.lastName&&(jt.name.textContent=e.id,jt.lastName=e.id);const u=l.toFixed(1)+"%";u!==jt.lastLeft&&(jt.el.style.left=u,jt.lastLeft=u);const d=r<10?r.toFixed(1)+" km":Math.round(r)+" km";d!==jt.lastDist&&(jt.dist.textContent=d,jt.lastDist=d)}function i_(n){return oh.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(oh.x,-oh.z)}function s_(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const ta=[],Vt=[];function $0(){if(!yu)return;const n=yu.getBoundingClientRect().width;n>0&&(t_=n)}function i3(n){if(!tl)return;const e=n?n.name:"";e!==q0&&(q0=e,e?(tl.textContent=e,tl.classList.add("show")):tl.classList.remove("show"))}function s3(n){if(!yu)return;const e=i_(n),t=Ae.heightmap.metersPerUnit,i=rp(n.position);i3(i),ta.length=0;for(const s of Lt){const o=n_.get(s.id);if(!o)continue;const r=s.x-n.position.x,a=s.z-n.position.z,l=Math.sqrt(r*r+a*a)*t/1e3,u=Math.max(0,l-s.bboxRadius*t/1e3),d=Math.atan2(r,-a),f=s_(d-e);if(i&&s.id===i.id||Math.abs(f)>hf||l<.5||l>KD){ta.push({m:o,distKm:l,edgeKm:u,pct:0,halfPct:0,show:!1});continue}const v=(f/hf*.5+.5)*100,y=(s.name.length*e3+t3)/t_*50;ta.push({m:o,distKm:l,edgeKm:u,pct:v,halfPct:y,show:!0})}Vt.length=0;for(const s of ta)s.show&&Vt.push(s);Vt.sort((s,o)=>s.distKm-o.distKm);for(let s=X0;s<Vt.length;s++)Vt[s].show=!1;Vt.length=Math.min(Vt.length,X0),Vt.sort((s,o)=>s.pct-o.pct);for(let s=0;s<QD;s++){for(let o=0;o<Vt.length-1;o++){const r=Vt[o],a=Vt[o+1],c=r.halfPct+a.halfPct+JD-(a.pct-r.pct);c>0&&(r.pct-=c/2,a.pct+=c/2)}Vt.length&&(Vt[0].pct=Math.max(xu,Vt[0].pct),Vt[Vt.length-1].pct=Math.min(100-xu,Vt[Vt.length-1].pct))}for(const s of ta){const o=s.m,r=!s.show;if(r!==o.lastHidden&&(o.el.classList.toggle("hidden",r),o.lastHidden=r),r)continue;const a=s.pct.toFixed(1)+"%";a!==o.lastLeft&&(o.el.style.left=a,o.lastLeft=a);const c=s.edgeKm<10?s.edgeKm.toFixed(1)+" km":Math.round(s.edgeKm)+" km";c!==o.lastDist&&(o.dist.textContent=c,o.lastDist=c)}}const rh=new I;function o3(){for(const n in J.landedRunways)if(n!==rs&&J.landedRunways[n])return!1;return!0}function r3(n){let e=null,t=1/0;for(const i of ot){if(i.id===rs)continue;const s=n.x-i.x,o=n.z-i.z,r=s*s+o*o;r<t&&(t=r,e=i)}return e?{runway:e,dist:Math.sqrt(t)}:null}function a3(n){return rh.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(-rh.x,-rh.z)}function c3(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}let na=null;function l3(n,e){if(!(D.flightState===De.FLYING)||D.paused||D.tutorial){nl(e,null),Kd(),p0(),na=null;return}const i=e.position;if(o3()){const r=r3(i);r?(nl(e,r.runway),r.dist<Yu.hideDistance?Kd():r.dist<=Yu.showDistance?na!==r.runway.id&&(WI(),na=r.runway.id):r.dist>Yu.rearmDistance&&na===r.runway.id&&(na=null)):nl(e,null)}else nl(e,null),Kd();const s=a3(e);let o=!1;for(const r of ot){const a=i.x-r.x,c=i.z-r.z,l=Math.cos(r.heading),u=Math.sin(r.heading),d=a*l-c*u,f=a*u+c*l;if(Math.abs(d)>oc.corridorHalfWidth||Math.abs(f)>r.length*.5+oc.approachDepth)continue;const m=i.y-r.elevation;if(m<-2||m>oc.maxHeight)continue;if(Math.abs(c3(s-(r.activeHeading+Math.PI)))<=oc.coneTolerance){o=!0;break}}o?XI():p0()}const u3=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],_u=[];let j0=!1;const Y0=document.getElementById("lift-indicator");let Z0=null;function d3(){for(const n of u3){const e=document.getElementById(n.id);if(!e)continue;e.innerHTML="";const t=document.createElement("div");t.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,t.appendChild(i),e.appendChild(t);const s=document.createElement("div");s.className="edge-tape-window",e.appendChild(s);const o=document.createElement("div");o.className="edge-tape-track",o.style.height=n.range*n.pxPerUnit+"px",s.appendChild(o);for(let c=0;c<=n.range;c+=n.tickStep){const l=document.createElement("div"),u=c%n.majorStep===0;if(l.className="edge-tape-tick"+(u?" major":""),l.style.top=(n.range-c)*n.pxPerUnit+"px",u){const d=document.createElement("span");d.className="edge-tape-label",d.textContent=c,l.appendChild(d)}o.appendChild(l)}const r=document.createElement("div");r.className="edge-tape-center-line",s.appendChild(r);const a=document.createElement("div");a.className="edge-tape-current",a.textContent="0",s.appendChild(a),_u.push({cfg:n,win:s,track:o,current:a,lastDisplayed:NaN,winH:0})}j0||(j0=!0,window.addEventListener("resize",()=>{for(const n of _u)n.winH=0}))}function K0(n,e){const t=Math.max(0,Math.min(n.cfg.range,e));let i=n.winH;if(!i){if(i=n.win.clientHeight,i===0)return;n.winH=i}const s=i/2-(n.cfg.range-t)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${s}px)`;const o=Math.round(e);o!==n.lastDisplayed&&(n.current.textContent=o,n.lastDisplayed=o)}function h3(n){if(!n||_u.length===0)return;const e=Rt(n.position.x,n.position.z),t=n.position.y-Math.max(e,Ae.waterLevel);for(const i of _u)i.cfg.id==="speed-tape"?K0(i,D.speed):i.cfg.id==="alt-tape"&&K0(i,t);if(Y0){const i=!!D.inThermal;i!==Z0&&(Y0.classList.toggle("is-active",i),Z0=i)}}const ff=[],il=new Ee,J0=new Ee,sl=he.getObjectByName("paperBody");let Q0=null;(function(){for(const e of[-.95,.95]){const t=new Float32Array(pi.verts*3),i=new Float32Array(pi.verts*3);for(let a=0;a<pi.verts;a++){const c=a/(pi.verts-1);t[a*3]=e,t[a*3+1]=-.05,t[a*3+2]=.42+c*pi.maxLen;const l=1-c;i[a*3]=l,i[a*3+1]=l,i[a*3+2]=l}const s=new gt;s.setAttribute("position",new Nt(t,3)),s.setAttribute("color",new Nt(i,3));const o=new Lu({vertexColors:!0,transparent:!0,opacity:0,blending:Al,depthWrite:!1}),r=new Zv(s,o);he.add(r),ff.push(r)}})();function f3(){const n=sn.stallSpeed+3,e=sn.maxSpeed*.7,t=Gi.clamp((D.speed-n)/(e-n),0,1),i=pi.maxLen*(.3+t*.7),s=Hf();if(s!==Q0){Q0=s,il.set(s?Xt.goldenStreakColor:16777215);for(const o of ff){const r=o.geometry.attributes.color.array;for(let a=0;a<pi.verts;a++){const c=1-a/(pi.verts-1);r[a*3]=c*il.r,r[a*3+1]=c*il.g,r[a*3+2]=c*il.b}o.geometry.attributes.color.needsUpdate=!0}!s&&sl&&sl.material.emissive?.setHex(0)}if(s&&sl){const o=Xt.goldenGlowMin+(Xt.goldenGlowMax-Xt.goldenGlowMin)*(.5+.5*Math.sin(performance.now()*.001*Xt.goldenGlowSpeed));J0.set(Xt.goldenGlowColor).multiplyScalar(o),sl.material.emissive?.copy(J0)}for(const o of ff){const r=o.geometry.attributes.position.array;for(let a=0;a<pi.verts;a++){const c=a/(pi.verts-1);r[a*3+2]=.42+c*i}o.geometry.attributes.position.needsUpdate=!0,o.material.opacity=t*.95}}const p3=.9,o_=.55,m3=35,g3=1.6,r_=new Cu(p3,28);r_.rotateX(-Math.PI/2);const a_=new qn({color:0,transparent:!0,opacity:o_,depthWrite:!1}),zs=new tt(r_,a_);zs.renderOrder=1;function v3(){const n=Rt(he.position.x,he.position.z),e=Math.max(n,Ae.waterLevel),t=Math.max(0,he.position.y-e);zs.position.x=he.position.x,zs.position.z=he.position.z,zs.position.y=e+.04;const i=Math.min(1,t/m3),s=Math.min(1,t/g3);a_.opacity=o_*s*(1-.85*i);const o=1+i*.4;zs.scale.set(o,1,o),zs.visible=he.position.y>e-.5}Xa(()=>import("./test-mode-easter-egg-D2hRZ9fM.js"),__vite__mapDeps([3,4]));U_();s2();S_();M_();$a();J.landedRunways[rs]||(J.landedRunways[rs]=!0,J.discoveredRunways[rs]=!0);if(!J.starterGranted){J.obsidian=(J.obsidian|0)+Ml.starterDiamonds,J.visitedIslands[J.currentIsland]=!0;for(const n of Object.keys(J.gofiosByIsland))(J.gofiosByIsland[n]|0)>0&&(J.visitedIslands[n]=!0);J.starterGranted=!0,Dt()}Hy();ro.init();await Promise.all([k1(),P1()]);ot.forEach(n=>{n.elevation=Math.max(Pr(n.x,n.z),Ae.waterLevel+bl.minAboveWater)});Mt.add(V1());Mt.add(q1());Mt.add(YD());Mt.add(R1());Mt.add(Z1());Mt.add(CN());Mt.add(zs);Mt.add(he);n3();DI();d3();J1();["pointerdown","touchend","click","keydown"].forEach(n=>window.addEventListener(n,Q1));window.addEventListener("click",n=>{const e=n.target.closest("button");e&&e.closest("#welcome-overlay, #pause-overlay, #levels-overlay, #crash, .modal-overlay")&&on("ui-confirm")});const y3=document.getElementById("restart-btn"),bu=document.getElementById("crash");async function c_(){await ao.onCrashRestart(),Bu()}y3.addEventListener("click",c_);window.addEventListener("keydown",n=>{n.code==="Space"&&bu.classList.contains("visible")&&(n.preventDefault(),c_())});function l_(n){bu.classList.remove("visible"),lo(n,{onClose:()=>bu.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>l_("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>l_("shop"));document.getElementById("crash-home-btn").addEventListener("click",()=>{bu.classList.remove("visible"),tc()});Bu();wD(()=>{rD()||tc()});requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});setTimeout(()=>ao.warmup(),5e3);document.addEventListener("visibilitychange",()=>{document.hidden?(by(),$x()):Sy()});ki.isNativePlatform()&&Xa(async()=>{const{App:n}=await import("./index-CVH0YhY8.js");return{App:n}},__vite__mapDeps([5,1])).then(({App:n})=>n.addListener("appStateChange",({isActive:e})=>{if(e){Sy();return}by(),$x()})).catch(n=>console.warn("[lifecycle] appStateChange unavailable",n));let ev=performance.now();function u_(n){requestAnimationFrame(u_);const e=Math.min(.05,(n-ev)/1e3);ev=n,SN(e),aD(e),v2(e),x2(e),M2(e),f3(),v3(),L1(n/1e3),K1(e),ON(e,he),dR(e,he),s3(he),l3(e,he),zI(he),h3(he),tN(e);const t=Mt.fog!==null;ZD(Wt,t),W1(Wt,t),jI(),DR(),$R(n),mn.render(Mt,Wt)}requestAnimationFrame(u_);
