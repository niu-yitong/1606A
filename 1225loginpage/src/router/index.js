import Vue from 'vue'
import Router from 'vue-router'
import Mindex from '@/components/Mindex'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mindex',
      component: Mindex
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
