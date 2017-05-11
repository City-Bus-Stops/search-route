import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const confirmHeaderTypes = {
  remove: 'remove-confirm',
};

const ConfirmComponent = ({ header, question, type, onConfirm, onCancel }) => (
  <Modal
    size="small"
    open={!isEmpty(question)}
  >
    <Modal.Header className={confirmHeaderTypes[type] || 'remove-confirm'}>
      <p className="font-style-oblique">
        {header}
      </p>
      <Icon name="close" link onClick={onCancel} />
    </Modal.Header>
    <Modal.Content>
      <p className="font-size-15">
        {question}
      </p>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={onCancel}>
        No
      </Button>
      <Button
        positive
        icon="checkmark"
        labelPosition="right"
        content="Yes"
        onClick={() => {
          onConfirm();
          onCancel();
        }}
      />
    </Modal.Actions>
  </Modal>
);

ConfirmComponent.propTypes = {
  header: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConfirmComponent;
