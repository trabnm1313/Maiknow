import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import('../views/login.vue') // set home as path '/'
//   },
  {
      path: "/login",
      name: "login",
      component: () => import('../views/login.vue')
  },
  {
      path: "/home",
      name: "home",
      component: () => import('../views/home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router