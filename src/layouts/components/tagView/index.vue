<template>
  <div class="tagView-wrapper relative white flex align-center">
    <a-icon type="left" class="absolute pointer tag_btn" style="left:0" />
    <router-link
      class="tag-item pointer fl"
      :to="item.path"
      v-for="(item, index) in tagList"
      :key="item.path"
      :class="isActive(item.path) ? 'activeTag' : ''"
    >
      <span class="tag-title">{{ item.meta.title }}</span>
      <svg-icon
        icon="close"
        v-if="index != 0"
        class="verticalMiddle tag-icon"
        :size="14"
        @click.prevent.stop.native="closeTag(item.path)"
      />
    </router-link>
    <a-icon type="right" class="absolute pointer tag_btn" style="right:0" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'tagView',
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tagList: state => state.tagsView.tagList
    })
  },
  mounted() {
    this.addTag();
  },

  methods: {
    isActive(path) {
      return path == this.$route.path;
    },
    addTag() {
      const { path, meta } = this.$route;
      this.$store.dispatch('tagsView/addTag', { path, meta });
    },
    closeTag(path) {
      this.$store.dispatch('tagsView/removeTag', path).then(data => {
        if (this.isActive(path)) {
          this.$router.push({
            path: data[data.length - 1].path
          });
        }
      });
    }
  },
  watch: {
    $route(nl) {
      this.addTag();
    }
  }
};
</script>
<style lang="scss" scoped>
.tagView-wrapper {
  height: 46px;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0 25px;
  .tag_btn {
    width: 26px;
  }
  .tag-item {
    height: 32px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 8px;
    margin-left: 10px;
    transition: all 0.3s;
    .tag-title {
      display: inline-block;
      vertical-align: middle;
      margin-right: 7px;
      color: #666;
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
      color: #fff;
    }
    .tag-icon {
      margin-left: 6px;
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
