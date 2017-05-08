import Vue from 'vue';
import Router from 'vue-router';
import changeCity from '../components/changeCity/changeCity';
import App from '../App';

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
      component: App,
      params: {
        city: ''
      }
    }
  ]
});
