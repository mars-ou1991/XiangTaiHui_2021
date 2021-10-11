<template>
  <main>
    <client-only>
      <div class="banner-wrap h-400 sm:h-400 md:h-500 lg:h-600 xl:h-700">
        <swiper ref="mySwiper" class="h-full swiper" :options="swiperOption">
          <swiper-slide class="banner-1"> </swiper-slide>
          <!-- <swiper-slide class="banner-2" @click.native="$router.push('cooperation-zone?type=hunan')"> 
            湖南海峡两岸产业合作区三市片区简介
          </swiper-slide> -->
          <!-- <swiper-slide class="banner-2" @click.native="goPage('http://hunan.voc.com.cn/article/202107/202107042224518766001.html')"> 
            湖南海峡两岸产业合作区三市片区简介
          </swiper-slide> -->
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>

      <div class="container px-3 mx-auto text-primary-600 dark:text-primary-400 md:px-0">
        <ArticleTitle v-show="false" titleChinese="首页" titleEnglish="Enter the cooperation zone" />
        <ArticleTitle titleChinese="岳麓山文史" titleEnglish="Mount Yuelu Culture and History" more="/yuelu-history" />

        <YueluMount />

        <ArticleTitle titleChinese="走进合作区" titleEnglish="Enter the cooperation zone" />

        <CooperationZoon />

        <ArticleTitle titleChinese="日程安排" titleEnglish="The schedule" />
        <Schedule />

        <ArticleTitle titleChinese="发起人来了" titleEnglish="Originator is coming" />
        <!-- <Originator postType="originator" /> -->
        <img src="~static/comming-soon.png" width="100%" alt="" srcset="">

        <ArticleTitle titleChinese="大咖论道" titleEnglish="Important Person" />

        <!-- <Originator postType="important-person" /> -->
        <img src="~static/comming-soon.png" width="100%" alt="" srcset="">

        
        <ArticleTitle titleChinese="第二现场" titleEnglish="Second scene" />
        <!-- <iframe
          frameborder="0"
          width="100%"
          class="h-400 sm:h-400 md:h-500 lg:h-600 xl:h-700"
          src="https://v.qq.com/txp/iframe/player.html?vid=g3274e2l99l"
          allowFullScreen="true"
        ></iframe> -->
        
        <a href="https://moment.rednet.cn/live/index.html?liveid=3386">
          <img src="~static/xiangtaihui-news.jpeg" width="100%" alt="" srcset="">
        </a>
        
        <ArticleTitle titleChinese="论坛动态" titleEnglish="Forum dynamics" />
        <News />

        <ArticleTitle titleChinese="高清现场" titleEnglish="HD scene" />
        <Scene />
        <!-- <img src="~static/comming-soon.png" width="100%" alt="" srcset=""> -->

        <ArticleTitle titleChinese="关于我们" titleEnglish="About Us" />

        <AboutUs />
      </div>
    </client-only>
  </main>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        // loop: true,
        // autoplay: true,
        autoplayTimeout: 4000,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {},
  methods: {
    goPage(href) {
      window.location = href
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 0;
}

.banner-wrap {
  width: 100%;
  padding-bottom: 50px;
  // ::v-deep div {
  //   height: 100%;
  // }
}
.banner-1 {
  height: 100%;
  background: url('~static/banner-1.png') center no-repeat;
  background-size: contain;
  background-color: #0d4592;
}
.banner-2 {
  height: 100%;
  background: url('~static/banner-2.jpg') center no-repeat;
  background-size: contain;
  background-color: rgb(124, 95, 65);
  cursor: pointer;
}
// .banner-2 {
//   height: 100%;
//   background-color: #0d4592;
//   font-size: 36px;
//   color: #fff;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
// }

.swiper {
  height: 100%;
  width: 100%;
}
</style>