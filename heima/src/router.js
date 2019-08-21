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
    // {
    //   path: '/comment',
    //   name: 'comment',
    //   component: () => import('./components/subcomponents/Comment.vue')
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import('./components/tabbar/HomeContainer.vue'),
      // children:[
        
      // ]
    },  {
          path: '/home/newslist',
          name: 'newslist',
          component: () => import('./components/news/NewsList.vue')
        },
        {
          path: '/home/newsinfo/:id',
          name: 'newsinfo',
          component: () => import('./components/news/NewsInfo.vue')
        },
        {
          path: '/home/photolist',
          name: 'photolist',
          component: () => import('./components/photos/PhotoList.vue')
        },
        {
          path: '/home/photoinfo/:id',
          name: 'photoinfo',
          component: () => import('./components/photos/PhotoInfo.vue')
        },
        {
          path: '/home/buy',
          name: 'buy',
          component: () => import('./components/buy/BuyList.vue')
        },
        {
          path: '/home/buyinfo/:id',
          name: 'buyinfo',
          component: () => import('./components/buy/BuyInfo.vue')
        },
        {
          path: '/home/BuyDesc',
          name: 'BuyDesc',
          component: () => import('./components/subcomponents/BuyDesc.vue')
        },
        {
          path: '/home/BuyComment',
          name: 'BuyComment',
          component: () => import('./components/subcomponents/BuyComment.vue')
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
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})
