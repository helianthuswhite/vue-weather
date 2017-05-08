<template>
  <div class="changeCity">
    <list></list>
  </div>
</template>

<script>
  import list from '../list/list';

  export default {
    props: ['weather'],
    components: {
      list
    },
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
    background: #fff;
  }
</style>
