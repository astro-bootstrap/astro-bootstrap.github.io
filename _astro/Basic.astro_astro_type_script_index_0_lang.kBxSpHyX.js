import{c as f,g as v}from"./_commonjsHelpers.BosuxZz1.js";import{r as g}from"./tooltip.WAqHJJgy.js";import{b as d}from"./selector-engine.DHlzQWq5.js";var i={exports:{}};/*!
  * Bootstrap popover.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(r,y){(function(e,n){r.exports=n(g(),d())})(f,function(e,n){const p="popover",a=".popover-header",l=".popover-body",c={...e.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},u={...e.DefaultType,content:"(null|string|element|function)"};class o extends e{static get Default(){return c}static get DefaultType(){return u}static get NAME(){return p}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[a]:this._getTitle(),[l]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const s=o.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}return n.defineJQueryPlugin(o),o})})(i);var h=i.exports;const m=v(h),T=document.querySelectorAll('[data-bs-toggle="popover"]');[...T].map(r=>new m(r));
