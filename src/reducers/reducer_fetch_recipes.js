import { FETCH_RECIPES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_RECIPES:
      if (action.payload.hits.length === 0) {
        return [...state, null];
      }
      return [...state, action.payload.hits];

    default:
      return state;
  }
}
