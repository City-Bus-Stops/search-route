import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Card, Grid, Label, Button } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const PointInfo = ({ pointInfo, closePointInfo, loadRouteToBusStop, savePoint }) => (
  <Modal
    open={!isEmpty(pointInfo)}
    size="small"
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
  >
    <Modal.Header >
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column verticalAlign="middle">
            <h2 className="color-beige">
              {pointInfo.name}
            </h2>
          </Grid.Column>
          {
            pointInfo.type === 'bus_stop' &&
            <Grid.Column textAlign="right" verticalAlign="middle">
              {
              pointInfo.isSaved ?
                <span className="color-green">
                  <Icon size="big" name="check circle" link />
                  Saved
              </span> :
                <Icon
                  size="large"
                  name="save"
                  color="green"
                  circular
                  link
                  onClick={() => savePoint(pointInfo.pointId)}
                />
            }
            </Grid.Column>
          }
        </Grid.Row>
      </Grid>
    </Modal.Header>
    <Modal.Content>
      <Grid>
        {
          pointInfo.buses &&
          <Grid.Row>
            <Grid.Column className="font-size-15">
              <Card.Group stackable itemsPerRow={3}>
                {
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
                  )}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
        }
        {
          pointInfo.address &&
          <Grid.Row>
            <Grid.Column className="font-size-15">
              <span className="font-size-15">
                <Icon name="point" color="red" circular />
                <strong>Address:</strong> {pointInfo.address}
              </span>
            </Grid.Column>
          </Grid.Row>
        }
        {
          !isEmpty(pointInfo.busStops) &&
          <Grid.Row columns={1}>
            <Grid.Column className="font-size-15">
              <strong className="font-size-15">
                <Icon name="bus" color="blue" circular />
                Nearest bus stops:
              </strong>
            </Grid.Column>
          </Grid.Row>
        }
      </Grid>
      {
        pointInfo.busStops &&
        <Grid columns={2} stackable doubling>
          {
            pointInfo.busStops.map(busStop =>
              <Grid.Column key={busStop.id} className="font-size-15" stretched>
                <Card fluid>
                  <Card.Content>
                    <Icon link circular name="bus" color="blue" size="big" />
                    <Card.Header>
                      {busStop.name}
                    </Card.Header>
                    <Card.Meta>
                      {busStop.distance} meters from you
                    </Card.Meta>
                    <Card.Description>
                      You can reach the bus stop in
                      <strong> {busStop.timeToReach} minutes</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra className="padding-left-5 padding-right-5">
                    <Grid columns={2} doubling container>
                      <Grid.Row>
                        <Grid.Column mobile={16} widescreen={8} computer={8} stretched>
                          <Button
                            className="point-info-button"
                            color="green"
                            onClick={() => loadRouteToBusStop(busStop)}
                          >Watch on the map
                          </Button>
                        </Grid.Column>
                        <Grid.Column mobile={16} widescreen={8} computer={8} stretched>
                          <Button
                            color="yellow"
                          >
                            Watch schedule
                          </Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </Grid.Column>,
            )
          }
        </Grid>
      }
    </Modal.Content>
    <Modal.Actions>
      <Button
        positive
        size="large"
        onClick={closePointInfo}
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
  closePointInfo: PropTypes.func.isRequired,
  loadRouteToBusStop: PropTypes.func.isRequired,
  savePoint: PropTypes.func,
};

PointInfo.defaultProps = {
  savePoint: () => {},
};

export default PointInfo;
