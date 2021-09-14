<template>
  <div class="h-400">
    <swiper ref="mySwiper" class="swiper h-full" :options="swiperOption" v-if="!loading">
      <swiper-slide :index="index" v-for="(post, index) in posts" :key="index" autoplay>
        <article
          class="relative h-full bg-no-repeat bg-cover bg-center"
          :style="{ 'background-image': `url('${post.cover}')` }"
        >
          <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
            <LinkPost :post="post" />
            <div class="bg-gradient-to-r from-blue-300 h-1 w-1/2"></div>
            <p class="mt-1 text-white dark:text-primary-400 mb-0 truncate">{{ post.description }}</p>
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
        autoplay: true,
        autoplayTimeout: 4000,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {  //当屏幕宽度大于等于320
            slidesPerView: 1,
            spaceBetween: 10
          },
          776: {  //当屏幕宽度大于等于776
            slidesPerView: 1,
            spaceBetween: 10
          },
          1000: {  //当屏幕宽度大于等于1000
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {  //当屏幕宽度大于等于1200
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      },
      posts: [],
      loading: true,
    }
  },
  props: {
    postType: {
      type: String,
      default: 'projects',
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