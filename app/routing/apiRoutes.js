//route links to data source
var friends = require("../data/friends");
// var yournewFriend = require("../data/newFriend");

console.log(friends);
module.exports = function(app) {
//API GET Request

    app.get("/api/friends", function(req, res) {
        res.json(friends);
      });

      console.log(friends);

      app.post("/api/friends", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        
        console.log('IN THE POST!!');
        console.log(req.body);
        for (var i = 0; i < friends.length; i++) {
            friends.push(req.body);
            res.json(false);
        }
        
        
        // if (surveyData.length < 5) {
        //   surveyData.push(req.body);
        //   res.json(true);
        // }
        // else {
        //   yournewFriend.push(req.body);
        //   res.json(false);
        // }
      });
}
