import { number } from '@storybook/addon-knobs';
import { ChartMatrix } from 'dental-charting';


export function SVGWrap(content: string): string {
  return `<svg
    style="outline: 1px dashed rgba(0, 0, 0, .2)"
    height="400px"
    width="100%"
    viewBox="0 0 600 1000">
    ${content}
  </svg>`;
}

export function translate(x: number = 220, y: number = 220): string {
  return `transform="translate(${x} ${y})"`;
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
    xPos: number('xPos', 220, undefined, name),
    yPos: number('yPos', 220, undefined, name),
    xScale: number('xScale', 1, undefined, name),
    yScale: number('yScale', 1, undefined, name),
    rotation: number('rotation', 0, undefined, name),
  });
}
