import mainLayout from '@/layouts/mainLayout';

const echartRouter = {
  name: 'echarts',
  path: '/echarts',
  component: mainLayout,
  redirect: '/echarts/bar',
  meta: {
    role: 35,
    title: '图表',
    icon: 'echarts'
  },
  children: [
    {
      name: 'bar',
      path: '/echarts/bar',
      component: () => import('@/views/echarts/bar/index'),
      meta: { title: '柱状图', role: 17 }
    },
    {
      name: 'line',
      path: '/echarts/line',
      component: () => import('@/views/echarts/line/index'),
      meta: { title: '折线图', role: 18 }
    },
    {
      name: 'pie',
      path: '/echarts/pie',
      component: () => import('@/views/echarts/pie/index'),
      meta: { title: '饼图', role: 19 }
    },
    {
      name: 'graph',
      path: '/echarts/graph',
      component: () => import('@/views/echarts/graph/index'),
      meta: {
        role: 20,
        title: '关系图'
      }
    },
    {
      name: 'map',
      path: '/echarts/map',
      component: () => import('@/views/echarts/map/index'),
      meta: {
        role: 21,
        title: '地图'
      }
    },
    {
      name: 'other',
      path: '/echarts/other',
      component: () => import('@/views/echarts/other/index'),
      meta: {
        role: 22,
        title: '其他图表'
      }
    }
  ]
};

export default echartRouter;
