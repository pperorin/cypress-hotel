const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v2ew96',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  pageLoadTimeout: 10000,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
