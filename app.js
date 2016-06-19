var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mockApi = require('./mock');
var app = express();


app.set('views',path.join(__dirname, 'views'))
app.set('view engine','jade')

app.use(express.static(path.join(__dirname, 'public')))
// 处理 http 请求
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/',mockApi)


app.listen(3000,'127.0.0.1')

app.get('/',function(req,res) {
	res.render('login',{'title':"登录"})
})

console.log('app is started at port 3000')