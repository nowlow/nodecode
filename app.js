// My microservice!

var express = require('express');
var request = require('request');

var app = express();

app.use(express.static('public'));
runGetRequest();

// Does a GET request to ip.jsontest.com
function runGetRequest() {
    
    //sample URL.
    var url = "http://129.157.179.180:3000/shield/33/45/blue/nowlow";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

module.exports = app;
