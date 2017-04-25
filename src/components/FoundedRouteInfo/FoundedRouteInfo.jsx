import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Accordion, List, Grid, Step, Icon, Header, Label, Button } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

const instructionIconTypes = {
  start: 'user',
  foot: 'road',
  bus: 'bus',
  end: 'flag checkered',
};


const FoundedRouteInfo = ({ clearRouteInfo, routeInfo }) => (
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
            <div
              className="ui icon"
              data-tooltip="Watch bus schedule"
              data-delay="500"
              data-variation="small"
              data-position="top left"
            >
              <Icon size="large" name="bus" color="red" circular link /> 23
            </div>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <div
              className="ui icon"
              data-tooltip="Save to favorites"
              data-delay="500"
              data-variation="small"
              data-position="top left"
            >
              <Icon size="large" name="save" color="green" circular link />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Header>
    <Modal.Content>
      <Grid >
        <Grid.Row>
          <Grid.Column className="font-size-18">
            <strong>From:</strong> {routeInfo.from}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="font-size-18">
            <strong>To:</strong> {routeInfo.to}
          </Grid.Column>
        </Grid.Row>
        {
          routeInfo.nearestBuses &&
          <Grid.Row>
            <Grid.Column className="font-size-18">
              <strong>Nearest buses:</strong>
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
          <Grid.Row>
            <Grid.Column>
              <Accordion fluid>
                <Accordion.Title>
                  <Header as="h3">
                    <Icon name="dropdown" />
                    Instruction
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <Step.Group vertical fluid size="large">
                    {
                      routeInfo.instruction.map(step =>
                        <Step key={step.id}>
                          <Icon name={instructionIconTypes[step.type] || 'road'} />
                          <Step.Title>
                            <span className="color-danger">
                              {step.title}
                            </span>
                          </Step.Title>
                          <Step.Description>
                            <span className="font-size-18">
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
          <Grid.Row >
            <Grid.Column>
              <Accordion fluid>
                <Accordion.Title>
                  <Header as="h3">
                    <Icon name="dropdown" />
                    Bus stops({routeInfo.busStops.length})
                  </Header>
                </Accordion.Title>
                <Accordion.Content>
                  <List divided relaxed animated celled size="big">
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

FoundedRouteInfo.propTypes = {
  routeInfo: PropTypes.shape().isRequired,
  clearRouteInfo: PropTypes.func.isRequired,
};

export default FoundedRouteInfo;
