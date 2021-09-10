<template>
  <SlugPost :post="post" type="yuelu-history" />
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('important-person', params.slug).fetch()
      // const article = await $content('yuelu-history', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog post not found' })
    }
    return { post }
  },
}
</script>
