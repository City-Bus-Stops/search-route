import React from 'react';
import { Accordion, Comment, Icon } from 'semantic-ui-react';

const pathToRouteIcon = './assets/route_icon.png';
const pathToBusStopIcon = './assets/bus_stop.png';
const pathToStartPointIcon = './assets/start_point.png';
const pathToEndtPointIcon = './assets/end_point.png';

const HistoryComponent = () => (
  <Accordion fluid>
    <Accordion.Title className="color-grey">
      History
      <Icon name="dropdown" />
    </Accordion.Title>
    <Accordion.Content>
      <Comment.Group threaded>
        <Comment>
          <Comment.Avatar src={pathToRouteIcon} />
          <Comment.Content>
            <Comment.Author as="a">Советская</Comment.Author>
            <Comment.Metadata>
              <span>Today at 5:42PM</span>
            </Comment.Metadata>
            <Comment.Text>Девятовка</Comment.Text>
            <Comment.Actions>
              <a>Watch on the map</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src={pathToStartPointIcon} />
          <Comment.Content>
            <Comment.Author as="a">Проспект Янки Купалы</Comment.Author>
            <Comment.Metadata>
              <span>Yesterday at 12:30AM</span>
            </Comment.Metadata>
            <Comment.Text>
              <p>150 meters from you</p>
            </Comment.Text>
            <Comment.Actions>
              <a>Watch on the map</a>
            </Comment.Actions>
          </Comment.Content>

          <Comment.Group>
            <Comment>
              <Comment.Avatar src={pathToBusStopIcon} />
              <Comment.Content>
                <Comment.Author as="a">Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <span>Just now</span>
                </Comment.Metadata>
                <Comment.Text>1200 meters from you</Comment.Text>
                <Comment.Actions>
                  <a>Watch on the map</a>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src={pathToEndtPointIcon} />
          <Comment.Content>
            <Comment.Author as="a">Дом Связи</Comment.Author>
            <Comment.Metadata>
              <span>Yesterday at 12:30AM</span>
            </Comment.Metadata>
            <Comment.Text>500 meters from you</Comment.Text>
            <Comment.Actions>
              <a>Watch on the map</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Accordion.Content>
  </Accordion>
);

export default HistoryComponent;
