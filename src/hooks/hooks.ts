import { Before, After,BeforeAll,AfterAll,AfterStep,Status } from "@cucumber/cucumber";
import { chromium, Browser, Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";

let page: Page;
let browser: Browser;
let context :BrowserContext;

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});
AfterStep(async function ({pickle, result}) {
  const img = await pageFixture.page.screenshot({path: "./test-result/screenshots/"+pickle.name ,type:"png"})
  await this.attach(img,"image/png")
});

After(async function ({pickle, result}) {
  console.log(result?.status);
  if (result?.status == Status.PASSED) {
    const img = await pageFixture.page.screenshot({path: "./test-result/screenshots/"+pickle.name ,type:"png"})
    await this.attach(img,"image/png")
}

  await pageFixture.page.close();
  await context.close();
});
AfterAll(async function () {
  await context.close();
});
