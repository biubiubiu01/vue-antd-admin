<template>
  <div ref="treeChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
export default {
  name: 'treeChart',
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
      this.myChart = echarts.init(this.$refs.treeChart);
      this.myChart.setOption(
        {
          color: ['#6FFFFF', '#FF9244', '#7155B7', '#0FE7E7', '#48C7F2', '#4490FF'],
          tooltip: {},
          series: [
            {
              name: '矩形树图',
              type: 'treemap',
              roam: false,
              label: {
                show: true,
                formatter: '{b}',
                fontSize: 14
              },
              nodeClick: false,
              breadcrumb: {
                show: false
              },
              itemStyle: {
                normal: {
                  show: true,
                  textStyle: {
                    color: '#666',
                    fontSize: 14
                  },
                  borderWidth: 0
                },
                emphasis: {
                  label: {
                    show: true
                  }
                }
              },
              data: [
                {
                  name: 'Vue',
                  value: 6000
                },
                {
                  name: 'React',
                  value: 6600
                },
                {
                  name: 'Angular',
                  value: 3200
                },
                {
                  name: 'uni-app',
                  value: 2100
                },
                {
                  name: 'mpvue',
                  value: 172
                },
                {
                  name: 'Taro',
                  value: 179
                },
                {
                  name: 'element-ui',
                  value: 293
                },
                {
                  name: 'vant',
                  value: 200
                }
              ]
            }
          ]
        },
        true
      );
    }
  }
};
</script>
