<template>
  <div class="navUser-wrppaer">
    <a-dropdown>
      <div>
        <img
          src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
          class="userImg"
          alt=""
        />
        <span class="userTitle">admin</span>
        <a-icon type="caret-down" style="margin-left:5px" />
      </div>

      <a-menu slot="overlay">
        <a-menu-item>
          个人中心
        </a-menu-item>
        <a-menu-item>
          个人设置
        </a-menu-item>
        <a-menu-item>
          项目地址
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item>
          <span @click="logout">退出登录 </span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'navUser',
  data() {
    return {};
  },
  methods: {
    logout() {
      //  this.$router.replace()
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
}
</style>
