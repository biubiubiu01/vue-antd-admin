<template>
  <a-form-model
    :model="securityFrom"
    :rules="securityRule"
    class="security-from"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 16 }"
    ref="securityFrom"
  >
    <a-form-model-item prop="password" label="登录密码">
      <a-row :gutter="24">
        <a-col :span="16">
          <a-input-password
            ref="password"
            v-model="securityFrom.password"
            placeholder="请输入登录密码"
            @focus="changePassword('save')"
            @blur="changePassword('change')"
          />
        </a-col>
        <a-col :span="8">
          <a-button type="link" @click="changePassword('save')" v-if="passwordStatus == 'change'">
            修改
          </a-button>
          <div v-else>
            <a-button type="link">
              保存
            </a-button>
            <span style="margin-left:-5px">
              取消
            </span>
          </div>
        </a-col>
      </a-row>
    </a-form-model-item>
    <a-form-model-item prop="payPassword" label="支付密码">
      <a-row :gutter="24">
        <a-col :span="16">
          <a-input-password ref="payPassword" v-model="securityFrom.payPassword" placeholder="请输入支付密码"
        /></a-col>
        <a-col :span="8">
          <a-button type="link">
            修改
          </a-button>
        </a-col>
      </a-row>
    </a-form-model-item>
    <a-form-model-item prop="phone" label="绑定手机">
      <a-row :gutter="24">
        <a-col :span="16">
          <a-input placeholder="请输入手机号" v-model="securityFrom.phone">
            <a-icon slot="suffix" :type="showPhone ? 'eye' : 'eye-invisible'" @click.native="changeEye" />
          </a-input>
        </a-col>
        <a-col :span="8">
          <a-button type="link">
            修改
          </a-button>
        </a-col>
      </a-row>
    </a-form-model-item>
    <a-form-model-item prop="bankCard" label="绑定银行卡">
      <a-row :gutter="24">
        <a-col :span="16">
          <a-input placeholder="请输入银行卡号" disabled v-model="securityFrom.bankCard" />
        </a-col>
        <a-col :span="8">
          <a-button type="link">
            解绑
          </a-button>
        </a-col>
      </a-row>
    </a-form-model-item>
    <a-form-model-item prop="bankCard" label="绑定微信">
      <a-row :gutter="24">
        <a-col :span="16">
          <a-input v-model="securityFrom.wechat" disabled />
        </a-col>
        <a-col :span="8">
          <a-button type="link">
            解绑
          </a-button>
        </a-col>
      </a-row>
    </a-form-model-item>
  </a-form-model>
</template>

<script>
export default {
  name: 'securitySetting',
  data() {
    return {
      securityFrom: {
        password: '123456',
        payPassword: '88888888',
        phone: '13*****6666',
        bankCard: '422*************125',
        wechat: 'Live'
      },
      showPhone: false,
      passwordStatus: 'change',
      securityRule: {}
    };
  },
  methods: {
    changePassword(val) {
      this.passwordStatus = val;
      if (val == 'save') {
        this.$refs.password.focus();
      }
    },
    changeEye() {
      this.showPhone = !this.showPhone;
    }
  }
};
</script>
