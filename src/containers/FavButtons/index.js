import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';

import { launchLoadingFavorites } from '../../actions/';

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
    localStorage.clear();
  }

  handleConsoleLogLocalFavorites() {
    console.log(
      'with JSON.parse',
      JSON.parse(localStorage.getItem('lastSavedFavourites'))
    );
  }

  handleLoadFavorites() {
    if (localStorage.getItem('lastSavedFavourites')) {
      this.props.launchLoadingFavorites();
    }
  }

  render() {
    return (
      <div className="FavButtons-text-align-center">
        <h5>Your Favorite Recipes:</h5>
        <div className="FavButtons-buttons-align-center">
          <button
            className="FavButtons-buttons btn btn-secondary"
            onClick={() => this.handleLoadFavorites()}
          >
            Load
          </button>
          <button
            className="FavButtons-buttons btn btn-secondary"
            onClick={() => this.handleSaveFavorites()}
            disabled={!this.state.valueSave}
          >
            Save
          </button>
          <button
            className="FavButtons-buttons btn btn-secondary"
            onClick={() => this.handleConsoleLogLocalFavorites()}
          >
            --[DEV]--
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
      launchLoadingFavorites,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavButtons);
