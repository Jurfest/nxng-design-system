import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
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
