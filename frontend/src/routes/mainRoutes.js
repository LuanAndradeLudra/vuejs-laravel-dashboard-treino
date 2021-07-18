import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', name: 'initial', component: Login },
  { path: '/login', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products }
]

export default new VueRouter({
  routes
})