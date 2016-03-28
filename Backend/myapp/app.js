var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var hbs = require('hbs');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get('/', function(req, res) {
	res.sendFile(__dirname + "/" + "index.html");
});

app.post('/post', urlencodedParser, function (req, res) {
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});