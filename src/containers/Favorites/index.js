import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import './style.css';

import FavoritesListItem from '../../components/FavoritesListItem';

class Favorites extends Component {
  render() {
    if (this.props.favoritesList.length === 0) {
      return (
        <p className="FavoritesListItem-text">
          There are no favorite recipes to show!
        </p>
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
