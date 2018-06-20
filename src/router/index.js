import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home';
import tab from '@/components/tab';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: tab,home
    },
  ],
});
