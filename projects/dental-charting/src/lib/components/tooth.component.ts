import { Component, Input } from '@angular/core';
import { IChartTooth, IChartSurface } from '../models/chart-mouth';
import { mockSurface } from '../models/chart-mouth.mock';

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
export class ToothComponent implements IChartTooth {
  facial: IChartSurface = mockSurface();
  lingual: IChartSurface = mockSurface();
  mesial: IChartSurface = mockSurface();
  distal: IChartSurface = mockSurface();
  occlusal: IChartSurface = mockSurface();
  @Input() label = '';
  @Input() roots = 1;
  @Input() isHighlighted = false;
  @Input() isSelected = false;
}
