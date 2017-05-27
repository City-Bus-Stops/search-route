import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Icon, Table, Grid, Segment } from 'semantic-ui-react';

const UsersAdministrationTable = ({ users, deleteUser, changeUserStatus, addUser }) => (
  <Grid centered padded>
    <Grid.Row>
      <Grid.Column largeScreen={9} mobile={16} widescreen={9}>
        <Segment basic>
          <Grid centered>
            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>User Name</Table.HeaderCell>
                  <Table.HeaderCell>E-mail address</Table.HeaderCell>
                  <Table.HeaderCell>Last Login</Table.HeaderCell>
                  <Table.HeaderCell className="width-20">Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {
                users &&
                users.map(user =>
                  <Table.Row key={user.id}>
                    <Table.Cell>{user.userName}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.lastLogin}</Table.Cell>
                    <Table.Cell>
                      {user.isActive ? 'Active' : 'Disdabled'}
                      <Icon
                        className="float-right"
                        name="remove"
                        color="red"
                        link
                        size="large"
                        onClick={() => deleteUser(user.id)}
                      />
                      <Checkbox
                        toggle
                        className="float-right"
                        checked={user.isActive}
                        onClick={() => changeUserStatus(user.id, user.isActive)}
                      />
                    </Table.Cell>
                  </Table.Row>,
                )
              }
              </Table.Body>

              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan="4">
                    <Button
                      floated="right"
                      icon
                      positive
                      onClick={addUser}
                    >
                     Add User
                    </Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

UsersAdministrationTable.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  deleteUser: PropTypes.func.isRequired,
  changeUserStatus: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default UsersAdministrationTable;
