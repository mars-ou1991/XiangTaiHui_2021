<template>
  <nav class="fixed w-full px-2 py-2 bg-transparent top-0 z-10 bg-white">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <div>
        <nuxt-link to="/"><img src="~static/logo.png" class="h-10 md:h-12" alt="" /></nuxt-link>
      </div>

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-sm font-sans">
          <li :class="{ active: active === 0 }" @click="scrollTo(0)" class="flex-auto">
            <span class="text-lg">首页</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 1 }" @click="scrollTo(1)" class="flex-auto">
            <span class="text-lg">岳麓山文史</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 2 }" @click="scrollTo(2)" class="flex-auto">
            <span class="text-lg">走进合作区</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 3 }" @click="scrollTo(3)" class="flex-auto">
            <span class="text-lg">日程安排</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 4 }" @click="scrollTo(4)" class="flex-auto">
            <span class="text-lg">发起人来了</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 5 }" @click="scrollTo(5)" class="flex-auto">
            <span class="text-lg">大咖论道</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 6 }" @click="scrollTo(6)" class="flex-auto">
            <span class="text-lg">第二现场</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 7 }" @click="scrollTo(7)" class="flex-auto">
            <span class="text-lg">论坛动态</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 8 }" @click="scrollTo(8)" class="flex-auto">
            <span class="text-lg">高清现场</span>
          </li>
          <!-- <li class="text-gray-200">/</li> -->
          <li :class="{ active: active === 9 }" @click="scrollTo(9)" class="flex-auto">
            <span class="text-lg">关于我们</span>
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="
          p-5
          transform
          top-0
          left-0
          w-64
          bg-white
          fixed
          h-full
          overflow-auto
          ease-in-out
          transition-all
          duration-300
          z-30
        "
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button class="absolute top-0 right-0 mt-4 mr-4" @click="isOpen = false">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
          <img src="~static/logo.png" width="100%" alt="" />
        </span>

        <ul class="divide-y font-sans">
          <li @click="scrollTo(0, true)" class="flex-auto">
            <span class="my-4 inline-block">首页</span>
          </li>
          <li @click="scrollTo(1, true)" class="flex-auto">
            <span class="my-4 inline-block">岳麓山文史</span>
          </li>
          <li @click="scrollTo(2, true)" class="flex-auto">
            <span class="my-4 inline-block">走进合作区</span>
          </li>
          <li @click="scrollTo(3, true)" class="flex-auto">
            <span class="my-4 inline-block">日程安排</span>
          </li>
          <li @click="scrollTo(4, true)" class="flex-auto">
            <span class="my-4 inline-block">发起人来了</span>
          </li>
          <li @click="scrollTo(5, true)" class="flex-auto">
            <span class="my-4 inline-block">大咖论道</span>
          </li>
          <li @click="scrollTo(6, true)" class="flex-auto">
            <span class="my-4 inline-block">第二现场</span>
          </li>
          <li @click="scrollTo(7, true)" class="flex-auto">
            <span class="my-4 inline-block">论坛动态</span>
          </li>
          <li @click="scrollTo(8, true)" class="flex-auto">
            <span class="my-4 inline-block">高清现场</span>
          </li>
          <li @click="scrollTo(9, true)" class="flex-auto">
            <span class="my-4 inline-block">关于我们</span>
          </li>
          <!-- <li>
            <a href="#" class="cta bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white font-semibold">Sign Up</a>
          </li> -->
        </ul>
      </aside>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      active: this.$route.path == '/' ? 0 : -1,
    }
  },
  watch: {
    // eslint disable next line
    '$route.path': function () {
      // console.log(222)
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.onScroll)
    }
  },
  destroy() {
    if (process.browser) {
      window.removeEventListener('scroll', this.onScroll)
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
    onScroll() {
      // 获取所有锚点元素
      const navContents = document.querySelectorAll('.artic-title')
      // 所有锚点元素的 offsetTop
      const offsetTopArr = []
      navContents.forEach((item) => {
        offsetTopArr.push(item.offsetTop)
      })
      // 获取当前文档流的 scrollTop
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义当前点亮的导航下标
      let navIndex = 0
      for (let n = 0; n < offsetTopArr.length; n++) {
        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是n了
        if (scrollTop >= offsetTopArr[n]) {
          navIndex = n
        }
      }
      this.active = navIndex
    },
    // 跳转到指定索引的元素
    scrollTo(index, close) {
      if (close) this.isOpen = false
      // 获取目标的 offsetTop
      const targetOffsetTop = document.querySelectorAll('.artic-title')[index].offsetTop
      // 获取当前 offsetTop
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp()
      } else {
        // 往下滑
        smoothDown()
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown)
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP
          } else {
            scrollTop = targetOffsetTop
          }
          document.body.scrollTop = scrollTop
          document.documentElement.scrollTop = scrollTop
          requestAnimationFrame(smoothUp)
        }
      }
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>

<style lang="scss" scoped>
.active {
  border-bottom: solid 2px blue;
  padding-bottom: 4px;
}
</style>