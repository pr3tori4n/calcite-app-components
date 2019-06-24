const t=window,e=document,n={t:0,s:"",raf:t=>requestAnimationFrame(t),ael:(t,e,n,s)=>t.addEventListener(e,n,s),rel:(t,e,n,s)=>t.removeEventListener(e,n,s)},s=!!e.documentElement.attachShadow,l=(()=>{let t=!1;try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get(){t=!0}}))}catch(t){}return t})(),o=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),c=new WeakMap,i=t=>c.get(t),r=(t,e)=>c.set(e.l=t,e),a=(t,e)=>e in t,f=t=>console.error(t),u=new Map,$=t.__stencil_cssshim;let d=0,p=!1;const h=[],m=[],w=[],y=t=>e=>{t.push(e),p||(p=!0,n.raf(g))},b=(t,e)=>{let n=0,s=0;for(;n<t.length&&(s=performance.now())<e;)try{t[n++](s)}catch(t){f(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},g=()=>{d++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){f(t)}t.length=0})(h);const t=2==(6&n.t)?performance.now()+7*Math.ceil(d*(1/22)):1/0;b(m,t),b(w,t),m.length>0&&(w.push(...m),m.length=0),(p=h.length+m.length+w.length>0)?n.raf(g):d=0},v=y(m),_={},j=t=>null!=t,k=t=>t.toLowerCase(),S=t=>["object","function"].includes(typeof t),O=()=>t.CSS&&t.CSS.supports&&t.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_calcite("./p-f7ddb189.js"),R=async()=>{{const n=Array.from(e.querySelectorAll("script")).find(t=>t.src.includes("/calcite.esm.js")||"calcite"===t.getAttribute("data-namespace")),s=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,t.location.href));return M(s.href),window.customElements||await __sc_import_calcite("./p-a0c82e31.js"),s.href}},M=n=>{const s=`__sc_import_${"calcite".replace(/\s|-/g,"_")}`;try{t[s]=new Function("w","return import(w);")}catch(l){const o=new Map;t[s]=l=>{const c=new URL(l,n).href;let i=o.get(c);if(!i){const n=e.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${s}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{n.onload=()=>{e(t[s].m),n.remove()}}),o.set(c,i),e.head.appendChild(n)}return i}}},U="http://www.w3.org/1999/xlink",x=new WeakMap,L=t=>"sc-"+t,C=(t,e,...n)=>{let s,l,o=null,c=!1,i=!1,r=[];const a=e=>{for(let n=0;n<e.length;n++)o=e[n],Array.isArray(o)?a(o):null!=o&&"boolean"!=typeof o&&((c="function"!=typeof t&&!S(o))&&(o=String(o)),c&&i?r[r.length-1].o+=o:r.push(c?{t:0,o}:o),i=c)};if(a(n),e){s=e.key||void 0,l=e.name;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,r,T);const f={t:0,i:t,u:r.length>0?r:null,$:void 0,p:e};return f.h=s,f.g=l,f},E={},T={forEach:(t,e)=>t.map(A).forEach(e),map:(t,e)=>t.map(A).map(e).map(P)},A=t=>({vattrs:t.p,vchildren:t.u,vkey:t.h,vname:t.g,vtag:t.i,vtext:t.o}),P=t=>({t:0,p:t.vattrs,u:t.vchildren,h:t.vkey,g:t.vname,i:t.vtag,o:t.vtext}),W=(t,e,s,l,o,c)=>{if(s!==l)if("class"!==e||o)if("style"===e){for(const e in s)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)s&&l[e]===s[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("key"===e);else if("ref"===e)l&&l(t);else if(e.startsWith("on")&&!a(t,e))e=a(t,k(e))?k(e.substring(2)):k(e[2])+e.substring(3),s&&n.rel(t,e,s,!1),l&&n.ael(t,e,l,!1);else{const n=a(t,e),s=S(l);if((n||s&&null!==l)&&!o)try{t[e]=null==l&&-1===t.tagName.indexOf("-")?"":l}catch(t){}const i=!(!o||e===(e=e.replace(/^xlink\:?/,"")));null==l||!1===l?i?t.removeAttributeNS(U,k(e)):t.removeAttribute(e):(!n||4&c||o)&&!s&&(l=!0===l?"":l.toString(),i?t.setAttributeNS(U,k(e),l):t.setAttribute(e,l))}else{const e=F(s),n=F(t.className).filter(t=>!e.includes(t));t.className=n.concat(F(l).filter(t=>!n.includes(t))).join(" ")}},F=t=>t?t.split(" "):[],H=(t,e,n,s)=>{const l=11===e.$.nodeType&&e.$.host?e.$.host:e.$,o=t&&t.p||_,c=e.p||_;for(s in o)null==c[s]&&null!=o[s]&&W(l,s,o[s],void 0,n,e.t);for(s in c)W(l,s,o[s],c[s],n,e.t)};let N,q,B,D=!1,V=!1,z=!1,G=!1;const I=(t,n,s,l)=>{let o,c,i,r=n.u[s],a=0;if(D||(z=!0,"slot"===r.i&&(N&&l.classList.add(N+"-s"),r.t|=r.u?2:1)),j(r.o))r.$=e.createTextNode(r.o);else if(1&r.t)r.$=e.createTextNode("");else{if(o=r.$=G||"svg"===r.i?e.createElementNS("http://www.w3.org/2000/svg",r.i):e.createElement(2&r.t?"slot-fb":r.i),H(null,r,G="svg"===r.i||"foreignObject"!==r.i&&G),j(N)&&o["s-si"]!==N&&o.classList.add(o["s-si"]=N),r.u)for(a=0;a<r.u.length;++a)(c=I(t,r,a,o))&&o.appendChild(c);"svg"===r.i&&(G=!1)}return r.$["s-hn"]=B,3&r.t&&(r.$["s-sr"]=!0,r.$["s-cr"]=q,r.$["s-sn"]=r.g||"",(i=t&&t.u&&t.u[s])&&i.i===r.i&&t.$&&J(t.$,!1)),r.$},J=(t,e)=>{n.t|=1;const s=t.childNodes;for(let t=s.length-1;t>=0;t--){const n=s[t];n["s-hn"]!==B&&n["s-ol"]&&(Z(n).insertBefore(n,Y(n)),n["s-ol"].remove(),n["s-ol"]=void 0,z=!0),e&&J(n,e)}n.t&=-2},K=(t,e,n,s,l,o)=>{let c,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(i.shadowRoot&&k(i.tagName)===B&&(i=i.shadowRoot);l<=o;++l)s[l]&&(c=I(null,n,l,t))&&(s[l].$=c,i.insertBefore(c,Y(e)))},Q=(t,e,n,s)=>{for(;e<=n;++e)j(t[e])&&(s=t[e].$,lt(t[e],!0),V=!0,s["s-ol"]?s["s-ol"].remove():J(s,!0),s.remove())},X=(t,e)=>t.i===e.i&&("slot"===t.i?t.g===e.g:t.h===e.h),Y=t=>t&&t["s-ol"]||t,Z=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,tt=(t,e)=>{const n=e.$=t.$,s=t.u,l=e.u;let o;G=n&&j(n.parentNode)&&void 0!==n.ownerSVGElement,G="svg"===e.i||"foreignObject"!==e.i&&G,j(e.o)?(o=n["s-cr"])?o.parentNode.textContent=e.o:t.o!==e.o&&(n.textContent=e.o):("slot"===e.i||H(t,e,G),j(s)&&j(l)?((t,e,n,s)=>{let l,o,c=0,i=0,r=0,a=0,f=e.length-1,u=e[0],$=e[f],d=s.length-1,p=s[0],h=s[d];for(;c<=f&&i<=d;)if(null==u)u=e[++c];else if(null==$)$=e[--f];else if(null==p)p=s[++i];else if(null==h)h=s[--d];else if(X(u,p))tt(u,p),u=e[++c],p=s[++i];else if(X($,h))tt($,h),$=e[--f],h=s[--d];else if(X(u,h))"slot"!==u.i&&"slot"!==h.i||J(u.$.parentNode,!1),tt(u,h),t.insertBefore(u.$,$.$.nextSibling),u=e[++c],h=s[--d];else if(X($,p))"slot"!==u.i&&"slot"!==h.i||J($.$.parentNode,!1),tt($,p),t.insertBefore($.$,u.$),$=e[--f],p=s[++i];else{for(r=-1,a=c;a<=f;++a)if(e[a]&&j(e[a].h)&&e[a].h===p.h){r=a;break}r>=0?((o=e[r]).i!==p.i?l=I(e&&e[i],n,r,t):(tt(o,p),e[r]=void 0,l=o.$),p=s[++i]):(l=I(e&&e[i],n,i,t),p=s[++i]),l&&Z(u.$).insertBefore(l,Y(u.$))}c>f?K(t,null==s[d+1]?null:s[d+1].$,n,s,i,d):i>d&&Q(e,c,f)})(n,s,e,l):j(l)?(j(t.o)&&(n.textContent=""),K(n,null,e,l,0,l.length-1)):j(s)&&Q(s,0,s.length-1)),G&&"svg"===e.i&&(G=!1)},et=(t,e,n,s,l,o,c,i)=>{for(s=0,l=(n=t.childNodes).length;s<l;s++)if(1===(e=n[s]).nodeType){if(e["s-sr"])for(c=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(n[o]["s-hn"]!==e["s-hn"])if(i=n[o].nodeType,""!==c){if(1===i&&c===n[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===i||3===i&&""!==n[o].textContent.trim()){e.hidden=!0;break}et(e)}},nt=[],st=t=>{let e,n,s,l,o=t.childNodes,c=o.length,i=0,r=0,a=0;for(c=o.length;i<c;i++){if((e=o[i])["s-sr"]&&(n=e["s-cr"]))for(l=e["s-sn"],r=(s=n.parentNode.childNodes).length-1;r>=0;r--)(n=s[r])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===l||1===a&&null===n.getAttribute("slot")&&""===l||1===a&&n.getAttribute("slot")===l)&&(nt.some(t=>t.nodeToRelocate===n)||(V=!0,n["s-sn"]=l,nt.push({slotRefNode:e,nodeToRelocate:n})));1===e.nodeType&&st(e)}},lt=(t,e)=>{t&&(t.p&&t.p.ref&&t.p.ref(e?null:t.$),t.u&&t.u.forEach(t=>{lt(t,e)}))},ot=async(t,e)=>{if(t&&t[e])try{await t[e]()}catch(t){f(t)}},ct=async(t,e,n,s)=>{e.t|=16;const l=e.l;s&&await ot(l,"componentWillLoad"),v(()=>it(t,e,n,l,s))},it=(t,l,o,c,i)=>{l.t&=-17,t["s-lr"]=!1,i&&((t,n)=>{const l=((t,s,l,o)=>{let c=L(n.v),i=u.get(c);if(t=11===t.nodeType?t:e,i)if("string"==typeof i){let n,s=x.get(t=t.head||t);if(s||x.set(t,s=new Set),!s.has(c)){if($){const t=(n=$.createHostStyle(o,c,i))["s-sc"];t&&(c=t,s=null)}else(n=e.createElement("style")).innerHTML=i;t.appendChild(n),s&&s.add(c)}}else t.adoptedStyleSheets.includes(i)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,i]);return c})(s&&t.shadowRoot?t.shadowRoot:t.getRootNode(),0,0,t);10&n.t&&(t["s-sc"]=l,t.classList.add(l+"-h"))})(t,o),l.t|=4;try{((t,l,o,c)=>{const i=l._||{t:0};if(B=k(t.tagName),(t=>t&&t.i===E)(c)?c.i=null:c=C(null,null,c),o.j&&(c.p=c.p||{},o.j.forEach(([e,n])=>c.p[n]=t[e])),c.t|=4,l._=c,c.$=i.$=t.shadowRoot||t,N=t["s-sc"],q=t["s-cr"],D=s&&0!=(1&o.t),z=V=!1,tt(i,c),z){st(c.$);for(let t=0;t<nt.length;t++){const n=nt[t];if(!n.nodeToRelocate["s-ol"]){const t=e.createTextNode("");t["s-nr"]=n.nodeToRelocate,n.nodeToRelocate.parentNode.insertBefore(n.nodeToRelocate["s-ol"]=t,n.nodeToRelocate)}}n.t|=1;for(let t=0;t<nt.length;t++){const e=nt[t],n=e.slotRefNode.parentNode;let s=e.slotRefNode.nextSibling,l=e.nodeToRelocate["s-ol"];for(;l=l.previousSibling;){let t=l["s-nr"];if(t&&t&&t["s-sn"]===e.nodeToRelocate["s-sn"]&&n===t.parentNode&&(t=t.nextSibling)&&t&&!t["s-nr"]){s=t;break}}(!s&&n!==e.nodeToRelocate.parentNode||e.nodeToRelocate.nextSibling!==s)&&e.nodeToRelocate!==s&&n.insertBefore(e.nodeToRelocate,s)}n.t&=-2}V&&et(c.$),nt.length=0})(t,l,o,c.render())}catch(t){f(t)}l.t&=-5,$&&$.updateHost(t),t["s-lr"]=!0,l.t|=2,t["s-rc"].length>0&&(t["s-rc"].forEach(t=>t()),t["s-rc"].length=0),rt(t,l)},rt=(t,s,l)=>{if(!t["s-al"]){const o=s.k;512&s.t||(s.t|=512,t.classList.add("hydrated"),s.S(t),o||(e.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999))),o&&((l=o["s-al"])&&(l.delete(t),0===l.size&&(o["s-al"]=void 0,o["s-init"]())),s.k=void 0)}},at=(t,e,n)=>{if(e.O){t.watchers&&(e.R=t.watchers);const s=Object.entries(e.O),l=t.prototype;if(s.forEach(([t,[s]])=>{31&s||2&n&&32&s?Object.defineProperty(l,t,{get(){return((t,e)=>i(t).M.get(e))(this,t)},set(n){((t,e,n,s)=>{const l=i(this),o=l.U,c=l.M.get(e),r=l.t;if(!((n=((t,e)=>null==t||S(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,s.O[e][0]))===c||8&r&&void 0!==c)&&(l.M.set(e,n),l.l)){if(s.R&&1==(9&r)){const t=s.R[e];t&&t.forEach(t=>{try{l.l[t].call(l.l,n,c,e)}catch(t){f(t)}})}2==(22&r)&&ct(o,l,s,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&s&&Object.defineProperty(l,t,{value(...e){const n=i(this);return n.L.then(()=>n.l[t](...e))}})}),1&n){const n=new Map;l.attributeChangedCallback=function(t,e,s){const l=n.get(t);this[l]=(null!==s||"boolean"!=typeof this[l])&&s},t.observedAttributes=s.filter(([t,e])=>15&e[0]).map(([t,s])=>{const l=s[1]||t;return n.set(l,t),512&s[0]&&e.j.push([t,l]),l})}}return t},ft=async(t,e,n,s,l)=>{if(0==(256&e.t)){e.t|=256,(l=await(t=>__sc_import_calcite(`./${t.C}.entry.js`).then(e=>e[t.v.replace(/-/g,"_")],f))(n)).isProxied||(n.R=l.watchers,at(l,n,2),l.isProxied=!0),e.t|=8;try{new l(e)}catch(t){f(t)}if(e.t&=-9,ut(e.l),!l.isStyleRegistered&&l.style){let t=l.style,e=L(n.v);8&n.t&&(t=await __sc_import_calcite("./p-549b16dd.js").then(n=>n.scopeCss(t,e,!1))),((t,e,n)=>{let s=u.get(t);o&&n?(s=s||new CSSStyleSheet).replace(e):s=e,u.set(t,s)})(e,t,!!(1&n.t)),l.isStyleRegistered=!0}}const c=e.k;c&&!c["s-lr"]&&c["s-rc"]?c["s-rc"].push(()=>ft(t,e,n)):ct(t,e,n,!0)},ut=()=>{},$t=(o,r={})=>{const a=[],u=r.exclude||[],d=e.head,p=t.customElements,h=d.querySelector("meta[charset]"),m=e.createElement("style");Object.assign(n,r),n.s=new URL(r.resourcesUrl||"/",t.location.href).href,r.syncQueue&&(n.t|=4),o.forEach(t=>t[1].forEach(o=>{const r={t:o[0],v:o[1],O:o[2],T:o[3],j:[],R:{}};!s&&1&r.t&&(r.t|=8);const d=r.v;r.C=t[0],u.includes(d)||p.get(d)||(a.push(d),p.define(d,at(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,U:t,M:new Map};e.L=new Promise(t=>e.S=t),c.set(t,e)}})(t),1&r.t&&(s?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){((t,s)=>{if(0==(1&n.t)){const o=i(t);if(s.T&&(o.A=((t,e)=>{const o=s.T.map(([s,o,c])=>{const i=t,r=((t,e)=>n=>t.l?t.l[e](n):t.L.then(()=>t.l[e](n)).catch(f))(e,c),a=(t=>l?{passive:0!=(1&t),capture:0!=(2&t)}:0!=(2&t))(s);return n.ael(i,o,r,a),()=>n.rel(i,o,r,a)});return()=>o.forEach(t=>t())})(t,o)),!(1&o.t)){let n;o.t|=1,n||(4&s.t||8&s.t)&&((t,n)=>{let s;s="",(n=t["s-cr"]=e.createComment(""))["s-cn"]=!0,t.insertBefore(n,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!e["s-lr"]){o.k=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}s.O&&Object.entries(s.O).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),ft(t,o,s)}ut(o.l)}})(this,r)}disconnectedCallback(){(t=>{if(0==(1&n.t)){const e=i(t);e.A&&(e.A(),e.A=void 0),$&&$.removeHost(t),ot(e.l,"componentDidUnload")}})(this)}"s-init"(){const t=i(this);t.l&&rt(this,t)}"s-hmr"(t){}forceUpdate(){ct(this,i(this),r,!1)}componentOnReady(){return i(this).L}},r,1)))})),m.innerHTML=a+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),d.insertBefore(m,h?h.nextSibling:d.firstChild)},dt=(t,e,n)=>{const s=pt(t);return{emit:t=>s.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},pt=t=>i(t).U;export{E as H,O as a,$t as b,dt as c,pt as g,C as h,R as p,r};