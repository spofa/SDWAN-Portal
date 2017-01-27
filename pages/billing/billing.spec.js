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
    /*
    it('TC140286 - Navigating to Billing page', function() {
    	billing.goToBillingForPremiumThirtysixTerms()
    	expect(browser.getCurrentUrl()).toContain('#/billing');
    });
    
    it('TC140287 - Back & Breadcrumb options', function() {
    	billing.goToBillingForPremiumThirtysixTerms()
    	expect(billing.titleCard.getText()).toEqual('SD-WAN');
    	expect(billing.backBreadcrumb.isDisplayed()).toBeTruthy();
    	expect(billing.breadcrumbs.count()).toBe(3);
    	expect(billing.homeBreadcrumbs.getText()).toEqual('Home');
    	expect(billing.locationsBreadcrumb.getText()).toEqual('Locations');
    	expect(billing.billingBreadcrumb.getText()).toEqual('Billing Details');
    	billing.backBreadcrumb.click();
    	expect(browser.getCurrentUrl()).toContain('#/locations');
    	billing.moveToBilling()
    	expect(browser.getCurrentUrl()).toContain('#/billing');
    });
   
    it('TC140294 - Fields available in Billing Page', function() {
    	billing.goToBillingForBasicHaTwelveTerms()
    	expect(billing.backBreadcrumb.isDisplayed()).toBeTruthy();
    	expect(billing.billingCompanyName.isDisplayed()).toBeTruthy();
    	expect(billing.billingAddressLine1.isDisplayed()).toBeTruthy();
    	expect(billing.billingAddressLine2.isDisplayed()).toBeTruthy();
    	expect(billing.billingCountry.getText()).toContain('United States of America');
    	expect(billing.billingState.isDisplayed()).toBeTruthy();
    	expect(billing.billingCity.isDisplayed()).toBeTruthy();
    	expect(billing.billingZipCode.isDisplayed()).toBeTruthy();
    	
    	expect(billing.billingFirstName.isDisplayed()).toBeTruthy();
    	expect(billing.billingLastName.isDisplayed()).toBeTruthy();
    	expect(billing.billingJobTitle.isDisplayed()).toBeTruthy();
    	expect(billing.billingPhoneNumber.isDisplayed()).toBeTruthy();
    	expect(billing.billingPhoneNumberExtn.isDisplayed()).toBeTruthy();
    	expect(billing.billingEmail.isDisplayed()).toBeTruthy();
    	expect(billing.billingNextButton.isEnabled()).toBeFalsy();
    });
    
    it('TC140296 - Valid Billing Address', function() {
    	billing.goToBillingForBasicHaTwelveTerms()
    	billing.fillingBillingDetails()
    	expect(billing.billingNextButton.isEnabled()).toBeTruthy();
    });
    
    it('TC140303 - Invalid Billing Address', function() {
    	billing.goToBillingForBasicHaTwelveTerms()
    	billing.fillingBillingWithInvalidDetails()
    	expect(billing.billingNextButton.isEnabled()).toBeFalsy();
    	expect(billing.invalidAddressElement.getText()).toEqual('Invalid Address or Server not responding, Please try after few sometime.');
    });
    
    it('TC140305 - Proceed from Billing Page', function() {
    	billing.goToBillingForBasicHaTwelveTerms()
    	billing.fillingBillingDetails()
    	expect(billing.billingNextButton.isEnabled()).toBeTruthy();
    	billing.selectingBillingNextButton()
    	expect(browser.getCurrentUrl()).toContain('#/order-summary-detail')
    });
  
    it('TC140390 - Back button on Order Summary page', function() {
    	billing.goToBillingForBasicHaTwelveTerms()
    	billing.fillingBillingDetails()
    	expect(billing.billingNextButton.isEnabled()).toBeTruthy();
    	billing.selectingBillingNextButton()
    	expect(browser.getCurrentUrl()).toContain('#/order-summary-detail')
    	browser.navigate().back();
    	expect(billing.billingCompanyName.getText()).not.toBeNull();
    	expect(billing.billingAddressLine1.getText()).not.toBeNull();
    	expect(billing.billingAddressLine2.getText()).not.toBeNull();
    	expect(billing.billingState.getText()).not.toBeNull();
    	expect(billing.billingCity.getText()).not.toBeNull();
    	expect(billing.billingZipCode.getText()).not.toBeNull();
    	
    	expect(billing.billingFirstName.getText()).not.toBeNull();
    	expect(billing.billingLastName.getText()).not.toBeNull();
    	expect(billing.billingJobTitle.getText()).not.toBeNull();
    	expect(billing.billingPhoneNumber.getText()).not.toBeNull();
    	expect(billing.billingPhoneNumberExtn.getText()).not.toBeNull();
    	expect(billing.billingEmail.getText()).not.toBeNull();
    	expect(billing.billingNextButton.getText()).not.toBeNull();
    });
    
    it('TC141352 - Back button to Location page', function() {
    	billing.goToBillingForBasicHaTwelveTerms()
    	billing.fillingBillingDetails()
    	billing.selectingBillingNextButton()
    	browser.navigate().back();
    	billing.backBreadcrumb.click();
    	expect(browser.getCurrentUrl()).toContain('#/locations');
    	billing.moveToBilling()
    	expect(browser.getCurrentUrl()).toContain('#/billing');
    	expect(billing.billingCompanyName.getAttribute('value')).not.toBeNull();
    	expect(billing.billingAddressLine1.getAttribute('value')).not.toBeNull();
    	expect(billing.billingAddressLine2.getAttribute('value')).not.toBeNull();
    	expect(billing.billingState.getAttribute('value')).not.toBeNull();
    	expect(billing.billingCity.getAttribute('value')).not.toBeNull();
    	expect(billing.billingZipCode.getAttribute('value')).not.toBeNull();
    });
    */
});