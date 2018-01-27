import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import FavoritesListItem from '../components/FavoritesListItem';

class Favorites extends Component {
  render() {
    if (this.props.favoritesList.length === 0) {
      return (
        <div className="no-fav">There are no favorite recipes to show!</div>
      );
    }
    const favoritesList = this.props.favoritesList.map(oneFav => {
      const keyOneFav = _.uniqueId('favorite_');
      return (
        <FavoritesListItem key={keyOneFav} title={oneFav[0]} link={oneFav[1]} />
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row justify-content-xl-center">
            <ul className="col-xl-12">{favoritesList}</ul>
          </div>
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

export default connect(mapStateToProps, null)(Favorites);
