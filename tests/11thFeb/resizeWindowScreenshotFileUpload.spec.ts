import { test } from '@playwright/test';

test("resize window", async ({ page }) => {

    await page.goto("https://jqueryui.com/resources/demos/resizable/default.html");

    let resizeHandle = await page.locator('//div[@class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"]');

    let box = await resizeHandle.boundingBox();
    if (!box) throw new Error("box not found");

    let x = box.x + 300;
    let y = box.y + 400;

    //await page.locator('//div[@class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se"]').hover();
    await resizeHandle.hover();
    await page.mouse.down();
    await page.mouse.move(x, y);
    await page.mouse.up();


});

test("screenshot without timestamp", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    //screenshot of area visible to eyes
    await page.screenshot({ path: "Screenshot/visibleToEye.png", fullPage: false });

    //screenshot of complete page inncluding scroll
    await page.screenshot({ path: "Screenshot/fullPage.png", fullPage: true });

    //screenshot of webelement
    await page.locator('//a[@class="getStarted_Sjon"]').screenshot({ path: "Screenshot/webelement.png" })

});

test("screenshot with timestamp", async ({ page }) => {
    await page.goto("https://playwright.dev/");

    const time = new Date().toISOString().replace(/[:.]/g, "-");

    //screenshot of area visible to eyes
    await page.screenshot({ path: `Screenshot/visibleToEye_${time}.png`, fullPage: false });

    //screenshot of complete page inncluding scroll
    await page.screenshot({ path: `Screenshot/fullPage_${time}.png`, fullPage: true });

    //screenshot of webelement
    await page.locator('//a[@class="getStarted_Sjon"]').screenshot({ path: `Screenshot/webelement_${time}.png` })

});

test("single file upload", async ({ page }) => {

    await page.goto("https://www.way2automation.com/way2auto_jquery/registration.php#load_box");

    //uploading single file
    await page.locator('//input[@type="file"]').setInputFiles("/Users/bipinthakare/Desktop/1_nulFisFZeP7S5iLGCkSeIg.jpg");

});

test("multiple file upload", async ({ page }) => {

    await page.goto("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_fileupload_multiple");

    //the webelement is inside iframe
    await page.frameLocator('//iframe[@id="iframeResult"]').locator('//input[@id="myFile"]').
        setInputFiles(["/Users/bipinthakare/Desktop/1_nulFisFZeP7S5iLGCkSeIg.jpg", "/Users/bipinthakare/Desktop/1_nulFisFZeP7S5iLGCkSeIg.jpg"]);
});