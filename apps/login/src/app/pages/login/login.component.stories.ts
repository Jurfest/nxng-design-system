import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import { LoginComponent } from './login.component';

export default {
  title: 'Pages/Login',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [
        LoginComponent,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }),
  ],
  // parameters: {
  //   msw: {
  //     handlers: [
  //       rest.post(`${environment.baseUrl}/login`, (req, res, ctx) => {
  //         return res(
  //           ctx.json({
  //             id: '1',
  //             name: 'Diego',
  //           })
  //         );
  //       }),
  //     ],
  //   },
  // },
} as Meta<LoginComponent>;

const Template: Story<LoginComponent> = (args: LoginComponent) => ({
  props: args,
});

export const EmptyForm = Template.bind({});
EmptyForm.args = {};
EmptyForm.parameters = {
  layout: 'fullscreen',
  panelPosition: 'bottom',
};

// More on interaction testing: https://storybook.js.org/docs/angular/writing-tests/interaction-testing
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  const emailInput = await canvas.getAllByPlaceholderText('Digite seu email')[1];
  await userEvent.type(emailInput, 'email@provider.com', {
    delay: 100,
  });

  const passwordInput = await canvas.getAllByPlaceholderText('******')[1]
  await userEvent.type(passwordInput, 'a-random-password', {
    delay: 100,
  });

  // See https://storybook.js.org/docs/angular/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  const loginButton = await canvas.getByRole('button');
  await userEvent.click(loginButton,);

  // NOTE: - NOT WORKING WITH ASYNC PIPE
  // const loggedInMsg = await canvas.getByText('Login realizado!');
  // await expect(loggedInMsg).toBeInTheDocument();
};
