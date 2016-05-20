
module.exports = function(){
	fs.readdir(path, function(err, list){
		for(var i = 0; i < list.length; i++){
			if(path.extname(list[i]) == '.' + extensionName){
				console.log(list[i]);
			}
		}
	}); 
}