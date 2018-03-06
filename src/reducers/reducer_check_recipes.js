import { CHECK_RECIPES_DATA } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case CHECK_RECIPES_DATA:
      if (action.payload.hits.length === 0) {
        return false;
      }
      return true;
    default:
      return state;
  }
}
