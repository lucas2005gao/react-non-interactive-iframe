(()=>{var e={522:(e,t,r)=>{(t=r(645)(!1)).push([e.id,".skeleton-wrapper {\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.skeleton .thumbnail {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #d2dbe2;\r\n}\r\n\r\n.shimmer-wrapper {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.shimmer {\r\n  width: 50%;\r\n  height: 100%;\r\n  opacity: 0.2;\r\n  background: rgba(238, 238, 238, 0.966);\r\n  transform: skewX(-20deg);\r\n  animation: loader 1s linear infinite;\r\n}\r\n\r\n@keyframes loader {\r\n  0% {\r\n    transform: translateX(-150%);\r\n  }\r\n  50% {\r\n    transform: translateX(-60%);\r\n  }\r\n  100% {\r\n    transform: translateX(150%);\r\n  }\r\n}\r\n",""]),e.exports=t},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r,n,o,i=e[1]||"",a=e[3];if(!a)return i;if(t&&"function"==typeof btoa){var c=(r=a,n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),"/*# ".concat(o," */")),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},717:(e,t,r)=>{var n=r(379),o=r(522);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);n(o,{insert:"head",singleton:!1}),e.exports=o.locals||{}},379:(e,t,r)=>{"use strict";var n,o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function a(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var c=e[o],l=t.base?c[0]+t.base:c[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var f=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:u,updater:y(p,t),references:1}),n.push(u)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=r.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,r){var n=r.css,o=r.media,i=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d=null,h=0;function y(e,t){var r,n,o;if(t.singleton){var i=h++;r=d||(d=l(t)),n=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=l(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=a(r[n]);i[o].references--}for(var l=c(e,t),s=0;s<r.length;s++){var u=a(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=l}}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};(()=>{"use strict";r.r(n),r.d(n,{default:()=>v});const e=require("react");var t=r.n(e),o=r(697),i=r.n(o);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(717);const s=function(e){var r=e.style;return t().createElement("div",{style:l({},r),className:"skeleton"},t().createElement("div",{className:"thumbnail"}))};function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var f=["url","height","width","interactive","iframeWidth","iframeHeight","style","onLoad"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){var n,o,i;n=e,o=t,i=r[t],(o=function(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===u(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);l=!0);}catch(e){s=!0,o=e}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b=function(r){var n,o,i,a,c=r.url,l=void 0===c?"https://nodejs.org/en/download/":c,u=r.height,d=r.width,m=r.interactive,b=void 0!==m&&m,v=r.iframeWidth,g=r.iframeHeight,w=r.style,O=r.onLoad,j=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(r,f),S=y((0,e.useState)(!0),2),P=S[0],x=S[1],E=y((0,e.useState)({}),2),T=E[0],k=E[1],C=(0,e.useRef)(null);(0,e.useEffect)((function(){k({width:C.current.offsetWidth,height:C.current.offsetHeight})}),[null===(n=C.current)||void 0===n?void 0:n.offsetWidth,null===(o=C.current)||void 0===o?void 0:o.offsetHeight]),i=d?"".concat(d,"px"):"100%",a=u?"".concat(u,"px"):"100%";var I=3,_=4;d&&u&&(I=a,_=i);var M=v,N=g;M||N?M&&!N?N=M*(I/_):!M&&N&&(M=N*(_/I)):(M=1440,N=1080);var R=T.width/M,A=T.height/N,D={display:"flex",alignItems:"center",justifyContent:"center",width:i,height:a},L={width:T.width,maxHeight:T.height},H={transform:"scaleX(".concat(R,") scaleY(").concat(A,")"),transformOrigin:"0 0",width:"".concat(M,"px"),height:"".concat(N,"px"),border:"0px"},U={position:"absolute",width:T.width,height:T.height,zIndex:"10"};return t().createElement("div",{ref:C,style:h(h({},D),w),"data-testid":"div-outer-wrapper"},C.current&&t().createElement("div",{style:L,"data-testid":"div-iframe-wrapper"},!b&&t().createElement("div",{style:U}," "),P&&t().createElement("div",{className:"skeleton-wrapper",style:{width:T.width,height:T.height,position:"absolute",zIndex:"15"}},t().createElement(s,{style:{width:T.width,height:T.height},type:"thumbnail",width:T.width,height:T.height}),t().createElement("div",{className:"shimmer-wrapper"},t().createElement("div",{className:"shimmer"}))),t().createElement("iframe",p({tabIndex:"-1",role:"iframe",style:H,title:"webpage-thumbnail",src:l,sandbox:"allow-scripts allow-same-origin",scrolling:"no",onLoad:function(){O&&O(),x(!1)}},j))))};const v=b;b.propTypes={url:i().string,height:i().number,width:i().number,interactive:i().bool,iframeWidth:i().number,iframeHeight:i().number,style:i().object,onLoad:i().func},b.defaultProps={url:"https://nodejs.org/en/download/",interactive:!1}})(),module.exports=n})();