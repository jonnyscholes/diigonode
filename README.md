#diigonode

A wrapper for the Diigo bookmarking service API

##Usage

Mimics the API spec seen here https://www.diigo.com/api_dev

##Install

```bash
npm install diigonode
```

##Example: getting some links

```javascript
var diigo = require('diigonode');

var auth = {
	password: '',
	username: ''
}

var getOptions = {
	key: '',
	username: 'username',
	password: 'password', 
	start: '', 
	count: '1', 
	sort: '', 
	tags: 'javascript',
	filter: '',
	list: ''
};

diigo.getDiigo(getOptions, auth, function(err, results) {
	//do stuff with results
});
```


##Example: saving a link

```javascript
var diigo = require('diigonode');

var auth = {
	password: '',
	username: ''
}

var saveOptions = {
	key: '',
	title: 'Test Bookmark', 
	url: 'http://www.test.com/', 
	shared: 'no', 
	desc: 'Test description for test bookmark',
	readLater: 'yes'
};

diigo.saveDiigo(saveOptions, auth, function(err, results) {
	//do stuff with results
});
```