var express = require('express')
var router  = express.Router();
// 特针对于该路由的中间件
// 定义网站主页的路由
// router.get('/', function(req, res) {
//   res.send('Upload /');
// });
// 定义 about 页面的路由
router.post('/login',function(req, res) {
	//console.log(req)
	console.log('login-----------------------')
	console.log(req.body)
	req.session[req.body.name] = req.body
	//console.log(req)
    res.json(req.body);
});
router.post('/loginOut', function(req, res) {
	// console.log(res.status(500).send('500'))
  	res.send('loginOut success');
});

module.exports = router;