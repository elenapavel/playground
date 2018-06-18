module.exports=__NEXT_REGISTER_PAGE("/structure/Features/FeaturesWS2",function(){var e=webpackJsonp([89],{132:function(e,t,r){"use strict";var a=r(0);var i=r.n(a);var n=r(179);var u=r.n(n);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function c(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function m(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return p(e)}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){f(t,e);function t(){var e;var r,a;o(this,t);for(var i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];return m(a,(r=a=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),Object.defineProperty(p(a),"state",{configurable:true,enumerable:true,writable:true,value:{active:0}}),r))}c(t,[{key:"onSelect",value:function e(t){this.setState({active:t});"function"===typeof this.props.onSelect&&this.props.onSelect(t)}},{key:"render",value:function e(){var t=this;var r=this.props,a=r.items,n=r.active,l=r.onSelect;return i.a.createElement("b",{className:u.a.items},null!=a&&0!=a.length&&a.map(function(e,r){return i.a.createElement("b",{className:r==n?u.a.item_active:u.a.item,key:r,onClick:function e(){return t.onSelect(r)}},e)}))}}],[{key:"getDerivedStateFromProps",value:function e(t,r){r.active=t.active;return r}}]);return t}(a["Component"]);t["a"]=v},182:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var i=r.n(a);var n=r(34);var u=r(299);var l=r.n(u);t["default"]=function(e){var t=e.sections;return i.a.createElement("b",{className:l.a.sections},null!=t&&0!=t.length&&t.map(function(e,r){return i.a.createElement("b",{className:l.a.section,key:r,style:{order:t.length%2?r<t.length/2-1?r:r-t.length/2:r<=t.length/2-1?r:r-t.length/2,marginTop:0==r||r==t.length/2?0:null}},i.a.createElement(n["a"],{title:e.title}),i.a.createElement("b",{className:l.a.section_headline},e.headline))}))}},258:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=r(0);var i=r.n(a);var n=r(132);var u=r(27);var l=r(182);var o=r(367);var s=r.n(o);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||false;a.configurable=true;"value"in a&&(a.writable=true);Object.defineProperty(e,a.key,a)}}function p(e,t,r){t&&f(e.prototype,t);r&&f(e,r);return e}function v(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return b(e)}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=["Tab 1=one","Tab two","Tab 3"];var y=[[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"},{title:"Feature 5",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu."},{title:"Feature 6",headline:"Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"}],[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"}],[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"},{title:"Feature 5",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu."}]];var g=function(e){d(t,e);function t(){var e;var r,a;m(this,t);for(var i=arguments.length,n=new Array(i),u=0;u<i;u++)n[u]=arguments[u];return v(a,(r=a=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),Object.defineProperty(b(a),"state",{configurable:true,enumerable:true,writable:true,value:{active:0}}),r))}p(t,[{key:"onSelect",value:function e(t){this.setState({active:t})}},{key:"render",value:function e(){var t=this;var r=this.props.title;var a=this.state.active;var o=y[a];return i.a.createElement("b",{className:s.a.featured},i.a.createElement(u["a"],{title:r||"Section Title"}),i.a.createElement("b",{className:s.a.actions},i.a.createElement(n["a"],{items:h,active:a,onSelect:function e(r){return t.onSelect(r)}})),i.a.createElement("b",{className:s.a.content},i.a.createElement(l["default"],{sections:o})))}}]);return t}(a["Component"]);t["default"]=g},27:function(e,t,r){"use strict";var a=r(0);var i=r.n(a);var n=r(95);var u=r.n(n);t["a"]=function(e){var t=e.title;return i.a.createElement("b",{className:u.a.title},t)}},34:function(e,t,r){"use strict";var a=r(0);var i=r.n(a);var n=r(97);var u=r.n(n);t["a"]=function(e){var t=e.title;return i.a.createElement("b",{className:u.a.title},t)}},633:function(e,t,r){e.exports=r(258)}},[633]);return{page:e.default}});