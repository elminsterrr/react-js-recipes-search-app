import { ADD_TO_FAVORITES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return [...state, action.payload];
    default:
      return state;
  }
}
