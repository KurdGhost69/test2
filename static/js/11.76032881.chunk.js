(this.webpackJsonpChase=this.webpackJsonpChase||[]).push([[11],{65:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a})),r.d(t,"c",(function(){return i}));const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)c(e.material);else for(const t of e.material)c(t)}))},c=e=>{e.dispose();for(const t of Object.keys(e)){const r=e[t];r&&"object"===typeof r&&"minFilter"in r&&r.dispose()}},a=e=>{e.dispose(),e.forceContextLoss(),e=null},i=e=>{for(const t of e)t.parent.remove(t)}},92:function(e,t,r){},98:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),a=r(64),i=r(56),o=r(4),s=r.n(o),u=r(7),l=r(23),d=r(13);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=c.createElement("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"});function v({title:e,titleId:t,...r},n){return c.createElement("svg",m({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,f)}const b=c.forwardRef(v);r.p;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var j=c.createElement("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"});function g({title:e,titleId:t,...r},n){return c.createElement("svg",p({fill:"currentColor",width:18,height:42,viewBox:"0 0 18 42",ref:n,"aria-labelledby":t},r),e?c.createElement("title",{id:t},e):null,j)}const O=c.forwardRef(g);r.p;var h=r(65),x=r(62);r(92);function y(e,t,r,n){if(null!==t)return t;const c=r.length;return n>0?(e+1)%c:(e-1+c)%c}t.default=({width:e,height:t,images:r,placeholder:o,...m})=>{const[f,v]=Object(c.useState)(!1),[p,j]=Object(c.useState)(0),[g,w]=Object(c.useState)(!1),[_,F]=Object(c.useState)(!0),[I,E]=Object(c.useState)(),[R,C]=Object(c.useState)(),M=Object(c.useRef)(),k=Object(c.useRef)(),A=Object(c.useRef)(),N=Object(c.useRef)(),P=Object(c.useRef)(),S=Object(c.useRef)(),L=Object(c.useRef)(),D=Object(c.useRef)(!1),U=Object(c.useRef)(),q=Object(c.useRef)(),z=Object(c.useRef)(),$=Object(u.h)(),B=Object(u.d)(M,!0),J=Object(c.useRef)(),T=Object(c.useRef)(),V=Object(c.useRef)(),G=`Slide ${p+1} of ${r.length}. ${r[p].alt}`;Object(c.useEffect)((()=>(f&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""})),[f]),Object(c.useEffect)((()=>{const r=[e/-2,e/2,t/2,t/-2,1,1e3];return L.current=new a.tb({canvas:M.current,antialias:!1,powerPreference:"high-performance"}),S.current=new a.S(...r),P.current=new a.cb,L.current.setPixelRatio(2),L.current.setClearColor(1118481,1),L.current.setSize(e,t),L.current.domElement.style.width="100%",L.current.domElement.style.height="auto",P.current.background=new a.i(1118481),S.current.position.z=1,()=>{D.current=!1,Object(h.b)(P.current),Object(h.a)(L.current)}}),[t,e]),Object(c.useEffect)((()=>{let n=!0;return B&&!g&&(async()=>{const c=new a.kb,i=L.current.capabilities.getMaxAnisotropy(),o=r.map((async e=>{const t=await Object(x.a)(e),r=await c.loadAsync(t);return await L.current.initTexture(r),r.encoding=a.ub,r.minFilter=a.y,r.magFilter=a.y,r.anisotropy=i,r.generateMipmaps=!1,r})),s=await Promise.all(o);n&&(N.current=new a.db({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:s[0]},nextImage:{type:"t",value:s[1]}},vertexShader:"\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n  }\n",fragmentShader:"\n  varying vec2 vUv;\n  uniform sampler2D currentImage;\n  uniform sampler2D nextImage;\n  uniform float dispFactor;\n  uniform float direction;\n\n  void main() {\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n",transparent:!1,opacity:1}),A.current=new a.U(e,t,1),k.current=new a.G(A.current,N.current),k.current.position.set(0,0,0),P.current.add(k.current),w(!0),E(s),requestAnimationFrame((()=>{L.current.render(P.current,S.current)})))})(),()=>{n=!1}}),[t,r,B,g,e]);const K=Object(c.useCallback)((({index:e,direction:t=1})=>{if(!I)return;j(e);const r=N.current.uniforms;r.nextImage.value=I[e],r.direction.value=t;const n=()=>{r.currentImage.value=I[e],r.dispFactor.value=0,D.current=!1};if($||1===r.dispFactor.value)n(),requestAnimationFrame((()=>{L.current.render(P.current,S.current)}));else{D.current=!0;const e=Object(i.f)(r.dispFactor.value,(e=>{r.dispFactor.value=e,1===e&&n()}));T.current=Object(i.e)({from:e.get(),to:1,velocity:e.getVelocity(),stiffness:100,damping:20}).start(e)}}),[$,I]),H=Object(c.useCallback)((({direction:e,index:t=null,...r})=>{if(!g)return;if(D.current)return cancelAnimationFrame(z.current),void(z.current=requestAnimationFrame((()=>H({direction:e,index:t,...r}))));const n=y(p,t,I,e);K({index:n,direction:e,...r})}),[K,p,g,I]),Q=Object(c.useCallback)((e=>{if(e===p)return;H({direction:e>p?1:-1,index:e})}),[p,H]);Object(c.useEffect)((()=>{const e=()=>{const e=M.current.getBoundingClientRect();C(e)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),Object(c.useEffect)((()=>{let e;const t=()=>{e=requestAnimationFrame(t),D.current&&L.current.render(P.current,S.current)};return e=requestAnimationFrame(t),()=>{var t;cancelAnimationFrame(e),null===(t=T.current)||void 0===t||t.stop()}}),[]),Object(c.useEffect)((()=>{if(o){const e=()=>{F(!1)},t=J.current;return t.addEventListener("transitionend",e),()=>{t&&t.removeEventListener("transitionend",e)}}}),[o]);const W=Object(c.useCallback)((e=>{if(D.current||!N.current||!I)return;const{x:t}=e;q.current=t;const n=Math.abs(t),c=R.width;U.current=t>0?-1:1;const a=1-(n-c)/c*-1,i=y(p,null,r,U.current),o=N.current.uniforms,s=Math.min(Math.max(a,0),1);o.currentImage.value=I[p],o.nextImage.value=I[i],o.direction.value=U.current,$||(o.dispFactor.value=s),requestAnimationFrame((()=>{L.current.render(P.current,S.current)}))}),[R,p,r,$,I]),X=Object(c.useCallback)((()=>{if(!N.current)return;const e=N.current.uniforms,t=1e3*(1-e.dispFactor.value),r=Math.abs(q.current),n=.2*R.width;q.current=0,D.current||0!==r&&r&&(r>n?H({duration:t,direction:U.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,H({direction:-1*U.current,index:p})))}),[R,p,H]);Object(c.useEffect)((()=>{let e;const t=Object(i.f)({x:0,y:0},(e=>{W(e)})),r=Object(i.c)(V.current,"mousedown touchstart").start((r=>{v(!0),r.preventDefault(),e=Object(i.d)({x:0,y:0}).start(t)})),n=Object(i.c)(document,"mouseup touchend").start((()=>{var t;v(!1),X(),null===(t=e)||void 0===t||t.stop()}));return()=>{var t;r.stop(),n.stop(),null===(t=e)||void 0===t||t.stop()}}),[X,W]);return Object(n.jsxs)("div",{className:"carousel",onKeyDown:e=>{const t={ArrowRight:()=>H({direction:1}),ArrowLeft:()=>H({direction:-1})}[e.key];t&&t()},...m,children:[Object(n.jsxs)("div",{className:"carousel__content",children:[Object(n.jsxs)("div",{className:s()("carousel__image-wrapper",{"carousel__image-wrapper--dragging":f}),ref:V,children:[Object(n.jsx)("div",{"aria-atomic":!0,className:"carousel__canvas-wrapper","aria-live":"polite","aria-label":G,role:"img",children:Object(n.jsx)("canvas",{"aria-hidden":!0,className:"carousel__canvas",ref:M})}),_&&o&&Object(n.jsx)("img",{"aria-hidden":!0,className:s()("carousel__placeholder",{"carousel__placeholder--loaded":!l.a&&g&&I}),src:o,ref:J,alt:"",role:"presentation"})]}),Object(n.jsx)("button",{className:"carousel__button carousel__button--prev","aria-label":"Previous slide",onClick:()=>H({direction:-1}),onMouseUp:d.a,children:Object(n.jsx)(b,{})}),Object(n.jsx)("button",{className:"carousel__button carousel__button--next","aria-label":"Next slide",onClick:()=>H({direction:1}),onMouseUp:d.a,children:Object(n.jsx)(O,{})})]}),Object(n.jsx)("div",{className:"carousel__nav",children:r.map(((e,t)=>Object(n.jsx)("button",{className:"carousel__nav-button",onClick:()=>Q(t),onMouseUp:d.a,"aria-label":`Jump to slide ${t+1}`,"aria-pressed":t===p},e.alt)))})]})}}}]);
//# sourceMappingURL=11.76032881.chunk.js.map