(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{50:function(e,t,i){"use strict";var n=i(1),a=i(0),c=i(4),A=i.n(c),s=i(17),r=i.p+"static/media/gotham-bold.73ce573b.woff2";i(52);t.a=({children:e,level:t=1,as:i,align:c="auto",weight:l="medium",className:o,...d})=>{const b=Math.min(Math.max(t,0),4),j=i||`h${Math.max(b,1)}`;return Object(n.jsxs)(a.Fragment,{children:["bold"===l&&Object(n.jsxs)(s.a,{children:[Object(n.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(n.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(n.jsx)(j,{className:A()(o,"heading",`heading--align-${c}`,`heading--level-${b}`,`heading--weight-${l}`),...d,children:e})]})}},51:function(e,t,i){"use strict";var n=i(1),a=i(4),c=i.n(a);i(54);t.a=({children:e,size:t="m",as:i="p",align:a="auto",weight:A="auto",secondary:s,className:r,...l})=>Object(n.jsx)(i,{className:c()(r,"text",`text--align-${a}`,`text--size-${t}`,`text--weight-${A}`,{"text--secondary":s}),...l,children:e})},52:function(e,t,i){},53:function(e,t,i){"use strict";var n=i(1),a=i(0),c=i(4),A=i.n(c);i(60);const s=Object(a.forwardRef)((({as:e="div",children:t,className:i,...a},c)=>Object(n.jsx)(e,{className:A()("section",i),ref:c,...a,children:t})));t.a=s},54:function(e,t,i){},55:function(e,t,i){"use strict";var n=i(1),a=i(0),c=i(4),A=i.n(c),s=i(7),r=i(56),l=i(20),o=i(23);i(59);const d=["\u30a2","\u30a4","\u30a6","\u30a8","\u30aa","\u30ab","\u30ad","\u30af","\u30b1","\u30b3","\u30b5","\u30b7","\u30b9","\u30bb","\u30bd","\u30bf","\u30c1","\u30c4","\u30c6","\u30c8","\u30ca","\u30cb","\u30cc","\u30cd","\u30ce","\u30cf","\u30d2","\u30d5","\u30d8","\u30db","\u30de","\u30df","\u30e0","\u30e1","\u30e2","\u30e4","\u30e6","\u30e8","\u30fc","\u30e9","\u30ea","\u30eb","\u30ec","\u30ed","\u30ef","\u30f0","\u30f1","\u30f2","\u30f3","\u30ac","\u30ae","\u30b0","\u30b2","\u30b4","\u30b6","\u30b8","\u30ba","\u30bc","\u30be","\u30c0","\u30c2","\u30c5","\u30c7","\u30c9","\u30d0","\u30d3","\u30d6","\u30d9","\u30dc","\u30d1","\u30d4","\u30d7","\u30da","\u30dd"],b="glyph",j="value";const h=({text:e,start:t=!0,delay:i=0,className:c,...h})=>{const p=Object(a.useRef)([{type:b,value:""}]),u=Object(a.useRef)(),m=Object(s.h)();return Object(a.useEffect)((()=>{const n=u.current,a=e.split("");let c;const A=()=>{const e=p.current.map((e=>`<span class="decoder-text__${e.type}">${e.value}</span>`));n.innerHTML=e.join("")},s=Object(r.f)(0,(e=>{p.current=function(e,t,i){return e.map(((e,n)=>{if(n<i)return{type:j,value:e};if(i%1<.5){const e=Math.floor(Math.random()*d.length);return{type:b,value:d[e]}}return{type:b,value:t[n].value}}))}(a,p.current,e),A()}));return!t||c||m||o.a||(c=Object(r.a)(Object(r.b)(i),Object(r.e)({from:0,to:a.length,stiffness:8,damping:5})).start(s)),m&&(p.current=a.map(((e,t)=>({type:j,value:a[t]}))),A()),()=>{c&&c.stop()}}),[m,t,i,e]),Object(n.jsxs)("span",{className:A()("decoder-text",c),...h,children:[Object(n.jsx)(l.a,{className:"decoder-text__label",children:e}),Object(n.jsx)("span",{"aria-hidden":!0,className:"decoder-text__content",ref:u})]})};t.a=Object(a.memo)(h)},57:function(e,t,i){"use strict";var n=i(1);i(58),i(70);t.a=()=>Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Chase`}),"Crafted by yours truly"]})},58:function(e,t,i){"use strict";var n=i(1),a=i(12),c=i(4),A=i.n(c),s=i(13);i(69);const r=["txt","png","jpg"];t.a=({rel:e,target:t,children:i,secondary:c,className:l,href:o,as:d,...b})=>{const j=r.includes(null===o||void 0===o?void 0:o.split(".").pop()),h=(null===o||void 0===o?void 0:o.includes("://"))||"#"===(null===o||void 0===o?void 0:o[0])||j,p=e||(h?"noreferrer noopener":void 0),u=t||(h?"_blank":void 0),m=d||(h?"a":a.b);return Object(n.jsx)(m,{className:A()("link",l,{"link--secondary":c}),rel:p,href:h?o:void 0,to:h?void 0:o,target:u,onMouseUp:s.a,...b,children:i})}},59:function(e,t,i){},60:function(e,t,i){},61:function(e,t,i){"use strict";var n=i(1),a=i(0),c=i(4),A=i.n(c),s=i(7),r=i(19),l=i(11),o=i(49),d=i(18),b=i(23),j=i(8),h=i(2),p=i(62),u=i(24),m=i(20);i(72);const g=({onLoad:e,loaded:t,inViewport:i,srcSet:c,placeholder:u,delay:g,src:f,alt:x,play:E=!0,reveal:v,...O})=>{const B=Object(s.h)(),[w,Q]=Object(a.useState)(!0),[I,M]=Object(a.useState)(!B),[y,R]=Object(a.useState)(!1),[D,N]=Object(a.useState)(!1),[_,C]=Object(a.useState)(!1),[k,S]=Object(a.useState)(),[F,U]=Object(a.useState)(),z=Object(a.useRef)(),L=Object(a.useRef)(),H=null===f||void 0===f?void 0:f.endsWith(".mp4"),J=f||(null===c||void 0===c?void 0:c.split(" ")[0]),P=!b.a&&i;Object(a.useEffect)((()=>{const e=()=>{Q(!1)},t=z.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(a.useEffect)((()=>{H&&c?(async()=>{const e=await Object(p.b)(c);U(e)})():H&&U(f)}),[H,f,c]),Object(a.useEffect)((()=>{const{width:e,height:t}=z.current;e&&t&&S({width:e,height:t})}),[]),Object(a.useEffect)((()=>{L.current&&F&&(E&&i?!i||B||b.a||(M(!0),L.current.play()):(M(!1),L.current.pause()))}),[i,E,B,F]);const Y=e=>{e.preventDefault(),L.current.paused?(M(!0),L.current.play()):(M(!1),L.current.pause())},T=()=>{R(!0),C(!0)};return Object(n.jsxs)("div",{className:A()("image__element-wrapper",{"image__element-wrapper--reveal":v,"image__element-wrapper--in-viewport":i}),onMouseOver:H?()=>{R(!0),N(!0)}:void 0,onMouseOut:H?()=>N(!1):void 0,style:{"--delay":Object(h.c)(g+1e3)},children:[H&&Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:A()("image__element",{"image__element--loaded":t}),autoPlay:!B,role:"img",onLoadStart:e,src:F,"aria-label":x,ref:L,...O}),Object(n.jsx)(o.a,{in:D||_,onExit:d.b,onExited:()=>R(!1),timeout:{enter:0,exit:Object(h.b)(j.b.base.durationS)},children:e=>Object(n.jsx)(m.a,{visible:y,children:Object(n.jsxs)(r.a,{className:A()("image__button",`image__button--${e}`),onFocus:T,onBlur:()=>C(!1),onClick:Y,children:[Object(n.jsx)(l.a,{icon:I?"pause":"play"}),I?"Pause":"Play"]})})})]}),!H&&Object(n.jsx)("img",{className:A()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:P?J:void 0,srcSet:P?c:void 0,width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,alt:x,...O}),w&&Object(n.jsx)("img",{"aria-hidden":!0,className:A()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(h.c)(g)},ref:z,src:u,onLoad:e=>{const{width:t,height:i}=e.target;S({width:t,height:i})},width:null===k||void 0===k?void 0:k.width,height:null===k||void 0===k?void 0:k.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:i,delay:c=0,raised:r,src:l,...o})=>{const[d,b]=Object(a.useState)(!1),{themeId:j}=Object(u.c)(),p=Object(a.useRef)(),m=Object(s.d)(p,!(null===l||void 0===l?void 0:l.endsWith(".mp4"))),f=Object(a.useCallback)((()=>{b(!0)}),[]);return Object(n.jsx)("div",{className:A()("image",e,`image--${j}`,{"image--in-viewport":m,"image--reveal":i,"image--raised":r}),style:{...t,"--delay":Object(h.c)(c)},ref:p,children:Object(n.jsx)(g,{delay:c,onLoad:f,loaded:d,inViewport:m,reveal:i,src:l,...o})})}},62:function(e,t,i){"use strict";async function n({src:e,srcSet:t,sizes:i}){return new Promise(((n,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),i&&(a.sizes=i);const c=()=>{a.removeEventListener("load",c);const e=a.currentSrc;n(e)};a.addEventListener("load",c)}catch(c){a(`Error loading ${t}: ${c}`)}}))}async function a(e){const t=e.split(", ").map((e=>{const[t,i]=e.split(" ");return{src:t,image:function(e=1,t=1){const i=document.createElement("canvas"),n=i.getContext("2d");i.width=e,i.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const a=i.toDataURL("image/png","");return i.remove(),a}(Number(i.replace("w",""))),width:i}})),i=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),a=await n({srcSet:i});return t.find((e=>e.image===a)).src}i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}))},63:function(e,t,i){"use strict";var n=i(1),a=i(4),c=i.n(a),A=i(2);i(71);const s=({lineWidth:e,lineHeight:t,notchWidth:i,notchHeight:a,collapseDelay:s,collapsed:r,className:l,style:o})=>Object(n.jsxs)("div",{className:c()("divider",l),style:{"--lineWidth":e,"--lineHeight":t,"--notchWidth":i,"--notchHeight":a,"--collapseDelay":Object(A.c)(s),...o},children:[Object(n.jsx)("div",{className:c()("divider__line",{"divider__line--collapsed":r})}),Object(n.jsx)("div",{className:c()("divider__notch",{"divider__notch--collapsed":r}),style:{"--collapseDelay":Object(A.c)(s+160)}})]});s.defaultProps={lineWidth:"100%",lineHeight:"2px",notchWidth:"90px",notchHeight:"10px",collapsed:!1,collapseDelay:0},t.a=s},65:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return c})),i.d(t,"c",(function(){return A}));const n=e=>{e.traverse((e=>{if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)a(e.material);else for(const t of e.material)a(t)}))},a=e=>{e.dispose();for(const t of Object.keys(e)){const i=e[t];i&&"object"===typeof i&&"minFilter"in i&&i.dispose()}},c=e=>{e.dispose(),e.forceContextLoss(),e=null},A=e=>{for(const t of e)t.parent.remove(t)}},66:function(e,t,i){"use strict";t.a=i.p+"static/media/slice-app-large.a6491733.jpg"},67:function(e,t,i){"use strict";t.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k="},68:function(e,t,i){"use strict";t.a=i.p+"static/media/slice-app.091155c4.jpg"},69:function(e,t,i){},70:function(e,t,i){},71:function(e,t,i){},72:function(e,t,i){},74:function(e,t,i){},75:function(e,t,i){},76:function(e,t,i){},80:function(e,t,i){},81:function(e,t,i){},95:function(e,t,i){"use strict";i.r(t);var n=i(1),a=(i(74),i.p+"static/media/gamestack-list-large.89dd2fc9.jpg"),c=i.p+"static/media/gamestack-list.8f1de0b0.jpg",A=i.p+"static/media/gamestack-login-large.44020927.jpg",s=i.p+"static/media/gamestack-login.a1efedd0.jpg",r=i.p+"static/media/iphone-11.dfa3acae.glb",l=i.p+"static/media/macbook-pro.29527f3f.glb",o=i(66),d=i(67),b=i(68),j=i.p+"static/media/spr-lesson-builder-dark-large.c92ecacb.jpg",h=i.p+"static/media/spr-lesson-builder-dark.4c66acc3.jpg",p=i(57),u=i(7),m=i(0),g=i(4),f=i.n(g),x=i(49),E=i(48),v=i(55),O=i(18),B=i(23),w=i(2);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var I=m.createElement("path",{d:"M1 1l20.5 12L42 1",strokeWidth:2,fill:"none"});function M({title:e,titleId:t,...i},n){return m.createElement("svg",Q({stroke:"currentColor",width:43,height:15,viewBox:"0 0 43 15",ref:n,"aria-labelledby":t},i),e?m.createElement("title",{id:t},e):null,I)}const y=m.forwardRef(M);i.p;var R=i(8),D=i(50),N=i(53),_=i(24),C=i(20);i(75);const k=Object(m.lazy)((()=>i.e(12).then(i.bind(null,101))));var S=function({id:e,sectionRef:t,disciplines:i,scrollIndicatorHidden:a,...c}){const A=Object(_.c)(),[s,r]=Object(m.useState)(0),l=Object(u.l)(),o=Object(u.i)(A),d=[i.slice(0,-1).join(", "),i.slice(-1)[0]].join(", and "),b=i.filter(((e,t)=>t===s)),j=`${e}-title`;return Object(u.e)((()=>{const e=(s+1)%i.length;r(e)}),5e3,A.themeId),Object(m.useEffect)((()=>{o&&o.themeId!==A.themeId&&r(0)}),[A.themeId,o]),Object(n.jsx)(N.a,{className:"intro",as:"section",ref:t,id:e,"aria-labelledby":j,tabIndex:-1,...c,children:Object(n.jsx)(x.a,{appear:!B.a,in:!B.a,timeout:3e3,onEnter:O.b,children:e=>Object(n.jsxs)(m.Fragment,{children:[!B.a&&Object(n.jsx)(m.Suspense,{fallback:null,children:Object(n.jsx)(k,{})}),Object(n.jsxs)("header",{className:"intro__text",children:[Object(n.jsx)("h1",{className:f()("intro__name",`intro__name--${e}`),id:j,children:Object(n.jsx)(v.a,{text:"Chase",start:!B.a,delay:300})}),Object(n.jsxs)(D.a,{level:0,as:"h2",className:"intro__title",children:[Object(n.jsx)(C.a,{className:"intro__title-label",children:`Developer + ${d}`}),Object(n.jsxs)("span",{"aria-hidden":!0,className:f()("intro__title-row",{"intro__title-row--hidden":B.a}),children:[Object(n.jsx)("span",{className:f()("intro__title-word",`intro__title-word--${e}`),style:{"--delay":R.b.base.durationXS},children:"Python"}),Object(n.jsx)("span",{className:f()("intro__title-line",`intro__title-line--${e}`)})]}),Object(n.jsx)(E.a,{className:f()("intro__title-row",{"intro__title-row--hidden":B.a}),component:"span",children:b.map((e=>Object(n.jsx)(x.a,{appear:!0,timeout:{enter:3e3,exit:2e3},onEnter:O.b,children:t=>Object(n.jsx)("span",{"aria-hidden":!0,className:f()("intro__title-word","intro__title-word--plus",`intro__title-word--${t}`),style:{"--delay":R.b.base.durationL},children:e})},e)))})]})]}),l.width>w.a.tablet&&Object(n.jsx)("div",{className:f()("intro__scroll-indicator",`intro__scroll-indicator--${e}`,{"intro__scroll-indicator--hidden":a}),status:e}),l.width<=w.a.tablet&&Object(n.jsx)("div",{className:f()("intro__mobile-scroll-indicator",`intro__mobile-scroll-indicator--${e}`,{"intro__mobile-scroll-indicator--hidden":a}),children:Object(n.jsx)(y,{"aria-hidden":!0})})]})},A.themeId)})},F=(i(58),i(19)),U=i(63),z=i(61),L=i.p+"static/media/profile.2e019e6a.jpg",H=i.p+"static/media/profile-large.2e019e6a.jpg",J=i.p+"static/media/profile-placeholder.2e019e6a.jpg";function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var Y=m.createElement("path",{d:"M32.544 651.088l1.152.288c.576.144 1.008.288 1.44.432l3.744.864c46.224 11.808 75.312 36.864 95.76 82.656-9.648 4.752-15.12 8.784-24.192 18.144-11.952-38.304-37.44-64.224-70.992-72.432v60.192c.144 15.264.288 18.72.864 23.76H14.4c.864-5.472 1.152-9.504 1.152-24.192v-73.44C6.624 666.928 0 660.016 0 651.232c0-9.072 7.2-16.272 16.272-16.272s16.128 7.056 16.272 16.128zm-24.48.144c0 4.464 3.744 8.208 8.208 8.208 4.32 0 8.064-3.744 8.064-8.208s-3.744-8.208-8.064-8.208c-4.464 0-8.208 3.744-8.208 8.208zm111.024-104.528v61.776h9.936v26.208c-7.92-.864-12.816-1.152-23.472-1.152H31.536c-6.192 0-10.656.144-16.56.576.432-5.04.576-7.92.576-17.424v-77.616c0-8.928 0-11.088-.576-17.856 5.04.288 10.224.432 16.992.432h73.008c11.088 0 18-.288 23.76-1.008v26.064h-9.648zm-23.04 0H38.592v61.776h57.456v-61.776zM12.96 403.44l12.528-12.96c2.448 1.584 3.168 1.872 8.064 3.024 26.784 6.48 44.784 15.12 61.2 28.944 15.984 13.392 27.504 29.52 39.168 54.864-10.944 5.616-14.832 8.64-24.192 18.144-6.768-20.736-15.552-35.856-28.224-48.528-12.24-12.096-25.344-19.44-42.624-23.904v59.76c0 13.968.144 16.56.864 24.192H13.68c1.008-6.192 1.152-10.512 1.152-24.624v-68.4c0-4.752-.432-7.344-1.872-10.512zm13.968-106.112l13.824-20.16c1.584 1.872 1.584 1.872 5.04 5.04 8.64 7.776 16.272 16.56 23.472 26.64h44.352c9.36 0 14.688-.144 19.872-.864v25.632c-5.616-.72-9.36-1.008-19.872-1.008H83.52c7.344 12.24 9.36 16.848 16.992 37.584-7.92 3.168-13.392 6.48-20.448 12.24-6.192-22.176-15.12-41.328-27.36-58.32-8.784-12.24-18.432-22.32-25.776-26.784zm55.584-35.264H54.72c1.008-6.768 1.296-14.544 1.296-29.52v-68.832c0-14.4-.288-19.872-1.296-29.52h27.792c-.72 6.912-.864 13.248-.864 29.664V232.4c0 16.128.144 20.88.864 29.664zM8.352 113.76l1.584-27.216c4.896.576 4.896.576 33.408 1.584 30.096.864 46.08 3.744 61.776 10.656 10.656 4.752 18.432 10.224 28.8 20.016-9.648 7.344-13.68 11.376-20.16 20.592-7.344-8.208-13.392-12.672-22.896-17.136-14.112-6.768-31.968-9.072-69.264-9.072-6.336 0-9.504.144-13.248.576zm-.72-40.896V45.792c5.904.864 8.208 1.008 16.704 1.152l75.456.72c-4.896-7.776-9.072-12.384-15.84-17.28-7.344-5.184-14.832-8.64-24.624-11.232C68.256 11.952 72 8.208 78.336 0c16.128 6.48 27.216 13.968 36.576 24.912 7.344 8.64 11.088 15.696 16.416 30.24 1.44 4.032 1.872 5.184 3.024 7.056l-12.96 12.384c-3.744-1.296-6.192-1.584-12.096-1.584l-85.248-.72h-5.184c-4.608 0-7.776.144-11.232.576z"});function T({title:e,titleId:t,...i},n){return m.createElement("svg",P({"aria-hidden":"true",fill:"currentColor",width:135,height:765,viewBox:"0 0 135 765",ref:n,"aria-labelledby":t},i),e?m.createElement("title",{id:t},e):null,Y)}const Z=m.forwardRef(T);i.p;var G=i(51);i(76);const W=({status:e,titleId:t})=>Object(n.jsxs)(m.Fragment,{children:[Object(n.jsx)(D.a,{className:f()("profile__title",`profile__title--${e}`),level:3,id:t,children:Object(n.jsx)(v.a,{text:"Hi there",start:"exited"!==e,delay:500})}),Object(n.jsx)(G.a,{className:f()("profile__description",`profile__description--${e}`),size:"l",children:"I am chase, a tech enthusiast and programmer. My main tech interests are Computer hardware, the linux kernel and OS, cyber security and OSINT, programming with python and finally decentralized cryptocurrency like monero."}),Object(n.jsxs)(G.a,{className:f()("profile__description",`profile__description--${e}`),size:"l",children:[Object(n.jsx)("b",{children:"Linux experience "}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"I have 2 and a half years of Linux experience with using the OS daily, managing servers by only using bash command line and setting up virtual environments using hypervisors like Proxmox. Linux is my favourite OS as I use it for everyday computing tasks instead of windows or Mac OS because i believe in freedom and open source.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"Programming experience"}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Currently I\u2019m learning python to develop tools and bots that have certain commands and function that I will make available to the public for free and it will be open source so others can modify it or change it to their liking."]})]});var V=({id:e,visible:t,sectionRef:i})=>{const a=`${e}-title`;return Object(n.jsx)(N.a,{className:"profile",as:"section",id:e,ref:i,"aria-labelledby":a,tabIndex:-1,children:Object(n.jsx)(x.a,{in:t,timeout:0,onEnter:O.b,children:e=>Object(n.jsxs)("div",{className:"profile__content",children:[Object(n.jsxs)("div",{className:"profile__column",children:[Object(n.jsx)(W,{status:e,titleId:a}),Object(n.jsx)(F.a,{secondary:!0,className:f()("profile__button",`profile__button--${e}`),href:"/contact",icon:"send",children:"Send me a message"})]}),Object(n.jsxs)("div",{className:"profile__column",children:[Object(n.jsxs)("div",{className:"profile__tag","aria-hidden":!0,children:[Object(n.jsx)(U.a,{notchWidth:"64px",notchHeight:"8px",collapsed:"entered"!==e,collapseDelay:1e3}),Object(n.jsx)("div",{className:f()("profile__tag-text",`profile__tag-text--${e}`),children:"About Me"})]}),Object(n.jsxs)("div",{className:"profile__image-wrapper",children:[Object(n.jsx)(z.a,{reveal:!0,delay:100,placeholder:J,srcSet:`${L} 480w, ${H} 960w`,sizes:`(max-width: ${w.a.mobile}px) 100vw, 480px`,alt:"Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"}),Object(n.jsx)(Z,{className:f()("profile__svg",`profile__svg--${e}`)})]})]})]})})})};i(64),i(77),i(78),i(79),i(56),i(62),i(65);i(80);i.p,i(81);var $=({id:e,visible:t,sectionRef:i,index:a,title:c,description:A,model:s,buttonText:r,buttonLink:l,alternate:o,...d})=>{const b=Object(_.c)(),{width:j}=Object(u.l)(),h=`${e}-title`;w.a.tablet,b.themeId,w.a.tablet,w.a.tablet;return Object(n.jsx)(N.a,{as:"section","aria-labelledby":h,ref:i,id:e,tabIndex:-1,...d})},K=i(17),X=i(3);const q=["Developer","Servers","Bots"];t.default=()=>{const{status:e}=Object(u.j)(),{hash:t,state:i}=Object(X.e)(),g=Object(m.useRef)(!0),[f,x]=Object(m.useState)([]),[E,v]=Object(m.useState)(!1),O=Object(m.useRef)(),B=Object(m.useRef)(),w=Object(m.useRef)(),Q=Object(m.useRef)(),I=Object(m.useRef)(),M=Object(u.h)();return Object(m.useEffect)((()=>{const e=[O,B,w,Q,I],t=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const i=e.target;if(t.unobserve(i),f.includes(i))return;x((e=>[...e,i]))}}))}),{rootMargin:"0px 0px -10% 0px"}),i=new IntersectionObserver((([e])=>{v(!e.isIntersecting)}),{rootMargin:"-100% 0px 0px 0px"});return e.forEach((e=>{t.observe(e.current)})),i.observe(O.current),()=>{t.disconnect(),i.disconnect()}}),[f]),Object(m.useEffect)((()=>{const i="entered"===e,n="scrollBehavior"in document.documentElement.style;let a,c;const A=(e,t)=>{clearTimeout(c);const i=[O,B,I],A=e.replace("#",""),s=i.filter((e=>e.current.id===A))[0];if(!s)return;const r=t&&!M?"smooth":"instant",l=s.current.offsetTop;a=new IntersectionObserver(((e,t)=>{const[i]=e;i.isIntersecting&&(c=setTimeout((()=>{s.current.focus()}),M?0:400),t.unobserve(i.target))}),{rootMargin:"-20% 0px -20% 0px"}),a.observe(s.current),n?window.scroll({top:l,left:0,behavior:r}):window.scrollTo(0,l)};return t&&g.current&&i?(A(t,!1),g.current=!1):!t&&g.current&&i?(window.scrollTo(0,0),g.current=!1):i&&A(t,!0),()=>{clearTimeout(c),a&&a.disconnect()}}),[t,i,M,e]),Object(n.jsxs)("div",{className:"home",children:[Object(n.jsxs)(K.a,{children:[Object(n.jsx)("title",{children:"Chase | Python + Developer"}),Object(n.jsx)("meta",{name:"description",content:"Portfolio of Hamish Williams \u2013 a digital designer working on web & mobile\r apps with a focus on motion and user experience design."}),Object(n.jsx)("link",{rel:"prefetch",href:r,as:"fetch",crossorigin:""}),Object(n.jsx)("link",{rel:"prefetch",href:l,as:"fetch",crossorigin:""})]}),Object(n.jsx)(S,{id:"intro",sectionRef:O,disciplines:q,scrollIndicatorHidden:E}),Object(n.jsx)(V,{sectionRef:I,visible:f.includes(I.current),id:"details"}),Object(n.jsx)($,{id:"",sectionRef:B,visible:f.includes(B.current),title:"",description:"",buttonText:"",buttonLink:"",model:{type:"laptop",alt:"Smart Sparrow lesson builder",textures:[{src:h,srcSet:`${h} 800w, ${j} 1440w`,placeholder:"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMZaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMzRkJBRkI2MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMzRkJBRkI1MTBENDExRUI5MDI3QUExN0VBMDVFMzM0IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgV2luZG93cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5NjZGQjZDNjFBREQ4NkEyMUY4QUI3NURCM0MzNjdDMyIgc3RSZWY6ZG9jdW1lbnRJRD0iOTY2RkI2QzYxQUREODZBMjFGOEFCNzVEQjNDMzY3QzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgICAgICAgICAgIDAwMDAwMDAwMDAQEBAQEBAQIBAQICAgECAgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwP/wAARCAAUACADAREAAhEBAxEB/8QBogAAAAYCAwEAAAAAAAAAAAAABwgGBQQJAwoCAQALAQAABgMBAQEAAAAAAAAAAAAGBQQDBwIIAQkACgsQAAIBAwQBAwMCAwMDAgYJdQECAwQRBRIGIQcTIgAIMRRBMiMVCVFCFmEkMxdScYEYYpElQ6Gx8CY0cgoZwdE1J+FTNoLxkqJEVHNFRjdHYyhVVlcassLS4vJkg3SThGWjs8PT4yk4ZvN1Kjk6SElKWFlaZ2hpanZ3eHl6hYaHiImKlJWWl5iZmqSlpqeoqaq0tba3uLm6xMXGx8jJytTV1tfY2drk5ebn6Onq9PX29/j5+hEAAgEDAgQEAwUEBAQGBgVtAQIDEQQhEgUxBgAiE0FRBzJhFHEIQoEjkRVSoWIWMwmxJMHRQ3LwF+GCNCWSUxhjRPGisiY1GVQ2RWQnCnODk0Z0wtLi8lVldVY3hIWjs8PT4/MpGpSktMTU5PSVpbXF1eX1KEdXZjh2hpamtsbW5vZnd4eXp7fH1+f3SFhoeIiYqLjI2Oj4OUlZaXmJmam5ydnp+So6SlpqeoqaqrrK2ur6/9oADAMBAAIRAxEAPwDVxr67OZnHvkZ5HaVkZ2Ykk/Q/m/uQdwupbgmZzVugRb2sdnF4cQooHQF5aTcPhmlhmlLgsRbV/j7CD7jKshBOOiWfcpILijfAD0HNPnt1/dmEzT6lYG2o/wBbf09uncW04PR5azpdxa4z5dLdN3bi/ZpJqidQQAfVwSR/j/gPZTJvF1CSynoi3K6uraJnPwA9GhhmifbxdCFUxNxZfpY+xzPRlPQlc6IyT6dB9WbgwGNwkglkp2qn1rpbTqv/AIj6/X2F7uyTT4oI1dRxuVzLc3bRqp0jz6B7HmPJZOSoiiVUa5BAFrar/kj2TBWqQD0qtN4j2yMrKfy6YNy5OGjr1jsWkR7WVRf/AHgn3R7Z5u0Do0nnTdbImI9pHRv6X7P+60lvr4H03t/Q29yFN/Z46E9x/ZHohe/P4z/FpPD5ftvK2m2rT+r/AG309hxq511p0R2f0VH8SnidPGL/AIt/DYPB/ndPNtWq3+w9k7afFOnh0Eb36P61tf8AZ16k7Z/hn95Kf+9Or7fyjyf1tf8Ax9i3lv8Ad31Q+v8A7Pz6XTeP+7T+7+NMdf/Z"}]}}),Object(n.jsx)($,{id:"project-2",alternate:!0,sectionRef:w,visible:f.includes(w.current),title:"Video game progress tracking",description:"Design and development for a video game tracking app built in React Native",buttonText:"View Website",buttonLink:"https://gamestack.hamishw.com",model:{type:"phone",alt:"App login screen",textures:[{src:s,srcSet:`${s} 254w, ${A} 508w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k="},{src:c,srcSet:`${c} 254w, ${a} 508w`,placeholder:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k="}]}}),Object(n.jsx)($,{id:"project-3",sectionRef:Q,visible:f.includes(Q.current),title:"Biomedical image collaboration",description:"Increasing the amount of collaboration in Slice, an app for biomedical imaging",buttonText:"View Project",buttonLink:"/projects/slice",model:{type:"laptop",alt:"Annotating a biomedical image in the Slice app",textures:[{src:b.a,srcSet:`${b.a} 980w, ${o.a} 1376w`,placeholder:d.a}]}}),Object(n.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=5.0d01871d.chunk.js.map