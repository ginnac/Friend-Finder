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
   

   //logic to find friend
    var friendsToCompareList =  friends.length - 1;
    var differenceArray = [];
    var totalDifference = 0;

   for (var i=0;i<friendsToCompareList;i++){
    
     var score = friends[i].scores;
     var yourScore = req.body.scores;

     //function sum(){
     totalDifference = 0; 
     for (var x=0; x<score.length; x++){
        friendScore = parseInt(score[x]);
        userScore = parseInt(yourScore[x]);
   
        if (friendScore > userScore ||  userScore> friendScore){
    
            totalDifference += Math.abs(friendScore - userScore);


        }  

        else{ 
            totalDifference += 0;
        }
    
     };

    differenceArray.push(totalDifference);
     console.log(differenceArray);

   };

   var min = Math.min.apply(Math, differenceArray);
   var index = differenceArray.indexOf(min);

  
   res.json(friends[index]);
    
});

};




