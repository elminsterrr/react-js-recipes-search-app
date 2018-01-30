import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Placeholder from '../../components/Placeholder';
import DataNotFound from '../../components/DataNotFound';
import ErrorInfo from '../../components/ErrorInfo';
import ButtonBackToTop from '../../components/ButtonBackToTop';
import RecipeList from '../../components/RecipeList';

class Results extends Component {
  paginate(array, pageSize, pageNumber) {
    const startingPage = pageNumber - 1;
    return array.slice(startingPage * pageSize, (startingPage + 1) * pageSize);
  }

  getRecipesReady() {
    const lastFetchedRecipes = _.last(this.props.recipes);
    const pageNumber = _.last(this.props.loadRecipes);
    return this.paginate(lastFetchedRecipes, 10, pageNumber);
  }

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
        <RecipeList recipesReady={this.getRecipesReady()} />
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
    loadRecipes: state.loadRecipes,
  };
}

export default connect(mapStateToProps, null)(Results);
