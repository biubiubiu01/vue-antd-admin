<template>
  <div class="other-wrapper">
    <a-row :gutter="24" class="other-list">
      <a-col :span="12">
        <a-card title="水球图" :hoverable="true" :bordered="false">
          <liquid-chart class="chart-other" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="仪表盘" :hoverable="true" :bordered="false">
          <gauge-chart class="chart-other" />
        </a-card>
      </a-col>
    </a-row>
    <div class="other-list">
      <a-card title="词云图" :hoverable="true" :bordered="false">
        <word-chart class="chart-other" />
      </a-card>
    </div>
    <a-row :gutter="24" class="other-list">
      <a-col :span="12">
        <a-card title="雷达图" :hoverable="true" :bordered="false">
          <radar-chart class="chart-other" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="矩形树图" :hoverable="true" :bordered="false">
          <tree-chart class="chart-other" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { liquidChart, gaugeChart, radarChart, treeChart, wordChart } from './components';
export default {
  name: 'otherChart',
  components: { liquidChart, gaugeChart, radarChart, treeChart, wordChart },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.other-list {
  width: 100%;
  margin-bottom: 25px;
  .chart-other {
    width: 100%;
    height: 280px;
  }
}
</style>
