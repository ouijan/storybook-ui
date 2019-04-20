import { number } from '@storybook/addon-knobs';


export function SVGWrap(content: string): string {
  return `<svg
    style="outline: 1px dashed rgba(0, 0, 0, .2)"
    height="400px"
    width="100%">
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
