import React from 'react';
import { storiesOf } from '@kadira/storybook';
import InputField from '../src/components/InputField/InputField';

storiesOf('InputField', module)
  .add('default', () => (
    <InputField
      input={{}}
      type="text"
      id="to"
      label={<p>Email <sup>*</sup></p>}
      placeholder="Placeholder"
      meta={{}}
    />
  ))
  .add('without label', () => (
    <form className="ui form segment big">
      <InputField
        input={{}}
        type="text"
        id="to"
        placeholder="Placeholder"
        meta={{}}
      />
    </form>
  ))
  .add('with icon', () => (
    <InputField
      input={{}}
      type="text"
      id="to"
      placeholder="Placeholder"
      meta={{}}
      customContent={<i className="location arrow link icon red" />}
    />
  ))
  .add('with error', () => (
    <InputField
      input={{}}
      type="text"
      id="to"
      placeholder="Placeholder"
      meta={{
        error: ['some error'],
        touched: true,
      }}
      customContent={<i className="location arrow link icon red" />}
    />
  ));
