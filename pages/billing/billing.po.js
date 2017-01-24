var helper = require('../../helper'),
    faker = require('faker');
	Locations = require('../locations/locations.po.js');
	
	var Billing = function(){
		
	var locations = new Locations();
	
	
	//header elements
	this.billingDetailsHeaderElement = element(by.css('body > app > main > billing > main > div > div > div > h2'));
	this.titleCard = element(by.css('body > app > main > billing > main > div > div > div > div > div > div > div:nth-child(1) > h4'));
	this.backBreadcrumb = element(by.css('.cyclops-icon.lg'));
	this.breadcrumbs = element(by.css('.breadcrumb')).all(by.tagName('li'));
	this.homeBreadcrumbs = this.breadcrumbs.get(0);
	this.locationsBreadcrumb = this.breadcrumbs.get(1);
	this.billingBreadcrumb = this.breadcrumbs.get(2);
	
	//Headquarters Address elements
	this.billingCompanyName = element(by.css('#companyName'))	
	this.billingAddressLine1 = element(by.css('#addressLine'));
	this.billingAddressLine2 = element(by.css('#street'));
	this.billingCountry = element(by.css('#country'))	
	this.billingState = element(by.css('#state'));
	this.billingCity = element(by.css('#city'));
	this.billingZipCode = element(by.css('#zipCode'));
	
	//Billing Contact Details elements
	this.billingFirstName = element(by.css('#firstName'))
	this.billingLastName = element(by.css('input[formcontrolname="lastName"]'));
	this.billingJobTitle = element(by.css('#jobTitle'))	
	this.billingPhoneNumber= element(by.css('#phoneNumber'));
	this.billingPhoneNumberExtn = element(by.css('#phoneNumberExtn'));
	this.billingEmail = element(by.css('#email'));
		
	this.headquartesAddressDetails = function() {
		var randomCompanyName = faker.Company.companyName();
		var randomAddressLine2 = faker.Address.secondaryAddress();
	
		this.billingCompanyName.sendKeys(randomCompanyName);
		this.billingAddressLine1.sendKeys('9042 w wisconsin ave');
		this.billingAddressLine2.sendKeys(randomAddressLine2);
		this.billingCity.sendKeys('lakewood');
		this.billingZipCode.sendKeys('80232');
		this.selectingBillingaddState(6)	
	}
	
	this.billingAddressDetails = function() {
		var randomFirstName = faker.Name.firstName();
	    var randomLastName = faker.Name.lastName();
	    var randomEmail = faker.Internet.email();
		var randomPhoneNumber = faker.PhoneNumber.phoneNumberFormat(10);
		var randomExtn = faker.random.number(9999);
		
		this.billingFirstName.sendKeys(randomFirstName);
		this.billingLastName.sendKeys(randomLastName);
		this.billingJobTitle.sendKeys('Software Engineer');
		this.billingPhoneNumber.sendKeys(randomPhoneNumber);
		this.billingPhoneNumberExtn.sendKeys(9999);
		this.billingEmail.sendKeys(randomEmail);
	}
	
	this.fillingBillingDetails = function(){
		this.headquartesAddressDetails()
		this.billingAddressDetails()
	}
	
	
	this.selectingBillingaddState = function(stateindex){
		helper.selectDropdownByNumber(this.billingState,stateindex)
	}
	
	this.goToBillingForBasicTwelveTerms = function() {
		locations.selectingBasicTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForPremiumHaTwelveTerms = function() {
		locations.selectingPremiumHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForPremiumTwelveTerms = function() {
		locations.selectingPremiumTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForBasicHaTwentyfourTerms = function() {
		locations.selectingBasicHaTwentyfourTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForBasicTwentyfourTerms = function() {
		locations.selectingBasicTwentyfourTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForPremiumHaTwentyfourTerms = function() {
		locations.selectingPremiumHaTwentyfourTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForPremiumTwentyfourTerms = function() {
		locations.selectingPremiumTwentyfourTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForBasicHaThirtysixTerms = function() {
		locations.selectingBasicHaThirtysixTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForBasicThirtysixTerms = function() {
		locations.selectingBasicThirtysixTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForPremiumHaThirtysixTerms = function() {
		locations.selectingPremiumHaThirtysixTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	this.goToBillingForPremiumThirtysixTerms = function() {
		locations.selectingPremiumThirtysixTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.selectingNextButton()
	}
	
	}
	
	module.exports = Billing;