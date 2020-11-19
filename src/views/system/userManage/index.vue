<template>
  <div class="userManage-wrapper">
    <a-card :hoverable="true" :bordered="false">
      <div slot="title" class="flex flex-wrap">
        <a-button type="primary" icon="plus" style="margin-bottom:10px">
          新增用户
        </a-button>
        <a-button type="danger" icon="delete" style="margin:0 35px 10px 16px">
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
          locale="{locale}"
        />
        <a-button type="primary" icon="search" style="margin:0 16px 10px" @click="handleSearch">
          查询
        </a-button>
        <a-button type="primary" icon="export" style="margin-bottom:10px">
          导出
        </a-button>
      </div>
      <table-common :tableData="tableData" :tableHead="tableHead" />
    </a-card>
  </div>
</template>

<script>
import { getUserTable } from '@/api/system';
import tableCommon from '@/components/tableCommon/index';
import moment from 'moment';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default {
  name: 'userManage',
  components: { tableCommon },
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
      tableData: [],
      tableHead: []
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
      getUserTable(this.tableQuery).then(res => {
        const data = res.data || {};
        data.tableHead.forEach(item => {
          if (item.column_name == 'role') {
            item.tag = true;
          }
        });
        Object.assign(this, {
          tableData: data.tableData,
          tableHead: data.tableHead
        });
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
</style>
