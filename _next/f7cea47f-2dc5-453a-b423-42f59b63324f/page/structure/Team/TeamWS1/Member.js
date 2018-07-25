module.exports=__NEXT_REGISTER_PAGE("/structure/Team/TeamWS1/Member",function(){var e=webpackJsonp([59],{13:function(e,t,r){"use strict";var n=r(39);var o=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(44));var i=o(r(14));var l=o(r(33));var u=o(r(29));var c=o(r(30));var f=o(r(34));var s=o(r(35));var p=o(r(46));var v=r(45);var y=n(r(0));var b=o(r(41));var h=o(r(16));var d=n(r(43));var m=r(38);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,u.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];n=(0,f.default)(this,(r=t.__proto__||(0,l.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var i=window.location.pathname;o=(0,v.resolve)(i,o);a=a?(0,v.resolve)(i,a):o;t.preventDefault();var l=this.props.scroll;null==l&&(l=a.indexOf("#")<0);var u=this.props.replace;var c=u?"replace":"push";d.default[c](o,a,{shallow:n}).then(function(e){if(!e)return;if(l){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);d.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,d._rewriteUrlForNextExport)(a.href));return y.default.cloneElement(o,a)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,h.default)({href:b.default.oneOfType([b.default.string,b.default.object]).isRequired,as:b.default.oneOfType([b.default.string,b.default.object]),prefetch:b.default.bool,replace:b.default.bool,shallow:b.default.bool,passHref:b.default.bool,scroll:b.default.bool,children:b.default.oneOfType([b.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,m.execOnce)(m.warn)},135:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(238);var i=r.n(a);t["default"]=function(e){var t=e.text,r=e.position;if(null!=t){var n=null;switch(r){case"bottom":n="".concat(i.a.tooltip_arrow_bottom);break;case"left":n="".concat(i.a.tooltip_arrow_left);break;case"right":n="".concat(i.a.tooltip_arrow_right);break;default:n="".concat(i.a.tooltip_arrow_top)}return o.a.createElement("b",{className:i.a.tooltip},t,o.a.createElement("b",{className:n}))}return null}},14:function(e,t,r){e.exports=r(15)},15:function(e,t,r){var n=r(8);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(9);var i=r.n(a);var l=r(135);var u=r(326);var c=r.n(u);function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function v(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function y(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return h(e)}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){b(t,e);function t(){var e;var r,n;s(this,t);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return y(n,(r=n=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),Object.defineProperty(h(n),"state",{configurable:true,enumerable:true,writable:true,value:{elementWithVisibleTooltip:null}}),r))}v(t,[{key:"isTooltipVisible",value:function e(t){this.setState({elementWithVisibleTooltip:t})}},{key:"isTooltipHidden",value:function e(){this.setState({elementWithVisibleTooltip:null})}},{key:"render",value:function e(){var t=this;var r=this.props.items;var n=this.state.elementWithVisibleTooltip;var a=Object.keys(r);return o.a.createElement("b",{className:c.a.items},a.map(function(e,u){var f=null;switch(e){case"facebook":f="ion-social-facebook";break;case"twitter":f="ion-social-twitter";break;case"googlePlus":f="ion-social-googleplus";break;case"instagram":f="ion-social-instagram-outline";break;default:f=u}if("number"===typeof f){var s="".concat(c.a.error_icon," ion-help");var p="".concat(c.a.error_tooltip_hidden);null!=n&&(p="".concat(c.a.error_tooltip_visible));return o.a.createElement("b",{className:c.a.error,key:u,onMouseEnter:function e(){return t.isTooltipVisible(u)},onMouseLeave:function e(){return t.isTooltipHidden()}},o.a.createElement("b",{className:s}),o.a.createElement("b",{className:p},o.a.createElement(l["default"],{text:"Icon for ".concat(a[f]," not found")})))}return o.a.createElement("b",{className:c.a.item,key:u},o.a.createElement(i.a,{href:r[e]},o.a.createElement("a",null,o.a.createElement("b",{className:f}))))}))}}]);return t}(n["Component"]);t["default"]=d},16:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(17);var o=c(n);var a=r(23);var i=c(a);var l=r(24);var u=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,o["default"])(e,f({},p,v))}function b(e){return e&&e[p]===v}function h(e){if(!(0,u["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!b(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,f({},p,y(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},17:function(e,t,r){"use strict";var n=r(3);var o=r(5);var a=r(7);var i=r(22);var l=a();n(l,{getPolyfill:a,implementation:o,shim:i});e.exports=l},18:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},19:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var l=0;l<i;l++)o.call(a,t[l],l,t);else for(var u in t)r.call(t,u)&&o.call(a,t[u],u,t)}},20:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==i)throw new TypeError(n+r);var l=o.call(arguments,1);var u;var c=function(){if(this instanceof u){var e=r.apply(this,l.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,l.concat(o.call(arguments)))};var f=Math.max(0,r.length-l.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);u=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;u.prototype=new v;v.prototype=null}return u}},21:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==o||true!==i.enumerable)return false}return true}},22:function(e,t,r){"use strict";var n=r(3);var o=r(7);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(159);var i=r(374);var l=r.n(i);function u(e){u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return u(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function s(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function p(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=function(e){y(t,e);function t(){c(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}s(t,[{key:"selectMemberByIndex",value:function e(t){"function"===typeof this.props.onSelect&&this.props.onSelect(t)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.avatar,i=r.name,u=r.position,c=r.description,f=r.socialMedia,s=r.index,p=r.onSelect,v=r.areDetailsVisible;var y="".concat(v?l.a.member_expanded:l.a.member_collapsed);return o.a.createElement("b",{className:y,onClick:function e(){return t.selectMemberByIndex(s)}},o.a.createElement("b",{className:l.a.avatar,style:{backgroundImage:"url(".concat(n,")")}}),o.a.createElement("b",{className:l.a.details},o.a.createElement("b",{className:l.a.heading},i),o.a.createElement("b",{className:l.a.position},u),o.a.createElement("b",{className:l.a.description},c),o.a.createElement("b",{className:l.a.social_media},o.a.createElement(a["default"],{items:f}))))}}]);return t}(n["Component"]);t["default"]=b},23:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},24:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},3:function(e,t,r){"use strict";var n=r(4);var o=r(19);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var l=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var u=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&u();var f=function(e,t,r,n){if(t in e&&(!l(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));o(i,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var i=r(18);var l=Object.prototype.propertyIsEnumerable;var u=!l.call({toString:null},"toString");var c=l.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var b=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var l=i(t);var s=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!l)throw new TypeError("Object.keys called on a non-object");var v=c&&a;if(s&&t.length>0&&!n.call(t,0))for(var b=0;b<t.length;++b)p.push(String(b));if(l&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var d in t)v&&"prototype"===d||!n.call(t,d)||p.push(String(d));if(u){var m=y(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};b.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(a.call(t)):r(t)}}}else Object.keys=b;return Object.keys||b};e.exports=b},5:function(e,t,r){"use strict";var n=r(4);var o=r(6);var a=function(e){return"undefined"!==typeof e&&null!==e};var i=r(21)();var l=Object;var u=o.call(Function.call,Array.prototype.push);var c=o.call(Function.call,Object.prototype.propertyIsEnumerable);var f=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=l(t);var s,p,v,y,b,h,d;for(s=1;s<arguments.length;++s){p=l(arguments[s]);y=n(p);var m=i&&(Object.getOwnPropertySymbols||f);if(m){b=m(p);for(v=0;v<b.length;++v){d=b[v];c(p,d)&&u(y,d)}}for(v=0;v<y.length;++v){d=y[v];h=p[d];c(p,d)&&(o[d]=h)}}return o}},6:function(e,t,r){"use strict";var n=r(20);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var i in o)a+=i;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},784:function(e,t,r){e.exports=r(229)},9:function(e,t,r){e.exports=r(13)}},[784]);return{page:e.default}});