module.exports=__NEXT_REGISTER_PAGE("/books/Content/BookList/Ratings",function(){var e=webpackJsonp([29],{10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=r(11);var n=g(s);var i=r(35);var o=g(i);var a=r(24);var u=g(a);var l=r(1);var c=g(l);var h=r(2);var d=g(h);var f=r(25);var p=g(f);var v=r(26);var _=g(v);t.flush=w;var m=r(0);var y=r(17);var S=g(y);function g(e){return e&&e.__esModule?e:{default:e}}var k=new S.default;var b=function(e){(0,_.default)(t,e);function t(){(0,c.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,d.default)(t,[{key:"componentWillMount",value:function e(){k.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){k.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){k.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,o.default)(e,2),r=t[0],s=t[1];return k.computeId(r,s)}).join(" ")}}]);return t}(m.Component);t.default=b;function w(){var e=k.cssRules();k.flush();return new n.default(e)}},11:function(e,t,r){e.exports={default:r(12),__esModule:true}},12:function(e,t,r){r(33);r(27);r(31);r(13);r(14);r(15);r(16);e.exports=r(5).Map},13:function(e,t,r){"use strict";var s=r(39);var n=r(36);var i="Map";e.exports=r(40)(i,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=s.getEntry(n(this,i),t);return r&&r.v},set:function e(t,r){return s.def(n(this,i),0===t?0:t,r)}},s,true)},14:function(e,t,r){var s=r(23);s(s.P+s.R,"Map",{toJSON:r(41)("Map")})},15:function(e,t,r){r(42)("Map")},16:function(e,t,r){r(43)("Map")},17:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=r(18);var n=f(s);var i=r(1);var o=f(i);var a=r(2);var u=f(a);var l=r(21);var c=f(l);var h=r(22);var d=f(h);function f(e){return e&&e.__esModule?e:{default:e}}var p=function e(t){return t.replace(/\/style/gi,"\\/style")};var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,s=void 0===r?null:r,n=t.optimizeForSpeed,i=void 0!==n&&n,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);this._sheet=s||new d.default({name:"styled-jsx",optimizeForSpeed:i});this._sheet.inject();if(s&&"boolean"===typeof i){this._sheet.setOptimizeForSpeed(i);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,n.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var s=this.getIdAndRules(t),i=s.styleId,o=s.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var a=o.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[i]=a;this._instancesCounts[i]=1}}},{key:"remove",value:function e(t){var r=this;var s=this.getIdAndRules(t),n=s.styleId;_(n in this._instancesCounts,"styleId: `"+n+"` not found");this._instancesCounts[n]-=1;if(this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];if(i){i.parentNode.removeChild(i);delete this._fromServer[n]}else{this._indices[n].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[n]}delete this._instancesCounts[n]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,n.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,n.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var s=String(r);var n=e+s;t[n]||(t[n]="jsx-"+(0,c.default)(e+"-"+s));return t[n]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,s){this._isBrowser||(s=p(s));var n=e+s;r[n]||(r[n]=s.replace(t,e));return r[n]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var s=this.computeId(t.styleId,t.dynamic);return{styleId:s,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(s,e)}):[this.computeSelector(s,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=v;function _(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},18:function(e,t,r){e.exports={default:r(19),__esModule:true}},19:function(e,t,r){r(20);e.exports=r(5).Object.keys},20:function(e,t,r){var s=r(29);var n=r(32);r(37)("keys",function(){return function e(t){return n(s(t))}})},21:function(e,t,r){"use strict";function s(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=s},22:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var s=r(1);var n=a(s);var i=r(2);var o=a(i);function a(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,s=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,o=void 0===i?u:i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;(0,n.default)(this,e);h(l(s),"`name` must be a string");this._name=s;this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}";h("boolean"===typeof o,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=o;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,o.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){h("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");h(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;h(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,s){"number"===typeof s?t._serverSheet.cssRules[s]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return s},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){h(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof r&&(r=s.cssRules.length);try{s.insertRule(t,r)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var n=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,n))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!s.cssRules[t])return t;s.deleteRule(t);try{s.insertRule(r,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");s.insertRule(this._deletedRulePlaceholder,t)}}else{var n=this._tags[t];h(n,"old rule at index `"+t+"` not found");n.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];h(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,s){r&&h(l(r),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");n.type="text/css";n.setAttribute("data-"+t,"");r&&n.appendChild(document.createTextNode(r));var i=document.head||document.getElementsByTagName("head")[0];s?i.insertBefore(n,s):i.appendChild(n);return n}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function h(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(38))},3:function(e,t,r){e.exports=r(10)},342:function(e,t,r){e.exports=r(86)},86:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=r(3);var n=r.n(s);var i=r(0);var o=r.n(i);var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||false;s.configurable=true;"value"in s&&(s.writable=true);Object.defineProperty(e,s.key,s)}}return function(t,r,s){r&&e(t.prototype,r);s&&e(t,s);return t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){c(t,e);function t(){u(this,t);return l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){var t=this.props,r=t.isExpanded,s=t.score,i=t.color;var a=parseInt(s);var u=parseFloat(parseFloat(s)-parseFloat(parseInt(s)));var l=[];for(var c=0;c<a;c++)l.push(o.a.createElement("div",{key:c,className:n.a.dynamic([["2342084347",[i]]])+" star checked ion-ios-star"},o.a.createElement(n.a,{styleId:"2342084347",css:[".star.__jsx-style-dynamic-selector{display:inline-block;margin-right:0.3rem;font-size:1rem;color:"+i+";}"],dynamic:[i]})));5-a>0&&0!=u&&l.push(o.a.createElement("div",{key:a,className:n.a.dynamic([["829013998",[i]]])+" star checked ion-ios-star-half"},o.a.createElement(n.a,{styleId:"829013998",css:[".star.__jsx-style-dynamic-selector{display:inline-block;margin-right:0.3rem;font-size:1rem;color:"+i+";}"],dynamic:[i]})));u=0!=u?1:0;for(var c=0;c<5-a-u;c++)l.push(o.a.createElement("div",{key:a+c+1,className:n.a.dynamic([["2342084347",[i]]])+" star ion-ios-star-outline"},o.a.createElement(n.a,{styleId:"2342084347",css:[".star.__jsx-style-dynamic-selector{display:inline-block;margin-right:0.3rem;font-size:1rem;color:"+i+";}"],dynamic:[i]})));var h=r?"container is_expanded":"container";return o.a.createElement("div",{className:"jsx-1466660590 "+(h||"")},r?o.a.createElement("div",{className:"jsx-1466660590 stars"},l):null,s,o.a.createElement(n.a,{styleId:"1466660590",css:['.container.jsx-1466660590{position:relative;color:#2a2734;font-size:0.8rem;font-weight:600;font-family:"Cabin",sans-serif;width:50%;-webkit-transition:all 0.5s ease-in-out 0.5s;transition:all 0.5s ease-in-out 0.5s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',".container.is_expanded.jsx-1466660590{width:100%;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}"]}))}}]);return t}(i["Component"]);t["default"]=h}},[342]);return{page:e.default}});