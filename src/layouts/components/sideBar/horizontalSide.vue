<template>
  <div class="horizontalSide-wrapper flex-sub ">
    <logo class="horizontalSide-logo" />
    <a-menu mode="horizontal" theme="dark" :selectedKeys="[$route.path]" class="side-main">
      <template v-for="item in baseRoute">
        <menu-item v-if="!item.children && !item.hidden" :key="item.path" :currentRoute="item" />
        <template v-else v-for="temp in item.children">
          <menu-item v-if="!temp.children" :key="temp.path" :currentRoute="temp" />
          <sub-menu v-else :key="temp.path" :currentRoute="temp"></sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import logo from './logo';
import subMenu from './subMenu';
import menuItem from './menuItem';
import { mapGetters } from 'vuex';
export default {
  name: 'sideBar',
  components: { logo, subMenu, menuItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['baseRoute'])
  }
};
</script>
<style lang="scss" scoped>
.horizontalSide-logo {
  height: 54px;
  line-height: 54px;
  width: 240px;
}
.side-main {
  width: calc(100% - 240px);
  height: 54px;
  line-height: 54px;
  background: #293348;
  float: right;
}
</style>
