import React, { PropTypes } from 'react';

const InputField = ({
  type, name, placeholder, id, customContent, customContentPosition,
}) => (
  <div className="field">
    <label htmlFor="from">{name}</label>
    <div className={`ui ${customContentPosition} icon input`}>
      {customContent}
      <input
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  </div>
);

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  customContent: PropTypes.node,
  customContentPosition: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  customContent: null,
  customContentPosition: 'left',
};

export default InputField;
