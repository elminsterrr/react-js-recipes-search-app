import { LOAD_FAVORITES } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case LOAD_FAVORITES:
      return action.payload;
    default:
      return state;
  }
}
