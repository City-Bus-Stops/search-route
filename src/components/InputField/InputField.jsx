import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  type, label, placeholder, id, customContent, customContentPosition,
  hasError, error, dataTooltip, dataDelay, dataPosition,
}) => (
  <div className="field">
    {
      label && <label htmlFor={label}>{label}</label>
    }
    <div
      className={`ui ${customContentPosition} icon input ${hasError ? 'error' : ''}`}
      data-tooltip={dataTooltip}
      data-delay={dataDelay}
      data-position={dataPosition}
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
  dataTooltip: PropTypes.string,
  dataDelay: PropTypes.string,
  dataPosition: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  customContent: PropTypes.element,
  customContentPosition: PropTypes.string,
  hasError: PropTypes.bool,
  error: PropTypes.string,
};

InputField.defaultProps = {
  dataTooltip: null,
  dataDelay: '0',
  dataPosition: '',
  placeholder: '',
  label: '',
  customContent: null,
  customContentPosition: 'left',
  hasError: false,
  error: 'Please enter a value',
};

export default InputField;
