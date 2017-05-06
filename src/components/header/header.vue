<template>
  <div class="header">
   <div class="content" v-if="this.weather.basic">
     <p class="city">{{ this.weather.basic.city }}市</p>
     <span class="weather">{{ this.weather.now.cond.txt }}</span>
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
        width: 60px;
        left: 50%;
        margin-left: -30px;
        font-size: 60px;
        line-height: 80px;
        .dot {
          position: absolute;
          display: block;
          top: 0;
          right: -5px;
          font-size: 40px;
        }
      }
    }
  }
</style>
