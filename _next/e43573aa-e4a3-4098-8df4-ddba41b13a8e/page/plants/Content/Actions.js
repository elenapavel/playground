module.exports=__NEXT_REGISTER_PAGE("/plants/Content/Actions",function(){var e=webpackJsonp([14],{1:function(e,t,n){"use strict";n.d(t,"a",function(){return a});n.d(t,"b",function(){return l});n.d(t,"c",function(){return c});var r=n(2);var i=n.n(r);var s=i()(),o=s.publicRuntimeConfig;var a=o.base;var u=o.url;var l=o.static.default;var c=o.static.structure},10:function(e,t,n){"use strict";t.__esModule=true;t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},11:function(e,t,n){"use strict";t.__esModule=true;var r=n(59);var i=s(r);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);(0,i.default)(e,r.key,r)}}return function(t,n,r){n&&e(t.prototype,n);r&&e(t,r);return t}}()},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(1);t["default"]={logo:r["b"]+"/images/logo_plants.png",sections:[{label:"Nature's edition",plants:[{scientificName:"Ravenea Rivularis",commonName:"Majesty Palm",content:'While often marketed as a "plant" in a pot, in its natural state, it grows to 98 feet tall. Despite its fragility as a species in the wild, it has become a very popular houseplant due to its beautiful leaves and slow-growing nature.',category:"Palms",species:"20 species",image:r["b"]+"/images/plants/ravenea-rivularis.jpg"},{scientificName:"Chamaedorea elegans",commonName:"Parlour Palm",content:"It is one of several species with leaves that are harvested as xate. It is a versatile and almost no-maintenance plant that is able to grow in every indoor and outdoor condition possible with little help and care.",category:"Palms",species:"107 species",image:r["b"]+"/images/plants/chamaedorea-elegans.jpg"},{scientificName:"Howea forsteriana",commonName:"Kentia Palm",content:'The palm is an elegant plant, and is popular for growing indoors, requiring little light. The palm received the name "forsteriana" after the naturalist father and son duo who first encountered it during Captain Cook\'s second voyage to the Pacific, Johann Reinhold Forster and Georg Forster.',category:"Palms",species:"2 species",image:r["b"]+"/images/plants/howea-forsteriana.jpg"},{scientificName:"Ficus Elastica",commonName:"Rubber Plant",content:"Ficus elastica is grown around the world as an ornamental plant, outside in frost-free climates from the tropical to the Mediterranean and inside in colder climates as a houseplant.",category:"Ficus",species:"850 species",image:r["b"]+"/images/plants/ficus-elastica.jpg"},{scientificName:"Myriophyllum simulans",commonName:"Amphibious Water-milfoil",content:"In its submerged form it has light green, densely leaved stems with very finely pinnate leaves. This fast-growing stem plant needs good lighting and thrives well at temperatures between 20 and 28 °C.",category:"Aquatic Plants",species:"69 species",image:r["b"]+"/images/plants/myriophyllum-simulans.jpg"},{scientificName:"Tillandsia Caput Medusae",commonName:"Octopus Plant",content:"The thick, channeled, tapering and twisting leaves are up to 25 cm (9.8 in) long and are covered in fine gray hairs. The rosette of leaves arise from an inflated pseudobulb. In a greenhouse, the plants can bloom from spring to early summer. The red inflorescences are usually unbranched or digitate.",category:"Tillandsia",species:"650 species",image:r["b"]+"/images/plants/tillandsiacaputmedusae.jpg"}]}],socialMedia:[{instagram:"https://instagram.com"},{facebook:"https://facebook.com"},{twitter:"https://twitter.com"}]}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});n.d(t,"module",function(){return e});var r=n(0);var i=n.n(r);var s=n(37);var o=n.n(s);var a=n(132);var u=n(131);var e=function e(t,n){var r=Object(s["connect"])(t,u["default"]);var o=r(n);return i.a.createElement(o,null)};t["default"]=function(e){return i.a.createElement(s["Provider"],{store:a["default"]},e.children)}},131:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=Object.assign;t["default"]=function(e){return{selectPlantByIndex:function e(t,n){var i=r({},t.plantoid);i.lastSelectedPlant=i.selectedPlant;n==i.plants.length?i.selectedPlantIndex=0:i.selectedPlantIndex=-1==n?i.plants.length-1:n;i.selectedPlant=i.plants[i.selectedPlantIndex];i.isMenuOpened=false;return{plantoid:i}},toggleMenu:function e(t){var n=r({},t.plantoid);n.isMenuOpened=!n.isMenuOpened;return{plantoid:n}}}}},132:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(31);var i=n(126);t["default"]=Object(r["a"])({plantoid:{logo:i["default"].logo,sections:i["default"].sections,section:i["default"].sections[0],plants:i["default"].sections[0].plants,selectedPlantIndex:0,lastSelectedPlantIndex:null,socialMedia:i["default"].socialMedia,isMenuOpened:false}})},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(25);var i=n.n(r);var s=n(0);var o=n.n(s);var a=n(128);t["default"]=function(){return Object(a["module"])("plantoid",function(e){var t=e.plantoid,n=e.selectPlantByIndex;var r=t.selectedPlantIndex,s=t.isMenuOpened;return o.a.createElement("div",{className:"jsx-1850865341 actions"},o.a.createElement("div",{onClick:function e(){return!s&&n(r-1)},className:"jsx-1850865341 action ion-ios-arrow-back"}),o.a.createElement("div",{onClick:function e(){return!s&&n(r+1)},className:"jsx-1850865341 action ion-ios-arrow-forward"}),o.a.createElement(i.a,{styleId:"1850865341",css:[".actions.jsx-1850865341{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:10;}",".action.jsx-1850865341{background:#d8d8d8;border-radius:50%;width:2.5rem;height:2.5rem;margin-right:1rem;font-size:1.5rem;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}"]}))})}},2:function(e,t,n){e.exports=n(24)},25:function(e,t,n){e.exports=n(48)},30:function(e,t,n){"use strict";t.__esModule=true;var r=n(61);var i=u(r);var s=n(62);var o=u(s);var a="function"===typeof o.default&&"symbol"===typeof i.default?function(e){return typeof e}:function(e){return e&&"function"===typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":typeof e};function u(e){return e&&e.__esModule?e:{default:e}}t.default="function"===typeof o.default&&"symbol"===a(i.default)?function(e){return"undefined"===typeof e?"undefined":a(e)}:function(e){return e&&"function"===typeof o.default&&e.constructor===o.default&&e!==o.default.prototype?"symbol":"undefined"===typeof e?"undefined":a(e)}},31:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}t["a"]=function(e){var t=[];function n(e){for(var n=[],r=0;r<t.length;r++)t[r]===e?e=null:n.push(t[r]);t=n}function i(n,i,s){e=i?n:r(r({},e),n);for(var o=t,a=0;a<o.length;a++)o[a](e,s)}return e=e||{},{action:function(t){function n(e){i(e,!1,t)}return function(){for(var r=arguments,i=[e],s=0;s<arguments.length;s++)i.push(r[s]);var o=t.apply(this,i);null!=o&&(o.then?o.then(n):n(o))}},setState:i,subscribe:function(e){return t.push(e),function(){n(e)}},unsubscribe:n,getState:function(){return e}}}},37:function(e,t,n){var r=n(0);function i(e,t){for(var n in t)e[n]=t[n];return e}var s={store:function(){}};var o=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return r.Children.only(this.props.children)},t}(r.Component);o.childContextTypes=s,t.connect=function(e,t){var n;return"function"!=typeof e&&("string"==typeof(n=e||[])&&(n=n.split(/\s*,\s*/)),e=function(e){for(var t={},r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t}),function(n){function o(s,o){var a=this;r.Component.call(this,s,o);var u=o.store,l=e(u?u.getState():{},s),c=t?function(e,t){"function"==typeof e&&(e=e(t));var n={};for(var r in e)n[r]=t.action(e[r]);return n}(t,u):{store:u},f=function(){var t=e(u?u.getState():{},a.props);for(var n in t)if(t[n]!==l[n])return l=t,a.forceUpdate();for(var r in l)if(!(r in t))return l=t,a.forceUpdate()};this.componentDidMount=function(){f(),u.subscribe(f)},this.componentWillUnmount=function(){u.unsubscribe(f)},this.render=function(){return r.createElement(n,i(i(i({},c),a.props),l))}}return o.contextTypes=s,(o.prototype=Object.create(r.Component.prototype)).constructor=o}},t.Provider=o},39:function(e,t,n){n(41);n(35);e.exports=n(42)},42:function(e,t,n){var r=n(74);var i=n(71)("iterator");var s=n(73);e.exports=n(9).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||s.hasOwnProperty(r(t))}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(49);var i=b(r);var s=n(55);var o=b(s);var a=n(58);var u=b(a);var l=n(10);var c=b(l);var f=n(11);var d=b(f);var p=n(60);var h=b(p);var v=n(63);var m=b(v);t.flush=x;var _=n(0);var y=n(66);var g=b(y);function b(e){return e&&e.__esModule?e:{default:e}}var S=new g.default;var w=function(e){(0,m.default)(t,e);function t(){(0,c.default)(this,t);return(0,h.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,d.default)(t,[{key:"componentWillMount",value:function e(){S.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){S.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){S.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,o.default)(e,2),n=t[0],r=t[1];return S.computeId(n,r)}).join(" ")}}]);return t}(_.Component);t.default=w;function x(){var e=S.cssRules();S.flush();return new i.default(e)}},49:function(e,t,n){e.exports={default:n(50),__esModule:true}},50:function(e,t,n){n(77);n(35);n(41);n(51);n(52);n(53);n(54);e.exports=n(9).Map},51:function(e,t,n){"use strict";var r=n(84);var i=n(78);var s="Map";e.exports=n(85)(s,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var n=r.getEntry(i(this,s),t);return n&&n.v},set:function e(t,n){return r.def(i(this,s),0===t?0:t,n)}},r,true)},52:function(e,t,n){var r=n(70);r(r.P+r.R,"Map",{toJSON:n(86)("Map")})},53:function(e,t,n){n(87)("Map")},54:function(e,t,n){n(88)("Map")},55:function(e,t,n){"use strict";t.__esModule=true;var r=n(56);var i=a(r);var s=n(57);var o=a(s);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(){function e(e,t){var n=[];var r=true;var i=false;var s=void 0;try{for(var a=(0,o.default)(e),u;!(r=(u=a.next()).done);r=true){n.push(u.value);if(t&&n.length===t)break}}catch(e){i=true;s=e}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},56:function(e,t,n){e.exports={default:n(39),__esModule:true}},57:function(e,t,n){e.exports={default:n(81),__esModule:true}},58:function(e,t,n){e.exports={default:n(90),__esModule:true}},59:function(e,t,n){e.exports={default:n(79),__esModule:true}},60:function(e,t,n){"use strict";t.__esModule=true;var r=n(30);var i=s(r);function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":(0,i.default)(t))&&"function"!==typeof t?e:t}},61:function(e,t,n){e.exports={default:n(82),__esModule:true}},62:function(e,t,n){e.exports={default:n(83),__esModule:true}},63:function(e,t,n){"use strict";t.__esModule=true;var r=n(64);var i=l(r);var s=n(65);var o=l(s);var a=n(30);var u=l(a);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":(0,u.default)(t)));e.prototype=(0,o.default)(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},64:function(e,t,n){e.exports={default:n(91),__esModule:true}},65:function(e,t,n){e.exports={default:n(92),__esModule:true}},653:function(e,t,n){e.exports=n(173)},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(67);var i=p(r);var s=n(10);var o=p(s);var a=n(11);var u=p(a);var l=n(68);var c=p(l);var f=n(69);var d=p(f);function p(e){return e&&e.__esModule?e:{default:e}}var h=function e(t){return t.replace(/\/style/gi,"\\/style")};var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);this._sheet=r||new d.default({name:"styled-jsx",optimizeForSpeed:s});this._sheet.inject();if(r&&"boolean"===typeof s){this._sheet.setOptimizeForSpeed(s);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var n=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,i.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var r=this.getIdAndRules(t),s=r.styleId,o=r.rules;if(s in this._instancesCounts){this._instancesCounts[s]+=1;return}var a=o.map(function(e){return n._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[s]=a;this._instancesCounts[s]=1}}},{key:"remove",value:function e(t){var n=this;var r=this.getIdAndRules(t),i=r.styleId;m(i in this._instancesCounts,"styleId: `"+i+"` not found");this._instancesCounts[i]-=1;if(this._instancesCounts[i]<1){var s=this._fromServer&&this._fromServer[i];if(s){s.parentNode.removeChild(s);delete this._fromServer[i]}else{this._indices[i].forEach(function(e){return n._sheet.deleteRule(e)});delete this._indices[i]}delete this._instancesCounts[i]}}},{key:"update",value:function e(t,n){this.add(n);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var n=this._fromServer?(0,i.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return n.concat((0,i.default)(this._indices).map(function(n){return[n,t._indices[n].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,n){if(!n)return"jsx-"+e;var r=String(n);var i=e+r;t[i]||(t[i]="jsx-"+(0,c.default)(e+"-"+r));return t[i]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var n={};return function(e,r){this._isBrowser||(r=h(r));var i=e+r;n[i]||(n[i]=r.replace(t,e));return n[i]}}},{key:"getIdAndRules",value:function e(t){var n=this;if(t.dynamic){var r=this.computeId(t.styleId,t.dynamic);return{styleId:r,rules:Array.isArray(t.css)?t.css.map(function(e){return n.computeSelector(r,e)}):[this.computeSelector(r,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var n=t.id.slice(2);e[n]=t;return e},{})}}]);return e}();t.default=v;function m(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},67:function(e,t,n){e.exports={default:n(80),__esModule:true}},68:function(e,t,n){"use strict";function r(e){var t=5381,n=e.length;while(n)t=33*t^e.charCodeAt(--n);return t>>>0}e.exports=r},69:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var r=n(10);var i=a(r);var s=n(11);var o=a(s);function a(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,o=void 0===s?u:s,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;(0,i.default)(this,e);f(l(r),"`name` must be a string");this._name=r;this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}";f("boolean"===typeof o,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=o;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,o.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){f("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");f(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;f(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(n,r){"number"===typeof r?t._serverSheet.cssRules[r]={cssText:n}:t._serverSheet.cssRules.push({cssText:n});return r},deleteRule:function e(n){t._serverSheet.cssRules[n]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===t)return document.styleSheets[n]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,n){f(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof n&&(n=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,n);return this._rulesCount++}if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof n&&(n=r.cssRules.length);try{r.insertRule(t,n)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var i=this._tags[n];this._tags.push(this.makeStyleTag(this._name,t,i))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,n){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;n.trim()||(n=this._deletedRulePlaceholder);if(!r.cssRules[t])return t;r.deleteRule(t);try{r.insertRule(n,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+n+"\n\nSee https://stackoverflow.com/q/20007992 for more info");r.insertRule(this._deletedRulePlaceholder,t)}}else{var i=this._tags[t];f(i,"old rule at index `"+t+"` not found");i.textContent=n}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var n=this._tags[t];f(n,"rule at index `"+t+"` not found");n.parentNode.removeChild(n);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,n){n?e=e.concat(t.getSheetForTag(n).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,n,r){n&&f(l(n),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");i.type="text/css";i.setAttribute("data-"+t,"");n&&i.appendChild(document.createTextNode(n));var s=document.head||document.getElementsByTagName("head")[0];r?s.insertBefore(i,r):s.appendChild(i);return i}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function f(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,n(89))}},[653]);return{page:e.default}});