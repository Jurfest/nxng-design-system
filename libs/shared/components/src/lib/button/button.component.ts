import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nxng-ds-button',
  standalone: true,
  imports: [CommonModule],
  template: `<button
    class="
        py-3
        px-4
        bg-cyan-500
        rounded
        font-semibold
        text-black text-small
        w-full
        transition-colors
        hover:bg-cyan-300
        focus:ring-2
        ring-white
      "
  >
    <ng-content></ng-content>
  </button>`,
  styles: [],
})
export class ButtonComponent {}
