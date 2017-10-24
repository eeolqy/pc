import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/templates/pc/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})