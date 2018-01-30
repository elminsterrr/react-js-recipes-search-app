import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import './style.css';

import { launchLoadingFavorites } from '../../actions/';

import FavoritesListItem from '../../components/FavoritesListItem';
import FavButtons from '../FavButtons';

class Favorites extends Component {
  render() {
    let favoritesListGenerator;

    if (this.props.loadFavorites) {
      const loadedFavorites = JSON.parse(
        localStorage.getItem('lastSavedFavourites')
      );

      favoritesListGenerator = loadedFavorites.map(oneFav => {
        const keyFavList = _.uniqueId('favorite_');
        return (
          <FavoritesListItem
            key={keyFavList}
            title={oneFav[0]}
            link={oneFav[1]}
          />
        );
      });
    }

    if (!this.props.loadFavorites) {
      favoritesListGenerator = this.props.favoritesList.map(oneFav => {
        const keyFavList = _.uniqueId('favorite_');
        return (
          <FavoritesListItem
            key={keyFavList}
            title={oneFav[0]}
            link={oneFav[1]}
          />
        );
      });
    }

    return (
      <div>
        <div className="container">
          <FavButtons />
          <div className="row justify-content-xl-center">
            <ul className="col-xl-12">{favoritesListGenerator}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritesList: state.favoritesList,
    loadFavorites: state.loadFavorites,
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

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
