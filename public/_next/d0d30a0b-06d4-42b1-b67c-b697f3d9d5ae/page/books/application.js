module.exports=__NEXT_REGISTER_PAGE("/books/application",function(){var e=webpackJsonp([46],{337:function(e,t,r){e.exports=r(47)},47:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});r.d(t,"module",function(){return e});var o=r(0);var n=r.n(o);var s=r(7);var i=r.n(s);var a=r(52);var c=r(51);var e=function e(t,r){var o=Object(s["connect"])(t,c["default"]);var i=o(r);return n.a.createElement(i,null)};t["default"]=function(e){return n.a.createElement(s["Provider"],{store:a["default"]},e.children)}},48:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=r(8);t["default"]={logo:o["b"]+"/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}},51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=Object.assign;t["default"]=function(e){return{setView:function e(t,r){var n=o({},t.store);if("myAccount"==r){n.view=r;n.displayedBooks=n.completedOrders}else{n.view=n.sections[n.selectedSectionIndex].view;n.displayedBooks="orders"==r?n.pendingOrders:[]}return{store:n}},selectSection:function e(t,r){var n=o({},t.store);n.selectedSectionIndex=r;return{store:n}},selectCategory:function e(t,r){var n=o({},t.store);n.selectedCategoryIndex=r;n.displayedBooks=[];n.books.forEach(function(e){if(e.categories.includes(r)){n.displayedBooks.push(e);n.displayedBooks[n.displayedBooks.indexOf(e)].color=n.categories[r].color[1]}});return{store:n}},manageOrders:function e(t,r){var n=o({},t.store);var s=o({},n.displayedBooks[r]);var i=o({},n.pendingOrders[r]);var a=n.pendingOrders.indexOf(s);var c=n.completedOrders.indexOf(s);if("library"==n.view)-1==a||n.pendingOrders[a].color!=s.color?n.pendingOrders.push(s):n.pendingOrders.splice(a,1);else if("orders"==n.view)if(-1==c||n.completedOrders[c].color!=n.pendingOrders[r].color){n.completedOrders.push(n.pendingOrders[r]);n.pendingOrders.splice(r,1)}else n.completedOrders.splice(c,1);else"myAccount"==n.view&&n.completedOrders.splice(r,1);return{store:n}}}}},52:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=r(6);var n=r(48);t["default"]=Object(o["a"])({store:{logo:n["default"].logo,books:n["default"].books,sections:n["default"].sections,selectedSectionIndex:0,view:n["default"].view,displayedBooks:[],user:n["default"].user,pendingOrders:[],completedOrders:[],categories:n["default"].categories,selectedCategoryIndex:null}})},6:function(e,t,r){"use strict";function o(e,t){for(var r in t)e[r]=t[r];return e}t["a"]=function(e){var t=[];function r(e){for(var r=[],o=0;o<t.length;o++)t[o]===e?e=null:r.push(t[o]);t=r}function n(r,n,s){e=n?r:o(o({},e),r);for(var i=t,a=0;a<i.length;a++)i[a](e,s)}return e=e||{},{action:function(t){function r(e){n(e,!1,t)}return function(){for(var o=arguments,n=[e],s=0;s<arguments.length;s++)n.push(o[s]);var i=t.apply(this,n);null!=i&&(i.then?i.then(r):r(i))}},setState:n,subscribe:function(e){return t.push(e),function(){r(e)}},unsubscribe:r,getState:function(){return e}}}},7:function(e,t,r){var o=r(0);function n(e,t){for(var r in t)e[r]=t[r];return e}var s={store:function(){}};var i=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.getChildContext=function(){return{store:this.props.store}},t.prototype.render=function(){return o.Children.only(this.props.children)},t}(o.Component);i.childContextTypes=s,t.connect=function(e,t){var r;return"function"!=typeof e&&("string"==typeof(r=e||[])&&(r=r.split(/\s*,\s*/)),e=function(e){for(var t={},o=0;o<r.length;o++)t[r[o]]=e[r[o]];return t}),function(r){function i(s,i){var a=this;o.Component.call(this,s,i);var c=i.store,l=e(c?c.getState():{},s),u=t?function(e,t){"function"==typeof e&&(e=e(t));var r={};for(var o in e)r[o]=t.action(e[o]);return r}(t,c):{store:c},d=function(){var t=e(c?c.getState():{},a.props);for(var r in t)if(t[r]!==l[r])return l=t,a.forceUpdate();for(var o in l)if(!(o in t))return l=t,a.forceUpdate()};this.componentDidMount=function(){d(),c.subscribe(d)},this.componentWillUnmount=function(){c.unsubscribe(d)},this.render=function(){return o.createElement(r,n(n(n({},u),a.props),l))}}return i.contextTypes=s,(i.prototype=Object.create(o.Component.prototype)).constructor=i}},t.Provider=i}},[337]);return{page:e.default}});