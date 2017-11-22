<template>
	<div>
		<h1>
			<router-link :to="{path:'/'}">back</router-link>
		</h1>
		{{$route.query.id}}
	</div>
</template>
<script type="text/javascript">
  export default {

  }
</script>