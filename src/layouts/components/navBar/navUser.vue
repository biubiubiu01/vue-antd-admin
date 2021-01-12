<template>
  <a-dropdown class="navUser-wrppaer">
    <div>
      <img src="../../../assets/nav/user.gif" class="userImg" alt="" />
      <span class="userTitle">{{ accountInfo.username }}</span>
      <a-icon type="caret-down" style="margin-left:5px" />
    </div>

    <a-menu slot="overlay">
      <a-menu-item>
        <router-link to="/userSystem/userInfo">个人中心</router-link>
      </a-menu-item>
      <a-menu-item>
        <router-link to="/userSystem/setting">个人设置</router-link>
      </a-menu-item>
      <a-menu-item>
        <a href="https://github.com/biubiubiu01/vue-antd-admin" target="parent">项目地址</a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <span @click.self="logout">退出登录 </span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'navUser',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      accountInfo: state => state.user.accountInfo
    })
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout');
      await this.$store.dispatch('tagsView/clearTag');
      this.$router.replace({
        path: '/login'
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.userImg {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: inline-block;
}
.userTitle {
  margin-left: 8px;
  font-weight: 700;
  font-size: 1rem;
  display: inline-block;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
</style>
