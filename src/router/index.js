import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/index'
    },{
        path:'/index',
        name:'首页',
        title:'首页',
        component: ()=> import('../views/index.vue')
    }
  ]
})