import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToFavorites } from '../actions/'

import Ingredients from './Ingredients'

class RecipeListItem extends Component {
  thumbnailCheck (link) {
    if (link.length === 0) {
      // Thumbnail placeholder
      link = 'https://res.cloudinary.com/dfe57evk4/image/upload/v1506802313/no_thumb_hxdh5h.png'
      return link
    } else {
      return link
    }
  }

  handleFavorites (fav) {
    this.props.addToFavorites(fav)
  }

  render () {
    const {
      title,
      link,
      ingredients,
      thumbnail
    } = this.props
    return (
      <li className="list-group-item">
        <img
          src={this.thumbnailCheck(thumbnail)}
          className="thumbnail"
          alt="thumbnail"
        />
        <a href={link} target="_blank"><span className="title-recipe-list-item">{title}</span></a>
        <button className="fav-button" onClick={() => this.handleFavorites([title, link])}>+ Add to Fav</button>
        <br />
        <a href={link} target="_blank"><span className="title-recipe-full">Full recipe link</span></a>
        <br />
        <span className="ingredients-title">Ingredients:</span>
        <Ingredients ingredients={ingredients} />
        <br />
      </li>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ addToFavorites }, dispatch)
}

export default connect(null, mapDispatchToProps)(RecipeListItem)
