<template>
	<el-input-number v-model="num1" @change="handleChange" :min="0"  :debounce="0"  label="描述文字"></el-input-number>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				num1:0
			}
		},
		methods:{
			handleChange(val){
				this.$emit('totalNum',val)
			}
		}
	}
</script>