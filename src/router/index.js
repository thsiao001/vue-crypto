import Vue from 'vue'
import Router from 'vue-router'
import WatchList from '@/components/WatchList'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/watchlist',
      name: 'WatchList',
      component: WatchList
    }
  ]
})
