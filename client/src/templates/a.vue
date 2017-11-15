<style lang="less">
	.cloumn{
		background:#f66
	}
</style>
<template>
	<div>
<!-- 		<el-table :data="tableData3" style="width: 100%">
		    <el-table-column prop="date" label="日期" width="150" v-if="checkboxGroup.indexOf(1)>-1"></el-table-column>
		    <el-table-column label="配送信息">
		      	<el-table-column prop="name" v-if="checkboxGroup.indexOf(2)>-1" label="姓名" width="120"></el-table-column>
			    <el-table-column label="地址">
			        <el-table-column v-if="checkboxGroup.indexOf(3)>-1" prop="province" label="省份" width="120"></el-table-column>
			        <el-table-column v-if="checkboxGroup.indexOf(4)>-1" prop="city" label="市区" width="120"></el-table-column>
			        <el-table-column v-if="checkboxGroup.indexOf(5)>-1" prop="address" label="地址" width="300"></el-table-column>
			        <el-table-column v-if="checkboxGroup.indexOf(6)>-1" prop="zip" label="邮编" width="120"></el-table-column>
			    </el-table-column>
		    </el-table-column>
		</el-table> -->
		<el-table :data="tableData4" style="width: 100%">
		    <el-table-column prop="date" label="日期" width="150">
		    	<template slot-scope="scope">
		    		<p>{{scope.row}}</p>
		    	</template>
		    </el-table-column>
		</el-table>
	  	<el-checkbox-group 
		    v-model="checkboxGroup"
			>
		    <el-checkbox v-for="(v,i) in status" :label="v" :key="v">{{v}}</el-checkbox>
		</el-checkbox-group>

		<ul id="demo">
			<item
			  class="item"
			  :model="treeData">
			</item>
		</ul>
<!-- 		<div v-for="father in treeData">
			{{father}}
			<div v-for="son in father ">
				{{son}}
			</div>
		</div> -->
		<el-color-picker v-model="color" show-alpha @change="colorChange" @active-change="colorActiveChange"></el-color-picker>
		<vue-qr ref="qr" :dotScale="1" :logoScale="1" :autoColor="true" text="www.baidu.com" binarizeThreshold="255" :whiteMargin="true" :binarizeThreshold="255" size="300" ></vue-qr>
	</div>
</template>
<script type="text/javascript">
import Item from '../components/tree_item.vue'
import VueQr from 'vue-qr'
	export default{
		data(){
			return {
				color:'#409EFF',
				items:[{
					isFinish:true
				},{
					isFinish:true
				}],
				value:'',
				value1:'',
				tableData4:[{
					index:1,
					name:'lqy',
					age:20
				}],
				tableData3:[{
		          date: '2016-05-03',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-02',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-01',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-08',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-06',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-07',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }],
		        status:[false,true,false,true],
		        cities:[{
		        	name:'展开',
		        	id:0
		        },{
		        	name:'隐藏',
		        	id:1
		        }],
		        checkboxGroup:[1,2,3],
		        isCollapse:false,
		        status:[1,2,3,4,5,6,7,8,9],
		        treeData:{
		        	name:'1',
		        	children:[{
		        		name:'1-1',
		        		children:[{
		        			name:'1-1-1'
		        		}]
		        	},{
		        		name:'1-2',
		        		children:[{
		        			name:'1-2-1'
		        		}]
		        	}]
		        }
			}
		},
		components:{
			Item,
			VueQr
		},
		created(){
        	this.format([{a:1,children:{
        		a:'1-1'
        	}},{a:2}])
        	console.log(this.$refs)
    	},
    	methods:{
    		format(a){
    			if(a.children!==undefined){

    			}
    		},
    		colorChange(color){
    			console.log('colorChange',color)
    		},
    		colorActiveChange(color){
    			console.log('activeColor',color)
    		}
    	}
	}
</script>