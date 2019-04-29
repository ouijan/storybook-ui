import { Component, Input } from '@angular/core';
import { IChartMouth, IChartArch } from '../models/chart-mouth';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-mouth]',
  template: `<svg:circle r="30" />`,
  styles: [],
})
export class MouthComponent implements IChartMouth {
  @Input() arches: IChartArch[] = [];
  @Input() isSelected = false;
  @Input() isHighlighted = false;

  // TODO: Requires Arch Height which requires Quadrant Height which requires tooth height
}
