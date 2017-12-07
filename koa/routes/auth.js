const auth      =  require('../controllers/user.js')
console.dir(auth)
const koaRouter = require('koa-router')
const router    = new koaRouter()
router.get('/get', auth.getUserInfo) // 定义url的参数是id
router.post('/login', auth.login)
router.post('/getUserInfo', auth.getUserInfo)
//router.post('/user', auth.postUserAuth)
// router.get('/user', async (ctx)=>{
// 	ctx.body='1000000000000000000000000'
// })

module.exports = router