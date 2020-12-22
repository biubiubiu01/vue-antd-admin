<template>
  <div class="pulse-wrapper">
    <div class="pulse-item one"></div>
    <div class="pulse-item two"></div>
    <div class="pulse-item three"></div>
  </div>
</template>

<script>
export default {
  name: 'pulseSpin'
};
</script>
<style lang="scss" scoped>
.pulse-item {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3ff9dc;
  animation: pulse-loader 0.4s ease 0s infinite alternate;
  position: relative;
  display: inline-block;
}
.two {
  margin: 0 15px;
  animation: pulse-loader 0.4s ease 0.2s infinite alternate;
}
.three {
  animation: pulse-loader 0.4s ease 0.4s infinite alternate;
}

@keyframes pulse-loader {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.5;
    transform: scale(0.75);
  }
}
</style>
