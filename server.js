var fs = require('fs');
var path = require('path');
var week= require('./service/week.js');
var month = require('./service/month.js')
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mysql = require('mysql');
app.use(bodyParser())
app.use(bodyParser.urlencoded({ extended: true }));

//api path for put method
app.put("/db/v1", function(req, res) {
 week.put(req, function (status, response) {
    res.status(status).send(response);

  })
});

//api path for post method
app.post("/db/v2", function(req, res) {
 week.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for delete method
app.del("/db/v3", function(req, res) {
 week.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for get method
app.get("/db/v4", function(req, res) {
 week.get(req, function (status, response) {
    res.status(status).send(response);
  })
});
//api path for put method
app.put("/db/y1", function(req, res) {
 month.put(req, function (status, response) {
    res.status(status).send(response);

  })
});

//api path for post method
app.post("/db/y2", function(req, res) {
 month.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for delete method
app.del("/db/y3", function(req, res) {
 month.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for get method
app.get("/db/y4", function(req, res) {
 month.get(req, function (status, response) {
    res.status(status).send(response);
  })
});

//assignment of port number
app.listen(3005,function(){
 console.log("listening to 3002");
});
