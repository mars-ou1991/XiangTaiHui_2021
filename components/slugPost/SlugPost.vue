<template>
  <main>
    <section v-if="post">
      

      <article>
        <div class="h-10"></div>
        <nav class="mb-8" aria-label="go back">
          <router-back class="block" />
        </nav>
        <h5
          v-if="post.createdAt"
          class="inline-block py-1 px-2 my-2 bg-gray text-white text-sm font-medium rounded-sm whitespace-no-wrap"
        >
          {{ formatDate(post.createdAt) }}
        </h5>
        
        <h1 class="">{{ post.title }}</h1>
        <div class="h-6"></div>
        <hr>
        <div class="h-6"></div>
        <p class="mt-1 mb-4 text-primary-600 dark:text-primary-400">{{ post.description }}</p>
        <nuxt-content :document="post" />
      </article>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('zh') || ''
    },
  },
}
</script>

<style lang="scss" scoped>
</style>