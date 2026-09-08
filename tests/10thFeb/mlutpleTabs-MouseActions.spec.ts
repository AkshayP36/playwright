import { test } from '@playwright/test';
test("handling multiple tabs", async ({ page, context }) => {

    await page.goto("https://the-internet.herokuapp.com/windows");


    //click on the click here link: it opens new tab
    await page.locator('//a[text()="Click Here"]').click();

    //wait till the popup event occurs
    await page.waitForEvent('popup'); //poopup, new tab, new window are all same for playwright


    //print total number of open tabs
    let allTabs = await context.pages();
    console.log(allTabs.length);

    //fetch the title of both the tabs
    console.log(await allTabs[0].title());
    console.log(await allTabs[1].title());

    //URL 
    console.log(allTabs[0].url());
    console.log(allTabs[1].url());

    //write a loop toi print the title of all the tabs
    for (let i of allTabs) {
        console.log(await i.title());
    }

    await page.waitForTimeout(2000);

    //close the child tab
    await allTabs[1].close();

    await page.waitForTimeout(2000);
    //close all the tabs
    await context.close();

}
);

test("Mouse hover", async ({ page, context }) => {
    await page.goto("https://www.ebay.com/");

    //hover the mouse on motors category
    await page.locator('(//a[text()="Motors"])[1]').hover();

    //click on tools & supplies cateogry
    await page.locator('//a[text()="Tools and supplies"]').click();

})


test("right click", async ({ page, context }) => {
    await page.goto("https://deluxe-menu.com/popup-mode-sample.html");

    //right click on the image
    await page.locator('//img[@src="data-samples/images/popup_pic.gif"]').click({ button: 'right' });

    //hover on product info category
    await page.locator('//td[text()="Product Info"]').hover();

    //click on features category
    await page.locator('(//td[text()="Features"])[1]').click();


})

test("drag & drop", async ({ page, context }) => {
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html");

    //source
    let source = await page.locator('//div[@id="draggable"]');

    //destination
    let destination = await page.locator('//div[@id="droppable"]');

    //drag & drop
    await source.dragTo(destination);
});


test("slider movement", async ({ page, context }) => {
    await page.goto("https://jqueryui.com/resources/demos/slider/default.html");

    //slider bar
    let sliderBar = await page.locator('//div[@id="slider"]');

    //slider handle
    let sliderHandle = await page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default"]');

    //use the boudingBox() to identify x, y, heihgt, width paramters
    const box = await sliderBar.boundingBox();
    console.log(box);

    if (!box) throw new Error("box not found");

    //find out the x & y cordindates
    let x = box.x + box?.width / 2;
    let y = box.y + box?.height / 2;

    //perform mouse action
    await sliderHandle.hover();
    await page.mouse.down();
    await page.mouse.move(x, y);
    await page.mouse.up();

});
