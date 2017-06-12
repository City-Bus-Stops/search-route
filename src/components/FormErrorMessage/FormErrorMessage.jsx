import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import { head } from 'lodash';

const FormErrorMessage = ({ meta: { error } }) => (
  <div>
    {
      error &&
      <Message size="small" color="red">
        {head(error)}
      </Message>
    }
  </div>
);

FormErrorMessage.propTypes = {
  meta: PropTypes.shape().isRequired,
};

export default FormErrorMessage;
