<template>
  <div class="chart-wrapper" ref="lineChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'lineChart',
  props: {
    chartData: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: ''
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
      const { xData, yData, lastData } = this.chartData;

      this.myChart = echarts.init(this.$refs.lineChart);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line'
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
              boundaryGap: false,
              data: xData,
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
          dataZoom: [
            {
              type: 'inside'
            }
          ],
          series: [
            {
              name: '本期' + this.title,
              smooth: true,
              type: 'line',
              symbol: 'circle',
              showSymbol: false,
              data: yData,
              lineStyle: {
                normal: {
                  width: 0
                }
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
              name: '同期' + this.title,
              smooth: true,
              type: 'line',
              symbol: 'circle',
              showSymbol: false,
              data: lastData,
              lineStyle: {
                normal: {
                  width: 0
                }
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
