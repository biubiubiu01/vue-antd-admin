import loading from './loading';

const install = function(Vue) {
  Vue.directive('loading', loading);
};

if (window.Vue) {
  window['loading'] = loading;
  Vue.use(install);
}

loading.install = install;

export default loading;
