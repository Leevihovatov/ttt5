var express = require("express");
var path = require("path");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Database
var mongoDB = "mongodb+srv://dbUser:dbUserPassword@cluster0-m4znk.mongodb.net/tictactoe?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", indexRouter);

module.exports = app;
app.listen(8080);
