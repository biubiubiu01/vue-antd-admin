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
          title: '默认效果',
          type: 'loading'
        },
        {
          title: 'loading1',
          type: 'pulse'
        },
        {
          title: 'loading2',
          type: 'rect'
        },
        {
          title: 'loading3',
          type: 'plane'
        },
        {
          title: 'loading4',
          type: 'cube'
        }
      ]
    };
  },
  methods: {
    //方法loading
    startLoading(type) {
      this.$loading.show({
        spin: type
      });
      // setTimeout(() => {
      //   this.$loading.hide();
      // }, 3000);
    }
  }
};
</script>
