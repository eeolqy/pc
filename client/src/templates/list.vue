<style lang="scss">
	.list{
		width:100%;
		height:100%;
		display:flex;
		flex-direction:column;
		.header_box{
			width:100%;
			height:50px;
		}
		.list_box{
			flex:1;
			overflow-y:auto;
			-webkit-overflow-scrolling : touch;
			.list_item{
				height:60px;
			}
		}
	}
</style>
<template>
	<div class="list">
		<div class="header_box">
			list{{scrollTop}}
		</div>
		<div ref="scroll" @scroll="scrollList" class="list_box">
			<div class="list_item" v-for="(v,i) in list">
				<router-link :to="{path:'/detail',query:{id:v}}">{{v}}</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
  export default {
    name: 'list',
    data () {
      return {
        list: []
      }
    },
    computed: {
      scrollTop () {
        this.$refs.scrollTop = this.$store.state.scrollTop
        return this.$store.state.scrollTop
      }
    },
    mounted () {
      console.log('mounted', this.$refs.scroll)
      this.$refs.scroll.scrollTop = this.$store.state.scrollTop
      console.log(this.$refs.scrollTop)
    },
    created () {
      for (var i = 0; i < 100; i++) {
        this.list.push(i)
      }
    },
    methods: {
      scrollList (event) {
        // console.log(event.target.scrollTop)
        this.$store.dispatch('changeScrollTopAction', event.target.scrollTop)
      }
    }
  }
</script>