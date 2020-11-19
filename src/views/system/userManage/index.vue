<template>
  <div class="userManage-wrapper">
    <a-card :hoverable="true" :bordered="false">
      <div slot="title" class="flex flex-wrap">
        <a-button type="primary" icon="plus" class="select-bottom">
          新增用户
        </a-button>
        <a-button type="danger" icon="delete" style="margin:0 16px 10px">
          批量删除
        </a-button>
        <a-select placeholder="用户权限" class="select-width" allowClear @change="changeRole">
          <a-select-option v-for="item in roleOption" :key="item.key" :value="item.key">
            {{ item.label }}
          </a-select-option>
        </a-select>
        <a-input
          placeholder="用户名"
          class="select-width"
          @pressEnter="handleSearch"
          allowClear
          v-model="tableQuery.username"
        />
        <a-range-picker
          class="select-width"
          style="width:210px"
          :placeholder="['开始日期', '结束日期']"
          allowClear
          @change="changeTime"
        />
        <a-button type="primary" icon="search" class="select-bottom" style="margin-right:16px" @click="handleSearch">
          查询
        </a-button>
        <a-button type="primary" icon="export" class="select-bottom">
          导出
        </a-button>
      </div>
      <standard-table :tableData="tableData" :tableHead="tableHead" :loading="loading" :pagination="false">
        <div slot="index" slot-scope="{ index }">
          {{ index + 1 }}
        </div>
        <div slot="role" slot-scope="{ text }">
          <a-tag :color="text | statusFilter">
            {{ text }}
          </a-tag>
        </div>
        <div slot="action" slot-scope="{ text }">
          <a-button type="primary" size="small">
            编辑
          </a-button>
          <a-popconfirm title="你确定要删除当前列吗?" ok-text="是" cancel-text="否" @confirm="handleDelete(text.id)">
            <a-button type="danger" size="small" style="margin-left:8px" :disabled="text.role && text.role == 'admin'">
              删除
            </a-button>
          </a-popconfirm>
        </div>
      </standard-table>
    </a-card>
  </div>
</template>

<script>
import { getUserTable, deleteTable } from '@/api/system';
import standardTable from '@/components/standardTable/index';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

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
    title: '用户名',
    dataIndex: 'username'
  },
  {
    title: '密码',
    dataIndex: 'password'
  },
  {
    title: '权限',
    dataIndex: 'role',
    scopedSlots: { customRender: 'role' }
  },
  {
    title: '创建日期',
    dataIndex: 'date',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.date > b.date,
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
export default {
  name: 'userManage',
  components: { standardTable },
  filters: {
    statusFilter(status) {
      const statusList = {
        admin: '#f50',
        test: '#2db7f5',
        editor: '#87d068',
        custom: ''
      };
      return statusList[status];
    }
  },
  data() {
    return {
      roleOption: [
        {
          key: 'admin',
          label: '超级管理员'
        },
        {
          key: 'test',
          label: '普通用户'
        },
        {
          key: 'editor',
          label: '作家'
        },
        {
          key: 'custom',
          label: '自定义'
        }
      ],
      tableQuery: {
        role: null,
        username: '',
        startTime: '',
        endTime: '',
        page: 1,
        size: 10
      },
      loading: false,
      tableData: [],
      tableHead
    };
  },
  mounted() {
    this.getTableList();
  },
  methods: {
    changeRole(val) {
      this.tableQuery.role = val;
    },
    changeTime(str, time) {
      Object.assign(this.tableQuery, {
        startTime: time[0],
        endTime: time[1]
      });
    },
    handleSearch() {
      this.getTableList();
    },
    getTableList() {
      this.loading = true;
      getUserTable(this.tableQuery).then(res => {
        const data = res.data || [];
        Object.assign(this, {
          tableData: data,
          loading: false
        });
      });
    },
    handleDelete(id) {
      deleteTable(id).then(() => {
        this.$message.success('删除成功!');
        this.getTableList();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.select-width {
  width: 150px;
  margin-right: 16px;
  margin-bottom: 10px;
}
.select-bottom {
  margin-bottom: 10px;
}
</style>
