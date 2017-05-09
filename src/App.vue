<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import index from './components/index/index.vue';

export default {
  name: 'app',
  components: {
    index
  }
};
</script>

<style lang="less">
  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-active {
    transform: translateY(100%);
    opacity: 0;
  }
</style>
