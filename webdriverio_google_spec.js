'use strict';

describe("Google search Images", function() {

  it("Google first page", function() {
    return browser
      .url('http://www.google.com/?hl=en-US')
      .waitForVisible('input[name="q"]');
  });

  it("input query", function() {
      return browser
        .setValue('input[name="q"]', 'webdriverio')
        .keys('Enter')
  });

  it("click Images", function() {
      return browser
        .pause(1000)
        .waitThenClick('a[href*="tbm=isch"]');
  });

  it("click first image", function() {
    return browser
      .waitThenClick('.rg_di:first-child a.rg_l');
  });

  it("click Visit page", function() {
    return browser
      .waitThenClick('=Visit page');
  });

  it("webdriver.io page", function() {
    return browser
      .waitForVisible('.content')
      .getTitle()
        .should.eventually.match(/WebdriverIO/);
  });

});
