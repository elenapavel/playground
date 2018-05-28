module.exports=__NEXT_REGISTER_PAGE("/architecture/Content/Progress",function(){var e=webpackJsonp([12],{10:function(e,t,r){e.exports={default:r(11),__esModule:true}},11:function(e,t,r){r(33);r(27);r(30);r(12);r(13);r(14);r(15);e.exports=r(5).Map},117:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var o=r.n(n);var i=r(0);var s=r.n(i);var a=r(96);var u=r(64);var l=r.n(u);var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){f(t,e);function t(){d(this,t);return h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,[{key:"render",value:function e(){var t=this.props,r=t.index,n=t.total;var i=parseInt(r)+1<10?"0"+(parseInt(r)+1):parseInt(r)+1;var u=parseInt(n)<10?"0"+parseInt(n):parseInt(n);return s.a.createElement("div",{className:o.a.dynamic([["2832563136",[(r+1)*(100/n)]]])+" "+(l.a.progress_container||"")},s.a.createElement("div",{className:o.a.dynamic([["2832563136",[(r+1)*(100/n)]]])+" to_left"},s.a.createElement(a["default"],null)),s.a.createElement("div",{className:o.a.dynamic([["2832563136",[(r+1)*(100/n)]]])+" "+(l.a.progress_to_right||"")},i," / ",u,"."),s.a.createElement("div",{className:o.a.dynamic([["2832563136",[(r+1)*(100/n)]]])+" progress_bar"}),s.a.createElement(o.a,{styleId:"2832563136",css:[".progress_bar.__jsx-style-dynamic-selector{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;border-bottom:3px solid #adadad;position:relative;margin:1.5rem 0;}",'.progress_bar.__jsx-style-dynamic-selector:after{content:"";position:absolute;top:0;bottom:0;left:0;right:0;width:'+(r+1)*(100/n)+"%;height:3px;background-color:#696969;}"],dynamic:[(r+1)*(100/n)]}))}}]);return t}(i["Component"]);t["default"]=p},12:function(e,t,r){"use strict";var n=r(38);var o=r(35);var i="Map";e.exports=r(39)(i,function(e){return function t(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function e(t){var r=n.getEntry(o(this,i),t);return r&&r.v},set:function e(t,r){return n.def(o(this,i),0===t?0:t,r)}},n,true)},13:function(e,t,r){var n=r(23);n(n.P+n.R,"Map",{toJSON:r(40)("Map")})},14:function(e,t,r){r(41)("Map")},15:function(e,t,r){r(42)("Map")},16:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(17);var o=f(n);var i=r(1);var s=f(i);var a=r(2);var u=f(a);var l=r(20);var c=f(l);var d=r(21);var h=f(d);function f(e){return e&&e.__esModule?e:{default:e}}var p=function e(t){return t.replace(/\/style/gi,"\\/style")};var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,i=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!==typeof window:a;(0,s.default)(this,e);this._sheet=n||new h.default({name:"styled-jsx",optimizeForSpeed:i});this._sheet.inject();if(n&&"boolean"===typeof i){this._sheet.setOptimizeForSpeed(i);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}this._isBrowser=u;this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}(0,u.default)(e,[{key:"add",value:function e(t){var r=this;if(void 0===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(t.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0,o.default)(this._fromServer).reduce(function(e,t){e[t]=0;return e},{})}var n=this.getIdAndRules(t),i=n.styleId,s=n.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var a=s.map(function(e){return r._sheet.insertRule(e)}).filter(function(e){return-1!==e});if(a.length>0){this._indices[i]=a;this._instancesCounts[i]=1}}},{key:"remove",value:function e(t){var r=this;var n=this.getIdAndRules(t),o=n.styleId;m(o in this._instancesCounts,"styleId: `"+o+"` not found");this._instancesCounts[o]-=1;if(this._instancesCounts[o]<1){var i=this._fromServer&&this._fromServer[o];if(i){i.parentNode.removeChild(i);delete this._fromServer[o]}else{this._indices[o].forEach(function(e){return r._sheet.deleteRule(e)});delete this._indices[o]}delete this._instancesCounts[o]}}},{key:"update",value:function e(t,r){this.add(r);this.remove(t)}},{key:"flush",value:function e(){this._sheet.flush();this._sheet.inject();this._fromServer=void 0;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function e(){var t=this;var r=this._fromServer?(0,o.default)(this._fromServer).map(function(e){return[e,t._fromServer[e]]}):[];var e=this._sheet.cssRules();return r.concat((0,o.default)(this._indices).map(function(r){return[r,t._indices[r].map(function(t){return e[t].cssText}).join("\n")]}))}},{key:"createComputeId",value:function e(){var t={};return function(e,r){if(!r)return"jsx-"+e;var n=String(r);var o=e+n;t[o]||(t[o]="jsx-"+(0,c.default)(e+"-"+n));return t[o]}}},{key:"createComputeSelector",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g;var r={};return function(e,n){this._isBrowser||(n=p(n));var o=e+n;r[o]||(r[o]=n.replace(t,e));return r[o]}}},{key:"getIdAndRules",value:function e(t){var r=this;if(t.dynamic){var n=this.computeId(t.styleId,t.dynamic);return{styleId:n,rules:Array.isArray(t.css)?t.css.map(function(e){return r.computeSelector(n,e)}):[this.computeSelector(n,t.css)]}}return{styleId:this.computeId(t.styleId),rules:Array.isArray(t.css)?t.css:[t.css]}}},{key:"selectFromServer",value:function e(){var t=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return t.reduce(function(e,t){var r=t.id.slice(2);e[r]=t;return e},{})}}]);return e}();t.default=v;function m(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}},17:function(e,t,r){e.exports={default:r(18),__esModule:true}},18:function(e,t,r){r(19);e.exports=r(5).Object.keys},19:function(e,t,r){var n=r(28);var o=r(31);r(36)("keys",function(){return function e(t){return o(n(t))}})},20:function(e,t,r){"use strict";function n(e){var t=5381,r=e.length;while(r)t=33*t^e.charCodeAt(--r);return t>>>0}e.exports=n},21:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var o=a(n);var i=r(2);var s=a(i);function a(e){return e&&e.__esModule?e:{default:e}}var u=e.env&&true;var l=function e(t){return"[object String]"===Object.prototype.toString.call(t)};var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,n=void 0===r?"stylesheet":r,i=t.optimizeForSpeed,s=void 0===i?u:i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;(0,o.default)(this,e);d(l(n),"`name` must be a string");this._name=n;this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}";d("boolean"===typeof s,"`optimizeForSpeed` must be a boolean");this._optimizeForSpeed=s;this._isBrowser=c;this._serverSheet=void 0;this._tags=[];this._injected=false;this._rulesCount=0}(0,s.default)(e,[{key:"setOptimizeForSpeed",value:function e(t){d("boolean"===typeof t,"`setOptimizeForSpeed` accepts a boolean");d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted");this.flush();this._optimizeForSpeed=t;this.inject()}},{key:"isOptimizeForSpeed",value:function e(){return this._optimizeForSpeed}},{key:"inject",value:function e(){var t=this;d(!this._injected,"sheet already injected");this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed="insertRule"in this.getSheet();if(!this._optimizeForSpeed){u||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.");this.flush();this._injected=true}return}this._serverSheet={cssRules:[],insertRule:function e(r,n){"number"===typeof n?t._serverSheet.cssRules[n]={cssText:r}:t._serverSheet.cssRules.push({cssText:r});return n},deleteRule:function e(r){t._serverSheet.cssRules[r]=null}}}},{key:"getSheetForTag",value:function e(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}},{key:"getSheet",value:function e(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function e(t,r){d(l(t),"`insertRule` accepts only strings");if(!this._isBrowser){"number"!==typeof r&&(r=this._serverSheet.cssRules.length);this._serverSheet.insertRule(t,r);return this._rulesCount++}if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof r&&(r=n.cssRules.length);try{n.insertRule(t,r)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info");return-1}}else{var o=this._tags[r];this._tags.push(this.makeStyleTag(this._name,t,o))}return this._rulesCount++}},{key:"replaceRule",value:function e(t,r){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;r.trim()||(r=this._deletedRulePlaceholder);if(!n.cssRules[t])return t;n.deleteRule(t);try{n.insertRule(r,t)}catch(e){u||console.warn("StyleSheet: illegal rule: \n\n"+r+"\n\nSee https://stackoverflow.com/q/20007992 for more info");n.insertRule(this._deletedRulePlaceholder,t)}}else{var o=this._tags[t];d(o,"old rule at index `"+t+"` not found");o.textContent=r}return t}},{key:"deleteRule",value:function e(t){if(!this._isBrowser){this._serverSheet.deleteRule(t);return}if(this._optimizeForSpeed)this.replaceRule(t,"");else{var r=this._tags[t];d(r,"rule at index `"+t+"` not found");r.parentNode.removeChild(r);this._tags[t]=null}}},{key:"flush",value:function e(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)});this._tags=[]}else this._serverSheet.cssRules=[]}},{key:"cssRules",value:function e(){var t=this;if(!this._isBrowser)return this._serverSheet.cssRules;return this._tags.reduce(function(e,r){r?e=e.concat(t.getSheetForTag(r).cssRules.map(function(e){return e.cssText===t._deletedRulePlaceholder?null:e})):e.push(null);return e},[])}},{key:"makeStyleTag",value:function e(t,r,n){r&&d(l(r),"makeStyleTag acceps only strings as second parameter");var o=document.createElement("style");o.type="text/css";o.setAttribute("data-"+t,"");r&&o.appendChild(document.createTextNode(r));var i=document.head||document.getElementsByTagName("head")[0];n?i.insertBefore(o,n):i.appendChild(o);return o}},{key:"length",get:function e(){return this._rulesCount}}]);return e}();t.default=c;function d(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}}).call(t,r(37))},3:function(e,t,r){e.exports=r(9)},328:function(e,t,r){e.exports=r(117)},55:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(8);t["default"]={logo:n["b"]+"/images/architecture_logo.png",quote:"Your daily dose of art, design and architecture curation.",categories:[{label:"Argentina"},{label:"China"},{label:"Slovenia"}],articles:[{title:"Equestrian House",date:"29.04.2018",category:"Argentina",image:n["b"]+"/images/equestrian_house.jpg",content:["Equestrian House is a holiday residence located in Costa Esmeralda, a picturesque stretch of coastline 250 miles (400 kilometres) south of Buenos Aires.","The concrete – which is textured by the imprints of wooden boards and is a popular aesthetic in Argentina – forms the roof, floor and interior walls of the single-storey house. Meanwhile, the exterior walls are made of wood, glass and a metal structure.","Vertical concrete fins between the roof and the floor bolster the wall structure, and extend out in front of large windows placed to make the most of forested views. Blackened pine wood clads the rear to provide privacy from neighbours."],more:"https://www.dezeen.com/2018/04/29/equestrian-house-luciano-kruk-board-marked-concrete-holiday-home-argentina-blackened-wood/",extras:{title:"Luciano Kruk combines blackened wood with concrete",content:"Kruk designed the latest house for a couple with two children, who asked him to use less concrete than previous designs in order to build it cheaply and quickly."}},{title:"Garden chapel",date:"09.10.2014",category:"China",image:n["b"]+"/images/garden_chapel.jpg",content:["Dark shingles cover this roof, which folds back on itself to give the square-planned building two corners that pitch sharply upwards and two that dip down.","A cross tops the 12-metre peak on the west facade, while a second low-level pitched roof nestled in the dip gives height to the church hall beneath.","Below the roof, a double-layered facade consists of solid white walls, screened behind a semi-transparent wooden skin.","'The exterior wood strips and asphalt shingles are left in their natural colour, emphasising the importance of nature,' said the architects."],more:"https://www.dezeen.com/2014/10/09/nanjing-wanjing-garden-chapel-azl-architects/",extras:{title:"This chapel features semi-transparent walls and a butterfly roof",content:"The building's most noticeable feature is its profile – a variation on the typical butterfly roof, an inverted structure that rises at its edges rather that at its centre."}},{title:"Open-air chapel",date:"29.04.2018",category:"Slovenia",image:n["b"]+"/images/open_air_chapel.jpg",content:["Over recent years the village has gradually transformed from a small rural settlement into a suburb for commuters working in the nearby town.","Skorba's organic expansion altered the historic clustered street plan, and left the village without a defined centre or space for public meeting and events.","A decision to create a new chapel in the village prompted Skorba's inhabitants to consider creating a multipurpose space that could also fulfil the functions of a traditional public square."],more:"https://www.dezeen.com/2018/04/29/sloping-concrete-volumes-enclose-social-hub-chapel-in-slovenian-village-architecture/",extras:{title:"Sloping concrete volumes in Slovenian village",content:"The concrete structure is positioned centrally on the vacant plot and is partially embedded in a grassy bank. A narrow path extends across the grass to connect the main functional area with the adjacent road."}}]}},6:function(e,t,r){"use strict";function n(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],n=0;n<t.length;n++)t[n]===e?e=null:r.push(t[n]);t=r}function o(r,o,i){e=o?r:n(n({},e),r);for(var s=t,a=0;a<s.length;a++)s[a](e,i)}return e=e||{},{action:function(t){function r(e){o(e,!1,t)}return function(){for(var n=arguments,o=[e],i=0;i<arguments.length;i++)o.push(n[i]);var s=t.apply(this,o);null!=s&&(s.then?s.then(r):r(s))}},setState:o,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},61:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign;t["default"]=function(e){return{selectArticleIndex:function e(t,r){var o=n({},t.portfolio);o.lastSelectedArticleIndex=o.selectedArticleIndex;o.selectedArticleIndex=r;o.selectedCategoryLabel=o.articles[r].category;return{portfolio:o}},selectArticleByCategoryIndex:function e(t,r){var o=n({},t.portfolio);o.articles.forEach(function(e,t){if(e.category==o.categories[r].label){o.lastSelectedArticleIndex=o.selectedArticleIndex;o.selectedArticleIndex=t;o.selectedCategoryLabel=o.categories[r].label}});return{portfolio:o}}}}},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var n=r(0);var o=r.n(n);var i=r(7);var s=r.n(i);var a=r(63);var u=r(61);var e=function e(t,r){var n=Object(i["connect"])(t,u["default"]);var s=n(r);return o.a.createElement(s,null)};t["default"]=function(e){return o.a.createElement(i["Provider"],{store:a["default"]},e.children)}},63:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(6);var o=r(55);t["default"]=Object(n["a"])({portfolio:{logo:o["default"].logo,quote:o["default"].quote,categories:o["default"].categories,articles:o["default"].articles,selectedArticleIndex:0,selectedCategoryLabel:"Argentina",lastSelectedArticleIndex:null}})},7:function(e,t,r){var n=r(0);function o(e,t){for(var r in t)e[r]=t[r];return e}var i={store:function(){}};var s=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);s.childContextTypes=i,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),function(r){function s(i,s){var a=this;n.Component.call(this,i,s);var u=s.store,l=e(u?u.getState():{},i),c=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var n in e)r[n]=t.action(e[n]);return r}(t,u):{store:u},d=function(){var t=e(u?u.getState():{},a.props);for(var r in t)if(t[r]!==l[r])return l=t,a.forceUpdate();for(var n in l)if(!(n in t))return l=t,a.forceUpdate()};this.componentDidMount=function(){d(),u.subscribe(d)},this.componentWillUnmount=function(){u.unsubscribe(d)},this.render=function(){return n.createElement(r,o(o(o({},c),a.props),l))}}return s.contextTypes=i,(s.prototype=Object.create(n.Component.prototype)).constructor=s}},t.Provider=s},9:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(10);var o=b(n);var i=r(34);var s=b(i);var a=r(24);var u=b(a);var l=r(1);var c=b(l);var d=r(2);var h=b(d);var f=r(25);var p=b(f);var v=r(26);var m=b(v);t.flush=k;var _=r(0);var y=r(16);var g=b(y);function b(e){return e&&e.__esModule?e:{default:e}}var S=new g.default;var w=function(e){(0,m.default)(t,e);function t(){(0,c.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}(0,h.default)(t,[{key:"componentWillMount",value:function e(){S.add(this.props)}},{key:"shouldComponentUpdate",value:function e(t){return this.props.css!==t.css}},{key:"componentWillUpdate",value:function e(t){S.update(this.props,t)}},{key:"componentWillUnmount",value:function e(){S.remove(this.props)}},{key:"render",value:function e(){return null}}],[{key:"dynamic",value:function e(t){return t.map(function(e){var t=(0,s.default)(e,2),r=t[0],n=t[1];return S.computeId(r,n)}).join(" ")}}]);return t}(_.Component);t.default=w;function k(){var e=S.cssRules();S.flush();return new o.default(e)}},96:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var i=r(62);var s=r(64);var a=r.n(s);var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=function(e){d(t,e);function t(){l(this,t);return c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,[{key:"render",value:function e(){return Object(i["module"])("portfolio",function(e){var t=e.portfolio,r=e.selectArticleIndex;var n=t.selectedArticleIndex,i=t.articles;return o.a.createElement("div",{className:a.a.actions_container},0==n?null:o.a.createElement("div",{className:a.a.action,onClick:function e(){return r(n-1)}},"Previous"),n==i.length-1?null:o.a.createElement("div",{className:a.a.action,onClick:function e(){return r(n+1)}},"Next"))})}}]);return t}(n["Component"]);t["default"]=h}},[328]);return{page:e.default}});