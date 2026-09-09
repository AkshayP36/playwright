import test from '@playwright/test';
import {LoginPage} from '../17thFeb/LoginPage'; //importing the LoginPage class from the LoginPage.ts file
import crdentials from '../17thFeb/testData.json'; //credentials is a referece variable


test("login test", async({page})=>{

   const loginpageObj= new LoginPage(page);
   await loginpageObj.login(crdentials.users[0].username,crdentials.users[0].password);

});