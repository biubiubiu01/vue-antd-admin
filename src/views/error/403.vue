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
import { asyncRoutes } from '@/router';
export default {
  data() {
    return {};
  },
  computed: {
    asyncRoutes() {
      return asyncRoutes;
    }
  },
  methods: {
    returnHome() {
      const data = this.filtrRoute(this.asyncRoutes);
      this.$router.replace({
        path: data[0].path
      });
    },
    filtrRoute(routes) {
      if (routes.length == 0) {
        return [];
      }
      return routes.filter(item => item.children)[0].children;
    }
  }
};
</script>
