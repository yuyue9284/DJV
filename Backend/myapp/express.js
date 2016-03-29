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
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./mada.db');


var data = JSON.stringify([]);
app.get('/', function(req, res) {
	res.render('index', {jsonifiedProps:data});
});

app.get('/add', function(req, res) {
	res.render('post');
});



app.post('/post', function(req, res, next) {
   var datarcv = req.body;
   var sqlRequest = "select * from DJI where Code = '" + datarcv.code + "' and Date = '" + datarcv.date +"'";
   db.all(sqlRequest, function(err, row) {
      if (err !== null) {
         next(err);
      } else {
         if (row.length === 0){
            var datasnd = null;
         }
         else{
            var datasnd = row[0];
         }
         res.send(JSON.stringify(datasnd));
      }
   });
});


// app.post('/post', function (req, res) {
//    var datarcv = req.body;
//    var stockitem = _.find(database, item => item.code === datarcv[0].code && item.date === datarcv[0].date );
//    if (!stockitem){
//    	// console.log('not found');
//    	var datasnd = null;
//    }else{
//    	var datasnd = stockitem;
//    }
//    res.send(JSON.stringify(datasnd));
// })






app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});