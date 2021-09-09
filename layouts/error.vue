<template>
  <main>
    <section>
      <template v-if="error.statusCode === 404">
        <br />
        <h1 class="title">{{ '页面不存在' }}</h1>
        <br />
        <br />
        <h2 class="subtitle">404</h2>
        <p class="mb-4">看起来像你跟着一个失效链接或输入一个URL,这个网站不存在。</p>
      </template>
      <template v-else>
        <h1 class="title">出现了一个错误</h1>
        <p class="mb-4">看起来像你跟着一个失效链接或输入一个URL,这个网站不存在。</p>
      </template>
      <nav class="mt-12" aria-label="go to home">
        <router-back to="/" class="block" />
      </nav>
    </section>
  </main>
</template>

<script>
export default {
  name: 'error',
  props: ['error'],
}
</script>
