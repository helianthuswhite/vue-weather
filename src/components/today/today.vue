<template>
  <div class="today">
    <div class="today-header border-1px">
      <span class="day">星期六 今天</span>
      <span class="mintmp">4</span>
      <span class="maxtmp">6</span>
    </div>
    <div class="today-body border-1px">
     <div class="hour">
       <span class="time">现在</span>
       <span class="icon"></span>
       <span class="tmp">5°</span>
     </div>
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
      .mintmp {
        position: absolute;
        display: inline-block;
        right: 65px;
      }
      .maxtmp {
        position: absolute;
        display: inline-block;
        right: 30px;
      }
    }
    .today-body {
      height: 100%;
      padding: 0 15px;
      .hour {
        display: inline-block;
        border: solid 1px #fff;
        span {
          display: block;
        }
      }
    }
  }
</style>
