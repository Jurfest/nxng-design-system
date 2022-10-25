import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nxng-ds-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="text-gray-100
      "
      [ngClass]="{
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-md': size === 'lg'
      }"
    >
      <ng-content></ng-content>
    </span>
  `,
  styles: [],
})
export class TextComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
