import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/user/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      component: () => import('../layouts/Index.vue'),
      children: [
        //首页
        { path: '/home', component: () => import('../views/Home.vue'), name: 'home' },
        //其它
        { path: '/about', component: () => import('../views/About.vue'), name: 'about' },
        //接口列表
        { path: '/api/list', component: () => import('../views/api/List.vue'), name: 'ListApi'}
      ]
    }
  ]
})
