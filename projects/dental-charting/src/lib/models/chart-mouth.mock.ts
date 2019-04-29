import { IChartMouth, IChartSurface, IChartArch, IChartQuadrant, IChartTooth, IChartToothRow } from './chart-mouth';
import * as faker from 'faker';

export function mockSurface(): IChartSurface {
  return {
    isHighlighted: false,
    isSelected: false,
  };
}

export function mockTooth(): IChartTooth {
  return {
    ...mockSurface(),
    label: faker.name.lastName(),
    roots: faker.random.number({ min: 1, max: 3, precision: 1 }),
    mesial: mockSurface(),
    distal: mockSurface(),
    facial: mockSurface(),
    lingual: mockSurface(),
    occlusal: mockSurface(),
  };
}

export function mockToothRow(): IChartToothRow {
  return {
    teeth: [
      mockTooth(),
      mockTooth(),
      mockTooth(),
      mockTooth(),
      mockTooth(),
      mockTooth(),
      mockTooth(),
      mockTooth(),
    ],
  };
}

export function mockQuadrant(): IChartQuadrant {
  return {
    ...mockSurface(),
    label: faker.name.lastName(),
    rows: [
      mockToothRow(),
      mockToothRow(),
    ]
  };
}

export function mockArch(): IChartArch {
  return {
    ...mockSurface(),
    label: faker.name.lastName(),
    quadrants: [
      mockQuadrant(),
      mockQuadrant(),
    ]
  };
}

export function mockMouth(): IChartMouth {
  return {
    ...mockSurface(),
    arches: [
      mockArch(),
      mockArch(),
    ],
  };
}
