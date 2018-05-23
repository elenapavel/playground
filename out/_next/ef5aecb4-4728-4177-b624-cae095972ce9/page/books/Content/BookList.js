module.exports=__NEXT_REGISTER_PAGE("/books/Content/BookList",function(){var e=webpackJsonp([26],{108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(1);var r=n.n(o);var i=n(0);var a=n.n(i);var s=n(85);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Object.defineProperty(e,o.key,o)}}function m(e,t,n){t&&d(e.prototype,t);n&&d(e,n);return e}function u(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){p(t,e);function t(){l(this,t);return u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}m(t,[{key:"render",value:function e(){var t=this.props,n=t.items,o=t.view,i=t.label;return a.a.createElement("div",{className:"jsx-496423446 container"},0==n.length?null:a.a.createElement("div",{className:"jsx-496423446 label"},i),0==n.length?null:n.map(function(e,t){return a.a.createElement(s["default"],{key:t,title:e.title,authors:e.authors,ratings:e.ratings,bookImage:e.bookImage,content:e.content,color:e.color,index:t})}),a.a.createElement(r.a,{styleId:"496423446",css:[".container.jsx-496423446{position:relative;margin:3rem 2rem;}",'.label.jsx-496423446{font-size:1rem;font-weight:600;font-family:"Cabin",sans-serif;line-height:1.4;color:#595769;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;margin-bottom:2rem;}']}))}}]);return t}(i["Component"]);t["default"]=f},3:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}t["a"]=function(e){var t=[];function n(e){for(var n=[],o=0;o<t.length;o++)t[o]===e?e=null:n.push(t[o]);t=n}function r(n,r,i){e=r?n:o(o({},e),n);for(var a=t,s=0;s<a.length;s++)a[s](e,i)}return e=e||{},{action:function(t){function n(e){r(e,!1,t)}return function(){for(var o=arguments,r=[e],i=0;i<arguments.length;i++)r.push(o[i]);var a=t.apply(this,r);null!=a&&(a.then?a.then(n):n(a))}},setState:r,subscribe:function(e){return t.push(e),function(){n(e)}},unsubscribe:n,getState:function(){return e}}}},34:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});n.d(t,"module",function(){return e});var o=n(0);var r=n.n(o);var i=n(4);var a=n.n(i);var s=n(42);var c=n(41);var e=function e(t,n){var o=Object(i["connect"])(t,c["default"]);var a=o(n);return r.a.createElement(a,null)};t["default"]=function(e){return r.a.createElement(i["Provider"],{store:s["default"]},e.children)}},37:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t["default"]={logo:"/static/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}},396:function(e,t,n){e.exports=n(108)},4:function(e,t,n){var o=n(0);function r(e,t){for(var n in t)e[n]=t[n];return e}var i={store:function(){}};var a=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return o.Children.only(this.props.children)},t}(o.Component);a.childContextTypes=i,t.connect=function(e,t){var n;return"function"!=typeof e&&("string"==typeof(n=e||[])&&(n=n.split(/\s*,\s*/)),e=function(e){for(var t={},o=0;o<n.length;o++)t[n[o]]=e[n[o]];return t}),function(n){function a(i,a){var s=this;o.Component.call(this,i,a);var c=a.store,l=e(c?c.getState():{},i),d=t?function(e,t){"function"==typeof e&&(e=e(t));var n={};for(var o in e)n[o]=t.action(e[o]);return n}(t,c):{store:c},m=function(){var t=e(c?c.getState():{},s.props);for(var n in t)if(t[n]!==l[n])return l=t,s.forceUpdate();for(var o in l)if(!(o in t))return l=t,s.forceUpdate()};this.componentDidMount=function(){m(),c.subscribe(m)},this.componentWillUnmount=function(){c.unsubscribe(m)},this.render=function(){return o.createElement(n,r(r(r({},d),s.props),l))}}return a.contextTypes=i,(a.prototype=Object.create(o.Component.prototype)).constructor=a}},t.Provider=a},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=Object.assign;t["default"]=function(e){return{setView:function e(t,n){var r=o({},t.store);if("myAccount"==n){r.view=n;r.displayedBooks=r.completedOrders}else{r.view=r.sections[r.selectedSectionIndex].view;r.displayedBooks="orders"==n?r.pendingOrders:[]}return{store:r}},selectSection:function e(t,n){var r=o({},t.store);r.selectedSectionIndex=n;return{store:r}},selectCategory:function e(t,n){var r=o({},t.store);r.selectedCategoryIndex=n;r.displayedBooks=[];r.books.forEach(function(e){if(e.categories.includes(n)){r.displayedBooks.push(e);r.displayedBooks[r.displayedBooks.indexOf(e)].color=r.categories[n].color[1]}});return{store:r}},manageOrders:function e(t,n){var r=o({},t.store);var i=o({},r.displayedBooks[n]);var a=o({},r.pendingOrders[n]);var s=r.pendingOrders.indexOf(i);var c=r.completedOrders.indexOf(i);if("library"==r.view)-1==s||r.pendingOrders[s].color!=i.color?r.pendingOrders.push(i):r.pendingOrders.splice(s,1);else if("orders"==r.view)if(-1==c||r.completedOrders[c].color!=r.pendingOrders[n].color){r.completedOrders.push(r.pendingOrders[n]);r.pendingOrders.splice(n,1)}else r.completedOrders.splice(c,1);else"myAccount"==r.view&&r.completedOrders.splice(n,1);return{store:r}}}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(3);var r=n(37);t["default"]=Object(o["a"])({store:{logo:r["default"].logo,books:r["default"].books,sections:r["default"].sections,selectedSectionIndex:0,view:r["default"].view,displayedBooks:[],user:r["default"].user,pendingOrders:[],completedOrders:[],categories:r["default"].categories,selectedCategoryIndex:null}})},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(1);var r=n.n(o);var i=n(0);var a=n.n(i);var s=n(34);function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Object.defineProperty(e,o.key,o)}}function m(e,t,n){t&&d(e.prototype,t);n&&d(e,n);return e}function u(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){p(t,e);function t(){l(this,t);return u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}m(t,[{key:"render",value:function e(){var t=this.props,n=t.bookIndex,o=t.isExpanded,i=t.color;var c=o?"container is_expanded":"container is_collapsed";return Object(s["module"])("store",function(e){var t=e.store,o=e.manageOrders;var s=t.view,l=t.displayedBooks,d=t.selectedCategoryIndex,m=t.categories,u=t.pendingOrders,y=t.completedOrders;var p="action_order";"library"==s?-1!=u.indexOf(l[n])&&(p+=" is_managed"):"orders"==s?-1!=y.indexOf(u[n])&&(p+=" is_managed"):"myAccount"==s&&-1!=y.indexOf(u[n])&&(p+=" is_managed");return a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" "+(c||"")},"library"==s?a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])},a.a.createElement("div",{onClick:function e(){return-1==u.indexOf(l[n])?o(n):null},className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" "+(p||"")},"Take book",a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" checked ion-checkmark-round"}))):"orders"==s?a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])},a.a.createElement("div",{onClick:function e(){return o(n)},className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" "+(p||"")},"Confirm order",a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" checked ion-checkmark-round"}))):"myAccount"==s?a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])},a.a.createElement("div",{onClick:function e(){return o(n)},className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" "+(p||"")},"Return book",a.a.createElement("div",{className:r.a.dynamic([["4236607467",[i,i,i,i]]])+" checked ion-checkmark-round"}))):null,a.a.createElement(r.a,{styleId:"4236607467",css:[".container.__jsx-style-dynamic-selector{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".container.is_collapsed.__jsx-style-dynamic-selector{height:0;opacity:0;margin-top:0;}",".container.is_expanded.__jsx-style-dynamic-selector{height:100%;opacity:1;margin-top:1.5rem;}",'.container.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector{-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;font-size:0;font-family:"Cabin",sans-serif;font-weight:600;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;background:transparent;padding:0;border-radius:0.3rem;color:transparent;-webkit-transition:all 0.5s ease-in-out 0.3s;transition:all 0.5s ease-in-out 0.3s;display:inline-block;position:relative;cursor:pointer;}',".container.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector:focus .checked.__jsx-style-dynamic-selector,.container.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector:active .checked.__jsx-style-dynamic-selector,.container.__jsx-style-dynamic-selector .action_order.is_managed.__jsx-style-dynamic-selector .checked.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:all 0.5s ease-in-out 0.6s;transition:all 0.5s ease-in-out 0.6s;}",".container.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector .checked.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;width:100%;margin:auto;color:#fff;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.7rem;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".container.is_expanded.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector{font-size:1rem;padding:1rem 2rem;color:".concat(i,";background:#f5f5fa;-webkit-transition:all 0.5s ease-in-out 0.3s;transition:all 0.5s ease-in-out 0.3s;}"),".container.is_expanded.__jsx-style-dynamic-selector .action_order.is_managed.__jsx-style-dynamic-selector{background:".concat(i,";font-size:1rem;padding:1rem 2rem;color:").concat(i,";}"),".container.is_expanded.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector:focus,.container.is_expanded.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector:active,.container.is_expanded.__jsx-style-dynamic-selector .action_order.is_managed.__jsx-style-dynamic-selector{background:".concat(i,";}")],dynamic:[i,i,i,i]}))})}}]);return t}(i["PureComponent"]);t["default"]=f},75:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(1);var r=n.n(o);var i=n(0);var a=n.n(i);function s(e){s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return s(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Object.defineProperty(e,o.key,o)}}function d(e,t,n){t&&l(e.prototype,t);n&&l(e,n);return e}function m(e,t){if(t&&("object"===s(t)||"function"===typeof t))return t;return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=function(e){y(t,e);function t(){c(this,t);return m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}d(t,[{key:"render",value:function e(){var t=this.props,n=t.isExpanded,o=t.score,i=t.color;var s=parseInt(o);var c=parseFloat(parseFloat(o)-parseFloat(parseInt(o)));var l=[];for(var d=0;d<s;d++)l.push(a.a.createElement("div",{key:d,className:r.a.dynamic([["2342084347",[i]]])+" star checked ion-ios-star"},a.a.createElement(r.a,{styleId:"2342084347",css:[".star.__jsx-style-dynamic-selector{display:inline-block;margin-right:0.3rem;font-size:1rem;color:".concat(i,";}")],dynamic:[i]})));5-s>0&&0!=c&&l.push(a.a.createElement("div",{key:s,className:r.a.dynamic([["829013998",[i]]])+" star checked ion-ios-star-half"},a.a.createElement(r.a,{styleId:"829013998",css:[".star.__jsx-style-dynamic-selector{display:inline-block;margin-right:0.3rem;font-size:1rem;color:".concat(i,";}")],dynamic:[i]})));c=0!=c?1:0;for(var d=0;d<5-s-c;d++)l.push(a.a.createElement("div",{key:s+d+1,className:r.a.dynamic([["2342084347",[i]]])+" star ion-ios-star-outline"},a.a.createElement(r.a,{styleId:"2342084347",css:[".star.__jsx-style-dynamic-selector{display:inline-block;margin-right:0.3rem;font-size:1rem;color:".concat(i,";}")],dynamic:[i]})));var m=n?"container is_expanded":"container";return a.a.createElement("div",{className:"jsx-1466660590 "+(m||"")},n?a.a.createElement("div",{className:"jsx-1466660590 stars"},l):null,o,a.a.createElement(r.a,{styleId:"1466660590",css:['.container.jsx-1466660590{position:relative;color:#2a2734;font-size:0.8rem;font-weight:600;font-family:"Cabin",sans-serif;width:50%;-webkit-transition:all 0.5s ease-in-out 0.5s;transition:all 0.5s ease-in-out 0.5s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}',".container.is_expanded.jsx-1466660590{width:100%;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}"]}))}}]);return t}(i["Component"]);t["default"]=p},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(1);var r=n.n(o);var i=n(0);var a=n.n(i);var s=n(75);var c=n(74);function l(e){l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return l(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;"value"in o&&(o.writable=true);Object.defineProperty(e,o.key,o)}}function u(e,t,n){t&&m(e.prototype,t);n&&m(e,n);return e}function y(e,t){if(t&&("object"===l(t)||"function"===typeof t))return t;return f(e)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){p(t,e);function t(){var e;var n,o;d(this,t);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return y(o,(n=o=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),Object.defineProperty(f(o),"state",{configurable:true,enumerable:true,writable:true,value:{state:"initial"}}),n))}u(t,[{key:"setCardState",value:function e(t){this.setState({state:t})}},{key:"componentWillReceiveProps",value:function e(){this.setState({state:"initial"})}},{key:"render",value:function e(){var t=this;var n=this.props,o=n.title,i=n.authors,l=n.ratings,d=n.bookImage,m=n.content,u=n.color,y=n.index;var p=this.state.state;var f="container";switch(p){case"expanded":f+=" is_expanded";break;case"collpased":f+=" is_collapsed";break;default:f+=" is_initial"}return a.a.createElement("div",{className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" "+(f||"")},a.a.createElement("div",{className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" top_side"},a.a.createElement("div",{className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" book_image"},a.a.createElement("img",{src:d,className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])})),a.a.createElement("div",{className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" book_details"},a.a.createElement("div",{onClick:function e(n){return t.setCardState("expanded"==p?"collpased":"expanded")},className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" title"},o),a.a.createElement("div",{className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" authors"},i.map(function(e,t){return a.a.createElement("div",{key:t,className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" author"},e)})),a.a.createElement(s["default"],{isExpanded:"expanded"==p,score:l,color:u}))),a.a.createElement("div",{className:r.a.dynamic([["708329822",[u,u,u,u,u,u]]])+" content"},m),a.a.createElement(c["default"],{bookIndex:y,isExpanded:"expanded"==p,color:u}),a.a.createElement(r.a,{styleId:"708329822",css:[".container.__jsx-style-dynamic-selector{position:relative;padding:1.5rem 2rem;border-radius:0.3rem;margin-top:0.8rem;background:#fff;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}",".is_collapsed.__jsx-style-dynamic-selector{-webkit-animation-name:moveToTop-__jsx-style-dynamic-selector;animation-name:moveToTop-__jsx-style-dynamic-selector;}",".is_expanded.__jsx-style-dynamic-selector{-webkit-animation-name:moveToBottom-__jsx-style-dynamic-selector;animation-name:moveToBottom-__jsx-style-dynamic-selector;}",".is_initial.__jsx-style-dynamic-selector{-webkit-animation-name:fadeInBottom-__jsx-style-dynamic-selector;animation-name:fadeInBottom-__jsx-style-dynamic-selector;}",".container.__jsx-style-dynamic-selector:first-child{margin-top:0;}",'.container.__jsx-style-dynamic-selector:before{content:"";overflow:hidden;position:absolute;top:0;left:0;bottom:0;height:100%;border-left:5px solid '.concat(u,";border-top-left-radius:0.3rem;border-bottom-left-radius:0.3rem;}"),".top_side.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}",".book_details.__jsx-style-dynamic-selector{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-transition:all 0.5s ease-in-out 0.5s;transition:all 0.5s ease-in-out 0.5s;}",".book_image.__jsx-style-dynamic-selector{-webkit-flex-basis:0%;-ms-flex-preferred-size:0%;flex-basis:0%;width:50%;-webkit-transition:flex-basis 0.5s ease-in-out 0.5s;transition:flex-basis 0.5s ease-in-out 0.5s;padding:0;margin-top:-5rem;}",".is_expanded.__jsx-style-dynamic-selector .book_details.__jsx-style-dynamic-selector{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".is_expanded.__jsx-style-dynamic-selector .book_image.__jsx-style-dynamic-selector{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".book_image.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{box-shadow:0 1rem 3rem -0.5rem ".concat(u,";display:block;max-width:calc(100% - 4rem);max-height:100%;width:auto;height:auto;margin:0 3rem 1.5rem 1rem;opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}"),".is_expanded.__jsx-style-dynamic-selector .book_image.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{opacity:1;}",'.title.__jsx-style-dynamic-selector{color:#2a2734;font-size:1rem;font-family:"Cabin",sans-serif;line-height:1.4;font-weight:600;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-bottom:0.7rem;}','.author.__jsx-style-dynamic-selector{color:#7e7d94;font-size:0.8rem;font-family:"Cabin",sans-serif;line-height:1.4;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;margin-bottom:0.7rem;display:inline-block;}','.author.__jsx-style-dynamic-selector:after{content:",";padding-right:0.2rem;display:inine-block;}',".author.__jsx-style-dynamic-selector:last-child.__jsx-style-dynamic-selector:after{display:none;}",'.content.__jsx-style-dynamic-selector{height:0;opacity:0;color:#7e7d94;font-size:0;line-height:1.4;font-style:italic;font-family:"Cabin",sans-serif;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;overflow:hidden;}',".is_expanded.__jsx-style-dynamic-selector .content.__jsx-style-dynamic-selector{opacity:1;font-size:1rem;height:100%;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".to_right.__jsx-style-dynamic-selector{height:0;opacity:0;overflow:hidden;margin-top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".is_expanded.__jsx-style-dynamic-selector .to_right.__jsx-style-dynamic-selector{height:100%;opacity:1;margin-top:1.5rem;}",'.action_order.__jsx-style-dynamic-selector{-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;font-size:0;font-family:"Cabin",sans-serif;font-weight:600;-webkit-letter-spacing:0.5px;-moz-letter-spacing:0.5px;-ms-letter-spacing:0.5px;letter-spacing:0.5px;background:transparent;padding:0;border-radius:0.3rem;color:transparent;-webkit-transition:all 0.5s ease-in-out 0.3s;transition:all 0.5s ease-in-out 0.3s;display:inline-block;position:relative;cursor:pointer;}',".action_order.__jsx-style-dynamic-selector .checked.__jsx-style-dynamic-selector{position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;width:100%;margin:auto;color:#fff;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.7rem;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;}",".is_expanded.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector:focus,.is_expanded.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector:active,.is_expanded.__jsx-style-dynamic-selector .ordered.__jsx-style-dynamic-selector{background:".concat(u,";}"),".action_order.__jsx-style-dynamic-selector:focus .checked.__jsx-style-dynamic-selector,.action_order.__jsx-style-dynamic-selector:active .checked.__jsx-style-dynamic-selector,.ordered.__jsx-style-dynamic-selector .checked.__jsx-style-dynamic-selector{opacity:1;-webkit-transition:all 0.5s ease-in-out 0.6s;transition:all 0.5s ease-in-out 0.6s;}",".is_expanded.__jsx-style-dynamic-selector .action_order.__jsx-style-dynamic-selector{font-size:1rem;padding:1rem 2rem;color:".concat(u,";background:#f5f5fa;-webkit-transition:all 0.5s ease-in-out 0.3s;transition:all 0.5s ease-in-out 0.3s;}"),".is_expanded.__jsx-style-dynamic-selector .action_order.ordered.__jsx-style-dynamic-selector{background:".concat(u,";font-size:1rem;padding:1rem 2rem;color:").concat(u,";}"),"@-webkit-keyframes moveToBottom-__jsx-style-dynamic-selector{from{margin-top:0.8rem;}to{margin-top:5rem;}}","@keyframes moveToBottom-__jsx-style-dynamic-selector{from{margin-top:0.8rem;}to{margin-top:5rem;}}","@-webkit-keyframes moveToTop-__jsx-style-dynamic-selector{from{margin-top:5rem;}to{margin-top:0.8rem;}}","@keyframes moveToTop-__jsx-style-dynamic-selector{from{margin-top:5rem;}to{margin-top:0.8rem;}}","@-webkit-keyframes fadeInBottom-__jsx-style-dynamic-selector{from{opacity:0;margin-top:5rem;}to{opacity:1;margin-top:0.8rem;}}","@keyframes fadeInBottom-__jsx-style-dynamic-selector{from{opacity:0;margin-top:5rem;}to{opacity:1;margin-top:0.8rem;}}"],dynamic:[u,u,u,u,u,u]}))}}]);return t}(i["Component"]);t["default"]=b}},[396]);return{page:e.default}});