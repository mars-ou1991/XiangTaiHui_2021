<template>
  <div>
    <img src="~static/about-us.png" width="100%" alt="" />
    <p class="pt-4">
      两岸同胞血浓于水，经贸文化交流密不可分。在后疫情时代的今天，持续深化两岸经贸交流，携手共促产业合作，既是两岸同胞寻求互利共赢的共同追求，更是延续为发展增动力，为合作添合力，壮大中华民族经济的共同期盼。
      作为全国第五个获批设立海峡两岸产业合作区的省份，湖南将立足于扩大海峡两岸产业合作区影响力，创新打造海峡两岸产业合作岳麓山论坛。论坛以两岸台资行业协会（公会）为发起人，以推动海峡两岸经贸文化交流发展，引导帮助台商、台企加速融入大陆“双循环”新发展格局，加速赢得更大发展空间、创造更多发展机遇为目的，搭建海峡两岸经贸合作的创新平台、产业对接的交流平台、合作区建设的融合平台、惠台政策的示范平台。
    </p>

    <div class="grid grid-cols-3 gap-4 mt-4">
      <div class="bg-blue-100 py-4">
        <nuxt-link to="/subject/论坛主旨"><h4 class="text-blue-600 bg-blue-100 text-center">论坛主旨</h4></nuxt-link>
      </div>
      <div class="bg-blue-100 py-4">
        <nuxt-link to="/subject/论坛架构"><h4 class="text-blue-600 bg-blue-100 text-center">论坛架构</h4></nuxt-link>
      </div>
      <div class="bg-blue-100 py-4">
        <nuxt-link to="/subject/论坛任务"><h4 class="text-blue-600 bg-blue-100 text-center">论坛任务</h4></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
}
</script>

<style lang="scss" scoped>
</style>