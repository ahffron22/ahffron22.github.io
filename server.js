var express = require("express");
var mongojs = require("mongojs");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var app = express();
var logger = require("morgan");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

var databaseUrl = "userMessagesDB";
var collections = ["messages"];

var MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/userMessagesDB";

mongoose.connect(MONGODB_URI);

var db = mongojs(databaseUrl, collections);

app.listen(3000, function () {
    console.log("App running on port 3000!");
});
