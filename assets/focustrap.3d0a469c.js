import{c as T}from"./_commonjsHelpers.042e6b4d.js";import{b as k,e as S,r as x,a as y,d as O}from"./selector-engine.ae78b31a.js";var E={},W={get exports(){return E},set exports(a){E=a}};/*!
  * Bootstrap scrollbar.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var D;function q(){return D||(D=1,function(a,v){(function(r,i){a.exports=i(k(),S(),x())})(T,function(r,i,_){const c=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",d=".sticky-top",o="padding-right",u="margin-right";class m{constructor(){this._element=document.body}getWidth(){const s=document.documentElement.clientWidth;return Math.abs(window.innerWidth-s)}hide(){const s=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,o,e=>e+s),this._setElementAttributes(c,o,e=>e+s),this._setElementAttributes(d,u,e=>e-s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,o),this._resetElementAttributes(c,o),this._resetElementAttributes(d,u)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(s,e,t){const l=this.getWidth(),f=h=>{if(h!==this._element&&window.innerWidth>h.clientWidth+l)return;this._saveInitialAttribute(h,e);const n=window.getComputedStyle(h).getPropertyValue(e);h.style.setProperty(e,`${t(Number.parseFloat(n))}px`)};this._applyManipulationCallback(s,f)}_saveInitialAttribute(s,e){const t=s.style.getPropertyValue(e);t&&i.setDataAttribute(s,e,t)}_resetElementAttributes(s,e){const t=l=>{const f=i.getDataAttribute(l,e);if(f===null){l.style.removeProperty(e);return}i.removeDataAttribute(l,e),l.style.setProperty(e,f)};this._applyManipulationCallback(s,t)}_applyManipulationCallback(s,e){if(_.isElement(s)){e(s);return}for(const t of r.find(s,this._element))e(t)}}return m})}(W)),E}var g={},V={get exports(){return g},set exports(a){g=a}};/*!
  * Bootstrap backdrop.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var w;function B(){return w||(w=1,function(a,v){(function(r,i){a.exports=i(y(),x(),O())})(T,function(r,i,_){const c="backdrop",d="fade",o="show",u=`mousedown.bs.${c}`,m={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},p={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class s extends _{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return m}static get DefaultType(){return p}static get NAME(){return c}show(t){if(!this._config.isVisible){i.execute(t);return}this._append();const l=this._getElement();this._config.isAnimated&&i.reflow(l),l.classList.add(o),this._emulateAnimation(()=>{i.execute(t)})}hide(t){if(!this._config.isVisible){i.execute(t);return}this._getElement().classList.remove(o),this._emulateAnimation(()=>{this.dispose(),i.execute(t)})}dispose(){this._isAppended&&(r.off(this._element,u),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(d),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=i.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),r.on(t,u,()=>{i.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){i.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return s})}(V)),g}var N={},R={get exports(){return N},set exports(a){N=a}};/*!
  * Bootstrap focustrap.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var C;function K(){return C||(C=1,function(a,v){(function(r,i){a.exports=i(y(),k(),O())})(T,function(r,i,_){const c="focustrap",o=".bs.focustrap",u=`focusin${o}`,m=`keydown.tab${o}`,p="Tab",s="forward",e="backward",t={autofocus:!0,trapElement:null},l={autofocus:"boolean",trapElement:"element"};class f extends _{constructor(n){super(),this._config=this._getConfig(n),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return t}static get DefaultType(){return l}static get NAME(){return c}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),r.off(document,o),r.on(document,u,n=>this._handleFocusin(n)),r.on(document,m,n=>this._handleKeydown(n)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,r.off(document,o))}_handleFocusin(n){const{trapElement:A}=this._config;if(n.target===document||n.target===A||A.contains(n.target))return;const b=i.focusableChildren(A);b.length===0?A.focus():this._lastTabNavDirection===e?b[b.length-1].focus():b[0].focus()}_handleKeydown(n){n.key===p&&(this._lastTabNavDirection=n.shiftKey?e:s)}}return f})}(R)),N}export{B as a,K as b,q as r};
