<template>
  <div id="pie" :style="size">
    <div class="dragRectTop"></div>
    <!-- <e-charts :size="size" :options="options" /> -->

    <!-- <div id="centerRight1">
      <div class="bg-color-black">

        <div class="d-flex pt-2 pl-2">
          
            <span>任务完成排u 行榜</span>
          
        </div>
        <div class="body-box">

          <dv-scroll-board class="dv-scr-board" :config="config" />
          
        </div>
      </div>
    </div> -->
    任务列表
    <div >
      <dv-scroll-board class="scroll" :config="config" />
    </div>
    

    <div class="dragRectBottom"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: {
        width: '100%',
        // height: '9.1rem'
      },
      config: {
        header: ['经度', '纬度', '高度'],
        data: [
          ['39.086364', '121.812955', "4"],
          ['39.086364', '121.812955', "3"],
          ['39.086364', '121.812955', "6"],
          ['39.086364', '121.812955', "2"],
          ['39.086364', '121.812955', "5"],
          ['39.086364', '121.812955', "3"],
          ['39.086364', '121.812955', "5"],
        ],
        rowNum: 7, //表格行数
        headerHeight: 30,
        headerBGC: '#0f1325', //表头
        oddRowBGC: '#0f1325', //奇数行
        evenRowBGC: '#171c33', //偶数行
        index: true,
        columnWidth: [50],
        align: ['center']
      }
    }
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

.scroll{
  padding: 2%;
  /* border-radius: 20px; */
 width: 100%;
 height:380px;

 font-size: 3px;;
}

</style>