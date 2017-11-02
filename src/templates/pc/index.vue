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
            padding:0 10px 10px 10px;
        }
      }
    }
</style>
<template>
  	<div class="wrap">
  	    <div class="header">
            <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group> -->
            <el-button type="primary" @click="isCollapse=false">显示</el-button>
            <el-button type="primary" @click="isCollapse=true">隐藏</el-button>
        </div>
        <div class="center">
            <div class="nav" :style="{width:isCollapse?'64px':'200px'}">
                <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                    <el-submenu index="1">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <span slot="title">导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航三</span>
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
              isCollapse: false
          }
      },
      created(){
        const h = this.$createElement;
        this.$notify({
          title: '标题名称',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('a', { style: 'color: green',}, 'VNode')
          ])
        })
      }
	}
</script>
