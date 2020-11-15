import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Layout from '@/layouts';
import mainLayout from '@/layouts/mainLayout';

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
        component: mainLayout,
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
        component: mainLayout,
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
        component: mainLayout,
        redirect: '/components/vr',
        children: [
          {
            name: 'vr',
            path: '/components/vr',
            component: () => import('@/views/components/vr/index')
          }
        ]
      },
      {
        name: 'nest',
        path: '/nest',
        component: mainLayout,
        redirect: '/nest/menu1',
        children: [
          {
            name: 'menu1',
            path: '/nest/menu1',
            component: () => import('@/views/nest/menu1/index'),
            redirect: '/nest/menu1/menu1-1',
            children: [
              {
                name: 'menu1-1',
                path: '/nest/menu1/menu1-1',
                component: () => import('@/views/nest/menu1/menu1-1/index')
              },
              {
                name: 'menu1-2',
                path: '/nest/menu1/menu1-2',
                component: () => import('@/views/nest/menu1/menu1-2/index'),
                redirect: '/nest/menu1/menu1-2/menu1-2-1',
                children: [
                  {
                    name: 'menu1-2-1',
                    path: '/nest/menu1/menu1-2/menu1-2-1',
                    component: () => import('@/views/nest/menu1/menu1-2/menu1-2-1/index')
                  }
                ]
              }
            ]
          },
          {
            name: 'menu2',
            path: '/nest/menu2',
            component: () => import('@/views/nest/menu2/index')
          }
        ]
      },
      {
        name: 'userSystem',
        component: mainLayout,
        path: '/userSystem',
        redirect: '/userSystem/userInfo',
        children: [
          {
            name: 'userInfo',
            path: '/userSystem/userInfo',
            component: () => import('@/views/userSystem/userInfo/index')
          },
          {
            name: 'setting',
            path: '/userSystem/setting',
            component: () => import('@/views/userSystem/setting/index')
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
