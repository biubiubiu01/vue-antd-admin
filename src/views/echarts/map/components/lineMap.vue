<template>
  <div ref="lineMap"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
import { getGeoJson } from '@/utils/index';
import { getPointChartData } from '../../../../../mock/controller/map';
export default {
  name: 'lineMap',
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
      getGeoJson(420000).then(data => {
        this.geoJson = data;
        this.getMapData();
      });
    },
    //获取地图数据   模拟数据   数据格式：[{name:'武汉市',value:['经度 x'，'纬度y'，’value值‘]},{name:'长沙市',value:['113.45','36.56',75]}]
    //因为是散点，所以这里name名字和地图不一样也可以
    getMapData() {
      getPointChartData(420000).then(res => {
        const data = res.data;
        this.initEchart(data);
      });
    },
    initEchart(data) {
      this.myChart = echarts.init(this.$refs.lineMap);

      echarts.registerMap('map', this.geoJson); //注册
      const mapData = data.sort((a, b) => {
        return b.value[2] - a.value[2];
      });

      let toCity = mapData[0];
      let lineData = mapData.slice(1).map(item => {
        return {
          fromName: item.name,
          toName: toCity.name,
          coords: [
            [item.value[0], item.value[1]],
            [toCity.value[0], toCity.value[1]]
          ]
        };
      });

      this.myChart.setOption(
        {
          tooltip: {},

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
              name: '城市',
              type: 'effectScatter',
              data: mapData.slice(1),
              coordinateSystem: 'geo',
              symbolSize: 10,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              itemStyle: {
                normal: {
                  color: 'rgb(29,233,182)',
                  shadowBlur: 10,
                  shadowColor: 'rgb(58,115,192)'
                }
              },
              layoutCenter: ['50%', '50%'],
              layoutSize: 430
            },
            {
              name: 'No.1',
              type: 'effectScatter',
              data: mapData.slice(0, 1),
              coordinateSystem: 'geo',
              symbolSize: 25,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              itemStyle: {
                normal: {
                  color: '#f4e925', //地图点的颜色
                  shadowBlur: 10,
                  shadowColor: 'rgb(58,115,192)'
                }
              },
              layoutCenter: ['50%', '50%'],
              layoutSize: 430
            },
            {
              name: '航线',
              type: 'lines',
              tooltip: {
                formatter: params => {
                  return params.marker + params.data.fromName + '-' + params.data.toName;
                }
              },
              zlevel: 2,
              effect: {
                show: true,
                period: 5, //值越小 速度越快
                trailLength: 0, // 0-1  值越大，越拖
                symbol: 'arrow', //箭头图标
                symbolSize: 6 //图标大小
              },
              lineStyle: {
                normal: {
                  color: '#f4e925',
                  width: 1,
                  opacity: 1,
                  curveness: 0.3 //线值的程度  0为直线
                }
              },
              data: lineData
            }
          ]
        },
        true
      );
    }
  }
};
</script>
