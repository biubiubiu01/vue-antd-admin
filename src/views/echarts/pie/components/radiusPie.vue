<template>
  <div ref="radiusPie"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';

const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)'];
export default {
  name: 'radiusPie',
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
      this.myChart = echarts.init(this.$refs.radiusPie);
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
            data: ['裤子', '外套', '卫衣', '短袖', '鞋子', '棉袄']
          },
          series: [
            {
              name: '技术占比',
              type: 'pie',
              icon: 'circle',
              radius: ['35%', '55%'],
              center: ['48%', '55%'],
              roseType: 'radius',
              data: [
                {
                  name: '裤子',
                  value: 254
                },
                {
                  name: '外套',
                  value: 136
                },
                {
                  name: '卫衣',
                  value: 292
                },
                {
                  name: '短袖',
                  value: 192
                },
                {
                  name: '鞋子',
                  value: 650
                },
                {
                  name: '棉袄',
                  value: 450
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
