const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v2ew96',
  e2e: {
    experimentalRunAllSpecs: true,
  },

  pageLoadTimeout: 10000,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
