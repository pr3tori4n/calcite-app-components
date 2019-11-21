import{r as t,c as i,h as s,H as e,g as c}from"./p-32a68254.js";import{D as h,U as a,H as o,b as r,S as n,E as l}from"./p-031cbc0f.js";import{g as m,b as d}from"./p-d60a3994.js";import{c as u}from"./p-fe46e993.js";import{C as p}from"./p-ec44a157.js";import{g}from"./p-c526d604.js";const I=class{constructor(s){t(this,s),this.theme="light",this.scale="m",this.appearance="default",this.iconPosition="end",this.selectionMode="multi",this.items=[],this.sorted=!1,this.requestedAccordionItem="",this.sortItems=t=>t.sort((t,i)=>t.position-i.position).map(t=>t.item),this.calciteAccordionItemHasChanged=i(this,"calciteAccordionItemHasChanged",7)}connectedCallback(){["default","minimal"].includes(this.appearance)||(this.appearance="default"),["start","end"].includes(this.iconPosition)||(this.iconPosition="end"),["light","dark"].includes(this.theme)||(this.theme="light"),["s","m","l"].includes(this.scale)||(this.scale="m"),["multi","single","single-persist"].includes(this.selectionMode)||(this.selectionMode="multi")}componentDidLoad(){this.sorted||(this.items=this.sortItems(this.items),this.sorted=!0)}render(){const t=m(this.el);return s(e,{dir:t,tabindex:"-1"},s("slot",null))}calciteAccordionItemKeyEvent(t){let i=t.detail.item,s=t.target,e=0===this.itemIndex(s),c=this.itemIndex(s)===this.items.length-1;switch(i.keyCode){case h:c?this.focusFirstItem():this.focusNextItem(s);break;case a:e?this.focusLastItem():this.focusPrevItem(s);break;case o:this.focusFirstItem();break;case r:this.focusLastItem()}}registerCalciteAccordionItem(t){this.items.push({item:t.target,position:t.detail.position})}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.calciteAccordionItemHasChanged.emit({requestedAccordionItem:this.requestedAccordionItem})}focusFirstItem(){this.focusElement(this.items[0])}focusLastItem(){this.focusElement(this.items[this.items.length-1])}focusNextItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i+1]||this.items[0])}focusPrevItem(t){const i=this.itemIndex(t);this.focusElement(this.items[i-1]||this.items[this.items.length-1])}itemIndex(t){return this.items.indexOf(t)}focusElement(t){t.focus()}get el(){return c(this)}static get style(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{--calcite-accordion-border-color:#dfdfdf;--calcite-accordion-item-background-color:#fff;--calcite-accordion-item-color:#6a6a6a;--calcite-accordion-item-color-hover:#4a4a4a;--calcite-accordion-item-color-active:#151515;--calcite-accordion-item-border-color:#dfdfdf;--calcite-accordion-item-hover-icon-fill:#007ac2}:host([theme=dark]){--calcite-accordion-border-color:#404040;--calcite-accordion-item-background-color:#2b2b2b;--calcite-accordion-item-color:#9f9f9f;--calcite-accordion-item-color-hover:#bfbfbf;--calcite-accordion-item-color-active:#fff;--calcite-accordion-item-border-color:#404040;--calcite-accordion-item-hover-icon-fill:#00a0ff}:host([scale=s]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.8125rem;line-height:1.5}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.875rem;line-height:1.5}:host([scale=l]){--calcite-accordion-item-spacing-unit:1.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) var(--calcite-accordion-item-spacing-unit);font-size:.9375rem;line-height:1.5}:host([icon-position=start]){--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-rotation:180deg;--calcite-accordion-item-active-icon-rotation:270deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:-90deg;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-item-spacing-unit)}:host([icon-position=end]){--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:-90deg;--calcite-accordion-item-icon-rotation-rtl:180deg;--calcite-accordion-item-active-icon-rotation-rtl:270deg;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-item-spacing-unit);--calcite-accordion-item-icon-spacing-end:0}:host([appearance=minimal]){--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0}:host{display:block;position:relative;max-width:100%;border:1px solid var(--calcite-accordion-border-color);border-bottom:none}:host([appearance=minimal]){border:1px solid transparent}"}},f=class{constructor(s){t(this,s),this.active=!1,this.accordionItemId=`calcite-accordion-item-${g()}`,this.selectionMode=d(this.el,"selection-mode","multi"),this.itemHeaderClickHander=()=>this.emitRequestedItem(),this.calciteAccordionItemKeyEvent=i(this,"calciteAccordionItemKeyEvent",7),this.calciteAccordionItemSelected=i(this,"calciteAccordionItemSelected",7),this.closeCalciteAccordionItem=i(this,"closeCalciteAccordionItem",7),this.registerCalciteAccordionItem=i(this,"registerCalciteAccordionItem",7)}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.registerCalciteAccordionItem.emit({position:this.itemPosition})}render(){const t=m(this.el);return s(e,{dir:t,tabindex:"0","aria-expanded":this.active?"true":"false"},s("div",{class:"accordion-item-header",onClick:this.itemHeaderClickHander},s("span",{class:"accordion-item-title"},this.itemTitle),s("div",{class:"accordion-item-icon"},s(p,{size:"16",path:u}))),s("div",{class:"accordion-item-content"},s("slot",null)))}keyDownHandler(t){switch(t.keyCode){case n:case l:this.emitRequestedItem(),t.preventDefault();break;case a:case h:case o:case r:this.calciteAccordionItemKeyEvent.emit({item:t}),t.preventDefault()}}updateActiveItemOnChange(t){this.requestedAccordionItem=t.detail.requestedAccordionItem,this.determineActiveItem()}determineActiveItem(){switch(this.selectionMode){case"multi":this.accordionItemId===this.requestedAccordionItem&&(this.active=!this.active);break;case"single":this.active=this.accordionItemId===this.requestedAccordionItem&&!this.active;break;case"single-persist":this.active=this.accordionItemId===this.requestedAccordionItem}}emitRequestedItem(){this.calciteAccordionItemSelected.emit({requestedAccordionItem:this.accordionItemId})}getItemPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return c(this)}static get style(){return":root{--calcite-global-ui-blue:#007ac2;--calcite-global-ui-blue-hover:#2890ce;--calcite-global-ui-blue-pressed:#00619b;--calcite-global-ui-green:#35ac46;--calcite-global-ui-green-hover:#50ba5f;--calcite-global-ui-green-pressed:#288835;--calcite-global-ui-yellow:#edd317;--calcite-global-ui-yellow-hover:#f9e54e;--calcite-global-ui-yellow-pressed:#d9bc00;--calcite-global-ui-red:#d83020;--calcite-global-ui-red-hover:#e65240;--calcite-global-ui-red-pressed:#a82b1e;--calcite-global-ui-background:#f8f8f8;--calcite-global-ui-foreground:#fff;--calcite-global-ui-foreground-hover:#f3f3f3;--calcite-global-ui-foreground-pressed:#eaeaea;--calcite-global-ui-text-1:#151515;--calcite-global-ui-text-2:#4a4a4a;--calcite-global-ui-text-3:#6a6a6a}:host([theme=dark]){--calcite-global-ui-blue-dark:$d-bb-420;--calcite-global-ui-blue-hover-dark:$d-bb-430;--calcite-global-ui-blue-pressed-dark:$d-bb-410;--calcite-global-ui-green-dark:$d-gg-420;--calcite-global-ui-green-hover-dark:$d-gg-430;--calcite-global-ui-green-pressed-dark:$d-gg-410;--calcite-global-ui-yellow-dark:$d-yy-420;--calcite-global-ui-yellow-hover-dark:$d-yy-430;--calcite-global-ui-yellow-pressed-dark:$d-yy-410;--calcite-global-ui-red-dark:$d-rr-420;--calcite-global-ui-red-hover-dark:$d-rr-430;--calcite-global-ui-red-pressed-dark:$d-rr-410;--calcite-global-ui-background-dark:$blk-210;--calcite-global-ui-foreground-dark:$blk-200;--calcite-global-ui-foreground-hover-dark:$blk-190;--calcite-global-ui-foreground-pressed-dark:$blk-180;--calcite-global-ui-text-1-dark:$blk-000;--calcite-global-ui-text-2-dark:$blk-060;--calcite-global-ui-text-3-dark:$blk-090}:host([hidden]){display:none}body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}a{color:#007ac2}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--calcite-accordion-item-background-color);color:var(--calcite-accordion-item-color);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out;text-decoration:none;outline:none;position:relative}:host([active]){color:var(--calcite-accordion-item-color-active)}:host([active]) .accordion-item-content{display:block}.accordion-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-accordion-item-flex-direction);flex-direction:var(--calcite-accordion-item-flex-direction);-ms-flex-align:center;align-items:center;cursor:pointer}.accordion-item-content,.accordion-item-header{padding:var(--calcite-accordion-item-padding);border-bottom:1px solid var(--calcite-accordion-item-border-color);-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}.accordion-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:.15s ease-in-out;transition:.15s ease-in-out}.accordion-item-content{display:none}.accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-start);margin-right:var(--calcite-accordion-item-icon-spacing-end)}.accordion-item-icon svg{fill:var(--calcite-accordion-item-color);-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation));transform:rotate(var(--calcite-accordion-item-icon-rotation))}:host(:focus) .accordion-item-icon svg,:host(:hover) .accordion-item-icon svg{fill:var(--calcite-accordion-item-hover-icon-fill)}:host([dir=rtl]) .accordion-item-icon{margin-left:var(--calcite-accordion-item-icon-spacing-end);margin-right:var(--calcite-accordion-item-icon-spacing-start)}:host([dir=rtl]) .accordion-item-icon svg{-webkit-transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([active]) .accordion-item-icon svg{fill:var(--calcite-accordion-item-color-active);-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation));transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([active][dir=rtl]) .accordion-item-icon svg{-webkit-transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl));transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}.accordion-item-title{margin-right:auto}:host([dir=rtl]) .accordion-item-title{margin-right:0;margin-left:auto}:host(:focus) .accordion-item-title,:host(:hover) .accordion-item-title{color:var(--calcite-accordion-item-color-hover)}:host(:active) .accordion-item-title,:host(:focus) .accordion-item-title,:host([active]) .accordion-item-title{color:var(--calcite-accordion-item-color-active);font-weight:500}"}};export{I as calcite_accordion,f as calcite_accordion_item};