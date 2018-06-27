import Vue from 'vue';
import Router from 'vue-router';

import tab from '@/components/tab';
import home from '@/views/home';
import find from "@/views/find";
import list from "@/views/list";
import me from "@/views/me";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      components: {
        'body':home,
        'foot': tab
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        'body': home,
        'foot': tab
      }
    },{
      path: '/find',
      name: 'find',
      components: {
        'body': find,
        'foot': tab
      }
    },
    {
      path: '/list',
      name: 'list',
      components: {
        'body':list,
        'foot': tab
      }
    },{
      path: '/me',
      name: 'me',
      components: {
        'body': me,
        'foot': tab
      }
    }
  ],
});
