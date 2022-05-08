<template>
  <div id="pie" :style="size">
    <!-- 上边框 -->
    <div class="dragRectTop"></div>

    <!-- <e-charts :size="size" :options="options" /> -->

    设备横列表
    <!-- <hr>
    经度,,纬度 -->
    <div class="rectangle">
      经度
    </div>
    <div class="rectangle">
      纬度
    </div>
    <!-- <hr>
    高度 -->
     <div class="rectangle">
      高度
    </div>
    <!-- <hr> -->
    <div class="rectangle">
      状态  
    </div>
    <!-- 状态 -->
    <!-- <hr> -->
    <div class="speedandbattery">
      <div class="left">
        飞速
        <speed></speed>
      </div>
      <div class="right">
      <battery></battery>
      </div>

    </div>
    
    
    <!-- <hr> -->

    <!-- 下边框 -->
    <div class="dragRectBottom"></div>

  </div>
</template>

<script>
// import ECharts from '@/page/uavinfodisplay/displaycontents/ECharts'
// import * as  echarts from 'echarts';

import speed from './log/speed.vue';
import battery from './log/battery.vue';
export default {
  components: {
    // ECharts,
    speed,
    battery
  },
  data: function () {
    return {
      year: 2000,
      options: {
        title: {
          text: '日志',
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
          // data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
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
            avoidLabelOverlap: false,
            // color: [
            //   "065aab",
            //   "065eab",
            //   "0696ab",
            //   "06a0ab",
            //   "06b4ab",
            //   // "06dcab",
            // ],
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
              { value: 32, name: '0岁以下' },
              { value: 18, name: '20-29岁' },
              { value: 30, name: '30-39岁' },
              { value: 12, name: '0-49岁' },
              { value: 8, name: '50岁以上' }
            ]
          }
        ]
      },
      size: {
        width: '100%',
        // height: '3.875rem'
        height: '7.5rem'
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
.speedandbattery{
  /* flex: 1; */
  width: 100%;
  padding: 0.15rem;
  display: flex;
  /* background-color: brown; */
  /* position: relative;
  left: 3%; */

  
}
.speedandbattery .left{
  flex: 0.5;
  /* width: 100%; */
  /* margin: 0 auto; */

    /* display: flex; */
  /* flex-direction: column; */
  /* width: 94%; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  background-color: rgb(63, 65, 179);
  
  border-radius: 6px;
  padding-top: 2%;
  margin-right: 1%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* position: absolute; */
  /* top: 0%;
  left: 0%; */

  text-align: center;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* background-color: rgb(12, 11, 11); */

}
.speedandbattery .right{
   flex: 0.5;
   /* position: absolute; */
  /* top: 0%;
  left: 50%; */
  /* width: 100%; */
  /* margin: 0 auto; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  background-color: rgb(63, 65, 179);
  margin-left: 1%;
  
  border-radius: 6px;
  /* padding-top: 2%; */

  text-align: center;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* background-color: rgb(74, 29, 189); */
}
.rectangle{
  display: flex;
  flex-direction: column;
  width: 94%;
  /* display: flex; */
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: rgb(63, 65, 179);
  position: relative;
  left: 3%;
  border-radius: 6px;
  padding-left: 5%;
  margin-top: 5px;
  /* width: 32%; */
  height: 13%;
  /* .dv-dig-flop {
    width: 150px;
    height: 30px;
  } */
  
}
/* .rectangle  */


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