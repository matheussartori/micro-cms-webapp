import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: process.env.NODE_ENV === 'TESTS' ? 'http://localhost:7357' : 'http://localhost:5173',
    supportFile: 'tests/libs/cypress/support/e2e.ts',
    specPattern: 'tests/e2e/**/*.cy.{ts,tsx}'
  },
  fixturesFolder: 'tests/libs/cypress/fixtures',
  screenshotsFolder: 'tests/libs/cypress/screenshots',
  videosFolder: 'tests/libs/cypress/videos',
  downloadsFolder: 'tests/libs/cypress/downloads',
  supportFolder: 'tests/libs/cypress/support'
})
