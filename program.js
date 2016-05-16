"use strict"; // ??? 
var str = 	"";
var fs = 	require('fs');
var http = 	require("http");
var concat = require('concat-stream');

http.get(process.argv[2], function(res) {
	res.setEncoding('utf8');
	res.on("error", console.error);
    res.on("data", function (data) {
    	str += data;
    });
    res.on("end", function(){
    	var num = str.length;
    	console.log(num + "\n" + str);
    });
}).on('error',function(error){
	console.log(error);
});
