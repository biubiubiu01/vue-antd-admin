<template>
  <div class="menu1">
    <p>嵌套菜单2 <a-rate v-model="value" style="margin-left:10px" /></p>

    <a-tag color="#2db7f5">
      嵌套菜单2
    </a-tag>
  </div>
</template>

<script>
export default {
  name: 'nestMenu2',
  data() {
    return {
      value: 2
    };
  }
};
</script>
