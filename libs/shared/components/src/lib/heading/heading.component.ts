import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nxng-ds-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2
      class="text-gray-100 font-bold"
      [ngClass]="{
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg'
      }"
    >
      <ng-content></ng-content>
    </h2>
  `,
  styles: [],
})
export class HeadingComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
