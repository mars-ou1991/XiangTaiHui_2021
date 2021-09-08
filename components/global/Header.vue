<template>
  <nav class="scrim-bg fixed z-40 top-0 inset-x-0 px-3 bg-white" aria-label="Main Menu">
    <ul class="flex nav-list items-center">
      <li>
        <img src="~static/logo.png" class="h-16" alt="">
      </li>
      <li class="flex-auto tc"><nuxt-link to="">首页</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">岳麓山文史</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">合作区概览</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">论坛看点</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">论坛动态</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">第二现场</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">大咖论道</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">高清现场</nuxt-link></li>
      <li>/</li>
      <li class="flex-auto"><nuxt-link to="">关于我们</nuxt-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
li {
  text-align: center;
}
</style>
