<template>
  <div class="future border-1px">
    <ul>
      <li v-for="(daily_forecast,index) in this.weather.daily_forecast" class="item" v-if="index !== 0">
        <span class="day">{{ day[new Date(daily_forecast.date).getDay()] }}</span>
        <span class="icon" :class="`icon-${daily_forecast.cond.code_d}`"></span>
        <span class="tmp">
          <span class="min">{{ daily_forecast.tmp.min }}</span>
          <span class="max">{{ daily_forecast.tmp.max }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['weather'],
    data() {
      return {
        day: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      };
    },
    created() {
    }
  };
</script>

<style lang="less">
  .future {
    box-sizing: border-box;
    padding: 5px 15px;
    .item {
      display: flex;
      margin: 5px 0;
      color: #fff;
      font-size: 14px;
      .day {
        flex: 1;
        line-height: 25px;
        vertical-align: middle;
      }
      .icon {
        flex: 1;
        font-size: 25px;
        text-align: center;
      }
      .tmp {
        flex: 1;
        line-height: 25px;
        text-align: right;
        .min {
          margin-right: 15px;
        }
      }
    } 
  }
</style>
