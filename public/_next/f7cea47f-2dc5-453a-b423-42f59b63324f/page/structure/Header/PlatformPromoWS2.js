module.exports=__NEXT_REGISTER_PAGE("/structure/Header/PlatformPromoWS2",function(){var e=webpackJsonp([35],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r.d(t,"b",function(){return c});var n=r(2);var a=r.n(n);var o=a()(),u=o.publicRuntimeConfig;var i=u.base;var l=u.url;var c=u.static},13:function(e,t,r){"use strict";var n=r(39);var a=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(44));var u=a(r(14));var i=a(r(33));var l=a(r(29));var c=a(r(30));var f=a(r(34));var s=a(r(35));var p=a(r(46));var v=r(45);var y=n(r(0));var b=a(r(41));var d=a(r(16));var m=n(r(43));var h=r(38);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,l.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),u=1;u<a;u++)o[u-1]=arguments[u];n=(0,f.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!O(a))return;var u=window.location.pathname;a=(0,v.resolve)(u,a);o=o?(0,v.resolve)(u,o):a;t.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var l=this.props.replace;var c=l?"replace":"push";m.default[c](a,o,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);m.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var a=y.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,m._rewriteUrlForNextExport)(o.href));return y.default.cloneElement(a,o)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,h.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,h.execOnce)(h.warn)},14:function(e,t,r){e.exports=r(15)},15:function(e,t,r){var n=r(8);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},155:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(319);var u=r.n(o);t["default"]=function(e){var t=e.image;return a.a.createElement("b",{className:u.a.logo},a.a.createElement("img",{src:t}))}},156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(9);var u=r.n(o);var i=r(320);var l=r.n(i);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function v(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return b(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){y(t,e);function t(){var e;var r,n;f(this,t);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return v(n,(r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(b(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false}}),r))}p(t,[{key:"toggleMenu",value:function e(){this.setState({isMenuOpened:!this.state.isMenuOpened});"function"===typeof this.props.onChange&&this.props.onChange(!this.state.isMenuOpened)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.items,o=r.toggleMenu;var i=this.state.isMenuOpened;var c="".concat(l.a.menu_icon," ion-navicon");var f="".concat(i?l.a.menu_expanded:l.a.menu_collapsed);return a.a.createElement("b",{className:l.a.menu},a.a.createElement("b",{className:c,onClick:function e(){return t.toggleMenu()}}),a.a.createElement("b",{className:f},n.map(function(e,t){return a.a.createElement("b",{className:l.a.item,key:t},a.a.createElement(u.a,{href:e.link},a.a.createElement("a",null,e.name)))})))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.isMenuOpened=t.isMenuOpened;return r}}]);return t}(n["Component"]);t["default"]=d},157:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(321);var u=r.n(o);t["default"]=function(e){var t=e.text,r=e.onSelect;return a.a.createElement("b",{className:u.a.register,onClick:function e(){return r()}},t||"Register")}},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={logo:"".concat(n["b"],"/images/dropbox_logo.png"),items:[{link:n["a"]+"#",name:"Menu one"},{link:n["a"]+"#",name:"Menu two"},{link:n["a"]+"#",name:"Menu three"},{link:n["a"]+"#",name:"Menu four"}]}},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(17);var a=c(n);var o=r(23);var u=c(o);var i=r(24);var l=c(i);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,a["default"])(e,f({},p,v))}function b(e){return e&&e[p]===v}function d(e){if(!(0,l["default"])(e))throw new TypeError("given propTypes must be an object");if((0,u["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,f({},p,y(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,u["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var a=r(5);var o=r(7);var u=r(22);var i=o();n(i,{getPolyfill:o,implementation:a,shim:u});e.exports=i},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var u=t.length;if(u===+u)for(var i=0;i<u;i++)a.call(o,t[i],i,t);else for(var l in t)r.call(t,l)&&a.call(o,t[l],l,t)}},2:function(e,t,r){e.exports=r(12)},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var u="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==u)throw new TypeError(n+r);var i=a.call(arguments,1);var l;var c=function(){if(this instanceof l){var e=r.apply(this,i.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(a.call(arguments)))};var f=Math.max(0,r.length-i.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;l.prototype=new v;v.prototype=null}return l}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var u=Object.getOwnPropertyDescriptor(t,r);if(u.value!==a||true!==u.enumerable)return false}return true}},22:function(e,t,r){"use strict";var n=r(3);var a=r(7);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(369);var u=r.n(o);t["default"]=function(e){var t=e.text,r=e.onSelect;return a.a.createElement("b",{className:u.a.register,onClick:function e(){return r()}},t||"Register")}},221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(155);var u=r(156);var i=r(157);var l=r(158);var c=r(370);var f=r.n(c);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function y(e,t,r){t&&v(e.prototype,t);r&&v(e,r);return e}function b(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return m(e)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){d(t,e);function t(){var e;var r,n;p(this,t);for(var a=arguments.length,o=new Array(a),u=0;u<a;u++)o[u]=arguments[u];return b(n,(r=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(m(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false}}),r))}y(t,[{key:"toggleMenu",value:function e(t){this.setState({isMenuOpened:!this.state.isMenuOpened})}},{key:"render",value:function e(){var t=this;var r=this.state.isMenuOpened;return a.a.createElement("b",{className:f.a.platform_promo},a.a.createElement("b",{className:f.a.header},a.a.createElement("b",{className:f.a.logo},a.a.createElement(o["default"],{image:l["default"].logo})),a.a.createElement("b",{className:f.a.to_right},a.a.createElement("b",{className:f.a.register},a.a.createElement(i["default"],null)),a.a.createElement("b",{className:f.a.menu},a.a.createElement(u["default"],{isMenuOpened:r,items:l["default"].items,onChange:function e(r){return t.toggleMenu(r)}})))))}}]);return t}(n["Component"]);t["default"]=h},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={heading:"Section Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",preview:"".concat(n["b"],"/images/planets/Saturn.jpeg")}},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var a=r(19);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var u=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===u.call(e)};var l=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&l();var f=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var u=n(t);o&&(u=u.concat(Object.getOwnPropertySymbols(t)));a(u,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},318:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(220);var u=r(221);var i=r(222);var l=r(453);var c=r.n(l);t["default"]=function(e){var t=e.heading;return a.a.createElement("b",{className:c.a.platform_promo},a.a.createElement(u["default"],null),a.a.createElement("b",{className:c.a.promo_section},a.a.createElement("b",{className:c.a.to_left},a.a.createElement("b",{className:c.a.heading},t||i["default"].heading),a.a.createElement("b",{className:c.a.description},i["default"].description),a.a.createElement("i",{className:c.a.register_action},a.a.createElement(o["default"],null))),a.a.createElement("b",{className:c.a.to_right},a.a.createElement("b",{className:c.a.preview,style:{backgroundImage:"url(".concat(i["default"].preview,")")}}))))}},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var u=r(18);var i=Object.prototype.propertyIsEnumerable;var l=!i.call({toString:null},"toString");var c=i.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var i=u(t);var s=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var v=c&&o;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(i&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var m in t)v&&"prototype"===m||!n.call(t,m)||p.push(String(m));if(l){var h=y(t);for(var g=0;g<f.length;++g)h&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return u(t)?r(o.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var a=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var u=r(21)();var i=Object;var l=a.call(Function.call,Array.prototype.push);var c=a.call(Function.call,Object.prototype.propertyIsEnumerable);var f=u?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=i(t);var s,p,v,y,b,d,m;for(s=1;s<arguments.length;++s){p=i(arguments[s]);y=n(p);var h=u&&(Object.getOwnPropertySymbols||f);if(h){b=h(p);for(v=0;v<b.length;++v){m=b[v];c(p,m)&&l(y,m)}}for(v=0;v<y.length;++v){m=y[v];d=p[m];c(p,m)&&(a[m]=d)}}return a}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var u in a)o+=u;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},761:function(e,t,r){e.exports=r(318)},9:function(e,t,r){e.exports=r(13)}},[761]);return{page:e.default}});