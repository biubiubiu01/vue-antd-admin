<template>
  <div ref="solidPie"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';

const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)'];
export default {
  name: 'solidPie',
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
      this.myChart = echarts.init(this.$refs.solidPie);
      this.myChart.setOption(
        {
          color: colorLost,
          tooltip: {
            trigger: 'item',
            formatter: params => {
              return params.marker + ' ' + params.name + '：' + params.value + ' (' + params.percent + '%)';
            }
          },
          legend: {
            show: true,
            left: '15',
            top: 0,
            type: 'scroll',
            itemWidth: 18,
            itemHeight: 11,
            data: ['Vue', 'Echarts', 'TypeScript', 'Webpack', 'Node', 'jQuery']
          },
          series: [
            {
              name: '技术占比',
              type: 'pie',
              icon: 'circle',
              center: ['48%', '55%'],
              radius: '55%',
              data: [
                {
                  name: 'Vue',
                  value: 75
                },
                {
                  name: 'Echarts',
                  value: 85
                },
                {
                  name: 'TypeScript',
                  value: 70
                },
                {
                  name: 'Webpack',
                  value: 75
                },
                {
                  name: 'Node',
                  value: 45
                },
                {
                  name: 'jQuery',
                  value: 65
                }
              ],
              label: {},
              labelLine: {
                normal: {
                  show: true
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
