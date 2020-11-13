<template>
  <div class="tagView-wrapper white flex align-center">
    <div
      class="tag-item pointer"
      v-for="(item, index) in tagList"
      :key="item.path"
      :class="currentActive == item.path ? 'activeTag' : ''"
    >
      <span class="tag-title">{{ item.meta.title }}</span>
      <svg-icon icon="close" v-if="index != 0" class="verticalMiddle tag-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'tagView',
  data() {
    return {
      tagList: [
        {
          path: '/dashboard',
          meta: { title: '首页', icon: 'dashboard' }
        },
        {
          path: '/other',
          meta: { title: '其他', icon: 'dashboard' }
        },
        {
          path: '/okl',
          meta: { title: '其他2', icon: 'dashboard' }
        },
        {
          path: '/ll',
          meta: { title: '其他3', icon: 'dashboard' }
        }
      ],
      currentActive: '/dashboard'
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.tagView-wrapper {
  height: 46px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .tag-item {
    height: 32px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 8px;
    margin-left: 10px;
    .tag-title {
      display: inline-block;
      vertical-align: middle;
      margin-right: 7px;
    }
    .tag-icon {
      &:hover {
        color: #fff;
        background: #495060;
        border-radius: 50%;
      }
    }
  }
  .activeTag {
    background: #1890ff;
    color: #fff;
    .tag-title {
      margin-right: 0 !important;
    }
    &:before {
      content: '';
      background: #fff;
      height: 8px;
      width: 8px;
      display: inline-block;
      border-radius: 50%;
      margin-right: 4px;
      vertical-align: middle;
    }
  }
}
</style>
