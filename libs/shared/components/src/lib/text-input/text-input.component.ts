/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';

type OnChange = (value: string) => void;
type OnTouch = (value: string) => void;

@Component({
  selector: 'nxng-ds-text-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <input
      class="
        py-4
        px-3
        bg-gray-800
        rounded
        text-gray-100
        text-xs
        w-full
        outline-none
        placeholder:text-gray-400
        focus:ring-2
        ring-cyan-300
      "
      [placeholder]="placeholder"
      [(ngModel)]="value"
    />
  `,
  styles: [],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() placeholder = '';

  // TODO: Use composition pattern for text-input variants

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: OnChange = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: OnTouch = () => {};

  set value(val: string) {
    this.onChange(val);
    this.onTouch(val);
  }

  constructor(control: NgControl) {
    control.valueAccessor = this;
  }

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: OnChange): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouch): void {
    this.onTouch = fn;
  }
}
