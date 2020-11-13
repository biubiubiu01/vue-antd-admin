<template>
  <div ref="oneLine"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'oneLine',
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
      this.myChart = echarts.init(this.$refs.oneLine);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          grid: {
            left: 50,
            right: 20,
            bottom: 40,
            top: 30
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['6:00', '9:00', '12:00', '15:00', '18:00', '21:00', '24:00'],
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
              name: '运动时长',
              type: 'line',
              data: [60, 75, 55, 40, 100, 140, 160],
              smooth: true,
              symbol: 'circle',
              showSymbol: true,
              lineStyle: {
                normal: {
                  color: '#5171fd' // 线条颜色
                }
              },
              itemStyle: {
                color: '#5171fd',
                borderColor: '#fff'
              },
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                      {
                        offset: 0,
                        color: '#5171fd'
                      },
                      {
                        offset: 0.5,
                        color: '#5171fd'
                      },
                      {
                        offset: 1,
                        color: 'rgba(127,153,255,0.1)'
                      }
                    ],
                    false
                  )
                }
              }
            }
          ]
        },
        true
      );
    }
  }
};
</script>
