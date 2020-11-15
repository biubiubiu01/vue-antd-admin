<template>
  <div>
    <p>嵌套菜单1 <a-rate v-model="value" style="margin-left:10px" /></p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'menu1',
  components: {},
  data() {
    return {
      value: 3
    };
  }
};
</script>
<style lang="scss" scoped></style>
