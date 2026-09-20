import{Y as L,V as v,$ as d,a2 as n}from"./pois-B855AqC5.js";import{av as s,ag as P,a5 as E}from"./scene-CeSloYaV.js";const A=typeof window<"u"?new URLSearchParams(window.location.search):null;function p(e){if(A?.get(e)==="1")return!0;try{return localStorage.getItem(e)==="1"}catch{return!1}}const h=p("debugGl"),F=p("debugPerf")||h;let t=null,r=0,a=0;const S=(()=>{try{for(const e of document.querySelectorAll("script")){const l=(e.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(l)return l[1]}}catch{}return"?"})();function B(){t||(t=document.createElement("div"),t.id="debug-perf",t.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),t.textContent="measuring…",document.body.appendChild(t))}const o=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,i=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let m=null;o&&o.addEventListener("click",()=>{n.showPerf=!n.showPerf,o.classList.toggle("off",!n.showPerf)});i&&i.addEventListener("click",()=>{n.showAds=!n.showAds,i.classList.toggle("off",!n.showAds)});function D(){const e=!!d.testMode;e!==m&&(m=e,o&&(o.classList.toggle("visible",e),o.classList.toggle("off",!n.showPerf)),i&&(i.classList.toggle("visible",e),i.classList.toggle("off",!n.showAds)))}function G(e){D();const l=F||d.testMode&&n.showPerf,x=h||d.testMode&&n.showPerf;if(!l){t&&(t.style.display="none"),r=0,a=0;return}if(B(),t.style.display="",r++,!a){a=e;return}const c=e-a;if(c<500)return;const b=Math.round(r*1e3/c),w=Math.round(c/r*10)/10,$=s?s.getPixelRatio():0,y=s?`${s.domElement.width}x${s.domElement.height}`:"?";let f=`Build:    ${S}
FPS:      ${b}
Frame:    ${w} ms
Mobile:   ${P()?"yes":"no"}
DPR set:  ${$.toFixed(2)} (dev ${(window.devicePixelRatio||0).toFixed(2)})
Buffer:   ${y}
Segments: ${L.segments}
Samples:  ${v.sampleCount.toLocaleString("de-DE")}
Audio:    ${E()}`;if(x&&s){const u=s.info.render,g=s.info.memory;f+=`
Calls:    ${u.calls}
Tris:     ${u.triangles.toLocaleString("de-DE")}
Programs: ${s.info.programs?.length??"?"}
Geoms:    ${g.geometries}
Textures: ${g.textures}`}t.textContent=f,r=0,a=e}export{G as updateDebugPerf};
