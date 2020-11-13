<template>
  <div ref="moreBar"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'moreBar',
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
      this.myChart = echarts.init(this.$refs.moreBar);
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
          legend: {
            show: true,
            itemWidth: 16,
            itemHeight: 12
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
              name: '篮球',
              type: 'bar',
              data: [30, 40, 50, 50, 55, 60, 40],
              barWidth: '8',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
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
            },
            {
              name: '羽毛球',
              type: 'bar',
              data: [60, 60, 90, 90, 120, 120, 90],
              barWidth: '8',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#3dadf6'
                    },
                    {
                      offset: 1,
                      color: '#737bfc'
                    }
                  ])
                }
              }
            },
            {
              name: '乒乓球',
              type: 'bar',
              data: [40, 40, 60, 60, 80, 80, 60],
              barWidth: '8',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#ea677c'
                    },
                    {
                      offset: 1,
                      color: '#ef9b5f'
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
