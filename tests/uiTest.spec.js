// @ts-check
const { test, expect, chromium } = require("@playwright/test");
test.describe("Verify the links in Landing Page ", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://ecommerce-playground.lambdatest.io/");
      });
    test("Open the Site and Click on  Home link and verify user re-direct to correct url", async ({page }) => {
      await page.locator('span:has-text("Home")').click();
      await expect(page).toHaveURL(
        "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
      );
    });
    test("Open the Site and click on Blog Link and verify user re-direct to correct url", async ({ page }) => {
      await page.locator("#widget-navbar-217834 >> text=Blog").click();
      await expect(page).toHaveURL(
        "https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home"
      );
    });
});