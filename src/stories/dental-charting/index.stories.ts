import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { SVGWrap, translate, rootsKnob, matrixKnobs } from './helpers';
import {
  ToothCenterComponent,
  ToothSideComponent,
  ToothRootComponent,
  ToothHitboxesComponent,
  ToothComponent,
  ChartMatrixDirective,
  matrix,
} from 'dental-charting';



const stories = storiesOf('Dental Charting', module)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    declarations: [
      ToothCenterComponent,
      ToothSideComponent,
      ToothRootComponent,
      ToothHitboxesComponent,
      ToothComponent,
      ChartMatrixDirective
    ],
  }));

stories
  .add('Tooth Center', () => ({
    template: SVGWrap(`<svg:g dc-tooth-center
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ${translate()}></svg:g>`),
    props: {
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Tooth Side', () => ({
    template: SVGWrap(`<svg:g dc-tooth-side
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ${translate()}></svg:g>`),
    props: {
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Tooth Root', () => ({
    template: SVGWrap(`<svg:g dc-tooth-root
      [roots]="roots"
      [isSelected]="isSelected"
      [isHighlighted]="isHighlighted"
      ${translate()}></svg:g>`),
    props: {
      roots: rootsKnob(),
      isSelected: boolean('isSelected', false),
      isHighlighted: boolean('isHighlighted', false),
    }
  }))

  .add('Hit Boxes', () => ({
    template: SVGWrap(`<svg:g dc-hitboxes [hitboxes]="hitboxes" ${translate()}></svg:g>`),
    props: {
      hitboxes: [
        [0, 40, 40, 40, 40, -40]
      ]
    }
  }))

  .add('Tooth', () => ({
    template: SVGWrap(`<svg:g dc-tooth [roots]="roots" [label]="label" ${translate()}></svg:g>`),
    props: {
      label: text('label', 'Tooth Label'),
      roots: rootsKnob(),
    }
  }))

  .add('Chart Matrix', () => ({
    template: SVGWrap(`<svg:circle r="25" [dcChartMatrix]="matrix"></svg:circle>`),
    props: {
      matrix: matrixKnobs('matrix'),
    }
  }));
