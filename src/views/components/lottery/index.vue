<template>
  <div class="lottery-container">
    <a-row class="marginBottom" :gutter="16">
      <a-col :xs="24" :md="24" :sm="24" :lg="24" :xl="12">
        <a-card title="大转盘抽奖" :hoverable="true" :bordered="false">
          <circular />
        </a-card>
      </a-col>
      <a-col :xs="24" :md="24" :sm="24" :lg="24" :xl="12">
        <a-card title="扭蛋机抽奖" :hoverable="true" :bordered="false">
          <machine />
        </a-card>
      </a-col>
    </a-row>

    <a-card title="九宫格抽奖" :hoverable="true" :bordered="false" class="marginBottom"> </a-card>
  </div>
</template>

<script>
import circular from './components/circular';
import machine from './components/machine';
export default {
  name: 'lottery',
  components: { circular, machine },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.lottery-container {
  width: 100%;
  .marginBottom {
    margin-bottom: 25px;
  }
}
</style>
