import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000/',
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
  viewportWidth: 1200,
  video: false,
  screenshotOnRunFailure: false,
});
