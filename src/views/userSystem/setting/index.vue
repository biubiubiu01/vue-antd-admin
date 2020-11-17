<template>
  <div class="setting-container">
    <a-card :hoverable="true" :bordered="false">
      <a-card title="基本资料" :bordered="false">
        <account-base />
      </a-card>
      <a-card title="安全设置" :bordered="false">
        <security-setting />
      </a-card>
      <a-card title="个性化" :bordered="false">789</a-card>
    </a-card>
  </div>
</template>

<script>
import accountBase from './components/accountBase';
import securitySetting from './components/securitySetting';
export default {
  name: 'setting',
  components: { accountBase, securitySetting },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.setting-container {
  /deep/ .ant-form-item-label {
    font-weight: 600;
  }
}
</style>
