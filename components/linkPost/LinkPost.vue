<template>
  <nuxt-link :to="post.path">
    <h3 class="text-white truncate">{{ post.title }}</h3>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
</style>