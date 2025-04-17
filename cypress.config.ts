import { defineConfig } from "cypress";
import browserify from "@cypress/browserify-preprocessor";
const sqlServer = require("cypress-sql-server");

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;
      const tasks = sqlServer.loadDBPlugin(config.env.db);
      options.typescript = require.resolve("typescript");

      on("task", { ...tasks });

      return config;
    },
    specPattern: "cypress/stepsDefinitions/*.step.ts",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/Cypress-Testes-QA-[hash].xml",
      attachments: true,
      attachmentsPath: "./cypress/screenshots",
    },
    // retries: 1,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 5000,
    requestTimeout: 10000,

    supportFile: "cypress/supports/e2e.ts",
  },
});
