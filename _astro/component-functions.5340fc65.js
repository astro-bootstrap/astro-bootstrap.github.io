import{c as E}from"./_commonjsHelpers.042e6b4d.js";import{a as b,r as p,b as v}from"./selector-engine.ae78b31a.js";var e={},h={get exports(){return e},set exports(r){e=r}};/*!
  * Bootstrap component-functions.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var o;function D(){return o||(o=1,function(r,a){(function(t,n){n(a,b(),p(),v())})(E,function(t,n,c,u){const l=(i,m="hide")=>{const g=`click.dismiss${i.EVENT_KEY}`,s=i.NAME;n.on(document,g,`[data-bs-dismiss="${s}"]`,function(d){if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),c.isDisabled(this))return;const f=u.getElementFromSelector(this)||this.closest(`.${s}`);i.getOrCreateInstance(f)[m]()})};t.enableDismissTrigger=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})})}(h,e)),e}export{D as r};
