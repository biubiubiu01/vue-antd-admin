<template>
  <div ref="surroundGraph"></div>
</template>

<script>
import resize from '@/mixins/resize';
import echarts from 'echarts';
const colorList = [
  '#28CAD8',
  '#E5A214',
  '#F69F73',
  '#ff7f50',
  '#87cefa',
  '#da70d6',
  '#32cd32',
  '#6495ed',
  '#ff69b4',
  '#cd5c5c',
  '#1e90ff',
  '#ff6347',
  '#7b68ee',
  '#6b8e23',
  '#4ea397',
  '#b8860b',
  '#7bd9a5'
];
export default {
  name: 'surroundGraph',
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
      this.myChart = echarts.init(this.$refs.surroundGraph);
      this.myChart.setOption(
        {
          tooltip: {},
          series: [
            {
              type: 'graph',
              layout: 'force',
              force: {
                repulsion: 120,
                edgeLength: [20, 70]
              },
              roam: true,
              draggable: true,
              symbolSize: params => {
                return params;
              },
              itemStyle: {
                normal: {
                  shadowColor: 'rgba(133,203,247,0.75)',
                  shadowBlur: 15,
                  color: params => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                  }
                }
              },
              label: {
                normal: {
                  show: true
                }
              },
              data: [
                {
                  name: 'Vue',
                  value: 85
                },
                {
                  name: 'React',
                  value: 88
                },
                {
                  name: 'Angular',
                  value: 80
                },
                {
                  name: 'Node',
                  value: 70
                },
                {
                  name: '小程序',
                  value: 68
                },
                {
                  name: 'H5',
                  value: 70
                },
                {
                  name: 'App',
                  value: 60
                },
                {
                  name: 'PS',
                  value: 65
                },
                {
                  name: 'Echarts',
                  value: 75
                },
                {
                  name: 'Element-UI',
                  value: 70
                },
                {
                  name: 'Antd',
                  value: 65
                },
                {
                  name: 'iView',
                  value: 45
                },
                {
                  name: 'C语言',
                  value: 65
                },
                {
                  name: 'C++',
                  value: 65
                },
                {
                  name: 'C#',
                  value: 65
                },
                {
                  name: 'Python',
                  value: 60
                },
                {
                  name: 'Java',
                  value: 70
                },
                {
                  name: 'PHP天下第一',
                  value: 110
                },
                {
                  name: '大数据',
                  value: 70
                },
                {
                  name: 'MySql',
                  value: 70
                },
                {
                  name: 'SQL Server',
                  value: 70
                },
                {
                  name: 'Oracle',
                  value: 70
                }
              ]
            }
          ],

          animationDurationUpdate: index => {
            return index * 100;
          },
          animationEasingUpdate: 'bounceIn'
        },
        true
      );
    }
  }
};
</script>
