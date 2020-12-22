import Vue from 'vue';
import loadingComponent from '@/components/loading/index.vue';

const loadingConstructor = Vue.extend(loadingComponent);

const instance = new loadingConstructor({
  el: document.createElement('div')
});
document.body.appendChild(instance.$el);

instance.show = true;

const loading = {
  show() {
    instance.show = true;
  },
  hide() {
    instance.show = false;
  }
};

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = loading;
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading;
      }
    });
  }
};
