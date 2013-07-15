var request = require('request');
var querystring = require('querystring');

module.exports = function(){
	
	function getDiigo(options, auth, callback){
		var uri = 'https://secure.diigo.com/api/v2/bookmarks?' + querystring.stringify(options);
	  request({
	  	'uri': uri,
	    'auth': {
	      'user': auth['username'],
	      'pass': auth['password'],
	      'sendImmediately': false
	     }
	  },
	  function(error, response, body) {
  		if(error){
  			return callback(error, 'Error: ' + error['syscall'] + ' - ' + error['errno'] );
  		} else if(response['request']['response']['statusCode'] === 401){
  			return callback(error, response['request']['response'] );
  		} else {
  			return callback(error, JSON.parse(body));
  		}
	  });	
	}
	
	function saveDiigo(options, auth, callback){
		var uri = 'https://secure.diigo.com/api/v2/bookmarks?' + querystring.stringify(options);
	  request({ 
	  	'uri': uri,
	  	'method': 'POST',
	    'auth': {
	      'user': auth['username'],
	      'pass': auth['password'],
	      'sendImmediately': false
	     }
	  },
	  function(error, response, body) {
	  	if(error){
	  		return callback(error, 'Error: ' + error['syscall'] + ' - ' + error['errno'] );
	  	} else if(response['request']['response']['statusCode'] === 401){
	  		return callback(error, response['request']['response'] );
	  	} else {
	  		return callback(error, JSON.parse(body));
	  	}
	  });	
	}
  
  return {
    getDiigo: getDiigo,
    saveDiigo: saveDiigo
  };
  
}();