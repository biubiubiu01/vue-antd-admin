<template>
  <div class="pie-wrapper">
    <a-row :gutter="24" class="pie-list">
      <a-col :span="12">
        <a-card title="爱吃食物分类" :hoverable="true" :bordered="false">
          <hollow-pie class="chart-line" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="技术占比" :hoverable="true" :bordered="false">
          <solid-pie class="chart-line" />
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24" class="pie-list">
      <a-col :span="12">
        <a-card title="衣服开销" :hoverable="true" :bordered="false">
          <radius-pie class="chart-line" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="环状图" :hoverable="true" :bordered="false">
          <annular-pie class="chart-line" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { hollowPie, solidPie, radiusPie, annularPie } from './components';
export default {
  name: 'pie',
  components: { hollowPie, solidPie, radiusPie, annularPie },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.pie-list {
  margin-bottom: 25px;
  .chart-line {
    height: 280px;
    width: 100%;
  }
}
</style>
