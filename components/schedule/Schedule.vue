<template>
  <div>
    <dl class="relative schedule-wrap">
      <dt class="px-4 py-2 text-white bg-gradient-to-r from-blue-900">01&nbsp;&nbsp;&nbsp;10月20日（星期三）</dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        国台办领导、省领导会见湘台会重要嘉宾和宴请参会嘉宾
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        02&nbsp;&nbsp;&nbsp;10月21日上午（星期四）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>1、第十五届湘台经贸文化交流合作会暨首届海峡两岸产业合作岳麓山论坛开幕仪式</p>
        <p>2、首届海峡两岸产业合作岳麓山论坛</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：长沙市华天大酒店</strong>
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        03&nbsp;&nbsp;&nbsp;10月21日下午（星期四）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>1、产业合作区座谈会</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：长沙市华天大酒店</strong>
        <p>2、台湾青年企业家走进长沙网红打卡点</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm"
          >地点：长沙智能网联汽车测试区、马栏山视频文创产业园、文和友、茶颜悦色等</strong
        >
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        04&nbsp;&nbsp;&nbsp;10月22日上午（星期五）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>海峡两岸产业合作区（湖南）专题对接活动：</p>
        <p>1、长株潭三市产业对接会</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：湘潭市</strong>
        <p>2、岳阳·电子信息和现代农业产业对接会</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：岳阳市</strong>
        <P>3、郴州·承接台资企业产业转移合作对接会</P>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：郴州市</strong>
      </dd>

      <dt class="px-4 py-2 mt-10 text-white bg-gradient-to-r from-blue-900">
        04&nbsp;&nbsp;&nbsp;10月22日上午（星期五）
      </dt>
      <dd class="p-4 ml-20 bg-gradient-to-r from-white via-white">
        <p>1、企业投资考察活动</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：湖南省内相关市州</strong>
        <p>2、海峡两岸媒体联合采访</p>
        <strong class="inline-block px-4 py-1 mt-4 bg-blue-100 rounded-sm">地点：长沙市、湘潭市、岳阳市、郴州市</strong>
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