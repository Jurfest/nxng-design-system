import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

export default {
  title: 'TextInputComponent',
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<TextInputComponent>;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type your email address',
};
