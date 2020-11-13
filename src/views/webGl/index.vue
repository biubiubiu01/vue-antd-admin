<template>
  <div class="webGl-container border-box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'webGl',
  components: {},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.webGl-container {
  padding: 24px;
  height: calc(100vh - 100px);
  background: #f0f2f5;
}
</style>
