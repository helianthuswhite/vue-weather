<template>
  <div class="today">
    <div class="today-header border-1px">
      <span class="day">星期{{ day }} 今天</span>
      <span class="mintmp">{{ this.weather.daily_forecast[0].tmp.min }}</span>
      <span class="maxtmp">{{ this.weather.daily_forecast[0].tmp.max }}</span>
    </div>
    <div class="today-body border-1px clearfix" ref="hourWrapper">
      <ul>
        <li class="hour" v-for="(hour_forecast,index) in this.weather.hourly_forecast">
          <span class="time">{{ index == 0?'现在':hour_forecast.date.substr(hour_forecast.date.length - 5) }}</span>
          <span class="pop">{{ hour_forecast.pop }}%</span>
          <span class="icon icon-306"></span>
          <span class="tmp">{{ hour_forecast.tmp }}°</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    props: ['weather'],
    data() {
      return {
      };
    },
    computed: {
      day() {
        let day = '日';
        if (!this.weather.daily_forecast) return day;
        switch (new Date(this.weather.daily_forecast[0].date).getDay()) {
          case 1:
            day = '一';
            break;
          case 2:
            day = '二';
            break;
          case 3:
            day = '三';
            break;
          case 4:
            day = '四';
            break;
          case 5:
            day = '五';
            break;
          case 6:
            day = '六';
            break;
          default:
            break;
        }
        return day;
      }
    },
    created() {
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    methods: {
      initScroll() {
        this.hourScroll = new BScroll(this.$refs.hourWrapper, {
          scrollX: true,
          scrollY: false
        });
      }
    }
  };
</script>

<style lang="less">
  .today {
    position: relative;
    height: 100px;
    color: #fff;
    .today-header {
      position: absolute;
      font-size: 14px;
      line-height: 28px;
      padding-left: 15px;
      top: -28px;
      width: 100%;
      box-sizing: border-box;
      .mintmp {
        position: absolute;
        display: inline-block;
        right: 50px;
      }
      .maxtmp {
        position: absolute;
        display: inline-block;
        right: 15px;
      }
    }
    .today-body {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      overflow: hidden;
      white-space: nowrap;
      padding: 0 5px;
      ul {
        display: inline-block;
      }
      .hour {
        display: inline-block;
        margin: 0 10px;
        span {
          display: block;
          text-align: center;
          font-size: 12px;
          line-height: 30px;
          &.pop {
            font-size: 8px;
            line-height: 0px;
            padding: 5px 0 10px;
          }
          &.icon {
            font-size: 25px;
            height: 25px;
          }
        }
      }
    }
  }
</style>
