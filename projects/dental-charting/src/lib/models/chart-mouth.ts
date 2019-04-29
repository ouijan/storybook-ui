export interface IChartSurface {
  isSelected: boolean;
  isHighlighted: boolean;
}

export interface IChartTooth extends IChartSurface {
  label: string;
  roots: number;
  facial: IChartSurface;
  lingual: IChartSurface;
  mesial: IChartSurface;
  distal: IChartSurface;
  occlusal: IChartSurface;
}

export interface IChartToothRow {
  teeth: IChartTooth[];
}

export interface IChartQuadrant extends IChartSurface {
  label: string;
  rows: IChartToothRow[];
}

export interface IChartArch extends IChartSurface {
  label: string;
  quadrants: IChartQuadrant[];
}

export interface IChartMouth extends IChartSurface {
  arches: IChartArch[];
}
