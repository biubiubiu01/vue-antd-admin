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
import { Map, View } from 'ol';
import Polygon from 'ol/geom/Polygon';
import Image from 'ol/layer/Image';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ImageCanvas from 'ol/source/ImageCanvas';
import { getGeoJson } from '@/utils/index';
import { getCenter } from 'ol/extent';
import remoteLoad from '@/utils/remoteLoad';
import cityJson from '../../../../public/420000.json';
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
const krigingCDN = 'https://cdn.jsdelivr.net/npm/kriging@0.1.12/dist/kriging.js';
export default {
  data() {
    return {
      kriging: null
    };
  },
  async mounted() {
    try {
      await remoteLoad(krigingCDN);
      if (test) {
        this.kriging = test.kriging;
        this.initMap();
      } else {
        this.$message.error('加载资源失败');
      }
    } catch (error) {
      console.log(error);
      this.$message.error(error);
    }
  },
  methods: {
    initMap() {
      this.map = new Map({
        target: 'openMap',
        layers: [
          new Tile({
            source: new OSM(),
            opacity: 1
          })
        ],
        view: new View({
          projection: 'EPSG:4326', // 使用这个坐标系
          zoom: 7
        })
      });
      this.getMapJson(420000);
    },
    getMapJson(adcode) {
      const data = cityJson;
      this.coord = [data.features[0].geometry.coordinates[0]];
      let clipgeom = new Polygon(this.coord);
      this.extent = clipgeom.getExtent();
      getGeoJson(adcode).then(list => {
        let xList = [],
          yList = [],
          valueList = [];
        list.features.forEach(item => {
          xList.push(item.properties.center[0]);
          yList.push(item.properties.center[1]);
          valueList.push(Math.random(0, 1) * 100);
        });
        this.drawKriging(xList, yList, valueList);
      });
    },

    drawKriging(xList, yList, valueList) {
      if (xList.length <= 3) {
        this.$message.warning('插值点数不足，无法进行插值分析');
      }
      var variogram = this.kriging.train(
        valueList,
        xList,
        yList,
        params.krigingModel,
        params.krigingSigma2,
        params.krigingAlpha
      );
      var grid = this.kriging.grid(this.coord, variogram, (this.extent[2] - this.extent[0]) / 200);
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
            this.kriging.plot(canvas, grid, [extent[0], extent[2]], [extent[1], extent[3]], params.colorList);

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
#openMap {
  background: #fff;
}
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
