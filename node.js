var http = require('http');
var fs = require('fs');
var path= require('path');
const express = require('express')

var app = express();
app.use(express.static("public"));
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(4545);