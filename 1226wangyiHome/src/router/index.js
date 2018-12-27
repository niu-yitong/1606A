import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Find from '@/components/Find'
import Video from '@/components/Video'
import Mine from '@/components/Mine'
import Friend from '@/components/Friend'
import Account from '@/components/Account'
import Recommend from '@/components/find/Recommend'
import Station from '@/components/find/Station'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Find'
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find,
      children:[
        {
          path: '/',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/Recommend',
          name: 'Recommend',
          component: Recommend
        },
        {
          path: '/Station',
          name: 'Station',
          component: Station
        }
      ]
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    }
  ]
})
