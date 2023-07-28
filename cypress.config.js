import { defineConfig } from "cypress";
import {
  beforeRunHook,
  afterRunHook,
} from "cypress-mochawesome-reporter/lib/index.js";

export default defineConfig({
  //Config for cypress-mochawesome-reporter plugin
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
    },
    // changed path to test folders
    fixturesFolder: "cypress/productTests/fixtures",
    specPattern: "cypress/productTests/e2e",

    video: false,
  },
});
