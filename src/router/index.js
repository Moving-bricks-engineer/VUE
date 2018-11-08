import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import City from '@/page/city/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
