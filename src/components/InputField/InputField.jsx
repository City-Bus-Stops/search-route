import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'semantic-ui-react';

const InputField = ({
  type, label, placeholder, id, customContent, hasError, error, value, onChange, info, iconPosition,
}) => (
  <div>
    {
      label && <label className="text-align-left input-label" htmlFor={label}>{label}</label>
    }
    <Input
      fluid
      error={hasError}
      icon={customContent}
      iconPosition={iconPosition}
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={e => onChange(e.target.value.trim())}
    />
    {
      hasError &&
      <Label basic color="red" pointing>{error}</Label>
    }
    {info}
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.shape(),
  placeholder: PropTypes.string,
  customContent: PropTypes.element,
  iconPosition: PropTypes.string,
  hasError: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.string,
  info: PropTypes.element,
};

InputField.defaultProps = {
  placeholder: '',
  label: null,
  customContent: null,
  iconPosition: null,
  hasError: false,
  error: 'Please enter a value',
  value: '',
  info: null,
};

export default InputField;
