<template>
  <div class="navInternational-wrppaer">
    <a-dropdown>
      <svg-icon placement="ant-dropdown-link" icon="international" :size="18" style="height:100%" />
      <a-menu slot="overlay">
        <a-menu-item>
          简体中文
        </a-menu-item>
        <a-menu-item>
          繁体中文
        </a-menu-item>
        <a-menu-item>
          English
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'navInternational',
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
