import { Given, When, Then , setDefaultTimeout } from "@cucumber/cucumber";
import { pageFixture } from "../../hooks/pageFixture";
import HomePage from "../../../pages/homePage";

let homePage:HomePage;
homePage = new HomePage(pageFixture.page);

When('el usuario valida el titulo de la pagina {string}', async function (string) {
  homePage = new HomePage(pageFixture.page);
});

Then('el usuario valida el mensaje de bienvenida {string}', async function (string) {
  await homePage.validarBienvenido();
  await homePage.validarImagenBienvenido();
});