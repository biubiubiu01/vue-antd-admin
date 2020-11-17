<template>
  <div class="custom-wrapper">
    <a-form-model :model="customFrom" :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }" ref="customFrom">
      <a-form-model-item prop="customColor" label="主题配置">
        <a-radio-group :default-value="customFrom.customColor" button-style="solid">
          <a-radio-button :value="item" v-for="item in customList" :key="item">
            {{ item }}
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item prop="layout" label="布局方式">
        <a-radio-group :default-value="customFrom.layout" button-style="solid">
          <a-radio-button :value="item" v-for="item in layoutList" :key="item">
            {{ item }}
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item prop="tag" label="开启标签">
        <a-switch default-checked @change="changeTag" />
      </a-form-model-item>
      <a-form-model-item prop="header" label="固定头部">
        <a-switch default-checked @change="changeHeader" />
      </a-form-model-item>
      <a-form-model-item prop="header" label="语言选择">
        <a-radio-group :default-value="customFrom.inter" button-style="solid">
          <a-radio-button :value="item" v-for="item in interList" :key="item">
            {{ item }}
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'custom',
  data() {
    return {
      customList: ['简约白', '冷酷黑', '蓝色', '橙色'],
      layoutList: ['横向布局', '纵向布局'],
      interList: ['简体中文', '繁体中文', 'English'],
      customFrom: {
        customColor: '简约白',
        layout: '横向布局',
        header: true,
        tag: true,
        inter: '简体中文'
      }
    };
  },
  mounted() {},
  methods: {
    changeHeader(checked) {
      this.customFrom.header = checked;
    },
    changeTag(checked) {
      this.customFrom.tag = checked;
    }
  }
};
</script>
<style lang="scss" scoped></style>
