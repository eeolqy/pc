import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/templates/pc/index'
import A from '@/templates/a'
import B from '@/templates/b'
Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	component: Index,
      	children:[{
      		path: '/',
      		component: A,
      	},{
      		path: '/a',
      		component: A,
      	},
      	{
      		path: '/b',
      		component: B,
      	}]
    }
  ]
})