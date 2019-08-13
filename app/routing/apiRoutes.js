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
 
   var differenceArray = [];
   var friendsList =  friends.length - 1;
   var totalDifference = 0;
   
   for (var i=0;i<friendsList.length;i++){
    
     var score = friends[i].scores;
     var yourScore = friends[friendsList].scores;
     function sum(){
     totalDifference = 0; 
     for (var x=0; x < score.length; x++){

   
        if (!score[x]===yourScore[x]){
            var difference = 0;
            difference = score[x] - yourScore[x]
            difference = Math.abs(difference);
            totalDifference += difference


        }  

        else{ totalDifference += 0}
    
     };

     return totalDifference;
    };

    differenceArray.push(totalDifference);

   };
   res.json(friends[le]);
    
});

};




