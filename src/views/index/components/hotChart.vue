<template>
  <div style="width:100%;height:300px" ref="hotChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
require('echarts-wordcloud');
const colorList = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB'];
export default {
  name: 'hotChart',
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
      this.myChart = echarts.init(this.$refs.hotChart);
      this.myChart.setOption(
        {
          tooltip: {
            trigger: 'item',
            formatter: '{b} <br/> 搜素次数：{c} 次'
          },
          series: [
            {
              type: 'wordCloud',
              sizeRange: [14, 28],
              rotationRange: [0, 0],
              width: '100%',
              shape: 'cardioid',
              gridSize: 10,
              top: 0,
              textStyle: {
                normal: {
                  fontFamily: 'sans-serif',
                  color: params => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                  }
                }
              },
              data: this.chartData
            }
          ]
        },
        true
      );
      this.myChart.off('click');
      this.myChart.on('click', params => {
        this.$message.success('点击了' + params.name);
      });
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
