module.exports=__NEXT_REGISTER_PAGE("/books/application/actions",function(){var e=webpackJsonp([90],{391:function(e,r,o){e.exports=o(41)},41:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:true});var s=Object.assign;r["default"]=function(e){return{setView:function e(r,o){var d=s({},r.store);if("myAccount"==o){d.view=o;d.displayedBooks=d.completedOrders}else{d.view=d.sections[d.selectedSectionIndex].view;d.displayedBooks="orders"==o?d.pendingOrders:[]}return{store:d}},selectSection:function e(r,o){var d=s({},r.store);d.selectedSectionIndex=o;return{store:d}},selectCategory:function e(r,o){var d=s({},r.store);d.selectedCategoryIndex=o;d.displayedBooks=[];d.books.forEach(function(e){if(e.categories.includes(o)){d.displayedBooks.push(e);d.displayedBooks[d.displayedBooks.indexOf(e)].color=d.categories[o].color[1]}});return{store:d}},manageOrders:function e(r,o){var d=s({},r.store);var n=s({},d.displayedBooks[o]);var i=s({},d.pendingOrders[o]);var t=d.pendingOrders.indexOf(n);var c=d.completedOrders.indexOf(n);if("library"==d.view)-1==t||d.pendingOrders[t].color!=n.color?d.pendingOrders.push(n):d.pendingOrders.splice(t,1);else if("orders"==d.view)if(-1==c||d.completedOrders[c].color!=d.pendingOrders[o].color){d.completedOrders.push(d.pendingOrders[o]);d.pendingOrders.splice(o,1)}else d.completedOrders.splice(c,1);else"myAccount"==d.view&&d.completedOrders.splice(o,1);return{store:d}}}}}},[391]);return{page:e.default}});