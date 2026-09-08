import test  from '@playwright/test';

test("slider movement", async({page,context})=>{
    await page.goto("https://jqueryui.com/resources/demos/slider/default.html");

    //slider track
    let sliderTrack=await page.locator('//div[@id="slider"]');

    //handle
    let handle=await page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default"]');

    //x & y cordinate of track

    let box=await sliderTrack.boundingBox();
    console.log(box);

    if(!box) throw new Error("box not found");

    let x= box.x + box?.width/2;
    let y= box?.y;
    //let y=box.y+ box?.height/2;

    //mouse movement
   // await page.locator('//span[@class="ui-slider-handle ui-corner-all ui-state-default"]').hover();
    await handle.hover();
    await page.mouse.down();
    await page.mouse.move(x,y);
    await page.mouse.up();
});