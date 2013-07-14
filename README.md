diigonode
=========

A wrapper for the Diigo bookmarking service API

Usage
=========

Mimics the API spec seen here https://www.diigo.com/api_dev

Usage
=========

```bash
npm install diigonode
```

Example: getting some links
=====
```javascript
var diigo = require('diigonode');

var getOptions = {
	apiKey: '4305d35c3d2126bd',
	username: 'username',
	password: 'password', 
	start: '', 
	count: '1', 
	sort: '', 
	tags: 'javascript',
	filter: '',
	list: ''
};

diigo.getDiigo(getOptions, function(err, results) {
	//do stuff with results
});
```


Example: saving a link
=====
```javascript
var diigo = require('diigonode');

var saveOptions = {
	apiKey: '4305d35c3d2126bd',
	username: username,
	password: password,
	title: 'Test Bookmark', 
	url: 'http://www.test.com/', 
	shared: 'no', 
	desc: 'Test description for test bookmark',
	readLater: 'yes'
};

diigo.saveDiigo(saveOptions, function(err, results) {
	//do stuff with results
});
```


That's pretty much it. :D
