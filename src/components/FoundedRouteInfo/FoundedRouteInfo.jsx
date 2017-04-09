import React, { PropTypes } from 'react';
import { Modal, Accordion, List, Grid, Step, Icon, Header } from 'semantic-ui-react';

const FoundedRouteInfo = ({ isOpen }) => (
  <Modal
    open={isOpen}
    dimmer="blurring"
    closeOnEscape={false}
    closeOnRootNodeClick={false}
  >
    <Modal.Header as="h3" className="ui">
      <Grid columns={2} container>
        <Grid.Column>
          <Icon size="large" name="bus" color="red" circular link /> 23
        </Grid.Column>
        <Grid.Column textAlign="right">
          <div
            className="ui icon"
            data-tooltip="Save to favorites"
            data-delay="500"
            data-variation="small"
            data-position="right center"
          >
            <Icon size="large" name="save" color="green" circular link />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div
            className="ui icon"
            data-tooltip="Refresh"
            data-delay="500"
            data-variation="small"
            data-position="right center"
          >
            Response time: 15:18:23 a.m.
            <Icon name="repeat" color="blue" link />
          </div>
        </Grid.Column>
      </Grid>
    </Modal.Header>
    <Modal.Content>
      <Grid padded>
        <Step.Group vertical fluid ordered>
          <Step icon="user" title="From" description="Улица О.Соломовой 135" />
          <Step icon="road" title="6 min" description="Go to'Фолюш' bus stop." />
          <Step
            icon="bus"
            title="15 min"
            description="Go by bus for 15 minutes and get off at the 'Советская' bus stop."
          />
          <Step icon="road" title="7 min" description="Go to 'Универмаг'." />
          <Step icon="flag checkered" title="To" description="Улица Советская 18" />
        </Step.Group>
      </Grid>
      <Accordion fluid>
        <Accordion.Title>
          <Header as="h3" color="blue">
            <Icon name="dropdown icon" />
            Bus stops(7)
            </Header>
        </Accordion.Title>
        <Accordion.Content>
          <List divided relaxed animated celled size="big">
            <List.Item>
              <List.Content>
                <List.Header>Фолюш</List.Header>
                <List.Description>1 minutes</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Улица Лизы Чайкиной</List.Header>
                <List.Description>3 minutes</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Улица Декабристов</List.Header>
                <List.Description>6 minutes</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>Улица Поповича</List.Header>
                <List.Description>10 minutes</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Accordion.Content>
      </Accordion>
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
