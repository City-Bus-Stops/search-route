import React from 'react';
import { Segment, Container, Grid, Header, List } from 'semantic-ui-react';

const Footer = () => (
  <Segment vertical inverted className="footer">
    <Container>
      <Grid stackable celled="internally">
        <Grid.Column width={3}>
          <Header as="h4" inverted>
            About
          </Header>
          <List link inverted relaxed>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">React</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Contact Us</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Leaflet</a>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header as="h4" inverted>
            Services
          </Header>
          <List link inverted relaxed>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Sitemap</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Server side interface</a>
            <a href="http://semantic-ui.com/examples/homepage.html#" className="item">Schedule</a>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header as="h4" inverted>
            Services
          </Header>
          <p>Extra space for a call to action inside
            the footer that could help re-engage users.</p>
        </Grid.Column>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
