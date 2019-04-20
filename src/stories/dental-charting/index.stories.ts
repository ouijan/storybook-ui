import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DentalChartingComponent } from 'dental-charting';



function SvgDecorator(storyFn: () => any) {
  const story: any = storyFn();
  story.template = `<svg> ${story.template} </svg>`;
  return story;
}

const stories = storiesOf('Dental Charting', module)
  .addDecorator(moduleMetadata({
    declarations: [DentalChartingComponent],
  }));


stories
  .addDecorator(SvgDecorator)
  .add('has dental chart', () => ({
    template: `<svg:g dc-dental-charting></svg:g>`
  }));
