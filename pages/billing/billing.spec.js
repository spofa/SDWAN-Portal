var helper = require('../../helper'),
    
	Billing = require('./billing.po.js');


describe('Billing Page : ', function() {
	
	var billing = new Billing();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    
    it('TC140286 - Navigating to Billing page', function() {
    	//browser.pause();
    	billing.goToBillingForPremiumThirtysixTerms()
    	
    	expect(browser.getCurrentUrl()).toContain('#/billing');
    	
    });
    
    
});