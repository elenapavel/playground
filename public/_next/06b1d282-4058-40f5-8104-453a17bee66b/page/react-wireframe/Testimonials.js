module.exports=__NEXT_REGISTER_PAGE("/react-wireframe/Testimonials",function(){var e=webpackJsonp([21],{1:function(e,t,r){"use strict";t.__esModule=true;t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},11:function(e,t,r){var n=r(40);var o=r(37)("iterator");var i=r(39);e.exports=r(4).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||i.hasOwnProperty(n(t))}},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(14);var o=S(n);var i=r(20);var u=S(i);var a=r(23);var s=S(a);var l=r(1);var c=S(l);var f=r(2);var d=S(f);var h=r(25);var p=S(h);var v=r(28);var _=S(v);t.flush=j;var m=r(0);var y=r(31);var b=S(y);function S(e){return e&&e.__esModule?e:{default:e}}var g=new b.default;var w=function(e){(0,_.default)(t,e);function t(){(0,c.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}(0,d.default)(t,[{key:"componentWillMount",value:function e(){g.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){g.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){g.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,u.default)(e,2),r=t[0],n=t[1];return g.computeId(r,n)}).join(" ")}}]);return t}(m.Component);t.default=w;function j(){var e=g.cssRules();g.flush();return new o.default(e)}},14:function(e,t,r){e.exports={default:r(15),__esModule:true}},15:function(e,t,r){r(42);r(7);r(9);r(16);r(17);r(18);r(19);e.exports=r(4).Map},16:function(e,t,r){"use strict";var n=r(49);var o=r(43);var i="Map";e.exports=r(50)(i,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=n.getEntry(o(this,i),t);return r&&r.v},set:function e(t,r){return n.def(o(this,i),0===t?0:t,r)}},n,true)},164:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var i=r(119);var u=r.n(i);function a(e){a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return a(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function c(e,t,r){t&&l(e.prototype,t);r&&l(e,r);return e}function f(e,t){if(t&&("object"===a(t)||"function"===typeof t))return t;return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){h(t,e);function t(){s(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:u.a.testimonial_container})}}]);return t}(n["Component"]);t["default"]=p},165:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var o=r.n(n);var i=r(0);var u=r.n(i);var a=r(119);var s=r.n(a);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function h(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){v(t,e);function t(){c(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"render",value:function e(){var t="".concat(s.a.testimonial_author," ").concat(s.a.testimonial_author_active);var r="".concat(s.a.testimonial_author_avatar," ").concat(s.a.testimonial_author_avatar_active);var n="".concat(s.a.testimonial_author_name," ").concat(s.a.testimonial_author_name_active);return u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_authors_container||"")},u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author||"")},u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_avatar||"")}),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_name||"")})),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author||"")},u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_avatar||"")}),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_name||"")})),u.a.createElement("div",{className:"jsx-2085888330 "+(t||"")},u.a.createElement("div",{className:"jsx-2085888330 "+(r||"")}),u.a.createElement("div",{className:"jsx-2085888330 "+(n||"")})),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author||"")},u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_avatar||"")}),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_name||"")})),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author||"")},u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_avatar||"")}),u.a.createElement("div",{className:"jsx-2085888330 "+(s.a.testimonial_author_name||"")})),u.a.createElement(o.a,{styleId:"2085888330",css:[]}))}}]);return t}(i["Component"]);t["default"]=_},17:function(e,t,r){var n=r(36);n(n.P+n.R,"Map",{toJSON:r(51)("Map")})},18:function(e,t,r){r(52)("Map")},19:function(e,t,r){r(53)("Map")},2:function(e,t,r){"use strict";t.__esModule=true;var n=r(24);var o=i(n);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);(0,o.default)(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}()},20:function(e,t,r){"use strict";t.__esModule=true;var n=r(21);var o=a(n);var i=r(22);var u=a(i);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){var r=[];var n=true;var o=false;var i=void 0;try{for(var a=(0,u.default)(e),s;!(n=(s=a.next()).done);n=true){r.push(s.value);if(t&&r.length===t)break}}catch(e){o=true;i=e}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw i}}return r}return function(t,r){if(Array.isArray(t))return t;if((0,o.default)(Object(t)))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},21:function(e,t,r){e.exports={default:r(8),__esModule:true}},22:function(e,t,r){e.exports={default:r(46),__esModule:true}},23:function(e,t,r){e.exports={default:r(55),__esModule:true}},239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var i=r(164);var u=r(165);var a=r(119);var s=r.n(a);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function h(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){v(t,e);function t(){c(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:s.a.container},o.a.createElement("div",{className:s.a.testimonial},o.a.createElement(u["default"],null),o.a.createElement(i["default"],null)))}}]);return t}(n["Component"]);t["default"]=_},24:function(e,t,r){e.exports={default:r(44),__esModule:true}},25:function(e,t,r){"use strict";t.__esModule=true;var n=r(5);var o=i(n);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":(0,o.default)(t))&&"function"!==typeof t?e:t}},26:function(e,t,r){e.exports={default:r(47),__esModule:true}},27:function(e,t,r){e.exports={default:r(48),__esModule:true}},28:function(e,t,r){"use strict";t.__esModule=true;var n=r(29);var o=l(n);var i=r(30);var u=l(i);var a=r(5);var s=l(a);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":(0,s.default)(t)));e.prototype=(0,u.default)(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},29:function(e,t,r){e.exports={default:r(56),__esModule:true}},3:function(e,t,r){e.exports=r(13)},30:function(e,t,r){e.exports={default:r(57),__esModule:true}},31:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(32);var o=h(n);var i=r(1);var u=h(i);var a=r(2);var s=h(a);var l=r(33);var c=h(l);var f=r(34);var d=h(f);function h(e){return e&&e.__esModule?e:{default:e}}var p=function e(t){return t.replace(/\/style/gi,"\\/style")};var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,i=void 0!==o&&o,a=t.isBrowser,s=void 0===a?"undefined"!==typeof window:a;(0,u.default)(this,e);this._sheet=n||new d.default({name:"styled-jsx",optimizeForSpeed:i});this._sheet.inject();if(n&&"boolean"===typeof i){this._sheet.setOptimizeForSpeed(i);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=s;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,s.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,o.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var n=this.getIdAndRules(t),i=n.styleId,u=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var a=u.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[i]=a;this._instancesCounts[i]=1}}},{key:"remove",value:function e(t){var r=this;var n=this.getIdAndRules(t),o=n.styleId;_(o in this._instancesCounts,"styleId: `"+o+"` not found");this._instancesCounts[o]-=1;if(this._instancesCounts[o]<1){var i=this._fromServer&&this._fromServer[o];if(i){i.parentNode.removeChild(i);delete this._fromServer[o]}else{this._indices[o].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[o]}delete this._instancesCounts[o]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,o.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,o.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var n=String(r);var o=e+n;t[o]||(t[o]="jsx-"+(0,c.default)(e+"-"+n));return t[o]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,n){this._isBrowser||(n=p(n));var o=e+n;r[o]||(r[o]=n.replace(t,e));return r[o]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var n=this.computeId(t.styleId,t.dynamic);return{styleId:n,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(n,e)}):[this.computeSelector(n,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=v;function _(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},32:function(e,t,r){e.exports={default:r(45),__esModule:true}},33:function(e,t,r){"use strict";function n(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=n},34:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var o=a(n);var i=r(2);var u=a(i);function a(e){return e&&e.__esModule?e:{default:e}}var s=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,u=void 0===i?s:i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);f(l(n),"`name` must be a string");this._name=n;this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}";f("boolean"===typeof u,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=u;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,u.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){f("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;f(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,n){"number"===typeof n?t._serverSheet.cssRules[n]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return n},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){f(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof r&&(r=n.cssRules.length);try{n.insertRule(t,r)}catch(e){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var o=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,o))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!n.cssRules[t])return t;n.deleteRule(t);try{n.insertRule(r,t)}catch(e){s||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");n.insertRule(this._deletedRulePlaceholder,t)}}else{var o=this._tags[t];f(o,"old rule at index `"+t+"` not found");o.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];f(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,n){r&&f(l(r),"makeStyleTag acceps only strings as second parameter");var o=document.createElement("style");o.type="text/css";o.setAttribute("data-"+t,"");r&&o.appendChild(document.createTextNode(r));var i=document.head||document.getElementsByTagName("head")[0];n?i.insertBefore(o,n):i.appendChild(o);return o}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function f(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(54))},438:function(e,t,r){e.exports=r(239)},5:function(e,t,r){"use strict";t.__esModule=true;var n=r(26);var o=s(n);var i=r(27);var u=s(i);var a="function"===typeof u.default&&"symbol"===typeof o.default?function(e){return typeof e}:function(e){return e&&"function"===typeof u.default&&e.constructor===u.default&&e!==u.default.prototype?"symbol":typeof e};function s(e){return e&&e.__esModule?e:{default:e}}t.default="function"===typeof u.default&&"symbol"===a(o.default)?function(e){return"undefined"===typeof e?"undefined":a(e)}:function(e){return e&&"function"===typeof u.default&&e.constructor===u.default&&e!==u.default.prototype?"symbol":"undefined"===typeof e?"undefined":a(e)}},8:function(e,t,r){r(9);r(7);e.exports=r(11)}},[438]);return{page:e.default}});