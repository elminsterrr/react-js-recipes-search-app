import { FETCH_ERROR_TEST } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case FETCH_ERROR_TEST:
      if (action.payload) {
        return true;
      }
      return false;

    default:
      return state;
  }
}
