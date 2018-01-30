import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Placeholder from '../../components/Placeholder';
import DataNotFound from '../../components/DataNotFound';
import ErrorInfo from '../../components/ErrorInfo';
import ButtonBackToTop from '../../components/ButtonBackToTop';
import RecipeList from '../../components/RecipeList';

class Results extends Component {
  render() {
    if (this.props.error) {
      return <ErrorInfo />;
    }

    if (this.props.recipes.length === 0) {
      return <Placeholder />;
    }

    if (_.last(this.props.recipes) === null) {
      return <DataNotFound />;
    }

    return (
      <div>
        <RecipeList recipesReady={this.props.recipes} />
        <ButtonBackToTop />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
    error: state.error,
    showFavorites: state.showFavorites,
  };
}

export default connect(mapStateToProps, null)(Results);
