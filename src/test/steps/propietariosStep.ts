import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import PropietariosPage from "../../../pages/propietariosPage";

let propietariosPage:PropietariosPage;
propietariosPage = new PropietariosPage(pageFixture.page);

Then('como usuario valido que se visualice el boton Find Owner', async function () {
  propietariosPage = new PropietariosPage(pageFixture.page);
  await propietariosPage.validarBotonFindOwner();
  });

  Then('como usuario valido que se visualice el boton Add Owner', async function () {
    await propietariosPage.validarBotonAddOwner();
  });

  Then('como usuario valido que se visualice el campo de texto para la busqueda', async function () {
    await propietariosPage.validarCampoTextoBusqueda();
  });