(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{319:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(34),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,c=t.error,e.prev=1,e.next=4,r("projects",n.project).fetch();case 4:o=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c({message:"Project not found"});case 10:return e.abrupt("return",{post:o});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()}}),o=r(15),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[t.post?r("section",[r("nav",{staticClass:"mb-8",attrs:{"aria-label":"go back"}},[r("router-back",{staticClass:"block"})],1),t._v(" "),r("article",[t.post.cover?r("img",{staticClass:"cover-image",attrs:{src:t.post.cover}}):t._e(),t._v(" "),r("h1",{},[t._v(t._s(t.post.title))]),t._v(" "),r("p",{staticClass:"mt-1 mb-8 text-primary-600 dark:text-primary-400"},[t._v(t._s(t.post.description))]),t._v(" "),r("nuxt-content",{attrs:{document:t.post}}),t._v(" "),t.post.gallery?r("div",{staticClass:"nuxt-content"},t._l(t.post.gallery,(function(image){return r("img",{key:image.id,staticClass:"image",attrs:{src:image}})})),0):t._e()],1)]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RouterBack:r(194).default})}}]);