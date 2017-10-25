<style lang="less">
 //  @import '@/assets/less/common';
	// h1{
 //    background:url(~/@/assets/logo.png)
 //  }
    .wrap{
        width:100%;
        height:100%;
        .header{
            height:60px;
        }
        .center{
            position:absolute;
            top:60px;
            bottom:0;
            left:0;
            right:0;
        .nav{
            position:absolute;
            width:200px;
            top:0;
            bottom:0;
            background:#f66
        }
        .content{
            position:absolute;
            top:0;
            left:200px;
            right:0;
            bottom:0;
        }
      }
    }
</style>
<template>
  	<div class="wrap">
  	    <div class="header">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        </div>
        <div class="center">
            <div class="nav" :style="{width:isCollapse?'64px':'200px'}">
                <el-menu default-active="/" router class="el-menu-vertical-demo" :collapse="isCollapse">
                    <el-menu-item index="/a">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航一</span>
                    </el-menu-item>
                    <el-menu-item index="/b">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="content" :style="{left:isCollapse?'64px':'200px'}">
                <router-view></router-view>
            </div>
        </div>
  	</div>
</template>
<script type="text/javascript">
	export default{
	    data(){
          return {
              isCollapse: true
          }
      }
	}
</script>
