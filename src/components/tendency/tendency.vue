<template>
  <div class="tendency border-1px">
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
          height: 450,
          xAxis: ['苹果', '香蕉', '梨', '番茄', '龙眼'],
          lineData: [350, 200, 300, 245, 150],
          barData: [350, 134, 120, 51, 90],
          colorArr: ['#ae303e', '#913730', '#D49797', '0x538FD3', '#A34e5d'],
          onSomeEvent: function() {
          }
        }
      };
    },
    created() {
      this.$nextTick(() => {
        init(this.options);
      });
    }
  };
</script>

<style lang="less">

</style>
