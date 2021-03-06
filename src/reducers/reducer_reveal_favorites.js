import { REVEAL_FAVORITES } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case REVEAL_FAVORITES:
      return action.payload;
    default:
      return state;
  }
}
