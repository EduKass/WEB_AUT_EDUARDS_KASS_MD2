const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 2000,
  viewportHeight: 1440,
  defaultCommandTimeout: 5000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://katalon-demo-cura.herokuapp.com/",
  },
});
