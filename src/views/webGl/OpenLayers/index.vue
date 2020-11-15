<template>
  <div class="openlayers-wrapper ">
    <open-map class="all-container" />
  </div>
</template>

<script>
import openMap from './openMap';
export default {
  name: 'openlayers',
  components: { openMap },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.openlayers-wrapper {
  width: 100%;
  height: calc(100vh - 148px);
}
</style>
