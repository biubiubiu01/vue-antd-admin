<template>
  <div class="all-container flex" :class="{ closeSide: !open }">
    <side-bar class="aside-container" :collapsed="open" />
    <div class="main-container">
      <div :class="{ 'fixed-header': fixHeader }">
        <nav-bar :collapsed="open" />
        <tag-view v-if="tagShow" />
      </div>
      <div class="rightPanl fixed pointer">
        <a-icon type="setting" />
        <setting v-if="settingShow" />
      </div>
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { sideBar, navBar, tagView, setting } from './components';
import { mapState } from 'vuex';
export default {
  name: 'layout',
  components: { sideBar, navBar, tagView, setting },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      open: state => state.setting.open,
      fixHeader: state => state.setting.fixHeader,
      tagShow: state => state.setting.tagShow,
      settingShow: state => state.setting.settingShow
    })
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.aside-container {
  background: rgb(41, 51, 72);
  transition: width 0.28s;
  width: 256px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 996;
}

.main-container {
  height: 100%;
  width: calc(100% - 256px);
  margin-left: 256px;
  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 996;
    transition: width 0.28s;
    width: calc(100% - 256px);
    & ~ .app-main {
      padding-top: 100px;
    }
  }
}

.closeSide {
  .aside-container {
    width: 80px;
  }
  .main-container {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
  .fixed-header {
    width: calc(100% - 80px);
  }
}

.rightPanl {
  right: 1px;
  top: 300px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  color: #fff;
  background: #1890ff;
  border-radius: 6px 0 0 6px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  z-index: 999;
}
.app-main {
  min-height: 100%;
}
</style>
