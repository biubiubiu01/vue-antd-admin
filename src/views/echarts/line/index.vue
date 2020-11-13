<template>
  <div class="line-wrapper">
    <a-row :gutter="24" class="line-list">
      <a-col :span="12">
        <a-card title="时间管理统计图" :hoverable="true" :bordered="false">
          <only-line class="chart-line" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="气温统计图" :hoverable="true" :bordered="false">
          <more-line class="chart-line" />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24" class="line-list">
      <a-col :span="12">
        <a-card title="LOL经济与伤害对比图" :hoverable="true" :bordered="false">
          <stack-line class="chart-line" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="LOL直播人气值" :hoverable="true" :bordered="false">
          <other-line class="chart-line" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { onlyLine, moreLine, stackLine, otherLine } from './components';
export default {
  name: 'lineChart',
  components: { onlyLine, moreLine, stackLine, otherLine },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.line-list {
  margin-bottom: 25px;
  .chart-line {
    height: 280px;
    width: 100%;
  }
}
</style>
