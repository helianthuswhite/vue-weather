<template>
  <div class="header">
   <div class="content">
     <p class="city">{{ this.city || '城市获取失败' }}</p>
     <p class="weather">{{ this.weather.now.text }}</p>
     <p class="temper">{{ this.weather.now.temp }}<span class="dot">°</span></p>
   </div>
  </div>
</template>

<script>
  import {getCityByLocation} from '../../assets/js/util';

  export default {
    props: ['weather'],
    data() {
      return {
        city: ''
      };
    },
    created() {
      getCityByLocation(this.weather.location).then(res => {
        this.city = res.name;
      });
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
