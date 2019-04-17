import { storiesOf, moduleMetadata } from '@storybook/angular';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from 'button';


const BUTTON_TEMPLATE = `<ui-button
  [text]="text"
  [disabled]="disabled"
  (click)="onClick($event)"
></ui-button>`;

const stories = storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  );

stories.add('basic', () => ({
  template: BUTTON_TEMPLATE,
  props: {
    text: text('text', 'Hello Storybook'),
    disabled: boolean('disabled', false),
  }
}), { notes: `A button that can be clicked.` });

stories.add('disabled', () => ({
  template: BUTTON_TEMPLATE,
  props: {
    text: text('text', 'Hello Storybook'),
    disabled: boolean('disabled', true),
  },
}), { notes: `A button is greyed out when it is disabled.` });

stories.add('with click', () => ({
  template: BUTTON_TEMPLATE,
  props: {
    text: text('text', 'Hello Storybook'),
    disabled: boolean('disabled', false),
    onClick: action('onClick'),
  },
}), { notes: 'Actions do not trigger when a button is disabled' });
