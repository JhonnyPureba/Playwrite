import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class editarPropietarioPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private editarPropietarioPage = {
        btnEditar: "//a[contains(text(),'Owner')]",
        txtdirrecion: "//input[@id='address']",
        txtciudad: "//input[@id='city']",
        btnActualizar: "//button[contains(text(),'Update Owner')]",
        txtMensajeActualizacion: "//span[contains(text(),'Owner Values Updated')]"
    }


    async seleccionarBotonEditar() {
        await this.page.click(this.editarPropietarioPage.btnEditar);
    }

    async editarDatosPropietarios(direccion: string,ciudad: string) {
        await this.page.type(this.editarPropietarioPage.txtdirrecion, direccion);
        await this.page.type(this.editarPropietarioPage.txtciudad, ciudad);
        await this.page.click(this.editarPropietarioPage.btnActualizar);
    }

    async validarDatosCambiados(direccion: string,ciudad: string) {
        await expect(this.page.locator(this.editarPropietarioPage.txtMensajeActualizacion)).toBeVisible();
  
    }

    
}