(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8617:function(e,t,r){Promise.resolve().then(r.t.bind(r,8877,23)),Promise.resolve().then(r.bind(r,5558))},5558:function(e,t,r){"use strict";r.d(t,{default:function(){return h}});var n=r(7437),a=r(231),c=r.n(a),s=r(2265),i=r(8296),o=r(2699),l=r(4817);let d="prefers-dark";function h(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(function(){try{let e=localStorage.getItem(d),r=e?"1"===e:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;t(r)}catch(e){}},[]),(0,s.useEffect)(function(){if("undefined"!=typeof document){document.documentElement.classList.toggle("dark",e);try{localStorage.setItem(d,e?"1":"0")}catch(e){}}},[e]),(0,n.jsx)("header",{className:"sticky top-0 z-30 border-b border-black/10 dark:border-white/10 bg-white/60 dark:bg-black/60 backdrop-blur-xl",children:(0,n.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-3 flex items-center justify-between",children:[(0,n.jsx)(c(),{href:"/",className:"font-bold tracking-tight text-xl",children:"Saaed Imam"}),(0,n.jsxs)("nav",{className:"hidden md:flex items-center gap-6 text-sm opacity-90",children:[(0,n.jsx)(c(),{href:"/about",children:"About"}),(0,n.jsx)(c(),{href:"/services",children:"Services"}),(0,n.jsx)(c(),{href:"/work",children:"Work"}),(0,n.jsx)(c(),{href:"/dashboards",children:"Dashboards"}),(0,n.jsx)(c(),{href:"/contact",children:"Contact"})]}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)("button",{onClick:()=>t(!e),className:"btn-ghost","aria-label":"Toggle dark mode",children:e?(0,n.jsx)(i.Z,{className:"h-4 w-4"}):(0,n.jsx)(o.Z,{className:"h-4 w-4"})}),(0,n.jsxs)("button",{className:"btn-ghost hidden md:flex items-center gap-2","aria-label":"Search",children:[(0,n.jsx)(l.Z,{className:"h-4 w-4"})," Command (/)"]})]})]})})}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2265);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:d,iconNode:h,...u}=e;return(0,n.createElement)("svg",{ref:t,...s,width:a,height:a,stroke:r,strokeWidth:o?24*Number(i)/Number(a):i,className:c("lucide",l),...u},[...h.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(d)?d:[d]])}),o=(e,t)=>{let r=(0,n.forwardRef)((r,s)=>{let{className:o,...l}=r;return(0,n.createElement)(i,{ref:s,iconNode:t,className:c("lucide-".concat(a(e)),o),...l})});return r.displayName="".concat(e),r}},2699:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]])},4817:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},8296:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]])},8877:function(){}},function(e){e.O(0,[404,231,971,23,744],function(){return e(e.s=8617)}),_N_E=e.O()}]);