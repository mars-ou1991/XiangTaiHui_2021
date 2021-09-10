<template>
  <section>
    <vue-masonry-wall :items="posts" :options="options">
      <template v-slot:default="{ item }">
        <div class="h-full bg-no-repeat bg-cover bg-center relative pb-8">
          <img :src="item.cover" />
          <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
            <LinkPost :post="item" class="text-white truncate" />
            <div class="bg-gradient-to-r from-blue-300 h-1 w-1/2"></div>
            <p class="mt-1 text-white dark:text-primary-400 mb-0 truncate">{{ item.description }}</p>
          </div>
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
      amount = 20,
      sortBy = {
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      }
    ) {
      return this.$content('scene')
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