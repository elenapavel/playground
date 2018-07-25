module.exports=__NEXT_REGISTER_PAGE("/books/application",function(){var e=webpackJsonp([94],{1:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r.d(t,"b",function(){return l});var n=r(2);var o=r.n(n);var s=o()(),i=s.publicRuntimeConfig;var a=i.base;var c=i.url;var l=i.static},100:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=Object.assign;t["default"]=function(e){return{setView:function e(t,r){var o=n({},t.store);if("myAccount"==r){o.view=r;o.displayedBooks=o.completedOrders}else{o.view=o.sections[o.selectedSectionIndex].view;o.displayedBooks="orders"==r?o.pendingOrders:[]}return{store:o}},selectSection:function e(t,r){var o=n({},t.store);o.selectedSectionIndex=r;return{store:o}},selectCategory:function e(t,r){var o=n({},t.store);o.selectedCategoryIndex=r;o.displayedBooks=[];o.books.forEach(function(e){if(e.categories.includes(r)){o.displayedBooks.push(e);o.displayedBooks[o.displayedBooks.indexOf(e)].color=o.categories[r].color[1]}});return{store:o}},manageOrders:function e(t,r){var o=n({},t.store);var s=n({},o.displayedBooks[r]);var i=n({},o.pendingOrders[r]);var a=o.pendingOrders.indexOf(s);var c=o.completedOrders.indexOf(s);if("library"==o.view)-1==a||o.pendingOrders[a].color!=s.color?o.pendingOrders.push(s):o.pendingOrders.splice(a,1);else if("orders"==o.view)if(-1==c||o.completedOrders[c].color!=o.pendingOrders[r].color){o.completedOrders.push(o.pendingOrders[r]);o.pendingOrders.splice(r,1)}else o.completedOrders.splice(c,1);else"myAccount"==o.view&&o.completedOrders.splice(r,1);return{store:o}}}}},101:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(31);var o=r(98);t["default"]=Object(n["a"])({store:{logo:o["default"].logo,books:o["default"].books,sections:o["default"].sections,selectedSectionIndex:0,view:o["default"].view,displayedBooks:[],user:o["default"].user,pendingOrders:[],completedOrders:[],categories:o["default"].categories,selectedCategoryIndex:null}})},2:function(e,t,r){e.exports=r(12)},31:function(e,t,r){"use strict";function n(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],n=0;n<t.length;n++)t[n]===e?e=null:r.push(t[n]);t=r}function o(r,o,s){e=o?r:n(n({},e),r);for(var i=t,a=0;a<i.length;a++)i[a](e,s)}return e=e||{},{action:function(t){function r(e){o(e,!1,t)}return function(){for(var n=arguments,o=[e],s=0;s<arguments.length;s++)o.push(n[s]);var i=t.apply(this,o);null!=i&&(i.then?i.then(r):r(i))}},setState:o,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},36:function(e,t,r){var n=r(0);function o(e,t){for(var r in t)e[r]=t[r];return e}var s={store:function(){}};var i=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return n.Children.only(this.props.children)},t}(n.Component);i.childContextTypes=s,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},n=0;n<r.length;n++)t[r[n]]=e[r[n]];return t}),function(r){function i(s,i){var a=this;n.Component.call(this,s,i);var c=i.store,l=e(c?c.getState():{},s),u=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var n in e)r[n]=t.action(e[n]);return r}(t,c):{store:c},d=function(){var t=e(c?c.getState():{},a.props);for(var r in t)if(t[r]!==l[r])return l=t,a.forceUpdate();for(var n in l)if(!(n in t))return l=t,a.forceUpdate()};this.componentDidMount=function(){d(),c.subscribe(d)},this.componentWillUnmount=function(){c.unsubscribe(d)},this.render=function(){return n.createElement(r,o(o(o({},u),a.props),l))}}return i.contextTypes=s,(i.prototype=Object.create(n.Component.prototype)).constructor=i}},t.Provider=i},597:function(e,t,r){e.exports=r(97)},97:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var n=r(0);var o=r.n(n);var s=r(36);var i=r.n(s);var a=r(101);var c=r(100);var e=function e(t,r){var n=Object(s["connect"])(t,c["default"]);var i=n(r);return o.a.createElement(i,null)};t["default"]=function(e){return o.a.createElement(s["Provider"],{store:a["default"]},e.children)}},98:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(1);t["default"]={logo:n["b"]+"/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}}},[597]);return{page:e.default}});