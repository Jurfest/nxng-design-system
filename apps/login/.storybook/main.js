const rootMain = require('../../../.storybook/main');

module.exports = {
  ...rootMain,

  title: 'Application',

  refs: {
    'design-system': {
      title: 'Design System',
      url: 'https://635b1a669687bc9ada4c876d-jollijylox.chromatic.com',
      // expanded: false, // optional, true by default
    },
  },

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [
    ...rootMain.stories,
    '../src/app/**/*.stories.mdx',
    '../src/app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    // add your own webpack tweaks if needed

    return config;
  },
};
