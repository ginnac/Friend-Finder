//routing urls to stored APIs

//load data from friends.js

var friends = require("../data/friends");

module.exports =function(app){

//get object array friends when url vistis url
// +... api/friends

app.get("/api/friends", function(req,res){
    res.json(friends);
});

//POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the 
//compatibility logic

app.post("/api/friends",function(req,res){

    friends.push(req.body);  
  var le =  friends.length - 1 
   res.json(friends[le]);
    
});

};




