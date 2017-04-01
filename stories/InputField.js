import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InputField from '../src/components/InputField/InputField';

storiesOf('InputField', module)
  .add('default', () => (
    <form className="ui form segment big">
      <InputField
        type="text"
        label="Some label"
        placeholder="Placeholder"
        id="to"
      />
    </form>
  ))
  .add('without label', () => (
    <form className="ui form segment big">
      <InputField
        type="text"
        placeholder="Placeholder"
        id="to"
      />
    </form>
  ))
  .add('with icon', () => (
    <form className="ui form segment big">
      <InputField
        type="text"
        label="Some label"
        placeholder="Placeholder"
        id="to"
        customContent={<i className="location arrow link icon red" />}
        customContentPosition="right"
      />
    </form>
  ))
  .add('with error', () => (
    <form className="ui form segment big">
      <InputField
        type="text"
        label="Some label"
        placeholder="Placeholder"
        id="to"
        hasError
      />
    </form>
  ))
  .add('with tooltop', () => (
    <form className="ui form segment big">
      <InputField
        type="text"
        label="Some label"
        placeholder="Placeholder"
        id="to"
        dataTooltip="Example tooltip"
        dataDelay="500"
        dataPosition="top left"
      />
    </form>
  ));
