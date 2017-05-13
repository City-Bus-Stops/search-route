import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const confirmHeaderTypes = {
  remove: 'remove-confirm',
};

const ConfirmComponent = ({ config: { header, question, type, onConfirm, onCancel } }) => (
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
        onClick={onConfirm}
      />
    </Modal.Actions>
  </Modal>
);

ConfirmComponent.propTypes = {
  config: PropTypes.shape({
    header: PropTypes.string,
    question: PropTypes.string,
    type: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
  }).isRequired,
};

export default ConfirmComponent;
