<template>
  <div class="nineLucky-wrapper">
    <div class="main-wrapper">
      <div
        class="item-wrapper text-center"
        v-for="(item, index) in nineList"
        :key="index"
        :class="{ active: option.index == item.index }"
      >
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
          imgUrl: require('@/assets/lottery/gift.png'),
          index: 0
        },
        {
          title: '华为手机',
          imgUrl: require('@/assets/lottery/phone.png'),
          index: 1
        },
        {
          title: '保时捷50元代金券',
          imgUrl: require('@/assets/lottery/coupon.png'),
          index: 2
        },
        {
          title: '谢谢参与',
          imgUrl: require('@/assets/lottery/sorry.png'),
          index: 7
        },
        {
          title: '',
          imgUrl: require('@/assets/lottery/nineDraw.png'),
          index: -99
        },
        {
          title: '劳斯莱斯雨伞',
          imgUrl: require('@/assets/lottery/umbrella.png'),
          index: 3
        },
        {
          title: '9999元现金红包',
          imgUrl: require('@/assets/lottery/money.png'),
          index: 6
        },
        {
          title: 'iPhone',
          imgUrl: require('@/assets/lottery/iPhone.png'),
          index: 5
        },
        {
          title: '888元现金红包',
          imgUrl: require('@/assets/lottery/money.png'),
          index: 4
        }
      ],
      rotate: false,
      option: {
        speed: 200, //初始转动速度
        times: 0, //当前转动次数
        count: 8, //奖品个数
        index: -1, //起始位置
        prize: -1, //中奖位置
        cycle: 50 //总转的圈数
      },
      message: ''
    };
  },

  methods: {
    async startDraw(index) {
      if (index == 4) {
        if (this.rotate) return;
        this.rotate = true;
        const { data } = await getNineLucky();
        this.option.prize = data.number;
        this.message = data.message;
        this.startRoll();
      }
    },
    startRoll() {
      const { prize, count, cycle } = this.option;
      this.option.times++;
      this.option.index++; //转动的位置+1
      if (this.option.index > count - 1) {
        this.option.index = 0;
      }
      //这里加上 8  为了最后8圈开始降速
      if (this.option.times > cycle + 8 && prize == this.option.index) {
        clearTimeout(this.timer);
        this.prize = -1;
        this.option.times = 0;
        this.option.speed = 200;
        this.rotate = false;
        setTimeout(() => {
          alert(this.message);
        }, 200);
      } else {
        //控制速度
        if (this.option.times < cycle) {
          this.option.speed -= 10;
        } else {
          this.option.speed += 30;
        }

        if (this.option.speed < 40) {
          this.option.speed = 40;
        }
        this.timer = setTimeout(this.startRoll, this.option.speed);
      }
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
    .active {
      background: url('~@/assets/lottery/baseBg2.png') no-repeat;
      background-size: 100% 100%;
      color: #fff;
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
