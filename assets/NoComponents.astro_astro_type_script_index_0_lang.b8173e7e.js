import{c as d}from"./_commonjsHelpers.042e6b4d.js";import{r as p,a as A,c as f}from"./selector-engine.ae78b31a.js";import{r as C}from"./component-functions.5340fc65.js";var a={},N={get exports(){return a},set exports(n){a=n}};/*!
  * Bootstrap alert.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(n,g){(function(o,s){n.exports=s(p(),A(),f(),C())})(d,function(o,s,c,l){const m="alert",i=".bs.alert",u=`close${i}`,E=`closed${i}`,_="fade",h="show";class t extends c{static get NAME(){return m}close(){if(s.trigger(this._element,u).defaultPrevented)return;this._element.classList.remove(h);const r=this._element.classList.contains(_);this._queueCallback(()=>this._destroyElement(),this._element,r)}_destroyElement(){this._element.remove(),s.trigger(this._element,E),this.dispose()}static jQueryInterface(e){return this.each(function(){const r=t.getOrCreateInstance(this);if(typeof e=="string"){if(r[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);r[e](this)}})}}return l.enableDismissTrigger(t,"close"),o.defineJQueryPlugin(t),t})})(N);
