import{c as F}from"./_commonjsHelpers.042e6b4d.js";import{r as x,a as Q,c as H,b as J,e as ut}from"./selector-engine.ae78b31a.js";import{r as lt,a as ft,b as ht}from"./focustrap.3d0a469c.js";import{r as _t}from"./component-functions.5340fc65.js";import{r as dt}from"./index.b72c8039.js";var U={},mt={get exports(){return U},set exports(_){U=_}};/*!
  * Bootstrap offcanvas.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(_,Z){(function(d,o){_.exports=o(x(),lt(),Q(),H(),J(),ft(),ht(),_t())})(F,function(d,o,n,N,u,k,R,C){const w="offcanvas",i=".bs.offcanvas",g=".data-api",M=`load${i}${g}`,O="Escape",y="show",T="showing",D="hiding",$="offcanvas-backdrop",L=".offcanvas.show",V=`show${i}`,v=`shown${i}`,P=`hide${i}`,A=`hidePrevented${i}`,S=`hidden${i}`,f=`resize${i}`,K=`click${i}${g}`,B=`keydown.dismiss${i}`,Y='[data-bs-toggle="offcanvas"]',W={backdrop:!0,keyboard:!0,scroll:!1},q={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class r extends N{constructor(e,a){super(e,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return W}static get DefaultType(){return q}static get NAME(){return w}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||n.trigger(this._element,V,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new o().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(T);const I=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(y),this._element.classList.remove(T),n.trigger(this._element,v,{relatedTarget:e})};this._queueCallback(I,this._element,!0)}hide(){if(!this._isShown||n.trigger(this._element,P).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(D),this._backdrop.hide();const a=()=>{this._element.classList.remove(y,D),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new o().reset(),n.trigger(this._element,S)};this._queueCallback(a,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){n.trigger(this._element,A);return}this.hide()},a=Boolean(this._config.backdrop);return new k({className:$,isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?e:null})}_initializeFocusTrap(){return new R({trapElement:this._element})}_addEventListeners(){n.on(this._element,B,e=>{if(e.key===O){if(!this._config.keyboard){n.trigger(this._element,A);return}this.hide()}})}static jQueryInterface(e){return this.each(function(){const a=r.getOrCreateInstance(this,e);if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e](this)}})}}return n.on(document,K,Y,function(h){const e=u.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&h.preventDefault(),d.isDisabled(this))return;n.one(e,S,()=>{d.isVisible(this)&&this.focus()});const a=u.findOne(L);a&&a!==e&&r.getInstance(a).hide(),r.getOrCreateInstance(e).toggle(this)}),n.on(window,M,()=>{for(const h of u.find(L))r.getOrCreateInstance(h).show()}),n.on(window,f,()=>{for(const h of u.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(h).position!=="fixed"&&r.getOrCreateInstance(h).hide()}),C.enableDismissTrigger(r),d.defineJQueryPlugin(r),r})})(mt);var z={},Et={get exports(){return z},set exports(_){z=_}};/*!
  * Bootstrap dropdown.js v5.3.0-alpha1 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(_,Z){(function(d,o){_.exports=o(dt,x(),Q(),ut(),J(),H())})(F,function(d,o,n,N,u,k){function R(m){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(m){for(const s in m)if(s!=="default"){const c=Object.getOwnPropertyDescriptor(m,s);Object.defineProperty(t,s,c.get?c:{enumerable:!0,get:()=>m[s]})}}return t.default=m,Object.freeze(t)}const C=R(d),w="dropdown",i=".bs.dropdown",g=".data-api",M="Escape",O="Tab",y="ArrowUp",T="ArrowDown",D=2,$=`hide${i}`,L=`hidden${i}`,V=`show${i}`,v=`shown${i}`,P=`click${i}${g}`,A=`keydown${i}${g}`,S=`keyup${i}${g}`,f="show",K="dropup",B="dropend",Y="dropstart",W="dropup-center",q="dropdown-center",r='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',h=`${r}.${f}`,e=".dropdown-menu",a=".navbar",I=".navbar-nav",j=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",tt=o.isRTL()?"top-end":"top-start",et=o.isRTL()?"top-start":"top-end",st=o.isRTL()?"bottom-end":"bottom-start",ot=o.isRTL()?"bottom-start":"bottom-end",nt=o.isRTL()?"left-start":"right-start",it=o.isRTL()?"right-start":"left-start",rt="top",at="bottom",ct={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},pt={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class l extends k{constructor(t,s){super(t,s),this._popper=null,this._parent=this._element.parentNode,this._menu=u.next(this._element,e)[0]||u.prev(this._element,e)[0]||u.findOne(e,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return ct}static get DefaultType(){return pt}static get NAME(){return w}toggle(){return this._isShown()?this.hide():this.show()}show(){if(o.isDisabled(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!n.trigger(this._element,V,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(I))for(const c of[].concat(...document.body.children))n.on(c,"mouseover",o.noop);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(f),this._element.classList.add(f),n.trigger(this._element,v,t)}}hide(){if(o.isDisabled(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!n.trigger(this._element,$,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))n.off(c,"mouseover",o.noop);this._popper&&this._popper.destroy(),this._menu.classList.remove(f),this._element.classList.remove(f),this._element.setAttribute("aria-expanded","false"),N.removeDataAttribute(this._menu,"popper"),n.trigger(this._element,L,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!o.isElement(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${w.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof C>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:o.isElement(this._config.reference)?t=o.getElement(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const s=this._getPopperConfig();this._popper=C.createPopper(t,this._menu,s)}_isShown(){return this._menu.classList.contains(f)}_getPlacement(){const t=this._parent;if(t.classList.contains(B))return nt;if(t.classList.contains(Y))return it;if(t.classList.contains(W))return rt;if(t.classList.contains(q))return at;const s=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(K)?s?et:tt:s?ot:st}_detectNavbar(){return this._element.closest(a)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(s=>Number.parseInt(s,10)):typeof t=="function"?s=>t(s,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(N.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...o.execute(this._config.popperConfig,[t])}}_selectMenuItem({key:t,target:s}){const c=u.find(j,this._menu).filter(p=>o.isVisible(p));c.length&&o.getNextActiveElement(c,s,t===T,!c.includes(s)).focus()}static jQueryInterface(t){return this.each(function(){const s=l.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}static clearMenus(t){if(t.button===D||t.type==="keyup"&&t.key!==O)return;const s=u.find(h);for(const c of s){const p=l.getInstance(c);if(!p||p._config.autoClose===!1)continue;const b=t.composedPath(),E=b.includes(p._menu);if(b.includes(p._element)||p._config.autoClose==="inside"&&!E||p._config.autoClose==="outside"&&E||p._menu.contains(t.target)&&(t.type==="keyup"&&t.key===O||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const G={relatedTarget:p._element};t.type==="click"&&(G.clickEvent=t),p._completeHide(G)}}static dataApiKeydownHandler(t){const s=/input|textarea/i.test(t.target.tagName),c=t.key===M,p=[y,T].includes(t.key);if(!p&&!c||s&&!c)return;t.preventDefault();const b=this.matches(r)?this:u.prev(this,r)[0]||u.next(this,r)[0]||u.findOne(r,t.delegateTarget.parentNode),E=l.getOrCreateInstance(b);if(p){t.stopPropagation(),E.show(),E._selectMenuItem(t);return}E._isShown()&&(t.stopPropagation(),E.hide(),b.focus())}}return n.on(document,A,r,l.dataApiKeydownHandler),n.on(document,A,e,l.dataApiKeydownHandler),n.on(document,P,l.clearMenus),n.on(document,S,l.clearMenus),n.on(document,P,r,function(m){m.preventDefault(),l.getOrCreateInstance(this).toggle()}),o.defineJQueryPlugin(l),l})})(Et);
