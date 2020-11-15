<template>
  <div id="openMap">
    <div class="direction">
      <div class="text-center" style="font-size:1.3rem">N</div>
      <img src="../../../assets/map/north.png" class="northImg" alt />
    </div>
    <canvas id="canvas" width="50" height="150"> </canvas>
  </div>
</template>

<script>
import 'ol/ol.css';
import { Map, View, Feature } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { XYZ } from 'ol/source';
import Polygon from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';
import Image from 'ol/layer/Image';
import ImageCanvas from 'ol/source/ImageCanvas';
import { getGeoJson } from '@/utils/index';
import { getCenter } from 'ol/extent';

var kriging = require('../../../../public/kriging');
const params = {
  krigingModel: 'exponential', // model还可选'gaussian','spherical'
  krigingSigma2: 0,
  krigingAlpha: 100,
  canvasAlpha: 0.75, // canvas图层透明度
  colorList: [
    '#d62018',
    '#da5018',
    '#dd6f19',
    '#e5ac25',
    '#EEFD5F',
    '#d8f82a',
    '#adf82a',
    '#97e50f',
    '#75db2b',
    '#54cf31'
  ]
};
export default {
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const key = '0f5cb733f04223ac733dc4d36063f44f';

      //矢量底图
      let tiandituBaseMap = new TileLayer({
        title: '天地图矢量图层',
        source: new XYZ({
          url: 'http://t{0-7}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=' + key
        })
      });
      //矢量注记
      let tiandituVector = new TileLayer({
        title: '天地图矢量图层注记',
        source: new XYZ({
          url: 'http://t3.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=' + key
        })
      });

      this.map = new Map({
        target: 'openMap',
        layers: [tiandituBaseMap, tiandituVector],
        view: new View({
          projection: 'EPSG:4326', // 使用这个坐标系
          zoom: 8.95
          // center: [112.316200103, 28.5810841269]
        })
      });
      this.getMapJson(420000);
    },
    getMapJson(adcode) {
      getGeoJson(adcode).then(data => {
        if (this.extent) {
          let xList = [],
            yList = [],
            valueList = [];
          data.features.forEach(item => {
            xList.push(item.properties.center[0]);
            yList.push(item.properties.center[1]);
            valueList.push(Math.random(0, 1) * 100);
          });
          this.drawKriging(xList, yList, valueList);
          return;
        }
        //获取边界值
        this.coord = data.features[0].geometry.coordinates[0];
        let clipgeom = new Polygon(this.coord);
        this.extent = clipgeom.getExtent();

        this.getMapJson(data.features[0].properties.adcode);
      });
    },

    drawKriging(xList, yList, valueList) {
      if (xList.length <= 3) {
        this.$message.warning('插值点数不足，无法进行插值分析');
      }
      var variogram = kriging.default.train(
        valueList,
        xList,
        yList,
        params.krigingModel,
        params.krigingSigma2,
        params.krigingAlpha
      );
      var grid = kriging.default.grid(this.coord, variogram, (this.extent[2] - this.extent[0]) / 200);
      // 移除已有图层
      if (this.canvasLayer) {
        this.map.removeLayer(this.canvasLayer);
      }
      this.canvasLayer = this.drawCanvas(grid);
      this.map.addLayer(this.canvasLayer);
      this.map.getView().setCenter(getCenter(this.extent));
      //添加图例
      this.initLegend();
    },

    drawCanvas(grid) {
      return new Image({
        source: new ImageCanvas({
          canvasFunction: (extent, resolution, pixelRatio, size, projection) => {
            let canvas = document.createElement('canvas');
            canvas.width = size[0];
            canvas.height = size[1];
            canvas.style.display = 'block';
            // 设置canvas透明度
            canvas.getContext('2d').globalAlpha = params.canvasAlpha;

            // 使用分层设色渲染
            kriging.default.plot(canvas, grid, [extent[0], extent[2]], [extent[1], extent[3]], params.colorList);

            return canvas;
          },
          projection: 'EPSG:4326'
        })
      });
    },

    initLegend() {
      var canvas = document.getElementById('canvas');
      if (!canvas || !canvas.getContext) {
        return false;
      }
      var ctx = canvas.getContext('2d');
      var grad = ctx.createLinearGradient(0, 0, 20, 150);
      // var index = 0;
      for (var i = 0, j = 0; i < params.colorList.length; i++) {
        grad.addColorStop(j, params.colorList[i]);
        if (j < 1) {
          j += 0.1;
        }
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 20, 150);
      ctx.font = '14px bold';
      ctx.textAlign = 'start';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#666';
      ctx.fillText('100', 25, 10);
      ctx.fillText('0', 25, 145);
    }
  }
};
</script>

<style lang="scss" scoped>
.direction {
  position: absolute;
  top: 35px;
  right: 65px;
  z-index: 99;
  .northImg {
    width: 40px;
    height: 40px;
    transform: rotate(-45deg);
    margin-top: 10px;
  }
}
#canvas {
  position: absolute;
  left: 3%;
  bottom: 2%;
  z-index: 99;
}
</style>
