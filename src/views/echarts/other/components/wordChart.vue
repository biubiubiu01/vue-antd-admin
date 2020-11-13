<template>
  <div ref="wordChart"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
require('echarts-wordcloud');
const colorList = ['#4FD8FF', '#C15FFF', '#FF5F55', '#FFC935', '#767BFB'];

export default {
  name: 'wordChart',
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
      this.myChart = echarts.init(this.$refs.wordChart);
      this.myChart.setOption(
        {
          tooltip: {},
          series: [
            {
              type: 'wordCloud',
              sizeRange: [12, 35],
              rotationRange: [0, 0],
              width: '100%',
              shape: 'cardioid',
              gridSize: 11,
              top: 0,
              textStyle: {
                normal: {
                  fontFamily: 'sans-serif',
                  color: () => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                  }
                }
              },
              data: [
                {
                  name: '小笼包',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '炸鸡',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '汉堡',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '蜜雪冰城',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '一点点',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '喜茶',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '贡茶',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '热干面',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '螺蛳粉',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '臭豆腐',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '麻辣烫',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '过桥米线',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '大盘鸡',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '披萨',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '鸡公煲',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '烤全羊',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '肉夹馍',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '烤冷面',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '炒酸奶',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '卫龙',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '烤鸭',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '灌汤包',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '鸭血粉丝',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '糯米团',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '酸辣粉',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '汤圆',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '羊肉泡馍',
                  value: Math.random(0.1, 1) * 70
                },
                {
                  name: '糊辣汤',
                  value: Math.random(0.1, 1) * 70
                }
              ]
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
