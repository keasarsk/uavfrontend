<template>
  <div>
    电池
    <!-- <e-charts :size="size" :options="options" /> -->
    <dv-percent-pond :style="size" :config="config" />
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
      size: {
        width: '100%',
        // height: '3.875rem'
        height: '2rem'
      }
      
    }
  },
}
</script>

<style scoped>
</style>