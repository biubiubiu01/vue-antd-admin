<template>
  <div style="width:100%;height:300px" ref="moreChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'moreChart',
  props: {
    chartData: {
      type: Array,
      required: true
    }
  },
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
      this.myChart = echarts.init(this.$refs.moreChart);
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
            top: 55
          },
          legend: {
            show: true
          },
          xAxis: [
            {
              type: 'category',
              data: this.chartData.map(item => item.name),
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
              name: '男',
              type: 'bar',
              stack: '总量',
              barWidth: 15,
              barGap: '80%',
              itemStyle: {
                normal: {
                  color: '#2fbadc'
                }
              },
              data: this.chartData.map(item => item.male)
            },
            {
              name: '女',
              type: 'bar',
              stack: '总量',
              barWidth: 15,
              barGap: '80%',
              itemStyle: {
                normal: {
                  color: '#f67a7b'
                }
              },
              data: this.chartData.map(item => item.female)
            },
            {
              name: '总人数',
              type: 'line',
              symbolSize: 7,
              symbol: 'circle',
              itemStyle: {
                normal: {
                  color: '#737bfc',
                  barBorderRadius: 0
                }
              },
              data: this.chartData.map(item => item.value)
            }
          ]
        },
        true
      );
    }
  },
  watch: {
    chartData: {
      handler(nl, ol) {
        this.initEchart();
      },
      deep: true
    }
  }
};
</script>
