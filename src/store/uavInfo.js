// // connect to UAV
// import axios2 from "axios";
// // Vue.prototype.$axios2=axios2;
// // Vue.use(axios2);
// axios2.defaults.baseURL='49.233.56.74:9080'


// import { number } from 'echarts'
import {request} from '../network/netRequest'


// 放uav数据
// 模块化之后
export default {
    // 需要写上这个才能在vc中使用mapXXX
    namespaced:true,
  
    state:{
        number:[],//无人机序列
        num:0,//arm中使用
        condition:'',
        location:[0,0],
        height:0,
        mission:[],
        action:'',//正在 takeoff等等
        camera:'',
    },
    actions:{
        // num 是无人机编号
        
        // 跟随模式
        // followme(num,
        //     lat,
        //     lon,
        //     absolute_alt_m,
        //     velocity_x_m_s,
        //     velocity_y_m_s,
        //     velocity_z_m_s){
        //   context.commit()

        // },
        // set_genfence(){

        // }
        // 

        // 设置missions
        // setmissions(){

        // }


        // goto
        // goto(state,value){
        //     console.log('goto被用了')
        //     state.number = value
        //     // 循环调用api控制无人机
        //     var len = state.number.length-1
        //     console.log('len:'+len)
        //     for(len;len>=0;len--){
        //         request({
        //             url: '/'+len+'/goto',
        //         })
        //         .then(res => {
        //         console.log(res);
        //         })
        //         .catch(err => {
        //         console.log(err);
        //         })
        //     }  

        // },
        
    },
    mutations:{
        armall(){
            console.log('armall被用了')
            request({
                url: '/armAll',
            })
            .then(res => {
            console.log(res);
            })
            .catch(err => {
            console.log(err);
            })
        },
        arm(state,value){
            console.log('arm被用了')
            console.log("value:"+value)
            state.num = value
            console.log("valstate.num:"+state.num)

            request({
                url: '/'+state.num+'/arm',
            })
            .then(res => {
            console.log(res);
            })
            .catch(err => {
            console.log(err);
            })
        },
        takeoffall(state,value){
            console.log('takeoffall被用了')
            console.log('value.length'+value.length)

            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/fly/takeoff',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  
        },
        // land好像有点慢 一个一个land 按理说应该设置成同时多个请求
        landall(state,value){
            console.log('landall被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/fly/land',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  
        },
        returnToLaunchall(state,value){
            console.log('returnToLaunchall被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/returntolaunch',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  

        },

        // missiontest
        setmission(state,value){
            console.log('setmission被用了')
            // console.log("value:"+value)
            state.num = value
            console.log("valstate.num:"+state.num)

            request({
                // 用的missiontest
                url: '/missiontest',
            })
            .then(res => {
            console.log(res);
            })
            .catch(err => {
            console.log(err);
            })
        },


        // 键盘控制 单个
        // 这个需要把本地键盘点击事件发送过去
        keyboardControl(state,value){
            console.log('keyboardControl被用了')
            state.number = value
            // // 循环调用api控制无人机
            var len = state.number.length-1
            // console.log('len:'+len)
            // for(len;len>=0;len--){
            request({
                url: '/'+len+'/keyboardControl',
            })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
            // }  

        },

        // // 日志文档
        // logFileall(state,value){
        //     console.log('logFileall被用了')
        //     state.number = value
        //     // 循环调用api控制无人机
        //     var len = state.number.length-1
        //     console.log('len:'+len)
        //     for(len;len>=0;len--){
        //         request({
        //             url: '/'+len+'/logfile',
        //         })
        //         .then(res => {
        //         console.log(res);
        //         })
        //         .catch(err => {
        //         console.log(err);
        //         })
        //     }  

        // },
        
        // GpsInfo Battery Position Health
        // 未实现从后端返回数据
        uavInfo_location(state,value){
            console.log('uavInfo_location被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/location',
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  

        },
        // 
        uav_Info(state,value){
            console.log('uav_Info被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/Info',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  
        },
        getMissionInfo(state,value){
            console.log('arm被用了')
            state.number += value

        },


        shutdown(state,value){
            console.log('shutdown被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/shutdown',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  

        },
        
        
        // 相机
        camerapictures(state,value){
            console.log('camerashow被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/camera',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  

        },

        // 
        holdall(state,value){
            console.log('holdall被用了')
            state.number = value
            // 循环调用api控制无人机
            var len = state.number.length-1
            console.log('len:'+len)
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/hold',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  

        },


        // 4.23 大无人机任务
        // 未完成编写
        bigmission(state,value){
            console.log('大无人机任务');
            state.number = value
            // 循环调用api发送任务
            var len = state.number.length-1
            for(len;len>=0;len--){
                request({
                    url: '/'+len+'/bigmission',
                })
                .then(res => {
                console.log(res);
                })
                .catch(err => {
                console.log(err);
                })
            }  
        }
        
      
    },
    getters:{
      
    }
  }