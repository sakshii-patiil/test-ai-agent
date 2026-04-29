```javascript
// @generated
// Compatible: Playwright | Cypress | Jest | Selenium
// CI: GitHub Actions | Jenkins | CircleCI | GitLab CI
// Run: npx playwright test
const { test, expect } = require('@playwright/test');

// 1001 - Verify spreadsheet loads
test('1001 - Verify spreadsheet loads', async ({ page }) => {
  test.setTimeout(30000);
  await page.goto(process.env.SPREADSHEET_URL || 'https://docs.google.com/spreadsheets/d/1k9HHyqSxvS1KpIkhfXqd_9JW2Ki-OMAYwlhmmZWglQk/edit');
  await expect(page).toHaveTitle(/.*Spreadsheet/);
});

// 1002 - Verify first cell contains "Header 1"
test('1002 - Verify first cell contains "Header 1"', async ({ page }) => {
  test.setTimeout(30000);
  await page.goto(process.env.SPREADSHEET_URL || 'https://docs.google.com/spreadsheets/d/1k9HHyqSxvS1KpIkhfXqd_9JW2Ki-OMAYwlhmmZWglQk/edit');
  const cell = await page.locator('//*[@id="0-grid"]/div[1]/div/div[1]/div[1]');
  await expect(cell).toContainText('Header 1');
});

// 1003 - Verify second cell contains "Header 2"
test('1003 - Verify second cell contains "Header 2"', async ({ page }) => {
  test.setTimeout(30000);
  await page.goto(process.env.SPREADSHEET_URL || 'https://docs.google.com/spreadsheets/d/1k9HHyqSxvS1KpIkhfXqd_9JW2Ki-OMAYwlhmmZWglQk/edit');
  const cell = await page.locator('//*[@id="0-grid"]/div[1]/div/div[2]/div[1]');
  await expect(cell).toContainText('Header 2');
});

// 1004 - Verify third cell contains "Value 1"
test('1004 - Verify third cell contains "Value 1"', async ({ page }) => {
  test.setTimeout(30000);
  await page.goto(process.env.SPREADSHEET_URL || 'https://docs.google.com/spreadsheets/d/1k9HHyqSxvS1KpIkhfXqd_9JW2Ki-OMAYwlhmmZWglQk/edit');
  const cell = await page.locator('//*[@id="0-grid"]/div[2]/div/div[1]/div[1]');
  await expect(cell).toContainText('Value 1');
});

// 1005 - Verify fourth cell contains "Value 2"
test('1005 - Verify fourth cell contains "Value 2"', async ({ page }) => {
  test.setTimeout(30000);
  await page.goto(process.env.SPREADSHEET_URL || 'https://docs.google.com/spreadsheets/d/1k9HHyqSxvS1KpIkhfXqd_9JW2Ki-OMAYwlhmmZWglQk/edit');
  const cell = await page.locator('//*[@id="0-grid"]/div[2]/div/div[2]/div[1]');
  await expect(cell).toContainText('Value 2');
});
```