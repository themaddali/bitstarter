var express = require('express');
var app = express.createServer(express.logger());

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
  console.log("call heard");
}).listen(5000);
console.log("Running on port 5000");
