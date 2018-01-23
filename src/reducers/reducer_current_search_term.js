import { CURRENT_SEARCH_TERM } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case CURRENT_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
}
