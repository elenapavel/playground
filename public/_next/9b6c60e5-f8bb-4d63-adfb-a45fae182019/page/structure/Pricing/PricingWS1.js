module.exports=__NEXT_REGISTER_PAGE("/structure/Pricing/PricingWS1",function(){var e=webpackJsonp([54],{12:function(e,t,r){"use strict";var n=r(38);var o=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(44));var i=o(r(13));var u=o(r(32));var l=o(r(28));var c=o(r(29));var f=o(r(33));var s=o(r(34));var p=o(r(46));var y=r(45);var v=n(r(0));var b=o(r(40));var d=o(r(15));var h=n(r(43));var m=r(36);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,l.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];n=(0,f.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var i=window.location.pathname;o=(0,y.resolve)(i,o);a=a?(0,y.resolve)(i,a):o;t.preventDefault();var u=this.props.scroll;null==u&&(u=a.indexOf("#")<0);var l=this.props.replace;var c=l?"replace":"push";h.default[c](o,a,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,y.resolve)(t,this.href);h.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,y.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,y.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=v.default.createElement("a",null,t));var o=v.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,h._rewriteUrlForNextExport)(a.href));return v.default.cloneElement(o,a)}}]);return t}(v.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,d.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,y.parse)(e,false,true);var r=(0,y.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,m.execOnce)(m.warn)},13:function(e,t,r){e.exports=r(14)},14:function(e,t,r){var n=r(9);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},15:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(16);var o=c(n);var a=r(22);var i=c(a);var u=r(23);var l=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var y={};function v(e){return(0,o["default"])(e,f({},p,y))}function b(e){return e&&e[p]===y}function d(e){if(!(0,l["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,f({},p,v(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(336);var i=r.n(a);t["default"]=function(e){var t=e.label,r=e.onSelect;return o.a.createElement("b",{className:i.a.register,onClick:function e(){return r()}},t||"Register")}},16:function(e,t,r){"use strict";var n=r(3);var o=r(5);var a=r(7);var i=r(21);var u=a();n(u,{getPolyfill:a,implementation:o,shim:i});e.exports=u},17:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},18:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var u=0;u<i;u++)o.call(a,t[u],u,t);else for(var l in t)r.call(t,l)&&o.call(a,t[l],l,t)}},19:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==i)throw new TypeError(n+r);var u=o.call(arguments,1);var l;var c=function(){if(this instanceof l){var e=r.apply(this,u.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(o.call(arguments)))};var f=Math.max(0,r.length-u.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var y=function e(){};y.prototype=r.prototype;l.prototype=new y;y.prototype=null}return l}},20:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==o||true!==i.enumerable)return false}return true}},21:function(e,t,r){"use strict";var n=r(3);var o=r(7);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},22:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},23:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(8);var i=r.n(a);var u=r(159);var l=r(389);var c=r.n(l);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function y(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function v(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return d(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){b(t,e);function t(){var e;var r,n;s(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return v(n,(r=n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(d(n),"state",{configurable:true,enumerable:true,writable:true,value:{isSelected:false}}),r))}y(t,[{key:"toggleSelect",value:function e(){var t=this.props,r=t.onSelect,n=t.index;this.setState({isSelected:!this.state.isSelected});"function"===typeof r&&r(n)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.label,a=r.description,l=r.price,f=r.link;var s=this.state.isSelected;var p=s?c.a.card_expanded:c.a.card_collapsed;return o.a.createElement("b",{className:p,onClick:function e(){return t.toggleSelect()}},o.a.createElement("b",{className:c.a.label},n),o.a.createElement("b",{className:c.a.icon}),o.a.createElement("b",{className:c.a.description},a),o.a.createElement("b",{className:c.a.price},l),o.a.createElement("b",{className:c.a.action},o.a.createElement(i.a,{href:f},o.a.createElement("a",null,o.a.createElement(u["default"],{label:"Get plan"})))))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.isSelected=t.isSelected;return r}}]);return t}(n["Component"]);t["default"]=h},240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={heading:"Pricing table",cards:[{label:"Personal",description:"Buying this plan can help you improve your company with some features we provide",price:"Free",link:"#"},{label:"Professional",description:"Buying this plan can help you improve your company with multiple features we provide",price:"$89",link:"#"},{label:"Corporate",description:"Buying this plan can help you improve your company with all the features we provide",price:"$149",link:"#"}]}},3:function(e,t,r){"use strict";var n=r(4);var o=r(18);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var l=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&l();var f=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));o(i,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},335:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(239);var i=r(240);var u=r(472);var l=r.n(u);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function y(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return b(e)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){v(t,e);function t(){var e;var r,n;f(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return y(n,(r=n=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(b(n),"state",{configurable:true,enumerable:true,writable:true,value:{selectedCard:null}}),r))}p(t,[{key:"onSelectPlan",value:function e(t){this.setState({selectedCard:this.state.selectedCard==t?null:t})}},{key:"render",value:function e(){var t=this;var r=this.props.heading;var n=this.state.selectedCard;return o.a.createElement("b",{className:l.a.section},o.a.createElement("b",{className:l.a.heading},i["default"].heading),o.a.createElement("b",{className:l.a.plans},i["default"].cards.map(function(e,r){return o.a.createElement("b",{className:l.a.item,key:r},o.a.createElement(a["default"],{label:e.label,description:e.description,price:e.price,link:e.link,index:r,isSelected:n==r,onSelect:function e(r){return t.onSelectPlan(r)}}))})))}}]);return t}(n["Component"]);t["default"]=d},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var i=r(17);var u=Object.prototype.propertyIsEnumerable;var l=!u.call({toString:null},"toString");var c=u.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var y=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var v=function(e){if("undefined"===typeof window||!y)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var u=i(t);var s=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!u)throw new TypeError("Object.keys called on a non-object");var y=c&&a;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(u&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var h in t)y&&"prototype"===h||!n.call(t,h)||p.push(String(h));if(l){var m=v(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(a.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var o=r(6);var a=function(e){return"undefined"!==typeof e&&null!==e};var i=r(20)();var u=Object;var l=o.call(Function.call,Array.prototype.push);var c=o.call(Function.call,Object.prototype.propertyIsEnumerable);var f=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=u(t);var s,p,y,v,b,d,h;for(s=1;s<arguments.length;++s){p=u(arguments[s]);v=n(p);var m=i&&(Object.getOwnPropertySymbols||f);if(m){b=m(p);for(y=0;y<b.length;++y){h=b[y];c(p,h)&&l(v,h)}}for(y=0;y<v.length;++y){h=v[y];d=p[h];c(p,h)&&(o[h]=d)}}return o}},6:function(e,t,r){"use strict";var n=r(19);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var i in o)a+=i;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},8:function(e,t,r){e.exports=r(12)},801:function(e,t,r){e.exports=r(335)}},[801]);return{page:e.default}});