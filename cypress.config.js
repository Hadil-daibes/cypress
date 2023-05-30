// const { defineConfig } = require("cypress");

// const cucumber = require("cypress-cucumber-preprocessor").default;

// fun = (on, config) => {
//   on("file:preprocessor", cucumber());
// };

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       testFiles: "**/**/*.{feature,features}", fun;

//       // implement node event listeners here
//     },
//   },
// });

const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  nonGlobalStepDefinition: true,
  e2e: {
    specPattern: "cypress/e2e/*.feature",
    supportFile: false,
    taskTimeout: 1000,
    setupNodeEvents,
  },
});
