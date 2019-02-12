// Load friend object data
var friends = require("../data/friends");



module.exports = function(app) {
 
    // GET Routes
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

    // POST requests

  app.post("/api/friends", function(req, res) {
  
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    // Get user input data from survey
    var userData = req.body;
    var userScores = userData.scores;

    // Calculates sum of survey scores from all responses
    var totalDifference;

    // Loop through friends
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      // We then loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        // We calculate the difference between the scores and sum them into the totalDifference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

   
    friends.push(userData);

   
    res.json(bestMatch);
  });
};
