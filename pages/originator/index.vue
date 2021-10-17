<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">发起人</h1>
      <posts post-type="originator" :amount="80" :sortBy="{
        key: 'sort',
        direction: 'asc', 
      }" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    let posts
    try {
      posts = await $content('originator').fetch()
    } catch (e) {
      error({ message: 'Blog posts not found' })
    }
    return { posts }
  },
}
</script>
