import { Component, Input, HostBinding } from '@angular/core';
import { IChartSurface } from '../models/chart-mouth';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-tooth-center]',
  template: `<svg:circle cx="0" cy="0" r="32" />`,
  styleUrls: ['../styles/surface.scss'],
})
export class ToothCenterComponent implements IChartSurface {
  @HostBinding('class.highlighted')
  @Input() isHighlighted = false;

  @HostBinding('class.selected')
  @Input() isSelected = false;
}
