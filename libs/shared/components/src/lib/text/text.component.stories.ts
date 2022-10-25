import { Component, Input } from '@angular/core';
import { Meta, moduleMetadata, Story } from '@storybook/angular';

import { TextComponent } from './text.component';

@Component({
  selector: 'nxng-ds-text-harness',
  template: '<nxng-ds-text [size]="size">{{ text }}</nxng-ds-text>',
})
class TextHarnessComponent {
  @Input() text = 'text';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}

export default {
  title: 'TextComponent',
  component: TextHarnessComponent,
  decorators: [
    moduleMetadata({
      imports: [TextComponent],
    }),
  ],
} as Meta<TextHarnessComponent>;

const Template: Story<TextHarnessComponent> = (args: TextHarnessComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  text: 'Text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  text: 'Text',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  text: 'Text',
};
