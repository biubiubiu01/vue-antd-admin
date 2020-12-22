<template>
  <div class="loading-wrapper">
    <a-card title="指令方式加载loading" :hoverable="true" :bordered="false"> </a-card>
    <a-card title="方法函数加载loading" :hoverable="true" :bordered="false" style="margin-top:15px">
      <a-space :size="15">
        <a-button type="primary" v-for="item in utilList" :key="item.type" @click="startLoading(item.type)">
          {{ item.title }}
        </a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      utilList: [
        {
          title: '无线电脉搏',
          type: 'pulse'
        }
      ]
    };
  },
  components: {},
  methods: {
    //方法loading
    startLoading(type) {
      console.log(this.$loading);
      // console.log(type);
      this.$loading.show();
    }
  }
};
</script>
<style lang="scss" scoped>
@import url('../../../styles/spinner.scss');
</style>
