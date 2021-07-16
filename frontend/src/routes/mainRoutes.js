import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', name: 'initial', component: Login },
  { path: '/login', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home }
]

export default new VueRouter({
  routes
})