module.exports=__NEXT_REGISTER_PAGE("/structure/Features",function(){var e=webpackJsonp([57],{139:function(e,t,a){"use strict";var r=a(0);var i=a.n(r);var n=a(212);var l=a.n(n);function u(e){u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return u(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function c(e,t,a){t&&o(e.prototype,t);a&&o(e,a);return e}function m(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;return d(e)}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){v(t,e);function t(){var e;var a,r;s(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return m(r,(a=r=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),Object.defineProperty(d(r),"state",{configurable:true,enumerable:true,writable:true,value:{active:0}}),a))}c(t,[{key:"onSelect",value:function e(t){this.setState({active:t});"function"===typeof this.props.onSelect&&this.props.onSelect(t)}},{key:"render",value:function e(){var t=this;var a=this.props,r=a.items,n=a.active,u=a.onSelect;return i.a.createElement("b",{className:l.a.items},null!=r&&0!=r.length&&r.map(function(e,a){return i.a.createElement("b",{className:a==n?l.a.item_active:l.a.item,key:a,onClick:function e(){return t.onSelect(a)}},e)}))}}],[{key:"getDerivedStateFromProps",value:function e(t,a){a.active=t.active;return a}}]);return t}(r["Component"]);t["a"]=p},164:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var i=a.n(r);var n=a(17);var l=a(242);var u=a.n(l);t["default"]=function(e){var t=e.steps;return i.a.createElement("b",{className:u.a.steps},t.map(function(e,t){return i.a.createElement("b",{className:u.a.step,key:t},i.a.createElement("b",{className:u.a.step_index},t+1),i.a.createElement(n["a"],{title:e.title}),i.a.createElement("b",{className:u.a.step_headline},e.headline))}),i.a.createElement("b",{className:u.a.separator}))}},165:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var i=a.n(r);var n=a(17);var l=a(243);var u=a.n(l);t["default"]=function(e){var t=e.sections;return i.a.createElement("b",{className:u.a.sections},null!=t&&0!=t.length&&t.map(function(e,a){return i.a.createElement("b",{className:u.a.section,key:a,style:{order:t.length%2?a<t.length/2-1?a:a-t.length/2:a<=t.length/2-1?a:a-t.length/2,marginTop:0==a||a==t.length/2?0:null}},i.a.createElement(n["a"],{title:e.title}),i.a.createElement("b",{className:u.a.section_headline},e.headline))}))}},17:function(e,t,a){"use strict";var r=a(0);var i=a.n(r);var n=a(95);var l=a.n(n);t["a"]=function(e){var t=e.title;return i.a.createElement("b",{className:l.a.title},t)}},210:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var i=a.n(r);var n=a(48);var l=a(2);var u=a(164);var s=a(300);var o=a.n(s);var c={title:"Features",previewImage:"".concat(l["b"],"/images/planets/Saturn.jpeg"),features:[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet consectetur est"},{title:"Feature 2",headline:"Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est"},{title:"Feature 3",headline:"Lorem ipsum dolor sit amet consectetur est. Lorem ipsum dolor sit amet consectetur est"}]};t["default"]=function(){return i.a.createElement("b",{className:o.a.featured},i.a.createElement(n["a"],{title:c.title||"SectionTitle"}),i.a.createElement("b",{className:o.a.featured_section},i.a.createElement("b",{className:o.a.featured_list},i.a.createElement(u["default"],{steps:c.features})),i.a.createElement("b",{className:o.a.featured_preview,style:{backgroundImage:"url(".concat(c.previewImage,")")}})))}},211:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var i=a.n(r);var n=a(139);var l=a(48);var u=a(165);var s=a(301);var o=a.n(s);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||false;r.configurable=true;"value"in r&&(r.writable=true);Object.defineProperty(e,r.key,r)}}function d(e,t,a){t&&v(e.prototype,t);a&&v(e,a);return e}function p(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return b(e)}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=["Tab 1=one","Tab two","Tab 3"];var y=[[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"},{title:"Feature 5",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu."},{title:"Feature 6",headline:"Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"}],[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"}],[{title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"},{title:"Feature 5",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu."}]];var g=function(e){f(t,e);function t(){var e;var a,r;m(this,t);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return p(r,(a=r=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(n))),Object.defineProperty(b(r),"state",{configurable:true,enumerable:true,writable:true,value:{active:0}}),a))}d(t,[{key:"onSelect",value:function e(t){this.setState({active:t})}},{key:"render",value:function e(){var t=this;var a=this.props.title;var r=this.state.active;var s=y[r];return i.a.createElement("b",{className:o.a.featured},i.a.createElement(l["a"],{title:a||"Section Title"}),i.a.createElement("b",{className:o.a.actions},i.a.createElement(n["a"],{items:h,active:r,onSelect:function e(a){return t.onSelect(a)}})),i.a.createElement("b",{className:o.a.content},i.a.createElement(u["default"],{sections:s})))}}]);return t}(r["Component"]);t["default"]=g},213:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var i=a.n(r);var n=a(2);var l=a(48);var u=a(17);var s=a(302);var o=a.n(s);var c=[{icon:"ion-ios-checkmark-outline",title:"Feature 1",headline:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at enim placerat, sollicitudin risus ac, maximus arcu. Suspendisse ornare gravida dui sit amet suscipit. Duis viverra elit nec volutpat sagittis."},{icon:"ion-ios-checkmark-outline",title:"Feature two",headline:"Duis viverra elit nec volutpat sagittis. Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum."},{icon:"ion-ios-checkmark-outline",title:"Feature 3",headline:"Aliquam ut sodales urna. Quisque ut ex eros. Nam fringilla quis velit at blandit. Morbi laoreet ac nisl eu rutrum. In sit amet sollicitudin eros, vel placerat metus. "},{icon:"ion-ios-checkmark-outline",title:"Feature four",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"},{icon:"ion-ios-checkmark-outline",title:"Feature 5",headline:"In sit amet sollicitudin eros, vel placerat metus. Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu."},{icon:"ion-ios-checkmark-outline",title:"Feature 6",headline:"Cras placerat nunc lorem, rhoncus hendrerit urna hendrerit eu. Morbi eu vehicula quam. Donec aliquet nisi sed egestas ultricies"}];t["default"]=function(e){var t=e.title;var a="".concat(n["b"],"/images/smartphone.svg");return i.a.createElement("b",{className:o.a.featured},i.a.createElement(l["a"],{title:t||"Section Title"}),i.a.createElement("b",{className:o.a.content},i.a.createElement("b",{className:o.a.to_left},c.map(function(e,t){var a="".concat(o.a.section_icon," ").concat(e.icon);return t<parseInt(c.length/2)?i.a.createElement("b",{className:o.a.section_to_right,key:t},i.a.createElement("b",{className:a}),i.a.createElement(u["a"],{title:e.title}),i.a.createElement("b",{className:o.a.section_headline},e.headline)):null})),i.a.createElement("b",{className:o.a.to_center},c.map(function(e,t){var a="".concat(o.a.section_icon," ").concat(e.icon);return t>=parseInt(c.length/2)?i.a.createElement("b",{className:o.a.section_to_left,key:t},i.a.createElement("b",{className:a}),i.a.createElement(u["a"],{title:e.title}),i.a.createElement("b",{className:o.a.section_headline},e.headline)):null})),i.a.createElement("b",{className:o.a.to_right},i.a.createElement("b",{className:o.a.content_preview,style:{backgroundImage:"url(".concat(a,")")}}))))}},303:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=a(0);var i=a.n(r);var n=a(210);var l=a(211);var u=a(213);var s=a(350);var o=a.n(s);t["default"]=function(){return i.a.createElement("b",{className:o.a.featured_sections},i.a.createElement(n["default"],null),i.a.createElement(l["default"],null),i.a.createElement(u["default"],null))}},48:function(e,t,a){"use strict";var r=a(0);var i=a.n(r);var n=a(109);var l=a.n(n);t["a"]=function(e){var t=e.title;return i.a.createElement("b",{className:l.a.title},t)}},538:function(e,t,a){e.exports=a(303)}},[538]);return{page:e.default}});