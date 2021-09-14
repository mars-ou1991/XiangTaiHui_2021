<template>
  <div class="pt-20 artic-title">
    <div class="relative text-primary-600 inline-block max-w-full pr-10 md:pr-40 mb-10">
      <h2>{{ titleChinese }}</h2>
      <strong>{{ titleEnglish }}</strong>
      <div class="absolute h-8 bg-gradient-to-r w-full top-1 from-blue-300 -z-1"></div>
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
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 32px;
}
</style>