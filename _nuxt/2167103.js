(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8],{255:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,default:function(){}}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:t.post.path}},[n("h3",{staticClass:"text-white truncate"},[t._v(t._s(t.post.title))])])}),[],!1,null,"6fa4c60e",null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(34),{name:"Scene",components:{VueMasonryWall:n(275).a},data:function(){return{options:{width:500,padding:{2:8,default:12}},posts:[],loading:!0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchPosts("yuelu-history");case 3:t.posts=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPosts:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:"scene",r=t.length>1&&void 0!==t[1]?t[1]:20,o=t.length>2&&void 0!==t[2]?t[2]:{key:"slug",direction:"desc"},n.abrupt("return",e.$content("scene").sortBy(o.key,o.direction).limit(r).fetch().catch((function(t){return console.error(t)||[]})));case 4:case"end":return n.stop()}}),n)})))()}}}),c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("vue-masonry-wall",{attrs:{items:t.posts,options:t.options},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item;return[n("div",{staticClass:"h-full bg-no-repeat bg-cover bg-center relative pb-8"},[n("img",{attrs:{src:r.cover}}),t._v(" "),n("div",{staticClass:"bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full"},[n("LinkPost",{staticClass:"text-white truncate",attrs:{post:r}}),t._v(" "),n("div",{staticClass:"bg-gradient-to-r from-blue-300 h-1 w-1/2"}),t._v(" "),n("p",{staticClass:"mt-1 text-white dark:text-primary-400 mb-0 truncate"},[t._v(t._s(r.description))])],1)])]}}])})],1)}),[],!1,null,"1c81d232",null);e.default=component.exports;installComponents(component,{LinkPost:n(255).default})}}]);