<template>
  <div id="ver-bar" :style="size">
    <div class="dragRectTop"></div>
    <e-charts :size="size" :options="options" />
    <div class="dragRectBottom"></div>
  </div>
</template>

<script>
import ECharts from '@/page/uavinfodisplay/displaycontents/ECharts'
import * as  echarts from 'echarts';

var data = [70, 56, 66, 95, 60]
var titlename = ["疫苗接种", "普通检测", "医生接种", "普通筛选", "护士接种"]
var valdata = [702, 350, 610, 750, 920]
var mycolor = ["#1089e7", "#f57474", "#56d0e3", "#f8b448", "#8b78f6"]
export default {
  components: {
    ECharts
  },
  data: function () {
    return {
      year: 2000,
      options: {
        title: {
          text: '2021年疫情控制进度情况',
          left: "center",
          top: "20px",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: "20%",
          left: '10%',
          right: '10%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              fontSize: "14"
            }
          },
          {
            show: true,
            data: valdata,
            inverse: true,
            axisLabel: {
              color: "#fff",
              fontSize: "12"
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "条",
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barGategoryGap: 70,
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 25,
                // params当前item
                color: function (params) {
                  var num = mycolor.length
                  // params.dataIndex当前item的下标
                  return mycolor[params.dataIndex % num]
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{c}%"
              }
            }
          },
          {
            name: "框",
            type: 'bar',
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            barGategoryGap: 50,
            barWidth: 15,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                // params当前item
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3
              }
            }
          }
        ]
      },
      size: {
        width: '100%',
        height: '3.875rem'
      }
    }
  }
}
</script>

<style scoped>

#ver-bar{
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