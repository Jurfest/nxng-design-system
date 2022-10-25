import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { HeadingComponent } from './heading/heading.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonComponent,
    HeadingComponent,
    TextComponent,
    TextInputComponent,
  ],
  exports: [
    ButtonComponent,
    HeadingComponent,
    TextComponent,
    TextInputComponent,
  ],
})
export class SharedComponentsModule {}
