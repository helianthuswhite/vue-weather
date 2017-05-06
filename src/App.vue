<template>
  <div style="background: rgb(73,128,230);">
    <v-header :weather="weather"></v-header>
    <today></today>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import today from './components/today/today.vue';

export default {
  name: 'app',
  components: {
    'v-header': header,
    today
  },
  data() {
    return {
      weather: {}
    };
  },
  created() {
    const apikey = '1aa0be9a6fb48e3bcf5d7060a6c201af';
    this.$http.get('http://apis.baidu.com/heweather/pro/weather?city=haerbin', { headers: { 'apikey': apikey } }).then((response) => {
      this.weather = response.body['HeWeather data service 3.0'][0];
      console.log(response.body['HeWeather data service 3.0'][0]);
    });
  }
};
</script>

<style>

</style>
