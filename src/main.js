import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import flatpickr from "flatpickr";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(flatpickr);

// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'flatpickr/dist/flatpickr.min.css';

import '@/assets/scss/theme.scss';
import '@/assets/js/chart.js';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
