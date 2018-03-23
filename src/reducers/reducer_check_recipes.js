import { CHECK_RECIPES_DATA, CHECK_RECIPES_FALSE } from '../actions';

export default function(state = false, action) {
  switch (action.type) {
    case CHECK_RECIPES_DATA:
      if (action.payload.hits.length === 0) {
        return false;
      }
      return true;
    case CHECK_RECIPES_FALSE:
      return action.payload;
    default:
      return state;
  }
}
