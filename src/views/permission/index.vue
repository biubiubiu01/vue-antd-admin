<template>
  <div class="permission-container">
    <p>当前权限：["{{ role }}"]</p>
    切换权限：
    <a-radio-group :default-value="role" button-style="solid" @change="handleChangeRole">
      <a-radio-button value="admin">
        admin
      </a-radio-button>
      <a-radio-button value="editor">
        editor
      </a-radio-button>
      <a-radio-button value="test">
        test
      </a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    role() {
      return this.$store.getters.roles;
    }
  },
  methods: {
    handleChangeRole(e) {
      const role = e.target.value;
      this.$store.dispatch('permission/changeRole', role);
    }
  }
};
</script>
<style lang="scss" scoped>
.permission-container {
  padding: 24px;
}
</style>
