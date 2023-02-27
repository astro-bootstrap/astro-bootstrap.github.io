import{c as y}from"./_commonjsHelpers.042e6b4d.js";import{a as D,r as C,b as S}from"./base-component.8dcc01b9.js";var h={},T={get exports(){return h},set exports(t){h=t}},l={},L={get exports(){return l},set exports(t){l=t}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var b;function q(){return b||(b=1,function(t,p){(function(r,n){n(p,D(),C())})(y,function(r,n,c){const u=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(n),d=(e,m="hide")=>{const A=`click.dismiss${e.EVENT_KEY}`,o=e.NAME;u.default.on(document,A,`[data-bs-dismiss="${o}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),c.isDisabled(this))return;const _=c.getElementFromSelector(this)||this.closest(`.${o}`);e.getOrCreateInstance(_)[m]()})};r.enableDismissTrigger=d,Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}(L,l)),l}/*!
  * Bootstrap alert.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,p){(function(r,n){t.exports=n(C(),D(),S(),q())})(y,function(r,n,c,g){const u=a=>a&&typeof a=="object"&&"default"in a?a:{default:a},d=u(n),e=u(c),m="alert",o=".bs.alert",E=`close${o}`,_=`closed${o}`,v="fade",N="show";class i extends e.default{static get NAME(){return m}close(){if(d.default.trigger(this._element,E).defaultPrevented)return;this._element.classList.remove(N);const f=this._element.classList.contains(v);this._queueCallback(()=>this._destroyElement(),this._element,f)}_destroyElement(){this._element.remove(),d.default.trigger(this._element,_),this.dispose()}static jQueryInterface(s){return this.each(function(){const f=i.getOrCreateInstance(this);if(typeof s=="string"){if(f[s]===void 0||s.startsWith("_")||s==="constructor")throw new TypeError(`No method named "${s}"`);f[s](this)}})}}return g.enableDismissTrigger(i,"close"),r.defineJQueryPlugin(i),i})})(T);const x=h,M=document.querySelectorAll(".alert.astro-bs");M.forEach(t=>new x(t));
