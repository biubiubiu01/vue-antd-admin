<template>
  <div ref="doubleBar"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
const xData = ['小于10岁', '10-18岁', '19-28岁', '29-39岁', '40-50岁', '50岁-60岁', '大于60岁'];
export default {
  name: 'doubleBar',
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
      this.myChart = echarts.init(this.$refs.doubleBar);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            padding: [5, 10]
          },
          grid: [
            {
              show: false,
              left: '2%',
              top: 42,
              bottom: 10,
              containLabel: true,
              width: '43%'
            },
            {
              show: false,
              left: '53%',
              top: 65,
              bottom: 10,
              width: '30'
            },
            {
              show: false,
              right: '2%',
              top: 42,
              bottom: 10,
              containLabel: true,
              width: '43%'
            }
          ],

          legend: {
            show: true
          },
          xAxis: [
            {
              type: 'value',
              inverse: true,
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#666',
                  fontSize: 12
                }
              },
              splitLine: {
                show: false
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              gridIndex: 2,
              type: 'value',
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#666',
                  fontSize: 12
                }
              },
              splitLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: '#666',
                  fontSize: 12
                }
              },
              data: xData
            },
            {
              type: 'category',
              gridIndex: 1,
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },

              data: xData
            },
            {
              type: 'category',
              gridIndex: 2,
              inverse: true,
              axisLine: {
                lineStyle: {
                  color: '#cecece'
                }
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false,
                textStyle: {
                  color: '#666',
                  fontSize: 12
                }
              },
              data: xData
            }
          ],
          series: [
            {
              name: '男',
              type: 'bar',
              data: [25, 65, 135, 175, 90, 56, 35],
              barWidth: '15',
              barGap: '80%',
              type: 'bar',
              stack: 'left',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#5171fd'
                }
              }
            },
            {
              name: '女',
              type: 'bar',
              data: [35, 120, 215, 325, 185, 135, 90],
              barWidth: '15',
              barGap: '80%',
              stack: 'left',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(74,201,233)'
                }
              }
            },
            {
              name: '男',
              type: 'bar',
              stack: 'right',
              data: [150, 280, 368, 312, 245, 162, 95],
              barWidth: '15',
              xAxisIndex: 2,
              yAxisIndex: 2,
              barGap: '80%',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: '#5171fd'
                }
              }
            },
            {
              name: '女',
              type: 'bar',
              xAxisIndex: 2,
              yAxisIndex: 2,
              stack: 'right',
              data: [35, 140, 190, 260, 175, 124, 62],
              barWidth: '15',
              barGap: '80%',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              itemStyle: {
                normal: {
                  color: 'rgb(74,201,233)'
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
