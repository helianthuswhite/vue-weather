<template>
  <div class="details">
    <div class="row" v-for="(key,value) in details" :key="key">
      <div class="cell left">{{ value }}</div>
      <div class="cell right">{{ key }}</div>
    </div>
  </div>
</template>

<script>

  export default {
    props: ['weather'],
    data() {
      return {
      };
    },
    computed: {
      details () {
        return {
          '日出：': this.weather.daily_forecast[0].sunrise,
          '日落：': this.weather.daily_forecast[0].sunset,
          '降水量：': `${this.weather.now.precip}mm`,
          '相对湿度：': this.weather.daily_forecast[0].humidity,
          '气压：': `${this.weather.daily_forecast[0].pressure}百帕`,
          '能见度：': `${this.weather.daily_forecast[0].vis}公里`,
          '紫外线强度：': this.weather.daily_forecast[0].uvIndex,
          '体感温度：': `${this.weather.now.feelsLike}°`,
          '风速：': `${this.weather.now.windDir} ${this.weather.now.windSpeed}公里/小时`,
          '空气质量指数：': this.weather.lifestyle[3].text,
          '穿衣指数：': this.weather.lifestyle[1].text,
          '感冒指数：': this.weather.lifestyle[2].text,
          '运动指数：': this.weather.lifestyle[0].text
        };
      }
    }
  };
</script>

<style lang="less">
  .details {
    padding: 10px 15px;
    color: #fff;
    font-size: 14px;
    .row {
      display: flex;
      margin: 5px 0;
      .cell {
        flex: 1;
        line-height: 16px;
        &.left {
          padding-right: 15px;
          text-align: right;
        }
        &.right {
          text-align: left;
        }
      }
    }
  }
</style>
