import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import InputField from '../src/components/InputField/InputField';

storiesOf('InputField', module)
  .add('default', () => (
    <InputField
      type="text"
      label={<p>Email <sup>*</sup></p>}
      placeholder="Placeholder"
      id="to"
      onChange={action('set value')}
    />
  ))
  .add('without label', () => (
    <form className="ui form segment big">
      <InputField
        type="text"
        placeholder="Placeholder"
        id="to"
        onChange={action('set value')}
      />
    </form>
  ))
  .add('with icon', () => (
    <InputField
      type="text"
      label={<p>Email <sup>*</sup></p>}
      placeholder="Placeholder"
      id="to"
      customContent={<i className="location arrow link icon red" />}
      customContentPosition="right"
      onChange={action('set value')}
    />
  ))
  .add('with error', () => (
    <InputField
      type="text"
      label={<p>Email <sup>*</sup></p>}
      placeholder="Placeholder"
      id="to"
      hasError
      error="test error"
      onChange={action('set value')}
    />
  ));
