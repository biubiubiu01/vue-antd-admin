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
    dataIndex: 'roleString',
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
import { getRoleTable, deleteRoleTable, getRole } from '@/api/roleManage';
import roleModel from './roleModel';
import router, { resetRouter } from '@/router';
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
  computed: {
    userInfo() {
      return this.$store.state.user.accountInfo;
    }
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
    handleOk(val) {
      if (this.currentRow && val.role == this.userInfo.role) {
        //刷新路由
        this.resetRoute();
      }
      this.dialogVisible = false;
      this.currentRow = null;
      this.getRoleTable();
    },

    resetRoute() {
      getRole({ role: this.userInfo.role }).then(async res => {
        let obj = { ...this.userInfo };
        await this.$store.dispatch(
          'user/updateInfo',
          Object.assign(obj, {
            roleIds: res.data.roleIds
          })
        );
        resetRouter();
        const accessedRoutes = await this.$store.dispatch('permission/getRoute', res.data.roleIds);
        console.log(accessedRoutes);
        router.addRoutes(accessedRoutes);
      });
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
