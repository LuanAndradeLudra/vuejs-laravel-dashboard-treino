import Vue from 'vue'
import App from './App.vue'

import {store} from './controllers/userController';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js"

import VueRouter from 'vue-router'
import mainRoutes from './routes/mainRoutes'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: mainRoutes,
  render: h => h(App),
  store,
}).$mount('#app')
