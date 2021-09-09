<template>
  <main>
    <client-only>
      <div class="banner-wrap sm:h-300 md:h-500 lg:h-600 xl:h-700">
        <swiper ref="mySwiper" class="swiper h-full" :options="swiperOption">
          <swiper-slide class="banner-1"> </swiper-slide>
          <swiper-slide class="banner-1"> </swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
      </div>

      <div class="text-primary-600 dark:text-primary-400 container mx-auto">
        <ArticleTitle v-show="false" titleChinese="首页" titleEnglish="Enter the cooperation zone" />
        <ArticleTitle titleChinese="岳麓山文史" titleEnglish="Mount Yuelu Culture and History" />

        <YueluMount />

        <ArticleTitle titleChinese="走进合作区" titleEnglish="Enter the cooperation zone" />

        <CooperationZoon />

        <ArticleTitle titleChinese="日程安排" titleEnglish="The schedule" />
        <Schedule />

        <ArticleTitle titleChinese="发起人来了" titleEnglish="Originator is coming" />
        <Originator postType="originator" />

        <ArticleTitle titleChinese="大咖论道" titleEnglish="Important Person" />

        <Originator postType="important-person" />
        <ArticleTitle titleChinese="第二现场" titleEnglish="Second scene" />
        <ArticleTitle titleChinese="论坛动态" titleEnglish="Forum dynamics" />
        <News />

        <ArticleTitle titleChinese="高清现场" titleEnglish="HD scene" />
        <Scene />

        <ArticleTitle titleChinese="关于我们" titleEnglish="About Us" />

        <AboutUs />
      </div>
    </client-only>

    <FooterContent />

    <section class="mt-8">
      <h3 class="text-primary-600 dark:text-primary-400 max-w-5xl mx-auto">Latest blog post</h3>
      <posts post-type="blog" :amount="1" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        auto: true,
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
  methods: {},
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
  background: url('~static/banner-1.png') center;
  background-size: cover;
}

.swiper {
  height: 100%;
  width: 100%;
}
</style>