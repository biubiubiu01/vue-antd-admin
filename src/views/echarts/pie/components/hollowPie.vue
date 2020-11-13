<template>
  <div ref="hollowPie"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';

const colorLost = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB', 'rgb(248,70,102)'];
export default {
  name: 'hollowPie',
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
      this.myChart = echarts.init(this.$refs.hollowPie);
      this.myChart.setOption(
        {
          color: colorLost,
          title: [
            {
              text: '85%',
              textStyle: {
                color: '#5171fd',
                fontSize: 25
              },
              top: 'center',
              left: 'center'
            }
          ],
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
            data: ['炸鸡', '火锅', '烤肉', '料理', '热干面', '奶茶']
          },
          series: [
            {
              name: '消费类型',
              type: 'pie',
              icon: 'circle',
              radius: ['35%', '55%'],
              center: ['50%', '50%'],
              itemStyle: {
                normal: {
                  borderColor: '#fff',
                  borderWidth: 1
                }
              },
              data: [
                {
                  name: '炸鸡',
                  value: 18
                },
                {
                  name: '火锅',
                  value: 35
                },
                {
                  name: '烤肉',
                  value: 37
                },
                {
                  name: '料理',
                  value: 20
                },
                {
                  name: '热干面',
                  value: 36
                },
                {
                  name: '奶茶',
                  value: 54
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
