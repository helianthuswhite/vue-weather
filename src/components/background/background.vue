<template>
  <div class="background">
    <div class="sun outer"></div>
    <div class="rain outer"></div>
    <div class="thunder outer"></div>
  </div>
</template>

<script>

  export default {
    props: ['weather'],
    data() {
      return {
      };
    },
    created() {
    }
  };
</script>

<style lang="less">
  .background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100%;
    height: 100%;
    .outer {
      z-index: 1;
      opacity: 1;
      width: 100%;
      height: 100%;
      display: block;
      background-position: 0 -45px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .sun {
      display: none;
      background-image: url('../../../static/img/sun.jpg');
    }
    .rain {
      // display: none;
      background-image: url('../../../static/img/rain.jpg');
    }
    .thunder {
      display: none;
      background-image: url('../../../static/img/thunder.jpg');
    }
  }
</style>
