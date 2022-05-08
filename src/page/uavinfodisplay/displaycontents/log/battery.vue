<template>
  <div>
    电池
    <!-- <e-charts :size="size" :options="options" /> -->
    <dv-percent-pond :config="config" style="width:120px;height:60px;" />
  </div>
</template>

<script>
// import ECharts from '@/page/uavinfodisplay/displaycontents/ECharts'
// import * as  echarts from 'echarts';

export default {
  components: {
    // ECharts,
  },
  data: function () {
    return {
      config: {
        value: 66,
        localGradient: true
      },
      
    }
  },
}
</script>

<style scoped>
</style>