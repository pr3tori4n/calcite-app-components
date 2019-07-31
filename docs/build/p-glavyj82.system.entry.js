System.register(["./p-581369cc.system.js","./p-78cea464.system.js","./p-6f5289b6.system.js","./p-24c2f445.system.js"],function(t){"use strict";var e,n,o,r,i,c,a,s,u;return{setters:[function(t){e=t.r;n=t.c;o=t.h;r=t.H;i=t.g},function(t){c=t.o;a=t.p},function(t){s=t.c},function(t){u=t.C}],execute:function(){var l={container:"container",header:"header",heading:"heading",headingFirst:"heading--first",backButton:"back-button",singleActionContainer:"single-action-container",menuContainer:"menu-container",menuButton:"menu-button",menu:"menu",contentContainer:"content-container",footer:"footer"};var h={back:"Back",open:"Open",close:"Close"};var p=function(){function t(t){var o=this;e(this,t);this.menuOpen=false;this.showBackButton=false;this.textBack=h.back;this.textClose=h.close;this.textOpen=h.open;this.toggleMenuOpen=function(){o.menuOpen=!o.menuOpen};this.backButtonClick=function(){o.calciteFlowItemBackClick.emit()};this.calciteFlowItemBackClick=n(this,"calciteFlowItemBackClick",7)}t.prototype.renderBackButton=function(){var t=this,e=t.showBackButton,n=t.textBack;return e?o("calcite-action",{key:"back-button","aria-label":n,text:n,class:l.backButton,onClick:this.backButtonClick},o(u,{size:"16",path:c})):null};t.prototype.renderMenuButton=function(){var t=this,e=t.menuOpen,n=t.textOpen,r=t.textClose;var i=e?r:n;return o("calcite-action",{class:l.menuButton,"aria-label":i,text:i,onClick:this.toggleMenuOpen},o(u,{size:"16",path:a}))};t.prototype.renderMenuActions=function(){var t=this.menuOpen;return t?o("div",{class:l.menu},o("slot",{name:"menu-actions"})):null};t.prototype.renderFooterActions=function(){var t=!!this.el.querySelector("[slot=footer-actions]");return t?o("footer",{class:l.footer},o("slot",{name:"footer-actions"})):null};t.prototype.renderSingleActionContainer=function(){return o("div",{class:l.singleActionContainer},o("slot",{name:"menu-actions"}))};t.prototype.renderMenuActionsContainer=function(){return o("div",{class:l.menuContainer},this.renderMenuButton(),this.renderMenuActions())};t.prototype.renderHeaderActions=function(){var t=this.el.querySelector("[slot=menu-actions]");var e=!!t;var n=e?t.childElementCount:0;return n===1?this.renderSingleActionContainer():e?this.renderMenuActionsContainer():null};t.prototype.render=function(){var t;var e=(t={},t[l.heading]=true,t[l.headingFirst]=!this.showBackButton,t);var n=o("header",{class:l.header},this.renderBackButton(),o("h2",{class:s(e)},this.heading),this.renderHeaderActions());var i=o("section",{class:l.contentContainer},o("slot",null));return o(r,null,o("article",{class:l.container},n,i,this.renderFooterActions()))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--line-height:1.3rem;--base-font-size:14px;--font-size-2:1.429rem;--font-size-1:1.143rem;--font-size-0:1rem;--font-size--1:0.858rem;--font-weight:400;--font-weight-heading:600;--font-weight-bold:600;font-size:var(--font-size-0);--calcite-app-side-spacing:15px;--calcite-app-cap-spacing:15px;--calcite-app-side-spacing-three-quarters:11px;--calcite-app-cap-spacing-three-quarters:11px;--calcite-app-side-spacing-half:7px;--calcite-app-cap-spacing-half:7px;--calcite-app-side-spacing-third:5px;--calcite-app-cap-spacing-third:5px;--calcite-app-side-spacing-quarter:3px;--calcite-app-cap-spacing-quarter:3px;--calcite-app-side-spacing-eighth:2px;--calcite-app-cap-spacing-eighth:2px;--calcite-app-side-spacing-plus-half:22px;--calcite-app-cap-spacing-plus-half:22px;--calcite-app-side-spacing-double:30px;--calcite-app-cap-spacing-double:30px;--calcite-app-menu-min-width:10rem;--calcite-app-menu-offset:0px;--calcite-app-icon-size:16px;--calcite-app-border-radius:3px;--calcite-app-animation-time:250ms;--calcite-app-animation-time-fast:83ms;--calcite-app-animation-time-slow:500ms;--calcite-app-easing-function:ease-in-out;--calcite-app-shadow-0:0 2px 4px rgba(0,0,0,0.1);--calcite-app-shadow-1:0 0 12px 0 rgba(0,0,0,0.05);--calcite-app-shadow-1-hover:0 0 16px 0 rgba(0,0,0,0.1);--calcite-app-shadow-1--press:0 0 16px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2:0 0 16px 0 rgba(0,0,0,0.15);--calcite-app-shadow-2-hover:0 0 20px 0 rgba(0,0,0,0.2);--calcite-app-shadow-2-press:0 0 20px 0 rgba(0,0,0,0.3);--calcite-app-background:#fff;--calcite-app-foreground:#404040;--calcite-app-background-hover:#eaeaea;--calcite-app-foreground-hover:#2b2b2b;--calcite-app-background-active:#c7eaff;--calcite-app-foreground-active:#00619b;--calcite-app-foreground-subtle:#757575;--calcite-app-background-content:#eaeaea;--calcite-app-border:#eaeaea;--calcite-app-border-subtle:#f3f3f3}:host([theme=dark]){--calcite-app-background:#404040;--calcite-app-foreground:#dfdfdf;--calcite-app-background-hover:#2b2b2b;--calcite-app-foreground-hover:#f3f3f3;--calcite-app-background-active:#151515;--calcite-app-foreground-active:#59d6ff;--calcite-app-foreground-subtle:#eaeaea;--calcite-app-background-content:#2b2b2b;--calcite-app-border:#757575;--calcite-app-border-subtle:#555}\@-webkit-keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@keyframes calcite-app-fade-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0,-5px,0);transform:translate3D(0,-5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@keyframes calcite-app-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0,5px,0);transform:translate3D(0,5px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}\@-webkit-keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes calcite-app-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(.95,.95,1);transform:scale3D(.95,.95,1)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}html{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif;font-size:14px;line-height:1.3rem}.header{margin:0;-ms-flex-pack:justify;justify-content:space-between}.heading{padding:0;color:var(--calcite-app-foreground)}.header .heading{-ms-flex:1;flex:1;padding:var(--calcite-app-cap-spacing-half) var(--calcite-app-side-spacing-half)}h1.heading{font-size:var(--font-size-2)}h1.heading,h2.heading{font-weight:var(--font-weight)}h2.heading{font-size:var(--font-size-1)}h3.heading,h4.heading,h5.heading{font-size:var(--font-size-0);font-weight:var(--font-weight-bold)}button{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}:host{display:-ms-flexbox;display:flex;height:100%}:host([hidden]){display:none}.container{width:100%;height:100%;padding:0;margin:0;-ms-flex-flow:column;flex-flow:column}.container,.header{display:-ms-flexbox;display:flex;position:relative}.header{-ms-flex-align:center;align-items:center;color:var(--calcite-app-foreground);padding:var(--calcite-app-cap-spacing-quarter) var(--calcite-app-side-spacing-half);-ms-flex-pack:start;z-index:2;background-color:var(--calcite-app-background);border-bottom:1px solid var(--calcite-app-border);justify-content:flex-start}.back-button{-ms-flex:0;flex:0}.heading{font-weight:var(--font-weight);margin:0;overflow:hidden;padding:0 var(--calcite-app-side-spacing);text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-size-0);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex:1;flex:1}.heading--first{-ms-flex-pack:start;justify-content:flex-start}.menu-button{-ms-flex:0;flex:0;position:relative}.menu-container{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-flexbox;display:flex;position:relative}.menu slot[name=menu-actions]{position:absolute;top:100%;z-index:1;background-color:var(--calcite-app-background);-webkit-box-shadow:var(--calcite-app-shadow-0);box-shadow:var(--calcite-app-shadow-0);padding:0;left:auto;min-width:var(--calcite-app-menu-min-width);right:var(--calcite-app-menu-offset);visibility:visible;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;border:1px solid var(--calcite-app-border);-webkit-animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function);animation:calcite-app-fade-in-down var(--calcite-app-animation-time-fast) var(--calcite-app-easing-function)}.content-container{-ms-flex:1;flex:1;background-color:var(--calcite-app-background-content);padding:0;overflow:auto}slot[name=footer-actions]{-ms-flex-align:center;align-items:center;background-color:var(--calcite-app-background);border-top:1px solid var(--calcite-app-border);display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;padding:var(--calcite-app-cap-spacing) var(--calcite-app-side-spacing-half);-ms-flex-flow:row nowrap;flex-flow:row nowrap}"},enumerable:true,configurable:true});return t}();t("calcite_flow_item",p)}}});