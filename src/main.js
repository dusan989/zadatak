// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import router from './router';
import http from './http';
import store from './store/store';
import App from './App';

import './styles/global.scss';

Vue.config.productionTip = false;
Vue.config.debug = process.env.DEBUG_MODE;

Vue.prototype.$http = http;
Vue.http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
