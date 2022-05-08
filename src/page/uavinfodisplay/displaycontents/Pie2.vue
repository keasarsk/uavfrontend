<template>
  <div id="pie" :style="size">
    <div class="dragRectTop"></div>
    <e-charts :size="size" :options="options" />
    <div class="dragRectBottom"></div>
  </div>
</template>

<script>
import ECharts from '@/page/uavinfodisplay/displaycontents/ECharts'
import * as  echarts from 'echarts';

export default {
  components: {
    ECharts
  },
  data: function () {
    return {
      year: 2000,
      options: {
        title: {
          text: '新冠疫情区域分布',
          textStyle: {
            color: "rgba(255,255,255,0.9)"
          },
          left: "center",
          top: "5px"
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/> {b}:{c}({d}%)"
        },
        legend: {
          top: '90%',
          left: 'center',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,0.6)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            roseType: "radius",
            avoidLabelOverlap: false,
            color: [
              "#87CEFF",
              "#EEC591",
              "#66CDAA",
              "#7D26CD",
              "#bf4080",
              "#D2691E",
              "#ffb3d9",
              "#ffffcc",
              "#ccf5ff",
              "#006600"

            ],
            label: {
              show: false,
              position: 'center'
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            labelLine: {
              show: false
            },
            data: [
              { value: 20, name: '上海' },
              { value: 40, name: '江苏' },
              { value: 35, name: '广东' },
              { value: 34, name: '湖南' },
              { value: 28, name: '山东' },
              { value: 46, name: '云南' },
              { value: 56, name: '新疆' },
              { value: 65, name: '北京' },
              { value: 33, name: '河南' },
              { value: 44, name: '湖北' }
            ]
          }
        ]
      },
      size: {
        width: '100%',
        height: '3.875rem'
      }
    }
  },
  mounted () {
    // setInterval(() => {
    //   this.year++;
    //   // this.options.title.text = `${this.year}年深圳和广州各月新冠新增情况`
    //   this.options.series[0].data.forEach((item, i) => {
    //     this.options.series[0].data[i] = item + Math.floor(Math.random() * 100) - 50
    //     // if (this.options.series[0].data[i] < 0) {
    //     //   this.options.series[0].data[i] = 0
    //     // }
    //   })
    //   this.options = { ...this.options }
    // }, 2000)
  }
}
</script>

<style scoped>

#pie{
	/* background-image: url(../assets/line.png); */
  border: 0.5px solid rgba(255,255,255,0.2);
  background: rgba(255, 255, 255, 0.1);
  position: relative;
}

.dragRectTop{
    width: 100%;
    height: 10px;
    position: absolute;
    top: 0;
    left: 0
}

.dragRectTop::before{
    content: "";
    width: 10px;
    height: 10px;
    border-left: 2px solid skyblue;
    border-top: 2px solid skyblue;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
}

.dragRectTop::after{
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid skyblue;
    border-top: 2px solid skyblue;
    display: block;
    position: absolute;
    right: 0;
    top: 0;
}

.dragRectBottom{
    width: 100%;
    height: 10px;
    position: absolute;
    bottom: 0;
    left: 0
}

.dragRectBottom::before{
    content: "";
    width: 10px;
    height: 10px;
    border-left: 2px solid skyblue;
    border-bottom: 2px solid skyblue;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
}

.dragRectBottom::after{
    content: "";
    width: 10px;
    height: 10px;
    border-right: 2px solid skyblue;
    border-bottom: 2px solid skyblue;
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>