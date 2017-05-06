/**
 * Created by samsung on 04-May-17.
 */
var express=require('express');
var bodyParser=require("body-parser");
var ejs=require('ejs');
var request = require('request');

var app=express();

app.use(bodyParser.json ());                         //parsing commands use for post data
app.use(bodyParser.urlencoded({extended:true}));

// // public middleware for front-end
app.use(express.static("public"));

//front end templating libraries :: {using ejs}
app.set('views','./templates');
app.set('view engine', 'ejs');

app.post("/movetomainpage",function (req,res) {


    var Movie = req.body.Movie;
    var year = req.body.Year;
    console.log("Movie :" + Movie);
    console.log("year :" + year);
    var url = "http://omdbapi.com/?";

    url = url + "t=" + Movie + "&" + "y=" + year;

    console.log(url);
    request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log(body); // Print the HTML for the Google homepage.

        var JSONObject = JSON.parse(body);
        console.log(JSONObject);
        var c = JSONObject["Title"];
       //data sending to result page dynamically
        var sendData={"Title":JSONObject["Title"],"Release data":JSONObject["Released"],"Runtime":JSONObject["Runtime"],"Category":JSONObject["Genre"],
            "Director":JSONObject["Director"],"Writer":JSONObject["Writer"],"Star Cast":JSONObject["Actors"],"story":JSONObject["plot"]
        ,"Langauge":JSONObject["Language"],"country":JSONObject["Country"],"Poster":JSONObject["Poster"],"Director":JSONObject["Director"]
            ,"imdb":JSONObject["imdbRating"],"Director":JSONObject["Director"],"Production":JSONObject["Production"],"Website":JSONObject["Website"]}


        res.render('Result',sendData);
    })

});

var port=process.env.PORT || 3000;
app.listen(port,function (req,res) {
    console.log("server started");

})