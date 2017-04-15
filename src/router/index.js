import Vue from 'vue'
import Router from 'vue-router'
import ListPage from '@/components/list-page/list-page'
import AboutMe from '@/components/about-me/about-me'
import Home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  lickActiveClass: 'u-link--Active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list-page',
      name: 'ListPage',
      component: ListPage
    },
    {
      path: '/about-me',
      name: 'AboutMe',
      component: AboutMe
    }
  ]
})
