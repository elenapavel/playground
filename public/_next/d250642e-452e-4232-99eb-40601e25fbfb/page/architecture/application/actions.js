module.exports=__NEXT_REGISTER_PAGE("/architecture/application/actions",function(){var e=webpackJsonp([211],{110:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var c=Object.assign;t["default"]=function(e){return{selectArticleIndex:function e(t,r){var l=c({},t.portfolio);l.lastSelectedArticleIndex=l.selectedArticleIndex;l.selectedArticleIndex=r;l.selectedCategoryLabel=l.articles[r].category;return{portfolio:l}},selectArticleByCategoryIndex:function e(t,r){var l=c({},t.portfolio);l.articles.forEach(function(e,t){if(e.category==l.categories[r].label){l.lastSelectedArticleIndex=l.selectedArticleIndex;l.selectedArticleIndex=t;l.selectedCategoryLabel=l.categories[r].label}});return{portfolio:l}}}}},594:function(e,t,r){e.exports=r(110)}},[594]);return{page:e.default}});