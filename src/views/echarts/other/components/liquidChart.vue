<template>
  <div ref="liquidChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
require('echarts-liquidfill');
export default {
  name: 'liquidChart',
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
      this.myChart = echarts.init(this.$refs.liquidChart);
      this.myChart.setOption(
        {
          series: [
            {
              type: 'liquidFill',
              radius: '85%',
              center: ['50%', '45%'],
              data: [0.48, 0.48, 0.48, 0.48],
              backgroundStyle: {
                color: {
                  type: 'linear',
                  x: 1,
                  y: 0,
                  x2: 0.5,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 1,
                      color: 'rgba(168, 218, 247, 0.4)'
                    },
                    {
                      offset: 0.5,
                      color: 'rgba(168, 218, 247, 0.5)'
                    },
                    {
                      offset: 0,
                      color: 'rgba(168, 218, 247, 0.8)'
                    }
                  ],
                  globalCoord: false
                }
              },
              outline: {
                borderDistance: 0,
                itemStyle: {
                  borderWidth: 5,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(81,142,215, 0)'
                      },
                      {
                        offset: 0.5,
                        color: 'rgba(53,142,215, 0.45)'
                      },
                      {
                        offset: 1,
                        color: 'rgba(53,142,215, 0.6)'
                      }
                    ],
                    globalCoord: false
                  },
                  shadowColor: 'rgba(66,102,247, 0.55)',
                  shadowBlur: 10
                }
              },
              label: {
                normal: {
                  formatter: '48%',
                  textStyle: {
                    fontSize: 35
                  }
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
