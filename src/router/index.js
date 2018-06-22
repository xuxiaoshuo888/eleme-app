import Vue from 'vue';
import Router from 'vue-router';
import home from '@/views/home';
import tab from '@/components/tab';
import find from "@/components/find";
import list from "@/components/list";
import me from "@/components/me";
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
