"use strict"; // ??? 
var str = 	"";
var fs = 	require('fs');
var http = 	require("http");
var results = [];
var index = 0;


// each call is repeated
for(var i = 0; i < 3; i ++){
    http.get(process.argv[i + 2], function(res) {
    	res.setEncoding('utf8');
    	res.on("error", console.error);
        res.on("data", function (data) {
        	str += data;
        });
        res.on("end", function(){
        	results[index] = str;
            index++;
            if(index >= 3){
                displayResults();
            }
        });
    });
};

function displayResults(){
    for(var j = 0; j < 3; j++ ){
        console.log(results[j]);
    };
};

// once all three calls have been collected, then submit them accordingly





