<template>
  <div class="list">
    <div class="search"></div>
    <div class="list-wrapper">
      <ul>
        <li class="item-list" v-for="province in provinces">
          <h1 class="title">{{ province.type.toLocaleUpperCase() }}</h1>
          <ul>
            <li class="item" v-for="value in province.values">{{ value }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="cancel">
      <router-link to="/">关闭</router-link>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        provinces: []
      };
    },
    created() {
      this.$http.get('/api/province').then((res) => {
        if (res.body.errno === 0) {
          for (let i in res.body.data) {
            if (res.body.data[i].values.length !== 0) {
              this.provinces.push(res.body.data[i]);
            }
          }
        }
        console.log(this.provinces);
      });
    }
  };
</script>

<style lang="less">
  .list {
    position: relative;
    width: 100%;
    height: 100%;
    color: #000;
    box-sizing: border-box;
    padding-top: 45px;
    padding-bottom: 45px;
    .search {
      height: 45px;
      margin-top: -45px;
      border: solid 1px #000;
    }
    .list-wrapper {
      height: 100%;
    }
    .cancel {
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: rgb(230, 230, 230);
      border-top: solid 1px #ccc;
    }
  }
</style>
