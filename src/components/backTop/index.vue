<template>
  <div class="backTop">
    <a-back-top :visibilityHeight="320">
      <svg-icon icon="backTop" />
    </a-back-top>
  </div>
</template>

<script>
export default {
  name: 'backTop',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.backTop {
  /deep/ .ant-back-top {
    background-color: #1890ff;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    bottom: 50px !important;
  }
}
</style>
