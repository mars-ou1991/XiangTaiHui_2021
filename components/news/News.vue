<template>
  <div class="grid grid-cols-2 gap-4">
    <div class="">
      <swiper ref="mySwiper" class="swiper h-400" :options="swiperOption" v-if="!loading">
        <swiper-slide :index="index" v-for="(post, index) in posts" :key="index">
          <article
            class="relative h-full bg-no-repeat bg-cover bg-center"
            :style="{ 'background-image': `url('${post.cover}')` }"
          >
            <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
              <h3 class="text-white">{{ post.title }}</h3>
              <!-- <div class="bg-gradient-to-r from-blue-300 h-1"></div> -->
              <p class="mt-1 text-white dark:text-primary-400 mb-0 truncate">{{ post.description }}</p>
            </div>
          </article>
        </swiper-slide>
        <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div>
      </swiper>
      <div class="grid grid-cols-3 gap-4 mt-4">
        <div :class="itemCss" :style="{ 'background-image': `url(${jiangxi})` }">
          <h4 class="text-white font-bold text-2xl">头条新闻</h4>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${jiangxi})` }">
          <h4 class="text-white font-bold text-2xl">活动报道</h4>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${jiangxi})` }">
          <h4 class="text-white font-bold text-2xl">媒体报道</h4>
        </div>
      </div>
    </div>
    <div class="">
      <ul class="">
        <li v-for="(item, index) in posts" :key="index" class="px-4 py-2 mb-2 bg-gray-100">
          <h3 class="truncate">
            <a href="" class="text-blue-700">{{ item.title }}</a>
          </h3>
          <p class="mt-1 dark:text-primary-400 mb-0 truncate">{{ item.description }}</p>
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
      jiangxi: require('@/static/jiangxi.png'),
      swiperOption: {
        loop: true,
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
    // this.news = await this.fetchPosts('news')
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