<template>
  <div ref="seriesMap"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
import { getGeoJson } from '@/utils/index';
import { getMapChartData } from '../../../../../mock/controller/map';
export default {
  name: 'seriesMap',
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
    //获取地图数据   模拟数据   数据格式：[{name:'武汉市',value:96},{name:'长沙市',value:75}]
    // 必须要写成这种,而且name名字要和地图的geoJson名字一样，不然渲染不出来
    getMapData() {
      getMapChartData(this.parentInfo[this.parentInfo.length - 1].code).then(res => {
        const data = res.data;
        this.initEchart(data);
      });
    },
    initEchart(data) {
      this.myChart = echarts.init(this.$refs.seriesMap);
      //设置为 china 则显示南海诸岛 ，不需要可以去掉
      echarts.registerMap(this.parentInfo.length === 1 ? 'china' : 'map', this.geoJson); //注册

      const mapData = data.sort((a, b) => {
        return b.value - a.value;
      });
      let max = mapData[0].value;
      let min = mapData[mapData.length - 1].value;
      if (mapData.length === 1) {
        min = 0;
      }

      this.myChart.setOption(
        {
          tooltip: {},
          visualMap: {
            min: min,
            max: max,
            left: '3%',
            bottom: '2%',
            calculable: true,
            inRange: {
              color: ['#24CFF4', '#2E98CA', '#1E62AC']
            },
            textStyle: {
              color: '#24CFF4'
            }
          },
          series: [
            {
              name: '地图',
              type: 'map',
              map: this.parentInfo.length === 1 ? 'china' : 'map',
              roam: true, //是否可缩放
              zoom: 1.22, //缩放比例
              // left: '',
              // top: '15%', //可移动地图的位置
              data: mapData,
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
                  color: '#f75a00'
                }
              },
              itemStyle: {
                normal: {
                  areaColor: '#24CFF4',
                  borderColor: '#53D9FF',
                  borderWidth: 1.3,
                  shadowBlur: 15,
                  shadowColor: 'rgb(58,115,192)',
                  shadowOffsetX: 7,
                  shadowOffsetY: 6
                },
                emphasis: {
                  areaColor: '#8dd7fc',
                  borderWidth: 1.6,
                  shadowBlur: 25
                }
              }
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
