import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class homePage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private homePage = {
        txtBienvenido: "//h2[contains(text(),'Bienvenido')]",
        imgHome: "//img[contains(@src,'/resources/images/pets.png')]"
    }

    async validarBienvenido() {
        await expect(this.page.locator(this.homePage.txtBienvenido)).toBeVisible();
  
    }

    async validarImagenBienvenido() {
        await expect(this.page.locator(this.homePage.imgHome)).toBeVisible();

    }

   
    
}