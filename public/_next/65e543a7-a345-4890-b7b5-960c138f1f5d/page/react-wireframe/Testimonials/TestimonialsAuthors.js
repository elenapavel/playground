module.exports=__NEXT_REGISTER_PAGE("/react-wireframe/Testimonials/TestimonialsAuthors",function(){var e=webpackJsonp([29],{10:function(e,t,r){r(32);r(27);r(29);r(11);r(12);r(13);r(14);e.exports=r(4).Map},11:function(e,t,r){"use strict";var s=r(37);var n=r(34);var i="Map";e.exports=r(38)(i,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=s.getEntry(n(this,i),t);return r&&r.v},set:function e(t,r){return s.def(n(this,i),0===t?0:t,r)}},s,true)},12:function(e,t,r){var s=r(22);s(s.P+s.R,"Map",{toJSON:r(39)("Map")})},13:function(e,t,r){r(40)("Map")},139:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=r(3);var n=r.n(s);var i=r(0);var a=r.n(i);var o=r(92);var u=r.n(o);var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||false;s.configurable=true;"value"in s&&(s.writable=true);Object.defineProperty(e,s.key,s)}}return function(t,r,s){r&&e(t.prototype,r);s&&e(t,s);return t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){d(t,e);function t(){c(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,[{key:"render",value:function e(){var t=u.a.testimonial_author+" "+u.a.testimonial_author_active;var r=u.a.testimonial_author_avatar+" "+u.a.testimonial_author_avatar_active;var s=u.a.testimonial_author_name+" "+u.a.testimonial_author_name_active;return a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_authors_container||"")},a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author||"")},a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_avatar||"")}),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_name||"")})),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author||"")},a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_avatar||"")}),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_name||"")})),a.a.createElement("div",{className:"jsx-2085888330 "+(t||"")},a.a.createElement("div",{className:"jsx-2085888330 "+(r||"")}),a.a.createElement("div",{className:"jsx-2085888330 "+(s||"")})),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author||"")},a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_avatar||"")}),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_name||"")})),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author||"")},a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_avatar||"")}),a.a.createElement("div",{className:"jsx-2085888330 "+(u.a.testimonial_author_name||"")})),a.a.createElement(n.a,{styleId:"2085888330",css:[]}))}}]);return t}(i["Component"]);t["default"]=f},14:function(e,t,r){r(41)("Map")},15:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=r(16);var n=f(s);var i=r(1);var a=f(i);var o=r(2);var u=f(o);var l=r(19);var c=f(l);var h=r(20);var d=f(h);function f(e){return e&&e.__esModule?e:{default:e}}var v=function e(t){return t.replace(/\/style/gi,"\\/style")};var _=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,s=void 0===r?null:r,n=t.optimizeForSpeed,i=void 0!==n&&n,o=t.isBrowser,u=void 0===o?"undefined"!==typeof window:o;(0,a.default)(this,e);this._sheet=s||new d.default({name:"styled-jsx",optimizeForSpeed:i});this._sheet.inject();if(s&&"boolean"===typeof i){this._sheet.setOptimizeForSpeed(i);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,n.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var s=this.getIdAndRules(t),i=s.styleId,a=s.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var o=a.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(o.length>0){this._indices[i]=o;this._instancesCounts[i]=1}}},{key:"remove",value:function e(t){var r=this;var s=this.getIdAndRules(t),n=s.styleId;m(n in this._instancesCounts,"styleId: `"+n+"` not found");this._instancesCounts[n]-=1;if(this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];if(i){i.parentNode.removeChild(i);delete this._fromServer[n]}else{this._indices[n].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[n]}delete this._instancesCounts[n]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,n.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,n.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var s=String(r);var n=e+s;t[n]||(t[n]="jsx-"+(0,c.default)(e+"-"+s));return t[n]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,s){this._isBrowser||(s=v(s));var n=e+s;r[n]||(r[n]=s.replace(t,e));return r[n]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var s=this.computeId(t.styleId,t.dynamic);return{styleId:s,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(s,e)}):[this.computeSelector(s,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=_;function m(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},16:function(e,t,r){e.exports={default:r(17),__esModule:true}},17:function(e,t,r){r(18);e.exports=r(4).Object.keys},18:function(e,t,r){var s=r(28);var n=r(31);r(35)("keys",function(){return function e(t){return n(s(t))}})},19:function(e,t,r){"use strict";function s(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=s},20:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var s=r(1);var n=o(s);var i=r(2);var a=o(i);function o(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,s=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,a=void 0===i?u:i,o=t.isBrowser,c=void 0===o?"undefined"!==typeof window:o;(0,n.default)(this,e);h(l(s),"`name` must be a string");this._name=s;this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}";h("boolean"===typeof a,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=a;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,a.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){h("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");h(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;h(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,s){"number"===typeof s?t._serverSheet.cssRules[s]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return s},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){h(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof r&&(r=s.cssRules.length);try{s.insertRule(t,r)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var n=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,n))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!s.cssRules[t])return t;s.deleteRule(t);try{s.insertRule(r,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");s.insertRule(this._deletedRulePlaceholder,t)}}else{var n=this._tags[t];h(n,"old rule at index `"+t+"` not found");n.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];h(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,s){r&&h(l(r),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");n.type="text/css";n.setAttribute("data-"+t,"");r&&n.appendChild(document.createTextNode(r));var i=document.head||document.getElementsByTagName("head")[0];s?i.insertBefore(n,s):i.appendChild(n);return n}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function h(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(36))},3:function(e,t,r){e.exports=r(8)},411:function(e,t,r){e.exports=r(139)},8:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var s=r(9);var n=g(s);var i=r(33);var a=g(i);var o=r(23);var u=g(o);var l=r(1);var c=g(l);var h=r(2);var d=g(h);var f=r(24);var v=g(f);var _=r(25);var m=g(_);t.flush=R;var p=r(0);var y=r(15);var S=g(y);function g(e){return e&&e.__esModule?e:{default:e}}var j=new S.default;var w=function(e){(0,m.default)(t,e);function t(){(0,c.default)(this,t);return(0,v.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,d.default)(t,[{key:"componentWillMount",value:function e(){j.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){j.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){j.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,a.default)(e,2),r=t[0],s=t[1];return j.computeId(r,s)}).join(" ")}}]);return t}(p.Component);t.default=w;function R(){var e=j.cssRules();j.flush();return new n.default(e)}},9:function(e,t,r){e.exports={default:r(10),__esModule:true}}},[411]);return{page:e.default}});