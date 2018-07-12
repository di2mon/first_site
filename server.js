var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile('view/index.html');
});

app.get('/form.html', function (req, res) {
  res.sendfile('view/form.html');
});

app.get('/about.html', function (req, res) {
  res.sendfile('view/about.html');
});

app.get('/main.html', function (req, res) {
  res.sendfile('view/main.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post("/form", urlencodedParser, function (request, response) {
  if(!request.body) return response.sendStatus(400);
  console.log(request.body);
response.send(`${request.body.userName} - ${request.body.userAge}`);
});