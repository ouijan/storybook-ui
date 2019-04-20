import { Component, Input, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-tooth-root]',
  templateUrl: './tooth-root.component.html',
  styleUrls: ['../surface.scss'],
})
export class ToothRootComponent {
  @Input() roots = 1;

  @HostBinding('class.highlighted')
  @Input() isHighlighted = false;

  @HostBinding('class.selected')
  @Input() isSelected = false;
}
