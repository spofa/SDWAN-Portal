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
	this.serviceDesiredDueDate = element(by.xpath('//*[@id="desiredDueDate"]/div/div[1]/span/button/span'));
	this.dateWidget = element(By.className("caltable"));
	//this.columns= this.dateWidget.all(By.tagName("td"));
	this.columns= element(By.css("td[data-event*='click']"));
	this.calNextMonthButton = element(By.xpath("//*[@id='desiredDueDate']/div/div[2]/table[1]/tbody/tr/td[1]/div/div[3]/button"));
	this.datePicker = element(by.id('datepicker'));
	
	//service address elements
	this.serviceaddLocationName = element(by.id('locationName'));
	this.serviceaddAddressLine1 = element(by.id('addressLine'));
	this.serviceaddAddressLine2 = element(by.id('street'));
	this.serviceaddCity = element(by.id('city'));
	this.serviceaddZipCode = element(by.id('zipCode'));
	this.serviceaddState = element(by.id('state'));
	this.serviceCountry = element(by.id('country'));
	
	//shipping address elements
	this.shippingAddElements = element(by.css('body > app > main > locations > main > div > section > locations-form > div:nth-child(2) > div > form > div:nth-child(3) > div:nth-child(3)'));
	this.shippingaddLocationName = element(by.id('locationNameS'));
	this.shippingaddAddressLine1 = element(by.id('addressLineS'));
	this.shippingaddAddressLine2 = element(by.id('streetS'));
	this.shippingaddCity = element(by.id('cityS'));
	this.shippingaddZipCode = element(by.id('zipCodeS'));
	this.sameAsCheckBox = element(by.id('sameAddress'));
	this.shippingaddState = element(by.id('stateS'));
	this.shippingCountry = element(by.id('countryS'));
	this.remarksField = element(by.id('locationComments'));
	
	//other elements
	this.locationsHeader = element(by.css('body > app > main > locations > main > div > div > div > h2'));
	this.locationBreadcrumb = element(by.css('body > app > main > locations > main > breadcrumb > div > div > div > ol > li:nth-child(2) > span'));
	this.homeBreadbrumb = element(by.linkText('Home'));
	this.backBreadcrumb = element(by.css('body > app > main > locations > main > div > div > div > div > div > div > div.col-sm-6.text-right > a > svg'));
	this.addLocationButton = element(by.buttonText('Add Location'));
	this.addAnotherProductButton = element(by.buttonText('Add Another Product Option'));
	this.nextButton = element(by.xpath('//div/button[text()="Next" and @class="btn btn-primary btn-lg"]'));
	this.updateLocationsButton = element(by.buttonText('Update Location'));
	this.locationHeaderProductName = element(by.css('body > app > main > locations > main > div > div > div > div > div > div > div:nth-child(1) > h4'))
	this.basicHeaderWarningTextElement = element(by.css('body > app > main > locations > main > div > div > div > div > div > div > div.col-sm-12'));
	this.basicHeaderWarningText = 'Minimum 2 locations needed for SD-WAN BASIC';
	this.invalidAddressAlertElement = element(by.css('body > app > main > locations > main > div > section > locations-form > div:nth-child(2) > div > form > div:nth-child(2) > div.alert.alert-danger > p'));
	
	this.locationListElement  = element(by.css('body > app > main > locations > main > div > section > locations-list > div > div:nth-child(1) > div > div > ul'));
	this.locationListHeaderElement= element(by.css('body > app > main > locations > main > div > section > locations-list > div > div:nth-child(1) > div > div > div')).all(by.tagName('h3'));
	this.addedLocationList = this.locationListElement.all(by.tagName('li'));
	this.editAndDeleteIcons = element.all(by.className('btn btn-primary btn-md btn-icon'));
	this.firstAddressListExpandIcon = this.addedLocationList.first().$('.col.col-5');
	this.expandedAddressElement = element(by.xpath('/html/body/app/main/locations/main/div/section/locations-list/div/div[1]/div/div/ul/li[1]/div/accordion/accordion-group/div[3]'))
	this.invalidEmailText = element(by.css('body > app > main > locations > main > div > section > locations-form > div:nth-child(2) > div > form > div:nth-child(1) > div:nth-child(1) > div > control-messages > span'));
	this.civicOnlyText = element(by.css('body > app > main > locations > main > div > section > locations-form > div:nth-child(2) > div > form > div:nth-child(2) > div:nth-child(4) > div > control-messages > span'));
	this.deleteIcon = this.editAndDeleteIcons.get(1).$('.cyclops-icon');
	
	this.addressDeletionMessageElement = element(by.className('modal-body'));
	this.addressDeletionConfirming = element(by.buttonText('Yes'));
	this.addressDeletionDeclining = element(by.buttonText('No'));
	this.deleteWarningPopup = element(by.className('modal-content'));
	
	this.paginationElement = element(by.css('.pagination.pagination-md'));
	this.pageLinks = this.paginationElement.all(by.tagName('li'));
	this.firstPageLink = this.pageLinks.get(0);
	this.previousPageLink = this.pageLinks.get(1);
	this.lastPageLink = this.pageLinks.last();
	this.nextPageLink = this.paginationElement.$('.pagination-next.page-item');
	this.pagesLink = this.paginationElement.$$('.pagination-page.page-item');
	
		
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
        /*this.dateWidget.click();
        
        if(this.columns.isPresent())
        	{
        	this.columns.click();
        	}else
        		{
        		this.calNextMonthButton.click();
        		this.columns.click();
        		}*/
        
        this.datePicker.click();
	    this.columns.click();
	     
        
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
		this.serviceaddAddressLine1.sendKeys('9042 w wisconsin ave');
		this.serviceaddAddressLine2.sendKeys(randomAddressLine2);
		this.serviceaddCity.sendKeys('lakewood');
		this.serviceaddZipCode.sendKeys('80232');
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
		this.shippingaddAddressLine1.sendKeys('22 E MONUMENT ST')
		this.shippingaddAddressLine2.sendKeys(randomAddressLine2_1);
		this.shippingaddCity.sendKeys('COLORADO SPRINGS');
		this.shippingaddZipCode.sendKeys('80903');
		this.selectingShippingaddState()
		delete randomLocationName;
		delete randomAddressLine1_1;
		delete randomAddressLine2_1;
		delete randomCity_1;
		delete randomZipCode_1;
	}
	
	this.invalidServiceAddressDetails = function() {
		
		var randomCity = faker.Address.city();
		var randomLocationName = faker.Address.streetName();
		var randomAddressLine1 = faker.Address.streetAddress();
		var randomAddressLine2 = faker.Address.secondaryAddress();
		var randomZipCode = faker.Address.zipCode();
		var randomState = faker.Address.usState();
		
		this.serviceaddLocationName.sendKeys(randomLocationName);
		this.serviceaddAddressLine1.sendKeys('abcd');
		this.serviceaddAddressLine2.sendKeys(randomAddressLine2);
		this.serviceaddCity.sendKeys('lakewood');
		this.serviceaddZipCode.sendKeys('80232');
		this.selectingServiceaddState()	
		delete randomLocationName;
		delete randomAddressLine1;
		delete randomAddressLine2;
		delete randomCity;
		delete randomZipCode;
	}
	
	this.POServiceAddressDetails = function() {
		
		var randomCity = faker.Address.city();
		var randomLocationName = faker.Address.streetName();
		var randomAddressLine1 = faker.Address.streetAddress();
		var randomAddressLine2 = faker.Address.secondaryAddress();
		var randomZipCode = faker.Address.zipCode();
		var randomState = faker.Address.usState();
		
		this.serviceaddLocationName.sendKeys(randomLocationName);
		this.serviceaddAddressLine1.sendKeys('p.o.Box');
		this.serviceaddAddressLine2.sendKeys(randomAddressLine2);
		this.serviceaddCity.sendKeys('lakewood');
		this.serviceaddZipCode.sendKeys('80232');
		this.selectingServiceaddState()	
		delete randomLocationName;
		delete randomAddressLine1;
		delete randomAddressLine2;
		delete randomCity;
		delete randomZipCode;
	}
	
	
	this.selectingSameAsCheckBox = function(){
		//helper.waitForCheckboxToBeChecked(this.sameAsCheckBox)
		this.sameAsCheckBox.click()
	}
	
	this.selectingServiceaddState = function(){
		helper.selectDropdownByNumber(this.serviceaddState,6)
	}
	
	this.selectingShippingaddState = function(){
		helper.selectDropdownByNumber(this.shippingaddState,6)
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
		homePage.selectingBasicOrderConfirming()
	}
	
	this.selectingBasicTwentyfourTerms = function() {
		homePage.goToPricing()
		homePage.selectingTwentyFourMonths()
		homePage.selectingBasicOwnTransport()
		homePage.selectingbuildOrderButton()
		homePage.selectingBasicOrderConfirming()
	}
	
	this.selectingBasicThirtysixTerms = function() {
		homePage.goToPricing()
		homePage.selectingThirtySixMonths()
		homePage.selectingBasicOwnTransport()
		homePage.selectingbuildOrderButton()
		homePage.selectingBasicOrderConfirming()
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
	
	this.buildOrderBasicCTLTransport = function(){
		homePage.selectingBasicCtlTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.buildOrderBasicHaCTLTransport = function(){
		homePage.selectingBasicHaCtlTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.buildOrderPremiumCTLTransport = function(){
		homePage.selectingPremiumCtlTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.buildOrderPremiumHaCTLTransport = function(){
		homePage.selectingPremiumHaCtlTransport()
		homePage.selectingbuildOrderButton()
	}
	
	this.selectingNextButton= function(){
		helper.waitElementToBeClickable(this.nextButton)
		helper.scrollIntoView(this.nextButton)
		
		this.nextButton.click()
	}
}

module.exports = Locations;