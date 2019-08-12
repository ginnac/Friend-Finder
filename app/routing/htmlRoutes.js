//routing urls to stored APIs

//we need to require path to get the correct file path for out html 
var path = require("path"); 

//module to export

module.exports=function(app){

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});

//if no mathing route

app.get("*", function(req,res){
    res.sendFile(path.join(__dirname,"../public/home.html"))
});


};