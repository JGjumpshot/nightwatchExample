module.exports = {
   tags: ['Google'],
   'Demo test Google' : function (browser) {
        browser
        .url('http://www.google.com') // Go to a url
        .waitForElementVisible('body', 1000) // wait till page loads
        .assert.title('Google') // Make sure Site title matches
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'nightwatch') // send values
        .pause(10000)
        .click('button[name=btnK]') // click on search box
        .pause(1000)
        .end();
      }
};
