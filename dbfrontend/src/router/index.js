import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: {title: 'Login - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/",
      name: "home",
      component: () => import('../views/home.vue'),
      meta: {title: 'Home - Prosthetic & Orthotic Manage System'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router