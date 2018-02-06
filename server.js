var express = require('express')
var app = express()
var path = require('path');

app.use('/static', express.static(path.join(__dirname,'/dist/static')));

app.get('/',function (req,res) {
  res.sendFile(__dirname + '/dist/index.html');
});

console.log('> Starting dev server...');

var server = app.listen(8080);

console.log('> Server starting on 127.0.0.1:8080');
