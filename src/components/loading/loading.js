import Vue from 'vue';
import loadingComponent from './index.vue';

const loadingConstructor = Vue.extend(loadingComponent);

const instance = new loadingConstructor({
  el: document.createElement('div')
});

instance.show = false;

const loading = {
  show(options) {
    instance.show = true;
    if (options) {
      const { el = document.body, text, textColor, background, spin } = options;
      el.appendChild(instance.$el);
      if (text) {
        instance.text = text;
      }
      if (textColor) {
        instance.textColor = textColor;
      }
      if (background) {
        instance.background = background;
      }
      if (spin) {
        instance.spin = spin;
      }
    } else {
      document.body.appendChild(instance.$el);
    }
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
