import{c as v}from"./_commonjsHelpers.042e6b4d.js";import{r as f}from"./selector-engine.ae78b31a.js";import{r as d}from"./tooltip.95a2ebb6.js";import"./index.b72c8039.js";var n={},g={get exports(){return n},set exports(t){n=t}};/*!
  * Bootstrap popover.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,T){(function(s,e){t.exports=e(f(),d())})(v,function(s,e){const p="popover",a=".popover-header",c=".popover-body",l={...e.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},u={...e.DefaultType,content:"(null|string|element|function)"};class o extends e{static get Default(){return l}static get DefaultType(){return u}static get NAME(){return p}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[a]:this._getTitle(),[c]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(r){return this.each(function(){const i=o.getOrCreateInstance(this,r);if(typeof r=="string"){if(typeof i[r]>"u")throw new TypeError(`No method named "${r}"`);i[r]()}})}}return s.defineJQueryPlugin(o),o})})(g);const h=n,m=document.querySelectorAll('[data-bs-toggle="popover"]');[...m].map(t=>new h(t));