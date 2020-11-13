<template>
  <div ref="otherLine"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'otherLine',
  mixins: [resize],
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initEchart();
    });
  },
  methods: {
    initEchart() {
      this.myChart = echarts.init(this.$refs.otherLine);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            left: 65,
            right: 20,
            bottom: 40,
            top: 30
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisLabel: {
                color: '#666'
              },
              axisTick: {
                show: false
              },
              axisPointer: {
                snap: true
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisTick: {
                show: false
              },
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisLabel: {
                color: '#666'
              },
              splitLine: {
                show: false
              },
              axisPointer: {
                snap: true
              }
            }
          ],
          series: [
            {
              name: '今年人气值',
              type: 'line',
              data: [5, 220, 180, 480, 220, 180, 5],
              smooth: true,
              symbol: 'circle',
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 0
                }
              },
              markPoint: {
                data: [
                  {
                    name: '最高',
                    value: 480,
                    xAxis: 3,
                    yAxis: 480,
                    symbolSize: 40
                  }
                ]
              },
              itemStyle: {
                color: '#5171fd',
                borderColor: '#fff'
              },
              areaStyle: {
                normal: {
                  shadowColor: 'rgba(133,203,247,0.75)',
                  shadowBlur: 15
                }
              }
            },
            {
              name: '去年人气值',
              type: 'line',
              data: [0, 160, 140, 360, 180, 160, 0],
              smooth: true,
              symbol: 'circle',
              showSymbol: false,
              lineStyle: {
                normal: {
                  width: 0
                }
              },
              markPoint: {
                data: [
                  {
                    name: '最高',
                    value: 360,
                    xAxis: 3,
                    yAxis: 360,
                    symbolSize: 40
                  }
                ]
              },
              itemStyle: {
                color: '#53fcee',
                borderColor: '#fff'
              },
              areaStyle: {}
            }
          ]
        },
        true
      );
    }
  }
};
</script>
