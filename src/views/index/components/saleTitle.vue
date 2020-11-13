<template>
  <div class="sale-title flex justify-between">
    <slot name="title"></slot>
    <div class="sale-time">
      <span
        v-for="item in timeOption"
        class="time-item pointer"
        :key="item.key"
        :class="{ activeTime: currentType === item.key }"
        @click="changeType(item.key)"
      >
        {{ item.label }}
      </span>
      <a-range-picker
        v-if="currentType === 'range'"
        @change="changeTime"
        style="width:250px;margin-left:10px"
        :placeholder="['开始日期', '结束日期']"
      >
        <a-icon slot="suffixIcon" type="smile" />
      </a-range-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'saleTitle',
  data() {
    return {
      currentType: 'day',
      timeOption: [
        {
          label: '今日',
          key: 'day'
        },
        {
          label: '本周',
          key: 'week'
        },
        {
          label: '本月',
          key: 'month'
        },
        {
          label: '本年',
          key: 'year'
        },
        {
          label: '时间段',
          key: 'range'
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeType(type) {
      if (type === this.currentType) {
        return;
      }
      this.currentType = type;
      if (type == 'range') return;
      this.sendValue();
    },

    changeTime(data, dataString) {
      console.log(dataString);
    },

    sendValue() {
      this.$emit('sendCurrent', this.currentType, this.currentTime);
    }
  }
};
</script>
<style lang="scss" scoped>
.sale-title {
  height: 55px;
  line-height: 55px;
  padding: 0 60px 0 25px;
  box-sizing: border-box;
  font-size: 1.1rem;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .sale-time {
    height: 100%;
    .time-item {
      color: #757575;
      font-size: 1rem;
      width: 60px;
      height: 100%;
      display: inline-block;
      background: #fff;
      text-align: center;
      margin: 0 5px;
      &.activeTime {
        background: #1890ff;
        border-radius: 4px;
        box-sizing: border-box;
        color: #fff;
        box-shadow: -1px 5px 15px #abc3f2;
        &:hover {
          background: #1890ff;
        }
      }
      &:hover {
        background: rgba(0, 0, 0, 0.025);
        transition: all 0.3s, padding 0s;
      }
    }
  }
}
</style>
