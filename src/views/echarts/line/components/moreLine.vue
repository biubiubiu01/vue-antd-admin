<template>
  <div ref="moreLine"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'moreLine',
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
      this.myChart = echarts.init(this.$refs.moreLine);
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
            top: 65
          },
          legend: {
            show: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['10-1', '10-2', '10-3', '10-4', '10-5', '10-6', '10-7'],
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
              name: '最高气温',
              type: 'line',
              data: [32, 34, 39, 35, 38, 36, 34],
              smooth: true,
              symbol: 'circle',
              showSymbol: true,
              markPoint: {
                data: [
                  {
                    name: '周最高',
                    value: 39,
                    xAxis: 2,
                    yAxis: 39,
                    symbolSize: 40
                  }
                ]
              },
              lineStyle: {
                normal: {
                  width: 4,
                  color: '#F6D06F', // 线条颜色
                  shadowColor: 'rgba(246,208,111, 0.85)',
                  shadowBlur: 10,
                  shadowOffsetY: 6
                }
              },
              itemStyle: {
                color: '#F6D06F',
                borderColor: '#F6D06F',
                borderWidth: 0
              }
            },
            {
              name: '最低气温',
              type: 'line',
              data: [25, 22, 26, 28, 27, 26, 23],
              smooth: true,
              symbol: 'circle',
              showSymbol: true,
              markPoint: {
                data: [
                  {
                    name: '周最低',
                    value: 22,
                    xAxis: 1,
                    yAxis: 22,
                    symbolSize: 40
                  }
                ]
              },
              lineStyle: {
                normal: {
                  width: 4,
                  color: '#5171fd', // 线条颜色
                  shadowColor: 'rgba(66,102,247, 0.55)',
                  shadowBlur: 10,
                  shadowOffsetY: 6
                }
              },
              itemStyle: {
                color: '#5171fd',
                borderColor: '#5171fd',
                borderWidth: 0
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
