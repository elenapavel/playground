module.exports=__NEXT_REGISTER_PAGE("/books/Account",function(){var e=webpackJsonp([37],{10:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=r(11);var s=S(i);var n=r(36);var o=S(n);var a=r(23);var u=S(a);var l=r(1);var c=S(l);var h=r(2);var f=S(h);var d=r(24);var p=S(d);var m=r(25);var v=S(m);t.flush=b;var _=r(0);var y=r(17);var g=S(y);function S(e){return e&&e.__esModule?e:{default:e}}var x=new g.default;var w=function(e){(0,v.default)(t,e);function t(){(0,c.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"componentWillMount",value:function e(){x.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){x.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){x.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,o.default)(e,2),r=t[0],i=t[1];return x.computeId(r,i)}).join(" ")}}]);return t}(_.Component);t.default=w;function b(){var e=x.cssRules();x.flush();return new s.default(e)}},11:function(e,t,r){e.exports={default:r(12),__esModule:true}},12:function(e,t,r){r(34);r(27);r(32);r(13);r(14);r(15);r(16);e.exports=r(5).Map},13:function(e,t,r){"use strict";var i=r(40);var s=r(37);var n="Map";e.exports=r(41)(n,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=i.getEntry(s(this,n),t);return r&&r.v},set:function e(t,r){return i.def(s(this,n),0===t?0:t,r)}},i,true)},14:function(e,t,r){var i=r(26);i(i.P+i.R,"Map",{toJSON:r(42)("Map")})},15:function(e,t,r){r(43)("Map")},16:function(e,t,r){r(44)("Map")},17:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=r(18);var s=d(i);var n=r(1);var o=d(n);var a=r(2);var u=d(a);var l=r(21);var c=d(l);var h=r(22);var f=d(h);function d(e){return e&&e.__esModule?e:{default:e}}var p=function e(t){return t.replace(/\/style/gi,"\\/style")};var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,i=void 0===r?null:r,s=t.optimizeForSpeed,n=void 0!==s&&s,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);this._sheet=i||new f.default({name:"styled-jsx",optimizeForSpeed:n});this._sheet.inject();if(i&&"boolean"===typeof n){this._sheet.setOptimizeForSpeed(n);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,s.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var i=this.getIdAndRules(t),n=i.styleId,o=i.rules;if(n in this._instancesCounts){this._instancesCounts[n]+=1;return}var a=o.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[n]=a;this._instancesCounts[n]=1}}},{key:"remove",value:function e(t){var r=this;var i=this.getIdAndRules(t),s=i.styleId;v(s in this._instancesCounts,"styleId: `"+s+"` not found");this._instancesCounts[s]-=1;if(this._instancesCounts[s]<1){var n=this._fromServer&&this._fromServer[s];if(n){n.parentNode.removeChild(n);delete this._fromServer[s]}else{this._indices[s].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[s]}delete this._instancesCounts[s]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,s.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,s.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var i=String(r);var s=e+i;t[s]||(t[s]="jsx-"+(0,c.default)(e+"-"+i));return t[s]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,i){this._isBrowser||(i=p(i));var s=e+i;r[s]||(r[s]=i.replace(t,e));return r[s]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var i=this.computeId(t.styleId,t.dynamic);return{styleId:i,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(i,e)}):[this.computeSelector(i,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=m;function v(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},18:function(e,t,r){e.exports={default:r(19),__esModule:true}},19:function(e,t,r){r(20);e.exports=r(5).Object.keys},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var i=r(3);var s=r.n(i);var n=r(0);var o=r.n(n);var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||false;i.configurable=true;"value"in i&&(i.writable=true);Object.defineProperty(e,i.key,i)}}return function(t,r,i){r&&e(t.prototype,r);i&&e(t,i);return t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){c(t,e);function t(){u(this,t);return l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}a(t,[{key:"render",value:function e(){var t=this.props,r=t.items,i=t.user;return o.a.createElement("div",{className:"jsx-238864579 container"},o.a.createElement("div",{className:"jsx-238864579 details"},o.a.createElement("div",{className:"jsx-238864579 to_left"},o.a.createElement("div",{className:"jsx-238864579 avatar"},o.a.createElement("img",{src:i.avatar,className:"jsx-238864579"}))),o.a.createElement("div",{className:"jsx-238864579 to_right"},o.a.createElement("div",{className:"jsx-238864579 name"},i.name),o.a.createElement("div",{className:"jsx-238864579 email"},i.email),o.a.createElement("div",{className:"jsx-238864579 orders_number"},"Taken books: ",r.length))),o.a.createElement(s.a,{styleId:"238864579",css:[".container.jsx-238864579{padding:3rem 2rem 0;background:#f5f5fa;position:relative;overflow:hidden;}",'.container.jsx-238864579:before{content:"";box-shadow:0 0 5rem #e1e1e1;position:absolute;top:-5rem;left:0;right:0;width:100%;height:5rem;}',".details.jsx-238864579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 1rem;}",".to_left.jsx-238864579{-webkit-flex-basis:10rem;-ms-flex-preferred-size:10rem;flex-basis:10rem;}",".to_right.jsx-238864579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".avatar.jsx-238864579{border-radius:50%;overflow:hidden;width:8rem;height:8rem;}",".avatar.jsx-238864579 img.jsx-238864579{display:block;max-width:100%;max-height:100%;margin:auto;display:block;}",'.name.jsx-238864579{font-size:1.2rem;font-weight:600;font-family:"Cabin",sans-serif;line-height:1.4;color:#2a2734;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-bottom:1rem;}','.email.jsx-238864579{font-size:0.9rem;font-weight:400;font-family:"Cabin",sans-serif;line-height:1.4;color:#7e7d94;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;margin-bottom:1rem;}','.orders_number.jsx-238864579{font-size:0.9rem;font-weight:600;font-family:"Cabin",sans-serif;line-height:1.4;color:#595769;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}']}))}}]);return t}(n["Component"]);t["default"]=h},20:function(e,t,r){var i=r(29);var s=r(33);r(38)("keys",function(){return function e(t){return s(i(t))}})},21:function(e,t,r){"use strict";function i(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=i},22:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var i=r(1);var s=a(i);var n=r(2);var o=a(n);function a(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,i=void 0===r?"stylesheet":r,n=t.optimizeForSpeed,o=void 0===n?u:n,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;(0,s.default)(this,e);h(l(i),"`name` must be a string");this._name=i;this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}";h("boolean"===typeof o,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=o;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,o.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){h("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");h(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;h(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,i){"number"===typeof i?t._serverSheet.cssRules[i]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return i},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){h(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof r&&(r=i.cssRules.length);try{i.insertRule(t,r)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var s=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,s))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!i.cssRules[t])return t;i.deleteRule(t);try{i.insertRule(r,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");i.insertRule(this._deletedRulePlaceholder,t)}}else{var s=this._tags[t];h(s,"old rule at index `"+t+"` not found");s.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];h(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,i){r&&h(l(r),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");s.type="text/css";s.setAttribute("data-"+t,"");r&&s.appendChild(document.createTextNode(r));var n=document.head||document.getElementsByTagName("head")[0];i?n.insertBefore(s,i):n.appendChild(s);return s}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function h(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(39))},3:function(e,t,r){e.exports=r(10)},366:function(e,t,r){e.exports=r(199)}},[366]);return{page:e.default}});