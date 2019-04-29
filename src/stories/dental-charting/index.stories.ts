import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { SVGWrap, rootsKnob, matrixKnobs, SVGCenter } from './helpers';
import {
  ToothCenterComponent,
  ToothSideComponent,
  ToothRootComponent,
  ToothHitboxesComponent,
  ToothComponent,
  QuadrantComponent,
  ArchComponent,
  MouthComponent,
  ChartMatrixDirective,
  mockQuadrant,
  mockArch,
  mockMouth,
} from 'dental-charting';
import { action } from '@storybook/addon-actions';



const stories = storiesOf('Dental Charting', module)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    declarations: [
      ToothCenterComponent,
      ToothSideComponent,
      ToothRootComponent,
      ToothHitboxesComponent,
      ToothComponent,
      QuadrantComponent,
      ArchComponent,
      MouthComponent,
      ChartMatrixDirective
    ],
  }));

stories
  .add('Tooth Center', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-tooth-center
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Tooth Side', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-tooth-side
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Tooth Root', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-tooth-root
      [roots]="roots"
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      roots: rootsKnob(),
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Tooth', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-tooth
      [roots]="roots"
      [label]="label"
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      label: text('label', '24'),
      roots: rootsKnob(),
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Quadrant', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-quadrant
      [label]="label"
      [rows]="rows"
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      label: text('label', 'Quadrant 3'),
      rows: mockQuadrant().rows,
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Arch', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-arch
      [label]="label"
      [quadrants]="quadrants"
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      label: text('label', 'Upper Arch'),
      quadrants: mockArch().quadrants,
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Mouth', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-mouth
      [arches]="arches"
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ></svg:g>`)),
    props: {
      arches: mockMouth().arches,
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Hit Boxes', () => ({
    template: SVGWrap(SVGCenter(`<svg:g dc-hitboxes [hitboxes]="hitboxes"></svg:g>`)),
    props: {
      hitboxes: [
        [0, 40, 40, 40, 40, -40]
      ]
    }
  }))

  .add('Chart Matrix', () => ({
    template: SVGWrap(SVGCenter(`
      <svg:circle r="3" fill="cyan"></svg:circle>
      <svg:rect width="25" height="25" fill="red" [dcChartMatrix]="matrix"></svg:rect>
    `)),
    props: {
      matrix: matrixKnobs('matrix'),
    }
  }))

  .add('SVG Mouse Interactions', () => ({
    template: `<svg (prSVGMouseEvents)="mouseEvent($event)"></svg>`,
    props: {
      mouseEvent: action('onClick'),
    }
  }));
