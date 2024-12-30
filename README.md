
Setup:
1. `npm i` to install the dependencies
2. `npx playwright install` to install the browsers
3. `npm run test` to execute the tests


Detalles: 
0. `src\pages` -> All the page (UI screen)
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\env` -> Multiple environments are handled
6. `src\helper\types` -> To get environment code suggestions
7. `config/cucumber.js` -> One file to do all the magic
8. `package.json` -> Contains all the dependencies

