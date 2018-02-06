<template>
  <div class="list">
    <div class="search">
      <input type="text" placeholder="搜索" v-model="search" v-on:propertychange="searchValue($event)" v-on:input="searchValue($event)" class="input">
    </div>
    <div class="list-wrapper" ref="listWrapper">
      <ul v-if="isProvince">
        <li class="item-list" v-for="province in provinces">
          <h1 class="title">{{ province.type.toLocaleUpperCase() }}</h1>
          <ul>
            <li class="item " v-for="value in province.values" @click="showCity(value, $event)">{{ value }}</li>
          </ul>
        </li>
      </ul>
      <transition name="translate">
        <ul v-if="!isProvince">
          <li class="item-list" v-for="city in cities">
            <h1 class="title">{{ city.type.toLocaleUpperCase() }}</h1>
            <ul>
              <li class="item" v-for="value in city.values" @click="changeCity(value)">{{ value }}</li>
            </ul>
          </li>
        </ul>
      </transition>
    </div>
    <div class="cancel">
      <router-link to="/">返回</router-link>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {loadProvince, loadCity} from '../../assets/js/util';

  export default {
    data() {
      return {
        provinces: [],
        cities: [],
        isProvince: true,
        search: ''
      };
    },
    created() {
      loadProvince().then(res => {
        if (res.errno === 0) {
          for (let i in res.data) {
            if (res.data[i].values.length !== 0) {
              this.provinces.push(res.data[i]);
            }
          }
          this.$nextTick(() => {
            this.initScroll();
          });
        }
      });
    },
    methods: {
      initScroll() {
        this.listScroll = new BScroll(this.$refs.listWrapper, {
          click: true,
          probeType: 3
        });
      },
      showCity(value, e) {
        if (!event._constructed) {
          return;
        }
        this.getCities(value);
        this.isProvince = false;
      },
      getCities(province) {
        loadCity().then(res => {
          if (res.errno === 0) {
            for (let j in res.data[province]) {
              if (res.data[province][j].values.length !== 0) {
                this.cities.push(res.data[province][j]);
              }
            }
            this.$nextTick(() => {
              this.initScroll();
            });
          }
        });
      },
      changeCity(value) {
        this.$router.push({ name: 'index', params: { city: value } });
      },
      searchValue(e) {
        let items = document.getElementsByClassName('item');
        let item;
        for (let i in items) {
          if (items[i].innerHTML === this.search) {
            item = items[i];
          }
        }
        this.listScroll.scrollToElement(item, 300);
      }
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
      box-sizing: border-box;
      height: 45px;
      margin-top: -45px;
      box-shadow: 0 1px 5px #ccc;
      padding: 5px 15px;
      border-bottom: solid 1px #ccc;
      background: rgb(230, 230, 230);
      .input {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 5px;
        border: solid 1px #ccc;
      }
    }
    .list-wrapper {
      height: 100%;
      overflow: hidden;
      .item-list {
        .title {
          font-size: 16px;
          font-weight: 700;
          padding: 5px 15px;
          background: rgb(230, 230, 230);
        }
        ul {
          padding: 0 15px;
          .item {
            padding: 10px 0px;
            border-bottom: solid 1px #ccc;
            &:last-child {
              border: none;
            }
          }
        }
      }
    }
    .cancel {
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: rgb(230, 230, 230);
      border-top: solid 1px #ccc;
    }
    .translate-enter-active {
    transition: all .3s ease;
    }
    .translate-leave-active {
      transition: all .3s ease;
    }
    .translate-enter, .translate-leave-active {
      transform: translateY(100%);
      opacity: 0;
    }
  }
</style>
