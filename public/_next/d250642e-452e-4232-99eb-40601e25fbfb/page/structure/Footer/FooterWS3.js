module.exports=__NEXT_REGISTER_PAGE("/structure/Footer/FooterWS3",function(){var e=webpackJsonp([64],{12:function(e,t,r){"use strict";var n=r(38);var a=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(44));var l=a(r(13));var u=a(r(32));var i=a(r(28));var c=a(r(29));var f=a(r(33));var s=a(r(34));var p=a(r(46));var v=r(45);var y=n(r(0));var b=a(r(40));var d=a(r(15));var h=n(r(43));var m=r(36);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,i.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!O(a))return;var l=window.location.pathname;a=(0,v.resolve)(l,a);o=o?(0,v.resolve)(l,o):a;t.preventDefault();var u=this.props.scroll;null==u&&(u=o.indexOf("#")<0);var i=this.props.replace;var c=i?"replace":"push";h.default[c](a,o,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,l.default)(this.props.href)!==(0,l.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var a=y.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,h._rewriteUrlForNextExport)(o.href));return y.default.cloneElement(a,o)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,m.execOnce)(m.warn)},13:function(e,t,r){e.exports=r(14)},14:function(e,t,r){var n=r(9);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},15:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(16);var a=c(n);var o=r(22);var l=c(o);var u=r(23);var i=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,a["default"])(e,f({},p,v))}function b(e){return e&&e[p]===v}function d(e){if(!(0,i["default"])(e))throw new TypeError("given propTypes must be an object");if((0,l["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,f({},p,y(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,l["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},16:function(e,t,r){"use strict";var n=r(3);var a=r(5);var o=r(7);var l=r(21);var u=o();n(u,{getPolyfill:o,implementation:a,shim:l});e.exports=u},17:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},18:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var l=t.length;if(l===+l)for(var u=0;u<l;u++)a.call(o,t[u],u,t);else for(var i in t)r.call(t,i)&&a.call(o,t[i],i,t)}},19:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var l="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==l)throw new TypeError(n+r);var u=a.call(arguments,1);var i;var c=function(){if(this instanceof i){var e=r.apply(this,u.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(a.call(arguments)))};var f=Math.max(0,r.length-u.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);i=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;i.prototype=new v;v.prototype=null}return i}},20:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==a||true!==l.enumerable)return false}return true}},21:function(e,t,r){"use strict";var n=r(3);var a=r(7);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},212:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={menu:[{link:"#",name:"Item 1"},{link:"#",name:"Item 2"},{link:"#",name:"Item 3"},{link:"#",name:"Item 4"}],copyright:"© GreatSimple.co 2019. All right reserved.",getPlatform:{text:"Download our app",link:"#"}}},22:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},23:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var a=r(18);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var l=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===l.call(e)};var i=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&i();var f=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var l=n(t);o&&(l=l.concat(Object.getOwnPropertySymbols(t)));a(l,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},314:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(8);var l=r.n(o);var u=r(212);var i=r(454);var c=r.n(i);t["default"]=function(){return a.a.createElement("b",{className:c.a.section},a.a.createElement("b",{className:c.a.content},a.a.createElement("b",{className:c.a.to_left},u["default"].menu.length?a.a.createElement("b",{className:c.a.menu},u["default"].menu.map(function(e,t){return a.a.createElement("b",{className:c.a.item,key:t},a.a.createElement(l.a,{href:e.link},a.a.createElement("a",null,e.name)))})):null),a.a.createElement("b",{className:c.a.to_right},a.a.createElement("b",{className:c.a.get_platform},a.a.createElement(l.a,{href:u["default"].getPlatform.link},a.a.createElement("a",null,a.a.createElement("b",{className:c.a.get_platform_text},u["default"].getPlatform.text,a.a.createElement("i",{className:c.a.platform_preview})))))),a.a.createElement("b",{className:c.a.separator}),a.a.createElement("b",{className:c.a.to_bottom},a.a.createElement("b",{className:c.a.copyright},u["default"].copyright))))}},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var l=r(17);var u=Object.prototype.propertyIsEnumerable;var i=!u.call({toString:null},"toString");var c=u.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var u=l(t);var s=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!u)throw new TypeError("Object.keys called on a non-object");var v=c&&o;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(u&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var h in t)v&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(i){var m=y(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return l(t)?r(o.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var a=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var l=r(20)();var u=Object;var i=a.call(Function.call,Array.prototype.push);var c=a.call(Function.call,Object.prototype.propertyIsEnumerable);var f=l?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=u(t);var s,p,v,y,b,d,h;for(s=1;s<arguments.length;++s){p=u(arguments[s]);y=n(p);var m=l&&(Object.getOwnPropertySymbols||f);if(m){b=m(p);for(v=0;v<b.length;++v){h=b[v];c(p,h)&&i(y,h)}}for(v=0;v<y.length;++v){h=y[v];d=p[h];c(p,h)&&(a[h]=d)}}return a}},6:function(e,t,r){"use strict";var n=r(19);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var l in a)o+=l;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},750:function(e,t,r){e.exports=r(314)},8:function(e,t,r){e.exports=r(12)}},[750]);return{page:e.default}});