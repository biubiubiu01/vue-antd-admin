<template functional>
  <a-menu-item :key="props.currentRoute.path">
    <component :is="injections.components.appLink" :to="props.currentRoute.path">
      <svg-icon v-if="props.currentRoute.meta.icon" :icon="props.currentRoute.meta.icon"> </svg-icon>
      <span style="margin-left:16px" class="menu-title">{{ props.currentRoute.meta.title }}</span>
    </component>
  </a-menu-item>
</template>

<script>
import appLink from './link.vue';
export default {
  name: 'menuItem',
  components: { appLink },
  inject: {
    components: {
      default: {
        appLink
      }
    }
  },
  props: {
    currentRoute: {
      type: Object,
      required: true
    }
  }
};
</script>
