import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class listadoPropietariosPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private listadoPropietariosPage = {
        name: "//th[contains(text(),'Name')]",
        address: "//th[contains(text(),'Address')]",
        city: "//th[contains(text(),'City')]",
        telephone: "//th[contains(text(),'Telephone')]",
        pets: "//th[contains(text(),'Pets')]",
        namecontent: "//tbody/tr[1]/td[1]",
        addresscontent: "//tbody/tr[1]/td[2]",
        citycontent: "//tbody/tr[1]/td[3]",
        telephonecontent: "//tbody/tr[1]/td[4]",
        petscontent: "//tbody/tr[1]/td[5]"
    }

    async validarCabeceras(cabecera1: string,cabecera2: string,cabecera3: string,cabecera4: string,cabecera5: string) {
        await expect(this.page.locator(this.listadoPropietariosPage.name)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.address)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.city)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.telephone)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.pets)).toBeVisible();
    }

    async validarContenido() {
        await expect(this.page.locator(this.listadoPropietariosPage.namecontent)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.addresscontent)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.citycontent)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.telephonecontent)).toBeVisible();
        await expect(this.page.locator(this.listadoPropietariosPage.petscontent)).toBeVisible();

    }
    
}