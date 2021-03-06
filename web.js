var express = require('express');
var fs = require('fs');
var indexFile = 'index.html';

var textString = fs.readFileSync(indexFile).toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(textString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
