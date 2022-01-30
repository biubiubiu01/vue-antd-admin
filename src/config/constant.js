export default {
  install(Vue) {
    Vue.prototype.THEME_LIST = [
      {
        label: '混合主题',
        key: 'mixins'
      },
      {
        label: '浅色主题',
        key: 'white'
      },
      {
        label: '深色主题',
        key: 'dark'
      }
    ];
    Vue.prototype.SKILL_LIST = [
      {
        label: '闪电五连鞭',
        key: 1
      },
      {
        label: '偷袭',
        key: 2
      },
      {
        label: '耗子尾汁',
        key: 3
      },
      {
        label: '乌鸦坐飞机',
        key: 4
      },
      {
        label: '龙卷风摧毁停车场',
        key: 5
      },
      {
        label: '奥利给',
        key: 6
      },
      {
        label: '好嗨哟',
        key: 7
      },
      {
        label: '是个狼人',
        key: 8
      },
      {
        label: '雨女无瓜',
        key: 9
      },
      {
        label: '996',
        key: 10
      }
    ];

    Vue.prototype.LAYOUT_LIST = [
      {
        label: '左侧导航',
        key: 'inline'
      },
      {
        label: '头部导航',
        key: 'horizontal'
      }
    ];
  }
};
