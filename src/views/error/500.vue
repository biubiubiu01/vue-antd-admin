<template>
  <a-result class="error-page" status="500" title="500" sub-title="对不起，服务器出问题了">
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
  computed: {
    role() {
      return this.$store.getters.roles;
    }
  },
  methods: {
    returnHome() {
      if (this.role === 'editor') {
        this.$router.push({
          path: '/components/editor'
        });
        return;
      }
      this.$router.push({
        path: '/index'
      });
    }
  }
};
</script>
