import React, { Component } from 'react';
import _ from 'lodash';

import IngredientsListItem from '../containers/IngredientsListItem';

class Ingredients extends Component {
  render() {
    const ingredientsList = this.props.ingredients.map(oneIngredient => {
      const keyIngredient = _.uniqueId('ingredient_');
      return (
        <IngredientsListItem
          key={keyIngredient}
          oneIngredient={oneIngredient.text}
        />
      );
    });
    return (
      <div className="container">
        <div className="row justify-content-xl-center">
          <ul className="col-xl-12">{ingredientsList}</ul>
        </div>
      </div>
    );
  }
}
export default Ingredients;
