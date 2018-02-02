import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';

import { launchClearingFavorites } from '../../actions/';

class FavButtons extends Component {
  constructor() {
    super();
    this.state = {
      valueSave: false,
    };
  }

  componentDidUpdate() {
    if (this.props.favoritesList.length !== 0 && !this.state.valueSave) {
      this.setState({ valueSave: true });
    }
  }

  handleSaveFavorites() {
    localStorage.setItem(
      'lastSavedFavourites',
      JSON.stringify(this.props.favoritesList)
    );
  }

  handleClearFavorites() {
    if (localStorage.getItem('lastSavedFavourites')) {
      const emptyArr = [];
      this.props.launchClearingFavorites(emptyArr);
      localStorage.clear();
    }
  }

  render() {
    let nofavoritesGenerator = '';
    if (this.props.favoritesList.length === 0) {
      nofavoritesGenerator = 'Your favorites list is empty!';
    }

    return (
      <div className="FavButtons-text-align-center">
        <p className="FavButtons-text-p">{nofavoritesGenerator}</p>
        <div className="FavButtons-buttons-align-center">
          <button
            className="FavButtons-buttons btn btn-secondary"
            onClick={() => this.handleSaveFavorites()}
            disabled={!this.state.valueSave}
          >
            Save
          </button>
          <button
            className="FavButtons-buttons btn btn-secondary"
            onClick={() => this.handleClearFavorites()}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritesList: state.favoritesList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      launchClearingFavorites,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavButtons);
