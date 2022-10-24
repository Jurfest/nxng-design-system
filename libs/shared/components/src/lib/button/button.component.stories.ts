import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { ButtonComponent } from './button.component';

@Component({
  selector: 'nxng-ds-button-harness',
  template: '<nxng-ds-button>{{ text }}</nxng-ds-button>',
})
class ButtonHarnessComponent {
  @Input() text = 'Button';
}

export default {
  title: 'ButtonComponent',
  component: ButtonHarnessComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
} as Meta<ButtonHarnessComponent>;

const Template: Story<ButtonHarnessComponent> = (
  args: ButtonHarnessComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
};
