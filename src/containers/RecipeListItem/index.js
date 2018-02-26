import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToFavorites } from '../../actions/';
import './style.css';

import Ingredients from '../../components/Ingredients';

class RecipeListItem extends Component {
  constructor() {
    super();
    this.state = {
      valueButton: false,
    };
  }

  thumbnailCheck(link) {
    if (link.length === 0) {
      // Thumbnail placeholder
      const newLink =
        'https://res.cloudinary.com/dfe57evk4/image/upload/v1506802313/no_thumb_hxdh5h.png';
      return newLink;
    }
    return link;
  }

  handleFavorites(fav) {
    this.setState({ valueButton: true });
    this.props.addToFavorites(fav);
  }

  render() {
    const { title, link, ingredients, thumbnail } = this.props;
    return (
      <li className="list-group-item">
        <img
          className="RecipeListItem-img"
          src={this.thumbnailCheck(thumbnail)}
          alt="thumbnail"
        />
        <a href={link} target="_blank">
          <span className="RecipeListItem-title">{title}</span>
        </a>
        <button
          disabled={this.state.valueButton}
          className="RecipeListItem-fav-button btn btn-secondary"
          onClick={() => this.handleFavorites([title, link])}
        >
          + Add to Fav
        </button>
        <br />
        <a href={link} target="_blank">
          <span className="RecipeListItem-full-link">Full recipe link</span>
        </a>
        <br />
        <span className="RecipeListItem-ingredients-header">Ingredients:</span>
        <Ingredients key={link} ingredients={ingredients} />
        <br />
      </li>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch);
}

export default connect(null, mapDispatchToProps)(RecipeListItem);
