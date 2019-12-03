var bar= require('./week.js');
var app=require('./month.js')
var express = require('express');
var bodyParser = require('body-parser');
var foo = express();
var mysql = require('mysql');
foo.use(bodyParser())
foo.use(bodyParser.urlencoded({ extended: true }));

//api path for put method
foo.put("/db/v1", function(req, res) {
 bar.put(req, function (status, response) {
    res.status(status).send(response);

  })
});

//api path for post method
foo.post("/db/v2", function(req, res) {
 bar.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for delete method
foo.del("/db/v3", function(req, res) {
 bar.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for get method
foo.get("/db/v4", function(req, res) {
 bar.get(req, function (status, response) {
    res.status(status).send(response);
  })
});
//api path for put method
foo.put("/db/y1", function(req, res) {
 app.put(req, function (status, response) {
    res.status(status).send(response);

  })
});

//api path for post method
foo.post("/db/y2", function(req, res) {
 app.post(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for delete method
foo.del("/db/y3", function(req, res) {
 app.del(req, function (status, response) {
    res.status(status).send(response);
  })
});

//api path for get method
foo.get("/db/y4", function(req, res) {
 app.get(req, function (status, response) {
    res.status(status).send(response);
  })
});

//assignment of port number
foo.listen(3002,function(){
 console.log("listening to 3002");
});
