<template>
  <div ref="hotMap"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
import { getGeoJson } from '@/utils/index';
import { getHotMapChartData } from '../../../../../mock/controller/map';
export default {
  name: 'hotMap',
  mixins: [resize],
  data() {
    return {
      geoJson: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getMapJson();
    });
  },
  methods: {
    //获取geoJson 地图   已封装好直接传citycode就行
    getMapJson() {
      getGeoJson(420100).then(data => {
        this.geoJson = data;
        this.getMapData();
      });
    },
    //获取地图数据   模拟数据   数据格式：[{name:'武汉市',value:['经度 x'，'纬度y'，’value值‘]},{name:'长沙市',value:['113.45','36.56',75]}]
    //因为是散点，所以这里name名字和地图不一样也可以
    getMapData() {
      getHotMapChartData(420100).then(res => {
        const data = res.data;
        this.initEchart(data);
      });
    },
    initEchart(data) {
      this.myChart = echarts.init(this.$refs.hotMap);
      echarts.registerMap('map', this.geoJson); //注册
      const mapData = data.sort((a, b) => {
        return b.value[2] - a.value[2];
      });
      let max = mapData[0].value[2];
      let min = mapData[mapData.length - 1].value[2];
      if (mapData.length === 1) {
        min = 0;
      }

      this.myChart.setOption(
        {
          tooltip: {},
          visualMap: {
            left: '3%',
            bottom: '2%',
            color: ['#ff4601', '#fffc00', '#87cffa'],
            min: min,
            max: max,
            calculable: true,
            textStyle: {
              color: '#fff',
              fontSize: 12
            }
          },
          geo: {
            map: 'map',
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#17439a',
                borderColor: '#53D9FF',
                borderWidth: 1.3,
                shadowBlur: 15,
                shadowColor: 'rgb(58,115,192)',
                shadowOffsetX: 7,
                shadowOffsetY: 6
              },
              emphasis: {
                areaColor: '#17439a'
              }
            },
            label: {
              normal: {
                show: true,
                color: '#fff',
                formatter: p => {
                  switch (p.name) {
                    case '内蒙古自治区':
                      p.name = '内蒙古';
                      break;
                    case '西藏自治区':
                      p.name = '西藏';
                      break;
                    case '新疆维吾尔自治区':
                      p.name = '新疆';
                      break;
                    case '宁夏回族自治区':
                      p.name = '宁夏';
                      break;
                    case '广西壮族自治区':
                      p.name = '广西';
                      break;
                    case '香港特别行政区':
                      p.name = '香港';
                      break;
                    case '澳门特别行政区':
                      p.name = '澳门';
                      break;
                    default:
                      break;
                  }
                  return p.name;
                }
              },
              emphasis: {
                show: true,
                color: '#fff'
              }
            },
            zoom: 1.22
          },
          series: [
            {
              name: 'hotMap',
              type: 'heatmap',
              data: mapData,
              coordinateSystem: 'geo',
              pointSize: 13,
              blurSize: 40
            }
          ]
        },
        true
      );
    }
  }
};
</script>
