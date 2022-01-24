<template>
  <a-tree checkable :tree-data="treeData" @check="handleSelect" v-model="checkKeyList" />
</template>

<script>
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
    asyncRoutes() {
      return asyncRoutes;
    }
  },
  created() {
    const data = this.filtrRoute(this.asyncRoutes);
    this.treeData = this.generateRoutes(data);
    if (this.role) {
      //比对
      this.handleBatter(data);
    } else {
      this.checkKeyList = [];
    }
  },
  methods: {
    //比对
    handleBatter(data) {
      //先递归拿到所有路由子节点
      const allRoute = this.getRouteId(data);
      let roleRoute = this.role.split(',');
      let newRoute = [];
      allRoute.forEach(item => {
        roleRoute.forEach(val => {
          if (item == val) {
            newRoute.push(val);
          }
        });
      });
      this.checkKeyList = newRoute;
    },

    getRouteId(routes, role = null) {
      const res = [];
      routes.forEach(item => {
        if (item.children && item.children.length > 0) {
          res.push(...this.getRouteId(item.children, item.meta.role));
        } else if (item.meta && item.meta.role) {
          res.push(String(item.meta.role));
        } else if (role) {
          res.push(String(role));
        }
      });
      return res;
    },

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

    handleSelect(selectedKeys, e) {
      let checkKeyList = [...selectedKeys, ...e.halfCheckedKeys];
      this.$emit('changeTree', checkKeyList);
    }
  }
};
</script>
<style lang="scss" scoped></style>
