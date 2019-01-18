import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from '@/views/admin/user/Login'

Vue.use(Router)

const vueRouter = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    /*
    |--------------------------------------------------------------------------
    | 博客路由组
    |--------------------------------------------------------------------------
    |
    | 管理博客站点下面的路由
    |
    */
    //博客欢迎页
    { path: '/blog/welcome', component: () => import('@/views/blog/Welcome.vue'), name: 'BlogWelcome',  meta: { title: 'LivisSnack - An Enthusiastic Programmer and Crypto Visionary'} },
    //博客首页
    { path: '/blog/home', component: () => import('@/views/blog/Home.vue'), name: 'BlogHome' },




    /*
    |--------------------------------------------------------------------------
    | 后台路由组
    |--------------------------------------------------------------------------
    |
    | 管理后台站点下面的路由
    |
    */
    //后台登录页
    { path: '/admin/login', component: AdminLogin, name: 'AdminLogin'},
    { path: '/', component: () => import('@/layouts/Index.vue'), children: [
        //首页
        { path: '/admin/home', component: () => import('@/views/admin/Home.vue'), name: 'AdminHome' },
        //其它
        { path: '/admin/about', component: () => import('@/views/admin/About.vue'), name: 'AdminAbout' },
        //接口列表
        { path: '/admin/api/list', component: () => import('@/views/admin/api/List.vue'), name: 'AdminListApi'}
      ]
    }
  ]
})


vueRouter.beforeEach((to, from, next) => {
  if(to.path == '/') {
    vueRouter.replace({name: 'BlogWelcome'})
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next()
})

export default vueRouter