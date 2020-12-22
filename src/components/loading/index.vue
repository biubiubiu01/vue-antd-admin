<template>
  <div class="loading-container" :style="{ background: background }">
    <div class="loading-wrapper">
      <div class="flex justify-center">
        <div class="center1"></div>
        <div class="center2"></div>
        <div class="center3"></div>
      </div>
      <div class="text" :style="{ color: textColor }">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '正在加载中...'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    background: {
      type: String,
      default: 'rgba(0,0,0,0.3)'
    },
    spinner: {
      // required: true
      type: String,
      default: 'pulse'
    }
  },
  mounted() {
    console.log(this.spinner);
    console.log(this.show);
  },
  watch: {
    show(nl) {
      console.log(nl);
    }
  }
};
</script>
<style lang="scss" scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  .loading-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .text {
      padding-top: 10px;
      width: 100%;
    }
  }
}
</style>
