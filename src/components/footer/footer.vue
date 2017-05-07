<template>
  <div class="footer">
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
  .footer {
    position: fixed;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    &::before {
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      border: solid 1px rgba(255, 255, 255, 0.3); 
      content: '';
      display: block;
      box-sizing: border-box;
    }
    @media (min-device-pixel-ratio: 1.5),(-webkit-min-device-pixel-ratio: 1.5) {
      &::before {
        transform: scaleY(0.7);
        -webkit-transform: scaleY(0.7);
      } 
    }
    @media (min-device-pixel-ratio: 2),(-webkit-min-device-pixel-ratio: 2) {
      &::before {
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
      } 
    }
  }
</style>
