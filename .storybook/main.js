const { mergeConfig } = require('vite');
const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-actions'
  ],

  core: {
    disableTelemetry: true,
    builder: {
      name: '@storybook/builder-vite',
      options: {
        fastRefresh: true,
      },
    },
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
        },
      },
      server: {
        watch: {
          usePolling: true,
          interval: 1000,
        },
      },
    });
  },
};
