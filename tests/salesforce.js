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
        //.useXpath().click("//*[ul]//*[li]//*[a]//*[text()='New']")
        .pause(10000)
        .end();
      }
};
