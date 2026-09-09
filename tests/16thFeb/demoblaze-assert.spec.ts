import test, { expect } from '@playwright/test'

test("hard vs soft assert",async ({page})=>{

    await page.goto("https://demoblaze.com/");

    //click on login button
    await page.locator('//a[@id="login2"]').click();

    //username
    await page.locator('//input[@id="loginusername"]').fill("bipin1234");
    //password
    await page.locator('//input[@id="loginpassword"]').fill("Password_1234");
    //click on login
    await page.locator('//button[text()="Log in"]').click();

    //hard assert
    let lgoutButton=await page.locator('//a[@id="logout2"]').textContent();
    expect(lgoutButton).toBe("Log out");

    //hard assert on locator
    await expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");
    //soft assert
     await expect.soft(page.locator('//a[@id="logout2"]')).toHaveText("Log out");

    //soft assert
    expect.soft(lgoutButton).toBe("Log out & * #");


}
)