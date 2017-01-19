var helper = require('../../helper'),
    HomePage = require('./home.po.js');

describe('Home page : ', function() {

	var homePage = new HomePage();
	
	beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
   
	
/*	it('TC-1 - Landing page verification', function() {
		 expect(browser.getTitle()).toEqual(homePage.pageTitle);
		 expect(browser.getCurrentUrl()).toContain('#/');
	}); 
    
    it('TC-2 - Home page content Verification', function() {
		
		expect(homePage.headerElements.count()).toEqual(3);
		expect(homePage.descriptionHeaderElement.getText()).toEqual('Description');
		expect(homePage.featuresHeaderElement.getText()).toEqual('Features');
		expect(homePage.pricingHeaderElement.getText()).toEqual('Pricing');
	});
    
    it('TC-3 - Home page content Verification', function() {
		expect(homePage.descriptionHeaderElement.isEnabled()).toBe(true);
		expect(homePage.featuresHeaderElement.isEnabled()).toBe(true);
		expect(homePage.pricingHeaderElement.isEnabled()).toBe(true);
		});
    
    it('TC-4 - Page Links Verification', function() {
    	homePage.goToFeatures()
		expect(homePage.featuresHeaderElement.getAttribute('class')).toEqual('active');
		expect(homePage.featuresLink.getAttribute('href')).toContain('#features');
		homePage.goToPricing()
		expect(homePage.pricingHeaderElement.getAttribute('class')).toEqual('active');
		expect(homePage.pricingLink.getAttribute('href')).toContain('#pricing');
		homePage.goToDescription()
		expect(homePage.descriptionHeaderElement.getAttribute('class')).toEqual('active');
		expect(homePage.descriptionLink.getAttribute('href')).toContain('#description');
		});	
    
    it('TC-5 - Page Links Verification', function() {
    	expect(homePage.descriptionHeaderElement.getAttribute('class')).toEqual('active');
		expect(homePage.descriptionTitle.getText()).toEqual(homePage.descriptionTitleText);
		expect(homePage.productDescription.getText()).toEqual(homePage.productDescriptionText);
		}); 
    
    it('TC-6 - Package content Verification', function() {
		
		expect(homePage.featuresHeaders.get(1).getText()).toEqual('SD-WAN BASIC');
		expect(homePage.featuresHeaders.get(2).getText()).toEqual('SD-WAN BASIC HA');
		expect(homePage.featuresHeaders.get(3).getText()).toEqual('SD-WAN PREMIUM');
		expect(homePage.featuresHeaders.get(4).getText()).toEqual('SD-WAN PREMIUM HA');
    	}); 
    
    it('TC-7 - Overall Features Content verification for Templates', function() {
		
		expect(homePage.standardElement.getText()).toEqual('Standard CPE');
		expect(homePage.haElement.getText()).toEqual('High Availability');
		expect(homePage.securityElement.getText()).toEqual('Security Package');
		expect(homePage.tierElement.getText()).toEqual('Tier 1 Support');
		});
    
    it('TC-9 - Features Content verification for BASIC', function() {
		
		expect(homePage.standardBasic.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haBasic.getText()).toEqual('-');
		expect(homePage.securityBasic.getText()).toEqual('-');
		expect(homePage.tierBasic.getAttribute('class')).toEqual('cyclops-icon md');
		}); 
    
    it('TC-10 - Features Content verification for BASIC HA', function() {
		
		expect(homePage.standardBasicHA.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haBasicHA.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.securityBasicHA.getText()).toEqual('-');
		expect(homePage.tierBasicHA.getAttribute('class')).toEqual('cyclops-icon md');
		}); 
    
    it('TC-11 - Features Content verification for Premium', function() {
		
		expect(homePage.standardPremium.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haPremium.getText()).toEqual('-');
		expect(homePage.securityPremium.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.tierPremium.getAttribute('class')).toEqual('cyclops-icon md');
	});
    
	it('TC-12 - Features Content verification for Premium HA', function() {
		
		expect(homePage.standardPremiumHA.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haPremiumHA.getAttribute('class')).toEqual('cyclops-icon md')
		expect(homePage.securityPremium.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.tierPremium.getAttribute('class')).toEqual('cyclops-icon md');
		}); 
    
    it('TC-14 - Contact Us button and text verification', function() {
		expect(homePage.contactText.getText()).toEqual('Need a Customized SD-WAN Service Offering?');
		expect(homePage.contactUsButton.isDisplayed()).toBe(true);
		}); 
    
    it('TC-15 - Contact us functionality and content verification', function() {
    	
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	
		browser.getCurrentUrl().then(function(newURL) {
				expect(newURL).toContain('contact-us');
			});
		});
    
    it('TC-18 - Pricing Grid content verification', function() {
		homePage.goToPricing()
		expect(homePage.productTermHeader.count()).toEqual(3);
		expect(homePage.productTermHeader.get(0).getText()).toEqual('PRODUCT OPTION');
		expect(homePage.productTermHeader.get(1).getText()).toEqual('WITH MY OWN TRANSPORT');
		expect(homePage.productTermHeader.get(2).getText()).toEqual('WITH CENTURYLINK TRANSPORT');
		expect(homePage.basicHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.basicHaHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.premiumHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.premiumHaHelpIcon.isDisplayed()).toBe(true);
		});
    
    it('TC-19 - Terms verification', function() {
    	homePage.goToPricing()
    	expect(homePage.availableTerms.count()).toEqual(3);
		expect(homePage.twelveMonths.getText()).toEqual('12m');
		expect(homePage.twentyFourMonths.getText()).toEqual('24m');
		expect(homePage.thirtySixMonths.getText()).toEqual('36m');
		}); 
    
    it('TC-20 - Default selection check', function() {
    	homePage.goToPricing()
		expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse');
	});
   
    it('TC-21 - Term functionality', function() {
    	homePage.goToPricing()
		expect(homePage.selectTermTextElement.getText()).toEqual(homePage.termSelectionText);
	}); 
    
    it('TC-23 - Text verification', function() {
    	homePage.goToPricing()
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.taxTextElement.getText()).toEqual(homePage.taxesText);
	}); 
    
    it('TC-24 - Term Selection', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse active')
    	homePage.selectingTwentyFourMonths()
		expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse active')
    	homePage.selectingThirtySixMonths()
		expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse active')
	}); 
    
    it('TC-25 - Text Verificaiton after selecting Term', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	expect(homePage.packageSelectionTextElement.getText()).toEqual(homePage.packageSelectionText);
		});
    
    it('TC-26 - Tax Text Verificaiton after selecting 12m Term', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	expect(homePage.taxTextElement.getText()).toEqual(homePage.taxesText);
		});
    
    it('TC-27 - Tax Text Verificaiton after selecting 24m Term', function() {
    	homePage.goToPricing()
    	homePage.selectingTwentyFourMonths()
    	expect(homePage.taxTextElement.getText()).toEqual(homePage.taxText);
		});
    
    it('TC-28 - Tax Text Verificaiton after selecting 36m Term', function() {
    	homePage.goToPricing()
    	homePage.selectingThirtySixMonths()
    	expect(homePage.taxTextElement.getText()).toEqual(homePage.taxText);
		}); 
    
    it('TC-29 - Help Icon verfication for all products', function() {
    	homePage.goToPricing()
    	expect(homePage.basicHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.basicHaHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.premiumHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.premiumHaHelpIcon.isDisplayed()).toBe(true);
		});
    
    it('TC-30 - Help Icon Hover Text verification for all products', function() {
    	homePage.goToPricing()
        browser.actions().mouseMove(homePage.basicHelpIcon).perform();
    	expect(homePage.basicHelpIconHoverTextElement.getAttribute('ng-reflect-value')).toEqual(homePage.basicHelpIconHoverText);
    	browser.actions().mouseMove(homePage.basicHaHelpIcon).perform();
    	expect(homePage.basicHaHelpIconHoverTextElement.getAttribute('ng-reflect-value')).toEqual(homePage.basicHaHelpIconHoverText);
    	browser.actions().mouseMove(homePage.premiumHelpIcon).perform();
    	expect(homePage.premiumHelpIconHoverTextElement.getAttribute('ng-reflect-value')).toEqual(homePage.premiumHelpIconHoverText);
    	browser.actions().mouseMove(homePage.premiumHaHelpIcon).perform();
    	expect(homePage.premiumHaHelpIconHoverTextElement.getAttribute('ng-reflect-value')).toEqual(homePage.premiumHaHelpIconHoverText);
		}); 
    
    it('TC-31 - Transport selection verification for all products', function() {
    	
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicOwnTransport()
    	expect(homePage.basicOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingBasicCtlTransport()
    	expect(homePage.basicCtlTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	expect(homePage.basicOwnTransport.getAttribute('class')).toEqual('col col-30 currency');
    	homePage.selectingBasicHaOwnTransport()
    	expect(homePage.basicHaOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingBasicHaCtlTransport()
    	expect(homePage.basicHaCtlTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingPremiumOwnTransport()
    	expect(homePage.premiumOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingPremiumCtlTransport()
    	expect(homePage.premiumCtlTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingPremiumHaOwnTransport()
    	expect(homePage.premiumHaOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingPremiumHaCtlTransport()
    	expect(homePage.premiumHaCtlTransport.getAttribute('class')).toEqual('col col-30 currency active');
		});
    
   	it('TC-32 - Multiple Term and transport Verification', function() {
   		homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse active')
    	homePage.selectingTwentyFourMonths()
    	expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse active')
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse')
    	homePage.selectingBasicOwnTransport()
    	expect(homePage.basicOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingBasicCtlTransport()
    	expect(homePage.basicCtlTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	expect(homePage.basicOwnTransport.getAttribute('class')).toEqual('col col-30 currency');
   	}); 
    
    it('TC-33 - Pricing amount verification', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicOwnTransport()
    	expect(homePage.pricingElement.getText()).toEqual('Pricing $150 / month');
    	homePage.selectingBasicCtlTransport()
    	expect(homePage.pricingElement.getText()).toEqual('Pricing $100 / month');
		}); 
    
    it('TC-34 - Build order button verification', function() {
    	homePage.goToPricing()
    	expect(homePage.buildOrderButton.isEnabled()).toBeFalsy();
    	homePage.selectingTwelveMonths()
    	expect(homePage.buildOrderButton.isEnabled()).toBeFalsy();
    	homePage.selectingBasicOwnTransport()
    	expect(homePage.buildOrderButton.isEnabled()).toBeTruthy();
    	}); 
    
    it('TC-35 - Building order with own transport', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicOwnTransport()
    	homePage.selectingbuildOrderButton()
    	expect(browser.getCurrentUrl()).toContain('locations');
    });
    
    it('TC-36 - Building order with CTL transport', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicCtlTransport()
    	homePage.selectingbuildOrderButton()
    	expect(browser.getCurrentUrl()).toContain('contact-us');
    }); 
    */
    
});
    