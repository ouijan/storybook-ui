import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalChartingComponent } from './dental-charting.component';

describe('DentalChartingComponent', () => {
  let component: DentalChartingComponent;
  let fixture: ComponentFixture<DentalChartingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalChartingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalChartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
