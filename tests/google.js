module.exports = {
   tags: ['Google'],
   'Demo test Google' : function (browser) {
        browser
        .url('http://www.google.com') // Go to a url
        .waitForElementVisible('body', 1000) // wait till page loads
        .assert.title('Google') // Make sure Site title matches
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'nightwatch') // send values
        .pause(1000)
        .useXpath().click("//*[@id='tsf']/div[2]/div/div[2]/div[2]/div/center/input[1]") // click on search box
        .pause(1000)
        // .url('http://www.facebook.com')
        // .assert.title('Facebook - Log In or Sign Up')
        .end();
      }
};
