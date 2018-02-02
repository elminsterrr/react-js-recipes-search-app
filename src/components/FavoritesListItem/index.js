import React from 'react';
import './style.css';

const FavoritesListItem = props => (
  <li className="FavoritesListItem-li list-group-item">
    <a href={props.link} target="_blank">
      <span className="FavoritesListItem-title">{props.title}</span>
    </a>
  </li>
);

export default FavoritesListItem;
