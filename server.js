var fs = require('fs');
var path = require('path');
var express = require('express');
var morgan = require('morgan');
var app = express();

app.use('/', express.static(path.join(__dirname, 'wwwroot')));

app.listen(process.env.PORT || 9000, function() {
  console.info('서버 시작!');
});