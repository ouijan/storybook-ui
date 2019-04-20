import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DentalChartingComponent } from './dental-charting.component';
import { ToothCenterComponent } from './tooth-center.component';
import { ToothSideComponent } from './tooth-side.component';
import { ToothRootComponent } from './tooth-root.component';
import { ToothHitboxesComponent } from './hitboxes.component';
import { ToothComponent } from './tooth.component';

@NgModule({
  declarations: [
    DentalChartingComponent,
    ToothCenterComponent,
    ToothSideComponent,
    ToothRootComponent,
    ToothHitboxesComponent,
    ToothComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DentalChartingComponent,
    ToothCenterComponent,
    ToothSideComponent,
    ToothRootComponent,
    ToothHitboxesComponent,
    ToothComponent
  ]
})
export class DentalChartingModule { }
