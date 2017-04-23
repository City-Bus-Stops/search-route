import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const InputField = ({
  type, label, placeholder, id, customContent, customContentPosition,
  hasError, error, initialValue, onChange,
}) => (
  <div>
    {
      label && <label className="text-align-left input-label" htmlFor={label}>{label}</label>
    }
    <div
      className={`ui ${customContentPosition} icon  input fluid ${hasError ? 'error' : ''}`}
    >
      {customContent}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={initialValue}
        onChange={e => onChange(e.target.value.trim())}
      />
    </div>
    {
      hasError &&
      <Label basic color="red" pointing>{error}</Label>
    }
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.shape(),
  placeholder: PropTypes.string,
  customContent: PropTypes.element,
  customContentPosition: PropTypes.string,
  hasError: PropTypes.bool,
  error: PropTypes.string,
  initialValue: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  label: null,
  customContent: null,
  customContentPosition: 'left',
  hasError: false,
  error: 'Please enter a value',
  initialValue: '',
};

export default InputField;
