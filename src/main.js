// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './core/index'

import {config} from './config';

import vuetify from 'vuetify'
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.config.productionTip = false
Vue.use(vuetify)

import VueLocalStorage from 'vue-localstorage';
Vue.use(VueLocalStorage);
config.localstore = Vue.localStorage;
axios.defaults.headers.common['Authorization'] = `Bearer ${config.localstore.get('token','')}`;
axios.defaults.baseURL = 'http://localhost:8000/scrum-list/';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
