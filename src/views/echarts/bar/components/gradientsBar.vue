<template>
  <div ref="gradientsBar"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'gradientsBar',
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
      this.myChart = echarts.init(this.$refs.gradientsBar);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            padding: [5, 10]
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
              data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
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
              }
            }
          ],
          series: [
            {
              name: '游戏时长',
              type: 'bar',
              data: [60, 75, 55, 40, 100, 140, 160],
              barWidth: '20',
              barGap: '80%',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#5171fd'
                    },
                    {
                      offset: 1,
                      color: '#c97afd'
                    }
                  ])
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
