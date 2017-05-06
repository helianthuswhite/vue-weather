<template>
  <div class="tendency border-1px">
    <h3 class="title">7日内温度变化</h3>
    <canvas id="canvas" ref='canvas'></canvas>
  </div>
</template>

<script>
  import {init} from './drawWeather.js';

  export default {
    data() {
      return {
        options: {
          width: document.body.clientWidth,
          height: 300,
          color: '#fff',
          heightNum: 7,
          heightMax: 35,
          xAxis: [],
          minTmp: [],
          maxTmp: []
        }
      };
    },
    created() {
      const day = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const apikey = '1aa0be9a6fb48e3bcf5d7060a6c201af';
      this.$http.get('http://apis.baidu.com/heweather/pro/weather?city=haerbin', { headers: { 'apikey': apikey } }).then((response) => {
        this.weather = response.body['HeWeather data service 3.0'][0];
        for (let i = 0; i < 7; i++) {
          this.options.xAxis.push(day[new Date(this.weather.daily_forecast[i].date).getDay()]);
          this.options.minTmp.push(this.weather.daily_forecast[i].tmp.min);
          this.options.maxTmp.push(this.weather.daily_forecast[i].tmp.max);
        }
        this.$nextTick(() => {
          console.log(this.options);
          init(this.options);
        });
      });
    }
  };
</script>

<style lang="less">
  .tendency {
    .title {
      position: absolute;
      width: 100%;
      top: 15px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
    #canvas {
      margin-left: 15px;
    }
  }
</style>
