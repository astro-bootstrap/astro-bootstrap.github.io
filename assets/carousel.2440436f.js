import{c as U}from"./_commonjsHelpers.042e6b4d.js";import{a as mt,b as q,r as W,c as pt,d as Tt}from"./base-component.4000c694.js";import{r as gt}from"./selector-engine.2db7bc91.js";var Y={},vt={get exports(){return Y},set exports(E){Y=E}},S={},At={get exports(){return S},set exports(E){S=E}};/*!
  * Bootstrap swipe.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var K;function It(){return K||(K=1,function(E,B){(function(r,f){E.exports=f(mt(),q(),W())})(U,function(r,f,g){const v=o=>o&&typeof o=="object"&&"default"in o?o:{default:o},N=v(r),h=v(f),m="swipe",n=".bs.swipe",O=`touchstart${n}`,c=`touchmove${n}`,A=`touchend${n}`,L=`pointerdown${n}`,D=`pointerup${n}`,k="touch",a="pen",I="pointer-event",y=40,R={endCallback:null,leftCallback:null,rightCallback:null},w={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class u extends N.default{constructor(e,_){super(),this._element=e,!(!e||!u.isSupported())&&(this._config=this._getConfig(_),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return R}static get DefaultType(){return w}static get NAME(){return m}dispose(){h.default.off(this._element,n)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),g.execute(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=y)return;const _=e/this._deltaX;this._deltaX=0,_&&g.execute(_>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(h.default.on(this._element,L,e=>this._start(e)),h.default.on(this._element,D,e=>this._end(e)),this._element.classList.add(I)):(h.default.on(this._element,O,e=>this._start(e)),h.default.on(this._element,c,e=>this._move(e)),h.default.on(this._element,A,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===a||e.pointerType===k)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}return u})}(At)),S}/*!
  * Bootstrap carousel.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(E,B){(function(r,f){E.exports=f(W(),q(),pt(),gt(),It(),Tt())})(U,function(r,f,g,v,N,h){const m=d=>d&&typeof d=="object"&&"default"in d?d:{default:d},n=m(f),O=m(g),c=m(v),A=m(N),L=m(h),D="carousel",a=".bs.carousel",I=".data-api",y="ArrowLeft",R="ArrowRight",w=500,u="next",o="prev",e="left",_="right",G=`slide${a}`,P=`slid${a}`,j=`keydown${a}`,F=`mouseenter${a}`,Q=`mouseleave${a}`,J=`dragstart${a}`,z=`load${a}${I}`,Z=`click${a}${I}`,M="carousel",C="active",tt="slide",et="carousel-item-end",st="carousel-item-start",it="carousel-item-next",nt="carousel-item-prev",x=".active",$=".carousel-item",rt=x+$,ot=".carousel-item img",at=".carousel-indicators",lt="[data-bs-slide], [data-bs-slide-to]",ct='[data-bs-ride="carousel"]',ut={[y]:_,[R]:e},_t={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},dt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class T extends L.default{constructor(t,s){super(t,s),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=c.default.findOne(at,this._element),this._addEventListeners(),this._config.ride===M&&this.cycle()}static get Default(){return _t}static get DefaultType(){return dt}static get NAME(){return D}next(){this._slide(u)}nextWhenVisible(){!document.hidden&&r.isVisible(this._element)&&this.next()}prev(){this._slide(o)}pause(){this._isSliding&&r.triggerTransitionEnd(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){n.default.one(this._element,P,()=>this.cycle());return}this.cycle()}}to(t){const s=this._getItems();if(t>s.length-1||t<0)return;if(this._isSliding){n.default.one(this._element,P,()=>this.to(t));return}const i=this._getItemIndex(this._getActive());if(i===t)return;const p=t>i?u:o;this._slide(p,s[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&n.default.on(this._element,j,t=>this._keydown(t)),this._config.pause==="hover"&&(n.default.on(this._element,F,()=>this.pause()),n.default.on(this._element,Q,()=>this._maybeEnableCycle())),this._config.touch&&A.default.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of c.default.find(ot,this._element))n.default.on(i,J,p=>p.preventDefault());const s={leftCallback:()=>this._slide(this._directionToOrder(e)),rightCallback:()=>this._slide(this._directionToOrder(_)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),w+this._config.interval))}};this._swipeHelper=new A.default(this._element,s)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const s=ut[t.key];s&&(t.preventDefault(),this._slide(this._directionToOrder(s)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const s=c.default.findOne(x,this._indicatorsElement);s.classList.remove(C),s.removeAttribute("aria-current");const i=c.default.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(C),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const s=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=s||this._config.defaultInterval}_slide(t,s=null){if(this._isSliding)return;const i=this._getActive(),p=t===u,l=s||r.getNextActiveElement(this._getItems(),i,p,this._config.wrap);if(l===i)return;const X=this._getItemIndex(l),H=ft=>n.default.trigger(this._element,ft,{relatedTarget:l,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:X});if(H(G).defaultPrevented||!i||!l)return;const ht=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(X),this._activeElement=l;const b=p?st:et,V=p?it:nt;l.classList.add(V),r.reflow(l),i.classList.add(b),l.classList.add(b);const Et=()=>{l.classList.remove(b,V),l.classList.add(C),i.classList.remove(C,V,b),this._isSliding=!1,H(P)};this._queueCallback(Et,i,this._isAnimated()),ht&&this.cycle()}_isAnimated(){return this._element.classList.contains(tt)}_getActive(){return c.default.findOne(rt,this._element)}_getItems(){return c.default.find($,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return r.isRTL()?t===e?o:u:t===e?u:o}_orderToDirection(t){return r.isRTL()?t===o?e:_:t===o?_:e}static jQueryInterface(t){return this.each(function(){const s=T.getOrCreateInstance(this,t);if(typeof t=="number"){s.to(t);return}if(typeof t=="string"){if(s[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);s[t]()}})}}return n.default.on(document,Z,lt,function(d){const t=r.getElementFromSelector(this);if(!t||!t.classList.contains(M))return;d.preventDefault();const s=T.getOrCreateInstance(t),i=this.getAttribute("data-bs-slide-to");if(i){s.to(i),s._maybeEnableCycle();return}if(O.default.getDataAttribute(this,"slide")==="next"){s.next(),s._maybeEnableCycle();return}s.prev(),s._maybeEnableCycle()}),n.default.on(window,z,()=>{const d=c.default.find(ct);for(const t of d)T.getOrCreateInstance(t)}),r.defineJQueryPlugin(T),T})})(vt);