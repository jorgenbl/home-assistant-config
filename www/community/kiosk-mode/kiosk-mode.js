"use strict";function e(e,r){return o(e)||n(e,r)||d(e,r)||t()}function t(){throw new TypeError(
"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
function n(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(
i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}
return t}}function o(e){if(Array.isArray(e))return e}function r(e){return l(e)||i(e)||d(e)||a()}function a(){throw new TypeError(
"Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){
if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return u(e)}function c(e,r){var t
;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=d(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,r=function(
){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError(
"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,
i=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){i=!0,o=e},f:function(){try{
a||null==t.return||t.return()}finally{if(i)throw o}}}}function d(e,r){if(e){if("string"==typeof e)return u(e,r);var t=Object.prototype.toString.call(e
).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e
):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,r):void 0}}function u(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,
n=new Array(r);t<r;t++)n[t]=e[t];return n}var s=document.querySelector("home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot,
f=s.querySelector("partial-panel-resolver"),h=s.querySelector("app-drawer-layout");function y(){var e=s.querySelector("ha-panel-lovelace")
;return e&&e.lovelace.config.kiosk_mode?e.lovelace.config.kiosk_mode:{}}function v(e){var r=window.location.href;return e.some(function(e){
return r.includes(e)})}function p(e){return e&&!e.querySelector("#kiosk_mode")}function m(e,r){var t=document.createElement("style");t.setAttribute(
"id","kiosk_mode"),t.innerHTML=e,r.appendChild(t),window.dispatchEvent(new Event("resize"))}function b(e,r){window.localStorage.setItem(e,r)}
function w(e){return"true"==window.localStorage.getItem(e)}function k(){var e,r,t,n,o=window.location.href;o.includes("disable_km")||(t=w("kmHeader"
)||v(["kiosk","hide_header"]),n=w("kmSidebar")||v(["kiosk","hide_sidebar"]),r=y(),t=(e=n||t)?t:r.kiosk||r.hide_header,((n=e?n:r.kiosk||r.hide_sidebar
)||t)&&(r=(r=s.querySelector("ha-panel-lovelace"))?r.shadowRoot.querySelector("hui-root").shadowRoot:null,t&&p(r)&&(m(
"#view { min-height: 100vh !important } app-header { display: none }",r),o.includes("cache")&&b("kmHeader","true")),n&&p(h)&&(m(
":host { --app-drawer-width: 0 !important } #drawer { display: none }",h),o.includes("cache")&&b("kmSidebar","true"))))}function S(e){var r,t=c(e)
;try{for(t.s();!(r=t.n()).done;){var n=c(r.value.addedNodes);try{for(n.s();!(o=n.n()).done;){var o=o.value;if("ha-panel-lovelace"==o.localName
)return void new MutationObserver(g).observe(o.shadowRoot,{childList:!0})}}catch(e){n.e(e)}finally{n.f()}}}catch(e){t.e(e)}finally{t.f()}}function g(e
){var r,t=c(e);try{for(t.s();!(r=t.n()).done;){var n=c(r.value.addedNodes);try{for(n.s();!(o=n.n()).done;){var o=o.value;if("hui-root"==o.localName
)return void new MutationObserver(x).observe(o.shadowRoot,{childList:!0})}}catch(e){n.e(e)}finally{n.f()}}}catch(e){t.e(e)}finally{t.f()}}function x(e
){var r,t=c(e);try{for(t.s();!(r=t.n()).done;){var n,o=c(r.value.addedNodes);try{for(o.s();!(n=o.n()).done;)if("ha-app-layout"==n.value.localName
)return void k()}catch(e){o.e(e)}finally{o.f()}}}catch(e){t.e(e)}finally{t.f()}}window.location.href.includes("clear_km_cache")&&["kmHeader",
"kmSidebar"].forEach(function(e){return b(e,"false")}),k(),new MutationObserver(S).observe(f,{childList:!0});for(var A={
header:"%c≡ kiosk-mode".padEnd(23),ver:"%cversion 1.3.4 "},_="%c\n",j=Math.max.apply(Math,r(Object.values(A).map(function(e){return e.length}))),E=0,
I=Object.entries(A);E<I.length;E++){var O=e(I[E],1),q=O[0];A[q].length<=j&&(A[q]=A[q].padEnd(j)),"header"==q&&(A[q]="".concat(A[q].slice(0,-1),"⋮ "))}
var M="display:inline-block;border-width:1px 1px 0 1px;border-style:solid;border-color:#424242;color:white;background:#03a9f4;font-size:12px;padding:4px 4.5px 5px 6px;"
,N="border-width:0px 1px 1px 1px;padding:7px;background:white;color:#424242;line-height:0.7;";console.info(A.header+_+A.ver,M,"","".concat(M," "
).concat(N));