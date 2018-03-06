import { WAKE_HEROKU } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case WAKE_HEROKU:
      return action.payload;
    default:
      return state;
  }
}
