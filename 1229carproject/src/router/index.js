import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ThreeLevelAddress from '@/components/ThreeLevelAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
    // {
    //   path: '/',
    //   name: 'ThreeLevelAddress',
    //   component: ThreeLevelAddress
    // }
  ]
})
