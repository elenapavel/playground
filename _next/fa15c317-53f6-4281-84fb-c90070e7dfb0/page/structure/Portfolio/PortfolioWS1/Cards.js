module.exports=__NEXT_REGISTER_PAGE("/structure/Portfolio/PortfolioWS1/Cards",function(){var e=webpackJsonp([52],{11:function(e,t,r){e.exports=r(17)},17:function(e,t,r){"use strict";var n=r(66);var o=r(31);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(71));var u=o(r(18));var i=o(r(37));var l=o(r(35));var c=o(r(36));var f=o(r(38));var s=o(r(39));var p=o(r(74));var v=r(73);var y=n(r(0));var b=o(r(67));var d=o(r(20));var h=n(r(69));var g=r(65);var m=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,l.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];n=(0,f.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var u=window.location.pathname;o=(0,v.resolve)(u,o);a=a?(0,v.resolve)(u,a):o;t.preventDefault();var i=this.props.scroll;null==i&&(i=a.indexOf("#")<0);var l=this.props.replace;var c=l?"replace":"push";h.default[c](o,a,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,h._rewriteUrlForNextExport)(a.href));return y.default.cloneElement(o,a)}}]);return t}(y.Component);t.default=m;Object.defineProperty(m,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,g.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,g.execOnce)(g.warn)},179:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(11);var u=r.n(a);var i=r(32);var l=r(274);var c=r.n(l);t["default"]=function(e){var t=e.cards;return o.a.createElement("b",{className:c.a.cards},t.map(function(e,t){return o.a.createElement("b",{className:c.a.card,key:t},o.a.createElement(u.a,{href:e.link},o.a.createElement("a",null,o.a.createElement("b",{className:c.a.card_image,style:{backgroundImage:"url(".concat(e.image,")")}}),o.a.createElement("b",{className:c.a.card_content},o.a.createElement(i["a"],{title:e.title}),o.a.createElement("b",{className:c.a.card_headline},e.headline)))))}))}},18:function(e,t,r){e.exports=r(19)},19:function(e,t,r){var n=r(2);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},20:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(21);var o=c(n);var a=r(27);var u=c(a);var i=r(28);var l=c(i);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,o["default"])(e,f({},p,v))}function b(e){return e&&e[p]===v}function d(e){if(!(0,l["default"])(e))throw new TypeError("given propTypes must be an object");if((0,u["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,f({},p,y(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,u["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},21:function(e,t,r){"use strict";var n=r(3);var o=r(5);var a=r(7);var u=r(26);var i=a();n(i,{getPolyfill:a,implementation:o,shim:u});e.exports=i},22:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},23:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var u=t.length;if(u===+u)for(var i=0;i<u;i++)o.call(a,t[i],i,t);else for(var l in t)r.call(t,l)&&o.call(a,t[l],l,t)}},24:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var u="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==u)throw new TypeError(n+r);var i=o.call(arguments,1);var l;var c=function(){if(this instanceof l){var e=r.apply(this,i.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(o.call(arguments)))};var f=Math.max(0,r.length-i.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;l.prototype=new v;v.prototype=null}return l}},25:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var u=Object.getOwnPropertyDescriptor(t,r);if(u.value!==o||true!==u.enumerable)return false}return true}},26:function(e,t,r){"use strict";var n=r(3);var o=r(7);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},27:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},28:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var o=r(23);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var u=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===u.call(e)};var l=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&l();var f=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var u=n(t);a&&(u=u.concat(Object.getOwnPropertySymbols(t)));o(u,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},32:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(97);var u=r.n(a);t["a"]=function(e){var t=e.title;return o.a.createElement("b",{className:u.a.title},t)}},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var u=r(22);var i=Object.prototype.propertyIsEnumerable;var l=!i.call({toString:null},"toString");var c=i.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var i=u(t);var s=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!i)throw new TypeError("Object.keys called on a non-object");var v=c&&a;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(i&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var h in t)v&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(l){var g=y(t);for(var m=0;m<f.length;++m)g&&"constructor"===f[m]||!n.call(t,f[m])||p.push(f[m])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return u(t)?r(a.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var o=r(6);var a=function(e){return"undefined"!==typeof e&&null!==e};var u=r(25)();var i=Object;var l=o.call(Function.call,Array.prototype.push);var c=o.call(Function.call,Object.prototype.propertyIsEnumerable);var f=u?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=i(t);var s,p,v,y,b,d,h;for(s=1;s<arguments.length;++s){p=i(arguments[s]);y=n(p);var g=u&&(Object.getOwnPropertySymbols||f);if(g){b=g(p);for(v=0;v<b.length;++v){h=b[v];c(p,h)&&l(y,h)}}for(v=0;v<y.length;++v){h=y[v];d=p[h];c(p,h)&&(o[h]=d)}}return o}},6:function(e,t,r){"use strict";var n=r(24);e.exports=Function.prototype.bind||n},612:function(e,t,r){e.exports=r(179)},7:function(e,t,r){"use strict";var n=r(5);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var u in o)a+=u;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}}},[612]);return{page:e.default}});