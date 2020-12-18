import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBodyClass from 'vue-body-class';

import Dashboard from '../components/Dashboard.vue';
import DashkitComponents from '../components/DashkitComponents.vue';
import MapManager from '../components/MapManager.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Dashboard,
    props: { combo: true }
  },
  {
    path: '/components',
    name: 'components',
    component: DashkitComponents
  },
  {
    path: '/login',
    name: 'login',
    meta: { bodyClass: 'd-flex align-items-center bg-auth border-top border-top-2 border-primary' },
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/mapmanager',
    name: 'mapmanager',
    component: MapManager
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

const vueBodyClass = new VueBodyClass(routes);


router.beforeEach((to, from, next) => {
  vueBodyClass.guard(to, next);
  next();
});

export default router;