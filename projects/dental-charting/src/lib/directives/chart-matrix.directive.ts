import { Directive, OnInit, HostBinding, Input } from '@angular/core';
import { ChartMatrix } from '../models/chart-matrix';

@Directive({
  selector: '[dcChartMatrix]'
})
export class ChartMatrixDirective implements OnInit {
  @Input(`dcChartMatrix`) matrix: ChartMatrix;

  ngOnInit(): void {
    console.log(this);
  }

  @HostBinding('attr.transform')
  get transform(): string {
    return this.matrix.toTransformString();
  }

}
