<template>
  <a-form-model
    :model="securityFrom"
    :rules="securityRule"
    class="security-from"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 16 }"
    ref="securityFrom"
  >
    <a-form-model-item prop="username" label="登录密码">
      <a-row :gutter="24">
        <a-col :span="16">11</a-col>
        <a-col :span="8">1345</a-col>
      </a-row>
    </a-form-model-item>
    <a-form-model-item prop="phone" label="手机">
      <!-- <a-input v-model="securityFrom.phone" placeholder="请输入手机号码" allow-clear /> -->
    </a-form-model-item>
  </a-form-model>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'securitySetting',
  data() {
    return {
      securityFrom: {
        password: '123456',
        phone: '13*****6666'
      },
      securityRule: {}
    };
  }
};
</script>
<style lang="scss" scoped></style>
