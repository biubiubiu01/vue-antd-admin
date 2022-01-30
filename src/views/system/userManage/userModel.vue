<template>
  <a-modal
    :title="currentRow ? '编辑' : '新增'"
    :visible="dialogVisible"
    okText="确认"
    cancelText="取消"
    :width="620"
    :confirmLoading="loading"
    @ok="handleSure"
    @cancel="
      () => {
        $emit('cancel');
      }
    "
  >
    <a-form-model
      :model="userFrom"
      :rules="userRule"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      ref="userFrom"
      hideRequiredMark
    >
      <a-form-model-item prop="id" label="id" v-show="currentRow">
        <a-input v-model="userFrom.id" disabled />
      </a-form-model-item>
      <a-form-model-item prop="username" label="用户名" hasFeedback>
        <a-input v-model="userFrom.username" />
      </a-form-model-item>
      <a-form-model-item prop="password" label="密码" hasFeedback>
        <a-input v-model="userFrom.password" />
      </a-form-model-item>
      <a-form-model-item prop="role" label="权限">
        <a-select
          mode="multiple"
          placeholder="请选择角色"
          allowClear
          :default-value="userFrom.role?userFrom.role.split(','):undefined"
          @change="changeRole"
        >
          <a-select-option v-for="item in roleOption" :key="item.role">
            {{ item.roleString }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item prop="location" label="所在城市" hasFeedback>
        <a-input v-model="userFrom.location" />
      </a-form-model-item>
      <a-form-model-item prop="position" label="职位" hasFeedback>
        <a-input v-model="userFrom.position" />
      </a-form-model-item>
      <a-form-model-item prop="label" label="个人介绍" hasFeedback>
        <a-input v-model="userFrom.label" />
      </a-form-model-item>
      <a-form-model-item prop="skill" label="技能" hasFeedback>
        <a-select
          mode="tags"
          placeholder="请输入个人技能"
          :maxTagCount="3"
          allowClear
          :default-value="userFrom.skill?userFrom.skill.split(','):undefined"
          @change="changeSkill"
        >
          <a-select-option v-for="item in SKILL_LIST" :key="item.label">
            {{ item.label }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item prop="text" label="描述">
        <a-textarea v-model="userFrom.text" placeholder="描述..." :autoSize="{ minRows: 3, maxRows: 5 }" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { editTable, addTable } from '@/api/userManage';
import standardTree from '@/components/standardTree/index';
import { mapGetters } from 'vuex';
export default {
  name: 'userModel',
  props: {
    currentRow: [Object, null],
    dialogVisible: Boolean,
    roleOption: Array
  },
  components: { standardTree },
  data() {
    return {
      userRule: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空！' }],
        password: [{ required: true, trigger: 'blur', min: 6, message: '密码不能少于6位！' }],
        role: [{ required: true, trigger: 'blur', message: '请选择用户权限！' }],
        text: [{ required: true, trigger: 'blur', min: 5, message: '请至少输入五个字符描述！' }],
        location: [{ required: true, trigger: 'blur', message: '请选择所在城市！' }],
        position: [{ required: true, trigger: 'blur', message: '职位不能为空！' }],
        label: [{ required: true, trigger: 'blur', message: '个人介绍不能为空！' }],
        skill: [{ required: true, trigger: 'blur', message: '请至少勾选一项技能' }]
      },
      userFrom: {
        role: ''
      },
      loading: false
    };
  },
  computed: mapGetters(['userInfo']),

  mounted() {
    this.userFrom = { ...this.currentRow } || {
      role: ''
    };
  },
  methods: {
    changeSkill(key) {
      this.userFrom.skill = key.join(',');
    },
    changeRole(key) {
      this.userFrom.role = key.join(',');
    },
    handleSure() {
      this.$refs.userFrom.validate(valid => {
        this.loading = true;
        if (valid) {
          if (this.currentRow) {
            //编辑
            editTable(this.userFrom).then(async () => {
              const { role, username, password, id } = this.userFrom;
              if ((role || username) && id == this.userInfo.id) {
                this.$message.success('修改成功,当前登录信息已发生变化，请重新登录');
                await this.$store.dispatch('user/logout');
                await this.$store.dispatch('tagsView/clearTag');
                this.$router.replace({
                  path: '/login'
                });
                return;
              }
              this.$message.success('修改成功!');
              this.loading = false;
              this.$emit('ok');
            });
          } else {
            //新增
            addTable(this.userFrom).then(() => {
              this.$message.success('添加成功!');
              this.loading = false;
              this.$emit('ok');
            });
          }
        } else {
          this.loading = false;
        }
      });
    }
  }
};
</script>
