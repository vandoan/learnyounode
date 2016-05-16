

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











