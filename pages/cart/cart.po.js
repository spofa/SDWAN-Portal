var helper = require('../../helper');


var Cart = function(){
	
	this.shoppingCartField = element(by.css('.nav.navbar-nav.navbar-right.navbar-account'));
	this.shoppingCartICon = element(by.css('.cyclops-icon.support'));
	this.cartProductCount = element(by.css('body > app > ctl-nav-bar > nav > div > div.collapse.navbar-collapse > ul > li:nth-child(2) > a > span'));
	this.cartDropDown = element(by.css('#NavDropdown'));
	this.cartTotalAmountField = element(by.css('#CardFooter'));
	this.cartHeaderTitle = element(by.css('#ShoppingCart'));
	this.viewDetails = element(by.linkText('View Details...'));
	this.cartTotalTextElement = element(by.css('#Total'));
	this.cartDetailsHeaders = element(by.css('#Description')).all(by.tagName('h3'));
	this.cartProductDetails = element.all(by.css('#List1'));
	this.firstProductDetails = this.cartProductDetails.get(0).all(by.tagName('div'));
	this.firstProductNameDetail = this.firstProductDetails.get(0);
	this.firstProductTermDetail = this.firstProductDetails.get(1);
	this.firstProductLocationDetail = this.firstProductDetails.get(2);
	this.secondProductDetails = this.cartProductDetails.get(1).all(by.tagName('div'));
	this.secondProductNameDetail = this.secondProductDetails.get(0);
	this.secondProductTermDetail = this.secondProductDetails.get(1);
	this.secondProductLocationDetail = this.secondProductDetails.get(2);
	
	this.openingCart = function(){
		helper.waitElementToBeClickable(this.shoppingCartField)
		this.shoppingCartField.click();
	}
	
	this.selectingCartViewDetails = function() {
		helper.waitElementToBeClickable(this.viewDetails)
		this.viewDetails.click();
	}
}
module.exports = Cart;