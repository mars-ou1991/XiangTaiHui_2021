<template>
  <ul v-if="posts.length > 0" class="cards">
    <li v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="`${postType}/${post.slug}`" class="card card--clickable">
        <template>
          <span class="flex-1">
            <h6 v-if="grtCategory(post.category)" class="inline-block px-2 py-1 mr-1 text-sm font-medium text-white rounded-sm bg-gray">
              {{ grtCategory(post.category) }}
            </h6>
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="mt-2">{{ post.description }}</p>
          </span>
          <img v-if="post.cover" class="cover-image" :src="post.cover" />
        </template>

        <template v-if="false">
          <span class="w-full">
            <span class="flex justify-between align-baseline">
              <h3 class="card-title">{{ post.title }}</h3>
              <h6
                v-if="post.createdAt"
                class="self-start inline-block px-2 py-1 mt-0 text-base font-medium text-white whitespace-no-wrap rounded-sm bg-gray"
              >
                {{ formatDate(post.createdAt) }}
              </h6>
            </span>
            <p class="mt-2">{{ post.description }}</p>
          </span>
        </template>
      </nuxt-link>
    </li>
  </ul>
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="card">
      <content-placeholders :rounded="true" :class="placeholder">
        <content-placeholders-heading />
      </content-placeholders>
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Posts not found' : 'Post not found' }}
  </p>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    postType: {
      type: String,
      default: 'news',
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 80,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'createdAt',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      posts: [],
      loading: true,
      types: [
        { label: '封面故事', value: 'coverStory' },
        { label: '头条新闻', value: 'topNews' },
        { label: '活动报道', value: 'eventNews' },
        { label: '媒体报道', value: 'news' },
        { label: '湖南', value: 'hunan' }, 
        { label: '湖北', value: 'hubei' }, 
        { label: '江西', value: 'jiangxi' }, 
        { label: '广西', value: 'guangxi' }, 
        { label: '四川', value: 'sichuan' }
      ],
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6']
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])] // repeats classes after one another
    },
  },
  async mounted() {
    function getParameterByName(name, url = window.location.href) {
      name = name.replace(/[\[\]]/g, '\\$&')
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url)
      if (!results) return null
      if (!results[2]) return ''
      return decodeURIComponent(results[2].replace(/\+/g, ' '))
    }
    const type = getParameterByName('type')
    this.loading = true
    this.posts = await this.fetchPosts()
    console.log(this.posts)
    if (type) {
      this.posts = this.posts.filter((item) => item.category === type)
    }
    this.loading = false
  },
  methods: {
    grtCategory(category) {
      return this.types.filter((item) => item.value === category)[0]?.label
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchPosts(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
