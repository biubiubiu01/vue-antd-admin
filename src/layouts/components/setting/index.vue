<template>
  <a-drawer title="个性化配置" placement="right" :visible="settingVisible" @close="settingVisible = false" :width="325">
    <div class="item-setting">
      <p>主题配置</p>
      <a-radio-group button-style="solid" :value="theme" @change="changeTheme">
        <a-radio-button :value="item.key" v-for="item in customList" :key="item.key">
          {{ item.label }}
        </a-radio-button>
      </a-radio-group>
    </div>

    <div class="item-setting">
      <p>布局方式</p>
      <a-radio-group :value="layout" button-style="solid" @change="changeLayout">
        <a-radio-button :value="item.key" v-for="item in layoutList" :key="item.key">
          {{ item.label }}
        </a-radio-button>
      </a-radio-group>
    </div>

    <div class="item-setting flex justify-between">
      开启标签页
      <a-switch :checked="tagShow" checked-children="开" un-checked-children="关" @change="changeTag" />
    </div>
    <div class="item-setting flex justify-between">
      固定头部
      <a-switch :checked="fixHeader" checked-children="开" un-checked-children="关" @change="changeHeader" />
    </div>
  </a-drawer>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      visible: false,
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
    settingVisible: {
      get() {
        return this.$store.state.setting.settingVisible;
      },
      set(val) {
        this.$store.dispatch('setting/changeVisible', val);
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
  created() {
    if (this.theme) {
      document.getElementsByTagName('body')[0].className = `vue-antd-admin-${this.theme}Theme`;
    }
  },
  methods: {
    changeTag(checked) {
      this.tagShow = checked;
    },
    changeHeader(checked) {
      this.fixHeader = checked;
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
<style lang="scss" scoped>
.item-setting {
  margin-bottom: 18px;
}
</style>
