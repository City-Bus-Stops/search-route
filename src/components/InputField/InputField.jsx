import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type, label, placeholder, id, customContent, customContentPosition,
  hasError, error,
}) => (
  <div className="field">
    {
      label && <label className="text-align-left" htmlFor={label}>{label}</label>
    }
    <div
      className={`ui ${customContentPosition} icon input ${hasError ? 'error' : ''}`}
    >
      {customContent}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
    {
      hasError && <div className="ui pointing red basic label">
        {error}
      </div>
    }
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.shape(),
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  customContent: PropTypes.element,
  customContentPosition: PropTypes.string,
  hasError: PropTypes.bool,
  error: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  label: null,
  customContent: null,
  customContentPosition: 'left',
  hasError: false,
  error: 'Please enter a value',
};

export default InputField;
