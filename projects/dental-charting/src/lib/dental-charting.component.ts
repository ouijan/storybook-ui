import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-dental-charting]',
  template: `
    <svg:circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      stroke-width="3"
      fill="red"
    />
  `,
  styles: []
})
export class DentalChartingComponent { }
