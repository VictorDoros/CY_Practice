import { defineConfig } from "cypress"
import {
  beforeRunHook,
  afterRunHook,
} from "cypress-mochawesome-reporter/lib/index.js"
import getCompareSnapshotsPlugin from "cypress-image-diff-js/dist/plugin.js"
import cypressGrepPlugin from '@cypress/grep/src/plugin.js';

export default defineConfig({
  retries: {
    runMode: 2,
    openMode: 0,
  },
  "env": {
    "grepFilterSpecs": true,
    "grepOmitFiltered": true,
  },
  //Config for cypress-mochawesome-reporter plugin
  reporter: "cypress-mochawesome-reporter",

  e2e: {
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config);
      on("before:run", async (details) => {
        console.log("override before:run")
        await beforeRunHook(details)
      })

      on("after:run", async () => {
        console.log("override after:run")
        await afterRunHook()
      })
      getCompareSnapshotsPlugin(on, config)
      return config;
    },
    // changed path to test folders
    fixturesFolder: "cypress/productTests/fixtures",
    specPattern: "cypress/productTests/e2e",

    video: false,
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
  },
})
