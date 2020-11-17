<template>
  <div class="setting-container">
    <a-card :hoverable="true" :bordered="false">
      <a-card title="基本资料" :bordered="false">
        <account-base />
      </a-card>
      <a-card title="安全设置" :bordered="false">
        <security-setting />
      </a-card>
      <a-card title="个性化" :bordered="false">
        <custom-setting />
      </a-card>
    </a-card>
  </div>
</template>

<script>
import accountBase from './components/accountBase';
import securitySetting from './components/securitySetting';
import customSetting from './components/customSetting';
export default {
  name: 'setting',
  components: { accountBase, securitySetting, customSetting },
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
