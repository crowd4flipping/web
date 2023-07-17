import { defineConfig } from "cypress";

export default defineConfig({
  port: 52001,
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
    specPattern: "__tests__/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"
  },
});
