import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Card, Segment, Label, Button } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const PointInfo = ({ pointInfo, clearMapPointInfo }) => (
  <Modal
    open={!isEmpty(pointInfo)}
    size="small"
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
  >
    <Modal.Header >
      <h2 className="color-beige">
        {pointInfo.name}
      </h2>
    </Modal.Header>
    <Modal.Content>
      <Segment padded basic>
        <Card.Group stackable itemsPerRow={3}>
          {
          pointInfo.buses &&
          pointInfo.buses.map(bus =>
            <Card key={bus.id}>
              <Card.Content>
                <Card.Description className="font-size-20">
                  <Icon name="bus" color="green" link />
                  {bus.number}
                  <Label
                    horizontal
                    color="red"
                    size="large"
                    className="float-right"
                  >
                    {bus.time} min
                  </Label>
                </Card.Description>
              </Card.Content>
            </Card>,
          )
        }
        </Card.Group>
        {
          pointInfo.address &&
          <span className="font-size-16">
            <Icon name="point" color="red" circular />
            <strong>Address:</strong> {pointInfo.address}
          </span>
        }
      </Segment>
    </Modal.Content>
    <Modal.Actions>
      <Button
        positive
        size="large"
        onClick={clearMapPointInfo}
      >
        Close
      </Button>
    </Modal.Actions>
  </Modal>
);

PointInfo.propTypes = {
  pointInfo: PropTypes.shape({
    type: PropTypes.string,
    info: PropTypes.shape(),
  }).isRequired,
  clearMapPointInfo: PropTypes.func.isRequired,
};

export default PointInfo;
