import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class propietariosPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private propietariosPage = {
        btnFinOwner: "//button[contains(text(),'Owner')]",
        btnAddOwner: "//a[contains(text(),'Add Owner')]",
        txtBusquedaLastName: "//input[@id='lastName']"
    }


    async validarBotonFindOwner() {
        await expect(this.page.locator(this.propietariosPage.btnFinOwner)).toBeVisible();
    }

    async validarBotonAddOwner() {
        await expect(this.page.locator(this.propietariosPage.btnAddOwner)).toBeVisible();
    }

    async validarCampoTextoBusqueda() {
        await expect(this.page.locator(this.propietariosPage.txtBusquedaLastName)).toBeVisible();
    }

   
}