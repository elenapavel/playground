module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([7],{116:function(e,t,r){"use strict";var n=r(117);var a=r(222);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var l=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===l.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var u=Object.defineProperty&&c();var s=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;u?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var l=n(t);o&&(l=l.concat(Object.getOwnPropertySymbols(t)));a(l,function(n){s(e,n,t[n],r[n])})};f.supportsDescriptors=!!u;e.exports=f},117:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var l=r(221);var i=Object.prototype.propertyIsEnumerable;var c=!i.call({toString:null},"toString");var u=i.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return f(e);try{return f(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var i=l(t);var f=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var v=u&&o;if(f&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(i&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var h in t)v&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(c){var m=y(t);for(var j=0;j<s.length;++j)m&&"constructor"===s[j]||!n.call(t,s[j])||p.push(s[j])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return l(t)?r(o.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},118:function(e,t,r){"use strict";var n=r(117);var a=r(119);var o=function(e){return"undefined"!==typeof e&&null!==e};var l=r(224)();var i=Object;var c=a.call(Function.call,Array.prototype.push);var u=a.call(Function.call,Object.prototype.propertyIsEnumerable);var s=l?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=i(t);var f,p,v,y,b,d,h;for(f=1;f<arguments.length;++f){p=i(arguments[f]);y=n(p);var m=l&&(Object.getOwnPropertySymbols||s);if(m){b=m(p);for(v=0;v<b.length;++v){h=b[v];u(p,h)&&c(y,h)}}for(v=0;v<y.length;++v){h=y[v];d=p[h];u(p,h)&&(a[h]=d)}}return a}},119:function(e,t,r){"use strict";var n=r(223);e.exports=Function.prototype.bind||n},120:function(e,t,r){"use strict";var n=r(118);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var l in a)o+=l;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},214:function(e,t,r){"use strict";var n=r(1);var a=r.n(n);var o=r(0);var l=r.n(o);var i=r(215);var c=r.n(i);var u=function e(){return l.a.createElement("nav",{className:"jsx-1977621829"},l.a.createElement("ul",{className:"jsx-1977621829"},l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/"},l.a.createElement("a",{className:"jsx-1977621829"},"Home"))),l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/architecture"},l.a.createElement("a",{className:"jsx-1977621829"},"Architecture"))),l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/books"},l.a.createElement("a",{className:"jsx-1977621829"},"Books"))),l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/universe-facts"},l.a.createElement("a",{className:"jsx-1977621829"},"Universe Facts"))),l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/plants"},l.a.createElement("a",{className:"jsx-1977621829"},"Plants"))),l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/responsive-layout"},l.a.createElement("a",{className:"jsx-1977621829"},"Responsive Layout"))),l.a.createElement("li",{className:"jsx-1977621829"},l.a.createElement(c.a,{href:"/grid"},l.a.createElement("a",{className:"jsx-1977621829"},"Grid")))),l.a.createElement(a.a,{styleId:"1977621829",css:["nav.jsx-1977621829{text-align:center;border-bottom:1px solid rgba(255,0,0,0.7);}","ul.jsx-1977621829{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}","nav.jsx-1977621829>ul.jsx-1977621829{padding:4px 16px;}","li.jsx-1977621829{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}","a.jsx-1977621829{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]}))};t["a"]=u},215:function(e,t,r){e.exports=r(216)},216:function(e,t,r){"use strict";var n=r(44);var a=r(7);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(155));var l=a(r(217));var i=a(r(14));var c=a(r(11));var u=a(r(12));var s=a(r(15));var f=a(r(16));var p=a(r(180));var v=r(177);var y=n(r(0));var b=a(r(48));var d=a(r(219));var h=n(r(103));var m=r(40);var j=function(e){(0,f.default)(t,e);function t(e){var r;var n;(0,c.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];n=(0,s.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,u.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!g(a))return;var l=window.location.pathname;a=(0,v.resolve)(l,a);o=o?(0,v.resolve)(l,o):a;t.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var c=this.props.replace;var u=c?"replace":"push";h.default[u](a,o,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,l.default)(this.props.href)!==(0,l.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var a=y.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,h._rewriteUrlForNextExport)(o.href));return y.default.cloneElement(a,o)}}]);return t}(y.Component);t.default=j;Object.defineProperty(j,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&O("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function g(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var O=(0,m.execOnce)(m.warn)},217:function(e,t,r){e.exports=r(218)},218:function(e,t,r){var n=r(9);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},219:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(220);var a=u(n);var o=r(226);var l=u(o);var i=r(227);var c=u(i);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var v={};function y(e){return(0,a["default"])(e,s({},p,v))}function b(e){return e&&e[p]===v}function d(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,l["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,s({},p,y(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,l["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},220:function(e,t,r){"use strict";var n=r(116);var a=r(118);var o=r(120);var l=r(225);var i=o();n(i,{getPolyfill:o,implementation:a,shim:l});e.exports=i},221:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},222:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var l=t.length;if(l===+l)for(var i=0;i<l;i++)a.call(o,t[i],i,t);else for(var c in t)r.call(t,c)&&a.call(o,t[c],c,t)}},223:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var l="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==l)throw new TypeError(n+r);var i=a.call(arguments,1);var c;var u=function(){if(this instanceof c){var e=r.apply(this,i.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(a.call(arguments)))};var s=Math.max(0,r.length-i.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);c=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(u);if(r.prototype){var v=function e(){};v.prototype=r.prototype;c.prototype=new v;v.prototype=null}return c}},224:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==a||true!==l.enumerable)return false}return true}},225:function(e,t,r){"use strict";var n=r(116);var a=r(120);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},226:function(e,t,r){var n=r(119);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},227:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},422:function(e,t,r){e.exports=r(423)},423:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(214);t["default"]=function(){return a.a.createElement("div",null,a.a.createElement(o["a"],null))}}},[422]);return{page:e.default}});