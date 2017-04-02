import React, { PropTypes } from 'react';
import { Modal } from 'semantic-ui-react';

const FoundedRouteInfo = ({ isOpen }) => (
  <Modal
    open={isOpen}
    closeIcon="close"
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
  >
    <Modal.Header as="h3" className="ui">
      <div className="ui grid">
        <div className="two column row">
          <div className="column">
            <h2 className="ui header blue">
              Фолюш
            </h2>
          </div>
          <div className="right aligned column">
            <div
              className="ui icon"
              data-tooltip="Save to favorites"
              data-delay="500"
              data-variation="small"
              data-position="right center"
            >
              <i className="green large circular link save icon" />
            </div>
          </div>
        </div>
        <div className="one column row">
          <div className="column">
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
        <div className="ui large steps fluid">
          <div className="step">
            <i className="user icon" />
            <div className="content">
              <div className="title">From</div>
              <div className="description">Улица О.Соломовой 135</div>
            </div>
          </div>
          <div className="step">
            <i className="flag checkered icon" />
            <div className="content">
              <div className="title">To</div>
              <div className="description">Проспект Янки Купалы 26а</div>
            </div>
          </div>
        </div>
        <div className="one column row">
          <div className="sixteen wide column">
            <div className="ui basic segment">
              <div className="ui big relaxed divided list">
                <div className="item">
                  <div className="content">
                    <div className="header">Фолюш</div>
                    1 min
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">Улица Поповича</div>
                    2 min
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">Улица Декабристов</div>
                    4 min
                  </div>
                </div>
                <div className="item">
                  <div className="content">
                    <div className="header">Улица Горновых</div>
                      7 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="ui header blue">
          Bus stops count: 7
        </h3>
      </div>
    </Modal.Content>
    <div className="actions">
      <button className="ui positive large button">Close</button>
    </div>
  </Modal>
);

FoundedRouteInfo.propTypes = {
  isOpen: PropTypes.bool,
};

FoundedRouteInfo.defaultProps = {
  isOpen: false,
};

export default FoundedRouteInfo;
