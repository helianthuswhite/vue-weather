import Vue from 'vue';
import Router from 'vue-router';
import changeCity from '../components/changeCity/changeCity';
import index from '../components/index/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/city',
      name: 'change-city',
      component: changeCity
    },
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
});
