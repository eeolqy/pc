var express       = require('express');
var cookieSession = require('cookie-session')
var bodyParser    = require('body-parser')
var app           = express();
var birds         = require('./birds');
var upload        = require('./upload') 
var user          = require('./user')
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(function timeLog(req, res, next) {
  console.log('Time: upload', Date.now());
  next();
});
// //console.log(app)
// app.get('/api/test', function(req, res){
//   // res.header("Access-Control-Allow-Origin", "*");
  
//   	res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
//     res.cookie('name', 'tobi');
// 	//res.clearCookie('name', { path: '/admin' });
//     res.send({
//     	 a:app
//     });
// });
// app.get('/api/cookie', function(req, res){
//   // res.header("Access-Control-Allow-Origin", "*");
  
//   	//res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
//     res.cookie('name');
// 	//res.clearCookie('name', { path: '/admin' });
//   res.send({
//   	 a:app
//   });
// });

// var admin = express();

// admin.get('/', function (req, res) {
//   console.log(admin.mountpath); // [ '/adm*n', '/manager' ]
//   res.send('Admin Homepage');
// })

// var secret = express();

// secret.get('/', function (req, res) {
//   console.log(secret.mountpath); // /secr*t
//   res.send('Admin Secret');
// });

// admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
// app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app

// var admin = express();

// admin.on('mount', function (parent) {
//   console.log('Admin Mounted');
//   //console.log(parent); // refers to the parent app
// });

// admin.get('/', function (req, res) {
//   res.send('Admin Homepage');
// });

// app.use('/admin', admin);
// app.all('/api/*',(req,res)=>{
//   res.send('不会')
// })
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    secret:'love',
    cookie:{
        maxAge : 1*60*1000
    }
}))
app.use(function(req,res,next){
    console.log(req.session)
    next()
})
app.post('/test',function(req,res){
    console.log(req)
    res.send('test success')
})
app.use(express.static('public'));
app.use(express.static('upload'));
app.use('/birds', birds);
app.use('/upload',   upload);
app.use('/user',  user);
app.listen(3000);
console.log('listen3000...')