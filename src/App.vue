<template>
  <div style="position:relative;">
    <v-header :weather="weather"></v-header>
    <div class="app-body">
      <div class="wrapper">
        <today></today>
        <future :weather="weather"></future>
        <tendency></tendency>
        <v-summary :weather="weather"></v-summary>
        <v-details :weather="weather"></v-details>
      </div>
    </div>
    <v-footer :weather="weather"></v-footer>
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <div class="background"></div>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import today from './components/today/today.vue';
import future from './components/future/future.vue';
import tendency from './components/tendency/tendency.vue';
import summary from './components/summary/summary.vue';
import details from './components/details/details.vue';
import footer from './components/footer/footer.vue';
import background from './components/background/background.vue';

import {getWeather} from './assets/js/getWeather';

export default {
  name: 'app',
  components: {
    'v-header': header,
    today,
    future,
    tendency,
    'v-summary': summary,
    'v-details': details,
    'v-footer': footer,
    background
  },
  data() {
    return {
      weather: {}
    };
  },
  created() {
    getWeather().then((res) => {
      this.weather = res;
      console.log(res);
    });
  }
};
</script>

<style lang="less">
  .app-body {
    position: relative;
    height: 100%;
    padding-bottom: 45px;
  }
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
  .background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgb(24, 50, 89), rgb(52, 130, 186));
  }
</style>
