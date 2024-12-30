import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../src/helper/wrapper/PlaywrightWrappers";


export default class busquedaPropietarioPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page
    ) {
        this.base = new PlaywrightWrapper(page);
    }

    private busquedaPropietarioPage = {
        btnPropietarios: "//span[contains(text(),'Find owners')]",
        txtApellido: "//input[@id='lastName']",
        btnBusquedaPropietario: "//button[contains(text(),'Owner')]",
        txtnombre: "//tbody/tr[1]/th[1]",
        txtdirrecion: "//tbody/tr[2]/th[1]",
        txtciudad: "//tbody/tr[3]/th[1]",
        txtTelefono: "//tbody/tr[4]/th[1]",
        btnEditar: "//a[contains(text(),'Owner')]",
        btnAñadirMascota: "//a[contains(text(),'New Pet')]",
        txtMascotaVisita: "//h2[contains(text(),'Pets and Visits')]"
    }


    async seleccionarPropietarios() {
        await this.page.click(this.busquedaPropietarioPage.btnPropietarios);
    }

    async ingresarapellidoCliente(apellido: string) {
        await this.page.type(this.busquedaPropietarioPage.txtApellido, apellido);
        await this.page.click(this.busquedaPropietarioPage.btnBusquedaPropietario);
    }

    async validarDatos(nombre: string,direccion: string,ciudad: string,telefono: string,editar: string,ingresarMascota: string,mascotaVisita: string) {
        await expect(this.page.locator(this.busquedaPropietarioPage.txtnombre)).toBeVisible();
        await expect(this.page.locator(this.busquedaPropietarioPage.txtdirrecion)).toBeVisible();
        await expect(this.page.locator(this.busquedaPropietarioPage.txtciudad)).toBeVisible();
        await expect(this.page.locator(this.busquedaPropietarioPage.txtTelefono)).toBeVisible();
        await expect(this.page.locator(this.busquedaPropietarioPage.btnEditar)).toBeVisible();
        await expect(this.page.locator(this.busquedaPropietarioPage.btnAñadirMascota)).toBeVisible();
        await expect(this.page.locator(this.busquedaPropietarioPage.txtMascotaVisita)).toBeVisible();
    }
    
}