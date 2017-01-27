var helper = require('../../helper'),
    HomePage = require('./home.po.js'),
	Locations = require('../locations/locations.po.js'),
	ContactUs = require('../contactUs/contactUs.po.js'),
	Cart = require('../cart/cart.po.js');

describe('Home page : ', function() {

	var homePage = new HomePage();
	var locations = new Locations();
	var cart = new Cart();
	var contactUs = new ContactUs();
	
	beforeEach(function() {
        browser.get(browser.params.url);
        browser.manage().window().maximize();
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });
   
    /*it('TC134540 - SDWAN Home Page', function() {
		 expect(browser.getTitle()).toEqual(homePage.pageTitle);
		 expect(browser.getCurrentUrl()).toContain('#/');
	}); 
    
    it('TC134541 - Fields available in Homepage header', function() {
		
		expect(homePage.headerElements.count()).toEqual(3);
		expect(homePage.descriptionHeaderElement.getText()).toEqual('Overview');
		expect(homePage.featuresHeaderElement.getText()).toEqual('Features');
		expect(homePage.pricingHeaderElement.getText()).toEqual('Pricing');
	});
    
    it('TC134542 - Header Tabs', function() {
		expect(homePage.descriptionHeaderElement.isEnabled()).toBe(true);
		expect(homePage.featuresHeaderElement.isEnabled()).toBe(true);
		expect(homePage.pricingHeaderElement.isEnabled()).toBe(true);
		});
    
    it('TC134543 - Click on the Header Tabs', function() {
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
    
    it('TC134545 - Product Description', function() {
    	expect(homePage.descriptionHeaderElement.getAttribute('class')).toEqual('active');
		expect(homePage.descriptionTitle.getText()).toContain(homePage.descriptionTitleText);
		expect(homePage.productDescriptionPara1.getText()).toEqual(homePage.productDescriptionPara1Text);
		expect(homePage.productDescriptionPara2.getText()).toEqual(homePage.productDescriptionPara2Text);
		expect(homePage.productDescriptionPara3.getText()).toEqual(homePage.productDescriptionPara3Text);
		}); 
    
    it('TC134546 - Types of Packages', function() {
		
		expect(homePage.featuresHeaders.get(1).getText()).toEqual('SD-WAN BASIC');
		expect(homePage.featuresHeaders.get(2).getText()).toEqual('SD-WAN BASIC HA');
		expect(homePage.featuresHeaders.get(3).getText()).toEqual('SD-WAN PREMIUM');
		expect(homePage.featuresHeaders.get(4).getText()).toEqual('SD-WAN PREMIUM HA');
    	}); 
    
    it('TC134554 - Features available in all the packages', function() {
		
		expect(homePage.standardElement.getText()).toEqual('Standard CPE');
		expect(homePage.haElement.getText()).toEqual('High Availability');
		expect(homePage.securityElement.getText()).toEqual('Security Package');
		expect(homePage.tierElement.getText()).toEqual('Tier 1 Support');
		}); 
    
    it('TC134555 - Features available in BASIC package', function() {
		
		expect(homePage.standardBasic.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haBasic.getText()).toEqual('-');
		expect(homePage.securityBasic.getText()).toEqual('-');
		expect(homePage.tierBasic.getAttribute('class')).toEqual('cyclops-icon md');
		}); 
    
    it('TC134556 - Features available in BASIC HA package', function() {
		
		expect(homePage.standardBasicHA.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haBasicHA.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.securityBasicHA.getText()).toEqual('-');
		expect(homePage.tierBasicHA.getAttribute('class')).toEqual('cyclops-icon md');
		}); 
    
    it('TC134558 - Features available in PREMIUM package', function() {
		
		expect(homePage.standardPremium.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haPremium.getText()).toEqual('-');
		expect(homePage.securityPremium.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.tierPremium.getAttribute('class')).toEqual('cyclops-icon md');
	});
    
	it('TC134560 - Features available in PREMIUM HA package', function() {
		
		expect(homePage.standardPremiumHA.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.haPremiumHA.getAttribute('class')).toEqual('cyclops-icon md')
		expect(homePage.securityPremium.getAttribute('class')).toEqual('cyclops-icon md');
		expect(homePage.tierPremium.getAttribute('class')).toEqual('cyclops-icon md');
		}); 
    
	it('TC134562 - Features Grid', function() {
		homePage.goToFeatures()
		expect(homePage.featuresGrid.isEnabled()).toBeTruthy();
		expect(homePage.featuresGrid.click().isSelected()).toBeFalsy();
		
	}); 
	
    it('TC134563 - Contact Us button and Text verification', function() {
		expect(homePage.contactText.getText()).toEqual('Need a Customized SD-WAN Service Offering?');
		expect(homePage.contactUsButton.isDisplayed()).toBe(true);
		expect(homePage.contactUsButton.isEnabled()).toBe(true);
		}); 
    
    it('TC134565 - Contact Us Functionality', function() {
    	
    	homePage.goToFeatures()
    	homePage.goToContactUs()
    	
		browser.getCurrentUrl().then(function(newURL) {
				expect(newURL).toContain('#/contact-us');
			});
		
		expect(contactUs.contactUsFirstName.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsLastName.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsPhoneNumber.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsPhoneNumberExtn.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsEmail.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsCompanyName.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsJobTitle.isDisplayed()).toBeTruthy();
		expect(contactUs.contactUsComments.isDisplayed()).toBeTruthy();
		expect(contactUs.submitButton.isEnabled()).toBeFalsy();
		
		contactUs.fillingContactUsDetails()
		expect(contactUs.submitButton.isEnabled()).toBeTruthy();
		contactUs.selectingSubmitButton()
		expect(browser.getCurrentUrl()).toContain('#/thanks');
		expect(contactUs.contactUsEnquirySubmissionElement.getText()).toEqual(contactUs.contactUsEnquiryText);
		
		});
    
    it('TC134569 - Features available in Pricing Module', function() {
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
    
    it('TC134570 - Term options checking', function() {
    	homePage.goToPricing()
    	expect(homePage.availableTerms.count()).toEqual(3);
		expect(homePage.twelveMonths.getText()).toEqual('12m');
		expect(homePage.twentyFourMonths.getText()).toEqual('24m');
		expect(homePage.thirtySixMonths.getText()).toEqual('36m');
		}); 
    
    it('TC134573 - Default Selection of Term', function() {
    	homePage.goToPricing()
		expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse');
		expect(homePage.twelveMonths.isSelected()).toBe(false)
	});
   
    it('TC134576 - Warning Text for Term Selection', function() {
    	homePage.goToPricing()
		expect(homePage.selectTermTextElement.getText()).toEqual(homePage.termSelectionText);
    	homePage.selectingTwelveMonths()
    	expect(homePage.selectTermTextElement.isPresent()).toBe(false);
	}); 
   
    it('TC134578 - Term Functionality Check', function() {
    	homePage.goToPricing()
    	homePage.selectingBasicCtlTransport
    	expect(homePage.basicCtlTransport.isSelected()).toBe(false);
    	expect(homePage.basicCtlTransport.getAttribute('class')).toEqual('col col-30 currency disabled');
    	homePage.selectingTwelveMonths()
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse active');
    	homePage.selectingTwentyFourMonths()
		expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse active');
    	homePage.selectingThirtySixMonths()
		expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse active');
	}); 
    
    it('TC134580 - Warning Text for Product Selection', function() {
    	homePage.goToPricing()
    	expect(homePage.selectTermTextElement.getText()).toEqual(homePage.termSelectionText);
    	homePage.selectingTwelveMonths()
    	expect(homePage.selectTermTextElement.isPresent()).toBe(false);
    	expect(homePage.packageSelectionTextElement.getText()).toEqual(homePage.packageSelectionText);
		});
    
    
    it('TC134584 - NRC text verification for 12m and 24m', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	expect(homePage.taxTextElement.getText()).toEqual(homePage.taxesText);
    	homePage.selectingTwentyFourMonths()
    	expect(homePage.taxTextElement.getText()).toEqual(homePage.taxesText);
		});
    
    it('TC134607 - NRC text for 36M', function() {
    	homePage.goToPricing()
    	homePage.selectingThirtySixMonths()
    	expect(homePage.taxTextElement.getText()).toEqual(homePage.taxText);
		}); 
    
    
    it('TC134608 - Help icon', function() {
    	homePage.goToPricing()
    	expect(homePage.basicHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.basicHaHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.premiumHelpIcon.isDisplayed()).toBe(true);
		expect(homePage.premiumHaHelpIcon.isDisplayed()).toBe(true);
		});
    
    it('TC134610 - Mouse hover on Help icon', function() {
    	homePage.goToPricing()
        browser.actions().mouseMove(homePage.basicHelpIcon).perform();   	
    	expect(homePage.basicHelpIconHoverTextElement.getText()).toMatch('SD-WAN BASIC');
    	homePage.goToPricing()
    	browser.actions().mouseMove(homePage.basicHaHelpIcon).perform()
    	expect(homePage.basicHaHelpIconHoverTextElement.getText()).toMatch('SD-WAN BASIC HA');
    	homePage.goToPricing()
    	browser.actions().mouseMove(homePage.premiumHelpIcon).perform();
    	expect(homePage.premiumHelpIconHoverTextElement.getText()).toMatch('SD-WAN PREMIUM');
    	homePage.goToPricing()
    	browser.actions().mouseMove(homePage.premiumHaHelpIcon).perform();
    	expect(homePage.premiumHaHelpIconHoverTextElement.getText()).toMatch('SD-WAN PREMIUM HA');
		}); 
    
    
    it('TC134612 - Transport Selection', function() {
    	
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
   
   	it('TC134615 - Product and Term Selection', function() {
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
    
    it('TC134617 - Rate Card', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicOwnTransport()
    	expect(homePage.pricingElement.getText()).toEqual('Pricing $150 / month');
    	homePage.selectingBasicCtlTransport()
    	expect(homePage.pricingElement.getText()).toEqual('Pricing $249 / month');
		}); 
    
    it('TC134618 - Build Oder', function() {
    	homePage.goToPricing()
    	expect(homePage.buildOrderButton.isEnabled()).toBeFalsy();
    	homePage.selectingTwelveMonths()
    	expect(homePage.buildOrderButton.isEnabled()).toBeFalsy();
    	homePage.selectingBasicOwnTransport()
    	expect(homePage.buildOrderButton.isEnabled()).toBeTruthy();
    	}); 
    
    it('TC134619 - "With my own transport" functionality', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingPremiumHaOwnTransport()
    	homePage.selectingbuildOrderButton()
    	expect(browser.getCurrentUrl()).toContain('locations');
    });
    
    it('TC134620 - "With CTL transport" functionality', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicCtlTransport()
    	homePage.selectingbuildOrderButton()
    	expect(browser.getCurrentUrl()).toContain('#/contact-us');
    	contactUs.submittingContactUSDetails()
    	expect(browser.getCurrentUrl()).toContain('#/thanks');
		expect(contactUs.contactUsEnquirySubmissionElement.getText()).toEqual(contactUs.contactUsEnquiryText);
    }); 
   
  
    it('TC139409 - Select BASIC product', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicOwnTransport()
    	homePage.selectingbuildOrderButton()
    	expect(homePage.basicOrderConfirming.isDisplayed()).toBeTruthy();
    	expect(homePage.basicOrderDeclining.isDisplayed()).toBeTruthy();
    	homePage.selectingBasicOrderDeclining()
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse active')
    	expect(homePage.basicOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	homePage.selectingbuildOrderButton()
    	expect(homePage.basicOrderConfirming.isDisplayed()).toBeTruthy();
    	expect(homePage.basicOrderDeclining.isDisplayed()).toBeTruthy();
    	homePage.selectingBasicOrderConfirming()
    	expect(browser.getCurrentUrl()).toContain('locations');
    });
    
    it('TC139417 - BASIC Warning Message flow', function() {
    	homePage.goToPricing()
    	homePage.selectingTwelveMonths()
    	homePage.selectingBasicOwnTransport()
    	homePage.selectingbuildOrderButton()
    	homePage.selectingBasicOrderDeclining()
    	expect(homePage.twelveMonths.getAttribute('class')).toEqual('pointer-mouse active')
    	expect(homePage.basicOwnTransport.getAttribute('class')).toEqual('col col-30 currency active');
    	expect(cart.cartProductCount.isPresent()).toBeFalsy();
    	homePage.selectingbuildOrderButton()
    	expect(homePage.basicOrderConfirming.isDisplayed()).toBeTruthy();
    	expect(homePage.basicOrderDeclining.isDisplayed()).toBeTruthy();
    	homePage.selectingBasicOrderConfirming()
    	expect(browser.getCurrentUrl()).toContain('locations');
    }); 
    
    it('TC142838 - Term Selection - Before Order Submission', function() {
    	locations.selectingBasicHaTwelveTerms()
		locations.homeBreadbrumb.click();
    	expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse disabled');
    	expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse disabled');
    });
    
    it('TC142842 - Term Selection via Add another product', function() {
    	locations.selectingBasicHaTwelveTerms()
    	locations.serviceContactDetails()
    	locations.serviceAddressDetails()
    	locations.shippingAddressDetails()
    	locations.selectingAddLocationsButton()
    	locations.addAnotherProductButton.click()
    	expect(homePage.twentyFourMonths.getAttribute('class')).toEqual('pointer-mouse disabled');
    	expect(homePage.thirtySixMonths.getAttribute('class')).toEqual('pointer-mouse disabled');
    });
    */
});
    