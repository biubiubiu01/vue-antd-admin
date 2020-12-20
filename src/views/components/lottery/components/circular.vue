<template>
  <div class="circular-wrapper">
    <div class="main-box">
      <div class="outBox">
        <img src="../../../../assets/lottery/draw.png" alt="" class="drawImg" @click="rotateCirculat" />
        <div
          class="baseBg"
          :style="{
            transform: 'rotate(' + rotate + 'deg)',
            transition: rotateStatus ? 'all ' + duringTime + 's ease-in-out' : ''
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCircular } from '@/api/lottery';

export default {
  name: 'circularLotter',
  data() {
    return {
      rotate: 0,
      rotateStatus: false,
      duringTime: 6, //旋转的时间
      number: 8 //旋转的圈数
    };
  },
  methods: {
    async rotateCirculat() {
      // 330-370
      if (this.rotateStatus) return;

      this.rotateStatus = true;

      //获取是否中奖和旋转角度
      const { data } = await getCircular();

      this.rotate = 360 * this.number + data.angle;

      setTimeout(() => {
        this.rotateStatus = false;
        this.rotate = this.rotate % 360;
        alert(data.message);
      }, this.duringTime * 1000 + 200);
    }
  }
};
</script>
<style lang="scss" scoped>
.circular-wrapper {
  height: 500px;
  width: 100%;

  .main-box {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    position: relative;
    .outBox {
      background: url('~@/assets/lottery/outBg.png') no-repeat;
      background-size: 100% 100%;
      width: 100%;
      height: 100%;
      position: relative;
      .drawImg {
        width: 150px;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 15;
      }
    }
    .baseBg {
      background: url('~@/assets/lottery/insideBg.png') no-repeat;
      background-size: 100% 100%;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: 25px;
      right: 25px;
      left: 25px;
      bottom: 25px;
    }
  }
}
</style>
