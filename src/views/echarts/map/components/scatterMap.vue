<template>
  <div ref="scatterMap"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
import { getGeoJson } from '@/utils/index';
import { getPointChartData } from '../../../../../mock/controller/map';
export default {
  name: 'scatterMap',
  mixins: [resize],
  data() {
    return {
      geoJson: {},
      parentInfo: [
        {
          cityName: '全国',
          code: 100000
        }
      ]
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
      getGeoJson(this.parentInfo[this.parentInfo.length - 1].code).then(data => {
        this.geoJson = data;
        this.getMapData();
      });
    },
    //获取地图数据   模拟数据   数据格式：[{name:'武汉市',value:['经度 x'，'纬度y'，’value值‘]},{name:'长沙市',value:['113.45','36.56',75]}]
    //因为是散点，所以这里name名字和地图不一样也可以
    getMapData() {
      getPointChartData(this.parentInfo[this.parentInfo.length - 1].code).then(res => {
        const data = res.data;
        this.initEchart(data);
      });
    },
    initEchart(data) {
      this.myChart = echarts.init(this.$refs.scatterMap);
      //设置为 china 则显示南海诸岛 ，不需要可以去掉
      echarts.registerMap(this.parentInfo.length === 1 ? 'china' : 'map', this.geoJson); //注册

      const mapData = data.sort((a, b) => {
        return b.value[2] - a.value[2];
      });
      let centerValue = 0;
      if (mapData.length < 5) {
        centerValue = mapData[mapData.length - 1].value[2];
      } else {
        centerValue = mapData[4].value[2];
      }

      this.myChart.setOption(
        {
          tooltip: {},
          visualMap: {
            type: 'piecewise',
            seriesIndex: [1],
            pieces: [
              {
                max: centerValue,
                label: '类型一',
                color: '#fc5f81'
              },
              {
                min: centerValue,
                max: mapData[mapData.length - 1].value[2],
                label: '类型二',
                color: '#f4e925'
              }
            ],
            color: '#fff',
            textStyle: {
              color: '#fff'
            },
            visibility: 'off'
          },
          geo: {
            map: this.parentInfo.length === 1 ? 'china' : 'map',
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#1E62AC',
                borderColor: '#53D9FF',
                borderWidth: 1.3,
                shadowBlur: 15,
                shadowColor: 'rgb(58,115,192)',
                shadowOffsetX: 7,
                shadowOffsetY: 6
              },
              emphasis: {
                areaColor: '#8dd7fc',
                borderWidth: 1.6
              }
            },
            label: {
              normal: {
                show: true,
                color: 'rgb(249, 249, 249)', //省份标签字体颜色
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
                color: 'rgb(249, 249, 249)' //省份标签字体颜色
              }
            },
            zoom: 1.22
          },
          series: [
            {
              name: '散点',
              type: 'scatter',
              data: data.slice(5),
              coordinateSystem: 'geo',
              symbolSize: 12,
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: '#fc5f81', //地图点的颜色
                  shadowBlur: 10,
                  shadowColor: 'rgb(58,115,192)'
                }
              },
              layoutCenter: ['50%', '50%'],
              layoutSize: 430
            },
            {
              name: '散点Top5',
              type: 'effectScatter',
              data: data.slice(0, 5),
              coordinateSystem: 'geo',
              symbolSize: 12,
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
              name: '气泡',
              type: 'scatter',
              data: data.slice(5),
              symbol: 'pin', //气泡
              coordinateSystem: 'geo',
              symbolSize: 45,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 10
                  },
                  formatter: params => {
                    return parseInt(params.value[2]);
                  }
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: '#fc5f81', //地图点的颜色
                  shadowBlur: 10,
                  shadowColor: 'rgb(58,115,192)'
                }
              },
              zlevel: 6
            },
            {
              name: '气泡Top5',
              type: 'effectScatter',
              data: data.slice(0, 5),
              symbol: 'pin', //气泡
              coordinateSystem: 'geo',
              symbolSize: 60,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  },
                  formatter: params => {
                    return parseInt(params.value[2]);
                  }
                },
                emphasis: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: '#f4e925', //地图点的颜色
                  shadowBlur: 10,
                  shadowColor: 'rgb(58,115,192)'
                }
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              zlevel: 6
            }
          ]
        },
        true
      );

      this.myChart.getZr().off('click');
      this.myChart.getZr().on('click', params => {
        if (params.target) {
          //  点的是地图
          const index = params.target.dataIndex;
          if (index && data[index]) {
            //如果当前是最后一级了，就直接return
            if (this.parentInfo[this.parentInfo.length - 1].code == data[index].adcode) {
              return;
            }
            this.parentInfo.push({
              cityName: data[index].name,
              code: data[index].adcode
            });
            this.getMapJson();
            this.$notification.success(
              {
                message: '提示',
                description: '点击地图空白处即可返回上一级'
              },
              4
            );
          }
        } else {
          //点的空白部分
          if (this.parentInfo.length === 1) {
            return;
          }
          this.parentInfo.pop();
          this.getMapJson();
        }
      });
    }
  }
};
</script>
