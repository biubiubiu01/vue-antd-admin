<template>
  <div class="nineLucky-wrapper">
    <div class="main-wrapper">
      <div class="item-wrapper" v-for="(item, index) in nineList" :key="index">
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nineLucky',
  data() {
    return {
      nineList: [
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        },
        {
          title: '',
          imgUrl: ''
        }
      ]
    };
  },

  methods: {}
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
    bottom: 45px;
    display: grid;
    grid-template-columns: calc(33.3% - 5px) calc(33.3% - 5px) calc(33.3% - 5px);
    grid-template-rows: calc(33.3% - 5px) calc(33.3% - 5px) calc(33.3% - 5px);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .item-wrapper {
      background: #fff;
      border-radius: 5px;
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
