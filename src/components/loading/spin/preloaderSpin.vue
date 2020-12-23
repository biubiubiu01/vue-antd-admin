<template>
  <div class="preloader-wrapper"></div>
</template>

<script>
export default {
  name: 'preloaderSpin'
};
</script>
<style lang="scss" scoped>
.preloader-wrapper {
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
}
.preloader-wrapper:before {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: blue;
  content: '';
  position: absolute;
  background: #9b59b6;
  animation: preloader_before 2s infinite ease-in-out;
}

.preloader-wrapper:after {
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: blue;
  content: '';
  position: absolute;
  background: #2ecc71;
  left: 22px;
  animation: preloader_after 1.5s infinite ease-in-out;
}

@keyframes preloader_before {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  50% {
    transform: translateX(50px) scale(1.2) rotate(260deg);
    background: #2ecc71;
    border-radius: 0px;
  }
  100% {
    transform: translateX(0px) rotate(0deg);
  }
}
@keyframes preloader_after {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(-50px) scale(1.2) rotate(-260deg);
    background: #9b59b6;
    border-radius: 0px;
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
