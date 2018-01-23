import { WAKE_HEROKU } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case WAKE_HEROKU:
      return true;
    default:
      return state;
  }
}
