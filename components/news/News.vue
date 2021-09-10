<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="">
      <swiper ref="mySwiper" class="swiper h-400" :options="swiperOption" v-if="!loading">
        <swiper-slide :index="index" v-for="(post, index) in news" :key="index">
          <article
            class="relative h-full bg-no-repeat bg-cover bg-center"
            :style="{ 'background-image': `url('${post.cover}')` }"
          >
            <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
              <LinkPost :post="post" />
              <!-- <div class="bg-gradient-to-r from-blue-300 h-1"></div> -->
              <p class="mt-1 text-white dark:text-primary-400 mb-0 truncate">{{ post.description }}</p>
            </div>
          </article>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <div :class="itemCss" :style="{ 'background-image': `url(${topNews})` }">
          <nuxt-link to="/news?type=topNews"><h4 class="text-white font-bold text-2xl">头条新闻</h4></nuxt-link>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${events})` }">
          <nuxt-link to="/news?type=eventNews"><h4 class="text-white font-bold text-2xl">活动报道</h4></nuxt-link>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${newsbg})` }">
          <nuxt-link to="/news?type=news"><h4 class="text-white font-bold text-2xl">媒体报道</h4></nuxt-link>
        </div>
      </div>
    </div>
    <div class="">
      <ul class="">
        <li v-for="(item, index) in posts" :key="index" class="px-4 py-2 mb-3 bg-gray-100">
          <h3 class="truncate">
            <nuxt-link :to="item.path">{{ item.title }}</nuxt-link>
          </h3>
          <p class="mt-1 dark:text-primary-400 mb-0 truncate">{{ item.description }}</p>
        </li>
        <li class="px-4 py-2 mb-2 bg-gray-100">
          <nuxt-link to="/news" class="mt-1 dark:text-primary-400 mb-0 truncate">查看更多>></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      itemCss:
        'h-20 text-white flex flex-col flex-wrap content-center justify-center text-center bg-gray-300 bg-cover bg-center',
      topNews: require('@/static/topNews.png'),
      events: require('@/static/events.png'),
      newsbg: require('@/static/news.png'),
      swiperOption: {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        effect: 'flip',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      posts: [],
      news: [],
      loading: true,
    }
  },
  props: {
    postType: {
      type: String,
      default: 'projects',
      validator: (val) => ['blog', 'projects'].includes(val),
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  async mounted() {
    this.loading = true
    this.posts = await this.fetchPosts('news', 5)
    this.news = await this.fetchPosts('news', null)
    this.news = this.news.filter((item) => item.category === 'coverStory')
    this.loading = false
  },
  methods: {
    async fetchPosts(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>

<style lang="scss" scoped>
</style>