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
      path: "/dashboard",
      name: "dashboard",
      component: () => import('../views/dashboard.vue'),
      meta: {title: 'Dashboard - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/manageCase",
      name: "manageCase",
      component: () => import('../views/manageCase.vue'),
      meta: {title: 'Manage Case - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/managePatient",
      name: "managePatient",
      component: () => import('../views/managePatient.vue'),
      meta: {title: 'Manage Patient - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/community",
      name: "community",
      component: () => import('../views/community.vue'),
      meta: {title: 'Community - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/editProfile",
      name: "editProfile",
      component: () => import('../views/editProfile.vue'),
      meta: {title: 'Edit Profile - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/changePassword",
      name: "changePassword",
      component: () => import('../views/changePassword.vue'),
      meta: {title: 'Change Password - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/addCase",
      name: "addCase",
      component: () => import('../views/addCase.vue'),
      meta: {title: 'Add Case - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/addPatient",
      name: "addPatient",
      component: () => import('../views/addPatient.vue'),
      meta: {title: 'Add Patient - Prosthetic & Orthotic Manage System'}
  },
  {
      path: "/shareCase",
      name: "shareCase",
      component: () => import('../views/shareCase.vue'),
      meta: {title: 'Add Patient - Prosthetic & Orthotic Manage System'}
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router