var fs = require('fs');
var path = require('path');
var module = require('./module.js')  
// file = fs.readFileSync(process.argv[2]).toString();

// file = file.split('\n').length;

// console.log(file -1);
// // fs.readFileSync(argv[2]);






// fs.readFile(process.argv[2], function(err, data){
// 	var file = data.toString();
// 	console.log(file.split('\n').length -1);
// }); 





 

// fs.readdir(process.argv[2], function(err, list){
// 	for(var i = 0; i < list.length; i++){
// 		if(path.extname(list[i]) == '.' + process.argv[3]){
// 			console.log(list[i]);
// 		}
// 	}
// }); 


module(process.argv[2], process.argv[3]){

}











