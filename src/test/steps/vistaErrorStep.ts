import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import VistaErrorPage from "../../../pages/vistaErrorPage";

let vistaErrorPage:VistaErrorPage;
vistaErrorPage = new VistaErrorPage(pageFixture.page);

When('como usuario ingreso a la seccion error', async function () {
  vistaErrorPage = new VistaErrorPage(pageFixture.page);
  await vistaErrorPage.seleccionarError();
  });

  Then('como usuario valido el mensaje de error {string}', async function (string) {
  await vistaErrorPage.validarMensajeError(); 
  });