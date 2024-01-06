import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   test.setTimeout(120000);
//   await page.goto('https://www.guru99.com/xpath-selenium.html');

//   // Expect a title "to contain" a substring.
//   const pageTitle = await page.title();
//   expect(pageTitle).toContain('XPath in Selenium');
// });

test('get started link', async ({ page }) => {
  await page.goto('https://www.guru99.com/');

  // Click the get started link.
  await page.locator('xpath=//a[contains(text(), "➤ Selenium")]').click();
  await page.waitForTimeout(5000);

  // Expect h2 contain "Selenium Tutorial Syllabus" visible
  const h2Locator = page.locator(`xpath=//h2[contains(text(), "Selenium Tutorial Syllabus")]`);
  await expect(h2Locator).toBeVisible();
});
