var helper = require('../../helper');

var OrderSummary = function(){
	
	this.orderSummarHeaderName = element(by.css('body > app > main > order-summary-detail > div > div > div.col-sm-4 > h2'));
	this.backBreadCrumb = element(by.css('.cyclops-icon.lg'));
	this.headerElements = element(by.css('body > app > main > order-summary-detail > div > section > div > div > div:nth-child(1) > div')).all(by.tagName('h3'));
	this.productHeaderElement = this.headerElements.get(0);
	this.termHeaderElement = this.headerElements.get(1);
	this.locationHeaderElement = this.headerElements.get(2);
	this.dueDateHeaderElement = this.headerElements.get(3);
	this.unitPriceHeaderElement = this.headerElements.get(4);
	this.totalHeaderElement = this.headerElements.get(5);
	
	this.continueButton = element(by.buttonText('Continue'));	
	this.locationFillingPopupOkButton = element(by.buttonText('Ok'));	
	
	this.nrcHeaderElements = element(by.css('body > app > main > order-summary-detail > div > section > div > div > div:nth-child(2) > div')).all(by.tagName('h3'));
	this.packageHeaderElement = this.nrcHeaderElements.get(0);
	this.nrcTermHeaderElement = this.nrcHeaderElements.get(1);
	this.nrcLocationHeaderElement = this.nrcHeaderElements.get(2);
	this.nrcPriceHeaderElement = this.nrcHeaderElements.get(3);
	this.nrcTotalHeaderElement = this.nrcHeaderElements.get(4);
	
	//product info
	this.productInfoDetails = element(by.css('body > app > main > order-summary-detail > div > section > div > div > div:nth-child(1) > ul')).all(by.tagName('li'));
	this.productTotalFooter = this.productInfoDetails.last();
	this.productTotalText = this.productTotalFooter.element(by.css('.col-sm-10.text-right'));
	this.productTotalCurrencyValue = this.productTotalFooter.element(by.css('.col-sm-2.text-right'));
	this.firstProductInfoDetails = this.productInfoDetails.first();
	
}
module.exports = OrderSummary;