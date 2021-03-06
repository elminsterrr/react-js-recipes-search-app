import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';

import Favorites from '../Favorites';

class ShowFavorites extends Component {
  handleShowFavorites() {
    if (this.props.revealFavorites) {
      return <Favorites />;
    }
    return <div />;
  }

  render() {
    return <div>{this.handleShowFavorites()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    revealFavorites: state.revealFavorites,
  };
}

export default connect(mapStateToProps, null)(ShowFavorites);
