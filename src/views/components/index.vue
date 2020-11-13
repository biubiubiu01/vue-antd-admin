<template>
  <div class="components-container border-box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "components",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>
<style lang="scss" scoped>
.components-container {
  padding: 24px;
  background: #f0f2f5;
  min-height: calc(100vh - 100px);
}
</style>
