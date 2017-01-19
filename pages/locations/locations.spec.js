var helper = require('../../helper'),
    
	Locations = require('./locations.po.js');
	
describe('Locations Page : ', function() {

	
	var locations = new Locations();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    
	
	/*it('TC-41 - Location page verification', function() {
		 
		locations.selectingBasicTwelveTerms()
		expect(browser.getCurrentUrl()).toContain('#/locations');
		expect(locations.locationsHeader.getText()).toEqual('Locations')
	}); 
	
	it('TC-42 - Location breadcrumb state verification', function() {
		locations.selectingBasicHaTwelveTerms()
		expect(locations.locationBreadcrumb.getAttribute('class')).toEqual('active');
		expect(locations.locationBreadcrumb.isSelected()).toBeFalsy();
	
		});
	
	it('TC-43 - Home breadcrumb verification', function() {
		locations.selectingBasicHaTwelveTerms()
		locations.homeBreadbrumb.click();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:3000/#/')
	}) 
	
    it('TC-44 - Back breadcrumb verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.backBreadcrumb.click();
    	expect(browser.getCurrentUrl()).toContain('home');
    }); 
    
    it('TC-45 - Location page elements validation', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.serviceEmail.isDisplayed()).toBeTruthy();
    	expect(locations.serviceFirstName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceLastName.isDisplayed()).toBeTruthy();
    	expect(locations.servicePhoneNo.isDisplayed()).toBeTruthy();
    	expect(locations.serviceExtn.isDisplayed()).toBeTruthy();
    	
    	expect(locations.serviceaddLocationName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine1.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine2.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddCity.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddZipCode.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddState.isDisplayed()).toBeTruthy();
    	
    	expect(locations.shippingaddLocationName.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddAddressLine1.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddAddressLine2.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddCity.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddZipCode.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddState.isDisplayed()).toBeTruthy();
    	
    }); 
    
    it('TC-46 - Service contact fields verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.serviceEmail.isDisplayed()).toBeTruthy();
    	expect(locations.serviceFirstName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceLastName.isDisplayed()).toBeTruthy();
    	expect(locations.servicePhoneNo.isDisplayed()).toBeTruthy();
    	expect(locations.serviceExtn.isDisplayed()).toBeTruthy();
    });
    
    it('TC-47 - Service address fields verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.serviceaddLocationName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine1.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine2.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddCity.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddZipCode.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddState.isDisplayed()).toBeTruthy();
    });
    
    it('TC-48 - Shipping address fields verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.serviceaddLocationName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine1.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine2.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddCity.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddZipCode.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddState.isDisplayed()).toBeTruthy();
    });
    
    it('TC-49 - Add locations button state verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.addLocationButton.isEnabled()).toBeFalsy();
    	locations.serviceContactDetails()
    	expect(locations.addLocationButton.isEnabled()).toBeFalsy();
    }); 
    
    it('TC-51 - Adding Location verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	
    	expect(locations.addAnotherProductButton.isDisplayed()).toBeTruthy();
    	expect(locations.proceedButton.isDisplayed()).toBeTruthy();
    	expect(locations.locationListHeaderElement.get(1).getText()).toEqual('LOCATION');
    	expect(locations.locationListHeaderElement.get(2).getText()).toEqual('SERVICE CONTACT');
    	expect(locations.locationListHeaderElement.get(3).getText()).toEqual('SERVICE ADDRESS');
    	expect(locations.locationListHeaderElement.get(4).getText()).toEqual('ACTION');

    }); 
    
    it('TC-53 - Same as service Address button verification', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.selectingSameAsCheckBox()
    	locations.selectingAddLocationsButton()
    	
    	expect(locations.serviceEmail.getText()).toBe('')
    	expect(locations.serviceFirstName.getText()).toBe('')
    	expect(locations.serviceLastName.getText()).toBe('')
    	expect(locations.servicePhoneNo.getText()).toBe('')
    	expect(locations.serviceExtn.getText()).toBe('')
    	
    	expect(locations.serviceaddLocationName.getText()).toBe('')
    	expect(locations.serviceaddAddressLine1.getText()).toBe('')
    	expect(locations.serviceaddAddressLine2.getText()).toBe('')
    	expect(locations.serviceaddCity.getText()).toBe('')
    	expect(locations.serviceaddZipCode.getText()).toBe('')
    	
    	
    	expect(locations.shippingaddLocationName.getText()).toBe('')
    	expect(locations.shippingaddAddressLine1.getText()).toBe('')
    	expect(locations.shippingaddAddressLine2.getText()).toBe('')
    	expect(locations.shippingaddCity.getText()).toBe('')
    	expect(locations.shippingaddZipCode.getText()).toBe('')
    }); */
    
    it('TC-54 - Locations Added locations', function() {
    	locations.selectingBasicHaTwelveTerms()
    	for(i=1;i<3;i++)
    		{
    		locations.serviceContactDetails()
        	locations.serviceAddressDetails()
        	locations.shippingAddressDetails()
        	locations.selectingAddLocationsButton()
    		}
    	expect(locations.addedLocationList.all(by.tagName('li')).count()).toBe(2);
    },80000);
});