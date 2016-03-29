var _ = require('lodash');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
var hbs = require('hbs');
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static('src'));


const database = [
{
	code:'mememem',
	date:'2016-03-25',
},
{
	code:'microsoft',
	date:'2015-01-04',
},
];

// var data = JSON.stringify(database);
var data = JSON.stringify([]);
app.get('/', function(req, res) {
	res.render('index', {jsonifiedProps:data});
});

app.get('/add', function(req, res) {
	res.render('post');
});

app.post('/post', function (req, res) {
   var datarcv = req.body;
   var stockitem = _.find(database, item => item.code === datarcv[0].code && item.date === datarcv[0].date );
   if (!stockitem){
   	console.log('not found');
   	datarcv[0] = null;
   }

   var datasnd = JSON.stringify(datarcv);
   console.log(datasnd);

   res.send(datasnd);
   // res.render('index',{jsonifiedProps:datasnd});
})






app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});