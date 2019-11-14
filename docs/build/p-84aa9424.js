import{h as t,H as i}from"./p-3dbfa717.js";import{C as s}from"./p-a7b40c87.js";import{d as e}from"./p-30ecf6c3.js";import{C as a}from"./p-4d533d6f.js";function l(t,i){const s=t;s?s.set(i.value,i):s&&s.set(i.value,i)}const r={mutationObserverCallback(){this.setUpItems(),this.setUpFilter()},initialize(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=e(r.internalCalciteListChangeEvent.bind(this),0)},initializeObserver(){this.observer.observe(this.el,{childList:!0,subtree:!0})},cleanUpObserver(){this.observer.disconnect()},calciteListItemChangeHandler(t){const{selectedValues:i}=this,{item:s,value:e,selected:a,shiftPressed:l}=t.detail;a?(this.multiple||this.deselectSiblingItems(s),this.multiple&&l&&this.selectSiblings(s),i.set(e,s)):i.delete(e),this.lastSelectedItem=s,this.emitCalciteListChange()},internalCalciteListChangeEvent(){this.calciteListChange.emit(this.selectedValues)},setUpItems(t){this.items=Array.from(this.el.querySelectorAll(t)),this.items.forEach(t=>{t.icon=this.getIconType(),t.compact=this.compact,t.selected&&l(this.selectedValues,t)})},setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())},deselectSiblingItems(t){this.items.forEach(i=>{i.value!==t.value&&(i.toggleSelected(!1),this.selectedValues.has(i.value)&&this.selectedValues.delete(i.value))})},selectSiblings(t){if(!this.lastSelectedItem)return;const{items:i}=this,s=i.findIndex(t=>t.value===this.lastSelectedItem.value),e=i.findIndex(i=>i.value===t.value);i.slice(Math.min(s,e),Math.max(s,e)).forEach(t=>{t.toggleSelected(!0),l(this.selectedValues,t)})},handleFilter(t){const i=t.detail.map(t=>t.value);this.items.forEach(t=>{t.hidden=-1===i.indexOf(t.value)})},getItemData(){const t=[];return this.items.forEach(i=>{const s={};s.label=i.textLabel||i.textHeading,s.description=i.textDescription,s.metadata=i.metadata,s.value=i.value,t.push(s)}),t}};const h=e=>{var{props:l,text:r}=e,h=function(t,i){var s={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&i.indexOf(e)<0&&(s[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(t);a<e.length;a++)i.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(s[e[a]]=t[e[a]])}return s}(e,["props","text"]);const{disabled:n,loading:c,filterEnabled:o,dataForFilter:d,handleFilter:b}=l,{filterPlaceholder:f}=r;return t(i,Object.assign({"aria-disabled":n,"aria-busy":c},h),t("header",{class:{[a.sticky]:!0}},o?t("calcite-filter",{data:d,textPlaceholder:f,"aria-label":f,onCalciteFilterChange:b}):null,t("slot",{name:"menu-actions"})),t("slot",null),((i,e)=>i||e?t(s,{loading:i}):null)(c,n))};export{h as L,r as s};