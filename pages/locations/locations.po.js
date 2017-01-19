var helper = require('../../helper'),
    faker = require('faker');
	HomePage = require('../home/home.po.js');
	
var Locations = function(){
	
	var homePage = new HomePage();
	
	//random generates from 'faker' library
	
	
	
	var randomIndex = faker.random.number(20);
	
	
	
	//service contact elements
	this.serviceEmail = element(by.id('email'));
	this.serviceFirstName = element(by.id('firstName'));
	this.serviceLastName = element(by.id('lastName'));
	this.servicePhoneNo = element(by.id('phoneNumber'));
	this.serviceExtn = element(by.id('phoneNumberExtn'));
	
	//service address elements
	this.serviceaddLocationName = element(by.id('locationName'));
	this.serviceaddAddressLine1 = element(by.id('addressLine'));
	this.serviceaddAddressLine2 = element(by.id('street'));
	this.serviceaddCity = element(by.xpath('//*[@id="city"]'));
	this.serviceaddZipCode = element(by.id('zipCode'));
	this.serviceaddState = element(by.id('state'));
	
	//shipping address elements
	this.shippingaddLocationName = element(by.id('locationNameS'));
	this.shippingaddAddressLine1 = element(by.id('addressLineS'));
	this.shippingaddAddressLine2 = element(by.id('streetS'));
	this.shippingaddCity = element(by.css('body > app > main > locations > main > div > section > locations-form > div:nth-child(2) > div > form > div:nth-child(3) > div:nth-child(3) > div:nth-child(5) > div > div > div.col-sm-5 > div > input'));
	this.shippingaddZipCode = element(by.id('zipCodeS'));
	this.sameAsCheckBox = element(by.xpath('/html/body/app/main/locations/main/div/section/locations-form/div[2]/div/form/div[3]/div[1]/div/div/label/input'));
	this.shippingaddState = element(by.id('stateS'));
	
	//other elements
	this.locationsHeader = element(by.css('body > app > main > locations > main > div > div > div > h2'));
	this.locationBreadcrumb = element(by.css('body > app > main > locations > main > breadcrumb > div > div > div > ol > li.active'));
	this.homeBreadbrumb = element(by.linkText('Home'));
	this.backBreadcrumb = element(by.css('body > app > main > locations > main > div > div > div > div > div > div > div.col-sm-6.text-right > a > svg'));
	this.addLocationButton = element(by.buttonText('Add Location'));
	this.addAnotherProductButton = element(by.buttonText('Add Another Product Option'));
	this.proceedButton = element(by.buttonText('Proceed'));

	this.locationListElement  = element(by.css('body > app > main > locations > main > div > section > locations-list > div > div:nth-child(1) > div > div'));
	this.locationListHeaderElement= this.locationListElement.element(by.tagName('div')).all(by.tagName('h3'));
	this.addedLocationList = this.locationListElement.all(by.tagName('ul'));
	
	
	this.serviceContactDetails = function() {
		var randomFirstName = faker.Name.firstName();
	    var randomLastName = faker.Name.lastName();
	    var randomEmail = faker.Internet.email();
		var randomPhoneNumber = faker.PhoneNumber.phoneNumberFormat(10);
		var randomExtn = faker.random.number(9999);
		
        this.serviceEmail.sendKeys(randomEmail);
        this.serviceFirstName.sendKeys(randomFirstName);
        this.serviceLastName.sendKeys(randomLastName);
        this.servicePhoneNo.sendKeys(randomPhoneNumber);
        this.serviceExtn.sendKeys(randomExtn);
        
        delete randomEmail;
        delete randomFirstName;
        delete randomLastName;
        delete randomPhoneNumber;
        delete randomExtn;
    }
	
	this.serviceAddressDetails = function() {
		
		var randomCity = faker.Address.city();
		var randomLocationName = faker.Address.streetName();
		var randomAddressLine1 = faker.Address.streetAddress();
		var randomAddressLine2 = faker.Address.secondaryAddress();
		var randomZipCode = faker.Address.zipCode();
		var randomState = faker.Address.usState();
		
		this.serviceaddLocationName.sendKeys(randomLocationName);
		this.serviceaddAddressLine1.sendKeys(randomAddressLine1);
		this.serviceaddAddressLine2.sendKeys(randomAddressLine2);
		this.serviceaddCity.sendKeys(randomCity);
		this.serviceaddZipCode.sendKeys(randomZipCode);
		this.selectingServiceaddState()	
		delete randomLocationName;
		delete randomAddressLine1;
		delete randomAddressLine2;
		delete randomCity;
		delete randomZipCode;
	}
	
	this.shippingAddressDetails = function() {
		
		var randomCity_1 = faker.Address.city();
		var randomLocationName_1 = faker.Address.streetName();
		var randomAddressLine1_1 = faker.Address.streetAddress();
		var randomAddressLine2_1 = faker.Address.secondaryAddress();
		var randomZipCode_1 = faker.Address.zipCode();
		var randomState_1 = faker.Address.usState();
		
		this.shippingaddLocationName.sendKeys(randomLocationName_1);
		this.shippingaddAddressLine1.sendKeys(randomAddressLine1_1)
		this.shippingaddAddressLine2.sendKeys(randomAddressLine2_1);
		this.shippingaddCity.sendKeys(randomCity_1);
		this.shippingaddZipCode.sendKeys(randomZipCode_1);
		this.selectingShippingaddState()
		delete randomLocationName;
		delete randomAddressLine1_1;
		delete randomAddressLine2_1;
		delete randomCity_1;
		delete randomZipCode_1;
	}
	
	this.selectingSameAsCheckBox = function(){
		//helper.waitForCheckboxToBeChecked(this.sameAsCheckBox)
		this.sameAsCheckBox.click()
	}
	
	this.selectingServiceaddState = function(){
		helper.selectDropdownByNumber(this.serviceaddState,randomIndex)
	}
	
	this.selectingShippingaddState = function(){
		helper.selectDropdownByNumber(this.shippingaddState,randomIndex)
	}
	
	this.selectingAddLocationsButton = function() {
		helper.waitElementToBeClickable(this.addLocationButton)
        this.addLocationButton.click()
	}
	
	this.selectingBasicTwelveTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwelveMonths()
		homePage.selectingBasicOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingBasicTwentyfourTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwentyFourMonths()
		homePage.selectingBasicOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingBasicThirtysixTerms = function() {
		homePage.goToPricing()
		homePage.selectingThirtySixMonths()
		homePage.selectingBasicOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingBasicHaTwelveTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwelveMonths()
		homePage.selectingBasicHaOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingBasicHaTwentyfourTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwentyFourMonths()
		homePage.selectingBasicHaOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingBasicHaThirtysixTerms = function() {
		homePage.goToPricing()
		homePage.selectingThirtySixMonths()
		homePage.selectingBasicHaOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingPremiumTwelveTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwelveMonths()
		homePage.selectingPremiumOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingPremiumTwentyfourTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwentyFourMonths()
		homePage.selectingPremiumOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingPremiumThirtysixTerms = function() {
		homePage.goToPricing()
		homePage.selectingThirtySixMonths()
		homePage.selectingPremiumOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingPremiumHaTwelveTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwelveMonths()
		homePage.selectingPremiumHaOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingPremiumHaTwentyfourTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwentyFourMonths()
		homePage.selectingPremiumHaOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingPremiumHaThirtysixTerms = function() {
		homePage.goToPricing()
		homePage.selectingThirtySixMonths()
		homePage.selectingPremiumHaOwnTransport()
		homePage.selectingbuildOrderButton()
	}
	
	
}

module.exports = Locations;