module.exports=__NEXT_REGISTER_PAGE("/structure/Header/HeaderWS1",function(){var e=webpackJsonp([54],{112:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(184);var u=r.n(a);t["a"]=function(e){var t=e.image;return o.a.createElement("b",{className:u.a.logo},o.a.createElement("img",{src:t}))}},113:function(e,t,r){"use strict";var n=r(0);var o=r.n(n);var a=r(8);var u=r.n(a);var i=r(185);var c=r.n(i);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function v(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return b(e)}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=function(e){y(t,e);function t(){var e;var r,n;f(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return v(n,(r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(b(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false}}),r))}p(t,[{key:"toggleMenu",value:function e(){this.setState({isMenuOpened:!this.state.isMenuOpened});"function"===typeof this.props.onChange&&this.props.onChange(!this.state.isMenuOpened)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.items,a=r.toggleMenu;var i=this.state.isMenuOpened;var l="".concat(c.a.menu_icon," ion-navicon");var f="".concat(i?c.a.menu_expanded:c.a.menu_collapsed);return o.a.createElement("b",{className:c.a.menu},o.a.createElement("b",{className:l,onClick:function e(){return t.toggleMenu()}}),o.a.createElement("b",{className:f},n.map(function(e,t){return o.a.createElement("b",{className:c.a.item,key:t},o.a.createElement(u.a,{href:e.link},o.a.createElement("a",null,e.name)))})))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.isMenuOpened=t.isMenuOpened;return r}}]);return t}(n["Component"]);t["a"]=m},13:function(e,t,r){"use strict";var n=r(42);var o=r(29);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(70));var u=o(r(14));var i=o(r(37));var c=o(r(30));var l=o(r(31));var f=o(r(38));var s=o(r(39));var p=o(r(72));var v=r(71);var y=n(r(0));var b=o(r(43));var m=o(r(16));var h=n(r(69));var d=r(41);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,c.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];n=(0,f.default)(this,(r=t.__proto__||(0,i.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,l.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var u=window.location.pathname;o=(0,v.resolve)(u,o);a=a?(0,v.resolve)(u,a):o;t.preventDefault();var i=this.props.scroll;null==i&&(i=a.indexOf("#")<0);var c=this.props.replace;var l=c?"replace":"push";h.default[l](o,a,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,h._rewriteUrlForNextExport)(a.href));return y.default.cloneElement(o,a)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,m.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&w("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,d.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var w=(0,d.execOnce)(d.warn)},14:function(e,t,r){e.exports=r(15)},15:function(e,t,r){var n=r(2);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=m;var n=r(17);var o=l(n);var a=r(23);var u=l(a);var i=r(24);var c=l(i);function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,o["default"])(e,f({},p,v))}function b(e){return e&&e[p]===v}function m(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,u["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,f({},p,y(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,u["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var o=r(5);var a=r(7);var u=r(22);var i=a();n(i,{getPolyfill:a,implementation:o,shim:u});e.exports=i},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var u=t.length;if(u===+u)for(var i=0;i<u;i++)o.call(a,t[i],i,t);else for(var c in t)r.call(t,c)&&o.call(a,t[c],c,t)}},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var u="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==u)throw new TypeError(n+r);var i=o.call(arguments,1);var c;var l=function(){if(this instanceof c){var e=r.apply(this,i.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(o.call(arguments)))};var f=Math.max(0,r.length-i.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);c=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(l);if(r.prototype){var v=function e(){};v.prototype=r.prototype;c.prototype=new v;v.prototype=null}return c}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var u=Object.getOwnPropertyDescriptor(t,r);if(u.value!==o||true!==u.enumerable)return false}return true}},22:function(e,t,r){"use strict";var n=r(3);var o=r(7);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},265:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(1);var u=r(112);var i=r(113);var c=r(8);var l=r.n(c);var f=r(377);var s=r.n(f);var p=function(e){var t=e.items;return o.a.createElement("b",{className:s.a.menu},t.map(function(e,t){return o.a.createElement("b",{className:s.a.item,key:t},o.a.createElement(l.a,{href:e.link},o.a.createElement("a",null,e.name)))}))};var v=r(378);var y=r.n(v);function b(e){b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return b(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&h(e.prototype,t);r&&h(e,r);return e}function g(e,t){if(t&&("object"===b(t)||"function"===typeof t))return t;return w(e)}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j=function(e){O(t,e);function t(){var e;var r,n;m(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return g(n,(r=n=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(w(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false}}),r))}d(t,[{key:"toggleMenu",value:function e(){this.setState({isMenuOpened:!this.state.isMenuOpened});"function"===typeof this.props.onChange&&this.props.onChange(!this.state.isMenuOpened)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.user,a=r.items;var u=this.state.isMenuOpened;var i=u?y.a.menu_expanded:y.a.menu_collapsed;var c="".concat(y.a.dropdown_icon," ").concat(u?"ion-arrow-up-b":"ion-arrow-down-b");return o.a.createElement("b",{className:y.a.account},o.a.createElement("b",{className:y.a.avatar},o.a.createElement("img",{src:n.avatar}),o.a.createElement("b",{className:y.a.notification})),o.a.createElement("b",{className:y.a.account_menu,onClick:function e(){return t.toggleMenu()}},o.a.createElement("b",{className:y.a.user},n.name),o.a.createElement("b",{className:c})),o.a.createElement("b",{className:i},o.a.createElement(p,{items:a})))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.isMenuOpened=t.isMenuOpened;return r}}]);return t}(n["Component"]);var E=j;var S=r(379);var _=r.n(S);function k(e){k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return k(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function M(e,t,r){t&&x(e.prototype,t);r&&x(e,r);return e}function T(e,t){if(t&&("object"===k(t)||"function"===typeof t))return t;return A(e)}function N(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var $=[{link:a["a"]+"/",name:"Item 1"},{link:a["a"]+"/",name:"Item 2"},{link:a["a"]+"/",name:"Item 3"},{link:a["a"]+"/",name:"Item 4"}];var C=[{link:a["a"]+"/",name:"Account Item 1"},{link:a["a"]+"/",name:"Account Item 2"},{link:a["a"]+"/",name:"Account Item 3"}];var F=function(e){N(t,e);function t(){var e;var r,n;P(this,t);for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return T(n,(r=n=T(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(A(n),"state",{configurable:true,enumerable:true,writable:true,value:{isMenuOpened:false,isAccountMenuOpened:false}}),r))}M(t,[{key:"toggleMenu",value:function e(t){this.setState({isMenuOpened:t,isAccountMenuOpened:false})}},{key:"toggleAccountMenu",value:function e(t){this.setState({isAccountMenuOpened:t,isMenuOpened:false})}},{key:"render",value:function e(){var t=this;var r=this.state,n=r.isMenuOpened,c=r.isAccountMenuOpened;var l="".concat(a["b"],"/images/dropbox_logo.png");var f={avatar:"".concat(a["b"],"/images/user.svg"),name:"User"};return o.a.createElement("b",{className:_.a.header},o.a.createElement("b",{className:_.a.logo},o.a.createElement(u["a"],{image:l})),o.a.createElement("b",{className:_.a.account},o.a.createElement(E,{isMenuOpened:c,user:f,items:C,onChange:function e(r){return t.toggleAccountMenu(r)}})),o.a.createElement("b",{className:_.a.menu},o.a.createElement(i["a"],{isMenuOpened:n,items:$,onChange:function e(r){return t.toggleMenu(r)}})))}}]);return t}(n["PureComponent"]);var I=t["default"]=F},3:function(e,t,r){"use strict";var n=r(4);var o=r(19);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var u=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===u.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var l=Object.defineProperty&&c();var f=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;l?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var u=n(t);a&&(u=u.concat(Object.getOwnPropertySymbols(t)));o(u,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!l;e.exports=s},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var u=r(18);var i=Object.prototype.propertyIsEnumerable;var c=!i.call({toString:null},"toString");var l=i.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var i=u(t);var s=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!i)throw new TypeError("Object.keys called on a non-object");var v=l&&a;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(i&&t.length>0)for(var m=0;m<t.length;++m)p.push(String(m));else for(var h in t)v&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(c){var d=y(t);for(var g=0;g<f.length;++g)d&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return u(t)?r(a.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var o=r(6);var a=function(e){return"undefined"!==typeof e&&null!==e};var u=r(21)();var i=Object;var c=o.call(Function.call,Array.prototype.push);var l=o.call(Function.call,Object.prototype.propertyIsEnumerable);var f=u?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=i(t);var s,p,v,y,b,m,h;for(s=1;s<arguments.length;++s){p=i(arguments[s]);y=n(p);var d=u&&(Object.getOwnPropertySymbols||f);if(d){b=d(p);for(v=0;v<b.length;++v){h=b[v];l(p,h)&&c(y,h)}}for(v=0;v<y.length;++v){h=y[v];m=p[h];l(p,h)&&(o[h]=m)}}return o}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},650:function(e,t,r){e.exports=r(265)},7:function(e,t,r){"use strict";var n=r(5);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var u in o)a+=u;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},8:function(e,t,r){e.exports=r(13)}},[650]);return{page:e.default}});