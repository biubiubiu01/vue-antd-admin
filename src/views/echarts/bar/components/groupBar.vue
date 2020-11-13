<template>
  <div ref="groupBar"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'groupBar',
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
      this.myChart = echarts.init(this.$refs.groupBar);
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
              data: ['2016', '2017', '2018', '2019'],
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
              name: 'LOL',
              type: 'bar',
              stack: 'PC',
              data: [1500, 2800, 3500, 2900],
              barWidth: '12',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#5171fd'
                }
              }
            },
            {
              name: 'DNF',
              type: 'bar',
              stack: 'PC',
              data: [700, 600, 550, 420],
              barWidth: '12',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#3dadf6'
                }
              }
            },
            {
              name: '王者荣耀',
              type: 'bar',
              stack: 'mobile',
              data: [1600, 2300, 2800, 3300],
              barWidth: '12',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#ea677c'
                }
              }
            },
            {
              name: '和平精英',
              type: 'bar',
              stack: 'mobile',
              data: [1600, 2800, 3500, 2000],
              barWidth: '12',
              barGap: '20%',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: '#ef9b5f'
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
