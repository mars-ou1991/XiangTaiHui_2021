<template>
  <main>
    <section v-if="posts" class="w-full max-w-5xl mx-auto">
      <h1 class="title">新闻</h1>
      <posts post-type="news" type="" :amount="10" />
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, error }) {
    // function getParameterByName(name, url = window.location.href) {
    //   name = name.replace(/[\[\]]/g, '\\$&')
    //   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    //     results = regex.exec(url)
    //   if (!results) return null
    //   if (!results[2]) return ''
    //   return decodeURIComponent(results[2].replace(/\+/g, ' '))
    // }
    // const type = getParameterByName('type')
    let posts
    try {
      posts = await $content('news').fetch()
    } catch (e) {
      error({ message: 'Blog posts not found' })
    }
    // if (type) {
    //   posts = posts.filter
    // }
    return { posts }
  },
}
</script>
