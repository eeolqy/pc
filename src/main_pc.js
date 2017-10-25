import Vue 			from 'vue'
import ElementUI 	from 'element-ui'
import App 			from '@/app_pc'
import router 		from '@/router/router_pc'
Vue.use(ElementUI)
import 				'element-ui/lib/theme-default/index.css'
import 				'@/assets/less/commom.less'
new Vue({
  	el: '#pc',
  	router,
  	render: h => h(App)
})
