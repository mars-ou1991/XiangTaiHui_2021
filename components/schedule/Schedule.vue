<template>
  <div>
    <dl class="relative schedule-wrap">
      <dt class="px-4 py-2 text-white bg-gradient-to-r from-blue-900">01&nbsp;&nbsp;&nbsp;10月20日（星期三）</dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>领导会见、餐叙交流</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：长沙市</strong>
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        02&nbsp;&nbsp;&nbsp;10月21日上午（星期四）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>1、第十五届湘台经贸文化交流合作会暨首届海峡两岸产业合作岳麓山论坛开幕式</p>
        <p>2、首届海峡两岸产业合作岳麓山论坛</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：长沙市</strong>
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        03&nbsp;&nbsp;&nbsp;10月21日下午（星期四）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>1、台湾青年企业家打卡长沙及主题座谈</p>
        <p>2、长沙国家高新区园区考察</p>
        <p>3、国家级长沙经开区园区考察</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"
          >地点：长沙市</strong
        >
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        04&nbsp;&nbsp;&nbsp;10月22日上午（星期五）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>1、长株潭三市产业对接会</p>
        <strong class="inline-block px-4 py-1 mt-4 mb-2 bg-blue-100 rounded-sm">地点：湘潭市</strong>
        <p>2、岳阳市电子信息和现代农业产业对接会</p>
        <strong class="inline-block px-4 py-1 mt-4 mb-2 bg-blue-100 rounded-sm">地点：岳阳市</strong>
        <P>3、郴州市承接台资企业产业转移合作对接会</P>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：郴州市</strong>
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        04&nbsp;&nbsp;&nbsp;10月22日下午（星期五）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>台湾青年文化科技湖湘行活动</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：启动仪式在岳麓书院</strong>
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        05&nbsp;&nbsp;&nbsp;10月21日下午—23日
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>省内相关市州考察活动</p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Schedule',
}
</script>

<style lang="scss" scoped>
.schedule-wrap::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background-color: #a3bee4;
  left: 25px;
  z-index: -1;
}
</style>