<template>
  <div id="mapView" class="relative">
    <div class="mapList" v-show="current == 'toggle'">
      <scroll-bar style="width:250px; height:550px;color:#fff">
        <div id="basemapGallery"></div>
      </scroll-bar>
    </div>
    <div class="mapList measure" v-show="current == 'distance'">
      <div id="measurementDiv"></div>
    </div>
    <div id="search"></div>
  </div>
</template>
<script>
/* eslint-disable */
import { loadModules } from 'esri-loader';

export default {
  name: 'mapview',
  props: {
    current: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      //这里可以使用自己的地址
      const options = {
        url: 'https://js.arcgis.com/3.34/'
      };
      loadModules(
        [
          'esri/map',
          'esri/dijit/BasemapGallery',
          'esri/dijit/Scalebar',
          'esri/dijit/Search',
          'esri/toolbars/draw',
          'dijit/TitlePane',
          'esri/layers/FeatureLayer',
          'esri/renderers/SimpleRenderer',
          'esri/dijit/Measurement',
          'esri/symbols/SimpleFillSymbol',
          'esri/symbols/SimpleLineSymbol',
          'esri/Color',
          'dojo/keys',
          'dojo/dom',
          'dojo/domReady!'
        ],
        options
      )
        .then(
          ([
            Map,
            BasemapGallery,
            Scalebar,
            Search,
            Draw,
            FeatureLayer,
            SimpleRenderer,
            Measurement,
            SimpleFillSymbol,
            SimpleLineSymbol,
            Color,
            dom,
            keys
          ]) => {
            this.map = new Map('mapView', {
              basemap: 'satellite',
              center: [114.3, 30.4],
              logo: false, //取消地图默认的logo
              zoom: 15,
              slider: false,
              spatialReference: { wkid: 4326 } //设置坐标系
            });
            this.map.setMapCursor('pointer'); //设置鼠标在map上时的样式为手型

            //底图切换
            this.basemapGallery = new BasemapGallery(
              {
                showArcGISBasemaps: true,
                map: this.map
              },
              'basemapGallery'
            );
            this.basemapGallery.startup();

            var scalebar = new Scalebar({
              map: this.map,
              attachTo: 'bottom-left',
              scalebarUnit: 'dual'
            });
            //显示比例尺
            scalebar.show();

            //查询
            this.search = new Search(
              {
                map: this.map
              },
              'search'
            );
            this.search.startup();

            var stackedDom = dijit.byId('measurementDiv');
            if (stackedDom) {
              this.measurement = stackedDom;
            } else {
              this.measurement = new esri.dijit.Measurement(
                {
                  map: this.map,
                  defaultAreaUnit: esri.Units.SQUARE_METERS,
                  defaultLengthUnit: esri.Units.METERS
                },
                document.getElementById('measurementDiv')
              );
            }

            this.measurement.startup();

            this.measurement.on('measure-start', evt => {
              this.$message.info('双击结束测量');
            });

            this.map.on('load', () => {
              this.tb = new Draw(this.map);
              this.$emit('sendMap', this.map, this.tb);
            });
          }
        )
        .catch(err => {
          // console.log(err);
          this.$message.error('arcgis 加载出错');
        });
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.destroy();
    }
    if (this.basemapGallery) {
      this.basemapGallery.destroy();
    }
    if (this.search) {
      this.search.destroy();
    }
  },
  watch: {
    current(nl) {
      if (nl != 'distance' && this.measurement) {
        this.measurement.hide();
        this.measurement.clearResult();
        this.measurement.setTool('location', false);
        this.measurement.setTool('distance', false);
        this.measurement.setTool('area', false);
      } else {
        if (this.measurement) {
          this.measurement.show();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('https://js.arcgis.com/3.34/esri/css/esri.css');
.mapList {
  position: absolute;
  right: 10px;
  top: 0;
  z-index: 70;
  background: rgba(48, 65, 86, 0.8);
}
.measure {
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  width: 220px;
}
#titlePane {
  width: 280px;
}
</style>
<style lang="scss">
#mapView {
  .esriBasemapGalleryLabelContainer {
    height: 40px !important;
  }
  .arcgisSearch {
    z-index: 20;
    height: 95px;
    width: 400px;
    position: absolute;
    top: 5px;
    left: 50% !important;
    transform: translateX(-50%);
  }

  .esriMeasurementResultValue {
    font-size: 1rem;
  }
  .dijitToggleButtonIconChar,
  .esriMeasurementSeparator,
  .dijitOffScreen {
    display: none;
  }
  .esriMeasurement .dijitContentPane {
    text-align: center;
  }
  .esriPopup .contentPane {
    padding-top: 30px;
    width: 270px;
    text-align: center;
    overflow: hidden;
  }
}
</style>
