<template>
  <div>
    <h4 class="text-primary-600 font-bold text-center">海峡两岸产业合作区</h4>
    <p class="text-primary-600 text-center">CROSS-STRAIT INDUSTRIAL COOPERATION</p>
    <div
      class="flex flex-wrap py-6 bg-no-repeat bg-center flex-col bg-contain"
      :style="{ backgroundImage: `url(${chinaMap})` }"
    >
      <div class="flex flex-row justify-center">
        <div :class="itemCss" :style="{ 'background-image': `url(${guangxi})` }">
          <h4 class="text-white font-bold text-2xl">广西</h4>
          <strong>Guangxi</strong>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${hunan})` }">
          <h4 class="text-white font-bold text-2xl">湖南</h4>
          <strong>Hunan</strong>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${jiangxi})` }">
          <h4 class="text-white font-bold text-2xl">江西</h4>
          <strong>Jiangxi</strong>
        </div>
      </div>
      <div class="flex flex-row justify-center">
        <div :class="itemCss" :style="{ 'background-image': `url(${sichuan})` }">
          <h4 class="text-white font-bold text-2xl">四川</h4>
          <strong>Sichuan</strong>
        </div>
        <div :class="itemCss" :style="{ 'background-image': `url(${hubei})` }">
          <h4 class="text-white font-bold text-2xl">湖北</h4>
          <strong>Hubei</strong>
        </div>
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
        'sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 text-white flex flex-wrap flex-col content-center justify-center text-center rounded-full bg-gray-300 bg-cover lg:mx-20 md:mx-10 sm:mx-8 my-8',
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
</style>