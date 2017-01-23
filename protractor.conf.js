'use strict';

exports.config = {
  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    tags: false,
    format: ['json:results.json', 'pretty'],
    profile: false,
    'no-source': true
  },

  onPrepare: function() {
    browser.ignoreSynchronization=true;
  }

};
