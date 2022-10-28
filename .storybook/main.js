module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
