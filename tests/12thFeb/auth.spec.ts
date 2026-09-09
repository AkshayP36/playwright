import { expect, test } from '@playwright/test';

test("handling authentication", async({page})=>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(5000);
});