// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import router from './router';
import './assets/less/index.less';
import FastClick from 'fastclick';

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function(event) {
    if (event.cancelable) {
      if (!event.defaultPrevented) {
        event.preventDefault();
        FastClick.attach(document.body);
      }
    }
  }, false);
}

Vue.config.productionTip = false;
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
