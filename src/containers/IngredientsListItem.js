import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectIngredient } from '../actions';

class IngredientsListItem extends Component {
  handleIngredientSelect(oneIngredient) {
    window.scrollTo(0, 0);
    this.props.selectIngredient(oneIngredient);
  }

  render() {
    const { oneIngredient } = this.props;
    return (
      <li
        onClick={() => this.handleIngredientSelect(oneIngredient)}
        className="one-ingredient"
      >
        {oneIngredient}
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectIngredient,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(IngredientsListItem);
