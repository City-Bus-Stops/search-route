import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Grid, Header, Card, Segment, Label } from 'semantic-ui-react';

const PointInfo = ({ isOpen }) => (
  <Modal
    open={isOpen}
    size="small"
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
  >
    <Modal.Header>
      <Grid columns={3} container>
        <Grid.Column verticalAlign="middle">
          <Icon name="arrow left" color="blue" link />
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="center">
          <Header as="h2">
            Фолюш
         </Header>
        </Grid.Column>
        <Grid.Column verticalAlign="middle" textAlign="right">
          <Icon name="arrow right" color="blue" link />
        </Grid.Column>
      </Grid>
    </Modal.Header>
    <Modal.Content>
      <Segment padded basic>
        <Card.Group stackable itemsPerRow={3}>
          <Card>
            <Card.Content>
              <Card.Description className="font-size-20">
                <Icon name="bus" color="green" link />
                23
                <Label color="red" size="large" horizontal className="float-right">15 min</Label>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Description className="font-size-20">
                <Icon name="bus" color="green" link />
                3
                <Label color="red" size="large" horizontal className="float-right">7 min</Label>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Description className="font-size-20">
                <Icon name="bus" color="green" link />
                23
                <Label color="red" size="large" horizontal className="float-right">1 min</Label>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Card.Description className="font-size-20">
                <Icon name="bus" color="green" link />
                36
                <Label color="red" size="large" horizontal className="float-right">5 min</Label>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    </Modal.Content>
    <Modal.Actions>
      <Grid columns={2} container>
        <Grid.Column verticalAlign="middle" textAlign="left">
          <Header size="small">
            <div
              className="ui icon"
              data-tooltip="Refresh"
              data-delay="500"
              data-variation="small"
              data-position="left center"
            >
              <Icon name="repeat" color="blue" link />
            </div>
            Response time: 15:18:23 a.m.
          </Header>
        </Grid.Column>
        <Grid.Column>
          <button className="ui positive large button">Close</button>
        </Grid.Column>
      </Grid>
    </Modal.Actions>
  </Modal>
);

PointInfo.propTypes = {
  isOpen: PropTypes.bool,
};

PointInfo.defaultProps = {
  isOpen: false,
};

export default PointInfo;
