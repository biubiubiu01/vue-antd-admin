<template>
  <a-tree checkable :tree-data="treeData" @check="handleSelect" :checkedKeys="checkKeyList" />
</template>

<script>
import { mapGetters } from 'vuex';
import { asyncRoutes } from '@/router';
export default {
  name: 'standardTree',
  props: {
    role: String
  },
  data() {
    return {
      treeData: [],
      checkKeyList: []
    };
  },
  computed: {
    ...mapGetters(['baseRoute']),
    asyncRoutes() {
      return asyncRoutes;
    }
  },
  created() {
    const data = this.filtrRoute(this.asyncRoutes);
    this.treeData = this.generateRoutes(data);
    this.checkKeyList = this.role ? this.role.split(',') : [];
  },
  methods: {
    filtrRoute(routes) {
      if (routes.length == 0) {
        return [];
      }
      return routes.filter(item => item.children)[0].children;
    },

    generateRoutes(routes) {
      const res = [];
      routes.forEach(item => {
        if (item.meta && item.meta.role) {
          const temp = {
            key: String(item.meta.role),
            title: item.meta.title
          };
          if (item.children) {
            temp.children = this.generateRoutes(item.children);
          }
          res.push(temp);
        }
      });
      return res;
    },

    handleSelect(selectedKeys) {
      this.checkKeyList = selectedKeys;
      this.$emit('changeTree', selectedKeys);
    }
  }
};
</script>
<style lang="scss" scoped></style>
