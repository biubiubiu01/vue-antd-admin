<template>
  <div class="nav-wrapper flex justify-between align-center">
    <a-icon :type="collapsed ? 'menu-fold' : 'menu-unfold'" class="nav-fold boxHover" @click="toggleOpen" />

    <bread-crumb />

    <div class="right-menu flex">
      <nav-search class="right-menu-item pointer" />
      <div class="right-menu-item pointer boxHover" @click.stop="screenFull">
        <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" :size="18" />
      </div>
      <div class="right-menu-item pointer boxHover">
        <svg-icon icon="color" :size="18" />
      </div>

      <nav-international class="right-menu-item pointer boxHover" />
      <div class="right-menu-item pointer boxHover" style="margin-right:15px">
        <a-badge :count="10" :overflow-count="99" :offset="[3, -4]">
          <svg-icon icon="bell" :size="18" />
        </a-badge>
      </div>
      <nav-user class="right-menu-item pointer boxHover flex-sub" />
    </div>
  </div>
</template>

<script>
import navSearch from './navSearch';
import navInternational from './navInternational';
import navUser from './navUser';
import screenfull from 'screenfull';
import breadCrumb from './breadCrumb';
export default {
  name: 'navBar',
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  components: { navSearch, navInternational, navUser, breadCrumb },
  data() {
    return {
      breadList: [
        {
          path: '/dashboard',
          meta: { title: '首页', icon: 'dashboard' }
        }
      ],
      isFullscreen: false
    };
  },

  mounted() {},
  methods: {
    toggleOpen() {
      this.$store.commit('setting/TOGGLE_OPEN');
    },
    screenFull() {
      if (!screenfull.isEnabled) {
        this.$message.warning('不好意思，你的电脑不支持全屏，赶紧换个电脑吧，谢谢~');
        return false;
      }
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-wrapper {
  height: 54px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .boxHover {
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .nav-fold {
    padding: 0 18px;
    height: 100%;
    cursor: pointer;
    font-size: 20px;
    line-height: 58px;
    transition: all 0.3s, padding 0s;
  }

  .right-menu {
    height: 100%;
    width: 280px;
    .right-menu-item {
      height: 100%;
      padding: 0 8px;
      line-height: 54px;
    }
  }
}
</style>
