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
        .setValue('input[type=email]', 'jackson.gunther@yahoo.com')
        .click("input[type=password]")
        .setValue('input[type=password]', 'Jak@ttak14')
        //.click('input[]')
        .click('input[type=submit]')
        .pause(200000)
        // .url('http://www.facebook.com')
        // .assert.title('Facebook - Log In or Sign Up')
        .end();
      }
};
