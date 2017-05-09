<template>
  <div class="summary border-1px">
    <p class="content">今天：白天天气{{ this.weather.daily_forecast[0].cond.txt_d }}，夜晚天气{{ this.weather.daily_forecast[0].cond.txt_n }}，最高气温{{ this.weather.daily_forecast[0].tmp.max }}°，最低气温为{{ this.weather.daily_forecast[0].tmp.min }}°，{{ this.weather.daily_forecast[0].wind.dir }}{{ this.weather.daily_forecast[0].wind.sc }}级。</p>
  </div>
</template>

<script>

  export default {
    props: ['weather'],
    data() {
      return {
      };
    }
  };
</script>

<style lang="less">
  .summary {
    padding: 10px 15px;
    font-size: 14px;
    line-height: 18px;
    color: #fff;
  }
</style>
