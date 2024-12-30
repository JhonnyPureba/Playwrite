import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import EditarPropietarioPage from "../../../pages/editarPropietarioPage";

let editarPropietarioPage:EditarPropietarioPage;
editarPropietarioPage = new EditarPropietarioPage(pageFixture.page);

When('como usuario selecciono el boton editar', async function () {
  editarPropietarioPage = new EditarPropietarioPage(pageFixture.page);
  await editarPropietarioPage.seleccionarBotonEditar();
  });

  When('como usuario modifico los cambios {string},{string}', async function (direccion, ciudad) {
    await editarPropietarioPage.editarDatosPropietarios(direccion,ciudad);
  });

  Then('como usuario valido el cambio de informacion para {string},{string}', async function (direccion, ciudad) {
    await editarPropietarioPage.validarDatosCambiados(direccion,ciudad);
  });