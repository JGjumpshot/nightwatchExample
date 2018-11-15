var config = require('./config.js');
module.exports = {
   tags: ['Salesforce'],
   'Salesforce Test' : function (browser) {
        browser
        .url('https://login.salesforce.com') // Go to a url
        .waitForElementVisible('body', 1000) // wait till page loads
        .click("input[type=email]") // click on search box
        .verify.visible("input[type=email]") //verify if the element exists
        .setValue('input[type=email]', config.username)
        .click("input[type=password]")
        .setValue('input[type=password]', config.password)
        .click('input[type=submit]')
        .pause(7000)
        .useXpath().click("//*[@id='oneHeader']/div[3]/div/div[1]/div[1]/nav/button")
        .pause(5000) // need this
        .click("//*[text()='Leads']")
        .useCss().waitForElementVisible('body', 3000).pause(5000).click("a.forceActionLink > div[title='New']")
        .pause(2000)
        .click(".firstName")
        .setValue('.firstName', 'Scooby')
        .click(".lastName")
        .setValue('.lastName', 'Doo')
        .click("input[type=tel]")
        .setValue('input[type=tel]', '8007879110')
        .click("div:nth-child(3) > div:nth-child(1) > div > div > div > input")
        .setValue("div:nth-child(3) > div:nth-child(1) > div > div > div > input", 'Mystery Inc.')
        .pause(4000)
        .click('input[type=email]')
        .setValue('input[type=email]', 'test@test.com')
        .pause(6000)
        .click("div > button[type='button'].slds-button.slds-button--neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton")
        .pause(3000)
        .click("html body div.desktop.container.forceStyle.oneOne.lafStandardLayoutContainer.lafAppLayoutHost.forceAccess div.viewport section div#brandBand_1 div div.center.oneCenterStage.lafSinglePaneWindowManager div.windowViewMode-normal.oneContent.active.lafPageHost div.flexipagePage.oneRecordHomeFlexipage div div.row.region-header div header div.slds-page-header.slds-page-header_record-home.s1FixedTop.forceHighlightsStencilDesktop.forceRecordLayout div div.slds-col.slds-no-flex.slds-grid.slds-align-middle.actionsContainer ul li.slds-button.slds-button--icon-border-filled.oneActionsDropDown div div div div a")
        .pause(2000)
        .click("div.branding-actions.actionMenu.popupTargetContainer.uiPopupTarget.uiMenuList.forceActionsDropDownMenuList.uiMenuList--left.uiMenuList--default > div > ul > li:nth-child(3) > a")
        .pause(2000)
        .click("div > button[type='button'].slds-button.slds-button--neutral.uiButton--default.uiButton--brand.uiButton.forceActionButton")
        .pause(10000)
        .end();
      }
};
