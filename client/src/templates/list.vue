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
		</div>
    <audio 
    style="width:200px;height:100px;"
    controls="controls"
    src="http://m10.music.126.net/20171207203912/3ba506ff56ff7578a231725d6686c13b/ymusic/f5fa/c51a/ce54/b55c66bbefeb5bb2f2d40558d3b0ab81.mp3">
</audio>
    <el-button type="primary" @click="open">打开</el-button>
		<!-- <div ref="scroll" @scroll="scrollList" class="list_box">
			<div class="list_item" v-for="(v,i) in list">
				<router-link :to="{path:'/detail',query:{id:v}}">{{v}}</router-link>
			</div>
		</div> -->
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
      // console.log('mounted', this.$refs.scroll)
      // this.$refs.scroll.scrollTop = this.$store.state.scrollTop
      // console.log(this.$refs.scrollTop)
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