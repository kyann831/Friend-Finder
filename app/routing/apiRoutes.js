//route links to data source
var friends = require("../data/friends");
 
// console.log(friends);

module.exports = function(app) {
  //API GET Request 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // console.log(friends);

  app.post("/api/friends", function(req, res) {
    let newfriend = req.body;
    let totaldifference = 99;
    let match;
    //algorhythm here
    for (i =0; i < friends.length; i++) {
      let newTotalDiff = 0;
      for (j = 0; j < friends[i].scores.length; j++) {
        newTotalDiff += Math.abs(newfriend.scores[j] - friends[i].scores[j]);
      } 
      //check to see if their scores are clsoer than current friends scores
      if (newTotalDiff < totaldifference) {
        match = friends[i];
        totaldifference = newTotalDiff;
      }
    }

    console.log('match: %o', match);
    res.json(match);
  });
};