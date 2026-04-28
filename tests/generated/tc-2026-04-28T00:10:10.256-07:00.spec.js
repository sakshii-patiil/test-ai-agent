// @generated
// Generated: 2023-10-15 | Framework: Selenium | Tests: 3
// Compatible: Selenium
// CI: GitHub Actions | Jenkins | CircleCI | GitLab CI
// Run: npx jest

const { Builder, By, until } = require('selenium-webdriver');

test('TC001 - Successful Login', async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.manage().setTimeouts({ implicit: 5000 });
    await driver.get(process.env.BASE_URL || 'http://localhost:3000');
    await driver.findElement(By.id('username')).sendKeys(process.env.TEST_USER);
    await driver.findElement(By.id('password')).sendKeys(process.env.TEST_PASS);
    await driver.findElement(By.css('button[type="submit"]')).click();
    await driver.wait(until.urlContains('/dashboard'), 5000);
  } finally {
    await driver.quit();
  }
});

test('TC002 - Search Validation', async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.manage().setTimeouts({ implicit: 5000 });
    await driver.get(process.env.BASE_URL + '/search');
    await driver.findElement(By.name('query')).sendKeys('selenium test');
    await driver.findElement(By.css('.search-btn')).click();
    const results = await driver.wait(until.elementsLocated(By.css('.result-item')), 5000);
    expect(results.length).toBeGreaterThan(0);
  } finally {
    await driver.quit();
  }
});

test('TC003 - Form Submission', async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    driver.manage().setTimeouts({ implicit: 5000 });
    await driver.get(process.env.BASE_URL + '/contact');
    await driver.findElement(By.id('name')).sendKeys('Test User');
    await driver.findElement(By.id('message')).sendKeys('Sample message');
    await driver.findElement(By.css('form')).submit();
    const success = await driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
    expect(await success.getText()).toMatch(/thank you/i);
  } finally {
    await driver.quit();
  }
});