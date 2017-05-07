<template>
  <div style="background: rgb(73,128,230);position:relative;">
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
    'v-footer': footer
  },
  data() {
    return {
      weather: {}
    };
  },
  created() {
    getWeather().then((res) => {
      this.weather = res;
      console.log(this.weather);
    });
  }
};
</script>

<style lang="less">
  .app-body {
    position: relative;
    height: 100%;
    // overflow: hidden;
    padding-bottom: 45px;
  }
</style>
