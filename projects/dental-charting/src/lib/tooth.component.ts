import { Component, Input, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-tooth]',
  templateUrl: `./tooth.component.html`,
  styles: [`
    .tooth-label {
      text-anchor: middle;
    }
  `],
})
export class ToothComponent {
  @Input() roots = 1;
  @Input() label = '';
}
