<template>
  <div class="header">
   <div class="content">
     <p class="city">{{ this.weather.basic.city }}市</p>
     <p class="weather">{{ this.weather.now.cond.txt }}</p>
     <p class="temper">{{ this.weather.now.tmp }}<span class="dot">°</span></p>
   </div>
  </div>
</template>

<script>
  export default {
    props: ['weather'],
    data() {
      return {};
    }
  };
</script>

<style lang="less">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    color: #fff;
    .content {
      flex: 1;
      text-align: center;
      .city {
        font-size: 20px;
        line-height: 28px;
        font-weight: 700;
      }
      .weather {
        font-size: 12px;
      }
      .temper {
        position: relative;
        display: inline-block;
        font-size: 60px;
        line-height: 80px;
        .dot {
          position: absolute;
          display: block;
          top: 0;
          right: -15px;
          font-size: 40px;
        }
      }
    }
  }
</style>
