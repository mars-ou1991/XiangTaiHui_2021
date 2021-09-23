<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">岳麓山文史</h1>
      <posts post-type="yuelu-history" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('yuelu-history').fetch()
    } catch (e) {
      error({ message: 'Blog posts not found' })
    }
    return { posts }
  },
}
</script>
