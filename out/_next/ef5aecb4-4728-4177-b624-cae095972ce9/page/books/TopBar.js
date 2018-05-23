module.exports=__NEXT_REGISTER_PAGE("/books/TopBar",function(){var e=webpackJsonp([38],{189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);var o=r.n(n);var s=r(0);var i=r.n(s);var a=r(34);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&u(e.prototype,t);r&&u(e,r);return e}function p(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return f(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=function(e){g(t,e);function t(){l(this,t);return p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"render",value:function e(){var t=this.props,r=t.isAccountView,n=t.logo,s=t.user,c=t.section;return i.a.createElement("div",{className:"jsx-2853790888 container"},i.a.createElement("div",{className:"jsx-2853790888 to_left"},r?Object(a["module"])("store",function(e){var t=e.store,r=e.setView;return i.a.createElement("div",{onClick:function e(){return r()},className:"jsx-2853790888 action_back ion-arrow-left-c"})}):null),i.a.createElement("div",{className:"jsx-2853790888 to_center"},r?null:i.a.createElement("div",{className:"jsx-2853790888 logo"},i.a.createElement("img",{src:n,className:"jsx-2853790888"})),i.a.createElement("div",{className:"jsx-2853790888 "+((r?"main_section":"section")||"")},c)),i.a.createElement("div",{className:"jsx-2853790888 to_right"},r?null:Object(a["module"])("store",function(e){var t=e.store,r=e.setView;return i.a.createElement("div",{onClick:function e(){return r("myAccount")},className:"jsx-2853790888 user_avatar"},i.a.createElement("img",{src:s.avatar,className:"jsx-2853790888"}))})),i.a.createElement(o.a,{styleId:"2853790888",css:[".container.jsx-2853790888{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".to_center.jsx-2853790888{padding:1.5rem;}",".to_right.jsx-2853790888{padding:1.5rem;min-width:5rem;}",".to_left.jsx-2853790888{min-width:5rem;}",".logo.jsx-2853790888{height:1.5rem;width:5rem;display:block;}",".user_avatar.jsx-2853790888{width:2.5rem;height:2.5rem;border-radius:50%;overflow:hidden;cursor:pointer;}",".logo.jsx-2853790888 img.jsx-2853790888,.user_avatar.jsx-2853790888 img.jsx-2853790888{max-width:100%;max-height:100%;margin:auto;display:block;}",'.section.jsx-2853790888{display:block;text-align:center;font-size:0.8rem;font-family:"Cabin",sans-serif;color:#87879c;font-weight:bold;padding-top:0.2rem;}','.main_section.jsx-2853790888{font-size:1.2rem;border-bottom:3px solid transparent;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;color:#2a2734;font-weight:600;font-family:"Cabin",sans-serif;}',".action_back.jsx-2853790888{padding:1.5rem;font-size:1.5rem;cursor:pointer;}"]}))}}]);return t}(s["Component"]);t["default"]=m},3:function(e,t,r){"use strict";function n(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],n=0;n<t.length;n++)t[n]===e?e=null:r.push(t[n]);t=r}function o(r,o,s){e=o?r:n(n({},e),r);for(var i=t,a=0;a<i.length;a++)i[a](e,s)}return e=e||{},{action:function(t){function r(e){o(e,!1,t)}return function(){for(var n=arguments,o=[e],s=0;s<arguments.length;s++)o.push(n[s]);var i=t.apply(this,o);null!=i&&(i.then?i.then(r):r(i))}},setState:o,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},34:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var n=r(0);var o=r.n(n);var s=r(4);var i=r.n(s);var a=r(42);var c=r(41);var e=function e(t,r){var n=Object(s["connect"])(t,c["default"]);var i=n(r);return o.a.createElement(i,null)};t["default"]=function(e){return o.a.createElement(s["Provider"],{store:a["default"]},e.children)}},37:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={logo:"/static/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}},4:function(e,t,r){var n=r(0);function o(e,t){for(var r in t)e[r]=t[r];return e}var s={store:function(){}};var i=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);i.childContextTypes=s,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),function(r){function i(s,i){var a=this;n.Component.call(this,s,i);var c=i.store,l=e(c?c.getState():{},s),u=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var n in e)r[n]=t.action(e[n]);return r}(t,c):{store:c},d=function(){var t=e(c?c.getState():{},a.props);for(var r in t)if(t[r]!==l[r])return l=t,a.forceUpdate();for(var n in l)if(!(n in t))return l=t,a.forceUpdate()};this.componentDidMount=function(){d(),c.subscribe(d)},this.componentWillUnmount=function(){c.unsubscribe(d)},this.render=function(){return n.createElement(r,o(o(o({},u),a.props),l))}}return i.contextTypes=s,(i.prototype=Object.create(n.Component.prototype)).constructor=i}},t.Provider=i},406:function(e,t,r){e.exports=r(189)},41:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign;t["default"]=function(e){return{setView:function e(t,r){var o=n({},t.store);if("myAccount"==r){o.view=r;o.displayedBooks=o.completedOrders}else{o.view=o.sections[o.selectedSectionIndex].view;o.displayedBooks="orders"==r?o.pendingOrders:[]}return{store:o}},selectSection:function e(t,r){var o=n({},t.store);o.selectedSectionIndex=r;return{store:o}},selectCategory:function e(t,r){var o=n({},t.store);o.selectedCategoryIndex=r;o.displayedBooks=[];o.books.forEach(function(e){if(e.categories.includes(r)){o.displayedBooks.push(e);o.displayedBooks[o.displayedBooks.indexOf(e)].color=o.categories[r].color[1]}});return{store:o}},manageOrders:function e(t,r){var o=n({},t.store);var s=n({},o.displayedBooks[r]);var i=n({},o.pendingOrders[r]);var a=o.pendingOrders.indexOf(s);var c=o.completedOrders.indexOf(s);if("library"==o.view)-1==a||o.pendingOrders[a].color!=s.color?o.pendingOrders.push(s):o.pendingOrders.splice(a,1);else if("orders"==o.view)if(-1==c||o.completedOrders[c].color!=o.pendingOrders[r].color){o.completedOrders.push(o.pendingOrders[r]);o.pendingOrders.splice(r,1)}else o.completedOrders.splice(c,1);else"myAccount"==o.view&&o.completedOrders.splice(r,1);return{store:o}}}}},42:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(3);var o=r(37);t["default"]=Object(n["a"])({store:{logo:o["default"].logo,books:o["default"].books,sections:o["default"].sections,selectedSectionIndex:0,view:o["default"].view,displayedBooks:[],user:o["default"].user,pendingOrders:[],completedOrders:[],categories:o["default"].categories,selectedCategoryIndex:null}})}},[406]);return{page:e.default}});