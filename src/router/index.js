import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      /* 设置动态路由 */
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  /* 每次切换页面的时候都回到顶部 */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
