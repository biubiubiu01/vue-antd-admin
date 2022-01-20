export default {
  install(Vue) {
    Vue.prototype.THEME_LIST = [
      {
        label: '浅色主题',
        value: 'white'
      },
      {
        label: '深色主题',
        value: 'dark'
      }
    ];
  }
};
