import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToothCenterComponent } from './components/tooth-center.component';
import { ToothSideComponent } from './components/tooth-side.component';
import { ToothRootComponent } from './components/tooth-root.component';
import { ToothHitboxesComponent } from './components/hitboxes.component';
import { ToothComponent } from './components/tooth.component';
import { ChartMatrixDirective } from './directives/chart-matrix.directive';
import { QuadrantComponent } from './components/quadrant.component';
import { ArchComponent } from './components/arch.component';
import { MouthComponent } from './components/mouth.component';

@NgModule({
  declarations: [
    ToothCenterComponent,
    ToothSideComponent,
    ToothRootComponent,
    ToothHitboxesComponent,
    ToothComponent,
    ChartMatrixDirective,
    QuadrantComponent,
    ArchComponent,
    MouthComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ToothCenterComponent,
    ToothSideComponent,
    ToothRootComponent,
    ToothHitboxesComponent,
    ToothComponent,
    ChartMatrixDirective,
    QuadrantComponent,
    ArchComponent,
    MouthComponent,
  ]
})
export class DentalChartingModule { }
