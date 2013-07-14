var request = require('request');

module.exports = function(){
	
	function getDiigo(options, callback){
		var uri = buildUri(options);
	  request({ 
	  	'uri': uri,
	    'auth': {
	      'user': options['username'],
	      'pass': options['password'],
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
	
	function saveDiigo(options, callback){
		var uri = buildUri(options);
	  request({ 
	  	'uri': uri,
	  	'method': 'POST',
	    'auth': {
	      'user': options['username'],
	      'pass': options['password'],
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

  function buildUri(options){
  	var uri = 'https://secure.diigo.com/api/v2/bookmarks?';
  	for (var key in options) {
  	  if(options.hasOwnProperty(key)) {
  	  	if(key === 'apiKey'){
  	    	uri += 'key=' + encodeURIComponent(options[key]);
  	    }else if(key === 'password'){
  	    	continue;
  	    }else {
  	    	if(typeof options[key] != 'undefined' && options[key].length > 0){
  	    		uri += '&' + key + '=' + encodeURIComponent(options[key]);
  	    	}
  	    }
  	  }
  	}
  	return uri;
  }
  
  return {
    getDiigo: getDiigo,
    saveDiigo: saveDiigo
  };
  
}();