var config = require('./config.js');
module.exports = {
   tags: ['Salesforce'],
   'Salesforce Test' : function (browser) {
        browser
        .url('https://login.salesforce.com') // Go to a url
        .waitForElementVisible('body', 1000) // wait till page loads
        //.assert.visible('input[type=text]')
        //.setValue('input[type=text]', 'jackson.gunther@yahoo.com') // send values
        // .pause(1000)
        .click("input[type=email]") // click on search box
        .verify.visible("input[type=email]") //verify if the element exists
        .setValue('input[type=email]', config.username)
        .click("input[type=password]")
        .setValue('input[type=password]', config.password)
        .click('input[type=submit]')
        .pause(20000)
        // .url('http://www.facebook.com')
        // .assert.title('Facebook - Log In or Sign Up')
        .end();
      }
};
