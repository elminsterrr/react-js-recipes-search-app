import React, { Component } from 'react';

import RecipeListItem from '../../containers/RecipeListItem';

class RecipeList extends Component {
  render() {
    const recipesList = this.props.recipesReady.map(oneRecipe => (
      <RecipeListItem
        key={oneRecipe.recipe.url}
        title={oneRecipe.recipe.label}
        link={oneRecipe.recipe.url}
        ingredients={oneRecipe.recipe.ingredients}
        thumbnail={oneRecipe.recipe.image}
      />
    ));
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
