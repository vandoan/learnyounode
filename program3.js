

function( process.argv[2] ){
	for(var i = 2; i < process.argv.length; i++ ){
		total += process.argv[i];
	}
	console.log(total);		
}