exports.config = {
		
	framework: 'jasmine2',
	jasmineNodeOpts: {
		defaultTimeoutInterval: 2500000,
		   print: function() {}
		},
	
	seleniumAddress: 'http://localhost:4444/wd/hub',
	
	specs: ['./pages/*/*.spec.js'],
  
	capabilities:{
	  'browserName' : 'chrome',
	  //'browserName' : 'firefox',
	  //'marionette': true
				},
	
	useAllAngular2AppRoots: true,
	
	params: {
      url: 'http://ui-service-dev.pcfomactl.dev.intranet/'
			},
  
	suites: {
      billing: 'pages/billing/**/*.spec.js',
	  cart: 'pages/cart/**/*.spec.js',
	  contactUs: 'pages/contactUs/**/*.spec.js',
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
