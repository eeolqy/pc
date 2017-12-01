<template>
	<el-upload
	  action="/api/upload"
	  :on-preview="handlePreview"
	  :http-request="httpRequestUpload"
	  multiple>
	  	<el-button size="small" type="primary">点击上传</el-button>
	  	<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
	</el-upload>
</template>
<script type="text/javascript">
  export default {
    name: 'routerf',
    created () {
      console.log('upload')
      fetch('/api/upload', {
        method: 'post'
      })
    },
    methods: {
      handlePreview (file) {
        console.log(file)
      },
      httpRequestUpload (file) {
        var formData = new FormData()
        formData.append('file', file.file)
        console.log(file.file)
        fetch('/api/upload', {
          method: 'post',
          body: formData
        })
      }
    }
  }
</script>