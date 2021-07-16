import Vue from 'vue'
import App from './App.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import mainRoutes from './routes/mainRoutes'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: mainRoutes,
  render: h => h(App),
}).$mount('#app')
