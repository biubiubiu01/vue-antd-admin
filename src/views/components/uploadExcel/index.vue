<template>
  <div>
    <div class="file-wrapper relative">
      <input ref="excel-upload" type="file" accept=".xlsx, .xls" @change="handleChange" style="display:none" />
      <a-button
        type="primary"
        icon="file-excel"
        size="large"
        style="z-index:99"
        @click="handleUpload"
        :loading="loading"
      >
        上传Excel
      </a-button>
      <p class="text">请选择Excel上传 支持(xlsx,xls)格式</p>
    </div>
    <a-card :hoverable="true" :bordered="false" v-if="tableHead.length > 0" style="margin-top:30px">
      <standard-table :pagination="false" :tableData="tableData" :tableHead="tableHead" />
    </a-card>
  </div>
</template>
<script>
import XLSX from 'xlsx';
import standardTable from '@/components/standardTable/index';
export default {
  components: { standardTable },
  data() {
    return {
      loading: false,
      tableData: [],
      tableHead: []
    };
  },
  methods: {
    handleChange(e) {
      const file = e.target.files[0];
      if (!file) return;
      //判断格式
      if (!this.isExcel(file)) {
        this.$message.warning('只能选择xlxs,xls文件');
        return;
      }
      //判断大小
      if (file.size / 1024 / 1024 > 1) {
        this.$message.warning('上传文件大小不能超过1M');
        return;
      }
      this.loading = true;

      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = e => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        setTimeout(() => {
          this.loading = false;
          const head = this.getHeaderRow(worksheet);
          this.tableHead = head.map(item => {
            return {
              title: item,
              dataIndex: item
            };
          });
          const tableData = XLSX.utils.sheet_to_json(worksheet);
          tableData.forEach(item => {
            item.id = parseInt(Math.random(0, 1) * 10000);
          });
          this.tableData = tableData;
        }, 500);
      };
    },

    generateData({ header, results }) {
      this.excelData.header = header;
      this.excelData.results = results;
      this.onSuccess && this.onSuccess(this.excelData);
    },

    //获取表头
    getHeaderRow(sheet) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet['!ref']);
      let C;
      const R = range.s.r;

      for (C = range.s.c; C <= range.e.c; ++C) {
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        let hdr = 'UNKNOWN ' + C;
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },

    handleUpload() {
      this.$refs['excel-upload'].click();
    },

    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.file-wrapper {
  width: 100%;
  height: 350px;
  line-height: 350px;
  text-align: center;
  background: #e6ecf4;
  .text {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
