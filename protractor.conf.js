exports.config = {
		
	framework: 'jasmine2',
	jasmineNodeOpts: {
		 
		   print: function() {}
		},
	
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	specs: ['./pages/*/*.spec.js'],
  
	capabilities:{
	  'browserName' : 'chrome',
				},
	
	useAllAngular2AppRoots: true,
	baseUrl: 'http://localhost:3000',
	params: {
      url: 'http://localhost:3000/'
			},
  
	suites: {
      billing: 'pages/billing/**/*.spec.js',
	  cart: 'pages/cart/**/*.spec.js',
	  contactUS: 'pages/contactUS/**/*.spec.js',
	  contract: 'pages/contract/**/*.spec.js',
      home: 'pages/home/**/*.spec.js',
      locations: 'pages/locations/**/*.spec.js',
      login: 'pages/login/**/*.spec.js'
    	  
			},
  
	onPrepare: function() {
      
      var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
						},
	
  
}
