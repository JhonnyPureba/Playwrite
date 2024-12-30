import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class agregarMascotaPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private agregarMascotaPageElements = {
        tercerafila: "//tbody/tr[3]/td[1]/a",
        btnFind: "//button[contains(text(),'Owner')]",
        btnIngresarMascota: "//a[contains(text(),'New Pet')]",
        nombremascota: "//input[@id='name']",
        cumplemascota: "//input[@id='birthDate']",
        tipomascota: "//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]",
        btnContinuar: "//button[contains(text(),'Add Pet')]",
        mensajeExitoso: "//span[contains(text(),'New Pet has been Added')]"
    }

    async seleccionarFindOWer() {
        await this.base.waitAndClick(this.agregarMascotaPageElements.btnFind);
    }
    async seleccionartercerlugar() {
        await this.base.waitAndClick(this.agregarMascotaPageElements.tercerafila);
    }

    async seleccionarbtnañadirMascota() {
        await this.page.click(this.agregarMascotaPageElements.btnIngresarMascota);
    }
    generateRandomName(): string {
        const prefix = "Mascota_";
        const randomNumber = Math.floor(Math.random() * 100000); // Genera un número aleatorio entre 0 y 99,999
        return `${prefix}${randomNumber}`;
    }

    async ingresarDatosMascotas(nombre: string, cumple:string,tipo:string) {
        const randomName = this.generateRandomName();
        await this.page.type(this.agregarMascotaPageElements.nombremascota, randomName);
        await this.page.type(this.agregarMascotaPageElements.cumplemascota, cumple);
        //await this.page.type(this.agregarMascotaPageElements.tipomascota, tipo);
        await this.page.click(this.agregarMascotaPageElements.btnContinuar);
    }

    async validarMensajeAgregadoCorrectamente() {
        await expect(this.page.locator(this.agregarMascotaPageElements.mensajeExitoso)).toBeVisible();
    }
    
}