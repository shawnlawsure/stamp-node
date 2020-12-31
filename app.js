var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var testController = require('./controllers/testController')
var dataController = require('./controllers/data')
var multer  = require('multer')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

var db = require('./database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
	//res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	//res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.use('/', indexRouter);
//app.use('/users', usersRouter);

//app.route('/test')
//    .get(testController.testGet);

app.route('/stamp')
	.post(dataController.saveStamp);

app.route('/stampimage')
	.post(upload.single('file'), dataController.saveStampImage);

//app.route('/stamp/:id')
//	.get(dataController.getIntake);

app.route('/stamps')
	.get(dataController.getStampList);

app.route('/stampimage')
	.get(dataController.getStampImage);

module.exports = app;
