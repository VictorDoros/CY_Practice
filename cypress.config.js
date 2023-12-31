const { defineConfig } = require("cypress")
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/dist/plugin")

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config)
      require("cypress-mochawesome-reporter/plugin")(on)
      require("@cypress/grep/src/plugin")(config)
      return config
    },

    // changed path to test folders
    fixturesFolder: "cypress/productTests/fixtures",
    specPattern: "cypress/e2e",

    // Time, in milliseconds, to consider a test "slow" during cypress run. A slow test will display in orange text in the default reporter.
    slowTestThreshold: 15000,

    // Time, in milliseconds, to wait until most DOM based commands are considered timed out.
    defaultCommandTimeout: 2000,

    // The quality setting for the video compression, in Constant Rate Factor (CRF).
    // The value can be false to disable compression or a value between 0 and 51,
    // where a lower value results in better quality (at the expense of a higher file size).
    videoCompression: 32,

    // Default height in pixels
    viewportHeight: 1080,

    // Default width in pixels
    viewportWidth: 1920,

    //Setting video to false (it takes time while running a test suite, even if there is no error)
    video: false,

    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
  },
})
