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
      <a-form-model-item prop="header" label="语言选择">
        <a-radio-group :default-value="customFrom.inter" button-style="solid">
          <a-radio-button :value="item" v-for="item in interList" :key="item">
            {{ item }}
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item prop="tagShow" label="开启标签">
        <a-switch :checked="tagShow" checked-children="开" un-checked-children="关" @change="changeTag" />
      </a-form-model-item>
      <a-form-model-item prop="fixedHeader" label="固定头部">
        <a-switch :checked="fixHeader" checked-children="开" un-checked-children="关" @change="changeHeader" />
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
      layoutList: ['左侧导航', '头部导航'],
      interList: ['简体中文', '繁体中文', 'English'],
      customFrom: {
        customColor: '简约白',
        layout: '左侧导航',
        inter: '简体中文'
      }
    };
  },
  computed: {
    tagShow: {
      get() {
        return this.$store.state.setting.tagShow;
      },
      set(val) {
        this.$store.dispatch('setting/changeSetting', {
          key: 'tagShow',
          value: val,
          cache: 'TAG_SHOW'
        });
      }
    },
    fixHeader: {
      get() {
        return this.$store.state.setting.fixHeader;
      },
      set(val) {
        this.$store.dispatch('setting/changeSetting', {
          key: 'fixHeader',
          value: val,
          cache: 'FIX_HEARDER'
        });
      }
    }
  },

  methods: {
    changeHeader(checked) {
      this.fixHeader = checked;
    },
    changeTag(checked) {
      this.tagShow = checked;
    }
  }
};
</script>
<style lang="scss" scoped></style>
