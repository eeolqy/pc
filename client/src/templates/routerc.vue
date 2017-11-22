<style lang="scss">
	
</style>
<template>
	<h1>routerc
		<router-link :to="{path:'/d'}">D</router-link>
    	<router-link :to="{path:'/e'}">E</router-link>
		<router-view></router-view>
	</h1>
</template>
<script type="text/javascript">
  export default {
    name: 'routerc'
  }
</script>
