import { Component, Input, HostBinding } from '@angular/core';
import { IChartSurface } from '../models/chart-mouth';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-tooth-root]',
  templateUrl: './tooth-root.component.html',
  styleUrls: ['../styles/surface.scss'],
})
export class ToothRootComponent implements IChartSurface {
  @Input() roots = 1;

  @HostBinding('class.highlighted')
  @Input() isHighlighted = false;

  @HostBinding('class.selected')
  @Input() isSelected = false;
}
