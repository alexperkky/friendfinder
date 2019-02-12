// Dependencies
var path = require("path");

// Routing

module.exports = function(app) {

// Get Requests

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // Default to home page if no match
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
