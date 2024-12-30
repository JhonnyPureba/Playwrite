import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import AgregarMascotaPage from "../../../pages/agregarMascotaPage";
import { pageFixture } from "../../hooks/pageFixture";

let agregarMascotaPage:AgregarMascotaPage;
agregarMascotaPage = new AgregarMascotaPage(pageFixture.page);
setDefaultTimeout(60 * 1000 * 2)

  When('como usuario hago clic en el boton Find Owner', async function () {
    agregarMascotaPage = new AgregarMascotaPage(pageFixture.page);
    await agregarMascotaPage.seleccionarFindOWer();
  });

  When('como usuario selecciono al tercer lugar de la lista', async function () {
    await agregarMascotaPage.seleccionartercerlugar();
  });

  When('como usuario selecciono el boton añadir mascota', async function () {
    await agregarMascotaPage.seleccionarbtnañadirMascota();
  });

  When('como usuario añado los datos de la mascota {string},{string},{string}', async function (string, string2, string3) {
    await agregarMascotaPage.ingresarDatosMascotas(string,string2,string3);
  });

  Then('como usuario valido el mensaje de añadido correctamente', async function () {
    await agregarMascotaPage.validarMensajeAgregadoCorrectamente();
  });