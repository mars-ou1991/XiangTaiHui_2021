<template>
  <div>
    <h4 class="text-primary-600 font-bold text-center text-2xl">海峡两岸产业合作区</h4>
    <p class="text-primary-600 text-center">CROSS-STRAIT INDUSTRIAL COOPERATION</p>
    <div
      class="flex flex-wrap py-6 bg-no-repeat bg-center flex-col bg-contain"
      :style="{ backgroundImage: `url(${chinaMap})` }"
    >
      <div class="flex flex-row justify-center">
        <nuxt-link to="/cooperation-zone/海峡两岸产业合作区（广西）"
          ><div :class="itemCss" :style="{ 'background-image': `url(${guangxi})` }">
            <h4 class="text-white font-bold text-3xl">广西</h4>
            <strong>Guangxi</strong>
          </div>
        </nuxt-link>
        <nuxt-link to="/cooperation-zone/海峡两岸产业合作区（湖南）">
          <div :class="itemCss" :style="{ 'background-image': `url(${hunan})` }">
            <h4 class="text-white font-bold text-3xl">湖南</h4>
            <strong>Hunan</strong>
          </div>
        </nuxt-link>
        <nuxt-link to="/cooperation-zone/海峡两岸产业合作区（江西）">
          <div :class="itemCss" :style="{ 'background-image': `url(${jiangxi})` }">
            <h4 class="text-white font-bold text-3xl">江西</h4>
            <strong>Jiangxi</strong>
          </div>
        </nuxt-link>
      </div>
      <div class="flex flex-row justify-center">
        <nuxt-link to="/cooperation-zone/海峡两岸产业合作区（四川）">
          <div :class="itemCss" :style="{ 'background-image': `url(${sichuan})` }">
            <h4 class="text-white font-bold text-3xl">四川</h4>
            <strong>Sichuan</strong>
          </div>
        </nuxt-link>
        <nuxt-link to="/cooperation-zone/海峡两岸产业合作区（湖北）">
          <div :class="itemCss" :style="{ 'background-image': `url(${hubei})` }">
            <h4 class="text-white font-bold text-3xl">湖北</h4>
            <strong>Hubei</strong>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CooperationZoon',
  data() {
    return {
      itemCss:
        'item w-24 h-24 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 text-white flex flex-wrap flex-col content-center justify-center text-center rounded-full bg-gray-300 bg-cover lg:mx-20 md:mx-10 sm:mx-8 mx-3 my-4 md:my-8',
      chinaMap: require('@/static/china-map.png'),
      hunan: require('@/static/hunan.png'),
      hubei: require('@/static/hubei.png'),
      sichuan: require('@/static/sichuan.png'),
      jiangxi: require('@/static/jiangxi.png'),
      guangxi: require('@/static/guangxi.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}
</style>