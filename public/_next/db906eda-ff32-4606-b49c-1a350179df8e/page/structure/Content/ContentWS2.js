module.exports=__NEXT_REGISTER_PAGE("/structure/Content/ContentWS2",function(){var e=webpackJsonp([48],{10:function(e,t,r){"use strict";var n=r(11);var o=r(56);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var l=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&l();var f=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));o(i,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},11:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var i=r(55);var u=Object.prototype.propertyIsEnumerable;var l=!u.call({toString:null},"toString");var c=u.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var d=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var u=i(t);var s=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!u)throw new TypeError("Object.keys called on a non-object");var v=c&&a;if(s&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)p.push(String(d));if(u&&t.length>0)for(var b=0;b<t.length;++b)p.push(String(b));else for(var h in t)v&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(l){var g=y(t);for(var m=0;m<f.length;++m)g&&"constructor"===f[m]||!n.call(t,f[m])||p.push(f[m])}return p};d.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(a.call(t)):r(t)}}}else Object.keys=d;return Object.keys||d};e.exports=d},12:function(e,t,r){"use strict";var n=r(11);var o=r(13);var a=function(e){return"undefined"!==typeof e&&null!==e};var i=r(58)();var u=Object;var l=o.call(Function.call,Array.prototype.push);var c=o.call(Function.call,Object.prototype.propertyIsEnumerable);var f=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=u(t);var s,p,v,y,d,b,h;for(s=1;s<arguments.length;++s){p=u(arguments[s]);y=n(p);var g=i&&(Object.getOwnPropertySymbols||f);if(g){d=g(p);for(v=0;v<d.length;++v){h=d[v];c(p,h)&&l(y,h)}}for(v=0;v<y.length;++v){h=y[v];b=p[h];c(p,h)&&(o[h]=b)}}return o}},13:function(e,t,r){"use strict";var n=r(57);e.exports=Function.prototype.bind||n},14:function(e,t,r){"use strict";var n=r(12);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var i in o)a+=i;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},20:function(e,t,r){e.exports=r(50)},209:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(20);var i=r.n(a);var u=r(2);var l=r(298);var c=r.n(l);var f={previewImage:"".concat(u["b"],"/images/planets/Saturn.jpeg"),title:"Lorem ipsum",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\t\t\t\t\tNulla imperdiet ante sed orci efficitur interdum quis eu\n\t\t\t\t\tneque.",readMoreText:"Learn More",readMoreLink:"/"};t["default"]=function(){var e="".concat(c.a.read_more_icon," ion-ios-arrow-right");return o.a.createElement("b",{className:c.a.section},o.a.createElement("b",{className:c.a.content},o.a.createElement("b",{className:c.a.title},f.title),o.a.createElement("b",{className:c.a.headline},f.headline),o.a.createElement("b",{className:c.a.read_more_action},o.a.createElement(i.a,{href:f.readMoreLink},o.a.createElement("a",null,f.readMoreText,o.a.createElement("i",{className:e}))))),o.a.createElement("b",{className:c.a.preview_image,style:{backgroundImage:"url(".concat(f.previewImage,")")}}))}},50:function(e,t,r){"use strict";var n=r(68);var o=r(21);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(91));var i=o(r(51));var u=o(r(62));var l=o(r(46));var c=o(r(47));var f=o(r(63));var s=o(r(64));var p=o(r(93));var v=r(92);var y=n(r(0));var d=o(r(70));var b=o(r(53));var h=n(r(89));var g=r(67);var m=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,l.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var i=window.location.pathname;o=(0,v.resolve)(i,o);a=a?(0,v.resolve)(i,a):o;t.preventDefault();var u=this.props.scroll;null==u&&(u=a.indexOf("#")<0);var l=this.props.replace;var c=l?"replace":"push";h.default[c](o,a,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,h._rewriteUrlForNextExport)(a.href));return y.default.cloneElement(o,a)}}]);return t}(y.Component);t.default=m;Object.defineProperty(m,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,b.default)({href:d.default.oneOfType([d.default.string,d.default.object]).isRequired,as:d.default.oneOfType([d.default.string,d.default.object]),prefetch:d.default.bool,replace:d.default.bool,shallow:d.default.bool,passHref:d.default.bool,scroll:d.default.bool,children:d.default.oneOfType([d.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,g.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,g.execOnce)(g.warn)},51:function(e,t,r){e.exports=r(52)},52:function(e,t,r){var n=r(1);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},53:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=b;var n=r(54);var o=c(n);var a=r(60);var i=c(a);var u=r(61);var l=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,o["default"])(e,f({},p,v))}function d(e){return e&&e[p]===v}function b(e){if(!(0,l["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!d(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,f({},p,y(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},531:function(e,t,r){e.exports=r(209)},54:function(e,t,r){"use strict";var n=r(10);var o=r(12);var a=r(14);var i=r(59);var u=a();n(u,{getPolyfill:a,implementation:o,shim:i});e.exports=u},55:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},56:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var u=0;u<i;u++)o.call(a,t[u],u,t);else for(var l in t)r.call(t,l)&&o.call(a,t[l],l,t)}},57:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==i)throw new TypeError(n+r);var u=o.call(arguments,1);var l;var c=function(){if(this instanceof l){var e=r.apply(this,u.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(o.call(arguments)))};var f=Math.max(0,r.length-u.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;l.prototype=new v;v.prototype=null}return l}},58:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==o||true!==i.enumerable)return false}return true}},59:function(e,t,r){"use strict";var n=r(10);var o=r(14);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},60:function(e,t,r){var n=r(13);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},61:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]}},[531]);return{page:e.default}});