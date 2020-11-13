import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/layouts';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        name: 'index',
        path: '/index',
        component: () => import('@/views/index/index')
      },
      {
        name: 'guide',
        path: '/guide',
        component: () => import('@/views/guide/index')
      },
      {
        name: 'icon',
        path: '/icon',
        component: () => import('@/views/icon/index')
      },
      {
        name: 'echarts',
        path: '/echarts',
        component: () => import('@/views/echarts/index'),
        redirect: '/echarts/bar',
        children: [
          {
            name: 'bar',
            path: '/echarts/bar',
            component: () => import('@/views/echarts/bar/index')
          },
          {
            name: 'line',
            path: '/echarts/line',
            component: () => import('@/views/echarts/line/index')
          },
          {
            name: 'pie',
            path: '/echarts/pie',
            component: () => import('@/views/echarts/pie/index')
          },
          {
            name: 'graph',
            path: '/echarts/graph',
            component: () => import('@/views/echarts/graph/index')
          },
          {
            name: 'map',
            path: '/echarts/map',
            component: () => import('@/views/echarts/map/index')
          },
          {
            name: 'other',
            path: '/echarts/other',
            component: () => import('@/views/echarts/other/index')
          }
        ]
      },
      {
        name: 'webGl',
        component: () => import('@/views/webGl/index'),
        path: '/webGl',
        redirect: '/webGl/ArcGis',
        children: [
          {
            name: 'ArcGis',
            path: '/webGl/ArcGis',
            component: () => import('@/views/webGl/ArcGis/index')
          },
          {
            name: 'OpenLayers',
            path: '/webGl/OpenLayers',
            component: () => import('@/views/webGl/OpenLayers/index')
          }
        ]
      },
      {
        name: 'components',
        path: '/components',
        component: () => import('@/views/components/index'),
        redirect: '/components/vr',
        children: [
          {
            name: 'vr',
            path: '/components/vr',
            component: () => import('@/views/components/vr/index')
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
