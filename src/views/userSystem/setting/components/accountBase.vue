<template>
  <a-form-model
    :model="accountFrom"
    :rules="accountRule"
    class="account-from"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 16 }"
    ref="accountFrom"
    hideRequiredMark
  >
    <a-form-model-item prop="imgUrl" label="头像">
      <a-avatar :src="accountFrom.imgUrl" :size="108" />
    </a-form-model-item>
    <a-form-model-item prop="username" label="用户名" hasFeedback>
      <a-input v-model="accountFrom.username" placeholder="请输入用户名" allow-clear />
    </a-form-model-item>
    <a-form-model-item label="权限">
      <a-input v-model="accountFrom.role" disabled />
    </a-form-model-item>
    <a-form-model-item prop="position" label="职位" hasFeedback>
      <a-input v-model="accountFrom.position" allow-clear />
    </a-form-model-item>
    <a-form-model-item prop="location" label="所在城市">
      <a-input v-model="accountFrom.location" allow-clear />
    </a-form-model-item>
    <a-form-model-item prop="label" label="个人介绍">
      <a-textarea v-model="accountFrom.label" placeholder="请输入个人介绍..." :autoSize="{ minRows: 4, maxRows: 7 }" />
    </a-form-model-item>
    <a-form-model-item prop="skill" label="技能">
      <a-select
        mode="tags"
        placeholder="请输入个人技能"
        :maxTagCount="3"
        allowClear
        :default-value="accountFrom.skill"
        @change="changeSkill"
      >
        <a-select-option v-for="item in skillList" :key="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-form-item class="text-center">
      <a-button type="primary" @click="updateValue" :loading="loading">
        提交
      </a-button>
      <a-button style="margin-left:25px" @click="resetFrom">
        取消
      </a-button>
    </a-form-item>
  </a-form-model>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'accountBase',
  data() {
    return {
      loading: false,
      accountFrom: {
        skill: '闪电五连鞭',
        imgUrl: ''
      },
      accountRule: {
        imgUrl: [{ required: true, trigger: 'blur' }],
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空！' }],
        position: [{ required: true, trigger: 'blur', message: '职位不能为空！' }],
        location: [{ required: true, trigger: 'blur', message: '请选择所在城市！' }],
        label: [{ required: true, trigger: 'blur', message: '个人介绍不能为空！' }],
        skill: [{ required: true, trigger: 'blur', message: '请至少勾选一项技能' }]
      },
      skillList: [
        '闪电五连鞭',
        '偷袭',
        '耗子尾汁',
        '乌鸦坐飞机',
        '龙卷风摧毁停车场',
        '奥利给',
        '好嗨哟',
        '是个狼人',
        '雨女无瓜',
        '996'
      ]
    };
  },
  computed: {
    ...mapState({
      accountInfo: state => state.user.accountInfo
    })
  },
  mounted() {
    this.accountFrom = this.accountInfo;
    this.accountFrom.imgUrl = require('../../../../assets/nav/user.gif');
  },
  methods: {
    changeSkill(key) {
      this.accountFrom.skill = key.join(',');
    },
    updateValue() {
      this.$refs.accountFrom.validate(valid => {
        if (valid) {
          this.loading = true;
          const { username, position, location, label, skill, role } = this.accountFrom;
          this.$store.dispatch('user/updateInfo', { username, position, location, label, skill, role }).then(() => {
            this.$message.success('修改成功！');
            this.loading = false;
          });
        }
      });
    },
    resetFrom() {
      this.$refs.accountFrom.resetFields();
    }
  }
};
</script>
<style lang="scss" scoped></style>
