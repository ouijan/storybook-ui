import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-tooth-side]',
  template: `<svg:path
    transform="translate(-40, -93)"
    d="M61.4,92.9c0-9.5,3.4-18.1,9-24.9L37.9,35.5C24,50.6,15.4,70.8,\
    15.4,92.9s8.5,42.3,22.4,57.4l32.6-32.6C64.8,111.1,61.4,102.4,61.4,92.9z"
  />`,
  styleUrls: ['../styles/surface.scss'],
})
export class ToothSideComponent {
  @HostBinding('class.highlighted')
  @Input() isHighlighted = false;

  @HostBinding('class.selected')
  @Input() isSelected = false;
}
