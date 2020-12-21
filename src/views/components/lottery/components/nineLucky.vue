<template>
  <div class="nineLucky-wrapper">
    <div class="main-wrapper">
      <div class="item-wrapper text-center" v-for="(item, index) in nineList" :key="index">
        <img
          v-if="item.imgUrl"
          :src="item.imgUrl"
          alt=""
          :class="index == 4 ? 'chart-wrapper' : 'baseImg'"
          @click="startDraw(index)"
        />
        <p v-if="item.title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getNineLucky } from '@/api/lottery';
export default {
  name: 'nineLucky',
  data() {
    return {
      nineList: [
        {
          title: '精美大礼包',
          imgUrl: require('@/assets/lottery/gift.png')
        },
        {
          title: '华为手机',
          imgUrl: require('@/assets/lottery/phone.png')
        },
        {
          title: '典藏版棒球帽',
          imgUrl: require('@/assets/lottery/hat.png')
        },
        {
          title: '谢谢参与',
          imgUrl: require('@/assets/lottery/sorry.png')
        },
        {
          title: '',
          imgUrl: require('@/assets/lottery/nineDraw.png')
        },
        {
          title: '劳斯莱斯雨伞',
          imgUrl: require('@/assets/lottery/umbrella.png')
        },
        {
          title: '香奈儿香水',
          imgUrl: require('@/assets/lottery/perfume.png')
        },
        {
          title: 'iPhone',
          imgUrl: require('@/assets/lottery/iPhone.png')
        },
        {
          title: '888元现金红包',
          imgUrl: require('@/assets/lottery/money.png')
        }
      ],
      rotate: false,
      option: {
        speed: 100, //初始转动速度
        times: 0, //转动次数
        count: 8, //奖品个数
        start: -1 //起始位置
      }
    };
  },

  methods: {
    async startDraw(index) {
      if (index == 4) {
        if (this.rotate) return;
        this.rotate = true;
        const { data } = await getNineLucky();
        this.option.speed = 100;
        // this.startRoll();
      }
    },
    startRoll() {
      // this.option.times++;
    }
  }
};
</script>
<style lang="scss" scoped>
.nineLucky-wrapper {
  width: 500px;
  max-width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background: url('~@/assets/lottery/nine1.png') no-repeat;
  background-size: 100% 100%;
  animation: toggleBg 0.5s ease infinite;
  position: relative;
  &:after {
    content: '';
    display: block;
    margin-top: 100%;
  }
  .main-wrapper {
    position: absolute;
    top: 35px;
    left: 40px;
    right: 40px;
    bottom: 50px;
    display: grid;
    grid-template-columns: calc(33.3% - 5px) calc(33.3% - 5px) calc(33.3% - 5px);
    grid-template-rows: calc(33.3% - 5px) calc(33.3% - 5px) calc(33.3% - 5px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .item-wrapper {
      background: url('~@/assets/lottery/baseBg1.png') no-repeat;
      background-size: 100% 100%;
      .baseImg {
        width: 65px;
        height: 65px;
        margin: 15px auto 5px;
      }
    }
  }
}

@keyframes toggleBg {
  0% {
    background-image: url('~@/assets/lottery/nine1.png');
  }
  100% {
    background-image: url('~@/assets/lottery/nine2.png');
  }
}
</style>
