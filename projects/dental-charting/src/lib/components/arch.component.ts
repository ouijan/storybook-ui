import { Component, Input } from '@angular/core';
import { IChartArch, IChartQuadrant } from '../models/chart-mouth';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-arch]',
  template: `<svg:circle r="30" />`,
  styles: [],
})
export class ArchComponent implements IChartArch {
  @Input() label = '';
  @Input() quadrants: IChartQuadrant[] = [];
  @Input() isSelected = false;
  @Input() isHighlighted = false;

  // TODO: Requires Quadrant width which requires tooth width
}
