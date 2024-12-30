import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import ListadoPropietariosPage from "../../../pages/listadoPropietariosPage";

let listadoPropietariosPage:ListadoPropietariosPage;
listadoPropietariosPage = new ListadoPropietariosPage(pageFixture.page);

Then('como usuario valido que se visualice la lista con las siguientes cabeceras {string},{string},{string},{string},{string}', async function (string, string2, string3, string4, string5) {
  listadoPropietariosPage = new ListadoPropietariosPage(pageFixture.page);
  await listadoPropietariosPage.validarCabeceras(string,string2,string3,string4,string5);
  });


  Then('como usuario valido que se visualice los datos de la primera fila de datos {string},{string},{string},{string},{string}', async function (string, string2, string3, string4, string5) {
    await listadoPropietariosPage.validarContenido();
  });