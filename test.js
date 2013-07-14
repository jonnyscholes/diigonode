var testDiigo = require('./diigoget.js');

var password = '';
var username = ''

//test #1
var getOptions = {
	apiKey: '4305d35c3d2126bd',
	username: username,
	password: password, 
	start: '', 
	count: '1', 
	sort: '', 
	tags: 'javascript',
	filter: '',
	list: ''
};

//test #2
var brokenGetOptions = {
	apiKey: '4305d35c3d2126bd',
	username: username,
	password: password, 
	count: 'five',
	tags: 'javascript'
};

//test #3
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

//test #4
var brokenSaveOptions = {
	apiKey: '4305d35c3d2126bdasdfafeq',
	username: username,
	password: password, 
	title: 'Test Bookmark', 
	url: 'http://www.test.com/', 
	shared: 'no', 
	desc: 'Test description for test bookmark',
	readLater: 'yes please!'
};

//test #1 getDiigo with GOOD data
var getResponse = testDiigo.getDiigo(getOptions, function(err, results) {
	testResult(err, results, '1');
});

//test #2 getDiigo with BAD data
var getResponse = testDiigo.getDiigo(brokenGetOptions, function(err, results) {
	testResult(err, results, '2');
});

//test #3 saveDiigo with GOOD data
var getResponse = testDiigo.saveDiigo(saveOptions, function(err, results) {
	testResult(err, results, '3');
});

//test #4 saveDiigo with BAD data
var getResponse = testDiigo.saveDiigo(brokenSaveOptions, function(err, results) {
	testResult(err, results, '4');
});

function testResult(err, results, testRef){
	if(err){
		console.log('----------------------------- ' + testRef + ' -----------------------------');
		console.log(err);
		console.log('Non standard error returned.');
		console.log('Test #'+ testRef +': FAILED');
		console.log('----------------------------- End '+testRef + ' -----------------------------');
	}	else {
		if( results['message'] && results['message'].search('Error') != -1 ){
			console.log('----------------------------- ' + testRef + ' -----------------------------');
			console.log(results['message']);
			console.log('Expected API error returned.');
			console.log('Test #'+ testRef +': PASSED');
			console.log('----------------------------- End '+testRef + ' -----------------------------');
		}
		else if ( results['statusCode'] && results['statusCode'] === 401 ) {
			console.log('----------------------------- ' + testRef + ' -----------------------------');
			console.log(results['statusCode']);
			console.log('Authorisation error returned.');
			console.log('Test #'+ testRef +': PASSED');
			console.log('----------------------------- End '+testRef + ' -----------------------------');
		} else {
			console.log('----------------------------- ' + testRef + ' -----------------------------');;
			console.log(results);
			console.log('Valid results returned from API.');
			console.log('Test #'+ testRef +': PASSED');
			console.log('----------------------------- End '+testRef + ' -----------------------------');
		}
	}
}