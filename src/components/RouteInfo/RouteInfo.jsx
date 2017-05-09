import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Accordion, List, Grid, Step, Icon, Label, Button } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const instructionIconTypes = {
  start: 'user',
  foot: 'road',
  bus: 'bus',
  end: 'flag checkered',
};

const instructionIconColors = {
  start: 'green',
  foot: 'yellow',
  bus: 'blue',
  end: 'red',
};


const RouteInfo = ({ clearRouteInfo, routeInfo, saveToFavorites }) => (
  <Modal
    open={!isEmpty(routeInfo)}
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
    onClose={clearRouteInfo}
  >
    <Modal.Header as="h3" className="ui">
      <Grid container>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Icon size="large" name="bus" color="blue" circular link /> 23
          </Grid.Column>
          <Grid.Column textAlign="right">
            {
              routeInfo.isSaved ?
                <Icon size="large" name="check" color="green" circular link /> :
                <Icon
                  size="large"
                  name="save"
                  color="green"
                  circular
                  link
                  onClick={() => saveToFavorites(routeInfo.routeId)}
                />
            }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Header>
    <Modal.Content>
      <Grid >
        <Grid.Row>
          <Grid.Column className="font-size-15">
            <strong>From:</strong> {routeInfo.from}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="font-size-15">
            <strong>To:</strong> {routeInfo.to}
          </Grid.Column>
        </Grid.Row>
        {
          routeInfo.nearestBuses &&
          <Grid.Row>
            <Grid.Column>
              <strong className="padding-right-5 font-size-15">
                Nearest buses:
              </strong>
              {
              routeInfo.nearestBuses.map(nearestBus =>
                <Label key={nearestBus.id} color="red" size="large" horizontal>
                  {nearestBus.time}
                </Label>,
              )
            }
            </Grid.Column>
          </Grid.Row>
        }
        {
          routeInfo.instruction &&
          <Grid.Row className="padding-0">
            <Grid.Column>
              <Accordion fluid>
                <Accordion.Title>
                  <Icon name="dropdown" />
                  <strong className="font-size-15">
                    Instruction
                  </strong>
                </Accordion.Title>
                <Accordion.Content>
                  <Step.Group vertical>
                    {
                      routeInfo.instruction.map(step =>
                        <Step key={step.id}>
                          <Icon
                            name={instructionIconTypes[step.type] || 'road'}
                            color={instructionIconColors[step.type] || 'blue'}
                          />
                          <Step.Title className="initial-width">
                            <span>
                              {step.title}
                            </span>
                          </Step.Title>
                          <Step.Description>
                            <span className="font-size-15">
                              {step.description}
                            </span>
                          </Step.Description>
                        </Step>,
                      )
                    }
                  </Step.Group>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        }
        {
          routeInfo.busStops &&
          <Grid.Row className="padding-0">
            <Grid.Column>
              <Accordion fluid>
                <Accordion.Title>
                  <Icon name="dropdown" />
                  <strong className="font-size-15">
                    Bus stops({routeInfo.busStops.length})
                  </strong>
                </Accordion.Title>
                <Accordion.Content>
                  <List divided relaxed animated celled size="medium">
                    {
                      routeInfo.busStops.map(busStop =>
                        <List.Item key={busStop.id} className="cursor-pointer">
                          <List.Icon link name="bus" color="green" size="big" />
                          <List.Content>
                            <List.Header>{busStop.title}</List.Header>
                            <List.Description>{busStop.description}</List.Description>
                          </List.Content>
                        </List.Item>,
                      )
                    }
                  </List>
                </Accordion.Content>
              </Accordion>
            </Grid.Column>
          </Grid.Row>
        }
      </Grid>
    </Modal.Content>
    <div className="actions">
      <Button
        positive
        size="large"
        onClick={clearRouteInfo}
      >
        Close
      </Button>
    </div>
  </Modal>
);

RouteInfo.propTypes = {
  routeInfo: PropTypes.shape().isRequired,
  clearRouteInfo: PropTypes.func.isRequired,
  saveToFavorites: PropTypes.func,
};

RouteInfo.defaultProps = {
  saveToFavorites: () => {},
};

export default RouteInfo;
