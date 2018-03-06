import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Placeholder from '../../components/Placeholder';
import DataNotFound from '../../components/DataNotFound';
import ErrorInfo from '../../components/ErrorInfo';
import ButtonBackToTop from '../../components/ButtonBackToTop';
import RecipeList from '../../components/RecipeList';
import ProgressIndicator from '../../components/ProgressIndicator';

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

    if (
      this.props.recipes.length === 0 &&
      this.props.favoritesList.length !== 0
    ) {
      return <div />;
    }

    if (this.props.recipes.length === 0) {
      return <Placeholder />;
    }

    if (_.last(this.props.recipes) === null) {
      return <DataNotFound />;
    }

    if (
      this.props.checkRecipesData === false &&
      this.props.isSearchStarted === true
    ) {
      return <ProgressIndicator />;
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
    isSearchStarted: state.isSearchStarted,
    recipes: state.recipes,
    error: state.error,
    showFavorites: state.showFavorites,
    loadRecipes: state.loadRecipes,
    favoritesList: state.favoritesList,
    checkRecipesData: state.checkRecipesData,
  };
}

export default connect(mapStateToProps, null)(Results);
