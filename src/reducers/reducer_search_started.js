import { SEARCH_STARTED } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case SEARCH_STARTED:
      return action.payload;
    default:
      return state;
  }
}
