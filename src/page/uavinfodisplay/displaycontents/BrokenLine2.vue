<template>
  <div id="broken-line" :style="size">
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
          text: '2000年深圳和广州各月新冠新增情况',
          textStyle: {
            color: "rgba(255,255,255,0.9)"
          },
          left: "center",
          top: "5px"
        },
        color: ['#00f2f1', "#ed3f35"],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: "#dddc6b"
            }
          }
        },
        legend: {
          top: "15%",
          right: "10%",
          // 里面的名字要与serious里面的名字保持一致
          data: ['新冠确诊', '新冠疑似'],
          show: true,
          textStyle: {
            color: "rgba(255,255,255,0.6)"
          }
        },
        grid: {
          top: '30%',
          left: '5%',
          right: '5%',
          bottom: '4%',
          show: true,
          borderColor: "#012f4a",
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,0.7)",
              fontSize: 12
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.5)"
            }
          }
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.3)",
              fontSize: 12
            }
          },
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.3)"
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,0.6)",
              fontSize: "12"
            }
          },
        },
        series: [
          {
            name: '新冠确诊',
            type: 'line',
            // stack: 'Total',
            data: [220, 132, 101, 134, 90, 230, 210, 420, 132, 101, 134, 90, 120, 132, 101, 500, 88, 90, 230, 210, 120, 132, 101, 134, 90, 210, 120, 132, 101, 134],
            smooth: true,
            lineStyle: {
              normal: {
                color: "#0184d5",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(255,255,255,0.1)"
              }
            }
          },
          {
            name: '新冠疑似',
            type: 'line',
            // stack: 'Total',
            data: [100, 182, 191, 234, 30, 330, 310, 182, 191, 234, 50, 330, 120, 132, 101, 60, 90, 230, 210, 120, 132, 101, 134, 90, 210, 120, 132, 101, 134, 90],
            smooth: true,
            lineStyle: {
              normal: {
                // color: "#4454e0",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: "rgba(255,255,255,0.1)"
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
  },
  mounted () {
    setInterval(() => {
      this.year++;
      this.options.title.text = `${this.year}年深圳和广州各月新冠新增情况`
      this.options.series[0].data.forEach((item, i) => {
        this.options.series[0].data[i] = item + Math.floor(Math.random() * 200) - 88
        if (this.options.series[0].data[i] < 0) {
          this.options.series[0].data[i] = 0
        }
      })
      this.options.series[1].data.forEach((item, i) => {
        this.options.series[1].data[i] = item + Math.floor(Math.random() * 88) - 30
        if (this.options.series[1].data[i] < 0) {
          this.options.series[1].data[i] = 0
        }
      })
      this.options = { ...this.options }
    }, 2000)
  }
}
</script>

<style scoped>

#broken-line{
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