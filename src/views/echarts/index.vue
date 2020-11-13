<template>
  <div class="echarts-container border-box">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'echarts',
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {}
};
</script>
<style lang="scss" scoped>
.echarts-container {
  padding: 24px;
  background: #f0f2f5;
}
</style>
