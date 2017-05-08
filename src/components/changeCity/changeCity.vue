<template>
  <div class="changeCity">
    
  </div>
</template>

<script>

  export default {
    props: ['weather'],
    data() {
      return {
      };
    }
  };
</script>

<style lang="less">
  .changeCity {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
  }
</style>
