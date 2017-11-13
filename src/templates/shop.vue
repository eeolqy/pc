<template>
	<div>
		<div>
			总的价格：{{price}}
		</div>
		<counter @totalNum="getTotalCount"></counter>
	</div>
</template>
<script type="text/javascript">
	import Counter from '@/components/counter.vue'
	export default{
		data(){
			return {
				price:0
			}
		},
		components:{
			Counter
		},
		methods:{
			getTotalCount(val){
				this.price = val*1880
			}
		}
	}
</script>