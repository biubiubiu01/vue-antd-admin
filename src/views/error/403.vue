<template>
  <a-result class="error-page" status="403" title="403" sub-title="对不起，你没有权限查看这个页面">
    <template #extra>
      <a-button type="primary" @click="returnHome">
        返回首页
      </a-button>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    returnHome() {
      this.$router.push({
        path: '/index'
      });
    }
  }
};
</script>
