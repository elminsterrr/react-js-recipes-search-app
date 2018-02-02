import { LOADING_FAVORITES } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case LOADING_FAVORITES:
      return action.payload;
    default:
      return state;
  }
}
