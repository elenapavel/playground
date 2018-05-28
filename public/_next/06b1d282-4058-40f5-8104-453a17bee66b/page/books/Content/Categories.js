module.exports=__NEXT_REGISTER_PAGE("/books/Content/Categories",function(){var e=webpackJsonp([16],{1:function(e,t,r){"use strict";t.__esModule=true;t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},10:function(e,t,r){"use strict";function n(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],n=0;n<t.length;n++)t[n]===e?e=null:r.push(t[n]);t=r}function o(r,o,s){e=o?r:n(n({},e),r);for(var i=t,a=0;a<i.length;a++)i[a](e,s)}return e=e||{},{action:function(t){function r(e){o(e,!1,t)}return function(){for(var n=arguments,o=[e],s=0;s<arguments.length;s++)o.push(n[s]);var i=t.apply(this,o);null!=i&&(i.then?i.then(r):r(i))}},setState:o,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},11:function(e,t,r){var n=r(40);var o=r(37)("iterator");var s=r(39);e.exports=r(4).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||s.hasOwnProperty(n(t))}},12:function(e,t,r){var n=r(0);function o(e,t){for(var r in t)e[r]=t[r];return e}var s={store:function(){}};var i=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);i.childContextTypes=s,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),function(r){function i(s,i){var a=this;n.Component.call(this,s,i);var u=i.store,l=e(u?u.getState():{},s),c=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var n in e)r[n]=t.action(e[n]);return r}(t,u):{store:u},f=function(){var t=e(u?u.getState():{},a.props);for(var r in t)if(t[r]!==l[r])return l=t,a.forceUpdate();for(var n in l)if(!(n in t))return l=t,a.forceUpdate()};this.componentDidMount=function(){f(),u.subscribe(f)},this.componentWillUnmount=function(){u.unsubscribe(f)},this.render=function(){return n.createElement(r,o(o(o({},c),a.props),l))}}return i.contextTypes=s,(i.prototype=Object.create(n.Component.prototype)).constructor=i}},t.Provider=i},13:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(14);var o=b(n);var s=r(20);var i=b(s);var a=r(23);var u=b(a);var l=r(1);var c=b(l);var f=r(2);var d=b(f);var p=r(25);var h=b(p);var v=r(28);var m=b(v);t.flush=w;var y=r(0);var g=r(31);var _=b(g);function b(e){return e&&e.__esModule?e:{default:e}}var S=new _.default;var x=function(e){(0,m.default)(t,e);function t(){(0,c.default)(this,t);return(0,h.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,d.default)(t,[{key:"componentWillMount",value:function e(){S.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){S.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){S.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,i.default)(e,2),r=t[0],n=t[1];return S.computeId(r,n)}).join(" ")}}]);return t}(y.Component);t.default=x;function w(){var e=S.cssRules();S.flush();return new o.default(e)}},14:function(e,t,r){e.exports={default:r(15),__esModule:true}},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var o=r.n(n);var s=r(0);var i=r.n(s);var a=r(66);function u(e){u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return u(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function f(e,t,r){t&&c(e.prototype,t);r&&c(e,r);return e}function d(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){h(t,e);function t(){l(this,t);return d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"render",value:function e(){return Object(a["module"])("store",function(e){var t=e.store,r=e.selectCategory;var n=t.categories,s=t.selectedCategoryIndex;return i.a.createElement("div",{className:"jsx-2720722910 container"},n.map(function(e,t){var n=s==t?"0.5rem 2rem 5rem -2rem ".concat(e.color[1],", inset 0 0 16px rgba(255, 255, 255, 0.35)"):"inset 0 0 16px rgba(255, 255, 255, 0.35)";var o="icon "+e.icon;return i.a.createElement("div",{key:t,style:{background:"linear-gradient(to bottom right, ".concat(e.color[0],", ").concat(e.color[1],")"),boxShadow:"".concat(n)},onClick:function e(){return r(t)},className:"jsx-2720722910 category"},i.a.createElement("div",{className:"jsx-2720722910 "+(o||"")}),i.a.createElement("div",{className:"jsx-2720722910 label"},e.label))}),i.a.createElement(o.a,{styleId:"2720722910",css:[".container.jsx-2720722910{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center stretch;-webkit-justify-content:center stretch;-ms-flex-pack:center stretch;justify-content:center stretch;overflow-x:auto;margin:3rem 2rem;padding:0 0 4rem;}",".category.jsx-2720722910{cursor:pointer;width:7rem;height:7rem;border-radius:0.3rem;margin-right:2rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transiton:all 0.3s ease-in-out;transiton:all 0.3s ease-in-out;}",'.label.jsx-2720722910{color:#fff;text-transform:uppercase;font-size:0.6rem;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-family:"Cabin",sans-serif;}',".icon.jsx-2720722910{font-size:3rem;color:#fff;}"]}))})}}]);return t}(s["PureComponent"]);t["default"]=v},15:function(e,t,r){r(42);r(7);r(9);r(16);r(17);r(18);r(19);e.exports=r(4).Map},16:function(e,t,r){"use strict";var n=r(49);var o=r(43);var s="Map";e.exports=r(50)(s,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=n.getEntry(o(this,s),t);return r&&r.v},set:function e(t,r){return n.def(o(this,s),0===t?0:t,r)}},n,true)},17:function(e,t,r){var n=r(36);n(n.P+n.R,"Map",{toJSON:r(51)("Map")})},18:function(e,t,r){r(52)("Map")},19:function(e,t,r){r(53)("Map")},2:function(e,t,r){"use strict";t.__esModule=true;var n=r(24);var o=s(n);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);(0,o.default)(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}()},20:function(e,t,r){"use strict";t.__esModule=true;var n=r(21);var o=a(n);var s=r(22);var i=a(s);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){var r=[];var n=true;var o=false;var s=void 0;try{for(var a=(0,i.default)(e),u;!(n=(u=a.next()).done);n=true){r.push(u.value);if(t&&r.length===t)break}}catch(e){o=true;s=e}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw s}}return r}return function(t,r){if(Array.isArray(t))return t;if((0,o.default)(Object(t)))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},21:function(e,t,r){e.exports={default:r(8),__esModule:true}},22:function(e,t,r){e.exports={default:r(46),__esModule:true}},23:function(e,t,r){e.exports={default:r(55),__esModule:true}},24:function(e,t,r){e.exports={default:r(44),__esModule:true}},25:function(e,t,r){"use strict";t.__esModule=true;var n=r(5);var o=s(n);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":(0,o.default)(t))&&"function"!==typeof t?e:t}},26:function(e,t,r){e.exports={default:r(47),__esModule:true}},27:function(e,t,r){e.exports={default:r(48),__esModule:true}},28:function(e,t,r){"use strict";t.__esModule=true;var n=r(29);var o=l(n);var s=r(30);var i=l(s);var a=r(5);var u=l(a);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":(0,u.default)(t)));e.prototype=(0,i.default)(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(o.default?(0,o.default)(e,t):e.__proto__=t)}},29:function(e,t,r){e.exports={default:r(56),__esModule:true}},3:function(e,t,r){e.exports=r(13)},30:function(e,t,r){e.exports={default:r(57),__esModule:true}},31:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(32);var o=p(n);var s=r(1);var i=p(s);var a=r(2);var u=p(a);var l=r(33);var c=p(l);var f=r(34);var d=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var h=function e(t){return t.replace(/\/style/gi,"\\/style")};var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;(0,i.default)(this,e);this._sheet=n||new d.default({name:"styled-jsx",optimizeForSpeed:s});this._sheet.inject();if(n&&"boolean"===typeof s){this._sheet.setOptimizeForSpeed(s);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,o.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var n=this.getIdAndRules(t),s=n.styleId,i=n.rules;if(s in this._instancesCounts){this._instancesCounts[s]+=1;return}var a=i.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[s]=a;this._instancesCounts[s]=1}}},{key:"remove",value:function e(t){var r=this;var n=this.getIdAndRules(t),o=n.styleId;m(o in this._instancesCounts,"styleId: `"+o+"` not found");this._instancesCounts[o]-=1;if(this._instancesCounts[o]<1){var s=this._fromServer&&this._fromServer[o];if(s){s.parentNode.removeChild(s);delete this._fromServer[o]}else{this._indices[o].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[o]}delete this._instancesCounts[o]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,o.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,o.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var n=String(r);var o=e+n;t[o]||(t[o]="jsx-"+(0,c.default)(e+"-"+n));return t[o]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,n){this._isBrowser||(n=h(n));var o=e+n;r[o]||(r[o]=n.replace(t,e));return r[o]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var n=this.computeId(t.styleId,t.dynamic);return{styleId:n,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(n,e)}):[this.computeSelector(n,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=v;function m(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},32:function(e,t,r){e.exports={default:r(45),__esModule:true}},33:function(e,t,r){"use strict";function n(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=n},34:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var o=a(n);var s=r(2);var i=a(s);function a(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,i=void 0===s?u:s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);f(l(n),"`name` must be a string");this._name=n;this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}";f("boolean"===typeof i,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=i;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,i.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){f("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;f(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,n){"number"===typeof n?t._serverSheet.cssRules[n]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return n},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){f(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof r&&(r=n.cssRules.length);try{n.insertRule(t,r)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var o=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,o))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!n.cssRules[t])return t;n.deleteRule(t);try{n.insertRule(r,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");n.insertRule(this._deletedRulePlaceholder,t)}}else{var o=this._tags[t];f(o,"old rule at index `"+t+"` not found");o.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];f(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,n){r&&f(l(r),"makeStyleTag acceps only strings as second parameter");var o=document.createElement("style");o.type="text/css";o.setAttribute("data-"+t,"");r&&o.appendChild(document.createTextNode(r));var s=document.head||document.getElementsByTagName("head")[0];n?s.insertBefore(o,n):s.appendChild(o);return o}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function f(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(54))},372:function(e,t,r){e.exports=r(147)},5:function(e,t,r){"use strict";t.__esModule=true;var n=r(26);var o=u(n);var s=r(27);var i=u(s);var a="function"===typeof i.default&&"symbol"===typeof o.default?function(e){return typeof e}:function(e){return e&&"function"===typeof i.default&&e.constructor===i.default&&e!==i.default.prototype?"symbol":typeof e};function u(e){return e&&e.__esModule?e:{default:e}}t.default="function"===typeof i.default&&"symbol"===a(o.default)?function(e){return"undefined"===typeof e?"undefined":a(e)}:function(e){return e&&"function"===typeof i.default&&e.constructor===i.default&&e!==i.default.prototype?"symbol":"undefined"===typeof e?"undefined":a(e)}},66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var n=r(0);var o=r.n(n);var s=r(12);var i=r.n(s);var a=r(74);var u=r(73);var e=function e(t,r){var n=Object(s["connect"])(t,u["default"]);var i=n(r);return o.a.createElement(i,null)};t["default"]=function(e){return o.a.createElement(s["Provider"],{store:a["default"]},e.children)}},67:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(35);t["default"]={logo:n["a"]+"/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}},73:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign;t["default"]=function(e){return{setView:function e(t,r){var o=n({},t.store);if("myAccount"==r){o.view=r;o.displayedBooks=o.completedOrders}else{o.view=o.sections[o.selectedSectionIndex].view;o.displayedBooks="orders"==r?o.pendingOrders:[]}return{store:o}},selectSection:function e(t,r){var o=n({},t.store);o.selectedSectionIndex=r;return{store:o}},selectCategory:function e(t,r){var o=n({},t.store);o.selectedCategoryIndex=r;o.displayedBooks=[];o.books.forEach(function(e){if(e.categories.includes(r)){o.displayedBooks.push(e);o.displayedBooks[o.displayedBooks.indexOf(e)].color=o.categories[r].color[1]}});return{store:o}},manageOrders:function e(t,r){var o=n({},t.store);var s=n({},o.displayedBooks[r]);var i=n({},o.pendingOrders[r]);var a=o.pendingOrders.indexOf(s);var u=o.completedOrders.indexOf(s);if("library"==o.view)-1==a||o.pendingOrders[a].color!=s.color?o.pendingOrders.push(s):o.pendingOrders.splice(a,1);else if("orders"==o.view)if(-1==u||o.completedOrders[u].color!=o.pendingOrders[r].color){o.completedOrders.push(o.pendingOrders[r]);o.pendingOrders.splice(r,1)}else o.completedOrders.splice(u,1);else"myAccount"==o.view&&o.completedOrders.splice(r,1);return{store:o}}}}},74:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(10);var o=r(67);t["default"]=Object(n["a"])({store:{logo:o["default"].logo,books:o["default"].books,sections:o["default"].sections,selectedSectionIndex:0,view:o["default"].view,displayedBooks:[],user:o["default"].user,pendingOrders:[],completedOrders:[],categories:o["default"].categories,selectedCategoryIndex:null}})},8:function(e,t,r){r(9);r(7);e.exports=r(11)}},[372]);return{page:e.default}});