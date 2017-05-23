import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'semantic-ui-react';
import { isEmpty, head } from 'lodash';

const InputField = ({ type, label, placeholder, id, customContent, meta: { touched, error },
  info, iconPosition, input,
}) => (
  <div>
    {
      label && <label className="text-align-left input-label" htmlFor={label}>{label}</label>
    }
    <Input
      fluid
      error={touched && !isEmpty(head(error))}
      icon={customContent}
      iconPosition={iconPosition}
      type={type}
      placeholder={placeholder}
      id={id}
      {...input}
    />
    {
      touched &&
      !isEmpty(head(error)) &&
      <Label className="font-size-13" basic color="red" pointing>{head(error)}</Label>
    }
    {info}
  </div>
);

InputField.propTypes = {
  input: PropTypes.shape().isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  meta: PropTypes.shape().isRequired,
  label: PropTypes.shape(),
  placeholder: PropTypes.string,
  customContent: PropTypes.element,
  iconPosition: PropTypes.string,
  info: PropTypes.element,
};

InputField.defaultProps = {
  placeholder: '',
  label: null,
  customContent: null,
  iconPosition: null,
  info: null,
};

export default InputField;
