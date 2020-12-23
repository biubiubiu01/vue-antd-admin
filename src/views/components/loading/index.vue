<template>
  <div class="loading-wrapper">
    <a-card title="指令方式加载loading" :hoverable="true" :bordered="false">
      <div
        class="relative"
        style="width:100%;height:150px"
        v-loading="loading"
        loading-text="自定义指令loading"
        loading-spin="pulse"
        :loading-full="full"
      >
        <a-space :size="15">
          <a-button type="primary" @click="startCustomLoading(1)">
            v-loading指令全屏
          </a-button>
          <a-button type="primary" @click="startCustomLoading(2)">
            v-loading指令非全屏
          </a-button>
        </a-space>
      </div>
    </a-card>
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
import loading from '@/directive/loading/index.js';
export default {
  name: 'customLoading',
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
      ],
      loading: false,
      full: true
    };
  },
  directives: { loading },
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
    },

    startCustomLoading(index) {
      this.full = index == 1 ? true : false;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
};
</script>
