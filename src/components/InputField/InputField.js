import React, { PropTypes } from 'react';

const InputField = ({
  type, name, placeholder, id, customContent, customContentPosition,
}) => (
  <div className="field">
    <label htmlFor="from">From</label>
    <div className={`ui ${customContentPosition} icon input`}>
      {customContent}
      <input
        type={type}
        name={name}
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
  customContent: PropTypes.shape,
  customContentPosition: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  customContent: null,
  customContentPosition: 'left',
};

export default InputField;
