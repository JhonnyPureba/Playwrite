import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class veterinariosPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private veterinariosPage = {
        btnVeterinario: "//span[contains(text(),'Veterinarians')]",
        dato1Veterinario: "//tbody/tr[1]/td[1]",
        dato2Veterinario: "//tbody/tr[1]/td[2]"
    }

    async seleccionarVeterinarias() {
        await this.page.click(this.veterinariosPage.btnVeterinario);
    }

    async validarColumnaVeterinarios() {
        await expect(this.page.locator(this.veterinariosPage.dato1Veterinario)).toBeVisible();
        await expect(this.page.locator(this.veterinariosPage.dato2Veterinario)).toBeVisible();
    }
    
}