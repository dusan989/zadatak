import Vue from 'vue';
import Router from 'vue-router';

import List from '@/components/list/List';
import Grid from '@/components/grid/Grid';
import Map from '@/components/map/Map';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/list',
      name: 'LIST',
      component: List,
    },
    {
      path: '/grid',
      name: 'GRID',
      component: Grid,
    },
    {
      path: '/map',
      name: 'MAP',
      component: Map,
    },
    {
      path: '*',
      redirect: {
        name: 'LIST'
      }
    }
  ],
});
