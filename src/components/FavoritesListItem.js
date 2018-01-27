import React from 'react';

const FavoritesListItem = props => (
  <li className="list-group-item">
    <a href={props.link} target="_blank">
      <span className="title">{props.title}</span>
    </a>
  </li>
);

export default FavoritesListItem;
