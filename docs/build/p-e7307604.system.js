var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="calcite-app";var a=0;var i=false;var s;var o;var l;var f=false;var $=false;var u=false;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var m=function(){return!!d.head.attachShadow}();var p=function(){var e=false;try{d.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var g=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var y=new WeakMap;var b=function(e){return y.get(e)};var w=e("r",(function(e,r){return y.set(r.$lazyInstance$=e,r)}));var R=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return y.set(e,r)};var S=function(e,r){return r in e};var _=function(e){return console.error(e)};var N=new Map;var x=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=N.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{N.set(i,e)}return e[a]}),_)};var k=new Map;var E=[];var L=[];var T=[];var j=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&h.$flags$&4){I(A)}else{h.raf(A)}}}};var C=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){_(t)}}e.length=0};var P=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){_(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var A=function(){a++;C(E);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;P(L,e);P(T,e);if(L.length>0){T.push.apply(T,L);L.length=0}if(i=E.length+L.length+T.length>0){h.raf(A)}else{a=0}};var I=function(e){return Promise.resolve().then(e)};var O=j(L,true);var U={};var B=function(e){return e!=null};var M=function(e){e=typeof e;return e==="object"||e==="function"};var z=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var q=e("a",(function(){if(!(v.CSS&&v.CSS.supports&&v.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){h.$cssShim$=v.__stencil_cssshim;if(h.$cssShim$){return h.$cssShim$.initShim()}}))}return Promise.resolve()}));var H=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{h.$cssShim$=v.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(d.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,v.location.href));V(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-7f10eb01.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var V=function(e){var r=z(n);try{v[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;v[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=d.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(v[r].m);s.remove()}}));t.set(a,i);d.head.appendChild(s)}return i}}};var W=function(e,r){if(e!=null&&!M(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var D="hydrated";var F="http://www.w3.org/1999/xlink";var G=function(e,r){if(r===void 0){r=""}{return function(){return}}};var Q=function(e,r){{return function(){return}}};var J=new WeakMap;var K=function(e,r,t){var n=k.get(e);if(g&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}k.set(e,n)};var X=function(e,r,t,n){var a=Z(r.$tagName$);var i=k.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=J.get(e);var o=void 0;if(!s){J.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var Y=function(e,r,t){var n=G("attachStyles",r.$tagName$);var a=X(m&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var Z=function(e,r){return"sc-"+e};var ee=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!M(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?re(null,a):a)}l=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,f,ae)}var c=re(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var re=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var te=e("H",{});var ne=function(e){return e&&e.$tag$===te};var ae={forEach:function(e,r){return e.map(ie).forEach(r)},map:function(e,r){return e.map(ie).map(r).map(se)}};var ie=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var se=function(e){var r=re(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var oe=function(e,r,t,n,a,i){if(t===n){return}var s=S(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=fe(t);var $=fe(n);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in t){if(!n||n[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in n){if(!t||n[u]!==t[u]){if(u.includes("-")){e.style.setProperty(u,n[u])}else{e.style[u]=n[u]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(S(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var c=M(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(p){}}var m=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;m=true}}if(n==null||n===false){if(m){e.removeAttributeNS(F,r)}else{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;if(m){e.setAttributeNS(F,r,n)}else{e.setAttribute(r,n)}}}};var le=/\s/;var fe=function(e){return!e?[]:e.split(le)};var $e=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||U;var s=r.$attrs$||U;{for(n in i){if(!(n in s)){oe(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){oe(a,n,i[n],s[n],t,r.$flags$)}};var ue=function(e,r,t,n){var a=r.$children$[t];var i=0;var $;var v;var h;if(!f){u=true;if(a.$tag$==="slot"){if(s){n.classList.add(s+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){$=a.$elm$=d.createTextNode(a.$text$)}else if(a.$flags$&1){$=a.$elm$=d.createTextNode("")}else{$=a.$elm$=d.createElement(a.$flags$&2?"slot-fb":a.$tag$);{$e(null,a,c)}if(B(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=ue(e,a,i,$);if(v){$.appendChild(v)}}}}{$["s-hn"]=l;if(a.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=o;$["s-sn"]=a.$name$||"";h=e&&e.$children$&&e.$children$[t];if(h&&h.$tag$===a.$tag$&&e.$elm$){ce(e.$elm$,false)}}}return $};var ce=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==l&&a["s-ol"]){ge(a).insertBefore(a,pe(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(r){ce(a,r)}}h.$flags$&=~1};var ve=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){o=ue(null,t,a,e);if(o){n[a].$elm$=o;s.insertBefore(o,pe(r))}}}};var de=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;Se(n);{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{ce(a,true)}}a.remove()}}};var he=function(e,r,t,n){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(me(f,c)){ye(f,c);f=r[++a];c=n[++i]}else if(me($,v)){ye($,v);$=r[--l];v=n[--u]}else if(me(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){ce(f.$elm$.parentNode,false)}ye(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(me($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){ce($.$elm$.parentNode,false)}ye($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=n[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=ue(r&&r[i],t,s,e)}else{ye(h,c);r[s]=undefined;d=h.$elm$}c=n[++i]}else{d=ue(r&&r[i],t,i,e);c=n[++i]}if(d){{ge(f.$elm$).insertBefore(d,pe(f.$elm$))}}}}if(a>l){ve(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){de(r,a,l)}};var me=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var pe=function(e){return e&&e["s-ol"]||e};var ge=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var ye=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i;if(r.$text$===null){{if(r.$tag$==="slot");else{$e(e,r,c)}}if(n!==null&&a!==null){he(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}ve(t,null,r,a,0,a.length-1)}else if(n!==null){de(n,0,n.length-1)}}else if(i=t["s-cr"]){i.parentNode.textContent=r.$text$}else if(e.$text$!==r.$text$){t.data=r.$text$}};var be=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}be(t)}}};var we=[];var Re=function(e){var r=e.childNodes;var t=r.length;var n=0;var a=0;var i=0;var s;var o;var l;var f;for(t=r.length;n<t;n++){s=r[n];if(s["s-sr"]&&(o=s["s-cr"])){l=o.parentNode.childNodes;f=s["s-sn"];for(a=l.length-1;a>=0;a--){o=l[a];if(!o["s-cn"]&&!o["s-nr"]&&o["s-hn"]!==s["s-hn"]){i=o.nodeType;if((i===3||i===8)&&f===""||i===1&&o.getAttribute("slot")===null&&f===""||i===1&&o.getAttribute("slot")===f){if(!we.some((function(e){return e.$nodeToRelocate$===o}))){$=true;o["s-sn"]=f;we.push({$slotRefNode$:s,$nodeToRelocate$:o})}}}}}if(s.nodeType===1){Re(s)}}};var Se=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(Se)}};var _e=function(e,r,t,n){l=e.tagName;var a=r.$vnode$||re(null,null);var i=ne(n)?n:ee(null,null,n);if(t.$attrsToReflect$){i.$attrs$=i.$attrs$||{};t.$attrsToReflect$.forEach((function(r){var t=r[0],n=r[1];return i.$attrs$[n]=e[t]}))}i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];f=m&&(t.$flags$&1)!==0;$=false}ye(a,i);{if(u){Re(i.$elm$);for(var c=0;c<we.length;c++){var v=we[c];if(!v.$nodeToRelocate$["s-ol"]){var p=d.createTextNode("");p["s-nr"]=v.$nodeToRelocate$;v.$nodeToRelocate$.parentNode.insertBefore(v.$nodeToRelocate$["s-ol"]=p,v.$nodeToRelocate$)}}h.$flags$|=1;for(var c=0;c<we.length;c++){var v=we[c];var g=v.$slotRefNode$.parentNode;var y=v.$slotRefNode$.nextSibling;var p=v.$nodeToRelocate$["s-ol"];while(p=p.previousSibling){var b=p["s-nr"];if(b&&b["s-sn"]===v.$nodeToRelocate$["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.$nodeToRelocate$.parentNode||v.$nodeToRelocate$.nextSibling!==y){if(v.$nodeToRelocate$!==y){g.insertBefore(v.$nodeToRelocate$,y)}}}h.$flags$&=~1}if($){be(i.$elm$)}we.length=0}};var Ne=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var xe=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=G("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return ke(e,r,t,s,n)};Ne(r,i);var l;if(n){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return Ce(s,r,t)}));r.$queuedListeners$=null}}{l=Ce(s,"componentWillLoad")}}a();return Pe(l,(function(){return O(o)}))};var ke=function(e,r,t,n,a){var i=G("update",t.$tagName$);var s=e["s-rc"];if(a){Y(e,t,r.$modeName$)}var o=G("render",t.$tagName$);{{_e(e,r,t,Ee(n))}}if(h.$cssShim$){h.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return Le(e,r,t)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var Ee=function(e,r){try{e=e.render()}catch(t){_(t)}return e};var Le=function(e,r,t){var n=G("postUpdate",t.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(D)}{Ce(a,"componentDidLoad")}n();{r.$onReadyResolve$(e);if(!i){je()}}}else{n()}{r.$onInstanceResolve$(e)}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){I((function(){return xe(e,r,t,false)}))}r.$flags$&=~(4|512)}};var Te=function(e,r){{var t=b(e);var n=t.$hostElement$.isConnected;if(n&&(t.$flags$&(2|16))===2){xe(e,t,r,false)}return n}};var je=function(e){{d.documentElement.classList.add(D)}{h.$flags$|=2}};var Ce=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){_(n)}}return undefined};var Pe=function(e,r){return e&&e.then?e.then(r):r()};var Ae=function(e,r){return b(e).$instanceValues$.get(r)};var Ie=function(e,r,t,n){var a=b(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;t=W(t,n.$members$[r][0]);if(t!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,t);if(l){if(n.$watchers$&&o&128){var f=n.$watchers$[r];if(f){f.forEach((function(e){try{l[e](t,s,r)}catch(n){_(n)}}))}}if((o&(2|16))===2){xe(i,a,n,false)}}}};var Oe=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return Ae(this,n)},set:function(e){Ie(this,n,e,r)},configurable:true,enumerable:true})}else if(t&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var t=b(this);return t.$onInstancePromise$.then((function(){var r;return(r=t.$lazyInstance$)[n].apply(r,e)}))}})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var Ue=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=e;var o=Be(r,i);var l=Me(n);h.ael(s,a,o,l);return function(){return h.rel(s,a,o,l)}}));return function(){return n.forEach((function(e){return e()}))}};var Be=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var Me=function(e){return p?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var ze=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,o,l,f,$,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=x(a);if(!s.then)return[3,2];t=Q();return[4,s];case 1:s=c.sent();t();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Oe(s,a,2);s.isProxied=true}i=G("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){_(v)}{n.$flags$&=~8}{n.$flags$|=128}i();qe(n.$lazyInstance$);o=Z(a.$tagName$);if(!(!k.has(o)&&s.style))return[3,5];l=G("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=c.sent();c.label=4;case 4:K(o,f,!!(a.$flags$&1));l();c.label=5;case 5:$=n.$ancestorComponent$;u=function(){return xe(e,n,a,true)};if($&&$["s-rc"]){$["s-rc"].push(u)}else{u()}return[2]}}))}))};var qe=function(e){{Ce(e,"connectedCallback")}};var He=function(e,r){if((h.$flags$&1)===0){var t=G("connectedCallback",r.$tagName$);var n=b(e);if(r.$listeners$){n.$rmListeners$=Ue(e,n,r.$listeners$)}if(!(n.$flags$&1)){n.$flags$|=1;var a=void 0;if(!a){if(r.$flags$&4||r.$flags$&8){Ve(e)}}{var i=e;while(i=i.parentNode||i.host){if(i["s-p"]){Ne(n,n.$ancestorComponent$=i);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{I((function(){return ze(e,n,r)}))}}qe(n.$lazyInstance$);t()}};var Ve=function(e){var r="";var t=e["s-cr"]=d.createComment(r);t["s-cn"]=true;e.insertBefore(t,e.firstChild)};var We=function(e){if((h.$flags$&1)===0){var r=b(e);var t=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(h.$cssShim$){h.$cssShim$.removeHost(e)}{Ce(t,"componentDidUnload")}}};var De=e("b",(function(e,r){if(r===void 0){r={}}var t=G();var n=[];var a=r.exclude||[];var i=d.head;var s=v.customElements;var o=i.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var $;var u=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;if(r.syncQueue){h.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!m&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;R(r);if(t.$flags$&1){if(m){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{h.jmp((function(){return He(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return We(e)}))};r.prototype.forceUpdate=function(){Te(this,t)};r.prototype.componentOnReady=function(){return b(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,Oe(o,t,1))}}))}));l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,o?o.nextSibling:i.firstChild);u=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{h.jmp((function(){return $=setTimeout(je,30,"timeout")}))}t()}));var Fe=e("c",(function(e,r,t){var n=Ge(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e});n.dispatchEvent(a);return a}}}));var Ge=e("g",(function(e){return b(e).$hostElement$}))}}}));