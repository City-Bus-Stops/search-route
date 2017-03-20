import React from 'react';
import { Modal } from 'semantic-ui-react';

const FoundedRouteInfo = () => (
  <Modal
    open
    closeIcon="close"
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
  >
    <Modal.Header as="h3" className="ui">
      <div className="ui grid">
        <div className="two column row">
          <div className="column">
            <h3 className="ui header blue">
              Фолюш
            </h3>
          </div>
          <div className="right aligned column">
            <div
              className="ui icon"
              data-tooltip="Refresh"
              data-delay="500"
              data-variation="small"
              data-position="right center"
            >
              Response sended: 15:18:23 a.m.
            <i className="blue link repeat icon" />
            </div>
          </div>
        </div>
      </div>
    </Modal.Header>
    <Modal.Content>
      <div className="ui grid">
        <div className="one column row">
          <div className="twelve wide column">
            <h3 className="ui header blue">
              From:
            </h3>
            Улица О.Соломовой 135
          </div>
        </div>
        <div className="one column row">
          <div className="twelve wide column">
            <h3 className="ui header blue">
              To:
            </h3>
            Проспект Янки Купалы 26а
          </div>
        </div>
      </div>
    </Modal.Content>
  </Modal>
);

export default FoundedRouteInfo;
