import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class vistaErrorPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private vistaErrorPage = {
        btnError: "//span[contains(text(),'Error')]",
        MensajeError: "//h2[contains(text(),'Something happened...')]"
    }

    async seleccionarError() {
        await this.page.click(this.vistaErrorPage.btnError);
    }

    async validarMensajeError() {
        await expect(this.page.locator(this.vistaErrorPage.MensajeError)).toBeVisible();
    }
    
}