var express = require('express');
var request = require('request');

var app = express();

app.use(express.static('public'));
//runGetRequest();

// Does a GET request to ip.jsontest.com
function runGetRequest() {
    
    //sample URL.
    var url = "http://ip.jsontest.com/";
    request(url, function(error, response, body) {
        if(!error) {
            console.log(body);
        } else {
            console.log(error);
        }
    });
};

module.exports = app;
