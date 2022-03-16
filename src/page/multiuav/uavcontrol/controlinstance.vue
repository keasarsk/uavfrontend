<template>
<div>
  <h3 class="breadcrumb">当前位置</h3>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>任务执行</el-breadcrumb-item>
    <el-breadcrumb-item>当前路线</el-breadcrumb-item>
  </el-breadcrumb>
  <el-row>
    <el-col :span="11">
      <el-card class="cardstate">
        <h3 class="header">状态初始化</h3>
        <span style="color: black">激活 </span>
        <el-dropdown @command="handleCommand">
        <!-- <el-dropdown> -->
          <!-- ??? -->
          <el-button type="primary">
            无人机
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">编号1</el-dropdown-item>
            <el-dropdown-item command="b">编号2</el-dropdown-item>
            <el-dropdown-item command="c">编号3</el-dropdown-item>
            <el-dropdown-item command="d">编号4</el-dropdown-item>
            <el-dropdown-item command="e">所有</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <br>
        <div style="margin-top: 10px">
          <h4>无人机执行状态</h4>
          <span>启动状态</span>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="arming.uavsatartpercentage"></el-progress>
          <span>无人机使用比例</span>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="0" status="success"></el-progress>
        </div>
      </el-card>
    </el-col>
    <el-col :span="11">
      <el-card class="cardstop">
        <h3 class="header">停止</h3>
        <!--  -->
        <el-button size="medium" type="warning" @click="holdall(num)">停止任务</el-button><span style="color: darkgray">   停止所有执行中的任务</span><br>
        <el-button size="medium" type="danger" @click="landall(num)">着陆</el-button><span style="color: darkgray">   无人机在当前位置着陆</span>
      </el-card>
    </el-col>

  </el-row>
  <el-row>
    <el-col :span="22">
      <el-card class="cardstate">
        <div>
          <h3 class="header">动作指令</h3>
        </div>
        <el-transfer v-model="value" :data="data" style="margin-bottom: 10px"></el-transfer>
        <span style="color: darkgray">左侧为未选择的无人机，右侧为选择的无人机，移动到右侧后，可选择相应的控制按钮完成动作</span><br>
        <!-- 需要获取哪些无人机被选择 然后进行统一控制 起飞等 -->
        <!-- 得到一个数组arm[] -->
        
        <el-button type="primary" size="medium" @click="takeoffall(num)">起飞</el-button>
        <!-- 难实现 -->
        <!-- <el-button type="primary" size="medium" @click="keyboardControl">键盘控制</el-button> -->
        <el-button type="success" size="medium" @click="returnToLaunchall(num)">返回起始点</el-button>
        <el-button type="primary" size="medium" @click="followme">跟随模式</el-button>
        <!-- <br> -->
        <!-- 这个应该不需要 -->
        <!-- <el-button type="primary" size="medium" @click="arm(num)">手柄切换</el-button> -->
        <el-button type="primary" size="medium" @click="camerashow">相机记录</el-button>
        <el-button type="primary" size="medium" @click="logFileall(num)">日志文档</el-button>
        <el-button type="primary" size="medium" >{{number}}</el-button>

      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
    import {mapState,mapActions,mapMutations} from 'vuex'

export default {
  name: "controlinstance2",
  data(){
    const generateData = () => {
      const data = [];
      for (let i = 1; i <= 6; i++) {
        data.push({
          key: i,
          label: `无人机 ${ i }`,
        });
      }
      return data;
    };
    return{
      data: generateData(),
      value: [],
      visible:false,
      num:[1,2,3,4],//无人机序列
      numb:0,//单个无人机
      arming:{
        uavsatartpercentage:0
      }
    }
  },
  computed:{
    // arm某一uav
    
    // 获取store/uavInfo中存储的state
    ...mapState('uavInfo',['number',
      'condition',
      'location',
      'height',
      'mission',
      'action',
      'camera'
    ])

  },
  methods:{
    // 获取store/uavInfo中存储的actions
    ...mapActions('uavInfo',[
    'followme',

    ]),
    // 获取store/uavInfo中存储的mutations
    ...mapMutations('uavInfo',[
      'armall',
      'arm',
      'takeoffall',
      'landall',
      'returnToLaunchall',
      'keyboardControl',//
      'logFileall',//
      'camerapictures',//
      'holdall',
    ]),
    // mounted() {
    //   console.log('Count',this.$store);
    // },


    async handleCommand(command) {
      switch (command) {
        case 'a':
          while (this.arming.uavsatartpercentage <= 100) {
            console.log("this.arming.uavsatartpercentage:"+this.arming.uavsatartpercentage)
            console.log("zhixing")
            await new Promise(() => setTimeout(() => {
              this.numb=0
              this.arming.uavsatartpercentage += 10
              this.arm(this.numb)
            }, 100))
          }
          break;

        case 'b':
        while (this.arming.uavsatartpercentage <= 100) {
          console.log("this.arming.uavsatartpercentage:"+this.arming.uavsatartpercentage)
          console.log("zhixing")
          await new Promise(() => setTimeout(() => {
            this.numb=1
            this.arming.uavsatartpercentage += 10
            this.arm(this.numb)
          }, 100))
        }
        break;

        case 'c':
        while (this.arming.uavsatartpercentage <= 100) {
          console.log("this.arming.uavsatartpercentage:"+this.arming.uavsatartpercentage)
          console.log("zhixing")
          await new Promise(() => setTimeout(() => {
            this.numb=2
            this.arming.uavsatartpercentage += 10
            this.arm(this.numb)
          }, 100))
        }
        break;

        case 'd':
        while (this.arming.uavsatartpercentage <= 100) {
          console.log("this.arming.uavsatartpercentage:"+this.arming.uavsatartpercentage)
          console.log("zhixing")
          await new Promise(() => setTimeout(() => {
            this.numb=3
            this.arming.uavsatartpercentage += 10
            this.arm(this.numb)
          }, 100))
        }
        break;

        case 'e':
        while (this.arming.uavsatartpercentage <= 100) {
          console.log("this.arming.uavsatartpercentage:"+this.arming.uavsatartpercentage)
          console.log("zhixing")
          await new Promise(() => setTimeout(() => {
            this.arming.uavsatartpercentage = 100
            this.armall()
          }, 100))
        }
        break;
      
      }
      console.log(command)
    },
  }
}
</script>

<style scoped>
.breadcrumb{
  margin: 20px;
}

.cardstate{
  margin-left: 30px;
  /*background-color: #007aff;*/
  color: black;
  display: flex;
  justify-content: start ;
  margin-bottom: 30px;
}
.el-divider{
  color: white;
}
.header{
  margin-top: 0px;
  color: black;
}
.cardstop{
  margin-left: 30px;
  /*background-color: #ff3b30;*/
}
.el-progress{
  margin-bottom: 5px;
  width: 220%;
}
.el-button{
  margin-bottom: 5px;
  width: 100px;
}

</style>
