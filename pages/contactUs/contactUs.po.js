var helper = require('../../helper'),
	faker = require('faker');


var ContactUs = function(){
	

	this.contactUsHeaderElement = element(by.css('body > app > main > contact-us > div > div.row > div > h2'));
	this.contactUsProductTitleCard = element(by.css('body > app > main > contact-us > div > div.card > div > div > div > h4'));
	this.breadcrumbs = element(by.css('.breadcrumb')).all(by.tagName('li'));
	this.homeBreadcrumbs = this.breadcrumbs.get(0);
	this.contactUsBreadcrumb = this.breadcrumbs.get(1);
	
	this.contactUsFirstName = element(by.css('#firstName'))
	this.contactUsLastName = element(by.css('#lastName'));
	this.contactUsJobTitle = element(by.css('#jobTitle'))	
	this.contactUsPhoneNumber= element(by.css('#phoneNumber'));
	this.contactUsPhoneNumberExtn = element(by.css('#primaryPhoneExtn'));
	this.contactUsEmail = element(by.css('#email'));
	this.contactUsCompanyName = element(by.css('#companyName'));
	this.contactUsComments = element(by.css('#comments'));
	this.submitButton = element(by.buttonText('Submit'));
	
	//control messages
	this.firstNameControlMessage = element(by.css('body > app > main > contact-us > div > section > div:nth-child(2) > div > form > div:nth-child(1) > div > control-messages > span'));
	this.secondNameControlMessage = element(by.css('body > app > main > contact-us > div > section > div:nth-child(2) > div > form > div:nth-child(2) > div > control-messages > span'));
	this.emailControlMessage = element(by.css('body > app > main > contact-us > div > section > div:nth-child(2) > div > form > div:nth-child(4) > div > control-messages > span'));
	this.phoneNumberControlMessage = element(by.css('body > app > main > contact-us > div > section > div:nth-child(2) > div > form > div:nth-child(3) > div.col-sm-3 > control-messages > span'));
	this.companyNameControlMessage = element(by.css('body > app > main > contact-us > div > section > div:nth-child(2) > div > form > div:nth-child(5) > div > control-messages > span'));
	
	//csr page elements
	this.contactUsEnquiryText = 'Thank you for your enquiry. Our sales representative will be reaching out to you shortly.';
	this.contactUsEnquirySubmissionElement = element(by.css('.alert.alert-info'));
	this.csrContactInfo = element(by.css('.card-block'));
	
	this.fillingContactUsDetails = function() {
		var randomFirstName = faker.Name.firstName();
	    var randomLastName = faker.Name.lastName();
	    var randomEmail = faker.Internet.email();
		var randomPhoneNumber = faker.PhoneNumber.phoneNumberFormat(10);
		var randomExtn = faker.random.number(9999);
		var randomCompanyName = faker.Company.companyName();
		
		this.contactUsFirstName.sendKeys(randomFirstName);
		this.contactUsLastName.sendKeys(randomLastName);
		this.contactUsJobTitle.sendKeys('Software Engineer');
		this.contactUsPhoneNumber.sendKeys(randomPhoneNumber);
		this.contactUsPhoneNumberExtn.sendKeys(randomExtn);
		this.contactUsEmail.sendKeys(randomEmail);
		this.contactUsCompanyName.sendKeys(randomCompanyName);
	}
	
	this.selectingSubmitButton = function(){
		helper.waitElementToBeClickable(this.submitButton)
		helper.scrollIntoView(this.submitButton)
		this.submitButton.click()
	}
	
	this.submittingContactUSDetails = function(){
		this.fillingContactUsDetails()
		this.selectingSubmitButton()
	}
}

module.exports = ContactUs;