const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-6c8v8erw.js","assets/index-COBN-aVN.js","assets/index-BNXHsM2Y.js","assets/test-mode-easter-egg-CcqovrZp.js","assets/save-BxtWkdWK.js","assets/index-CVH0YhY8.js"])))=>i.map(i=>d[i]);
import{C as Ii,_ as ru}from"./index-COBN-aVN.js";import{Y as ka,O as Xt,z as te,X as D,M as au,B as St,J as Ks,b as Et,h as gn,W as Ee,V as At,f as Ze,a as li,j as Js,s as M0,e as Nx,d as Pu,q as cl,i as Lt,t as yn,F as He,l as qd,R as _a,D as Xh,A as Rn,c as ll,G as Xc,H as Ar,U as Gs,a0 as Dx,E as ul,$ as w0,u as Iu,n as Nu,o as bt,T as Yr,C as jt,g as $c,Z as Ux,I as E0,S as ts,L as T0,y as cu,P as nn,m as Rr,Q as Ox,p as $a,_ as kx,v as it,w as Fx,x as ja,k as Du,r as Yi,N as zx,K as Bx}from"./save-BxtWkdWK.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Wn={pitch:0,roll:0,brake:!1,boost:!1,isInputActive:!1,activeInputType:"none"};let dl=!1;function A0(){dl=!0}function Hx(){return dl?(dl=!1,!0):!1}function $h(){dl=!1}let hl=!1;function R0(){hl=!0}function Gx(){return hl?(hl=!1,!0):!1}function lu(){hl=!1}const xt={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};let Ti=!1;function Vx(){Ti=!1}function Wx(){return Ti}function qx(){const n=(xt.down?1:0)-(xt.up?1:0),e=(xt.right?1:0)-(xt.left?1:0),t=xt.up||xt.down||xt.left||xt.right,i=xt.brake||xt.boost||xt.oneShot;return{pitch:n,roll:e,brake:xt.brake,boost:xt.boost,isActive:t||i}}function L0(n,e){switch(n.key){case"ArrowUp":case"w":case"W":xt.up=e,Ti=!0;break;case"ArrowDown":case"s":case"S":xt.down=e,Ti=!0;break;case"ArrowLeft":case"a":case"A":xt.left=e,Ti=!0;break;case"ArrowRight":case"d":case"D":xt.right=e,Ti=!0;break;case" ":case"Spacebar":xt.brake=e&&au(),Ti=!0,n.preventDefault();break;case"Shift":e&&!xt.boost&&R0(),xt.boost=e,Ti=!0;break;case"f":case"F":e&&!xt.oneShot&&A0(),xt.oneShot=e,Ti=!0;break;case"t":case"T":e&&(te.testMode=!te.testMode,ka(),Xt());break;case"b":case"B":if(e&&te.testMode){const t=St.oneShot.tiers.length-1,i=D.boosterOverride!=null?D.boosterOverride:4;D.boosterOverride=(i+1)%(t+1)}break}}window.addEventListener("keydown",n=>L0(n,!0));window.addEventListener("keyup",n=>L0(n,!1));function oo(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}oo()&&document.body.classList.add("touch-mode");const Rs=document.getElementById("touch-joystick-zone"),Ri=document.getElementById("touch-joystick"),cr=Ri?.querySelector(".touch-joystick-thumb"),ns=document.getElementById("touch-brake"),lr=document.getElementById("touch-boost"),ei=document.getElementById("touch-oneshot"),Xx=document.getElementById("touch-boost-corner"),$f=document.getElementById("touch-actions"),jf=document.getElementById("map-btn"),hi=document.getElementById("map-card"),is=document.getElementById("map-card-backdrop"),Ya=60,Uu=8;let ba=null,Xd=0,$d=0,jd=!0;function fl(n){jd=!!n,jd||jh()}const Jt={pitch:0,roll:0,brake:!1,boost:!1,isActive:!1};let ro=!1;function $x(){return ro}function jx(){ro=!1}function Yx(){return Jt}const Zx=["welcome-overlay","pause-overlay","levels-overlay","crash","hangar-overlay","shop-overlay","settings-overlay","obsidian-confirm","reset-confirm","imprint-overlay","licenses-overlay"];function Kx(){for(const n of Zx){const e=document.getElementById(n);if(e&&e.classList.contains("visible"))return!0}return!1}function jh(){ba=null,Jt.pitch=0,Jt.roll=0,Jt.isActive=!1,Ri&&(Ri.hidden=!0,Ri.setAttribute("aria-hidden","true")),cr&&(cr.style.transform="translate(0px, 0px)")}function Jx(n){if(jd&&n.pointerType==="touch"&&ba===null&&!Kx()){ba=n.pointerId,Xd=n.clientX,$d=n.clientY,Ri&&(Ri.style.left=Xd+"px",Ri.style.top=$d+"px",Ri.hidden=!1,Ri.setAttribute("aria-hidden","false")),cr&&(cr.style.transform="translate(0px, 0px)"),Jt.isActive=!0,ro=!0;try{Rs.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function Qx(n){if(n.pointerId!==ba)return;let e=n.clientX-Xd,t=n.clientY-$d;const i=Math.hypot(e,t);let s=e,o=t;if(i>Ya&&(s=e*Ya/i,o=t*Ya/i),cr&&(cr.style.transform=`translate(${s.toFixed(1)}px, ${o.toFixed(1)}px)`),i<=Uu)Jt.pitch=0,Jt.roll=0;else{const r=Math.min(1,(i-Uu)/(Ya-Uu));Jt.roll=e/i*r,Jt.pitch=t/i*r}ro=!0}function Yf(n){if(n.pointerId===ba){try{Rs.releasePointerCapture?.(n.pointerId)}catch{}jh()}}Rs&&(Rs.addEventListener("pointerdown",Jx),Rs.addEventListener("pointermove",Qx),Rs.addEventListener("pointerup",Yf),Rs.addEventListener("pointercancel",Yf));let Sa=null;const Ma=new Set;function Ui(n,e){n&&n.classList.toggle("is-pressed",!!e)}function e_(n){if(!au()){n.preventDefault();return}Sa=n.pointerId,Jt.brake=!0,ro=!0,Ui(ns,!0);try{ns.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function t_(n){n.pointerId===Sa&&(Sa=null,Jt.brake=!1,Ui(ns,!1))}function C0(n){const e=Ma.size===0;Ma.add(n.pointerId),Jt.boost=!0,ro=!0,e&&R0(),Ui(lr,!0);try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function P0(n){Ma.delete(n.pointerId)&&Ma.size===0&&(Jt.boost=!1,Ui(lr,!1))}const n_=140;let Za=null;function i_(n){A0(),ro=!0,Ui(ei,!0),Za&&clearTimeout(Za),Za=setTimeout(()=>{Ui(ei,!1),Za=null},n_),n.preventDefault()}function Yh(n,e,t){n&&(n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.addEventListener("contextmenu",i=>i.preventDefault()))}Yh(ns,e_,t_);Yh(lr,C0,P0);Yh(Xx,C0,P0);ei&&(ei.addEventListener("pointerdown",i_),ei.addEventListener("contextmenu",n=>n.preventDefault()));const s_=1e3;let Zf=null,Kf=-1,Jf=-1,Qf=-1,Lr=0,pl=!0,Ka=!1;function Ou(n){n!==!pl&&(pl=!n,ei&&(ei.hidden=!n),n&&!Ka?($f?.classList.add("has-oneshot"),Ka=!0):!n&&Ka&&($f?.classList.remove("has-oneshot"),Ka=!1))}function o_(){const n=!au();n!==Zf&&(ns&&ns.classList.toggle("is-locked",n),n&&Jt.brake&&(Jt.brake=!1,Sa=null,Ui(ns,!1)),Zf=n);const e=Ks();if(e!==Kf){if(ei&&e>0){const i=St.oneShot.tiers[e]?.color??St.oneShot.tiers[0].color,s=i>>16&255,o=i>>8&255,r=i&255;ei.style.setProperty("--tier-color",`rgba(${s}, ${o}, ${r}, 0.5)`)}Kf=e}if(e===0)Ou(!1),Lr=0;else{const i=D.boostFuelOneshot;Math.abs(i-Jf)>.005&&(ei&&ei.style.setProperty("--fuel",i.toFixed(3)),Jf=i),i<=.001?(Lr===0&&(Lr=performance.now()),!pl&&performance.now()-Lr>=s_&&Ou(!1)):(Lr=0,pl&&Ou(!0))}const t=D.boostFuelGrey;Math.abs(t-Qf)>.005&&(lr&&lr.style.setProperty("--fuel",t.toFixed(3)),Qf=t)}function I0(){jh(),Sa=null,Ma.clear(),Jt.brake=!1,Jt.boost=!1,Ui(ns,!1),Ui(lr,!1)}document.addEventListener("visibilitychange",()=>{document.hidden&&I0()});window.addEventListener("blur",I0);let N0=!1;function r_(){!hi||hi.classList.contains("is-open")||(N0=D.paused,D.paused=!0,hi.classList.add("is-open"),hi.setAttribute("aria-modal","true"),is&&(is.classList.add("is-open"),is.setAttribute("aria-hidden","false")))}function Zh(){!hi||!hi.classList.contains("is-open")||(hi.classList.remove("is-open"),hi.removeAttribute("aria-modal"),is&&(is.classList.remove("is-open"),is.setAttribute("aria-hidden","true")),N0||(D.paused=!1))}jf&&jf.addEventListener("click",()=>{hi?.classList.contains("is-open")?Zh():r_()});is&&is.addEventListener("click",Zh);document.addEventListener("keydown",n=>{n.key==="Escape"&&hi?.classList.contains("is-open")&&(Zh(),n.stopImmediatePropagation())});const a_=`The MIT License

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
`,c_=`MIT License

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
`,l_=`Copyright 2006 The Inconsolata Project Authors (https://github.com/cyrealtype/Inconsolata)

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
`,u_=`Material Symbols
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
   limitations under the License.`,d_=[{name:"three.js",license:"MIT License",text:a_},{name:"Capacitor",license:"MIT License",text:c_},{name:"Inconsolata",license:"SIL Open Font License 1.1",text:l_},{name:"Material Symbols",license:"Apache License 2.0",text:u_}],ep=document.getElementById("licenses-list");if(ep)for(const n of d_){const e=document.createElement("section");e.className="license-item";const t=document.createElement("div");t.className="license-head";const i=document.createElement("span");i.className="license-name",i.textContent=n.name;const s=document.createElement("span");s.className="license-tag",s.textContent=n.license,t.append(i,s);const o=document.createElement("details");o.className="license-details";const r=document.createElement("summary");r.textContent="Lizenztext anzeigen";const a=document.createElement("pre");a.className="license-text",a.textContent=n.text.trim(),o.append(r,a),e.append(t,o),ep.append(e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kh="160",h_=0,tp=1,f_=2,D0=1,p_=2,Ei=3,us=0,bn=1,Zt=2,ss=0,Yo=1,ml=2,np=3,ip=4,m_=5,Ls=100,g_=101,v_=102,sp=103,op=104,y_=200,x_=201,__=202,b_=203,Yd=204,Zd=205,S_=206,M_=207,w_=208,E_=209,T_=210,A_=211,R_=212,L_=213,C_=214,P_=0,I_=1,N_=2,gl=3,D_=4,U_=5,O_=6,k_=7,Jh=0,F_=1,z_=2,os=0,B_=1,H_=2,G_=3,V_=4,W_=5,q_=6,U0=300,ur=301,dr=302,Kd=303,Jd=304,uu=306,Qd=1e3,Zn=1001,eh=1002,pn=1003,rp=1004,ku=1005,On=1006,X_=1007,wa=1008,rs=1009,$_=1010,j_=1011,Qh=1012,O0=1013,Zi=1014,Ki=1015,Ea=1016,k0=1017,F0=1018,Vs=1020,Y_=1021,Kn=1023,Z_=1024,K_=1025,Ws=1026,hr=1027,J_=1028,z0=1029,Q_=1030,B0=1031,H0=1033,Fu=33776,zu=33777,Bu=33778,Hu=33779,ap=35840,cp=35841,lp=35842,up=35843,G0=36196,dp=37492,hp=37496,fp=37808,pp=37809,mp=37810,gp=37811,vp=37812,yp=37813,xp=37814,_p=37815,bp=37816,Sp=37817,Mp=37818,wp=37819,Ep=37820,Tp=37821,Gu=36492,Ap=36494,Rp=36495,eb=36283,Lp=36284,Cp=36285,Pp=36286,V0=3e3,qs=3001,tb=3200,nb=3201,W0=0,ib=1,Fn="",Ut="srgb",Oi="srgb-linear",ef="display-p3",du="display-p3-linear",vl="linear",dt="srgb",yl="rec709",xl="p3",mo=7680,Ip=519,sb=512,ob=513,rb=514,q0=515,ab=516,cb=517,lb=518,ub=519,Np=35044,Dp="300 es",th=1035,Li=2e3,_l=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Up=1234567;const Zo=Math.PI/180,Ta=180/Math.PI;function ao(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function tf(n,e){return(n%e+e)%e}function db(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function hb(n,e,t){return n!==e?(t-n)/(e-n):0}function sa(n,e,t){return(1-t)*n+t*e}function fb(n,e,t,i){return sa(n,e,1-Math.exp(-t*i))}function pb(n,e=1){return e-Math.abs(tf(n,e*2)-e)}function mb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function gb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yb(n,e){return n+Math.random()*(e-n)}function xb(n){return n*(.5-Math.random())}function _b(n){n!==void 0&&(Up=n);let e=Up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bb(n){return n*Zo}function Sb(n){return n*Ta}function nh(n){return(n&n-1)===0&&n!==0}function Mb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function bl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wb(n,e,t,i,s){const o=Math.cos,r=Math.sin,a=o(t/2),c=r(t/2),l=o((e+i)/2),u=r((e+i)/2),d=o((e-i)/2),f=r((e-i)/2),m=o((i-e)/2),v=r((i-e)/2);switch(s){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*v,c*m,a*l);break;case"YXY":n.set(c*m,a*u,c*v,a*l);break;case"ZYZ":n.set(c*v,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Oo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ki={DEG2RAD:Zo,RAD2DEG:Ta,generateUUID:ao,clamp:Yt,euclideanModulo:tf,mapLinear:db,inverseLerp:hb,lerp:sa,damp:fb,pingpong:pb,smoothstep:mb,smootherstep:gb,randInt:vb,randFloat:yb,randFloatSpread:xb,seededRandom:_b,degToRad:bb,radToDeg:Sb,isPowerOfTwo:nh,ceilPowerOfTwo:Mb,floorPowerOfTwo:bl,setQuaternionFromProperEuler:wb,normalize:un,denormalize:Oo};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*i-r*s+e.x,this.y=o*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,s,o,r,a,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l)}set(e,t,i,s,o,r,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=o,u[5]=c,u[6]=i,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],m=i[5],v=i[8],y=s[0],p=s[3],h=s[6],_=s[1],g=s[4],b=s[7],R=s[2],E=s[5],T=s[8];return o[0]=r*y+a*_+c*R,o[3]=r*p+a*g+c*E,o[6]=r*h+a*b+c*T,o[1]=l*y+u*_+d*R,o[4]=l*p+u*g+d*E,o[7]=l*h+u*b+d*T,o[2]=f*y+m*_+v*R,o[5]=f*p+m*g+v*E,o[8]=f*h+m*b+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*r*u-t*a*l-i*o*u+i*a*c+s*o*l-s*r*c}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*r-a*l,f=a*c-u*o,m=l*o-r*c,v=t*d+i*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(s*l-u*i)*y,e[2]=(a*i-s*r)*y,e[3]=f*y,e[4]=(u*t-s*c)*y,e[5]=(s*o-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(r*t-i*o)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(i*c,i*l,-i*(c*r+l*a)+r+e,-s*l,s*c,-s*(-l*r+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vu.makeScale(e,t)),this}rotate(e){return this.premultiply(Vu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vu=new Be;function X0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eb(){const n=Sl("canvas");return n.style.display="block",n}const Op={};function oa(n){n in Op||(Op[n]=!0,console.warn(n))}const kp=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fp=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ja={[Oi]:{transfer:vl,primaries:yl,toReference:n=>n,fromReference:n=>n},[Ut]:{transfer:dt,primaries:yl,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[du]:{transfer:vl,primaries:xl,toReference:n=>n.applyMatrix3(Fp),fromReference:n=>n.applyMatrix3(kp)},[ef]:{transfer:dt,primaries:xl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fp),fromReference:n=>n.applyMatrix3(kp).convertLinearToSRGB()}},Tb=new Set([Oi,du]),st={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Tb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ja[e].toReference,s=Ja[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ja[n].primaries},getTransfer:function(n){return n===Fn?vl:Ja[n].transfer}};function Ko(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let go;class $0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{go===void 0&&(go=Sl("canvas")),go.width=e.width,go.height=e.height;const i=go.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=go}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Ko(o[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ko(t[i]/255)*255):t[i]=Ko(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ab=0;class j0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(qu(s[r].image)):o.push(qu(s[r]))}else o=qu(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function qu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rb=0;class Cn extends br{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=Zn,s=Zn,o=On,r=wa,a=Kn,c=rs,l=Cn.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ao(),this.name="",this.source=new j0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qs?Ut:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qd:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qd:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?qs:V0}set encoding(e){oa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qs?Ut:Fn}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=U0;Cn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,i=0,s=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],v=c[9],y=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,b=(m+1)/2,R=(h+1)/2,E=(u+f)/4,T=(d+y)/4,k=(v+p)/4;return g>b&&g>R?g<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(g),s=E/i,o=T/i):b>R?b<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(b),i=E/s,o=k/s):R<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(R),i=T/o,s=k/o),this.set(i,s,o,t),this}let _=Math.sqrt((p-v)*(p-v)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-v)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((l+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lb extends br{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(oa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qs?Ut:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new j0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qs extends Lb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Y0 extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cb extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ct{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,r,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3];const f=o[r+0],m=o[r+1],v=o[r+2],y=o[r+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=v,e[t+3]=y;return}if(d!==y||c!==f||l!==m||u!==v){let p=1-a;const h=c*f+l*m+u*v+d*y,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const R=Math.sqrt(g),E=Math.atan2(R,h*_);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const b=a*_;if(c=c*p+f*b,l=l*p+m*b,u=u*p+v*b,d=d*p+y*b,p===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=R,l*=R,u*=R,d*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,o,r){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=o[r],f=o[r+1],m=o[r+2],v=o[r+3];return e[t]=a*v+u*d+c*m-l*f,e[t+1]=c*v+u*f+l*d-a*m,e[t+2]=l*v+u*m+a*f-c*d,e[t+3]=u*v-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,r=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(o/2),f=c(i/2),m=c(s/2),v=c(o/2);switch(r){case"XYZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"YZX":this._x=f*u*d+l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d-f*m*v;break;case"XZY":this._x=f*u*d-l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],r=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(o-l)*m,this._z=(r-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(o+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(r-s)/m,this._x=(o+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,r=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+r*a+s*l-o*c,this._y=s*u+r*c+o*a-i*l,this._z=o*u+r*l+i*c-s*a,this._w=r*u-i*a-s*c-o*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,r=this._w;let a=r*e._w+i*e._x+s*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*o+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=o*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(o),i*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,r=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,r=e.y,a=e.z,c=e.w,l=2*(r*s-a*i),u=2*(a*t-o*s),d=2*(o*i-r*t);return this.x=t+c*l+r*d-a*u,this.y=i+c*u+a*l-o*d,this.z=s+c*d+o*u-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,r=t.x,a=t.y,c=t.z;return this.x=s*c-o*a,this.y=o*r-i*c,this.z=i*a-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new I,zp=new Ct;class co{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,qn):qn.fromBufferAttribute(o,r),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}const s=e.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),ec.subVectors(this.max,Cr),vo.subVectors(e.a,Cr),yo.subVectors(e.b,Cr),xo.subVectors(e.c,Cr),zi.subVectors(yo,vo),Bi.subVectors(xo,yo),xs.subVectors(vo,xo);let t=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-xs.z,xs.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,xs.z,0,-xs.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-xs.y,xs.x,0];return!$u(t,vo,yo,xo,ec)||(t=[1,0,0,0,1,0,0,0,1],!$u(t,vo,yo,xo,ec))?!1:(tc.crossVectors(zi,Bi),t=[tc.x,tc.y,tc.z],$u(t,vo,yo,xo,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,Qa=new co,vo=new I,yo=new I,xo=new I,zi=new I,Bi=new I,xs=new I,Cr=new I,ec=new I,tc=new I,_s=new I;function $u(n,e,t,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){_s.fromArray(n,o);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),u=i.dot(_s);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Pb=new co,Pr=new I,ju=new I;class ms{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Pb.setFromPoints(e).getCenter(i);let s=0;for(let o=0,r=e.length;o<r;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(ju)),this.expandByPoint(Pr.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new I,Yu=new I,nc=new I,Hi=new I,Zu=new I,ic=new I,Ku=new I;class nf{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yu.copy(e).add(t).multiplyScalar(.5),nc.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Yu);const o=e.distanceTo(t)*.5,r=-this.direction.dot(nc),a=Hi.dot(this.direction),c=-Hi.dot(nc),l=Hi.lengthSq(),u=Math.abs(1-r*r);let d,f,m,v;if(u>0)if(d=r*c-a,f=r*a-c,v=o*u,d>=0)if(f>=-v)if(f<=v){const y=1/u;d*=y,f*=y,m=d*(d+r*f+2*a)+f*(r*d+f+2*c)+l}else f=o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;else f=-o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-r*o+a)),f=d>0?-o:Math.min(Math.max(-o,-c),o),m=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-o,-c),o),m=f*(f+2*c)+l):(d=Math.max(0,-(r*o+a)),f=d>0?o:Math.min(Math.max(-o,-c),o),m=-d*d+f*(f+2*c)+l);else f=r>0?-o:o,d=Math.max(0,-(r*f+a)),m=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yu).addScaledVector(nc,f),m}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,o=e.radius*e.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=i-r,c=i+r;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,r,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(o=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(o=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,o){Zu.subVectors(t,e),ic.subVectors(i,e),Ku.crossVectors(Zu,ic);let r=this.direction.dot(Ku),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Hi.subVectors(this.origin,e);const c=a*this.direction.dot(ic.crossVectors(Hi,ic));if(c<0)return null;const l=a*this.direction.dot(Zu.cross(Hi));if(l<0||c+l>r)return null;const u=-a*Hi.dot(Ku);return u<0?null:this.at(u/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p)}set(e,t,i,s,o,r,a,c,l,u,d,f,m,v,y,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=o,h[5]=r,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/_o.setFromMatrixColumn(e,0).length(),o=1/_o.setFromMatrixColumn(e,1).length(),r=1/_o.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,r=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=r*u,m=r*d,v=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+v*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=v+m*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,v=l*u,y=l*d;t[0]=f+y*a,t[4]=v*a-m,t[8]=r*l,t[1]=r*d,t[5]=r*u,t[9]=-a,t[2]=m*a-v,t[6]=y+f*a,t[10]=r*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,v=l*u,y=l*d;t[0]=f-y*a,t[4]=-r*d,t[8]=v+m*a,t[1]=m+v*a,t[5]=r*u,t[9]=y-f*a,t[2]=-r*l,t[6]=a,t[10]=r*c}else if(e.order==="ZYX"){const f=r*u,m=r*d,v=a*u,y=a*d;t[0]=c*u,t[4]=v*l-m,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=m*l-v,t[2]=-l,t[6]=a*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,m=r*l,v=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=v*d+m,t[1]=d,t[5]=r*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+v,t[10]=f-y*d}else if(e.order==="XZY"){const f=r*c,m=r*l,v=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=r*u,t[9]=m*d-v,t[2]=v*d-m,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Nb)}lookAt(e,t,i){const s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Gi.crossVectors(i,wn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Gi.crossVectors(i,wn)),Gi.normalize(),sc.crossVectors(wn,Gi),s[0]=Gi.x,s[4]=sc.x,s[8]=wn.x,s[1]=Gi.y,s[5]=sc.y,s[9]=wn.y,s[2]=Gi.z,s[6]=sc.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,r=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],m=i[13],v=i[2],y=i[6],p=i[10],h=i[14],_=i[3],g=i[7],b=i[11],R=i[15],E=s[0],T=s[4],k=s[8],M=s[12],w=s[1],V=s[5],W=s[9],oe=s[13],O=s[2],q=s[6],j=s[10],Z=s[14],B=s[3],J=s[7],ae=s[11],ue=s[15];return o[0]=r*E+a*w+c*O+l*B,o[4]=r*T+a*V+c*q+l*J,o[8]=r*k+a*W+c*j+l*ae,o[12]=r*M+a*oe+c*Z+l*ue,o[1]=u*E+d*w+f*O+m*B,o[5]=u*T+d*V+f*q+m*J,o[9]=u*k+d*W+f*j+m*ae,o[13]=u*M+d*oe+f*Z+m*ue,o[2]=v*E+y*w+p*O+h*B,o[6]=v*T+y*V+p*q+h*J,o[10]=v*k+y*W+p*j+h*ae,o[14]=v*M+y*oe+p*Z+h*ue,o[3]=_*E+g*w+b*O+R*B,o[7]=_*T+g*V+b*q+R*J,o[11]=_*k+g*W+b*j+R*ae,o[15]=_*M+g*oe+b*Z+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],r=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],v=e[3],y=e[7],p=e[11],h=e[15];return v*(+o*c*d-s*l*d-o*a*f+i*l*f+s*a*m-i*c*m)+y*(+t*c*m-t*l*f+o*r*f-s*r*m+s*l*u-o*c*u)+p*(+t*l*d-t*a*m-o*r*d+i*r*m+o*a*u-i*l*u)+h*(-s*a*u-t*c*d+t*a*f+s*r*d-i*r*f+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],r=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],v=e[12],y=e[13],p=e[14],h=e[15],_=d*p*l-y*f*l+y*c*m-a*p*m-d*c*h+a*f*h,g=v*f*l-u*p*l-v*c*m+r*p*m+u*c*h-r*f*h,b=u*y*l-v*d*l+v*a*m-r*y*m-u*a*h+r*d*h,R=v*d*c-u*y*c-v*a*f+r*y*f+u*a*p-r*d*p,E=t*_+i*g+s*b+o*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(y*f*o-d*p*o-y*s*m+i*p*m+d*s*h-i*f*h)*T,e[2]=(a*p*o-y*c*o+y*s*l-i*p*l-a*s*h+i*c*h)*T,e[3]=(d*c*o-a*f*o-d*s*l+i*f*l+a*s*m-i*c*m)*T,e[4]=g*T,e[5]=(u*p*o-v*f*o+v*s*m-t*p*m-u*s*h+t*f*h)*T,e[6]=(v*c*o-r*p*o-v*s*l+t*p*l+r*s*h-t*c*h)*T,e[7]=(r*f*o-u*c*o+u*s*l-t*f*l-r*s*m+t*c*m)*T,e[8]=b*T,e[9]=(v*d*o-u*y*o-v*i*m+t*y*m+u*i*h-t*d*h)*T,e[10]=(r*y*o-v*a*o+v*i*l-t*y*l-r*i*h+t*a*h)*T,e[11]=(u*a*o-r*d*o-u*i*l+t*d*l+r*i*m-t*a*m)*T,e[12]=R*T,e[13]=(u*y*s-v*d*s+v*i*f-t*y*f-u*i*p+t*d*p)*T,e[14]=(v*a*s-r*y*s-v*i*c+t*y*c+r*i*p-t*a*p)*T,e[15]=(r*d*s-u*a*s+u*i*c-t*d*c-r*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,r=e.x,a=e.y,c=e.z,l=o*r,u=o*a;return this.set(l*r+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*r,0,l*c-s*a,u*c+s*r,o*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,r){return this.set(1,i,o,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,r=t._y,a=t._z,c=t._w,l=o+o,u=r+r,d=a+a,f=o*l,m=o*u,v=o*d,y=r*u,p=r*d,h=a*d,_=c*l,g=c*u,b=c*d,R=i.x,E=i.y,T=i.z;return s[0]=(1-(y+h))*R,s[1]=(m+b)*R,s[2]=(v-g)*R,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(f+h))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(v+g)*T,s[9]=(p-_)*T,s[10]=(1-(f+y))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let o=_o.set(s[0],s[1],s[2]).length();const r=_o.set(s[4],s[5],s[6]).length(),a=_o.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);const l=1/o,u=1/r,d=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),i.x=o,i.y=r,i.z=a,this}makePerspective(e,t,i,s,o,r,a=Li){const c=this.elements,l=2*o/(t-e),u=2*o/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,v;if(a===Li)m=-(r+o)/(r-o),v=-2*r*o/(r-o);else if(a===_l)m=-r/(r-o),v=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,o,r,a=Li){const c=this.elements,l=1/(t-e),u=1/(i-s),d=1/(r-o),f=(t+e)*l,m=(i+s)*u;let v,y;if(a===Li)v=(r+o)*d,y=-2*d;else if(a===_l)v=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _o=new I,Xn=new Ke,Ib=new I(0,0,0),Nb=new I(1,1,1),Gi=new I,sc=new I,wn=new I,Bp=new Ke,Hp=new Ct;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Yt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hp.setFromEuler(this),this.setFromQuaternion(Hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Db=0;const Gp=new I,bo=new Ct,_i=new Ke,oc=new I,Ir=new I,Ub=new I,Ob=new Ct,Vp=new I(1,0,0),Wp=new I(0,1,0),qp=new I(0,0,1),kb={type:"added"},Fb={type:"removed"};class Ot extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new I,t=new Gn,i=new Ct,s=new I(1,1,1);function o(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Be}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.multiply(bo),this}rotateOnWorldAxis(e,t){return bo.setFromAxisAngle(e,t),this.quaternion.premultiply(bo),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oc.copy(e):oc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ir,oc,this.up):_i.lookAt(oc,Ir,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),bo.setFromRotationMatrix(_i),this.quaternion.premultiply(bo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(kb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++){const a=s[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];o(e.shapes,d)}else o(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(e.materials,this.material[c]));s.material=a}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(e.animations,c))}}if(t){const a=r(e.geometries),c=r(e.materials),l=r(e.textures),u=r(e.images),d=r(e.shapes),f=r(e.skeletons),m=r(e.animations),v=r(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function r(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new I,bi=new I,Ju=new I,Si=new I,So=new I,Mo=new I,Xp=new I,Qu=new I,ed=new I,td=new I;let rc=!1;class kn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){$n.subVectors(s,t),bi.subVectors(i,t),Ju.subVectors(e,t);const r=$n.dot($n),a=$n.dot(bi),c=$n.dot(Ju),l=bi.dot(bi),u=bi.dot(Ju),d=r*l-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,m=(l*c-a*u)*f,v=(r*u-a*c)*f;return o.set(1-m-v,v,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,s,o,r,a,c){return rc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rc=!0),this.getInterpolation(e,t,i,s,o,r,a,c)}static getInterpolation(e,t,i,s,o,r,a,c){return this.getBarycoord(e,t,i,s,Si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Si.x),c.addScaledVector(r,Si.y),c.addScaledVector(a,Si.z),c)}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),bi.subVectors(e,t),$n.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),$n.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,o){return rc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rc=!0),kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}getInterpolation(e,t,i,s,o){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let r,a;So.subVectors(s,i),Mo.subVectors(o,i),Qu.subVectors(e,i);const c=So.dot(Qu),l=Mo.dot(Qu);if(c<=0&&l<=0)return t.copy(i);ed.subVectors(e,s);const u=So.dot(ed),d=Mo.dot(ed);if(u>=0&&d<=u)return t.copy(s);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return r=c/(c-u),t.copy(i).addScaledVector(So,r);td.subVectors(e,o);const m=So.dot(td),v=Mo.dot(td);if(v>=0&&m<=v)return t.copy(o);const y=m*l-c*v;if(y<=0&&l>=0&&v<=0)return a=l/(l-v),t.copy(i).addScaledVector(Mo,a);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return Xp.subVectors(o,s),a=(d-u)/(d-u+(m-v)),t.copy(s).addScaledVector(Xp,a);const h=1/(p+y+f);return r=y*h,a=f*h,t.copy(i).addScaledVector(So,r).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const K0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},ac={h:0,s:0,l:0};function nd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Te{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=tf(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,r=2*i-o;this.r=nd(r,o,e+1/3),this.g=nd(r,o,e),this.b=nd(r,o,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=K0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return st.fromWorkingColorSpace(tn.copy(this),e),Math.round(Yt(tn.r*255,0,255))*65536+Math.round(Yt(tn.g*255,0,255))*256+Math.round(Yt(tn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(tn.copy(this),t);const i=tn.r,s=tn.g,o=tn.b,r=Math.max(i,s,o),a=Math.min(i,s,o);let c,l;const u=(a+r)/2;if(a===r)c=0,l=0;else{const d=r-a;switch(l=u<=.5?d/(r+a):d/(2-r-a),r){case i:c=(s-o)/d+(s<o?6:0);break;case s:c=(o-i)/d+2;break;case o:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ut){st.fromWorkingColorSpace(tn.copy(this),e);const t=tn.r,i=tn.g,s=tn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(ac);const i=sa(Vi.h,ac.h,t),s=sa(Vi.s,ac.s,t),o=sa(Vi.l,ac.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Te;Te.NAMES=K0;let zb=0;class lo extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Yo,this.side=us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yd,this.blendDst=Zd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ip,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yo&&(i.blending=this.blending),this.side!==us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yd&&(i.blendSrc=this.blendSrc),this.blendDst!==Zd&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ip&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(t){const o=s(e.textures),r=s(e.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vn extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new I,cc=new pe;class Nt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Np,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)cc.fromBufferAttribute(this,t),cc.applyMatrix3(e),this.setXY(t,cc.x,cc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Oo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),s=un(s,this.array),o=un(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class J0 extends Nt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q0 extends Nt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qe extends Nt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Bb=0;const Nn=new Ke,id=new Ot,wo=new I,En=new co,Nr=new co,Ht=new I;class gt extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?Q0:J0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Qe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];En.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(En.min,Nr.min),En.expandByPoint(Ht),Ht.addVectors(En.max,Nr.max),En.expandByPoint(Ht)):(En.expandByPoint(Nr.min),En.expandByPoint(Nr.max))}En.getCenter(i);let s=0;for(let o=0,r=e.count;o<r;o++)Ht.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Ht));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ht.fromBufferAttribute(a,l),c&&(wo.fromBufferAttribute(e,l),Ht.add(wo)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,o=t.normal.array,r=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<a;w++)l[w]=new I,u[w]=new I;const d=new I,f=new I,m=new I,v=new pe,y=new pe,p=new pe,h=new I,_=new I;function g(w,V,W){d.fromArray(s,w*3),f.fromArray(s,V*3),m.fromArray(s,W*3),v.fromArray(r,w*2),y.fromArray(r,V*2),p.fromArray(r,W*2),f.sub(d),m.sub(d),y.sub(v),p.sub(v);const oe=1/(y.x*p.y-p.x*y.y);isFinite(oe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(oe),_.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(oe),l[w].add(h),l[V].add(h),l[W].add(h),u[w].add(_),u[V].add(_),u[W].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,O=W.count;for(let q=oe,j=oe+O;q<j;q+=3)g(i[q+0],i[q+1],i[q+2])}const R=new I,E=new I,T=new I,k=new I;function M(w){T.fromArray(o,w*3),k.copy(T);const V=l[w];R.copy(V),R.sub(T.multiplyScalar(T.dot(V))).normalize(),E.crossVectors(k,V);const oe=E.dot(u[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=oe}for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,O=W.count;for(let q=oe,j=oe+O;q<j;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,y),r.fromBufferAttribute(t,p),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),a.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,o),d.subVectors(s,o),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let h=0;h<u;h++)f[v++]=l[m++]}return new Nt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gt,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,i);t.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const o=e.morphAttributes;for(const l in o){const u=[],d=o[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,u=r.length;l<u;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $p=new Ke,bs=new nf,lc=new ms,jp=new I,Eo=new I,To=new I,Ao=new I,sd=new I,uc=new I,dc=new pe,hc=new pe,fc=new pe,Yp=new I,Zp=new I,Kp=new I,pc=new I,mc=new I;class tt extends Ot{constructor(e=new gt,t=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(o&&a){uc.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const u=a[c],d=o[c];u!==0&&(sd.fromBufferAttribute(d,e),r?uc.addScaledVector(sd,u):uc.addScaledVector(sd.sub(t),u))}t.add(uc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(o),bs.copy(e.ray).recast(e.near),!(lc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(lc,jp)===null||bs.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&($p.copy(o).invert(),bs.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&bs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,i){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,d=o.attributes.normal,f=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(r))for(let v=0,y=f.length;v<y;v++){const p=f[v],h=r[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=a.getX(b),T=a.getX(b+1),k=a.getX(b+2);s=gc(this,h,e,i,l,u,d,E,T,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=v,h=y;p<h;p+=3){const _=a.getX(p),g=a.getX(p+1),b=a.getX(p+2);s=gc(this,r,e,i,l,u,d,_,g,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let v=0,y=f.length;v<y;v++){const p=f[v],h=r[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=b,T=b+1,k=b+2;s=gc(this,h,e,i,l,u,d,E,T,k),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=v,h=y;p<h;p+=3){const _=p,g=p+1,b=p+2;s=gc(this,r,e,i,l,u,d,_,g,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Hb(n,e,t,i,s,o,r,a){let c;if(e.side===bn?c=i.intersectTriangle(r,o,s,!0,a):c=i.intersectTriangle(s,o,r,e.side===us,a),c===null)return null;mc.copy(a),mc.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(mc);return l<t.near||l>t.far?null:{distance:l,point:mc.clone(),object:n}}function gc(n,e,t,i,s,o,r,a,c,l){n.getVertexPosition(a,Eo),n.getVertexPosition(c,To),n.getVertexPosition(l,Ao);const u=Hb(n,e,t,i,Eo,To,Ao,pc);if(u){s&&(dc.fromBufferAttribute(s,a),hc.fromBufferAttribute(s,c),fc.fromBufferAttribute(s,l),u.uv=kn.getInterpolation(pc,Eo,To,Ao,dc,hc,fc,new pe)),o&&(dc.fromBufferAttribute(o,a),hc.fromBufferAttribute(o,c),fc.fromBufferAttribute(o,l),u.uv1=kn.getInterpolation(pc,Eo,To,Ao,dc,hc,fc,new pe),u.uv2=u.uv1),r&&(Yp.fromBufferAttribute(r,a),Zp.fromBufferAttribute(r,c),Kp.fromBufferAttribute(r,l),u.normal=kn.getInterpolation(pc,Eo,To,Ao,Yp,Zp,Kp,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};kn.getNormal(Eo,To,Ao,d.normal),u.face=d}return u}class sn extends gt{constructor(e=1,t=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,r,o,0),v("z","y","x",1,-1,i,t,-e,r,o,1),v("x","z","y",1,1,e,i,t,s,r,2),v("x","z","y",1,-1,e,i,-t,s,r,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(c),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function v(y,p,h,_,g,b,R,E,T,k,M){const w=b/T,V=R/k,W=b/2,oe=R/2,O=E/2,q=T+1,j=k+1;let Z=0,B=0;const J=new I;for(let ae=0;ae<j;ae++){const ue=ae*V-oe;for(let ye=0;ye<q;ye++){const ee=ye*w-W;J[y]=ee*_,J[p]=ue*g,J[h]=O,l.push(J.x,J.y,J.z),J[y]=0,J[p]=0,J[h]=E>0?1:-1,u.push(J.x,J.y,J.z),d.push(ye/T),d.push(1-ae/k),Z+=1}}for(let ae=0;ae<k;ae++)for(let ue=0;ue<T;ue++){const ye=f+ue+q*ae,ee=f+ue+q*(ae+1),U=f+(ue+1)+q*(ae+1),N=f+(ue+1)+q*ae;c.push(ye,ee,N),c.push(ee,U,N),B+=6}a.addGroup(m,B,M),m+=B,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=fr(n[t]);for(const s in i)e[s]=i[s]}return e}function Gb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ev(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const Vb={clone:fr,merge:dn};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tv extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends tv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,t-=r.offsetY*i/l,s*=r.width/c,i*=r.height/l}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ro=-90,Lo=1;class Xb extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Ro,Lo,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Ro,Lo,e,t);o.layers=this.layers,this.add(o);const r=new Tn(Ro,Lo,e,t);r.layers=this.layers,this.add(r);const a=new Tn(Ro,Lo,e,t);a.layers=this.layers,this.add(a);const c=new Tn(Ro,Lo,e,t);c.layers=this.layers,this.add(c);const l=new Tn(Ro,Lo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,r,a,c]=t;for(const l of t)this.remove(l);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,o),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class nv extends Cn{constructor(e,t,i,s,o,r,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ur,super(e,t,i,s,o,r,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends Qs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(oa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===qs?Ut:Fn),this.texture=new nv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new sn(5,5,5),o=new ds({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:ss});o.uniforms.tEquirect.value=t;const r=new tt(s,o),a=t.minFilter;return t.minFilter===wa&&(t.minFilter=On),new Xb(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,s){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(o)}}const od=new I,jb=new I,Yb=new Be;class Es{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=od.subVectors(i,t).cross(jb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(od),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Yb.getNormalMatrix(e),s=this.coplanarPoint(od).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new ms,vc=new I;class sf{constructor(e=new Es,t=new Es,i=new Es,s=new Es,o=new Es,r=new Es){this.planes=[e,t,i,s,o,r]}set(e,t,i,s,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,s=e.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],y=s[10],p=s[11],h=s[12],_=s[13],g=s[14],b=s[15];if(i[0].setComponents(c-o,f-l,p-m,b-h).normalize(),i[1].setComponents(c+o,f+l,p+m,b+h).normalize(),i[2].setComponents(c+r,f+u,p+v,b+_).normalize(),i[3].setComponents(c-r,f-u,p-v,b-_).normalize(),i[4].setComponents(c-a,f-d,p-y,b-g).normalize(),t===Li)i[5].setComponents(c+a,f+d,p+y,b+g).normalize();else if(t===_l)i[5].setComponents(a,d,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vc.x=s.normal.x>0?e.max.x:e.min.x,vc.y=s.normal.y>0?e.max.y:e.min.y,vc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iv(){let n=null,e=!1,t=null,i=null;function s(o,r){t(o,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function Zb(n,e){const t=e.isWebGL2,i=new WeakMap;function s(l,u){const d=l.array,f=l.usage,m=d.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,d,f),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function o(l,u,d){const f=u.array,m=u._updateRange,v=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&v.length===0&&n.bufferSubData(d,0,f),v.length!==0){for(let y=0,p=v.length;y<p;y++){const h=v[y];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=i.get(l);if(d===void 0)i.set(l,s(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(d.buffer,l,u),d.version=l.version}}return{get:r,remove:a,update:c}}class uo extends gt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,r=t/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=e/a,f=t/c,m=[],v=[],y=[],p=[];for(let h=0;h<u;h++){const _=h*f-r;for(let g=0;g<l;g++){const b=g*d-o;v.push(b,-_,0),y.push(0,0,1),p.push(g/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let _=0;_<a;_++){const g=_+l*h,b=_+l*(h+1),R=_+1+l*(h+1),E=_+1+l*h;m.push(g,b,E),m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jb=`#ifdef USE_ALPHAHASH
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
#endif`,Qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,nS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iS=`#ifdef USE_AOMAP
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
#endif`,sS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oS=`#ifdef USE_BATCHING
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
#endif`,rS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uS=`#ifdef USE_IRIDESCENCE
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
#endif`,dS=`#ifdef USE_BUMPMAP
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
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_S=`#define PI 3.141592653589793
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
} // validated`,bS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SS=`vec3 transformedNormal = objectNormal;
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
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`
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
}`,LS=`#ifdef USE_ENVMAP
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
#endif`,CS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PS=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,DS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,US=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FS=`#ifdef USE_GRADIENTMAP
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
}`,zS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,BS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VS=`uniform bool receiveShadow;
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
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YS=`PhysicalMaterial material;
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
#endif`,ZS=`struct PhysicalMaterial {
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
}`,KS=`
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
#endif`,JS=`#if defined( RE_IndirectDiffuse )
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
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aM=`#if defined( USE_POINTS_UV )
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
#endif`,cM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
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
#endif`,hM=`#ifdef USE_MORPHTARGETS
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
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,pM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
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
#endif`,_M=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,UM=`float getShadowMask() {
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
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kM=`#ifdef USE_SKINNING
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
#endif`,FM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
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
}`,JM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`#include <common>
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
}`,iw=`#if DEPTH_PACKING == 3200
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
}`,sw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`uniform float scale;
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
}`,lw=`uniform vec3 diffuse;
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
}`,uw=`#include <common>
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
}`,dw=`uniform vec3 diffuse;
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
}`,hw=`#define LAMBERT
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
}`,fw=`#define LAMBERT
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
}`,pw=`#define MATCAP
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
}`,mw=`#define MATCAP
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
}`,gw=`#define NORMAL
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
}`,vw=`#define NORMAL
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
}`,yw=`#define PHONG
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
}`,xw=`#define PHONG
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
}`,_w=`#define STANDARD
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
}`,bw=`#define STANDARD
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
}`,Sw=`#define TOON
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
}`,Mw=`#define TOON
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
}`,ww=`uniform float size;
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
}`,Ew=`uniform vec3 diffuse;
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
}`,Tw=`#include <common>
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
}`,Aw=`uniform vec3 color;
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
}`,Rw=`uniform float rotation;
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Kb,alphahash_pars_fragment:Jb,alphamap_fragment:Qb,alphamap_pars_fragment:eS,alphatest_fragment:tS,alphatest_pars_fragment:nS,aomap_fragment:iS,aomap_pars_fragment:sS,batching_pars_vertex:oS,batching_vertex:rS,begin_vertex:aS,beginnormal_vertex:cS,bsdfs:lS,iridescence_fragment:uS,bumpmap_pars_fragment:dS,clipping_planes_fragment:hS,clipping_planes_pars_fragment:fS,clipping_planes_pars_vertex:pS,clipping_planes_vertex:mS,color_fragment:gS,color_pars_fragment:vS,color_pars_vertex:yS,color_vertex:xS,common:_S,cube_uv_reflection_fragment:bS,defaultnormal_vertex:SS,displacementmap_pars_vertex:MS,displacementmap_vertex:wS,emissivemap_fragment:ES,emissivemap_pars_fragment:TS,colorspace_fragment:AS,colorspace_pars_fragment:RS,envmap_fragment:LS,envmap_common_pars_fragment:CS,envmap_pars_fragment:PS,envmap_pars_vertex:IS,envmap_physical_pars_fragment:WS,envmap_vertex:NS,fog_vertex:DS,fog_pars_vertex:US,fog_fragment:OS,fog_pars_fragment:kS,gradientmap_pars_fragment:FS,lightmap_fragment:zS,lightmap_pars_fragment:BS,lights_lambert_fragment:HS,lights_lambert_pars_fragment:GS,lights_pars_begin:VS,lights_toon_fragment:qS,lights_toon_pars_fragment:XS,lights_phong_fragment:$S,lights_phong_pars_fragment:jS,lights_physical_fragment:YS,lights_physical_pars_fragment:ZS,lights_fragment_begin:KS,lights_fragment_maps:JS,lights_fragment_end:QS,logdepthbuf_fragment:eM,logdepthbuf_pars_fragment:tM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:sM,map_pars_fragment:oM,map_particle_fragment:rM,map_particle_pars_fragment:aM,metalnessmap_fragment:cM,metalnessmap_pars_fragment:lM,morphcolor_vertex:uM,morphnormal_vertex:dM,morphtarget_pars_vertex:hM,morphtarget_vertex:fM,normal_fragment_begin:pM,normal_fragment_maps:mM,normal_pars_fragment:gM,normal_pars_vertex:vM,normal_vertex:yM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:_M,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:SM,iridescence_pars_fragment:MM,opaque_fragment:wM,packing:EM,premultiplied_alpha_fragment:TM,project_vertex:AM,dithering_fragment:RM,dithering_pars_fragment:LM,roughnessmap_fragment:CM,roughnessmap_pars_fragment:PM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:NM,shadowmap_vertex:DM,shadowmask_pars_fragment:UM,skinbase_vertex:OM,skinning_pars_vertex:kM,skinning_vertex:FM,skinnormal_vertex:zM,specularmap_fragment:BM,specularmap_pars_fragment:HM,tonemapping_fragment:GM,tonemapping_pars_fragment:VM,transmission_fragment:WM,transmission_pars_fragment:qM,uv_pars_fragment:XM,uv_pars_vertex:$M,uv_vertex:jM,worldpos_vertex:YM,background_vert:ZM,background_frag:KM,backgroundCube_vert:JM,backgroundCube_frag:QM,cube_vert:ew,cube_frag:tw,depth_vert:nw,depth_frag:iw,distanceRGBA_vert:sw,distanceRGBA_frag:ow,equirect_vert:rw,equirect_frag:aw,linedashed_vert:cw,linedashed_frag:lw,meshbasic_vert:uw,meshbasic_frag:dw,meshlambert_vert:hw,meshlambert_frag:fw,meshmatcap_vert:pw,meshmatcap_frag:mw,meshnormal_vert:gw,meshnormal_frag:vw,meshphong_vert:yw,meshphong_frag:xw,meshphysical_vert:_w,meshphysical_frag:bw,meshtoon_vert:Sw,meshtoon_frag:Mw,points_vert:ww,points_frag:Ew,shadow_vert:Tw,shadow_frag:Aw,sprite_vert:Rw,sprite_frag:Lw},be={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ri={basic:{uniforms:dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:dn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:dn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:dn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Te(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:dn([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:dn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:dn([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:dn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:dn([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:dn([be.common,be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:dn([be.lights,be.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ri.physical={uniforms:dn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const yc={r:0,b:0,g:0};function Cw(n,e,t,i,s,o,r){const a=new Te(0);let c=o===!0?0:1,l,u,d=null,f=0,m=null;function v(p,h){let _=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(a,c):g&&g.isColor&&(y(g,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===uu)?(u===void 0&&(u=new tt(new sn(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:fr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=st.getTransfer(g.colorSpace)!==dt,(d!==g||f!==g.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new tt(new uo(2,2),new ds({name:"BackgroundMaterial",uniforms:fr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=st.getTransfer(g.colorSpace)!==dt,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||f!==g.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=g,f=g.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,h){p.getRGB(yc,ev(n)),i.buffers.color.setClear(yc.r,yc.g,yc.b,h,r)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),c=h,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:v}}function Pw(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||o!==null,a={},c=p(null);let l=c,u=!1;function d(O,q,j,Z,B){let J=!1;if(r){const ae=y(Z,j,q);l!==ae&&(l=ae,m(l.object)),J=h(O,Z,j,B),J&&_(O,Z,j,B)}else{const ae=q.wireframe===!0;(l.geometry!==Z.id||l.program!==j.id||l.wireframe!==ae)&&(l.geometry=Z.id,l.program=j.id,l.wireframe=ae,J=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,k(O,q,j,Z),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function f(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):o.bindVertexArrayOES(O)}function v(O){return i.isWebGL2?n.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function y(O,q,j){const Z=j.wireframe===!0;let B=a[O.id];B===void 0&&(B={},a[O.id]=B);let J=B[q.id];J===void 0&&(J={},B[q.id]=J);let ae=J[Z];return ae===void 0&&(ae=p(f()),J[Z]=ae),ae}function p(O){const q=[],j=[],Z=[];for(let B=0;B<s;B++)q[B]=0,j[B]=0,Z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:Z,object:O,attributes:{},index:null}}function h(O,q,j,Z){const B=l.attributes,J=q.attributes;let ae=0;const ue=j.getAttributes();for(const ye in ue)if(ue[ye].location>=0){const U=B[ye];let N=J[ye];if(N===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(N=O.instanceColor)),U===void 0||U.attribute!==N||N&&U.data!==N.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Z}function _(O,q,j,Z){const B={},J=q.attributes;let ae=0;const ue=j.getAttributes();for(const ye in ue)if(ue[ye].location>=0){let U=J[ye];U===void 0&&(ye==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),ye==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const N={};N.attribute=U,U&&U.data&&(N.data=U.data),B[ye]=N,ae++}l.attributes=B,l.attributesNum=ae,l.index=Z}function g(){const O=l.newAttributes;for(let q=0,j=O.length;q<j;q++)O[q]=0}function b(O){R(O,0)}function R(O,q){const j=l.newAttributes,Z=l.enabledAttributes,B=l.attributeDivisors;j[O]=1,Z[O]===0&&(n.enableVertexAttribArray(O),Z[O]=1),B[O]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),B[O]=q)}function E(){const O=l.newAttributes,q=l.enabledAttributes;for(let j=0,Z=q.length;j<Z;j++)q[j]!==O[j]&&(n.disableVertexAttribArray(j),q[j]=0)}function T(O,q,j,Z,B,J,ae){ae===!0?n.vertexAttribIPointer(O,q,j,B,J):n.vertexAttribPointer(O,q,j,Z,B,J)}function k(O,q,j,Z){if(i.isWebGL2===!1&&(O.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const B=Z.attributes,J=j.getAttributes(),ae=q.defaultAttributeValues;for(const ue in J){const ye=J[ue];if(ye.location>=0){let ee=B[ue];if(ee===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){const U=ee.normalized,N=ee.itemSize,L=t.get(ee);if(L===void 0)continue;const A=L.buffer,Q=L.type,ce=L.bytesPerElement,X=i.isWebGL2===!0&&(Q===n.INT||Q===n.UNSIGNED_INT||ee.gpuType===O0);if(ee.isInterleavedBufferAttribute){const de=ee.data,P=de.stride,ne=ee.offset;if(de.isInstancedInterleavedBuffer){for(let z=0;z<ye.locationSize;z++)R(ye.location+z,de.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let z=0;z<ye.locationSize;z++)b(ye.location+z);n.bindBuffer(n.ARRAY_BUFFER,A);for(let z=0;z<ye.locationSize;z++)T(ye.location+z,N/ye.locationSize,Q,U,P*ce,(ne+N/ye.locationSize*z)*ce,X)}else{if(ee.isInstancedBufferAttribute){for(let de=0;de<ye.locationSize;de++)R(ye.location+de,ee.meshPerAttribute);O.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let de=0;de<ye.locationSize;de++)b(ye.location+de);n.bindBuffer(n.ARRAY_BUFFER,A);for(let de=0;de<ye.locationSize;de++)T(ye.location+de,N/ye.locationSize,Q,U,N*ce,N/ye.locationSize*de*ce,X)}}else if(ae!==void 0){const U=ae[ue];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(ye.location,U);break;case 3:n.vertexAttrib3fv(ye.location,U);break;case 4:n.vertexAttrib4fv(ye.location,U);break;default:n.vertexAttrib1fv(ye.location,U)}}}}E()}function M(){W();for(const O in a){const q=a[O];for(const j in q){const Z=q[j];for(const B in Z)v(Z[B].object),delete Z[B];delete q[j]}delete a[O]}}function w(O){if(a[O.id]===void 0)return;const q=a[O.id];for(const j in q){const Z=q[j];for(const B in Z)v(Z[B].object),delete Z[B];delete q[j]}delete a[O.id]}function V(O){for(const q in a){const j=a[q];if(j[O.id]===void 0)continue;const Z=j[O.id];for(const B in Z)v(Z[B].object),delete Z[B];delete j[O.id]}}function W(){oe(),u=!0,l!==c&&(l=c,m(l.object))}function oe(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:b,disableUnusedAttributes:E}}function Iw(n,e,t,i){const s=i.isWebGL2;let o;function r(u){o=u}function a(u,d){n.drawArrays(o,u,d),t.update(d,o,1)}function c(u,d,f){if(f===0)return;let m,v;if(s)m=n,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](o,u,d,f),t.update(d,o,f)}function l(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(u[v],d[v]);else{m.multiDrawArraysWEBGL(o,u,0,d,0,f);let v=0;for(let y=0;y<f;y++)v+=d[y];t.update(v,o,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Nw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=r||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,b=r||e.has("OES_texture_float"),R=g&&b,E=r?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function Dw(n){const e=this;let t=null,i=0,s=!1,o=!1;const r=new Es,a=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||o&&!p)o?u(null):l();else{const _=o?0:i,g=_*4;let b=h.clippingState||null;c.value=b,b=u(v,f,g,m);for(let R=0;R!==g;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,v){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=c.value,v!==!0||p===null){const h=m+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let g=0,b=m;g!==y;++g,b+=4)r.copy(d[g]).applyMatrix4(_,a),r.normal.toArray(p,b),p[b+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Uw(n){let e=new WeakMap;function t(r,a){return a===Kd?r.mapping=ur:a===Jd&&(r.mapping=dr),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Kd||a===Jd)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new $b(c.height/2);return l.fromEquirectangularTexture(n,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class sv extends tv{constructor(e=-1,t=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,r=i+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bo=4,Jp=[.125,.215,.35,.446,.526,.582],Cs=20,rd=new sv,Qp=new Te;let ad=null,cd=0,ld=0;const Ts=(1+Math.sqrt(5))/2,Co=1/Ts,em=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Ts,Co),new I(0,Ts,-Co),new I(Co,0,Ts),new I(-Co,0,Ts),new I(Ts,Co,0),new I(-Ts,Co,0)];class tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){ad=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,cd,ld),e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ur||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ea,format:Kn,colorSpace:Oi,depthBuffer:!1},s=nm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ow(o)),this._blurMaterial=kw(o,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,rd)}_sceneToCubeUV(e,t,i,s){const a=new Tn(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Qp),u.toneMapping=os,u.autoClear=!1;const m=new Vn({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),v=new tt(new sn,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Qp),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,c[h],0),a.lookAt(l[h],0,0)):_===1?(a.up.set(0,0,c[h]),a.lookAt(0,l[h],0)):(a.up.set(0,c[h],0),a.lookAt(0,0,l[h]));const g=this._cubeSize;xc(s,_*g,h>2?g:0,g,g),u.setRenderTarget(s),y&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ur||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=im());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new tt(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const c=this._cubeSize;xc(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(r,rd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=em[(s-1)%em.length];this._blur(e,s-1,s,o,r)}t.autoClear=i}_blur(e,t,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",o),this._halfBlur(r,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tt(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),y=o/v,p=isFinite(o)?1+Math.floor(u*y):Cs;p>Cs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cs}`);const h=[];let _=0;for(let T=0;T<Cs;++T){const k=T/y,M=Math.exp(-k*k/2);h.push(M),T===0?_+=M:T<p&&(_+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const b=this._sizeLods[s],R=3*b*(s>g-Bo?s-g+Bo:0),E=4*(this._cubeSize-b);xc(t,R,E,3*b,2*b),c.setRenderTarget(t),c.render(d,rd)}}function Ow(n){const e=[],t=[],i=[];let s=n;const o=n-Bo+1+Jp.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);t.push(a);let c=1/a;r>n-Bo?c=Jp[r-n+Bo-1]:r===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,y=3,p=2,h=1,_=new Float32Array(y*v*m),g=new Float32Array(p*v*m),b=new Float32Array(h*v*m);for(let E=0;E<m;E++){const T=E%3*2/3-1,k=E>2?0:-1,M=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];_.set(M,y*v*E),g.set(f,p*v*E);const w=[E,E,E,E,E,E];b.set(w,h*v*E)}const R=new gt;R.setAttribute("position",new Nt(_,y)),R.setAttribute("uv",new Nt(g,p)),R.setAttribute("faceIndex",new Nt(b,h)),e.push(R),s>Bo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nm(n,e,t){const i=new Qs(n,e,t);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function kw(n,e,t){const i=new Float32Array(Cs),s=new I(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:of(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function im(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:ss,depthTest:!1,depthWrite:!1})}function sm(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ss,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}function Fw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Kd||c===Jd,u=c===ur||c===dr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new tm(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new tm(n));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",o),f.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function zw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Bw(n,e,t,i){const s={},o=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const y=f.morphAttributes[v];for(let p=0,h=y.length;p<h;p++)e.remove(y[p])}f.removeEventListener("dispose",r),delete s[f.id];const m=o.get(f);m&&(e.remove(m),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const y=m[v];for(let p=0,h=y.length;p<h;p++)e.update(y[p],n.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,v=d.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let g=0,b=_.length;g<b;g+=3){const R=_[g+0],E=_[g+1],T=_[g+2];f.push(R,E,E,T,T,R)}}else if(v!==void 0){const _=v.array;y=v.version;for(let g=0,b=_.length/3-1;g<b;g+=3){const R=g+0,E=g+1,T=g+2;f.push(R,E,E,T,T,R)}}else return;const p=new(X0(f)?Q0:J0)(f,1);p.version=y;const h=o.get(d);h&&e.remove(h),o.set(d,p)}function u(d){const f=o.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return o.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function Hw(n,e,t,i){const s=i.isWebGL2;let o;function r(m){o=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,v){n.drawElements(o,v,a,m*c),t.update(v,o,1)}function d(m,v,y){if(y===0)return;let p,h;if(s)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](o,v,a,m*c,y),t.update(v,o,y)}function f(m,v,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<y;h++)this.render(m[h]/c,v[h]);else{p.multiDrawElementsWEBGL(o,v,0,a,m,0,y);let h=0;for(let _=0;_<y;_++)h+=v[_];t.update(h,o,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Gw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,a){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=a*(o/3);break;case n.LINES:t.lines+=a*(o/2);break;case n.LINE_STRIP:t.lines+=a*(o-1);break;case n.LINE_LOOP:t.lines+=a*o;break;case n.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Vw(n,e){return n[0]-e[0]}function Ww(n,e){return Math.abs(e[1])-Math.abs(n[1])}function qw(n,e,t){const i={},s=new Float32Array(8),o=new WeakMap,r=new qt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=m!==void 0?m.length:0;let y=o.get(u);if(y===void 0||y.count!==v){let O=function(){W.dispose(),o.delete(u),u.removeEventListener("dispose",O)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,g=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let k=0;_===!0&&(k=1),g===!0&&(k=2),b===!0&&(k=3);let M=u.attributes.position.count*k,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*w*4*v),W=new Y0(V,M,w,v);W.type=Ki,W.needsUpdate=!0;const oe=k*4;for(let q=0;q<v;q++){const j=R[q],Z=E[q],B=T[q],J=M*w*4*q;for(let ae=0;ae<j.count;ae++){const ue=ae*oe;_===!0&&(r.fromBufferAttribute(j,ae),V[J+ue+0]=r.x,V[J+ue+1]=r.y,V[J+ue+2]=r.z,V[J+ue+3]=0),g===!0&&(r.fromBufferAttribute(Z,ae),V[J+ue+4]=r.x,V[J+ue+5]=r.y,V[J+ue+6]=r.z,V[J+ue+7]=0),b===!0&&(r.fromBufferAttribute(B,ae),V[J+ue+8]=r.x,V[J+ue+9]=r.y,V[J+ue+10]=r.z,V[J+ue+11]=B.itemSize===4?r.w:1)}}y={count:v,texture:W,size:new pe(M,w)},o.set(u,y),u.addEventListener("dispose",O)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const m=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==m){v=[];for(let g=0;g<m;g++)v[g]=[g,0];i[u.id]=v}for(let g=0;g<m;g++){const b=v[g];b[0]=g,b[1]=f[g]}v.sort(Ww);for(let g=0;g<8;g++)g<m&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Vw);const y=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const b=a[g],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(y&&u.getAttribute("morphTarget"+g)!==y[R]&&u.setAttribute("morphTarget"+g,y[R]),p&&u.getAttribute("morphNormal"+g)!==p[R]&&u.setAttribute("morphNormal"+g,p[R]),s[g]=E,h+=E):(y&&u.hasAttribute("morphTarget"+g)===!0&&u.deleteAttribute("morphTarget"+g),p&&u.hasAttribute("morphNormal"+g)===!0&&u.deleteAttribute("morphNormal"+g),s[g]=0)}const _=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Xw(n,e,t,i){let s=new WeakMap;function o(c){const l=i.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:o,dispose:r}}class ov extends Cn{constructor(e,t,i,s,o,r,a,c,l,u){if(u=u!==void 0?u:Ws,u!==Ws&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ws&&(i=Zi),i===void 0&&u===hr&&(i=Vs),super(null,s,o,r,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=c!==void 0?c:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rv=new Cn,av=new ov(1,1);av.compareFunction=q0;const cv=new Y0,lv=new Cb,uv=new nv,om=[],rm=[],am=new Float32Array(16),cm=new Float32Array(9),lm=new Float32Array(4);function Sr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let o=om[s];if(o===void 0&&(o=new Float32Array(s),om[s]=o),e!==0){i.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,n[r].toArray(o,a)}return o}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function hu(n,e){let t=rm[e];t===void 0&&(t=new Int32Array(e),rm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $w(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function Zw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function Kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,i))return;lm.set(i),n.uniformMatrix2fv(this.addr,!1,lm),Ft(t,i)}}function Jw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,i))return;cm.set(i),n.uniformMatrix3fv(this.addr,!1,cm),Ft(t,i)}}function Qw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(kt(t,i))return;am.set(i),n.uniformMatrix4fv(this.addr,!1,am),Ft(t,i)}}function eE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function nE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function iE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function sE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function rE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function aE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function cE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const o=this.type===n.SAMPLER_2D_SHADOW?av:rv;t.setTexture2D(e||o,s)}function lE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lv,s)}function uE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uv,s)}function dE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cv,s)}function hE(n){switch(n){case 5126:return $w;case 35664:return jw;case 35665:return Yw;case 35666:return Zw;case 35674:return Kw;case 35675:return Jw;case 35676:return Qw;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return sE;case 36294:return oE;case 36295:return rE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return lE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return dE}}function fE(n,e){n.uniform1fv(this.addr,e)}function pE(n,e){const t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function mE(n,e){const t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function gE(n,e){const t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function vE(n,e){const t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function yE(n,e){const t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xE(n,e){const t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _E(n,e){n.uniform1iv(this.addr,e)}function bE(n,e){n.uniform2iv(this.addr,e)}function SE(n,e){n.uniform3iv(this.addr,e)}function ME(n,e){n.uniform4iv(this.addr,e)}function wE(n,e){n.uniform1uiv(this.addr,e)}function EE(n,e){n.uniform2uiv(this.addr,e)}function TE(n,e){n.uniform3uiv(this.addr,e)}function AE(n,e){n.uniform4uiv(this.addr,e)}function RE(n,e,t){const i=this.cache,s=e.length,o=hu(t,s);kt(i,o)||(n.uniform1iv(this.addr,o),Ft(i,o));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||rv,o[r])}function LE(n,e,t){const i=this.cache,s=e.length,o=hu(t,s);kt(i,o)||(n.uniform1iv(this.addr,o),Ft(i,o));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||lv,o[r])}function CE(n,e,t){const i=this.cache,s=e.length,o=hu(t,s);kt(i,o)||(n.uniform1iv(this.addr,o),Ft(i,o));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||uv,o[r])}function PE(n,e,t){const i=this.cache,s=e.length,o=hu(t,s);kt(i,o)||(n.uniform1iv(this.addr,o),Ft(i,o));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||cv,o[r])}function IE(n){switch(n){case 5126:return fE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return vE;case 35675:return yE;case 35676:return xE;case 5124:case 35670:return _E;case 35667:case 35671:return bE;case 35668:case 35672:return SE;case 35669:case 35673:return ME;case 5125:return wE;case 36294:return EE;case 36295:return TE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return RE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return PE}}class NE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hE(t.type)}}class DE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IE(t.type)}}class UE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(e,t[a.id],i)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function um(n,e){n.seq.push(e),n.map[e.id]=e}function OE(n,e,t){const i=n.name,s=i.length;for(ud.lastIndex=0;;){const o=ud.exec(i),r=ud.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){um(t,l===void 0?new NE(a,n,e):new DE(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new UE(a),um(t,d)),t=d}}}class jc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),r=e.getUniformLocation(t,o.name);OE(o,r,this)}}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,r=t.length;o!==r;++o){const a=t[o],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function dm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kE=37297;let FE=0;function zE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=s;r<o;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}function BE(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===xl&&t===yl?i="LinearDisplayP3ToLinearSRGB":e===yl&&t===xl&&(i="LinearSRGBToLinearDisplayP3"),n){case Oi:case du:return[i,"LinearTransferOETF"];case Ut:case ef:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+zE(n.getShaderSource(e),r)}else return s}function HE(n,e){const t=BE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function GE(n,e){let t;switch(e){case B_:t="Linear";break;case H_:t="Reinhard";break;case G_:t="OptimizedCineon";break;case V_:t="ACESFilmic";break;case q_:t="AgX";break;case W_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function VE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ho).join(`
`)}function WE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ho).join(`
`)}function qE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(e,s),r=o.name;let a=1;o.type===n.FLOAT_MAT2&&(a=2),o.type===n.FLOAT_MAT3&&(a=3),o.type===n.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:n.getAttribLocation(e,r),locationSize:a}}return t}function Ho(n){return n!==""}function fm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $E=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(n){return n.replace($E,YE)}const jE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function YE(n,e){let t=Xe[e];if(t===void 0){const i=jE.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ih(t)}const ZE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mm(n){return n.replace(ZE,KE)}function KE(n,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function gm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===p_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function QE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ur:case dr:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function tT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jh:e="ENVMAP_BLENDING_MULTIPLY";break;case F_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function nT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function iT(n,e,t,i){const s=n.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const c=JE(t),l=QE(t),u=eT(t),d=tT(t),f=nT(t),m=t.isWebGL2?"":VE(t),v=WE(t),y=qE(o),p=s.createProgram();let h,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ho).join(`
`),h.length>0&&(h+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ho).join(`
`),_.length>0&&(_+=`
`)):(h=[gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),_=[m,gm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?Xe.tonemapping_pars_fragment:"",t.toneMapping!==os?GE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,HE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),r=ih(r),r=fm(r,t),r=pm(r,t),a=ih(a),a=fm(a,t),a=pm(a,t),r=mm(r),a=mm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=g+h+r,R=g+_+a,E=dm(s,s.VERTEX_SHADER,b),T=dm(s,s.FRAGMENT_SHADER,R);s.attachShader(p,E),s.attachShader(p,T),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(W){if(n.debug.checkShaderErrors){const oe=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(E).trim(),q=s.getShaderInfoLog(T).trim();let j=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,T);else{const B=hm(s,E,"vertex"),J=hm(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+B+`
`+J)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(O===""||q==="")&&(Z=!1);Z&&(W.diagnostics={runnable:j,programLog:oe,vertexShader:{log:O,prefix:h},fragmentShader:{log:q,prefix:_}})}s.deleteShader(E),s.deleteShader(T),M=new jc(s,p),w=XE(s,p)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,kE)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=T,this}let sT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rT(e),t.set(e,i)),i}}class rT{constructor(e){this.id=sT++,this.code=e,this.usedTimes=0}}function aT(n,e,t,i,s,o,r){const a=new Z0,c=new oT,l=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,w,V,W,oe){const O=W.fog,q=oe.geometry,j=M.isMeshStandardMaterial?W.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),B=Z&&Z.mapping===uu?Z.image.height:null,J=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=ae!==void 0?ae.length:0;let ye=0;q.morphAttributes.position!==void 0&&(ye=1),q.morphAttributes.normal!==void 0&&(ye=2),q.morphAttributes.color!==void 0&&(ye=3);let ee,U,N,L;if(J){const an=ri[J];ee=an.vertexShader,U=an.fragmentShader}else ee=M.vertexShader,U=M.fragmentShader,c.update(M),N=c.getVertexShaderID(M),L=c.getFragmentShaderID(M);const A=n.getRenderTarget(),Q=oe.isInstancedMesh===!0,ce=oe.isBatchedMesh===!0,X=!!M.map,de=!!M.matcap,P=!!Z,ne=!!M.aoMap,z=!!M.lightMap,Y=!!M.bumpMap,$=!!M.normalMap,fe=!!M.displacementMap,F=!!M.emissiveMap,x=!!M.metalnessMap,S=!!M.roughnessMap,G=M.anisotropy>0,me=M.clearcoat>0,ge=M.iridescence>0,le=M.sheen>0,Ae=M.transmission>0,xe=G&&!!M.anisotropyMap,Re=me&&!!M.clearcoatMap,Ie=me&&!!M.clearcoatNormalMap,ke=me&&!!M.clearcoatRoughnessMap,ve=ge&&!!M.iridescenceMap,Je=ge&&!!M.iridescenceThicknessMap,We=le&&!!M.sheenColorMap,Fe=le&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,Ce=!!M.specularColorMap,qe=!!M.specularIntensityMap,nt=Ae&&!!M.transmissionMap,vt=Ae&&!!M.thicknessMap,je=!!M.gradientMap,_e=!!M.alphaMap,H=M.alphaTest>0,Se=!!M.alphaHash,Me=!!M.extensions,Oe=!!q.attributes.uv1,De=!!q.attributes.uv2,rt=!!q.attributes.uv3;let at=os;return M.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:u,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:U,defines:M.defines,customVertexShaderID:N,customFragmentShaderID:L,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ce,instancing:Q,instancingColor:Q&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:A===null?n.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Oi,map:X,matcap:de,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:B,aoMap:ne,lightMap:z,bumpMap:Y,normalMap:$,displacementMap:f&&fe,emissiveMap:F,normalMapObjectSpace:$&&M.normalMapType===ib,normalMapTangentSpace:$&&M.normalMapType===W0,metalnessMap:x,roughnessMap:S,anisotropy:G,anisotropyMap:xe,clearcoat:me,clearcoatMap:Re,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ke,iridescence:ge,iridescenceMap:ve,iridescenceThicknessMap:Je,sheen:le,sheenColorMap:We,sheenRoughnessMap:Fe,specularMap:Ne,specularColorMap:Ce,specularIntensityMap:qe,transmission:Ae,transmissionMap:nt,thicknessMap:vt,gradientMap:je,opaque:M.transparent===!1&&M.blending===Yo,alphaMap:_e,alphaTest:H,alphaHash:Se,combine:M.combine,mapUv:X&&y(M.map.channel),aoMapUv:ne&&y(M.aoMap.channel),lightMapUv:z&&y(M.lightMap.channel),bumpMapUv:Y&&y(M.bumpMap.channel),normalMapUv:$&&y(M.normalMap.channel),displacementMapUv:fe&&y(M.displacementMap.channel),emissiveMapUv:F&&y(M.emissiveMap.channel),metalnessMapUv:x&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:xe&&y(M.anisotropyMap.channel),clearcoatMapUv:Re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(M.sheenRoughnessMap.channel),specularMapUv:Ne&&y(M.specularMap.channel),specularColorMapUv:Ce&&y(M.specularColorMap.channel),specularIntensityMapUv:qe&&y(M.specularIntensityMap.channel),transmissionMapUv:nt&&y(M.transmissionMap.channel),thicknessMapUv:vt&&y(M.thicknessMap.channel),alphaMapUv:_e&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:De,vertexUv3s:rt,pointsUvs:oe.isPoints===!0&&!!q.attributes.uv&&(X||_e),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:oe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ye,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===bn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Me&&M.extensions.derivatives===!0,extensionFragDepth:Me&&M.extensions.fragDepth===!0,extensionDrawBuffers:Me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)w.push(V),w.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=v[M.type];let V;if(w){const W=ri[w];V=Vb.clone(W.uniforms)}else V=M.uniforms;return V}function R(M,w){let V;for(let W=0,oe=l.length;W<oe;W++){const O=l[W];if(O.cacheKey===w){V=O,++V.usedTimes;break}}return V===void 0&&(V=new iT(n,w,M,o),l.push(V)),V}function E(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:k}}function cT(){let n=new WeakMap;function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function t(o){n.delete(o)}function i(o,r,a){n.get(o)[r]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function lT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function vm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ym(){const n=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,m,v,y,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:y,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=y,h.group=p),e++,h}function a(d,f,m,v,y,p){const h=r(d,f,m,v,y,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function c(d,f,m,v,y,p){const h=r(d,f,m,v,y,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||lT),i.length>1&&i.sort(f||vm),s.length>1&&s.sort(f||vm)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:a,unshift:c,finish:u,sort:l}}function uT(){let n=new WeakMap;function e(i,s){const o=n.get(i);let r;return o===void 0?(r=new ym,n.set(i,[r])):s>=o.length?(r=new ym,o.push(r)):r=o[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function dT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function hT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fT=0;function pT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mT(n,e){const t=new dT,i=hT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const o=new I,r=new Ke,a=new Ke;function c(u,d){let f=0,m=0,v=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,p=0,h=0,_=0,g=0,b=0,R=0,E=0,T=0,k=0,M=0;u.sort(pT);const w=d===!0?Math.PI:1;for(let W=0,oe=u.length;W<oe;W++){const O=u[W],q=O.color,j=O.intensity,Z=O.distance,B=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=q.r*j*w,m+=q.g*j*w,v+=q.b*j*w;else if(O.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(O.sh.coefficients[J],j);M++}else if(O.isDirectionalLight){const J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const ae=O.shadow,ue=i.get(O);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,s.directionalShadow[y]=ue,s.directionalShadowMap[y]=B,s.directionalShadowMatrix[y]=O.shadow.matrix,b++}s.directional[y]=J,y++}else if(O.isSpotLight){const J=t.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(q).multiplyScalar(j*w),J.distance=Z,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,s.spot[h]=J;const ae=O.shadow;if(O.map&&(s.spotLightMap[T]=O.map,T++,ae.updateMatrices(O),O.castShadow&&k++),s.spotLightMatrix[h]=ae.matrix,O.castShadow){const ue=i.get(O);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,s.spotShadow[h]=ue,s.spotShadowMap[h]=B,E++}h++}else if(O.isRectAreaLight){const J=t.get(O);J.color.copy(q).multiplyScalar(j),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),s.rectArea[_]=J,_++}else if(O.isPointLight){const J=t.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*w),J.distance=O.distance,J.decay=O.decay,O.castShadow){const ae=O.shadow,ue=i.get(O);ue.shadowBias=ae.bias,ue.shadowNormalBias=ae.normalBias,ue.shadowRadius=ae.radius,ue.shadowMapSize=ae.mapSize,ue.shadowCameraNear=ae.camera.near,ue.shadowCameraFar=ae.camera.far,s.pointShadow[p]=ue,s.pointShadowMap[p]=B,s.pointShadowMatrix[p]=O.shadow.matrix,R++}s.point[p]=J,p++}else if(O.isHemisphereLight){const J=t.get(O);J.skyColor.copy(O.color).multiplyScalar(j*w),J.groundColor.copy(O.groundColor).multiplyScalar(j*w),s.hemi[g]=J,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=v;const V=s.hash;(V.directionalLength!==y||V.pointLength!==p||V.spotLength!==h||V.rectAreaLength!==_||V.hemiLength!==g||V.numDirectionalShadows!==b||V.numPointShadows!==R||V.numSpotShadows!==E||V.numSpotMaps!==T||V.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=h,s.rectArea.length=_,s.point.length=p,s.hemi.length=g,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+T-k,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=M,V.directionalLength=y,V.pointLength=p,V.spotLength=h,V.rectAreaLength=_,V.hemiLength=g,V.numDirectionalShadows=b,V.numPointShadows=R,V.numSpotShadows=E,V.numSpotMaps=T,V.numLightProbes=M,s.version=fT++)}function l(u,d){let f=0,m=0,v=0,y=0,p=0;const h=d.matrixWorldInverse;for(let _=0,g=u.length;_<g;_++){const b=u[_];if(b.isDirectionalLight){const R=s.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),f++}else if(b.isSpotLight){const R=s.spot[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(h),v++}else if(b.isRectAreaLight){const R=s.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),a.identity(),r.copy(b.matrixWorld),r.premultiply(h),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:c,setupView:l,state:s}}function xm(n,e){const t=new mT(n,e),i=[],s=[];function o(){i.length=0,s.length=0}function r(d){i.push(d)}function a(d){s.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:r,pushShadow:a}}function gT(n,e){let t=new WeakMap;function i(o,r=0){const a=t.get(o);let c;return a===void 0?(c=new xm(n,e),t.set(o,[c])):r>=a.length?(c=new xm(n,e),a.push(c)):c=a[r],c}function s(){t=new WeakMap}return{get:i,dispose:s}}class vT extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yT extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
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
}`;function bT(n,e,t){let i=new sf;const s=new pe,o=new pe,r=new qt,a=new vT({depthPacking:nb}),c=new yT,l={},u=t.maxTextureSize,d={[us]:bn,[bn]:us,[Zt]:Zt},f=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:xT,fragmentShader:_T}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new gt;v.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tt(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=D0;let h=this.type;this.render=function(E,T,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ss),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const oe=h!==Ei&&this.type===Ei,O=h===Ei&&this.type!==Ei;for(let q=0,j=E.length;q<j;q++){const Z=E[q],B=Z.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const J=B.getFrameExtents();if(s.multiply(J),o.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/J.x),s.x=o.x*J.x,B.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/J.y),s.y=o.y*J.y,B.mapSize.y=o.y)),B.map===null||oe===!0||O===!0){const ue=this.type!==Ei?{minFilter:pn,magFilter:pn}:{};B.map!==null&&B.map.dispose(),B.map=new Qs(s.x,s.y,ue),B.map.texture.name=Z.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const ae=B.getViewportCount();for(let ue=0;ue<ae;ue++){const ye=B.getViewport(ue);r.set(o.x*ye.x,o.y*ye.y,o.x*ye.z,o.y*ye.w),W.viewport(r),B.updateMatrices(Z,ue),i=B.getFrustum(),b(T,k,B.camera,Z,this.type)}B.isPointLightShadow!==!0&&this.type===Ei&&_(B,k),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,w,V)};function _(E,T){const k=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qs(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,k,f,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,k,m,y,null)}function g(E,T,k,M){let w=null;const V=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)w=V;else if(w=k.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=w.uuid,oe=T.uuid;let O=l[W];O===void 0&&(O={},l[W]=O);let q=O[oe];q===void 0&&(q=w.clone(),O[oe]=q,T.addEventListener("dispose",R)),w=q}if(w.visible=T.visible,w.wireframe=T.wireframe,M===Ei?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:d[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=n.properties.get(w);W.light=k}return w}function b(E,T,k,M,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Ei)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),O=E.material;if(Array.isArray(O)){const q=oe.groups;for(let j=0,Z=q.length;j<Z;j++){const B=q[j],J=O[B.materialIndex];if(J&&J.visible){const ae=g(E,J,M,w);E.onBeforeShadow(n,E,T,k,oe,ae,B),n.renderBufferDirect(k,null,oe,ae,E,B),E.onAfterShadow(n,E,T,k,oe,ae,B)}}}else if(O.visible){const q=g(E,O,M,w);E.onBeforeShadow(n,E,T,k,oe,q,null),n.renderBufferDirect(k,null,oe,q,E,null),E.onAfterShadow(n,E,T,k,oe,q,null)}}const W=E.children;for(let oe=0,O=W.length;oe<O;oe++)b(W[oe],T,k,M,w)}function R(E){E.target.removeEventListener("dispose",R);for(const k in l){const M=l[k],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function ST(n,e,t){const i=t.isWebGL2;function s(){let H=!1;const Se=new qt;let Me=null;const Oe=new qt(0,0,0,0);return{setMask:function(De){Me!==De&&!H&&(n.colorMask(De,De,De,De),Me=De)},setLocked:function(De){H=De},setClear:function(De,rt,at,zt,an){an===!0&&(De*=zt,rt*=zt,at*=zt),Se.set(De,rt,at,zt),Oe.equals(Se)===!1&&(n.clearColor(De,rt,at,zt),Oe.copy(Se))},reset:function(){H=!1,Me=null,Oe.set(-1,0,0,0)}}}function o(){let H=!1,Se=null,Me=null,Oe=null;return{setTest:function(De){De?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(De){Se!==De&&!H&&(n.depthMask(De),Se=De)},setFunc:function(De){if(Me!==De){switch(De){case P_:n.depthFunc(n.NEVER);break;case I_:n.depthFunc(n.ALWAYS);break;case N_:n.depthFunc(n.LESS);break;case gl:n.depthFunc(n.LEQUAL);break;case D_:n.depthFunc(n.EQUAL);break;case U_:n.depthFunc(n.GEQUAL);break;case O_:n.depthFunc(n.GREATER);break;case k_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=De}},setLocked:function(De){H=De},setClear:function(De){Oe!==De&&(n.clearDepth(De),Oe=De)},reset:function(){H=!1,Se=null,Me=null,Oe=null}}}function r(){let H=!1,Se=null,Me=null,Oe=null,De=null,rt=null,at=null,zt=null,an=null;return{setTest:function(ct){H||(ct?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(ct){Se!==ct&&!H&&(n.stencilMask(ct),Se=ct)},setFunc:function(ct,cn,ii){(Me!==ct||Oe!==cn||De!==ii)&&(n.stencilFunc(ct,cn,ii),Me=ct,Oe=cn,De=ii)},setOp:function(ct,cn,ii){(rt!==ct||at!==cn||zt!==ii)&&(n.stencilOp(ct,cn,ii),rt=ct,at=cn,zt=ii)},setLocked:function(ct){H=ct},setClear:function(ct){an!==ct&&(n.clearStencil(ct),an=ct)},reset:function(){H=!1,Se=null,Me=null,Oe=null,De=null,rt=null,at=null,zt=null,an=null}}}const a=new s,c=new o,l=new r,u=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,y=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,T=null,k=null,M=new Te(0,0,0),w=0,V=!1,W=null,oe=null,O=null,q=null,j=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,J=0;const ae=n.getParameter(n.VERSION);ae.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ae)[1]),B=J>=1):ae.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),B=J>=2);let ue=null,ye={};const ee=n.getParameter(n.SCISSOR_BOX),U=n.getParameter(n.VIEWPORT),N=new qt().fromArray(ee),L=new qt().fromArray(U);function A(H,Se,Me,Oe){const De=new Uint8Array(4),rt=n.createTexture();n.bindTexture(H,rt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<Me;at++)i&&(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)?n.texImage3D(Se,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Se+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return rt}const Q={};Q[n.TEXTURE_2D]=A(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=A(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Q[n.TEXTURE_2D_ARRAY]=A(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=A(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ce(n.DEPTH_TEST),c.setFunc(gl),F(!1),x(tp),ce(n.CULL_FACE),$(ss);function ce(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function X(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function de(H,Se){return m[H]!==Se?(n.bindFramebuffer(H,Se),m[H]=Se,i&&(H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Se),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Se)),!0):!1}function P(H,Se){let Me=y,Oe=!1;if(H)if(Me=v.get(Se),Me===void 0&&(Me=[],v.set(Se,Me)),H.isWebGLMultipleRenderTargets){const De=H.texture;if(Me.length!==De.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,at=De.length;rt<at;rt++)Me[rt]=n.COLOR_ATTACHMENT0+rt;Me.length=De.length,Oe=!0}}else Me[0]!==n.COLOR_ATTACHMENT0&&(Me[0]=n.COLOR_ATTACHMENT0,Oe=!0);else Me[0]!==n.BACK&&(Me[0]=n.BACK,Oe=!0);Oe&&(t.isWebGL2?n.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function ne(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const z={[Ls]:n.FUNC_ADD,[g_]:n.FUNC_SUBTRACT,[v_]:n.FUNC_REVERSE_SUBTRACT};if(i)z[sp]=n.MIN,z[op]=n.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(z[sp]=H.MIN_EXT,z[op]=H.MAX_EXT)}const Y={[y_]:n.ZERO,[x_]:n.ONE,[__]:n.SRC_COLOR,[Yd]:n.SRC_ALPHA,[T_]:n.SRC_ALPHA_SATURATE,[w_]:n.DST_COLOR,[S_]:n.DST_ALPHA,[b_]:n.ONE_MINUS_SRC_COLOR,[Zd]:n.ONE_MINUS_SRC_ALPHA,[E_]:n.ONE_MINUS_DST_COLOR,[M_]:n.ONE_MINUS_DST_ALPHA,[A_]:n.CONSTANT_COLOR,[R_]:n.ONE_MINUS_CONSTANT_COLOR,[L_]:n.CONSTANT_ALPHA,[C_]:n.ONE_MINUS_CONSTANT_ALPHA};function $(H,Se,Me,Oe,De,rt,at,zt,an,ct){if(H===ss){h===!0&&(X(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),H!==m_){if(H!==_||ct!==V){if((g!==Ls||E!==Ls)&&(n.blendEquation(n.FUNC_ADD),g=Ls,E=Ls),ct)switch(H){case Yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ml:n.blendFunc(n.ONE,n.ONE);break;case np:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ip:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ml:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case np:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ip:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,R=null,T=null,k=null,M.set(0,0,0),w=0,_=H,V=ct}return}De=De||Se,rt=rt||Me,at=at||Oe,(Se!==g||De!==E)&&(n.blendEquationSeparate(z[Se],z[De]),g=Se,E=De),(Me!==b||Oe!==R||rt!==T||at!==k)&&(n.blendFuncSeparate(Y[Me],Y[Oe],Y[rt],Y[at]),b=Me,R=Oe,T=rt,k=at),(zt.equals(M)===!1||an!==w)&&(n.blendColor(zt.r,zt.g,zt.b,an),M.copy(zt),w=an),_=H,V=!1}function fe(H,Se){H.side===Zt?X(n.CULL_FACE):ce(n.CULL_FACE);let Me=H.side===bn;Se&&(Me=!Me),F(Me),H.blending===Yo&&H.transparent===!1?$(ss):$(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Oe=H.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(H.stencilWriteMask),l.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),l.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),G(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(H){W!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),W=H)}function x(H){H!==h_?(ce(n.CULL_FACE),H!==oe&&(H===tp?n.cullFace(n.BACK):H===f_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),oe=H}function S(H){H!==O&&(B&&n.lineWidth(H),O=H)}function G(H,Se,Me){H?(ce(n.POLYGON_OFFSET_FILL),(q!==Se||j!==Me)&&(n.polygonOffset(Se,Me),q=Se,j=Me)):X(n.POLYGON_OFFSET_FILL)}function me(H){H?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function ge(H){H===void 0&&(H=n.TEXTURE0+Z-1),ue!==H&&(n.activeTexture(H),ue=H)}function le(H,Se,Me){Me===void 0&&(ue===null?Me=n.TEXTURE0+Z-1:Me=ue);let Oe=ye[Me];Oe===void 0&&(Oe={type:void 0,texture:void 0},ye[Me]=Oe),(Oe.type!==H||Oe.texture!==Se)&&(ue!==Me&&(n.activeTexture(Me),ue=Me),n.bindTexture(H,Se||Q[H]),Oe.type=H,Oe.texture=Se)}function Ae(){const H=ye[ue];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(H){N.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),N.copy(H))}function nt(H){L.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),L.copy(H))}function vt(H,Se){let Me=d.get(Se);Me===void 0&&(Me=new WeakMap,d.set(Se,Me));let Oe=Me.get(H);Oe===void 0&&(Oe=n.getUniformBlockIndex(Se,H.name),Me.set(H,Oe))}function je(H,Se){const Oe=d.get(Se).get(H);u.get(Se)!==Oe&&(n.uniformBlockBinding(Se,Oe,H.__bindingPointIndex),u.set(Se,Oe))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ue=null,ye={},m={},v=new WeakMap,y=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,T=null,k=null,M=new Te(0,0,0),w=0,V=!1,W=null,oe=null,O=null,q=null,j=null,N.set(0,0,n.canvas.width,n.canvas.height),L.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ce,disable:X,bindFramebuffer:de,drawBuffers:P,useProgram:ne,setBlending:$,setMaterial:fe,setFlipSided:F,setCullFace:x,setLineWidth:S,setPolygonOffset:G,setScissorTest:me,activeTexture:ge,bindTexture:le,unbindTexture:Ae,compressedTexImage2D:xe,compressedTexImage3D:Re,texImage2D:Ne,texImage3D:Ce,updateUBOMapping:vt,uniformBlockBinding:je,texStorage2D:We,texStorage3D:Fe,texSubImage2D:Ie,texSubImage3D:ke,compressedTexSubImage2D:ve,compressedTexSubImage3D:Je,scissor:qe,viewport:nt,reset:_e}}function MT(n,e,t,i,s,o,r){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,S){return m?new OffscreenCanvas(x,S):Sl("canvas")}function y(x,S,G,me){let ge=1;if((x.width>me||x.height>me)&&(ge=me/Math.max(x.width,x.height)),ge<1||S===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const le=S?bl:Math.floor,Ae=le(ge*x.width),xe=le(ge*x.height);d===void 0&&(d=v(Ae,xe));const Re=G?v(Ae,xe):d;return Re.width=Ae,Re.height=xe,Re.getContext("2d").drawImage(x,0,0,Ae,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Ae+"x"+xe+")."),Re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return nh(x.width)&&nh(x.height)}function h(x){return a?!1:x.wrapS!==Zn||x.wrapT!==Zn||x.minFilter!==pn&&x.minFilter!==On}function _(x,S){return x.generateMipmaps&&S&&x.minFilter!==pn&&x.minFilter!==On}function g(x){n.generateMipmap(x)}function b(x,S,G,me,ge=!1){if(a===!1)return S;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let le=S;if(S===n.RED&&(G===n.FLOAT&&(le=n.R32F),G===n.HALF_FLOAT&&(le=n.R16F),G===n.UNSIGNED_BYTE&&(le=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(le=n.R8UI),G===n.UNSIGNED_SHORT&&(le=n.R16UI),G===n.UNSIGNED_INT&&(le=n.R32UI),G===n.BYTE&&(le=n.R8I),G===n.SHORT&&(le=n.R16I),G===n.INT&&(le=n.R32I)),S===n.RG&&(G===n.FLOAT&&(le=n.RG32F),G===n.HALF_FLOAT&&(le=n.RG16F),G===n.UNSIGNED_BYTE&&(le=n.RG8)),S===n.RGBA){const Ae=ge?vl:st.getTransfer(me);G===n.FLOAT&&(le=n.RGBA32F),G===n.HALF_FLOAT&&(le=n.RGBA16F),G===n.UNSIGNED_BYTE&&(le=Ae===dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(le=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(le=n.RGB5_A1)}return(le===n.R16F||le===n.R32F||le===n.RG16F||le===n.RG32F||le===n.RGBA16F||le===n.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function R(x,S,G){return _(x,G)===!0||x.isFramebufferTexture&&x.minFilter!==pn&&x.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?S.mipmaps.length:1}function E(x){return x===pn||x===rp||x===ku?n.NEAREST:n.LINEAR}function T(x){const S=x.target;S.removeEventListener("dispose",T),M(S),S.isVideoTexture&&u.delete(S)}function k(x){const S=x.target;S.removeEventListener("dispose",k),V(S)}function M(x){const S=i.get(x);if(S.__webglInit===void 0)return;const G=x.source,me=f.get(G);if(me){const ge=me[S.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&w(x),Object.keys(me).length===0&&f.delete(G)}i.remove(x)}function w(x){const S=i.get(x);n.deleteTexture(S.__webglTexture);const G=x.source,me=f.get(G);delete me[S.__cacheKey],r.memory.textures--}function V(x){const S=x.texture,G=i.get(x),me=i.get(S);if(me.__webglTexture!==void 0&&(n.deleteTexture(me.__webglTexture),r.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(G.__webglFramebuffer[ge]))for(let le=0;le<G.__webglFramebuffer[ge].length;le++)n.deleteFramebuffer(G.__webglFramebuffer[ge][le]);else n.deleteFramebuffer(G.__webglFramebuffer[ge]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ge])}else{if(Array.isArray(G.__webglFramebuffer))for(let ge=0;ge<G.__webglFramebuffer.length;ge++)n.deleteFramebuffer(G.__webglFramebuffer[ge]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ge=0;ge<G.__webglColorRenderbuffer.length;ge++)G.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ge]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ge=0,le=S.length;ge<le;ge++){const Ae=i.get(S[ge]);Ae.__webglTexture&&(n.deleteTexture(Ae.__webglTexture),r.memory.textures--),i.remove(S[ge])}i.remove(S),i.remove(x)}let W=0;function oe(){W=0}function O(){const x=W;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),W+=1,x}function q(x){const S=[];return S.push(x.wrapS),S.push(x.wrapT),S.push(x.wrapR||0),S.push(x.magFilter),S.push(x.minFilter),S.push(x.anisotropy),S.push(x.internalFormat),S.push(x.format),S.push(x.type),S.push(x.generateMipmaps),S.push(x.premultiplyAlpha),S.push(x.flipY),S.push(x.unpackAlignment),S.push(x.colorSpace),S.join()}function j(x,S){const G=i.get(x);if(x.isVideoTexture&&fe(x),x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){const me=x.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(G,x,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function Z(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){N(G,x,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function B(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){N(G,x,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function J(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){L(G,x,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const ae={[Qd]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[eh]:n.MIRRORED_REPEAT},ue={[pn]:n.NEAREST,[rp]:n.NEAREST_MIPMAP_NEAREST,[ku]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[X_]:n.LINEAR_MIPMAP_NEAREST,[wa]:n.LINEAR_MIPMAP_LINEAR},ye={[sb]:n.NEVER,[ub]:n.ALWAYS,[ob]:n.LESS,[q0]:n.LEQUAL,[rb]:n.EQUAL,[lb]:n.GEQUAL,[ab]:n.GREATER,[cb]:n.NOTEQUAL};function ee(x,S,G){if(G?(n.texParameteri(x,n.TEXTURE_WRAP_S,ae[S.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ae[S.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ae[S.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ue[S.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ue[S.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Zn||S.wrapT!==Zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==pn&&S.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===pn||S.minFilter!==ku&&S.minFilter!==wa||S.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ea&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(x,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function U(x,S){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,S.addEventListener("dispose",T));const me=S.source;let ge=f.get(me);ge===void 0&&(ge={},f.set(me,ge));const le=q(S);if(le!==x.__cacheKey){ge[le]===void 0&&(ge[le]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,G=!0),ge[le].usedTimes++;const Ae=ge[x.__cacheKey];Ae!==void 0&&(ge[x.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(S)),x.__cacheKey=le,x.__webglTexture=ge[le].texture}return G}function N(x,S,G){let me=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(me=n.TEXTURE_3D);const ge=U(x,S),le=S.source;t.bindTexture(me,x.__webglTexture,n.TEXTURE0+G);const Ae=i.get(le);if(le.version!==Ae.__version||ge===!0){t.activeTexture(n.TEXTURE0+G);const xe=st.getPrimaries(st.workingColorSpace),Re=S.colorSpace===Fn?null:st.getPrimaries(S.colorSpace),Ie=S.colorSpace===Fn||xe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ke=h(S)&&p(S.image)===!1;let ve=y(S.image,ke,!1,s.maxTextureSize);ve=F(S,ve);const Je=p(ve)||a,We=o.convert(S.format,S.colorSpace);let Fe=o.convert(S.type),Ne=b(S.internalFormat,We,Fe,S.colorSpace,S.isVideoTexture);ee(me,S,Je);let Ce;const qe=S.mipmaps,nt=a&&S.isVideoTexture!==!0&&Ne!==G0,vt=Ae.__version===void 0||ge===!0,je=R(S,ve,Je);if(S.isDepthTexture)Ne=n.DEPTH_COMPONENT,a?S.type===Ki?Ne=n.DEPTH_COMPONENT32F:S.type===Zi?Ne=n.DEPTH_COMPONENT24:S.type===Vs?Ne=n.DEPTH24_STENCIL8:Ne=n.DEPTH_COMPONENT16:S.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ws&&Ne===n.DEPTH_COMPONENT&&S.type!==Qh&&S.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Zi,Fe=o.convert(S.type)),S.format===hr&&Ne===n.DEPTH_COMPONENT&&(Ne=n.DEPTH_STENCIL,S.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Vs,Fe=o.convert(S.type))),vt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,We,Fe,null));else if(S.isDataTexture)if(qe.length>0&&Je){nt&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],nt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,We,Fe,Ce.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Ce.width,Ce.height,0,We,Fe,Ce.data);S.generateMipmaps=!1}else nt?(vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,We,Fe,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ve.width,ve.height,0,We,Fe,ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ne,qe[0].width,qe[0].height,ve.depth);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],S.format!==Kn?We!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,ve.depth,We,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ce.width,Ce.height,ve.depth,We,Fe,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ne,Ce.width,Ce.height,ve.depth,0,We,Fe,Ce.data)}else{nt&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],S.format!==Kn?We!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,We,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ne,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce.width,Ce.height,We,Fe,Ce.data):t.texImage2D(n.TEXTURE_2D,_e,Ne,Ce.width,Ce.height,0,We,Fe,Ce.data)}else if(S.isDataArrayTexture)nt?(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,je,Ne,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,We,Fe,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,We,Fe,ve.data);else if(S.isData3DTexture)nt?(vt&&t.texStorage3D(n.TEXTURE_3D,je,Ne,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,We,Fe,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,We,Fe,ve.data);else if(S.isFramebufferTexture){if(vt)if(nt)t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height);else{let _e=ve.width,H=ve.height;for(let Se=0;Se<je;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ne,_e,H,0,We,Fe,null),_e>>=1,H>>=1}}else if(qe.length>0&&Je){nt&&vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,qe[0].width,qe[0].height);for(let _e=0,H=qe.length;_e<H;_e++)Ce=qe[_e],nt?t.texSubImage2D(n.TEXTURE_2D,_e,0,0,We,Fe,Ce):t.texImage2D(n.TEXTURE_2D,_e,Ne,We,Fe,Ce);S.generateMipmaps=!1}else nt?(vt&&t.texStorage2D(n.TEXTURE_2D,je,Ne,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,We,Fe,ve)):t.texImage2D(n.TEXTURE_2D,0,Ne,We,Fe,ve);_(S,Je)&&g(me),Ae.__version=le.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function L(x,S,G){if(S.image.length!==6)return;const me=U(x,S),ge=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+G);const le=i.get(ge);if(ge.version!==le.__version||me===!0){t.activeTexture(n.TEXTURE0+G);const Ae=st.getPrimaries(st.workingColorSpace),xe=S.colorSpace===Fn?null:st.getPrimaries(S.colorSpace),Re=S.colorSpace===Fn||Ae===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let _e=0;_e<6;_e++)!Ie&&!ke?ve[_e]=y(S.image[_e],!1,!0,s.maxCubemapSize):ve[_e]=ke?S.image[_e].image:S.image[_e],ve[_e]=F(S,ve[_e]);const Je=ve[0],We=p(Je)||a,Fe=o.convert(S.format,S.colorSpace),Ne=o.convert(S.type),Ce=b(S.internalFormat,Fe,Ne,S.colorSpace),qe=a&&S.isVideoTexture!==!0,nt=le.__version===void 0||me===!0;let vt=R(S,Je,We);ee(n.TEXTURE_CUBE_MAP,S,We);let je;if(Ie){qe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ce,Je.width,Je.height);for(let _e=0;_e<6;_e++){je=ve[_e].mipmaps;for(let H=0;H<je.length;H++){const Se=je[H];S.format!==Kn?Fe!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,0,0,Se.width,Se.height,Fe,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,0,0,Se.width,Se.height,Fe,Ne,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H,Ce,Se.width,Se.height,0,Fe,Ne,Se.data)}}}else{je=S.mipmaps,qe&&nt&&(je.length>0&&vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Ce,ve[0].width,ve[0].height));for(let _e=0;_e<6;_e++)if(ke){qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ve[_e].width,ve[_e].height,Fe,Ne,ve[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,ve[_e].width,ve[_e].height,0,Fe,Ne,ve[_e].data);for(let H=0;H<je.length;H++){const Me=je[H].image[_e].image;qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,0,0,Me.width,Me.height,Fe,Ne,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,Ce,Me.width,Me.height,0,Fe,Ne,Me.data)}}else{qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe,Ne,ve[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Ce,Fe,Ne,ve[_e]);for(let H=0;H<je.length;H++){const Se=je[H];qe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,0,0,Fe,Ne,Se.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,H+1,Ce,Fe,Ne,Se.image[_e])}}}_(S,We)&&g(n.TEXTURE_CUBE_MAP),le.__version=ge.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function A(x,S,G,me,ge,le){const Ae=o.convert(G.format,G.colorSpace),xe=o.convert(G.type),Re=b(G.internalFormat,Ae,xe,G.colorSpace);if(!i.get(S).__hasExternalTextures){const ke=Math.max(1,S.width>>le),ve=Math.max(1,S.height>>le);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,le,Re,ke,ve,S.depth,0,Ae,xe,null):t.texImage2D(ge,le,Re,ke,ve,0,Ae,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ge,i.get(G).__webglTexture,0,Y(S)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ge,i.get(G).__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(x,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,x),S.depthBuffer&&!S.stencilBuffer){let me=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||$(S)){const ge=S.depthTexture;ge&&ge.isDepthTexture&&(ge.type===Ki?me=n.DEPTH_COMPONENT32F:ge.type===Zi&&(me=n.DEPTH_COMPONENT24));const le=Y(S);$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,me,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,le,me,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,me,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(S.depthBuffer&&S.stencilBuffer){const me=Y(S);G&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const me=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ge=0;ge<me.length;ge++){const le=me[ge],Ae=o.convert(le.format,le.colorSpace),xe=o.convert(le.type),Re=b(le.internalFormat,Ae,xe,le.colorSpace),Ie=Y(S);G&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,Re,S.width,S.height):$(S)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,Re,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Re,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(x,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),j(S.depthTexture,0);const me=i.get(S.depthTexture).__webglTexture,ge=Y(S);if(S.depthTexture.format===Ws)$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(S.depthTexture.format===hr)$(S)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function X(x){const S=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,x)}else if(G){S.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[me]),S.__webglDepthbuffer[me]=n.createRenderbuffer(),Q(S.__webglDepthbuffer[me],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Q(S.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(x,S,G){const me=i.get(x);S!==void 0&&A(me.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&X(x)}function P(x){const S=x.texture,G=i.get(x),me=i.get(S);x.addEventListener("dispose",k),x.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=S.version,r.memory.textures++);const ge=x.isWebGLCubeRenderTarget===!0,le=x.isWebGLMultipleRenderTargets===!0,Ae=p(x)||a;if(ge){G.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[xe]=[];for(let Re=0;Re<S.mipmaps.length;Re++)G.__webglFramebuffer[xe][Re]=n.createFramebuffer()}else G.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let xe=0;xe<S.mipmaps.length;xe++)G.__webglFramebuffer[xe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(le)if(s.drawBuffers){const xe=x.texture;for(let Re=0,Ie=xe.length;Re<Ie;Re++){const ke=i.get(xe[Re]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&$(x)===!1){const xe=le?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Re=0;Re<xe.length;Re++){const Ie=xe[Re];G.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Re]);const ke=o.convert(Ie.format,Ie.colorSpace),ve=o.convert(Ie.type),Je=b(Ie.internalFormat,ke,ve,Ie.colorSpace,x.isXRRenderTarget===!0),We=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Je,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,G.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(G.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),ee(n.TEXTURE_CUBE_MAP,S,Ae);for(let xe=0;xe<6;xe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)A(G.__webglFramebuffer[xe][Re],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re);else A(G.__webglFramebuffer[xe],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);_(S,Ae)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const xe=x.texture;for(let Re=0,Ie=xe.length;Re<Ie;Re++){const ke=xe[Re],ve=i.get(ke);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),ee(n.TEXTURE_2D,ke,Ae),A(G.__webglFramebuffer,x,ke,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),_(ke,Ae)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?xe=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,me.__webglTexture),ee(xe,S,Ae),a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)A(G.__webglFramebuffer[Re],x,S,n.COLOR_ATTACHMENT0,xe,Re);else A(G.__webglFramebuffer,x,S,n.COLOR_ATTACHMENT0,xe,0);_(S,Ae)&&g(xe),t.unbindTexture()}x.depthBuffer&&X(x)}function ne(x){const S=p(x)||a,G=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let me=0,ge=G.length;me<ge;me++){const le=G[me];if(_(le,S)){const Ae=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(le).__webglTexture;t.bindTexture(Ae,xe),g(Ae),t.unbindTexture()}}}function z(x){if(a&&x.samples>0&&$(x)===!1){const S=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],G=x.width,me=x.height;let ge=n.COLOR_BUFFER_BIT;const le=[],Ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(x),Re=x.isWebGLMultipleRenderTargets===!0;if(Re)for(let Ie=0;Ie<S.length;Ie++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ie=0;Ie<S.length;Ie++){le.push(n.COLOR_ATTACHMENT0+Ie),x.depthBuffer&&le.push(Ae);const ke=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(ke===!1&&(x.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]),ke===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),Re){const ve=i.get(S[Ie]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,G,me,0,0,G,me,ge,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ie=0;Ie<S.length;Ie++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Ie]);const ke=i.get(S[Ie]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Y(x){return Math.min(s.maxSamples,x.samples)}function $(x){const S=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function fe(x){const S=r.render.frame;u.get(x)!==S&&(u.set(x,S),x.update())}function F(x,S){const G=x.colorSpace,me=x.format,ge=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===th||G!==Oi&&G!==Fn&&(st.getTransfer(G)===dt?a===!1?e.has("EXT_sRGB")===!0&&me===Kn?(x.format=th,x.minFilter=On,x.generateMipmaps=!1):S=$0.sRGBToLinear(S):(me!==Kn||ge!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=O,this.resetTextureUnits=oe,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=de,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=A,this.useMultisampledRTT=$}function wT(n,e,t){const i=t.isWebGL2;function s(o,r=Fn){let a;const c=st.getTransfer(r);if(o===rs)return n.UNSIGNED_BYTE;if(o===k0)return n.UNSIGNED_SHORT_4_4_4_4;if(o===F0)return n.UNSIGNED_SHORT_5_5_5_1;if(o===$_)return n.BYTE;if(o===j_)return n.SHORT;if(o===Qh)return n.UNSIGNED_SHORT;if(o===O0)return n.INT;if(o===Zi)return n.UNSIGNED_INT;if(o===Ki)return n.FLOAT;if(o===Ea)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===Y_)return n.ALPHA;if(o===Kn)return n.RGBA;if(o===Z_)return n.LUMINANCE;if(o===K_)return n.LUMINANCE_ALPHA;if(o===Ws)return n.DEPTH_COMPONENT;if(o===hr)return n.DEPTH_STENCIL;if(o===th)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===J_)return n.RED;if(o===z0)return n.RED_INTEGER;if(o===Q_)return n.RG;if(o===B0)return n.RG_INTEGER;if(o===H0)return n.RGBA_INTEGER;if(o===Fu||o===zu||o===Bu||o===Hu)if(c===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===Fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===Fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===zu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Bu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ap||o===cp||o===lp||o===up)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===ap)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===up)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===G0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dp||o===hp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===dp)return c===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===hp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fp||o===pp||o===mp||o===gp||o===vp||o===yp||o===xp||o===_p||o===bp||o===Sp||o===Mp||o===wp||o===Ep||o===Tp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===fp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===vp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===yp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===xp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===_p)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===bp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Mp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Ep)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tp)return c===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Gu||o===Ap||o===Rp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Gu)return c===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ap)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===eb||o===Lp||o===Cp||o===Pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(o===Gu)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Vs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:s}}class ET extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TT={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),h=this._getHandJoint(l,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TT)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class AT extends br{constructor(e,t){super();const i=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,v=null;const y=t.getContextAttributes();let p=null,h=null;const _=[],g=[],b=new pe;let R=null;const E=new Tn;E.layers.enable(1),E.viewport=new qt;const T=new Tn;T.layers.enable(2),T.viewport=new qt;const k=[E,T],M=new ET;M.layers.enable(1),M.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let U=_[ee];return U===void 0&&(U=new dd,_[ee]=U),U.getTargetRaySpace()},this.getControllerGrip=function(ee){let U=_[ee];return U===void 0&&(U=new dd,_[ee]=U),U.getGripSpace()},this.getHand=function(ee){let U=_[ee];return U===void 0&&(U=new dd,_[ee]=U),U.getHandSpace()};function W(ee){const U=g.indexOf(ee.inputSource);if(U===-1)return;const N=_[U];N!==void 0&&(N.update(ee.inputSource,ee.frame,l||r),N.dispatchEvent({type:ee.type,data:ee.inputSource}))}function oe(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",O);for(let ee=0;ee<_.length;ee++){const U=g[ee];U!==null&&(g[ee]=null,_[ee].disconnect(U))}w=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const U={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Qs(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let U=null,N=null,L=null;y.depth&&(L=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=y.stencil?hr:Ws,N=y.stencil?Vs:Zi);const A={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:o};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(A),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Qs(f.textureWidth,f.textureHeight,{format:Kn,type:rs,depthTexture:new ov(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Q=e.properties.get(h);Q.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(ee){for(let U=0;U<ee.removed.length;U++){const N=ee.removed[U],L=g.indexOf(N);L>=0&&(g[L]=null,_[L].disconnect(N))}for(let U=0;U<ee.added.length;U++){const N=ee.added[U];let L=g.indexOf(N);if(L===-1){for(let Q=0;Q<_.length;Q++)if(Q>=g.length){g.push(N),L=Q;break}else if(g[Q]===null){g[Q]=N,L=Q;break}if(L===-1)break}const A=_[L];A&&A.connect(N)}}const q=new I,j=new I;function Z(ee,U,N){q.setFromMatrixPosition(U.matrixWorld),j.setFromMatrixPosition(N.matrixWorld);const L=q.distanceTo(j),A=U.projectionMatrix.elements,Q=N.projectionMatrix.elements,ce=A[14]/(A[10]-1),X=A[14]/(A[10]+1),de=(A[9]+1)/A[5],P=(A[9]-1)/A[5],ne=(A[8]-1)/A[0],z=(Q[8]+1)/Q[0],Y=ce*ne,$=ce*z,fe=L/(-ne+z),F=fe*-ne;U.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(F),ee.translateZ(fe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const x=ce+fe,S=X+fe,G=Y-F,me=$+(L-F),ge=de*X/S*x,le=P*X/S*x;ee.projectionMatrix.makePerspective(G,me,ge,le,x,S),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function B(ee,U){U===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(U.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;M.near=T.near=E.near=ee.near,M.far=T.far=E.far=ee.far,(w!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,V=M.far);const U=ee.parent,N=M.cameras;B(M,U);for(let L=0;L<N.length;L++)B(N[L],U);N.length===2?Z(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),J(ee,M,U)};function J(ee,U,N){N===null?ee.matrix.copy(U.matrixWorld):(ee.matrix.copy(N.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(U.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(U.projectionMatrix),ee.projectionMatrixInverse.copy(U.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ta*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(ee){c=ee,f!==null&&(f.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)};let ae=null;function ue(ee,U){if(u=U.getViewerPose(l||r),v=U,u!==null){const N=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let L=!1;N.length!==M.cameras.length&&(M.cameras.length=0,L=!0);for(let A=0;A<N.length;A++){const Q=N[A];let ce=null;if(m!==null)ce=m.getViewport(Q);else{const de=d.getViewSubImage(f,Q);ce=de.viewport,A===0&&(e.setRenderTargetTextures(h,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(h))}let X=k[A];X===void 0&&(X=new Tn,X.layers.enable(A),X.viewport=new qt,k[A]=X),X.matrix.fromArray(Q.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(Q.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),A===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),L===!0&&M.cameras.push(X)}}for(let N=0;N<_.length;N++){const L=g[N],A=_[N];L!==null&&A!==void 0&&A.update(L,U,l||r)}ae&&ae(ee,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),v=null}const ye=new iv;ye.setAnimationLoop(ue),this.setAnimationLoop=function(ee){ae=ee},this.dispose=function(){}}}function RT(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,ev(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,_,g,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(p,h):h.isMeshToonMaterial?(o(p,h),d(p,h)):h.isMeshPhongMaterial?(o(p,h),u(p,h)):h.isMeshStandardMaterial?(o(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(o(p,h),v(p,h)):h.isMeshDepthMaterial?o(p,h):h.isMeshDistanceMaterial?(o(p,h),y(p,h)):h.isMeshNormalMaterial?o(p,h):h.isLineBasicMaterial?(r(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,_,g):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===bn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===bn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function r(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,_,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=g*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===bn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function LT(n,e,t,i){let s={},o={},r=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,g){const b=g.program;i.uniformBlockBinding(_,b)}function l(_,g){let b=s[_.id];b===void 0&&(v(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(_,R);const E=e.render.frame;o[_.id]!==E&&(f(_),o[_.id]=E)}function u(_){const g=d();_.__bindingPointIndex=g;const b=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,b),b}function d(){for(let _=0;_<a;_++)if(r.indexOf(_)===-1)return r.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=s[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,T=b.length;E<T;E++){const k=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,w=k.length;M<w;M++){const V=k[M];if(m(V,E,M,R)===!0){const W=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let O=0;for(let q=0;q<oe.length;q++){const j=oe[q],Z=y(j);typeof j=="number"||typeof j=="boolean"?(V.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,W+O,V.__data)):j.isMatrix3?(V.__data[0]=j.elements[0],V.__data[1]=j.elements[1],V.__data[2]=j.elements[2],V.__data[3]=0,V.__data[4]=j.elements[3],V.__data[5]=j.elements[4],V.__data[6]=j.elements[5],V.__data[7]=0,V.__data[8]=j.elements[6],V.__data[9]=j.elements[7],V.__data[10]=j.elements[8],V.__data[11]=0):(j.toArray(V.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,g,b,R){const E=_.value,T=g+"_"+b;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const k=R[T];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return R[T]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function v(_){const g=_.uniforms;let b=0;const R=16;for(let T=0,k=g.length;T<k;T++){const M=Array.isArray(g[T])?g[T]:[g[T]];for(let w=0,V=M.length;w<V;w++){const W=M[w],oe=Array.isArray(W.value)?W.value:[W.value];for(let O=0,q=oe.length;O<q;O++){const j=oe[O],Z=y(j),B=b%R;B!==0&&R-B<Z.boundary&&(b+=R-B),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=Z.storage}}}const E=b%R;return E>0&&(b+=R-E),_.__size=b,_.__cache={},this}function y(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const b=r.indexOf(g.__bindingPointIndex);r.splice(b,1),n.deleteBuffer(s[g.id]),delete s[g.id],delete o[g.id]}function h(){for(const _ in s)n.deleteBuffer(s[_]);r=[],s={},o={}}return{bind:c,update:l,dispose:h}}class rf{constructor(e={}){const{canvas:t=Eb(),context:i=null,depth:s=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=r;const m=new Uint32Array(4),v=new Int32Array(4);let y=null,p=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=os,this.toneMappingExposure=1;const g=this;let b=!1,R=0,E=0,T=null,k=-1,M=null;const w=new qt,V=new qt;let W=null;const oe=new Te(0);let O=0,q=t.width,j=t.height,Z=1,B=null,J=null;const ae=new qt(0,0,q,j),ue=new qt(0,0,q,j);let ye=!1;const ee=new sf;let U=!1,N=!1,L=null;const A=new Ke,Q=new pe,ce=new I,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return T===null?Z:1}let P=i;function ne(C,K){for(let se=0;se<C.length;se++){const re=C[se],ie=t.getContext(re,K);if(ie!==null)return ie}return null}try{const C={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kh}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Se,!1),P===null){const K=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&K.shift(),P=ne(K,C),P===null)throw ne(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let z,Y,$,fe,F,x,S,G,me,ge,le,Ae,xe,Re,Ie,ke,ve,Je,We,Fe,Ne,Ce,qe,nt;function vt(){z=new zw(P),Y=new Nw(P,z,e),z.init(Y),Ce=new wT(P,z,Y),$=new ST(P,z,Y),fe=new Gw(P),F=new cT,x=new MT(P,z,$,F,Y,Ce,fe),S=new Uw(g),G=new Fw(g),me=new Zb(P,Y),qe=new Pw(P,z,me,Y),ge=new Bw(P,me,fe,qe),le=new Xw(P,ge,me,fe),We=new qw(P,Y,x),ke=new Dw(F),Ae=new aT(g,S,G,z,Y,qe,ke),xe=new RT(g,F),Re=new uT,Ie=new gT(z,Y),Je=new Cw(g,S,G,$,le,f,c),ve=new bT(g,le,Y),nt=new LT(P,fe,Y,$),Fe=new Iw(P,z,fe,Y),Ne=new Hw(P,z,fe,Y),fe.programs=Ae.programs,g.capabilities=Y,g.extensions=z,g.properties=F,g.renderLists=Re,g.shadowMap=ve,g.state=$,g.info=fe}vt();const je=new AT(g,P);this.xr=je,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=z.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=z.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(q,j,!1))},this.getSize=function(C){return C.set(q,j)},this.setSize=function(C,K,se=!0){if(je.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=C,j=K,t.width=Math.floor(C*Z),t.height=Math.floor(K*Z),se===!0&&(t.style.width=C+"px",t.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(q*Z,j*Z).floor()},this.setDrawingBufferSize=function(C,K,se){q=C,j=K,Z=se,t.width=Math.floor(C*se),t.height=Math.floor(K*se),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,K,se,re){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,K,se,re),$.viewport(w.copy(ae).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(ue)},this.setScissor=function(C,K,se,re){C.isVector4?ue.set(C.x,C.y,C.z,C.w):ue.set(C,K,se,re),$.scissor(V.copy(ue).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){$.setScissorTest(ye=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,K=!0,se=!0){let re=0;if(C){let ie=!1;if(T!==null){const Le=T.texture.format;ie=Le===H0||Le===B0||Le===z0}if(ie){const Le=T.texture.type,Pe=Le===rs||Le===Zi||Le===Qh||Le===Vs||Le===k0||Le===F0,Ue=Je.getClearColor(),ze=Je.getClearAlpha(),$e=Ue.r,Ge=Ue.g,Ve=Ue.b;Pe?(m[0]=$e,m[1]=Ge,m[2]=Ve,m[3]=ze,P.clearBufferuiv(P.COLOR,0,m)):(v[0]=$e,v[1]=Ge,v[2]=Ve,v[3]=ze,P.clearBufferiv(P.COLOR,0,v))}else re|=P.COLOR_BUFFER_BIT}K&&(re|=P.DEPTH_BUFFER_BIT),se&&(re|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Re.dispose(),Ie.dispose(),F.dispose(),S.dispose(),G.dispose(),le.dispose(),qe.dispose(),nt.dispose(),Ae.dispose(),je.dispose(),je.removeEventListener("sessionstart",an),je.removeEventListener("sessionend",ct),L&&(L.dispose(),L=null),cn.stop()};function _e(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=fe.autoReset,K=ve.enabled,se=ve.autoUpdate,re=ve.needsUpdate,ie=ve.type;vt(),fe.autoReset=C,ve.enabled=K,ve.autoUpdate=se,ve.needsUpdate=re,ve.type=ie}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Me(C){const K=C.target;K.removeEventListener("dispose",Me),Oe(K)}function Oe(C){De(C),F.remove(C)}function De(C){const K=F.get(C).programs;K!==void 0&&(K.forEach(function(se){Ae.releaseProgram(se)}),C.isShaderMaterial&&Ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,se,re,ie,Le){K===null&&(K=X);const Pe=ie.isMesh&&ie.matrixWorld.determinant()<0,Ue=Lx(C,K,se,re,ie);$.setMaterial(re,Pe);let ze=se.index,$e=1;if(re.wireframe===!0){if(ze=ge.getWireframeAttribute(se),ze===void 0)return;$e=2}const Ge=se.drawRange,Ve=se.attributes.position;let wt=Ge.start*$e,Mn=(Ge.start+Ge.count)*$e;Le!==null&&(wt=Math.max(wt,Le.start*$e),Mn=Math.min(Mn,(Le.start+Le.count)*$e)),ze!==null?(wt=Math.max(wt,0),Mn=Math.min(Mn,ze.count)):Ve!=null&&(wt=Math.max(wt,0),Mn=Math.min(Mn,Ve.count));const Bt=Mn-wt;if(Bt<0||Bt===1/0)return;qe.setup(ie,re,Ue,se,ze);let vi,ft=Fe;if(ze!==null&&(vi=me.get(ze),ft=Ne,ft.setIndex(vi)),ie.isMesh)re.wireframe===!0?($.setLineWidth(re.wireframeLinewidth*de()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(ie.isLine){let Ye=re.linewidth;Ye===void 0&&(Ye=1),$.setLineWidth(Ye*de()),ie.isLineSegments?ft.setMode(P.LINES):ie.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else ie.isPoints?ft.setMode(P.POINTS):ie.isSprite&&ft.setMode(P.TRIANGLES);if(ie.isBatchedMesh)ft.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)ft.renderInstances(wt,Bt,ie.count);else if(se.isInstancedBufferGeometry){const Ye=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Au=Math.min(se.instanceCount,Ye);ft.renderInstances(wt,Bt,Au)}else ft.render(wt,Bt)};function rt(C,K,se){C.transparent===!0&&C.side===Zt&&C.forceSinglePass===!1?(C.side=bn,C.needsUpdate=!0,Xa(C,K,se),C.side=us,C.needsUpdate=!0,Xa(C,K,se),C.side=Zt):Xa(C,K,se)}this.compile=function(C,K,se=null){se===null&&(se=C),p=Ie.get(se),p.init(),_.push(p),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),C!==se&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(p.pushLight(ie),ie.castShadow&&p.pushShadow(ie))}),p.setupLights(g._useLegacyLights);const re=new Set;return C.traverse(function(ie){const Le=ie.material;if(Le)if(Array.isArray(Le))for(let Pe=0;Pe<Le.length;Pe++){const Ue=Le[Pe];rt(Ue,se,ie),re.add(Ue)}else rt(Le,se,ie),re.add(Le)}),_.pop(),p=null,re},this.compileAsync=function(C,K,se=null){const re=this.compile(C,K,se);return new Promise(ie=>{function Le(){if(re.forEach(function(Pe){F.get(Pe).currentProgram.isReady()&&re.delete(Pe)}),re.size===0){ie(C);return}setTimeout(Le,10)}z.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let at=null;function zt(C){at&&at(C)}function an(){cn.stop()}function ct(){cn.start()}const cn=new iv;cn.setAnimationLoop(zt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(C){at=C,je.setAnimationLoop(C),C===null?cn.stop():cn.start()},je.addEventListener("sessionstart",an),je.addEventListener("sessionend",ct),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(je.cameraAutoUpdate===!0&&je.updateCamera(K),K=je.getCamera()),C.isScene===!0&&C.onBeforeRender(g,C,K,T),p=Ie.get(C,_.length),p.init(),_.push(p),A.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ee.setFromProjectionMatrix(A),N=this.localClippingEnabled,U=ke.init(this.clippingPlanes,N),y=Re.get(C,h.length),y.init(),h.push(y),ii(C,K,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(B,J),this.info.render.frame++,U===!0&&ke.beginShadows();const se=p.state.shadowsArray;if(ve.render(se,C,K),U===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(y,C),p.setupLights(g._useLegacyLights),K.isArrayCamera){const re=K.cameras;for(let ie=0,Le=re.length;ie<Le;ie++){const Pe=re[ie];Hf(y,C,Pe,Pe.viewport)}}else Hf(y,C,K);T!==null&&(x.updateMultisampleRenderTarget(T),x.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(g,C,K),qe.resetDefaultState(),k=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ii(C,K,se,re){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ee.intersectsSprite(C)){re&&ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(A);const Pe=le.update(C),Ue=C.material;Ue.visible&&y.push(C,Pe,Ue,se,ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ee.intersectsObject(C))){const Pe=le.update(C),Ue=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ce.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ce.copy(Pe.boundingSphere.center)),ce.applyMatrix4(C.matrixWorld).applyMatrix4(A)),Array.isArray(Ue)){const ze=Pe.groups;for(let $e=0,Ge=ze.length;$e<Ge;$e++){const Ve=ze[$e],wt=Ue[Ve.materialIndex];wt&&wt.visible&&y.push(C,Pe,wt,se,ce.z,Ve)}}else Ue.visible&&y.push(C,Pe,Ue,se,ce.z,null)}}const Le=C.children;for(let Pe=0,Ue=Le.length;Pe<Ue;Pe++)ii(Le[Pe],K,se,re)}function Hf(C,K,se,re){const ie=C.opaque,Le=C.transmissive,Pe=C.transparent;p.setupLightsView(se),U===!0&&ke.setGlobalState(g.clippingPlanes,se),Le.length>0&&Rx(ie,Le,K,se),re&&$.viewport(w.copy(re)),ie.length>0&&qa(ie,K,se),Le.length>0&&qa(Le,K,se),Pe.length>0&&qa(Pe,K,se),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Rx(C,K,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Le=Y.isWebGL2;L===null&&(L=new Qs(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")?Ea:rs,minFilter:wa,samples:Le?4:0})),g.getDrawingBufferSize(Q),Le?L.setSize(Q.x,Q.y):L.setSize(bl(Q.x),bl(Q.y));const Pe=g.getRenderTarget();g.setRenderTarget(L),g.getClearColor(oe),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const Ue=g.toneMapping;g.toneMapping=os,qa(C,se,re),x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L);let ze=!1;for(let $e=0,Ge=K.length;$e<Ge;$e++){const Ve=K[$e],wt=Ve.object,Mn=Ve.geometry,Bt=Ve.material,vi=Ve.group;if(Bt.side===Zt&&wt.layers.test(re.layers)){const ft=Bt.side;Bt.side=bn,Bt.needsUpdate=!0,Gf(wt,se,re,Mn,Bt,vi),Bt.side=ft,Bt.needsUpdate=!0,ze=!0}}ze===!0&&(x.updateMultisampleRenderTarget(L),x.updateRenderTargetMipmap(L)),g.setRenderTarget(Pe),g.setClearColor(oe,O),g.toneMapping=Ue}function qa(C,K,se){const re=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Le=C.length;ie<Le;ie++){const Pe=C[ie],Ue=Pe.object,ze=Pe.geometry,$e=re===null?Pe.material:re,Ge=Pe.group;Ue.layers.test(se.layers)&&Gf(Ue,K,se,ze,$e,Ge)}}function Gf(C,K,se,re,ie,Le){C.onBeforeRender(g,K,se,re,ie,Le),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(g,K,se,re,C,Le),ie.transparent===!0&&ie.side===Zt&&ie.forceSinglePass===!1?(ie.side=bn,ie.needsUpdate=!0,g.renderBufferDirect(se,K,re,ie,C,Le),ie.side=us,ie.needsUpdate=!0,g.renderBufferDirect(se,K,re,ie,C,Le),ie.side=Zt):g.renderBufferDirect(se,K,re,ie,C,Le),C.onAfterRender(g,K,se,re,ie,Le)}function Xa(C,K,se){K.isScene!==!0&&(K=X);const re=F.get(C),ie=p.state.lights,Le=p.state.shadowsArray,Pe=ie.state.version,Ue=Ae.getParameters(C,ie.state,Le,K,se),ze=Ae.getProgramCacheKey(Ue);let $e=re.programs;re.environment=C.isMeshStandardMaterial?K.environment:null,re.fog=K.fog,re.envMap=(C.isMeshStandardMaterial?G:S).get(C.envMap||re.environment),$e===void 0&&(C.addEventListener("dispose",Me),$e=new Map,re.programs=$e);let Ge=$e.get(ze);if(Ge!==void 0){if(re.currentProgram===Ge&&re.lightsStateVersion===Pe)return Wf(C,Ue),Ge}else Ue.uniforms=Ae.getUniforms(C),C.onBuild(se,Ue,g),C.onBeforeCompile(Ue,g),Ge=Ae.acquireProgram(Ue,ze),$e.set(ze,Ge),re.uniforms=Ue.uniforms;const Ve=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ke.uniform),Wf(C,Ue),re.needsLights=Px(C),re.lightsStateVersion=Pe,re.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.currentProgram=Ge,re.uniformsList=null,Ge}function Vf(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Wf(C,K){const se=F.get(C);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function Lx(C,K,se,re,ie){K.isScene!==!0&&(K=X),x.resetTextureUnits();const Le=K.fog,Pe=re.isMeshStandardMaterial?K.environment:null,Ue=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Oi,ze=(re.isMeshStandardMaterial?G:S).get(re.envMap||Pe),$e=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ge=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ve=!!se.morphAttributes.position,wt=!!se.morphAttributes.normal,Mn=!!se.morphAttributes.color;let Bt=os;re.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Bt=g.toneMapping);const vi=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,ft=vi!==void 0?vi.length:0,Ye=F.get(re),Au=p.state.lights;if(U===!0&&(N===!0||C!==M)){const In=C===M&&re.id===k;ke.setState(re,C,In)}let yt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Au.state.version||Ye.outputColorSpace!==Ue||ie.isBatchedMesh&&Ye.batching===!1||!ie.isBatchedMesh&&Ye.batching===!0||ie.isInstancedMesh&&Ye.instancing===!1||!ie.isInstancedMesh&&Ye.instancing===!0||ie.isSkinnedMesh&&Ye.skinning===!1||!ie.isSkinnedMesh&&Ye.skinning===!0||ie.isInstancedMesh&&Ye.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ye.instancingColor===!1&&ie.instanceColor!==null||Ye.envMap!==ze||re.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ke.numPlanes||Ye.numIntersection!==ke.numIntersection)||Ye.vertexAlphas!==$e||Ye.vertexTangents!==Ge||Ye.morphTargets!==Ve||Ye.morphNormals!==wt||Ye.morphColors!==Mn||Ye.toneMapping!==Bt||Y.isWebGL2===!0&&Ye.morphTargetsCount!==ft)&&(yt=!0):(yt=!0,Ye.__version=re.version);let vs=Ye.currentProgram;yt===!0&&(vs=Xa(re,K,ie));let qf=!1,Tr=!1,Ru=!1;const Qt=vs.getUniforms(),ys=Ye.uniforms;if($.useProgram(vs.program)&&(qf=!0,Tr=!0,Ru=!0),re.id!==k&&(k=re.id,Tr=!0),qf||M!==C){Qt.setValue(P,"projectionMatrix",C.projectionMatrix),Qt.setValue(P,"viewMatrix",C.matrixWorldInverse);const In=Qt.map.cameraPosition;In!==void 0&&In.setValue(P,ce.setFromMatrixPosition(C.matrixWorld)),Y.logarithmicDepthBuffer&&Qt.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Qt.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Tr=!0,Ru=!0)}if(ie.isSkinnedMesh){Qt.setOptional(P,ie,"bindMatrix"),Qt.setOptional(P,ie,"bindMatrixInverse");const In=ie.skeleton;In&&(Y.floatVertexTextures?(In.boneTexture===null&&In.computeBoneTexture(),Qt.setValue(P,"boneTexture",In.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(Qt.setOptional(P,ie,"batchingTexture"),Qt.setValue(P,"batchingTexture",ie._matricesTexture,x));const Lu=se.morphAttributes;if((Lu.position!==void 0||Lu.normal!==void 0||Lu.color!==void 0&&Y.isWebGL2===!0)&&We.update(ie,se,vs),(Tr||Ye.receiveShadow!==ie.receiveShadow)&&(Ye.receiveShadow=ie.receiveShadow,Qt.setValue(P,"receiveShadow",ie.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(ys.envMap.value=ze,ys.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Tr&&(Qt.setValue(P,"toneMappingExposure",g.toneMappingExposure),Ye.needsLights&&Cx(ys,Ru),Le&&re.fog===!0&&xe.refreshFogUniforms(ys,Le),xe.refreshMaterialUniforms(ys,re,Z,j,L),jc.upload(P,Vf(Ye),ys,x)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(jc.upload(P,Vf(Ye),ys,x),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Qt.setValue(P,"center",ie.center),Qt.setValue(P,"modelViewMatrix",ie.modelViewMatrix),Qt.setValue(P,"normalMatrix",ie.normalMatrix),Qt.setValue(P,"modelMatrix",ie.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const In=re.uniformsGroups;for(let Cu=0,Ix=In.length;Cu<Ix;Cu++)if(Y.isWebGL2){const Xf=In[Cu];nt.update(Xf,vs),nt.bind(Xf,vs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vs}function Cx(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Px(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,K,se){F.get(C.texture).__webglTexture=K,F.get(C.depthTexture).__webglTexture=se;const re=F.get(C);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const se=F.get(C);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,se=0){T=C,R=K,E=se;let re=!0,ie=null,Le=!1,Pe=!1;if(C){const ze=F.get(C);ze.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(P.FRAMEBUFFER,null),re=!1):ze.__webglFramebuffer===void 0?x.setupRenderTarget(C):ze.__hasExternalTextures&&x.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Pe=!0);const Ge=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?ie=Ge[K][se]:ie=Ge[K],Le=!0):Y.isWebGL2&&C.samples>0&&x.useMultisampledRTT(C)===!1?ie=F.get(C).__webglMultisampledFramebuffer:Array.isArray(Ge)?ie=Ge[se]:ie=Ge,w.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest}else w.copy(ae).multiplyScalar(Z).floor(),V.copy(ue).multiplyScalar(Z).floor(),W=ye;if($.bindFramebuffer(P.FRAMEBUFFER,ie)&&Y.drawBuffers&&re&&$.drawBuffers(C,ie),$.viewport(w),$.scissor(V),$.setScissorTest(W),Le){const ze=F.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+K,ze.__webglTexture,se)}else if(Pe){const ze=F.get(C.texture),$e=K||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,se||0,$e)}k=-1},this.readRenderTargetPixels=function(C,K,se,re,ie,Le,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){$.bindFramebuffer(P.FRAMEBUFFER,Ue);try{const ze=C.texture,$e=ze.format,Ge=ze.type;if($e!==Kn&&Ce.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===Ea&&(z.has("EXT_color_buffer_half_float")||Y.isWebGL2&&z.has("EXT_color_buffer_float"));if(Ge!==rs&&Ce.convert(Ge)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Ki&&(Y.isWebGL2||z.has("OES_texture_float")||z.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-re&&se>=0&&se<=C.height-ie&&P.readPixels(K,se,re,ie,Ce.convert($e),Ce.convert(Ge),Le)}finally{const ze=T!==null?F.get(T).__webglFramebuffer:null;$.bindFramebuffer(P.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(C,K,se=0){const re=Math.pow(2,-se),ie=Math.floor(K.image.width*re),Le=Math.floor(K.image.height*re);x.setTexture2D(K,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,C.x,C.y,ie,Le),$.unbindTexture()},this.copyTextureToTexture=function(C,K,se,re=0){const ie=K.image.width,Le=K.image.height,Pe=Ce.convert(se.format),Ue=Ce.convert(se.type);x.setTexture2D(se,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,se.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,C.x,C.y,ie,Le,Pe,Ue,K.image.data):K.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Pe,K.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,re,C.x,C.y,Pe,Ue,K.image),re===0&&se.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(C,K,se,re,ie=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,ze=Ce.convert(re.format),$e=Ce.convert(re.type);let Ge;if(re.isData3DTexture)x.setTexture3D(re,0),Ge=P.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)x.setTexture2DArray(re,0),Ge=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,re.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,re.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),wt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Bt=P.getParameter(P.UNPACK_SKIP_ROWS),vi=P.getParameter(P.UNPACK_SKIP_IMAGES),ft=se.isCompressedTexture?se.mipmaps[ie]:se.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?P.texSubImage3D(Ge,ie,K.x,K.y,K.z,Le,Pe,Ue,ze,$e,ft.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ge,ie,K.x,K.y,K.z,Le,Pe,Ue,ze,ft.data)):P.texSubImage3D(Ge,ie,K.x,K.y,K.z,Le,Pe,Ue,ze,$e,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vi),ie===0&&re.generateMipmaps&&P.generateMipmap(Ge),$.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?x.setTextureCube(C,0):C.isData3DTexture?x.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?x.setTexture2DArray(C,0):x.setTexture2D(C,0),$.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,$.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ef?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===du?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?qs:V0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qs?Ut:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class CT extends rf{}CT.prototype.isWebGL1Renderer=!0;class Fa{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=i}clone(){return new Fa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dv extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class sh extends Nt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Po=new Ke,_m=new Ke,_c=[],bm=new co,PT=new Ke,Dr=new tt,Ur=new ms;class on extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,PT)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new co),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Po),bm.copy(e.boundingBox).applyMatrix4(Po),this.boundingBox.union(bm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Po),Ur.copy(e.boundingSphere).applyMatrix4(Po),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(i),e.ray.intersectsSphere(Ur)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Po),_m.multiplyMatrices(i,Po),Dr.matrixWorld=_m,Dr.raycast(e,_c);for(let r=0,a=_c.length;r<a;r++){const c=_c[r];c.instanceId=o,c.object=this,t.push(c)}_c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fu extends lo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sm=new I,Mm=new I,wm=new Ke,hd=new nf,bc=new ms;class hv extends Ot{constructor(e=new gt,t=new fu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Sm.fromBufferAttribute(t,s-1),Mm.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Sm.distanceTo(Mm);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(s),bc.radius+=o,e.ray.intersectsSphere(bc)===!1)return;wm.copy(s).invert(),hd.copy(e.ray).applyMatrix4(wm);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,u=new I,d=new I,f=new I,m=this.isLineSegments?2:1,v=i.index,p=i.attributes.position;if(v!==null){const h=Math.max(0,r.start),_=Math.min(v.count,r.start+r.count);for(let g=h,b=_-1;g<b;g+=m){const R=v.getX(g),E=v.getX(g+1);if(l.fromBufferAttribute(p,R),u.fromBufferAttribute(p,E),hd.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(f);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,r.start),_=Math.min(p.count,r.start+r.count);for(let g=h,b=_-1;g<b;g+=m){if(l.fromBufferAttribute(p,g),u.fromBufferAttribute(p,g+1),hd.distanceSqToSegment(l,u,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const Em=new I,Tm=new I;class fv extends hv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)Em.fromBufferAttribute(t,s),Tm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Em.distanceTo(Tm);e.setAttribute("lineDistance",new Qe(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Am=new Ke,oh=new nf,Sc=new ms,Mc=new I;class mv extends Ot{constructor(e=new gt,t=new pv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(s),Sc.radius+=o,e.ray.intersectsSphere(Sc)===!1)return;Am.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Am);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){const f=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let v=f,y=m;v<y;v++){const p=l.getX(v);Mc.fromBufferAttribute(d,p),Rm(Mc,p,c,s,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let v=f,y=m;v<y;v++)Mc.fromBufferAttribute(d,v),Rm(Mc,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Rm(n,e,t,i,s,o,r){const a=oh.distanceSqToPoint(n);if(a<t){const c=new I;oh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;o.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:r})}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),o=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),o+=i.distanceTo(s),t.push(o),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const o=i.length;let r;t?r=t:r=e*i[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===r)return s/(o-1);const u=i[s],f=i[s+1]-u,m=(r-u)/f;return(s+m)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=t||(r.isVector2?new pe:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],o=[],r=[],a=new I,c=new Ke;for(let m=0;m<=e;m++){const v=m/e;s[m]=this.getTangentAt(v,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let m=1;m<=e;m++){if(o[m]=o[m-1].clone(),r[m]=r[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Yt(s[m-1].dot(s[m]),-1,1));o[m].applyMatrix4(c.makeRotationAxis(a,v))}r[m].crossVectors(s[m],o[m])}if(t===!0){let m=Math.acos(Yt(o[0].dot(o[e]),-1,1));m/=e,s[0].dot(a.crossVectors(o[0],o[e]))>0&&(m=-m);for(let v=1;v<=e;v++)o[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),r[v].crossVectors(s[v],o[v])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class af extends gi{constructor(e=0,t=0,i=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const i=t||new pe,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+e*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*d+this.aX,l=f*d+m*u+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class IT extends af{constructor(e,t,i,s,o,r){super(e,t,i,i,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function cf(){let n=0,e=0,t=0,i=0;function s(o,r,a,c){n=o,e=a,t=-3*o+3*r-2*a-c,i=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,u,d){let f=(r-o)/l-(a-o)/(l+u)+(a-r)/u,m=(a-r)/u-(c-r)/(u+d)+(c-a)/d;f*=u,m*=u,s(r,a,f,m)},calc:function(o){const r=o*o,a=r*o;return n+e*o+t*r+i*a}}}const wc=new I,fd=new cf,pd=new cf,md=new cf;class NT extends gi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,o=s.length,r=(o-(this.closed?0:1))*e;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%o]:(wc.subVectors(s[0],s[1]).add(s[0]),l=wc);const d=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(wc.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=wc),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);y<1e-4&&(y=1),v<1e-4&&(v=y),p<1e-4&&(p=y),fd.initNonuniformCatmullRom(l.x,d.x,f.x,u.x,v,y,p),pd.initNonuniformCatmullRom(l.y,d.y,f.y,u.y,v,y,p),md.initNonuniformCatmullRom(l.z,d.z,f.z,u.z,v,y,p)}else this.curveType==="catmullrom"&&(fd.initCatmullRom(l.x,d.x,f.x,u.x,this.tension),pd.initCatmullRom(l.y,d.y,f.y,u.y,this.tension),md.initCatmullRom(l.z,d.z,f.z,u.z,this.tension));return i.set(fd.calc(c),pd.calc(c),md.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lm(n,e,t,i,s){const o=(i-e)*.5,r=(s-t)*.5,a=n*n,c=n*a;return(2*t-2*i+o+r)*c+(-3*t+3*i-2*o-r)*a+o*n+t}function DT(n,e){const t=1-n;return t*t*e}function UT(n,e){return 2*(1-n)*n*e}function OT(n,e){return n*n*e}function ra(n,e,t,i){return DT(n,e)+UT(n,t)+OT(n,i)}function kT(n,e){const t=1-n;return t*t*t*e}function FT(n,e){const t=1-n;return 3*t*t*n*e}function zT(n,e){return 3*(1-n)*n*n*e}function BT(n,e){return n*n*n*e}function aa(n,e,t,i,s){return kT(n,e)+FT(n,t)+zT(n,i)+BT(n,s)}class gv extends gi{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(aa(e,s.x,o.x,r.x,a.x),aa(e,s.y,o.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class HT extends gi{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return i.set(aa(e,s.x,o.x,r.x,a.x),aa(e,s.y,o.y,r.y,a.y),aa(e,s.z,o.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vv extends gi{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GT extends gi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yv extends gi{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(ra(e,s.x,o.x,r.x),ra(e,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VT extends gi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,o=this.v1,r=this.v2;return i.set(ra(e,s.x,o.x,r.x),ra(e,s.y,o.y,r.y),ra(e,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xv extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const i=t,s=this.points,o=(s.length-1)*e,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(Lm(a,c.x,l.x,u.x,d.x),Lm(a,c.y,l.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var rh=Object.freeze({__proto__:null,ArcCurve:IT,CatmullRomCurve3:NT,CubicBezierCurve:gv,CubicBezierCurve3:HT,EllipseCurve:af,LineCurve:vv,LineCurve3:GT,QuadraticBezierCurve:yv,QuadraticBezierCurve3:VT,SplineCurve:xv});class WT extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=i){const r=s[o]-i,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new rh[s.type]().fromJSON(s))}return this}}class Jo extends WT{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new vv(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const o=new yv(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,o,r){const a=new gv(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new xv(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,s,o,r),this}absarc(e,t,i,s,o,r){return this.absellipse(e,t,i,i,s,o,r),this}ellipse(e,t,i,s,o,r,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,i,s,o,r,a,c),this}absellipse(e,t,i,s,o,r,a,c){const l=new af(e,t,i,s,o,r,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pu extends gt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const o=[],r=[],a=[],c=[],l=new I,u=new pe;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=i+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),r.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(r[f]/e+1)/2,u.y=(r[f+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Hn extends gt{constructor(e=1,t=1,i=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const u=[],d=[],f=[],m=[];let v=0;const y=[],p=i/2;let h=0;_(),r===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(m,2));function _(){const b=new I,R=new I;let E=0;const T=(t-e)/i;for(let k=0;k<=o;k++){const M=[],w=k/o,V=w*(t-e)+e;for(let W=0;W<=s;W++){const oe=W/s,O=oe*c+a,q=Math.sin(O),j=Math.cos(O);R.x=V*q,R.y=-w*i+p,R.z=V*j,d.push(R.x,R.y,R.z),b.set(q,T,j).normalize(),f.push(b.x,b.y,b.z),m.push(oe,1-w),M.push(v++)}y.push(M)}for(let k=0;k<s;k++)for(let M=0;M<o;M++){const w=y[M][k],V=y[M+1][k],W=y[M+1][k+1],oe=y[M][k+1];u.push(w,V,oe),u.push(V,W,oe),E+=6}l.addGroup(h,E,0),h+=E}function g(b){const R=v,E=new pe,T=new I;let k=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),v++;const V=v;for(let W=0;W<=s;W++){const O=W/s*c+a,q=Math.cos(O),j=Math.sin(O);T.x=M*j,T.y=p*w,T.z=M*q,d.push(T.x,T.y,T.z),f.push(0,w,0),E.x=q*.5+.5,E.y=j*.5*w+.5,m.push(E.x,E.y),v++}for(let W=0;W<s;W++){const oe=R+W,O=V+W;b===!0?u.push(O,O+1,oe):u.push(O+1,O,oe),k+=3}l.addGroup(h,k,b===!0?1:2),h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fi extends Hn{constructor(e=1,t=1,i=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,i,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Fi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lf extends gt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],r=[];a(s),l(i),u(),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(o.slice(),3)),this.setAttribute("uv",new Qe(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const g=new I,b=new I,R=new I;for(let E=0;E<t.length;E+=3)m(t[E+0],g),m(t[E+1],b),m(t[E+2],R),c(g,b,R,_)}function c(_,g,b,R){const E=R+1,T=[];for(let k=0;k<=E;k++){T[k]=[];const M=_.clone().lerp(b,k/E),w=g.clone().lerp(b,k/E),V=E-k;for(let W=0;W<=V;W++)W===0&&k===E?T[k][W]=M:T[k][W]=M.clone().lerp(w,W/V)}for(let k=0;k<E;k++)for(let M=0;M<2*(E-k)-1;M++){const w=Math.floor(M/2);M%2===0?(f(T[k][w+1]),f(T[k+1][w]),f(T[k][w])):(f(T[k][w+1]),f(T[k+1][w+1]),f(T[k+1][w]))}}function l(_){const g=new I;for(let b=0;b<o.length;b+=3)g.x=o[b+0],g.y=o[b+1],g.z=o[b+2],g.normalize().multiplyScalar(_),o[b+0]=g.x,o[b+1]=g.y,o[b+2]=g.z}function u(){const _=new I;for(let g=0;g<o.length;g+=3){_.x=o[g+0],_.y=o[g+1],_.z=o[g+2];const b=p(_)/2/Math.PI+.5,R=h(_)/Math.PI+.5;r.push(b,1-R)}v(),d()}function d(){for(let _=0;_<r.length;_+=6){const g=r[_+0],b=r[_+2],R=r[_+4],E=Math.max(g,b,R),T=Math.min(g,b,R);E>.9&&T<.1&&(g<.2&&(r[_+0]+=1),b<.2&&(r[_+2]+=1),R<.2&&(r[_+4]+=1))}}function f(_){o.push(_.x,_.y,_.z)}function m(_,g){const b=_*3;g.x=e[b+0],g.y=e[b+1],g.z=e[b+2]}function v(){const _=new I,g=new I,b=new I,R=new I,E=new pe,T=new pe,k=new pe;for(let M=0,w=0;M<o.length;M+=9,w+=6){_.set(o[M+0],o[M+1],o[M+2]),g.set(o[M+3],o[M+4],o[M+5]),b.set(o[M+6],o[M+7],o[M+8]),E.set(r[w+0],r[w+1]),T.set(r[w+2],r[w+3]),k.set(r[w+4],r[w+5]),R.copy(_).add(g).add(b).divideScalar(3);const V=p(R);y(E,w+0,_,V),y(T,w+2,g,V),y(k,w+4,b,V)}}function y(_,g,b,R){R<0&&_.x===1&&(r[g]=_.x-1),b.x===0&&b.z===0&&(r[g]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.vertices,e.indices,e.radius,e.details)}}const Ec=new I,Tc=new I,gd=new I,Ac=new kn;class _v extends gt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),o=Math.cos(Zo*t),r=e.getIndex(),a=e.getAttribute("position"),c=r?r.count:a.count,l=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let v=0;v<c;v+=3){r?(l[0]=r.getX(v),l[1]=r.getX(v+1),l[2]=r.getX(v+2)):(l[0]=v,l[1]=v+1,l[2]=v+2);const{a:y,b:p,c:h}=Ac;if(y.fromBufferAttribute(a,l[0]),p.fromBufferAttribute(a,l[1]),h.fromBufferAttribute(a,l[2]),Ac.getNormal(gd),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const g=(_+1)%3,b=d[_],R=d[g],E=Ac[u[_]],T=Ac[u[g]],k=`${b}_${R}`,M=`${R}_${b}`;M in f&&f[M]?(gd.dot(f[M].normal)<=o&&(m.push(E.x,E.y,E.z),m.push(T.x,T.y,T.z)),f[M]=null):k in f||(f[k]={index0:l[_],index1:l[g],normal:gd.clone()})}}for(const v in f)if(f[v]){const{index0:y,index1:p}=f[v];Ec.fromBufferAttribute(a,y),Tc.fromBufferAttribute(a,p),m.push(Ec.x,Ec.y,Ec.z),m.push(Tc.x,Tc.y,Tc.z)}this.setAttribute("position",new Qe(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xs extends Jo{constructor(e){super(e),this.uuid=ao(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Jo().fromJSON(s))}return this}}const qT={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let o=bv(n,0,s,t,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,u,d,f,m;if(i&&(o=ZT(n,e,o,t)),n.length>80*t){a=l=n[0],c=u=n[1];for(let v=t;v<s;v+=t)d=n[v],f=n[v+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);m=Math.max(l-a,u-c),m=m!==0?32767/m:0}return Aa(o,r,t,a,c,m,0),r}};function bv(n,e,t,i,s){let o,r;if(s===aA(n,e,t,i)>0)for(o=e;o<t;o+=i)r=Cm(o,n[o],n[o+1],r);else for(o=t-i;o>=e;o-=i)r=Cm(o,n[o],n[o+1],r);return r&&mu(r,r.next)&&(La(r),r=r.next),r}function eo(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(mu(t,t.next)||pt(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Aa(n,e,t,i,s,o,r){if(!n)return;!r&&o&&tA(n,i,s,o);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,o?$T(n,i,s,o):XT(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),La(n),n=l.next,a=l.next;continue}if(n=l,n===a){r?r===1?(n=jT(eo(n),e,t),Aa(n,e,t,i,s,o,2)):r===2&&YT(n,e,t,i,s,o):Aa(eo(n),e,t,i,s,o,1);break}}}function XT(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,o=t.x,r=i.x,a=e.y,c=t.y,l=i.y,u=s<o?s<r?s:r:o<r?o:r,d=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,m=a>c?a>l?a:l:c>l?c:l;let v=i.next;for(;v!==e;){if(v.x>=u&&v.x<=f&&v.y>=d&&v.y<=m&&Go(s,a,o,c,r,l,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function $T(n,e,t,i){const s=n.prev,o=n,r=n.next;if(pt(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,u=s.y,d=o.y,f=r.y,m=a<c?a<l?a:l:c<l?c:l,v=u<d?u<f?u:f:d<f?d:f,y=a>c?a>l?a:l:c>l?c:l,p=u>d?u>f?u:f:d>f?d:f,h=ah(m,v,e,t,i),_=ah(y,p,e,t,i);let g=n.prevZ,b=n.nextZ;for(;g&&g.z>=h&&b&&b.z<=_;){if(g.x>=m&&g.x<=y&&g.y>=v&&g.y<=p&&g!==s&&g!==r&&Go(a,u,c,d,l,f,g.x,g.y)&&pt(g.prev,g,g.next)>=0||(g=g.prevZ,b.x>=m&&b.x<=y&&b.y>=v&&b.y<=p&&b!==s&&b!==r&&Go(a,u,c,d,l,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;g&&g.z>=h;){if(g.x>=m&&g.x<=y&&g.y>=v&&g.y<=p&&g!==s&&g!==r&&Go(a,u,c,d,l,f,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=y&&b.y>=v&&b.y<=p&&b!==s&&b!==r&&Go(a,u,c,d,l,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function jT(n,e,t){let i=n;do{const s=i.prev,o=i.next.next;!mu(s,o)&&Sv(s,i,i.next,o)&&Ra(s,o)&&Ra(o,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(o.i/t|0),La(i),La(i.next),i=n=o),i=i.next}while(i!==n);return eo(i)}function YT(n,e,t,i,s,o){let r=n;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&sA(r,a)){let c=Mv(r,a);r=eo(r,r.next),c=eo(c,c.next),Aa(r,e,t,i,s,o,0),Aa(c,e,t,i,s,o,0);return}a=a.next}r=r.next}while(r!==n)}function ZT(n,e,t,i){const s=[];let o,r,a,c,l;for(o=0,r=e.length;o<r;o++)a=e[o]*i,c=o<r-1?e[o+1]*i:n.length,l=bv(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(iA(l));for(s.sort(KT),o=0;o<s.length;o++)t=JT(s[o],t);return t}function KT(n,e){return n.x-e.x}function JT(n,e){const t=QT(n,e);if(!t)return e;const i=Mv(t,n);return eo(i,i.next),eo(t,t.next)}function QT(n,e){let t=e,i=-1/0,s;const o=n.x,r=n.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=o&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===o))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,d;t=s;do o>=t.x&&t.x>=c&&o!==t.x&&Go(r<l?o:i,r,c,l,r<l?i:o,r,t.x,t.y)&&(d=Math.abs(r-t.y)/(o-t.x),Ra(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&eA(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function eA(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function tA(n,e,t,i){let s=n;do s.z===0&&(s.z=ah(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,nA(s)}function nA(n){let e,t,i,s,o,r,a,c,l=1;do{for(t=n,n=null,o=null,r=0;t;){for(r++,i=t,a=0,e=0;e<l&&(a++,i=i.nextZ,!!i);e++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,c--),o?o.nextZ=s:n=s,s.prevZ=o,o=s;t=i}o.nextZ=null,l*=2}while(r>1);return n}function ah(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function iA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Go(n,e,t,i,s,o,r,a){return(s-r)*(e-a)>=(n-r)*(o-a)&&(n-r)*(i-a)>=(t-r)*(e-a)&&(t-r)*(o-a)>=(s-r)*(i-a)}function sA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!oA(n,e)&&(Ra(n,e)&&Ra(e,n)&&rA(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||mu(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function mu(n,e){return n.x===e.x&&n.y===e.y}function Sv(n,e,t,i){const s=Lc(pt(n,e,t)),o=Lc(pt(n,e,i)),r=Lc(pt(t,i,n)),a=Lc(pt(t,i,e));return!!(s!==o&&r!==a||s===0&&Rc(n,t,e)||o===0&&Rc(n,i,e)||r===0&&Rc(t,n,i)||a===0&&Rc(t,e,i))}function Rc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lc(n){return n>0?1:n<0?-1:0}function oA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sv(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ra(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function rA(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,o=(n.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&s<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Mv(n,e){const t=new ch(n.i,n.x,n.y),i=new ch(e.i,e.x,e.y),s=n.next,o=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function Cm(n,e,t,i){const s=new ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function La(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ch(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function aA(n,e,t,i){let s=0;for(let o=e,r=t-i;o<t;o+=i)s+=(n[r]-n[o])*(n[o+1]+n[r+1]),r=o;return s}class pi{static area(e){const t=e.length;let i=0;for(let s=t-1,o=0;o<t;s=o++)i+=e[s].x*e[o].y-e[o].x*e[s].y;return i*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],o=[];Pm(e),Im(i,e);let r=e.length;t.forEach(Pm);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Im(i,t[c]);const a=qT.triangulate(i,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Pm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Im(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class uf extends gt{constructor(e=new Xs([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];r(l)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(o,2)),this.computeVertexNormals();function r(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:cA;let g,b=!1,R,E,T,k;h&&(g=h.getSpacedPoints(u),b=!0,f=!1,R=h.computeFrenetFrames(u,!1),E=new I,T=new I,k=new I),f||(p=0,m=0,v=0,y=0);const M=a.extractPoints(l);let w=M.shape;const V=M.holes;if(!pi.isClockWise(w)){w=w.reverse();for(let P=0,ne=V.length;P<ne;P++){const z=V[P];pi.isClockWise(z)&&(V[P]=z.reverse())}}const oe=pi.triangulateShape(w,V),O=w;for(let P=0,ne=V.length;P<ne;P++){const z=V[P];w=w.concat(z)}function q(P,ne,z){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ne,z)}const j=w.length,Z=oe.length;function B(P,ne,z){let Y,$,fe;const F=P.x-ne.x,x=P.y-ne.y,S=z.x-P.x,G=z.y-P.y,me=F*F+x*x,ge=F*G-x*S;if(Math.abs(ge)>Number.EPSILON){const le=Math.sqrt(me),Ae=Math.sqrt(S*S+G*G),xe=ne.x-x/le,Re=ne.y+F/le,Ie=z.x-G/Ae,ke=z.y+S/Ae,ve=((Ie-xe)*G-(ke-Re)*S)/(F*G-x*S);Y=xe+F*ve-P.x,$=Re+x*ve-P.y;const Je=Y*Y+$*$;if(Je<=2)return new pe(Y,$);fe=Math.sqrt(Je/2)}else{let le=!1;F>Number.EPSILON?S>Number.EPSILON&&(le=!0):F<-Number.EPSILON?S<-Number.EPSILON&&(le=!0):Math.sign(x)===Math.sign(G)&&(le=!0),le?(Y=-x,$=F,fe=Math.sqrt(me)):(Y=F,$=x,fe=Math.sqrt(me/2))}return new pe(Y/fe,$/fe)}const J=[];for(let P=0,ne=O.length,z=ne-1,Y=P+1;P<ne;P++,z++,Y++)z===ne&&(z=0),Y===ne&&(Y=0),J[P]=B(O[P],O[z],O[Y]);const ae=[];let ue,ye=J.concat();for(let P=0,ne=V.length;P<ne;P++){const z=V[P];ue=[];for(let Y=0,$=z.length,fe=$-1,F=Y+1;Y<$;Y++,fe++,F++)fe===$&&(fe=0),F===$&&(F=0),ue[Y]=B(z[Y],z[fe],z[F]);ae.push(ue),ye=ye.concat(ue)}for(let P=0;P<p;P++){const ne=P/p,z=m*Math.cos(ne*Math.PI/2),Y=v*Math.sin(ne*Math.PI/2)+y;for(let $=0,fe=O.length;$<fe;$++){const F=q(O[$],J[$],Y);A(F.x,F.y,-z)}for(let $=0,fe=V.length;$<fe;$++){const F=V[$];ue=ae[$];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],ue[x],Y);A(G.x,G.y,-z)}}}const ee=v+y;for(let P=0;P<j;P++){const ne=f?q(w[P],ye[P],ee):w[P];b?(T.copy(R.normals[0]).multiplyScalar(ne.x),E.copy(R.binormals[0]).multiplyScalar(ne.y),k.copy(g[0]).add(T).add(E),A(k.x,k.y,k.z)):A(ne.x,ne.y,0)}for(let P=1;P<=u;P++)for(let ne=0;ne<j;ne++){const z=f?q(w[ne],ye[ne],ee):w[ne];b?(T.copy(R.normals[P]).multiplyScalar(z.x),E.copy(R.binormals[P]).multiplyScalar(z.y),k.copy(g[P]).add(T).add(E),A(k.x,k.y,k.z)):A(z.x,z.y,d/u*P)}for(let P=p-1;P>=0;P--){const ne=P/p,z=m*Math.cos(ne*Math.PI/2),Y=v*Math.sin(ne*Math.PI/2)+y;for(let $=0,fe=O.length;$<fe;$++){const F=q(O[$],J[$],Y);A(F.x,F.y,d+z)}for(let $=0,fe=V.length;$<fe;$++){const F=V[$];ue=ae[$];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],ue[x],Y);b?A(G.x,G.y+g[u-1].y,g[u-1].x+z):A(G.x,G.y,d+z)}}}U(),N();function U(){const P=s.length/3;if(f){let ne=0,z=j*ne;for(let Y=0;Y<Z;Y++){const $=oe[Y];Q($[2]+z,$[1]+z,$[0]+z)}ne=u+p*2,z=j*ne;for(let Y=0;Y<Z;Y++){const $=oe[Y];Q($[0]+z,$[1]+z,$[2]+z)}}else{for(let ne=0;ne<Z;ne++){const z=oe[ne];Q(z[2],z[1],z[0])}for(let ne=0;ne<Z;ne++){const z=oe[ne];Q(z[0]+j*u,z[1]+j*u,z[2]+j*u)}}i.addGroup(P,s.length/3-P,0)}function N(){const P=s.length/3;let ne=0;L(O,ne),ne+=O.length;for(let z=0,Y=V.length;z<Y;z++){const $=V[z];L($,ne),ne+=$.length}i.addGroup(P,s.length/3-P,1)}function L(P,ne){let z=P.length;for(;--z>=0;){const Y=z;let $=z-1;$<0&&($=P.length-1);for(let fe=0,F=u+p*2;fe<F;fe++){const x=j*fe,S=j*(fe+1),G=ne+Y+x,me=ne+$+x,ge=ne+$+S,le=ne+Y+S;ce(G,me,ge,le)}}}function A(P,ne,z){c.push(P),c.push(ne),c.push(z)}function Q(P,ne,z){X(P),X(ne),X(z);const Y=s.length/3,$=_.generateTopUV(i,s,Y-3,Y-2,Y-1);de($[0]),de($[1]),de($[2])}function ce(P,ne,z,Y){X(P),X(ne),X(Y),X(ne),X(z),X(Y);const $=s.length/3,fe=_.generateSideWallUV(i,s,$-6,$-3,$-2,$-1);de(fe[0]),de(fe[1]),de(fe[3]),de(fe[1]),de(fe[2]),de(fe[3])}function X(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function de(P){o.push(P.x),o.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lA(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,r=e.shapes.length;o<r;o++){const a=t[e.shapes[o]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new rh[s.type]().fromJSON(s)),new uf(i,e.options)}}const cA={generateTopUV:function(n,e,t,i,s){const o=e[t*3],r=e[t*3+1],a=e[i*3],c=e[i*3+1],l=e[s*3],u=e[s*3+1];return[new pe(o,r),new pe(a,c),new pe(l,u)]},generateSideWallUV:function(n,e,t,i,s,o){const r=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],m=e[s*3+1],v=e[s*3+2],y=e[o*3],p=e[o*3+1],h=e[o*3+2];return Math.abs(a-u)<Math.abs(r-l)?[new pe(r,1-c),new pe(l,1-d),new pe(f,1-v),new pe(y,1-h)]:[new pe(a,1-c),new pe(u,1-d),new pe(m,1-v),new pe(p,1-h)]}};function lA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const o=n[i];t.shapes.push(o.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class za extends lf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new za(e.radius,e.detail)}}class df extends gt{constructor(e=new Xs([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],o=[],r=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(r,2));function l(u){const d=s.length/3,f=u.extractPoints(t);let m=f.shape;const v=f.holes;pi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=v.length;p<h;p++){const _=v[p];pi.isClockWise(_)===!0&&(v[p]=_.reverse())}const y=pi.triangulateShape(m,v);for(let p=0,h=v.length;p<h;p++){const _=v[p];m=m.concat(_)}for(let p=0,h=m.length;p<h;p++){const _=m[p];s.push(_.x,_.y,0),o.push(0,0,1),r.push(_.x,_.y)}for(let p=0,h=y.length;p<h;p++){const _=y[p],g=_[0]+d,b=_[1]+d,R=_[2]+d;i.push(g,b,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return uA(t,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const r=t[e.shapes[s]];i.push(r)}return new df(i,e.curveSegments)}}function uA(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Ba extends gt{constructor(e=1,t=32,i=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(r+a,Math.PI);let l=0;const u=[],d=new I,f=new I,m=[],v=[],y=[],p=[];for(let h=0;h<=i;h++){const _=[],g=h/i;let b=0;h===0&&r===0?b=.5/t:h===i&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(s+E*o)*Math.sin(r+g*a),d.y=e*Math.cos(r+g*a),d.z=e*Math.sin(s+E*o)*Math.sin(r+g*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(E+b,1-g),_.push(l++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const g=u[h][_+1],b=u[h][_],R=u[h+1][_],E=u[h+1][_+1];(h!==0||r>0)&&m.push(g,b,E),(h!==i-1||c<Math.PI)&&m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new Qe(v,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gu extends gt{constructor(e=1,t=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],a=[],c=[],l=[],u=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let v=0;v<=s;v++){const y=v/s*o,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),c.push(f.x,f.y,f.z),l.push(v/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=s;v++){const y=(s+1)*m+v-1,p=(s+1)*(m-1)+v-1,h=(s+1)*(m-1)+v,_=(s+1)*m+v;r.push(y,p,_),r.push(p,h,_)}this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends lo{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=W0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Nm={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class dA{constructor(e,t,i){const s=this;let o=!1,r=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],v=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const hA=new dA;class hf{constructor(e){this.manager=e!==void 0?e:hA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class fA extends Error{constructor(e,t){super(e),this.response=t}}class pA extends hf{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Nm.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Mi[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,v=m!==0;let y=0;const p=new ReadableStream({start(h){_();function _(){d.read().then(({done:g,value:b})=>{if(g)h.close();else{y+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:v,loaded:y,total:m});for(let E=0,T=u.length;E<T;E++){const k=u[E];k.onProgress&&k.onProgress(R)}h.enqueue(b),_()}})}}});return new Response(p)}else throw new fA(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(v=>m.decode(v))}}}).then(l=>{Nm.add(e,l);const u=Mi[e];delete Mi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mi[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ff extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class mA extends ff{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const vd=new Ke,Dm=new I,Um=new I;class gA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Um.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Um),t.updateMatrixWorld(),vd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vA extends gA{constructor(){super(new sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lh extends ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new vA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yA extends ff{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Om=new pe;class xA{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Om.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Om).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ms{constructor(){this.type="ShapePath",this.color=new Te,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Jo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,o,r){return this.currentPath.bezierCurveTo(e,t,i,s,o,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const _=[];for(let g=0,b=h.length;g<b;g++){const R=h[g],E=new Xs;E.curves=R.curves,_.push(E)}return _}function i(h,_){const g=_.length;let b=!1;for(let R=g-1,E=0;E<g;R=E++){let T=_[R],k=_[E],M=k.x-T.x,w=k.y-T.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(T=_[E],M=-M,k=_[R],w=-w),h.y<T.y||h.y>k.y)continue;if(h.y===T.y){if(h.x===T.x)return!0}else{const V=w*(h.x-T.x)-M*(h.y-T.y);if(V===0)return!0;if(V<0)continue;b=!b}}else{if(h.y!==T.y)continue;if(k.x<=h.x&&h.x<=T.x||T.x<=h.x&&h.x<=k.x)return!0}}return b}const s=pi.isClockWise,o=this.subPaths;if(o.length===0)return[];let r,a,c;const l=[];if(o.length===1)return a=o[0],c=new Xs,c.curves=a.curves,l.push(c),l;let u=!s(o[0].getPoints());u=e?!u:u;const d=[],f=[];let m=[],v=0,y;f[v]=void 0,m[v]=[];for(let h=0,_=o.length;h<_;h++)a=o[h],y=a.getPoints(),r=s(y),r=e?!r:r,r?(!u&&f[v]&&v++,f[v]={s:new Xs,p:y},f[v].s.curves=a.curves,u&&v++,m[v]=[]):m[v].push({h:a,p:y[0]});if(!f[0])return t(o);if(f.length>1){let h=!1,_=0;for(let g=0,b=f.length;g<b;g++)d[g]=[];for(let g=0,b=f.length;g<b;g++){const R=m[g];for(let E=0;E<R.length;E++){const T=R[E];let k=!0;for(let M=0;M<f.length;M++)i(T.p,f[M].p)&&(g!==M&&_++,k?(k=!1,d[M].push(T)):h=!0);k&&d[g].push(T)}}_>0&&h===!1&&(m=d)}let p;for(let h=0,_=f.length;h<_;h++){c=f[h].s,l.push(c),p=m[h];for(let g=0,b=p.length;g<b;g++)c.holes.push(p[g].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kh);const wv="teide-settings",Ev=100,pf=3e3,Tv=1e4,mf=1e7,Av={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:pf,samples:mf}},Ca={low:{segments:600,samples:5e5},standard:{segments:1200,samples:12e5},high:{segments:1200,samples:2e6}},_A={low:1,standard:1.25,high:1.5},bA=1.25,SA=2,MA={...Av.standard},wA={...Ca.standard};function yd(){return{...oo()?wA:MA,language:null,onboardingDone:!1,tutorialDone:!1,invertPitch:!0,controlMode:"touch",gyroSensitivity:gn.sensDefault,musicVolume:Et.musicVolume,musicMuted:!1,sfxVolume:Et.sfxVolume,sfxMuted:!1}}function ht(){try{const n=localStorage.getItem(wv);if(!n)return yd();const e=JSON.parse(n);return EA({...yd(),...e})}catch{return yd()}}function ni(n){try{localStorage.setItem(wv,JSON.stringify(Rv(n)))}catch{}}function Rv(n){return{...n,segments:Math.max(Ev,Math.min(pf,n.segments|0)),samples:Math.max(Tv,Math.min(mf,n.samples|0))}}function EA(n){if(n=Rv(n),!oo())return n;const e=Ca.high;return n.segments>e.segments||n.samples>e.samples?(console.info(`[settings] Mobile clamp: persisted segments=${n.segments} samples=${n.samples} exceed mobile-high (${e.segments}/${e.samples}). Using mobile-standard for this session.`),{...Ca.standard,language:n.language,onboardingDone:n.onboardingDone,tutorialDone:n.tutorialDone,invertPitch:n.invertPitch,controlMode:n.controlMode,gyroSensitivity:n.gyroSensitivity,musicVolume:n.musicVolume,musicMuted:n.musicMuted,sfxVolume:n.sfxVolume,sfxMuted:n.sfxMuted}):n}function TA(){const n=window.devicePixelRatio||1;if(!oo())return Math.min(n,SA);const e=ht();let t=null;for(const[s,o]of Object.entries(Ca))if(o.segments===e.segments&&o.samples===e.samples){t=s;break}const i=t&&_A[t]||bA;return Math.min(n,i)}function AA(){const n=ht(),e=new URLSearchParams(window.location.search),t=parseInt(e.get("segments"),10),i=parseInt(e.get("samples"),10);return Number.isFinite(t)&&t>=Ev&&t<=pf&&(n.segments=t),Number.isFinite(i)&&i>=Tv&&i<=mf&&(n.samples=i),Ee.segments=n.segments,At.sampleCount=n.samples,n}function RA(){const n=oo()?Ca:Av;return Object.entries(n).map(([e,t])=>({name:e,...t}))}function LA(){return!!ht().onboardingDone}function CA(n=!0){const e=ht();e.onboardingDone=!!n,ni(e)}function PA(){return!!ht().tutorialDone}function IA(n=!0){const e=ht();e.tutorialDone=!!n,ni(e)}function NA(){const n=ht().invertPitch;return n===void 0?!0:!!n}function DA(n){const e=ht();e.invertPitch=!!n,ni(e)}function UA(){return ht().controlMode==="gyro"?"gyro":"touch"}function km(n){const e=ht();e.controlMode=n==="gyro"?"gyro":"touch",ni(e)}function gf(){const n=Number(ht().gyroSensitivity);return Number.isFinite(n)?Math.max(gn.sensMin,Math.min(gn.sensMax,n)):gn.sensDefault}function OA(n){const e=ht(),t=Number(n);e.gyroSensitivity=Number.isFinite(t)?Math.max(gn.sensMin,Math.min(gn.sensMax,t)):gn.sensDefault,ni(e)}const vu=(n,e)=>(n=Number(n),Number.isFinite(n)?Math.max(0,Math.min(1,n)):e);function kA(){return vu(ht().musicVolume,Et.musicVolume)}function FA(n){const e=ht();e.musicVolume=vu(n,Et.musicVolume),ni(e)}function Lv(){return!!ht().musicMuted}function Cv(n){const e=ht();e.musicMuted=!!n,ni(e)}function zA(){return vu(ht().sfxVolume,Et.sfxVolume)}function BA(n){const e=ht();e.sfxVolume=vu(n,Et.sfxVolume),ni(e)}function Pv(){return!!ht().sfxMuted}function Iv(n){const e=ht();e.sfxMuted=!!n,ni(e)}const Mt=new dv;Mt.background=new Te(Ze.sky);Mt.fog=new Fa(Ze.sky,Ee.fogStart,Ee.fogEnd);const Vt=new Tn(62,window.innerWidth/window.innerHeight,.5,15e3),hn=new rf({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});hn.setPixelRatio(TA());hn.setSize(window.innerWidth,window.innerHeight);hn.outputColorSpace=Ut;document.body.appendChild(hn.domElement);const Nv=new lh(16774882,1.05);Nv.position.set(80,140,60);Mt.add(Nv);const HA=new mA(14542572,8292974,.55);Mt.add(HA);const uh=new I(0,1,0);window.addEventListener("resize",()=>{Vt.aspect=window.innerWidth/window.innerHeight,Vt.updateProjectionMatrix(),hn.setSize(window.innerWidth,window.innerHeight)});const Dv={"glider-wind":{src:"ambient/wind-glide.mp3",channel:"sfx",mode:"loop",gain:.3,filtered:!0},"ocean-surf-bed":{src:"ambient/ocean-waves.mp3",channel:"sfx",mode:"loop",gain:.55},"forest-bed":{src:"ambient/forest-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},"thermal-lift":{src:"ambient/thermal-lift.mp3",channel:"sfx",mode:"loop",gain:.6},"city-bed":{src:"ambient/city-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},touchdown:{src:"sfx/tyres-touchdown.mp3",channel:"sfx",mode:"oneshot",gain:.13},crash:{src:"sfx/crash.mp3",channel:"sfx",mode:"oneshot",gain:.8},"gear-deploy":{src:"sfx/gear-extend.mp3",channel:"sfx",mode:"oneshot",gain:.16},"spend-points":{src:"sfx/spend-points.mp3",channel:"sfx",mode:"oneshot",gain:.6},"buy-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.7},"spend-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.6,rate:.82},"ring-first":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.18},"ring-recollect":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.08,rate:.92},"one-shot-boost":{src:"sfx/boost.mp3",channel:"sfx",mode:"oneshot",gain:.7},"landing-success":{src:"sfx/success.mp3",channel:"sfx",mode:"oneshot",gain:.3},denied:{src:"sfx/denied.mp3",channel:"sfx",mode:"oneshot",gain:.45},"ui-confirm":{src:"sfx/ui-click.mp3",channel:"sfx",mode:"oneshot",gain:.35},"menu-music":{src:"music/menu-music.mp3",channel:"music",mode:"stream",gain:1}};function GA(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function VA(n){n.vertexShader=`attribute float instanceAlpha;
varying float vInstanceAlpha;
`+n.vertexShader.replace("void main() {",`void main() {
	vInstanceAlpha = instanceAlpha;`),n.fragmentShader=`varying float vInstanceAlpha;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= vInstanceAlpha;`)}function dh(n,e="instanceAlpha"){return n.onBeforeCompile=VA,n.customProgramCacheKey=()=>e,n}function hh(n,e,t=1){const i=new Float32Array(e).fill(t);return n.setAttribute("instanceAlpha",new sh(i,1)),i}const ot=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6500,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of ot)n.activeHeading=n.heading;function Uv(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const WA=.42,qA=.55;function XA(n,e){for(const t of ot){const i=n.x-t.x,s=n.z-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)>t.width*.5-WA||Math.abs(c)>t.length*.5-qA)continue;const l=n.y-t.elevation;if(l<-.5||l>Js.rollingHeight)continue;const u=Uv(e-t.activeHeading);if(!(Math.abs(u)>Js.headingTolerance))return t}return null}function $A(n,e=1){for(const t of ot){const i=n.x-t.x,s=n.z-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)<=t.width*.55+e&&Math.abs(c)<=t.length*.5+e)return t}return null}function jA(n,e,t){for(const i of ot){const s=n.x-i.x,o=n.z-i.z,r=Math.sqrt(s*s+o*o),a=n.y-i.elevation;if(r<e&&a<t&&a>-2)return!0}return!1}const Ov=[],kv=[],YA=dh(new Vn({color:16771240,transparent:!0,depthWrite:!1})),ZA=new Vn({}),KA=new Ba(.15,8,6),Fv=new Te(7227922),JA=new Te(16770976),QA=.45,Ml=.22,e1=new ut({color:14729280,flatShading:!0}),zv=new Hn(.05,.06,Ml,5);zv.translate(0,Ml/2,0);const Fm=new Te,zm=new Ke,t1=new I,n1=new I,i1=new Ct,vf=[],Bm=1,wl=.32,Hm=1.6,Gm=1.2,fh={T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],F:["#####","#....","#....","####.","#....","#....","#...."],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],G:[".###.","#...#","#....","#.###","#...#","#...#",".###."],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],P:["####.","#...#","#...#","####.","#....","#....","#...."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],L:["#....","#....","#....","#....","#....","#....","#####"],A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"]},s1=new Vn({color:15790320,side:Zt});function Bv(n){const e=[],t=[];for(const[o,r,a,c]of n){const l=e.length/3,u=a/2,d=c/2;e.push(o-u,.06,r-d,o+u,.06,r-d,o+u,.06,r+d,o-u,.06,r+d),t.push(l,l+1,l+2,l,l+2,l+3)}const s=new gt;return s.setAttribute("position",new Qe(e,3)),s.setIndex(t),new tt(s,s1)}function o1(n){const t=2.8000000000000003,i=.4*.7,s=[...n.id].filter(o=>fh[o]).length;return{cell:.4,glyphL:t,gap:i,totalL:s*t+Math.max(0,s-1)*i,center:n.length*.3}}function r1(n){const e=[],i=n.width/2-.09-.1;e.push([-i,0,.18,n.length*.98],[i,0,.18,n.length*.98]);const s=6,o=3,r=n.width*.9/s,a=r*.55;for(const c of[-1,1]){const l=c*(n.length/2-o/2-.8);for(let u=0;u<s;u++)e.push([(u-(s-1)/2)*r,l,a,o])}return Bv(e)}function a1(n){const e=[],{cell:t,glyphL:i,gap:s,totalL:o,center:r}=o1(n),a=[...n.id].filter(h=>fh[h]);let c=r-o/2;for(const h of a){const _=fh[h];for(let g=0;g<7;g++)for(let b=0;b<5;b++)_[g][b]==="#"&&e.push([(b-2)*t,c+g*t,t*.85,t*.85]);c+=i+s}const l=3,u=3,d=.18,f=n.length*.8,m=o/2+6,v=Math.max(1,Math.floor((f+u)/(l+u)));let p=-(v*l+(v-1)*u)/2+l/2;for(let h=0;h<v;h++)Math.abs(p-r)>m&&e.push([0,p,d,l]),p+=l+u;return Bv(e)}const Ai={concrete:new ut({color:li.colors.concrete,flatShading:!0}),glass:new ut({color:li.colors.glass,flatShading:!0}),accent:new ut({color:li.colors.accent,flatShading:!0})};function c1(){const n=li.towerHeight,e=n*.66,t=n*.2,i=new lt,s=(a,c,l)=>{const u=new tt(a,c);u.position.y=l,i.add(u)};s(new sn(3,.6,3),Ai.concrete,.3),s(new sn(1.5,e,1.5),Ai.concrete,.6+e/2),s(new sn(2.4,t,2.4),Ai.glass,.6+e+t/2);const o=.6+e+t;s(new sn(2.7,.25,2.7),Ai.concrete,o+.125);const r=new Hn(.05,.05,n*.22,5);for(const a of[-.55,.55]){const c=new tt(r,Ai.accent);c.position.set(a,o+.25+n*.11,0),i.add(c)}return s(new Ba(.32,8,6),Ai.concrete,o+.55),i}function l1(){const n=li.terminal,e=new lt,t=(i,s,o,r,a)=>{const c=new tt(i,s);c.position.set(o,r,a),e.add(c)};return t(new sn(n.depth,n.height,n.length),Ai.concrete,0,n.height/2,0),t(new sn(.2,n.height*.55,n.length*.88),Ai.glass,-3/2,n.height*.5,0),t(new sn(n.depth+.6,.25,n.length+.6),Ai.concrete,0,n.height+.125,0),e}const u1=c1(),d1=l1();function h1(){const n=new lt,e=new ut({color:Ze.runway,flatShading:!0}),t=new Ke;for(let i=0;i<ot.length;i++){const s=ot[i],o=new lt,r=new uo(s.width,s.length);r.rotateX(-Math.PI/2),o.add(new tt(r,e)),o.add(r1(s));const a=new lt,c=s.width*.68,l=c*1.05,u=new Xs;u.moveTo(0,l*.55),u.lineTo(-c/2,-l*.45),u.lineTo(0,-l*.05),u.lineTo(c/2,-l*.45),u.closePath();const d=new df(u);d.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5)),m=new Float32Array(f),v=hh(d,f,wl),y=new on(d,YA,f);y.renderOrder=1;for(let w=0;w<f;w++){const V=w/(f-1)-.5;t.makeTranslation(0,.08,V*s.length*.85),y.setMatrixAt(w,t),m[w]=.5-V,v[w]=wl}y.instanceMatrix.needsUpdate=!0,a.add(y),Ov.push({mesh:y,alpha:v,posT:m,count:f});const h=Math.max(2,Math.floor(s.length/4.5)),_=h*2,g=new Float32Array(_),b=new Float32Array(_*3),R=new on(KA,ZA,_),E=new on(zv,e1,_);let T=0;for(let w=0;w<h;w++){const V=w/(h-1)-.5,W=V*s.length*.97,oe=.5-V;for(const O of[-1,1]){const q=O*s.width*.6;t.makeTranslation(q,Ml,W),R.setMatrixAt(T,t),R.setColorAt(T,Fv),t.makeTranslation(q,0,W),E.setMatrixAt(T,t),g[T]=oe,b[T*3]=q,b[T*3+1]=Ml,b[T*3+2]=W,T++}}R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,a.add(R),a.add(E),kv.push({mesh:R,posT:g,base:b,count:_}),a.add(a1(s)),o.add(a),vf[i]=a;const k=u1.clone();k.scale.setScalar(li.towerScale),k.position.set(li.towerSide,0,li.towerAlong*s.length*.5),o.add(k);const M=d1.clone();M.position.set(li.terminal.side,0,li.terminal.along*s.length*.5),o.add(M),o.position.set(s.x,s.elevation+.04,s.z),o.rotation.y=s.heading,n.add(o)}return n}function f1(n){const e=n%Hm/Hm;for(const i of Ov){const{alpha:s,posT:o,count:r}=i;for(let a=0;a<r;a++){const c=(e-o[a]+1)%1;s[a]=c<.16?Bm-(Bm-wl)*(c/.16):wl}i.mesh.geometry.attributes.instanceAlpha.needsUpdate=!0}const t=n%Gm/Gm;for(const i of kv){const{mesh:s,posT:o,base:r,count:a}=i;for(let c=0;c<a;c++){const l=(t-o[c]+1)%1,u=l<.22?1-l/.22:0;Fm.copy(Fv).lerp(JA,u),s.setColorAt(c,Fm);const d=1+u*QA;zm.compose(t1.set(r[c*3],r[c*3+1],r[c*3+2]),i1,n1.set(d,d,d)),s.setMatrixAt(c,zm)}s.instanceColor.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0}}function p1(n){const e=ot.indexOf(n);return vf[e]??null}function Hv(n){for(let e=0;e<ot.length;e++){const t=ot[e];if(t===n)continue;const i=Math.random()<.5;t.activeHeading=i?Uv(t.heading+Math.PI):t.heading;const s=vf[e];s&&(s.rotation.y=i?Math.PI:0)}}const _t={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let jn=null,Gv=[];async function m1(n="/teide-game/landcover/canaries.png"){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0);const s=i.getImageData(0,0,e.width,e.height).data,o=new Uint8Array(e.width*e.height);for(let r=0,a=0;a<o.length;r+=4,a++)o[a]=s[r];jn={data:o,w:e.width,h:e.height},Gv=y1()}function g1(n,e){const{center:t,metersPerUnit:i}=Ee.heightmap,s=n*i,o=-e*i,r=t.lat+o/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:r,lon:a}}function v1(n,e){const{bbox:t,center:i,metersPerUnit:s}=Ee.heightmap,o=t.lonW+n/(jn.w-1)*(t.lonE-t.lonW),r=t.latN-e/(jn.h-1)*(t.latN-t.latS),a=(o-i.lon)*111320*Math.cos(i.lat*Math.PI/180),c=(r-i.lat)*111320;return{x:a/s,z:-c/s}}function zn(n,e){if(!jn)return _t.WATER;const{lat:t,lon:i}=g1(n,e),{bbox:s}=Ee.heightmap,o=(i-s.lonW)/(s.lonE-s.lonW)*(jn.w-1),r=(s.latN-t)/(s.latN-s.latS)*(jn.h-1);if(o<0||r<0||o>jn.w-1||r>jn.h-1)return _t.WATER;const a=Math.round(o),c=Math.round(r);return jn.data[c*jn.w+a]}function y1(){const{data:n,w:e,h:t}=jn,{minClusterPixels:i}=At.urban,s=new Uint8Array(n.length),o=[],r=[],a=[0,0,0,0];function c(u){const d=u%e,f=u/e|0;let m=0;return d>0&&(a[m++]=u-1),d<e-1&&(a[m++]=u+1),f>0&&(a[m++]=u-e),f<t-1&&(a[m++]=u+e),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==_t.URBAN)continue;const d=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const v=f[m++];d.push(v);const y=c(v);for(let p=0;p<y;p++){const h=a[p];!s[h]&&n[h]===_t.URBAN&&(s[h]=1,f.push(h))}}d.length<i?r.push(...d):o.push(d)}for(const u of r){const d=c(u),f=new Map;for(let y=0;y<d;y++){const p=n[a[y]];p!==_t.URBAN&&p!==_t.WATER&&f.set(p,(f.get(p)||0)+1)}let m=_t.GRASS,v=0;for(const[y,p]of f)p>v&&(m=y,v=p);n[u]=m}const l=o.map(u=>{let d=0,f=0;const m=[];for(const v of u){const y=v%e,p=v/e|0,{x:h,z:_}=v1(y,p);m.push({x:h,z:_}),d+=h,f+=_}return{pixelCount:u.length,centerX:d/u.length,centerZ:f/u.length,pixels:m}});return l.sort((u,d)=>d.pixelCount-u.pixelCount),console.log(`landcover: ${l.length} urban clusters surviving (${r.length} tiny urban pixels reclassified)`),l}function x1(){return Gv}let Un=null;function _1(){return Un}let Ps=null,Zr=0;async function b1(n=Ee.heightmap.url){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0),Un={data:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}function S1(n,e){const{center:t,metersPerUnit:i}=Ee.heightmap,s=n*i,o=-e*i,r=t.lat+o/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:r,lon:a}}function M1(n,e){if(!Un)return 0;const{bbox:t,elevRange:i}=Ee.heightmap,s=(e-t.lonW)/(t.lonE-t.lonW)*(Un.w-1),o=(t.latN-n)/(t.latN-t.latS)*(Un.h-1);if(s<0||o<0||s>Un.w-1||o>Un.h-1)return 0;const r=Math.floor(s),a=Math.floor(o),c=Math.min(r+1,Un.w-1),l=Math.min(a+1,Un.h-1),u=s-r,d=o-a,f=i[1]-i[0],m=(v,y)=>{const p=(y*Un.w+v)*4,h=Un.data[p]<<8|Un.data[p+1];return i[0]+h/65535*f};return(1-u)*(1-d)*m(r,a)+u*(1-d)*m(c,a)+(1-u)*d*m(r,l)+u*d*m(c,l)}function Ln(n,e){const{lat:t,lon:i}=S1(n,e);return M1(t,i)/Ee.heightmap.metersPerUnit*Ee.heightmap.elevationExaggeration}function w1(n,e,t){const i=M0;if(t<Ee.waterLevel+i.waterGuard)return t;const s=i.slopeEps,o=(Ln(n+s,e)-Ln(n-s,e))/(2*s),r=(Ln(n,e+s)-Ln(n,e-s))/(2*s),a=ki.smoothstep(Math.hypot(o,r),i.slopeGateLo,i.slopeGateHi);if(a<=0)return t;const c=i.stepHeight,l=Math.floor(t/c)*c,u=t/c-Math.floor(t/c),d=l+c*u*u*(3-2*u);return t+(d-t)*i.riserSharpness*a}function Mr(n,e){return w1(n,e,Ln(n,e))}function Vv(n,e,t){let i=t,s=0;const o=cl;for(const r of ot){const a=n-r.x,c=e-r.z,l=Math.cos(r.heading),u=Math.sin(r.heading),d=a*l-c*u,f=a*u+c*l,m=Math.max(0,Math.abs(d)-r.width/2),v=Math.max(0,Math.abs(f)-r.length/2),y=Math.max(0,m-o.sideApron),p=Math.max(0,v-o.endApron),h=Math.sqrt(y*y+p*p);if(h<o.fadeWidth){const _=ki.smoothstep(h,0,o.fadeWidth);i=ki.lerp(r.elevation,i,_),s=Math.max(s,1-_)}if(m<o.corridorHalfWidth){const _=r.elevation+Math.max(0,v-o.endApron)*o.climbGradient;i>_&&(i=_)}}return{y:i,onRunway:s}}function Vm(n,e){return Vv(n,e,Mr(n,e)).y}function Rt(n,e){if(!Ps)return Vm(n,e);const t=Ee.size/2,i=Ee.segments,s=Ee.size/i,o=(n+t)/s,r=(e+t)/s;if(o<0||r<0||o>i||r>i)return Vm(n,e);const a=Math.min(i-1,Math.floor(o)),c=Math.min(i-1,Math.floor(r)),l=o-a,u=r-c,d=Ps[c*Zr+a],f=Ps[c*Zr+a+1],m=Ps[(c+1)*Zr+a],v=Ps[(c+1)*Zr+a+1];return(1-l)*(1-u)*d+l*(1-u)*f+(1-l)*u*m+l*u*v}const E1=90,T1=200,ph=[];function A1(){const n=Ee.size,e=Ee.segments,t=n/e,i=e+1;Zr=i,Ps=new Float32Array(i*i);const s=new Float32Array(i*i),o=new Float32Array(i*i*3),r=new Te(Ze.pineCanopy),a=new Te(Ze.laurelCanopy),c=new Te(Ze.shrubBody),l=new Te(Ze.grassGround),u=new Te(Ze.cropGround),d=new Te(Ze.urbanGround),f=new Te(Ze.bareGround),m=new Te(Ze.shore),v=new Te(Ze.snow),y=new Te(Ze.runway),p=new Te(Ze.rock),h=new Te,_=Ee.heightmap.metersPerUnit,g=Ee.heightmap.elevationExaggeration,b=80/_*g,R=2500/_*g,E=3200/_*g,T=At.laurelMaxAltitude*g,k=i*i;for(let oe=0;oe<k;oe++){const O=oe%i,q=oe/i|0,j=-8e3+O*t,Z=-8e3+q*t,B=Vv(j,Z,Mr(j,Z)),J=B.y,ae=B.onRunway;switch(s[oe]=J<Ee.waterLevel?J-Nx.sinkDepth:J,Ps[oe]=s[oe],zn(j,Z)){case _t.TREE:h.copy(J>=T?r:a);break;case _t.SHRUB:h.copy(c);break;case _t.GRASS:h.copy(l);break;case _t.CROP:h.copy(u);break;case _t.URBAN:h.copy(d);break;case _t.BARE:h.copy(f);break;default:h.copy(m);break}if(J>Ee.waterLevel){const ee=M0.slopeEps,U=(Ln(j+ee,Z)-Ln(j-ee,Z))/(2*ee),N=(Ln(j,Z+ee)-Ln(j,Z-ee))/(2*ee),L=ki.smoothstep(Math.hypot(U,N),Pu.slopeLo,Pu.slopeHi);L>0&&h.lerp(p,L*Pu.strength)}if(J>E)h.copy(v);else if(J>R){const ee=(J-R)/(E-R);h.lerp(v,ee)}if(J<Ee.waterLevel+b){const ee=(J-Ee.waterLevel)/b;h.lerp(m,1-Math.max(0,ee))}ae>.001&&h.lerp(y,ae*.35);const ye=.94+GA(j,Z)*.12;o[oe*3]=h.r*ye,o[oe*3+1]=h.g*ye,o[oe*3+2]=h.b*ye}const M=new ut({vertexColors:!0,flatShading:!0}),w=new lt,V=E1,W=Math.ceil(e/V);for(let oe=0;oe<W;oe++){const O=oe*V,q=Math.min(V,e-O);for(let j=0;j<W;j++){const Z=j*V,B=Math.min(V,e-Z),J=new uo(B*t,q*t,B,q);J.rotateX(-Math.PI/2);const ae=J.attributes.position,ue=new Float32Array(ae.count*3);for(let L=0;L<=q;L++)for(let A=0;A<=B;A++){const Q=L*(B+1)+A,ce=(O+L)*i+(Z+A);ae.setY(Q,s[ce]),ue[Q*3]=o[ce*3],ue[Q*3+1]=o[ce*3+1],ue[Q*3+2]=o[ce*3+2]}J.setAttribute("color",new Nt(ue,3)),J.computeBoundingSphere();const ye=new tt(J,M),ee=-8e3+Z*t+B*t/2,U=-8e3+O*t+q*t/2;ye.position.set(ee,0,U),w.add(ye);const N=J.boundingSphere;ph.push({mesh:ye,cx:ee+N.center.x,cy:N.center.y,cz:U+N.center.z,radius:N.radius})}}return w}function R1(n,e){if(!e){for(const r of ph)r.mesh.visible=!0;return}const t=Ee.fogEnd+T1,i=n.position.x,s=n.position.y,o=n.position.z;for(const r of ph){const a=i-r.cx,c=s-r.cy,l=o-r.cz;r.mesh.visible=Math.sqrt(a*a+c*c+l*l)-r.radius<t}}function L1(){const n=new uo(Ee.size*1.6,Ee.size*1.6);n.rotateX(-Math.PI/2);const e=new ut({color:Ze.water,transparent:!0,opacity:.96}),t=new tt(n,e);return t.position.y=Ee.waterLevel,t}const C1={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:6,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:9,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:5,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:9,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:3,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function P1(n){let e=n>>>0;return()=>{e=e+2654435769>>>0;let t=e;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),((t^t>>>15)>>>0)/4294967296}}function I1(){const n=[],e=P1(12648430);for(const t of Lt){const i=C1[t.id];if(i)for(let s=0;s<i.count;s++){const o=e()*Math.PI*2,r=Math.sqrt(e())*i.spread,a=t.x+Math.cos(o)*r,c=t.z+Math.sin(o)*r,l=i.radiusRange[0]+e()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+e()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:a,z:c,radius:l,strength:u})}}return n}const fn=I1(),El=.55,Wv=1.05,N1=.9;let Or,Yc,Zc,mh,Xi,Tl,gh=null;function qv(n){gh&&(gh.visible=!!n)}function D1(){const n=new lt;gh=n;for(let a=fn.length-1;a>=0;a--)Rt(fn[a].x,fn[a].z)<Ee.waterLevel+.5&&fn.splice(a,1);for(const a of fn)a.baseElevation=Rt(a.x,a.z);for(const a of fn){const c=new Vn({color:yn.columnColor,transparent:!0,opacity:yn.columnOpacity*a.strength,side:Zt,depthWrite:!1}),l=new Hn(a.radius*Wv,a.radius*El,yn.columnTop,20,1,!0);l.translate(0,yn.columnTop/2,0);const u=new tt(l,c);u.position.set(a.x,a.baseElevation,a.z),n.add(u)}const e=fn.map(a=>Math.max(10,Math.floor(yn.particleDensity*Math.PI*a.radius*a.radius))),t=e.reduce((a,c)=>a+c,0);Or=new Float32Array(t*3),Yc=new Float32Array(t),Zc=new Float32Array(t),mh=new Uint16Array(t),Xi=new Float32Array(t);const i=new Float32Array(t);let s=0;for(let a=0;a<fn.length;a++){const c=fn[a];for(let l=0;l<e[a];l++){const u=Math.sqrt(Math.random())*N1,d=Math.random()*Math.PI*2;Yc[s]=Math.cos(d)*u,Zc[s]=Math.sin(d)*u,mh[s]=a,Xi[s]=Math.random(),i[s]=yn.particleSize*(.7+.5*c.strength);const f=c.radius*El;Or[s*3+0]=c.x+Yc[s]*f,Or[s*3+1]=c.baseElevation,Or[s*3+2]=c.z+Zc[s]*f,s++}}const o=new gt;o.setAttribute("position",new Nt(Or,3)),o.setAttribute("size",new Nt(i,1));const r=new ds({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Te(yn.particleColor)},uOpacity:{value:yn.particleOpacity}},vertexShader:`
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
    `});return Tl=new mv(o,r),n.add(Tl),n}function U1(n){if(!Tl)return;const e=Tl.geometry.attributes.position,t=e.array,i=yn.columnTop,s=yn.riseSpeed;for(let o=0;o<Xi.length;o++){const r=fn[mh[o]];Xi[o]+=s*r.strength/i*n,Xi[o]>=1&&(Xi[o]-=1);const a=r.radius*(El+(Wv-El)*Xi[o]);t[o*3+0]=r.x+Yc[o]*a,t[o*3+1]=r.baseElevation+Xi[o]*i,t[o*3+2]=r.z+Zc[o]*a}e.needsUpdate=!0}function Xv(n,e,t){let i=0;for(const s of fn){const o=n-s.x,r=t-s.z,a=Math.sqrt(o*o+r*r);if(a>=s.radius)continue;const c=e-(s.baseElevation??0);if(c<0)continue;const l=1-a/s.radius,u=Math.max(0,1-c/yn.maxAltitude);i+=yn.liftAtCenter*s.strength*l*u}return i}const $v="/teide-game/audio/",Wm=window.AudioContext||window.webkitAudioContext;let et=null,kr=null,Al=null,Rl=null,yf=!1;const Ll={},xf={},Cl={},Os={};let Pl=Et.musicVolume,_f=!1,Il=Et.sfxVolume,bf=!1,Kc=null,vh=!1,qm=!1;const Is=n=>n<0?0:n>1?1:n,Io=(n,e,t)=>n+(e-n)*t,Nl=(n,e)=>(n=Number(n),Number.isFinite(n)?n:e);function O1(){if(et||!Wm)return;try{et=new Wm}catch{et=null;return}kr=et.createGain(),kr.gain.value=Et.master,kr.connect(et.destination),Al=et.createGain(),Rl=et.createGain(),Al.connect(kr),Rl.connect(kr);const n=ht();Pl=Nl(n.musicVolume,Et.musicVolume),_f=!!n.musicMuted,Il=Nl(n.sfxVolume,Et.sfxVolume),bf=!!n.sfxMuted,Ha(),Kc=D.flightState,vh=D.gearAmount>.02,z1(),yf=!0}function k1(){if(!(!et||et.state==="running")){et.resume().catch(()=>{});try{const n=et.createBufferSource();n.buffer=et.createBuffer(1,1,22050),n.connect(et.destination),n.start(0)}catch{}}}function jv(){if(et){for(const n in Cl){const e=Cl[n];e&&!e.el.paused&&e.el.pause()}et.state==="running"&&et.suspend()}}function Yv(){et&&et.state!=="running"&&et.resume().catch(()=>{})}function Ha(){et&&(Al.gain.value=_f?0:Pl,Rl.gain.value=bf?0:Il)}function F1(n){return fetch(n).then(e=>e.arrayBuffer()).then(e=>e&&e.byteLength>0?e:Promise.reject(new Error("empty"))).catch(()=>new Promise((e,t)=>{const i=new XMLHttpRequest;i.open("GET",n),i.responseType="arraybuffer",i.onload=()=>i.response&&i.response.byteLength>0?e(i.response):t(new Error("empty")),i.onerror=()=>t(new Error("xhr")),i.send()}))}async function z1(){for(const[e,t]of Object.entries(Dv)){if(t.mode==="stream"){G1(e,t);continue}let i;try{i=await F1($v+t.src)}catch{Os[e]="load";continue}try{Ll[e]=await et.decodeAudioData(i)}catch{Os[e]="decode";continue}Os[e]="ok",t.mode==="loop"&&H1(e,t)}const n=Object.entries(Os).filter(([,e])=>e!=="ok");n.length&&console.warn("[audio] nicht ladbar:",n.map(([e,t])=>`${e} (${t})`).join(", "))}function B1(){let n=0;const e=[];for(const i in Os)Os[i]==="ok"?n++:e.push(`${i}: ${Os[i]}`);let t=`${et?et.state:"no-ctx"} · buf ${n}/${n+e.length}`;return e.length&&(t+=`
  ✗ `+e.slice(0,5).join(`
  ✗ `)),t}function Sf(n){return n==="music"?Al:Rl}function H1(n,e){const t=et.createBufferSource();t.buffer=Ll[n],t.loop=!0,t.playbackRate.value=e.rate||1;const i=et.createGain();i.gain.value=0;let s=null;e.filtered?(s=et.createBiquadFilter(),s.type="lowpass",s.frequency.value=Et.wind.cutoffMin,t.connect(s),s.connect(i)):t.connect(i),i.connect(Sf(e.channel)),t.start(),xf[n]={src:t,gain:i,lp:s}}function G1(n,e){const t=new Audio($v+e.src);t.loop=!0,t.preload="auto";let i;try{i=et.createMediaElementSource(t)}catch{return}const s=et.createGain();s.gain.value=0,i.connect(s),s.connect(Sf(e.channel)),Cl[n]={el:t,gain:s}}function V1(n){Pl=Is(Nl(n,Pl)),Ha()}function Zv(n){_f=!!n,Ha()}function W1(n){Il=Is(Nl(n,Il)),Ha()}function Kv(n){bf=!!n,Ha()}function xn(n,e){if(!yf||!Ll[n])return;const t=Dv[n],i=et.createBufferSource();i.buffer=Ll[n],i.playbackRate.value=e&&e.rate||t.rate||1;const s=et.createGain();s.gain.value=e&&e.gain!=null?e.gain:t.gain!=null?t.gain:1,i.connect(s),s.connect(Sf(t.channel)),i.onended=()=>{try{i.disconnect(),s.disconnect()}catch{}};try{i.start()}catch{}}function wi(n,e,t){const i=xf[n];i&&i.gain.gain.setTargetAtTime(Math.max(0,e),et.currentTime,t||.1)}function Xm(n,e,t,i){const s=xf["glider-wind"];if(!s)return;const o=et.currentTime;s.gain.gain.setTargetAtTime(Math.max(0,n),o,i),s.src.playbackRate.setTargetAtTime(e,o,i),s.lp&&s.lp.frequency.setTargetAtTime(t,o,i)}function q1(n,e,t){const i=Cl[n];i&&(i.gain.gain.setTargetAtTime(e,et.currentTime,Math.max(.02,t/1e3/3)),e>.001&&i.el.paused?i.el.play().catch(()=>{}):e<=.001&&!i.el.paused&&i.gain.gain.value<.005&&i.el.pause())}function X1(n,e,t){let i=0;return Rt(n,e)<Ee.waterLevel&&i++,Rt(n+t,e)<Ee.waterLevel&&i++,Rt(n-t,e)<Ee.waterLevel&&i++,Rt(n,e+t)<Ee.waterLevel&&i++,Rt(n,e-t)<Ee.waterLevel&&i++,i/5}function $1(n,e,t){const i=_t.TREE;let s=0;return zn(n,e)===i&&s++,zn(n+t,e)===i&&s++,zn(n-t,e)===i&&s++,zn(n,e+t)===i&&s++,zn(n,e-t)===i&&s++,s/5}function j1(n,e,t){const i=_t.URBAN;let s=0;return zn(n,e)===i&&s++,zn(n+t,e)===i&&s++,zn(n-t,e)===i&&s++,zn(n,e+t)===i&&s++,zn(n,e-t)===i&&s++,s/5}function Y1(n,e){if(!yf)return;const t=D,i=He,s=t.paused;q1("menu-music",s?1:0,s?Et.fade.musicIn:Et.fade.musicOut);const o=!s&&t.flightState===i.FLYING,r=t.flightState===i.TAKEOFF_ROLL||t.flightState===i.LANDING_ROLL,a=!s&&(o||r),c=Et.wind;if(a){const y=Is((t.speed-c.speedMin)/(c.speedMax-c.speedMin));let p=Io(c.gainMin,c.gainMax,y),h=Io(c.rateMin,c.rateMax,y),_=Io(c.cutoffMin,c.cutoffMax,y);const g=t.brakeAmount;g>.001&&(h*=Io(1,c.brakeRate,g),_*=Io(1,c.brakeCutoff,g),p*=Io(1,c.brakeGain,g)),Xm(p,h,_,c.smooth)}else Xm(0,1,c.cutoffMin,c.smooth);const l=Et.ocean,u=Et.forest,d=Et.city,f=Et.thermal;if(o){const y=e.position.x,p=e.position.z,h=e.position.y,_=Is(1-(h-Ee.waterLevel)/l.maxAlt);wi("ocean-surf-bed",X1(y,p,l.coastRadius)*_*l.gain,l.smooth);const g=Is(1-(h-Ee.waterLevel)/u.maxAlt);wi("forest-bed",$1(y,p,u.coastRadius)*g*u.gain,u.smooth);const b=Is(1-(h-Ee.waterLevel)/d.maxAlt);wi("city-bed",j1(y,p,d.coastRadius)*b*d.gain,d.smooth),wi("thermal-lift",Is(Xv(y,h,p)/f.liftRef)*f.gain,f.smooth)}else wi("ocean-surf-bed",0,l.smooth),wi("forest-bed",0,u.smooth),wi("city-bed",0,d.smooth),wi("thermal-lift",0,f.smooth);wi("grey-boost",t.greyActive?Et.boost.greyGain:0,.05),t.oneShotActive&&!qm&&xn("one-shot-boost",{gain:Et.boost.oneShotGain}),qm=t.oneShotActive;const m=t.flightState;m!==Kc&&(m===i.LANDING_ROLL&&Kc===i.FLYING?xn("touchdown"):m===i.LANDED?xn("landing-success"):m===i.CRASHING&&xn("crash"),Kc=m);const v=t.gearAmount>.02;v&&!vh&&m===i.FLYING&&xn("gear-deploy"),vh=v}const Z1=typeof window<"u"?new URLSearchParams(window.location.search):null;function Jv(n){if(Z1?.get(n)==="1")return!0;try{return localStorage.getItem(n)==="1"}catch{return!1}}const Qv=Jv("debugGl"),K1=Jv("debugPerf")||Qv;let ai=null,Fr=0,zr=0;const J1=(()=>{try{for(const n of document.querySelectorAll("script")){const e=(n.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(e)return e[1]}}catch{}return"?"})();function Q1(){ai||(ai=document.createElement("div"),ai.id="debug-perf",ai.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),ai.textContent="measuring…",document.body.appendChild(ai))}const Qo=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,er=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let $m=null;Qo&&Qo.addEventListener("click",()=>{D.showPerf=!D.showPerf,Qo.classList.toggle("off",!D.showPerf)});er&&er.addEventListener("click",()=>{D.showAds=!D.showAds,er.classList.toggle("off",!D.showAds)});function eR(){const n=!!te.testMode;n!==$m&&($m=n,Qo&&(Qo.classList.toggle("visible",n),Qo.classList.toggle("off",!D.showPerf)),er&&(er.classList.toggle("visible",n),er.classList.toggle("off",!D.showAds)))}function tR(n){eR();const e=K1||te.testMode&&D.showPerf,t=Qv||te.testMode&&D.showPerf;if(!e){ai&&(ai.style.display="none"),Fr=0,zr=0;return}if(Q1(),ai.style.display="",Fr++,!zr){zr=n;return}const i=n-zr;if(i<500)return;const s=Math.round(Fr*1e3/i),o=Math.round(i/Fr*10)/10,r=hn?hn.getPixelRatio():0,a=hn?`${hn.domElement.width}x${hn.domElement.height}`:"?";let c=`Build:    ${J1}
FPS:      ${s}
Frame:    ${o} ms
Mobile:   ${oo()?"yes":"no"}
DPR set:  ${r.toFixed(2)} (dev ${(window.devicePixelRatio||0).toFixed(2)})
Buffer:   ${a}
Segments: ${Ee.segments}
Samples:  ${At.sampleCount.toLocaleString("de-DE")}
Audio:    ${B1()}`;if(t&&hn){const l=hn.info.render,u=hn.info.memory;c+=`
Calls:    ${l.calls}
Tris:     ${l.triangles.toLocaleString("de-DE")}
Programs: ${hn.info.programs?.length??"?"}
Geoms:    ${u.geometries}
Textures: ${u.textures}`}ai.textContent=c,Fr=0,zr=n}function ey(){const n=new gt,e=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Nt(e,3)),n.computeVertexNormals();const t=new ut({color:Ze.paper,flatShading:!0,side:Zt}),i=new tt(n,t);i.name="paperBody";const s=new _v(n,18),o=new fu({color:Ze.ink,transparent:!0,opacity:.22}),r=new fv(s,o),a=new lt;a.add(i),a.add(r);const c=new pu(.03,20),l=new Vn({color:1712164,side:Zt});for(const u of[-.36,.36]){const d=new tt(c,l);d.position.set(u,.13,.423),a.add(d)}return a}const he=ey();he.position.set(0,38,0);const nR=1712164;function Mf(){return qd}function wr(n){return qd.find(e=>e.id===n)||qd[0]}function ty(){return wr(te.equippedSkin)}function ny(n){return!!te.ownedSkins[n]}function yu(n){te.ownedSkins[n]=!0,Xt()}function wf(n){return wr(n).teaser||!ny(n)?!1:(te.equippedSkin=n,sy(),Xt(),!0)}function iR(n){if(n.userData._skinRole!==void 0)return n.userData._skinRole;let e=null;const t=n.color?n.color.getHex():-1;return n.isLineBasicMaterial&&t===Ze.ink?e="ink":n.isMeshBasicMaterial&&t===nR?e="vent":n.isMeshLambertMaterial&&t===Ze.paper&&(e="paper"),n.userData._skinRole=e,e}function iy(n,e){!e||e.teaser||n.traverse(t=>{if(!t.material)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const s of i){const o=iR(s);o==="paper"&&e.paper!=null?(s.color.setHex(e.paper),s.emissive&&(s.emissive.setHex(e.emissive!=null?e.emissive:0),"emissiveIntensity"in s&&(s.emissiveIntensity=e.emissiveIntensity!=null?e.emissiveIntensity:1))):o==="ink"&&e.ink!=null?s.color.setHex(e.ink):o==="vent"&&e.vent!=null&&s.color.setHex(e.vent)}})}function sy(){iy(he,ty())}const jm={android:"goog_dseUNtdcnlZGNWfAOgAdDoYIyki",ios:"appl_adobEJBJMEfqpVfgpItUNUsfWVS"},xd="default",yh=new URLSearchParams(window.location.search).has("mockiap"),_d=()=>!Ii.isNativePlatform()||yh,oy=n=>Xh.find(e=>e.id===n),Ef=n=>Xh.find(e=>e.productId===n);function ry(n){const e=Ef(n);return e?Math.floor(e.diamonds*(1+e.bonusPct/100)):0}function ay(n){const e=ry(n.productId);return te.obsidian=(te.obsidian|0)+e,te.obsidianLifetimeGranted=(te.obsidianLifetimeGranted|0)+e,xn("buy-diamonds"),Xt(),e}function Ym(n){let e=0;for(const i of n?.nonSubscriptionTransactions||[])e+=ry(i.productIdentifier);const t=Math.max(0,e-(te.obsidianLifetimeGranted|0));return t>0&&(te.obsidian=(te.obsidian|0)+t,te.obsidianLifetimeGranted=e,Xt()),t}function bd(n){!!n?.entitlements?.active?.[_a.entitlement]&&!te.adsRemoveOwned&&(te.adsRemoveOwned=!0,Xt())}const cy={name:"mock",async init(){},localizedPrice(n){const e=Ef(n);return e?e.priceFallback:""},async purchasePack(n){if(!_d())return{success:!1};const e=oy(n);return e?{success:!0,diamonds:ay(e)}:{success:!1}},async purchaseSkin(n){return _d()?(yu(n),{success:!0}):{success:!1}},async purchaseRemoveAds(){return _d()?(te.adsRemoveOwned=!0,Xt(),{success:!0}):{success:!1}},async restore(){return{success:!0,restored:[]}},hasEntitlement(n){return!!te.ownedSkins[n]}},Zm={name:"revenuecat",_Purchases:null,_prices:{},_packages:{},async init(n){const{Purchases:e,LOG_LEVEL:t}=await ru(async()=>{const{Purchases:i,LOG_LEVEL:s}=await import("./index-6c8v8erw.js");return{Purchases:i,LOG_LEVEL:s}},__vite__mapDeps([0,1]));this._Purchases=e,await e.configure({apiKey:n});try{await e.setLogLevel({level:t.WARN})}catch{}await this._loadOfferings(),oR();try{const{customerInfo:i}=await e.getCustomerInfo();Ym(i),bd(i)}catch(i){console.warn("[iap] init reconcile failed",i)}},async _loadOfferings(){try{const n=await this._Purchases.getOfferings(),e=n?.all?.[xd]||n?.current;for(const t of e?.availablePackages||[]){const i=t?.product?.identifier;i&&(this._prices[i]=t.product.priceString||"",this._packages[i]=t)}}catch(n){console.warn("[iap] getOfferings failed",n)}},localizedPrice(n){return this._prices[n]||(Ef(n)?.priceFallback??"")},async purchasePack(n){const e=oy(n);if(!e)return{success:!1};const t=this._packages[e.productId];if(!t)return console.warn(`[iap] no RevenueCat package for ${e.productId} — is it in the "${xd}" offering?`),{success:!1};try{return await this._Purchases.purchasePackage({aPackage:t}),{success:!0,diamonds:ay(e)}}catch(i){return i?.userCancelled||i?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchasePack failed",i),{success:!1})}},async purchaseSkin(n){try{return yu(n),{success:!0}}catch(e){return e?.userCancelled?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseSkin failed",e),{success:!1})}},async purchaseRemoveAds(){const n=this._packages[_a.productId];if(!n)return console.warn(`[iap] no RevenueCat package for ${_a.productId} — is it in the "${xd}" offering?`),{success:!1};try{const{customerInfo:e}=await this._Purchases.purchasePackage({aPackage:n});return bd(e),{success:!0}}catch(e){return e?.userCancelled||e?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseRemoveAds failed",e),{success:!1})}},async restore(){try{const{customerInfo:n}=await this._Purchases.restorePurchases(),e=Ym(n);return bd(n),{success:!0,restored:e>0?["obsidian"]:[],regranted:e}}catch(n){return console.warn("[iap] restore failed",n),{success:!1}}},hasEntitlement(n){return!!te.ownedSkins[n]}},ly=[];function sR(n){ly.push(n)}function oR(){for(const n of ly)try{n()}catch(e){console.warn("[iap] price listener failed",e)}}let si=cy;const to={async init(){if(yh||!Ii.isNativePlatform())return;const n=Ii.getPlatform()==="ios"?jm.ios:jm.android;try{await Zm.init(n),si=Zm}catch(e){console.warn("[iap] RevenueCat init failed — using mock",e),si=cy}},isAvailable(){return Ii.isNativePlatform()||yh},localizedPrice(n){return si.localizedPrice(n)},purchasePack(n){return si.purchasePack(n)},purchaseSkin(n){return si.purchaseSkin(n)},purchaseRemoveAds(){return si.purchaseRemoveAds()},removeAdsPrice(){return si.localizedPrice(_a.productId)||_a.priceFallback},restore(){return si.restore()},hasEntitlement(n){return si.hasEntitlement(n)},get providerName(){return si.name}},rR=new URLSearchParams(window.location.search).has("mockads"),Jc=Ii.isNativePlatform()||rR;function Tf(){return Ii.getPlatform()==="ios"?"ios":"android"}function Af(){return!!Rn.useTestAds?.[Tf()]}function Km(){const n=Tf();return Af()?Rn.test[n].interstitial:Rn[n].interstitial}function Jm(){const n=Tf();return Af()?Rn.test[n].rewarded:Rn[n].rewarded}function Qm(){try{window.focus()}catch{}try{window.dispatchEvent(new Event("resize"))}catch{}}function eg(){return new Date().toISOString().slice(0,10)}function uy(){te.rewardedDay!==eg()&&(te.rewardedDay=eg(),te.rewardedToday=0)}function tg(){return uy(),Math.max(0,Rn.rewardedDailyCap-(te.rewardedToday|0))}let Sd=0,ng=-1/0;const dy={name:"mock",async init(){},async preloadInterstitial(){},async preloadRewarded(){},async showInterstitial(){console.log("[ads] mock interstitial")},async showRewarded(){return console.log("[ads] mock rewarded → granted"),!0}},xh={name:"admob",_AdMob:null,_mod:null,_interReady:!1,_rewardReady:!1,async init(){this._mod=await ru(()=>import("./index-BNXHsM2Y.js"),__vite__mapDeps([2,1])),this._AdMob=this._mod.AdMob,await this._AdMob.initialize({initializeForTesting:Af()});try{const n=await this._AdMob.requestConsentInfo();n?.isConsentFormAvailable&&n?.status==="REQUIRED"&&await this._AdMob.showConsentForm()}catch(n){console.warn("[ads] consent failed",n)}if(Ii.getPlatform()==="ios")try{await this._AdMob.requestTrackingAuthorization()}catch{}},async preloadInterstitial(){try{await this._AdMob.prepareInterstitial({adId:Km()}),this._interReady=!0}catch(n){this._interReady=!1,console.warn("[ads] preload interstitial failed",n)}},async preloadRewarded(){try{await this._AdMob.prepareRewardVideoAd({adId:Jm()}),this._rewardReady=!0}catch(n){this._rewardReady=!1,console.warn("[ads] preload rewarded failed",n)}},_present(n,e,t){return new Promise(i=>{let s=!1,o=null,r=null;const a=()=>{if(!s){s=!0;try{o?.remove()}catch{}try{r?.remove()}catch{}i()}};Promise.all([this._AdMob.addListener(e,a).then(c=>{o=c}),this._AdMob.addListener(t,a).then(c=>{r=c})]).then(()=>n().catch(a))})},async showInterstitial(){try{this._interReady||await this._AdMob.prepareInterstitial({adId:Km()}),this._interReady=!1,await this._present(()=>this._AdMob.showInterstitial(),this._mod.InterstitialAdPluginEvents.Dismissed,this._mod.InterstitialAdPluginEvents.FailedToShow)}catch(n){console.warn("[ads] interstitial failed",n)}Qm(),this.preloadInterstitial()},async showRewarded(){let n=!1,e=null;try{e=await this._AdMob.addListener(this._mod.RewardAdPluginEvents.Rewarded,()=>{n=!0}),this._rewardReady||await this._AdMob.prepareRewardVideoAd({adId:Jm()}),this._rewardReady=!1,await this._present(()=>this._AdMob.showRewardVideoAd(),this._mod.RewardAdPluginEvents.Dismissed,this._mod.RewardAdPluginEvents.FailedToShow)}catch(t){console.warn("[ads] rewarded failed",t)}finally{try{e?.remove()}catch{}}return Qm(),this.preloadRewarded(),n}};let $i=dy,No=null;function Cc(){return No||(!Jc||!Ii.isNativePlatform()?(No=Promise.resolve(),No):(No=xh.init().then(()=>{$i=xh}).catch(n=>{console.warn("[ads] AdMob init failed — using mock",n),$i=dy}),No))}const no={isAvailable(){return Jc},async warmup(){await Cc(),$i===xh&&($i.preloadInterstitial(),$i.preloadRewarded())},async onCrashRestart(){if(Sd++,!Jc)return;if(te.testMode){D.showAds&&(await Cc(),await $i.showInterstitial());return}if(te.adsRemoveOwned||Sd<=Rn.crashGraceCount||Sd%Rn.interstitialEveryNCrashes!==0)return;const n=performance.now();n-ng<Rn.interstitialMinGapSec*1e3||(ng=n,await Cc(),await $i.showInterstitial())},rewardedRemaining:tg,async watchRewarded(){return Jc?tg()<=0?{success:!1,capped:!0}:(await Cc(),await $i.showRewarded()?(uy(),te.rewardedToday=(te.rewardedToday|0)+1,te.obsidian=(te.obsidian|0)+Rn.rewardedDiamonds,xn("buy-diamonds"),Xt(),{success:!0,diamonds:Rn.rewardedDiamonds}):{success:!1}):{success:!1}}},aR={sub:"Building the world…",hint:"Higher quality settings may take a few seconds."},cR={pause:"Pause",map:"Map",close:"Close",landings:"Landings",brake:"Brake",oneShot:"One-Shot",boost:"Boost",sell:"Sell for {cost} points"},lR={lift:"Lift",soon:"soon",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",hintNormalTouch:"Steer with joystick · Right Boost / Brake / One-Shot",hintPrelaunch:"Pull down to launch",hintPrelaunchGyro:"Tap boost to take off",hintTakeoff:"Takeoff roll…",landingToast:"Touchdown! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"New island discovered!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land at the marked airport to refuel your boosters and earn bonus points.",airportUnlockTitle:"Airport unlocked!",airportUnlockBody:"Spawn at {name} any time from the Levels menu.",airportUnlocked:"{name} unlocked",wrongApproach:"Wrong approach side — line up from the other end."},uR={names:["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],unlock:["","Booster Level 1 unlocked","Booster Level 2 unlocked — La Gomera in range","Booster Level 3 unlocked — Gran Canaria in range","Booster Level MAX unlocked — Fuerteventura / Lanzarote"]},dR={start:"Start",startSubDefault:"Last checkpoint",levels:"Levels",levelsSub:"Choose airport",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Shop",shopSub:"Obsidian & designs",settings:"Settings",settingsSub:"Graphics & performance",imprint:"Imprint",licenses:"Licences"},hR={checkpoint:"Checkpoint · {id}",firstFlight:"First flight · TFN"},fR={title:"Pause",resume:"Resume flight",home:"Main menu"},pR={title:"Crash landing",restart:"Take Off Again",hint:"Spacebar",hangar:"Hangar",shop:"Shop"},mR={title:"Hangar",points:"Points",locations:"Locations",obsidian:"Obsidian",highscore:"High score",plane:"Plane",dragToRotate:"Drag to rotate",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tap an upgrade to see its description.",buy:"Buy · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Level {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Your boost level rises automatically once you've discovered enough locations. Fly through new POIs to improve your One-Shot boost.",equip:"Equip",equipped:"Equipped",comingSoon:"Coming soon",getDiamonds:"Get Obsidian →",skinPrev:"Previous design",skinNext:"Next design"},gR={title:"Pay with Obsidian?",text:"This upgrade costs <strong></strong>.",warn:"Obsidian is bought with real money. Only tap <em>Confirm</em> if you really want to spend Obsidian.",cancel:"Cancel",confirm:"Confirm",spendSkin:"You're spending {obsidian} on the {label} design."},vR={default:{name:"Paper",desc:"The classic fold."},charcoal:{name:"Charcoal",desc:"A matte slate livery — earned by explorers."},gold:{name:"Gold",desc:"A gleaming premium livery."},comingSoon:{name:"More soon",desc:"New designs are on the way."}},yR={intro:"Obsidian unlocks designs in the hangar and instant upgrades.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Best value",granted:"+ {amount} Obsidian added",restore:"Restore purchases",restored:"Purchases restored",viewSkins:"View designs →",disclosure:"Obsidian and designs are stored on this device.",watchAd:"Watch a video",adsLeftToday:"{count}/{cap} today",adsCapReached:"Come back tomorrow",removeAds:"Remove ads",removeAdsOwned:"Ads removed"},xR={title:"Settings",quality:"Graphics quality",presetLow:"Low",presetStandard:"Standard",presetHigh:"High",presetUltra:"Ultra",advanced:"Advanced",meshRes:"Mesh resolution",meshHint:"Segments · 100–3000",vegSamples:"Vegetation samples",vegHint:"10,000–10,000,000",restartNote:"Changes require a restart. Applying will reload the page.",cancel:"Cancel",apply:"Apply & reload",language:"Language",controls:"Controls",invertPitch:"Inverted flight controls",invertPitchHint:"Pull down to climb",gyroControl:"Tilt steering",gyroControlHint:"Tilt your device to steer",gyroSensitivity:"Sensitivity",gyroRecalibrate:"Recalibrate",tutorial:"Tutorial",replayTutorial:"Replay tutorial",dangerZone:"Danger zone",dangerDesc:"Resets all progress: points, locations, upgrades, discovered POIs, airports and checkpoint. Graphics settings are kept.",resetSave:"Reset progress",audio:"Audio",music:"Music",musicHint:"Menu theme by Daniel Schultes",musicVolume:"Music volume",sound:"Sound",soundHint:"Wind, ambience & effects",soundVolume:"Sound volume",headphoneHint:"Best experienced with headphones."},_R={title:"Really delete your save?",text:"All points, locations, upgrades and discovered POIs will be lost. You'll start at <strong>Tenerife Nord</strong> with the basic plane.",warn:"This action cannot be undone.",cancel:"Cancel",confirm:"Reset"},bR={eyebrow:"Island",archTitle:"Canary Islands",legendSpawn:"Spawn",legendDiscovered:"Discovered",legendLocked:"Unknown",hintDefault:"Tap a spawn point to start there.",hintNone:"Land at an airport to unlock it as a spawn point.",hintProgress:"{landed} / {total} airports unlocked. Tap a spawn point.",hintAll:"All airports unlocked. Tap a spawn point.",markerLocked:"???",tipStart:"Start at {id}",tipNotLanded:"{id} — not landed yet",tipUndiscovered:"Not discovered yet"},SR={title:"Imprint",provider:"Provider",contact:"Contact",privacy:"Privacy policy",privacyLink:"Open privacy policy",linksLiability:"Liability for links",linksText:"Our offering contains links to external third-party websites whose content we cannot influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",footer:"Swiss Innovation Studios · 2026"},MR={title:"Open-source licences",intro:"Teide includes the following open-source components. The full licence texts are below and bundled with the app.",audioTitle:"Audio — sound & music",audioCredit:"Sound effects from Pixabay, used under the Pixabay Content Licence. Music composed by Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},wR={title:"Please rotate your device",sub:"Teide is played in landscape mode"},ER={title:"Test mode",prompt:"Enter PIN",wrong:"Wrong PIN",cancel:"Cancel",confirm:"OK"},TR={drag:{label:"Aerodynamics",desc:"Smoother folds — less drag, longer glide."},maxSpeed:{label:"Top speed",desc:"Raises the maximum cruise speed."},speedFromPitch:{label:"Dive",desc:"More acceleration in a dive — altitude becomes speed."},stallSpeed:{label:"Stability",desc:"Lower stall threshold — forgives slow flying."},takeoffSpeed:{label:"Runway",desc:"Faster take-off acceleration — less roll distance."},brake:{label:"Airbrake",desc:"Unlocks the brake flaps (Space in flight)."},greyBoost:{label:"Reserve boost",desc:"Stronger emergency thrust: longer burn, more push, faster refill."}},AR={pickLanguage:"Choose your language",welcome:"Welcome to the Canaries",story:["You've folded the perfect paper plane and launched it from the slopes of Mount Teide. Now ride the thermals and glide out across the Canary Islands.","Catch rising air to stay aloft, dive through points of interest to collect locations, and touch down on runways to unlock them as new starting points.","Landing is how you keep going: each touchdown refuels your booster for the next hop. Line up with a runway and set down gently.","Spend your points in the hangar to upgrade your plane and booster. Glide far enough and new islands come within reach — from La Gomera all the way to Lanzarote. How far can you go?"],next:"Next",begin:"Let's go"},RR={eyebrow:"Tutorial",skip:"Skip",retry:"Try again!",done:"You're ready — off you go!",launch:"Pull down to take off and start gliding",navLeft:"Now bank left",navRight:"Now bank right",navUp:"Now climb",navDown:"Now descend",rings:"Fly through both rings ({collected}/{total})",boost:"Hold boost for a burst of speed",thermal:"Steer into the updraft to gain height",ringHigh:"Use your new height — catch the high ring",ringLow:"Now dive back down — through the low ring",invertHint:"Climbing feels backwards? Flip it.",steerHint:"Steer here",endTitle:"You're ready to glide!",endBody:"Explore the Canary Islands and dive through rings to collect locations. Gather enough and your One-Shot boost reaches the next island. How far can you glide?",endGo:"Let's go"},LR={loading:aR,a11y:cR,hud:lR,booster:uR,menu:dR,welcome:hR,pause:fR,crash:pR,hangar:mR,obsidian:gR,skins:vR,shop:yR,settings:xR,reset:_R,levels:bR,imprint:SR,licenses:MR,portrait:wR,testpin:ER,upgrades:TR,onboarding:AR,tutorial:RR},CR={sub:"Welt wird gebaut…",hint:"Bei höheren Qualitätseinstellungen kann das einige Sekunden dauern."},PR={pause:"Pause",map:"Karte",close:"Schliessen",landings:"Landungen",brake:"Bremse",oneShot:"One-Shot",boost:"Boost",sell:"Verkaufen für {cost} Punkte"},IR={lift:"Lift",soon:"bald",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Bremse · Shift Boost · F One-Shot",hintNormalTouch:"Joystick steuern · Rechts Boost / Bremse / One-Shot",hintPrelaunch:"Zum Starten nach unten ziehen",hintPrelaunchGyro:"Boost antippen zum Abheben",hintTakeoff:"Startrollen…",landingToast:"Geschafft! · {id}",landingBonus:"+ {bonus} Pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Neue Insel entdeckt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Lande am markierten Flughafen, um deine Booster aufzufüllen und Extra-Punkte zu sammeln.",airportUnlockTitle:"Flughafen freigeschaltet!",airportUnlockBody:"Starte jederzeit über das Levels-Menü bei {name}.",airportUnlocked:"{name} freigeschaltet",wrongApproach:"Falsche Anflugseite — flieg von der anderen Seite an."},NR={names:["Kein Booster","Booster Stufe 1","Booster Stufe 2","Booster Stufe 3","Booster Stufe MAX"],unlock:["","Booster Stufe 1 freigeschaltet","Booster Stufe 2 freigeschaltet — La Gomera in Reichweite","Booster Stufe 3 freigeschaltet — Gran Canaria in Reichweite","Booster Stufe MAX freigeschaltet — Fuerteventura / Lanzarote"]},DR={start:"Start",startSubDefault:"Letzter Checkpoint",levels:"Levels",levelsSub:"Flughäfen auswählen",hangar:"Hangar",hangarSub:"Upgrades & Status",shop:"Shop",shopSub:"Obsidian & Designs",settings:"Einstellungen",settingsSub:"Grafik & Performance",imprint:"Impressum",licenses:"Lizenzen"},UR={checkpoint:"Checkpoint · {id}",firstFlight:"Erstflug · TFN"},OR={title:"Pause",resume:"Flug fortsetzen",home:"Hauptmenü"},kR={title:"Bruchlandung",restart:"Erneut abheben",hint:"Leertaste",hangar:"Hangar",shop:"Shop"},FR={title:"Hangar",points:"Punkte",locations:"Orte",obsidian:"Obsidian",highscore:"Highscore",plane:"Flugzeug",dragToRotate:"Ziehen zum Drehen",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tippe ein Upgrade an, um die Beschreibung zu sehen.",buy:"Kaufen · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Stufe {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Die Boost-Stufe steigt automatisch, sobald genug Orte entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.",equip:"Anlegen",equipped:"Angelegt",comingSoon:"Bald verfügbar",getDiamonds:"Obsidian holen →",skinPrev:"Vorheriges Design",skinNext:"Nächstes Design"},zR={title:"Mit Obsidian bezahlen?",text:"Dieses Upgrade kostet <strong></strong>.",warn:"Obsidian wird mit echtem Geld gekauft. Klick auf <em>Bestätigen</em> nur, wenn du wirklich Obsidian ausgeben willst.",cancel:"Abbrechen",confirm:"Bestätigen",spendSkin:"Du gibst {obsidian} für das Design {label} aus."},BR={default:{name:"Papier",desc:"Die klassische Faltung."},charcoal:{name:"Anthrazit",desc:"Eine matte Schiefer-Lackierung — von Entdeckern verdient."},gold:{name:"Gold",desc:"Eine glänzende Premium-Lackierung."},comingSoon:{name:"Bald mehr",desc:"Neue Designs sind unterwegs."}},HR={intro:"Obsidian schaltet Designs im Hangar und Sofort-Upgrades frei.",bonus:"+{pct}%",badgePopular:"Beliebt",badgeValue:"Bester Wert",granted:"+ {amount} Obsidian erhalten",restore:"Käufe wiederherstellen",restored:"Käufe wiederhergestellt",viewSkins:"Designs ansehen →",disclosure:"Obsidian und Designs werden auf diesem Gerät gespeichert.",watchAd:"Video ansehen",adsLeftToday:"{count}/{cap} heute",adsCapReached:"Komm morgen wieder",removeAds:"Werbung entfernen",removeAdsOwned:"Werbung entfernt"},GR={title:"Einstellungen",quality:"Grafikqualität",presetLow:"Niedrig",presetStandard:"Standard",presetHigh:"Hoch",presetUltra:"Ultra",advanced:"Erweitert",meshRes:"Mesh-Auflösung",meshHint:"Segments · 100–3000",vegSamples:"Vegetations-Samples",vegHint:"10'000–10'000'000",restartNote:"Änderungen erfordern einen Neustart. Beim Anwenden wird die Seite neu geladen.",cancel:"Abbrechen",apply:"Anwenden & Neu laden",language:"Sprache",controls:"Steuerung",invertPitch:"Umgekehrte Flugsteuerung",invertPitchHint:"Nach unten ziehen zum Steigen",gyroControl:"Neigungssteuerung",gyroControlHint:"Gerät neigen zum Steuern",gyroSensitivity:"Empfindlichkeit",gyroRecalibrate:"Neu kalibrieren",tutorial:"Tutorial",replayTutorial:"Tutorial wiederholen",dangerZone:"Danger Zone",dangerDesc:"Setzt den kompletten Spielfortschritt zurück: Punkte, Orte, Upgrades, entdeckte POIs, Flughäfen und Checkpoint. Grafik-Einstellungen bleiben erhalten.",resetSave:"Spielstand zurücksetzen",audio:"Audio",music:"Musik",musicHint:"Menü-Titel von Daniel Schultes",musicVolume:"Musiklautstärke",sound:"Ton",soundHint:"Wind, Ambiente & Effekte",soundVolume:"Tonlautstärke",headphoneHint:"Am besten mit Kopfhörern."},VR={title:"Spielstand wirklich löschen?",text:"Alle Punkte, Orte, Upgrades und entdeckten POIs gehen verloren. Du startest auf <strong>Tenerife Nord</strong> mit dem Basis-Flugzeug.",warn:"Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",confirm:"Zurücksetzen"},WR={eyebrow:"Insel",archTitle:"Kanarische Inseln",legendSpawn:"Spawn",legendDiscovered:"Entdeckt",legendLocked:"Unbekannt",hintDefault:"Tippe einen Spawn an, um dort zu starten.",hintNone:"Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.",hintProgress:"{landed} / {total} Flughäfen freigeschaltet. Tippe einen Spawn an.",hintAll:"Alle Flughäfen freigeschaltet. Tippe einen Spawn an.",markerLocked:"???",tipStart:"Bei {id} starten",tipNotLanded:"{id} — noch nicht gelandet",tipUndiscovered:"Noch nicht entdeckt"},qR={title:"Impressum",provider:"Anbieter",contact:"Kontakt",privacy:"Datenschutz",privacyLink:"Datenschutzerklärung öffnen",linksLiability:"Haftung für Links",linksText:"Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",footer:"Swiss Innovation Studios · 2026"},XR={title:"Open-Source-Lizenzen",intro:"Teide enthält die folgenden quelloffenen Komponenten. Die vollständigen Lizenztexte sind unten und im App-Paket beigelegt.",audioTitle:"Audio — Ton & Musik",audioCredit:"Soundeffekte von Pixabay, genutzt unter der Pixabay Content License. Musik komponiert von Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},$R={title:"Bitte Gerät drehen",sub:"Teide wird im Landscape-Modus gespielt"},jR={title:"Testmodus",prompt:"PIN eingeben",wrong:"Falsche PIN",cancel:"Abbrechen",confirm:"OK"},YR={drag:{label:"Aerodynamik",desc:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten."},maxSpeed:{label:"Spitzentempo",desc:"Erhöht die maximale Fluggeschwindigkeit im Cruise."},speedFromPitch:{label:"Sturzflug",desc:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo."},stallSpeed:{label:"Stabilität",desc:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen."},takeoffSpeed:{label:"Startbahn",desc:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke."},brake:{label:"Luftbremse",desc:"Schaltet die Bremsklappen frei (Leertaste im Flug)."},greyBoost:{label:"Reserve-Boost",desc:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill."}},ZR={pickLanguage:"Sprache wählen",welcome:"Willkommen auf den Kanaren",story:["Du hast den perfekten Papierflieger gefaltet und ihn von den Hängen des Teide gestartet. Reite jetzt die Thermik und gleite hinaus über die Kanarischen Inseln.","Fang Aufwinde ein, um oben zu bleiben, flieg durch Points of Interest, um Orte zu sammeln, und lande auf Pisten, um sie als neue Startpunkte freizuschalten.","Landen heißt weiterkommen: Jede Landung füllt deinen Booster für den nächsten Sprung wieder auf. Richte dich auf eine Bahn aus und setze sanft auf.","Gib deine Punkte im Hangar aus, um Flugzeug und Booster zu verbessern. Gleitest du weit genug, kommen neue Inseln in Reichweite — von La Gomera bis Lanzarote. Wie weit kommst du?"],next:"Weiter",begin:"Los geht's"},KR={eyebrow:"Tutorial",skip:"Überspringen",retry:"Nochmal!",done:"Geschafft — los geht's!",launch:"Nach unten ziehen zum Abheben und Gleiten",navLeft:"Jetzt nach links",navRight:"Jetzt nach rechts",navUp:"Jetzt steigen",navDown:"Jetzt sinken",rings:"Flieg durch beide Ringe ({collected}/{total})",boost:"Halte Boost für einen Schub",thermal:"Steuere in den Aufwind, um Höhe zu gewinnen",ringHigh:"Nutz deine Höhe — schnapp dir den hohen Ring",ringLow:"Jetzt wieder runter — durch den tiefen Ring",invertHint:"Steigen falsch herum? Hier umstellen.",steerHint:"Hier steuern",endTitle:"Bereit zum Gleiten!",endBody:"Erkunde die Kanaren und flieg durch Ringe, um Orte zu sammeln. Sammle genug, und dein One-Shot-Boost bringt dich zur nächsten Insel. Wie weit gleitest du?",endGo:"Los geht's"},JR={loading:CR,a11y:PR,hud:IR,booster:NR,menu:DR,welcome:UR,pause:OR,crash:kR,hangar:FR,obsidian:zR,skins:BR,shop:HR,settings:GR,reset:VR,levels:WR,imprint:qR,licenses:XR,portrait:$R,testpin:jR,upgrades:YR,onboarding:ZR,tutorial:KR},QR={sub:"Construyendo el mundo…",hint:"Con ajustes de calidad altos puede tardar unos segundos."},eL={pause:"Pausa",map:"Mapa",close:"Cerrar",landings:"Aterrizajes",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vender por {cost} puntos"},tL={lift:"Ascenso",soon:"pronto",hintNormal:"↑ ↓ Cabeceo · ← → Alabeo · Espacio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Controla con el joystick · Derecha Boost / Freno / One-Shot",hintPrelaunch:"Tira hacia abajo para despegar",hintPrelaunchGyro:"Toca boost para despegar",hintTakeoff:"Carrera de despegue…",landingToast:"¡Aterrizaje! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"¡Nueva isla descubierta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Aterriza en el aeropuerto marcado para recargar tus propulsores y ganar puntos extra.",airportUnlockTitle:"¡Aeropuerto desbloqueado!",airportUnlockBody:"Aparece en {name} cuando quieras desde el menú Niveles.",airportUnlocked:"{name} desbloqueado",wrongApproach:"Lado de aproximación incorrecto: alinéate desde el otro extremo."},nL={names:["Sin Booster","Booster Nivel 1","Booster Nivel 2","Booster Nivel 3","Booster Nivel MÁX"],unlock:["","Booster Nivel 1 desbloqueado","Booster Nivel 2 desbloqueado — La Gomera a tu alcance","Booster Nivel 3 desbloqueado — Gran Canaria a tu alcance","Booster Nivel MÁX desbloqueado — Fuerteventura / Lanzarote"]},iL={start:"Empezar",startSubDefault:"Último checkpoint",levels:"Niveles",levelsSub:"Elegir aeropuerto",hangar:"Hangar",hangarSub:"Mejoras y estado",shop:"Tienda",shopSub:"Obsidiana y diseños",settings:"Ajustes",settingsSub:"Gráficos y rendimiento",imprint:"Aviso legal",licenses:"Licencias"},sL={checkpoint:"Checkpoint · {id}",firstFlight:"Primer vuelo · TFN"},oL={title:"Pausa",resume:"Reanudar vuelo",home:"Menú principal"},rL={title:"Aterrizaje forzoso",restart:"Despegar de nuevo",hint:"Barra espaciadora",hangar:"Hangar",shop:"Tienda"},aL={title:"Hangar",points:"Puntos",locations:"Lugares",obsidian:"Obsidiana",highscore:"Récord",plane:"Avión",dragToRotate:"Arrastra para girar",upgrades:"Mejoras",booster:"Booster",selectUpgrade:"Toca una mejora para ver su descripción.",buy:"Comprar · {cost}",buyObsidian:"Obsidiana · {cost}",max:"Máx",level:"Nivel {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Tu nivel de boost sube automáticamente cuando descubres suficientes lugares. Vuela a través de nuevos POIs para mejorar tu boost One-Shot.",equip:"Equipar",equipped:"Equipado",comingSoon:"Próximamente",getDiamonds:"Conseguir obsidiana →",skinPrev:"Diseño anterior",skinNext:"Diseño siguiente"},cL={title:"¿Pagar con obsidiana?",text:"Esta mejora cuesta <strong></strong>.",warn:"La obsidiana se compra con dinero real. Pulsa <em>Confirmar</em> solo si de verdad quieres gastar obsidiana.",cancel:"Cancelar",confirm:"Confirmar",spendSkin:"Vas a gastar {obsidian} en el diseño {label}."},lL={default:{name:"Papel",desc:"El pliegue clásico."},charcoal:{name:"Carbón",desc:"Una librea de pizarra mate — para exploradores."},gold:{name:"Oro",desc:"Una reluciente librea premium."},comingSoon:{name:"Más pronto",desc:"Llegan nuevos diseños."}},uL={intro:"La obsidiana desbloquea diseños en el hangar y mejoras instantáneas.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Mejor valor",granted:"+ {amount} obsidiana añadida",restore:"Restaurar compras",restored:"Compras restauradas",viewSkins:"Ver diseños →",disclosure:"La obsidiana y los diseños se guardan en este dispositivo.",watchAd:"Ver un vídeo",adsLeftToday:"{count}/{cap} hoy",adsCapReached:"Vuelve mañana",removeAds:"Quitar anuncios",removeAdsOwned:"Anuncios eliminados"},dL={title:"Ajustes",quality:"Calidad gráfica",presetLow:"Baja",presetStandard:"Estándar",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzado",meshRes:"Resolución de malla",meshHint:"Segments · 100–3000",vegSamples:"Muestras de vegetación",vegHint:"10.000–10.000.000",restartNote:"Los cambios requieren reiniciar. Al aplicar se recargará la página.",cancel:"Cancelar",apply:"Aplicar y recargar",language:"Idioma",controls:"Controles",invertPitch:"Controles de vuelo invertidos",invertPitchHint:"Tira hacia abajo para subir",gyroControl:"Control por inclinación",gyroControlHint:"Inclina el dispositivo para dirigir",gyroSensitivity:"Sensibilidad",gyroRecalibrate:"Recalibrar",tutorial:"Tutorial",replayTutorial:"Repetir tutorial",dangerZone:"Zona de peligro",dangerDesc:"Restablece todo el progreso: puntos, lugares, mejoras, POIs descubiertos, aeropuertos y checkpoint. Los ajustes gráficos se mantienen.",resetSave:"Restablecer progreso",audio:"Audio",music:"Música",musicHint:"Tema del menú de Daniel Schultes",musicVolume:"Volumen de música",sound:"Sonido",soundHint:"Viento, ambiente y efectos",soundVolume:"Volumen de sonido",headphoneHint:"Mejor con auriculares."},hL={title:"¿Borrar de verdad tu partida?",text:"Se perderán todos los puntos, lugares, mejoras y POIs descubiertos. Empezarás en <strong>Tenerife Nord</strong> con el avión básico.",warn:"Esta acción no se puede deshacer.",cancel:"Cancelar",confirm:"Restablecer"},fL={eyebrow:"Isla",archTitle:"Islas Canarias",legendSpawn:"Inicio",legendDiscovered:"Descubierto",legendLocked:"Desconocido",hintDefault:"Toca un punto de inicio para empezar ahí.",hintNone:"Aterriza en un aeropuerto para desbloquearlo como punto de inicio.",hintProgress:"{landed} / {total} aeropuertos desbloqueados. Toca un punto de inicio.",hintAll:"Todos los aeropuertos desbloqueados. Toca un punto de inicio.",markerLocked:"???",tipStart:"Empezar en {id}",tipNotLanded:"{id} — aún sin aterrizar",tipUndiscovered:"Aún sin descubrir"},pL={title:"Aviso legal",provider:"Proveedor",contact:"Contacto",privacy:"Privacidad",privacyLink:"Abrir la política de privacidad",linksLiability:"Responsabilidad de los enlaces",linksText:"Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por estos contenidos ajenos. Del contenido de las páginas enlazadas es siempre responsable el respectivo proveedor u operador de dichas páginas.",footer:"Swiss Innovation Studios · 2026"},mL={title:"Licencias de código abierto",intro:"Teide incluye los siguientes componentes de código abierto. Los textos completos de las licencias están abajo y se incluyen en la app.",audioTitle:"Audio — sonido y música",audioCredit:"Efectos de sonido de Pixabay, usados bajo la Licencia de Contenido de Pixabay. Música compuesta por Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},gL={title:"Gira tu dispositivo",sub:"Teide se juega en modo horizontal"},vL={title:"Modo de prueba",prompt:"Introduce el PIN",wrong:"PIN incorrecto",cancel:"Cancelar",confirm:"OK"},yL={drag:{label:"Aerodinámica",desc:"Pliegues más limpios — menos resistencia, planeo más largo."},maxSpeed:{label:"Velocidad máx",desc:"Aumenta la velocidad máxima de crucero."},speedFromPitch:{label:"Picado",desc:"Más aceleración en picado — la altura se convierte en velocidad."},stallSpeed:{label:"Estabilidad",desc:"Umbral de pérdida más bajo — perdona el vuelo lento."},takeoffSpeed:{label:"Pista",desc:"Aceleración de despegue más rápida — menos carrera."},brake:{label:"Aerofreno",desc:"Desbloquea los alerones de freno (Espacio en vuelo)."},greyBoost:{label:"Boost de reserva",desc:"Empuje de emergencia más fuerte: más duración, más impulso, recarga más rápida."}},xL={pickLanguage:"Elige tu idioma",welcome:"Bienvenido a las Canarias",story:["Has plegado el avión de papel perfecto y lo has lanzado desde las laderas del Teide. Ahora cabalga las térmicas y planea sobre las Islas Canarias.","Aprovecha las corrientes ascendentes para mantenerte en el aire, atraviesa puntos de interés para recoger lugares y aterriza en las pistas para desbloquearlas como nuevos puntos de partida.","Aterrizar es seguir avanzando: cada toma de tierra recarga tu propulsor para el siguiente salto. Alinéate con una pista y posa con suavidad.","Gasta tus puntos en el hangar para mejorar tu avión y tu booster. Si planeas lo suficiente, nuevas islas quedan a tu alcance — desde La Gomera hasta Lanzarote. ¿Hasta dónde llegarás?"],next:"Siguiente",begin:"¡Vamos!"},_L={eyebrow:"Tutorial",skip:"Saltar",retry:"¡Otra vez!",done:"¡Listo, a volar!",launch:"Tira hacia abajo para despegar y planear",navLeft:"Ahora a la izquierda",navRight:"Ahora a la derecha",navUp:"Ahora sube",navDown:"Ahora baja",rings:"Atraviesa los dos aros ({collected}/{total})",boost:"Mantén el boost para un empujón",thermal:"Dirígete a la corriente ascendente para ganar altura",ringHigh:"Aprovecha la altura — atrapa el aro alto",ringLow:"Ahora baja de nuevo — por el aro bajo",invertHint:"¿Subir va al revés? Cámbialo.",steerHint:"Dirige aquí",endTitle:"¡Listo para planear!",endBody:"Explora las Islas Canarias y atraviesa aros para reunir lugares. Reúne suficientes y tu boost One-Shot te lleva a la siguiente isla. ¿Hasta dónde planeas?",endGo:"¡Vamos!"},bL={loading:QR,a11y:eL,hud:tL,booster:nL,menu:iL,welcome:sL,pause:oL,crash:rL,hangar:aL,obsidian:cL,skins:lL,shop:uL,settings:dL,reset:hL,levels:fL,imprint:pL,licenses:mL,portrait:gL,testpin:vL,upgrades:yL,onboarding:xL,tutorial:_L},SL={sub:"Construction du monde…",hint:"Avec des réglages de qualité élevés, cela peut prendre quelques secondes."},ML={pause:"Pause",map:"Carte",close:"Fermer",landings:"Atterrissages",brake:"Frein",oneShot:"One-Shot",boost:"Boost",sell:"Vendre pour {cost} points"},wL={lift:"Ascendance",soon:"bientôt",hintNormal:"↑ ↓ Tangage · ← → Roulis · Espace Frein · Maj Boost · F One-Shot",hintNormalTouch:"Piloter au joystick · Droite Boost / Frein / One-Shot",hintPrelaunch:"Tire vers le bas pour décoller",hintPrelaunchGyro:"Appuie sur boost pour décoller",hintTakeoff:"Roulage au décollage…",landingToast:"Atterri ! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nouvelle île découverte !",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Pose-toi à l'aéroport indiqué pour recharger tes boosters et gagner des points bonus.",airportUnlockTitle:"Aéroport débloqué !",airportUnlockBody:"Réapparais à {name} quand tu veux depuis le menu Niveaux.",airportUnlocked:"{name} débloqué",wrongApproach:"Mauvais côté d'approche — aligne-toi depuis l'autre bout."},EL={names:["Aucun Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 débloqué","Booster Niveau 2 débloqué — La Gomera à portée","Booster Niveau 3 débloqué — Gran Canaria à portée","Booster Niveau MAX débloqué — Fuerteventura / Lanzarote"]},TL={start:"Démarrer",startSubDefault:"Dernier checkpoint",levels:"Niveaux",levelsSub:"Choisir un aéroport",hangar:"Hangar",hangarSub:"Améliorations et statut",shop:"Boutique",shopSub:"Obsidienne et designs",settings:"Réglages",settingsSub:"Graphismes et performances",imprint:"Mentions légales",licenses:"Licences"},AL={checkpoint:"Checkpoint · {id}",firstFlight:"Premier vol · TFN"},RL={title:"Pause",resume:"Reprendre le vol",home:"Menu principal"},LL={title:"Atterrissage manqué",restart:"Redécoller",hint:"Barre d'espace",hangar:"Hangar",shop:"Boutique"},CL={title:"Hangar",points:"Points",locations:"Lieux",obsidian:"Obsidienne",highscore:"Record",plane:"Avion",dragToRotate:"Glisser pour tourner",upgrades:"Améliorations",booster:"Booster",selectUpgrade:"Touche une amélioration pour voir sa description.",buy:"Acheter · {cost}",buyObsidian:"Obsidienne · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Ton niveau de boost augmente automatiquement quand tu découvres assez de lieux. Survole de nouveaux POI pour améliorer ton boost One-Shot.",equip:"Équiper",equipped:"Équipé",comingSoon:"Bientôt",getDiamonds:"Obtenir de l'obsidienne →",skinPrev:"Design précédent",skinNext:"Design suivant"},PL={title:"Payer avec de l'obsidienne ?",text:"Cette amélioration coûte <strong></strong>.",warn:"L'obsidienne s'achète avec de l'argent réel. Touche <em>Confirmer</em> seulement si tu veux vraiment dépenser de l'obsidienne.",cancel:"Annuler",confirm:"Confirmer",spendSkin:"Tu dépenses {obsidian} pour le design {label}."},IL={default:{name:"Papier",desc:"Le pliage classique."},charcoal:{name:"Anthracite",desc:"Une livrée ardoise mate — méritée par les explorateurs."},gold:{name:"Or",desc:"Une livrée premium étincelante."},comingSoon:{name:"Bientôt plus",desc:"De nouveaux designs arrivent."}},NL={intro:"L'obsidienne débloque des designs dans le hangar et des améliorations instantanées.",bonus:"+{pct}%",badgePopular:"Populaire",badgeValue:"Meilleur prix",granted:"+ {amount} obsidienne ajoutée",restore:"Restaurer les achats",restored:"Achats restaurés",viewSkins:"Voir les designs →",disclosure:"L'obsidienne et les designs sont stockés sur cet appareil.",watchAd:"Regarder une vidéo",adsLeftToday:"{count}/{cap} aujourd'hui",adsCapReached:"Reviens demain",removeAds:"Supprimer les pubs",removeAdsOwned:"Pubs supprimées"},DL={title:"Réglages",quality:"Qualité graphique",presetLow:"Faible",presetStandard:"Standard",presetHigh:"Élevée",presetUltra:"Ultra",advanced:"Avancé",meshRes:"Résolution du maillage",meshHint:"Segments · 100–3000",vegSamples:"Échantillons de végétation",vegHint:"10 000–10 000 000",restartNote:"Les changements nécessitent un redémarrage. L'application rechargera la page.",cancel:"Annuler",apply:"Appliquer et recharger",language:"Langue",controls:"Commandes",invertPitch:"Commandes de vol inversées",invertPitchHint:"Tirez vers le bas pour monter",gyroControl:"Pilotage par inclinaison",gyroControlHint:"Inclinez l'appareil pour diriger",gyroSensitivity:"Sensibilité",gyroRecalibrate:"Recalibrer",tutorial:"Tutoriel",replayTutorial:"Revoir le tutoriel",dangerZone:"Zone de danger",dangerDesc:"Réinitialise toute la progression : points, lieux, améliorations, POI découverts, aéroports et checkpoint. Les réglages graphiques sont conservés.",resetSave:"Réinitialiser la progression",audio:"Audio",music:"Musique",musicHint:"Thème du menu par Daniel Schultes",musicVolume:"Volume de la musique",sound:"Son",soundHint:"Vent, ambiance et effets",soundVolume:"Volume du son",headphoneHint:"Idéal au casque."},UL={title:"Vraiment supprimer ta sauvegarde ?",text:"Tous les points, lieux, améliorations et POI découverts seront perdus. Tu recommenceras à <strong>Tenerife Nord</strong> avec l'avion de base.",warn:"Cette action est irréversible.",cancel:"Annuler",confirm:"Réinitialiser"},OL={eyebrow:"Île",archTitle:"Îles Canaries",legendSpawn:"Départ",legendDiscovered:"Découvert",legendLocked:"Inconnu",hintDefault:"Touche un point de départ pour commencer là.",hintNone:"Atterris dans un aéroport pour le débloquer comme point de départ.",hintProgress:"{landed} / {total} aéroports débloqués. Touche un point de départ.",hintAll:"Tous les aéroports débloqués. Touche un point de départ.",markerLocked:"???",tipStart:"Démarrer à {id}",tipNotLanded:"{id} — pas encore atterri",tipUndiscovered:"Pas encore découvert"},kL={title:"Mentions légales",provider:"Fournisseur",contact:"Contact",privacy:"Confidentialité",privacyLink:"Ouvrir la politique de confidentialité",linksLiability:"Responsabilité des liens",linksText:"Notre offre contient des liens vers des sites web externes de tiers dont nous ne pouvons pas influencer le contenu. Nous déclinons donc toute responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant des pages liées est toujours responsable de leur contenu.",footer:"Swiss Innovation Studios · 2026"},FL={title:"Licences open source",intro:"Teide inclut les composants open source suivants. Les textes complets des licences figurent ci-dessous et sont inclus dans l'application.",audioTitle:"Audio — son et musique",audioCredit:"Effets sonores de Pixabay, utilisés sous la licence de contenu Pixabay. Musique composée par Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},zL={title:"Tourne ton appareil",sub:"Teide se joue en mode paysage"},BL={title:"Mode test",prompt:"Saisir le code PIN",wrong:"Code PIN incorrect",cancel:"Annuler",confirm:"OK"},HL={drag:{label:"Aérodynamique",desc:"Pliage plus net — moins de traînée, vol plané plus long."},maxSpeed:{label:"Vitesse max",desc:"Augmente la vitesse de croisière maximale."},speedFromPitch:{label:"Piqué",desc:"Plus d'accélération en piqué — l'altitude devient de la vitesse."},stallSpeed:{label:"Stabilité",desc:"Seuil de décrochage plus bas — pardonne le vol lent."},takeoffSpeed:{label:"Piste",desc:"Accélération au décollage plus rapide — moins de roulage."},brake:{label:"Aérofrein",desc:"Débloque les volets de frein (Espace en vol)."},greyBoost:{label:"Boost de réserve",desc:"Poussée d'urgence plus forte : combustion plus longue, plus de poussée, recharge plus rapide."}},GL={pickLanguage:"Choisis ta langue",welcome:"Bienvenue aux Canaries",story:["Tu as plié l'avion en papier parfait et tu l'as lancé depuis les pentes du Teide. Chevauche maintenant les thermiques et plane au-dessus des îles Canaries.","Capte les courants ascendants pour rester en l'air, traverse des points d'intérêt pour récolter des lieux et pose-toi sur les pistes pour les débloquer comme nouveaux points de départ.","Se poser, c'est continuer : chaque atterrissage recharge ton booster pour le prochain saut. Aligne-toi sur une piste et pose-toi en douceur.","Dépense tes points au hangar pour améliorer ton avion et ton booster. Plane assez loin et de nouvelles îles deviennent accessibles — de La Gomera jusqu'à Lanzarote. Jusqu'où iras-tu ?"],next:"Suivant",begin:"C'est parti !"},VL={eyebrow:"Tutoriel",skip:"Passer",retry:"Réessaie !",done:"Prêt — c'est parti !",launch:"Tire vers le bas pour décoller et planer",navLeft:"Maintenant à gauche",navRight:"Maintenant à droite",navUp:"Maintenant monte",navDown:"Maintenant descends",rings:"Traverse les deux anneaux ({collected}/{total})",boost:"Maintiens le boost pour une accélération",thermal:"Dirige-toi vers l'ascendance pour prendre de l'altitude",ringHigh:"Profite de l'altitude — attrape l'anneau haut",ringLow:"Maintenant redescends — par l'anneau bas",invertHint:"Monter à l'envers ? Inverse-le.",steerHint:"Pilote ici",endTitle:"Prêt à planer !",endBody:"Explore les îles Canaries et traverse des anneaux pour collecter des lieux. Réunis-en assez et ton boost One-Shot t'emmène à l'île suivante. Jusqu'où planeras-tu ?",endGo:"C'est parti !"},WL={loading:SL,a11y:ML,hud:wL,booster:EL,menu:TL,welcome:AL,pause:RL,crash:LL,hangar:CL,obsidian:PL,skins:IL,shop:NL,settings:DL,reset:UL,levels:OL,imprint:kL,licenses:FL,portrait:zL,testpin:BL,upgrades:HL,onboarding:GL,tutorial:VL},qL={sub:"Costruzione del mondo…",hint:"Con impostazioni di qualità elevate può richiedere alcuni secondi."},XL={pause:"Pausa",map:"Mappa",close:"Chiudi",landings:"Atterraggi",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vendi per {cost} punti"},$L={lift:"Ascendenza",soon:"presto",hintNormal:"↑ ↓ Beccheggio · ← → Rollio · Spazio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Guida col joystick · Destra Boost / Freno / One-Shot",hintPrelaunch:"Tira giù per decollare",hintPrelaunchGyro:"Tocca boost per decollare",hintTakeoff:"Rullaggio al decollo…",landingToast:"Atterrato! · {id}",landingBonus:"+ {bonus} pti",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nuova isola scoperta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Atterra all'aeroporto segnalato per ricaricare i propulsori e guadagnare punti extra.",airportUnlockTitle:"Aeroporto sbloccato!",airportUnlockBody:"Riparti da {name} quando vuoi dal menu Livelli.",airportUnlocked:"{name} sbloccato",wrongApproach:"Lato di avvicinamento sbagliato: allineati dall'altra estremità."},jL={names:["Nessun Booster","Booster Livello 1","Booster Livello 2","Booster Livello 3","Booster Livello MAX"],unlock:["","Booster Livello 1 sbloccato","Booster Livello 2 sbloccato — La Gomera a portata","Booster Livello 3 sbloccato — Gran Canaria a portata","Booster Livello MAX sbloccato — Fuerteventura / Lanzarote"]},YL={start:"Inizia",startSubDefault:"Ultimo checkpoint",levels:"Livelli",levelsSub:"Scegli aeroporto",hangar:"Hangar",hangarSub:"Potenziamenti e stato",shop:"Negozio",shopSub:"Ossidiana e design",settings:"Impostazioni",settingsSub:"Grafica e prestazioni",imprint:"Note legali",licenses:"Licenze"},ZL={checkpoint:"Checkpoint · {id}",firstFlight:"Primo volo · TFN"},KL={title:"Pausa",resume:"Riprendi volo",home:"Menu principale"},JL={title:"Atterraggio di fortuna",restart:"Decolla di nuovo",hint:"Barra spaziatrice",hangar:"Hangar",shop:"Negozio"},QL={title:"Hangar",points:"Punti",locations:"Luoghi",obsidian:"Ossidiana",highscore:"Record",plane:"Aereo",dragToRotate:"Trascina per ruotare",upgrades:"Potenziamenti",booster:"Booster",selectUpgrade:"Tocca un potenziamento per vederne la descrizione.",buy:"Acquista · {cost}",buyObsidian:"Ossidiana · {cost}",max:"Max",level:"Livello {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Il tuo livello di boost aumenta automaticamente quando scopri abbastanza luoghi. Attraversa nuovi POI per migliorare il tuo boost One-Shot.",equip:"Equipaggia",equipped:"Equipaggiato",comingSoon:"In arrivo",getDiamonds:"Ottieni ossidiana →",skinPrev:"Design precedente",skinNext:"Design successivo"},eC={title:"Pagare con l'ossidiana?",text:"Questo potenziamento costa <strong></strong>.",warn:"L'ossidiana si acquista con denaro reale. Tocca <em>Conferma</em> solo se vuoi davvero spendere ossidiana.",cancel:"Annulla",confirm:"Conferma",spendSkin:"Stai spendendo {obsidian} per il design {label}."},tC={default:{name:"Carta",desc:"La piega classica."},charcoal:{name:"Antracite",desc:"Una livrea ardesia opaca — guadagnata dagli esploratori."},gold:{name:"Oro",desc:"Una scintillante livrea premium."},comingSoon:{name:"Altri presto",desc:"Nuovi design in arrivo."}},nC={intro:"L'ossidiana sblocca design nell'hangar e potenziamenti istantanei.",bonus:"+{pct}%",badgePopular:"Popolare",badgeValue:"Miglior valore",granted:"+ {amount} ossidiana aggiunta",restore:"Ripristina acquisti",restored:"Acquisti ripristinati",viewSkins:"Vedi i design →",disclosure:"Ossidiana e design sono salvati su questo dispositivo.",watchAd:"Guarda un video",adsLeftToday:"{count}/{cap} oggi",adsCapReached:"Torna domani",removeAds:"Rimuovi annunci",removeAdsOwned:"Annunci rimossi"},iC={title:"Impostazioni",quality:"Qualità grafica",presetLow:"Bassa",presetStandard:"Standard",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzate",meshRes:"Risoluzione mesh",meshHint:"Segments · 100–3000",vegSamples:"Campioni vegetazione",vegHint:"10.000–10.000.000",restartNote:"Le modifiche richiedono un riavvio. Applicando, la pagina verrà ricaricata.",cancel:"Annulla",apply:"Applica e ricarica",language:"Lingua",controls:"Comandi",invertPitch:"Comandi di volo invertiti",invertPitchHint:"Tira giù per salire",gyroControl:"Controllo a inclinazione",gyroControlHint:"Inclina il dispositivo per virare",gyroSensitivity:"Sensibilità",gyroRecalibrate:"Ricalibra",tutorial:"Tutorial",replayTutorial:"Ripeti tutorial",dangerZone:"Zona pericolo",dangerDesc:"Reimposta tutti i progressi: punti, luoghi, potenziamenti, POI scoperti, aeroporti e checkpoint. Le impostazioni grafiche vengono mantenute.",resetSave:"Reimposta progressi",audio:"Audio",music:"Musica",musicHint:"Tema del menu di Daniel Schultes",musicVolume:"Volume musica",sound:"Suono",soundHint:"Vento, ambiente ed effetti",soundVolume:"Volume suoni",headphoneHint:"Meglio con le cuffie."},sC={title:"Vuoi davvero eliminare il salvataggio?",text:"Tutti i punti, i luoghi, i potenziamenti e i POI scoperti andranno persi. Ripartirai da <strong>Tenerife Nord</strong> con l'aereo base.",warn:"Questa azione non può essere annullata.",cancel:"Annulla",confirm:"Reimposta"},oC={eyebrow:"Isola",archTitle:"Isole Canarie",legendSpawn:"Partenza",legendDiscovered:"Scoperto",legendLocked:"Sconosciuto",hintDefault:"Tocca un punto di partenza per iniziare lì.",hintNone:"Atterra in un aeroporto per sbloccarlo come punto di partenza.",hintProgress:"{landed} / {total} aeroporti sbloccati. Tocca un punto di partenza.",hintAll:"Tutti gli aeroporti sbloccati. Tocca un punto di partenza.",markerLocked:"???",tipStart:"Parti da {id}",tipNotLanded:"{id} — non ancora atterrato",tipUndiscovered:"Non ancora scoperto"},rC={title:"Note legali",provider:"Fornitore",contact:"Contatto",privacy:"Privacy",privacyLink:"Apri l'informativa sulla privacy",linksLiability:"Responsabilità per i link",linksText:"La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto non possiamo assumerci alcuna responsabilità per tali contenuti di terzi. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore delle pagine.",footer:"Swiss Innovation Studios · 2026"},aC={title:"Licenze open source",intro:"Teide include i seguenti componenti open source. I testi completi delle licenze sono qui sotto e inclusi nell'app.",audioTitle:"Audio — suoni e musica",audioCredit:"Effetti sonori da Pixabay, usati con la Licenza dei Contenuti Pixabay. Musica composta da Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},cC={title:"Ruota il dispositivo",sub:"Teide si gioca in modalità orizzontale"},lC={title:"Modalità test",prompt:"Inserisci il PIN",wrong:"PIN errato",cancel:"Annulla",confirm:"OK"},uC={drag:{label:"Aerodinamica",desc:"Pieghe più lisce — meno resistenza, planata più lunga."},maxSpeed:{label:"Velocità max",desc:"Aumenta la velocità di crociera massima."},speedFromPitch:{label:"Picchiata",desc:"Più accelerazione in picchiata — la quota diventa velocità."},stallSpeed:{label:"Stabilità",desc:"Soglia di stallo più bassa — perdona il volo lento."},takeoffSpeed:{label:"Pista",desc:"Accelerazione al decollo più rapida — meno rullaggio."},brake:{label:"Aerofreno",desc:"Sblocca gli alettoni freno (Spazio in volo)."},greyBoost:{label:"Boost di riserva",desc:"Spinta d'emergenza più forte: combustione più lunga, più spinta, ricarica più rapida."}},dC={pickLanguage:"Scegli la lingua",welcome:"Benvenuto alle Canarie",story:["Hai piegato il perfetto aeroplanino di carta e lo hai lanciato dai pendii del Teide. Ora cavalca le termiche e plana sulle Isole Canarie.","Sfrutta le correnti ascensionali per restare in volo, attraversa i punti d'interesse per raccogliere i luoghi e atterra sulle piste per sbloccarle come nuovi punti di partenza.","Atterrare significa proseguire: ogni atterraggio ricarica il tuo propulsore per il salto successivo. Allineati a una pista e posati con delicatezza.","Spendi i tuoi punti nell'hangar per potenziare aereo e booster. Plana abbastanza lontano e nuove isole entrano nel raggio — da La Gomera fino a Lanzarote. Fin dove arriverai?"],next:"Avanti",begin:"Si parte!"},hC={eyebrow:"Tutorial",skip:"Salta",retry:"Riprova!",done:"Pronto — si vola!",launch:"Tira giù per decollare e planare",navLeft:"Ora a sinistra",navRight:"Ora a destra",navUp:"Ora sali",navDown:"Ora scendi",rings:"Attraversa entrambi gli anelli ({collected}/{total})",boost:"Tieni premuto il boost per uno scatto",thermal:"Punta verso la corrente ascensionale per guadagnare quota",ringHigh:"Sfrutta la quota — prendi l'anello alto",ringLow:"Ora ridiscendi — attraverso l'anello basso",invertHint:"Salire sembra al contrario? Invertilo.",steerHint:"Guida qui",endTitle:"Pronto a planare!",endBody:"Esplora le Canarie e attraversa gli anelli per raccogliere luoghi. Raccogline a sufficienza e il tuo boost One-Shot ti porta all'isola successiva. Fin dove plani?",endGo:"Si vola!"},fC={loading:qL,a11y:XL,hud:$L,booster:jL,menu:YL,welcome:ZL,pause:KL,crash:JL,hangar:QL,obsidian:eC,skins:tC,shop:nC,settings:iC,reset:sC,levels:oC,imprint:rC,licenses:aC,portrait:cC,testpin:lC,upgrades:uC,onboarding:dC,tutorial:hC},pC={sub:"Wereld wordt gebouwd…",hint:"Bij hogere kwaliteitsinstellingen kan dit enkele seconden duren."},mC={pause:"Pauze",map:"Kaart",close:"Sluiten",landings:"Landingen",brake:"Rem",oneShot:"One-Shot",boost:"Boost",sell:"Verkopen voor {cost} punten"},gC={lift:"Lift",soon:"binnenkort",hintNormal:"↑ ↓ Pitch · ← → Rol · Spatie Rem · Shift Boost · F One-Shot",hintNormalTouch:"Stuur met joystick · Rechts Boost / Rem / One-Shot",hintPrelaunch:"Trek omlaag om te starten",hintPrelaunchGyro:"Tik op boost om op te stijgen",hintTakeoff:"Startrun…",landingToast:"Geland! · {id}",landingBonus:"+ {bonus} ptn",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nieuw eiland ontdekt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land op het gemarkeerde vliegveld om je boosters bij te vullen en bonuspunten te verdienen.",airportUnlockTitle:"Vliegveld ontgrendeld!",airportUnlockBody:"Start wanneer je wilt bij {name} via het menu Levels.",airportUnlocked:"{name} ontgrendeld",wrongApproach:"Verkeerde aanvliegzijde — kom van de andere kant."},vC={names:["Geen Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 ontgrendeld","Booster Niveau 2 ontgrendeld — La Gomera binnen bereik","Booster Niveau 3 ontgrendeld — Gran Canaria binnen bereik","Booster Niveau MAX ontgrendeld — Fuerteventura / Lanzarote"]},yC={start:"Start",startSubDefault:"Laatste checkpoint",levels:"Levels",levelsSub:"Kies vliegveld",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Winkel",shopSub:"Obsidiaan & designs",settings:"Instellingen",settingsSub:"Graphics & prestaties",imprint:"Colofon",licenses:"Licenties"},xC={checkpoint:"Checkpoint · {id}",firstFlight:"Eerste vlucht · TFN"},_C={title:"Pauze",resume:"Vlucht hervatten",home:"Hoofdmenu"},bC={title:"Crashlanding",restart:"Opnieuw opstijgen",hint:"Spatiebalk",hangar:"Hangar",shop:"Winkel"},SC={title:"Hangar",points:"Punten",locations:"Locaties",obsidian:"Obsidiaan",highscore:"Record",plane:"Vliegtuig",dragToRotate:"Sleep om te draaien",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tik op een upgrade om de beschrijving te zien.",buy:"Kopen · {cost}",buyObsidian:"Obsidiaan · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Je boostniveau stijgt automatisch zodra je genoeg locaties hebt ontdekt. Vlieg door nieuwe POI's om je One-Shot-boost te verbeteren.",equip:"Uitrusten",equipped:"Uitgerust",comingSoon:"Binnenkort",getDiamonds:"Obsidiaan halen →",skinPrev:"Vorig design",skinNext:"Volgend design"},MC={title:"Met obsidiaan betalen?",text:"Deze upgrade kost <strong></strong>.",warn:"Obsidiaan wordt met echt geld gekocht. Tik alleen op <em>Bevestigen</em> als je echt obsidiaan wilt uitgeven.",cancel:"Annuleren",confirm:"Bevestigen",spendSkin:"Je geeft {obsidian} uit aan het design {label}."},wC={default:{name:"Papier",desc:"De klassieke vouw."},charcoal:{name:"Antraciet",desc:"Een matte leikleurige livrei — verdiend door ontdekkers."},gold:{name:"Goud",desc:"Een glanzende premium livrei."},comingSoon:{name:"Binnenkort meer",desc:"Nieuwe designs zijn onderweg."}},EC={intro:"Obsidiaan ontgrendelt designs in de hangar en directe upgrades.",bonus:"+{pct}%",badgePopular:"Populair",badgeValue:"Beste waarde",granted:"+ {amount} obsidiaan toegevoegd",restore:"Aankopen herstellen",restored:"Aankopen hersteld",viewSkins:"Designs bekijken →",disclosure:"Obsidiaan en designs worden op dit apparaat bewaard.",watchAd:"Bekijk een video",adsLeftToday:"{count}/{cap} vandaag",adsCapReached:"Kom morgen terug",removeAds:"Advertenties verwijderen",removeAdsOwned:"Advertenties verwijderd"},TC={title:"Instellingen",quality:"Grafische kwaliteit",presetLow:"Laag",presetStandard:"Standaard",presetHigh:"Hoog",presetUltra:"Ultra",advanced:"Geavanceerd",meshRes:"Mesh-resolutie",meshHint:"Segments · 100–3000",vegSamples:"Vegetatie-samples",vegHint:"10.000–10.000.000",restartNote:"Wijzigingen vereisen een herstart. Bij toepassen wordt de pagina herladen.",cancel:"Annuleren",apply:"Toepassen & herladen",language:"Taal",controls:"Besturing",invertPitch:"Omgekeerde vluchtbesturing",invertPitchHint:"Trek omlaag om te klimmen",gyroControl:"Kantelbesturing",gyroControlHint:"Kantel je toestel om te sturen",gyroSensitivity:"Gevoeligheid",gyroRecalibrate:"Herkalibreren",tutorial:"Tutorial",replayTutorial:"Tutorial opnieuw",dangerZone:"Gevarenzone",dangerDesc:"Zet alle voortgang terug: punten, locaties, upgrades, ontdekte POI's, vliegvelden en checkpoint. Grafische instellingen blijven behouden.",resetSave:"Voortgang resetten",audio:"Audio",music:"Muziek",musicHint:"Menuthema van Daniel Schultes",musicVolume:"Muziekvolume",sound:"Geluid",soundHint:"Wind, sfeer en effecten",soundVolume:"Geluidsvolume",headphoneHint:"Het best met een koptelefoon."},AC={title:"Opslag echt verwijderen?",text:"Alle punten, locaties, upgrades en ontdekte plekken gaan verloren. Je begint op <strong>Tenerife Nord</strong> met het basisvliegtuig.",warn:"Deze actie kan niet ongedaan worden gemaakt.",cancel:"Annuleren",confirm:"Resetten"},RC={eyebrow:"Eiland",archTitle:"Canarische Eilanden",legendSpawn:"Start",legendDiscovered:"Ontdekt",legendLocked:"Onbekend",hintDefault:"Tik op een startpunt om daar te beginnen.",hintNone:"Land op een vliegveld om het als startpunt te ontgrendelen.",hintProgress:"{landed} / {total} vliegvelden ontgrendeld. Tik op een startpunt.",hintAll:"Alle vliegvelden ontgrendeld. Tik op een startpunt.",markerLocked:"???",tipStart:"Start bij {id}",tipNotLanded:"{id} — nog niet geland",tipUndiscovered:"Nog niet ontdekt"},LC={title:"Colofon",provider:"Aanbieder",contact:"Contact",privacy:"Privacy",privacyLink:"Privacybeleid openen",linksLiability:"Aansprakelijkheid voor links",linksText:"Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina's is steeds de betreffende aanbieder of beheerder van de pagina's verantwoordelijk.",footer:"Swiss Innovation Studios · 2026"},CC={title:"Opensource-licenties",intro:"Teide bevat de volgende opensourcecomponenten. De volledige licentieteksten staan hieronder en zijn bij de app gevoegd.",audioTitle:"Audio — geluid en muziek",audioCredit:"Geluidseffecten van Pixabay, gebruikt onder de Pixabay Content-licentie. Muziek gecomponeerd door Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},PC={title:"Draai je apparaat",sub:"Teide wordt in liggende stand gespeeld"},IC={title:"Testmodus",prompt:"Voer pincode in",wrong:"Onjuiste pincode",cancel:"Annuleren",confirm:"OK"},NC={drag:{label:"Aerodynamica",desc:"Strakkere vouwen — minder weerstand, langere glijvlucht."},maxSpeed:{label:"Topsnelheid",desc:"Verhoogt de maximale kruissnelheid."},speedFromPitch:{label:"Duikvlucht",desc:"Meer versnelling in een duik — hoogte wordt snelheid."},stallSpeed:{label:"Stabiliteit",desc:"Lagere overtreksnelheid — vergeeft langzaam vliegen."},takeoffSpeed:{label:"Startbaan",desc:"Snellere startversnelling — kortere startrun."},brake:{label:"Remklep",desc:"Ontgrendelt de remkleppen (Spatie tijdens de vlucht)."},greyBoost:{label:"Reserveboost",desc:"Sterkere noodstuwing: langere brandtijd, meer duwkracht, sneller bijvullen."}},DC={pickLanguage:"Kies je taal",welcome:"Welkom op de Canarische Eilanden",story:["Je hebt het perfecte papieren vliegtuigje gevouwen en het vanaf de hellingen van de Teide gelanceerd. Berijd nu de thermiek en zweef over de Canarische Eilanden.","Vang opstijgende lucht om in de lucht te blijven, duik door points of interest om locaties te verzamelen en land op startbanen om ze als nieuwe startpunten te ontgrendelen.","Landen is doorgaan: elke landing vult je booster aan voor de volgende sprong. Lijn uit met een baan en zet zacht neer.","Geef je punten uit in de hangar om je vliegtuig en booster te verbeteren. Zweef ver genoeg en nieuwe eilanden komen binnen bereik — van La Gomera tot Lanzarote. Hoe ver kom jij?"],next:"Volgende",begin:"Aan de slag!"},UC={eyebrow:"Tutorial",skip:"Overslaan",retry:"Opnieuw!",done:"Klaar — daar ga je!",launch:"Trek omlaag om op te stijgen en te zweven",navLeft:"Nu naar links",navRight:"Nu naar rechts",navUp:"Nu klimmen",navDown:"Nu dalen",rings:"Vlieg door beide ringen ({collected}/{total})",boost:"Houd boost vast voor een snelheidsstoot",thermal:"Stuur de opstijgwind in om hoogte te winnen",ringHigh:"Gebruik je hoogte — pak de hoge ring",ringLow:"Nu weer omlaag — door de lage ring",invertHint:"Klimmen omgekeerd? Wissel het om.",steerHint:"Hier sturen",endTitle:"Klaar om te zweven!",endBody:"Verken de Canarische Eilanden en vlieg door ringen om locaties te verzamelen. Verzamel er genoeg en je One-Shot-boost brengt je naar het volgende eiland. Hoe ver zweef jij?",endGo:"Daar gaan we"},OC={loading:pC,a11y:mC,hud:gC,booster:vC,menu:yC,welcome:xC,pause:_C,crash:bC,hangar:SC,obsidian:MC,skins:wC,shop:EC,settings:TC,reset:AC,levels:RC,imprint:LC,licenses:CC,portrait:PC,testpin:IC,upgrades:NC,onboarding:DC,tutorial:UC},kC={sub:"Budowanie świata…",hint:"Przy wyższych ustawieniach jakości może to potrwać kilka sekund."},FC={pause:"Pauza",map:"Mapa",close:"Zamknij",landings:"Lądowania",brake:"Hamulec",oneShot:"One-Shot",boost:"Boost",sell:"Sprzedaj za {cost} pkt"},zC={lift:"Wznoszenie",soon:"wkrótce",hintNormal:"↑ ↓ Pochylenie · ← → Przechył · Spacja Hamulec · Shift Boost · F One-Shot",hintNormalTouch:"Steruj joystickiem · Prawo Boost / Hamulec / One-Shot",hintPrelaunch:"Pociągnij w dół, aby wystartować",hintPrelaunchGyro:"Dotknij boost, aby wystartować",hintTakeoff:"Rozbieg…",landingToast:"Wylądowano! · {id}",landingBonus:"+ {bonus} pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Odkryto nową wyspę!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Wyląduj na oznaczonym lotnisku, aby naładować boostery i zdobyć dodatkowe punkty.",airportUnlockTitle:"Lotnisko odblokowane!",airportUnlockBody:"Startuj w {name} w dowolnej chwili z menu Poziomy.",airportUnlocked:"{name} odblokowane",wrongApproach:"Zła strona podejścia — podejdź z drugiej strony."},BC={names:["Brak Boostera","Booster Poziom 1","Booster Poziom 2","Booster Poziom 3","Booster Poziom MAX"],unlock:["","Booster Poziom 1 odblokowany","Booster Poziom 2 odblokowany — La Gomera w zasięgu","Booster Poziom 3 odblokowany — Gran Canaria w zasięgu","Booster Poziom MAX odblokowany — Fuerteventura / Lanzarote"]},HC={start:"Start",startSubDefault:"Ostatni checkpoint",levels:"Poziomy",levelsSub:"Wybierz lotnisko",hangar:"Hangar",hangarSub:"Ulepszenia i status",shop:"Sklep",shopSub:"Obsydian i wzory",settings:"Ustawienia",settingsSub:"Grafika i wydajność",imprint:"Nota prawna",licenses:"Licencje"},GC={checkpoint:"Checkpoint · {id}",firstFlight:"Pierwszy lot · TFN"},VC={title:"Pauza",resume:"Wznów lot",home:"Menu główne"},WC={title:"Rozbicie",restart:"Wystartuj ponownie",hint:"Spacja",hangar:"Hangar",shop:"Sklep"},qC={title:"Hangar",points:"Punkty",locations:"Miejsca",obsidian:"Obsydian",highscore:"Rekord",plane:"Samolot",dragToRotate:"Przeciągnij, aby obrócić",upgrades:"Ulepszenia",booster:"Booster",selectUpgrade:"Dotknij ulepszenia, aby zobaczyć opis.",buy:"Kup · {cost}",buyObsidian:"Obsydian · {cost}",max:"Maks",level:"Poziom {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Poziom boostera rośnie automatycznie, gdy odkryjesz wystarczająco wiele miejsc. Przelatuj przez nowe POI, aby ulepszyć swój boost One-Shot.",equip:"Załóż",equipped:"Założony",comingSoon:"Wkrótce",getDiamonds:"Zdobądź obsydian →",skinPrev:"Poprzedni wzór",skinNext:"Następny wzór"},XC={title:"Zapłacić obsydianem?",text:"To ulepszenie kosztuje <strong></strong>.",warn:"Obsydian kupuje się za prawdziwe pieniądze. Dotknij <em>Potwierdź</em> tylko, jeśli naprawdę chcesz wydać obsydian.",cancel:"Anuluj",confirm:"Potwierdź",spendSkin:"Wydajesz {obsidian} na wzór {label}."},$C={default:{name:"Papier",desc:"Klasyczne złożenie."},charcoal:{name:"Antracyt",desc:"Matowe łupkowe malowanie — dla odkrywców."},gold:{name:"Złoto",desc:"Lśniące malowanie premium."},comingSoon:{name:"Wkrótce więcej",desc:"Nowe wzory są w drodze."}},jC={intro:"Obsydian odblokowuje wzory w hangarze i natychmiastowe ulepszenia.",bonus:"+{pct}%",badgePopular:"Popularne",badgeValue:"Najlepsza oferta",granted:"+ {amount} obsydianu dodano",restore:"Przywróć zakupy",restored:"Zakupy przywrócone",viewSkins:"Zobacz wzory →",disclosure:"Obsydian i wzory są przechowywane na tym urządzeniu.",watchAd:"Obejrzyj film",adsLeftToday:"{count}/{cap} dziś",adsCapReached:"Wróć jutro",removeAds:"Usuń reklamy",removeAdsOwned:"Reklamy usunięte"},YC={title:"Ustawienia",quality:"Jakość grafiki",presetLow:"Niska",presetStandard:"Standard",presetHigh:"Wysoka",presetUltra:"Ultra",advanced:"Zaawansowane",meshRes:"Rozdzielczość siatki",meshHint:"Segments · 100–3000",vegSamples:"Próbki roślinności",vegHint:"10 000–10 000 000",restartNote:"Zmiany wymagają ponownego uruchomienia. Po zastosowaniu strona zostanie przeładowana.",cancel:"Anuluj",apply:"Zastosuj i przeładuj",language:"Język",controls:"Sterowanie",invertPitch:"Odwrócone sterowanie lotem",invertPitchHint:"Pociągnij w dół, aby się wznosić",gyroControl:"Sterowanie przechyłem",gyroControlHint:"Przechylaj urządzenie, aby sterować",gyroSensitivity:"Czułość",gyroRecalibrate:"Kalibruj ponownie",tutorial:"Samouczek",replayTutorial:"Powtórz samouczek",dangerZone:"Strefa zagrożenia",dangerDesc:"Resetuje cały postęp: punkty, miejsca, ulepszenia, odkryte POI, lotniska i checkpoint. Ustawienia grafiki zostają zachowane.",resetSave:"Zresetuj postęp",audio:"Audio",music:"Muzyka",musicHint:"Motyw menu: Daniel Schultes",musicVolume:"Głośność muzyki",sound:"Dźwięk",soundHint:"Wiatr, tło i efekty",soundVolume:"Głośność dźwięku",headphoneHint:"Najlepiej na słuchawkach."},ZC={title:"Na pewno usunąć zapis?",text:"Wszystkie punkty, miejsca, ulepszenia i odkryte POI przepadną. Zaczniesz na <strong>Tenerife Nord</strong> podstawowym samolotem.",warn:"Tej operacji nie można cofnąć.",cancel:"Anuluj",confirm:"Resetuj"},KC={eyebrow:"Wyspa",archTitle:"Wyspy Kanaryjskie",legendSpawn:"Start",legendDiscovered:"Odkryte",legendLocked:"Nieznane",hintDefault:"Dotknij punktu startu, aby tam zacząć.",hintNone:"Wyląduj na lotnisku, aby odblokować je jako punkt startu.",hintProgress:"{landed} / {total} lotnisk odblokowanych. Dotknij punktu startu.",hintAll:"Wszystkie lotniska odblokowane. Dotknij punktu startu.",markerLocked:"???",tipStart:"Start na {id}",tipNotLanded:"{id} — jeszcze nie wylądowano",tipUndiscovered:"Jeszcze nieodkryte"},JC={title:"Nota prawna",provider:"Dostawca",contact:"Kontakt",privacy:"Prywatność",privacyLink:"Otwórz politykę prywatności",linksLiability:"Odpowiedzialność za linki",linksText:"Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treść nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator.",footer:"Swiss Innovation Studios · 2026"},QC={title:"Licencje open source",intro:"Teide zawiera następujące komponenty open source. Pełne teksty licencji znajdują się poniżej i są dołączone do aplikacji.",audioTitle:"Audio — dźwięk i muzyka",audioCredit:"Efekty dźwiękowe z Pixabay, na licencji Pixabay Content License. Muzykę skomponował Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},eP={title:"Obróć urządzenie",sub:"W Teide gra się w trybie poziomym"},tP={title:"Tryb testowy",prompt:"Wpisz PIN",wrong:"Błędny PIN",cancel:"Anuluj",confirm:"OK"},nP={drag:{label:"Aerodynamika",desc:"Gładsze złożenia — mniejszy opór, dłuższy lot ślizgowy."},maxSpeed:{label:"Prędkość maks.",desc:"Zwiększa maksymalną prędkość przelotową."},speedFromPitch:{label:"Nurkowanie",desc:"Większe przyspieszenie w nurkowaniu — wysokość zamienia się w prędkość."},stallSpeed:{label:"Stabilność",desc:"Niższy próg przeciągnięcia — wybacza wolny lot."},takeoffSpeed:{label:"Pas startowy",desc:"Szybsze przyspieszenie przy starcie — krótszy rozbieg."},brake:{label:"Hamulec aerodynamiczny",desc:"Odblokowuje klapy hamujące (Spacja w locie)."},greyBoost:{label:"Boost rezerwowy",desc:"Mocniejszy ciąg awaryjny: dłuższe spalanie, większy napęd, szybsze ładowanie."}},iP={pickLanguage:"Wybierz język",welcome:"Witaj na Wyspach Kanaryjskich",story:["Złożyłeś idealny papierowy samolot i wypuściłeś go ze zboczy Teide. Teraz ujeżdżaj kominy termiczne i szybuj nad Wyspami Kanaryjskimi.","Łap prądy wznoszące, aby utrzymać się w powietrzu, przelatuj przez punkty zainteresowania, aby zbierać miejsca, i ląduj na pasach, aby odblokować je jako nowe punkty startu.","Lądowanie pozwala lecieć dalej: każde lądowanie ładuje twój booster na kolejny skok. Wyrównaj do pasa i wyląduj łagodnie.","Wydawaj punkty w hangarze, aby ulepszać samolot i booster. Szybuj wystarczająco daleko, a nowe wyspy znajdą się w zasięgu — od La Gomery po Lanzarote. Jak daleko dolecisz?"],next:"Dalej",begin:"Zaczynamy!"},sP={eyebrow:"Samouczek",skip:"Pomiń",retry:"Jeszcze raz!",done:"Gotowe — lecimy!",launch:"Pociągnij w dół, aby wystartować i szybować",navLeft:"Teraz w lewo",navRight:"Teraz w prawo",navUp:"Teraz wznoś się",navDown:"Teraz opadaj",rings:"Przeleć przez oba pierścienie ({collected}/{total})",boost:"Przytrzymaj boost, by przyspieszyć",thermal:"Skieruj się w prąd wznoszący, aby nabrać wysokości",ringHigh:"Wykorzystaj wysokość — złap wysoki pierścień",ringLow:"Teraz w dół — przez niski pierścień",invertHint:"Wznoszenie na odwrót? Przełącz.",steerHint:"Steruj tutaj",endTitle:"Gotowy do szybowania!",endBody:"Odkrywaj Wyspy Kanaryjskie i przelatuj przez pierścienie, aby zbierać miejsca. Zbierz ich dość, a boost One-Shot zaniesie cię na kolejną wyspę. Jak daleko poszybujesz?",endGo:"Lecimy!"},oP={loading:kC,a11y:FC,hud:zC,booster:BC,menu:HC,welcome:GC,pause:VC,crash:WC,hangar:qC,obsidian:XC,skins:$C,shop:jC,settings:YC,reset:ZC,levels:KC,imprint:JC,licenses:QC,portrait:eP,testpin:tP,upgrades:nP,onboarding:iP,tutorial:sP},rP={en:LR,de:JR,es:bL,fr:WL,it:fC,nl:OC,pl:oP},Ga=["en","de","es","fr","it","nl","pl"],aP={en:{label:"English",flag:"🇬🇧"},de:{label:"Deutsch",flag:"🇩🇪"},es:{label:"Español",flag:"🇪🇸"},fr:{label:"Français",flag:"🇫🇷"},it:{label:"Italiano",flag:"🇮🇹"},nl:{label:"Nederlands",flag:"🇳🇱"},pl:{label:"Polski",flag:"🇵🇱"}};let Ni="en";const _h=new Set;function cP(){const e=(navigator.languages&&navigator.languages[0]||navigator.language||"en").slice(0,2).toLowerCase();return Ga.includes(e)?e:"en"}function lP(n){return n&&Ga.includes(n)?n:cP()}function ig(n,e){let t=rP[n];for(const i of e.split(".")){if(t==null)return;t=t[i]}return t}function we(n,e){let t=ig(Ni,n);return t===void 0&&Ni!=="en"&&(t=ig("en",n)),t===void 0?n:(typeof t!="string"||e&&(t=t.replace(/\{(\w+)\}/g,(i,s)=>s in e?String(e[s]):i)),t)}function uP(){return Ni}const dP={en:"en-GB",de:"de-DE",es:"es-ES",fr:"fr-FR",it:"it-IT",nl:"nl-NL",pl:"pl-PL"};function hy(){return dP[Ni]||"en-GB"}function hP(){const n=new URLSearchParams(window.location.search).get("lang");return Ni=n&&Ga.includes(n)?n:lP(ht().language),document.documentElement.lang=Ni,py(),Ni}function fy(n){if(!Ga.includes(n)||n===Ni)return;Ni=n,document.documentElement.lang=n;const e=ht();e.language=n,ni(e),py();for(const t of _h)try{t(n)}catch(i){console.warn("[i18n] listener failed",i)}}function xu(n){return _h.add(n),()=>_h.delete(n)}function py(n=document){n.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=we(e.dataset.i18n)}),n.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=we(e.dataset.i18nHtml)}),n.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",we(e.dataset.i18nAria))}),n.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=we(e.dataset.i18nTitle)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=we(e.dataset.i18nPlaceholder)})}function my(n,{onPick:e,active:t,flagsOnly:i=!1}={}){if(!n)return;n.innerHTML="";const s=t||uP();for(const o of Ga){const r=aP[o]||{label:o,flag:""},a=document.createElement("button");a.type="button",a.className="lang-chip"+(i?" lang-chip-flagsonly":"")+(o===s?" active":""),a.dataset.lang=o,a.setAttribute("aria-label",r.label),o===s&&a.setAttribute("aria-current","true"),a.innerHTML=i?`<span class="lang-chip-flag">${r.flag}</span>`:`<span class="lang-chip-flag">${r.flag}</span><span class="lang-chip-label">${r.label}</span>`,a.addEventListener("click",()=>e&&e(o)),n.appendChild(a)}}const fP=Math.PI/180,An={pitch:0,roll:0,isActive:!1};let Dl=!1,Ul=!1,gy=gn.sensDefault,sg=null,og=null,Pa=!0,Vo=0,Wo=0,Rf=!1;function pP(){return Rf}function mP(){Rf=!1}function gP(){return An}function vy(n){const e=Number(n);Number.isFinite(e)&&(gy=Math.max(gn.sensMin,Math.min(gn.sensMax,e)))}function _u(){Pa=!0}function vP(n){return((n+180)%360+360)%360-180}function yy(n){if(n.beta==null||n.gamma==null)return;if(Pa){sg=n.beta,og=n.gamma,Pa=!1,Vo=0,Wo=0,An.pitch=0,An.roll=0,An.isActive=!0;return}const e=vP(n.beta-sg),t=n.gamma-og,i=(typeof screen<"u"&&screen.orientation?screen.orientation.angle:window.orientation??0)*fP,s=Math.cos(i),o=Math.sin(i);let r=t*s+e*o,a=-t*o+e*s;const c=Math.max(1,gn.maxTiltDeg/gy),l=m=>{const v=Math.abs(m);if(v<=gn.deadZoneDeg)return 0;const y=Math.min(1,(v-gn.deadZoneDeg)/(c-gn.deadZoneDeg));return Math.sign(m)*y};let u=l(r),d=-l(a);const f=gn.smoothing;Wo+=(u-Wo)*f,Vo+=(d-Vo)*f,An.roll=Wo,An.pitch=Vo,An.isActive=!0,Rf=!0}function yP(){Ul||(window.addEventListener("deviceorientation",yy),Ul=!0)}function xP(){Ul&&(window.removeEventListener("deviceorientation",yy),Ul=!1)}async function _P(){const n=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(n&&typeof n.requestPermission=="function")try{return await n.requestPermission()==="granted"}catch{return!1}return!0}async function xy(){return Dl=!0,Pa=!0,An.isActive=!1,await _P()?(yP(),!0):(Dl=!1,!1)}function bP(){Dl=!1,xP(),An.pitch=0,An.roll=0,An.isActive=!1,Vo=0,Wo=0}function _y(){An.pitch=0,An.roll=0,Vo=0,Wo=0,Dl&&(Pa=!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&_y()});window.addEventListener("blur",_y);let Ol=NA();function by(){return Ol}function kl(n){Ol=!!n,DA(Ol)}let Ia=UA();vy(gf());function Lf(){return Ia}async function SP(n){const e=n==="gyro"?"gyro":"touch";return Ia=e,km(e),fl(e!=="gyro"),e==="gyro"?await xy()?!0:(Ia="touch",km("touch"),fl(!0),!1):(bP(),!0)}function MP(n){vy(n)}Ia==="gyro"&&(fl(!1),xy().then(n=>{n||fl(!0)}));let Sy=!1,My=!1,wy=!1;function Cf({brake:n=!1,boost:e=!1,oneShot:t=!1}={}){Sy=!!n,My=!!e,wy=!!t}function ho(){const n=qx(),e=Yx(),t=gP(),i=e.isActive,s=Ia==="gyro"&&t.isActive;let o,r;return i?(o=e.pitch,r=e.roll):s?(o=t.pitch,r=t.roll):(o=n.pitch,r=n.roll),Wn.pitch=Ol?o:-o,Wn.roll=r,Wn.brake=e.brake||n.brake,Wn.boost=e.boost||n.boost,Sy&&(Wn.brake=!1),My&&(Wn.boost=!1,lu()),wy&&$h(),Wn.isInputActive=n.isActive||e.isActive||s,$x()?(Wn.activeInputType="touch",jx()):pP()?(Wn.activeInputType="gyro",mP()):Wx()&&(Wn.activeInputType="keyboard",Vx()),Wn}function Ey(){const n=new lt,e=[],t=.32,i=.22,s=Math.atan2(.28,.95),o=new ut({color:Ze.paper,side:Zt,flatShading:!0}),r=new fu({color:Ze.ink,transparent:!0,opacity:.32});for(const a of[-.45,.45]){const c=new lt;c.position.set(a,.045,.05),c.rotation.z=a<0?s:-s;const l=new uo(t,i);l.translate(0,-i/2,0),l.rotateX(-Math.PI/2);const u=new tt(l,o),d=new _v(l);u.add(new fv(d,r)),c.add(u),n.add(c),e.push(u)}return{group:n,flaps:e}}const{group:wP,flaps:Ty}=Ey();he.add(wP);function EP(n){const e=ho().brake&&D.alive&&D.flightState===He.FLYING?1:0,t=1-Math.exp(-n/ll.deployTau);D.brakeAmount+=(e-D.brakeAmount)*t;const i=-D.brakeAmount*ll.maxAngle;for(const s of Ty)s.rotation.x=i}function TP(){D.brakeAmount=0;for(const n of Ty)n.rotation.x=0}function Ay(){const n=new lt,e=new ut({color:Ze.ink,flatShading:!0});function t(i,s,o,r){const a=new lt,c=new Hn(.018,.018,o,6);c.translate(0,-o/2,0),a.add(new tt(c,e));const l=new Hn(r,r,.04,12);return l.rotateZ(Math.PI/2),l.translate(0,-o,0),a.add(new tt(l,e)),a.position.set(i,-.05,s),a}return n.add(t(0,-.55,.11,.055)),n.add(t(-.42,.12,.12,.06)),n.add(t(.42,.12,.12,.06)),n}const io=Ay();io.scale.setScalar(.001);io.visible=!1;he.add(io);function AP(n){const e=jA(he.position,Xc.triggerDist,Xc.triggerHeight)?1:0,t=1-Math.exp(-n/Xc.deployTau);D.gearAmount+=(e-D.gearAmount)*t;const i=Math.max(.001,D.gearAmount);io.scale.setScalar(i),io.visible=D.gearAmount>.02}function RP(){D.gearAmount=1,io.scale.setScalar(1),io.visible=!0}const rg=new Te;let Kr=0;function Ry(){const n=new lt,e=[],t=St.exhaust;for(const i of[-.36,t.offsetX]){const s=new Hn(t.radiusNarrow,t.radiusWide,1,12,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,.5);const o=new Vn({color:16777215,transparent:!0,opacity:0,blending:ml,depthWrite:!1,side:Zt}),r=new tt(s,o);r.position.set(i,t.offsetY,t.offsetZ),r.scale.z=0,n.add(r),e.push(r)}return{group:n,streams:e}}const{group:LP,streams:Ly}=Ry();he.add(LP);function CP(){return D.oneShotActive?(St.oneShot.tiers[Ks()]||St.oneShot.tiers[0]).color:D.greyActive?St.grey.color:null}function PP(n){const e=St.exhaust,t=D.oneShotActive||D.greyActive?1:0,i=1-Math.exp(-n/Math.max(e.intensityTau,1e-4));Kr+=(t-Kr)*i;const s=CP();s!==null&&rg.setHex(s);for(const o of Ly)o.scale.z=e.length*Kr,o.material.opacity=.85*Kr,s!==null&&o.material.color.copy(rg)}function IP(){Kr=0;for(const n of Ly)n.scale.z=0,n.material.opacity=0}let as=null,ko=null,tr=null,Dt=null,ag=null,ca=null,bh=null,ks=null,la=null,Sh=null,Md=0,Pc=0,Ic=0,Wi=0;const cg=new Te;let nr=0,Mh=0,Qc=!1,ws=null,Fl=0,zl=0,Br=null,wh=null;const NP=.35;function DP(){if(as)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;as=new rf({canvas:n,antialias:!0,alpha:!0}),as.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ko=new dv;const e=new lh(16774368,.85);e.position.set(2.5,3,2),ko.add(e);const t=new lh(13229290,.45);t.position.set(-2,1.5,-2),ko.add(t),ko.add(new yA(16777215,.35)),tr=new Tn(28,1,.05,50),tr.position.set(0,.25,3.6),tr.lookAt(0,0,0),Dt=ey(),Dt.scale.setScalar(1.5),Dt.rotation.x=-.18,Dt.rotation.y=.55,ko.add(Dt);const i=Ey();ca=i.group,ca.visible=!1,Dt.add(ca),bh=i.flaps,ks=Ay(),ks.scale.setScalar(.001),ks.visible=!1,Dt.add(ks);const s=Ry();return la=s.group,la.visible=!1,Dt.add(la),Sh=s.streams,Py(),UP(n),ag=new ResizeObserver(lg),ag.observe(n),lg(),!0}function lg(){if(!as)return;const e=as.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));as.setSize(t,i,!1),tr.aspect=t/i,tr.updateProjectionMatrix()}function UP(n){n.addEventListener("pointerdown",t=>{Qc=!0,ws={px:t.clientX,py:t.clientY,rotX:Dt.rotation.x,rotY:Dt.rotation.y},Br={ts:performance.now(),px:t.clientX,py:t.clientY},Fl=0,zl=0,n.setPointerCapture(t.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",t=>{if(!Qc||!ws)return;const i=t.clientX-ws.px,s=t.clientY-ws.py;Dt.rotation.y=ws.rotY+i*.0085,Dt.rotation.x=ki.clamp(ws.rotX+s*.0085,-1.2,1.2);const o=performance.now(),r=Math.max(.001,(o-Br.ts)/1e3);zl=(t.clientX-Br.px)*.0085/r,Fl=(t.clientY-Br.py)*.0085/r,Br={ts:o,px:t.clientX,py:t.clientY}});const e=()=>{Qc=!1,ws=null,n.style.cursor="grab"};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("pointerleave",e),n.style.cursor="grab",n.style.touchAction="none"}function Cy(n){if(!as||!Dt)return;const e=Math.min(.05,(n-Mh)/1e3||0);Mh=n,Qc||(Fl*=.92,zl*=.92,Dt.rotation.y+=(zl+NP)*e,Dt.rotation.x=ki.clamp(Dt.rotation.x+Fl*e-Dt.rotation.x*.35*e,-1.2,1.2)),OP(e),as.render(ko,tr),nr=requestAnimationFrame(Cy)}function OP(n){Wi=(Wi+n)%Ar.cyclePeriod;const e=1-Math.exp(-n/Math.max(Ar.smoothTau,1e-4));if(ks){const t=te.testMode||(te.upgrades?.takeoffSpeed|0)>0,[i,s]=Ar.gearWindow,r=t&&Wi>=i&&Wi<=s?1:0,a=1-Math.exp(-n/Math.max(Xc.deployTau,1e-4));Ic+=(r-Ic)*a;const c=Math.max(.001,Ic);ks.scale.setScalar(c),ks.visible=t&&Ic>.02}if(bh&&ca){const t=au();ca.visible=t;const[i,s]=Ar.brakeWindow,r=t&&Wi>=i&&Wi<=s?1:0;Md+=(r-Md)*e;const a=-Md*ll.maxAngle;for(const c of bh)c.rotation.x=a}if(Sh&&la){const t=Ks(),i=St.oneShot.tiers[t]||St.oneShot.tiers[0];la.visible=t>0;const[s,o]=Ar.boostWindow,a=t>0&&Wi>=s&&Wi<=o?1:0;Pc+=(a-Pc)*e,cg.setHex(i.color||16777215);const c=St.exhaust;for(const l of Sh)l.scale.z=c.length*Pc,l.material.opacity=.85*Pc,l.material.color.copy(cg)}}function Py(){if(!Dt)return;const n=wh?wr(wh):ty();iy(Dt,n)}function kP(n){wh=n,Py()}function FP(){DP()&&(nr||(Mh=performance.now(),nr=requestAnimationFrame(Cy)))}function Iy(){nr&&(cancelAnimationFrame(nr),nr=0)}sR(()=>{Bn==="shop"&&fo()});const bu={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},ug=document.getElementById("garage-punkte"),dg=document.getElementById("garage-highscore"),hg=document.getElementById("garage-obsidian"),fg=document.getElementById("garage-gofios"),qo=document.getElementById("garage-upgrades"),wd=document.getElementById("garage-upgrade-info"),pg=document.getElementById("shop-obsidian"),mg=document.getElementById("hangar-skin-name"),zP=document.getElementById("hangar-skin-price"),BP=document.getElementById("hangar-skin-dots"),el=document.getElementById("hangar-skin-action"),HP=document.getElementById("hangar-skin-prev"),GP=document.getElementById("hangar-skin-next"),Eh=document.getElementById("hangar-skin-getdiamonds"),Fo=document.getElementById("shop-packs"),Th=document.getElementById("shop-restore"),Ed=document.getElementById("shop-extras"),tl=document.getElementById("shop-watch-ad"),gg=document.getElementById("shop-watch-ad-sub"),vg=document.getElementById("shop-watch-ad-reward"),nl=document.getElementById("shop-remove-ads"),yg=document.getElementById("shop-remove-ads-sub");let ui=0,Yn=null;const Bl="__booster__";let mn=null;const Ji=document.getElementById("obsidian-confirm"),xg=document.getElementById("obsidian-confirm-text"),VP=document.getElementById("obsidian-confirm-cancel"),WP=document.getElementById("obsidian-confirm-ok"),pr=document.getElementById("settings-segments"),mr=document.getElementById("settings-samples"),qP=document.getElementById("settings-apply"),XP=document.getElementById("settings-cancel"),$P=document.getElementById("settings-reset-save"),jP=document.getElementById("settings-langs"),Ci=document.getElementById("settings-invert-toggle");Ci&&Ci.addEventListener("change",()=>kl(Ci.checked));const ua=document.getElementById("settings-music-toggle"),da=document.getElementById("settings-music-vol"),ha=document.getElementById("settings-sfx-toggle"),fa=document.getElementById("settings-sfx-vol");ua&&ua.addEventListener("change",()=>{const n=!ua.checked;Cv(n),Zv(n)});ha&&ha.addEventListener("change",()=>{const n=!ha.checked;Iv(n),Kv(n)});da&&da.addEventListener("input",()=>{const n=parseFloat(da.value);FA(n),V1(n)});fa&&fa.addEventListener("input",()=>{const n=parseFloat(fa.value);BA(n),W1(n)});const _g=document.getElementById("settings-gyro-block"),pa=document.getElementById("settings-gyro-toggle"),Hl=document.getElementById("settings-gyro-tune"),gr=document.getElementById("settings-gyro-sens"),YP=document.getElementById("settings-gyro-sens-open"),Jn=document.getElementById("settings-gyro-advanced"),ZP=document.getElementById("settings-gyro-recalibrate"),vr=document.getElementById("settings-quality-slider"),Gl=document.getElementById("settings-quality-ticks"),Xo=document.getElementById("settings-quality-readout"),KP=document.getElementById("settings-advanced-open"),Qn=document.getElementById("settings-advanced"),Na=RA(),fi=document.getElementById("reset-confirm"),JP=document.getElementById("reset-confirm-cancel"),QP=document.getElementById("reset-confirm-ok");let Bn=null,hs=null,Pf=null;function e2(n){return we(`booster.names.${n}`)}function vn(n){return Math.round(n).toLocaleString(hy())}function yr(n,e={}){Jr();const t=bu[n];t&&(n==="hangar"&&(d2(),fs()),n==="shop"&&fo(),n==="settings"&&_2(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),Bn=n,hs=typeof e.onClose=="function"?e.onClose:null,n==="hangar"&&FP())}function Jr(){if(!Bn)return;Bn==="hangar"&&Iy();const n=bu[Bn];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),Bn=null;const e=hs;hs=null,e&&e()}function t2(){Bn==="hangar"&&Iy();for(const n of Object.values(bu))n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true"));Bn=null,hs=null}function fs(){i2(),n2(),Dy(),Uy(),Ah()}function n2(){if(mn===Bl||mn&&Gs[mn])return;const n=Object.keys(Gs);for(const e of n){const t=te.upgrades[e]|0,i=Gs[e].levels.length-1;if(t<i){mn=e;return}}mn=n[0]||null}function Ny(){const n=Ks(),e=St.oneShot.tiers[n]||St.oneShot.tiers[0],t="#"+(e.color|0).toString(16).padStart(6,"0"),i=w0(),s=Iu.length-1;if(n>=s)return{tier:n,tierCfg:e,colorHex:t,pct:100,rightLabel:we("hangar.max"),gofios:i};const o=Iu[n]|0,r=Iu[n+1]|0,a=Math.max(1,r-o),c=Math.max(0,Math.min(100,(i-o)/a*100));return{tier:n,tierCfg:e,colorHex:t,pct:c,rightLabel:`${i} / ${r} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function i2(){if(ug&&(ug.textContent=vn(te.punkte)),dg&&(dg.textContent=vn(te.bestFlightPunkte|0)),hg&&(hg.textContent=vn(te.obsidian|0)),fg){const n=te.gofiosByIsland[te.currentIsland]|0;fg.textContent=vn(n)}}const s2={drag:"air",maxSpeed:"speed",speedFromPitch:"trending_down",stallSpeed:"paragliding",takeoffSpeed:"flight_takeoff",brake:"back_hand",greyBoost:"bolt"};function bg(n,e,t){let i="";for(let s=0;s<e;s++){const o=s<n,r=o&&t?` style="background:${t};border-color:${t}"`:"";i+=`<span class="upg-pip${o?" is-on":""}"${r}></span>`}return i}function Dy(){if(!qo)return;qo.innerHTML="";const n='<span class="material-symbols-outlined upg-buy-icon">stars</span>',e='<span class="material-symbols-outlined upg-buy-icon">diamond</span>';for(const[o,r]of Object.entries(Gs)){const a=te.upgrades[o]|0,c=r.levels.length-1,l=a>=c,u=l?0:r.costs[a+1],d=l?0:Oy(o),f=o===mn;let m,v,y;te.punkte>=u?(m=`${vn(u)} ${n}`,v=we("hangar.buy",{cost:vn(u)}),y="punkte"):(te.obsidian|0)>=d?(m=`${d} ${e}`,v=we("hangar.buyObsidian",{cost:d}),y="obsidian"):(m=`${d} ${e}`,v=we("hangar.getDiamonds"),y="shop");const p=te.testMode&&a>0?`<button class="upg-sell" type="button" data-sell="${o}"
                aria-label="${we("a11y.sell",{cost:vn(r.costs[a])})}">−</button>`:"",h=l?`<span class="upg-max">${we("hangar.max")}</span>`:`<button class="upg-buy${y==="punkte"?"":" pay-obsidian"}" type="button"
                data-buy="${o}" data-pay="${y}" aria-label="${v}">${m}</button>`,_=document.createElement("div");_.className=`upg-card${l?" is-maxed":""}${f?" is-selected":""}`,_.dataset.select=o,_.innerHTML=`
      <div class="upg-card-head">
        <span class="upg-card-icon material-symbols-outlined">${s2[o]||"tune"}</span>
        <span class="upg-card-label">${we(`upgrades.${o}.label`)}</span>
        ${p}
      </div>
      <div class="upg-card-foot">
        <div class="upg-pips">${bg(a,c,null)}</div>
        ${h}
      </div>
    `,qo.appendChild(_)}const t=Ny(),i=mn===Bl,s=document.createElement("div");s.className=`upg-card upg-card-booster${i?" is-selected":""}`,s.dataset.select=Bl,s.innerHTML=`
    <div class="upg-card-head">
      <span class="upg-card-icon material-symbols-outlined">rocket_launch</span>
      <span class="upg-card-label">${we("hangar.booster")}</span>
    </div>
    <div class="upg-card-foot">
      <div class="upg-pips">${bg(t.tier,4,t.colorHex)}</div>
      <span class="upg-gofios">${t.rightLabel}</span>
    </div>
  `,qo.appendChild(s)}function Uy(){if(!wd)return;const n=wd.querySelector(".upgrade-info-title"),e=wd.querySelector(".upgrade-info-desc");if(mn===Bl){const r=Ny();n&&(n.textContent=we("hangar.boosterTitle",{name:e2(r.tier)})),e&&(e.textContent=we("hangar.boosterDesc"));return}const t=mn&&Gs[mn];if(!t){n&&(n.textContent=""),e&&(e.textContent=we("hangar.selectUpgrade"));return}const i=te.upgrades[mn]|0,s=t.levels.length-1,o=i>=s;if(n){const r=o?we("hangar.max"):we("hangar.level",{level:i,max:s});n.textContent=`${we(`upgrades.${mn}.label`)} · ${r}`}e&&(e.textContent=we(`upgrades.${mn}.desc`))}function o2(n){if(!te.testMode)return;const e=Gs[n];if(!e)return;const t=te.upgrades[n]|0;if(t<=0)return;const i=e.costs[t];te.upgrades[n]=t-1,te.punkte+=i,ka(),Xt(),fs()}function r2(n){const e=Gs[n],t=te.upgrades[n]|0,i=e.costs[t+1];te.punkte<i||(te.punkte-=i,xn("spend-points"),te.upgrades[n]=t+1,ka(),Xt(),fs())}function Oy(n){const e=ul.obsidianUpgradeCosts,t=te.obsidianUpgradeCount?.[n]|0;return e[Math.min(t,e.length-1)]}function a2(n){const e=te.upgrades[n]|0,t=Oy(n);(te.obsidian|0)<t||(te.obsidian=(te.obsidian|0)-t,xn("spend-diamonds"),te.upgrades[n]=e+1,te.obsidianUpgradeCount[n]=(te.obsidianUpgradeCount?.[n]|0)+1,ka(),Xt(),fs())}function c2({textHtml:n,onConfirm:e}){Pf={onConfirm:e},xg&&(xg.innerHTML=n),Ji.classList.add("visible"),Ji.setAttribute("aria-hidden","false")}function il(){Ji.classList.remove("visible"),Ji.setAttribute("aria-hidden","true"),Pf=null}function l2(){const n=Pf?.onConfirm;il(),n&&n()}function u2(n){const e=wr(n),t=`<strong>${e.costObsidian} <span class="material-symbols-outlined inline-icon">diamond</span></strong>`,i=`<strong>${we(e.nameKey)}</strong>`;c2({textHtml:we("obsidian.spendSkin",{obsidian:t,label:i}),onConfirm:()=>f2(n)})}function d2(){const n=Mf().findIndex(e=>e.id===te.equippedSkin);ui=n>=0?n:0}function h2(n){const e=wr(n);e.costPunkte==null||te.punkte<e.costPunkte||(te.punkte-=e.costPunkte,xn("spend-points"),yu(n),wf(n),fs())}function f2(n){const e=wr(n);e.costObsidian==null||(te.obsidian|0)<e.costObsidian||(te.obsidian=(te.obsidian|0)-e.costObsidian,xn("spend-diamonds"),yu(n),wf(n),fs())}function Sg(){xn("denied");const n=hs;hs=null,yr("shop",{onClose:()=>yr("hangar",{onClose:n})})}function p2(){const n=hs;hs=null,yr("hangar",{onClose:()=>yr("shop",{onClose:n})})}function Ah(){if(!mg)return;const n=Mf();(ui<0||ui>=n.length)&&(ui=0);const e=n[ui];mg.textContent=we(e.nameKey),zP.textContent=we(e.descKey),BP.innerHTML=n.map((c,l)=>`<span class="skin-dot${l===ui?" is-active":""}"></span>`).join(""),kP(e.teaser?te.equippedSkin:e.id);const t='<span class="material-symbols-outlined skin-action-icon">diamond</span>',i='<span class="material-symbols-outlined skin-action-icon">stars</span>';let s,o=!1,r=!1,a=!1;if(Yn=null,e.teaser)s=we("hangar.comingSoon"),o=!0,r=!0;else if(ny(e.id))te.equippedSkin===e.id?(s=we("hangar.equipped"),o=!0,r=!0):(s=we("hangar.equip"),Yn={kind:"equip",id:e.id});else{const c=e.costPunkte!=null,l=e.costObsidian!=null,u=c&&te.punkte>=e.costPunkte,d=l&&(te.obsidian|0)>=e.costObsidian;u?(s=`${we("hangar.buy",{cost:vn(e.costPunkte)})} ${i}`,Yn={kind:"buyPunkte",id:e.id}):d?(s=`${we("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,Yn={kind:"buyObsidian",id:e.id}):c?(s=`${we("hangar.buy",{cost:vn(e.costPunkte)})} ${i}`,o=!0,a=l):(s=`${we("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,o=!0,a=!0)}el.innerHTML=s,el.disabled=o,el.classList.toggle("is-quiet",r),Eh&&(Eh.hidden=!a)}function fo(){pg&&(pg.textContent=vn(te.obsidian|0)),m2();const n=to.isAvailable();if(Th&&(Th.hidden=!n),!!Fo){if(!n){Fo.innerHTML="",Fo.hidden=!0;return}Fo.hidden=!1,Fo.innerHTML=Xh.map(e=>{const t=Math.floor(e.diamonds*(1+e.bonusPct/100)),i=to.localizedPrice(e.productId),s=e.badgeKey?`<span class="pack-badge">${we(e.badgeKey)}</span>`:"",o=e.bonusPct>0?`<span class="pack-bonus">${we("shop.bonus",{pct:e.bonusPct})}</span>`:"";return`
      <button class="pack-card" type="button" data-pack="${e.id}">
        ${s}
        <span class="pack-amount">
          <span class="material-symbols-outlined pack-icon">diamond</span>${vn(t)}
        </span>
        ${o}
        <span class="pack-price">${i}</span>
      </button>`}).join("")}}function m2(){if(!Ed)return;if(!no.isAvailable()){Ed.hidden=!0;return}Ed.hidden=!1;const n=no.rewardedRemaining();vg&&(vg.innerHTML=`+${Rn.rewardedDiamonds} <span class="material-symbols-outlined">diamond</span>`),gg&&(gg.textContent=n>0?we("shop.adsLeftToday",{count:n,cap:Rn.rewardedDailyCap}):we("shop.adsCapReached")),tl&&(tl.disabled=n<=0,tl.classList.toggle("is-disabled",n<=0));const e=!!te.adsRemoveOwned;yg&&(yg.textContent=e?we("shop.removeAdsOwned"):to.removeAdsPrice()),nl&&(nl.disabled=e,nl.classList.toggle("is-owned",e))}async function g2(){const n=await no.watchRewarded();fo();const e=document.getElementById("shop-msg");if(e){if(n?.success)e.textContent=we("shop.granted",{amount:vn(n.diamonds)});else if(n?.capped)e.textContent=we("shop.adsCapReached");else return;e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}}async function v2(){(await to.purchaseRemoveAds())?.success&&fo()}async function y2(n){const e=await to.purchasePack(n);if(e?.success){fo();const t=document.getElementById("shop-msg");t&&(t.textContent=we("shop.granted",{amount:vn(e.diamonds)}),t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2400))}}async function x2(){await to.restore(),fo();const n=document.getElementById("shop-msg");n&&(n.textContent=we("shop.restored"),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}let Kt=null;function _2(){Kt=ht(),pr&&(pr.value=Kt.segments),mr&&(mr.value=Kt.samples),E2(),Xo&&(Xo.innerHTML='<span class="settings-ro-item"><span class="material-symbols-outlined">grid_on</span><b data-ro="seg">0</b></span><span class="settings-ro-item"><span class="material-symbols-outlined">forest</span><b data-ro="samples">0</b></span>'),If(!1),ky(),Ci&&(Ci.checked=by()),ua&&(ua.checked=!Lv()),da&&(da.value=kA()),ha&&(ha.checked=!Pv()),fa&&(fa.value=zA()),b2()}function b2(){if(!_g)return;const n=oo();if(_g.hidden=!n,!n)return;const e=Lf()==="gyro";pa&&(pa.checked=e),gr&&(gr.value=String(gf())),Hl&&(Hl.hidden=!e)}function ky(){my(jP,{flagsOnly:!0,onPick:n=>{fy(n),Kt&&(Kt.language=n)}})}function S2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function M2(n){return Na.findIndex(e=>e.segments===n.segments&&e.samples===n.samples)}function w2(n){let e=0,t=1/0;return Na.forEach((i,s)=>{const o=Math.abs(i.segments-n.segments);o<t&&(t=o,e=s)}),e}function E2(){vr&&(vr.max=String(Na.length-1)),Gl&&(Gl.innerHTML=Na.map(n=>`<span class="settings-tick">${we("settings.preset"+S2(n.name))}</span>`).join(""))}function If(n){if(!Kt)return;const e=M2(Kt),t=e>=0?e:w2(Kt);vr&&(vr.value=String(t)),Gl&&[...Gl.children].forEach((i,s)=>i.classList.toggle("active",e>=0&&s===t)),Xo&&(Mg(Xo.querySelector('[data-ro="seg"]'),Kt.segments,n),Mg(Xo.querySelector('[data-ro="samples"]'),Kt.samples,n),Xo.classList.toggle("is-custom",e<0))}function T2(n){const e=Na[n];e&&(Kt={...Kt,segments:e.segments,samples:e.samples},pr&&(pr.value=e.segments),mr&&(mr.value=e.samples),If(!0))}function Mg(n,e,t){if(!n)return;n._roRaf&&cancelAnimationFrame(n._roRaf);const i=t?parseFloat(n.dataset.cur)||0:e;if(!t||i===e){n.dataset.cur=String(e),n.textContent=vn(e),n._roRaf=0;return}const s=performance.now(),o=320,r=a=>{const c=Math.min(1,(a-s)/o),l=1-Math.pow(1-c,3),u=i+(e-i)*l;n.dataset.cur=c<1?String(u):String(e),n.textContent=vn(Math.round(u)),n._roRaf=c<1?requestAnimationFrame(r):0};n._roRaf=requestAnimationFrame(r)}function Rh(){if(!Kt)return;const n=parseInt(pr?.value,10),e=parseInt(mr?.value,10);Number.isFinite(n)&&(Kt.segments=n),Number.isFinite(e)&&(Kt.samples=e),If(!1)}function A2(){Qn&&(Qn.classList.add("visible"),Qn.setAttribute("aria-hidden","false"))}function Td(){Qn&&(Qn.classList.remove("visible"),Qn.setAttribute("aria-hidden","true"))}function R2(){Jn&&(gr&&(gr.value=String(gf())),Jn.classList.add("visible"),Jn.setAttribute("aria-hidden","false"))}function Ad(){Jn&&(Jn.classList.remove("visible"),Jn.setAttribute("aria-hidden","true"))}function L2(){if(Rh(),!Kt)return;ni(Kt);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function C2(){fi&&(fi.classList.add("visible"),fi.setAttribute("aria-hidden","false"))}function Rd(){fi&&(fi.classList.remove("visible"),fi.setAttribute("aria-hidden","true"))}function P2(){Dx();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const i=t.dataset.modalClose;(i==="hangar"||i==="shop"||i==="settings")&&t.addEventListener("click",Jr)});for(const t of Object.values(bu))t&&t.addEventListener("click",i=>{i.target===t&&Jr()});qo&&qo.addEventListener("click",t=>{const i=t.target.closest("[data-sell]");if(i&&!i.disabled){o2(i.dataset.sell);return}const s=t.target.closest("[data-buy]");if(s){if(s.disabled)return;const r=s.dataset.buy,a=s.dataset.pay;mn=r,a==="punkte"?r2(r):a==="obsidian"?a2(r):a==="shop"&&Sg();return}const o=t.target.closest("[data-select]");o&&(mn=o.dataset.select,Dy(),Uy())}),Ji&&(Ji.addEventListener("click",t=>{t.target===Ji&&il()}),VP?.addEventListener("click",il),WP?.addEventListener("click",l2));const e=Mf().length;HP?.addEventListener("click",()=>{ui=(ui-1+e)%e,Ah()}),GP?.addEventListener("click",()=>{ui=(ui+1)%e,Ah()}),el?.addEventListener("click",()=>{Yn&&(Yn.kind==="equip"?(wf(Yn.id),fs()):Yn.kind==="buyPunkte"?h2(Yn.id):Yn.kind==="buyObsidian"&&u2(Yn.id))}),Eh?.addEventListener("click",Sg),Fo?.addEventListener("click",t=>{const i=t.target.closest("[data-pack]");i&&y2(i.dataset.pack)}),Th?.addEventListener("click",x2),tl?.addEventListener("click",g2),nl?.addEventListener("click",v2),document.getElementById("shop-view-skins")?.addEventListener("click",p2),fi&&(fi.addEventListener("click",t=>{t.target===fi&&Rd()}),JP?.addEventListener("click",Rd),QP?.addEventListener("click",P2)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(fi?.classList.contains("visible")?(Rd(),t.stopImmediatePropagation()):Ji?.classList.contains("visible")?(il(),t.stopImmediatePropagation()):Qn?.classList.contains("visible")?(Td(),t.stopImmediatePropagation()):Jn?.classList.contains("visible")?(Ad(),t.stopImmediatePropagation()):Bn&&(Jr(),t.stopImmediatePropagation()))}),vr?.addEventListener("input",()=>T2(parseInt(vr.value,10))),KP?.addEventListener("click",A2),Qn&&(Qn.addEventListener("click",t=>{t.target===Qn&&Td()}),Qn.querySelector("[data-settings-advanced-close]")?.addEventListener("click",Td)),pr?.addEventListener("input",Rh),mr?.addEventListener("input",Rh),pa?.addEventListener("change",async()=>{const t=pa.checked,i=await SP(t?"gyro":"touch"),s=t&&i;pa.checked=s,Hl&&(Hl.hidden=!s),t&&i?(kl(!1),Ci&&(Ci.checked=!1)):t||(kl(!0),Ci&&(Ci.checked=!0))}),gr?.addEventListener("input",()=>{const t=parseFloat(gr.value);MP(t),OA(t)}),ZP?.addEventListener("click",_u),YP?.addEventListener("click",R2),Jn&&(Jn.addEventListener("click",t=>{t.target===Jn&&Ad()}),Jn.querySelector("[data-settings-gyro-advanced-close]")?.addEventListener("click",Ad)),XP?.addEventListener("click",Jr),qP?.addEventListener("click",L2),$P?.addEventListener("click",C2),xu(()=>{Bn==="hangar"&&fs(),Bn==="shop"&&fo(),Bn==="settings"&&ky()})})();const I2=.4,N2=.08,Da=20,cs=Math.ceil(Ee.size/Da)+2,wg=-8e3-Da,Fy=Array.from({length:cs*cs},()=>[]);function zy(n,e){return{cx:Math.floor((n-wg)/Da),cz:Math.floor((e-wg)/Da)}}function Va(n,e,t,i,s){const o=i+I2,r={x:n,z:t,r2:o*o,yMin:e,yMax:e+s+N2},a=Math.ceil(o/Da),{cx:c,cz:l}=zy(n,t);for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){const f=c+d,m=l+u;f<0||m<0||f>=cs||m>=cs||Fy[m*cs+f].push(r)}}function D2(n,e,t){const{cx:i,cz:s}=zy(n,t);if(i<0||s<0||i>=cs||s>=cs)return!1;const o=Fy[s*cs+i];for(let r=0;r<o.length;r++){const a=o[r];if(e<a.yMin||e>a.yMax)continue;const c=a.x-n,l=a.z-t;if(c*c+l*l<a.r2)return!0}return!1}const Qi=1024,$s=427,Eg=1.08,U2=700,O2=5e3,k2={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},ji=document.getElementById("tp-minimap-canvas"),qi=document.createElement("div"),Qr=document.createElement("canvas"),Vl=document.createElement("div"),Nc=document.createElement("div"),ir=document.createElement("div"),sl=document.createElement("div"),ol=document.createElement("span"),Tg=document.getElementById("tp-island"),Ag=document.getElementById("map-card"),F2=6;let Hr=null,Ld=0,Wl=!1,Lh=0,Ch=0,Rg="",Nf=0,Dc=null;const Cd=new I;function Df(){if(Dc)return Dc;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const s of Lt)n=Math.min(n,s.x-s.bboxRadius),e=Math.max(e,s.x+s.bboxRadius),t=Math.min(t,s.z-s.bboxRadius),i=Math.max(i,s.z+s.bboxRadius);return Dc={cx:(n+e)/2,cz:(t+i)/2,hw:(e-n)/2*Eg,hh:(i-t)/2*Eg},Dc}function z2(n,e){let t=Lt[0].id,i=1/0;for(const s of Lt){const o=n-s.x,r=e-s.z,a=o*o+r*r;a<i&&(i=a,t=s.id)}return t}function B2(){!ji||Wl||(Wl=!0,ji.innerHTML="",qi.className="minimap-stage",qi.style.width=Qi+"px",qi.style.height=$s+"px",qi.style.transformOrigin="0 0",Qr.className="minimap-canvas",Qr.width=Qi,Qr.height=$s,qi.appendChild(Qr),Vl.className="minimap-runways",qi.appendChild(Vl),ji.appendChild(qi),Nc.className="minimap-overlay",ir.className="minimap-plane",ir.innerHTML='<span class="minimap-plane-tri"></span>',Nc.appendChild(ir),sl.className="minimap-compass",ol.className="minimap-compass-inner",ol.textContent="N",sl.appendChild(ol),Nc.appendChild(sl),ji.appendChild(Nc),ji.addEventListener("pointerdown",()=>{Nf=performance.now()+O2,ji.classList.add("is-overview")}),By(),Gy(),Ph(),window.addEventListener("resize",Ph))}function By(){if(!Wl)return;const n=_1();if(!n)return;const e=Qr.getContext("2d"),t=e.createImageData(Qi,$s),{cx:i,cz:s,hw:o,hh:r}=Df(),a=Ee.heightmap.metersPerUnit,c=Ee.waterLevel,l=Ee.heightmap.elevRange,u=Ee.heightmap.bbox,d=Ee.heightmap.center,f=Math.cos(d.lat*Math.PI/180),m=u.lonE-u.lonW,v=u.latN-u.latS,y=(d.lon-u.lonW)/m*(n.w-1),p=a/(111320*f)/m*(n.w-1),h=(u.latN-d.lat)/v*(n.h-1),_=a/111320/v*(n.h-1),g=l[1]-l[0],b=l[0],R={};for(const M of Lt)R[M.id]=!1;for(const M of ot)if(te.discoveredRunways[M.id]){const w=k2[M.id];w&&(R[w]=!0)}const E=n.data,T=n.w,k=n.h;for(let M=0;M<$s;M++){const w=s+(M/($s-1)-.5)*2*r,W=Math.max(0,Math.min(k-1,Math.floor(h+w*_)))*T*4;for(let oe=0;oe<Qi;oe++){const O=i+(oe/(Qi-1)-.5)*2*o,q=Math.floor(y+O*p);let j,Z,B;if(q<0||q>=T)j=52,Z=92,B=118;else{const ae=W+q*4,ue=E[ae]<<8|E[ae+1],ye=(b+ue/65535*g)/a;if(ye<c+.05)j=52,Z=92,B=118;else{const ee=z2(O,w),U=ye*a;R[ee]?[j,Z,B]=H2(U):j=Z=B=G2(U)}}const J=(M*Qi+oe)*4;t.data[J]=j,t.data[J+1]=Z,t.data[J+2]=B,t.data[J+3]=255}}e.putImageData(t,0,0)}function H2(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function G2(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function Hy(n,e){const{cx:t,cz:i,hw:s,hh:o}=Df();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*o)+.5}}function Gy(){Vl.innerHTML="";for(const n of ot){const e=!!te.landedRunways[n.id];if(!!!te.discoveredRunways[n.id]&&!e)continue;const{fracX:i,fracY:s}=Hy(n.x,n.z);if(i<0||i>1||s<0||s>1)continue;const o=document.createElement("span");o.className=`minimap-runway ${e?"is-landed":"is-seen"}`,o.style.left=(i*100).toFixed(2)+"%",o.style.top=(s*100).toFixed(2)+"%",Vl.appendChild(o)}}function Uf(n){if(Mr(n.x,n.z)<Ee.waterLevel+.05)return null;let t=null,i=1/0;for(const s of Lt){const o=n.x-s.x,r=n.z-s.z,a=o*o+r*r;a<i&&(i=a,t=s)}return t}function Vy(){return performance.now()<Nf}const V2="Islas Canarias";let Lg="";function W2(n){if(!Tg)return;const e=Uf(n),i=Vy()||!e?V2:e.name;i!==Lg&&(Lg=i,Tg.textContent=i)}function Ph(){const n=ji.getBoundingClientRect();Lh=n.width,Ch=n.height}function q2(){return Ag?!document.body.classList.contains("touch-mode")||Ag.classList.contains("is-open"):!0}function X2(n){if(!Wl||!n||(W2(n.position),!q2()))return;const e=ot.map(b=>te.discoveredRunways[b.id]?"1":"0").join("")+"|"+ot.map(b=>te.landedRunways[b.id]?"1":"0").join("");e!==Rg&&(By(),Gy(),Rg=e),(Lh<1||Ch<1)&&Ph();const t=Lh,i=Ch;if(t<1||i<1)return;const s=t/2,o=i/2;Cd.set(0,0,-1).applyQuaternion(n.quaternion);const r=Math.atan2(Cd.x,-Cd.z),a=performance.now(),c=a<Nf,{hw:l}=Df(),u=2*l/Qi,d=t*u/U2,f=i/$s,m=c?f:d,v=Ld?Math.min(.1,(a-Ld)/1e3):0;if(Ld=a,Hr===null)Hr=m;else{const b=1-Math.exp(-v*F2);Hr+=(m-Hr)*b}c||ji.classList.remove("is-overview");const{fracX:y,fracY:p}=Hy(n.position.x,n.position.z),h=y*Qi,_=p*$s;qi.style.transform=`translate(${s}px, ${o}px) rotate(${-r}rad) scale(${Hr}) translate(${-h}px, ${-_}px)`,ir.style.left=s+"px",ir.style.top=o+"px",ir.style.transform="translate(-50%, -50%)";const g=Math.min(t,i)*.43;sl.style.transform=`translate(-50%, -50%) rotate(${-r}rad) translateY(-${g}px)`,ol.style.transform=`rotate(${r}rad)`}const Ih=document.getElementById("landing-toast"),Cg=document.getElementById("controls-hint"),Pd=document.getElementById("boost-grey-fill"),Uc=document.getElementById("boost-oneshot-tile"),Pg=document.getElementById("test-mode-border"),Pn=document.getElementById("poi-toast"),di=document.getElementById("poi-label"),js=document.getElementById("wrong-approach-toast");document.getElementById("tp-island");const $2={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},Id=document.getElementById("map-card-punkte"),Nd=document.getElementById("map-card-highscore"),Dd=document.getElementById("map-card-landings"),Ig=document.getElementById("map-card-landings-best");let Nh="",Dh="";function Ng(n){return Math.round(n).toLocaleString(hy())}let Fs=null,ql=null,Oc=null,Xl=!1,Ua=null,Dg=-1,Ug=null,Uh=null,Og=!1,xr=!1;xu(()=>{Uh=null,Dh="",Nh="",xr&&js&&(js.textContent=we("hud.wrongApproach"))});function j2(n){const e=we("hud.landingBonus",{bonus:Js.landingBonus});Ih.innerHTML=`${we("hud.landingToast",{id:n.id})}<span class="bonus">${e}</span>`,Ih.classList.add("show")}function Wy(){Ih.classList.remove("show")}function kg(n,e,t,i){if(!di)return;const s=t>0?we("hud.poiRewardFull",{punkte:e,gofios:t}):we("hud.poiRewardPunkte",{punkte:e}),o=i?we(`booster.unlock.${i}`):"",r=o?`<span class="tier-up">${o}</span>`:"";di.innerHTML=`<span class="poi-name">${n}</span><span class="reward">${s}</span>${r}`,di.classList.add("show","prominent"),Xl=!0,Ua=n,Oc&&clearTimeout(Oc),Oc=setTimeout(()=>{di.classList.remove("prominent"),Xl=!1,Oc=null,di.innerHTML=`<span class="poi-name">${n}</span>`},bt.activationToast.duration*1e3)}function Of(n){ql=n,Pn.classList.add("show"),Fs&&clearTimeout(Fs),Fs=setTimeout(()=>{Pn.classList.remove("show"),Fs=null,ql=null},bt.activationToast.duration*1e3)}function Y2(n,e){Pn&&(Pn.innerHTML=`${n}<span class="reward">${we("hud.discoveryReward",{diamonds:e})}</span><span class="tier-up">${we("hud.discoveryTitle")}</span>`,Pn.classList.remove("compact"),Of("discovery"))}function Z2(){Pn&&(Pn.innerHTML=we("hud.runwayApproach"),Pn.classList.remove("compact"),Of("approach"))}function Ud(){!Pn||ql!=="approach"||(Fs&&(clearTimeout(Fs),Fs=null),Pn.classList.remove("show"),ql=null)}function K2(n,e){Pn&&(Pn.innerHTML=e?`${we("hud.airportUnlockTitle")}<span class="reward">${we("hud.airportUnlockBody",{name:n})}</span>`:we("hud.airportUnlocked",{name:n}),Pn.classList.add("compact"),Of("unlock"))}function J2(){!js||xr||(js.textContent=we("hud.wrongApproach"),js.classList.add("show"),xr=!0,Oh())}function Fg(){!js||!xr||(js.classList.remove("show"),xr=!1)}function Q2(n){di&&(Xl||xr||n!==Ua&&(di.innerHTML=`<span class="poi-name">${n}</span>`,di.classList.add("show"),Ua=n))}function Oh(){di&&(Xl||Ua!==null&&(di.classList.remove("show"),Ua=null))}function eI(){const n=Lf()==="gyro"?"hud.hintPrelaunchGyro":"hud.hintPrelaunch",e=D.flightState===He.INTRO||D.flightState===He.CRASHING?"":D.flightState===He.PRELAUNCH?we(n):D.flightState===He.TAKEOFF_ROLL?we("hud.hintTakeoff"):we("hud.hintNormal");e!==Uh&&(Cg.textContent=e,Uh=e);const t=D.flightState===He.PRELAUNCH;t!==Og&&(Cg.classList.toggle("hint-pinned",t),Og=t),nI(),iI(),sI(),tI()}function tI(){if(!Id&&!Nd&&!Dd)return;const n=Math.round(D.flightPunkte|0),e=Math.round(te.bestFlightPunkte|0),t=D.sessionLandings|0,i=te.bestSessionLandings|0,s=`${n}|${e}|${t}|${i}`;s!==Dh&&(Dh=s,Id&&(Id.textContent=Ng(n)),Nd&&(Nd.textContent=Ng(e)),Dd&&(Dd.textContent=t.toString()),Ig&&(Ig.textContent=i.toString()))}function nI(){if(Pd&&(Pd.style.width=(D.boostFuelGrey*100).toFixed(1)+"%",Pd.style.opacity=D.greyActive?"1":"0.7"),!Uc)return;const n=Ks(),e=St.oneShot.tiers[n]||St.oneShot.tiers[0];if(n!==Dg){Uc.hidden=n===0;const s="#"+(e.color|0).toString(16).padStart(6,"0");Uc.style.setProperty("--boost-fill",s),Dg=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,D.boostFuelOneshot)))*100).toFixed(1)+"%";Uc.style.setProperty("--drain-pct",i)}function iI(){Pg&&te.testMode!==Ug&&(Pg.classList.toggle("visible",!!te.testMode),Ug=te.testMode)}function sI(){const n=Vy(),e=Uf(he.position),t=n||!e,i={peak:0,city:0,landscape:0,beach:0},s={peak:0,city:0,landscape:0,beach:0};if(t)for(const a of Object.keys(Nu))for(const c of Nu[a])i[c.type]++,te.exploredPOIs[c.id]&&s[c.type]++;else for(const a of Nu[e.id]||[])i[a.type]++,te.exploredPOIs[a.id]&&s[a.type]++;const r=`${t?"arch":e.id}|${s.peak}/${i.peak}|${s.city}/${i.city}|${s.landscape}/${i.landscape}|${s.beach}/${i.beach}`;if(r!==Nh){Nh=r;for(const a of["peak","city","landscape","beach"]){const c=$2[a];if(!c)continue;const l=s[a],u=i[a];u>0&&l>=u?c.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':c.textContent=`${l} / ${u}`}}}const Dn=new I(0,0,-1),kc=new I,zg=new I,It=new I,Wt=new I,ci=new I,Bg=new I,Gr=new I(0,0,-1),Od=new I;let kd=!1;function qy(){switch(D.flightState){case He.PRELAUNCH:case He.LANDED:return 0;case He.TAKEOFF_ROLL:case He.LANDING_ROLL:return ki.clamp(D.speed/Yr.takeoffSpeed,0,1);default:return 1}}function ma(n,e,t){return n+(e-n)*t}let Fd=0;function Vr(n,e){return 1-Math.exp(-e/Math.max(n,1e-4))}function Hg(n){const e=1-n;return 1-e*e*e}function oI(n){return Wt.set(0,0,-1).applyQuaternion(he.quaternion),It.set(Wt.x,0,Wt.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize(),ci.set(0,jt.height,0),n.copy(he.position).addScaledVector(It,-6.5).add(ci)}function rI(n){if(D.flightState===He.INTRO&&D.introStartCamPos){const u=Hg(Math.min(1,D.introT));oI(Bg),Vt.position.lerpVectors(D.introStartCamPos,Bg,u),Vt.up.set(0,1,0),Vt.lookAt(he.position);return}if(D.flightState!==He.CRASHING&&(kd=!1),D.flightState===He.LANDED){Wt.set(0,0,-1).applyQuaternion(he.quaternion),Dn.copy(Wt),It.set(Wt.x,0,Wt.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize(),ci.set(0,jt.runwayHeight,0),Vt.position.copy(he.position).addScaledVector(It,-3).add(ci),Vt.up.set(0,1,0),Vt.lookAt(he.position);return}if(D.flightState===He.CRASHING){kd||(Wt.set(0,0,-1).applyQuaternion(he.quaternion),Gr.set(Wt.x,0,Wt.z),Gr.lengthSq()<1e-4&&Gr.set(0,0,-1),Gr.normalize(),Od.copy(he.position),kd=!0);const u=Hg(Math.min(1,D.crashT)),d=jt.distance+$c.camPullback*u;ci.set(0,jt.height+$c.camRise*u,0),kc.copy(Od).addScaledVector(Gr,-d).add(ci),Vt.position.lerp(kc,Vr($c.camTau,n)),Vt.up.set(0,1,0),Vt.lookAt(Od);return}Wt.set(0,0,-1).applyQuaternion(he.quaternion);const e=Vr(jt.yawTau,n),t=Vr(jt.pitchTau,n);Dn.x+=(Wt.x-Dn.x)*e,Dn.z+=(Wt.z-Dn.z)*e,Dn.y+=(Wt.y-Dn.y)*t,Dn.normalize(),It.set(Dn.x,0,Dn.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize();const i=D.greyActive||D.oneShotActive?1:0,s=Vr(St.camPushbackTau,n);Fd+=(i-Fd)*s;const o=qy(),r=ma(jt.runwayDistance,jt.distance,o),a=ma(jt.runwayHeight,jt.height,o),c=ma(jt.runwayLookAhead,jt.lookAhead,o);ci.set(0,a,0),kc.copy(he.position).addScaledVector(It,-(r+St.camPushback*Fd)).add(ci);const l=Vr(jt.posTau,n);Vt.position.lerp(kc,l),zg.copy(he.position).addScaledVector(Dn,c),Vt.up.set(0,1,0),Vt.lookAt(zg)}function Su(){Wt.set(0,0,-1).applyQuaternion(he.quaternion),Dn.copy(Wt),It.set(Wt.x,0,Wt.z),It.lengthSq()<1e-4&&It.set(0,0,-1),It.normalize();const n=qy(),e=ma(jt.runwayDistance,jt.distance,n),t=ma(jt.runwayHeight,jt.height,n);ci.set(0,t,0),Vt.position.copy(he.position).addScaledVector(It,-e).add(ci)}const kf={value:0},Wr=he.getObjectByName("paperBody");if(Wr){const n=Wr.geometry,e=n.getAttribute("position"),t=e.count/3,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3);for(let o=0;o<t;o++){const r=o*3,a=r+1,c=r+2,l=(e.getX(r)+e.getX(a)+e.getX(c))/3,u=(e.getY(r)+e.getY(a)+e.getY(c))/3,d=(e.getZ(r)+e.getZ(a)+e.getZ(c))/3,f=Math.random(),m=Math.random(),v=Math.random();for(const y of[r,a,c])i[y*3]=l,i[y*3+1]=u,i[y*3+2]=d,s[y*3]=f,s[y*3+1]=m,s[y*3+2]=v}n.setAttribute("aCentroid",new Nt(i,3)),n.setAttribute("aRand",new Nt(s,3)),Wr.material.onBeforeCompile=o=>{o.uniforms.uShatter=kf,o.vertexShader=`attribute vec3 aCentroid;
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
         }`)},Wr.material.customProgramCacheKey=()=>"paperShatter",Wr.material.needsUpdate=!0}let ps=null;function aI(){ps=[],he.traverse(n=>{if(!n.material)return;const e=Array.isArray(n.material)?n.material:[n.material];for(const t of e)t.userData.crashBaseOpacity=t.opacity,ps.push(t)})}function cI(){ps||aI();for(const n of ps)n.transparent=!0}function lI(n){if(kf.value=n,!ps)return;const e=Math.max(0,1-n*1.15);for(const t of ps)t.opacity=t.userData.crashBaseOpacity*e}function uI(){if(kf.value=0,!!ps)for(const n of ps)n.opacity=n.userData.crashBaseOpacity}let rl=null;const oi=new I,Gg=new I,Vg=new I,Wg=new Ct,qg=new Gn,Fc=new I,Xg=new I,dI=new I;function Mu(n,e=dI){return e.set(0,0,-1).applyEuler(new Gn(0,n,0))}function Ff(n){const e=Mu(n.activeHeading);he.position.set(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),he.quaternion.setFromEuler(new Gn(0,n.activeHeading,0)),D.speed=0,D.flightState=He.PRELAUNCH,D.currentRunway=n,D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,D.greyActive=!1,D.oneShotActive=!1,$h(),lu(),_u(),Su()}const Xy=document.getElementById("crash");let kh=null;function hI(n){kh=n}function fI(){D.flightPunkte=0}function $y(){D.flightPunkte>te.bestFlightPunkte&&(te.bestFlightPunkte=D.flightPunkte),D.flightPunkte=0}function al(){if(D.tutorial){kh&&kh("crash");return}D.flightState===He.CRASHING||D.flightState===He.CRASHED||(D.speed=0,D.flightState=He.CRASHING,D.crashT=0,D.sessionLandings=0,$y(),Xt(),cI())}function pI(n){D.crashT+=n/$c.duration,lI(Math.min(1,D.crashT)),D.crashT>=1&&(D.alive=!1,D.flightState=He.CRASHED,Xy.classList.add("visible"))}let $g=!1;function wu(n={}){n.runwayId&&n.runwayId!==te.checkpointRunwayId&&(te.checkpointRunwayId=n.runwayId,Xt());const e=te.checkpointRunwayId??ts,t=ot.find(s=>s.id===e)??ot[0],i=n.forceIntro||!te.introPlayed;if(Ux(),TP(),RP(),IP(),uI(),Wy(),Xy.classList.remove("visible"),Ff(t),$g||(Hv(t),$g=!0),i){const s=new I(0,0,-1).applyQuaternion(he.quaternion),o=new I(s.x,0,s.z).normalize();D.introStartCamPos=he.position.clone().addScaledVector(o,-4e3).add(new I(0,E0.startHeight,0)),D.introT=0,D.flightState=He.INTRO,Mt.fog&&(rl=Mt.fog,Mt.fog=null)}}function mI(){const n=ho();return n.pitch!==0||n.roll!==0||n.brake}function jy(n){if(D.refillT>=1)return;D.refillT=Math.min(1,D.refillT+n/St.refillDuration);const e=D.refillT;D.boostFuelGrey=D.refillStartGrey+(1-D.refillStartGrey)*e,D.boostFuelOneshot=D.refillStartOneshot+(1-D.refillStartOneshot)*e}function gI(){D.refillT=1,D.boostFuelGrey=1,D.boostFuelOneshot=1}function vI(n){const e=ho();Hx()&&Ks()>0&&(te.testMode&&D.oneShotActive?D.oneShotActive=!1:!D.oneShotActive&&D.boostFuelOneshot>0&&(D.oneShotActive=!0)),D.greyActive=e.boost&&D.boostFuelGrey>0;let t=0,i=0;if(D.oneShotActive){const s=St.oneShot.tiers[Ks()]||St.oneShot.tiers[0];D.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),D.boostFuelOneshot<=0&&(D.boostFuelOneshot=te.testMode?1:0,D.oneShotActive=te.testMode),D.oneShotActive&&(t+=s.speedBonus,i+=s.accelRate)}if(D.greyActive){const s=St.grey;D.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),D.boostFuelGrey<=0?(D.boostFuelGrey=0,D.greyActive=!1):(t+=s.speedBonus,i+=s.accelRate)}return!D.greyActive&&!D.oneShotActive&&D.boostFuelGrey<1&&(D.boostFuelGrey=Math.min(1,D.boostFuelGrey+n/St.grey.rechargeTime)),{speedBonus:t,accelBonus:i}}function yI(n){mI()?D.introT=1:D.introT+=n/E0.duration,D.introT>=1&&(D.introT=0,D.introStartCamPos=null,D.flightState=He.PRELAUNCH,te.introPlayed=!0,lu(),_u(),rl&&(Mt.fog=rl,rl=null),Su())}function xI(n){jy(n);const e=Gx();(Lf()!=="gyro"&&ho().pitch>0||e)&&(D.flightState=He.TAKEOFF_ROLL,D.takeoffTime=0,fI())}function _I(n){const e=D.currentRunway;D.takeoffTime+=n,jy(n);const t=Yr.takeoffSpeed,i=Yr.linearShare,s=1-i,r=e.length*Yr.liftoffFraction/(t*(i/2+s/3)),a=Math.min(1,D.takeoffTime/r);D.speed=t*(i*a+s*a*a);const c=Mu(e.activeHeading);he.position.x+=c.x*D.speed*n,he.position.z+=c.z*D.speed*n,he.position.y=e.elevation+.22,he.quaternion.setFromEuler(new Gn(0,e.activeHeading,0)),a>=1&&(he.rotateX(Yr.pitchUpAtLiftoff),D.flightState=He.FLYING,D.currentRunway=null,D.postLiftCooldown=1.2,gI())}const jg=200,bI=250;function SI(n){for(const e of ot){if(te.discoveredRunways[e.id])continue;const t=n.x-e.x,i=n.z-e.z;if(t*t+i*i>jg*jg)continue;const s=n.y-e.elevation;s<-50||s>bI||(te.discoveredRunways[e.id]=!0,Xt())}}function MI(n){const e=vI(n),t=ho(),i=t.pitch,s=t.roll,o=Math.max(0,nn.stallSpeed-D.speed)/nn.stallSpeed,r=1-o*(1-nn.stallAuthority),a=i*r;oi.set(0,0,-1).applyQuaternion(he.quaternion);const c=Math.asin(ki.clamp(oi.y,-1,1));let l=a*nn.pitchRate*n;l>0&&(l=Math.min(l,Math.max(0,nn.maxClimbPitch-c))),he.rotateX(l),he.rotateZ(-s*nn.rollRate*n),oi.set(0,0,-1).applyQuaternion(he.quaternion),Gg.set(1,0,0).applyQuaternion(he.quaternion),Vg.set(0,1,0).applyQuaternion(he.quaternion);const u=Math.atan2(Gg.y,Vg.y);he.rotateOnWorldAxis(uh,Math.sin(u)*nn.turnFactor*n),o>.01&&(Fc.set(oi.x,0,oi.z),Fc.lengthSq()>1e-4&&(Fc.normalize(),Xg.crossVectors(Fc,uh).normalize(),he.rotateOnWorldAxis(Xg,-o*nn.stallPitchRate*n))),oi.set(0,0,-1).applyQuaternion(he.quaternion);const d=oi.y;D.speed-=d*nn.speedFromPitch*n,D.speed-=nn.drag*n,D.brakeAmount>.01&&(D.speed-=D.brakeAmount*ll.force*n);const f=Xv(he.position.x,he.position.y,he.position.z);D.speed+=f*.13*n,D.inThermal=f>.5;const m=nn.maxSpeed+e.speedBonus;e.accelBonus>0&&D.speed<m&&(D.speed=Math.min(m,D.speed+e.accelBonus*n)),D.speed=Math.max(nn.minSpeed,Math.min(m,D.speed));const v=he.position.x,y=he.position.z;he.position.addScaledVector(oi,D.speed*n);const p=nn.sinkRate*(1+o*nn.stallSink);if(he.position.y-=p*n,he.position.y+=f*n,!D.tutorial){const b=he.position.x-v,R=he.position.z-y;cu(Math.sqrt(b*b+R*R))}const h=Ee.size/2-30;if(he.position.x>h&&(he.position.x=h),he.position.x<-h&&(he.position.x=-h),he.position.z>h&&(he.position.z=h),he.position.z<-h&&(he.position.z=-h),D.postLiftCooldown>0){D.postLiftCooldown-=n;return}if(!D.tutorial){SI(he.position);const b=Math.atan2(-oi.x,-oi.z),R=XA(he.position,b);if(R){D.flightState=He.LANDING_ROLL,D.currentRunway=R,he.position.y=R.elevation+.22;return}}const _=$A(he.position);if(_&&he.position.y-_.elevation<Js.rollingHeight){al();return}const g=Rt(he.position.x,he.position.z);(he.position.y<Math.max(g+.4,Ee.waterLevel+.4)||D2(he.position.x,he.position.y,he.position.z))&&al()}function wI(n){const e=D.currentRunway;D.speed=Math.max(0,D.speed-Js.brakeForce*n);const t=Mu(e.activeHeading),i=he.position.x,s=he.position.z;he.position.x+=t.x*D.speed*n,he.position.z+=t.z*D.speed*n,he.position.y=e.elevation+.22;const o=he.position.x-i,r=he.position.z-s;cu(Math.sqrt(o*o+r*r)),qg.set(0,e.activeHeading,0),Wg.setFromEuler(qg),he.quaternion.slerp(Wg,.22);const a=he.position.x-e.x,c=he.position.z-e.z,l=a*Math.sin(e.heading)+c*Math.cos(e.heading);if(Math.abs(l)>e.length*.5){al();return}D.speed<Js.landingSpeed&&EI(e)}function EI(n){D.speed=0,D.flightState=He.LANDED,D.landedToastTimer=T0.toastDuration,D.cinematicT=0,D.cinematicFromPos=he.position.clone(),D.cinematicFromQuat=he.quaternion.clone();const e=n.activeHeading,t=Mu(e,new I);D.cinematicToPos=new I(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),D.cinematicToQuat=new Ct().setFromEuler(new Gn(0,e,0)),te.landings+=1,cu(Js.landingBonus),te.checkpointRunwayId=n.id,Hv(n);const i=!te.landedRunways[n.id],s=Object.keys(te.landedRunways).some(o=>o!==ts&&te.landedRunways[o]);te.landedRunways[n.id]=!0,te.discoveredRunways[n.id]=!0,D.sessionLandings+=1,D.sessionLandings>te.bestSessionLandings&&(te.bestSessionLandings=D.sessionLandings),$y(),Xt(),j2(n),i&&n.id!==ts&&(D.pendingAirportUnlock={id:n.id,full:!s})}function TI(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function AI(n){if(D.landedToastTimer>0){D.landedToastTimer-=n;return}if(D.cinematicT+=n/T0.tweenDuration,D.cinematicT>=1){he.position.copy(D.cinematicToPos),he.quaternion.copy(D.cinematicToQuat),D.cinematicT=0,D.cinematicFromPos=null,D.cinematicToPos=null,D.cinematicFromQuat=null,D.cinematicToQuat=null,D.flightState=He.PRELAUNCH,$h(),lu(),_u(),D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,Su(),Wy(),D.pendingAirportUnlock&&(K2(D.pendingAirportUnlock.id,D.pendingAirportUnlock.full),D.pendingAirportUnlock=null);return}const e=TI(D.cinematicT);he.position.lerpVectors(D.cinematicFromPos,D.cinematicToPos,e),he.quaternion.copy(D.cinematicFromQuat)}function RI(n){if(D.alive&&!D.paused)switch(D.flightState){case He.INTRO:return yI(n);case He.PRELAUNCH:return xI(n);case He.TAKEOFF_ROLL:return _I(n);case He.FLYING:return MI(n);case He.LANDING_ROLL:return wI(n);case He.LANDED:return AI(n);case He.CRASHING:return pI(n);case He.CRASHED:return}}const LI=Ut;class $l extends hf{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const o=this,r=new pA(o.manager);r.setPath(o.path),r.setRequestHeader(o.requestHeader),r.setWithCredentials(o.withCredentials),r.load(e,function(a){try{t(o.parse(a))}catch(c){s?s(c):console.error(c),o.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(U,N){if(U.nodeType!==1)return;const L=b(U);let A=!1,Q=null;switch(U.nodeName){case"svg":N=v(U,N);break;case"style":o(U);break;case"g":N=v(U,N);break;case"path":N=v(U,N),U.hasAttribute("d")&&(Q=s(U));break;case"rect":N=v(U,N),Q=c(U);break;case"polygon":N=v(U,N),Q=l(U);break;case"polyline":N=v(U,N),Q=u(U);break;case"circle":N=v(U,N),Q=d(U);break;case"ellipse":N=v(U,N),Q=f(U);break;case"line":N=v(U,N),Q=m(U);break;case"defs":A=!0;break;case"use":N=v(U,N);const de=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=U.viewportElement.getElementById(de);P?i(P,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}Q&&(N.fill!==void 0&&N.fill!=="none"&&Q.color.setStyle(N.fill,LI),E(Q,ue),W.push(Q),Q.userData={node:U,style:N});const ce=U.childNodes;for(let X=0;X<ce.length;X++){const de=ce[X];A&&de.nodeName!=="style"&&de.nodeName!=="defs"||i(de,N)}L&&(O.pop(),O.length>0?ue.copy(O[O.length-1]):ue.identity())}function s(U){const N=new Ms,L=new pe,A=new pe,Q=new pe;let ce=!0,X=!1;const de=U.getAttribute("d");if(de===""||de==="none")return null;const P=de.match(/[a-df-z][^a-df-z]*/ig);for(let ne=0,z=P.length;ne<z;ne++){const Y=P[ne],$=Y.charAt(0),fe=Y.slice(1).trim();ce===!0&&(X=!0,ce=!1);let F;switch($){case"M":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x=F[x+0],L.y=F[x+1],A.x=L.x,A.y=L.y,x===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),x===0&&Q.copy(L);break;case"H":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.x=F[x],A.x=L.x,A.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&Q.copy(L);break;case"V":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.y=F[x],A.x=L.x,A.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&Q.copy(L);break;case"L":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x=F[x+0],L.y=F[x+1],A.x=L.x,A.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&Q.copy(L);break;case"C":F=p(fe);for(let x=0,S=F.length;x<S;x+=6)N.bezierCurveTo(F[x+0],F[x+1],F[x+2],F[x+3],F[x+4],F[x+5]),A.x=F[x+2],A.y=F[x+3],L.x=F[x+4],L.y=F[x+5],x===0&&X===!0&&Q.copy(L);break;case"S":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.bezierCurveTo(y(L.x,A.x),y(L.y,A.y),F[x+0],F[x+1],F[x+2],F[x+3]),A.x=F[x+0],A.y=F[x+1],L.x=F[x+2],L.y=F[x+3],x===0&&X===!0&&Q.copy(L);break;case"Q":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.quadraticCurveTo(F[x+0],F[x+1],F[x+2],F[x+3]),A.x=F[x+0],A.y=F[x+1],L.x=F[x+2],L.y=F[x+3],x===0&&X===!0&&Q.copy(L);break;case"T":F=p(fe);for(let x=0,S=F.length;x<S;x+=2){const G=y(L.x,A.x),me=y(L.y,A.y);N.quadraticCurveTo(G,me,F[x+0],F[x+1]),A.x=G,A.y=me,L.x=F[x+0],L.y=F[x+1],x===0&&X===!0&&Q.copy(L)}break;case"A":F=p(fe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==L.x&&F[x+6]==L.y)continue;const G=L.clone();L.x=F[x+5],L.y=F[x+6],A.x=L.x,A.y=L.y,r(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,L),x===0&&X===!0&&Q.copy(L)}break;case"m":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x+=F[x+0],L.y+=F[x+1],A.x=L.x,A.y=L.y,x===0?N.moveTo(L.x,L.y):N.lineTo(L.x,L.y),x===0&&Q.copy(L);break;case"h":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.x+=F[x],A.x=L.x,A.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&Q.copy(L);break;case"v":F=p(fe);for(let x=0,S=F.length;x<S;x++)L.y+=F[x],A.x=L.x,A.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&Q.copy(L);break;case"l":F=p(fe);for(let x=0,S=F.length;x<S;x+=2)L.x+=F[x+0],L.y+=F[x+1],A.x=L.x,A.y=L.y,N.lineTo(L.x,L.y),x===0&&X===!0&&Q.copy(L);break;case"c":F=p(fe);for(let x=0,S=F.length;x<S;x+=6)N.bezierCurveTo(L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3],L.x+F[x+4],L.y+F[x+5]),A.x=L.x+F[x+2],A.y=L.y+F[x+3],L.x+=F[x+4],L.y+=F[x+5],x===0&&X===!0&&Q.copy(L);break;case"s":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.bezierCurveTo(y(L.x,A.x),y(L.y,A.y),L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3]),A.x=L.x+F[x+0],A.y=L.y+F[x+1],L.x+=F[x+2],L.y+=F[x+3],x===0&&X===!0&&Q.copy(L);break;case"q":F=p(fe);for(let x=0,S=F.length;x<S;x+=4)N.quadraticCurveTo(L.x+F[x+0],L.y+F[x+1],L.x+F[x+2],L.y+F[x+3]),A.x=L.x+F[x+0],A.y=L.y+F[x+1],L.x+=F[x+2],L.y+=F[x+3],x===0&&X===!0&&Q.copy(L);break;case"t":F=p(fe);for(let x=0,S=F.length;x<S;x+=2){const G=y(L.x,A.x),me=y(L.y,A.y);N.quadraticCurveTo(G,me,L.x+F[x+0],L.y+F[x+1]),A.x=G,A.y=me,L.x=L.x+F[x+0],L.y=L.y+F[x+1],x===0&&X===!0&&Q.copy(L)}break;case"a":F=p(fe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==0&&F[x+6]==0)continue;const G=L.clone();L.x+=F[x+5],L.y+=F[x+6],A.x=L.x,A.y=L.y,r(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,L),x===0&&X===!0&&Q.copy(L)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(L.copy(Q),N.currentPath.currentPoint.copy(L),ce=!0);break;default:console.warn(Y)}X=!1}return N}function o(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let N=0;N<U.sheet.cssRules.length;N++){const L=U.sheet.cssRules[N];if(L.type!==1)continue;const A=L.selectorText.split(/,/gm).filter(Boolean).map(Q=>Q.trim());for(let Q=0;Q<A.length;Q++){const ce=Object.fromEntries(Object.entries(L.style).filter(([,X])=>X!==""));oe[A[Q]]=Object.assign(oe[A[Q]]||{},ce)}}}function r(U,N,L,A,Q,ce,X,de){if(N==0||L==0){U.lineTo(de.x,de.y);return}A=A*Math.PI/180,N=Math.abs(N),L=Math.abs(L);const P=(X.x-de.x)/2,ne=(X.y-de.y)/2,z=Math.cos(A)*P+Math.sin(A)*ne,Y=-Math.sin(A)*P+Math.cos(A)*ne;let $=N*N,fe=L*L;const F=z*z,x=Y*Y,S=F/$+x/fe;if(S>1){const ve=Math.sqrt(S);N=ve*N,L=ve*L,$=N*N,fe=L*L}const G=$*x+fe*F,me=($*fe-G)/G;let ge=Math.sqrt(Math.max(0,me));Q===ce&&(ge=-ge);const le=ge*N*Y/L,Ae=-ge*L*z/N,xe=Math.cos(A)*le-Math.sin(A)*Ae+(X.x+de.x)/2,Re=Math.sin(A)*le+Math.cos(A)*Ae+(X.y+de.y)/2,Ie=a(1,0,(z-le)/N,(Y-Ae)/L),ke=a((z-le)/N,(Y-Ae)/L,(-z-le)/N,(-Y-Ae)/L)%(Math.PI*2);U.currentPath.absellipse(xe,Re,N,L,Ie,Ie+ke,ce===0,A)}function a(U,N,L,A){const Q=U*L+N*A,ce=Math.sqrt(U*U+N*N)*Math.sqrt(L*L+A*A);let X=Math.acos(Math.max(-1,Math.min(1,Q/ce)));return U*A-N*L<0&&(X=-X),X}function c(U){const N=g(U.getAttribute("x")||0),L=g(U.getAttribute("y")||0),A=g(U.getAttribute("rx")||U.getAttribute("ry")||0),Q=g(U.getAttribute("ry")||U.getAttribute("rx")||0),ce=g(U.getAttribute("width")),X=g(U.getAttribute("height")),de=1-.551915024494,P=new Ms;return P.moveTo(N+A,L),P.lineTo(N+ce-A,L),(A!==0||Q!==0)&&P.bezierCurveTo(N+ce-A*de,L,N+ce,L+Q*de,N+ce,L+Q),P.lineTo(N+ce,L+X-Q),(A!==0||Q!==0)&&P.bezierCurveTo(N+ce,L+X-Q*de,N+ce-A*de,L+X,N+ce-A,L+X),P.lineTo(N+A,L+X),(A!==0||Q!==0)&&P.bezierCurveTo(N+A*de,L+X,N,L+X-Q*de,N,L+X-Q),P.lineTo(N,L+Q),(A!==0||Q!==0)&&P.bezierCurveTo(N,L+Q*de,N+A*de,L,N+A,L),P}function l(U){function N(ce,X,de){const P=g(X),ne=g(de);Q===0?A.moveTo(P,ne):A.lineTo(P,ne),Q++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Ms;let Q=0;return U.getAttribute("points").replace(L,N),A.currentPath.autoClose=!0,A}function u(U){function N(ce,X,de){const P=g(X),ne=g(de);Q===0?A.moveTo(P,ne):A.lineTo(P,ne),Q++}const L=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Ms;let Q=0;return U.getAttribute("points").replace(L,N),A.currentPath.autoClose=!1,A}function d(U){const N=g(U.getAttribute("cx")||0),L=g(U.getAttribute("cy")||0),A=g(U.getAttribute("r")||0),Q=new Jo;Q.absarc(N,L,A,0,Math.PI*2);const ce=new Ms;return ce.subPaths.push(Q),ce}function f(U){const N=g(U.getAttribute("cx")||0),L=g(U.getAttribute("cy")||0),A=g(U.getAttribute("rx")||0),Q=g(U.getAttribute("ry")||0),ce=new Jo;ce.absellipse(N,L,A,Q,0,Math.PI*2);const X=new Ms;return X.subPaths.push(ce),X}function m(U){const N=g(U.getAttribute("x1")||0),L=g(U.getAttribute("y1")||0),A=g(U.getAttribute("x2")||0),Q=g(U.getAttribute("y2")||0),ce=new Ms;return ce.moveTo(N,L),ce.lineTo(A,Q),ce.currentPath.autoClose=!1,ce}function v(U,N){N=Object.assign({},N);let L={};if(U.hasAttribute("class")){const X=U.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<X.length;de++)L=Object.assign(L,oe["."+X[de]])}U.hasAttribute("id")&&(L=Object.assign(L,oe["#"+U.getAttribute("id")]));function A(X,de,P){P===void 0&&(P=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),U.hasAttribute(X)&&(N[de]=P(U.getAttribute(X))),L[X]&&(N[de]=P(L[X])),U.style&&U.style[X]!==""&&(N[de]=P(U.style[X]))}function Q(X){return Math.max(0,Math.min(1,g(X)))}function ce(X){return Math.max(0,g(X))}return A("fill","fill"),A("fill-opacity","fillOpacity",Q),A("fill-rule","fillRule"),A("opacity","opacity",Q),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",Q),A("stroke-width","strokeWidth",ce),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",ce),A("visibility","visibility"),N}function y(U,N){return U-(N-U)}function p(U,N,L){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Q=0,ce=1,X=2,de=3;let P=Q,ne=!0,z="",Y="";const $=[];function fe(G,me,ge){const le=new SyntaxError('Unexpected character "'+G+'" at index '+me+".");throw le.partial=ge,le}function F(){z!==""&&(Y===""?$.push(Number(z)):$.push(Number(z)*Math.pow(10,Number(Y)))),z="",Y=""}let x;const S=U.length;for(let G=0;G<S;G++){if(x=U[G],Array.isArray(N)&&N.includes($.length%L)&&A.FLAGS.test(x)){P=ce,z=x,F();continue}if(P===Q){if(A.WHITESPACE.test(x))continue;if(A.DIGIT.test(x)||A.SIGN.test(x)){P=ce,z=x;continue}if(A.POINT.test(x)){P=X,z=x;continue}A.COMMA.test(x)&&(ne&&fe(x,G,$),ne=!0)}if(P===ce){if(A.DIGIT.test(x)){z+=x;continue}if(A.POINT.test(x)){z+=x,P=X;continue}if(A.EXP.test(x)){P=de;continue}A.SIGN.test(x)&&z.length===1&&A.SIGN.test(z[0])&&fe(x,G,$)}if(P===X){if(A.DIGIT.test(x)){z+=x;continue}if(A.EXP.test(x)){P=de;continue}A.POINT.test(x)&&z[z.length-1]==="."&&fe(x,G,$)}if(P===de){if(A.DIGIT.test(x)){Y+=x;continue}if(A.SIGN.test(x)){if(Y===""){Y+=x;continue}Y.length===1&&A.SIGN.test(Y)&&fe(x,G,$)}}A.WHITESPACE.test(x)?(F(),P=Q,ne=!1):A.COMMA.test(x)?(F(),P=Q,ne=!0):A.SIGN.test(x)?(F(),P=ce,z=x):A.POINT.test(x)?(F(),P=X,z=x):fe(x,G,$)}return F(),$}const h=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(U){let N="px";if(typeof U=="string"||U instanceof String)for(let A=0,Q=h.length;A<Q;A++){const ce=h[A];if(U.endsWith(ce)){N=ce,U=U.substring(0,U.length-ce.length);break}}let L;return N==="px"&&t.defaultUnit!=="px"?L=_.in[t.defaultUnit]/t.defaultDPI:(L=_[N][t.defaultUnit],L<0&&(L=_[N].in*t.defaultDPI)),L*parseFloat(U)}function b(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;const N=R(U);return O.length>0&&N.premultiply(O[O.length-1]),ue.copy(N),O.push(N),N}function R(U){const N=new Be,L=q;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){const A=g(U.getAttribute("x")),Q=g(U.getAttribute("y"));N.translate(A,Q)}if(U.hasAttribute("transform")){const A=U.getAttribute("transform").split(")");for(let Q=A.length-1;Q>=0;Q--){const ce=A[Q].trim();if(ce==="")continue;const X=ce.indexOf("("),de=ce.length;if(X>0&&X<de){const P=ce.slice(0,X),ne=p(ce.slice(X+1));switch(L.identity(),P){case"translate":if(ne.length>=1){const z=ne[0];let Y=0;ne.length>=2&&(Y=ne[1]),L.translate(z,Y)}break;case"rotate":if(ne.length>=1){let z=0,Y=0,$=0;z=ne[0]*Math.PI/180,ne.length>=3&&(Y=ne[1],$=ne[2]),j.makeTranslation(-Y,-$),Z.makeRotation(z),B.multiplyMatrices(Z,j),j.makeTranslation(Y,$),L.multiplyMatrices(j,B)}break;case"scale":if(ne.length>=1){const z=ne[0];let Y=z;ne.length>=2&&(Y=ne[1]),L.scale(z,Y)}break;case"skewX":ne.length===1&&L.set(1,Math.tan(ne[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ne.length===1&&L.set(1,0,0,Math.tan(ne[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ne.length===6&&L.set(ne[0],ne[2],ne[4],ne[1],ne[3],ne[5],0,0,1);break}}N.premultiply(L)}}return N}function E(U,N){function L(X){ae.set(X.x,X.y,1).applyMatrix3(N),X.set(ae.x,ae.y)}function A(X){const de=X.xRadius,P=X.yRadius,ne=Math.cos(X.aRotation),z=Math.sin(X.aRotation),Y=new I(de*ne,de*z,0),$=new I(-P*z,P*ne,0),fe=Y.applyMatrix3(N),F=$.applyMatrix3(N),x=q.set(fe.x,F.x,0,fe.y,F.y,0,0,0,1),S=j.copy(x).invert(),ge=Z.copy(S).transpose().multiply(S).elements,le=V(ge[0],ge[1],ge[4]),Ae=Math.sqrt(le.rt1),xe=Math.sqrt(le.rt2);if(X.xRadius=1/Ae,X.yRadius=1/xe,X.aRotation=Math.atan2(le.sn,le.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ie=j.set(Ae,0,0,0,xe,0,0,0,1),ke=Z.set(le.cs,le.sn,0,-le.sn,le.cs,0,0,0,1),ve=Ie.multiply(ke).multiply(x),Je=We=>{const{x:Fe,y:Ne}=new I(Math.cos(We),Math.sin(We),0).applyMatrix3(ve);return Math.atan2(Ne,Fe)};X.aStartAngle=Je(X.aStartAngle),X.aEndAngle=Je(X.aEndAngle),T(N)&&(X.aClockwise=!X.aClockwise)}}function Q(X){const de=M(N),P=w(N);X.xRadius*=de,X.yRadius*=P;const ne=de>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);X.aRotation+=ne,T(N)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ce=U.subPaths;for(let X=0,de=ce.length;X<de;X++){const ne=ce[X].curves;for(let z=0;z<ne.length;z++){const Y=ne[z];Y.isLineCurve?(L(Y.v1),L(Y.v2)):Y.isCubicBezierCurve?(L(Y.v0),L(Y.v1),L(Y.v2),L(Y.v3)):Y.isQuadraticBezierCurve?(L(Y.v0),L(Y.v1),L(Y.v2)):Y.isEllipseCurve&&(J.set(Y.aX,Y.aY),L(J),Y.aX=J.x,Y.aY=J.y,k(N)?A(Y):Q(Y))}}}function T(U){const N=U.elements;return N[0]*N[4]-N[1]*N[3]<0}function k(U){const N=U.elements,L=N[0]*N[3]+N[1]*N[4];if(L===0)return!1;const A=M(U),Q=w(U);return Math.abs(L/(A*Q))>Number.EPSILON}function M(U){const N=U.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function w(U){const N=U.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function V(U,N,L){let A,Q,ce,X,de;const P=U+L,ne=U-L,z=Math.sqrt(ne*ne+4*N*N);return P>0?(A=.5*(P+z),de=1/A,Q=U*de*L-N*de*N):P<0?Q=.5*(P-z):(A=.5*z,Q=-.5*z),ne>0?ce=ne+z:ce=ne-z,Math.abs(ce)>2*Math.abs(N)?(de=-2*N/ce,X=1/Math.sqrt(1+de*de),ce=de*X):Math.abs(N)===0?(ce=1,X=0):(de=-.5*ce/N,ce=1/Math.sqrt(1+de*de),X=de*ce),ne>0&&(de=ce,ce=-X,X=de),{rt1:A,rt2:Q,cs:ce,sn:X}}const W=[],oe={},O=[],q=new Be,j=new Be,Z=new Be,B=new Be,J=new pe,ae=new I,ue=new Be,ye=new DOMParser().parseFromString(e,"image/svg+xml");return i(ye.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:ye.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function o(y,p,h,_){const g=y.x,b=p.x,R=h.x,E=_.x,T=y.y,k=p.y,M=h.y,w=_.y,V=(E-R)*(T-M)-(w-M)*(g-R),W=(b-g)*(T-M)-(k-T)*(g-R),oe=(w-M)*(b-g)-(E-R)*(k-T),O=V/oe,q=W/oe;if(oe===0&&V!==0||O<=0||O>=1||q<0||q>1)return null;if(V===0&&oe===0){for(let j=0;j<2;j++)if(r(j===0?h:_,y,p),s.loc==i.ORIGIN){const Z=j===0?h:_;return{x:Z.x,y:Z.y,t:s.t}}else if(s.loc==i.BETWEEN){const Z=+(g+s.t*(b-g)).toPrecision(10),B=+(T+s.t*(k-T)).toPrecision(10);return{x:Z,y:B,t:s.t}}return null}else{for(let B=0;B<2;B++)if(r(B===0?h:_,y,p),s.loc==i.ORIGIN){const J=B===0?h:_;return{x:J.x,y:J.y,t:s.t}}const j=+(g+O*(b-g)).toPrecision(10),Z=+(T+O*(k-T)).toPrecision(10);return{x:j,y:Z,t:O}}}function r(y,p,h){const _=h.x-p.x,g=h.y-p.y,b=y.x-p.x,R=y.y-p.y,E=_*R-b*g;if(y.x===p.x&&y.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(y.x===h.x&&y.y===h.y){s.loc=i.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=i.LEFT;return}if(E>Number.EPSILON){s.loc=i.RIGHT;return}if(_*b<0||g*R<0){s.loc=i.BEHIND;return}if(Math.sqrt(_*_+g*g)<Math.sqrt(b*b+R*R)){s.loc=i.BEYOND;return}let T;_!==0?T=b/_:T=R/g,s.loc=i.BETWEEN,s.t=T}function a(y,p){const h=[],_=[];for(let g=1;g<y.length;g++){const b=y[g-1],R=y[g];for(let E=1;E<p.length;E++){const T=p[E-1],k=p[E],M=o(b,R,T,k);M!==null&&h.find(w=>w.t<=M.t+Number.EPSILON&&w.t>=M.t-Number.EPSILON)===void 0&&(h.push(M),_.push(new pe(M.x,M.y)))}}return _}function c(y,p,h){const _=new pe;p.getCenter(_);const g=[];return h.forEach(b=>{b.boundingBox.containsPoint(_)&&a(y,b.points).forEach(E=>{g.push({identifier:b.identifier,isCW:b.isCW,point:E})})}),g.sort((b,R)=>b.point.x-R.point.x),g}function l(y,p,h,_,g){(g==null||g==="")&&(g="nonzero");const b=new pe;y.boundingBox.getCenter(b);const R=[new pe(h,b.y),new pe(_,b.y)],E=c(R,y.boundingBox,p);E.sort((W,oe)=>W.point.x-oe.point.x);const T=[],k=[];E.forEach(W=>{W.identifier===y.identifier?T.push(W):k.push(W)});const M=T[0].point.x,w=[];let V=0;for(;V<k.length&&k[V].point.x<M;)w.length>0&&w[w.length-1]===k[V].identifier?w.pop():w.push(k[V].identifier),V++;if(w.push(y.identifier),g==="evenodd"){const W=w.length%2===0,oe=w[w.length-2];return{identifier:y.identifier,isHole:W,for:oe}}else if(g==="nonzero"){let W=!0,oe=null,O=null;for(let q=0;q<w.length;q++){const j=w[q];W?(O=p[j].isCW,W=!1,oe=j):O!==p[j].isCW&&(O=p[j].isCW,W=!0)}return{identifier:y.identifier,isHole:W,for:oe}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let u=999999999,d=-999999999,f=e.subPaths.map(y=>{const p=y.getPoints();let h=-999999999,_=999999999,g=-999999999,b=999999999;for(let R=0;R<p.length;R++){const E=p[R];E.y>h&&(h=E.y),E.y<_&&(_=E.y),E.x>g&&(g=E.x),E.x<b&&(b=E.x)}return d<=g&&(d=g+1),u>=b&&(u=b-1),{curves:y.curves,points:p,isCW:pi.isClockWise(p),identifier:-1,boundingBox:new xA(new pe(b,_),new pe(g,h))}});f=f.filter(y=>y.points.length>1);for(let y=0;y<f.length;y++)f[y].identifier=y;const m=f.map(y=>l(y,f,u,d,e.userData?e.userData.style.fillRule:void 0)),v=[];return f.forEach(y=>{if(!m[y.identifier].isHole){const h=new Xs;h.curves=y.curves,m.filter(g=>g.isHole&&g.for===y.identifier).forEach(g=>{const b=f[g.identifier],R=new Jo;R.curves=b.curves,h.holes.push(R)}),v.push(h)}}),v}static getStrokeStyle(e,t,i,s,o){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",o=o!==void 0?o:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:o}}static pointsToStroke(e,t,i,s){const o=[],r=[],a=[];if($l.pointsToStrokeWithBuffers(e,t,i,s,o,r,a)===0)return null;const c=new gt;return c.setAttribute("position",new Qe(o,3)),c.setAttribute("normal",new Qe(r,3)),c.setAttribute("uv",new Qe(a,2)),c}static pointsToStrokeWithBuffers(e,t,i,s,o,r,a,c){const l=new pe,u=new pe,d=new pe,f=new pe,m=new pe,v=new pe,y=new pe,p=new pe,h=new pe,_=new pe,g=new pe,b=new pe,R=new pe,E=new pe,T=new pe,k=new pe,M=new pe;i=i!==void 0?i:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,e=ne(e);const w=e.length;if(w<2)return 0;const V=e[0].equals(e[w-1]);let W,oe=e[0],O;const q=t.strokeWidth/2,j=1/(w-1);let Z=0,B,J,ae,ue,ye=!1,ee=0,U=c*3,N=c*2;L(e[0],e[1],l).multiplyScalar(q),p.copy(e[0]).sub(l),h.copy(e[0]).add(l),_.copy(p),g.copy(h);for(let z=1;z<w;z++){W=e[z],z===w-1?V?O=e[1]:O=void 0:O=e[z+1];const Y=l;if(L(oe,W,Y),d.copy(Y).multiplyScalar(q),b.copy(W).sub(d),R.copy(W).add(d),B=Z+j,J=!1,O!==void 0){L(W,O,u),d.copy(u).multiplyScalar(q),E.copy(W).sub(d),T.copy(W).add(d),ae=!0,d.subVectors(O,oe),Y.dot(d)<0&&(ae=!1),z===1&&(ye=ae),d.subVectors(O,W),d.normalize();const $=Math.abs(Y.dot(d));if($>Number.EPSILON){const fe=q/$;d.multiplyScalar(-fe),f.subVectors(W,oe),m.copy(f).setLength(fe).add(d),k.copy(m).negate();const F=m.length(),x=f.length();f.divideScalar(x),v.subVectors(O,W);const S=v.length();switch(v.divideScalar(S),f.dot(k)<x&&v.dot(k)<S&&(J=!0),M.copy(m).add(W),k.add(W),ue=!1,J?ae?(T.copy(k),R.copy(k)):(E.copy(k),b.copy(k)):ce(),t.strokeLineJoin){case"bevel":X(ae,J,B);break;case"round":de(ae,J),ae?Q(W,b,E,B,0):Q(W,T,R,B,1);break;case"miter":case"miter-clip":default:const G=q*t.strokeMiterLimit/F;if(G<1)if(t.strokeLineJoin!=="miter-clip"){X(ae,J,B);break}else de(ae,J),ae?(v.subVectors(M,b).multiplyScalar(G).add(b),y.subVectors(M,E).multiplyScalar(G).add(E),A(b,B,0),A(v,B,0),A(W,B,.5),A(W,B,.5),A(v,B,0),A(y,B,0),A(W,B,.5),A(y,B,0),A(E,B,0)):(v.subVectors(M,R).multiplyScalar(G).add(R),y.subVectors(M,T).multiplyScalar(G).add(T),A(R,B,1),A(v,B,1),A(W,B,.5),A(W,B,.5),A(v,B,1),A(y,B,1),A(W,B,.5),A(y,B,1),A(T,B,1));else J?(ae?(A(h,Z,1),A(p,Z,0),A(M,B,0),A(h,Z,1),A(M,B,0),A(k,B,1)):(A(h,Z,1),A(p,Z,0),A(M,B,1),A(p,Z,0),A(k,B,0),A(M,B,1)),ae?E.copy(M):T.copy(M)):ae?(A(b,B,0),A(M,B,0),A(W,B,.5),A(W,B,.5),A(M,B,0),A(E,B,0)):(A(R,B,1),A(M,B,1),A(W,B,.5),A(W,B,.5),A(M,B,1),A(T,B,1)),ue=!0;break}}else ce()}else ce();!V&&z===w-1&&P(e[0],_,g,ae,!0,Z),Z=B,oe=W,p.copy(E),h.copy(T)}if(!V)P(W,b,R,ae,!1,B);else if(J&&o){let z=M,Y=k;ye!==ae&&(z=k,Y=M),ae?(ue||ye)&&(Y.toArray(o,0*3),Y.toArray(o,3*3),ue&&z.toArray(o,1*3)):(ue||!ye)&&(Y.toArray(o,1*3),Y.toArray(o,3*3),ue&&z.toArray(o,0*3))}return ee;function L(z,Y,$){return $.subVectors(Y,z),$.set(-$.y,$.x).normalize()}function A(z,Y,$){o&&(o[U]=z.x,o[U+1]=z.y,o[U+2]=0,r&&(r[U]=0,r[U+1]=0,r[U+2]=1),U+=3,a&&(a[N]=Y,a[N+1]=$,N+=2)),ee+=3}function Q(z,Y,$,fe,F){l.copy(Y).sub(z).normalize(),u.copy($).sub(z).normalize();let x=Math.PI;const S=l.dot(u);Math.abs(S)<1&&(x=Math.abs(Math.acos(S))),x/=i,d.copy(Y);for(let G=0,me=i-1;G<me;G++)f.copy(d).rotateAround(z,x),A(d,fe,F),A(f,fe,F),A(z,fe,.5),d.copy(f);A(f,fe,F),A($,fe,F),A(z,fe,.5)}function ce(){A(h,Z,1),A(p,Z,0),A(b,B,0),A(h,Z,1),A(b,B,1),A(R,B,0)}function X(z,Y,$){Y?z?(A(h,Z,1),A(p,Z,0),A(b,B,0),A(h,Z,1),A(b,B,0),A(k,B,1),A(b,$,0),A(E,$,0),A(k,$,.5)):(A(h,Z,1),A(p,Z,0),A(R,B,1),A(p,Z,0),A(k,B,0),A(R,B,1),A(R,$,1),A(k,$,0),A(T,$,1)):z?(A(b,$,0),A(E,$,0),A(W,$,.5)):(A(R,$,1),A(T,$,0),A(W,$,.5))}function de(z,Y){Y&&(z?(A(h,Z,1),A(p,Z,0),A(b,B,0),A(h,Z,1),A(b,B,0),A(k,B,1),A(b,Z,0),A(W,B,.5),A(k,B,1),A(W,B,.5),A(E,Z,0),A(k,B,1)):(A(h,Z,1),A(p,Z,0),A(R,B,1),A(p,Z,0),A(k,B,0),A(R,B,1),A(R,Z,1),A(k,B,0),A(W,B,.5),A(W,B,.5),A(k,B,0),A(T,Z,1)))}function P(z,Y,$,fe,F,x){switch(t.strokeLineCap){case"round":F?Q(z,$,Y,x,.5):Q(z,Y,$,x,.5);break;case"square":if(F)l.subVectors(Y,z),u.set(l.y,-l.x),d.addVectors(l,u).add(z),f.subVectors(u,l).add(z),fe?(d.toArray(o,1*3),f.toArray(o,0*3),f.toArray(o,3*3)):(d.toArray(o,1*3),d.toArray(o,3*3),f.toArray(o,0*3));else{l.subVectors($,z),u.set(l.y,-l.x),d.addVectors(l,u).add(z),f.subVectors(u,l).add(z);const S=o.length;fe?(d.toArray(o,S-1*3),f.toArray(o,S-2*3),f.toArray(o,S-4*3)):(f.toArray(o,S-2*3),d.toArray(o,S-1*3),f.toArray(o,S-4*3))}break}}function ne(z){let Y=!1;for(let fe=1,F=z.length-1;fe<F;fe++)if(z[fe].distanceTo(z[fe+1])<s){Y=!0;break}if(!Y)return z;const $=[];$.push(z[0]);for(let fe=1,F=z.length-1;fe<F;fe++)z[fe].distanceTo(z[fe+1])>=s&&$.push(z[fe]);return $.push(z[z.length-1]),$}}}const CI={[$a.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[$a.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[$a.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[$a.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},Yy=[];let zs=null,Ns=null,Fh=null;function Zy(n){Fh&&(Fh.visible=!!n)}const Bs=new Ke,zc=new Ct,Yg=new I,Zg=new I(1,1,1),Kg=new I(0,1,0),$o=new Te;function PI(){return new gu(bt.ring.majorRadius,bt.ring.tubeRadius,10,48)}const Ky={};function II(){const n=new $l,e=bt.symbol.size/960,t=bt.symbol.extrudeDepth/e;for(const[i,s]of Object.entries(CI)){const o=n.parse(s),r=[];for(const c of o.paths)r.push(...$l.createShapes(c));const a=new uf(r,{depth:t,bevelEnabled:!1});a.scale(1,-1,1),a.center(),a.scale(e,e,e),Ky[i]=a}}function NI(n,e,t){let i=-1/0;for(let s=-t;s<=t;s+=.5)for(let o=-t;o<=t;o+=.5){if(s*s+o*o>t*t)continue;const r=Rt(n+s,e+o);r>i&&(i=r)}return i}function DI(n,e){const t=bt.ring;let i=null,s=null;e:for(let d=1;d<=t.coastSnapMaxRadius;d+=1){const f=Math.max(8,Math.round(d*8));for(let m=0;m<f;m++){const v=m/f*Math.PI*2,y=n+Math.cos(v)*d,p=e+Math.sin(v)*d;if(Rt(y,p)>=Ee.waterLevel){i=y,s=p;break e}}}if(i===null)return{x:n,z:e};let o=n-i,r=e-s;const a=Math.hypot(o,r)||1;o/=a,r/=a;let c=i+o*t.coastSeawardOffset,l=s+r*t.coastSeawardOffset;const u=Ee.waterLevel+t.coastRingHeight-t.majorRadius;for(let d=0;d<8&&NI(c,l,t.majorRadius+.5)>u;d++)c+=o*1.5,l+=r*1.5;return{x:c,z:l}}function UI(n,e){const t=bt.ring,i=Rt(n,e);if(i<Ee.waterLevel){const a=DI(n,e);return{x:a.x,z:a.z,y:Ee.waterLevel+t.coastRingHeight}}const s=t.terrainSearchRadius;let o=-1/0;for(let a=-s;a<=s;a+=1)for(let c=-s;c<=s;c+=1){if(a*a+c*c>s*s)continue;const l=Mr(n+a,e+c);l>o&&(o=l)}const r=Math.max(i,o+t.terrainClearance-t.hoverHeight);return{x:n,z:e,y:r+t.hoverHeight}}function OI(){II();const n=PI(),e=new lt;Fh=e;const t={};for(const r of Rr)t[r.type]=(t[r.type]||0)+1;const i=dh(new Vn({transparent:!0}));hh(n,Rr.length,bt.ring.opacity);const s=new on(n,i,Rr.length);s.frustumCulled=!1,e.add(s),zs=s;const o=dh(new ut({transparent:!0,flatShading:!0,side:Zt}));Ns={};for(const r of Object.keys(t)){const a=Ky[r];hh(a,t[r],.95);const c=new on(a,o,t[r]);c.frustumCulled=!1,e.add(c),Ns[r]={mesh:c,next:0}}for(let r=0;r<Rr.length;r++){const a=Rr[r],c=bt.colorsByType[a.type],{x:l,y:u,z:d}=UI(a.x,a.z),f=Ns[a.type],m=f.next++;Bs.makeTranslation(l,u,d),s.setMatrixAt(r,Bs),f.mesh.setMatrixAt(m,Bs),s.setColorAt(r,$o.setHex(c.ring)),f.mesh.setColorAt(m,$o.setHex(c.symbol)),Yy.push({poi:a,ringIndex:r,symbolMesh:f.mesh,symbolIndex:m,ringAlpha:n.attributes.instanceAlpha.array,symbolAlpha:f.mesh.geometry.attributes.instanceAlpha.array,x:l,y:u,z:d,spin:0,frozen:!1,wasInsideZone:!1,appliedActivated:null})}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0;for(const r of Object.keys(Ns)){const a=Ns[r].mesh;a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0}return e}function kI(n,e){const t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;return t*t+i*i+s*s<=bt.activation.radius*bt.activation.radius}function FI(){const n=kx(w0()),e=te.oneShotTier|0;return n>e?(te.oneShotTier=n,n):0}function zI(n){const e=bt.rewardsByType[n.type];if(te.testMode){kg(n.name,e.punkte,e.gofios,0);return}const t=!!te.exploredPOIs[n.id],i=t?Math.round(e.punkte*bt.revisitPunkteFactor):e.punkte;cu(i),xn(t?"ring-recollect":"ring-first");let s=0,o=0;t||(te.exploredPOIs[n.id]=!0,te.gofiosByIsland[n.island]=(te.gofiosByIsland[n.island]|0)+e.gofios,s=e.gofios,o=FI()),kg(n.name,i,s,o),Xt()}function BI(n,e){if(e)zs.setColorAt(n.ringIndex,$o.setHex(bt.ring.colorActivated)),n.ringAlpha[n.ringIndex]=bt.ring.opacityActivated,n.symbolMesh.setColorAt(n.symbolIndex,$o.setHex(bt.symbol.colorActivated)),n.symbolAlpha[n.symbolIndex]=.55;else{const t=bt.colorsByType[n.poi.type];zs.setColorAt(n.ringIndex,$o.setHex(t.ring)),n.ringAlpha[n.ringIndex]=bt.ring.opacity,n.symbolMesh.setColorAt(n.symbolIndex,$o.setHex(t.symbol)),n.symbolAlpha[n.symbolIndex]=.95}zs.instanceColor.needsUpdate=!0,zs.geometry.attributes.instanceAlpha.needsUpdate=!0,n.symbolMesh.instanceColor.needsUpdate=!0,n.symbolMesh.geometry.attributes.instanceAlpha.needsUpdate=!0,n.frozen=e}function HI(n,e){if(D.tutorial){Oh();return}const t=e.position,i=Ox(t);if(i!==te.currentIsland){if(te.currentIsland=i,!te.testMode&&!te.visitedIslands[i]){te.visitedIslands[i]=!0,te.obsidian=(te.obsidian|0)+ul.islandDiscoveryDiamonds;const r=Lt.find(a=>a.id===i);Y2(r?r.name:i,ul.islandDiscoveryDiamonds)}Xt()}let s=null,o=bt.hoverLabelRadius*bt.hoverLabelRadius;for(const r of Yy){const a=!te.testMode&&!!te.exploredPOIs[r.poi.id];a!==r.appliedActivated&&(BI(r,a),r.appliedActivated=a);const c=Math.atan2(t.x-r.x,t.z-r.z);zc.setFromAxisAngle(Kg,c),Bs.compose(Yg.set(r.x,r.y,r.z),zc,Zg),zs.setMatrixAt(r.ringIndex,Bs),r.frozen||(r.spin+=bt.symbol.rotRate*n),zc.setFromAxisAngle(Kg,c+r.spin),Bs.compose(Yg.set(r.x,r.y,r.z),zc,Zg),r.symbolMesh.setMatrixAt(r.symbolIndex,Bs);const l=kI(r,t);if(l&&!r.wasInsideZone&&zI(r.poi),r.wasInsideZone=l,te.exploredPOIs[r.poi.id]){const u=t.x-r.x,d=t.z-r.z,f=u*u+d*d;f<o&&(o=f,s=r.poi)}}zs.instanceMatrix.needsUpdate=!0;for(const r of Object.keys(Ns))Ns[r].mesh.instanceMatrix.needsUpdate=!0;s?Q2(s.name):Oh()}const Tt={LAUNCH:0,NAV:1,RINGS:2,GREY_BOOST:3,THERMAL:4,RING_HIGH:5,RING_LOW:6,END:7},jo=[{key:"tutorial.navLeft",test:n=>n.roll<=-.45,invert:!1},{key:"tutorial.navRight",test:n=>n.roll>=it.navThreshold,invert:!1},{key:"tutorial.navUp",test:n=>n.pitch>=it.navThreshold,invert:!0},{key:"tutorial.navDown",test:n=>n.pitch<=-.45,invert:!0}],Pi=document.getElementById("tutorial-layer"),Bc=document.getElementById("tutorial-banner"),Jg=document.getElementById("tutorial-text"),Qg=document.getElementById("tutorial-invert"),ga=document.getElementById("tutorial-invert-toggle"),_r=document.getElementById("tutorial-skip"),qr=document.getElementById("tutorial-flash"),e0=document.getElementById("tutorial-steer-hint"),Di=document.getElementById("tutorial-end"),t0=document.getElementById("tutorial-end-go");let so=!1,Sn=Tt.LAUNCH,As=null,zo=0,ea=0,ta=0,Ys=null;const es=new I,ls=new I(0,0,-1),zd=new I(1,0,0),zf=new I(0,0,-1),sr={pos:new I,quat:new Ct,state:"PRELAUNCH"};let zh="",Jy=null,Hs=null,mt=[],mi=null,va=null,jl=[];const or={x:0,z:0,radius:it.thermal.radius,strength:it.thermal.strength,baseElevation:0},ln=new I,n0=new Ct,GI=new I(0,1,0),Ds=new I(0,0,-1),Do=new I(0,0,-1),VI=[85,175,300,420,500];function Qy(){return 3046806}function WI(){const n=new lt,e=new gu(3.4,.2,10,40);mt=[];for(let t=0;t<4;t++){const i=new Vn({color:Qy(),transparent:!0,opacity:.95}),s=new tt(e,i);s.visible=!1,n.add(s),mt.push({mesh:s,mat:i,pos:new I,collected:!1,popT:1,forward:0})}return mi=qI(),mi.visible=!1,n.add(mi),n}function qI(){const n=new lt,e=it.thermal,t=yn.columnTop,i=new Vn({color:13625071,transparent:!0,opacity:.18,side:Zt,depthWrite:!1}),s=new Hn(e.radius*1.05,e.radius*.55,t,24,1,!0);s.translate(0,t/2,0),n.add(new tt(s,i));const o=64,r=new Float32Array(o*3);jl=[];for(let l=0;l<o;l++){const u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*e.radius*.82;jl.push({ux:Math.cos(u)*d,uz:Math.sin(u)*d,phase:Math.random()})}const a=new gt;a.setAttribute("position",new Nt(r,3));const c=new pv({color:16777215,size:1.7,transparent:!0,opacity:.6,depthWrite:!1});return va=new mv(a,c),n.add(va),n}function XI(){Hs||(Hs=WI()),Hs.parent||Mt.add(Hs)}function ex(){for(const n of mt)n.mesh.visible=!1;mi&&(mi.visible=!1)}function $I(n){let e=-1/0;for(const t of VI){const i=Rt(es.x+n.x*t,es.z+n.z*t);i>e&&(e=i)}return e}function jI(){const n=Ee.waterLevel+it.corridorClearHeight,e=Math.max(1,it.corridorSearchSteps);let t=1/0;ls.copy(Ds);for(let i=0;i<=e;i++){if(Do.copy(Ds).lerp(zf,i/e),Do.lengthSq()<1e-4)continue;Do.normalize();const s=$I(Do);if(s<n){ls.copy(Do);return}s<t&&(t=s,ls.copy(Do))}}function YI(){es.copy(he.position),ln.set(0,0,-1).applyQuaternion(he.quaternion),Ds.set(ln.x,0,ln.z),Ds.lengthSq()<1e-4&&Ds.set(0,0,-1),Ds.normalize(),Ds.addScaledVector(zf,it.seawardBias).normalize(),jI(),zd.crossVectors(ls,uh).normalize();const n=es.y,e=[it.ring1,it.ring2,it.ring3,it.ring4];for(let s=0;s<4;s++){const o=e[s];ln.copy(es).addScaledVector(ls,o.forward).addScaledVector(zd,o.side);const r=Rt(ln.x,ln.z),a=Math.max(r,Ee.waterLevel)+it.ringClearance,c=Math.max(n+o.dy,a);mt[s].pos.set(ln.x,c,ln.z),mt[s].mesh.position.copy(mt[s].pos),mt[s].forward=o.forward}const t=it.thermal;ln.copy(es).addScaledVector(ls,t.forward).addScaledVector(zd,t.side);const i=Math.max(Rt(ln.x,ln.z),Ee.waterLevel);or.x=ln.x,or.z=ln.z,or.baseElevation=i,mi.position.set(ln.x,i,ln.z)}function Bf(){return(he.position.x-es.x)*ls.x+(he.position.z-es.z)*ls.z}function ZI(n){for(const e of mt){if(!e.mesh.visible)continue;const t=Math.atan2(he.position.x-e.pos.x,he.position.z-e.pos.z);if(n0.setFromAxisAngle(GI,t),e.mesh.quaternion.copy(n0),e.popT<1){e.popT=Math.min(1,e.popT+n*2.2);const i=1+e.popT*.7;e.mesh.scale.setScalar(i),e.mat.opacity=.95*(1-e.popT),e.popT>=1&&(e.mesh.visible=!1)}}if(mi&&mi.visible&&va){const e=va.geometry.attributes.position.array,t=yn.columnTop;for(let i=0;i<jl.length;i++){const s=jl[i];s.phase+=n*.28,s.phase>=1&&(s.phase-=1),e[i*3]=s.ux,e[i*3+1]=s.phase*t,e[i*3+2]=s.uz}va.geometry.attributes.position.needsUpdate=!0}}function Zs(n){const e=mt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(Qy()),e.mat.opacity=.95,e.mesh.visible=!0}function tx(n){const e=mt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(8293522),e.mat.opacity=.4,e.mesh.visible=!0}function nx(){Jg&&(Jg.textContent=zh?we(zh,Jy||void 0):"")}function gs(n,e=null){zh=n,Jy=e,nx(),Bc&&(Bc.classList.remove("step-pop"),Bc.offsetWidth,Bc.classList.add("step-pop"))}function Eu(n){Qg&&(Qg.hidden=!n,n&&ga&&(ga.checked=by()))}function Bh(n){e0&&e0.classList.toggle("show",!!n)}function KI(n){qr&&(qr.textContent=n,qr.classList.remove("show"),qr.offsetWidth,qr.classList.add("show"))}function po(n){sr.pos.copy(he.position),sr.quat.copy(he.quaternion),sr.state=n}function JI(){if(sr.state==="PRELAUNCH"){Ff(As);return}he.position.copy(sr.pos),he.quaternion.copy(sr.quat),D.speed=it.airSpeed,D.flightState=He.FLYING,D.postLiftCooldown=it.resetGrace,D.greyActive=!1,D.oneShotActive=!1,Su()}function Tu(){KI(we("tutorial.retry")),Sn===Tt.RINGS?(Zs(0),tx(1),Yl()):Sn===Tt.RING_HIGH?Zs(2):Sn===Tt.RING_LOW&&Zs(3),JI()}function QI(){Sn=Tt.NAV,zo=0,ea=0,po("FLYING"),gs(jo[0].key),Eu(jo[0].invert)}function eN(n){const e=ho();if(ea=jo[zo].test(e)?ea+n:0,ea>=it.navHold){if(zo++,ea=0,zo>=jo.length){tN();return}gs(jo[zo].key),Eu(jo[zo].invert)}}function Yl(){const n=(mt[0].collected?1:0)+(mt[1].collected?1:0);gs("tutorial.rings",{collected:n,total:2})}function tN(){Sn=Tt.RINGS,Eu(!1),D.speed=Math.max(D.speed,it.ringsEntrySpeed),po("FLYING"),YI(),Zs(0),tx(1),Yl()}function nN(){if(!mt[0].collected)Zl(0)&&(Kl(0),Zs(1),Yl());else if(!mt[1].collected&&Zl(1)){Kl(1),Yl(),iN();return}Bf()>mt[1].forward+it.ringsOvershoot&&Tu()}function iN(){Sn=Tt.GREY_BOOST,ta=0,po("FLYING"),_r&&(_r.hidden=!0),Cf({brake:!0,boost:!1,oneShot:!0}),document.body.classList.add("tut-show-boost"),gs("tutorial.boost")}function sN(n){ta=ho().boost?ta+n:Math.max(0,ta-n*.5),ta>=it.boostHold&&oN()}function oN(){Sn=Tt.THERMAL,po("FLYING"),mi.visible=!0,Zs(2),gs("tutorial.thermal")}function rN(){he.position.y>=mt[2].pos.y-it.thermalReach&&aN()}function aN(){Sn=Tt.RING_HIGH,po("FLYING"),gs("tutorial.ringHigh")}function cN(){if(!mt[2].collected&&Zl(2)){Kl(2),lN();return}Bf()>mt[2].forward+it.highOvershoot&&Tu()}function lN(){Sn=Tt.RING_LOW,po("FLYING"),Zs(3),gs("tutorial.ringLow")}function uN(){if(!mt[3].collected&&Zl(3)){Kl(3),dN();return}Bf()>mt[3].forward+it.highOvershoot&&Tu()}function dN(){Sn=Tt.END,mi.visible=!1,D.paused=!0,Di&&(Di.classList.add("visible"),Di.setAttribute("aria-hidden","false")),Ys=setTimeout(ix,it.endCardMs)}function ix(){Ys&&(clearTimeout(Ys),Ys=null),Di&&(Di.classList.remove("visible"),Di.setAttribute("aria-hidden","true")),ox()}function Zl(n){const e=mt[n],t=he.position.x-e.pos.x,i=he.position.y-e.pos.y,s=he.position.z-e.pos.z;return t*t+i*i+s*s<=it.ringRadius*it.ringRadius}function Kl(n){mt[n].collected=!0,mt[n].popT=0}function sx(){if(so)return;As=ot.find(e=>e.id===it.runwayId)??ot[0],As.activeHeading=As.heading;const n=p1(As);n&&(n.rotation.y=0),zf.set(0,0,-1).applyEuler(new Gn(0,As.activeHeading,0)),t2(),so=!0,D.tutorial=!0,te.introPlayed=!0,Mt.fog=new Fa(Ze.sky,it.fog.start,it.fog.end),XI(),ex(),Zy(!1),qv(!1),fn.indexOf(or)<0&&fn.push(or),Cf({brake:!0,boost:!0,oneShot:!0}),document.body.classList.add("tut-hide-actions"),document.body.classList.remove("tut-show-boost"),Ff(As),Sn=Tt.LAUNCH,po("PRELAUNCH"),Pi&&(Pi.classList.add("visible"),Pi.classList.remove("menu-hidden"),Pi.setAttribute("aria-hidden","false")),_r&&(_r.hidden=!1),gs("tutorial.launch"),Eu(!1),D.paused=!1}function hN(){return PA()?!1:(sx(),!0)}function ox(){if(!so)return;so=!1,D.tutorial=!1,D.paused=!1,Mt.fog=new Fa(Ze.sky,Ee.fogStart,Ee.fogEnd),ex(),Zy(!0),qv(!0),Hs&&Hs.parent&&Mt.remove(Hs);const n=fn.indexOf(or);n>=0&&fn.splice(n,1),Cf({brake:!1,boost:!1,oneShot:!1}),document.body.classList.remove("tut-hide-actions","tut-show-boost"),Pi&&(Pi.classList.remove("visible","menu-hidden"),Pi.setAttribute("aria-hidden","true")),Bh(!1),IA(!0)}function rx(){so&&(Ys&&(clearTimeout(Ys),Ys=null),Di&&(Di.classList.remove("visible"),Di.setAttribute("aria-hidden","true")),ox())}function fN(n){if(!so)return;const e=D.paused;if(Pi&&Pi.classList.toggle("menu-hidden",e),e){Bh(!1);return}switch(Bh(Sn===Tt.LAUNCH||Sn===Tt.NAV),Sn){case Tt.LAUNCH:D.flightState===He.FLYING&&QI();break;case Tt.NAV:eN(n);break;case Tt.RINGS:nN();break;case Tt.GREY_BOOST:sN(n);break;case Tt.THERMAL:rN();break;case Tt.RING_HIGH:cN();break;case Tt.RING_LOW:uN();break}ZI(n)}hI(Tu);ga&&ga.addEventListener("change",()=>kl(ga.checked));_r&&_r.addEventListener("click",rx);t0&&t0.addEventListener("click",ix);xu(()=>{so&&nx()});const pN="3.2.0",mN=16,i0={version:pN,build:mN},gN={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},rn=document.getElementById("welcome-overlay"),s0=document.getElementById("welcome-start-sub"),o0=document.getElementById("pause-btn"),ti=document.getElementById("pause-overlay"),r0=document.getElementById("pause-resume"),a0=document.getElementById("pause-home"),ya=document.getElementById("pause-music-toggle"),xa=document.getElementById("pause-sfx-toggle"),vN=document.getElementById("crash"),c0=document.getElementById("welcome-version");c0&&(c0.textContent=`v${i0.version} · Build ${i0.build} · Swiss Innovation Studios`);const _n=document.getElementById("levels-overlay"),na=document.getElementById("levels-map"),rr=document.getElementById("levels-markers"),l0=document.getElementById("levels-title"),Hc=document.getElementById("levels-hint"),Xr=768,Gc=320,u0=1.08;let d0=null,Vc=null;function ax(){if(Vc)return Vc;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const c of Lt)n=Math.min(n,c.x-c.bboxRadius),e=Math.max(e,c.x+c.bboxRadius),t=Math.min(t,c.z-c.bboxRadius),i=Math.max(i,c.z+c.bboxRadius);const s=(n+e)/2,o=(t+i)/2,r=(e-n)/2*u0,a=(i-t)/2*u0;return Vc={cx:s,cz:o,hw:r,hh:a},Vc}function cx(){return rn?.classList.contains("visible")===!0}function h0(){return ti?.classList.contains("visible")===!0}function Wa(){rn&&(rx(),ia(),D.paused=!0,dx(),rn.classList.add("visible"),rn.setAttribute("aria-hidden","false"))}function Hh(){rn&&(rn.classList.remove("visible"),rn.setAttribute("aria-hidden","true"),ux()||(D.paused=!1))}function Gh(){ti&&(D.paused=!0,ya&&(ya.checked=!Lv()),xa&&(xa.checked=!Pv()),ti.classList.add("visible"),ti.setAttribute("aria-hidden","false"))}function ia(){ti&&ti.classList.contains("visible")&&(ti.classList.remove("visible"),ti.setAttribute("aria-hidden","true"),ux()||(D.paused=!1))}function lx(){D.paused||D.flightState!==He.CRASHED&&(D.tutorial||Gh())}function ux(){return rn?.classList.contains("visible")||_n?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function dx(){if(!s0)return;const n=te.checkpointRunwayId;s0.textContent=n?we("welcome.checkpoint",{id:n}):we("welcome.firstFlight")}function yN(){_n&&(rn?.classList.remove("visible"),rn?.setAttribute("aria-hidden","true"),_n.classList.add("visible"),_n.setAttribute("aria-hidden","false"),hx())}function f0(){_n&&(_n.classList.remove("visible"),_n.setAttribute("aria-hidden","true"),Wa())}function hx(){if(!na)return;l0&&(l0.textContent=we("levels.archTitle"));const n=xN(),e=Lt.map(t=>n[t.id]?"1":"0").join("");d0!==e&&(bN(n),d0=e),wN(),EN(n),TN()}function xN(){const n={};for(const e of Lt)n[e.id]=!1;for(const e of ot){if(!te.discoveredRunways[e.id])continue;const t=gN[e.id];t&&(n[t]=!0)}return n}function _N(n,e){let t=Lt[0].id,i=1/0;for(const s of Lt){const o=n-s.x,r=e-s.z,a=o*o+r*r;a<i&&(i=a,t=s.id)}return t}function bN(n){if(!na)return;na.width=Xr,na.height=Gc;const e=na.getContext("2d"),t=e.createImageData(Xr,Gc),{cx:i,cz:s,hw:o,hh:r}=ax(),a=Ee.heightmap.metersPerUnit,c=Ee.waterLevel;for(let l=0;l<Gc;l++){const u=s+(l/(Gc-1)-.5)*2*r;for(let d=0;d<Xr;d++){const f=i+(d/(Xr-1)-.5)*2*o,m=Mr(f,u);let v,y,p;if(m<c+.05)v=52,y=92,p=118;else{const _=_N(f,u),g=m*a;n[_]?[v,y,p]=SN(g):v=y=p=MN(g)}const h=(l*Xr+d)*4;t.data[h]=v,t.data[h+1]=y,t.data[h+2]=p,t.data[h+3]=255}}e.putImageData(t,0,0)}function SN(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function MN(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function fx(n,e){const{cx:t,cz:i,hw:s,hh:o}=ax();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*o)+.5}}function wN(){if(rr){rr.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of ot){const e=!!te.landedRunways[n.id],t=!!te.discoveredRunways[n.id],i=e?"landed":t?"discovered":"locked",{fracX:s,fracY:o}=fx(n.x,n.z);if(s<0||s>1||o<0||o>1)continue;const r=document.createElement("button");r.type="button",r.className=`levels-marker levels-marker-${i}`,r.style.left=(s*100).toFixed(2)+"%",r.style.top=(o*100).toFixed(2)+"%",r.dataset.runwayId=n.id,r.disabled=!e;const a=i==="locked"?we("levels.markerLocked"):n.id;r.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${a}</span>
    `,e?(r.title=we("levels.tipStart",{id:n.id}),r.addEventListener("click",()=>AN(n.id))):t?r.title=we("levels.tipNotLanded",{id:n.id}):r.title=we("levels.tipUndiscovered"),rr.appendChild(r)}}}function EN(n){if(rr){rr.querySelectorAll(".levels-island-label").forEach(e=>e.remove());for(const e of Lt){if(!n[e.id])continue;const{fracX:t,fracY:i}=fx(e.x,e.z);if(t<0||t>1||i<0||i>1)continue;const s=document.createElement("span");s.className="levels-island-label",s.textContent=e.name,s.style.left=(t*100).toFixed(2)+"%",s.style.top=(i*100).toFixed(2)+"%",rr.appendChild(s)}}}function TN(){if(!Hc)return;const n=ot.filter(e=>te.landedRunways[e.id]).length;n===0?Hc.textContent=we("levels.hintNone"):n<ot.length?Hc.textContent=we("levels.hintProgress",{landed:n,total:ot.length}):Hc.textContent=we("levels.hintAll")}async function AN(n){_n?.classList.remove("visible"),_n?.setAttribute("aria-hidden","true"),rn?.classList.remove("visible"),rn?.setAttribute("aria-hidden","true"),D.flightState===He.CRASHED&&await no.onCrashRestart(),D.paused=!1,wu({runwayId:n,forceIntro:!0})}async function RN(){D.flightState===He.CRASHED?(await no.onCrashRestart(),Hh(),wu()):Hh()}function Bd(n){rn?.classList.remove("visible"),rn?.setAttribute("aria-hidden","true"),yr(n,{onClose:Wa})}(function(){rn&&rn.addEventListener("click",t=>{const i=t.target.closest("[data-welcome-action]");if(!i)return;const s=i.dataset.welcomeAction;s==="start"?RN():s==="levels"?yN():s==="hangar"?Bd("hangar"):s==="shop"?Bd("shop"):s==="settings"&&Bd("settings")}),_n&&_n.addEventListener("click",t=>{if(t.target===_n){f0();return}if(t.target.closest('[data-modal-close="levels"]')){f0();return}});const e=document.getElementById("settings-replay-tutorial");e&&e.addEventListener("click",()=>{for(const t of["settings-overlay","welcome-overlay","levels-overlay"]){const i=document.getElementById(t);i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}sx()}),o0&&o0.addEventListener("click",()=>{h0()?ia():Gh()}),r0&&r0.addEventListener("click",ia),ya&&ya.addEventListener("change",()=>{const t=!ya.checked;Cv(t),Zv(t)}),xa&&xa.addEventListener("change",()=>{const t=!xa.checked;Iv(t),Kv(t)}),a0&&a0.addEventListener("click",Wa),ti&&ti.addEventListener("click",t=>{t.target===ti&&ia()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("onboarding-overlay")?.classList.contains("visible")&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!_n?.classList.contains("visible")){if(cx()){Hh(),D.flightState===He.CRASHED&&vN?.classList.add("visible");return}if(h0()){ia();return}D.flightState!==He.CRASHED&&Gh()}})})();xu(()=>{cx()&&dx(),_n?.classList.contains("visible")&&hx()});const Oa=document.getElementById("onboarding-overlay"),Jl=document.getElementById("onboarding-lang-step"),Ql=document.getElementById("onboarding-story-step"),LN=document.getElementById("onboarding-langs"),p0=document.getElementById("onboarding-story-text"),Hd=document.getElementById("onboarding-dots"),eu=document.getElementById("onboarding-next");let ar=0,Vh=null;function px(){const n=we("onboarding.story");return Array.isArray(n)?n:[]}function CN(n){if(Vh=typeof n=="function"?n:()=>{},!Oa||LA()){Vh();return}PN()}function PN(){D.paused=!0,Oa.classList.add("visible"),Oa.setAttribute("aria-hidden","false"),IN()}function IN(){Ql&&(Ql.hidden=!0),Jl&&(Jl.hidden=!1),my(LN,{onPick:n=>{fy(n),NN()}})}function NN(){Jl&&(Jl.hidden=!0),Ql&&(Ql.hidden=!1),ar=0,mx()}function mx(){const n=px();if(p0&&(p0.textContent=n[ar]||""),Hd){Hd.innerHTML="";for(let t=0;t<n.length;t++){const i=document.createElement("span");i.className="onboarding-dot"+(t===ar?" active":""),Hd.appendChild(i)}}const e=ar>=n.length-1;eu&&(eu.textContent=we(e?"onboarding.begin":"onboarding.next"))}function DN(){ar<px().length-1?(ar++,mx()):UN()}function UN(){CA(!0),Oa.classList.remove("visible"),Oa.setAttribute("aria-hidden","true"),Vh()}eu&&eu.addEventListener("click",DN);const Er=new I(0,1,0);function tu(n,e){for(const t of ot){const i=n-t.x,s=e-t.z,o=Math.cos(t.heading),r=Math.sin(t.heading),a=i*o-s*r,c=i*r+s*o;if(Math.abs(a)<t.width/2+cl.vegClearSide&&Math.abs(c)<t.length/2+cl.vegClearEnd)return!0}return!1}const Uo=8;function ON(n,e,t){const i=Ln(n+Uo,e),s=Ln(n-Uo,e),o=Ln(n,e+Uo),r=Ln(n,e-Uo);return t.gx=(i-s)/(2*Uo),t.gz=(o-r)/(2*Uo),t}function kN(){const e=Lt.reduce((t,i)=>t+i.bboxRadius*i.bboxRadius,0);return Lt.map(t=>{const i=t.bboxRadius*t.bboxRadius/e;return Math.max(8e3,Math.floor(At.sampleCount*i))})}function FN(){const{treeDensity:n,shrubDensity:e,grassDensity:t,cropDensity:i,bareDensity:s,droughtShrubDensity:o,snowDensity:r,wetlandDensity:a,laurelMaxAltitude:c}=At,l={};for(const y of Lt)l[y.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const u=At.slopeThreshold,d=At.cliffDensity,f=c*Ee.heightmap.elevationExaggeration,m={gx:0,gz:0};for(const y of Fx){const p=l[y.island];if(!p)continue;const h=y.ringCount,_=y.ringRadius,g=1.4;for(let R=0;R<h;R++){const E=R/h*Math.PI*2+(Math.random()-.5)*.08,T=_*(.88+Math.random()*.24),k=y.x+Math.cos(E)*T,M=y.z+Math.sin(E)*T,w=Rt(k,M);w<Ee.waterLevel+.5||tu(k,M)||p.cliffs.push({x:k,y:w,z:M,gx:Math.cos(E)*g,gz:Math.sin(E)*g})}const b=Math.floor(h*.4);for(let R=0;R<b;R++){const E=Math.random()*Math.PI*2,T=Math.sqrt(Math.random())*_*.75,k=y.x+Math.cos(E)*T,M=y.z+Math.sin(E)*T,w=Rt(k,M);w<Ee.waterLevel+.5||p.rocks.push({x:k,y:w,z:M})}}const v=kN();for(let y=0;y<Lt.length;y++){const p=Lt[y],h=p.bboxRadius,_=v[y],g=l[p.id];for(let b=0;b<_;b++){const R=p.x+(Math.random()-.5)*2*h,E=p.z+(Math.random()-.5)*2*h,T=Rt(R,E);if(T<Ee.waterLevel+.5||tu(R,E))continue;ON(R,E,m);const M=Math.hypot(m.gx,m.gz)>=u&&Math.random()<d;M&&g.cliffs.push({x:R,y:T,z:E,gx:m.gx,gz:m.gz});const w=zn(R,E);w===_t.TREE&&Math.random()<n?T>=f?g.pines.push({x:R,y:T,z:E}):g.laurels.push({x:R,y:T,z:E}):w===_t.SHRUB&&Math.random()<e?g.shrubs.push({x:R,y:T,z:E}):w===_t.GRASS&&Math.random()<t?g.grasses.push({x:R,y:T,z:E}):w===_t.CROP&&Math.random()<i?g.crops.push({x:R,y:T,z:E}):w===_t.BARE?(!M&&Math.random()<s&&g.rocks.push({x:R,y:T,z:E}),Math.random()<o&&g.shrubs.push({x:R,y:T,z:E})):w===_t.SNOW&&Math.random()<r?g.snow.push({x:R,y:T,z:E}):w===_t.WETLAND&&Math.random()<a&&g.wetlands.push({x:R,y:T,z:E})}}return l}function gx(n,e,t,i,s,o,r,a,c){const l=new on(e,i,n.length),u=new on(t,s,n.length),d=new Ke,f=new Ct,m=new I,v=new I;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p],b=o+Math.random()*(r-o);v.set(h,_-.3,g),m.set(b,b+Math.random()*.3,b),f.setFromAxisAngle(Er,Math.random()*Math.PI*2),d.compose(v,f,m),l.setMatrixAt(p,d),u.setMatrixAt(p,d),Va(h,_,g,a*b,c*b)}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const y=new lt;return y.add(l,u),y}function zN(n){const e=new Hn(.18,.26,1.6,5);e.translate(0,.8,0);const t=new Fi(1,4.8,7);t.translate(0,3.8,0);const i=new ut({color:Ze.trunk,flatShading:!0}),s=new ut({color:Ze.pineCanopy,flatShading:!0}),o=At.treeScale;return gx(n,e,t,i,s,.75*o,1.3*o,1,6.2)}function BN(n){const e=new Hn(.22,.32,1,5);e.translate(0,.5,0);const t=new Ba(1.7,7,5);t.scale(1,.85,1),t.translate(0,2,0);const i=new ut({color:Ze.trunk,flatShading:!0}),s=new ut({color:Ze.laurelCanopy,flatShading:!0}),o=At.treeScale;return gx(n,e,t,i,s,.85*o,1.25*o,1.7,3.5)}function HN(n){const e=new Fi(.7,1,5);e.translate(0,.5,0);const t=new ut({color:Ze.shrubBody,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I;for(let c=0;c<n.length;c++){const{x:l,y:u,z:d}=n[c],f=.5+Math.random()*.6;a.set(l,u-.2,d),r.set(f+Math.random()*.2,f,f+Math.random()*.2),o.setFromAxisAngle(Er,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(c,s),Va(l,u,d,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function GN(n){const e=new Fi(.35,.55,4);e.translate(0,.25,0);const t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Te(Ze.grassGround),l=At.grassTints,u=new Te;for(let d=0;d<n.length;d++){const{x:f,y:m,z:v}=n[d],y=.6+Math.random()*.7;a.set(f,m-.1,v),r.set(y,y*(.8+Math.random()*.5),y),o.setFromAxisAngle(Er,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(d,s);const[p,h,_]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*h,c.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function VN(n){const e=new Fi(.4,.75,4);e.translate(0,.35,0);const t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Te(Ze.cropGround),l=At.grassTints,u=new Te;for(let d=0;d<n.length;d++){const{x:f,y:m,z:v}=n[d],y=.7+Math.random()*.6;a.set(f,m-.12,v),r.set(y,y*(.9+Math.random()*.4),y),o.setFromAxisAngle(Er,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(d,s);const[p,h,_]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*h,c.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function WN(n){const e=new za(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Gn,l=new Te(Ze.rock),u=At.rockTintsLow,d=At.rockTintsMid,f=At.rockTintsHigh,m=At.rockZoneLowMax,v=At.rockZoneHighMin,y=new Te;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p];let b,R,E;_<m?(b=u,R=.3,E=1.5):_>v?(b=f,R=.4,E=2.5):(b=d,R=.5,E=3.5);const T=R+Math.random()*Math.random()*(E-R);a.set(h,_-T*.15,g),r.set(T*(.7+Math.random()*.6),T*(.55+Math.random()*.45),T*(.7+Math.random()*.6)),c.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),o.setFromEuler(c),s.compose(a,o,r),i.setMatrixAt(p,s);const[k,M,w]=b[Math.random()*b.length|0];y.setRGB(l.r*k,l.g*M,l.b*w),i.setColorAt(p,y),T>1.5&&Va(h,_,g,T,T)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function qN(n){const e=new za(.6,0),t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new Ct,a=new I,c=new I,l=new I(0,1,0),u=new I,d=new Te(Ze.rock),f=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Te,[v,y]=At.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g,gx:b,gz:R}=n[p];u.set(-b,1,-R).normalize();const E=v+Math.random()*(y-v),T=1.4+Math.random()*1.8;o.setFromUnitVectors(l,u),r.setFromAxisAngle(u,Math.random()*Math.PI*2),o.premultiply(r);const k=(.3+Math.random()*.1)*E;c.set(h-u.x*k,_-u.y*k,g-u.z*k),a.set(T*(.85+Math.random()*.4),E,T*(.85+Math.random()*.4)),s.compose(c,o,a),i.setMatrixAt(p,s);const[M,w,V]=f[Math.random()*f.length|0];m.setRGB(d.r*M,d.g*w,d.b*V),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function XN(n){const e=new za(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Gn,l=new Te;for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],v=.4+Math.random()*.9;a.set(d,f-.05,m),r.set(v*(.9+Math.random()*.3),v*(.25+Math.random()*.2),v*(.9+Math.random()*.3)),c.set(0,Math.random()*Math.PI*2,0),o.setFromEuler(c),s.compose(a,o,r),i.setMatrixAt(u,s);const y=.93+Math.random()*.07;l.setRGB(y,y,y),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function $N(n){const e=new sn(1,.04,1);e.translate(0,.02,0);const t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),s=new Ke,o=new Ct,r=new I,a=new I,c=new Te,l=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],v=1+Math.random()*.8;a.set(d,f+.05,m),r.set(v*(.9+Math.random()*.4),1,v*(.9+Math.random()*.4)),o.setFromAxisAngle(Er,Math.random()*Math.PI*2),s.compose(a,o,r),i.setMatrixAt(u,s);const[y,p,h]=l[Math.random()*l.length|0];c.setRGB(.92*y,.94*p,.96*h),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function jN(n){const{clusterScaleMin:e,clusterScaleMax:t}=At.urban,i=Math.min(1,Math.pow(n/50,.4));return e+i*(t-e)}function YN(){const n=x1(),{churchClusterPixels:e,housesPerPixel:t,housesMin:i,housesMax:s,houseMinSpacing:o,pixelJitter:r}=At.urban,a=[],c=[],l=o*o;for(const u of n){const d=Math.max(i,Math.min(s,Math.round(u.pixelCount*t))),f=jN(u.pixelCount),m=[];let v=0;const y=d*14;for(;m.length<d&&v<y;){v++;const p=u.pixels[Math.random()*u.pixels.length|0],h=p.x+(Math.random()-.5)*r,_=p.z+(Math.random()-.5)*r;let g=!0;for(const R of m){const E=R.x-h,T=R.z-_;if(E*E+T*T<l){g=!1;break}}if(!g)continue;const b=Rt(h,_);b<Ee.waterLevel+.5||tu(h,_)||m.push({x:h,y:b,z:_,scale:f})}if(a.push(...m),u.pixelCount>=e){const p=u.centerX,h=u.centerZ,_=Rt(p,h);_>=Ee.waterLevel+.5&&!tu(p,h)&&c.push({x:p,y:_,z:h,scale:f})}}return{houses:a,churches:c}}function ZN(n){const e=new sn(1.4,1,1.6);e.translate(0,.5,0);const t=new Fi(1.15,.75,4);t.rotateY(Math.PI/4),t.translate(0,1.37,0);const i=new ut({color:Ze.houseWall,flatShading:!0}),s=new ut({color:16777215,flatShading:!0}),o=new on(e,i,n.length),r=new on(t,s,n.length),a=new Ke,c=new Ct,l=new I,u=new I,d=new Te(Ze.houseRoof),f=At.roofTints,m=new Te;for(let y=0;y<n.length;y++){const{x:p,y:h,z:_,scale:g}=n[y],b=g*(.85+Math.random()*.3),R=g*(.8+Math.random()*.35),E=g*(.85+Math.random()*.3);u.set(p,h,_),l.set(b,R,E);const T=Math.random()*8|0;c.setFromAxisAngle(Er,T*Math.PI/4),a.compose(u,c,l),o.setMatrixAt(y,a),r.setMatrixAt(y,a);const[k,M,w]=f[Math.random()*f.length|0];m.setRGB(d.r*k,d.g*M,d.b*w),r.setColorAt(y,m),Va(p,h,_,.85*g,1.75*g)}o.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0;const v=new lt;return v.add(o,r),v}function KN(){const n=new ut({color:Ze.houseWall,flatShading:!0}),e=new ut({color:Ze.houseRoof,flatShading:!0}),t=new tt(new sn(1.6,1.2,2.6),n);t.position.y=.6;const i=new tt(new Fi(1.4,.7,4),e);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new tt(new sn(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const o=new tt(new Fi(.5,1.05,4),e);o.rotation.y=Math.PI/4,o.position.set(0,2.95,-1.65);const r=new lt;return r.add(t,i,s,o),r}function JN(n){const e=KN(),t=new lt;for(const{x:i,y:s,z:o,scale:r}of n){const a=e.clone();a.position.set(i,s,o);const c=r*(.95+Math.random()*.2);a.scale.set(c,c,c),a.rotation.y=Math.random()*Math.PI*2,t.add(a),Va(i,s,o,1.9*c,3.5*c)}return t}const Wh=[],QN=400;function eD(n,e){const t=new I(e.x,60,e.z),i=e.bboxRadius*1.4+50;return n.traverse(s=>{(s.isInstancedMesh||s.isMesh)&&(s.frustumCulled=!0,s.boundingSphere=new ms(t,i))}),{center:t,radius:i}}function tD(){const n=FN(),e=YN(),t=new lt,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const s of Lt){const o=n[s.id];if(!o)continue;const r=new lt;r.name=`vegetation:${s.id}`,o.pines.length&&(r.add(zN(o.pines)),i.pines+=o.pines.length),o.laurels.length&&(r.add(BN(o.laurels)),i.laurels+=o.laurels.length),o.shrubs.length&&(r.add(HN(o.shrubs)),i.shrubs+=o.shrubs.length),o.grasses.length&&(r.add(GN(o.grasses)),i.grasses+=o.grasses.length),o.crops.length&&(r.add(VN(o.crops)),i.crops+=o.crops.length),o.rocks.length&&(r.add(WN(o.rocks)),i.rocks+=o.rocks.length),o.cliffs.length&&(r.add(qN(o.cliffs)),i.cliffs+=o.cliffs.length),o.snow.length&&(r.add(XN(o.snow)),i.snow+=o.snow.length),o.wetlands.length&&(r.add($N(o.wetlands)),i.wetlands+=o.wetlands.length);const a=eD(r,s);Wh.push({group:r,center:a.center,radius:a.radius}),t.add(r)}return e.houses.length&&t.add(ZN(e.houses)),e.churches.length&&t.add(JN(e.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${e.houses.length} houses, ${e.churches.length} churches`),t}function nD(n,e){if(!e){for(const i of Wh)i.group.visible=!0;return}const t=Ee.fogEnd+QN;for(const i of Wh)i.group.visible=n.position.distanceTo(i.center)-i.radius<t}const nu=document.getElementById("island-compass"),Gd=nu?.querySelector(".compass-track"),Wc=document.getElementById("island-name");let m0=null;const qh=Math.PI/2,g0=6,iD=400,sD=2,iu=7,oD=8,rD=6.2,aD=12;let vx=560;const yx=new Map;let $t=null;const Vd=new I;function cD(){if(!Gd)return;for(const e of Lt){const t=document.createElement("div");t.className="compass-marker"+(e.playable?"":" unreachable"),t.dataset.island=e.id,t.innerHTML=`
      <span class="compass-name">${e.name}</span>
      <span class="compass-dist"></span>
    `,Gd.appendChild(t),yx.set(e.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}const n=document.createElement("div");n.className="compass-marker runway-hint hidden",n.innerHTML=`
    <span class="compass-name"></span>
    <span class="compass-dist"></span>
  `,Gd.appendChild(n),$t={el:n,name:n.querySelector(".compass-name"),dist:n.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastName:null,lastHidden:!0},v0(),window.addEventListener("resize",v0)}function qc(n,e){if(!$t)return;if(!e){$t.lastHidden||($t.el.classList.add("hidden"),$t.lastHidden=!0);return}const t=Ee.heightmap.metersPerUnit,i=xx(n),s=e.x-n.position.x,o=e.z-n.position.z,r=Math.sqrt(s*s+o*o)*t/1e3,a=Math.atan2(s,-o);let l=(_x(a-i)/qh*.5+.5)*100;l=Math.max(iu,Math.min(100-iu,l)),$t.lastHidden&&($t.el.classList.remove("hidden"),$t.lastHidden=!1),e.id!==$t.lastName&&($t.name.textContent=e.id,$t.lastName=e.id);const u=l.toFixed(1)+"%";u!==$t.lastLeft&&($t.el.style.left=u,$t.lastLeft=u);const d=r<10?r.toFixed(1)+" km":Math.round(r)+" km";d!==$t.lastDist&&($t.dist.textContent=d,$t.lastDist=d)}function xx(n){return Vd.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(Vd.x,-Vd.z)}function _x(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const $r=[],Gt=[];function v0(){if(!nu)return;const n=nu.getBoundingClientRect().width;n>0&&(vx=n)}function lD(n){if(!Wc)return;const e=n?n.name:"";e!==m0&&(m0=e,e?(Wc.textContent=e,Wc.classList.add("show")):Wc.classList.remove("show"))}function uD(n){if(!nu)return;const e=xx(n),t=Ee.heightmap.metersPerUnit,i=Uf(n.position);lD(i),$r.length=0;for(const s of Lt){const o=yx.get(s.id);if(!o)continue;const r=s.x-n.position.x,a=s.z-n.position.z,l=Math.sqrt(r*r+a*a)*t/1e3,u=Math.max(0,l-s.bboxRadius*t/1e3),d=Math.atan2(r,-a),f=_x(d-e);if(i&&s.id===i.id||Math.abs(f)>qh||l<.5||l>iD){$r.push({m:o,distKm:l,edgeKm:u,pct:0,halfPct:0,show:!1});continue}const v=(f/qh*.5+.5)*100,y=(s.name.length*rD+aD)/vx*50;$r.push({m:o,distKm:l,edgeKm:u,pct:v,halfPct:y,show:!0})}Gt.length=0;for(const s of $r)s.show&&Gt.push(s);Gt.sort((s,o)=>s.distKm-o.distKm);for(let s=g0;s<Gt.length;s++)Gt[s].show=!1;Gt.length=Math.min(Gt.length,g0),Gt.sort((s,o)=>s.pct-o.pct);for(let s=0;s<oD;s++){for(let o=0;o<Gt.length-1;o++){const r=Gt[o],a=Gt[o+1],c=r.halfPct+a.halfPct+sD-(a.pct-r.pct);c>0&&(r.pct-=c/2,a.pct+=c/2)}Gt.length&&(Gt[0].pct=Math.max(iu,Gt[0].pct),Gt[Gt.length-1].pct=Math.min(100-iu,Gt[Gt.length-1].pct))}for(const s of $r){const o=s.m,r=!s.show;if(r!==o.lastHidden&&(o.el.classList.toggle("hidden",r),o.lastHidden=r),r)continue;const a=s.pct.toFixed(1)+"%";a!==o.lastLeft&&(o.el.style.left=a,o.lastLeft=a);const c=s.edgeKm<10?s.edgeKm.toFixed(1)+" km":Math.round(s.edgeKm)+" km";c!==o.lastDist&&(o.dist.textContent=c,o.lastDist=c)}}const Wd=new I;function dD(){for(const n in te.landedRunways)if(n!==ts&&te.landedRunways[n])return!1;return!0}function hD(n){let e=null,t=1/0;for(const i of ot){if(i.id===ts)continue;const s=n.x-i.x,o=n.z-i.z,r=s*s+o*o;r<t&&(t=r,e=i)}return e?{runway:e,dist:Math.sqrt(t)}:null}function fD(n){return Wd.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(-Wd.x,-Wd.z)}function pD(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}let jr=null;function mD(n,e){if(!(D.flightState===He.FLYING)||D.paused||D.tutorial){qc(e,null),Ud(),Fg(),jr=null;return}const i=e.position;if(dD()){const r=hD(i);r?(qc(e,r.runway),r.dist<Du.hideDistance?Ud():r.dist<=Du.showDistance?jr!==r.runway.id&&(Z2(),jr=r.runway.id):r.dist>Du.rearmDistance&&jr===r.runway.id&&(jr=null)):qc(e,null)}else qc(e,null),Ud();const s=fD(e);let o=!1;for(const r of ot){const a=i.x-r.x,c=i.z-r.z,l=Math.cos(r.heading),u=Math.sin(r.heading),d=a*l-c*u,f=a*u+c*l;if(Math.abs(d)>ja.corridorHalfWidth||Math.abs(f)>r.length*.5+ja.approachDepth)continue;const m=i.y-r.elevation;if(m<-2||m>ja.maxHeight)continue;if(Math.abs(pD(s-(r.activeHeading+Math.PI)))<=ja.coneTolerance){o=!0;break}}o?J2():Fg()}const gD=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],su=[];let y0=!1;const x0=document.getElementById("lift-indicator");let _0=null;function vD(){for(const n of gD){const e=document.getElementById(n.id);if(!e)continue;e.innerHTML="";const t=document.createElement("div");t.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,t.appendChild(i),e.appendChild(t);const s=document.createElement("div");s.className="edge-tape-window",e.appendChild(s);const o=document.createElement("div");o.className="edge-tape-track",o.style.height=n.range*n.pxPerUnit+"px",s.appendChild(o);for(let c=0;c<=n.range;c+=n.tickStep){const l=document.createElement("div"),u=c%n.majorStep===0;if(l.className="edge-tape-tick"+(u?" major":""),l.style.top=(n.range-c)*n.pxPerUnit+"px",u){const d=document.createElement("span");d.className="edge-tape-label",d.textContent=c,l.appendChild(d)}o.appendChild(l)}const r=document.createElement("div");r.className="edge-tape-center-line",s.appendChild(r);const a=document.createElement("div");a.className="edge-tape-current",a.textContent="0",s.appendChild(a),su.push({cfg:n,win:s,track:o,current:a,lastDisplayed:NaN,winH:0})}y0||(y0=!0,window.addEventListener("resize",()=>{for(const n of su)n.winH=0}))}function b0(n,e){const t=Math.max(0,Math.min(n.cfg.range,e));let i=n.winH;if(!i){if(i=n.win.clientHeight,i===0)return;n.winH=i}const s=i/2-(n.cfg.range-t)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${s}px)`;const o=Math.round(e);o!==n.lastDisplayed&&(n.current.textContent=o,n.lastDisplayed=o)}function yD(n){if(!n||su.length===0)return;const e=Rt(n.position.x,n.position.z),t=n.position.y-Math.max(e,Ee.waterLevel);for(const i of su)i.cfg.id==="speed-tape"?b0(i,D.speed):i.cfg.id==="alt-tape"&&b0(i,t);if(x0){const i=!!D.inThermal;i!==_0&&(x0.classList.toggle("is-active",i),_0=i)}}const bx=[];(function(){for(const e of[-.95,.95]){const t=new Float32Array(Yi.verts*3),i=new Float32Array(Yi.verts*3);for(let a=0;a<Yi.verts;a++){const c=a/(Yi.verts-1);t[a*3]=e,t[a*3+1]=-.05,t[a*3+2]=.42+c*Yi.maxLen;const l=1-c;i[a*3]=l,i[a*3+1]=l,i[a*3+2]=l}const s=new gt;s.setAttribute("position",new Nt(t,3)),s.setAttribute("color",new Nt(i,3));const o=new fu({vertexColors:!0,transparent:!0,opacity:0,blending:ml,depthWrite:!1}),r=new hv(s,o);he.add(r),bx.push(r)}})();function xD(){const n=nn.stallSpeed+3,e=nn.maxSpeed*.7,t=ki.clamp((D.speed-n)/(e-n),0,1),i=Yi.maxLen*(.3+t*.7);for(const s of bx){const o=s.geometry.attributes.position.array;for(let r=0;r<Yi.verts;r++){const a=r/(Yi.verts-1);o[r*3+2]=.42+a*i}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=t*.95}}const _D=.9,Sx=.55,bD=35,SD=1.6,Mx=new pu(_D,28);Mx.rotateX(-Math.PI/2);const wx=new Vn({color:0,transparent:!0,opacity:Sx,depthWrite:!1}),Us=new tt(Mx,wx);Us.renderOrder=1;function MD(){const n=Rt(he.position.x,he.position.z),e=Math.max(n,Ee.waterLevel),t=Math.max(0,he.position.y-e);Us.position.x=he.position.x,Us.position.z=he.position.z,Us.position.y=e+.04;const i=Math.min(1,t/bD),s=Math.min(1,t/SD);wx.opacity=Sx*s*(1-.85*i);const o=1+i*.4;Us.scale.set(o,1,o),Us.visible=he.position.y>e-.5}ru(()=>import("./test-mode-easter-egg-CcqovrZp.js"),__vite__mapDeps([3,4]));AA();hP();zx();Bx();ka();te.landedRunways[ts]||(te.landedRunways[ts]=!0,te.discoveredRunways[ts]=!0);if(!te.starterGranted){te.obsidian=(te.obsidian|0)+ul.starterDiamonds,te.visitedIslands[te.currentIsland]=!0;for(const n of Object.keys(te.gofiosByIsland))(te.gofiosByIsland[n]|0)>0&&(te.visitedIslands[n]=!0);te.starterGranted=!0,Xt()}sy();to.init();await Promise.all([b1(),m1()]);ot.forEach(n=>{n.elevation=Math.max(Mr(n.x,n.z),Ee.waterLevel+cl.minAboveWater)});Mt.add(A1());Mt.add(L1());Mt.add(tD());Mt.add(h1());Mt.add(D1());Mt.add(OI());Mt.add(Us);Mt.add(he);cD();B2();vD();O1();["pointerdown","touchend","click","keydown"].forEach(n=>window.addEventListener(n,k1));window.addEventListener("click",n=>{const e=n.target.closest("button");e&&e.closest("#welcome-overlay, #pause-overlay, #levels-overlay, #crash, .modal-overlay")&&xn("ui-confirm")});const wD=document.getElementById("restart-btn"),ou=document.getElementById("crash");async function Ex(){await no.onCrashRestart(),wu()}wD.addEventListener("click",Ex);window.addEventListener("keydown",n=>{n.code==="Space"&&ou.classList.contains("visible")&&(n.preventDefault(),Ex())});function Tx(n){ou.classList.remove("visible"),yr(n,{onClose:()=>ou.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>Tx("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>Tx("shop"));document.getElementById("crash-home-btn").addEventListener("click",()=>{ou.classList.remove("visible"),Wa()});wu();CN(()=>{hN()||Wa()});requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});setTimeout(()=>no.warmup(),5e3);document.addEventListener("visibilitychange",()=>{document.hidden?(jv(),lx()):Yv()});Ii.isNativePlatform()&&ru(async()=>{const{App:n}=await import("./index-CVH0YhY8.js");return{App:n}},__vite__mapDeps([5,1])).then(({App:n})=>n.addListener("appStateChange",({isActive:e})=>{if(e){Yv();return}jv(),lx()})).catch(n=>console.warn("[lifecycle] appStateChange unavailable",n));let S0=performance.now();function Ax(n){requestAnimationFrame(Ax);const e=Math.min(.05,(n-S0)/1e3);S0=n,RI(e),fN(e),EP(e),AP(e),PP(e),xD(),MD(),f1(n/1e3),U1(e),HI(e,he),Y1(e,he),uD(he),mD(e,he),X2(he),yD(he),rI(e);const t=Mt.fog!==null;nD(Vt,t),R1(Vt,t),eI(),o_(),tR(n),hn.render(Mt,Vt)}requestAnimationFrame(Ax);
