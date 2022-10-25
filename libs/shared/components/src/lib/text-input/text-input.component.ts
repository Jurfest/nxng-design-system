/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/no-empty-function */
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

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
  // REFACTOR: - Reimplement control value accessor
  // ControlValueAccessor
  onChange: any = () => {};
  onTouch: any = () => {};
  val = '';
  set value(val: string) {
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
