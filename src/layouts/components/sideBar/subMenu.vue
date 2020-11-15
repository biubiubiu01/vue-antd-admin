<template functional>
  <a-sub-menu :key="props.currentRoute.path">
    <template slot="title">
      <svg-icon :icon="props.currentRoute.meta.icon" v-if="props.currentRoute.meta.icon"> </svg-icon>
      <span style="margin-left:16px" class="menu-title">{{ props.currentRoute.meta.title }}</span>
    </template>
    <template v-for="item in props.currentRoute.children">
      <a-menu-item :key="item.path" v-if="!item.children">
        <router-link :to="item.path">
          <svg-icon v-if="item.meta.icon" :icon="item.meta.icon"> </svg-icon>
          <span style="margin-left:16px" class="menu-title">{{ item.meta.title }}</span>
        </router-link>
      </a-menu-item>
      <sub-menu v-else :key="item.path" :currentRoute="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: 'subMenu',
  props: {
    currentRoute: {
      type: Object,
      required: true
    }
  }
};
</script>
