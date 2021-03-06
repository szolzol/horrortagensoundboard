//jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  res.render("home");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Example app listening`);
});