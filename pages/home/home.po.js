var helper = require('../../helper')

var HomePage = function() {
	 
	//title and texts of notifications/error message
	this.pageUrl = '#/home';
	this.pageTitle = 'SDWAN Portal';
	this.termSelectionText = 'Please select the Term to proceed';
	this.packageSelectionText = 'Please select Product type and Transport option';
	
	//header elements
	this.headerElements = element(by.css('.nav.nav-tabs')).all(by.tagName('li'));
	this.descriptionHeaderElement = element(by.css('.nav.nav-tabs')).all(by.tagName('li')).get(0);
	this.featuresHeaderElement = element(by.css('.nav.nav-tabs')).all(by.tagName('li')).get(1);
	this.pricingHeaderElement = element(by.css('.nav.nav-tabs')).all(by.tagName('li')).get(2);
	this.descriptionLink = this.descriptionHeaderElement.element(by.tagName('a'));
	this.featuresLink = this.featuresHeaderElement.element(by.tagName('a'));
	this.pricingLink = this.pricingHeaderElement.element(by.tagName('a'));
	
	//description elements
	this.descriptionTitle = element(by.css('.card-title'));
	this.productDescription = element(by.css('.card-text.description'));
	this.descriptionTitleText = 'SD-WAN Product Description';
	this.productDescriptionText = 'Software-defined wide area networking (SD-WAN) is the next evolution of private networking. SD-WAN uses software to automate the ongoing configuration of edge routers and push traffic over a mix of private, wireless, and broadband network access.SD-WAN offers a real network solution for businesses trying to keep up with the impact a highly dynamic application environment has on their network quality of service. Our SD-WAN combines CenturyLink network design and management expertise with leading software controls and the ubiquity of any connection type or any vendor. The result is improved flexibility through greater bandwidth that delivers increased visibility into network usage and vastly simplified control. CenturyLink offers four popular configurations of SD-WAN as described below -- or a custom configuration can be set up via a sales agent.';
	
	//features elements
	this.featuresHeaders = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/div')).all(by.tagName('h3'));
	this.standardElement = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[1]/div[1]'));
	this.haElement = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[2]/div[1]'));
	this.securityElement = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[3]/div[1]'));
	this.tierElement = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[4]/div[1]'));
	this.standardBasic = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(1) > div:nth-child(2) > svg'));
	this.haBasic = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[2]/div[2]/p'));
	this.securityBasic = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[3]/div[2]/p'));
	this.tierBasic = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(4) > div:nth-child(2) > svg'));
	this.standardBasicHA = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(1) > div:nth-child(3) > svg'));
	this.haBasicHA = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(2) > div:nth-child(3) > svg'));
	this.securityBasicHA = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[3]/div[3]/p'));
	this.tierBasicHA = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(4) > div:nth-child(3) > svg'));
	this.standardPremium = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(1) > div:nth-child(4) > svg'));
	this.haPremium = element(by.xpath('//*[@id="features"]/div/div/div[1]/div/ul/li/div[2]/div[4]/p'));
	this.securityPremium = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(3) > div:nth-child(4) > svg'));
	this.tierPremium = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(4) > div:nth-child(4) > svg'));
	this.standardPremiumHA = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(1) > div:nth-child(5) > svg'));
	this.haPremiumHA = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(2) > div:nth-child(5) > svg'));
	this.securityPremium = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(3) > div:nth-child(5) > svg'));
	this.tierPremium = element(by.css('#features > div > div > div:nth-child(1) > div > ul > li > div:nth-child(4) > div:nth-child(5) > svg'));
	this.contactText = element(by.xpath('//*[@id="features"]/div/div/div[2]/div/p'));
	this.contactUsButton = element(by.css('.btn.btn-primary.pull-right.pointer-mouse'));

	//pricing elements
	this.productTermHeader = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/div')).all(by.tagName('h3'));
	this.basicHelpIcon = element(by.css('#tool-trigger0'));
	this.basicHaHelpIcon = element(by.css('#tool-trigger1'));
	this.premiumHelpIcon = element(by.css('#tool-trigger2'));
	this.premiumHaHelpIcon = element(by.css('#tool-trigger3'));
	this.availableTerms = element(by.css('#pricing > div > div:nth-child(2) > div:nth-child(1) > nav > ul')).all(by.tagName('li'));
	this.twelveMonths = this.availableTerms.get(0);
	this.twentyFourMonths = this.availableTerms.get(1);
	this.thirtySixMonths = this.availableTerms.get(2);
	this.selectTermTextElement = element(by.css('#pricing > div > div:nth-child(2) > div:nth-child(1) > nav > p > span'));
	this.taxTextElement = element(by.css('.text-right'));
	this.taxesText = '*Above prices does not include Taxes and Non recurring charges';
	this.taxText = '*Above prices does not include Taxes';
	this.packageSelectionTextElement = element(by.css('#pricing > div > p > span'));
	this.basicHelpIconHoverTextElement = element(by.css('#SDWANBASIC'));
	this.basicHelpIconHoverText = 'Software-defined wide area networking (SD-WAN) is the next evolution of private networking';
	this.basicHaHelpIconHoverTextElement = element(by.css('#SDWANBASICHA'));
	this.basicHaHelpIconHoverText = 'Software-defined wide area networking (SD-WAN) is the next evolution of private networking';
	this.premiumHelpIconHoverTextElement = element(by.css('#SDWANPREMIUM'));
	this.premiumHelpIconHoverText = 'Software-defined wide area networking (SD-WAN) is the next evolution of private networking';
	this.premiumHaHelpIconHoverTextElement = element(by.css('#SDWANPREMIUMHA'));
	this.premiumHaHelpIconHoverText = 'Software-defined wide area networking (SD-WAN) is the next evolution of private networking';
	this.basicOwnTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[1]/div/div[2]'));
	this.basicCtlTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[1]/div/div[3]'));
	this.basicHaOwnTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[2]/div/div[2]'));
	this.basicHaCtlTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[2]/div/div[3]'));
	this.premiumOwnTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[3]/div/div[2]'));
	this.premiumCtlTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[3]/div/div[3]'));
	this.premiumHaOwnTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[4]/div/div[2]'));
	this.premiumHaCtlTransport = element(by.xpath('//*[@id="pricing"]/div/div[3]/div/div[1]/ul/li[4]/div/div[3]'));
	this.pricingElement = element(by.css('.text-right.text-success'));
	this.buildOrderButton = element(by.css('.btn.btn-primary.btn-lg'));
	
	this.goToDescription = function() {
        helper.waitElementToBeClickable(this.descriptionHeaderElement)
        this.descriptionHeaderElement.click()
    }
	
	this.goToFeatures = function() {
        helper.waitElementToBeClickable(this.featuresHeaderElement)
        this.featuresHeaderElement.click()
    }
	
	this.goToPricing = function() {
        helper.waitElementToBeClickable(this.pricingHeaderElement)
        this.pricingHeaderElement.click()
    }
	
	this.goToContactUs = function() {
		helper.waitElementToBeClickable(this.contactUsButton)
        this.contactUsButton.click()
	}
	
	this.selectingTwelveMonths = function(){
		helper.waitElementToBeClickable(this.twelveMonths)
        this.twelveMonths.click()
	}
	
	this.selectingTwentyFourMonths = function(){
		helper.waitElementToBeClickable(this.twentyFourMonths)
        this.twentyFourMonths.click()
	}
	
	this.selectingThirtySixMonths = function(){
		helper.waitElementToBeClickable(this.thirtySixMonths)
        this.thirtySixMonths.click()
	}
	
	this.selectingBasicOwnTransport = function() {
		helper.waitElementToBeClickable(this.basicOwnTransport)
        this.basicOwnTransport.click()
	}
	
	this.selectingBasicCtlTransport = function() {
		helper.waitElementToBeClickable(this.basicCtlTransport)
        this.basicCtlTransport.click()
	}
	
	this.selectingBasicHaOwnTransport = function() {
		helper.waitElementToBeClickable(this.basicHaOwnTransport)
        this.basicHaOwnTransport.click()
	}
	
	this.selectingBasicHaCtlTransport = function() {
		helper.waitElementToBeClickable(this.basicHaCtlTransport)
        this.basicHaCtlTransport.click()
	}
	
	this.selectingPremiumOwnTransport = function() {
		helper.waitElementToBeClickable(this.premiumOwnTransport)
        this.premiumOwnTransport.click()
	}
	
	this.selectingPremiumCtlTransport = function() {
		helper.waitElementToBeClickable(this.premiumCtlTransport)
        this.premiumCtlTransport.click()
	}
	
	this.selectingPremiumHaOwnTransport = function() {
		helper.waitElementToBeClickable(this.premiumHaOwnTransport)
        this.premiumHaOwnTransport.click()
	}
	
	this.selectingPremiumHaCtlTransport = function() {
		helper.waitElementToBeClickable(this.premiumHaCtlTransport)
        this.premiumHaCtlTransport.click()
	}
	
	this.selectingbuildOrderButton = function() {
		helper.waitElementToBeClickable(this.buildOrderButton)
        this.buildOrderButton.click()
	}
	
}

module.exports = HomePage;
