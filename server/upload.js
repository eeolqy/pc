var express = require('express')
var multer  = require('multer')

var storage = multer.diskStorage({
	destination:function(req,file,cb){
		cb(null,'upload/')
	},
	filename:function(req,file,cb){
		console.log('req')
		console.log(file)
		cb(null,file.originalname)
	}
})
var upload  = multer({storage:storage})
var router  = express.Router();

// 特针对于该路由的中间件
// 定义网站主页的路由
// router.get('/', function(req, res) {
//   res.send('Upload /');
// });
// 定义 about 页面的路由
router.post('/upload',upload.single('file'),function(req, res) {
	//console.log(req)
  res.send('Upload /upload');
});
router.get('/upload', function(req, res) {
	// console.log(res.status(500).send('500'))
  	res.send("{'name':'lqy'}");
});

module.exports = router;