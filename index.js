/**
 * Created by samsung on 04-May-17.
 */
var express=require('express');
var bodyParser=require("body-parser");

var app=express();

app.use(bodyParser.json ());                         //parsing commands use for post data
app.use(bodyParser.urlencoded({extended:true}));

// // public middleware for front-end
app.use(express.static("public"));

app.post("/movetomainpage",function (req,res) {


    var Movie=req.body.Movie;
    var year=req.body.Year;
   

});

var port=process.env.PORT || 3000;
app.listen(port,function (req,res) {
    console.log("server started");

})