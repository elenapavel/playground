module.exports=__NEXT_REGISTER_PAGE("/structure/Features/FeaturesWS2/Actions",function(){var e=webpackJsonp([173],{202:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var u=r(359);var a=r.n(u);function i(e){i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return i(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function f(e,t,r){t&&l(e.prototype,t);r&&l(e,r);return e}function s(e,t){if(t&&("object"===i(t)||"function"===typeof t))return t;return y(e)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){p(t,e);function t(){var e;var r,n;c(this,t);for(var o=arguments.length,u=new Array(o),a=0;a<o;a++)u[a]=arguments[a];return s(n,(r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),Object.defineProperty(y(n),"state",{configurable:true,enumerable:true,writable:true,value:{active:0}}),r))}f(t,[{key:"onSelect",value:function e(t){this.setState({active:t});"function"===typeof this.props.onSelect&&this.props.onSelect(t)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.items,u=r.active,i=r.onSelect;return o.a.createElement("b",{className:a.a.items},null!=n&&0!=n.length&&n.map(function(e,r){return o.a.createElement("b",{className:r==u?a.a.item_active:a.a.item,key:r,onClick:function e(){return t.onSelect(r)}},e)}))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.active=t.active;return r}}]);return t}(n["Component"]);t["default"]=b},716:function(e,t,r){e.exports=r(202)}},[716]);return{page:e.default}});