<template>
  <div ref="activeLine" class="activeChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'activeLine',
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
      this.myChart = echarts.init(this.$refs.activeLine);
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
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
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
              name: '活跃度',
              type: 'line',
              data: [60, 75, 55, 40, 100, 140, 160, 155, 145, 125, 105, 85],
              smooth: true,
              symbol: 'circle',
              showSymbol: true,
              symbolSize: 8,
              lineStyle: {
                normal: {
                  color: '#3D8BE1' // 线条颜色
                }
              },
              itemStyle: {
                color: '#3D8BE1',
                borderColor: '#fff'
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

<style lang="scss" scoped>
.activeChart {
  width: 100%;
  height: 350px;
}
</style>
