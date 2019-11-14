import{r as t,c as e,h as s,H as i,g as h}from"./p-32a68254.js";import{g as r,b as n}from"./p-d60a3994.js";const a={up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",space:" "},c=class{constructor(s){t(this,s),this.theme="light",this.scale="m",this.hiddenInput=(()=>{const t=document.createElement("input");return t.type="hidden",this.el.appendChild(t),t})(),this.calciteRadioGroupChange=e(this,"calciteRadioGroupChange",7)}handleNameChange(t){this.hiddenInput.name=t}handleSelectedItemChange(t,e){if(t===e)return;const s=this.getItems(),i=Array.from(s).filter(e=>e===t).pop();i?(this.selectItem(i),this.calciteRadioGroupChange.emit()):s[0]&&(s[0].tabIndex=0)}connectedCallback(){["s","m","l"].includes(this.scale)||(this.scale="m"),["dark","light"].includes(this.theme)||(this.theme="light");const t=this.getItems();let e=Array.from(t).filter(t=>t.checked).pop();e?this.selectItem(e):t[0]&&(t[0].tabIndex=0);const{hiddenInput:s,name:i}=this;i&&(s.name=i),e&&(s.value=e.value)}componentDidLoad(){this.hasLoaded=!0}render(){return s(i,{role:"radiogroup"},s("slot",null))}handleClick(t){"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target)}handleSelected(t){this.hasLoaded&&(t.stopPropagation(),t.preventDefault(),this.selectItem(t.target))}handleKeyDown(t){const{key:e}=t;if(-1===Object.values(a).indexOf(e))return;t.preventDefault();const{el:s,selectedItem:i}=this,h=r(s),n=("rtl"===h?e===a.right:e===a.left)||e===a.up,c=this.getItems();let l=-1;if(c.forEach((t,e)=>{t===i&&(l=e)}),n){const t=c.item(-1===l||0===l?c.length-1:l-1);this.selectItem(t)}else if(("rtl"===h?e===a.left:e===a.right)||e===a.down){const t=-1===l?c.item(1):c.item(l+1)||c.item(0);this.selectItem(t)}else e!==a.space||this.selectItem(t.target)}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t){if(t===this.selectedItem)return;const e=this.getItems();let s=null;e.forEach(e=>{const i=e.value===t.value;(i&&!e.checked||!i&&e.checked)&&(e.checked=i),e.tabIndex=i?0:-1,i&&(s=e)}),this.selectedItem=s,this.syncWithInputProxy(s),s&&s.focus()}syncWithInputProxy(t){this.hiddenInput.value=t?t.value:""}get el(){return h(this)}static get watchers(){return{name:["handleNameChange"],selectedItem:["handleSelectedItemChange"]}}static get style(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:-ms-flexbox;display:flex;--calcite-radio-group-color:#fff;--calcite-radio-group-border-color:#d4d4d4;--calcite-radio-group-color-active:#007ac2;--calcite-radio-group-text-color:#000;--calcite-radio-group-text-color-active:#fff;--calcite-radio-group-color-hover:#f8f8f8;--calcite-radio-group-padding:0.5rem 1rem}:host([scale=s]){--calcite-radio-group-padding:0.25rem 0.75rem}:host([scale=m]){--calcite-radio-group-padding:0.4rem 1rem}:host([scale=l]){--calcite-radio-group-padding:0.5rem 1.5rem}:host([theme=dark]){--calcite-radio-group-color:#2b2b2b;--calcite-radio-group-border-color:#353535;--calcite-radio-group-color-active:#009af2;--calcite-radio-group-text-color:#fff;--calcite-radio-group-text-color-active:#fff;--calcite-radio-group-color-hover:#353535}::slotted(calcite-radio-group-item:focus),::slotted(calcite-radio-group-item[checked]){z-index:0}"}},l=class{constructor(s){t(this,s),this.checked=!1,this.mutationObserver=this.getMutationObserver(),this.calciteRadioGroupItemChange=e(this,"calciteRadioGroupItemChange",7)}handleCheckedChange(){this.calciteRadioGroupItemChange.emit(),this.syncToExternalInput()}connectedCallback(){let t=this.el.querySelector('input[slot="input"]');t&&(this.value=t.value,this.checked=t.checked,this.mutationObserver.observe(t,{attributes:!0})),this.inputProxy=t}disconnectedCallback(){this.mutationObserver.disconnect()}render(){const{checked:t,value:e}=this,h=n(this.el,"scale","m");return s(i,{role:"radio","aria-checked":t?"true":"false",scale:h},s("label",null,s("slot",null,e),s("slot",{name:"input"})))}getMutationObserver(){return new MutationObserver(()=>this.syncFromExternalInput())}syncFromExternalInput(){this.inputProxy&&(this.value=this.inputProxy.value,this.checked=this.inputProxy.checked)}syncToExternalInput(){this.inputProxy&&(this.inputProxy.value=this.value,this.inputProxy.toggleAttribute("checked",this.checked))}get el(){return h(this)}static get watchers(){return{checked:["handleCheckedChange"]}}static get style(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:-ms-flexbox;display:flex;background-color:var(--calcite-radio-group-color);color:var(--calcite-radio-group-text-color);padding:var(--calcite-radio-group-padding);line-height:1.25;margin:.25rem -1px 0 0;border:1px solid var(--calcite-radio-group-border-color);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background .1s ease-in-out,border-color .1s ease-in-out;transition:background .1s ease-in-out,border-color .1s ease-in-out;cursor:pointer}:host([scale=s]){font-size:.8125rem;line-height:1.5}:host([scale=m]){font-size:.9375rem;line-height:1.5}:host([scale=l]){font-size:1rem;line-height:1.5}:host(:hover){background-color:var(--calcite-radio-group-color-hover)}:host([checked]){background-color:var(--calcite-radio-group-color-active);border-color:var(--calcite-radio-group-color-active);color:var(--calcite-radio-group-text-color-active);cursor:default}label{pointer-events:none}::slotted(input){display:none}"}};export{c as calcite_radio_group,l as calcite_radio_group_item};