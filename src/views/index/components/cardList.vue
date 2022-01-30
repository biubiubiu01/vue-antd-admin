<template>
  <div class="cardList-wrapper">
    <a-row :gutter="24">
      <a-col :xs="12" :md="12" :sm="12" :lg="6">
        <div class="card-item card-item-one" @click="sendTitle('销售额', 'sale')">
          <div class="card-title">
            <a-space :size="8"> <svg-icon icon="sale" :size="20" /> 总销售额 </a-space>
          </div>
          <div class="all-count">
            ¥ <count-to :startVal="0" :endVal="12367" :duration="2200" />
            <span class="suffix">万</span>
          </div>
          <div class="card-info relative">
            <div class="abs-bottom">
              <div style="margin-right:20px" class="inline-block">
                日销售额：
                <a-space :size="8">
                  <span class="bold">¥ 28万</span>
                  <a-icon type="caret-up" class="up" />
                </a-space>
              </div>
              <div class="inline-block">
                同比增长：
                <a-space :size="8">
                  <span class="bold">6%</span>
                  <a-icon type="caret-down" class="down" />
                </a-space>
              </div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :xs="12" :md="12" :sm="12" :lg="6">
        <div class="card-item card-item-two" @click="sendTitle('访问量', 'visit')">
          <div class="card-title">
            <a-space :size="8"> <svg-icon icon="visit" :size="20" /> 访问量 </a-space>
          </div>
          <div class="all-count">
            <count-to :startVal="0" :endVal="3750" :duration="2200" />
            <span class="suffix">万次</span>
          </div>
          <div class="card-info relative">
            <div class="abs-bottom">
              <div style="margin-right:20px" class="inline-block">
                日访问量：
                <a-space :size="8">
                  <span class="bold">11万次</span>
                  <a-icon type="caret-up" class="up" />
                </a-space>
              </div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :xs="12" :md="12" :sm="12" :lg="6">
        <div class="card-item card-item-three" @click="sendTitle('加购数', 'shopCard')">
          <div class="card-title">
            <a-space :size="8"> <svg-icon icon="shopCard" :size="20" /> 加购数 </a-space>
          </div>
          <div class="all-count">
            <count-to :startVal="0" :endVal="129795" :duration="2200" />
            <span class="suffix">个</span>
          </div>
          <div class="card-info relative">
            <div class="abs-bottom">
              <div style="margin-right:20px" class="inline-block">
                日加购数：
                <a-space :size="8">
                  <span class="bold">1575</span>
                  <a-icon type="caret-down" class="up" />
                </a-space>
              </div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :xs="12" :md="12" :sm="12" :lg="6">
        <div class="card-item card-item-four" @click="sendTitle('支付数', 'pay')">
          <div class="card-title">
            <a-space :size="8"> <svg-icon icon="pay" :size="20" /> 支付笔数 </a-space>
          </div>
          <div class="all-count">
            <count-to :startVal="0" :endVal="13996" :duration="2200" />
            <span class="suffix">笔</span>
          </div>
          <div class="card-info relative">
            <div class="abs-bottom">
              <div style="margin-right:20px" class="inline-block">
                日支付数：
                <a-space :size="8">
                  <span class="bold">1950</span>
                  <a-icon type="caret-down" class="up" />
                </a-space>
              </div>
              <div class="inline-block">
                转换率：
                <a-space :size="8">
                  <span class="bold">66%</span>
                  <a-icon type="caret-up" class="down" />
                </a-space>
              </div>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'cardList',
  components: { countTo },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    sendTitle(title, key) {
      this.$emit('sendTitle', title, key);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../../styles/mixin.scss';

.cardList-wrapper {
  .card-item {
    box-sizing: border-box;
    height: 150px;
    padding: 15px 15px 0;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 25px;
    box-shadow: 3px 5px 15px rgba(40, 40, 40, 0.36);
    &.card-item-one {
      @include cardBg(#5171fd, #c97afd);
      &:hover {
        box-shadow: 0 5px 10px #c97afd;
      }
    }
    &.card-item-two {
      @include cardBg(#3dadf6, #737bfc);
       &:hover {
        box-shadow: 0 5px 10px #737bfc;
      }
    }
    &.card-item-three {
      @include cardBg(#ea677c, #ef9b5f);
       &:hover {
        box-shadow: 0 5px 10px #ef9b5f;
      }
    }
    &.card-item-four {
      @include cardBg(#42d79b, #a6e25f);
       &:hover {
        box-shadow: 0 5px 10px #a6e25f;
      }
    }
    &:hover {
      transform: scale(1.03);
      transition: all 0.1s ease-out;
    }
    .card-title {
      color: #fff;
      font-size: 1rem;
    }
    .all-count {
      color: #fff;
      font-size: 1.9rem;
      font-weight: bold;
      margin-top: 12px;
      padding-left: 25px;
      .suffix {
        font-size: 0.75rem;
      }
    }
    .card-info {
      color: #fff;
      font-size: 0.85rem;
      height: 46px;
      margin-top: 8px;
      .abs-bottom {
        position: absolute;
        bottom: 7px;
        left: 0;
      }
      .up {
        color: #1afa29;
      }
      .down {
        color: rgb(250, 30, 16);
      }
    }
  }
}
</style>
