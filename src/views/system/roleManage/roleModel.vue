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
      :model="roleFrom"
      :rules="roleRule"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 16 }"
      ref="roleFrom"
      hideRequiredMark
    >
      <a-form-model-item prop="id" label="id" v-show="currentRow">
        <a-input v-model="roleFrom.id" disabled />
      </a-form-model-item>
      <a-form-model-item prop="role" label="角色名称" hasFeedback>
        <a-input v-model="roleFrom.role" />
      </a-form-model-item>
      <a-form-model-item prop="text" label="描述">
        <a-textarea v-model="roleFrom.text" placeholder="描述..." :autoSize="{ minRows: 3, maxRows: 5 }" />
      </a-form-model-item>
      <a-form-model-item prop="menu" label="菜单">
        <standard-tree :role="roleFrom.role" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { editRole, addRole } from '@/api/roleManage';
import standardTree from '@/components/standardTree/index';

export default {
  name: 'roleModel',
  props: {
    currentRow: [Object, null],
    dialogVisible: Boolean,
    tableData: Array
  },
  components: { standardTree },
  data() {
    const validateRole = (rule, value, callback) => {
      if (this.currentRow) {
        callback();
      }
      if (value.trim().length === 0) {
        callback(new Error('角色名称不能为空！'));
      } else if (this.roleList.indexOf(value) != -1) {
        callback(new Error('已存在相同角色名称！'));
      } else {
        callback();
      }
    };
    return {
      roleRule: {
        role: [{ required: true, trigger: 'blur', validator: validateRole }],
        text: [{ required: true, trigger: 'blur', min: 5, message: '请至少输入五个字符描述！' }]
      },
      roleFrom: {
        role: ''
      },
      loading: false
    };
  },
  computed: {
    roleList() {
      return this.tableData.map(item => item.role);
    }
  },

  mounted() {
    this.roleFrom = { ...this.currentRow } || {
      role: ''
    };
  },
  methods: {
    handleSure() {
      this.$refs.roleFrom.validate(valid => {
        this.loading = true;
        if (valid) {
          if (this.currentRow) {
            //编辑
            editRole(this.roleFrom).then(() => {
              this.$message.success('修改成功!');
              this.loading = false;
              this.$emit('ok');
            });
          } else {
            //新增
            addRole(this.roleFrom).then(() => {
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
