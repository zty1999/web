import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// import Home from './views/Home.vue'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./components/tabbar/HomeContainer.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('./components/tabbar/MemberContainer.vue')
    },
    {
      path: '/shopcar',
      name: 'shopcar',
      component: () => import('./components/tabbar/ShopcarContainer.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./components/tabbar/SearchContainer.vue')
    },
  ],
  linkActiveClass: 'mui-active'
})
