<template>
  <div id="app">


    <div class="charts">

      <div class="left">
        <!-- 左上摄像头 -->
        <Camera></Camera>
        <!-- 左下日志 -->
        <Logs></Logs>
      </div>

      <div class="mid">
        <Map></Map>
        <BrokenLine></BrokenLine>
        
      </div>

      <div class="right">

        <!-- 右上控制 -->
        <Controll></Controll>
        <!-- <broken-line></broken-line> -->
        <!-- 右下任务列表 -->
        <Missions></Missions>
      </div>
    </div>
  </div>
</template>

<script>
// import ECharts from '@/components/ECharts'
import Camera from '@/page/uavinfodisplay/displaycontents/Camera'
// import Barleftme from '@/components/Barleft'
import BrokenLine from '@/page/uavinfodisplay/displaycontents/BrokenLine'
import Missions from '@/page/uavinfodisplay/displaycontents/Missions'
import Logs from '@/page/uavinfodisplay/displaycontents/Logs'
// import VerBar from '@/components/VerBar'
// import BrokenLine2 from '@/components/BrokenLine2'
// import Pie2 from '@/components/Pie2'
import Map from '@/page/uavinfodisplay/displaycontents/Map'
import Controll from '@/page/uavinfodisplay/displaycontents/Controll.vue'
// import Pieleft from './components/Pieleft.vue'



export default {
  name: 'app',
  data: function () {
    return {
      nowTime: ""
    }
  },
  components: {
    // ECharts,
    Camera,//
    BrokenLine,//
    Logs,//
    // VerBar,
    // BrokenLine2,
    // Pie2,
    Map,//
    // Pieleft,
    Controll,//
    // Barleftme,
    Missions//
  },
  mount() {
    setInterval(() => {
      this.nowTime = this.getNowTime()
    }, 1000)
  },
  
    
  methods: {

  }
}
</script>

<style>
/* 实现响应式 */
html{
  /* 将屏幕的宽度设置为24rem,从而自动实现将内容按照屏幕的大小进行缩放 */
  /* 屏幕宽高比16:9 */
  font-size: calc(100vw / 24);
  color: #fff;
  
  /* background-image: url(./assets/bg.jpg); */
}

/* 声明字体 */
@font-face {
  font-family: electronicFont;
  src: url(./assets/DS-DIGIT.TTF);
}

*{
  margin: 0;
  padding: 2px;
  box-sizing: border-box;
  overflow: hidden;
}

body{
  width: 100vw;
  height: calc( 100vw / 16 * 9 );
  font-size: 12px;
  background-image: url(./assets/bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

#app{
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(./assets/bg.jpg);

}

.charts{
 flex: 1;
 width: 100vw;
 padding: 0.15rem;
 display: flex;
}

.charts .left{
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.charts .mid{
  flex: 7.5;
}
.charts .right{
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.mid .title{
  margin: 0.1rem 0.1rem 2rem 0.1rem;
  padding: 0.2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
}

.mid .title .number{
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: #F5D0A9;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.borderTop{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.1rem;
}

.borderTop::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0.4rem;
  height: 0.2rem;
  border-left: 2px solid skyblue;
  border-top: 2px solid skyblue;
}

.borderbottom{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 0.1rem;
}
.borderbottom::after{
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0.4rem;
  height: 0.2rem;
  border-bottom: 2px solid skyblue;
  border-right: 2px solid skyblue;
}

.mid .title .number span:nth-of-type(1){
  width: 50%;
  text-align: center;
}

.mid .title .number span:nth-of-type(3){
  width: 50%;
  text-align: center;
}

.mid .title .number span:nth-of-type(2){
  height: 0.6rem;
  line-height: 1.4rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.mid .title .desc{
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgba(255, 255, 255, 0.8);
}

.mid .title .desc span:nth-child(1){
  width: 50%;
  text-align: center;
}

.mid .title .desc span:nth-child(2){
  width: 50%;
  text-align: center;
}

</style>
