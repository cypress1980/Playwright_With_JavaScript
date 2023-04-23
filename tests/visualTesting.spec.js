const { test, expect } = require("@playwright/test");
test.skip("Login and Edit account detail  ", async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.fill('input[name="email"]', 'lambdatestnew@yopmail.com');
    await page.fill('input[name="password"]', 'Lambda123');
    await page.click('[value="Login"]')
    const screenshot = await page.screenshot({ path: 'example.png' });
    expect(screenshot).toMatchSnapshot('example.png');
 });

 