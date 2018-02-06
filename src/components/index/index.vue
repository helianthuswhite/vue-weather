<template>
  <div style="position:relative;" v-if="weather">
    <v-header :weather="weather"></v-header>
    <div class="app-body">
      <div class="wrapper">
        <today :weather="weather"></today>
        <future :weather="weather"></future>
        <tendency :weather="weather"></tendency>
        <v-summary :weather="weather"></v-summary>
        <v-details :weather="weather"></v-details>
      </div>
    </div>
    <v-footer :weather="weather"></v-footer>
    <div class="background"></div>
  </div>
</template>

<script>
import header from '../header/header.vue';
import today from '../today/today.vue';
import future from '../future/future.vue';
import tendency from '../tendency/tendency.vue';
import summary from '../summary/summary.vue';
import details from '../details/details.vue';
import footer from '../footer/footer.vue';

import {getWeather} from '../../assets/js/util';

export default {
  name: 'index',
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
      weather: null,
      city: null
    };
  },
  created() {
    this.city = this.$route.params.city;
    getWeather(this.city).then(res => {
      this.weather = res;
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
