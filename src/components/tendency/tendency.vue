<template>
  <div class="tendency border-1px">
    <h3 class="title">7日内温度变化</h3>
    <canvas id="canvas" ref='canvas'></canvas>
  </div>
</template>

<script>
  import {init} from './drawWeather.js';

  export default {
    props: ['weather'],
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
      for (let i = 0; i < 7; i++) {
        this.options.xAxis.push(day[new Date(this.weather.daily_forecast[i].fxDate).getDay()]);
        this.options.minTmp.push(this.weather.daily_forecast[i].tempMin);
        this.options.maxTmp.push(this.weather.daily_forecast[i].tempMax);
      }
      this.$nextTick(() => {
        init(this.options);
      });
    }
  };
</script>

<style lang="less">
  .tendency {
    overflow: hidden;
    .title {
      position: absolute;
      width: 100%;
      top: 15px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
    #canvas {
      padding-left: 15px;
    }
  }
</style>
