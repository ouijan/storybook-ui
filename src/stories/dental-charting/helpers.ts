import { number } from '@storybook/addon-knobs';
import { ChartMatrix } from 'dental-charting';


export function SVGWrap(content: string, height: number = 500, width: number = 500): string {
  return `<svg
    style="outline: 1px dashed rgba(0, 0, 0, .2)"
    height="${height}px"
    width="${width}"
    viewBox="0 0 ${width} ${height}">
    ${content}
  </svg>`;
}

export function SVGCenter(content: string, height: number = 500, width: number = 500): string {
  const xPos = width / 2;
  const yPos = height / 2;
  return `<svg:g transform="translate(${xPos}, ${yPos})">${content}</svg:g>`;
}

export function rootsKnob(name: string = 'roots', count: number = 3) {
  return number(name, count, {
    min: 1,
    max: 3,
    range: true,
    step: 1,
  });
}

export function matrixKnobs(name: string = 'matrix') {
  return Object.assign(new ChartMatrix(), {
    xPos: number('xPos', 50, undefined, name),
    yPos: number('yPos', 50, undefined, name),
    xScale: number('xScale', 1, undefined, name),
    yScale: number('yScale', 1, undefined, name),
    rotation: number('rotation', 0, undefined, name),
  });
}
