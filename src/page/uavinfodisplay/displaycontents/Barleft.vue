<template>
  <div id="bar" :style="size">
    <div class="dragRectTop"></div>
    
    <div>UAV控制设备列表</div>
    <!-- <el-row> -->

    <div class="two">
      <el-button type="primary" class="rectangle">起飞</el-button>
      <!-- <el-button type="primary" round>主要按钮</el-button> -->
      <el-button type="primary" class="rectangle">降落</el-button>
      <!-- <el-button type="primary">主要按钮</el-button> -->
    </div>
    <div class="two">
      <el-button type="primary" class="rectangle">悬停</el-button>
      <el-button type="primary" class="rectangle">返航</el-button>
    </div>

    <div class="three"> 
      <el-button type="primary" class="rectanglelong">任务布置</el-button>

    </div>
    <div class="three">
      <el-button type="primary" class="rectanglelong">任务暂停</el-button>

    </div>
     <div class="three">

      <el-button type="primary" class="rectanglelong">任务中断并清除</el-button>
    </div>

    <!-- </el-row> -->

    <!-- <e-charts :size="size" :options="options" /> -->
    <!-- <div class="rectangle">
      

    </div> -->
    <div class="dragRectBottom"></div>
  </div>
</template>

<script>
// import ECharts from '@/page/uavinfodisplay/displaycontents/ECharts'
// import * as  echarts from 'echarts';

export default {
  components: {
    // ECharts
  },
  data: function () {
    return {
      year: 2000,
      options: {
        title: {
          text: '2000uav控制',
          textStyle: {
            color: "rgba(255,255,255,0.9)"
          },
          left: "center",
          top: "5px"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '20%',
          left: '10%',
          right: '10%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['旅游', '教育', '医疗', '游戏', '电商', '社交', '金融'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,0.6)",
                fontSize: "12"
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: "rgba(255,255,255,0.6)",
                fontSize: "12"
              }
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.3)"
              }
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,0.3)"
              }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [200, 250, 330, 334, 820, 520, 720],
            itemStyle: {
              barBorderRadius: 5
            }
          }
        ]
      },
      size: {
        width: '100%',
        height: '5rem'
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.year++;
      this.options.title.text = `${this.year}uav控制`
      this.options.series[0].data.forEach((item, i) => {
        this.options.series[0].data[i] = item + Math.floor(Math.random() * 100) - 50
      })
      this.options = { ...this.options }
    }, 2000)
  }
}
</script>

<style scoped>

#bar{
	/* background-image: url(../assets/line.png); */
  border: 0.5px solid rgba(255,255,255,0.2);
  position: relative;
  background: rgba(255, 255, 255, 0.1);
}
.two {
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 18%;
  text-align: center;

}
.two .rectangle{
  /* display: flex; */
  /* flex-direction: column; */
  flex: 0.5;

  width: 50%;
  /* height: 12%; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  background-color: rgb(63, 65, 179);
  /* position: relative;
  left: 2%; */
  /* border-radius: 6px; */
  /* padding-left: 5%; */
  /* margin-top: 4px; */
  text-align: center;
  /* width: 32%; */
  /* height: 13%; */
  /* .dv-dig-flop {
    width: 150px;
    height: 30px;
  } */
  
  
}
.three {
    /* display: flex; */
  /* flex-direction: column; */
  /* flex: 1; */
  height: 18%;
  /* text-align: center; */
}
.three .rectanglelong{
  /* display: flex; */
  /* flex-direction: column; */
  /* flex: 0.2; */
  height: 95%;
  width: 100%;
  /* height: 12%; */
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  background-color: rgb(63, 65, 179);
  /* position: relative;
  left: 2%; */
  /* border-radius: 6px; */
  /* padding-left: 5%; */
  /* margin-top: 4px; */
  /* text-align: center; */
  
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