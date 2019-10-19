module.exports=__NEXT_REGISTER_PAGE("/books/application/store",function(){var e=webpackJsonp([107],{1:function(e,t,s){"use strict";s.d(t,"a",function(){return a});s.d(t,"b",function(){return l});s.d(t,"c",function(){return u});var r=s(2);var o=s.n(r);var n=o()(),i=n.publicRuntimeConfig;var a=i.base;var c=i.url;var l=i.static.default;var u=i.static.structure},101:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=s(31);var o=s(98);t["default"]=Object(r["a"])({store:{logo:o["default"].logo,books:o["default"].books,sections:o["default"].sections,selectedSectionIndex:0,view:o["default"].view,displayedBooks:[],user:o["default"].user,pendingOrders:[],completedOrders:[],categories:o["default"].categories,selectedCategoryIndex:null}})},2:function(e,t,s){e.exports=s(24)},31:function(e,t,s){"use strict";function r(e,t){for(var s in t)e[s]=t[s];return e}t["a"]=function(e){var t=[];function s(e){for(var s=[],r=0;r<t.length;r++)t[r]===e?e=null:s.push(t[r]);t=s}function o(s,o,n){e=o?s:r(r({},e),s);for(var i=t,a=0;a<i.length;a++)i[a](e,n)}return e=e||{},{action:function(t){function s(e){o(e,!1,t)}return function(){for(var r=arguments,o=[e],n=0;n<arguments.length;n++)o.push(r[n]);var i=t.apply(this,o);null!=i&&(i.then?i.then(s):s(i))}},setState:o,subscribe:function(e){return t.push(e),function(){s(e)}},unsubscribe:s,getState:function(){return e}}}},631:function(e,t,s){e.exports=s(101)},98:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=s(1);t["default"]={logo:r["b"]+"/images/dropbox_logo.png",books:[{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[0,1]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,2]},{title:"Design of everyday things",authors:["Don Norman"],ratings:"5.0",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"D. Norman reveals how smart design is the new frontier.",categories:[0,1,2,3]},{title:"Agile metrics in action",authors:["Margaret Heffernan"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,3]},{title:"Measuring the user experience",authors:["Bill Alberts","Tom Tullis"],ratings:"4.5",bookImage:"https://sm.ign.com/ign_ro/screenshot/default/ready-player-one_z9as.jpg",content:"First businesses discoverd quality as a key competitive edge; next came science.",categories:[1,2,3]}],sections:[{label:"Library",view:"library"},{label:"Orders",view:"orders"}],user:{avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",name:"John Doe",email:"john.doe@gmail.com"},categories:[{label:"Business",color:["rgba(147, 232, 215, 0.95)","rgba(84, 176, 208, 0.95)"],icon:"ion-ios-people-outline"},{label:"Design",color:["rgba(135, 180, 246, 0.95)","rgba(130, 117, 241, 0.95)"],icon:"ion-ios-eye-outline"},{label:"Database",color:["rgba(234, 145, 141, 0.95)","rgba(235, 98, 153, 0.95)"],icon:"ion-ios-albums-outline"},{label:"Software",color:["rgba(130, 117, 241, 0.95)","rgba(115, 70, 223, 0.95)"],icon:"ion-ios-gear-outline"}],view:"library"}}},[631]);return{page:e.default}});