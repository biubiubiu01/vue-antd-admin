<template>
  <div class="openlayers-wrapper" :style="{ height: tagShow ? 'calc(100vh - 148px)' : 'calc(100vh - 102px)' }">
    <open-map class="all-container" />
  </div>
</template>

<script>
import openMap from './openMap';
import { mapState } from 'vuex';
export default {
  name: 'openlayers',
  components: { openMap },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tagShow: state => state.setting.tagShow
    })
  }
};
</script>
<style lang="scss" scoped>
.openlayers-wrapper {
  width: 100%;
}
</style>
