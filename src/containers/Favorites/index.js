import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './style.css';

import FavoritesListItem from '../../components/FavoritesListItem';
import FavButtons from '../FavButtons';

class Favorites extends Component {
  render() {
    let favoritesListGenerator;

    if (this.props.loadingFavorites) {
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

    if (!this.props.loadingFavorites) {
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
          <div className="row justify-content-xl-center">
            <hr />
            <h4 className="Favorites-h4">Your Favorites:</h4>
            <ul className="Favorites-ul col-xl-12">{favoritesListGenerator}</ul>
          </div>
          <FavButtons />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoritesList: state.favoritesList,
    loadingFavorites: state.loadingFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
