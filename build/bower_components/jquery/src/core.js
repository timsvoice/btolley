define(["./var/arr","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(t,n,r,e,i,o,u,a,c){function s(t){var n=t.length,r=p.type(t);return"function"===r||p.isWindow(t)?!1:1===t.nodeType&&n?!0:"array"===r||0===n||"number"==typeof n&&n>0&&n-1 in t}var l=window.document,f="@VERSION",p=function(t,n){return new p.fn.init(t,n)},h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,y=/^-ms-/,g=/-([\da-z])/gi,d=function(t,n){return n.toUpperCase()};return p.fn=p.prototype={jquery:f,constructor:p,selector:"",length:0,toArray:function(){return n.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:n.call(this)},pushStack:function(t){var n=p.merge(this.constructor(),t);return n.prevObject=this,n.context=this.context,n},each:function(t,n){return p.each(this,t,n)},map:function(t){return this.pushStack(p.map(this,function(n,r){return t.call(n,r,n)}))},slice:function(){return this.pushStack(n.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var n=this.length,r=+t+(0>t?n:0);return this.pushStack(r>=0&&n>r?[this[r]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:e,sort:t.sort,splice:t.splice},p.extend=p.fn.extend=function(){var t,n,r,e,i,o,u=arguments[0]||{},a=1,c=arguments.length,s=!1;for("boolean"==typeof u&&(s=u,u=arguments[a]||{},a++),"object"==typeof u||p.isFunction(u)||(u={}),a===c&&(u=this,a--);c>a;a++)if(null!=(t=arguments[a]))for(n in t)r=u[n],e=t[n],u!==e&&(s&&e&&(p.isPlainObject(e)||(i=p.isArray(e)))?(i?(i=!1,o=r&&p.isArray(r)?r:[]):o=r&&p.isPlainObject(r)?r:{},u[n]=p.extend(s,o,e)):void 0!==e&&(u[n]=e));return u},p.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===p.type(t)},isArray:Array.isArray,isWindow:function(t){return null!=t&&t===t.window},isNumeric:function(t){return!p.isArray(t)&&t-parseFloat(t)>=0},isPlainObject:function(t){return"object"!==p.type(t)||t.nodeType||p.isWindow(t)?!1:t.constructor&&!a.call(t.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(t){var n;for(n in t)return!1;return!0},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?o[u.call(t)]||"object":typeof t},globalEval:function(t){var n,r=eval;t=p.trim(t),t&&(1===t.indexOf("use strict")?(n=l.createElement("script"),n.text=t,l.head.appendChild(n).parentNode.removeChild(n)):r(t))},camelCase:function(t){return t.replace(y,"ms-").replace(g,d)},nodeName:function(t,n){return t.nodeName&&t.nodeName.toLowerCase()===n.toLowerCase()},each:function(t,n,r){var e,i=0,o=t.length,u=s(t);if(r){if(u)for(;o>i&&(e=n.apply(t[i],r),e!==!1);i++);else for(i in t)if(e=n.apply(t[i],r),e===!1)break}else if(u)for(;o>i&&(e=n.call(t[i],i,t[i]),e!==!1);i++);else for(i in t)if(e=n.call(t[i],i,t[i]),e===!1)break;return t},trim:function(t){return null==t?"":(t+"").replace(h,"")},makeArray:function(t,n){var r=n||[];return null!=t&&(s(Object(t))?p.merge(r,"string"==typeof t?[t]:t):e.call(r,t)),r},inArray:function(t,n,r){return null==n?-1:i.call(n,t,r)},merge:function(t,n){for(var r=+n.length,e=0,i=t.length;r>e;e++)t[i++]=n[e];return t.length=i,t},grep:function(t,n,r){for(var e,i=[],o=0,u=t.length,a=!r;u>o;o++)e=!n(t[o],o),e!==a&&i.push(t[o]);return i},map:function(t,n,e){var i,o=0,u=t.length,a=s(t),c=[];if(a)for(;u>o;o++)i=n(t[o],o,e),null!=i&&c.push(i);else for(o in t)i=n(t[o],o,e),null!=i&&c.push(i);return r.apply([],c)},guid:1,proxy:function(t,r){var e,i,o;return"string"==typeof r&&(e=t[r],r=t,t=e),p.isFunction(t)?(i=n.call(arguments,2),o=function(){return t.apply(r||this,i.concat(n.call(arguments)))},o.guid=t.guid=t.guid||p.guid++,o):void 0},now:Date.now,support:c}),p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,n){o["[object "+n+"]"]=n.toLowerCase()}),p});