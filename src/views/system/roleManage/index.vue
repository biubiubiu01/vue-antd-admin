<template>
  <div class="roleManage-wrapper">
    <a-card :hoverable="true" :bordered="false">
      <div slot="title" class="flex flex-wrap">
        <a-button type="primary" icon="plus" class="select-bottom" @click="handleAdd">
          新增角色
        </a-button>
      </div>
      <standard-table :tableData="tableData" :tableHead="tableHead" :loading="loading" :pagination="false">
        <div slot="index" slot-scope="{ index }">
          {{ index + 1 }}
        </div>

        <div slot="action" slot-scope="{ text }">
          <a-button type="primary" size="small" @click="handleEdit(text)">
            编辑
          </a-button>
          <a-popconfirm
            title="你确定要删除当前列吗?"
            ok-text="是"
            cancel-text="否"
            :disabled="text.role && text.role == 'admin'"
            @confirm="handleDelete(text)"
          >
            <a-button type="danger" size="small" style="margin-left:8px" :disabled="text.role && text.role == 'admin'">
              删除
            </a-button>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
    <role-model
      :currentRow="currentRow"
      :dialogVisible="dialogVisible"
      @ok="handleOk"
      @cancel="dialogVisible = false"
      :tableData="tableData"
      v-if="dialogVisible"
    />
  </div>
</template>

<script>
const tableHead = [
  {
    title: '序号',
    dataIndex: 'index',
    scopedSlots: { customRender: 'index' },
    width: 60
  },
  {
    title: 'id',
    dataIndex: 'id',
    ellipsis: true
  },
  {
    title: '权限',
    dataIndex: 'role',
    ellipsis: true
  },
  {
    title: '描述',
    dataIndex: 'text',
    ellipsis: true
  },
  {
    title: '操作',
    scopedSlots: { customRender: 'action' },
    width: 140
  }
];
import standardTable from '@/components/standardTable/index';
import { getRoleTable, deleteRoleTable } from '@/api/roleManage';
import roleModel from './roleModel';
export default {
  name: 'roleManage',
  components: { standardTable, roleModel },
  data() {
    return {
      loading: false,
      tableData: [],
      currentRow: null,
      dialogVisible: false,
      tableHead
    };
  },
  created() {
    this.getRoleTable();
  },

  methods: {
    //新增
    handleAdd() {
      this.currentRow = null;
      this.dialogVisible = true;
    },
    getRoleTable() {
      getRoleTable().then(res => {
        this.tableData = res.data || [];
      });
    },
    handleEdit(row) {
      this.currentRow = { ...row };
      this.dialogVisible = true;
    },
    handleOk() {
      this.dialogVisible = false;
      this.currentRow = null;
      this.getRoleTable();
    },
    //删除
    handleDelete(val) {
      deleteRoleTable({ id: val.id }).then(() => {
        this.$message.success('删除成功!');
        this.getRoleTable();
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
