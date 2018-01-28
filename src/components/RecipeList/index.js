import React, { Component } from 'react';
import _ from 'lodash';

import RecipeListItem from '../../containers/RecipeListItem';

class RecipeList extends Component {
  render() {
    const recipesList = _.last(this.props.recipesReady).map(oneRecipe => {
      const key = _.uniqueId('recipe_');
      return (
        <RecipeListItem
          key={key}
          title={oneRecipe.recipe.label}
          link={oneRecipe.recipe.url}
          ingredients={oneRecipe.recipe.ingredients}
          thumbnail={oneRecipe.recipe.image}
        />
      );
    });
    return (
      <div className="container">
        <div className="row justify-content-xl-center">
          <ul className="col-xl-12">{recipesList}</ul>
        </div>
      </div>
    );
  }
}

export default RecipeList;
