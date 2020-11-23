<template>
  <a-breadcrumb class="flex-sub bread-wrapper" separator="/">
    <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.path">
      <router-link v-if="index == 0 && breadList.length > 1" :to="item.path">{{ item.meta.title }}</router-link>
      <span v-else>{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'breadCrumb',
  components: {},
  data() {
    return {
      breadList: []
    };
  },
  created() {
    this.getBreadCrumb();
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title);
      let home = {
        path: '/index',
        meta: {
          title: '首页'
        }
      };
      if (matched[0].path == '/index') {
        this.breadList = [home];
      } else {
        this.breadList = [home, ...matched];
      }
    }
  },
  watch: {
    $route() {
      this.getBreadCrumb();
    }
  }
};
</script>
<style lang="scss" scoped>
.bread-wrapper {
  height: 100%;
  line-height: 54px;
  margin-left: 3px;
}
</style>
