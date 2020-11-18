<template functional>
  <a-sub-menu :key="props.currentRoute.path">
    <template slot="title">
      <svg-icon :icon="props.currentRoute.meta.icon" v-if="props.currentRoute.meta.icon"> </svg-icon>
      <span style="margin-left:16px" class="menu-title">{{ props.currentRoute.meta.title }}</span>
    </template>
    <template v-for="item in props.currentRoute.children">
      <menu-item v-if="!item.children" :key="item.path" :currentRoute="item" />
      <sub-menu v-else :key="item.path" :currentRoute="item" />
    </template>
  </a-sub-menu>
</template>

<script>
import menuItem from './menuItem';
export default {
  name: 'subMenu',
  components: { menuItem },
  props: {
    currentRoute: {
      type: Object,
      required: true
    }
  }
};
</script>
