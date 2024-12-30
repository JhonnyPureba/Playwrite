import { Given, When, Then ,setDefaultTimeout} from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import BusquedaPropietarioPage from "../../../pages/busquedaPropietarioPage";

let busquedaPropietarioPage:BusquedaPropietarioPage;
busquedaPropietarioPage = new BusquedaPropietarioPage(pageFixture.page);

Given('el usuario ingresa a la web', async function () {
  await pageFixture.page.goto(process.env.BASEURL);
  });
  
  When('como usuario ingreso a la seccion propietarios', async function () {
    busquedaPropietarioPage = new BusquedaPropietarioPage(pageFixture.page);
    await busquedaPropietarioPage.seleccionarPropietarios();
  });

  When('como usuario ingreso los datos de de un cliente {string}', async function (string) {
    await busquedaPropietarioPage.ingresarapellidoCliente(string);
  });

  Then('como usuario debería ver el {string},{string},{string},{string},{string},{string},{string}', async function (string, string2, string3, string4, string5, string6, string7) {
    await busquedaPropietarioPage.validarDatos(string,string2,string3,string4,string5,string6,string7);
  });