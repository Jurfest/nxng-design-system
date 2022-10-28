import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
  panelPosition: 'right',
  selectedPanel: 'storybook/addon-interactions/panel',
});
