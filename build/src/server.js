"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var app = (0, _express["default"])();
var port = 8080;
app.get('/', function (req, res) {
  res.send('<h1> Server Nodejs Chat App is running now!!! <h1/>');
});
app.listen(port || 8080, function () {
  console.log('Sever is running on port ', port);
});