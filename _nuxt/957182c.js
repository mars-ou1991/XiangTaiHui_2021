(window.webpackJsonp=window.webpackJsonp||[]).push([[20,3,4,6,8,9,12,13,15],{252:function(t,e,n){"use strict";var r=n(12),o=n(2),l=n(92),c=n(17),v=n(13),d=n(45),f=n(191),m=n(68),h=n(190),_=n(5),x=n(57),w=n(69).f,y=n(36).f,C=n(16).f,k=n(192).trim,E="Number",N=o.Number,j=N.prototype,T=d(x(j))==E,A=function(t){if(m(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,o,l,c,v,code,d=h(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=k(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(c=(l=d.slice(2)).length,v=0;v<c;v++)if((code=l.charCodeAt(v))<48||code>o)return NaN;return parseInt(l,r)}return+d};if(l(E,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var O,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(T?_((function(){j.valueOf.call(n)})):d(n)!=E)?f(new N(A(e)),n,S):A(e)},I=r?w(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),R=0;I.length>R;R++)v(N,O=I[R])&&!v(S,O)&&C(S,O,y(N,O));S.prototype=j,j.constructor=S,c(o,E,S)}},255:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,default:function(){}}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:t.post.path}},[n("h3",{staticClass:"text-white truncate"},[t._v(t._s(t.post.title))])])}),[],!1,null,"6fa4c60e",null);e.default=component.exports},256:function(t,e,n){t.exports={}},257:function(t,e,n){t.exports={}},258:function(t,e,n){t.exports={}},260:function(t,e,n){"use strict";n(256)},261:function(t,e,n){t.exports=n.p+"img/china-map.48e8777.png"},262:function(t,e,n){t.exports=n.p+"img/hunan.5474f1f.png"},263:function(t,e,n){t.exports=n.p+"img/hubei.b67388e.png"},264:function(t,e,n){t.exports=n.p+"img/sichuan.7f2494f.png"},265:function(t,e,n){t.exports=n.p+"img/jiangxi.129d821.png"},266:function(t,e,n){t.exports=n.p+"img/guangxi.a8504cb.png"},267:function(t,e,n){"use strict";n(257)},268:function(t,e,n){"use strict";n(258)},269:function(t,e,n){t.exports=n.p+"img/topNews.557a0c1.png"},270:function(t,e,n){t.exports=n.p+"img/events.82259f2.png"},271:function(t,e,n){t.exports=n.p+"img/news.2c993e3.png"},272:function(t,e,n){t.exports=n.p+"img/about-us.9bf27ff.png"},274:function(t,e,n){t.exports=n.p+"img/comming-soon.077e9ba.png"},275:function(t,e,n){t.exports={}},279:function(t,e,n){"use strict";n.r(e);var r={name:"ArticleTitle",props:{titleChinese:{type:String,default:"中文标题"},titleEnglish:{type:String,default:"English Title"},more:{type:String}}},o=(n(260),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-20 artic-title"},[t.more?n("nuxt-link",{attrs:{to:t.more}},[t._v("查看更多>>")]):t._e(),t._v(" "),n("div",{staticClass:"relative inline-block max-w-full pr-10 mb-10 text-primary-600 md:pr-40"},[n("h2",{},[t._v(t._s(t.titleChinese))]),t._v(" "),n("strong",[t._v(t._s(t.titleEnglish))]),t._v(" "),n("div",{staticClass:"absolute w-full h-8 bg-gradient-to-r top-1 from-blue-300 -z-1"})])],1)}),[],!1,null,"7fb23a8c",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(34),n(252),{props:{postType:{type:String,default:"yuelu-history"},amount:{type:Number,default:20,validator:function(t){return t>=0&&t<100}},sortBy:{type:Object,default:function(){return{key:"slug",direction:"desc"}},validator:function(t){return"string"==typeof t.key&&"string"==typeof t.direction}}},data:function(){return{posts:[],loading:!0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchPosts("yuelu-history");case 3:t.posts=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPosts:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:e.postType,o=t.length>1&&void 0!==t[1]?t[1]:e.amount,l=t.length>2&&void 0!==t[2]?t[2]:e.sortBy,n.abrupt("return",e.$content(r).sortBy(l.key,l.direction).limit(o).fetch().catch((function(t){return console.error(t)||[]})));case 4:case"end":return n.stop()}}),n)})))()}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?t._e():n("carousel-3d",{attrs:{width:"500",height:"320",border:"0",autoplay:""}},t._l(t.posts.filter((function(i){return i.cover})),(function(e,r){return n("slide",{key:r,attrs:{index:r}},[n("article",{staticClass:"relative h-full bg-no-repeat bg-cover",style:{"background-image":"url('"+e.cover+"')"}},[n("div",{staticClass:"absolute bottom-0 w-full px-4 py-3 pt-10 bg-gradient-to-t from-blue-900 via-blue-900"},[n("LinkPost",{attrs:{post:e}}),t._v(" "),n("p",{staticClass:"mt-1 mb-0 text-white truncate dark:text-primary-400"},[t._v(t._s(e.description))])],1)])])})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LinkPost:n(255).default})},281:function(t,e,n){"use strict";n.r(e);var r={name:"CooperationZoon",data:function(){return{itemCss:"item w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 text-white flex flex-wrap flex-col content-center justify-center text-center rounded-full bg-gray-300 bg-cover lg:mx-20 md:mx-10 sm:mx-8 mx-3 my-4 md:my-8",chinaMap:n(261),hunan:n(262),hubei:n(263),sichuan:n(264),jiangxi:n(265),guangxi:n(266)}}},o=(n(267),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"text-2xl font-bold text-center text-primary-600"},[t._v("海峡两岸产业合作区")]),t._v(" "),n("p",{staticClass:"text-center text-primary-600"},[t._v("CROSS-STRAIT INDUSTRIAL COOPERATION")]),t._v(" "),n("div",{staticClass:"flex flex-col flex-wrap py-6 bg-center bg-no-repeat bg-contain",style:{backgroundImage:"url("+t.chinaMap+")"}},[n("div",{staticClass:"flex flex-row justify-center"},[n("nuxt-link",{attrs:{to:"/cooperation-zone?type=guangxi"}},[n("div",{class:t.itemCss,style:{"background-image":"url("+t.guangxi+")"}},[n("h4",{staticClass:"text-3xl font-bold text-white"},[t._v("广西")]),t._v(" "),n("strong",[t._v("Guangxi")])])]),t._v(" "),n("nuxt-link",{attrs:{to:"/cooperation-zone?type=hunan"}},[n("div",{class:t.itemCss,style:{"background-image":"url("+t.hunan+")"}},[n("h4",{staticClass:"text-3xl font-bold text-white"},[t._v("湖南")]),t._v(" "),n("strong",[t._v("Hunan")])])]),t._v(" "),n("nuxt-link",{attrs:{to:"/cooperation-zone?type=jiangxi"}},[n("div",{class:t.itemCss,style:{"background-image":"url("+t.jiangxi+")"}},[n("h4",{staticClass:"text-3xl font-bold text-white"},[t._v("江西")]),t._v(" "),n("strong",[t._v("Jiangxi")])])])],1),t._v(" "),n("div",{staticClass:"flex flex-row justify-center"},[n("nuxt-link",{attrs:{to:"/cooperation-zone?type=sichuan"}},[n("div",{class:t.itemCss,style:{"background-image":"url("+t.sichuan+")"}},[n("h4",{staticClass:"text-3xl font-bold text-white"},[t._v("四川")]),t._v(" "),n("strong",[t._v("Sichuan")])])]),t._v(" "),n("nuxt-link",{attrs:{to:"/cooperation-zone?type=hubei"}},[n("div",{class:t.itemCss,style:{"background-image":"url("+t.hubei+")"}},[n("h4",{staticClass:"text-3xl font-bold text-white"},[t._v("湖北")]),t._v(" "),n("strong",[t._v("Hubei")])])])],1)])])}),[],!1,null,"fa46d8d4",null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r={name:"Schedule"},o=(n(268),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("dl",{staticClass:"relative schedule-wrap"},[n("dt",{staticClass:"px-4 py-2 text-white bg-gradient-to-r from-blue-900"},[t._v("01   10月20日（星期三）")]),t._v(" "),t._m(0),t._v(" "),n("dt",{staticClass:"px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900"},[t._v("\n      02   10月21日上午（星期四）\n    ")]),t._v(" "),t._m(1),t._v(" "),n("dt",{staticClass:"px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900"},[t._v("\n      03   10月21日下午（星期四）\n    ")]),t._v(" "),t._m(2),t._v(" "),n("dt",{staticClass:"px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900"},[t._v("\n      04   10月22日上午（星期五）\n    ")]),t._v(" "),n("dd",{staticClass:"p-4 ml-20 bg-gradient-to-r from-white via-white"},[n("p",[t._v("1、长株潭三市产业对接会")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 mb-2 bg-blue-100 rounded-sm"},[t._v("地点：湘潭市")]),t._v(" "),n("p",[t._v("2、岳阳市电子信息和现代农业产业对接会")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 mb-2 bg-blue-100 rounded-sm"},[t._v("地点：岳阳市")]),t._v(" "),n("P",[t._v("3、郴州市承接台资企业产业转移合作对接会")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"},[t._v("地点：郴州市")])],1),t._v(" "),n("dt",{staticClass:"px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900"},[t._v("\n      04   10月22日下午（星期五）\n    ")]),t._v(" "),t._m(3),t._v(" "),n("dt",{staticClass:"px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900"},[t._v("\n      05   10月21日下午—23日\n    ")]),t._v(" "),t._m(4)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dd",{staticClass:"p-4 ml-20 bg-gradient-to-r from-white via-white"},[n("p",[t._v("领导会见、餐叙交流")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"},[t._v("地点：长沙市")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dd",{staticClass:"p-4 ml-20 bg-gradient-to-r from-white via-white"},[n("p",[t._v("1、第十五届湘台经贸文化交流合作会暨首届海峡两岸产业合作岳麓山论坛开幕式")]),t._v(" "),n("p",[t._v("2、首届海峡两岸产业合作岳麓山论坛")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"},[t._v("地点：长沙市")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dd",{staticClass:"p-4 ml-20 bg-gradient-to-r from-white via-white"},[n("p",[t._v("1、台湾青年企业家打卡长沙及主题座谈")]),t._v(" "),n("p",[t._v("2、长沙国家高新区园区考察")]),t._v(" "),n("p",[t._v("3、国家级长沙经开区园区考察")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"},[t._v("地点：长沙市")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dd",{staticClass:"p-4 ml-20 bg-gradient-to-r from-white via-white"},[n("p",[t._v("台湾青年文化科技湖湘行活动")]),t._v(" "),n("strong",{staticClass:"inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"},[t._v("地点：启动仪式在岳麓书院")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("dd",{staticClass:"p-4 ml-20 bg-gradient-to-r from-white via-white"},[n("p",[t._v("省内相关市州考察活动")])])}],!1,null,"b749ed52",null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(34),n(47),n(252),n(35),{name:"News",data:function(){return{itemCss:"h-20 text-white flex flex-col flex-wrap content-center justify-center text-center bg-gray-300 bg-cover bg-center",topNews:n(269),events:n(270),newsbg:n(271),swiperOption:{loop:!0,autoplay:!0,autoplayTimeout:3e3,effect:"flip",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},posts:[],news:[],loading:!0}},props:{postType:{type:String,default:"projects",validator:function(t){return["blog","projects"].includes(t)}},amount:{type:Number,default:10,validator:function(t){return t>=0&&t<100}},sortBy:{type:Object,default:function(){return{key:"slug",direction:"desc"}},validator:function(t){return"string"==typeof t.key&&"string"==typeof t.direction}}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchPosts("news",5);case 3:return t.posts=e.sent,e.next=6,t.fetchPosts("news",null);case 6:t.news=e.sent,t.news=t.news.filter((function(t){return"coverStory"===t.category})),t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},methods:{fetchPosts:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:e.postType,o=t.length>1&&void 0!==t[1]?t[1]:e.amount,l=t.length>2&&void 0!==t[2]?t[2]:e.sortBy,n.abrupt("return",e.$content(r).sortBy(l.key,l.direction).limit(o).fetch().catch((function(t){return console.error(t)||[]})));case 4:case"end":return n.stop()}}),n)})))()}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-4"},[n("div",{},[t.loading?t._e():n("swiper",{ref:"mySwiper",staticClass:"swiper h-400",attrs:{options:t.swiperOption}},[t._l(t.news,(function(e,r){return n("swiper-slide",{key:r,attrs:{index:r}},[n("article",{staticClass:"relative h-full bg-no-repeat bg-cover bg-center",style:{"background-image":"url('"+e.cover+"')"}},[n("div",{staticClass:"bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full"},[n("LinkPost",{attrs:{post:e}}),t._v(" "),n("p",{staticClass:"mt-1 text-white dark:text-primary-400 mb-0 truncate"},[t._v(t._s(e.description))])],1)])])})),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2),t._v(" "),n("div",{staticClass:"grid grid-cols-3 gap-4 mt-4"},[n("div",{class:t.itemCss,style:{"background-image":"url("+t.topNews+")"}},[n("nuxt-link",{attrs:{to:"/news?type=topNews"}},[n("h4",{staticClass:"text-white font-bold text-2xl"},[t._v("头条新闻")])])],1),t._v(" "),n("div",{class:t.itemCss,style:{"background-image":"url("+t.events+")"}},[n("nuxt-link",{attrs:{to:"/news?type=eventNews"}},[n("h4",{staticClass:"text-white font-bold text-2xl"},[t._v("活动报道")])])],1),t._v(" "),n("div",{class:t.itemCss,style:{"background-image":"url("+t.newsbg+")"}},[n("nuxt-link",{attrs:{to:"/news?type=news"}},[n("h4",{staticClass:"text-white font-bold text-2xl"},[t._v("媒体报道")])])],1)])],1),t._v(" "),n("div",{},[n("ul",{},[t._l(t.posts,(function(e,r){return n("li",{key:r,staticClass:"px-4 py-2 mb-3 bg-gray-100"},[n("h3",{staticClass:"truncate"},[n("nuxt-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("p",{staticClass:"mt-1 dark:text-primary-400 mb-0 truncate"},[t._v(t._s(e.description))])])})),t._v(" "),n("li",{staticClass:"px-4 py-2 mb-2 bg-gray-100"},[n("nuxt-link",{staticClass:"mt-1 dark:text-primary-400 mb-0 truncate",attrs:{to:"/news"}},[t._v("查看更多>>")])],1)],2)])])}),[],!1,null,"1684f928",null);e.default=component.exports;installComponents(component,{LinkPost:n(255).default})},284:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(34),{name:"Scene",components:{VueMasonryWall:n(276).a},data:function(){return{options:{width:500,padding:{2:8,default:12}},posts:[],loading:!0}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.fetchPosts("yuelu-history");case 3:t.posts=e.sent,t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},methods:{fetchPosts:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:"scene",r=t.length>1&&void 0!==t[1]?t[1]:20,o=t.length>2&&void 0!==t[2]?t[2]:{key:"slug",direction:"desc"},n.abrupt("return",e.$content("scene").sortBy(o.key,o.direction).limit(r).fetch().catch((function(t){return console.error(t)||[]})));case 4:case"end":return n.stop()}}),n)})))()}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("vue-masonry-wall",{attrs:{items:t.posts,options:t.options},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return[n("div",{staticClass:"relative h-full pb-8 bg-center bg-no-repeat bg-cover"},[n("img",{attrs:{src:e.cover}})])]}}])})],1)}),[],!1,null,"b9280d5e",null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);var r={name:"AboutUs"},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("img",{attrs:{src:n(272),width:"100%",alt:""}}),t._v(" "),r("p",{staticClass:"pt-4"},[t._v("\n    两岸同胞血浓于水，经贸文化交流密不可分。在后疫情时代的今天，持续深化两岸经贸交流，携手共促产业合作，既是两岸同胞寻求互利共赢的共同追求，更是延续为发展增动力，为合作添合力，壮大中华民族经济的共同期盼。\n    作为全国第五个获批设立海峡两岸产业合作区的省份，湖南将立足于扩大海峡两岸产业合作区影响力，创新打造海峡两岸产业合作岳麓山论坛。论坛以两岸台资行业协会（公会）为发起人，以推动海峡两岸经贸文化交流发展，引导帮助台商、台企加速融入大陆“双循环”新发展格局，加速赢得更大发展空间、创造更多发展机遇为目的，搭建海峡两岸经贸合作的创新平台、产业对接的交流平台、合作区建设的融合平台、惠台政策的示范平台。\n  ")]),t._v(" "),r("div",{staticClass:"grid grid-cols-3 gap-4 mt-4"},[r("div",{staticClass:"bg-blue-100 py-4"},[r("nuxt-link",{attrs:{to:"/subject/论坛主旨"}},[r("h4",{staticClass:"text-blue-600 bg-blue-100 text-center"},[t._v("论坛主旨")])])],1),t._v(" "),r("div",{staticClass:"bg-blue-100 py-4"},[r("nuxt-link",{attrs:{to:"/subject/论坛架构"}},[r("h4",{staticClass:"text-blue-600 bg-blue-100 text-center"},[t._v("论坛架构")])])],1),t._v(" "),r("div",{staticClass:"bg-blue-100 py-4"},[r("nuxt-link",{attrs:{to:"/subject/论坛任务"}},[r("h4",{staticClass:"text-blue-600 bg-blue-100 text-center"},[t._v("论坛任务")])])],1)])])}),[],!1,null,"ccaaef40",null);e.default=component.exports},286:function(t,e,n){t.exports=n.p+"img/xiangtaihui-news.4baa213.jpeg"},287:function(t,e,n){"use strict";n(275)},324:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{swiperOption:{autoplayTimeout:4e3,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{},methods:{goPage:function(t){window.location=t}}},o=(n(287),n(15)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("client-only",[r("div",{staticClass:"banner-wrap h-400 sm:h-400 md:h-500 lg:h-600 xl:h-700"},[r("swiper",{ref:"mySwiper",staticClass:"h-full swiper",attrs:{options:t.swiperOption}},[r("swiper-slide",{staticClass:"banner-1"}),t._v(" "),r("div",{staticClass:"swiper-pagination swiper-pagination-white",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),r("div",{staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),r("div",{staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],1)],1),t._v(" "),r("div",{staticClass:"container px-3 mx-auto text-primary-600 dark:text-primary-400 md:px-0"},[r("ArticleTitle",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{titleChinese:"首页",titleEnglish:"Enter the cooperation zone"}}),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"岳麓山文史",titleEnglish:"Mount Yuelu Culture and History",more:"/yuelu-history"}}),t._v(" "),r("YueluMount"),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"走进合作区",titleEnglish:"Enter the cooperation zone"}}),t._v(" "),r("CooperationZoon"),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"日程安排",titleEnglish:"The schedule"}}),t._v(" "),r("Schedule"),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"发起人来了",titleEnglish:"Originator is coming"}}),t._v(" "),r("img",{attrs:{src:n(274),width:"100%",alt:"",srcset:""}}),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"大咖论道",titleEnglish:"Important Person"}}),t._v(" "),r("img",{attrs:{src:n(274),width:"100%",alt:"",srcset:""}}),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"第二现场",titleEnglish:"Second scene"}}),t._v(" "),r("a",{attrs:{href:"https://m.voc.com.cn/portal/live/detail#/pc?live=484"}},[r("img",{attrs:{src:n(286),width:"100%",alt:"",srcset:""}})]),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"论坛动态",titleEnglish:"Forum dynamics"}}),t._v(" "),r("News"),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"高清现场",titleEnglish:"HD scene"}}),t._v(" "),r("Scene"),t._v(" "),r("ArticleTitle",{attrs:{titleChinese:"关于我们",titleEnglish:"About Us"}}),t._v(" "),r("AboutUs")],1)])],1)}),[],!1,null,"eba6780a",null);e.default=component.exports;installComponents(component,{ArticleTitle:n(279).default,YueluMount:n(280).default,CooperationZoon:n(281).default,Schedule:n(282).default,News:n(283).default,Scene:n(284).default,AboutUs:n(285).default})}}]);