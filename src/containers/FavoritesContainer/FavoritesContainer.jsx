import React, { Component } from 'react';
import { connect } from 'react-redux';

import Favorites from '../../components/Favorites/Favorites';

class FavoritesContainer extends Component {
  render() {
    return (
      <Favorites />
    );
  }
}

export default connect(null, null)(FavoritesContainer);
