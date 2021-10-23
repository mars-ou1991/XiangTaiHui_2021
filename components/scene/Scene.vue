<template>
  <section>
    <vue-masonry-wall :items="posts" :options="options">
      <template v-slot:default="{ item }">
        <div class="relative h-full pb-8 bg-center bg-no-repeat bg-cover">
          <img :src="item.cover" />
          <!-- <div class="absolute bottom-0 w-full px-4 py-3 pt-10 bg-gradient-to-t from-blue-900 via-blue-900">
            <LinkPost :post="item" class="text-white truncate" />
            <div class="w-1/2 h-1 bg-gradient-to-r from-blue-300"></div>
            <p class="mt-1 mb-0 text-white truncate dark:text-primary-400">{{ item.description }}</p>
          </div> -->
        </div>
      </template>
    </vue-masonry-wall>
  </section>
</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'
export default {
  name: 'Scene',
  components: { VueMasonryWall },
  props: {
    limit: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      options: {
        width: 500,
        padding: {
          2: 8,
          default: 12,
        },
      },
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
    async fetchPosts(
      postType = 'scene',
      amount = this.limit || 29,
      sortBy = {
        key: 'sort',
        direction: 'desc', // you probably want 'asc' here
      }
    ) {
      return this.$content('scene')
        .sortBy('sort', 'asc')
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>

<style lang="scss" scoped>
</style>