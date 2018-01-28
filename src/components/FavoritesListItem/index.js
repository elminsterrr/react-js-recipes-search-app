import React from 'react';
import './style.css';

const FavoritesListItem = props => (
  <li className="list-group-item">
    <a href={props.link} target="_blank">
      <span className="FavoritesListItem-title">{props.title}</span>
    </a>
  </li>
);

export default FavoritesListItem;
