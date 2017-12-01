import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const A = () => import(/* webpackChunkName: "index" */ '@/templates/routera.vue')
const B = () => import(/* webpackChunkName: "index" */ '@/templates/routerb.vue')
const C = () => import(/* webpackChunkName: "login" */ '@/templates/routerc.vue')
const D = () => import(/* webpackChunkName: "login" */ '@/templates/routerd.vue')
const E = () => import(/* webpackChunkName: "register" */ '@/templates/routere.vue')
const Upload = () => import(/* webpackChunkName: "register" */ '@/templates/upload.vue')
const List = () => import(/* webpackChunkName: "register" */ '@/templates/list.vue')
const Detail = () => import(/* webpackChunkName: "register" */ '@/templates/detail.vue')
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/a',
      name: 'routera',
      component: A
    },
    {
      path: '/b',
      name: 'routerb',
      component: B
    },
    {
      path: '/c',
      name: 'routerc',
      component: C,
      children: [{
        path: '/d',
        name: 'routerd',
        component: D
      },
      {
        path: '/e',
        name: 'routere',
        component: E
      }
      ]
    },
    {
      path: '/f',
      name: 'routerf',
      component: Upload
    },
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log(to)
    console.log(from)
    console.log(savedPosition)
    return {
      x: 100,
      y: 400
    }
  }
})
