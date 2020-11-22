<template>
  <a-tree checkable :tree-data="treeData" @check="handleSelect" :checkedKeys="checkKeyList" />
</template>

<script>
import { mapGetters } from 'vuex';
import { asyncRoutes } from '@/router';
import { getRoleRoute } from '../../../mock/controller/route';
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
    this.gerRoleRoute();
  },
  methods: {
    gerRoleRoute() {
      getRoleRoute(this.role).then(res => {
        const data = res.data || [];
        const selectRoute = this.filtrRoute(data);
        this.checkKeyList = this.getSelectRoute(selectRoute);
      });
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
        const temp = {
          key: item.path,
          title: item.meta.title
        };
        if (item.children) {
          temp.children = this.generateRoutes(item.children);
        }
        res.push(temp);
      });
      return res;
    },
    getSelectRoute(routes) {
      var res = [];
      routes.forEach(item => {
        if (item.children) {
          res = res.concat(this.getSelectRoute(item.children));
        } else {
          res.push(item.path);
        }
      });

      return res;
    },

    handleSelect(selectedKeys) {
      this.checkKeyList = selectedKeys;
    }
  },
  watch: {
    role(nl, ol) {
      this.gerRoleRoute();
    }
  }
};
</script>
<style lang="scss" scoped></style>
