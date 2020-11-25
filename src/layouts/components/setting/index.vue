<template>
  <a-drawer title="个性化配置" placement="right" :visible="settingVisible" @close="settingVisible = false" :width="325">
    <div class="item-setting">
      <p>主题配置</p>
      <a-radio-group button-style="solid">
        <a-radio-button :value="item" v-for="item in customList" :key="item">
          {{ item }}
        </a-radio-button>
      </a-radio-group>
    </div>

    <div class="item-setting">
      <p>布局方式</p>
      <a-radio-group button-style="solid">
        <a-radio-button :value="item" v-for="item in layoutList" :key="item">
          {{ item }}
        </a-radio-button>
      </a-radio-group>
    </div>
    <div class="item-setting" style="margin-bottom:25px">
      <p>语言选择</p>
      <a-radio-group button-style="solid">
        <a-radio-button :value="item" v-for="item in interList" :key="item">
          {{ item }}
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
      customList: ['简约白', '冷酷黑', '蓝色', '橙色'],
      layoutList: ['左侧导航', '头部导航'],
      interList: ['简体中文', '繁体中文', 'English']
    };
  },
  computed: {
    settingVisible: {
      get() {
        return this.$store.state.setting.settingVisible;
      },
      set(val) {
        this.$store.dispatch('setting/changeVisible', val);
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
    changeTag(checked) {
      this.tagShow = checked;
    },
    changeHeader(checked) {
      this.fixHeader = checked;
    }
  }
};
</script>
<style lang="scss" scoped>
.item-setting {
  margin-bottom: 18px;
}
</style>
