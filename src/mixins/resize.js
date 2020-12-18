import { debounce } from '@/utils/index.js';
export default {
  data() {
    return {
      myChart: null,
      resizeHandler: null
    };
  },
  computed: {
    open() {
      return this.$store.state.setting.open;
    }
  },
  mounted() {
    this.resizeHandler = debounce(() => {
      if (this.myChart) {
        this.myChart.resize();
      }
    }, 100);
    this.initResizeEvent();
  },

  methods: {
    //监听resize
    initResizeEvent() {
      window.addEventListener('resize', this.resizeHandler);
    },
    //移除resize
    destroyResizeEvent() {
      window.removeEventListener('resize', this.resizeHandler);
    }
  },

  beforeDestroy() {
    this.destroyResizeEvent();
    if (!this.myChart) {
      return;
    }
    this.myChart.dispose();
    this.myChart.off('click');
    this.myChart = null;
  },

  activated() {
    this.initResizeEvent();
    if (this.myChart) {
      this.myChart.resize();
    }
  },

  deactivated() {
    this.destroyResizeEvent();
  },
  watch: {
    open() {
      if (this.myChart) {
        this.myChart.resize();
      }
    }
  }
};
