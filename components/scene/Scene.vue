<template>
  <section>
    <vue-masonry-wall :items="items" :options="options" @append="append">
      <template v-slot:default="{ item }">
        <!-- <div class="Item">
          <img :src="item.image" />
          <div class="Content">
            <h5 class="text-ellipsis-1l">{{ item.title }}</h5>
            <p class="text-ellipsis-2l">{{ item.content }}</p>
          </div>
        </div> -->

        <div class="h-full bg-no-repeat bg-cover bg-center relative pb-8">
          <img :src="item.image" />
          <div class="bg-gradient-to-t px-4 py-3 pt-10 absolute bottom-0 from-blue-900 via-blue-900 w-full">
            <h3 class="text-white truncate">{{ item.title }}</h3>
            <div class="bg-gradient-to-r from-blue-300 h-1 w-1/2"></div>
            <p class="mt-1 text-white dark:text-primary-400 mb-0 truncate">{{ item.content }}</p>
          </div>
        </div>
      </template>
    </vue-masonry-wall>
  </section>
</template>

<script>
import VueMasonryWall from 'vue-masonry-wall'
export default {
  name: 'Scene',
  components: { VueMasonryWall },
  data() {
    return {
      options: {
        width: 300,
        padding: {
          2: 8,
          default: 12,
        },
      },
      items: [
        {
          title: 'Sed non ante non cras amet',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non sagittis leo. Vestibulum sit amet metus nec neque dignissim dapibus.',
          image: 'https://picsum.photos/id/1015/600/600',
        },
        {
          title: 'Curabitur sit amet nunc',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mollis erat. Aliquam erat volutpat. Nunc erat lacus, rhoncus nec.',
          image: 'https://picsum.photos/id/1019/600/700',
        },
        {
          title: 'Proin pharetra, ante metus',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac diam ac ex efficitur posuere. Pellentesque cursus pellentesque risus, non.',
          image: 'https://picsum.photos/id/1039/600/800',
        },
        {
          title: 'Cras pharetra non enim a',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada varius nibh, a malesuada nisi feugiat eget. Aenean convallis semper.',
          image: 'https://picsum.photos/id/1042/600/300',
        },
      ],
    }
  },
  methods: {
    append() {
      // append method
    },
  },
}
</script>

<style lang="scss" scoped>
</style>