module.exports=__NEXT_REGISTER_PAGE("/structure/Team",function(){var e=webpackJsonp([27],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return u});r.d(t,"b",function(){return c});r.d(t,"c",function(){return s});var n=r(2);var a=r.n(n);var o=a()(),i=o.publicRuntimeConfig;var u=i.base;var l=i.url;var c=i.static.default;var s=i.static.structure},12:function(e,t,r){"use strict";var n=r(38);var a=r(27);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var o=a(r(44));var i=a(r(13));var u=a(r(32));var l=a(r(28));var c=a(r(29));var s=a(r(33));var f=a(r(34));var p=a(r(46));var b=r(45);var m=n(r(0));var v=a(r(40));var y=a(r(15));var d=n(r(43));var h=r(36);var g=function(e){(0,f.default)(t,e);function t(e){var r;var n;(0,l.default)(this,t);for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];n=(0,s.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(o)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!O(a))return;var i=window.location.pathname;a=(0,b.resolve)(i,a);o=o?(0,b.resolve)(i,o):a;t.preventDefault();var u=this.props.scroll;null==u&&(u=o.indexOf("#")<0);var l=this.props.replace;var c=l?"replace":"push";d.default[c](a,o,{shallow:n}).then(function(e){if(!e)return;if(u){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,b.resolve)(t,this.href);d.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,b.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,b.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var a=m.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,d._rewriteUrlForNextExport)(o.href));return m.default.cloneElement(a,o)}}]);return t}(m.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,y.default)({href:v.default.oneOfType([v.default.string,v.default.object]).isRequired,as:v.default.oneOfType([v.default.string,v.default.object]),prefetch:v.default.bool,replace:v.default.bool,shallow:v.default.bool,passHref:v.default.bool,scroll:v.default.bool,children:v.default.oneOfType([v.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,b.parse)(e,false,true);var r=(0,b.parse)((0,h.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,h.execOnce)(h.warn)},13:function(e,t,r){e.exports=r(14)},133:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(243);var i=r.n(o);t["default"]=function(e){var t=e.text,r=e.position;if(null!=t){var n=null;switch(r){case"bottom":n="".concat(i.a.tooltip_arrow_bottom);break;case"left":n="".concat(i.a.tooltip_arrow_left);break;case"right":n="".concat(i.a.tooltip_arrow_right);break;default:n="".concat(i.a.tooltip_arrow_top)}return a.a.createElement("b",{className:i.a.tooltip},t,a.a.createElement("b",{className:n}))}return null}},14:function(e,t,r){var n=r(9);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},15:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=y;var n=r(16);var a=c(n);var o=r(22);var i=c(o);var u=r(23);var l=c(u);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var b={};function m(e){return(0,a["default"])(e,s({},p,b))}function v(e){return e&&e[p]===b}function y(e){if(!(0,l["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!v(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,s({},p,m(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},158:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(8);var i=r.n(o);var u=r(133);var l=r(333);var c=r.n(l);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function b(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function m(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return y(e)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){v(t,e);function t(){var e;var r,n;f(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return m(n,(r=n=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(y(n),"state",{configurable:true,enumerable:true,writable:true,value:{elementWithVisibleTooltip:null}}),r))}b(t,[{key:"isTooltipVisible",value:function e(t){this.setState({elementWithVisibleTooltip:t})}},{key:"isTooltipHidden",value:function e(){this.setState({elementWithVisibleTooltip:null})}},{key:"render",value:function e(){var t=this;var r=this.props.items;var n=this.state.elementWithVisibleTooltip;var o=Object.keys(r);return a.a.createElement("b",{className:c.a.items},o.map(function(e,l){var s=null;switch(e){case"facebook":s="ion-social-facebook";break;case"twitter":s="ion-social-twitter";break;case"googlePlus":s="ion-social-googleplus";break;case"instagram":s="ion-social-instagram-outline";break;default:s=l}if("number"===typeof s){var f="".concat(c.a.error_icon," ion-help");var p="".concat(c.a.error_tooltip_hidden);null!=n&&(p="".concat(c.a.error_tooltip_visible));return a.a.createElement("b",{className:c.a.error,key:l,onMouseEnter:function e(){return t.isTooltipVisible(l)},onMouseLeave:function e(){return t.isTooltipHidden()}},a.a.createElement("b",{className:f}),a.a.createElement("b",{className:p},a.a.createElement(u["default"],{text:"Icon for ".concat(o[s]," not found")})))}return a.a.createElement("b",{className:c.a.item,key:l},a.a.createElement(i.a,{href:r[e]},a.a.createElement("a",null,a.a.createElement("b",{className:s}))))}))}}]);return t}(n["Component"]);t["default"]=d},16:function(e,t,r){"use strict";var n=r(3);var a=r(5);var o=r(7);var i=r(21);var u=o();n(u,{getPolyfill:o,implementation:a,shim:i});e.exports=u},17:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},18:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var u=0;u<i;u++)a.call(o,t[u],u,t);else for(var l in t)r.call(t,l)&&a.call(o,t[l],l,t)}},19:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==i)throw new TypeError(n+r);var u=a.call(arguments,1);var l;var c=function(){if(this instanceof l){var e=r.apply(this,u.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,u.concat(a.call(arguments)))};var s=Math.max(0,r.length-u.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);l=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var b=function e(){};b.prototype=r.prototype;l.prototype=new b;b.prototype=null}return l}},2:function(e,t,r){e.exports=r(24)},20:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==a||true!==i.enumerable)return false}return true}},21:function(e,t,r){"use strict";var n=r(3);var a=r(7);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},22:function(e,t,r){var n=r(6);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},23:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]},234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(158);var i=r(386);var u=r.n(i);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function f(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function p(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=function(e){m(t,e);function t(){c(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}f(t,[{key:"selectMemberByIndex",value:function e(t){"function"===typeof this.props.onSelect&&this.props.onSelect(t)}},{key:"render",value:function e(){var t=this;var r=this.props,n=r.avatar,i=r.name,l=r.position,c=r.description,s=r.socialMedia,f=r.index,p=r.onSelect,b=r.areDetailsVisible;var m="".concat(b?u.a.member_expanded:u.a.member_collapsed);return a.a.createElement("b",{className:m,onClick:function e(){return t.selectMemberByIndex(f)}},a.a.createElement("b",{className:u.a.avatar,style:{backgroundImage:"url(".concat(n,")")}}),a.a.createElement("b",{className:u.a.details},a.a.createElement("b",{className:u.a.heading},i),a.a.createElement("b",{className:u.a.position},l),a.a.createElement("b",{className:u.a.description},c),a.a.createElement("b",{className:u.a.social_media},a.a.createElement(o["default"],{items:s}))))}}]);return t}(n["Component"]);t["default"]=v},235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={heading:"Section title",members:[{avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",socialMedia:{facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://instagram.com",googlePlus:"https://plus.google.com"}},{avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",socialMedia:{facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://instagram.com",googlePlus:"https://plus.google.com"}},{avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",socialMedia:{facebook:"https://facebook.com",twitter:"https://twitter.com",instagram:"https://instagram.com",googlePlus:"https://plus.google.com"}},{avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",socialMedia:{feceboo:"/",facebook:"https://facebook.com",twitter:"https://twitter.com"}},{avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",socialMedia:{facebook:"https://facebook.com",twitter:"https://twitter.com"}},{avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet ante sed orci efficitur interdum quis eu neque.",socialMedia:{twitter:"https://twitter.com",instagram:"https://instagram.com",googlePlus:"https://plus.google.com"}}]}},236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(387);var i=r.n(o);t["default"]=function(e){var t=e.avatar,r=e.name,n=e.position;return a.a.createElement("b",{className:i.a.section},a.a.createElement("b",{className:i.a.avatar,style:{backgroundImage:"url(".concat(t,")")}}),a.a.createElement("b",{className:i.a.name},r),a.a.createElement("b",{className:i.a.position},n))}},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(388);var i=r.n(o);t["default"]=function(e){var t=e.heading;var r="".concat(i.a.register_action," ion-android-add");return a.a.createElement("b",{className:i.a.register},a.a.createElement("b",{className:r}),a.a.createElement("b",{className:i.a.register_heading},t||"Join the team"))}},238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={heading:"Section Title",items:[{type:"member",avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev"},{type:"member",avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev"},{type:"member",avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev"},{type:"member",avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev"},{type:"member",avatar:"".concat(n["b"],"/images/planets/Neptune.jpg"),name:"Employee One",position:"Web Dev"},{type:"register",heading:"Join the team"}]}},3:function(e,t,r){"use strict";var n=r(4);var a=r(18);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var u=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var l=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&l();var s=function(e,t,r,n){if(t in e&&(!u(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);o&&(i=i.concat(Object.getOwnPropertySymbols(t)));a(i,function(n){s(e,n,t[n],r[n])})};f.supportsDescriptors=!!c;e.exports=f},332:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(234);var i=r(235);var u=r(469);var l=r.n(u);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function b(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return v(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){m(t,e);function t(){var e;var r,n;s(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return b(n,(r=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),Object.defineProperty(v(n),"state",{configurable:true,enumerable:true,writable:true,value:{visibleMemberDetailsIndex:null}}),r))}p(t,[{key:"selectVisibleMemberDetailsByIndex",value:function e(t){this.state.visibleMemberDetailsIndex==t?this.hideMemberDetails():this.setState({visibleMemberDetailsIndex:t})}},{key:"hideMemberDetails",value:function e(){this.setState({visibleMemberDetailsIndex:null})}},{key:"render",value:function e(){var t=this;var r=this.props.heading;var n=this.state.visibleMemberDetailsIndex;return a.a.createElement("b",{className:l.a.section},a.a.createElement("b",{className:l.a.heading},r||i["default"].heading),a.a.createElement("b",{className:l.a.content},i["default"].members.length&&i["default"].members.map(function(e,r){return a.a.createElement("b",{className:l.a.item,key:r},a.a.createElement(o["default"],{areDetailsVisible:r==n,index:r,avatar:e.avatar,name:e.name,position:e.position,description:e.description,socialMedia:e.socialMedia,onSelect:function e(r){return t.selectVisibleMemberDetailsByIndex(r)}}))})))}}]);return t}(n["Component"]);t["default"]=y},334:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(236);var i=r(237);var u=r(238);var l=r(470);var c=r.n(l);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function b(e,t,r){t&&p(e.prototype,t);r&&p(e,r);return e}function m(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d={member:o["default"],register:i["default"]};var h=function(e){y(t,e);function t(){f(this,t);return m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}b(t,[{key:"render",value:function e(){var t=this.props.heading;return a.a.createElement("b",{className:c.a.section},a.a.createElement("b",{className:c.a.heading},t||u["default"].heading),a.a.createElement("b",{className:c.a.content},u["default"].items.length&&u["default"].items.map(function(e,t){var r=d[e.type];return a.a.createElement("b",{className:c.a.item,key:t},"member"==e.type?a.a.createElement(r,{avatar:e.avatar,name:e.name,position:e.position}):"register"==e.type?a.a.createElement(r,{heading:e.heading}):null)})))}}]);return t}(n["Component"]);t["default"]=h},4:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var i=r(17);var u=Object.prototype.propertyIsEnumerable;var l=!u.call({toString:null},"toString");var c=u.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var b=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var m=function(e){if("undefined"===typeof window||!b)return f(e);try{return f(e)}catch(e){return false}};var v=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var u=i(t);var f=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!u)throw new TypeError("Object.keys called on a non-object");var b=c&&o;if(f&&t.length>0&&!n.call(t,0))for(var v=0;v<t.length;++v)p.push(String(v));if(u&&t.length>0)for(var y=0;y<t.length;++y)p.push(String(y));else for(var d in t)b&&"prototype"===d||!n.call(t,d)||p.push(String(d));if(l){var h=m(t);for(var g=0;g<s.length;++g)h&&"constructor"===s[g]||!n.call(t,s[g])||p.push(s[g])}return p};v.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(o.call(t)):r(t)}}}else Object.keys=v;return Object.keys||v};e.exports=v},468:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(332);var i=r(334);var u=r(514);var l=r.n(u);t["default"]=function(){return a.a.createElement("b",{className:l.a.section},a.a.createElement(o["default"],null),a.a.createElement(i["default"],null))}},5:function(e,t,r){"use strict";var n=r(4);var a=r(6);var o=function(e){return"undefined"!==typeof e&&null!==e};var i=r(20)();var u=Object;var l=a.call(Function.call,Array.prototype.push);var c=a.call(Function.call,Object.prototype.propertyIsEnumerable);var s=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=u(t);var f,p,b,m,v,y,d;for(f=1;f<arguments.length;++f){p=u(arguments[f]);m=n(p);var h=i&&(Object.getOwnPropertySymbols||s);if(h){v=h(p);for(b=0;b<v.length;++b){d=v[b];c(p,d)&&l(m,d)}}for(b=0;b<m.length;++b){d=m[b];y=p[d];c(p,d)&&(a[d]=y)}}return a}},6:function(e,t,r){"use strict";var n=r(19);e.exports=Function.prototype.bind||n},7:function(e,t,r){"use strict";var n=r(5);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var i in a)o+=i;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},8:function(e,t,r){e.exports=r(12)},802:function(e,t,r){e.exports=r(468)}},[802]);return{page:e.default}});