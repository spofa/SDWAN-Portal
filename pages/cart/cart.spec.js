var helper = require('../../helper'),
	Locations = require('../locations/locations.po.js'),
	Cart = require('./cart.po.js');


describe('Shopping Cart : ', function() {
	
	var cart = new Cart();
	var locations = new Locations();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    
   /* 
    it('TC140237 - Cart Value before selecting the Term and Products.', function() {
    	cart.openingCart()
    	expect(cart.cartTotalAmountField.getText()).toEqual('Shopping Cart is empty.');
    	expect(cart.viewDetails.isPresent()).toBeFalsy();	
    });
   
    it('TC140238 - Cart Value after selecting the Term and Products.', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(cart.cartProductCount.getText()).toEqual('1');
    	cart.openingCart()
    	expect(cart.cartDetailsHeaders.get(0).getText()).toEqual('PRODUCT');
    	expect(cart.cartDetailsHeaders.get(1).getText()).toEqual('TERM');
    	expect(cart.cartDetailsHeaders.get(2).getText()).toEqual('NUMBER OF LOCATIONS');
    	expect(cart.cartDetailsHeaders.get(3).getText()).toEqual('UNIT PRICE');
    	expect(cart.cartDetailsHeaders.get(4).getText()).toEqual('TOTAL');
    	expect(cart.cartTotalTextElement.getText()).toEqual('Total:');
    	expect(cart.viewDetails.isPresent()).toBeTruthy();
    });
    
    it('TC140241 - View Details option in Cart', function() {
    	locations.selectingBasicHaTwelveTerms()
    	cart.openingCart()
    	cart.selectingCartViewDetails()
    	expect(browser.getCurrentUrl()).toContain('#/order-summary-detail');
    });
    */
});