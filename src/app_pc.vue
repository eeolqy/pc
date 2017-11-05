<style lang="less">
	.app{
		width:100%;
		height:100%;
		position:relative;
	}
</style>
<template>
    <div class="app">
<!--         <ul id="treeDemo" class="ztree"></ul>
        <h1 @click="initTree">Tree</h1> -->

      	<router-view></router-view>
        <!-- <VueQuillEditor v-model="content"></VueQuillEditor> -->
        {{content}}
    </div>
</template>

<script>
import JQuery from 'jquery'
import zTree  from 'ztree'
import 'ztree/css/zTreeStyle/zTreeStyle.css'
import VueQuillEditor from 'vue-quill-editor'
console.log(VueQuillEditor.quillEditor)
export default {
    name: 'app',
    data(){
        return {
          content:''
        }
    },
    created(){
        //console.log(JQuery)
    },
    mounted(){
   //         var zTreeObj;
   // // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
   //         var setting = {};
   //         // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
   //         var zNodes = [
   //         {name:"test1", open:true, children:[
   //            {name:"test1_1"}, {name:"test1_2"}]},
   //         {name:"test2", open:true, children:[
   //            {name:"test2_1"}, {name:"test2_2"}]}
   //         ];
   //         zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    },
    components:{
      VueQuillEditor:VueQuillEditor.quillEditor
    },
    methods:{
        initTree(){
            var zTreeObj;
   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）a
           var setting = {};
           // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
           var zNodes = [
           {name:"test1", open:true, children:[
              {name:"test1_1"}, {name:"test1_2"}]},
           {name:"test2", open:true, children:[
              {name:"test2_1"}, {name:"test2_2"}]}
           ];
           zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        }
    }
}
</script>
