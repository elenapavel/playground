module.exports=__NEXT_REGISTER_PAGE("/books/TopBar",function(){var e=webpackJsonp([14],{10:function(e,t,r){e.exports={default:r(11),__esModule:true}},11:function(e,t,r){r(33);r(27);r(30);r(12);r(13);r(14);r(15);e.exports=r(5).Map},12:function(e,t,r){"use strict";var n=r(38);var s=r(35);var i="Map";e.exports=r(39)(i,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=n.getEntry(s(this,i),t);return r&&r.v},set:function e(t,r){return n.def(s(this,i),0===t?0:t,r)}},n,true)},13:function(e,t,r){var n=r(23);n(n.P+n.R,"Map",{toJSON:r(40)("Map")})},14:function(e,t,r){r(41)("Map")},15:function(e,t,r){r(42)("Map")},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(17);var s=h(n);var i=r(1);var o=h(i);var a=r(2);var u=h(a);var c=r(20);var l=h(c);var d=r(21);var f=h(d);function h(e){return e&&e.__esModule?e:{default:e}}var p=function e(t){return t.replace(/\/style/gi,"\\/style")};var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,i=void 0!==s&&s,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);this._sheet=n||new f.default({name:"styled-jsx",optimizeForSpeed:i});this._sheet.inject();if(n&&"boolean"===typeof i){this._sheet.setOptimizeForSpeed(i);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,s.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var n=this.getIdAndRules(t),i=n.styleId,o=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var a=o.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[i]=a;this._instancesCounts[i]=1}}},{key:"remove",value:function e(t){var r=this;var n=this.getIdAndRules(t),s=n.styleId;v(s in this._instancesCounts,"styleId: `"+s+"` not found");this._instancesCounts[s]-=1;if(this._instancesCounts[s]<1){var i=this._fromServer&&this._fromServer[s];if(i){i.parentNode.removeChild(i);delete this._fromServer[s]}else{this._indices[s].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[s]}delete this._instancesCounts[s]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,s.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,s.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var n=String(r);var s=e+n;t[s]||(t[s]="jsx-"+(0,l.default)(e+"-"+n));return t[s]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,n){this._isBrowser||(n=p(n));var s=e+n;r[s]||(r[s]=n.replace(t,e));return r[s]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var n=this.computeId(t.styleId,t.dynamic);return{styleId:n,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(n,e)}):[this.computeSelector(n,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=m;function v(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},17:function(e,t,r){e.exports={default:r(18),__esModule:true}},18:function(e,t,r){r(19);e.exports=r(5).Object.keys},184:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var s=r.n(n);var i=r(0);var o=r.n(i);var a=r(47);var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){d(t,e);function t(){c(this,t);return l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,[{key:"render",value:function e(){var t=this.props,r=t.isAccountView,n=t.logo,i=t.user,u=t.section;return o.a.createElement("div",{className:"jsx-2853790888 container"},o.a.createElement("div",{className:"jsx-2853790888 to_left"},r?Object(a["module"])("store",function(e){var t=e.store,r=e.setView;return o.a.createElement("div",{onClick:function e(){return r()},className:"jsx-2853790888 action_back ion-arrow-left-c"})}):null),o.a.createElement("div",{className:"jsx-2853790888 to_center"},r?null:o.a.createElement("div",{className:"jsx-2853790888 logo"},o.a.createElement("img",{src:n,className:"jsx-2853790888"})),o.a.createElement("div",{className:"jsx-2853790888 "+((r?"main_section":"section")||"")},u)),o.a.createElement("div",{className:"jsx-2853790888 to_right"},r?null:Object(a["module"])("store",function(e){var t=e.store,r=e.setView;return o.a.createElement("div",{onClick:function e(){return r("myAccount")},className:"jsx-2853790888 user_avatar"},o.a.createElement("img",{src:i.avatar,className:"jsx-2853790888"}))})),o.a.createElement(s.a,{styleId:"2853790888",css:[".container.jsx-2853790888{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".to_center.jsx-2853790888{padding:1.5rem;}",".to_right.jsx-2853790888{padding:1.5rem;min-width:5rem;}",".to_left.jsx-2853790888{min-width:5rem;}",".logo.jsx-2853790888{height:1.5rem;width:5rem;display:block;}",".user_avatar.jsx-2853790888{width:2.5rem;height:2.5rem;border-radius:50%;overflow:hidden;cursor:pointer;}",".logo.jsx-2853790888 img.jsx-2853790888,.user_avatar.jsx-2853790888 img.jsx-2853790888{max-width:100%;max-height:100%;margin:auto;display:block;}",'.section.jsx-2853790888{display:block;text-align:center;font-size:0.8rem;font-family:"Cabin",sans-serif;color:#87879c;font-weight:bold;padding-top:0.2rem;}','.main_section.jsx-2853790888{font-size:1.2rem;border-bottom:3px solid transparent;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:#2a2734;font-weight:600;font-family:"Cabin",sans-serif;}',".action_back.jsx-2853790888{padding:1.5rem;font-size:1.5rem;cursor:pointer;}"]}))}}]);return t}(i["Component"]);t["default"]=f},19:function(e,t,r){var n=r(28);var s=r(31);r(36)("keys",function(){return function e(t){return s(n(t))}})},20:function(e,t,r){"use strict";function n(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=n},21:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var s=a(n);var i=r(2);var o=a(i);function a(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var c=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,o=void 0===i?u:i,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;(0,s.default)(this,e);d(c(n),"`name` must be a string");this._name=n;this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}";d("boolean"===typeof o,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=o;this._isBrowser=l;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,o.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){d("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;d(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,n){"number"===typeof n?t._serverSheet.cssRules[n]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return n},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){d(c(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof r&&(r=n.cssRules.length);try{n.insertRule(t,r)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var s=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,s))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!n.cssRules[t])return t;n.deleteRule(t);try{n.insertRule(r,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");n.insertRule(this._deletedRulePlaceholder,t)}}else{var s=this._tags[t];d(s,"old rule at index `"+t+"` not found");s.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];d(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,n){r&&d(c(r),"makeStyleTag acceps only strings as second parameter");var s=document.createElement("style");s.type="text/css";s.setAttribute("data-"+t,"");r&&s.appendChild(document.createTextNode(r));var i=document.head||document.getElementsByTagName("head")[0];n?i.insertBefore(s,n):i.appendChild(s);return s}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=l;function d(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(37))},3:function(e,t,r){e.exports=r(9)},350:function(e,t,r){e.exports=r(184)},47:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var n=r(0);var s=r.n(n);var i=r(7);var o=r.n(i);var a=r(52);var u=r(51);var e=function e(t,r){var n=Object(i["connect"])(t,u["default"]);var o=n(r);return s.a.createElement(o,null)};t["default"]=function(e){return s.a.createElement(i["Provider"],{store:a["default"]},e.children)}},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(8);t["default"]={logo:n["b"]+"/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}},51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign;t["default"]=function(e){return{setView:function e(t,r){var s=n({},t.store);if("myAccount"==r){s.view=r;s.displayedBooks=s.completedOrders}else{s.view=s.sections[s.selectedSectionIndex].view;s.displayedBooks="orders"==r?s.pendingOrders:[]}return{store:s}},selectSection:function e(t,r){var s=n({},t.store);s.selectedSectionIndex=r;return{store:s}},selectCategory:function e(t,r){var s=n({},t.store);s.selectedCategoryIndex=r;s.displayedBooks=[];s.books.forEach(function(e){if(e.categories.includes(r)){s.displayedBooks.push(e);s.displayedBooks[s.displayedBooks.indexOf(e)].color=s.categories[r].color[1]}});return{store:s}},manageOrders:function e(t,r){var s=n({},t.store);var i=n({},s.displayedBooks[r]);var o=n({},s.pendingOrders[r]);var a=s.pendingOrders.indexOf(i);var u=s.completedOrders.indexOf(i);if("library"==s.view)-1==a||s.pendingOrders[a].color!=i.color?s.pendingOrders.push(i):s.pendingOrders.splice(a,1);else if("orders"==s.view)if(-1==u||s.completedOrders[u].color!=s.pendingOrders[r].color){s.completedOrders.push(s.pendingOrders[r]);s.pendingOrders.splice(r,1)}else s.completedOrders.splice(u,1);else"myAccount"==s.view&&s.completedOrders.splice(r,1);return{store:s}}}}},52:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(6);var s=r(48);t["default"]=Object(n["a"])({store:{logo:s["default"].logo,books:s["default"].books,sections:s["default"].sections,selectedSectionIndex:0,view:s["default"].view,displayedBooks:[],user:s["default"].user,pendingOrders:[],completedOrders:[],categories:s["default"].categories,selectedCategoryIndex:null}})},6:function(e,t,r){"use strict";function n(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],n=0;n<t.length;n++)t[n]===e?e=null:r.push(t[n]);t=r}function s(r,s,i){e=s?r:n(n({},e),r);for(var o=t,a=0;a<o.length;a++)o[a](e,i)}return e=e||{},{action:function(t){function r(e){s(e,!1,t)}return function(){for(var n=arguments,s=[e],i=0;i<arguments.length;i++)s.push(n[i]);var o=t.apply(this,s);null!=o&&(o.then?o.then(r):r(o))}},setState:s,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},7:function(e,t,r){var n=r(0);function s(e,t){for(var r in t)e[r]=t[r];return e}var i={store:function(){}};var o=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);o.childContextTypes=i,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),function(r){function o(i,o){var a=this;n.Component.call(this,i,o);var u=o.store,c=e(u?u.getState():{},i),l=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var n in e)r[n]=t.action(e[n]);return r}(t,u):{store:u},d=function(){var t=e(u?u.getState():{},a.props);for(var r in t)if(t[r]!==c[r])return c=t,a.forceUpdate();for(var n in c)if(!(n in t))return c=t,a.forceUpdate()};this.componentDidMount=function(){d(),u.subscribe(d)},this.componentWillUnmount=function(){u.unsubscribe(d)},this.render=function(){return n.createElement(r,s(s(s({},l),a.props),c))}}return o.contextTypes=i,(o.prototype=Object.create(n.Component.prototype)).constructor=o}},t.Provider=o},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(10);var s=b(n);var i=r(34);var o=b(i);var a=r(24);var u=b(a);var c=r(1);var l=b(c);var d=r(2);var f=b(d);var h=r(25);var p=b(h);var m=r(26);var v=b(m);t.flush=w;var g=r(0);var y=r(16);var _=b(y);function b(e){return e&&e.__esModule?e:{default:e}}var S=new _.default;var k=function(e){(0,v.default)(t,e);function t(){(0,l.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"componentWillMount",value:function e(){S.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){S.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){S.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,o.default)(e,2),r=t[0],n=t[1];return S.computeId(r,n)}).join(" ")}}]);return t}(g.Component);t.default=k;function w(){var e=S.cssRules();S.flush();return new s.default(e)}}},[350]);return{page:e.default}});