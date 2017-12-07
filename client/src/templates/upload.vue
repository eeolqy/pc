<template>
    <div>
        <el-upload
            action="/api/upload"
			:http-request="httpRequestUpload"
            multiple>
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-button size="small" @click="login" type="primary">登陆</el-button>
		<el-button size="small" @click="getUserInfo" type="primary">信息</el-button>
        <!-- <el-button size="small" @click="loginOut" type="primary">退出</el-button> -->
		<form action="http://localhost:3000/api/upload" method="post" enctype="multipart/form-data">
			<input type="file" name="file">
			<input type="submit" value="upload">
		</form>
    </div>
</template>
<script type="text/javascript">
  export default {
	name: 'routerf',
	data(){
		return {
			token:''
		}
	},
    created () {
		console.log('upload')
		this.token = window.localStorage.token
	},
	methods:{
		login(){
			fetch('/api/login',{
				method:'post',
				headers:{'Content-Type': 'application/x-www-form-urlencoded'},
				body:'name=koadd'
			}).then((res)=>{
				return res.json()
			}).then((result)=>{
				console.log(result)
				window.localStorage.token = result.token
			})
		},
		getUserInfo(){
			console.log(window.localStorage.token)
			fetch('/api/getUserInfo',{
				headers:{
					'Content-Type': 'application/x-www-form-urlencoded',
					'Authorization': 'Bearer '+window.localStorage.token
				},
				credentials: 'include',
				method:'post'
			}).then((res)=>{
				console.log(res)
			})
		},
		httpRequestUpload (file) {
			var formData = new FormData()
			formData.append('file', file.file)
			fetch('/api/upload',{
				headers:{
					'Authorization': 'Bearer '+window.localStorage.token
				},
				credentials: 'include',
				method:'post',
				body:formData
			}).then((res)=>{
				console.log(res)
			})
	    }
	}
    // methods: {
    //   handlePreview (file) {
    //     console.log(file)
    //   },
    //   httpRequestUpload (file) {
    //     var formData = new FormData()
    //     formData.append('file', file.file)
    //     console.log(file.file)
    //     fetch('/upload', {
    //       method: 'post',
    //       body: formData
    //     })
    //   },
    //     login () {
    //         fetch('/user/login',{
    //             method:'post',
    //             credentials: 'include',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             body:'name=lqy'
    //         })
    //     },
    //   loginOut () {
    //     fetch('/user/loginOut', {
    //       method:'post'
    //     })
    //   }
    // }
  }
</script>