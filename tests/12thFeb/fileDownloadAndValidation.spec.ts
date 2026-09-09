import { expect, test } from '@playwright/test';

test("file download & validation", async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/download");

    //listner for the download event
    const downloadPromise= page.waitForEvent('download');

    //click on the file to start the download
    await page.locator('//a[@href="download/Logo.png"]').click();

    const download=await downloadPromise;

    //perform the validation for the download
    expect(await download.failure()).toBeNull();

    console.log("download is succesfull");

});