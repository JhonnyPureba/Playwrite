import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import VeterinariosPage from "../../../pages/veterinariosPage";

let veterinariosPage:VeterinariosPage;
veterinariosPage = new VeterinariosPage(pageFixture.page);

When('como usuario ingreso a la seccion veterinarios', async function () {
  veterinariosPage = new VeterinariosPage(pageFixture.page);
  await veterinariosPage.seleccionarVeterinarias();
  });

  Then('como usuario la lista de veterinarios valido los datos de la primera fila {string},{string}', async function (string, string2) {
  await veterinariosPage.validarColumnaVeterinarios();
  });
