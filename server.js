var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendfile('view/index.html');
});

app.get('/index.html', function (req, res) {
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

