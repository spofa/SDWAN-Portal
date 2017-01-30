var helper = require('../../helper'),
	HomePage = require('../home/home.po.js'),
	ContactUs = require('./contactUs.po.js');


describe('Contact Us Page : ', function() {
	
	var contactUs = new ContactUs();
	var homePage = new HomePage();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
    /*
    it('TC140391 - Contact US Page Navigation', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	expect(browser.getCurrentUrl()).toContain('#/contact-us');
    });
    
    it('TC140395 - Contact US - Available Fields Verification', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	expect(contactUs.contactUsFirstName.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsLastName.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsPhoneNumber.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsPhoneNumberExtn.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsEmail.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsCompanyName.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsJobTitle.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsComments.isDisplayed()).toBeTruthy();
		expect(contactUs.submitButton.isEnabled()).toBeFalsy();
    });
    
    it('TC140396 - First and Last Name field validation', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	contactUs.contactUsFirstName.sendKeys('maran.m');
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.firstNameControlMessage.isPresent()).toBeFalsy();
    	contactUs.contactUsFirstName.clear();
    	contactUs.contactUsFirstName.sendKeys("maran'm");
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.firstNameControlMessage.isPresent()).toBeFalsy();
    	contactUs.contactUsFirstName.clear();
    	contactUs.contactUsFirstName.sendKeys("maran@m");
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.firstNameControlMessage.getText()).toEqual('Invalid Name');
    	contactUs.contactUsFirstName.clear();
    	contactUs.contactUsFirstName.sendKeys("abcdefghijklmnopqrstuvwxyzabcd");
    	expect(contactUs.contactUsFirstName.getAttribute('value')).toEqual('abcdefghijklmnopqrstuvwxyzab');
   		contactUs.contactUsLastName.sendKeys('maran.m');
   		contactUs.contactUsJobTitle.click();
    	expect(contactUs.secondNameControlMessage.isPresent()).toBeFalsy();
    	contactUs.contactUsLastName.clear();
    	contactUs.contactUsLastName.sendKeys("maran'm");
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.secondNameControlMessage.isPresent()).toBeFalsy();
    	contactUs.contactUsLastName.clear();
    	contactUs.contactUsLastName.sendKeys("maran@m");
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.secondNameControlMessage.getText()).toEqual('Invalid Name');
    	contactUs.contactUsLastName.clear();
    	contactUs.contactUsLastName.sendKeys("abcdefghijklmnopqrstuvwxyzabcd");
    	expect(contactUs.contactUsLastName.getAttribute('value')).toEqual('abcdefghijklmnopqrstuvwxyzab');
    });
    
    it('TC140403 - Primary Phone Number and Email field validation', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	contactUs.contactUsEmail.sendKeys('adc@i.co.in');
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.emailControlMessage.isPresent()).toBeFalsy();
    	contactUs.contactUsEmail.clear();
    	contactUs.contactUsEmail.sendKeys('abc@gmail_com');
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.emailControlMessage.getText()).toEqual('Invalid email address');
    	contactUs.contactUsPhoneNumber.sendKeys('98453453678');
    	expect(contactUs.contactUsPhoneNumber.getAttribute('value')).toEqual('(984) 534-5367');
    });
    
    it('TC140404 - Mandatory Field Validation', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	contactUs.contactUsFirstName.click();
    	contactUs.contactUsLastName.click();
    	contactUs.contactUsEmail.click();
    	contactUs.contactUsCompanyName.click();
    	contactUs.contactUsPhoneNumber.click();
    	contactUs.contactUsJobTitle.click();
    	expect(contactUs.firstNameControlMessage.getText()).toEqual('Required');
    	expect(contactUs.secondNameControlMessage.getText()).toEqual('Required');
    	expect(contactUs.emailControlMessage.getText()).toEqual('Required');
    	expect(contactUs.phoneNumberControlMessage.getText()).toEqual('Required');
    	expect(contactUs.companyNameControlMessage.getText()).toEqual('Required');
    })
    
    it('TC140411 - Contact US - Enquiry Submission', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	contactUs.fillingContactUsDetails()
		contactUs.selectingSubmitButton()
		expect(browser.getCurrentUrl()).toContain('#/thanks');
		expect(contactUs.contactUsEnquirySubmissionElement.getText()).toEqual(contactUs.contactUsEnquiryText);
    });
   
    it('TC141638 - Fields available in CSR Message Screen', function() {
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	contactUs.fillingContactUsDetails()
		contactUs.selectingSubmitButton()
		expect(browser.getCurrentUrl()).toContain('#/thanks');
		expect(contactUs.contactUsEnquirySubmissionElement.getText()).toEqual(contactUs.contactUsEnquiryText);
		contactUs.csrContactInfo.getText().then(function(text) {
		expect(text).toEqual('CenturyLink Cloud Office' +'\n' + '1100 112th Avenue NE Suite 400.' + '\n' + 'Bellevue, WA 98004' +'\n' + 'View Map' + '\n' + 'General: 1.877.388.4373' + '\n' +'Sales: 1.855.388.1260');	
		});
    });
    */
    
});