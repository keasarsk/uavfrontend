<template>
    <div id="mapsetting" :style="size">
    <el-radio-group class="mapStyle" v-model="mapId" @change="changeStyle" size="mini">
      <el-radio-button label='mapbox/streets-v11' size="mini" >平面地图</el-radio-button>
      <el-radio-button label='mapbox/satellite-v9' size="mini" >卫星地图</el-radio-button>
      <el-radio-button label='mapbox/outdoors-v10' size="mini" >户外地图</el-radio-button>
    </el-radio-group>
    <!-- <el-button class="mapStyle2" type="success" size="mini" @click="visualMap">可视化</el-button> -->
        <!-- <datepicker></datepicker> -->
<!--    <map-component></map-component>-->
<!--    <editandplan></editandplan>-->
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.css'
// 大规模数据展示插件
import 'leaflet-markers-canvas'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet.markercluster/dist/MarkerCluster.css'
// import datepicker from './datepicker.vue'
let map=null
let layer = null
export default {
    components: { 
        //   datepicker 
    },
    data(){
        return{
            mapId:'mapbox/streets-v11',
            geoLocate:null,
            userLocation:[],
            canvasMarkers: [],
            size: {
              width: '100%',
              height: '7.9rem'
            }
        }
    }, 
    methods:{
        mapInitialize(){
            map = new L.map('map',{
                center: [39.08537075415818, 121.81089591217042],
                minZoom: 1,
                maxZoom: 20,
                zoom: 16,
                //  删除默认控件zoom
                zoomControl: false,
                // 删除默认控件attribution
                attributionControl: false,
            });

            layer = this.$maputils.map.createLayers(map,'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
                // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 20,
                id: this.mapId,
                tileSize: 512,
                zoomOffset: -1,
                // preferCanvas: true,
                accessToken: 'pk.eyJ1IjoidHJhbnNjZW5kdHJlZSIsImEiOiJja3N6eHRiMzkxeXNzMm90Y2Rhd2JmbjNqIn0.bCRv7xB55jHSDwEF5y5DcA'
            });
            // var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
            // map.addLayer(layer); //这一句加上相当于又加了一层图层

            //  ------------Zoom
            L.control.zoom({
                zoomInText: '1',
                zoomOutText: '0',
                position:'topright'
            }).addTo(map)



            // -------------Attribution 地图右下角标识
            var attributions = {
                prefix: 'sk attribution sample'
            };
             L.control.attribution(attributions).addTo(map);


            // -------------scale 比例控制
            var scale = L.control.scale();
            scale.addTo(map);

            
            //  定位功能，可用
            this.geoLocate = L.control.locate({position:'bottomright',initialZoomLevel:15}).addTo(map);

        },
        
        // 改变地图样式
        changeStyle(){
            map.removeLayer(layer)
            this.$maputils.map.changeLayers(map,'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 20,
                id: this.mapId,
                tileSize: 512,
                // zoomOffset 注释掉会出大问题
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoidHJhbnNjZW5kdHJlZSIsImEiOiJja3N6eHRiMzkxeXNzMm90Y2Rhd2JmbjNqIn0.bCRv7xB55jHSDwEF5y5DcA'
            })
        },
            
    },
    // mounted 通常是为  metheds  函数提前定义（ 类似提前声明变量 进入页面内容全部渲染完成后自动引函数）
    mounted() {
        // 初始化地图
        this.mapInitialize();
        // 定位 打开后会一直转
        // this.geoLocate.start();
    },
}
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
  z-index: 0;
  background: bisque;
  /*background-color: #409EFF;*/
}
#mapsetting{
  height: 100%;
  background: whitesmoke;
}
.mapStyle{
  position: absolute;
  z-index: 1;
  margin-top: 20px;
  margin-left: 20px;
}
.target{
  font-size: 1.5em;
} 
.mapStyle2{
  position: absolute;
  z-index: 1;
  margin-top: 60px;
  margin-left: 450px;
}
.row{
  position: absolute;
  margin-top: 60px;
  z-index:10;
  margin-left: 20px;
}
.col{
  z-index:10;
}
</style>