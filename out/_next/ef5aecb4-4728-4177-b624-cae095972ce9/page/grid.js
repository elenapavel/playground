module.exports=__NEXT_REGISTER_PAGE("/grid",function(){var e=webpackJsonp([8],{116:function(e,t,r){"use strict";var n=r(117);var o=r(222);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var c=Object.prototype.toString;var l=function(e){return"function"===typeof e&&"[object Function]"===c.call(e)};var i=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var s=Object.defineProperty&&i();var u=function(e,t,r,n){if(t in e&&(!l(n)||!n()))return;s?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var c=n(t);a&&(c=c.concat(Object.getOwnPropertySymbols(t)));o(c,function(n){u(e,n,t[n],r[n])})};f.supportsDescriptors=!!s;e.exports=f},117:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var c=r(221);var l=Object.prototype.propertyIsEnumerable;var i=!l.call({toString:null},"toString");var s=l.call(function(){},"prototype");var u=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var y=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var m=function(e){if("undefined"===typeof window||!y)return f(e);try{return f(e)}catch(e){return false}};var v=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var l=c(t);var f=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!l)throw new TypeError("Object.keys called on a non-object");var y=s&&a;if(f&&t.length>0&&!n.call(t,0))for(var v=0;v<t.length;++v)p.push(String(v));if(l&&t.length>0)for(var b=0;b<t.length;++b)p.push(String(b));else for(var d in t)y&&"prototype"===d||!n.call(t,d)||p.push(String(d));if(i){var h=m(t);for(var g=0;g<u.length;++g)h&&"constructor"===u[g]||!n.call(t,u[g])||p.push(u[g])}return p};v.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return c(t)?r(a.call(t)):r(t)}}}else Object.keys=v;return Object.keys||v};e.exports=v},118:function(e,t,r){"use strict";var n=r(117);var o=r(119);var a=function(e){return"undefined"!==typeof e&&null!==e};var c=r(224)();var l=Object;var i=o.call(Function.call,Array.prototype.push);var s=o.call(Function.call,Object.prototype.propertyIsEnumerable);var u=c?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=l(t);var f,p,y,m,v,b,d;for(f=1;f<arguments.length;++f){p=l(arguments[f]);m=n(p);var h=c&&(Object.getOwnPropertySymbols||u);if(h){v=h(p);for(y=0;y<v.length;++y){d=v[y];s(p,d)&&i(m,d)}}for(y=0;y<m.length;++y){d=m[y];b=p[d];s(p,d)&&(o[d]=b)}}return o}},119:function(e,t,r){"use strict";var n=r(223);e.exports=Function.prototype.bind||n},120:function(e,t,r){"use strict";var n=r(118);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var c in o)a+=c;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},214:function(e,t,r){"use strict";var n=r(1);var o=r.n(n);var a=r(0);var c=r.n(a);var l=r(215);var i=r.n(l);var s=function e(){return c.a.createElement("nav",{className:"jsx-1977621829"},c.a.createElement("ul",{className:"jsx-1977621829"},c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/"},c.a.createElement("a",{className:"jsx-1977621829"},"Home"))),c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/architecture"},c.a.createElement("a",{className:"jsx-1977621829"},"Architecture"))),c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/books"},c.a.createElement("a",{className:"jsx-1977621829"},"Books"))),c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/universe-facts"},c.a.createElement("a",{className:"jsx-1977621829"},"Universe Facts"))),c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/plants"},c.a.createElement("a",{className:"jsx-1977621829"},"Plants"))),c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/responsive-layout"},c.a.createElement("a",{className:"jsx-1977621829"},"Responsive Layout"))),c.a.createElement("li",{className:"jsx-1977621829"},c.a.createElement(i.a,{href:"/grid"},c.a.createElement("a",{className:"jsx-1977621829"},"Grid")))),c.a.createElement(o.a,{styleId:"1977621829",css:["nav.jsx-1977621829{text-align:center;border-bottom:1px solid rgba(255,0,0,0.7);}","ul.jsx-1977621829{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-1977621829>ul.jsx-1977621829{padding:4px 16px;}","li.jsx-1977621829{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}","a.jsx-1977621829{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]}))};t["a"]=s},215:function(e,t,r){e.exports=r(216)},216:function(e,t,r){"use strict";var n=r(44);var o=r(7);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(155));var c=o(r(217));var l=o(r(14));var i=o(r(11));var s=o(r(12));var u=o(r(15));var f=o(r(16));var p=o(r(180));var y=r(177);var m=n(r(0));var v=o(r(48));var b=o(r(219));var d=n(r(103));var h=r(40);var g=function(e){(0,f.default)(t,e);function t(e){var r;var n;(0,i.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];n=(0,u.default)(this,(r=t.__proto__||(0,l.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,s.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!j(o))return;var c=window.location.pathname;o=(0,y.resolve)(c,o);a=a?(0,y.resolve)(c,a):o;t.preventDefault();var l=this.props.scroll;null==l&&(l=a.indexOf("#")<0);var i=this.props.replace;var s=i?"replace":"push";d.default[s](o,a,{shallow:n}).then(function(e){if(!e)return;if(l){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,y.resolve)(t,this.href);d.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,c.default)(this.props.href)!==(0,c.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,y.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,y.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var o=m.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,d._rewriteUrlForNextExport)(a.href));return m.default.cloneElement(o,a)}}]);return t}(m.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,b.default)({href:v.default.oneOfType([v.default.string,v.default.object]).isRequired,as:v.default.oneOfType([v.default.string,v.default.object]),prefetch:v.default.bool,replace:v.default.bool,shallow:v.default.bool,passHref:v.default.bool,scroll:v.default.bool,children:v.default.oneOfType([v.default.element,function(e,t){var r=e[t];"string"===typeof r&&x("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function j(e){var t=(0,y.parse)(e,false,true);var r=(0,y.parse)((0,h.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var x=(0,h.execOnce)(h.warn)},217:function(e,t,r){e.exports=r(218)},218:function(e,t,r){var n=r(9);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},219:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=b;var n=r(220);var o=s(n);var a=r(226);var c=s(a);var l=r(227);var i=s(l);function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var y={};function m(e){return(0,o["default"])(e,u({},p,y))}function v(e){return e&&e[p]===y}function b(e){if(!(0,i["default"])(e))throw new TypeError("given propTypes must be an object");if((0,c["default"])(e,p)&&!v(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,u({},p,m(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,c["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},220:function(e,t,r){"use strict";var n=r(116);var o=r(118);var a=r(120);var c=r(225);var l=a();n(l,{getPolyfill:a,implementation:o,shim:c});e.exports=l},221:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},222:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var c=t.length;if(c===+c)for(var l=0;l<c;l++)o.call(a,t[l],l,t);else for(var i in t)r.call(t,i)&&o.call(a,t[i],i,t)}},223:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var c="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==c)throw new TypeError(n+r);var l=o.call(arguments,1);var i;var s=function(){if(this instanceof i){var e=r.apply(this,l.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,l.concat(o.call(arguments)))};var u=Math.max(0,r.length-l.length);var f=[];for(var p=0;p<u;p++)f.push("$"+p);i=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(s);if(r.prototype){var y=function e(){};y.prototype=r.prototype;i.prototype=new y;y.prototype=null}return i}},224:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var c=Object.getOwnPropertyDescriptor(t,r);if(c.value!==o||true!==c.enumerable)return false}return true}},225:function(e,t,r){"use strict";var n=r(116);var o=r(120);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},226:function(e,t,r){var n=r(119);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},227:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},420:function(e,t,r){e.exports=r(421)},421:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var o=r.n(n);var a=r(0);var c=r.n(a);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function u(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function f(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m={breakPoints:[{point:1024,columns:3,gutters:0},{point:768,columns:2,gutters:0},{point:480,columns:1,gutters:0}],colors:["#d2c0ff","beige","#75ec79","#ec7575","#c4c0ff","#f1dd95","pink","#5bc5a8","#ffefc0","#c0d9ff","#deffc0","#fa8787","#f3dcf5","aliceblue","#d46869"]};var v=function(e){y(t,e);function t(){i(this,t);return f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}u(t,[{key:"render",value:function e(){var t=this.props,r=t.columns,n=t.gutters,a=t.elements,l=t.breakPoints;var i=r||1;var s=n||0;var u=l||m.breakPoints;var f="grid_".concat(i,"cols gutter_").concat(s);var p="";u.forEach(function(e){p+="\n\t\t\t\t\t@media (max-width: ".concat(e.point,"px) {\n\t\t\t\t\t\t.grid_").concat(i,"cols {\n\t\t\t\t\t\t\tmargin-top: -").concat(e.gutters,"px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.gutter_").concat(s," .element {\n\t\t\t\t\t\t\tmargin-left: ").concat(e.gutters,"px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.grid_").concat(i,"cols .element {\n\t\t\t\t\t\t\tflex-basis: calc(\n\t\t\t\t\t\t\t\t").concat(100/e.columns,"% - ").concat(e.gutters*(e.columns-1)/e.columns,"px\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.gutter_").concat(s," .element {\n\t\t\t\t\t\t\tmargin-top: ").concat(e.gutters,"px;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t")});return c.a.createElement("div",{className:o.a.dynamic([["2166855778",[i,m.colors[i-1],i,i,i,s,s,s,i,100/i,s*(i-1)/i,s,s]]])+" container"},c.a.createElement("div",{className:o.a.dynamic([["2166855778",[i,m.colors[i-1],i,i,i,s,s,s,i,100/i,s*(i-1)/i,s,s]]])+" "+(f||"")},a.map(function(e,t){return c.a.createElement("div",{key:t,className:o.a.dynamic([["2166855778",[i,m.colors[i-1],i,i,i,s,s,s,i,100/i,s*(i-1)/i,s,s]]])+" element"},e)})),c.a.createElement(o.a,{styleId:"2166855778",css:[".container.__jsx-style-dynamic-selector{position:relative;overflow:hidden;}",".element.__jsx-style-dynamic-selector{border:1px solid white;background:pink;height:3rem;text-align:center;}",".grid_".concat(i,"cols.__jsx-style-dynamic-selector .element.__jsx-style-dynamic-selector{background:").concat(m.colors[i-1],";}"),".grid_".concat(i,"cols.__jsx-style-dynamic-selector .element.__jsx-style-dynamic-selector:nth-child(").concat(i,"n + 1){margin-left:0;}"),".grid_".concat(i,"cols.__jsx-style-dynamic-selector{margin-top:-").concat(s,"px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"),".gutter_".concat(s,".__jsx-style-dynamic-selector .element.__jsx-style-dynamic-selector{margin-left:").concat(s,"px;}"),".grid_".concat(i,"cols.__jsx-style-dynamic-selector .element.__jsx-style-dynamic-selector{-webkit-flex-basis:calc( ").concat(100/i,"% - ").concat(s*(i-1)/i,"px );-ms-flex-preferred-size:calc( ").concat(100/i,"% - ").concat(s*(i-1)/i,"px );flex-basis:calc( ").concat(100/i,"% - ").concat(s*(i-1)/i,"px );}"),".gutter_".concat(s,".__jsx-style-dynamic-selector .element.__jsx-style-dynamic-selector{margin-top:").concat(s,"px;}")],dynamic:[i,m.colors[i-1],i,i,i,s,s,s,i,100/i,s*(i-1)/i,s,s]}))}}]);return t}(a["Component"]);var b=v;var d=r(214);function h(e){h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return h(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function x(e,t,r){t&&j(e.prototype,t);r&&j(e,r);return e}function w(e,t){if(t&&("object"===h(t)||"function"===typeof t))return t;return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _=function(e){E(t,e);function t(){g(this,t);return w(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}x(t,[{key:"render",value:function e(){var t=["1","2","3","4","5","6","7","8","9","10","11","12"];return c.a.createElement("div",{className:"jsx-2441347179 container"},c.a.createElement(d["a"],null),c.a.createElement(b,{columns:"1",elements:["1"]}),c.a.createElement(b,{columns:"2",elements:["2","2"]}),c.a.createElement(b,{columns:"3",elements:["3","3","3"]}),c.a.createElement(b,{columns:"4",elements:["4","4","4","4"]}),c.a.createElement(b,{columns:"5",elements:["5","5","5","5","5"]}),c.a.createElement(b,{columns:"6",elements:["6","6","6","6","6","6"],breakPoints:[{point:1024,columns:3,gutters:0},{point:768,columns:2,gutters:0},{point:480,columns:1,gutters:0}]}),c.a.createElement(b,{columns:"7",elements:["7","7","7","7","7","7","7"]}),c.a.createElement(b,{columns:"8",elements:["8","8","8","8","8","8","8","8"]}),c.a.createElement(b,{columns:"9",elements:["9","9","9","9","9","9","9","9","9"]}),c.a.createElement(b,{columns:"10",elements:["10","10","10","10","10","10","10","10","10","10"]}),c.a.createElement(b,{columns:"11",elements:["11","11","11","11","11","11","11","11","11","11","11"]}),c.a.createElement(b,{columns:"12",elements:["12","12","12","12","12","12","12","12","12","12","12","12"]}),c.a.createElement(b,{columns:"20",gutters:"50",elements:["12","12","12","12","12","12","12","12","12","12","12","12","12","12","12"]}),c.a.createElement(b,{columns:"4",gutters:"40",elements:["1","2","3","4"]}),c.a.createElement(b,{columns:"2",gutters:"60",elements:["1","2"]}),c.a.createElement(b,{columns:"7",gutters:"20",elements:["1","2","3","4","5","6","7"]}),c.a.createElement(b,{elements:["1"]}),c.a.createElement(b,{columns:"3",gutters:"10",elements:["1","2","3"]}),c.a.createElement(b,{columns:"10",gutters:"30",elements:["1","2","3","4","5","6","7","8","9","10"]}),c.a.createElement(o.a,{styleId:"2441347179",css:["body{margin:0;overflow-x:hidden;}","*{box-sizing:border-box;}",".container.jsx-2441347179{position:relative;}"]}))}}]);return t}(a["Component"]);var k=t["default"]=function(){return c.a.createElement(_,null)}}},[420]);return{page:e.default}});