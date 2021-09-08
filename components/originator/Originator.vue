<template>
  <div class="h-400">
    <swiper ref="mySwiper" class="swiper h-full" :options="swiperOption" v-if="!loading">
      <swiper-slide :index="index" v-for="(post, index) in posts" :key="index">
        <article
          class="relative h-full bg-no-repeat bg-cover bg-center"
          :style="{ 'background-image': `url('${post.cover}')` }"
        >
          <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
            <h3 class="text-white">{{ post.title }}</h3>
            <div class="bg-gradient-to-r from-blue-300 h-1 w-1/2"></div>
            <p class="mt-1 text-white dark:text-primary-400 mb-0">{{ post.description }}</p>
          </div>
        </article>
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Originator',
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      posts: [],
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
    this.posts = await this.fetchPosts()
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