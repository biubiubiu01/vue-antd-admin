<template>
  <div ref="pieBar"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'pieBar',
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
      this.myChart = echarts.init(this.$refs.pieBar);
      this.myChart.setOption(
        {
          title: [
            {
              text: '85分',
              textStyle: {
                color: '#5171fd',
                fontSize: 35
              },
              top: 'center',
              left: 'center'
            }
          ],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            padding: [5, 10]
          },
          angleAxis: {
            max: 100,
            clockwise: true,
            show: false
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          polar: {
            center: ['50%', '50%'],
            radius: '150%'
          },
          series: [
            {
              type: 'bar',
              data: [85],
              showBackground: true,
              backgroundStyle: {
                color: '#cecece'
              },
              coordinateSystem: 'polar',
              roundCap: true,
              barWidth: 15,
              itemStyle: {
                normal: {
                  opacity: 1,
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: '#5171fd'
                    },
                    {
                      offset: 1,
                      color: '#c97afd'
                    }
                  ]),
                  shadowBlur: 5,
                  shadowColor: '#2A95F9'
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
