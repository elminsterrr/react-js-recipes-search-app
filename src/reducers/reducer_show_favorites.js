import { SHOW_HIDE_FAVORITES } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case SHOW_HIDE_FAVORITES:
      if (state === false) {
        return true;
      }
      return false;

    default:
      return state;
  }
}
