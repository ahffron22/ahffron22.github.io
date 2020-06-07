var express = require("express");
var mongojs = require("mongojs");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var logger = require("morgan");

var PORT = 3000;

// Require all models
var db = require("./models/Message");

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/userMessagesDB", { useNewUrlParser: true });

var Message = require("./models/Message")

app.get("/savedMessages", function (req, res) {
    // Find all Notes
    db.Message.find({})
        .then(function (dbMessage) {
            // If all Notes are successfully found, send them back to the client
            res.json(dbMessage);
        })
        .catch(function (err) {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});

app.listen(3000, function () {
    console.log("App running on port 3000!");
});
