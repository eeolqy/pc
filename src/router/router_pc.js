import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/templates/pc/index'
import Tree  from '@/templates/pc/tree'
import A from '@/templates/a'
import B from '@/templates/b'
import TableSort from '@/templates/table_sort.vue'
import Shop      from '@/templates/shop.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/',
      	component: Index,
      	children:[{
          path: '/',
          component: Shop,
        },{
      		path: '/tree',
      		component: Tree,
      	},{
          path: '/tablesort',
          component: TableSort,
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