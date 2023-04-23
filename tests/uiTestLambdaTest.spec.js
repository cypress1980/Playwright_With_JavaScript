// @ts-check
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 10",
    build: "Playwright Build",
    name: "Run Playwright Test in Cloud",
    user: "kailashpathak",
    accessKey: "7aVuffQRbXRFUHrYbLhjSvBUiz3ctCih23e42NrDQxnDWErzD1",
    network: true,
    video: true,
    console: true
  },
};
const { test, expect, chromium } = require("@playwright/test");
test.describe("Verify the links in Landing Page ", () => {
  test("Open the Site and Click on  Home link and verify user re-direct to correct url", async ({ }) => {
  const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`)
  const page = await browser.newPage()
  await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.locator('span:has-text("Home")').click();
    await expect(page).toHaveURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
    );
    await browser.close()
  });
  test("Open the Site and click on Blog Link and verify user re-direct to correct url", async ({  }) => {
    const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`)
    const page = await browser.newPage()
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.locator("#widget-navbar-217834 >> text=Blog").click();
    await expect(page).toHaveURL(
      "https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home"
    );
    await browser.close()
  });
 });