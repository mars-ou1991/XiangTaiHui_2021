<template>
  <div class="pt-20 artic-title">
    <nuxt-link :to="more" v-if="more">查看更多>></nuxt-link>
    <div class="relative inline-block max-w-full pr-10 mb-10 text-primary-600 md:pr-40">
      <h2 class="">{{ titleChinese }}</h2>
      <strong>{{ titleEnglish }}</strong>
      <div class="absolute w-full h-8 bg-gradient-to-r top-1 from-blue-300 -z-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleTitle',
  props: {
    titleChinese: {
      type: String,
      default: '中文标题',
    },
    titleEnglish: {
      type: String,
      default: 'English Title',
    },
    more: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>
.artic-title {
  position: relative;
}
a {
  position: absolute;
  right: 0;
  top: 5rem;
}
h2 {
  font-size: 32px;
}
</style>