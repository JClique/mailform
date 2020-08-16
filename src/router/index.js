import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('@/views/Forms.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/auth/Login.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('@/components/auth/Logout.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/auth/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
