import test, { expect } from '@playwright/test'

test("comapring google title",async({page})=>
{
   await page.goto("https://www.google.com/"); //open the URL
    
    let fetchedTitle=await page.title();//title of the website

    let actualTitle="Google";

    expect(fetchedTitle).toContain(actualTitle);//comparing the title

});

test("navigation TC",async({page})=>
{
    await page.goto("https://workspace.google.com/intl/en-US/gmail/");
    await page.goBack();
    //enter slight delay
    await page.waitForTimeout(2000);

    await page.goForward();
    //enter slight delay
    await page.waitForTimeout(2000);

    await page.reload();
}

);


test("facebook tc", async({page})=>
{
    await page.goto("https://www.facebook.com/");
    //await page.getByTestId("royal-pass").fill("password7777");
    //getByLable(), getbyPlaceHolder(), getByRole() etc

    await page.locator("#pass").fill("password7777");
}

);

