var helper = require('../../helper'),
	ContactUs = require('../contactUs/contactUs.po.js'),
	Cart = require('../cart/cart.po.js'),
	Locations = require('./locations.po.js');
	
describe('Locations Page : ', function() {

	
	var locations = new Locations();
	var cart = new Cart();
	var contactUs = new ContactUs();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    
	
	/*it('TC139435 - Location Page navigation', function() {
		 
		locations.selectingBasicHaTwelveTerms()
		expect(browser.getCurrentUrl()).toContain('#/locations');
		expect(locations.locationsHeader.getText()).toEqual('Locations')
	}); 
	
	it('TC139438 - Location Page Breadcrump', function() {
		locations.selectingBasicHaTwelveTerms()
		expect(locations.locationBreadcrumb.getAttribute('href')).toBeNull();
		expect(locations.locationBreadcrumb.isSelected()).toBeFalsy();
	
		});

    it('TC139520 - Home or Back icon', function() {
		locations.selectingBasicHaTwelveTerms()
		locations.homeBreadbrumb.click();
		expect(browser.getCurrentUrl()).toEqual(browser.params.url + '#/')
		locations.selectingBasicHaTwelveTerms()
    	locations.backBreadcrumb.click();
    	expect(browser.getCurrentUrl()).toContain('#/home');
	}) 
   
    it('TC139521 - Fields available in Locations page', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.locationHeaderProductName.getText()).toContain("SD-WAN BASIC HA (12 months, With My Own Transport)");
    	expect(locations.backBreadcrumb.isDisplayed()).toBeTruthy();
    	expect(locations.serviceEmail.isDisplayed()).toBeTruthy();
    	expect(locations.serviceFirstName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceLastName.isDisplayed()).toBeTruthy();
    	expect(locations.servicePhoneNo.isDisplayed()).toBeTruthy();
    	expect(locations.serviceExtn.isDisplayed()).toBeTruthy();
    	expect(locations.serviceDesiredDueDate.isDisplayed()).toBeTruthy();
    	
    	expect(locations.serviceaddLocationName.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine1.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddAddressLine2.isDisplayed()).toBeTruthy();
    	expect(locations.serviceCountry.getText()).toContain('United States of America');
    	expect(locations.serviceaddCity.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddZipCode.isDisplayed()).toBeTruthy();
    	expect(locations.serviceaddState.isDisplayed()).toBeTruthy();
    	
    	expect(locations.shippingaddLocationName.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddAddressLine1.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddAddressLine2.isDisplayed()).toBeTruthy();
    	expect(locations.shippingCountry.getText()).toContain('United States of America');
    	expect(locations.shippingaddCity.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddZipCode.isDisplayed()).toBeTruthy();
    	expect(locations.shippingaddState.isDisplayed()).toBeTruthy();
    	expect(locations.remarksField.isDisplayed()).toBeTruthy();
    	
    }); 
    
    it('TC139522 - Location Added with valid details', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
       	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
        	
    	expect(locations.addAnotherProductButton.isDisplayed()).toBeTruthy();
    	expect(locations.addAnotherProductButton.isEnabled()).toBe(true);
    	expect(locations.nextButton.isDisplayed()).toBeTruthy();
    	expect(locations.nextButton.isEnabled()).toBe(true);
    	expect(locations.locationListHeaderElement.get(1).getText()).toEqual('LOCATION');
    	expect(locations.locationListHeaderElement.get(2).getText()).toEqual('SERVICE CONTACT');
    	expect(locations.locationListHeaderElement.get(3).getText()).toEqual('SERVICE ADDRESS');
    	expect(locations.locationListHeaderElement.get(4).getText()).toEqual('ACTION');
    	
    });
  
       
    it('TC139525 - Location Added for BASIC product', function() {
   
    	locations.selectingBasicTwelveTerms()
    	locations.serviceContactDetails()
       	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
        expect(locations.basicHeaderWarningTextElement.getText()).toEqual('Minimum 2 locations needed for SD-WAN BASIC');	
    	expect(locations.addAnotherProductButton.isEnabled()).toBe(false);    	
    	expect(locations.nextButton.isEnabled()).toBe(false);
    }); 
    
 
    
    it('TC139528 - Same as Service Address', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	expect(locations.addLocationButton.isEnabled()).toBe(false);
    	locations.selectingSameAsCheckBox()
    	expect(locations.shippingAddElements.getAttribute('class')).toBe('hide-on-check');
    	expect(locations.addLocationButton.isEnabled()).toBe(true);
    	locations.selectingAddLocationsButton()
    	expect(locations.locationListHeaderElement.get(1).getText()).toEqual('LOCATION');
    	expect(locations.locationListHeaderElement.get(2).getText()).toEqual('SERVICE CONTACT');
    	expect(locations.locationListHeaderElement.get(3).getText()).toEqual('SERVICE ADDRESS');
    	expect(locations.locationListHeaderElement.get(4).getText()).toEqual('ACTION');
    	expect(locations.addAnotherProductButton.isEnabled()).toBe(true);    	
    	expect(locations.nextButton.isEnabled()).toBe(true);
    	expect(locations.addLocationButton.isEnabled()).toBe(false);
    }); 
    
    
     it('TC139532 - Locations list', function() {
    	locations.selectingBasicHaTwelveTerms()
    	for(i=1;i<3;i++)
    		{
    		locations.serviceContactDetails()
        	locations.serviceAddressDetails()
        	locations.shippingAddressDetails()
        	locations.selectingAddLocationsButton()
    		}
    	expect(locations.addedLocationList.count()).toBe(2);
    },80000);
     
    
    it('TC139537 - Validate CIVIC address', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
        locations.serviceAddressDetails()
        locations.shippingAddressDetails()
        expect(locations.addLocationButton.isEnabled()).toBe(true);
    });
    
    it('TC139540 - Invalid Address Format in Locations', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
        locations.invalidServiceAddressDetails()
        locations.shippingAddressDetails()
        expect(locations.addLocationButton.isEnabled()).toBe(false);
    	expect(locations.invalidAddressAlertElement.isPresent()).toBe(true);
    	expect(locations.invalidAddressAlertElement.getText()).toEqual('Invalid Address or Server not responding, Please try after few sometime.');
    });
    
    it('TC139812 - Fields available in locations added', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
       	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
       
    	expect(locations.addAnotherProductButton.isEnabled()).toBe(true);
    	expect(locations.nextButton.isEnabled()).toBe(true);
    	expect(locations.locationListHeaderElement.get(1).getText()).toEqual('LOCATION');
    	expect(locations.locationListHeaderElement.get(2).getText()).toEqual('SERVICE CONTACT');
    	expect(locations.locationListHeaderElement.get(3).getText()).toEqual('SERVICE ADDRESS');
    	expect(locations.locationListHeaderElement.get(4).getText()).toEqual('ACTION');
    	expect(locations.editAndDeleteIcons.isDisplayed()).toBeTruthy();
    	
    });
    
    
    it('TC139852 - Expand and Collapse added locations', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
       	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.firstAddressListExpandIcon.click();
    	expect(locations.expandedAddressElement.getAttribute('aria-expanded')).toBe('true');
    	locations.firstAddressListExpandIcon.click();
    	expect(locations.expandedAddressElement.getAttribute('aria-expanded')).toBe('false');
    });
    
    it('TC139853 - Edit Added Address', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
       	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.editAndDeleteIcons.first().click();
    	
    	expect(locations.serviceEmail.getText()).not.toBeNull();
    	expect(locations.serviceFirstName.getText()).not.toBeNull();
    	expect(locations.serviceLastName.getText()).not.toBeNull();
    	expect(locations.servicePhoneNo.getText()).not.toBeNull();
    	expect(locations.serviceExtn.getText()).not.toBeNull();
    	
    	expect(locations.updateLocationsButton.isDisplayed()).toBe(true);
    	locations.updateLocationsButton.click();
    	expect(locations.updateLocationsButton.isPresent()).toBe(false);
    });
    
    it('TC139854 - Invalid address updation', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
       	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.editAndDeleteIcons.first().click();
    	locations.serviceEmail.clear();
    	locations.serviceEmail.click();
    	locations.serviceEmail.sendKeys('b');
    	locations.serviceFirstName.click();
    	expect(locations.invalidEmailText.getText()).toEqual('Invalid email address') 	
    	expect(locations.updateLocationsButton.isEnabled()).toBe(false);
		
    });

    it('TC140180 - Delete Added Address of a product', function() {
    	locations.selectingBasicHaTwelveTerms()
    	for(i=1;i<3;i++)
   			{
    		locations.serviceContactDetails()
    		locations.serviceAddressDetails()
    		locations.shippingAddressDetails()
    		locations.selectingAddLocationsButton()
   			}
    	locations.deleteIcon.click()
    	expect(locations.addressDeletionMessageElement.getText()).toEqual('Are You Sure Want to Delete this Location Address');
    	locations.addressDeletionDeclining.click();
    	expect(locations.deleteWarningPopup.isPresent()).toBeFalsy();
   	   	expect(locations.addedLocationList.count()).toBe(2);
    	locations.deleteIcon.click();
    	locations.addressDeletionConfirming.click();
   	   	expect(locations.addedLocationList.count()).toBe(1);
   	   	
    });
   
    
    it('TC140181 - Pagination in Location Added', function() {
    	locations.selectingBasicHaTwelveTerms()
    	for(i=1;i<13;i++)
   			{
    		locations.serviceContactDetails()
    		locations.serviceAddressDetails()
    		locations.shippingAddressDetails()
    		locations.selectingAddLocationsButton()
   			}
    	
    	expect(locations.paginationElement.isDisplayed()).toBeTruthy();
    	expect(locations.firstPageLink.isDisplayed()).toBeTruthy();
    	expect(locations.previousPageLink.isDisplayed()).toBeTruthy();
    	expect(locations.nextPageLink.isDisplayed()).toBeTruthy();
    	expect(locations.lastPageLink.isDisplayed()).toBeTruthy();
   	   	expect(locations.pagesLink.count()).toBe(2);
   	   	
    });
    
    it('TC140182 - Click on Pagination', function() {
    	locations.selectingBasicHaTwelveTerms()
    	
    	for(i=1;i<13;i++)
   			{
    		locations.serviceContactDetails()
    		locations.serviceAddressDetails()
    		locations.selectingSameAsCheckBox()
    		locations.selectingAddLocationsButton()
   			}
    	
    	expect(locations.paginationElement.isDisplayed()).toBeTruthy();
    	locations.lastPageLink.$('.page-link').click();
    	expect(locations.firstPageLink.getAttribute('class')).toEqual('pagination-first page-item');
    	expect(locations.previousPageLink.getAttribute('class')).toEqual('pagination-prev page-item');
    	expect(locations.nextPageLink.getAttribute('class')).toEqual('pagination-next page-item disabled');
    	expect(locations.lastPageLink.getAttribute('class')).toEqual('pagination-last page-item disabled');
    	expect(locations.pagesLink.last().getAttribute('class')).toEqual('pagination-page page-item active')
   	   	expect(locations.addedLocationList.count()).toBe(2);
   	   	
    });
    
    
    it('TC140185 - Add Another Product', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.selectingSameAsCheckBox()
    	locations.selectingAddLocationsButton()
    	locations.addAnotherProductButton.click()
    	expect(browser.getCurrentUrl()).toContain('#/home');
    	
    });
    
    
    it('TC140186 - Adding locations for new product', function() {
    	locations.selectingBasicHaTwelveTerms()
    	expect(locations.locationHeaderProductName.getText()).toContain("SD-WAN BASIC HA (12 months, With My Own Transport)");
    	for(i=1;i<3;i++)
		{
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		}
    	expect(locations.addedLocationList.count()).toBe(2);
    	locations.addAnotherProductButton.click()
    	locations.selectingBasicTwelveTerms()
    	expect(locations.locationHeaderProductName.getText()).toContain("SD-WAN BASIC (12 months, With My Own Transport)");
    	for(i=1;i<3;i++)
		{
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		}
    	expect(locations.addedLocationList.count()).toBe(2);
    });
    
    it('TC140193 - Adding Same product using Add another product', function() {
    	
    	locations.selectingPremiumHaTwentyfourTerms()
    	expect(locations.locationHeaderProductName.getText()).toContain("SD-WAN PREMIUM HA (24 months, With My Own Transport)");
    	for(i=1;i<3;i++)
		{
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		}
    	expect(locations.addedLocationList.count()).toBe(2);
    	locations.addAnotherProductButton.click()
    	locations.selectingPremiumHaTwentyfourTerms()
    	expect(locations.locationHeaderProductName.getText()).toContain("SD-WAN PREMIUM HA (24 months, With My Own Transport)");
    	expect(locations.addedLocationList.count()).toBe(2);
    	for(i=1;i<3;i++)
		{
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		}
    	expect(locations.addedLocationList.count()).toBe(4);
    
    });
    
    it('TC140195 - Add Another product with CTL Transport', function() {
    	locations.selectingPremiumHaTwentyfourTerms()
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.addAnotherProductButton.click()
		locations.selectingPremiumTwentyfourTerms()
    	
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.addAnotherProductButton.click()
    	
    	locations.buildOrderPremiumCTLTransport()
    	expect(browser.getCurrentUrl()).toContain('#/contact-us');
    	contactUs.submittingContactUSDetails()
    	expect(browser.getCurrentUrl()).toContain('#/thanks');
		expect(contactUs.contactUsEnquirySubmissionElement.getText()).toEqual(contactUs.contactUsEnquiryText);
		expect(cart.cartProductCount.getText()).toEqual('2');
		cart.openingCart()
		expect(cart.firstProductLocationDetail.getText()).toEqual('1');
		expect(cart.secondProductLocationDetail.getText()).toEqual('1');
    	
    });
    
    it('TC142864 - Add Another Product Option - Disable after all the product has been selected.', function() {
    	   	
    	locations.selectingBasicTwelveTerms()
    	for(i=1;i<3;i++)
		{
		locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		}
    	locations.addAnotherProductButton.click()
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		
    	locations.addAnotherProductButton.click()
    	locations.selectingPremiumTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		
    	locations.addAnotherProductButton.click()
    	locations.selectingPremiumHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
		
    	expect(locations.addAnotherProductButton.isEnabled()).toBeFalsy();
    });
    
   
    it('TC142871 - Desired Due Date Field', function() {
    	locations.selectingPremiumTwelveTerms()
    	locations.datePicker.click();
	    locations.columns.click();   	
	    var today = new Date();
	    var dd = today.getDate()+1;
	    var mm = today.getMonth()+1; //January is 0!
	    var yyyy = today.getFullYear();
	    
	    if(dd>31){
 	    	dd = dd%31;
 	    	mm = mm+1;
 	    }
 	    if((dd>28)&&(mm=2)){
 	    	dd = dd%28;
 	    	mm = mm+1;
 	    }
	    if(dd<10) {
	        dd='0'+dd;
	    } 

	    if(mm<10) {
	        mm='0'+mm;
	    } 
 	   
 	    
 	    expect(locations.datePicker.getAttribute('value')).toEqual(mm + '-' + dd +'-' +yyyy);
 	    
    });
    
    
    it('TC142872 - Remarks field', function() {
    	locations.selectingPremiumTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.remarksField.sendKeys('This is remarks Field');

    	locations.selectingAddLocationsButton()
    	
    	locations.editAndDeleteIcons.first().click();
    	
    	expect(locations.remarksField.getAttribute('value')).toEqual('This is remarks Field');
    	
    });
    
    it('TC146279 - PO Address for Service and Shipping Address', function() {
    	locations.selectingPremiumTwelveTerms()
    	locations.POServiceAddressDetails()
    	expect(locations.civicOnlyText.getText()).toEqual('Only Civic Address format is allowed');
    	expect(locations.addLocationButton.isEnabled()).toBeFalsy();
    });
    */
});