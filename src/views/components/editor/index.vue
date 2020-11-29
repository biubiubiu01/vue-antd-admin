<template>
  <div class="editor-container">
    <tinymce />
  </div>
</template>

<script>
import tinymce from '@/components/tinymce/index';
export default {
  name: 'editor',
  components: { tinymce },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped></style>
