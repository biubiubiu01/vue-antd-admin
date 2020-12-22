<template>
  <div class="cube-wrapper">
    <div class="cube cube1"></div>
    <div class="cube cube2"></div>
    <div class="cube cube3"></div>
    <div class="cube cube4"></div>
    <div class="cube cube5"></div>
    <div class="cube cube6"></div>
    <div class="cube cube7"></div>
    <div class="cube cube8"></div>
    <div class="cube cube9"></div>
  </div>
</template>

<script>
export default {
  name: 'cubeSpin'
};
</script>
<style lang="scss" scoped>
.cube-wrapper {
  width: 60px;
  height: 60px;
  display: inline-block;
}
.cube {
  width: 33%;
  height: 33%;
  float: left;
  background: #3ff9dc;
  animation: cube-loader 1.3s infinite ease-in-out;
  animation-delay: 0.2s;
}
.cube1 {
  animation-delay: 0.2s;
}
.cube2 {
  animation-delay: 0.3s;
}
.cube3 {
  animation-delay: 0.4s;
}
.cube4 {
  animation-delay: 0.1s;
}
.cube5 {
  animation-delay: 0.2s;
}
.cube6 {
  animation-delay: 0.3s;
}
.cube7 {
  animation-delay: 0s;
}
.cube8 {
  animation-delay: 0.1s;
}

@keyframes cube-loader {
  0%,
  70%,
  100% {
    transform: scale3D(1, 1, 1);
  }
  35% {
    transform: scale3D(0, 0, 1);
  }
}
</style>
