var express = require("express");
var mongojs = require("mongojs");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var app = require("./public/app")
var logger = require("morgan");

let PORT = process.env.PORT || 3000
var db = require("./models/Message")
// Require all models
// var db = require("./models/Message");

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userMessagesDB";
mongoose.connect(MONGODB_URI);

app.get("/saved", function (req, res) {
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

app.listen(PORT, function () {
    console.log("App running on port 3000!");
});
