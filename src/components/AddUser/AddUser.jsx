import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Grid } from 'semantic-ui-react';
import { Field } from 'redux-form';

import InputField from '../InputField/InputField';

const AddUserComponent = ({ handleSubmit, saveUser, isOpen, onClose }) => (
  <Modal
    dimmer="blurring"
    size="small"
    open={isOpen}
    onClose={onClose}
  >
    <Modal.Header>
      Add User
    </Modal.Header>
    <Modal.Content>
      <Grid padded>
        <Grid.Row>
          <Grid.Column largeScreen={12} mobile={16} widescreen={12}>
            <Field
              className="max-width-500"
              id="email"
              name="email"
              component={InputField}
              type="text"
              label={<p>Email <sup>*</sup></p>}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column largeScreen={12} mobile={16} widescreen={12}>
            <Field
              className="max-width-500"
              id="userName"
              name="userName"
              component={InputField}
              type="text"
              label={<p>User Name <sup>*</sup></p>}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
    <Modal.Actions>
      <Button negative size="big" onClick={onClose}>
        Close
      </Button>
      <Button positive size="big" onClick={handleSubmit(saveUser)}>
        Save
      </Button>
    </Modal.Actions>
  </Modal>
);

AddUserComponent.propTypes = {
  saveUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddUserComponent;
