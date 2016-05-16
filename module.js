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