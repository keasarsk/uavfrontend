<template>
  <div>

    <e-charts :size="size" :options="options" />
  </div>
</template>

<script>
import ECharts from '@/page/uavinfodisplay/displaycontents/ECharts'
// import * as  echarts from 'echarts';

export default {
  components: {
    ECharts,
  },
  data: function () {
    return {
      options: {
        series: [
            {
            type: 'gauge',
            // 进度蓝色半圈
            progress: {
                show: true,
                width: 10
            },
            // 白半圈
            axisLine: {
                lineStyle: {
                width: 10
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                length: 5,
                lineStyle: {
                width: 0,
                color: '#999'
                }
            },
            // 仪表盘一圈数字
            axisLabel: {
                distance: 5,
                color: '#999',
                fontSize: 0
            },
            // 指针
            anchor: {
                show: true,
                showAbove: true,
                size: 10,
                itemStyle: {
                borderWidth: 2
                }
            },
            title: {
                show: false
            },
            // 实际数字
            detail: {
                valueAnimation: true,
                fontSize: 30,
                offsetCenter: [0, '70%'],
                color: '#999'
            },
            data: [
                {
                value: 70
                }
            ]
            }
        ]
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