<template>
  <div class="tableCommon-wrapper">
    <a-table :data-source="tableData" rowKey="id" position="center">
      <a-table-column title="序号" key="index">
        <template slot-scope="text, record, index">
          {{ index + 1 }}
        </template>
      </a-table-column>
      <a-table-column
        v-for="item in tableHead"
        :key="item.column_name"
        :title="item.column_description"
        :data-index="item.column_name"
      >
        <template slot-scope="scope">
          <template v-if="item.tag">
            <a-tag :color="scope | statusFilter">
              {{ scope }}
            </a-tag>
          </template>
          <template v-else>
            {{ scope }}
          </template>
        </template>
      </a-table-column>
      <a-table-column title="操作" key="handle">
        <template slot-scope="scope">
          <a-button type="primary" size="small">
            编辑
          </a-button>
          <a-button type="danger" size="small" style="margin-left:8px" :disabled="scope.role && scope.role == 'admin'">
            删除
          </a-button>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'tableCommon',
  props: {
    tableHead: {
      type: Array,
      required: true
    },
    tableData: {
      type: Array,
      required: true
    }
  },
  components: {},
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
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
