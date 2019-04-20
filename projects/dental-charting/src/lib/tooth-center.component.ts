import { Component, Input, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-tooth-center]',
  template: `<svg:circle cx="0" cy="0" r="32" />`,
  styleUrls: ['../surface.scss'],
})
export class ToothCenterComponent {
  @HostBinding('class.highlighted')
  @Input() isHighlighted = false;

  @HostBinding('class.selected')
  @Input() isSelected = false;
}