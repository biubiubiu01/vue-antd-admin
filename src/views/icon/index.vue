<template>
  <div class="icon-container">
    <a-list :grid="{ gutter: 16, column: 6 }" :data-source="localIcon">
      <a-list-item slot="renderItem" slot-scope="item">
        <div class="text-center pointer icon-wrapper" @click.capture.stop="handleCopy(item, $event)">
          <svg-icon :icon="item" :size="30" class="disabled" />
          <div style="margin-top:8px">{{ item }}</div>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import localIcon from './localIcon';
import clipboard from '@/utils/clipboard';
export default {
  name: 'icon',
  data() {
    return { localIcon };
  },
  methods: {
    handleCopy(item, event) {
      clipboard(`<svg-icon :icon="${item}" :size="30" />`, event);
    }
  }
};
</script>
<style lang="scss" scoped>
.icon-container {
  padding: 24px;
  .icon-wrapper {
    padding: 15px 0;
    &:hover {
      background-color: #1890ff;
      color: #fff;
    }
    .disabled {
      pointer-events: none;
    }
  }
}
</style>
