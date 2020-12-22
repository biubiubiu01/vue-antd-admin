<template>
  <div class="plane-wrapper"></div>
</template>

<script>
export default {
  name: 'planeSpin'
};
</script>
<style lang="scss" scoped>
.plane-wrapper {
  width: 60px;
  height: 60px;
  background-color: #3ff9dc;
  display: inline-block;
  animation: plane-loader 1.2s infinite ease-in-out;
}

@keyframes plane-loader {
  0% {
    transform: perspective(120px);
  }
  50% {
    transform: perspective(120px) rotateY(180deg);
  }
  100% {
    transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}
</style>
