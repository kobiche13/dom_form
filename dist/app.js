(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,o(n.key),n)}}function o(t){var o=function(t){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(o)?o:o+""}var r=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tooltips=[]},(o=[{key:"showTooltip",value:function(e,t,o){var r=document.createElement("div"),n=document.createElement("div"),i=document.createElement("div");r.classList.add("popover","popover-tooltip"),n.classList.add("popover-tooltip__title"),i.classList.add("popover-tooltip__message"),n.textContent=t,i.textContent=e;var l=document.querySelector(".container-popover");l.insertBefore(r,l.firstChild);var c=document.querySelector(".popover-tooltip"),p=performance.now();return this.tooltips.push={id:p,element:r},c.appendChild(n),c.appendChild(i),p}}])&&t(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,o}(),n=document.querySelector(".btn-popover"),i=void 0;n.addEventListener("click",(function(e){null==i?((new r).showTooltip("And here`s some amazing content. It`s very engaging. Ready?","Popover title",n),i=document.querySelector(".popover-tooltip")):(i.remove(),i=void 0)}))})();