<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">合作区</h1>
      <posts post-type="cooperation-zone" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('cooperation-zone').fetch()
    } catch (e) {
      error({ message: 'Blog posts not found' })
    }
    return { posts }
  },
}
</script>
