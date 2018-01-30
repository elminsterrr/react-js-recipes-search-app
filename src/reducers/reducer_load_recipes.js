import { LOAD_RECIPES } from '../actions';

export default function(state = [1], action) {
  switch (action.type) {
    case LOAD_RECIPES:
      return [...state, action.payload];
    default:
      return state;
  }
}
