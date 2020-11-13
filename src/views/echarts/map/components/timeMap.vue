<template>
  <div ref="timeMap"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
import { getGeoJson } from '@/utils/index';
import { getPointChartData } from '../../../../../mock/controller/map';
export default {
  name: 'timeMap',
  mixins: [resize],
  data() {
    return {
      geoJson: {},
      parentInfo: [
        {
          cityName: '全国',
          code: 100000
        }
      ],
      currentIndex: 0,
      yearData: [2016, 2017, 2018, 2019, 2020]
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
    //获取地图数据   模拟数据   数据格式：[{name:'武汉市',value:96},{name:'长沙市',value:75}]
    // 必须要写成这种,而且name名字要和地图的geoJson名字一样，不然渲染不出来
    getMapData() {
      getPointChartData(this.parentInfo[this.parentInfo.length - 1].code).then(res => {
        const data = res.data;
        this.initEchart(data);
      });
    },
    initEchart(data) {
      this.myChart = echarts.init(this.$refs.timeMap);
      //设置为 china 则显示南海诸岛 ，不需要可以去掉
      echarts.registerMap(this.parentInfo.length === 1 ? 'china' : 'map', this.geoJson); //注册

      const pointData = data.sort((a, b) => {
        return b.value[2] - a.value[2];
      });
      let max = pointData[0].value[2];
      let min = pointData[pointData.length - 1].value[2];
      if (pointData.length === 1) {
        min = 0;
      }
      const mapData = data.map(item => {
        return {
          name: item.name,
          value: item.value[2]
        };
      });

      this.myChart.setOption(
        {
          //不想显示时间轴可以把这里注释掉
          timeline: {
            data: this.yearData,
            axisType: 'category',
            autoPlay: true,
            playInterval: 8000,
            left: '10%',
            right: '10%',
            bottom: '0%',
            width: '80%',
            label: {
              normal: {
                textStyle: {
                  color: 'rgb(179, 239, 255)'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            currentIndex: this.currentIndex,
            symbolSize: 10,
            lineStyle: {
              color: '#8df4f4'
            },
            checkpointStyle: {
              borderColor: '#8df4f4',
              color: '#53D9FF',
              borderWidth: 2
            },
            controlStyle: {
              showNextBtn: true,
              showPrevBtn: true,
              normal: {
                color: '#53D9FF',
                borderColor: '#53D9FF'
              },
              emphasis: {
                color: 'rgb(58,115,192)',
                borderColor: 'rgb(58,115,192)'
              }
            }
          },
          baseOption: {
            tooltip: {},
            visualMap: {
              min: min,
              max: max,
              left: '3%',
              bottom: '2%',
              calculable: true,
              seriesIndex: [0],
              inRange: {
                color: ['#24CFF4', '#2E98CA', '#1E62AC']
              },
              textStyle: {
                color: '#24CFF4'
              }
            },
            geo: {
              map: this.parentInfo.length === 1 ? 'china' : 'map',
              roam: true,
              geoIndex: 1,
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
                name: '地图',
                type: 'map',
                geoIndex: 0,
                data: mapData
              },
              {
                name: '散点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                rippleEffect: {
                  brushType: 'fill'
                },
                itemStyle: {
                  normal: {
                    color: '#F4E925',
                    shadowBlur: 10,
                    shadowColor: 'rgb(58,115,192)'
                  }
                },
                data: pointData,
                symbolSize: val => {
                  let value = val[2] / 45;
                  if (value < 12) {
                    return 12;
                  }
                  if (value > 30) {
                    return 30;
                  }
                  return value;
                },
                showEffectOn: 'render' //加载完毕显示特效
              },
              {
                name: '气泡Top5',
                type: 'effectScatter',
                data: pointData,
                symbol: 'pin', //气泡
                coordinateSystem: 'geo',
                symbolSize: 40,
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
                    color: '#fc5f81', //地图点的颜色
                    shadowBlur: 10,
                    shadowColor: 'rgb(58,115,192)'
                  }
                },
                showEffectOn: 'hover',
                rippleEffect: {
                  brushType: 'stroke'
                },
                zlevel: 6
              }
            ]
          }
        },
        true
      );
      //监听时间切换事件
      this.myChart.off('timelinechanged');
      this.myChart.on('timelinechanged', params => {
        // const year = this.yearData[params.currentIndex];
        this.currentIndex = params.currentIndex;
        this.getMapData();
      });
      //监听点击事件
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
            //根据这个level判断是否下钻到县
            // if (data[index].level == 'city') {
            //   return
            // }
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
