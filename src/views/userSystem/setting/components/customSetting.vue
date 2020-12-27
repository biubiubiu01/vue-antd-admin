<template>
  <div class="custom-wrapper">
    <a-form-model :label-col="{ span: 4 }" :wrapper-col="{ span: 16 }" ref="customFrom">
      <a-form-model-item prop="customColor" label="主题配置">
        <a-radio-group button-style="solid" :value="theme" @change="changeTheme">
          <a-radio-button :value="item.key" v-for="item in customList" :key="item.key">
            {{ item.label }}
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item prop="layout" label="布局方式">
        <a-radio-group :value="layout" button-style="solid" @change="changeLayout">
          <a-radio-button :value="item.key" v-for="item in layoutList" :key="item.key">
            {{ item.label }}
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
      customList: [
        {
          key: 'blue',
          label: '天空蓝'
        },
        {
          key: 'yellow',
          label: '日落黄'
        },
        {
          key: 'green',
          label: '草原绿'
        }
      ],
      layoutList: [
        {
          label: '左侧导航',
          key: 'inline'
        },
        {
          label: '头部导航',
          key: 'horizontal'
        }
      ]
    };
  },
  computed: {
    theme: {
      get() {
        return this.$store.state.setting.theme;
      },
      set(val) {
        this.$store.dispatch('setting/changeSetting', {
          key: 'theme',
          value: val,
          cache: 'THEME'
        });
        document.getElementsByTagName('body')[0].className = `vue-antd-admin-${val}Theme`;
      }
    },
    layout: {
      get() {
        return this.$store.state.setting.layout;
      },
      set(val) {
        this.$store.dispatch('setting/changeSetting', {
          key: 'layout',
          value: val,
          cache: 'LAYOUT'
        });
      }
    },
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
    },
    changeLayout(val) {
      this.layout = val.target.value;
    },
    changeTheme(val) {
      this.theme = val.target.value;
    }
  }
};
</script>
<style lang="scss" scoped></style>
