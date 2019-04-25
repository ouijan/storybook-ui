import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'svg:g [dc-hitboxes]',
  template: `<svg:polygon
    *ngFor="let points of hitboxes"
    class="hitbox"
    [attr.points]="points"
  />`,
  styles: [`
    .hitbox {
      fill: none;
      stroke: magenta;
      stroke-width: 1;
    }
  `]
})
export class ToothHitboxesComponent {
  @Input() hitboxes: number[][] = [];
}
