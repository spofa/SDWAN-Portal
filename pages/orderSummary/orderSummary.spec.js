var helper = require('../../helper'),
    
	OrderSummary = require('./orderSummary.po.js');


describe('Order Summary Page : ', function() {
	
	var orderSummary = new OrderSummary();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    
    
    
});