import Vue from 'vue';
import Vuex from 'vuex';

import offices from './module/offices';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    offices
  }
});
