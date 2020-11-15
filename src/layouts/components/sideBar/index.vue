<template>
  <div class="side-wrapper">
    <logo :collapse="collapsed" />
    <scroll-bar class="side-main">
      <a-menu
        mode="inline"
        :inline-collapsed="!collapsed"
        theme="dark"
        :selectedKeys="[$route.path]"
        :open-keys="openKeys"
        @openChange="changeOpen"
      >
        <template v-for="item in baseRoute">
          <a-menu-item :key="item.path" v-if="!item.children">
            <router-link :to="item.path">
              <svg-icon v-if="item.meta.icon" :icon="item.meta.icon"> </svg-icon>
              <span style="margin-left:16px" class="menu-title">{{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :currentRoute="item"></sub-menu>
        </template>
      </a-menu>
    </scroll-bar>
  </div>
</template>

<script>
import logo from './logo';
import subMenu from './subMenu';
export default {
  name: 'sideBar',
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  components: { logo, subMenu },
  data() {
    return {
      baseRoute: [
        {
          path: '/index',
          meta: { title: '首页', icon: 'dashboard' }
        },
        {
          path: '/guide',
          meta: { title: '引导页', icon: 'guide' }
        },
        {
          path: '/icon',
          meta: { title: '图标', icon: 'icon' }
        },
        {
          path: '/echarts',
          meta: { title: '图表', icon: 'echarts' },
          children: [
            {
              path: '/echarts/bar',
              meta: { title: '柱状图' }
            },
            {
              path: '/echarts/line',
              meta: { title: '折线图' }
            },
            {
              path: '/echarts/pie',
              meta: { title: '饼图' }
            },
            {
              path: '/echarts/graph',
              meta: { title: '关系图' }
            },
            {
              path: '/echarts/map',
              meta: { title: '地图' }
            },
            {
              path: '/echarts/other',
              meta: { title: '其他图表' }
            }
          ]
        },
        {
          path: '/webGl',
          meta: { title: '地图', icon: 'webGl' },
          children: [
            {
              path: '/webGl/ArcGis',
              meta: { title: 'ArcGis' }
            },
            {
              path: '/webGl/OpenLayers',
              meta: { title: 'OpenLayers' }
            }
          ]
        },
        {
          path: '/components',
          meta: { title: '组件', icon: 'component' },
          children: [
            {
              path: '/components/vr',
              meta: { title: '全景图' }
            }
          ]
        },
        {
          path: '/nest',
          meta: { title: '嵌套路由', icon: 'nest' },
          children: [
            {
              path: '/nest/menu1',
              meta: { title: '路由菜单1' },
              children: [
                {
                  path: '/nest/menu1/menu1-1',
                  meta: { title: '路由菜单1-1' }
                },
                {
                  path: '/nest/menu1/menu1-2',
                  meta: { title: '路由菜单1-2' },
                  children: [
                    {
                      path: '/nest/menu1/menu1-2/menu1-2-1',
                      meta: { title: '路由菜单1-2-1' }
                    }
                  ]
                }
              ]
            },
            {
              path: '/nest/menu2',
              meta: { title: '路由菜单2' }
            }
          ]
        },
        {
          path: '/userSystem',
          meta: { title: '个人设置', icon: 'user' },
          children: [
            {
              path: '/userSystem/userInfo',
              meta: { title: '个人中心' }
            },
            {
              path: '/userSystem/setting',
              meta: { title: '用户设置' }
            }
          ]
        },
        {
          path: '/system',
          meta: { title: '系统设置', icon: 'system' }
        }
      ],
      openKeys: []
    };
  },
  methods: {
    changeOpen(keys) {
      const currentOpenKey = keys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.baseRoute.findIndex(item => item.path == currentOpenKey) === -1) {
        this.openKeys = keys;
      } else {
        this.openKeys = currentOpenKey ? [currentOpenKey] : [];
      }
    }
  }
};
</script>
