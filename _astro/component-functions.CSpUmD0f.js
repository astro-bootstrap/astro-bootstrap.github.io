import{c as g}from"./_commonjsHelpers.BosuxZz1.js";import{r as b,a as p,b as E}from"./selector-engine.D725bxgv.js";var e={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var r;function A(){return r||(r=1,function(h,o){(function(t,n){n(o,b(),p(),E())})(g,function(t,n,a,c){const u=(i,l="hide")=>{const m=`click.dismiss${i.EVENT_KEY}`,s=i.NAME;n.on(document,m,`[data-bs-dismiss="${s}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),c.isDisabled(this))return;const f=a.getElementFromSelector(this)||this.closest(`.${s}`);i.getOrCreateInstance(f)[l]()})};t.enableDismissTrigger=u,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})})}(e,e.exports)),e.exports}export{A as r};