<template>
  <div class="paddingBox-container  border-box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'paddingBox',
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.paddingBox-container {
  padding: 24px;
  background: #f0f2f5;
  min-height: calc(100vh - 100px);
}
</style>
