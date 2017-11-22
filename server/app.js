var express = require('express');
var app = express();
//console.log(app)
app.get('/api/test', function(req, res){
  // res.header("Access-Control-Allow-Origin", "*");
  
  	res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.cookie('name', 'tobi');
	//res.clearCookie('name', { path: '/admin' });
  res.send({
  	 a:app
  });
});
app.get('/api/cookie', function(req, res){
  // res.header("Access-Control-Allow-Origin", "*");
  
  	//res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
    res.cookie('name');
	//res.clearCookie('name', { path: '/admin' });
  res.send({
  	 a:app
  });
});
app.listen(3000);
console.log('listen3000...')