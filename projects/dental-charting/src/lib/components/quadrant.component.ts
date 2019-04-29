import { Component, Input } from '@angular/core';
import { IChartQuadrant, IChartToothRow } from '../models/chart-mouth';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-quadrant]',
  templateUrl: './quadrant.component.html',
  styles: [],
})
export class QuadrantComponent implements IChartQuadrant {
  @Input() label: string;
  @Input() rows: IChartToothRow[] = [];
  @Input() isHighlighted = false;
  @Input() isSelected = false;

  // TODO: Replace this with a matrix
  getRowTransform(index: number): string {
    const rowHeight = 400;
    const yOffset = rowHeight * index;
    return `translate(0, ${yOffset})`;
  }

  // TODO: Replace this as teeth handle their own index etc (matrix)
  getToothTransform(index: number): string {
    const toothWidth = 200;
    const xOffset = toothWidth * index;
    return `translate(${xOffset}, 0)`;
  }
}
