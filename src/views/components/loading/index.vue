<template>
  <div class="loading-wrapper">
    <a-card title="指令方式加载loading" :hoverable="true" :bordered="false"> </a-card>
    <a-card title="方法函数加载loading" :hoverable="true" :bordered="false" style="margin-top:15px">
      <a-space :size="15">
        <a-button type="primary" v-for="item in utilList" :key="item.type" @click="startLoading(item)">
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
        },
        {
          title: 'loading5',
          type: 'preloader'
        },
        {
          title: 'loading6',
          type: 'chase'
        }
      ]
    };
  },
  methods: {
    //方法loading
    startLoading(item) {
      //可选参数
      //spin: 图标type  后期改为svg
      //text : loading文字
      // textColor:  文字颜色
      // background: 遮罩层背景颜色
      this.$loading.show({
        spin: item.type
      });
      setTimeout(() => {
        this.$loading.hide();
      }, 3000);
    }
  }
};
</script>
