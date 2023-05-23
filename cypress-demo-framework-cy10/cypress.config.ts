import { Config } from 'cypress';

const config: Config = {
  // Specify your Cypress configuration options here

  // Set the directory where Cypress should store screenshots and videos
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',

  // Specify additional Cypress plugins or extensions to use
  // pluginsFile: 'path/to/plugins/index.js',
  // supportFile: 'path/to/support/index.js',

  // Other Cypress configuration options
  // ...

  // Set e2e testing specific options
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.ts', // Adjust the spec pattern based on your file structure
    baseUrl: 'https://example.com', // Set your base URL here
  },
};

export default config;