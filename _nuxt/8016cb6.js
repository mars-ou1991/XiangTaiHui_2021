(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{128:function(t,n,e){"use strict";var l=e(1),o=e(184);l.default.use(o.default)},129:function(t,n,e){"use strict";var l=e(1),o=e(185),c=e.n(o);l.default.use(c.a)},130:function(t,n,e){"use strict";var l=e(1),o=e(186),c=e.n(o);l.default.use(c.a)},132:function(t,n,e){t.exports=e.p+"img/logo.845a971.png"},167:function(t,n,e){t.exports={}},168:function(t,n,e){t.exports={}},189:function(t,n,e){"use strict";var l=e(15),component=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("HeaderNavBar"),t._v(" "),e("nuxt"),t._v(" "),e("FooterContent",{staticClass:"w-full"})],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{HeaderNavBar:e(248).default,FooterContent:e(249).default})},194:function(t,n,e){"use strict";e.r(n);var l={props:{to:{type:String,default:""}}},o=e(15),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nuxt-link",{attrs:{to:t.to?t.to:"/"},nativeOn:{click:function(n){!t.to&&t.$router.go(-2)}}},[e("svg",{staticClass:"inline",attrs:{width:"38",height:"8",viewBox:"0 0 38 8",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0.646446 3.64644C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976308 4.7308 0.659725 4.53553 0.464463C4.34027 0.269201 4.02369 0.269201 3.82843 0.464463L0.646446 3.64644ZM38 3.5L1 3.5L1 4.5L38 4.5L38 3.5Z",fill:"currentColor"}})]),t._v(" "),t._t("default",(function(){return[t._v("返回")]}))],2)}),[],!1,null,null,null);n.default=component.exports},196:function(t,n,e){e(197),t.exports=e(198)},235:function(t,n,e){t.exports={}},237:function(t,n,e){"use strict";e(168)},238:function(t,n,e){t.exports=e.p+"img/footer-bg.9b6f4d6.png"},248:function(t,n,e){"use strict";e.r(n);var l,o=e(14),c=(e(27),e(53),l={data:function(){return{isOpen:!1,active:"/"==this.$route.path?0:-1}},watch:{"$route.path":function(){}},created:function(){window.addEventListener("scroll",this.onScroll)},destroy:function(){window.removeEventListener("scroll",this.onScroll)},methods:{drawer:function(){this.isOpen=!this.isOpen},onScroll:function(){var t=document.querySelectorAll(".artic-title"),n=[];t.forEach((function(t){n.push(t.offsetTop)}));for(var e=document.documentElement.scrollTop||document.body.scrollTop,l=0,o=0;o<n.length;o++)e>=n[o]&&(l=o);this.active=l},scrollTo:function(t,n){var e=this;"/"!==this.$route.path&&this.$router.push("/"),setTimeout((function(){n&&(e.isOpen=!1);var l=document.querySelectorAll(".artic-title")[t].offsetTop,o=document.documentElement.scrollTop||document.body.scrollTop,c=50;o>l?function t(){o>l&&(o-l>=c?o-=c:o=l,document.body.scrollTop=o,document.documentElement.scrollTop=o,requestAnimationFrame(t))}():function t(){o<l&&(l-o>=c?o+=c:o=l,document.body.scrollTop=o,document.documentElement.scrollTop=o,requestAnimationFrame(t))}()}),"/"!==this.$route.path?1e3:0)}}},Object(o.a)(l,"watch",{isOpen:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}}),Object(o.a)(l,"mounted",(function(){var t=this;document.addEventListener("keydown",(function(n){27==n.keyCode&&t.isOpen&&(t.isOpen=!1)}))})),l),r=(e(237),e(15)),component=Object(r.a)(c,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("nav",{staticClass:"fixed w-full px-2 py-2 bg-transparent top-0 z-10 bg-white"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("nuxt-link",{attrs:{to:"/"}},[l("img",{staticClass:"h-10 md:h-12",attrs:{src:e(132),alt:""}})])],1),t._v(" "),l("div",{staticClass:"md:hidden"},[l("button",{on:{click:t.drawer}},[l("svg",{staticClass:"h-8 w-8 fill-current text-black",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),l("div",{staticClass:"hidden md:block"},[l("ul",{staticClass:"flex space-x-8 text-sm font-sans",class:"/"!==this.$route.path?"not-home-page":""},[l("li",{staticClass:"flex-auto cursor-pointer",class:{active:0===t.active},on:{click:function(n){return t.scrollTo(0)}}},[l("span",{staticClass:"text-lg"},[t._v("首页")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:1===t.active},on:{click:function(n){return t.scrollTo(1)}}},[l("span",{staticClass:"text-lg"},[t._v("岳麓山文史")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:2===t.active},on:{click:function(n){return t.scrollTo(2)}}},[l("span",{staticClass:"text-lg"},[t._v("走进合作区")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:3===t.active},on:{click:function(n){return t.scrollTo(3)}}},[l("span",{staticClass:"text-lg"},[t._v("日程安排")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:4===t.active},on:{click:function(n){return t.scrollTo(4)}}},[l("span",{staticClass:"text-lg"},[t._v("发起人来了")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:5===t.active},on:{click:function(n){return t.scrollTo(5)}}},[l("span",{staticClass:"text-lg"},[t._v("大咖论道")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:6===t.active},on:{click:function(n){return t.scrollTo(6)}}},[l("span",{staticClass:"text-lg"},[t._v("第二现场")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:7===t.active},on:{click:function(n){return t.scrollTo(7)}}},[l("span",{staticClass:"text-lg"},[t._v("论坛动态")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:8===t.active},on:{click:function(n){return t.scrollTo(8)}}},[l("span",{staticClass:"text-lg"},[t._v("高清现场")])]),t._v(" "),l("li",{staticClass:"flex-auto cursor-pointer",class:{active:9===t.active},on:{click:function(n){return t.scrollTo(9)}}},[l("span",{staticClass:"text-lg"},[t._v("关于我们")])])])]),t._v(" "),l("transition",{attrs:{"enter-class":"opacity-0","enter-active-class":"ease-out transition-medium","enter-to-class":"opacity-100","leave-class":"opacity-100","leave-active-class":"ease-out transition-medium","leave-to-class":"opacity-0"}},[l("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"z-10 fixed inset-0 transition-opacity",on:{keydown:function(n){if(!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"]))return null;t.isOpen=!1}}},[l("div",{staticClass:"absolute inset-0 bg-black opacity-50",attrs:{tabindex:"0"},on:{click:function(n){t.isOpen=!1}}})])]),t._v(" "),l("aside",{staticClass:"\n        p-5\n        transform\n        top-0\n        left-0\n        w-64\n        bg-white\n        fixed\n        h-full\n        overflow-auto\n        ease-in-out\n        transition-all\n        duration-300\n        z-30\n      ",class:t.isOpen?"translate-x-0":"-translate-x-full"},[l("div",{staticClass:"close"},[l("button",{staticClass:"absolute top-0 right-0 mt-4 mr-4",on:{click:function(n){t.isOpen=!1}}},[l("svg",{staticClass:"w-6 h-6",attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[l("path",{attrs:{d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),l("span",{staticClass:"flex w-full items-center p-4 border-b",on:{click:function(n){t.isOpen=!1}}},[l("img",{attrs:{src:e(132),width:"100%",alt:""}})]),t._v(" "),l("ul",{staticClass:"divide-y font-sans"},[l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(0,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("首页")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(1,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("岳麓山文史")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(2,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("走进合作区")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(3,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("日程安排")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(4,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("发起人来了")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(5,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("大咖论道")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(6,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("第二现场")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(7,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("论坛动态")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(8,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("高清现场")])]),t._v(" "),l("li",{staticClass:"flex-auto",on:{click:function(n){return t.scrollTo(9,!0)}}},[l("span",{staticClass:"my-4 inline-block"},[t._v("关于我们")])])])])],1)])}),[],!1,null,"043a0262",null);n.default=component.exports},249:function(t,n,e){"use strict";e.r(n);var l=[function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",[l("p",{staticClass:"mt-40 text-center text-gray-400"},[t._v("湖南省人民政府台湾事务办公室版权所有")]),t._v(" "),l("img",{attrs:{src:e(238),width:"100%",alt:""}})])}],o={name:"FooterContent"},c=e(15),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)}),l,!1,null,"7ecc565f",null);n.default=component.exports},39:function(t,n,e){"use strict";var l={name:"error",props:["error"]},o=e(15),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main",[e("section",[404===t.error.statusCode?[e("br"),t._v(" "),e("h1",{staticClass:"title"},[t._v(t._s("页面不存在"))]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("404")]),t._v(" "),e("p",{staticClass:"mb-4"},[t._v("看起来像你跟着一个失效链接或输入一个URL,这个网站不存在。")])]:[e("h1",{staticClass:"title"},[t._v("出现了一个错误")]),t._v(" "),e("p",{staticClass:"mb-4"},[t._v("看起来像你跟着一个失效链接或输入一个URL,这个网站不存在。")])],t._v(" "),e("nav",{staticClass:"mt-12",attrs:{"aria-label":"go to home"}},[e("router-back",{staticClass:"block",attrs:{to:"/"}})],1)],2)])}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{RouterBack:e(194).default})}},[[196,33,2,34]]]);