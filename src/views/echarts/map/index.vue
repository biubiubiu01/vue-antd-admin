<template>
  <div class="map-wrapper">
    <div class="map-list">
      <a-card title="分布图 (点击可下钻到县)" :hoverable="true" :bordered="false" class="darkBg">
        <series-map class="chart-map" />
      </a-card>
    </div>
    <div class="map-list">
      <a-card title="散点图 (点击可下钻到县)" :hoverable="true" :bordered="false" class="darkBg">
        <scatter-map class="chart-map" />
      </a-card>
    </div>
    <div class="map-list">
      <a-card title="热力图" :hoverable="true" :bordered="false" class="darkBg">
        <hot-map class="chart-map" />
      </a-card>
    </div>

    <div class="map-list">
      <a-card title="航线图" :hoverable="true" :bordered="false" class="darkBg">
        <line-map class="chart-map" />
      </a-card>
    </div>

    <div class="map-list">
      <a-card title="时间轴地图" :hoverable="true" :bordered="false" class="darkBg">
        <time-map class="chart-map" />
      </a-card>
    </div>
  </div>
</template>

<script>
import { seriesMap, scatterMap, hotMap, lineMap, timeMap } from './components';
export default {
  name: 'mapChart',
  components: { seriesMap, scatterMap, hotMap, lineMap, timeMap },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.map-list {
  width: 100%;
  margin-bottom: 25px;
  .chart-map {
    width: 100%;
    height: 600px;
  }
  .darkBg {
    background: #001a3a;

    /deep/ .ant-card-head-title {
      color: #fff !important;
    }
  }
}
</style>
