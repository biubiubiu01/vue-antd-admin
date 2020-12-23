import Vue from 'vue';

const startLoading = (el, bind) => {
  if (bind.value) {
    const full = el.getAttribute('loading-full');
    const text = el.getAttribute('loading-text');
    const textColor = el.getAttribute('loading-textColor');
    const background = el.getAttribute('loading-background');
    const spin = el.getAttribute('loading-spin');
    const target = full ? document.body : el;
    Vue.$loading.show({ el: target, text, textColor, background, spin });
  } else {
    Vue.$loading.hide();
  }
};

export default {
  bind(el, bind) {
    startLoading(el, bind);
  },
  update(el, bind) {
    startLoading(el, bind);
  }
};
