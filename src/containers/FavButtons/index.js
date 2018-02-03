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
      valueClear: false,
    };
  }

  componentWillMount() {
    if (this.props.revealFavorites) {
      this.setState({ valueSave: true });
      this.setState({ valueClear: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.favoritesList.length !== 0) {
        this.setState({ valueSave: true });
        this.setState({ valueClear: true });
      }
    }
  }

  handleSaveFavorites() {
    localStorage.setItem(
      'lastSavedFavourites',
      JSON.stringify(this.props.favoritesList)
    );
  }

  handleClearFavorites() {
    const emptyArr = [];
    this.props.launchClearingFavorites(emptyArr);
    localStorage.clear();
    this.setState({ valueSave: false });
    this.setState({ valueClear: false });
  }

  render() {
    return (
      <div className="FavButtons-text-align-center">
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
            disabled={!this.state.valueClear}
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
    revealFavorites: state.revealFavorites,
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
