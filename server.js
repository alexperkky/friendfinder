// Dependencies

var express = require("express");
var bodyParser = require("body-parser");

// Creates express server
var app = express();

// Set up a PORT
var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


// Router

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
