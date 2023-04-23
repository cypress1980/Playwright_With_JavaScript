// @ts-check
const { test, expect } = require("@playwright/test");
const AxeBuilder = require('@axe-core/playwright').default; //1
test.skip('Accessibility testing : Scanning the entire page ', async ({ page }) => {
     await page.goto('https://ecommerce-playground.lambdatest.io/'); //2
     const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); //3
     expect(accessibilityScanResults.violations).toEqual([]); //4
});
