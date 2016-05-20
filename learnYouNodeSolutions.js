

// 3rd challenge
// My first IU

  var fs = require('fs');  
  var item = fs.readFileSync(process.argv[2]);
  item = item.toString();
  splitItems = item.split('\n');

console.log(splitItems.length - 1);

// 4th challange
// Write a program that uses a single asynchronous filesystem operation to  
//  read a file and print the number of newlines it contains to the console  
//  (stdout), similar to running cat file | wc -l.  

  	var fs = require('fs');  

  	var item = fs.readFile(process.argv[2], function(err,data){ // read file function
  		item = item.toString();
  		splitItems = item.split('\n');

		console.log(splitItems.length - 1);
  	});

 
// 4th challeng
// Create a program that prints a list of files in a given directory,  
// filtered by the extension of the files. You will be provided a directory  
// name as the first argument to your program (e.g. '/path/to/dir/') and a  
// file extension to filter by as the second argument.  


  	var fs = require('fs');
  	var path = require('path');


  	var item = fs.readdir(process.argv[2], function(err,list){ // read directory function
  		if(err){
  			throw err
  		}
  		list.forEach(function(filename){
  			if(path.extname(filename) == '.'+ process.argv[3]){
  				console.log(filename);
  			}
  		});
  	});


// 6th challenge
// turn the previous code into a module


// program.js
var myModule = require('./module.js');

myModule(process.argv[2], process.argv[3], function(err, data){

    data.forEach(function(file){
        console.log(file);
    });
    
});



// module.js
var fs = require('fs'); // file system
var path = require('path');


module.exports = function(directoryPath, ext) {
  var ext = '.' + ext;

  var item = fs.readdir(directoryPath, function(err,list){
    if(err){
      throw err
    }

    list.forEach(function(filename){
      if(path.extname(filename) == ext){
        console.log(filename);
      }
    });
  });

}



// 7th challenge
// Write a program that performs an HTTP GET request to a URL provided to you  
//  as the first command-line argument. Write the String contents of each  
//  "data" event from the response to a new line on the console (stdout).  

var http = require('http');

http.get(process.argv[2], function(res) {

    res.on("data", function (data) { 
    	console.log(data);
    }).setEncoding('utf8');  

});



// 8th challenge
// Write a program that performs an HTTP GET request to a URL provided to you  
// as the first command-line argument. Collect all data from the server (not  
// just the first "data" event) and then write two lines to the console  
// (stdout).  
// process.stdout.write

// The first line you write should just be an integer representing the number  
// of characters received from the server. The second line should contain the  
// complete String of characters sent by the server.  


"use strict";
var str =   "";
var fs =  require('fs');
var http =  require("http");
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







 // ## JUGGLING ASYNC (Exercise 9 of 13)  
   
 //  This problem is the same as the previous problem (HTTP COLLECT) in that  
 //  you need to use http.get(). However, this time you will be provided with  
 //  three URLs as the first three command-line arguments.  
   
 //  You must collect the complete content provided to you by each of the URLs  
 //  and print it to the console (stdout). You don't need to print out the  
 //  length, just the data as a String; one line per URL. The catch is that you  
 //  must print them out in the same order as the URLs are provided to you as  
 //  command-line arguments. 


var http = require('http');
var urls = [process.argv[2], process.argv[3], process.argv[4]]; 
var holder = [];
var count = 1;
var endCount = 0;

for(var i in urls){     
    responseCount(i, urls[i])
}

function responseCount(count, url){
    http.get(url, function(res){
        res.setEncoding('utf8');                            

        var string = '';
        res.on('data', function(chunk){         
            string += chunk;
        });

        res.on('end', function(){
            holder[count] = string;
            endCount ++;
            if(endCount >= 3){
                for(var i in holder){
                    console.log(holder[i]); 
                }
            }
        })

    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    }); 
}





 // ## TIME SERVER (Exercise 10 of 13)  
   
 //  Write a TCP time server!  
   
 //  Your server should listen to TCP connections on the port provided by the  
 //  first argument to your program. For each connection you must write the  
 //  current date & 24 hour time in the format:  
   
 //     "YYYY-MM-DD hh:mm"  
   
 //  followed by a newline character. Month, day, hour and minute must be  
 //  zero-filled to 2 integers. For example:  
   
 //     "2013-07-06 17:42"  
   
 //  After sending the string, close the connection.  


var net = require('net');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);



 // ## HTTP FILE SERVER (Exercise 11 of 13)  
   
 //  Write an HTTP server that serves the same text file for each request it  
 //  receives.  
   
 //  Your server should listen on the port provided by the first argument to  
 //  your program.  
   
 //  You will be provided with the location of the file to serve as the second  
 //  command-line argument. You must use the fs.createReadStream() method to  
 //  stream the file contents to the response.  
   


tp = require('http')
var fs = require('fs')
var server = http.createServer(function(req, res) {
    var src = fs.createReadStream(process.argv[3]);
    src.pipe(res);
});
server.listen(process.argv[2]);








