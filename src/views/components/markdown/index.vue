<template>
  <div class="markdown-container">
    <markdown-editor />
  </div>
</template>

<script>
import markdownEditor from '@/components/markdown/index';
export default {
  name: 'markdown',
  components: { markdownEditor },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
