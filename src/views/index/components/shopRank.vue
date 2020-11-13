<template>
  <scroll-bar class="shopRank-wrapper all-container">
    <vue-seamless-scroll :data="rankData" :class-option="classOption" :key="num">
      <div class="shop-item flex" v-for="(item, index) in rankData" :key="index">
        <div style="width:130px">
          <span class="rankIndex inline-block">
            <svg-icon :icon="rankIndex[index + 1]" :size="30" v-if="index < 3" />
            <span v-else> {{ index + 1 }}</span>
          </span>

          <span style="margin-left:10px">{{ item.area }}</span>
        </div>
        <a-progress
          :stroke-color="{
            from: '#3dadf6',
            to: '#737bfc'
          }"
          :percent="filterValue(item.value)"
          class="flex-sub"
          :showInfo="false"
        />
        <div style="margin-left:10px">{{ item.value }}</div>
      </div>
    </vue-seamless-scroll>
  </scroll-bar>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll';
export default {
  name: 'shopRank',
  props: {
    rankData: Array
  },
  components: { vueSeamlessScroll },
  data() {
    return {
      classOption: {
        step: 0.3,
        waitTime: 1000,
        autoPlay: false,
        switchDelay: 1000,
        singleHeight: 40
      },
      rankIndex: {
        1: 'diyi',
        2: 'dierming',
        3: 'disanming'
      },
      timer: null,
      //这里加个key值来刷新 滚动 从第一个开始
      num: Math.random(0, 1000)
    };
  },
  computed: {
    max() {
      if (this.rankData.length === 0) return 0;
      return this.rankData[0].value;
    }
  },
  methods: {
    filterValue(val) {
      if (!val || this.max === 0) {
        return 0;
      }
      return parseInt((val / this.max) * 100);
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  },
  watch: {
    rankData: {
      handler(nl, ol) {
        this.classOption.autoPlay = false;
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.num = Math.random(0, 1000);
        this.timer = setTimeout(() => {
          this.classOption.autoPlay = true;
          clearTimeout(this.timer);
          this.timer = null;
        }, 2000);
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
.shop-item {
  margin-bottom: 16px;
  font-size: 1rem;
  .rankIndex {
    width: 30px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
  }
}
</style>
