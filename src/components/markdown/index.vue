<template>
  <div :id="id" class="markdownEditor"></div>
</template>

<script>
import Editor from 'tui-editor';
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content

export default {
  name: 'markdownEditor',
  props: {
    height: {
      type: [Number, String],
      default: '420'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      id: 'markdown-editor-' + +new Date() + ((Math.random() * 1000).toFixed(0) + ''),
      editor: null
    };
  },
  mounted() {
    this.initEditor();
  },
  destroyed() {
    this.destroyEditor();
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        el: document.getElementById(this.id),
        minHeight: '200px',
        height: this.height + 'px',
        language: 'zh_CN',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
      });
      if (this.value) {
        this.editor.setValue(this.value);
      }
      this.editor.on('change', () => {
        this.$emit('input', this.editor.getValue());
      });
    },
    setValue(value) {
      this.editor.setValue(value);
    },
    getValue() {
      return this.editor.getValue();
    },
    destroyEditor() {
      if (!this.editor) return;
      this.editor.off('change');
      this.editor.remove();
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.markdownEditor {
  /deep/ {
    .te-md-container {
      background: #fff !important;
    }
    .te-preview {
      min-width: 400px !important;
    }
  }
}
</style>
