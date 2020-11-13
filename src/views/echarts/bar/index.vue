<template>
  <div class="bar-wrapper">
    <a-row :gutter="24" class="bar-list">
      <a-col :span="12">
        <a-card title="游戏时长统计图" :hoverable="true" :bordered="false">
          <gradients-bar class="chart-bar" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="运动类目统计图" :hoverable="true" :bordered="false">
          <more-bar class="chart-bar" />
        </a-card>
      </a-col>
    </a-row>

    <div class="bar-list">
      <a-card title="用户年龄段统计图" :hoverable="true" :bordered="false">
        <double-bar class="chart-bar white" />
      </a-card>
    </div>

    <a-row :gutter="24" class="bar-list">
      <a-col :span="12">
        <a-card title="游戏热度统计图" :hoverable="true" :bordered="false">
          <group-bar class="chart-bar" />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card title="运动得分" :hoverable="true" :bordered="false">
          <pie-bar class="chart-bar" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { gradientsBar, moreBar, doubleBar, groupBar, pieBar } from './components';
export default {
  name: 'bar',
  components: { gradientsBar, moreBar, doubleBar, groupBar, pieBar },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.bar-list {
  margin-bottom: 25px;
  .chart-bar {
    height: 280px;
    width: 100%;
  }
}
</style>
