const Koa           = 	require('koa')
const logger        =	require('koa-logger')
const serve         =	require('koa-static')
const koaRouter     =	require('koa-router')
const koaBodyparser =	require('koa-bodyparser')
const koaJwt 		=	require('koa-jwt')
const jwt           = 	require('jsonwebtoken')
const auth          =	require('./routes/auth.js')
const koaMulter		=   require('koa-multer')
// const user		    	=   require('./routes/user.js')


const secret		    =	'lqy'
// x-response-time
const app           = new Koa()
app.use(logger())
app.use(koaBodyparser({}))
// const router        = new koaRouter({
// 	prefix:'/api'
// })
app.use(koaJwt({ secret:'koa' }).unless({ path: [/^\/api\/login/,/^\/api\/upload/] }));
const storage = koaMulter.diskStorage({  
	//文件保存路径  
	//修改文件名称  
	getFilename: function (req, file, cb) {  
	  var fileFormat = (file.originalname).split(".");  
	  cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
	},
	getDestination: function (req, file, cb) {  
		cb(null, 'uploads/')  
	},  
  })
	const storage = koaMulter.diskStorage({
			destination:function(req,file,cb){

				cb(null,'uploads/')
			},
			filename:function(req,file,cb){
				console.log('req')
				console.log(file)
				console.log()
				cb(null,'ddddddddddddddddddd')
			}
		})
		console.log('===================')
		console.log(koaMulter)
		// console.log(aaaa)
const upload = koaMulter({
	storage:storage	
})
const router        = new koaRouter({
	prefix:'/api'
})
router.post('/login',async (ctx)=>{
    let userInfo = ctx.request.body
    console.log(userInfo)
    const token = jwt.sign({
			data:userInfo
		},'koa',{
			expiresIn: '1h'
		})
    ctx.body={
      token:token,
      status:'success',
      time:new Date().getTime()
    }
})
router.post('/getUserInfo',async (ctx)=>{
    let userInfo = ctx.request.body
    console.log(userInfo)
    ctx.body={
      aaa:ctx.request.body
    }
})
router.post('/upload',upload.single('file'),async (ctx)=>{
    let userInfo = ctx.request.body
	//console.log(userInfo)
	//console.log(ctx.req)
    ctx.body={
      aaa:ctx.request.body
    }
})
//router.use('/auth',koaJwt({secret:'koa'}),auth.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
//router.use('/auth',auth.routes())
//router.use('/user', koaJwt({secret: secret}), api.routes()) // 所有走/api/打头的请求都需要经过jwt验证。
//router.use('/user', koaJwt({secret: secret}), api.routes())

// upload
router.post('/upload',upload.single('file'),async (ctx)=>{
    let userInfo = ctx.request.body
    console.log(userInfo)
    ctx.body={
      aaa:ctx.request.body
    }
})
app.use(router.routes()).use(router.allowedMethods()) // 将路由规则挂载到Koa上。
app.listen(3000);
console.log('server start 3000')