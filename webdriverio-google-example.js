'use strict';

describe("Google search Images", function() {

  it("Google first page", function() {
    return browser
      .url('http://www.google.pl/')
      .waitForVisible('input[name="q"]');
  });

  it("input query", function() {
      return browser
        .keys('webdriverio')
        .keys('Enter');
  });

  it("click Zamiast tego wyszukaj", function() {
    return browser
      .waitThenClick('a.spell_orig');
  });

  it("click Grafika", function() {
      return browser
        .waitThenClick('a[href*="tbm=isch"]');
  });

  it("click first image", function() {
    return browser
      .waitThenClick('.rg_di:first-child a.rg_l');
  });

  it("click Odwiedź stronę", function() {
    return browser
      .waitThenClick('=Odwiedź stronę');
  });

  it("webdriver.io page", function() {
    return browser
      .waitForVisible('.content')
      .getTitle()
        .should.eventually.match(/WebdriverIO/);
  });

});
