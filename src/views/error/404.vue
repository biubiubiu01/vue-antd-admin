<template>
  <a-result status="404" title="404" sub-title="对不起，你访问的页面不存在">
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
