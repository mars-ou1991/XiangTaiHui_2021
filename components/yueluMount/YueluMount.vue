<template>
  <carousel-3d width="500" height="320" border="0" v-if="!loading">
    <slide :index="index" v-for="(post, index) in posts" :key="index">
      <article class="relative h-full bg-no-repeat bg-cover" :style="{ 'background-image': `url('${post.cover}')` }">
        <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
          <h3 class="text-white">{{ post.title }}</h3>
          <p class="mt-1 text-white dark:text-primary-400 mb-0">{{ post.description }}</p>
        </div>
      </article>
    </slide>
  </carousel-3d>
</template>

<script>
export default {
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
  data() {
    return {
      posts: [],
      loading: true,
    }
  },
  async mounted() {
    this.loading = true
    this.posts = await this.fetchPosts('yuelu-history')
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
