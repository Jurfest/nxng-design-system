import { Component, Input } from '@angular/core';
import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { HeadingComponent } from './heading.component';

@Component({
  selector: 'nxng-ds-heading-harness',
  template: '<nxng-ds-heading [size]="size">{{ text }}</nxng-ds-heading>',
})
class HeadingHarnessComponent {
  @Input() text = 'text';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}

export default {
  title: 'Components/Heading',
  component: HeadingHarnessComponent,
  decorators: [
    moduleMetadata({
      imports: [HeadingComponent],
    }),
  ],
} as Meta<HeadingHarnessComponent>;

const Template: Story<HeadingHarnessComponent> = (
  args: HeadingHarnessComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  text: 'Heading',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  text: 'Heading',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  text: 'Heading',
};
